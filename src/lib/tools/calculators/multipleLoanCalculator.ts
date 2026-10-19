/**
 * Calculation Engine for Tool 3: Multiple Loan Debt Calculator
 *
 * Implements portfolio-wide debt aggregation, partial/full payment tracking,
 * weighted average annual interest rate (APR) computation,
 * risk identification (highest interest rate, largest balance),
 * and Indian currency (INR) formatting.
 */

export type LoanType =
  | 'Personal Loan'
  | 'Credit Card'
  | 'Home Loan'
  | 'Auto Loan'
  | 'Education Loan'
  | 'Gold Loan'
  | 'Consumer Durable'
  | 'Business Loan'
  | 'Other Debt';

export interface DebtRowInput {
  id: string;
  name: string;
  type: LoanType;
  balance: number;
  interestRate?: number | null;
  monthlyPayment?: number | null;
}

export interface DebtCalculationItem {
  id: string;
  name: string;
  type: LoanType;
  balance: number;
  interestRate: number | null;
  monthlyPayment: number | null;
  sharePercentage: number;
  annualInterestCost: number | null;
  color: string;
  formatted: {
    balance: string;
    interestRate: string;
    monthlyPayment: string;
    sharePercentage: string;
    annualInterestCost: string;
  };
}

export interface MultipleLoanResult {
  // Aggregated totals
  totalDebt: number;
  debtCount: number;
  
  // Monthly payments aggregation
  totalMonthlyPayment: number;
  paymentCompleteness: 'full' | 'partial' | 'none';
  paymentsEnteredCount: number;
  paymentsMissingCount: number;

  // Weighted average annual interest rate
  weightedAverageRate: number | null;
  rateCompleteness: 'full' | 'partial' | 'none';
  ratesEnteredCount: number;
  ratesMissingCount: number;
  knownBalanceForRates: number;
  partialWeightedAverageRate: number | null;

  // Total annual interest cost (only for known rates)
  totalEstimatedAnnualInterest: number | null;

  // High-priority strategic insights
  highestRateDebt: {
    id: string;
    name: string;
    rate: number;
    balance: number;
  } | null;

  largestBalanceDebt: {
    id: string;
    name: string;
    balance: number;
    sharePercentage: number;
  } | null;

  smallestBalanceDebt: {
    id: string;
    name: string;
    balance: number;
    sharePercentage: number;
  } | null;

  largestPaymentDebt: {
    id: string;
    name: string;
    payment: number;
  } | null;

  // Itemized breakdown list
  items: DebtCalculationItem[];

  // Informational warnings
  warnings: string[];

  // Formatted string representations (INR)
  formatted: {
    totalDebt: string;
    totalMonthlyPayment: string;
    paymentCompletenessLabel: string;
    weightedAverageRate: string;
    rateCompletenessLabel: string;
    totalEstimatedAnnualInterest: string;
  };
}

// Preset color palette for portfolio visual breakdown
export const DEBT_PALETTE = [
  '#007AFF', // Blue
  '#F59E0B', // Amber
  '#10B981', // Emerald
  '#8B5CF6', // Purple
  '#EC4899', // Pink
  '#06B6D4', // Cyan
  '#F97316', // Orange
  '#6366F1', // Indigo
  '#14B8A6', // Teal
  '#64748B', // Slate
];

/**
 * Format currency to Indian Rupees (INR) with Indian comma grouping (Lakhs/Crores)
 */
export function formatINR(val: number): string {
  if (isNaN(val) || !isFinite(val)) return '₹0';
  const rounded = Math.round(val);
  return '₹' + rounded.toLocaleString('en-IN');
}

/**
 * Format percentage with sensible precision
 */
export function formatPercentage(val: number | null, decimals = 2): string {
  if (val === null || isNaN(val) || !isFinite(val)) return 'Unknown';
  return `${val.toFixed(decimals)}%`;
}

/**
 * Input validation for multiple debt calculation
 */
export function validateMultipleLoanInput(data: any): {
  isValid: boolean;
  sanitized: DebtRowInput[];
  error?: string;
} {
  if (!data || !Array.isArray(data.debts)) {
    return {
      isValid: false,
      sanitized: [],
      error: 'Please provide a list of debts to calculate.',
    };
  }

  if (data.debts.length === 0) {
    return {
      isValid: false,
      sanitized: [],
      error: 'Please provide at least one debt row.',
    };
  }

  const sanitized: DebtRowInput[] = [];

  for (let i = 0; i < data.debts.length; i++) {
    const raw = data.debts[i];
    const indexLabel = `Debt #${i + 1}`;

    if (!raw || typeof raw !== 'object') {
      return {
        isValid: false,
        sanitized: [],
        error: `Invalid data format for ${indexLabel}.`,
      };
    }

    // Name sanitization
    const name = typeof raw.name === 'string' && raw.name.trim() !== ''
      ? raw.name.trim().substring(0, 80)
      : `Debt ${i + 1}`;

    // Loan Type sanitization
    const validTypes: LoanType[] = [
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
    const type: LoanType = validTypes.includes(raw.type) ? raw.type : 'Personal Loan';

    // Outstanding Balance validation (must be > 0)
    const balanceNum = Number(raw.balance);
    if (isNaN(balanceNum) || balanceNum <= 0) {
      return {
        isValid: false,
        sanitized: [],
        error: `${name} has an invalid outstanding balance. Balance must be greater than ₹0.`,
      };
    }

    if (balanceNum > 1_000_000_000) {
      return {
        isValid: false,
        sanitized: [],
        error: `${name} balance exceeds reasonable calculation limit (₹100 Cr).`,
      };
    }

    // Interest Rate validation (optional, >= 0 and <= 100)
    let interestRate: number | null = null;
    if (raw.interestRate !== undefined && raw.interestRate !== null && raw.interestRate !== '') {
      const rateNum = Number(raw.interestRate);
      if (isNaN(rateNum) || rateNum < 0) {
        return {
          isValid: false,
          sanitized: [],
          error: `${name} has a negative interest rate. Rates must be 0% or positive.`,
        };
      }
      if (rateNum > 100) {
        return {
          isValid: false,
          sanitized: [],
          error: `${name} has an interest rate exceeding 100%. Please enter an annual rate between 0% and 100%.`,
        };
      }
      interestRate = Math.round(rateNum * 100) / 100;
    }

    // Monthly Payment validation (optional, >= 0)
    let monthlyPayment: number | null = null;
    if (raw.monthlyPayment !== undefined && raw.monthlyPayment !== null && raw.monthlyPayment !== '') {
      const paymentNum = Number(raw.monthlyPayment);
      if (isNaN(paymentNum) || paymentNum < 0) {
        return {
          isValid: false,
          sanitized: [],
          error: `${name} has a negative monthly payment. Payments must be 0 or positive.`,
        };
      }
      if (paymentNum > 500_000_000) {
        return {
          isValid: false,
          sanitized: [],
          error: `${name} payment exceeds reasonable calculation limits.`,
        };
      }
      monthlyPayment = Math.round(paymentNum * 100) / 100;
    }

    const id = typeof raw.id === 'string' && raw.id.trim() !== ''
      ? raw.id.trim()
      : `debt_${Date.now()}_${i}`;

    sanitized.push({
      id,
      name,
      type,
      balance: Math.round(balanceNum * 100) / 100,
      interestRate,
      monthlyPayment,
    });
  }

  return {
    isValid: true,
    sanitized,
  };
}

/**
 * Pure calculation engine for Multiple Loan Debt Portfolio
 */
export function calculateMultipleLoans(debts: DebtRowInput[]): MultipleLoanResult {
  const debtCount = debts.length;
  const warnings: string[] = [];

  // 1. Total Outstanding Debt
  let totalDebt = 0;
  for (const debt of debts) {
    totalDebt += debt.balance;
  }

  // 2. Payments aggregation
  let totalMonthlyPayment = 0;
  let paymentsEnteredCount = 0;
  let largestPaymentVal = -1;
  let largestPaymentDebtItem: { id: string; name: string; payment: number } | null = null;

  for (const debt of debts) {
    if (debt.monthlyPayment !== null && debt.monthlyPayment !== undefined && debt.monthlyPayment > 0) {
      totalMonthlyPayment += debt.monthlyPayment;
      paymentsEnteredCount++;

      if (debt.monthlyPayment > largestPaymentVal) {
        largestPaymentVal = debt.monthlyPayment;
        largestPaymentDebtItem = {
          id: debt.id,
          name: debt.name,
          payment: debt.monthlyPayment,
        };
      }
    }
  }

  const paymentsMissingCount = debtCount - paymentsEnteredCount;
  let paymentCompleteness: 'full' | 'partial' | 'none' = 'none';
  let paymentCompletenessLabel = 'No payments entered';

  if (paymentsEnteredCount === debtCount) {
    paymentCompleteness = 'full';
    paymentCompletenessLabel = `Full Total (${debtCount} of ${debtCount} debts)`;
  } else if (paymentsEnteredCount > 0) {
    paymentCompleteness = 'partial';
    paymentCompletenessLabel = `Partial Total (${paymentsEnteredCount} of ${debtCount} debts reporting)`;
    warnings.push(
      `Monthly EMI / payment was omitted for ${paymentsMissingCount} ${
        paymentsMissingCount === 1 ? 'debt' : 'debts'
      }. The combined payment shown is a partial total.`
    );
  } else {
    warnings.push('No monthly payments were entered. Enter EMIs to view combined monthly cash outflow.');
  }

  // 3. Weighted Average Annual Interest Rate (APR)
  let weightedInterestProductSum = 0;
  let knownBalanceForRates = 0;
  let ratesEnteredCount = 0;
  let highestRateVal = -1;
  let highestRateDebtItem: { id: string; name: string; rate: number; balance: number } | null = null;
  let totalEstimatedAnnualInterest: number | null = null;
  let sumAnnualInterest = 0;

  for (const debt of debts) {
    if (debt.interestRate !== null && debt.interestRate !== undefined) {
      weightedInterestProductSum += debt.balance * debt.interestRate;
      knownBalanceForRates += debt.balance;
      ratesEnteredCount++;

      const annualInterestCost = debt.balance * (debt.interestRate / 100);
      sumAnnualInterest += annualInterestCost;

      if (debt.interestRate > highestRateVal) {
        highestRateVal = debt.interestRate;
        highestRateDebtItem = {
          id: debt.id,
          name: debt.name,
          rate: debt.interestRate,
          balance: debt.balance,
        };
      }
    }
  }

  const ratesMissingCount = debtCount - ratesEnteredCount;
  let rateCompleteness: 'full' | 'partial' | 'none' = 'none';
  let weightedAverageRate: number | null = null;
  let partialWeightedAverageRate: number | null = null;
  let rateCompletenessLabel = 'Unavailable (no rates entered)';

  if (ratesEnteredCount > 0 && knownBalanceForRates > 0) {
    const calculatedRate = weightedInterestProductSum / knownBalanceForRates;
    partialWeightedAverageRate = Math.round(calculatedRate * 100) / 100;
    totalEstimatedAnnualInterest = Math.round(sumAnnualInterest);

    if (ratesEnteredCount === debtCount) {
      rateCompleteness = 'full';
      weightedAverageRate = partialWeightedAverageRate;
      rateCompletenessLabel = `Verified Portfolio APR (${debtCount} of ${debtCount} debts)`;
    } else {
      rateCompleteness = 'partial';
      weightedAverageRate = null; // Stated as unavailable/partial per strict requirement
      rateCompletenessLabel = `Partial APR (Excludes ${ratesMissingCount} unstated ${
        ratesMissingCount === 1 ? 'debt' : 'debts'
      })`;
      warnings.push(
        `Annual interest rate is missing for ${ratesMissingCount} ${
          ratesMissingCount === 1 ? 'debt' : 'debts'
        }. A portfolio weighted APR cannot be fully determined until all rates are entered.`
      );
    }
  } else {
    warnings.push('No interest rates entered. Enter APRs to identify high-cost debt and calculate weighted interest.');
  }

  // 4. Largest and Smallest Balance Debts
  let largestBalVal = -1;
  let largestBalDebt: { id: string; name: string; balance: number; sharePercentage: number } | null = null;
  let smallestBalVal = Infinity;
  let smallestBalDebt: { id: string; name: string; balance: number; sharePercentage: number } | null = null;

  for (const debt of debts) {
    if (debt.balance > largestBalVal) {
      largestBalVal = debt.balance;
      const share = totalDebt > 0 ? (debt.balance / totalDebt) * 100 : 0;
      largestBalDebt = {
        id: debt.id,
        name: debt.name,
        balance: debt.balance,
        sharePercentage: Math.round(share * 10) / 10,
      };
    }
    if (debt.balance < smallestBalVal) {
      smallestBalVal = debt.balance;
      const share = totalDebt > 0 ? (debt.balance / totalDebt) * 100 : 0;
      smallestBalDebt = {
        id: debt.id,
        name: debt.name,
        balance: debt.balance,
        sharePercentage: Math.round(share * 10) / 10,
      };
    }
  }

  // 5. Itemized Breakdown Calculation
  const items: DebtCalculationItem[] = debts.map((debt, index) => {
    const sharePercentage = totalDebt > 0 ? (debt.balance / totalDebt) * 100 : 0;
    const roundedShare = Math.round(sharePercentage * 10) / 10;
    const color = DEBT_PALETTE[index % DEBT_PALETTE.length];

    let annualInterestCost: number | null = null;
    if (debt.interestRate !== null && debt.interestRate !== undefined) {
      annualInterestCost = Math.round(debt.balance * (debt.interestRate / 100));
    }

    return {
      id: debt.id,
      name: debt.name,
      type: debt.type,
      balance: debt.balance,
      interestRate: debt.interestRate ?? null,
      monthlyPayment: debt.monthlyPayment ?? null,
      sharePercentage: roundedShare,
      annualInterestCost,
      color,
      formatted: {
        balance: formatINR(debt.balance),
        interestRate:
          debt.interestRate !== null && debt.interestRate !== undefined
            ? `${debt.interestRate.toFixed(1)}%`
            : 'Not specified',
        monthlyPayment:
          debt.monthlyPayment !== null && debt.monthlyPayment !== undefined && debt.monthlyPayment > 0
            ? formatINR(debt.monthlyPayment)
            : 'Not specified',
        sharePercentage: `${roundedShare.toFixed(1)}%`,
        annualInterestCost:
          annualInterestCost !== null ? formatINR(annualInterestCost) : 'Unknown',
      },
    };
  });

  return {
    totalDebt: Math.round(totalDebt),
    debtCount,
    totalMonthlyPayment: Math.round(totalMonthlyPayment),
    paymentCompleteness,
    paymentsEnteredCount,
    paymentsMissingCount,
    weightedAverageRate,
    rateCompleteness,
    ratesEnteredCount,
    ratesMissingCount,
    knownBalanceForRates: Math.round(knownBalanceForRates),
    partialWeightedAverageRate,
    totalEstimatedAnnualInterest,
    highestRateDebt: highestRateDebtItem,
    largestBalanceDebt: largestBalDebt,
    smallestBalanceDebt: smallestBalDebt,
    largestPaymentDebt: largestPaymentDebtItem,
    items,
    warnings,
    formatted: {
      totalDebt: formatINR(totalDebt),
      totalMonthlyPayment:
        paymentCompleteness === 'none'
          ? 'Not specified'
          : formatINR(totalMonthlyPayment),
      paymentCompletenessLabel,
      weightedAverageRate:
        rateCompleteness === 'full' && weightedAverageRate !== null
          ? `${weightedAverageRate.toFixed(2)}% p.a.`
          : rateCompleteness === 'partial' && partialWeightedAverageRate !== null
          ? `${partialWeightedAverageRate.toFixed(2)}% p.a. (Partial)`
          : 'Unavailable',
      rateCompletenessLabel,
      totalEstimatedAnnualInterest:
        totalEstimatedAnnualInterest !== null
          ? formatINR(totalEstimatedAnnualInterest)
          : 'Unavailable',
    },
  };
}
