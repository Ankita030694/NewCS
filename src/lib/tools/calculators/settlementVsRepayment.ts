/**
 * Backend Calculation Engine for Tool 6: Settlement vs Full Repayment Comparison
 *
 * Implements decimal-safe arithmetic, Indian currency formatting (INR),
 * reducing-balance EMI amortization schedules, multi-dimensional decision matrix,
 * and automated detection of incompatible financial assumptions and guardrail warnings.
 */

export type RepaymentMode = 'calculate' | 'manual';
export type SettlementTiming = 'lump_sum' | 'staggered_3m';

export interface SettlementVsRepaymentInput {
  // Outstanding ledger balance (> 0)
  outstandingBalance: number;

  // Settlement parameters
  settlementPercentage: number; // 0 to 100%
  additionalSettlementFees?: number; // >= 0, default 0
  settlementTiming?: SettlementTiming; // default 'lump_sum'

  // Repayment parameters
  repaymentMode: RepaymentMode;
  // If 'manual': user supplies the total repayment figure directly
  manualFullRepaymentTotal?: number;
  manualTenureMonths?: number;

  // If 'calculate': model-estimated from APR and tenure
  annualInterestRate?: number; // >= 0
  remainingTenureMonths?: number; // > 0
  additionalRepaymentFees?: number; // >= 0, default 0
}

export interface MonthlyAmortizationRow {
  month: number;
  openingBalance: number;
  emi: number;
  principalPortion: number;
  interestPortion: number;
  closingBalance: number;
  cumulativeInterest: number;
  formatted: {
    openingBalance: string;
    emi: string;
    principalPortion: string;
    interestPortion: string;
    closingBalance: string;
    cumulativeInterest: string;
  };
}

export interface ComparisonDimension {
  id: string;
  dimension: string;
  settlementAspect: string;
  repaymentAspect: string;
  verdictNote: string;
  impact: 'settlement_favored' | 'repayment_favored' | 'neutral' | 'tradeoff';
}

export interface AssumptionWarning {
  id: string;
  title: string;
  severity: 'warning' | 'advisory' | 'caution' | 'info';
  message: string;
}

export interface SettlementVsRepaymentResult {
  // Input echo
  outstandingBalance: number;
  settlementPercentage: number;
  repaymentMode: RepaymentMode;

  // Settlement outputs
  settlement: {
    principalPayout: number;
    additionalFees: number;
    totalCost: number;
    haircutAmount: number;
    haircutPercentage: number;
    timing: SettlementTiming;
    timingLabel: string;
  };

  // Full Repayment outputs
  repayment: {
    mode: RepaymentMode;
    sourceLabel: string;
    monthlyEmi: number;
    totalBasePayments: number;
    additionalFees: number;
    fullRepaymentTotal: number;
    totalInterestPaid: number;
    tenureMonths: number;
    annualInterestRate: number;
  };

  // Delta & comparison
  comparison: {
    nominalCashDifference: number; // Positive = settlement is nominally cheaper, Negative = settlement is costlier
    nominalSavingsPercentage: number; // Difference as % of repayment total
    costRatio: number; // Settlement total as % of repayment total
    direction: 'settlement_cheaper' | 'repayment_cheaper' | 'equal';
    headlineSummary: string;
  };

  // Formatted INR values
  formatted: {
    outstandingBalance: string;
    settlementPrincipalPayout: string;
    additionalSettlementFees: string;
    totalSettlementCost: string;
    settlementHaircutAmount: string;
    settlementHaircutPercentage: string;
    fullRepaymentTotal: string;
    monthlyEmi: string;
    totalInterestPaid: string;
    additionalRepaymentFees: string;
    nominalCashDifference: string;
    nominalSavingsPercentage: string;
  };

  // Warnings regarding incompatible horizons or fees
  warnings: AssumptionWarning[];

  // 7-Pillar Decision Matrix
  dimensions: ComparisonDimension[];

  // Amortization schedule (populated only if repaymentMode === 'calculate')
  amortizationSchedule: MonthlyAmortizationRow[];

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
 * Formats percentage value
 */
export function formatPercentage(val: number, decimals: number = 1): string {
  return `${val.toFixed(decimals)}%`;
}

/**
 * Validates input parameters for Tool 6
 */
export function validateSettlementVsRepaymentInput(input: any): {
  isValid: boolean;
  error?: string;
  sanitized?: SettlementVsRepaymentInput;
} {
  if (!input || typeof input !== 'object') {
    return { isValid: false, error: 'Request body must be a valid JSON object.' };
  }

  // 1. Outstanding Balance
  const balance = Number(input.outstandingBalance);
  if (isNaN(balance) || !isFinite(balance) || balance <= 0) {
    return {
      isValid: false,
      error: 'Current outstanding loan balance is required and must be greater than zero.',
    };
  }

  // 2. Settlement Percentage
  const percentage = Number(input.settlementPercentage);
  if (isNaN(percentage) || !isFinite(percentage) || percentage < 0 || percentage > 100) {
    return {
      isValid: false,
      error: 'Settlement percentage must be between 0% and 100%.',
    };
  }

  // 3. Additional Settlement Fees
  let settlementFees = 0;
  if (input.additionalSettlementFees !== undefined && input.additionalSettlementFees !== null && input.additionalSettlementFees !== '') {
    settlementFees = Number(input.additionalSettlementFees);
    if (isNaN(settlementFees) || !isFinite(settlementFees) || settlementFees < 0) {
      return {
        isValid: false,
        error: 'Additional settlement fees cannot be negative.',
      };
    }
  }

  // Settlement Timing
  const timing: SettlementTiming = input.settlementTiming === 'staggered_3m' ? 'staggered_3m' : 'lump_sum';

  // 4. Repayment Mode
  const mode: RepaymentMode = input.repaymentMode === 'manual' ? 'manual' : 'calculate';

  let manualRepayment: number | undefined = undefined;
  let manualTenure: number | undefined = undefined;
  let annualRate: number | undefined = undefined;
  let remainingTenure: number | undefined = undefined;
  let repaymentFees = 0;

  if (input.additionalRepaymentFees !== undefined && input.additionalRepaymentFees !== null && input.additionalRepaymentFees !== '') {
    repaymentFees = Number(input.additionalRepaymentFees);
    if (isNaN(repaymentFees) || !isFinite(repaymentFees) || repaymentFees < 0) {
      return {
        isValid: false,
        error: 'Additional repayment fees cannot be negative.',
      };
    }
  }

  if (mode === 'manual') {
    if (input.manualFullRepaymentTotal === undefined || input.manualFullRepaymentTotal === null || input.manualFullRepaymentTotal === '') {
      return {
        isValid: false,
        error: 'Please enter a full repayment total amount for manual comparison.',
      };
    }
    manualRepayment = Number(input.manualFullRepaymentTotal);
    if (isNaN(manualRepayment) || !isFinite(manualRepayment) || manualRepayment < 0) {
      return {
        isValid: false,
        error: 'Full repayment total amount cannot be negative.',
      };
    }
    if (input.manualTenureMonths !== undefined && input.manualTenureMonths !== null && input.manualTenureMonths !== '') {
      manualTenure = Number(input.manualTenureMonths);
      if (isNaN(manualTenure) || !isFinite(manualTenure) || manualTenure <= 0) {
        return {
          isValid: false,
          error: 'Tenure in months must be greater than zero.',
        };
      }
    }
  } else {
    // Mode = 'calculate'
    if (input.annualInterestRate === undefined || input.annualInterestRate === null || input.annualInterestRate === '') {
      return {
        isValid: false,
        error: 'Annual interest rate is required when calculating repayment amortization.',
      };
    }
    annualRate = Number(input.annualInterestRate);
    if (isNaN(annualRate) || !isFinite(annualRate) || annualRate < 0) {
      return {
        isValid: false,
        error: 'Annual interest rate cannot be negative.',
      };
    }

    if (input.remainingTenureMonths === undefined || input.remainingTenureMonths === null || input.remainingTenureMonths === '') {
      return {
        isValid: false,
        error: 'Remaining tenure in months is required when calculating repayment amortization.',
      };
    }
    remainingTenure = Number(input.remainingTenureMonths);
    if (isNaN(remainingTenure) || !isFinite(remainingTenure) || remainingTenure <= 0 || !Number.isInteger(remainingTenure)) {
      return {
        isValid: false,
        error: 'Remaining tenure must be a positive whole number of months greater than zero.',
      };
    }
    if (remainingTenure > 360) {
      return {
        isValid: false,
        error: 'Remaining tenure cannot exceed 360 months (30 years).',
      };
    }
  }

  return {
    isValid: true,
    sanitized: {
      outstandingBalance: balance,
      settlementPercentage: percentage,
      additionalSettlementFees: settlementFees,
      settlementTiming: timing,
      repaymentMode: mode,
      manualFullRepaymentTotal: manualRepayment,
      manualTenureMonths: manualTenure,
      annualInterestRate: annualRate,
      remainingTenureMonths: remainingTenure,
      additionalRepaymentFees: repaymentFees,
    },
  };
}

/**
 * Computes standard reducing balance monthly installment (EMI)
 */
export function calculateEMI(principal: number, annualRatePct: number, tenureMonths: number): number {
  if (tenureMonths <= 0) return principal;
  if (annualRatePct === 0) {
    return Math.round(principal / tenureMonths);
  }
  const monthlyRate = annualRatePct / 1200;
  const factor = Math.pow(1 + monthlyRate, tenureMonths);
  const emi = (principal * monthlyRate * factor) / (factor - 1);
  return Math.round(emi);
}

/**
 * Generates month-by-month amortization schedule
 */
export function generateAmortizationSchedule(
  principal: number,
  annualRatePct: number,
  tenureMonths: number,
  monthlyEmi: number
): MonthlyAmortizationRow[] {
  const schedule: MonthlyAmortizationRow[] = [];
  let balance = principal;
  let cumulativeInterest = 0;
  const monthlyRate = annualRatePct / 1200;

  for (let m = 1; m <= tenureMonths; m++) {
    const opening = balance;
    let interestPortion = Math.round(opening * monthlyRate);
    let principalPortion = monthlyEmi - interestPortion;

    // Handle last month adjustment or overshoot
    if (m === tenureMonths || opening + interestPortion <= monthlyEmi) {
      principalPortion = opening;
      interestPortion = Math.max(0, monthlyEmi - principalPortion);
      balance = 0;
    } else {
      balance = Math.max(0, opening - principalPortion);
    }

    cumulativeInterest += interestPortion;

    schedule.push({
      month: m,
      openingBalance: opening,
      emi: monthlyEmi,
      principalPortion,
      interestPortion,
      closingBalance: balance,
      cumulativeInterest,
      formatted: {
        openingBalance: formatINR(opening),
        emi: formatINR(monthlyEmi),
        principalPortion: formatINR(principalPortion),
        interestPortion: formatINR(interestPortion),
        closingBalance: formatINR(balance),
        cumulativeInterest: formatINR(cumulativeInterest),
      },
    });

    if (balance <= 0) break;
  }

  return schedule;
}

/**
 * Generates multi-dimensional side-by-side comparison across 7 strategic dimensions
 */
export function generateComparisonDimensions(
  settlementCost: number,
  repaymentCost: number,
  haircutAmount: number,
  tenureMonths: number,
  isCalculatedMode: boolean
): ComparisonDimension[] {
  const diff = repaymentCost - settlementCost;
  const isSettlementNominallyCheaper = diff > 0;

  return [
    {
      id: 'cash_outlay',
      dimension: '1. Total Nominal Cash Outlay',
      settlementAspect: `${formatINR(settlementCost)} (Includes hypothetical haircut of ${formatINR(haircutAmount)})`,
      repaymentAspect: `${formatINR(repaymentCost)} (Full principal repayment plus accrued interest/fees)`,
      verdictNote: isSettlementNominallyCheaper
        ? `Settlement saves ${formatINR(diff)} in nominal out-of-pocket cash, provided funds are ready upfront.`
        : `Full repayment costs similar or less once high fees and charges are factored in.`,
      impact: isSettlementNominallyCheaper ? 'settlement_favored' : 'repayment_favored',
    },
    {
      id: 'credit_bureau',
      dimension: '2. CIBIL & Credit Bureau Reporting',
      settlementAspect: 'Account status reported as "SETTLED" or "POST-WRITE-OFF SETTLED". Can lower credit score by 70–120 points and remains on record for up to 7 years.',
      repaymentAspect: 'Account status reported as "CLOSED" or "PAID IN FULL". Demonstrates 100% contractual fulfillment; preserves and steadily rebuilds credit score.',
      verdictNote: 'Full repayment protects long-term creditworthiness. A "Settled" remark is a major red flag for underwriters.',
      impact: 'repayment_favored',
    },
    {
      id: 'future_borrowing',
      dimension: '3. Future Borrowing & Loan Eligibility',
      settlementAspect: 'Severe restriction on fresh credit cards, personal loans, and home loans for 2–5 years across scheduled commercial banks.',
      repaymentAspect: 'Restores borrowing eligibility for retail, prime home, and vehicle loans within 6–12 months of clean repayment.',
      verdictNote: 'Borrowers needing credit cards, mortgages, or emergency credit in the next 3–5 years suffer high opportunity loss with settlement.',
      impact: 'repayment_favored',
    },
    {
      id: 'income_tax',
      dimension: '4. Income Tax Implications (IT Act, India)',
      settlementAspect: 'For business, commercial, or sole proprietorship loans, debt remission may be treated as taxable income under Section 41(1) / Section 28(iv). Non-business personal loan waivers generally carry lower direct tax risk, but professional consultation is essential.',
      repaymentAspect: 'Zero tax risk. Repayment of contractual loan principal and interest carries no income tax assessment or unexpected tax liability.',
      verdictNote: 'Settlement can trigger surprising tax assessments for commercial debts, while repayment is 100% tax-neutral.',
      impact: 'repayment_favored',
    },
    {
      id: 'legal_protection',
      dimension: '5. Legal Notices & Recovery Actions',
      settlementAspect: 'Ceases only AFTER full payment of the agreed settlement sum and issuance of a formal, written "No Dues Certificate (NOC)" or Compromise Sanction Letter from the lender.',
      repaymentAspect: 'Immediate relief once EMIs are regularized. No compromise scrutiny; formal legal notices and arbitration proceedings are dismissed.',
      verdictNote: 'Both halt recovery once executed, but settlement carries higher risk if the borrower fails to secure an official signed OTS sanction letter.',
      impact: 'tradeoff',
    },
    {
      id: 'liquidity_cashflow',
      dimension: '6. Payment Timing & Liquidity Demands',
      settlementAspect: 'High upfront cash intensity: Requires payment in a single lump sum or 2–3 short tranches within 30 to 90 days.',
      repaymentAspect: tenureMonths > 1
        ? `Predictable monthly cash flow: Repayment is spread over ${tenureMonths} structured monthly installments.`
        : 'Immediate payoff without legal negotiation.',
      verdictNote: 'Settlement is only viable if substantial liquid savings or family support exist. Repayment accommodates ongoing monthly salary/income.',
      impact: 'tradeoff',
    },
    {
      id: 'approval_certainty',
      dimension: '7. Approval Certainty & Lender Policy',
      settlementAspect: 'Purely discretionary: Banks are not obligated to settle. Requires demonstrated genuine financial hardship (job loss, critical illness) under RBI compromise guidelines.',
      repaymentAspect: 'Contractual certainty: The lender cannot refuse full repayment of contractual debt.',
      verdictNote: 'Settlement cannot be assumed until formally sanctioned in writing by the bank credit committee.',
      impact: 'repayment_favored',
    },
  ];
}

/**
 * Pure Calculation Engine for Tool 6
 */
export function calculateSettlementVsRepayment(input: SettlementVsRepaymentInput): SettlementVsRepaymentResult {
  const {
    outstandingBalance,
    settlementPercentage,
    additionalSettlementFees = 0,
    settlementTiming = 'lump_sum',
    repaymentMode,
    manualFullRepaymentTotal,
    manualTenureMonths,
    annualInterestRate = 0,
    remainingTenureMonths = 1,
    additionalRepaymentFees = 0,
  } = input;

  // 1. Settlement Calculations
  const settlementPrincipalPayout = Math.round((outstandingBalance * settlementPercentage) / 100);
  const totalSettlementCost = settlementPrincipalPayout + additionalSettlementFees;
  const settlementHaircutAmount = Math.max(0, outstandingBalance - settlementPrincipalPayout);
  const settlementHaircutPercentage = Math.max(0, 100 - settlementPercentage);

  // 2. Repayment Calculations
  let monthlyEmi = 0;
  let totalBasePayments = 0;
  let fullRepaymentTotal = 0;
  let totalInterestPaid = 0;
  let effectiveTenure = remainingTenureMonths;
  let sourceLabel = '';
  let amortizationSchedule: MonthlyAmortizationRow[] = [];

  if (repaymentMode === 'manual') {
    totalBasePayments = manualFullRepaymentTotal || 0;
    fullRepaymentTotal = totalBasePayments + additionalRepaymentFees;
    totalInterestPaid = Math.max(0, fullRepaymentTotal - outstandingBalance);
    effectiveTenure = manualTenureMonths && manualTenureMonths > 0 ? manualTenureMonths : 1;
    monthlyEmi = effectiveTenure > 0 ? Math.round(fullRepaymentTotal / effectiveTenure) : fullRepaymentTotal;
    sourceLabel = 'User-Entered Repayment Total';
  } else {
    // Mode = 'calculate'
    effectiveTenure = remainingTenureMonths;
    monthlyEmi = calculateEMI(outstandingBalance, annualInterestRate, remainingTenureMonths);
    totalBasePayments = monthlyEmi * remainingTenureMonths;
    fullRepaymentTotal = totalBasePayments + additionalRepaymentFees;
    totalInterestPaid = Math.max(0, totalBasePayments - outstandingBalance);
    sourceLabel = `Model-Estimated (Amortized EMI @ ${formatPercentage(annualInterestRate)} for ${remainingTenureMonths} mos)`;
    amortizationSchedule = generateAmortizationSchedule(
      outstandingBalance,
      annualInterestRate,
      remainingTenureMonths,
      monthlyEmi
    );
  }

  // 3. Comparison & Delta
  const nominalCashDifference = fullRepaymentTotal - totalSettlementCost;
  const nominalSavingsPercentage =
    fullRepaymentTotal > 0 ? (nominalCashDifference / fullRepaymentTotal) * 100 : 0;
  const costRatio = fullRepaymentTotal > 0 ? (totalSettlementCost / fullRepaymentTotal) * 100 : 100;

  let direction: 'settlement_cheaper' | 'repayment_cheaper' | 'equal' = 'equal';
  let headlineSummary = '';

  if (nominalCashDifference > 0) {
    direction = 'settlement_cheaper';
    headlineSummary = `Settlement requires ${formatINR(nominalCashDifference)} (${formatPercentage(nominalSavingsPercentage)}) less out-of-pocket nominal cash, but incurs severe credit reporting consequences.`;
  } else if (nominalCashDifference < 0) {
    direction = 'repayment_cheaper';
    headlineSummary = `Full repayment is ${formatINR(Math.abs(nominalCashDifference))} cheaper than this settlement scenario due to high fees or low repayment cost.`;
  } else {
    direction = 'equal';
    headlineSummary = 'Both settlement and full repayment result in identical nominal cash cost.';
  }

  // 4. Guardrail & Incompatible Assumption Warnings
  const warnings: AssumptionWarning[] = [];

  // Warning 1: Time Horizon Mismatch (Lump-sum settlement vs multi-year repayment)
  if (effectiveTenure >= 12 && settlementTiming === 'lump_sum') {
    warnings.push({
      id: 'time_value_mismatch',
      title: 'Time-Value of Money & Horizon Mismatch',
      severity: 'warning',
      message: `You are comparing an immediate lump-sum settlement of ${formatINR(totalSettlementCost)} payable within 30–90 days against an installment repayment stream of ${formatINR(monthlyEmi)}/mo spread over ${effectiveTenure} months. While settlement shows lower nominal cash, it requires immediate liquid capital. Repayment preserves monthly cashflow liquidity.`,
    });
  }

  // Warning 2: High Settlement Percentage (>= 80%)
  if (settlementPercentage >= 80) {
    warnings.push({
      id: 'high_settlement_percentage',
      title: 'Suboptimal Settlement Percentage (Haircut < 20%)',
      severity: 'advisory',
      message: `At ${formatPercentage(settlementPercentage)}, the nominal cash savings are marginal (${formatINR(settlementHaircutAmount)}). Because settlement triggers a negative "Settled" status on CIBIL for up to 7 years, pursuing loan restructuring, tenure extension, or interest waiver with your lender may provide better long-term credit preservation.`,
    });
  }

  // Warning 3: High Settlement Fees (> 10% of balance)
  if (additionalSettlementFees > outstandingBalance * 0.1) {
    warnings.push({
      id: 'excessive_fees',
      title: 'High Additional Advisory / Legal Fees',
      severity: 'warning',
      message: `Additional settlement fees (${formatINR(additionalSettlementFees)}) exceed 10% of your outstanding loan balance, significantly diminishing the financial benefit of the compromise.`,
    });
  }

  // Warning 4: Negative Savings Scenario
  if (nominalCashDifference < 0) {
    warnings.push({
      id: 'negative_savings',
      title: 'Inverted Cost Outcome: Settlement Costs More',
      severity: 'caution',
      message: `In this scenario, settlement total (${formatINR(totalSettlementCost)}) exceeds full repayment (${formatINR(fullRepaymentTotal)}). Ensure you have entered realistic fee and percentage estimates.`,
    });
  }

  // Warning 5: Zero-Interest Assumption in Calculation
  if (repaymentMode === 'calculate' && annualInterestRate === 0) {
    warnings.push({
      id: 'zero_interest_repayment',
      title: 'Zero Interest Baseline Applied',
      severity: 'info',
      message: 'Repayment is calculated at 0% annual interest. This models a pure principal payoff or an agreement where future interest is fully frozen by the creditor.',
    });
  }

  // 5. Generate Multi-Dimensional Matrix
  const dimensions = generateComparisonDimensions(
    totalSettlementCost,
    fullRepaymentTotal,
    settlementHaircutAmount,
    effectiveTenure,
    repaymentMode === 'calculate'
  );

  const timingLabel = settlementTiming === 'staggered_3m' ? 'Staggered (2–3 Tranches)' : 'Lump Sum (Single Payment)';

  return {
    outstandingBalance,
    settlementPercentage,
    repaymentMode,
    settlement: {
      principalPayout: settlementPrincipalPayout,
      additionalFees: additionalSettlementFees,
      totalCost: totalSettlementCost,
      haircutAmount: settlementHaircutAmount,
      haircutPercentage: settlementHaircutPercentage,
      timing: settlementTiming,
      timingLabel,
    },
    repayment: {
      mode: repaymentMode,
      sourceLabel,
      monthlyEmi,
      totalBasePayments,
      additionalFees: additionalRepaymentFees,
      fullRepaymentTotal,
      totalInterestPaid,
      tenureMonths: effectiveTenure,
      annualInterestRate: repaymentMode === 'calculate' ? annualInterestRate : 0,
    },
    comparison: {
      nominalCashDifference,
      nominalSavingsPercentage,
      costRatio,
      direction,
      headlineSummary,
    },
    formatted: {
      outstandingBalance: formatINR(outstandingBalance),
      settlementPrincipalPayout: formatINR(settlementPrincipalPayout),
      additionalSettlementFees: formatINR(additionalSettlementFees),
      totalSettlementCost: formatINR(totalSettlementCost),
      settlementHaircutAmount: formatINR(settlementHaircutAmount),
      settlementHaircutPercentage: formatPercentage(settlementHaircutPercentage),
      fullRepaymentTotal: formatINR(fullRepaymentTotal),
      monthlyEmi: formatINR(monthlyEmi),
      totalInterestPaid: formatINR(totalInterestPaid),
      additionalRepaymentFees: formatINR(additionalRepaymentFees),
      nominalCashDifference: formatINR(nominalCashDifference),
      nominalSavingsPercentage: formatPercentage(nominalSavingsPercentage),
    },
    warnings,
    dimensions,
    amortizationSchedule,
    disclaimer:
      'This calculation is an illustrative scenario comparison based solely on user-entered values and stated financial assumptions. It is not an official settlement quote, loan restructuring contract, or legal/tax advice. Actual settlement terms depend on bilateral negotiations and formal written sanction letters from your lender under RBI compromise norms. Lenders are not obligated to settle, and settlement results in a "Settled" status on credit bureau records.',
  };
}
