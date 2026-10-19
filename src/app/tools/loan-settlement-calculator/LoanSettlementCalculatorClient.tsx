'use client';

import React, { useState, useEffect, useCallback, useId } from 'react';
import Link from 'next/link';
import {
  Calculator,
  RotateCcw,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  AlertCircle,
  HelpCircle,
  ArrowRight,
  TrendingDown,
  ChevronDown,
  Sparkles,
  Info,
} from 'lucide-react';
import type { LoanSettlementResult } from '@/lib/tools/calculators/loanSettlement';

export default function LoanSettlementCalculatorClient() {
  const balanceInputId = useId();
  const percentageInputId = useId();
  const feesInputId = useId();
  const fullRepaymentInputId = useId();

  // User input states
  const [outstandingBalance, setOutstandingBalance] = useState<number>(200000);
  const [settlementPercentage, setSettlementPercentage] = useState<number>(40);
  const [additionalFees, setAdditionalFees] = useState<number>(2000);
  const [fullRepaymentComparison, setFullRepaymentComparison] = useState<string>('');
  const [showAdvanced, setShowAdvanced] = useState<boolean>(false);

  // Backend response & UI states
  const [result, setResult] = useState<LoanSettlementResult | null>(null);
  const [calculationId, setCalculationId] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Call the backend API to calculate everything
  const fetchCalculation = useCallback(
    async (
      balance: number,
      percentage: number,
      fees: number,
      repayment: string
    ) => {
      if (balance <= 0) {
        setError('Please enter an outstanding loan balance greater than zero.');
        return;
      }
      if (percentage < 0 || percentage > 100) {
        setError('Settlement percentage must be between 0% and 100%.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const payload: Record<string, any> = {
          outstandingBalance: balance,
          settlementPercentage: percentage,
          additionalFees: fees,
        };

        if (repayment && Number(repayment) > 0) {
          payload.fullRepaymentComparison = Number(repayment);
        }

        const res = await fetch('/api/tools/loan-settlement-calculator', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        const data = await res.json();

        if (!res.ok || !data.success) {
          throw new Error(data.error || 'Failed to compute settlement scenario');
        }

        setResult(data.data);
        if (data.calculationId) {
          setCalculationId(data.calculationId);
        }
      } catch (err: any) {
        console.error('Calculation error:', err);
        setError(err.message || 'Unable to connect to calculation service.');
      } finally {
        setLoading(false);
      }
    },
    []
  );

  // Form submission handler
  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    fetchCalculation(
      outstandingBalance,
      settlementPercentage,
      additionalFees,
      fullRepaymentComparison
    );
  };

  // Reset to default
  const handleReset = () => {
    setOutstandingBalance(200000);
    setSettlementPercentage(40);
    setAdditionalFees(2000);
    setFullRepaymentComparison('');
    setShowAdvanced(false);
    setResult(null);
    setError(null);
  };

  // Quick preset handlers
  const handleBalancePreset = (val: number) => {
    setOutstandingBalance(val);
  };

  const handlePercentagePreset = (val: number) => {
    setSettlementPercentage(val);
  };

  // Copy summary to clipboard
  const handleCopySummary = () => {
    if (!result) return;
    const summaryText = `CredSettle Loan Settlement Estimate:
- Outstanding Balance: ${result.formatted.outstandingBalance}
- Hypothetical Settlement (${result.formatted.settlementPercentage}): ${result.formatted.settlementAmount}
- Additional Fees: ${result.formatted.additionalFees}
- Total Estimated Cost: ${result.formatted.totalSettlementCost}
- Estimated Net Savings: ${result.formatted.estimatedDifference} (${result.formatted.differencePercentage})
Notice: Illustrative scenario only; not a settlement offer or guarantee.
Calculate yours at: https://www.credsettle.com/tools/loan-settlement-calculator`;

    navigator.clipboard.writeText(summaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [
    {
      q: 'How does the loan settlement calculator work in India?',
      a: 'The calculator estimates your one-time settlement payout by applying a hypothetical settlement percentage to your outstanding loan balance, factoring in any additional legal or processing fees to determine your net difference compared to paying in full.',
    },
    {
      q: 'Is the calculated settlement amount guaranteed by my bank or NBFC?',
      a: 'No. The calculation is an illustrative scenario simulator. Actual settlement offers depend entirely on your lender credit policies, delinquency vintage, hardship documentation, and bilateral negotiation.',
    },
    {
      q: 'What settlement percentage do banks in India usually accept?',
      a: 'Under RBI compromise settlement frameworks, banks typically evaluate settlements between 30% and 60% of the total ledger balance depending on whether the loan is unsecured, vintage of NPA, and documented borrower hardship.',
    },
    {
      q: 'Will settling a loan impact my CIBIL credit score?',
      a: 'Yes. When an account is settled for less than the full balance, the lender reports the account status as "Settled" to credit bureaus like CIBIL, Equifax, and Experian. This remains on the credit record for up to 7 years.',
    },
    {
      q: 'Can additional bank charges and bounce penalties be waived off?',
      a: 'In most compromise settlements, banks are willing to waive 100% of accumulated bounce fees, late penalties, and penal interest, negotiating strictly on the core principal amount.',
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
            <span>Scenario Simulator (RBI Compromise Framework)</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C2756] tracking-tight mb-4">
            Calculate Your Loan Settlement Payout & Savings
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Estimate what you would pay under a hypothetical one-time settlement percentage and compare your net cashflow difference against your outstanding balance.
          </p>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>100% Free & Anonymous</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-blue-600" />
              <span>Backend Verified Math</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Instant Comparison Table</span>
            </div>
          </div>
        </div>
      </div>

      {/* Calculator Grid: Inputs on Left, Results on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start print:block print:w-full print:m-0 print:p-0">
        {/* INPUTS PANEL (5 Columns) - Hidden on print, sticky on desktop */}
        <div className="lg:col-span-5 lg:sticky lg:top-24 lg:self-start lg:max-h-[calc(100vh-7rem)] lg:overflow-y-auto custom-scrollbar bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-xs print:hidden">
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-100">
            <div>
              <h2 className="text-lg font-bold text-[#0C2756]">Settlement Parameters</h2>
              <p className="text-xs text-slate-600">Enter your loan details for calculation</p>
            </div>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs text-slate-600 hover:text-[#007AFF] transition-colors font-medium p-1.5 rounded-lg hover:bg-slate-50"
              title="Reset inputs to default"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <form onSubmit={handleCalculate} className="space-y-6">
            {/* Input 1: Outstanding Balance */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={balanceInputId}
                  className="block text-xs sm:text-sm font-semibold text-slate-800"
                >
                  Outstanding Loan Balance (₹) <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs text-slate-600">Required</span>
              </div>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-base">
                  ₹
                </span>
                <input
                  id={balanceInputId}
                  type="number"
                  min="1000"
                  step="1000"
                  value={outstandingBalance || ''}
                  onChange={(e) => setOutstandingBalance(Number(e.target.value))}
                  placeholder="e.g. 200000"
                  className="w-full pl-9 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF] text-slate-900 font-semibold text-base transition-all"
                  required
                />
              </div>

              {/* Quick Presets */}
              <div className="flex flex-wrap gap-1.5 mt-2.5">
                {[
                  { label: '₹1 Lakh', val: 100000 },
                  { label: '₹2 Lakh', val: 200000 },
                  { label: '₹5 Lakh', val: 500000 },
                  { label: '₹10 Lakh', val: 1000000 },
                  { label: '₹25 Lakh', val: 2500000 },
                ].map((preset) => (
                  <button
                    key={preset.val}
                    type="button"
                    onClick={() => handleBalancePreset(preset.val)}
                    className={`px-2.5 py-1 text-xs rounded-lg border transition-all ${
                      outstandingBalance === preset.val
                        ? 'bg-blue-50 border-blue-300 text-[#007AFF] font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-600 mt-1.5">
                Include principal and overdue interest shown on your latest statement.
              </p>
            </div>

            {/* Input 2: Settlement Percentage */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor={percentageInputId}
                  className="block text-xs sm:text-sm font-semibold text-slate-800"
                >
                  Hypothetical Settlement Offer (%) <span className="text-rose-500">*</span>
                </label>
                <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md border border-blue-200">
                  {settlementPercentage}%
                </span>
              </div>

              {/* Slider Input */}
              <input
                id={percentageInputId}
                type="range"
                min="0"
                max="100"
                step="1"
                aria-label="Settlement offer percentage"
                value={settlementPercentage}
                onChange={(e) => setSettlementPercentage(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#007AFF] mb-3"
              />

              {/* Quick Percentage Presets */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  { label: '30%', val: 30 },
                  { label: '40%', val: 40 },
                  { label: '50%', val: 50 },
                  { label: '60%', val: 60 },
                ].map((pct) => (
                  <button
                    key={pct.val}
                    type="button"
                    onClick={() => handlePercentagePreset(pct.val)}
                    className={`py-1.5 text-xs text-center rounded-lg border transition-all ${
                      settlementPercentage === pct.val
                        ? 'bg-blue-50 border-blue-300 text-[#007AFF] font-bold shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {pct.label}
                  </button>
                ))}
              </div>
              <p className="text-[11px] text-slate-600 mt-1.5">
                Typical unsecured debt compromise ranges between 35% and 55% depending on vintage.
              </p>
            </div>

            {/* Input 3: Additional Settlement Fees */}
            <div>
              <label
                htmlFor={feesInputId}
                className="block text-xs sm:text-sm font-semibold text-slate-800 mb-2"
              >
                Estimated Legal or Processing Fees (₹)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-base">
                  ₹
                </span>
                <input
                  id={feesInputId}
                  type="number"
                  min="0"
                  step="500"
                  value={additionalFees}
                  onChange={(e) => setAdditionalFees(Number(e.target.value))}
                  placeholder="e.g. 2000"
                  className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#007AFF] text-slate-900 font-semibold text-sm transition-all"
                />
              </div>
              <p className="text-[11px] text-slate-600 mt-1.5">
                Optional: Legal notice reply charges, stamp duty, or notarization costs.
              </p>
            </div>

            {/* Collapsible Advanced Option: Custom Full Repayment Baseline */}
            <div className="pt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setShowAdvanced(!showAdvanced)}
                className="flex items-center justify-between w-full text-xs text-slate-600 hover:text-slate-900 font-semibold py-1"
              >
                <span>Advanced: Custom Full Repayment Amount</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    showAdvanced ? 'rotate-180 text-[#007AFF]' : ''
                  }`}
                />
              </button>

              {showAdvanced && (
                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                  <label
                    htmlFor={fullRepaymentInputId}
                    className="block text-xs font-semibold text-slate-800"
                  >
                    Full Repayment Target (Leave blank to use Outstanding Balance)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-600 font-bold text-sm">
                      ₹
                    </span>
                    <input
                      id={fullRepaymentInputId}
                      type="number"
                      min="0"
                      step="1000"
                      value={fullRepaymentComparison}
                      onChange={(e) => setFullRepaymentComparison(e.target.value)}
                      placeholder="e.g. 240000"
                      className="w-full pl-8 pr-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-1 focus:ring-[#007AFF] text-xs font-medium"
                    />
                  </div>
                  <p className="text-[10px] text-slate-600">
                    Useful if your bank offers loan closure with future unaccrued interest waived.
                  </p>
                </div>
              )}
            </div>

            {/* Calculate Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 px-6 rounded-xl bg-[#007AFF] hover:bg-blue-700 text-white font-bold text-sm sm:text-base transition-all shadow-sm hover:shadow-md flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Calculating on Backend...</span>
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4" />
                  <span>Calculate Settlement Scenario</span>
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
                    <p className="text-xs text-slate-600 font-semibold">Loan Settlement Compromise Scenario Report</p>
                  </div>
                </div>
                <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-3 gap-2 text-xs">
                  <div><span className="font-semibold text-slate-700">Outstanding Balance:</span> {result.formatted.outstandingBalance}</div>
                  <div><span className="font-semibold text-slate-700">Settlement Offer:</span> {result.formatted.settlementPercentage}</div>
                  <div><span className="font-semibold text-slate-700">Estimated Legal/Fees:</span> {result.formatted.additionalFees}</div>
                </div>
              </div>

              {/* Header with quick actions - Hidden on print */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-100 print:hidden">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 mb-1">
                    <Check className="w-3.5 h-3.5" />
                    <span>Calculated Scenario</span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0C2756]">Settlement Breakdown</h2>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                    title="Copy calculation summary"
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
                    title="Print report"
                  >
                    <Printer className="w-3.5 h-3.5 text-slate-600" />
                    <span>Print</span>
                  </button>
                </div>
              </div>

              {/* Three High-Impact Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 print:grid-cols-3 print:gap-3">
                {/* Metric 1: Settlement Payout */}
                <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200">
                  <div className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider mb-1">
                    Settlement Payout
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-[#0C2756]">
                    {result.formatted.settlementAmount}
                  </div>
                  <div className="text-[11px] text-blue-800 font-medium mt-1">
                    At {result.formatted.settlementPercentage} of balance
                  </div>
                </div>

                {/* Metric 2: Net Cashflow Savings */}
                <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                  <div className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider mb-1">
                    Estimated Difference
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-emerald-700">
                    {result.formatted.estimatedDifference}
                  </div>
                  <div className="text-[11px] text-emerald-800 font-medium mt-1">
                    {result.formatted.differencePercentage} reduction vs baseline
                  </div>
                </div>

                {/* Metric 3: Total Settlement Cost */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="text-[11px] font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Total Estimated Cost
                  </div>
                  <div className="text-xl sm:text-2xl font-black text-slate-800">
                    {result.formatted.totalSettlementCost}
                  </div>
                  <div className="text-[11px] text-slate-600 font-medium mt-1">
                    Payout + {result.formatted.additionalFees} fees
                  </div>
                </div>
              </div>

              {/* Visual Split Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-700">
                  <span>Balance Allocation</span>
                  <span>{result.formatted.outstandingBalance} Total</span>
                </div>
                <div className="h-3 rounded-full bg-slate-100 flex overflow-hidden border border-slate-200">
                  <div
                    style={{ width: `${Math.min(100, Math.max(0, result.settlementPercentage))}%` }}
                    className="bg-[#007AFF] h-full"
                    title={`Settlement Amount: ${result.formatted.settlementAmount}`}
                  />
                  <div
                    style={{
                      width: `${Math.min(100, Math.max(0, 100 - result.settlementPercentage))}%`,
                    }}
                    className="bg-emerald-500 h-full"
                    title={`Lender Haircut / Savings: ${result.formatted.estimatedDifference}`}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-600 pt-1">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF] inline-block" />
                    <span>Settlement Outflow ({result.formatted.settlementPercentage})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" />
                    <span>Hypothetical Haircut ({100 - result.settlementPercentage}%)</span>
                  </div>
                </div>
              </div>

              {/* Full Comparison Table */}
              <div>
                <h3 className="text-sm font-bold text-[#0C2756] mb-3">Itemized Settlement Matrix</h3>
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left border-collapse text-xs sm:text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-200 text-slate-700 font-semibold">
                        <th className="py-3 px-4">Line Item</th>
                        <th className="py-3 px-4 text-right">Amount (₹)</th>
                        <th className="py-3 px-4 hidden md:table-cell">Context</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {result.comparisonTable.map((row) => {
                        let rowBg = '';
                        let textStyle = 'font-semibold text-slate-800';

                        if (row.highlight === 'settlement') {
                          rowBg = 'bg-blue-50/40';
                          textStyle = 'font-bold text-[#007AFF]';
                        } else if (row.highlight === 'savings') {
                          rowBg = 'bg-emerald-50/40';
                          textStyle = 'font-bold text-emerald-700';
                        }

                        return (
                          <tr key={row.key} className={rowBg}>
                            <td className="py-3 px-4 font-medium text-slate-900">{row.label}</td>
                            <td className={`py-3 px-4 text-right ${textStyle}`}>
                              {row.formattedAmount}
                            </td>
                            <td className="py-3 px-4 text-xs text-slate-600 hidden md:table-cell">
                              {row.notes}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Disclaimer Notice Box */}
              <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
                <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <span className="font-bold">Illustrative scenario only:</span> {result.disclaimer}
                </div>
              </div>

              {/* Non-blocking Consultation CTA - Hidden on print */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-[#0C2756] to-blue-900 text-white shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 print:hidden">
                <div>
                  <h4 className="text-base font-bold mb-1">
                    Need Help Negotiating This Settlement?
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed max-w-md">
                    Our senior debt resolution advocates negotiate directly with bank recovery teams to eliminate illegal harassment and secure genuine OTS sanction letters.
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
              <h3 className="text-base font-bold text-slate-900 mb-1">Awaiting Calculation</h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto">
                Enter your loan balance and settlement offer percentage on the left, then click &ldquo;Calculate Settlement Scenario&rdquo; to generate your verified scenario.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* SEO & Educational Content Section adhering strictly to mistakes.md - Hidden on print */}
      <section className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 md:p-10 shadow-xs space-y-8 print:hidden">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-4">
            How Loan Settlement Calculations Work in India
          </h2>
          <p className="text-slate-700 text-sm leading-relaxed mb-4">
            When a borrower defaults on an unsecured personal loan or credit card in India due to genuine financial hardship (such as medical emergencies, business loss, or job termination), banking institutions recognize that pursuing extensive litigation or asset recovery may be commercially unviable.
          </p>
          <p className="text-slate-700 text-sm leading-relaxed">
            Under the Reserve Bank of India (RBI) guidelines on Compromise Settlements and One-Time Settlements (OTS), regulated lenders are empowered to unbundle accrued penal interest, waive bounce fees, and agree on a negotiated lump-sum payout to close the loan account permanently.
          </p>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-4">
            Understanding Your Settlement Scenario Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0C2756] mb-2 flex items-center gap-2">
                <TrendingDown className="w-4 h-4 text-[#007AFF]" />
                <span>The Bank Haircut Concept</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                The difference between your outstanding balance and the agreed settlement payout is termed the lender haircut. In standard unsecured loan settlements across Indian commercial banks, haircuts commonly range between 40% and 70% of the ledger balance.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
              <h3 className="text-sm font-bold text-[#0C2756] mb-2 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" />
                <span>Impact on Credit Report Status</span>
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                A settled loan will be flagged as &apos;Settled&apos; rather than &apos;Closed&apos; in your CIBIL score report. While this temporarily impacts your credit score, it provides immediate legal closure and shields you from ongoing recovery actions.
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-4">
            Key Factors That Influence Actual Settlement Offers
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                Factor 01
              </span>
              <h3 className="text-sm font-bold text-[#0C2756] mb-1">Delinquency Vintage</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Accounts classified as Non-Performing Assets (NPAs) for over 180 to 360 days typically qualify for significantly higher discount percentages.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                Factor 02
              </span>
              <h3 className="text-sm font-bold text-[#0C2756] mb-1">Unsecured vs Secured</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Settlements are predominantly accepted on unsecured debts (personal loans, credit cards). Secured loans with physical collateral require different legal mechanisms.
              </p>
            </div>

            <div className="p-4 rounded-2xl border border-slate-200">
              <span className="text-xs font-bold text-[#007AFF] bg-blue-50 px-2 py-0.5 rounded-md mb-2 inline-block">
                Factor 03
              </span>
              <h3 className="text-sm font-bold text-[#0C2756] mb-1">Hardship Documentation</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Lenders require verified evidence such as termination letters, hospital bills, or income tax returns to sanction deep haircut approvals.
              </p>
            </div>
          </div>
        </div>

        {/* FAQs Accordion */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-[#0C2756] mb-6">
            Frequently Asked Questions About Loan Settlement
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
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-[#0C2756] hover:bg-slate-50 transition-colors"
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
