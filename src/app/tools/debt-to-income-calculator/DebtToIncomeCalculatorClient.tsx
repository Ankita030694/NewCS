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
  Home,
  CreditCard,
  PieChart,
  Scale,
  ShieldAlert,
  Percent,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  DollarSign,
  ArrowUpRight,
} from 'lucide-react';
import {
  calculateDti,
  formatINR,
  formatPercentage,
  getDtiRiskBand,
  DEBT_CATEGORY_PALETTE,
  type DebtCategory,
  type DebtItemInput,
  type DtiCalculationInput,
  type DtiResult,
} from '@/lib/tools/calculators/debtToIncomeCalculator';

interface ClientDebtRow {
  id: string;
  name: string;
  category: DebtCategory;
  monthlyPayment: string; // Controlled input
}

const DEFAULT_DEBT_ROWS: ClientDebtRow[] = [
  {
    id: 'debt_sample_1',
    name: 'Personal Loan EMI',
    category: 'Personal Loan',
    monthlyPayment: '8500',
  },
  {
    id: 'debt_sample_2',
    name: 'Credit Card Minimum Due',
    category: 'Credit Card',
    monthlyPayment: '3500',
  },
  {
    id: 'debt_sample_3',
    name: 'Two-Wheeler / Auto EMI',
    category: 'Auto Loan',
    monthlyPayment: '3000',
  },
];

const DEBT_CATEGORIES: DebtCategory[] = [
  'Housing',
  'Personal Loan',
  'Credit Card',
  'Auto Loan',
  'Education Loan',
  'Gold Loan',
  'Consumer Durable',
  'Business Loan',
  'Other Debt',
];

export default function DebtToIncomeCalculatorClient() {
  const incomeInputId = useId();
  const housingInputId = useId();
  const lumpSumInputId = useId();

  // User input states
  const [grossMonthlyIncome, setGrossMonthlyIncome] = useState<number>(50000);
  const [inputMode, setInputMode] = useState<'itemized' | 'lumpSum'>('itemized');
  const [monthlyHousingPayment, setMonthlyHousingPayment] = useState<number>(0);
  const [includeHousingInCalculation, setIncludeHousingInCalculation] = useState<boolean>(true);
  const [debts, setDebts] = useState<ClientDebtRow[]>(DEFAULT_DEBT_ROWS);
  const [totalMonthlyNonHousingDebt, setTotalMonthlyNonHousingDebt] = useState<number>(15000);

  // Result & UI states
  const [result, setResult] = useState<DtiResult | null>(null);
  const [calculationId, setCalculationId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Convert client debts to sanitized input array
  const sanitizeItemizedDebts = useCallback((rows: ClientDebtRow[]): DebtItemInput[] => {
    return rows.map((r, idx) => ({
      id: r.id || `debt_${idx + 1}`,
      name: r.name.trim() || `Debt #${idx + 1}`,
      category: r.category,
      monthlyPayment: Math.max(0, Number(r.monthlyPayment) || 0),
    }));
  }, []);

  // Compute DTI calculation
  const executeCalculation = useCallback(
    async (
      income: number,
      mode: 'itemized' | 'lumpSum',
      housing: number,
      includeHousing: boolean,
      itemRows: ClientDebtRow[],
      lumpSum: number
    ) => {
      // Validate
      if (income <= 0) {
        setValidationError('Gross monthly income must be greater than zero (INR).');
        return;
      }
      if (housing < 0) {
        setValidationError('Monthly housing payment cannot be negative.');
        return;
      }

      setValidationError(null);

      const sanitizedItems = sanitizeItemizedDebts(itemRows);

      const payload: DtiCalculationInput = {
        grossMonthlyIncome: income,
        inputMode: mode,
        monthlyHousingPayment: housing,
        includeHousingInCalculation: includeHousing,
        debts: sanitizedItems,
        totalMonthlyNonHousingDebt: lumpSum,
      };

      // 1. Instant client-side computation for immediate UI responsiveness
      const localResult = calculateDti(payload);
      setResult(localResult);

      // 2. Async backend validation & audit session tracking
      setLoading(true);
      try {
        const res = await fetch('/api/tools/debt-to-income-calculator', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();
        if (res.ok && data.success && data.data) {
          setResult(data.data);
          if (data.calculationId) {
            setCalculationId(data.calculationId);
          }
        }
      } catch (err) {
        console.warn('Backend sync failed, using client calculation result:', err);
      } finally {
        setLoading(false);
      }
    },
    [sanitizeItemizedDebts]
  );

  // Add a new debt row in itemized mode
  const handleAddDebtRow = () => {
    const newId = `debt_${Date.now()}`;
    const updated: ClientDebtRow[] = [
      ...debts,
      {
        id: newId,
        name: `Loan Obligation #${debts.length + 1}`,
        category: 'Personal Loan',
        monthlyPayment: '5000',
      },
    ];
    setDebts(updated);
  };

  // Remove a debt row
  const handleRemoveDebtRow = (id: string) => {
    if (debts.length <= 1) {
      // Clear values rather than removing the last row
      const cleared: ClientDebtRow[] = [
        {
          id: debts[0].id,
          name: 'Loan Obligation',
          category: 'Personal Loan',
          monthlyPayment: '0',
        },
      ];
      setDebts(cleared);
      return;
    }
    const filtered = debts.filter((d) => d.id !== id);
    setDebts(filtered);
  };

  // Update specific field in debt row
  const handleUpdateDebtRow = (
    id: string,
    field: 'name' | 'category' | 'monthlyPayment',
    value: string
  ) => {
    const updated = debts.map((d) => {
      if (d.id !== id) return d;
      return { ...d, [field]: value };
    });
    setDebts(updated);
  };

  // Mode change handler with bidirectional synchronization
  const handleModeChange = (newMode: 'itemized' | 'lumpSum') => {
    setInputMode(newMode);
    if (newMode === 'lumpSum') {
      // Sync total of itemized debts to lumpSum
      const sum = debts.reduce((acc, d) => acc + (Number(d.monthlyPayment) || 0), 0);
      setTotalMonthlyNonHousingDebt(sum);
    }
  };

  // Reset to default baseline test case
  const handleReset = () => {
    setGrossMonthlyIncome(50000);
    setInputMode('itemized');
    setMonthlyHousingPayment(0);
    setIncludeHousingInCalculation(true);
    setDebts(DEFAULT_DEBT_ROWS);
    setTotalMonthlyNonHousingDebt(15000);
    setValidationError(null);
    setResult(null);
  };

  // Copy plain-text summary to clipboard
  const handleCopySummary = () => {
    if (!result) return;
    const summaryText = `CredSettle Debt-to-Income (DTI) Ratio Analysis:
- Gross Monthly Income: ${result.formatted.grossMonthlyIncome}
- Monthly Housing Payment: ${result.formatted.monthlyHousingPayment} (${result.includeHousingInCalculation ? 'Included in DTI' : 'Excluded'})
- Non-Housing Debt Total: ${result.formatted.totalMonthlyNonHousingDebt}
- Combined Monthly Debt Obligations: ${result.formatted.totalMonthlyDebtPayments}
---------------------------------------------
- Total Back-End DTI: ${result.formatted.dtiPercentage}
- Front-End Housing DTI: ${result.formatted.frontEndDtiPercentage}
- Risk Assessment: ${result.riskBand.label} (${result.riskBand.badgeText})
- Monthly Cash Cushion (Pre-tax remainder): ${result.formatted.estimatedMonthlyRemainder}
---------------------------------------------
Notice: Illustrative scenario based on Indian banking FOIR standards. Lender underwriting criteria vary and no DTI percentage guarantees loan approval or rejection.
Calculate yours free at: https://www.credsettle.com/tools/debt-to-income-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handlePrint = () => {
    window.print();
  };

  // Calculate sum of itemized debts for real-time display
  const itemizedDebtsTotal = useMemo(() => {
    return debts.reduce((acc, d) => acc + (Number(d.monthlyPayment) || 0), 0);
  }, [debts]);

  // Frequently Asked Questions
  const faqs = [
    {
      q: 'What is a Debt-to-Income (DTI) ratio and how is it used in India?',
      a: 'A Debt-to-Income (DTI) ratio expresses your total monthly debt payments as a percentage of your gross pre-tax monthly income. In Indian banking, lenders refer to this as the Fixed Obligation to Income Ratio (FOIR). Banks and NBFCs use it to calculate how much surplus income you have available to service a new loan before approving personal loans, credit cards, or home loans.',
    },
    {
      q: 'What is the ideal DTI ratio for getting a loan approved in India?',
      a: 'Most Indian public and private sector banks (such as SBI, HDFC, and ICICI) prefer a DTI / FOIR below 40% to 50%. Borrowers with a DTI under 36% generally receive the smoothest approvals and competitive interest rates, provided their CIBIL score is 750 or higher. For high-income salaried individuals or secured home loans, some lenders may extend FOIR tolerance up to 60-65%.',
    },
    {
      q: 'What is the difference between Front-End DTI and Back-End DTI?',
      a: 'Front-End DTI represents the percentage of gross monthly income spent strictly on housing expenses (Home Loan EMI or Rent). Back-End DTI (standard FOIR) includes all monthly debt payments combined: housing, car loans, personal loans, education loans, and credit card minimum payments. Most Indian lenders base their loan approvals on Back-End DTI.',
    },
    {
      q: 'Why should I enter Gross Income instead of Take-Home (Net) Salary?',
      a: 'Standard banking underwriting benchmarks are calibrated against gross income (total salary before income tax, provident fund deductions, and professional taxes). If you enter your net take-home salary, your resulting DTI will look artificially high and will not match the criteria lenders evaluate during initial assessment.',
    },
    {
      q: 'How can I quickly reduce my DTI ratio?',
      a: 'You can lower your DTI by paying off high-interest revolving balances (such as credit cards), consolidating multiple scattered EMIs into a single lower-interest loan with an extended tenure, or negotiating a bilateral loan compromise settlement if you are in financial hardship.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* 1. HERO SECTION */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-semibold text-[#007AFF] mb-4">
            <Scale className="w-3.5 h-3.5" />
            Financial Planning & Underwriting Tool
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Debt-to-Income (DTI) Ratio Calculator
          </h1>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            Measure what percentage of your pre-tax monthly income goes toward recurring debt obligations. Understand how Indian banks evaluate your borrowing capacity using <strong>Fixed Obligation to Income Ratio (FOIR)</strong> benchmarks.
          </p>
          <div className="mt-4 flex flex-wrap gap-4 text-xs sm:text-sm text-slate-500">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Free & Private (Client-Side)
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-600" />
              Indian Banking FOIR Standards
            </span>
            <span className="flex items-center gap-1.5">
              <Info className="w-4 h-4 text-amber-600" />
              No Bureau Check / No Score Impact
            </span>
          </div>
        </div>
      </section>

      {/* 2. MAIN INTERACTIVE CALCULATOR GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: INPUT CONTROLS (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Calculator className="w-5 h-5 text-[#007AFF]" />
                Income & Debt Obligations
              </h2>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 flex items-center gap-1 transition-colors px-2 py-1 rounded hover:bg-slate-100"
                title="Reset all inputs to default values"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reset
              </button>
            </div>

            {/* Validation Error Banner */}
            {validationError && (
              <div
                role="alert"
                className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-xs sm:text-sm text-rose-700 flex items-start gap-2.5"
              >
                <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Calculation Error</p>
                  <p>{validationError}</p>
                </div>
              </div>
            )}

            {/* Field 1: Gross Monthly Income */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={incomeInputId}
                  className="text-sm font-bold text-slate-900 flex items-center gap-1.5"
                >
                  Gross Monthly Income (Before Tax)
                  <span className="text-rose-500 font-normal">*</span>
                </label>
                <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                  INR (₹) / month
                </span>
              </div>

              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                  ₹
                </span>
                <input
                  id={incomeInputId}
                  type="number"
                  min="1"
                  step="1000"
                  value={grossMonthlyIncome || ''}
                  onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))}
                  className="w-full pl-8 pr-4 py-2.5 bg-slate-50/50 border border-slate-300 rounded-xl text-base font-semibold text-slate-900 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all"
                  placeholder="e.g. 50000"
                />
              </div>

              {/* Slider for smooth manipulation */}
              <div className="pt-1">
                <input
                  type="range"
                  min="10000"
                  max="500000"
                  step="5000"
                  value={Math.min(500000, Math.max(10000, grossMonthlyIncome))}
                  onChange={(e) => setGrossMonthlyIncome(Number(e.target.value))}
                  aria-label="Gross Monthly Income Slider"
                  className="w-full accent-[#007AFF] cursor-pointer"
                />
              </div>

              {/* Quick Presets */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs text-slate-400">Presets:</span>
                {[30000, 50000, 75000, 100000, 200000].map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    onClick={() => setGrossMonthlyIncome(preset)}
                    className={`text-xs px-2.5 py-1 rounded-lg font-medium transition-all ${grossMonthlyIncome === preset
                        ? 'bg-[#007AFF] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                      }`}
                  >
                    {formatINR(preset)}
                  </button>
                ))}
              </div>

              <div className="bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 text-xs text-amber-900 flex items-start gap-2">
                <Info className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                <p>
                  <strong>Important:</strong> Enter your total <strong>pre-tax gross earnings</strong>. Do not enter take-home (net) salary. Comparing net pay against standard banking benchmarks will artificially distort your DTI ratio.
                </p>
              </div>
            </div>

            {/* Field 2: Housing Payment Section */}
            <div className="bg-slate-50/70 border border-slate-200/80 rounded-xl p-4 sm:p-5 space-y-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor={housingInputId}
                  className="text-sm font-bold text-slate-900 flex items-center gap-2"
                >
                  <Home className="w-4 h-4 text-[#007AFF]" />
                  Monthly Housing Payment (Rent or Home Loan EMI)
                </label>
                <span className="text-xs text-slate-500">Optional</span>
              </div>

              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                  ₹
                </span>
                <input
                  id={housingInputId}
                  type="number"
                  min="0"
                  step="500"
                  value={monthlyHousingPayment || ''}
                  onChange={(e) => setMonthlyHousingPayment(Math.max(0, Number(e.target.value) || 0))}
                  className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-base font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#007AFF] focus:border-transparent transition-all"
                  placeholder="0 (Enter 0 if living with family / no rent)"
                />
              </div>

              {/* Housing Inclusion Toggle */}
              <div className="flex items-start gap-3 pt-1">
                <input
                  id="include_housing_toggle"
                  type="checkbox"
                  checked={includeHousingInCalculation}
                  onChange={(e) => setIncludeHousingInCalculation(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-[#007AFF] focus:ring-[#007AFF] cursor-pointer"
                />
                <label
                  htmlFor="include_housing_toggle"
                  className="text-xs sm:text-sm text-slate-700 leading-snug cursor-pointer select-none"
                >
                  <strong>Include Housing Payment in Total DTI (Recommended)</strong>
                  <span className="block text-xs text-slate-500 mt-0.5">
                    Indian lenders evaluate Back-End DTI (FOIR), which treats rent and home loan EMIs as fixed recurring commitments. Uncheck only if you want to inspect non-housing consumer debt alone.
                  </span>
                </label>
              </div>
            </div>

            {/* Field 3: Non-Housing Debts Input Mode Selector */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                  <CreditCard className="w-4 h-4 text-emerald-600" />
                  Monthly Recurring Debt Payments
                </span>

                {/* Tab selector */}
                <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-200 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => handleModeChange('itemized')}
                    className={`px-3 py-1 rounded-md transition-all ${inputMode === 'itemized'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    Itemized Rows ({debts.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => handleModeChange('lumpSum')}
                    className={`px-3 py-1 rounded-md transition-all ${inputMode === 'lumpSum'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    Single Total
                  </button>
                </div>
              </div>

              {/* MODE A: ITEMIZED ROWS */}
              {inputMode === 'itemized' ? (
                <div className="space-y-3">
                  <div className="space-y-2.5">
                    {debts.map((debt, index) => (
                      <div
                        key={debt.id}
                        className="p-3 sm:p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl space-y-2.5 transition-all hover:border-slate-300"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-xs font-bold text-slate-500">
                            Debt #{index + 1}
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveDebtRow(debt.id)}
                            className="text-xs text-rose-500 hover:text-rose-700 flex items-center gap-1 px-1.5 py-0.5 rounded hover:bg-rose-50 transition-colors"
                            title="Remove debt obligation"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                            Remove
                          </button>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                          {/* Name */}
                          <div className="sm:col-span-5">
                            <input
                              type="text"
                              value={debt.name}
                              onChange={(e) =>
                                handleUpdateDebtRow(debt.id, 'name', e.target.value)
                              }
                              placeholder="Loan label (e.g. HDFC Personal)"
                              className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                            />
                          </div>

                          {/* Category */}
                          <div className="sm:col-span-4">
                            <select
                              value={debt.category}
                              onChange={(e) =>
                                handleUpdateDebtRow(
                                  debt.id,
                                  'category',
                                  e.target.value as DebtCategory
                                )
                              }
                              className="w-full px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                            >
                              {DEBT_CATEGORIES.filter((c) => c !== 'Housing').map((cat) => (
                                <option key={cat} value={cat}>
                                  {cat}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Monthly EMI */}
                          <div className="sm:col-span-3 relative">
                            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-semibold">
                              ₹
                            </span>
                            <input
                              type="number"
                              min="0"
                              step="100"
                              value={debt.monthlyPayment}
                              onChange={(e) =>
                                handleUpdateDebtRow(debt.id, 'monthlyPayment', e.target.value)
                              }
                              placeholder="EMI / Mo"
                              className="w-full pl-6 pr-2 py-1.5 bg-white border border-slate-300 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <button
                      type="button"
                      onClick={handleAddDebtRow}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007AFF] hover:text-blue-700 bg-blue-50/80 hover:bg-blue-100/80 px-3 py-2 rounded-xl transition-all"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      Add Another Loan / EMI Row
                    </button>
                    <span className="text-xs font-semibold text-slate-600">
                      Non-Housing Subtotal: <strong>{formatINR(itemizedDebtsTotal)}</strong>
                    </span>
                  </div>
                </div>
              ) : (
                /* MODE B: LUMP SUM TOTAL */
                <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-3">
                  <label
                    htmlFor={lumpSumInputId}
                    className="text-xs sm:text-sm font-bold text-slate-800 block"
                  >
                    Total Monthly Payments for All Non-Housing Debts
                  </label>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-semibold text-base">
                      ₹
                    </span>
                    <input
                      id={lumpSumInputId}
                      type="number"
                      min="0"
                      step="500"
                      value={totalMonthlyNonHousingDebt || ''}
                      onChange={(e) => {
                        const val = Math.max(0, Number(e.target.value) || 0);
                        setTotalMonthlyNonHousingDebt(val);
                      }}
                      className="w-full pl-8 pr-4 py-2.5 bg-white border border-slate-300 rounded-xl text-base font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#007AFF]"
                      placeholder="e.g. 15000"
                    />
                  </div>
                  <p className="text-xs text-slate-500">
                    Include all personal loan EMIs, credit card minimum due amounts, two-wheeler/car loan EMIs, and consumer durable financing payments.
                  </p>
                </div>
              )}
            </div>

            {/* Calculate Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() =>
                  executeCalculation(
                    grossMonthlyIncome,
                    inputMode,
                    monthlyHousingPayment,
                    includeHousingInCalculation,
                    debts,
                    totalMonthlyNonHousingDebt
                  )
                }
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Calculating DTI Ratio...</span>
                  </>
                ) : (
                  <>
                    <Calculator className="w-4 h-4" />
                    <span>{result ? 'Recalculate DTI Ratio' : 'Calculate DTI Ratio'}</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: RESULTS PANEL (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {result ? (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-7 shadow-sm space-y-6">
              {/* Header with Share/Print actions */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  DTI Assessment Output
                </span>
                <div className="flex items-center gap-2 print:hidden">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                    title="Copy calculation summary"
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
                    className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
                    title="Print analysis"
                  >
                    <Printer className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Headline DTI Display Card */}
              <div
                className="rounded-2xl p-5 text-center space-y-2 border transition-all"
                style={{
                  backgroundColor: result.riskBand.badgeBgHex,
                  borderColor: `${result.riskBand.colorHex}40`,
                }}
              >
                <span
                  className="inline-block text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    backgroundColor: 'white',
                    color: result.riskBand.badgeTextHex,
                  }}
                >
                  {result.riskBand.badgeText}
                </span>

                <div className="py-2">
                  <div className="text-4xl sm:text-5xl font-black tracking-tight" style={{ color: result.riskBand.badgeTextHex }}>
                    {result.formatted.dtiPercentage}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                    Debt-to-Income (DTI / FOIR)
                  </div>
                </div>

                <p className="text-xs text-slate-700 leading-relaxed max-w-xs mx-auto">
                  {result.riskBand.shortDescription}
                </p>
              </div>

              {/* Visual 4-Segment Risk Gauge / Meter */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-semibold text-slate-500">
                  <span>DTI Risk Meter</span>
                  <span style={{ color: result.riskBand.colorHex }}>
                    {result.riskBand.label}
                  </span>
                </div>

                {/* Progress bar with 4 standard Indian bank segments */}
                <div className="relative pt-3 pb-1">
                  {/* Indicator pin pointing to current DTI */}
                  <div
                    className="absolute top-0 -translate-x-1/2 transition-all duration-300 flex flex-col items-center pointer-events-none"
                    style={{
                      left: `${Math.min(100, Math.max(0, (result.dtiPercentage / 75) * 100))}%`,
                    }}
                  >
                    <div
                      className="w-2.5 h-2.5 rotate-45"
                      style={{ backgroundColor: result.riskBand.colorHex }}
                    />
                  </div>

                  <div className="h-3 w-full rounded-full overflow-hidden flex bg-slate-100">
                    {/* Band 1: 0 to 36% (approx 48% of 75% scale) */}
                    <div
                      className="bg-emerald-500 h-full border-r border-white/40"
                      style={{ width: `${(36 / 75) * 100}%` }}
                      title="Healthy (<36%)"
                    />
                    {/* Band 2: 36 to 43% (approx 9.3% of 75% scale) */}
                    <div
                      className="bg-blue-500 h-full border-r border-white/40"
                      style={{ width: `${(7 / 75) * 100}%` }}
                      title="Moderate (36% - 43%)"
                    />
                    {/* Band 3: 43 to 50% (approx 9.3% of 75% scale) */}
                    <div
                      className="bg-amber-500 h-full border-r border-white/40"
                      style={{ width: `${(7 / 75) * 100}%` }}
                      title="Stretched (44% - 50%)"
                    />
                    {/* Band 4: > 50% (remainder) */}
                    <div
                      className="bg-rose-500 h-full"
                      style={{ width: `${(25 / 75) * 100}%` }}
                      title="Critical (>50%)"
                    />
                  </div>
                </div>

                <div className="flex justify-between text-[11px] text-slate-400 font-medium">
                  <span>0% (Free)</span>
                  <span>36% (Prime)</span>
                  <span>50% (FOIR Cap)</span>
                  <span>75%+</span>
                </div>
              </div>

              {/* Core Output Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3 bg-slate-50 border border-slate-200/70 rounded-xl">
                  <span className="text-[11px] text-slate-500 block font-medium">
                    Total Monthly Debt
                  </span>
                  <span className="text-base font-bold text-slate-900 block mt-0.5">
                    {result.formatted.totalMonthlyDebtPayments}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    {result.includeHousingInCalculation ? 'Includes Housing' : 'Excludes Housing'}
                  </span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/70 rounded-xl">
                  <span className="text-[11px] text-slate-500 block font-medium">
                    Pre-Tax Gross Income
                  </span>
                  <span className="text-base font-bold text-slate-900 block mt-0.5">
                    {result.formatted.grossMonthlyIncome}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Evaluated base
                  </span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/70 rounded-xl">
                  <span className="text-[11px] text-slate-500 block font-medium">
                    Housing DTI (Front-End)
                  </span>
                  <span className="text-base font-bold text-slate-900 block mt-0.5">
                    {result.formatted.frontEndDtiPercentage}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Home EMI / Rent share
                  </span>
                </div>

                <div className="p-3 bg-slate-50 border border-slate-200/70 rounded-xl">
                  <span className="text-[11px] text-slate-500 block font-medium">
                    Estimated Remainder
                  </span>
                  <span className="text-base font-bold text-emerald-700 block mt-0.5">
                    {result.formatted.estimatedMonthlyRemainder}
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Pre-tax surplus
                  </span>
                </div>
              </div>

              {/* Indian Banking Underwriting Context & Guidance */}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/80 space-y-2 text-xs text-slate-700">
                <div className="font-bold text-slate-900 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#007AFF]" />
                  Indian Banking Context (FOIR)
                </div>
                <p className="leading-relaxed">{result.riskBand.bankingContext}</p>
                <div className="pt-1 border-t border-slate-200/60 font-medium text-slate-800">
                  <strong>Recommended Step:</strong> {result.riskBand.recommendedAction}
                </div>
              </div>

              {/* Mandatory Caveat & Disclaimers */}
              <div className="bg-amber-50/60 rounded-xl p-3.5 border border-amber-200/50 space-y-1.5 text-xs text-amber-900">
                <div className="font-bold flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                  Regulatory Underwriting Notice
                </div>
                <p className="leading-relaxed text-[11px]">
                  <strong>No DTI percentage guarantees loan approval or rejection.</strong> Lenders in India set customized criteria based on CIBIL scores (750+), employer profile (Category A/B), liquid collateral, and account vintage.
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl border border-slate-200/80 p-12 text-center shadow-xs">
              <div className="w-12 h-12 rounded-full bg-blue-50 text-[#007AFF] flex items-center justify-center mx-auto mb-3">
                <Calculator className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Awaiting Calculation</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Enter your gross monthly income and debt obligations on the left, then click &ldquo;Calculate DTI Ratio&rdquo; to evaluate your financial profile.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* 3. BREAKDOWN TABLE OF ENTERED PAYMENTS */}
      {result && result.breakdown.length > 0 && (
        <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-4">
            <div>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-[#007AFF]" />
                Breakdown of Monthly Obligations
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                Detailed view showing how each debt commitment consumes your monthly income.
              </p>
            </div>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-3 py-1 rounded-full self-start sm:self-auto">
              {result.breakdown.length} Obligation{result.breakdown.length > 1 ? 's' : ''} Analyzed
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500 font-semibold text-[11px] uppercase tracking-wider bg-slate-50/50">
                  <th className="py-3 px-3">Obligation</th>
                  <th className="py-3 px-3">Category</th>
                  <th className="py-3 px-3 text-right">Monthly EMI (₹)</th>
                  <th className="py-3 px-3 text-right">% of Total Debt</th>
                  <th className="py-3 px-3 text-right">% of Gross Income</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {result.breakdown.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50/60 transition-colors">
                    <td className="py-3 px-3 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                          style={{ backgroundColor: item.colorHex }}
                        />
                        {item.name}
                      </div>
                    </td>
                    <td className="py-3 px-3 text-slate-600">
                      <span className="px-2 py-0.5 rounded-md bg-slate-100 text-[11px] font-medium">
                        {item.category}
                      </span>
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-slate-900">
                      {item.formatted.monthlyPayment}
                    </td>
                    <td className="py-3 px-3 text-right font-medium text-slate-700">
                      {item.formatted.shareOfTotalDebtPercent}
                    </td>
                    <td className="py-3 px-3 text-right font-bold text-[#007AFF]">
                      {item.formatted.shareOfGrossIncomePercent}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-slate-200 font-bold bg-slate-50/80">
                  <td className="py-3 px-3 text-slate-900" colSpan={2}>
                    Combined Evaluated Obligations
                  </td>
                  <td className="py-3 px-3 text-right text-slate-900">
                    {result.formatted.totalMonthlyDebtPayments}
                  </td>
                  <td className="py-3 px-3 text-right text-slate-900">
                    100.0%
                  </td>
                  <td className="py-3 px-3 text-right text-[#007AFF]">
                    {result.formatted.dtiPercentage}
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>
      )}

      {/* 4. EDUCATIONAL GUIDANCE: UNDERSTANDING FRONT-END VS BACK-END DTI */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-6">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
          <Info className="w-5 h-5 text-[#007AFF]" />
          Understanding DTI and Indian FOIR Guidelines
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Home className="w-4 h-4 text-[#007AFF]" />
              Front-End DTI (Housing Ratio)
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Calculates the share of pre-tax gross income used strictly for housing (Home Loan EMI or monthly house rent).
            </p>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-800">
              Front-End DTI = (Housing Costs / Gross Income) × 100
            </div>
            <p className="text-xs text-slate-500">
              <strong>Indian Benchmark:</strong> Most lenders prefer this to stay below <strong>28% to 30%</strong> so borrowers are not house-poor.
            </p>
          </div>

          <div className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
              <Scale className="w-4 h-4 text-emerald-600" />
              Back-End DTI (Fixed Obligation to Income Ratio - FOIR)
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Considers ALL recurring monthly debt obligations combined: home loan EMIs, credit cards, auto loans, personal loans, and consumer EMIs.
            </p>
            <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs font-mono text-slate-800">
              Back-End DTI = (Total Debt Payments / Gross Income) × 100
            </div>
            <p className="text-xs text-slate-500">
              <strong>Indian Benchmark:</strong> Standard banking cap is <strong>40% to 50%</strong>. Exceeding 50% usually leads to loan rejection or high interest penalties.
            </p>
          </div>
        </div>

        {/* Assumptions & Disclaimers */}
        <div className="border-t border-slate-100 pt-5 space-y-2">
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Calculation Assumptions & Boundary Rules
          </h3>
          <ul className="list-disc list-inside text-xs text-slate-600 space-y-1">
            {result?.assumptions.map((assump, idx) => (
              <li key={idx} className="leading-relaxed">
                {assump}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. RELATED TOOLS CARDS */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-5 print:hidden">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-amber-500" />
            Complementary Debt & Loan Tools
          </h2>
          <Link
            href="/tools"
            className="text-xs font-bold text-[#007AFF] hover:underline flex items-center gap-1"
          >
            View All Tools
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Link
            href="/tools/multiple-loan-calculator"
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group bg-slate-50/40"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#007AFF]">
              <Layers className="w-4 h-4 text-[#007AFF]" />
              Multiple Loan Calculator
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Consolidate multiple loans and credit cards into a single portfolio with weighted average interest.
            </p>
          </Link>

          <Link
            href="/tools/emi-calculator"
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group bg-slate-50/40"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#007AFF]">
              <Percent className="w-4 h-4 text-emerald-600" />
              Loan EMI Calculator
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Calculate exact monthly installments, interest splits, and full amortization schedules.
            </p>
          </Link>

          <Link
            href="/tools/loan-settlement-calculator"
            className="p-4 rounded-xl border border-slate-200 hover:border-blue-400 hover:shadow-sm transition-all group bg-slate-50/40"
          >
            <div className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-[#007AFF]">
              <TrendingDown className="w-4 h-4 text-rose-500" />
              Loan Settlement Calculator
            </div>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">
              Simulate hypothetical one-time compromise settlement payouts under RBI guidelines.
            </p>
          </Link>
        </div>
      </section>

      {/* 6. FREQUENTLY ASKED QUESTIONS */}
      <section className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-8 shadow-sm space-y-4 print:hidden">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-[#007AFF]" />
          Frequently Asked Questions
        </h2>

        <div className="divide-y divide-slate-100">
          {faqs.map((faq, idx) => (
            <div key={idx} className="py-3.5">
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between text-left text-xs sm:text-sm font-bold text-slate-800 hover:text-[#007AFF] transition-colors"
              >
                <span>{faq.q}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 transition-transform ${openFaq === idx ? 'rotate-180 text-[#007AFF]' : ''
                    }`}
                />
              </button>
              {openFaq === idx && (
                <p className="mt-2 text-xs text-slate-600 leading-relaxed pr-6">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 7. NON-BLOCKING CONSULTATION CTA */}
      <section className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-6 sm:p-8 text-white shadow-md print:hidden">
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
            High Debt Burden or Facing Repayment Distress?
          </span>
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
            Get Confidential Guidance on Debt Resolution
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            If your DTI exceeds 50% or unmanageable credit card interest and collection calls are overwhelming your family budget, CredSettle can help you evaluate legal defense, harassment protection under RBI guidelines, and structured loan settlement.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#007AFF] hover:bg-blue-600 font-bold text-xs sm:text-sm text-white transition-all shadow-sm"
            >
              Request Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 font-semibold text-xs sm:text-sm text-white transition-all"
            >
              Explore Settlement Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
