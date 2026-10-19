'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  Calculator,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  TrendingDown,
  Info,
} from 'lucide-react';

interface LoanSettlementWidgetProps {
  initialBalance?: number;
  initialPercentage?: number;
  loanType?: string;
  className?: string;
}

export default function LoanSettlementWidget({
  initialBalance = 500000,
  initialPercentage = 45,
  loanType = 'Personal Loan',
  className = '',
}: LoanSettlementWidgetProps) {
  const [balance, setBalance] = useState<number>(initialBalance);
  const [percentage, setPercentage] = useState<number>(initialPercentage);

  // Formatter for Indian Rupees (₹)
  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 0,
    }).format(Math.max(0, Math.round(val)));
  };

  // Calculations
  const validBalance = Math.max(0, balance || 0);
  const validPercentage = Math.min(100, Math.max(0, percentage || 0));

  const settlementPayout = useMemo(() => {
    return Math.round((validBalance * validPercentage) / 100);
  }, [validBalance, validPercentage]);

  const cashSavings = useMemo(() => {
    return Math.max(0, validBalance - settlementPayout);
  }, [validBalance, settlementPayout]);

  const savingsPercentage = 100 - validPercentage;

  const presets = [
    { label: '35% Conservative', value: 35 },
    { label: '45% Typical', value: 45 },
    { label: '60% Aggressive', value: 60 },
  ];

  const fullCalculatorHref = `/tools/loan-settlement-calculator?balance=${validBalance}&percentage=${validPercentage}`;

  return (
    <div
      id="interactive-settlement-estimator"
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
                INTERACTIVE SETTLEMENT ESTIMATOR
              </h3>
            </div>
            <p className="text-xs md:text-sm text-slate-600 mt-0.5">
              Estimate your realistic payout & bank haircut for this {loanType}
            </p>
          </div>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 self-start sm:self-center shadow-xs">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>RBI Compromise Norms</span>
        </div>
      </div>

      {/* Input Controls */}
      <div className="py-6 space-y-6">
        {/* Outstanding Principal Input */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-700">
              Outstanding Principal Amount
            </label>
            <span className="text-xs text-slate-500 font-medium">Editable</span>
          </div>
          <div className="relative rounded-xl shadow-xs">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500 font-bold text-lg">
              ₹
            </div>
            <input
              type="number"
              min="10000"
              max="100000000"
              step="10000"
              value={balance || ''}
              onChange={(e) => setBalance(Number(e.target.value))}
              placeholder="5,00,000"
              className="block w-full pl-9 pr-4 py-3 text-base md:text-lg font-bold text-[#0C2756] bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-[#0C2756] focus:border-transparent outline-none transition-all"
            />
          </div>
        </div>

        {/* Target Settlement Percentage Slider */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-xs md:text-sm font-bold uppercase tracking-wider text-slate-700">
              Target Settlement Haircut
            </label>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-extrabold bg-[#0C2756] text-white">
              {validPercentage}% of Principal
            </span>
          </div>
          <input
            type="range"
            min="20"
            max="80"
            step="1"
            value={validPercentage}
            onChange={(e) => setPercentage(Number(e.target.value))}
            className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0C2756]"
          />
          <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1">
            <span>20% (Max Hardship)</span>
            <span>45% (Typical Bank Target)</span>
            <span>80% (Early Delinquency)</span>
          </div>
        </div>

        {/* Quick Haircut Presets */}
        <div>
          <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
            Quick Haircut Presets
          </label>
          <div className="grid grid-cols-3 gap-2">
            {presets.map((preset) => {
              const isActive = validPercentage === preset.value;
              return (
                <button
                  key={preset.value}
                  type="button"
                  onClick={() => setPercentage(preset.value)}
                  className={`py-2 px-2 sm:px-3 rounded-xl text-xs sm:text-sm font-bold transition-all text-center border ${
                    isActive
                      ? 'bg-[#0C2756] text-white border-[#0C2756] shadow-sm'
                      : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300'
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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-6">
        {/* Estimated Settlement Payout Card */}
        <div className="bg-white border-2 border-slate-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 block mb-1">
              Estimated Settlement Payout
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#0C2756] tracking-tight">
              ₹ {formatINR(settlementPayout)}
            </div>
          </div>
          <p className="text-xs text-slate-500 mt-2 font-medium">
            Approximate lump sum required to obtain full bank NOC
          </p>
        </div>

        {/* Cash Savings Card */}
        <div className="bg-emerald-50/70 border-2 border-emerald-200/90 rounded-2xl p-4 sm:p-5 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-1 mb-1">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-800 block">
                Cash Savings (Bank Haircut)
              </span>
              <span className="inline-flex items-center text-[11px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                {savingsPercentage}% Saved
              </span>
            </div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tight flex items-center gap-1.5">
              <span>₹ {formatINR(cashSavings)}</span>
            </div>
          </div>
          <p className="text-xs text-emerald-800/80 mt-2 font-medium">
            100% penal interest, bounce charges & principal waiver
          </p>
        </div>
      </div>

      {/* Contextual Notice */}
      <div className="bg-blue-50/80 border border-blue-200/70 rounded-xl p-3.5 mb-6 flex items-start gap-2.5 text-xs text-slate-700 leading-relaxed">
        <Sparkles className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold text-slate-900">RBI Compromise Norms:</span>{' '}
          Calculated by unbundling 100% of accumulated penal interest and applying historical retail banking haircut ranges. Actual settlement requires written approval from your lender’s Competent Authority.
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
        <Link
          href={fullCalculatorHref}
          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0C2756] hover:bg-[#153a7a] text-white font-bold text-sm transition-all shadow-md hover:shadow-lg group"
        >
          <span>Open Full Calculator & Amortization Matrix</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-[#0C2756] border-2 border-[#0C2756]/25 font-bold text-sm transition-all shadow-xs"
        >
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>Get Legal Help</span>
        </Link>
      </div>
    </div>
  );
}
