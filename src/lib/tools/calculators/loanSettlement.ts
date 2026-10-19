/**
 * Backend Calculation Engine for Tool 1: Loan Settlement Calculator
 *
 * Implements decimal-safe arithmetic, Indian currency formatting (INR),
 * tabular comparison generation, and strict input validation.
 */

export interface LoanSettlementInput {
  outstandingBalance: number;
  settlementPercentage: number;
  additionalFees?: number;
  fullRepaymentComparison?: number;
}

export interface ComparisonRow {
  key: string;
  label: string;
  amount: number;
  formattedAmount: string;
  notes: string;
  highlight?: 'neutral' | 'settlement' | 'savings' | 'fees';
}

export interface LoanSettlementResult {
  // Input reflection
  outstandingBalance: number;
  settlementPercentage: number;
  additionalFees: number;
  baselineComparisonAmount: number;

  // Calculated outputs
  settlementAmount: number;
  totalSettlementCost: number;
  estimatedDifference: number; // Positive = savings, Negative = additional cost
  differencePercentage: number; // As % of comparison baseline

  // Formatted representations (₹ Indian Grouping)
  formatted: {
    outstandingBalance: string;
    settlementAmount: string;
    additionalFees: string;
    totalSettlementCost: string;
    estimatedDifference: string;
    baselineComparisonAmount: string;
    differencePercentage: string;
    settlementPercentage: string;
  };

  // Structured breakdown matrix
  comparisonTable: ComparisonRow[];

  // Informational flags & caveats
  flags: {
    isNegativeSavings: boolean;
    isFullSettlement: boolean;
    isZeroSettlement: boolean;
    feesExceedTenPercent: boolean;
  };

  disclaimer: string;
}

/**
 * Formats a numeric value into INR currency string with Indian digit grouping
 * Example: 200000 -> ₹2,00,000
 */
export function formatINR(val: number): string {
  const rounded = Math.round(val);
  const isNegative = rounded < 0;
  const absVal = Math.abs(rounded);
  const formatted = new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 0,
  }).format(absVal);
  return `${isNegative ? '-' : ''}₹${formatted}`;
}

/**
 * Validates loan settlement inputs
 */
export function validateLoanSettlementInput(input: any): {
  isValid: boolean;
  error?: string;
  sanitized?: LoanSettlementInput;
} {
  if (!input || typeof input !== 'object') {
    return { isValid: false, error: 'Request body must be a valid JSON object.' };
  }

  const balance = Number(input.outstandingBalance);
  if (isNaN(balance) || !isFinite(balance) || balance <= 0) {
    return {
      isValid: false,
      error: 'Outstanding loan balance is required and must be greater than zero.',
    };
  }

  const percentage = Number(input.settlementPercentage);
  if (isNaN(percentage) || !isFinite(percentage) || percentage < 0 || percentage > 100) {
    return {
      isValid: false,
      error: 'Settlement percentage is required and must be between 0% and 100%.',
    };
  }

  let fees = 0;
  if (input.additionalFees !== undefined && input.additionalFees !== null && input.additionalFees !== '') {
    fees = Number(input.additionalFees);
    if (isNaN(fees) || !isFinite(fees) || fees < 0) {
      return {
        isValid: false,
        error: 'Additional fees cannot be negative.',
      };
    }
  }

  let fullRepayment: number | undefined = undefined;
  if (
    input.fullRepaymentComparison !== undefined &&
    input.fullRepaymentComparison !== null &&
    input.fullRepaymentComparison !== ''
  ) {
    fullRepayment = Number(input.fullRepaymentComparison);
    if (isNaN(fullRepayment) || !isFinite(fullRepayment) || fullRepayment < 0) {
      return {
        isValid: false,
        error: 'Full repayment comparison amount cannot be negative.',
      };
    }
  }

  return {
    isValid: true,
    sanitized: {
      outstandingBalance: balance,
      settlementPercentage: percentage,
      additionalFees: fees,
      fullRepaymentComparison: fullRepayment,
    },
  };
}

/**
 * Pure calculation function for Tool 1
 */
export function calculateLoanSettlement(input: LoanSettlementInput): LoanSettlementResult {
  const { outstandingBalance, settlementPercentage, additionalFees = 0, fullRepaymentComparison } = input;

  // Decimal safe calculation
  // settlementAmount = outstandingBalance * settlementPercentage / 100
  const settlementAmount = Math.round((outstandingBalance * settlementPercentage) / 100);

  // totalSettlementCost = settlementAmount + additionalFees
  const totalSettlementCost = settlementAmount + Math.round(additionalFees);

  // Baseline comparison: use provided comparison amount or default to outstandingBalance
  const baselineComparisonAmount =
    fullRepaymentComparison !== undefined && fullRepaymentComparison > 0
      ? Math.round(fullRepaymentComparison)
      : Math.round(outstandingBalance);

  // estimatedDifference = baseline - totalSettlementCost
  const estimatedDifference = baselineComparisonAmount - totalSettlementCost;

  // difference percentage relative to baseline
  const differencePercentage =
    baselineComparisonAmount > 0
      ? Number(((estimatedDifference / baselineComparisonAmount) * 100).toFixed(1))
      : 0;

  // Comparison matrix rows
  const comparisonTable: ComparisonRow[] = [
    {
      key: 'outstanding',
      label: 'Outstanding Loan Balance',
      amount: outstandingBalance,
      formattedAmount: formatINR(outstandingBalance),
      notes: 'Current total ledger balance including accrued charges.',
      highlight: 'neutral',
    },
    {
      key: 'settlement_payout',
      label: `Hypothetical Settlement (${settlementPercentage}%)`,
      amount: settlementAmount,
      formattedAmount: formatINR(settlementAmount),
      notes: 'Proposed principal compromise payout to the lender.',
      highlight: 'settlement',
    },
    {
      key: 'fees',
      label: 'Additional Legal & Processing Fees',
      amount: additionalFees,
      formattedAmount: formatINR(additionalFees),
      notes: additionalFees > 0 ? 'Document drafting, notarization, or legal facilitation fees.' : 'No additional fees entered.',
      highlight: 'fees',
    },
    {
      key: 'total_outflow',
      label: 'Total Estimated Settlement Cost',
      amount: totalSettlementCost,
      formattedAmount: formatINR(totalSettlementCost),
      notes: 'Total estimated monetary outflow required to complete the compromise.',
      highlight: 'neutral',
    },
    {
      key: 'savings',
      label: 'Estimated Difference / Net Cashflow Savings',
      amount: estimatedDifference,
      formattedAmount: formatINR(estimatedDifference),
      notes:
        estimatedDifference >= 0
          ? `Estimated cashflow reduction compared to ${baselineComparisonAmount === outstandingBalance ? 'outstanding balance' : 'full repayment'}.`
          : 'Total settlement cost exceeds the baseline balance.',
      highlight: 'savings',
    },
  ];

  const disclaimer =
    'Illustrative scenario only; not a settlement offer or guarantee. Actual compromise settlement offers depend on lender credit policy, delinquency vintage (DPD/NPA status), bilateral documentation, and internal sanction committee approval.';

  return {
    outstandingBalance,
    settlementPercentage,
    additionalFees,
    baselineComparisonAmount,
    settlementAmount,
    totalSettlementCost,
    estimatedDifference,
    differencePercentage,
    formatted: {
      outstandingBalance: formatINR(outstandingBalance),
      settlementAmount: formatINR(settlementAmount),
      additionalFees: formatINR(additionalFees),
      totalSettlementCost: formatINR(totalSettlementCost),
      estimatedDifference: formatINR(estimatedDifference),
      baselineComparisonAmount: formatINR(baselineComparisonAmount),
      differencePercentage: `${differencePercentage > 0 ? '+' : ''}${differencePercentage}%`,
      settlementPercentage: `${settlementPercentage}%`,
    },
    comparisonTable,
    flags: {
      isNegativeSavings: estimatedDifference < 0,
      isFullSettlement: settlementPercentage >= 100,
      isZeroSettlement: settlementPercentage === 0,
      feesExceedTenPercent: additionalFees > outstandingBalance * 0.1,
    },
    disclaimer,
  };
}
