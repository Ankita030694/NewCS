'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  Layers,
  Plus,
  Trash2,
  RotateCcw,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  AlertTriangle,
  ChevronDown,
  Info,
  TrendingDown,
  Zap,
  Scale,
} from 'lucide-react';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

interface IssuerInfo {
  defaultApr: number;
  otsMinPct: number;
  otsMaxPct: number;
}

const ISSUERS: Record<string, IssuerInfo> = {
  'HDFC Bank': { defaultApr: 45.0, otsMinPct: 40, otsMaxPct: 60 },
  'SBI Card': { defaultApr: 45.0, otsMinPct: 40, otsMaxPct: 60 },
  'ICICI Bank': { defaultApr: 43.2, otsMinPct: 40, otsMaxPct: 60 },
  'Axis Bank': { defaultApr: 43.8, otsMinPct: 40, otsMaxPct: 58 },
  'RBL Bank': { defaultApr: 47.88, otsMinPct: 35, otsMaxPct: 55 },
  'Kotak Mahindra Bank': { defaultApr: 44.4, otsMinPct: 40, otsMaxPct: 58 },
  'IndusInd Bank': { defaultApr: 46.0, otsMinPct: 38, otsMaxPct: 58 },
  'IDFC FIRST Bank': { defaultApr: 42.0, otsMinPct: 45, otsMaxPct: 65 },
  'HSBC India': { defaultApr: 44.88, otsMinPct: 42, otsMaxPct: 62 },
  'BoBCard': { defaultApr: 43.2, otsMinPct: 42, otsMaxPct: 62 },
  'Federal Bank': { defaultApr: 45.0, otsMinPct: 42, otsMaxPct: 62 },
  'PNB Credit Card': { defaultApr: 42.0, otsMinPct: 45, otsMaxPct: 65 },
  'Other Card Issuer': { defaultApr: 42.0, otsMinPct: 40, otsMaxPct: 62 },
};

interface CardEntry {
  id: string;
  label: string;
  issuer: string;
  balance: number;
  apr: number;
}

interface StrategyResult {
  months: number;
  totalInterest: number;
  totalPaid: number;
  firstCardClearedMonth: number;
  trapped: boolean;
  payoffOrder: { label: string; issuer: string; clearedMonth: number }[];
}

function formatINR(val: number): string {
  return '₹' + Math.round(val).toLocaleString('en-IN');
}

function formatDuration(months: number, trapped: boolean): string {
  if (trapped || months >= 480) return '40+ Yrs (Budget Too Low)';
  const y = Math.floor(months / 12);
  const m = months % 12;
  if (y === 0) return `${m} Months`;
  if (m === 0) return `${y} Years`;
  return `${y} Yrs ${m} Mos`;
}

function getDebtBracket(total: number): string {
  if (total < 1500000) return '₹3 Lakhs - ₹15 Lakhs';
  if (total < 3000000) return '₹15 Lakhs - ₹30 Lakhs';
  if (total <= 5000000) return '₹30 Lakhs - ₹50 Lakhs';
  return 'Above ₹50 Lakhs';
}

function simulateMultiCard(
  cards: CardEntry[],
  monthlyBudget: number,
  mode: 'avalanche' | 'snowball',
  includeGst: boolean
): StrategyResult {
  const active = cards
    .filter((c) => c.balance > 0)
    .map((c) => ({
      ...c,
      rem: c.balance,
      clearedMonth: 0,
    }));

  if (active.length === 0) {
    return {
      months: 0,
      totalInterest: 0,
      totalPaid: 0,
      firstCardClearedMonth: 0,
      trapped: false,
      payoffOrder: [],
    };
  }

  const gstFactor = includeGst ? 1.18 : 1.0;
  const totalStart = active.reduce((s, c) => s + c.rem, 0);
  let month = 0;
  let totalInterest = 0;
  let totalPaid = 0;
  let trapped = false;
  const clearedOrder: { label: string; issuer: string; clearedMonth: number }[] = [];

  while (active.some((c) => c.rem > 1) && month < 480) {
    month += 1;

    // Step 1: Add monthly interest + GST
    for (const c of active) {
      if (c.rem <= 1) continue;
      const intAmt = c.rem * (c.apr / 12 / 100) * gstFactor;
      c.rem += intAmt;
      totalInterest += intAmt;
    }

    // Step 2: Pay 5% minimum due on every open card first
    let budgetLeft = Math.max(0, monthlyBudget);
    for (const c of active) {
      if (c.rem <= 1 || budgetLeft <= 0) continue;
      const minDue = Math.min(c.rem, Math.max(250, c.rem * 0.05));
      const actualMin = Math.min(budgetLeft, minDue);
      c.rem -= actualMin;
      budgetLeft -= actualMin;
      totalPaid += actualMin;
      if (c.rem <= 1 && c.clearedMonth === 0) {
        c.rem = 0;
        c.clearedMonth = month;
        clearedOrder.push({ label: c.label, issuer: c.issuer, clearedMonth: month });
      }
    }

    // Step 3: Sort open cards by Avalanche (APR desc) or Snowball (balance asc)
    const openCards = active.filter((c) => c.rem > 1);
    openCards.sort((a, b) => (mode === 'avalanche' ? b.apr - a.apr : a.rem - b.rem));

    for (const c of openCards) {
      if (budgetLeft <= 0) break;
      const extra = Math.min(c.rem, budgetLeft);
      c.rem -= extra;
      budgetLeft -= extra;
      totalPaid += extra;
      if (c.rem <= 1 && c.clearedMonth === 0) {
        c.rem = 0;
        c.clearedMonth = month;
        clearedOrder.push({ label: c.label, issuer: c.issuer, clearedMonth: month });
      }
    }

    const currentSum = active.reduce((s, c) => s + c.rem, 0);
    if (currentSum > totalStart * 2.2) {
      trapped = true;
      break;
    }
  }

  if (month >= 480 && active.some((c) => c.rem > 1)) {
    trapped = true;
  }

  for (const c of active) {
    if (c.clearedMonth === 0) {
      clearedOrder.push({ label: c.label, issuer: c.issuer, clearedMonth: 480 });
    }
  }

  return {
    months: month,
    totalInterest,
    totalPaid,
    firstCardClearedMonth: clearedOrder.length > 0 ? clearedOrder[0].clearedMonth : 0,
    trapped,
    payoffOrder: clearedOrder,
  };
}

const INITIAL_CARDS: CardEntry[] = [
  { id: 'c1', label: 'Card 1', issuer: 'HDFC Bank', balance: 155000, apr: 45.0 },
  { id: 'c2', label: 'Card 2', issuer: 'ICICI Bank', balance: 115000, apr: 43.2 },
  { id: 'c3', label: 'Card 3', issuer: 'RBL Bank', balance: 80000, apr: 47.88 },
];

export default function MultipleCardPayoffVsSettlementClient() {
  const [cards, setCards] = useState<CardEntry[]>(INITIAL_CARDS);
  const [monthlyBudget, setMonthlyBudget] = useState<number>(24000);
  const [otherDebt, setOtherDebt] = useState<number>(0);
  const [includeGst, setIncludeGst] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const metrics = useMemo(() => {
    const totalCards = cards.reduce((s, c) => s + Math.max(0, c.balance), 0);
    const totalCombined = totalCards + Math.max(0, otherDebt);
    const minDueSum = cards.reduce(
      (s, c) => s + (c.balance > 0 ? Math.max(250, c.balance * 0.05) : 0),
      0
    );
    const firstMonthInt = cards.reduce(
      (s, c) => s + c.balance * (c.apr / 12 / 100) * (includeGst ? 1.18 : 1.0),
      0
    );

    const avalanche = simulateMultiCard(cards, monthlyBudget, 'avalanche', includeGst);
    const snowball = simulateMultiCard(cards, monthlyBudget, 'snowball', includeGst);

    const otsLow = cards.reduce((s, c) => {
      const info = ISSUERS[c.issuer] || ISSUERS['Other Card Issuer'];
      return s + Math.round((c.balance * info.otsMinPct) / 100);
    }, 0);
    const otsHigh = cards.reduce((s, c) => {
      const info = ISSUERS[c.issuer] || ISSUERS['Other Card Issuer'];
      return s + Math.round((c.balance * info.otsMaxPct) / 100);
    }, 0);

    return {
      totalCards,
      totalCombined,
      minDueSum,
      firstMonthInt,
      avalanche,
      snowball,
      otsLow,
      otsHigh,
      budgetBelowMin: monthlyBudget < minDueSum,
      budgetBelowInt: monthlyBudget <= firstMonthInt,
    };
  }, [cards, monthlyBudget, otherDebt, includeGst]);

  const showFunnel = metrics.totalCombined >= 300000;
  const bracket = getDebtBracket(Math.max(300000, metrics.totalCombined));

  useEffect(() => {
    if (typeof window === 'undefined' || !showFunnel) return;
    const key = `credsettle:funnel_draft:${window.location.pathname}`;
    try {
      const savedRaw = localStorage.getItem(key);
      const saved = savedRaw ? JSON.parse(savedRaw) : {};
      localStorage.setItem(
        key,
        JSON.stringify({
          legalIssue:
            saved.legalIssue || 'Need legal help for one-time settlement (OTS) with bank',
          debtBracket: bracket,
          name: saved.name || '',
          number: saved.number || '',
          email: saved.email || '',
          step: 3,
        })
      );
    } catch {
      // Ignore storage errors
    }
  }, [showFunnel, bracket]);

  const addCard = () => {
    if (cards.length >= 6) return;
    const nextNum = cards.length + 1;
    setCards((prev) => [
      ...prev,
      {
        id: `c-${Date.now()}`,
        label: `Card ${nextNum}`,
        issuer: 'SBI Card',
        balance: 65000,
        apr: 45.0,
      },
    ]);
  };

  const removeCard = (id: string) => {
    if (cards.length <= 2) return;
    setCards((prev) =>
      prev
        .filter((c) => c.id !== id)
        .map((c, idx) => ({ ...c, label: `Card ${idx + 1}` }))
    );
  };

  const updateCard = (id: string, field: 'issuer' | 'balance' | 'apr', val: string | number) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        if (field === 'issuer') {
          const iss = String(val);
          const def = ISSUERS[iss] || ISSUERS['Other Card Issuer'];
          return { ...c, issuer: iss, apr: def.defaultApr };
        }
        return { ...c, [field]: Number(val) };
      })
    );
  };

  const resetAll = () => {
    setCards(INITIAL_CARDS);
    setMonthlyBudget(24000);
    setOtherDebt(0);
    setIncludeGst(true);
  };

  const copyPlan = () => {
    const summary = [
      'CredSettle Multi-Card Payoff vs Settlement Comparison',
      `Total Card Debt: ${formatINR(metrics.totalCards)} (${cards.length} cards)`,
      `Monthly Payoff Budget: ${formatINR(monthlyBudget)}`,
      `Debt Avalanche: ${formatDuration(metrics.avalanche.months, metrics.avalanche.trapped)} | Total Paid: ${formatINR(metrics.avalanche.totalPaid)}`,
      `Debt Snowball: ${formatDuration(metrics.snowball.months, metrics.snowball.trapped)} | Total Paid: ${formatINR(metrics.snowball.totalPaid)}`,
      `Indicative OTS Range (90+ DPD Caveat): ${formatINR(metrics.otsLow)} to ${formatINR(metrics.otsHigh)}`,
      'Planner: https://www.credsettle.com/tools/multiple-credit-card-payoff-vs-settlement-calculator',
    ].join('\n');
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [
    {
      q: 'What is the difference between Debt Avalanche and Debt Snowball for credit cards?',
      a: 'Debt Avalanche puts your extra monthly budget toward the card with the highest APR first, saving the most interest. Debt Snowball clears your smallest balance card first so you close one card fast and stay motivated.',
    },
    {
      q: 'What happens if my monthly budget is lower than all card minimum dues?',
      a: 'If your monthly cash budget cannot cover even the 5% minimum due across all cards, late fees and 42% to 48% APR will push your debt up every month. At ₹3 Lakh or more in total dues, review formal settlement options.',
    },
    {
      q: 'Does Debt Avalanche or Debt Snowball hurt my CIBIL score?',
      a: 'No. Both payoff plans pay every card on time each month and clear 100% of the balance. Each bank reports your card as Closed, which raises your CIBIL score as card use drops below 30%.',
    },
    {
      q: 'How does settling multiple credit cards work in India?',
      a: 'When real hardship makes full payoff impossible on ₹3 Lakh+ debt, each card is negotiated one by one or in stages after 90+ days past due under the June 8, 2023 RBI circular. Each bank issues its own OTS letter and No Dues note.',
    },
    {
      q: 'Should I use one credit card to pay the minimum due of another card?',
      a: 'Never rotate cash or wallet loads from one card to pay another. Wallet transfer fees of 2% to 3% plus immediate interest make your multi-card hole deeper within months.',
    },
    {
      q: 'Are the settlement figures in this planner guaranteed by banks?',
      a: 'No. Settlement ranges are rough past estimates, not bank offers. Each card issuer reviews your NPA stage, fee share, and hardship proof before giving a written OTS offer.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* HEADER */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
          <Layers className="w-3.5 h-3.5 text-blue-600" />
          <span>Avalanche vs Snowball vs One-Time Settlement</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Multiple Credit Card Payoff vs Settlement Planner
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          List all your credit cards and set your monthly budget. Compare full payoff via Debt
          Avalanche and Debt Snowball side by side with indicative bank settlement ranges.
        </p>
      </div>

      {/* MAIN GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: INPUTS */}
        <section
          aria-label="Multiple Card Planner Inputs"
          className="lg:col-span-5 bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-lg font-bold text-slate-900">1. Your Cards and Budget</h2>
            <button
              type="button"
              onClick={resetAll}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          {/* MONTHLY BUDGET */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200/80 space-y-2">
            <div className="flex justify-between items-center">
              <label htmlFor="monthly-payoff-budget" className="text-xs sm:text-sm font-bold text-slate-900">
                Total Monthly Budget for All Cards
              </label>
              <span className="text-xs font-extrabold text-blue-700 bg-white px-2.5 py-0.5 rounded-lg border border-blue-200">
                {formatINR(monthlyBudget)}/mo
              </span>
            </div>
            <div className="relative">
              <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                ₹
              </span>
              <input
                id="monthly-payoff-budget"
                type="number"
                min="1000"
                step="1000"
                value={monthlyBudget || ''}
                onChange={(e) => setMonthlyBudget(Math.max(0, Number(e.target.value)))}
                className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-blue-300 bg-white text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <p className="text-[11px] text-slate-600">
              Combined 5% minimum due on your cards today is{' '}
              <strong>{formatINR(metrics.minDueSum)}/mo</strong>. Any rupee above that attacks
              principal.
            </p>
          </div>

          {/* CARDS LIST */}
          <div className="space-y-3">
            {cards.map((c) => (
              <div key={c.id} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-800">{c.label}</span>
                  {cards.length > 2 && (
                    <button
                      type="button"
                      onClick={() => removeCard(c.id)}
                      className="text-xs text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Issuer
                    </label>
                    <select
                      value={c.issuer}
                      onChange={(e) => updateCard(c.id, 'issuer', e.target.value)}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-900"
                    >
                      {Object.keys(ISSUERS).map((iss) => (
                        <option key={iss} value={iss}>
                          {iss}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      Balance (₹)
                    </label>
                    <input
                      type="number"
                      min="0"
                      step="5000"
                      value={c.balance || ''}
                      onChange={(e) => updateCard(c.id, 'balance', Math.max(0, Number(e.target.value)))}
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-900"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-slate-600 mb-1">
                      APR (%)
                    </label>
                    <input
                      type="number"
                      min="12"
                      max="60"
                      step="0.5"
                      value={c.apr || ''}
                      onChange={(e) =>
                        updateCard(c.id, 'apr', Math.min(60, Math.max(0, Number(e.target.value))))
                      }
                      className="w-full px-2.5 py-2 rounded-xl border border-slate-300 bg-white text-xs font-semibold text-slate-900"
                    />
                  </div>
                </div>
              </div>
            ))}

            {cards.length < 6 && (
              <button
                type="button"
                onClick={addCard}
                className="w-full py-2 px-4 rounded-xl border-2 border-dashed border-blue-300 text-blue-700 hover:bg-blue-50 text-xs font-bold inline-flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Card ({cards.length}/6)</span>
              </button>
            )}
          </div>

          {/* OTHER LOANS + GST */}
          <div className="pt-3 border-t border-slate-200 space-y-3">
            <div>
              <label htmlFor="other-pl-app-debt" className="block text-xs font-bold text-slate-800 mb-1">
                Personal Loans + App Loans Balance (Optional)
              </label>
              <input
                id="other-pl-app-debt"
                type="number"
                min="0"
                step="10000"
                value={otherDebt || ''}
                onChange={(e) => setOtherDebt(Math.max(0, Number(e.target.value)))}
                placeholder="0"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-semibold text-slate-900"
              />
            </div>

            <label className="flex items-center gap-2.5 text-xs font-semibold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={includeGst}
                onChange={(e) => setIncludeGst(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded"
              />
              <span>Add 18% GST on monthly card interest</span>
            </label>
          </div>
        </section>

        {/* RIGHT: 3-WAY STRATEGY COMPARISON */}
        <section
          aria-label="Strategy Comparison Matrix"
          className="lg:col-span-7 space-y-5"
        >
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                2. Side-by-Side Strategy Comparison
              </h2>
              <div className="flex items-center gap-2 print:hidden">
                <button
                  type="button"
                  onClick={copyPlan}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy Plan'}</span>
                </button>
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print</span>
                </button>
              </div>
            </div>

            {(metrics.budgetBelowMin || metrics.budgetBelowInt) && (
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs text-rose-900 flex items-start gap-2.5">
                <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong>Budget Warning:</strong> Your {formatINR(monthlyBudget)}/mo budget is
                  below your Month 1 minimum dues ({formatINR(metrics.minDueSum)}) or monthly
                  interest ({formatINR(metrics.firstMonthInt)}). Without raising your budget or
                  settling, balances will rise each month.
                </div>
              </div>
            )}

            {/* 3 STRATEGY CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {/* Strategy A: Avalanche */}
              <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-blue-800 uppercase">
                  <Zap className="w-4 h-4" />
                  <span>Debt Avalanche</span>
                </div>
                <p className="text-xl font-extrabold text-slate-900">
                  {formatDuration(metrics.avalanche.months, metrics.avalanche.trapped)}
                </p>
                <div className="text-xs text-slate-700 space-y-1 pt-1 border-t border-blue-200/60">
                  <p>
                    <strong>Total Paid:</strong> {formatINR(metrics.avalanche.totalPaid)}
                  </p>
                  <p>
                    <strong>Interest + GST:</strong> {formatINR(metrics.avalanche.totalInterest)}
                  </p>
                  <p>
                    <strong>1st Card Closed:</strong> Month {metrics.avalanche.firstCardClearedMonth}
                  </p>
                  <p className="text-emerald-700 font-semibold">CIBIL: Closed (Best Score)</p>
                </div>
              </div>

              {/* Strategy B: Snowball */}
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-slate-800 uppercase">
                  <Scale className="w-4 h-4 text-indigo-600" />
                  <span>Debt Snowball</span>
                </div>
                <p className="text-xl font-extrabold text-slate-900">
                  {formatDuration(metrics.snowball.months, metrics.snowball.trapped)}
                </p>
                <div className="text-xs text-slate-700 space-y-1 pt-1 border-t border-slate-200">
                  <p>
                    <strong>Total Paid:</strong> {formatINR(metrics.snowball.totalPaid)}
                  </p>
                  <p>
                    <strong>Interest + GST:</strong> {formatINR(metrics.snowball.totalInterest)}
                  </p>
                  <p>
                    <strong>1st Card Closed:</strong> Month {metrics.snowball.firstCardClearedMonth}
                  </p>
                  <p className="text-emerald-700 font-semibold">CIBIL: Closed (Fast Wins)</p>
                </div>
              </div>

              {/* Strategy C: Indicative OTS */}
              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-extrabold text-emerald-800 uppercase">
                  <TrendingDown className="w-4 h-4" />
                  <span>Indicative OTS*</span>
                </div>
                <p className="text-lg font-extrabold text-emerald-950">
                  {formatINR(metrics.otsLow)} - {formatINR(metrics.otsHigh)}
                </p>
                <div className="text-xs text-slate-700 space-y-1 pt-1 border-t border-emerald-200/60">
                  <p>
                    <strong>Card Principal:</strong> {formatINR(metrics.totalCards)}
                  </p>
                  <p>
                    <strong>Timeline:</strong> 3 to 9 Months (NPA)
                  </p>
                  <p>
                    <strong>Approval:</strong> Bank Discretion
                  </p>
                  <p className="text-amber-800 font-semibold">CIBIL: Marked Settled</p>
                </div>
              </div>
            </div>

            {/* PAYOFF ORDER SEQUENCE */}
            <div className="space-y-2 pt-2">
              <h3 className="text-sm font-bold text-slate-900">
                Recommended Card Closure Order (Avalanche vs Snowball)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-blue-800 mb-2">Avalanche Order (Highest APR First)</p>
                  <ol className="space-y-1.5 text-slate-700 list-decimal pl-4">
                    {metrics.avalanche.payoffOrder.map((item, i) => (
                      <li key={i}>
                        <strong>{item.issuer}</strong> ({item.label}) clears in Month{' '}
                        {item.clearedMonth >= 480 ? '480+' : item.clearedMonth}.
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200">
                  <p className="font-bold text-indigo-800 mb-2">
                    Snowball Order (Smallest Balance First)
                  </p>
                  <ol className="space-y-1.5 text-slate-700 list-decimal pl-4">
                    {metrics.snowball.payoffOrder.map((item, i) => (
                      <li key={i}>
                        <strong>{item.issuer}</strong> ({item.label}) clears in Month{' '}
                        {item.clearedMonth >= 480 ? '480+' : item.clearedMonth}.
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
              <p className="text-[11px] text-slate-500">
                *Caveat: Indicative OTS ranges reflect historical NPA closures under the June 8,
                2023 RBI settlement framework and are never guaranteed. Only choose settlement if
                real financial hardship makes Avalanche or Snowball impossible.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* >= ₹3,00,000 GATE */}
      <section aria-label="Eligibility and Action Roadmap" className="space-y-4">
        {showFunnel ? (
          <div className="rounded-3xl border-2 border-blue-200 bg-blue-50/50 p-5 sm:p-7 space-y-4">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  Combined Unsecured Debt: {formatINR(metrics.totalCombined)} (Eligible for ₹3L+ Program)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Request a Consolidated Multi-Card Settlement Plan
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Your combined balance across cards, personal loans, and app loans is{' '}
                <strong>{formatINR(metrics.totalCombined)}</strong>. If you cannot sustain{' '}
                {formatINR(monthlyBudget)}/month, check your multi-bank OTS plan below ({bracket}{' '}
                prefilled).
              </p>
            </div>
            <InteractiveLeadFunnel key={bracket} className="!bg-transparent !py-2 !px-0 !pb-2" />
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Info className="w-4 h-4" />
              <span>
                Combined Debt: {formatINR(metrics.totalCombined)} (Below ₹3,00,000 Settlement Floor)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Self-Help Multi-Card Payoff Steps (Below ₹3 Lakh)
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              Formal settlement programs require at least ₹3,00,000 in combined debt across all
              credit cards, personal loans, and app loans. Below ₹3 Lakh, follow this self-help
              Snowball or Avalanche plan to clear your cards cleanly.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">1. Set Auto-Pay for Minimums.</strong>
                Pay the 5% minimum due on every secondary card before the due date so late fees of
                ₹750 to ₹1,300 never hit your bills.
              </li>
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">2. Attack Top Priority Card.</strong>
                Put every extra rupee of your {formatINR(monthlyBudget)} budget into the #1 priority
                card shown above until it hits zero.
              </li>
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">3. Roll Over Freed Payments.</strong>
                The moment Card #1 closes, roll its entire payment into Card #2 without lowering
                your total monthly budget.
              </li>
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">4. Include Other Unsecured Loans.</strong>
                If you also carry personal loans or app loans that bring your total debt above
                ₹3,00,000, enter them in the Optional box above.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* EDUCATIONAL CONTENT */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            3. Debt Avalanche vs Debt Snowball for Indian Cardholders
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Holding three or four credit cards at 42% to 48% APR creates constant billing stress.
            Without a clear order, most cardholders spread small payments across all cards and make
            zero progress on principal.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            <strong>Debt Avalanche</strong> targets the card with the highest interest rate first,
            such as a 47.88% APR card, while paying 5% minimums on the rest. <strong>Debt Snowball</strong>{' '}
            clears the smallest card balance first so you reduce the number of monthly due dates
            quickly. To check how slow bare minimums are on a single card, try our{' '}
            <Link
              href="/tools/credit-card-minimum-due-calculator"
              className="text-blue-600 hover:underline font-semibold"
            >
              credit card minimum due calculator
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            4. How Multi-Card One-Time Settlement Works Above ₹3 Lakh
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            When your combined credit card, personal loan, and app loan debt crosses ₹3,00,000 and
            your income drops, Snowball and Avalanche plans often break down. Missing bills triggers
            late fees, over-limit penalties, and blocked cards across all issuers at once.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            In a structured{' '}
            <Link
              href="/settle-multiple-credit-cards"
              className="text-blue-600 hover:underline font-semibold"
            >
              multiple credit card settlement
            </Link>{' '}
            program, you build a dedicated settlement fund month by month instead of wasting money on
            5% minimums. As each card crosses 90 to 180 days overdue, you negotiate written OTS
            offers one card at a time under{' '}
            <Link
              href="/services/credit-card-settlement"
              className="text-blue-600 hover:underline font-semibold"
            >
              credit card settlement services
            </Link>
            .
          </p>
        </section>

        {/* FAQS */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            5. Frequently Asked Questions on Multi-Card Payoff
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50/60 overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between gap-4 p-4 text-left font-bold text-slate-900 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
