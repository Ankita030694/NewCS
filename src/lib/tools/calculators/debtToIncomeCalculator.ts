/**
 * Calculation Engine for Tool 4: Debt-to-Income (DTI) Ratio Calculator
 *
 * Implements gross income validation, dual-mode debt aggregation (itemized vs lump-sum),
 * front-end (housing) DTI, back-end (total) DTI, FOIR (Fixed Obligation to Income Ratio)
 * risk-band classification aligned with Indian banking norms, payment share breakdown,
 * and Indian currency (INR) formatting.
 */

export type DebtCategory =
  | 'Housing'
  | 'Personal Loan'
  | 'Credit Card'
  | 'Auto Loan'
  | 'Education Loan'
  | 'Gold Loan'
  | 'Consumer Durable'
  | 'Business Loan'
  | 'Other Debt';

export interface DebtItemInput {
  id: string;
  name: string;
  category: DebtCategory;
  monthlyPayment: number;
}

export interface DtiCalculationInput {
  grossMonthlyIncome: number;
  inputMode: 'itemized' | 'lumpSum';
  // Housing payment details
  monthlyHousingPayment: number;
  includeHousingInCalculation: boolean;
  // Itemized debts (used when inputMode === 'itemized')
  debts?: DebtItemInput[];
  // Lump-sum debt payment (used when inputMode === 'lumpSum')
  totalMonthlyNonHousingDebt?: number;
}

export interface DtiRiskBand {
  tier: 'healthy' | 'moderate' | 'stretched' | 'critical';
  label: string;
  badgeText: string;
  colorHex: string;
  badgeBgHex: string;
  badgeTextHex: string;
  shortDescription: string;
  bankingContext: string;
  recommendedAction: string;
}

export interface DtiBreakdownItem {
  id: string;
  name: string;
  category: DebtCategory;
  monthlyPayment: number;
  shareOfTotalDebtPercent: number;
  shareOfGrossIncomePercent: number;
  colorHex: string;
  formatted: {
    monthlyPayment: string;
    shareOfTotalDebtPercent: string;
    shareOfGrossIncomePercent: string;
  };
}

export interface DtiResult {
  grossMonthlyIncome: number;
  monthlyHousingPayment: number;
  includeHousingInCalculation: boolean;
  totalMonthlyNonHousingDebt: number;
  totalMonthlyDebtPayments: number;

  // DTI Percentages
  dtiPercentage: number; // Back-end DTI (including housing if toggled)
  frontEndDtiPercentage: number; // Housing only DTI
  nonHousingDtiPercentage: number; // Non-housing debt only DTI

  // Monthly remainder cushion (Gross - Total debt payments)
  estimatedMonthlyRemainder: number;

  // Risk Classification
  riskBand: DtiRiskBand;

  // Payment Breakdown
  breakdown: DtiBreakdownItem[];

  // Informational notices and warnings
  warnings: string[];
  assumptions: string[];

  // Formatted representations for display
  formatted: {
    grossMonthlyIncome: string;
    monthlyHousingPayment: string;
    totalMonthlyNonHousingDebt: string;
    totalMonthlyDebtPayments: string;
    dtiPercentage: string;
    frontEndDtiPercentage: string;
    nonHousingDtiPercentage: string;
    estimatedMonthlyRemainder: string;
  };
}

export const DEBT_CATEGORY_PALETTE: Record<DebtCategory, string> = {
  Housing: '#007AFF', // Blue
  'Personal Loan': '#F59E0B', // Amber
  'Credit Card': '#EF4444', // Red
  'Auto Loan': '#10B981', // Emerald
  'Education Loan': '#8B5CF6', // Purple
  'Gold Loan': '#F59E0B', // Gold/Amber
  'Consumer Durable': '#EC4899', // Pink
  'Business Loan': '#6366F1', // Indigo
  'Other Debt': '#64748B', // Slate
};

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
export function formatPercentage(val: number | null | undefined, decimals = 1): string {
  if (val === null || val === undefined || isNaN(val) || !isFinite(val)) return '0.0%';
  return `${val.toFixed(decimals)}%`;
}

/**
 * Determine DTI Risk Band based on Indian Banking FOIR Guidelines:
 * - < 36%: Healthy / Manageable
 * - 36% - 43%: Moderate / Adequate
 * - 44% - 50%: Stretched / Watchlist (standard Indian bank FOIR ceiling)
 * - > 50%: Critical / Heavy Burden (high risk of debt trap)
 */
export function getDtiRiskBand(dtiPercent: number): DtiRiskBand {
  if (dtiPercent < 36) {
    return {
      tier: 'healthy',
      label: 'Healthy / Manageable',
      badgeText: 'Low Risk (<36%)',
      colorHex: '#10B981', // Emerald
      badgeBgHex: '#ECFDF5',
      badgeTextHex: '#065F46',
      shortDescription:
        'Your recurring debt obligations consume a sustainable share of your monthly gross income, leaving room for savings, investments, and emergencies.',
      bankingContext:
        'Most Indian banks and NBFCs view a DTI below 36% very favorably. Borrowers in this bracket generally meet the basic FOIR criteria for prime loan interest rates, subject to CIBIL score (750+) and verified income stability.',
      recommendedAction:
        'Maintain this buffer by prioritizing emergency fund contributions and avoiding unnecessary high-interest consumer debt.',
    };
  }

  if (dtiPercent <= 43) {
    return {
      tier: 'moderate',
      label: 'Moderate / Adequate',
      badgeText: 'Moderate (36% - 43%)',
      colorHex: '#3B82F6', // Blue
      badgeBgHex: '#EFF6FF',
      badgeTextHex: '#1E40AF',
      shortDescription:
        'Your debt load is manageable under stable earning conditions, but a notable portion of your income is already committed to monthly EMIs.',
      bankingContext:
        'Typical for middle-income households servicing an ongoing home or vehicle loan. Most scheduled commercial banks will still consider new credit lines, but may scrutinize repayment history and enforce standard interest margins.',
      recommendedAction:
        'Refrain from taking on new unsecured credit cards or personal loans until current balances are reduced.',
    };
  }

  if (dtiPercent <= 50) {
    return {
      tier: 'stretched',
      label: 'Stretched / Watchlist',
      badgeText: 'Elevated Risk (44% - 50%)',
      colorHex: '#F59E0B', // Amber
      badgeBgHex: '#FFFBEB',
      badgeTextHex: '#92400E',
      shortDescription:
        'Your monthly debt commitments are consuming nearly half of your pre-tax income, leaving limited cushion for unexpected life events or medical emergencies.',
      bankingContext:
        'This range approaches the upper ceiling of standard Fixed Obligation to Income Ratio (FOIR) caps (typically 40% to 50%) enforced by major Indian lenders for salaried applicants. Lenders may require co-borrowers, collateral, or reject unsecured applications.',
      recommendedAction:
        'Consider debt acceleration strategies like the Debt Avalanche (high-interest first) or loan consolidation to lower your monthly EMI burden.',
    };
  }

  return {
    tier: 'critical',
    label: 'Critical / Heavy Burden',
    badgeText: 'High Risk (>50%)',
    colorHex: '#EF4444', // Red
    badgeBgHex: '#FEF2F2',
    badgeTextHex: '#991B1B',
    shortDescription:
      'Over half of your monthly gross income is pre-committed to debt repayment. This significantly strains monthly cash flow and increases delinquency risk.',
    bankingContext:
      'Indian financial institutions consider a FOIR above 50% as highly leveraged. New formal loan approvals are generally difficult without substantial collateral or high liquid net worth. Borrowers frequently experience compounding interest distress.',
    recommendedAction:
      'Explore structured debt relief options such as debt consolidation, bilateral EMI restructuring, or formal loan settlement before accounts slip into NPA.',
  };
}

/**
 * Validate DTI Input Data
 */
export function validateDtiInput(data: any): {
  isValid: boolean;
  sanitized?: DtiCalculationInput;
  error?: string;
} {
  if (!data || typeof data !== 'object') {
    return {
      isValid: false,
      error: 'Invalid request payload. Please provide calculation parameters.',
    };
  }

  const grossMonthlyIncome = Number(data.grossMonthlyIncome);
  if (isNaN(grossMonthlyIncome) || grossMonthlyIncome <= 0) {
    return {
      isValid: false,
      error: 'Gross monthly income must be greater than zero (INR).',
    };
  }

  const monthlyHousingPayment = Number(data.monthlyHousingPayment || 0);
  if (isNaN(monthlyHousingPayment) || monthlyHousingPayment < 0) {
    return {
      isValid: false,
      error: 'Monthly housing payment cannot be negative.',
    };
  }

  const includeHousingInCalculation =
    typeof data.includeHousingInCalculation === 'boolean'
      ? data.includeHousingInCalculation
      : true;

  const inputMode = data.inputMode === 'lumpSum' ? 'lumpSum' : 'itemized';

  if (inputMode === 'lumpSum') {
    const totalMonthlyNonHousingDebt = Number(data.totalMonthlyNonHousingDebt || 0);
    if (isNaN(totalMonthlyNonHousingDebt) || totalMonthlyNonHousingDebt < 0) {
      return {
        isValid: false,
        error: 'Total monthly non-housing debt payment cannot be negative.',
      };
    }

    return {
      isValid: true,
      sanitized: {
        grossMonthlyIncome,
        inputMode: 'lumpSum',
        monthlyHousingPayment,
        includeHousingInCalculation,
        totalMonthlyNonHousingDebt,
      },
    };
  }

  // Itemized mode validation
  const rawDebts = Array.isArray(data.debts) ? data.debts : [];
  const sanitizedDebts: DebtItemInput[] = [];

  for (let i = 0; i < rawDebts.length; i++) {
    const item = rawDebts[i];
    if (!item) continue;

    const payment = Number(item.monthlyPayment || 0);
    if (isNaN(payment) || payment < 0) {
      return {
        isValid: false,
        error: `Monthly payment for debt row #${i + 1} (${item.name || 'Debt'}) cannot be negative.`,
      };
    }

    const category: DebtCategory = [
      'Housing',
      'Personal Loan',
      'Credit Card',
      'Auto Loan',
      'Education Loan',
      'Gold Loan',
      'Consumer Durable',
      'Business Loan',
      'Other Debt',
    ].includes(item.category)
      ? item.category
      : 'Other Debt';

    sanitizedDebts.push({
      id: String(item.id || `debt_${i + 1}`),
      name: String(item.name || `Debt #${i + 1}`).trim(),
      category,
      monthlyPayment: payment,
    });
  }

  return {
    isValid: true,
    sanitized: {
      grossMonthlyIncome,
      inputMode: 'itemized',
      monthlyHousingPayment,
      includeHousingInCalculation,
      debts: sanitizedDebts,
    },
  };
}

/**
 * Pure Calculation Engine for DTI
 */
export function calculateDti(input: DtiCalculationInput): DtiResult {
  const {
    grossMonthlyIncome,
    inputMode,
    monthlyHousingPayment,
    includeHousingInCalculation,
    debts = [],
    totalMonthlyNonHousingDebt: inputLumpSum = 0,
  } = input;

  // Calculate non-housing debt sum
  let totalMonthlyNonHousingDebt = 0;
  const breakdown: DtiBreakdownItem[] = [];

  if (inputMode === 'lumpSum') {
    totalMonthlyNonHousingDebt = Math.max(0, inputLumpSum);
  } else {
    for (const d of debts) {
      totalMonthlyNonHousingDebt += Math.max(0, d.monthlyPayment);
    }
  }

  // Total debt payments considered in the main DTI
  const effectiveHousingInDti = includeHousingInCalculation ? Math.max(0, monthlyHousingPayment) : 0;
  const totalMonthlyDebtPayments = totalMonthlyNonHousingDebt + effectiveHousingInDti;

  // DTI Ratios
  const dtiPercentage =
    grossMonthlyIncome > 0
      ? (totalMonthlyDebtPayments / grossMonthlyIncome) * 100
      : 0;

  const frontEndDtiPercentage =
    grossMonthlyIncome > 0
      ? (Math.max(0, monthlyHousingPayment) / grossMonthlyIncome) * 100
      : 0;

  const nonHousingDtiPercentage =
    grossMonthlyIncome > 0
      ? (totalMonthlyNonHousingDebt / grossMonthlyIncome) * 100
      : 0;

  // Estimated cash remainder before taxes, living expenses, and deductions
  const estimatedMonthlyRemainder = Math.max(0, grossMonthlyIncome - totalMonthlyDebtPayments);

  // Generate breakdown rows
  if (monthlyHousingPayment > 0) {
    const housingShareOfDebt =
      totalMonthlyDebtPayments > 0
        ? (monthlyHousingPayment / (totalMonthlyNonHousingDebt + monthlyHousingPayment)) * 100
        : 0;
    const housingShareOfIncome = (monthlyHousingPayment / grossMonthlyIncome) * 100;

    breakdown.push({
      id: 'housing_payment',
      name: includeHousingInCalculation ? 'Housing Payment (Included)' : 'Housing Payment (Excluded from DTI)',
      category: 'Housing',
      monthlyPayment: monthlyHousingPayment,
      shareOfTotalDebtPercent: housingShareOfDebt,
      shareOfGrossIncomePercent: housingShareOfIncome,
      colorHex: DEBT_CATEGORY_PALETTE.Housing,
      formatted: {
        monthlyPayment: formatINR(monthlyHousingPayment),
        shareOfTotalDebtPercent: formatPercentage(housingShareOfDebt),
        shareOfGrossIncomePercent: formatPercentage(housingShareOfIncome),
      },
    });
  }

  if (inputMode === 'lumpSum' && totalMonthlyNonHousingDebt > 0) {
    const lumpShareOfDebt =
      totalMonthlyDebtPayments > 0
        ? (totalMonthlyNonHousingDebt / totalMonthlyDebtPayments) * 100
        : 100;
    const lumpShareOfIncome = (totalMonthlyNonHousingDebt / grossMonthlyIncome) * 100;

    breakdown.push({
      id: 'lump_sum_debt',
      name: 'Combined Monthly Non-Housing Debt',
      category: 'Other Debt',
      monthlyPayment: totalMonthlyNonHousingDebt,
      shareOfTotalDebtPercent: lumpShareOfDebt,
      shareOfGrossIncomePercent: lumpShareOfIncome,
      colorHex: DEBT_CATEGORY_PALETTE['Other Debt'],
      formatted: {
        monthlyPayment: formatINR(totalMonthlyNonHousingDebt),
        shareOfTotalDebtPercent: formatPercentage(lumpShareOfDebt),
        shareOfGrossIncomePercent: formatPercentage(lumpShareOfIncome),
      },
    });
  } else if (inputMode === 'itemized') {
    for (const d of debts) {
      if (d.monthlyPayment <= 0) continue;

      const shareOfDebt =
        totalMonthlyDebtPayments > 0
          ? (d.monthlyPayment / totalMonthlyDebtPayments) * 100
          : 0;
      const shareOfIncome = (d.monthlyPayment / grossMonthlyIncome) * 100;

      breakdown.push({
        id: d.id,
        name: d.name,
        category: d.category,
        monthlyPayment: d.monthlyPayment,
        shareOfTotalDebtPercent: shareOfDebt,
        shareOfGrossIncomePercent: shareOfIncome,
        colorHex: DEBT_CATEGORY_PALETTE[d.category] || DEBT_CATEGORY_PALETTE['Other Debt'],
        formatted: {
          monthlyPayment: formatINR(d.monthlyPayment),
          shareOfTotalDebtPercent: formatPercentage(shareOfDebt),
          shareOfGrossIncomePercent: formatPercentage(shareOfIncome),
        },
      });
    }
  }

  // Risk Classification
  const riskBand = getDtiRiskBand(dtiPercentage);

  // Informational warnings & assumptions
  const warnings: string[] = [];
  if (!includeHousingInCalculation && monthlyHousingPayment > 0) {
    warnings.push(
      'Housing payments (Rent / Home Loan EMI) are currently EXCLUDED from your main DTI calculation. Note that most Indian banks calculate Back-End DTI (FOIR), which includes all housing obligations.'
    );
  }
  if (totalMonthlyDebtPayments > grossMonthlyIncome) {
    warnings.push(
      'Your monthly debt commitments exceed your gross monthly income. This indicates acute cash flow insolvency requiring urgent restructuring.'
    );
  }

  const assumptions = [
    'Calculations are based strictly on gross monthly income before tax, provident fund, and payroll deductions.',
    'Under Indian banking practice (FOIR), lenders typically evaluate total recurring debt payments against income with limits between 40% and 50%.',
    'Actual approval or rejection is subject to individual lender underwriting guidelines, CIBIL credit score, employment vintage, and collateral quality.',
    'Discretionary living expenses (groceries, school fees, utilities) and income tax deductions are not included in this ratio.',
  ];

  return {
    grossMonthlyIncome,
    monthlyHousingPayment,
    includeHousingInCalculation,
    totalMonthlyNonHousingDebt,
    totalMonthlyDebtPayments,
    dtiPercentage: Math.round(dtiPercentage * 100) / 100,
    frontEndDtiPercentage: Math.round(frontEndDtiPercentage * 100) / 100,
    nonHousingDtiPercentage: Math.round(nonHousingDtiPercentage * 100) / 100,
    estimatedMonthlyRemainder,
    riskBand,
    breakdown,
    warnings,
    assumptions,
    formatted: {
      grossMonthlyIncome: formatINR(grossMonthlyIncome),
      monthlyHousingPayment: formatINR(monthlyHousingPayment),
      totalMonthlyNonHousingDebt: formatINR(totalMonthlyNonHousingDebt),
      totalMonthlyDebtPayments: formatINR(totalMonthlyDebtPayments),
      dtiPercentage: formatPercentage(dtiPercentage, 1),
      frontEndDtiPercentage: formatPercentage(frontEndDtiPercentage, 1),
      nonHousingDtiPercentage: formatPercentage(nonHousingDtiPercentage, 1),
      estimatedMonthlyRemainder: formatINR(estimatedMonthlyRemainder),
    },
  };
}
