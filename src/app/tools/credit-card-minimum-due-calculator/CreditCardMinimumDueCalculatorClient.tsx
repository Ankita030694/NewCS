'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  CreditCard,
  Plus,
  Trash2,
  RotateCcw,
  Copy,
  Printer,
  Check,
  ShieldCheck,
  AlertTriangle,
  ArrowRight,
  ChevronDown,
  Info,
  CheckCircle2,
  TrendingDown,
  Clock,
  Flame,
  Scale,
} from 'lucide-react';
import InteractiveLeadFunnel from '@/components/InteractiveLeadFunnel';

interface IssuerProfile {
  name: string;
  defaultApr: number;
  minPayablePct: number;
  maxPayablePct: number;
  floorPayment: number;
  note: string;
}

const ISSUER_PROFILES: Record<string, IssuerProfile> = {
  'HDFC Bank': {
    name: 'HDFC Bank',
    defaultApr: 45.0,
    minPayablePct: 40,
    maxPayablePct: 60,
    floorPayment: 250,
    note: 'Typically reviews OTS after 90 to 180 days past due based on principal vs fee ratio.',
  },
  'SBI Card': {
    name: 'SBI Card',
    defaultApr: 45.0,
    minPayablePct: 40,
    maxPayablePct: 60,
    floorPayment: 200,
    note: 'Issued by SBICPSL (separate from SBI branches). Structured OTS available in NPA stage.',
  },
  'ICICI Bank': {
    name: 'ICICI Bank',
    defaultApr: 45.0,
    minPayablePct: 40,
    maxPayablePct: 60,
    floorPayment: 250,
    note: 'Evaluates hardship documents and total unbilled EMI + fee stack before OTS approval.',
  },
  'Axis Bank': {
    name: 'Axis Bank',
    defaultApr: 43.8,
    minPayablePct: 40,
    maxPayablePct: 58,
    floorPayment: 250,
    note: 'Reviews lump-sum and short 2 to 3 tranche compromise settlements after 90+ DPD.',
  },
  'RBL Bank': {
    name: 'RBL Bank',
    defaultApr: 47.88,
    minPayablePct: 35,
    maxPayablePct: 55,
    floorPayment: 250,
    note: 'High late-fee and finance-charge component often allows deeper fee waivers in NPA.',
  },
  'Kotak Mahindra Bank': {
    name: 'Kotak Mahindra Bank',
    defaultApr: 44.4,
    minPayablePct: 40,
    maxPayablePct: 58,
    floorPayment: 250,
    note: 'Considers documented income loss or medical hardship for one-time card closure.',
  },
  'IndusInd Bank': {
    name: 'IndusInd Bank',
    defaultApr: 46.0,
    minPayablePct: 38,
    maxPayablePct: 58,
    floorPayment: 250,
    note: 'Negotiates on verified principal spend once late penalties inflate statement balance.',
  },
  'IDFC FIRST Bank': {
    name: 'IDFC FIRST Bank',
    defaultApr: 42.0,
    minPayablePct: 45,
    maxPayablePct: 65,
    floorPayment: 250,
    note: 'Dynamic APR cards; settlement range depends on your billed APR tier and NPA age.',
  },
  'HSBC India': {
    name: 'HSBC India',
    defaultApr: 44.88,
    minPayablePct: 42,
    maxPayablePct: 62,
    floorPayment: 250,
    note: 'Strict compliance checks; requires formal written OTS sanction before payment.',
  },
  'Standard Chartered': {
    name: 'Standard Chartered',
    defaultApr: 45.0,
    minPayablePct: 40,
    maxPayablePct: 60,
    floorPayment: 250,
    note: 'Assesses multi-card exposure and hardship proof during quarterly recovery drives.',
  },
  'BoBCard': {
    name: 'BoBCard',
    defaultApr: 43.2,
    minPayablePct: 42,
    maxPayablePct: 62,
    floorPayment: 250,
    note: 'Operated by BOBCARD Limited. Follows RBI compromise settlement board guidelines.',
  },
  'Federal Bank': {
    name: 'Federal Bank',
    defaultApr: 45.0,
    minPayablePct: 42,
    maxPayablePct: 62,
    floorPayment: 250,
    note: 'Co-branded and direct cards reviewed case by case after 90 days of non-payment.',
  },
  'PNB Credit Card': {
    name: 'PNB Credit Card',
    defaultApr: 42.0,
    minPayablePct: 45,
    maxPayablePct: 65,
    floorPayment: 250,
    note: 'PSU card portfolio; periodic OTS drives offer strong penal interest waivers.',
  },
  'AU Small Finance Bank': {
    name: 'AU Small Finance Bank',
    defaultApr: 44.88,
    minPayablePct: 40,
    maxPayablePct: 60,
    floorPayment: 250,
    note: 'Evaluates unsecured card defaults based on verifiable repayment incapacity.',
  },
  'Yes Bank': {
    name: 'Yes Bank',
    defaultApr: 45.6,
    minPayablePct: 40,
    maxPayablePct: 60,
    floorPayment: 250,
    note: 'Reviews lump-sum closure offers once account enters NPA recovery bucket.',
  },
  'Other Card Issuer': {
    name: 'Other Card Issuer',
    defaultApr: 42.0,
    minPayablePct: 40,
    maxPayablePct: 62,
    floorPayment: 250,
    note: 'Indicative industry range for unsecured Indian credit cards past 90 days overdue.',
  },
};

interface CardRow {
  id: string;
  issuer: string;
  balance: number;
  apr: number;
  minDuePct: number;
}

interface SingleCardResult {
  id: string;
  issuer: string;
  balance: number;
  apr: number;
  minDuePct: number;
  firstMonthMinDue: number;
  firstMonthInterestAndGst: number;
  monthsToPayoff: number;
  trapped: boolean;
  totalInterestAndGst: number;
  totalPaid: number;
  settlementMin: number;
  settlementMax: number;
  note: string;
}

function formatINR(amount: number): string {
  return '₹' + Math.round(amount).toLocaleString('en-IN');
}

function formatMonths(months: number, trapped: boolean): string {
  if (trapped || months >= 600) {
    return '50+ Years (Never Clears)';
  }
  const yrs = Math.floor(months / 12);
  const rem = months % 12;
  if (yrs === 0) return `${rem} Months`;
  if (rem === 0) return `${yrs} Years`;
  return `${yrs} Yrs ${rem} Mos`;
}

function getBracketForAmount(total: number): string {
  if (total < 1500000) return '₹3 Lakhs - ₹15 Lakhs';
  if (total < 3000000) return '₹15 Lakhs - ₹30 Lakhs';
  if (total <= 5000000) return '₹30 Lakhs - ₹50 Lakhs';
  return 'Above ₹50 Lakhs';
}

function simulateCardMinDue(card: CardRow, includeGst: boolean): SingleCardResult {
  const profile = ISSUER_PROFILES[card.issuer] || ISSUER_PROFILES['Other Card Issuer'];
  const balance0 = Math.max(0, card.balance);
  const monthlyRate = Math.max(0, card.apr) / 12 / 100;
  const gstMultiplier = includeGst ? 1.18 : 1.0;
  const minPct = Math.max(1, card.minDuePct) / 100;

  if (balance0 === 0) {
    return {
      ...card,
      firstMonthMinDue: 0,
      firstMonthInterestAndGst: 0,
      monthsToPayoff: 0,
      trapped: false,
      totalInterestAndGst: 0,
      totalPaid: 0,
      settlementMin: 0,
      settlementMax: 0,
      note: profile.note,
    };
  }

  let bal = balance0;
  let months = 0;
  let totalInt = 0;
  let totalPaid = 0;
  let firstMinDue = 0;
  let firstInt = 0;
  let trapped = false;

  while (bal > 1 && months < 600) {
    months += 1;
    const rawInt = bal * monthlyRate;
    const intWithGst = rawInt * gstMultiplier;
    const dueBeforePay = bal + intWithGst;
    let payment = Math.max(bal * minPct, profile.floorPayment);
    if (payment > dueBeforePay) payment = dueBeforePay;

    if (months === 1) {
      firstMinDue = payment;
      firstInt = intWithGst;
      if (payment <= intWithGst + 1) {
        trapped = true;
      }
    }

    bal = dueBeforePay - payment;
    totalInt += intWithGst;
    totalPaid += payment;

    if (bal > balance0 * 2.5) {
      trapped = true;
      break;
    }
  }

  if (months >= 600 && bal > 1) {
    trapped = true;
  }

  return {
    ...card,
    firstMonthMinDue: firstMinDue,
    firstMonthInterestAndGst: firstInt,
    monthsToPayoff: months,
    trapped,
    totalInterestAndGst: totalInt,
    totalPaid,
    settlementMin: Math.round((balance0 * profile.minPayablePct) / 100),
    settlementMax: Math.round((balance0 * profile.maxPayablePct) / 100),
    note: profile.note,
  };
}

const DEFAULT_CARDS: CardRow[] = [
  { id: 'card-1', issuer: 'HDFC Bank', balance: 185000, apr: 45.0, minDuePct: 5 },
  { id: 'card-2', issuer: 'SBI Card', balance: 145000, apr: 45.0, minDuePct: 5 },
];

export default function CreditCardMinimumDueCalculatorClient() {
  const [cards, setCards] = useState<CardRow[]>(DEFAULT_CARDS);
  const [otherLoansDebt, setOtherLoansDebt] = useState<number>(0);
  const [includeGst, setIncludeGst] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const analysis = useMemo(() => {
    const perCard = cards.map((c) => simulateCardMinDue(c, includeGst));
    const totalCardDebt = perCard.reduce((sum, c) => sum + c.balance, 0);
    const totalCombinedDebt = totalCardDebt + Math.max(0, otherLoansDebt);
    const firstMonthTotalMinDue = perCard.reduce((sum, c) => sum + c.firstMonthMinDue, 0);
    const firstMonthTotalInt = perCard.reduce((sum, c) => sum + c.firstMonthInterestAndGst, 0);
    const totalInterestTrap = perCard.reduce((sum, c) => sum + c.totalInterestAndGst, 0);
    const totalMinDueOutflow = perCard.reduce((sum, c) => sum + c.totalPaid, 0);
    const maxMonths = perCard.reduce((max, c) => Math.max(max, c.monthsToPayoff), 0);
    const anyTrapped = perCard.some((c) => c.trapped);
    const settlementLow = perCard.reduce((sum, c) => sum + c.settlementMin, 0);
    const settlementHigh = perCard.reduce((sum, c) => sum + c.settlementMax, 0);

    // Self-help monthly EMI needed to clear card debt in 18 months at weighted APR
    const avgMonthlyRate =
      totalCardDebt > 0
        ? (perCard.reduce((sum, c) => sum + c.balance * (c.apr / 12 / 100), 0) / totalCardDebt) *
          (includeGst ? 1.18 : 1.0)
        : 0.035;
    const pay18Months =
      totalCardDebt > 0 && avgMonthlyRate > 0
        ? (totalCardDebt * avgMonthlyRate * Math.pow(1 + avgMonthlyRate, 18)) /
          (Math.pow(1 + avgMonthlyRate, 18) - 1)
        : 0;

    return {
      perCard,
      totalCardDebt,
      totalCombinedDebt,
      firstMonthTotalMinDue,
      firstMonthTotalInt,
      totalInterestTrap,
      totalMinDueOutflow,
      maxMonths,
      anyTrapped,
      settlementLow,
      settlementHigh,
      pay18Months,
    };
  }, [cards, otherLoansDebt, includeGst]);

  const isEligibleForFunnel = analysis.totalCombinedDebt >= 300000;
  const computedBracket = getBracketForAmount(Math.max(300000, analysis.totalCombinedDebt));

  // Prefill InteractiveLeadFunnel draft in localStorage when total debt >= 3L
  useEffect(() => {
    if (typeof window === 'undefined' || !isEligibleForFunnel) return;
    const key = `credsettle:funnel_draft:${window.location.pathname}`;
    try {
      const existingRaw = localStorage.getItem(key);
      const existing = existingRaw ? JSON.parse(existingRaw) : {};
      // Preserve contact details if user already started typing them
      const updated = {
        legalIssue:
          existing.legalIssue || 'Trapped in minimum amount due & unmanageable interest rates',
        debtBracket: computedBracket,
        name: existing.name || '',
        number: existing.number || '',
        email: existing.email || '',
        step: 3,
      };
      localStorage.setItem(key, JSON.stringify(updated));
    } catch {
      // Ignore storage restrictions
    }
  }, [isEligibleForFunnel, computedBracket]);

  const handleAddCard = () => {
    if (cards.length >= 6) return;
    setCards((prev) => [
      ...prev,
      {
        id: `card-${Date.now()}`,
        issuer: 'ICICI Bank',
        balance: 75000,
        apr: 45.0,
        minDuePct: 5,
      },
    ]);
  };

  const handleRemoveCard = (id: string) => {
    if (cards.length <= 1) return;
    setCards((prev) => prev.filter((c) => c.id !== id));
  };

  const handleCardChange = (id: string, field: keyof CardRow, value: string | number) => {
    setCards((prev) =>
      prev.map((c) => {
        if (c.id !== id) return c;
        if (field === 'issuer') {
          const issuerStr = String(value);
          const prof = ISSUER_PROFILES[issuerStr] || ISSUER_PROFILES['Other Card Issuer'];
          return { ...c, issuer: issuerStr, apr: prof.defaultApr };
        }
        return { ...c, [field]: Number(value) };
      })
    );
  };

  const handleReset = () => {
    setCards(DEFAULT_CARDS);
    setOtherLoansDebt(0);
    setIncludeGst(true);
  };

  const handleCopySummary = () => {
    const lines = [
      'CredSettle Credit Card Minimum Due Estimate',
      `Total Credit Card Balance: ${formatINR(analysis.totalCardDebt)}`,
      `Other Unsecured Loans (PL + Apps): ${formatINR(otherLoansDebt)}`,
      `Combined Unsecured Debt: ${formatINR(analysis.totalCombinedDebt)}`,
      `Month 1 Minimum Due: ${formatINR(analysis.firstMonthTotalMinDue)} (Interest + GST eats ${formatINR(analysis.firstMonthTotalInt)})`,
      `Minimum Due Payoff Time: ${formatMonths(analysis.maxMonths, analysis.anyTrapped)}`,
      `Total Interest + GST Trap: ${formatINR(analysis.totalInterestTrap)}`,
      `Indicative Card OTS Range (NPA Stage Caveat): ${formatINR(analysis.settlementLow)} to ${formatINR(analysis.settlementHigh)}`,
      'Calculator: https://www.credsettle.com/tools/credit-card-minimum-due-calculator',
    ];
    navigator.clipboard.writeText(lines.join('\n'));
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const faqs = [
    {
      q: 'What does Minimum Amount Due mean on an Indian credit card bill?',
      a: 'Minimum Amount Due is usually 5% of your closing card bill, with a ₹200 to ₹500 floor. Paying it skips late fees for one month. However, the unpaid 95% balance attracts 36% to 48% yearly interest plus 18% GST.',
    },
    {
      q: 'Why does paying 5% minimum due take over 15 years to clear?',
      a: 'Most banks charge 3.5% to 3.75% monthly interest plus 18% GST. Over 4% of your bill goes to interest and tax each month. A 5% payment cuts your main balance by less than 1%, so payoff takes 15 to 22 years.',
    },
    {
      q: 'Do I lose my interest-free period if I pay only the minimum due?',
      a: 'Yes. Under RBI card rules, rolling over even one rupee cancels your 45-day grace window. Every fresh card swipe starts adding daily interest from day one.',
    },
    {
      q: 'How accurate are the indicative settlement ranges in this calculator?',
      a: 'These figures are rough past ranges, never a promise. Under the June 8, 2023 RBI settlement circular, each bank reviews NPA age, fee build-up, and real hardship before approving any waiver.',
    },
    {
      q: 'Why does legal debt settlement require at least ₹3 Lakh total debt?',
      a: 'Below ₹3 Lakh across all cards and loans, self-help payoff or a low-rate EMI plan saves money and protects your CIBIL score. Above ₹3 Lakh, formal legal talks make practical sense.',
    },
    {
      q: 'Can I combine multiple credit cards and app loans for assessment?',
      a: 'Yes. You should solve all card and loan dues together. Add each credit card in the tool and enter your personal loan and app loan dues to check your full plan.',
    },
  ];

  return (
    <div className="space-y-10">
      {/* HERO HEADER */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
          <CreditCard className="w-3.5 h-3.5 text-blue-600" />
          <span>Multi-Card APR, 18% GST &amp; Settlement Estimator</span>
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
          Credit Card Minimum Due &amp; Settlement Calculator
        </h1>
        <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
          Add your credit cards below to see how long 5% minimum due payments really take. Check
          your true interest and 18% GST cost side by side with realistic bank settlement ranges.
        </p>
      </div>

      {/* MAIN CALCULATOR GRID */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT COLUMN: MULTI-CARD INPUTS */}
        <section
          aria-label="Multi-Card Minimum Due Inputs"
          className="lg:col-span-6 bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-6"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              1. Enter Your Credit Cards and Loans
            </h2>
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>

          <div className="space-y-4">
            {cards.map((card, idx) => (
              <div
                key={card.id}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-blue-700">
                    Card #{idx + 1}
                  </span>
                  {cards.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveCard(card.id)}
                      className="text-xs text-rose-600 hover:text-rose-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Card Issuer
                    </label>
                    <select
                      value={card.issuer}
                      onChange={(e) => handleCardChange(card.id, 'issuer', e.target.value)}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {Object.keys(ISSUER_PROFILES).map((issuer) => (
                        <option key={issuer} value={issuer}>
                          {issuer}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Outstanding Balance (INR)
                    </label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-xs">
                        ₹
                      </span>
                      <input
                        type="number"
                        min="0"
                        step="5000"
                        value={card.balance || ''}
                        onChange={(e) =>
                          handleCardChange(card.id, 'balance', Math.max(0, Number(e.target.value)))
                        }
                        placeholder="e.g. 150000"
                        className="w-full pl-7 pr-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Annual APR (%)
                    </label>
                    <input
                      type="number"
                      min="12"
                      max="60"
                      step="0.5"
                      value={card.apr || ''}
                      onChange={(e) =>
                        handleCardChange(
                          card.id,
                          'apr',
                          Math.min(60, Math.max(0, Number(e.target.value)))
                        )
                      }
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Minimum Due (% of Bill)
                    </label>
                    <select
                      value={card.minDuePct}
                      onChange={(e) => handleCardChange(card.id, 'minDuePct', Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value={5}>5% (Standard Indian Bank MAD)</option>
                      <option value={4}>4% (Low Minimum Due Trap)</option>
                      <option value={6}>6% (Higher Minimum Slab)</option>
                      <option value={10}>10% (Accelerated Paydown)</option>
                    </select>
                  </div>
                </div>
              </div>
            ))}

            {cards.length < 6 && (
              <button
                type="button"
                onClick={handleAddCard}
                className="w-full py-2.5 px-4 rounded-xl border-2 border-dashed border-blue-300 text-blue-700 hover:bg-blue-50 font-bold text-xs sm:text-sm inline-flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>Add Another Credit Card ({cards.length}/6)</span>
              </button>
            )}
          </div>

          {/* OTHER UNSECURED DEBT + GST TOGGLE */}
          <div className="pt-4 border-t border-slate-200 space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="other-unsecured-debt"
                  className="text-xs sm:text-sm font-bold text-slate-800"
                >
                  Other Unsecured Debt: Personal Loans + App Loans (Optional)
                </label>
                <span className="text-xs font-bold text-slate-600">
                  {formatINR(otherLoansDebt)}
                </span>
              </div>
              <div className="relative">
                <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">
                  ₹
                </span>
                <input
                  id="other-unsecured-debt"
                  type="number"
                  min="0"
                  step="10000"
                  value={otherLoansDebt || ''}
                  onChange={(e) => setOtherLoansDebt(Math.max(0, Number(e.target.value)))}
                  placeholder="0"
                  className="w-full pl-8 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <p className="text-[11px] text-slate-500 mt-1">
                Include any personal loans or instant app loans so we check if your combined debt
                meets the ₹3,00,000 legal settlement floor.
              </p>
            </div>

            <label className="flex items-center gap-3 p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 cursor-pointer">
              <input
                type="checkbox"
                checked={includeGst}
                onChange={(e) => setIncludeGst(e.target.checked)}
                className="w-4 h-4 text-blue-600 rounded border-slate-300"
              />
              <span className="text-xs font-semibold text-slate-800">
                Include mandatory 18% GST charged by Indian banks on monthly card interest.
              </span>
            </label>
          </div>
        </section>

        {/* RIGHT COLUMN: RESULTS DASHBOARD */}
        <section
          aria-label="Minimum Due Trap Results"
          className="lg:col-span-6 space-y-5"
        >
          <div className="bg-white rounded-3xl border border-slate-200 p-5 sm:p-7 shadow-sm space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900">
                2. Your Minimum Due Trap Diagnosis
              </h2>
              <div className="flex items-center gap-2 print:hidden">
                <button
                  type="button"
                  onClick={handleCopySummary}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
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

            {/* 4 KPI CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700 mb-1">
                  <Clock className="w-4 h-4" />
                  <span>Time on Minimum Due</span>
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-rose-900">
                  {formatMonths(analysis.maxMonths, analysis.anyTrapped)}
                </p>
                <p className="text-[11px] text-rose-700 mt-1">
                  Assuming zero fresh card swipes or late fees.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-amber-800 mb-1">
                  <Flame className="w-4 h-4" />
                  <span>Total Interest {includeGst ? '+ 18% GST ' : ''}Paid</span>
                </div>
                <p className="text-xl sm:text-2xl font-extrabold text-amber-900">
                  {analysis.anyTrapped
                    ? `${formatINR(analysis.totalInterestTrap)}+`
                    : formatINR(analysis.totalInterestTrap)}
                </p>
                <p className="text-[11px] text-amber-800 mt-1">
                  Total paid: {formatINR(analysis.totalMinDueOutflow)} on {formatINR(analysis.totalCardDebt)} card debt.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-1.5 text-xs font-bold text-slate-700 mb-1">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  <span>Month 1 Payment Split</span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-slate-900">
                  {formatINR(analysis.firstMonthTotalMinDue)} Due
                </p>
                <p className="text-[11px] text-slate-600 mt-1">
                  {formatINR(analysis.firstMonthTotalInt)} goes straight to interest &amp; GST. Only{' '}
                  {formatINR(Math.max(0, analysis.firstMonthTotalMinDue - analysis.firstMonthTotalInt))}{' '}
                  cuts principal.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
                <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-800 mb-1">
                  <TrendingDown className="w-4 h-4" />
                  <span>Indicative Card OTS Range</span>
                </div>
                <p className="text-lg sm:text-xl font-extrabold text-emerald-900">
                  {formatINR(analysis.settlementLow)} - {formatINR(analysis.settlementHigh)}
                </p>
                <p className="text-[11px] text-emerald-800 mt-1">
                  Estimated NPA compromise range (not guaranteed; CIBIL marked Settled).
                </p>
              </div>
            </div>

            {/* PER-CARD ISSUER BREAKDOWN TABLE */}
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-slate-900">
                Card-by-Card Payoff vs Indicative Issuer Settlement Breakdown
              </h3>
              <div className="overflow-x-auto border border-slate-200 rounded-2xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-slate-100 text-slate-800 font-bold border-b border-slate-200">
                      <th className="p-3">Issuer</th>
                      <th className="p-3">Balance</th>
                      <th className="p-3">Min-Due Time</th>
                      <th className="p-3">Interest + GST</th>
                      <th className="p-3">Indicative OTS*</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 text-slate-700">
                    {analysis.perCard.map((row) => (
                      <tr key={row.id} className="hover:bg-slate-50">
                        <td className="p-3 font-bold text-slate-900">{row.issuer}</td>
                        <td className="p-3">{formatINR(row.balance)}</td>
                        <td className="p-3 text-rose-700 font-semibold">
                          {formatMonths(row.monthsToPayoff, row.trapped)}
                        </td>
                        <td className="p-3 text-amber-800 font-semibold">
                          {formatINR(row.totalInterestAndGst)}
                        </td>
                        <td className="p-3 text-emerald-800 font-bold">
                          {formatINR(row.settlementMin)} - {formatINR(row.settlementMax)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-[11px] text-slate-500 leading-relaxed">
                *Caveat: Past OTS ranges apply to cards past 90+ days overdue under the June 8,
                2023 RBI circular. Banks approve waivers at their own choice based on real hardship
                and fee share. Settling drops your CIBIL score and marks the card as Settled.
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* ₹3,00,000 CONDITIONAL GATE: PREFILLED FUNNEL VS SELF-HELP STEPS */}
      <section aria-label="Next Steps Based on Total Debt" className="space-y-4">
        {isEligibleForFunnel ? (
          <div className="rounded-3xl border-2 border-blue-200 bg-blue-50/50 p-5 sm:p-7 space-y-4">
            <div className="max-w-3xl mx-auto text-center space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>
                  Total Combined Debt: {formatINR(analysis.totalCombinedDebt)} (Meets ₹3,00,000 Case Floor)
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                Check Multi-Card &amp; Loan Settlement Eligibility
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                Your combined debt across credit cards, personal loans, and app loans is{' '}
                <strong>{formatINR(analysis.totalCombinedDebt)}</strong>. You qualify for a single
                debt relief review. We prefilled your debt slab ({computedBracket}) below.
              </p>
            </div>
            <InteractiveLeadFunnel
              key={computedBracket}
              className="!bg-transparent !py-2 !px-0 !pb-2"
            />
          </div>
        ) : (
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">
              <Info className="w-4 h-4" />
              <span>
                Combined Debt: {formatINR(analysis.totalCombinedDebt)} (Below ₹3,00,000 Settlement Floor)
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Self-Help Payoff Plan for Debt Below ₹3 Lakh
            </h2>
            <p className="text-sm text-slate-700 leading-relaxed">
              We take settlement cases only when total debt across all cards, personal loans, and
              app loans is ₹3,00,000 or more. Below ₹3 Lakh, direct payoff saves your CIBIL score
              and costs less. Follow these four self-help steps right now.
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  1. Pay {formatINR(analysis.pay18Months)} Every Month.
                </strong>
                A fixed {formatINR(analysis.pay18Months)} monthly budget clears your{' '}
                {formatINR(analysis.totalCardDebt)} card dues in 18 months. Your CIBIL status stays Closed.
              </li>
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  2. Stop Fresh Card Swipes Today.
                </strong>
                Use UPI or a debit card for daily bills. Any swipe on an unpaid card loses the
                45-day grace window and adds daily interest.
              </li>
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  3. Ask Your Bank for an EMI Plan.
                </strong>
                Open HDFC MyCards, SBI Card, or ICICI iMobile to convert card dues into an 18% to
                22% EMI. That cuts your 45% APR in half.
              </li>
              <li className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <strong className="text-slate-900 block mb-1">
                  4. Add Any Other Loans Above.
                </strong>
                Do you also owe personal loans or app loans that push your total above ₹3,00,000?
                Enter them in the Optional Debt box above.
              </li>
            </ul>
          </div>
        )}
      </section>

      {/* EDUCATIONAL GUIDE SECTIONS */}
      <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-8 shadow-sm space-y-8">
        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            3. How Indian Banks Calculate Credit Card Minimum Due
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Most Indian banks set Minimum Amount Due (MAD) at 5% of your closing bill. If you have
            card EMIs, over-limit fees, or past unpaid minimums, the bank adds 100% of those charges
            on top of the 5% amount.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Paying only the minimum skips the late fee for one month. Yet the unpaid 95% balance
            rolls forward at 3.5% to 3.99% monthly interest. The bank also adds 18% GST on all
            interest, which pushes your true yearly cost near 50%.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Read our plain guide on the{' '}
            <Link
              href="/credit-card-minimum-due-trap"
              className="text-blue-600 hover:underline font-semibold"
            >
              credit card minimum due trap
            </Link>{' '}
            to see sample bills. You can also test payoff order in our{' '}
            <Link
              href="/tools/multiple-credit-card-payoff-vs-settlement-calculator"
              className="text-blue-600 hover:underline font-semibold"
            >
              multiple credit card payoff vs settlement planner
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            4. RBI Rules on Minimum Due Warnings and Rising Balances
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            Under the RBI Credit Card Master Direction (updated March 7, 2024), banks must print a
            clear warning on every bill showing how long minimum payments take. Banks also cannot
            turn unpaid penal charges into fresh principal that earns more interest.
          </p>
          <ul className="space-y-2 text-sm text-slate-700 list-disc pl-5">
            <li>
              Banks cannot set a minimum due so small that your card balance grows every month.
            </li>
            <li>
              Late fees apply only if minimum due stays unpaid for more than three clear days past
              the due date.
            </li>
            <li>
              If your card is already frozen, read our guide on{' '}
              <Link
                href="/credit-card-blocked-due-to-non-payment"
                className="text-blue-600 hover:underline font-semibold"
              >
                credit card blocked due to non-payment
              </Link>{' '}
              before making partial token payments to callers.
            </li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            5. When One-Time Settlement Beats Minimum Payments
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            If you can clear all cards in 12 to 24 months by cutting costs, full payoff is best.
            Paying in full keeps your CIBIL report clean with a Closed mark.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            However, job loss, pay cuts, or illness can leave you with ₹3,00,000 or more in unpaid
            bills. In real hardship, paying 5% minimums only wastes cash while debt stays flat. A
            formal settlement via{' '}
            <Link
              href="/services/credit-card-settlement"
              className="text-blue-600 hover:underline font-semibold"
            >
              credit card settlement services
            </Link>{' '}
            or closing{' '}
            <Link
              href="/settle-multiple-credit-cards"
              className="text-blue-600 hover:underline font-semibold"
            >
              multiple credit cards
            </Link>{' '}
            stops rising fees and gets you written No Dues letters.
          </p>
        </section>

        {/* FAQ ACCORDION */}
        <section className="space-y-4 pt-4 border-t border-slate-100">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
            6. Frequently Asked Questions on Credit Card Minimum Due
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
