'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Clock,
  PiggyBank,
  CheckCircle2,
} from 'lucide-react';

interface LoanEmiWidgetProps {
  initialPrincipal?: number;
  initialRate?: number;
  initialTenureYears?: number;
  initialPrepayment?: number;
  loanType?: string;
  className?: string;
}

export default function LoanEmiWidget({
  initialPrincipal = 500000,
  initialRate = 10.5,
  initialTenureYears = 5,
  initialPrepayment = 0,
  loanType = 'Personal Loan',
  className = '',
}: LoanEmiWidgetProps) {
  const [principal, setPrincipal] = useState<number>(initialPrincipal);
  const [rate, setRate] = useState<number>(initialRate);
  const [tenureYears, setTenureYears] = useState<number>(initialTenureYears);
  const [prepayment, setPrepayment] = useState<number>(initialPrepayment);

  // Formatter for Indian Rupees (₹)
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(Math.max(0, Math.round(val)));
  };

  // Sanitized values
  const validPrincipal = Math.max(10000, principal || 0);
  const validRate = Math.max(0, Math.min(36, rate || 0));
  const validTenureYears = Math.max(1, Math.min(30, tenureYears || 1));
  const validPrepayment = Math.max(0, Math.min(validPrincipal, prepayment || 0));

  // Core Reducing Balance EMI Calculation
  const { emi, totalRepayment, totalInterest, principalPercentage, interestPercentage } = useMemo(() => {
    const p = validPrincipal;
    const r = validRate / 12 / 100;
    const n = validTenureYears * 12;

    let computedEmi = 0;
    if (r === 0) {
      computedEmi = Math.round(p / n);
    } else {
      const factor = Math.pow(1 + r, n);
      computedEmi = Math.round((p * r * factor) / (factor - 1));
    }

    const computedTotalRepayment = computedEmi * n;
    const computedTotalInterest = Math.max(0, computedTotalRepayment - p);

    const sum = p + computedTotalInterest;
    const pPercent = sum > 0 ? Math.round((p / sum) * 100) : 100;
    const iPercent = 100 - pPercent;

    return {
      emi: computedEmi,
      totalRepayment: computedTotalRepayment,
      totalInterest: computedTotalInterest,
      principalPercentage: pPercent,
      interestPercentage: iPercent,
    };
  }, [validPrincipal, validRate, validTenureYears]);

  // Prepayment Savings & Tenure Reduction Simulation
  const { savedInterest, monthsSaved, newTotalInterest } = useMemo(() => {
    if (validPrepayment <= 0) {
      return { savedInterest: 0, monthsSaved: 0, newTotalInterest: totalInterest };
    }

    const p = validPrincipal;
    const r = validRate / 12 / 100;
    const n = validTenureYears * 12;
    const prepayMonth = Math.min(12, Math.max(1, Math.floor(n / 2)));

    // Amortize up to prepayment month
    let balance = p;
    let interestBefore = 0;
    for (let i = 1; i <= prepayMonth; i++) {
      const intMonth = balance * r;
      const prinMonth = emi - intMonth;
      interestBefore += intMonth;
      balance -= prinMonth;
    }

    const remainingBalanceAfterPrepay = Math.max(0, balance - validPrepayment);

    if (remainingBalanceAfterPrepay === 0) {
      const saved = Math.max(0, totalInterest - interestBefore);
      return {
        savedInterest: Math.round(saved),
        monthsSaved: n - prepayMonth,
        newTotalInterest: Math.round(interestBefore),
      };
    }

    // Amortize remaining balance with the same EMI
    let newMonths = 0;
    let curr = remainingBalanceAfterPrepay;
    let interestAfter = 0;
    while (curr > 0 && newMonths < 360) {
      newMonths++;
      const intMonth = curr * r;
      interestAfter += intMonth;
      const prinMonth = Math.min(curr, emi - intMonth);
      curr -= prinMonth;
    }

    const computedNewTotalInterest = Math.round(interestBefore + interestAfter);
    const computedSavedInterest = Math.max(0, totalInterest - computedNewTotalInterest);
    const computedMonthsSaved = Math.max(0, (n - prepayMonth) - newMonths);

    return {
      savedInterest: computedSavedInterest,
      monthsSaved: computedMonthsSaved,
      newTotalInterest: computedNewTotalInterest,
    };
  }, [validPrincipal, validRate, validTenureYears, validPrepayment, emi, totalInterest]);

  // Preset Buttons
  const principalPresets = [
    { label: '₹3 Lakh', value: 300000 },
    { label: '₹5 Lakh', value: 500000 },
    { label: '₹10 Lakh', value: 1000000 },
    { label: '₹20 Lakh', value: 2000000 },
  ];

  const ratePresets = [
    { label: '10.5% (Prime)', value: 10.5 },
    { label: '13.5% (Standard)', value: 13.5 },
    { label: '16% (NBFC)', value: 16.0 },
  ];

  const tenurePresets = [
    { label: '1 Yr', value: 1 },
    { label: '2 Yrs', value: 2 },
    { label: '3 Yrs', value: 3 },
    { label: '5 Yrs', value: 5 },
  ];

  const prepaymentPresets = [
    { label: 'No Prepayment', value: 0 },
    { label: '₹25,000', value: 25000 },
    { label: '₹50,000', value: 50000 },
    { label: '₹1 Lakh', value: 100000 },
  ];

  const fullCalculatorHref = `/tools/emi-calculator?principal=${validPrincipal}&rate=${validRate}&tenure=${validTenureYears}`;

  return (
    <div
      id="interactive-loan-emi-calculator"
      className={`not-prose bg-gradient-to-b from-white via-slate-50/50 to-slate-100/60 border-2 border-[#0C2756]/15 rounded-3xl p-6 md:p-8 shadow-xl my-8 scroll-mt-20 ${className}`}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b border-slate-200">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0C2756] text-white flex items-center justify-center shrink-0 shadow-md">
            <Calculator className="w-5 h-5 text-blue-300" />
          </div>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <h3 className="text-lg md:text-xl font-extrabold text-[#0C2756] tracking-tight">
                REDUCING-BALANCE EMI &amp; PREPAYMENT CALCULATOR
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-600 mt-0.5">
              Estimate monthly installments, interest split &amp; prepayment savings for this {loanType}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-800 border border-blue-200 self-start sm:self-center shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-blue-600" />
          <span>RBI Reducing Balance Norms</span>
        </div>
      </div>

      {/* Input Controls */}
      <div className="py-6 space-y-6">
        {/* Loan Principal Input & Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-700">
              Loan Principal Amount
            </label>
            <span className="text-xs text-slate-500 font-medium">Editable</span>
          </div>
          <div className="relative rounded-xl shadow-xs mb-3">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 font-bold text-lg">
              ₹
            </div>
            <input
              type="number"
              min="10000"
              max="50000000"
              step="10000"
              value={principal || ''}
              onChange={(e) => setPrincipal(Number(e.target.value))}
              placeholder="5,00,000"
              className="block w-full pl-9 pr-4 py-3 text-base md:text-lg font-bold text-[#0C2756] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0C2756] focus:border-transparent outline-none transition-all"
            />
          </div>
          <input
            type="range"
            min="50000"
            max="5000000"
            step="25000"
            value={Math.min(5000000, validPrincipal)}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C2756]"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2.5">
            {principalPresets.map((preset) => {
              const isActive = validPrincipal === preset.value;
              return (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setPrincipal(preset.value)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center border ${
                    isActive
                      ? 'bg-[#0C2756] text-white border-[#0C2756] shadow-xs'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* 2-Column: Interest Rate & Tenure */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Interest Rate */}
          <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Interest Rate (% p.a.)
              </label>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-extrabold bg-[#0C2756] text-white">
                {validRate}%
              </span>
            </div>
            <input
              type="range"
              min="8"
              max="24"
              step="0.25"
              value={validRate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C2756] mb-2.5"
            />
            <div className="flex gap-1.5">
              {ratePresets.map((preset) => {
                const isActive = validRate === preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setRate(preset.value)}
                    className={`flex-1 py-1 px-1 rounded-md text-[11px] font-bold transition-all text-center border ${
                      isActive
                        ? 'bg-[#0C2756] text-white border-[#0C2756]'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Loan Tenure */}
          <div className="bg-white/80 p-4 rounded-2xl border border-slate-200/80">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                Loan Tenure
              </label>
              <span className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-extrabold bg-[#0C2756] text-white">
                {validTenureYears} {validTenureYears === 1 ? 'Year' : 'Years'} ({validTenureYears * 12} Mos)
              </span>
            </div>
            <input
              type="range"
              min="1"
              max="7"
              step="1"
              value={validTenureYears}
              onChange={(e) => setTenureYears(Number(e.target.value))}
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C2756] mb-2.5"
            />
            <div className="flex gap-1.5">
              {tenurePresets.map((preset) => {
                const isActive = validTenureYears === preset.value;
                return (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => setTenureYears(preset.value)}
                    className={`flex-1 py-1 px-1 rounded-md text-[11px] font-bold transition-all text-center border ${
                      isActive
                        ? 'bg-[#0C2756] text-white border-[#0C2756]'
                        : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {preset.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Prepayment Simulation Slider & Presets */}
        <div className="bg-emerald-50/50 border border-emerald-200/80 rounded-2xl p-4">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1.5">
              <PiggyBank className="w-4 h-4 text-emerald-700" />
              <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-emerald-900">
                Simulate Part-Prepayment / Extra Repayment
              </label>
            </div>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-extrabold bg-emerald-700 text-white">
              {validPrepayment > 0 ? `₹ ${formatINR(validPrepayment)}` : 'None (₹0)'}
            </span>
          </div>
          <input
            type="range"
            min="0"
            max={Math.min(1000000, validPrincipal)}
            step="10000"
            value={validPrepayment}
            onChange={(e) => setPrepayment(Number(e.target.value))}
            className="w-full h-2 bg-emerald-200/80 rounded-lg appearance-none cursor-pointer accent-emerald-600 mb-2.5"
          />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {prepaymentPresets.map((preset) => {
              const isActive = validPrepayment === preset.value;
              return (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setPrepayment(preset.value)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center border ${
                    isActive
                      ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                      : 'bg-white text-emerald-900 border-emerald-200 hover:bg-emerald-100/60'
                  }`}
                >
                  {preset.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Output Results Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4">
        {/* Monthly EMI Card */}
        <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Monthly Installment (EMI)
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0C2756] tracking-tight">
              ₹ {formatINR(emi)}
              <span className="text-xs font-semibold text-slate-500 ml-1">/ mo</span>
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Principal + reducing interest per month
          </p>
        </div>

        {/* Total Interest Card */}
        <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block">
                Total Interest
              </span>
              <span className="inline-flex items-center text-[10px] font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                {interestPercentage}% of total
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-800 tracking-tight">
              ₹ {formatINR(totalInterest)}
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Accumulated interest over {validTenureYears} years
          </p>
        </div>

        {/* Total Outflow Card */}
        <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Total Amount Payable
            </span>
            <div className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              ₹ {formatINR(totalRepayment)}
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Principal (₹{formatINR(validPrincipal)}) + Total Interest
          </p>
        </div>
      </div>

      {/* Prepayment Savings Highlight Card (When prepayment is simulated) */}
      {validPrepayment > 0 && (
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-2xl p-5 mb-5 shadow-md">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-100 mb-1">
                <Sparkles className="w-4 h-4 text-emerald-200" />
                <span>Prepayment Impact Simulation</span>
              </div>
              <div className="text-2xl sm:text-3xl font-black tracking-tight">
                ₹ {formatINR(savedInterest)} Interest Saved
              </div>
              <p className="text-xs sm:text-sm text-emerald-100 mt-1">
                By making a ₹{formatINR(validPrepayment)} part-prepayment, your loan tenure is reduced by{' '}
                <span className="font-extrabold text-white underline decoration-emerald-200">
                  {monthsSaved} months ({Number((monthsSaved / 12).toFixed(1))} yrs)
                </span>
                .
              </p>
            </div>
            <div className="bg-white/15 backdrop-blur-xs rounded-xl px-4 py-2.5 text-center self-start sm:self-center border border-white/20">
              <span className="text-[10px] uppercase font-bold text-emerald-100 block">Revised Interest</span>
              <span className="text-lg font-black text-white">₹ {formatINR(newTotalInterest)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Principal vs Interest Visual Split */}
      <div className="bg-white border border-slate-200/90 rounded-2xl p-4 mb-6 shadow-2xs">
        <div className="flex items-center justify-between text-xs font-bold mb-2">
          <span className="text-slate-700 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0C2756]" />
            Principal: {principalPercentage}% (₹{formatINR(validPrincipal)})
          </span>
          <span className="text-slate-700 flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            Interest: {interestPercentage}% (₹{formatINR(totalInterest)})
          </span>
        </div>
        <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden flex">
          <div
            style={{ width: `${principalPercentage}%` }}
            className="h-full bg-[#0C2756] transition-all duration-300"
            title={`Principal: ${principalPercentage}%`}
          />
          <div
            style={{ width: `${interestPercentage}%` }}
            className="h-full bg-amber-500 transition-all duration-300"
            title={`Interest: ${interestPercentage}%`}
          />
        </div>
      </div>

      {/* Contextual Notice */}
      <div className="bg-blue-50/80 border border-blue-200/70 rounded-xl p-3.5 mb-6 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900">RBI Reducing Balance Mandate:</span>{' '}
          Regulated lenders must calculate monthly interest on the actual outstanding balance. Under RBI circulars, individual floating-rate term loans carry zero foreclosure or part-prepayment charges. If monthly EMIs exceed 50% of your net income, explore restructuring or settlement.
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <Link
          href={fullCalculatorHref}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0C2756] hover:bg-[#153a7a] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg group"
        >
          <span>Open Full Calculator &amp; Amortization Matrix</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0C2756] border-2 border-[#0C2756]/25 font-bold text-sm transition-all shadow-xs"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Get Legal / Restructuring Help</span>
        </Link>
      </div>
    </div>
  );
}
