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
  Calendar,
  Layers,
  ChevronLeft,
  ChevronRight,
  TrendingDown,
  HelpCircle,
} from 'lucide-react';
import {
  calculateEmi,
  formatINR,
  type EmiCalculatorResult,
  type TenureUnit,
} from '@/lib/tools/calculators/emiCalculator';

export default function EmiCalculatorClient() {
  const principalInputId = useId();
  const rateInputId = useId();
  const tenureInputId = useId();
  const feeInputId = useId();
  const dateInputId = useId();

  // Input states
  const [principal, setPrincipal] = useState<number>(500000);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(10.5);
  const [tenureValue, setTenureValue] = useState<number>(5);
  const [tenureUnit, setTenureUnit] = useState<TenureUnit>('years');
  const [processingFee, setProcessingFee] = useState<number>(0);
  const [startDate, setStartDate] = useState<string>(
    new Date().toISOString().substring(0, 7)
  );
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Result and UI states
  const [result, setResult] = useState<EmiCalculatorResult | null>(null);
  const [calculationId, setCalculationId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Schedule view states
  const [scheduleView, setScheduleView] = useState<'yearly' | 'monthly'>('yearly');
  const [monthlyPage, setMonthlyPage] = useState<number>(1);
  const monthsPerPage = 12;

  // Immediate client-side fallback calculation + async backend verification
  const computeScenario = useCallback(
    async (
      p: number,
      r: number,
      tVal: number,
      tUnit: TenureUnit,
      fee: number,
      sDate: string
    ) => {
      if (p <= 0) {
        setError('Loan principal must be greater than zero.');
        return;
      }
      if (r < 0) {
        setError('Annual interest rate cannot be negative.');
        return;
      }
      if (tVal <= 0) {
        setError('Loan tenure must be greater than zero.');
        return;
      }

      setError(null);

      // 1. Instant client-side computation for 0ms lag
      const instantResult = calculateEmi({
        principal: p,
        annualInterestRate: r,
        tenureValue: tVal,
        tenureUnit: tUnit,
        processingFee: fee,
        startDate: sDate,
      });
      setResult(instantResult);

      // 2. Call backend API for session telemetry & server verification
      try {
        setLoading(true);
        const res = await fetch('/api/tools/emi-calculator', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            principal: p,
            annualInterestRate: r,
            tenureValue: tVal,
            tenureUnit: tUnit,
            processingFee: fee,
            startDate: sDate,
          }),
        });

        const data = await res.json();
        if (res.ok && data.success) {
          setResult(data.data);
          if (data.calculationId) {
            setCalculationId(data.calculationId);
          }
        }
      } catch (err) {
        // Client computation remains functional even if network fails
        console.warn('Backend calculation telemetry skipped:', err);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Handle Form Submission
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    computeScenario(principal, annualInterestRate, tenureValue, tenureUnit, processingFee, startDate);
  };

  // Reset to default standard personal loan scenario
  const handleReset = () => {
    setPrincipal(500000);
    setAnnualInterestRate(10.5);
    setTenureValue(5);
    setTenureUnit('years');
    setProcessingFee(0);
    const defaultDate = new Date().toISOString().substring(0, 7);
    setStartDate(defaultDate);
    setShowAdvanced(false);
    setMonthlyPage(1);
    setScheduleView('yearly');
    setResult(null);
    setError(null);
  };

  // Quick Preset Handlers
  const handlePrincipalPreset = (val: number) => {
    setPrincipal(val);
  };

  const handleRatePreset = (val: number) => {
    setAnnualInterestRate(val);
  };

  const handleTenurePreset = (val: number, unit: TenureUnit) => {
    setTenureValue(val);
    setTenureUnit(unit);
    setMonthlyPage(1);
  };

  const handleTenureUnitToggle = (unit: TenureUnit) => {
    if (unit === tenureUnit) return;
    let newVal = tenureValue;
    if (unit === 'months') {
      newVal = Math.round(tenureValue * 12);
    } else {
      newVal = Math.max(1, Math.round(tenureValue / 12));
    }
    setTenureUnit(unit);
    setTenureValue(newVal);
    setMonthlyPage(1);
  };

  // Copy Summary to Clipboard
  const handleCopySummary = () => {
    if (!result) return;
    const summaryText = `CredSettle Loan EMI Summary:
- Loan Principal: ${result.formatted.principal}
- Annual Interest Rate: ${result.formatted.annualInterestRate}
- Tenure: ${result.formatted.tenure}
- Estimated Monthly EMI: ${result.formatted.monthlyEmi}
- Total Interest Payable: ${result.formatted.totalInterest}
- Total Amount Payable: ${result.formatted.totalRepayment}
- Processing Fee: ${result.formatted.processingFee}
- Total Outflow: ${result.formatted.totalOutflow}
Note: Illustrative estimate based on standard reducing balance method.
Calculate yours at: https://www.credsettle.com/tools/emi-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Pagination for Monthly Schedule
  const paginatedMonthlySchedule = useMemo(() => {
    if (!result) return [];
    const startIndex = (monthlyPage - 1) * monthsPerPage;
    return result.monthlySchedule.slice(startIndex, startIndex + monthsPerPage);
  }, [result, monthlyPage]);

  const totalMonthlyPages = useMemo(() => {
    if (!result) return 1;
    return Math.ceil(result.monthlySchedule.length / monthsPerPage);
  }, [result]);

  const faqs = [
    {
      q: 'How is loan EMI calculated in India?',
      a: 'In Indian banking, standard amortizing loans use the reducing balance formula: EMI = [P x r x (1+r)^n] / [(1+r)^n - 1], where P is principal, r is monthly interest (annual rate / 1200), and n is tenure in months. In this method, interest is calculated only on the remaining balance rather than the initial borrowing amount.',
    },
    {
      q: 'What is the difference between reducing balance and flat rate EMI?',
      a: 'Under a flat rate loan, interest is charged on the full principal throughout the tenure, resulting in an effective interest rate nearly double the stated rate. Under reducing balance (standard for all RBI-regulated banks and NBFCs), as you repay principal each month, your interest burden progressively decreases.',
    },
    {
      q: 'Are processing fees and GST included in the monthly EMI?',
      a: 'No. Processing fees, documentation charges, and associated GST (18%) are upfront one-time deductions charged by the lender at loan sanction. Our calculator displays these charges separately so you know your true initial net disbursement.',
    },
    {
      q: 'Can floating rate benchmark resets change my loan EMI?',
      a: 'Yes. For floating-rate loans (like home loans linked to the RBI Repo Rate or external benchmark EBLR), when the RBI revises key rates, lenders typically adjust the loan tenure or monthly EMI accordingly.',
    },
    {
      q: 'How does making loan prepayments reduce total interest?',
      a: 'Any prepayment goes directly toward reducing your outstanding principal balance. Because subsequent monthly interest is computed on this lower balance, you can either reduce your monthly EMI or shorten your remaining tenure significantly.',
    },
  ];

  return (
    <div className="space-y-10 print:space-y-0">
      {/* Page Hero Header - Hidden on print */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs relative overflow-hidden print:hidden">
        <div
          className="absolute -right-20 -top-20 w-80 h-80 rounded-full opacity-10 pointer-events-none"
          style={{ background: 'radial-gradient(circle, #007AFF 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-[#007AFF] text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Standard Reducing Balance Amortization Engine</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C2756] tracking-tight mb-4">
            Loan EMI Calculator & Amortization Schedule
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Calculate your exact monthly installment (EMI), interest-to-principal ratio, and comprehensive year-by-year or month-by-month repayment schedule.
          </p>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free & Transparent</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-600" />
              <span>RBI Reducing Balance Method</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Printable Amortization Schedule</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Inputs on Left, Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start print:block print:w-full print:m-0 print:p-0">
        {/* INPUTS PANEL (5 Columns) - Hidden on print, sticky on desktop */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs print:hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-[#0C2756]">Loan Parameters</h2>
              <p className="text-xs text-slate-600">Enter your borrowing details</p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#007AFF] transition-colors font-medium p-1.5 rounded-lg hover:bg-slate-50 cursor-pointer"
              title="Reset inputs to default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            {/* Input 1: Loan Principal */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={principalInputId}
                  className="block text-xs sm:text-sm font-semibold text-slate-800"
                >
                  Loan Principal (₹) <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  {formatINR(principal)}
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-base">
                  ₹
                </span>
                <input
                  id={principalInputId}
                  type="number"
                  min="1000"
                  max="100000000"
                  step="5000"
                  value={principal || ''}
                  onChange={(e) => setPrincipal(Number(e.target.value))}
                  placeholder="e.g. 500000"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF] text-slate-900 font-semibold text-base transition-all"
                  required
                />
              </div>

              {/* Principal Presets */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {[
                  { label: '₹1 Lakh', val: 100000 },
                  { label: '₹3 Lakh', val: 300000 },
                  { label: '₹5 Lakh', val: 500000 },
                  { label: '₹10 Lakh', val: 1000000 },
                  { label: '₹25 Lakh', val: 2500000 },
                  { label: '₹50 Lakh', val: 5000000 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => handlePrincipalPreset(preset.val)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all cursor-pointer ${
                      principal === preset.val
                        ? 'bg-blue-50 border-blue-300 text-[#007AFF] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 2: Annual Interest Rate */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={rateInputId}
                  className="block text-xs sm:text-sm font-semibold text-slate-800"
                >
                  Annual Interest Rate (% p.a.) <span className="text-rose-500">*</span>
                </label>
                <div className="flex items-center gap-1.5">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.05"
                    value={annualInterestRate}
                    onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                    className="w-16 py-0.5 px-1.5 text-xs font-bold text-[#007AFF] bg-blue-50 border border-blue-200 rounded-md text-right focus:outline-none focus:ring-1 focus:ring-[#007AFF]"
                  />
                  <span className="text-xs font-bold text-[#007AFF]">%</span>
                </div>
              </div>

              {/* Slider */}
              <input
                id={rateInputId}
                type="range"
                min="0"
                max="30"
                step="0.1"
                aria-label="Annual interest rate percentage"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#007AFF] mb-3"
              />

              {/* Quick Rate Presets */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: '8.5% (Home)', val: 8.5 },
                  { label: '10.5% (Personal)', val: 10.5 },
                  { label: '12% (Auto)', val: 12.0 },
                  { label: '14% (Cards)', val: 14.0 },
                ].map((pct) => (
                  <button
                    key={pct.val}
                    type="button"
                    onClick={() => handleRatePreset(pct.val)}
                    className={`py-1.5 text-[11px] text-center rounded-lg border transition-all cursor-pointer ${
                      annualInterestRate === pct.val
                        ? 'bg-blue-50 border-blue-300 text-[#007AFF] font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {pct.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Input 3: Loan Tenure */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={tenureInputId}
                  className="block text-xs sm:text-sm font-semibold text-slate-800"
                >
                  Loan Tenure <span className="text-rose-500">*</span>
                </label>

                {/* Unit Switcher */}
                <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-xs">
                  <button
                    type="button"
                    onClick={() => handleTenureUnitToggle('years')}
                    className={`px-2.5 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                      tenureUnit === 'years'
                        ? 'bg-white text-[#007AFF] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Years
                  </button>
                  <button
                    type="button"
                    onClick={() => handleTenureUnitToggle('months')}
                    className={`px-2.5 py-0.5 rounded-md font-semibold transition-all cursor-pointer ${
                      tenureUnit === 'months'
                        ? 'bg-white text-[#007AFF] shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    Months
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <input
                  id={tenureInputId}
                  type="range"
                  min="1"
                  max={tenureUnit === 'years' ? 30 : 360}
                  step="1"
                  aria-label="Loan tenure slider"
                  value={tenureValue}
                  onChange={(e) => setTenureValue(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#007AFF]"
                />
                <div className="w-20 shrink-0">
                  <input
                    type="number"
                    min="1"
                    max={tenureUnit === 'years' ? 30 : 360}
                    value={tenureValue}
                    onChange={(e) => setTenureValue(Number(e.target.value))}
                    className="w-full py-1 px-2 text-xs font-bold text-center text-[#0C2756] border border-slate-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#007AFF]"
                  />
                </div>
              </div>

              {/* Tenure Presets */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {(tenureUnit === 'years'
                  ? [
                      { label: '1 Yr', val: 1 },
                      { label: '3 Yrs', val: 3 },
                      { label: '5 Yrs', val: 5 },
                      { label: '10 Yrs', val: 10 },
                      { label: '15 Yrs', val: 15 },
                      { label: '20 Yrs', val: 20 },
                    ]
                  : [
                      { label: '12 Mos', val: 12 },
                      { label: '24 Mos', val: 24 },
                      { label: '36 Mos', val: 36 },
                      { label: '60 Mos', val: 60 },
                      { label: '120 Mos', val: 120 },
                      { label: '240 Mos', val: 240 },
                    ]
                ).map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => handleTenurePreset(preset.val, tenureUnit)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all cursor-pointer ${
                      tenureValue === preset.val
                        ? 'bg-blue-50 border-blue-300 text-[#007AFF] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Collapsible Advanced Options: Processing Fee & Start Date */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full text-xs text-slate-600 hover:text-slate-900 font-semibold py-1 cursor-pointer"
              >
                <span>Advanced: Processing Fees & Start Date</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showAdvanced ? 'rotate-180 text-[#007AFF]' : ''
                  }`}
                />
              </button>

              {showAdvanced && (
                <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                  {/* Processing Fee */}
                  <div>
                    <label
                      htmlFor={feeInputId}
                      className="block text-xs font-semibold text-slate-800 mb-1"
                    >
                      Upfront Processing Fee (₹)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold text-sm">
                        ₹
                      </span>
                      <input
                        id={feeInputId}
                        type="number"
                        min="0"
                        step="500"
                        value={processingFee || ''}
                        onChange={(e) => setProcessingFee(Number(e.target.value))}
                        placeholder="e.g. 2500"
                        className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#007AFF] text-xs font-medium"
                      />
                    </div>
                    <p className="text-[10px] text-slate-600 mt-1">
                      Shown separately; not capitalized into monthly EMI.
                    </p>
                  </div>

                  {/* Start Date */}
                  <div>
                    <label
                      htmlFor={dateInputId}
                      className="block text-xs font-semibold text-slate-800 mb-1"
                    >
                      Loan Repayment Start Month
                    </label>
                    <input
                      id={dateInputId}
                      type="month"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#007AFF] text-xs font-medium"
                    />
                    <p className="text-[10px] text-slate-600 mt-1">
                      Calendar anchor for the amortization table.
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Recalculate Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Calculating EMI Scenario...</span>
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4" />
                  <span>{result ? 'Recalculate EMI Scenario' : 'Calculate EMI Scenario'}</span>
                </>
              )}
            </button>
          </form>

          {error && (
            <div className="mt-4 p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}
        </div>

        {/* RESULTS PANEL (7 Columns) */}
        <div className="lg:col-span-7 space-y-6 print:w-full print:m-0 print:p-0 print:space-y-4">
          {result ? (
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6 print:border-0 print:p-0 print:shadow-none print:space-y-4">
              {/* Dedicated Print Report Header: Visible only in print */}
              <div className="hidden print:block pb-4 mb-4 border-b-2 border-slate-900">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-black text-[#0C2756] tracking-tight">CredSettle</h1>
                    <p className="text-xs text-slate-600 font-semibold">Loan EMI & Amortization Schedule Report</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-4 gap-2 text-xs">
                  <div><span className="font-semibold text-slate-700">Loan Principal:</span> {result.formatted.principal}</div>
                  <div><span className="font-semibold text-slate-700">Interest Rate:</span> {result.formatted.annualInterestRate} p.a.</div>
                  <div><span className="font-semibold text-slate-700">Loan Tenure:</span> {result.formatted.tenure}</div>
                  <div><span className="font-semibold text-slate-700">Processing Fee:</span> {result.formatted.processingFee}</div>
                </div>
              </div>

              {/* Header with quick export/print actions - Hidden on print */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 print:hidden">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Calculated Schedule</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0C2756]">Monthly Repayment Summary</h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Copy calculation summary to clipboard"
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
                    title="Print schedule"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-600" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Primary Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 print:grid-cols-3 print:gap-3">
                {/* Metric 1: Monthly EMI (Hero) */}
                <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-200">
                  <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    Monthly Loan EMI
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#0C2756]">
                    {result.formatted.monthlyEmi}
                  </div>
                  <div className="text-[11px] text-blue-800 font-medium mt-1">
                    Across {result.formatted.tenure}
                  </div>
                </div>

                {/* Metric 2: Total Interest */}
                <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                  <div className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider mb-1">
                    Total Interest Paid
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-amber-800">
                    {result.formatted.totalInterest}
                  </div>
                  <div className="text-[11px] text-amber-900 font-medium mt-1">
                    {result.formatted.interestToPrincipalRatio} of loan principal
                  </div>
                </div>

                {/* Metric 3: Total Repayment */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Total Amount Paid
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-800">
                    {result.formatted.totalRepayment}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium mt-1">
                    Principal + Accrued Interest
                  </div>
                </div>
              </div>

              {/* Secondary Breakdown Details (Processing Fee shown separately) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Upfront Processing Fee</span>
                  <span className="text-xs font-bold text-slate-900">{result.formatted.processingFee}</span>
                </div>
                <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-700">Total Financial Outflow</span>
                  <span className="text-xs font-bold text-[#0C2756]">{result.formatted.totalOutflow}</span>
                </div>
              </div>

              {/* Visual Split Bar (Principal vs Interest) */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Repayment Composition</span>
                  <span>{result.formatted.totalRepayment} Total Outflow</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 flex overflow-hidden border border-slate-200">
                  <div
                    style={{ width: `${result.principalPercentage}%` }}
                    className="bg-[#007AFF] h-full"
                    title={`Principal: ${result.formatted.principal} (${result.formatted.principalPercentage})`}
                  />
                  <div
                    style={{ width: `${result.interestPercentage}%` }}
                    className="bg-amber-500 h-full"
                    title={`Interest: ${result.formatted.totalInterest} (${result.formatted.interestPercentage})`}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF] inline-block" />
                    <span>Principal ({result.formatted.principalPercentage} • {result.formatted.principal})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block" />
                    <span>Interest ({result.formatted.interestPercentage} • {result.formatted.totalInterest})</span>
                  </div>
                </div>
              </div>

              {/* Amortization Schedule Navigation & Tables */}
              <div className="pt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <h3 className="text-base font-bold text-[#0C2756] flex items-center gap-2">
                    <Layers className="w-4 h-4 text-[#007AFF]" />
                    <span>Amortization Schedule</span>
                  </h3>

                  {/* View Switcher: Yearly vs Monthly - Hidden on print */}
                  <div className="inline-flex rounded-lg border border-slate-200 p-0.5 bg-slate-100 text-xs print:hidden">
                    <button
                      type="button"
                      onClick={() => setScheduleView('yearly')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                        scheduleView === 'yearly'
                          ? 'bg-white text-[#007AFF] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Yearly Summary
                    </button>
                    <button
                      type="button"
                      onClick={() => setScheduleView('monthly')}
                      className={`px-3 py-1 rounded-md font-semibold transition-all cursor-pointer ${
                        scheduleView === 'monthly'
                          ? 'bg-white text-[#007AFF] shadow-xs'
                          : 'text-slate-600 hover:text-slate-900'
                      }`}
                    >
                      Monthly Breakdown
                    </button>
                  </div>
                </div>

                {/* View 1: Yearly Amortization Table */}
                {scheduleView === 'yearly' && (
                  <div className="overflow-x-auto rounded-2xl border border-slate-200 print:overflow-visible">
                    <table className="w-full text-left border-collapse text-xs">
                      <thead>
                        <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                          <th className="py-2.5 px-3">Period</th>
                          <th className="py-2.5 px-3 text-right">Opening Balance</th>
                          <th className="py-2.5 px-3 text-right">Total EMI Paid</th>
                          <th className="py-2.5 px-3 text-right">Principal Paid</th>
                          <th className="py-2.5 px-3 text-right">Interest Paid</th>
                          <th className="py-2.5 px-3 text-right">Closing Balance</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {result.yearlySchedule.map((row) => (
                          <tr key={row.yearIndex} className="hover:bg-slate-50/60 transition-colors">
                            <td className="py-2.5 px-3 font-semibold text-[#0C2756] whitespace-nowrap">
                              {row.yearLabel}
                            </td>
                            <td className="py-2.5 px-3 text-right text-slate-600 whitespace-nowrap">
                              {row.formatted.openingBalance}
                            </td>
                            <td className="py-2.5 px-3 text-right font-medium text-slate-900 whitespace-nowrap">
                              {row.formatted.totalEmiPaid}
                            </td>
                            <td className="py-2.5 px-3 text-right text-[#007AFF] font-semibold whitespace-nowrap">
                              {row.formatted.principalPaid}
                            </td>
                            <td className="py-2.5 px-3 text-right text-amber-700 font-semibold whitespace-nowrap">
                              {row.formatted.interestPaid}
                            </td>
                            <td className="py-2.5 px-3 text-right font-bold text-slate-800 whitespace-nowrap">
                              {row.formatted.closingBalance}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* View 2: Monthly Amortization Table with Pagination */}
                {scheduleView === 'monthly' && (
                  <div className="space-y-3">
                    <div className="overflow-x-auto rounded-2xl border border-slate-200 print:overflow-visible">
                      <table className="w-full text-left border-collapse text-xs">
                        <thead>
                          <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                            <th className="py-2.5 px-3">Month</th>
                            <th className="py-2.5 px-3 text-right">Opening Bal</th>
                            <th className="py-2.5 px-3 text-right">EMI</th>
                            <th className="py-2.5 px-3 text-right">Principal</th>
                            <th className="py-2.5 px-3 text-right">Interest</th>
                            <th className="py-2.5 px-3 text-right">Closing Bal</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {/* Paginated rows on screen, hidden on print */}
                          {paginatedMonthlySchedule.map((row) => (
                            <tr key={`screen-${row.monthIndex}`} className="hover:bg-slate-50/60 transition-colors print:hidden">
                              <td className="py-2.5 px-3 font-semibold text-[#0C2756] whitespace-nowrap">
                                <span className="text-[10px] text-slate-500 mr-1.5 font-mono">#{row.monthIndex}</span>
                                {row.periodLabel}
                              </td>
                              <td className="py-2.5 px-3 text-right text-slate-600 whitespace-nowrap">
                                {row.formatted.openingBalance}
                              </td>
                              <td className="py-2.5 px-3 text-right font-medium text-slate-900 whitespace-nowrap">
                                {row.formatted.emi}
                              </td>
                              <td className="py-2.5 px-3 text-right text-[#007AFF] font-semibold whitespace-nowrap">
                                {row.formatted.principalPaid}
                              </td>
                              <td className="py-2.5 px-3 text-right text-amber-700 font-semibold whitespace-nowrap">
                                {row.formatted.interestPaid}
                              </td>
                              <td className="py-2.5 px-3 text-right font-bold text-slate-800 whitespace-nowrap">
                                {row.formatted.closingBalance}
                              </td>
                            </tr>
                          ))}
                          {/* Full schedule rows printed completely */}
                          {result.monthlySchedule.map((row) => (
                            <tr key={`print-${row.monthIndex}`} className="hidden print:table-row">
                              <td className="py-2 px-3 font-semibold text-[#0C2756] whitespace-nowrap">
                                <span className="text-[10px] text-slate-500 mr-1.5 font-mono">#{row.monthIndex}</span>
                                {row.periodLabel}
                              </td>
                              <td className="py-2 px-3 text-right text-slate-600 whitespace-nowrap">
                                {row.formatted.openingBalance}
                              </td>
                              <td className="py-2 px-3 text-right font-medium text-slate-900 whitespace-nowrap">
                                {row.formatted.emi}
                              </td>
                              <td className="py-2 px-3 text-right text-[#007AFF] font-semibold whitespace-nowrap">
                                {row.formatted.principalPaid}
                              </td>
                              <td className="py-2 px-3 text-right text-amber-700 font-semibold whitespace-nowrap">
                                {row.formatted.interestPaid}
                              </td>
                              <td className="py-2 px-3 text-right font-bold text-slate-800 whitespace-nowrap">
                                {row.formatted.closingBalance}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>

                    {/* Pagination Controls - Hidden on print */}
                    {totalMonthlyPages > 1 && (
                      <div className="flex items-center justify-between text-xs text-slate-600 px-1 print:hidden">
                        <div>
                          Showing page <span className="font-bold text-slate-900">{monthlyPage}</span> of{' '}
                          <span className="font-bold text-slate-900">{totalMonthlyPages}</span> ({result.tenureMonths} total installments)
                        </div>
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() => setMonthlyPage((p) => Math.max(1, p - 1))}
                            disabled={monthlyPage === 1}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                            title="Previous page"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => setMonthlyPage((p) => Math.min(totalMonthlyPages, p + 1))}
                            disabled={monthlyPage === totalMonthlyPages}
                            className="p-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 disabled:opacity-40 cursor-pointer disabled:cursor-not-allowed"
                            title="Next page"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>


              {/* Disclaimer Notice Box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Estimation notice:</span> {result.disclaimer}
                </div>
              </div>

              {/* Non-blocking Consultation CTA - Hidden on print */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0C2756] to-blue-900 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
                <div>
                  <h4 className="text-base font-bold mb-1">
                    Struggling With Multiple High-EMI Loans?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                    If monthly loan installments exceed 50% of your take-home income, our senior advocates can help you structure legal debt relief, halt recovery harassment, and explore RBI compromise settlements.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="px-5 py-3 rounded-xl bg-[#007AFF] hover:bg-blue-600 text-white font-bold text-xs sm:text-sm transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer shadow-sm hover:shadow-md"
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
              <h3 className="text-base font-bold text-slate-900 mb-1">Awaiting Parameters</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Enter your loan amount, interest rate, and tenure on the left, then click &ldquo;Calculate EMI Scenario&rdquo; to compute your repayment schedule.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Educational & SEO Content Section strictly conforming to mistakes.md - Hidden on print */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs space-y-8 print:hidden">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-4">
            How Loan EMIs Are Calculated in India
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            An Equated Monthly Installment (EMI) is a fixed payment amount made by a borrower to a lending institution on a designated date each calendar month. EMIs are designed to amortize the total loan balance steadily across the sanction tenure, ensuring that both principal and accrued interest are paid off completely by the end of the term.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            In standard retail banking across India, loans are structured using the monthly reducing balance method. Unlike flat-rate loans where interest is charged perpetually on the original sanction amount, reducing balance loans ensure interest is calculated strictly on the opening balance of each specific month.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-4">
            Principal Versus Interest Breakdown Across Tenure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0C2756] mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-[#007AFF]" />
                <span>Early Installments Are Interest-Heavy</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                During the initial phases of your loan term, your outstanding balance is at its highest. Consequently, the interest component forms the dominant share of each monthly EMI, with only a small fraction going toward principal reduction.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0C2756] mb-2 flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Later Installments Pay Down Principal</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                As the principal is progressively chipped away, the interest charged each month shrinks. In the final years or months of repayment, almost the entirety of your EMI goes directly toward clearing the remaining principal.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-4">
            Impact of Loan Prepayment on Interest Outflow
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                Strategy 01
              </span>
              <h3 className="text-sm font-bold text-[#0C2756] mb-1">Direct Principal Reduction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every lump-sum prepayment bypasses future interest charges and directly reduces your outstanding loan ledger balance.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                Strategy 02
              </span>
              <h3 className="text-sm font-bold text-[#0C2756] mb-1">Tenure vs EMI Reduction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Choosing to shorten loan tenure rather than decreasing monthly EMI maximizes your total interest savings across the loan lifecycle.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                Strategy 03
              </span>
              <h3 className="text-sm font-bold text-[#0C2756] mb-1">Zero Foreclosure Penalties</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Per RBI directives, banks and NBFCs cannot charge foreclosure or prepayment penalties on floating-rate individual loans.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-6">
            Frequently Asked Questions About Loan EMIs
          </h2>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0C2756] hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? 'rotate-180 text-[#007AFF]' : ''
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-4 text-xs sm:text-sm text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                    <p className="pt-3">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
