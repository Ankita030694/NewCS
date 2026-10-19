/**
 * Calculation Engine for Tool 2: Loan EMI Calculator & Amortization Schedule
 *
 * Implements decimal-safe reducing-balance amortization arithmetic,
 * zero-rate handling, month-by-month and yearly payment schedules,
 * Indian currency formatting (INR), and strict input validation.
 */

export type TenureUnit = 'months' | 'years';

export interface EmiCalculatorInput {
  principal: number;
  annualInterestRate: number;
  tenureValue: number;
  tenureUnit: TenureUnit;
  processingFee?: number;
  startDate?: string; // Format: 'YYYY-MM'
}

export interface AmortizationMonth {
  monthIndex: number;
  periodLabel: string; // e.g. "Nov 2026"
  yearIndex: number;
  openingBalance: number;
  emi: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
  cumulativeInterest: number;
  cumulativePrincipal: number;
  formatted: {
    openingBalance: string;
    emi: string;
    principalPaid: string;
    interestPaid: string;
    closingBalance: string;
    cumulativeInterest: string;
    cumulativePrincipal: string;
  };
}

export interface AmortizationYear {
  yearIndex: number;
  yearLabel: string; // e.g. "Year 1 (2026 - 2027)"
  openingBalance: number;
  totalEmiPaid: number;
  principalPaid: number;
  interestPaid: number;
  closingBalance: number;
  formatted: {
    openingBalance: string;
    totalEmiPaid: string;
    principalPaid: string;
    interestPaid: string;
    closingBalance: string;
  };
}

export interface EmiCalculatorResult {
  // Echoed inputs
  principal: number;
  annualInterestRate: number;
  tenureMonths: number;
  tenureYears: number;
  tenureUnit: TenureUnit;
  processingFee: number;
  startDate: string;

  // Primary outputs
  monthlyEmi: number;
  totalRepayment: number;
  totalInterest: number;
  interestToPrincipalRatio: number;
  totalOutflow: number; // totalRepayment + processingFee
  principalPercentage: number;
  interestPercentage: number;

  // Formatted representations (INR)
  formatted: {
    principal: string;
    annualInterestRate: string;
    tenure: string;
    monthlyEmi: string;
    totalRepayment: string;
    totalInterest: string;
    interestToPrincipalRatio: string;
    processingFee: string;
    totalOutflow: string;
    principalPercentage: string;
    interestPercentage: string;
  };

  // Amortization Schedules
  monthlySchedule: AmortizationMonth[];
  yearlySchedule: AmortizationYear[];

  // Informational flags
  flags: {
    isZeroInterest: boolean;
    isLongTenure: boolean;
    interestExceedsPrincipal: boolean;
    hasProcessingFee: boolean;
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
 * Validates loan EMI inputs
 */
export function validateEmiInput(input: any): {
  isValid: boolean;
  error?: string;
  sanitized?: EmiCalculatorInput;
} {
  if (!input || typeof input !== 'object') {
    return { isValid: false, error: 'Request body must be a valid JSON object.' };
  }

  // 1. Principal validation (> 0)
  const principal = Number(input.principal);
  if (isNaN(principal) || !isFinite(principal) || principal <= 0) {
    return {
      isValid: false,
      error: 'Loan principal must be a positive number greater than zero.',
    };
  }

  if (principal > 1000000000) {
    return {
      isValid: false,
      error: 'Loan principal cannot exceed ₹100 Crores.',
    };
  }

  // 2. Annual interest rate validation (>= 0)
  const annualInterestRate = Number(input.annualInterestRate);
  if (isNaN(annualInterestRate) || !isFinite(annualInterestRate) || annualInterestRate < 0) {
    return {
      isValid: false,
      error: 'Annual interest rate cannot be negative.',
    };
  }

  if (annualInterestRate > 100) {
    return {
      isValid: false,
      error: 'Annual interest rate cannot exceed 100% per annum.',
    };
  }

  // 3. Tenure unit & tenure value validation (> 0)
  const tenureUnit: TenureUnit = input.tenureUnit === 'months' ? 'months' : 'years';
  const tenureValue = Number(input.tenureValue);

  if (isNaN(tenureValue) || !isFinite(tenureValue) || tenureValue <= 0) {
    return {
      isValid: false,
      error: 'Loan tenure must be greater than zero.',
    };
  }

  const tenureInMonths = tenureUnit === 'years' ? Math.round(tenureValue * 12) : Math.round(tenureValue);

  if (tenureInMonths < 1) {
    return {
      isValid: false,
      error: 'Minimum loan tenure is 1 month.',
    };
  }

  if (tenureInMonths > 360) {
    return {
      isValid: false,
      error: 'Loan tenure cannot exceed 30 years (360 months).',
    };
  }

  // 4. Optional processing fee (>= 0)
  let processingFee = 0;
  if (input.processingFee !== undefined && input.processingFee !== null && input.processingFee !== '') {
    processingFee = Number(input.processingFee);
    if (isNaN(processingFee) || !isFinite(processingFee) || processingFee < 0) {
      return {
        isValid: false,
        error: 'Processing fee cannot be negative.',
      };
    }
  }

  // 5. Optional start date
  let startDate = typeof input.startDate === 'string' && input.startDate.trim() !== ''
    ? input.startDate.trim()
    : new Date().toISOString().substring(0, 7); // Default: 'YYYY-MM'

  // Validate format YYYY-MM
  if (!/^\d{4}-\d{2}$/.test(startDate)) {
    startDate = new Date().toISOString().substring(0, 7);
  }

  return {
    isValid: true,
    sanitized: {
      principal,
      annualInterestRate,
      tenureValue,
      tenureUnit,
      processingFee,
      startDate,
    },
  };
}

/**
 * Pure calculation function for Tool 2: Loan EMI Calculator
 */
export function calculateEmi(input: EmiCalculatorInput): EmiCalculatorResult {
  const { principal, annualInterestRate, tenureValue, tenureUnit, processingFee = 0, startDate = '' } = input;

  const tenureMonths = tenureUnit === 'years' ? Math.round(tenureValue * 12) : Math.round(tenureValue);
  const tenureYears = Number((tenureMonths / 12).toFixed(1));

  // Monthly interest rate r
  const r = annualInterestRate / 12 / 100;
  const n = tenureMonths;

  let monthlyEmi = 0;

  if (annualInterestRate === 0 || r === 0) {
    // Zero-rate case: EMI = P / n
    monthlyEmi = Math.round(principal / n);
  } else {
    // Reducing balance formula: EMI = P * r * (1 + r)^n / ((1 + r)^n - 1)
    const factor = Math.pow(1 + r, n);
    const unroundedEmi = (principal * r * factor) / (factor - 1);
    monthlyEmi = Math.round(unroundedEmi);
  }

  // Generate month-by-month amortization schedule
  const monthlySchedule: AmortizationMonth[] = [];
  const [startYearStr, startMonthStr] = (startDate || new Date().toISOString().substring(0, 7)).split('-');
  const baseYear = parseInt(startYearStr, 10) || new Date().getFullYear();
  const baseMonth = parseInt(startMonthStr, 10) || (new Date().getMonth() + 1);

  let currentOpeningBalance = principal;
  let cumulativeInterest = 0;
  let cumulativePrincipal = 0;

  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  for (let m = 1; m <= n; m++) {
    const monthOffset = (baseMonth - 1) + (m - 1);
    const calYear = baseYear + Math.floor(monthOffset / 12);
    const calMonthIndex = monthOffset % 12;
    const periodLabel = `${monthNames[calMonthIndex]} ${calYear}`;
    const yearIndex = Math.floor((m - 1) / 12) + 1;

    let interestPaid = 0;
    if (r > 0) {
      interestPaid = Math.round(currentOpeningBalance * r);
    }

    let principalPaid = 0;
    let actualEmiForMonth = monthlyEmi;

    if (m === n) {
      // Final installment adjustment to eliminate rounding dust and close balance to 0
      principalPaid = currentOpeningBalance;
      actualEmiForMonth = principalPaid + interestPaid;
    } else {
      principalPaid = Math.min(currentOpeningBalance, actualEmiForMonth - interestPaid);
      if (principalPaid < 0) principalPaid = 0;
    }

    const closingBalance = Math.max(0, currentOpeningBalance - principalPaid);
    cumulativeInterest += interestPaid;
    cumulativePrincipal += principalPaid;

    monthlySchedule.push({
      monthIndex: m,
      periodLabel,
      yearIndex,
      openingBalance: currentOpeningBalance,
      emi: actualEmiForMonth,
      principalPaid,
      interestPaid,
      closingBalance,
      cumulativeInterest,
      cumulativePrincipal,
      formatted: {
        openingBalance: formatINR(currentOpeningBalance),
        emi: formatINR(actualEmiForMonth),
        principalPaid: formatINR(principalPaid),
        interestPaid: formatINR(interestPaid),
        closingBalance: formatINR(closingBalance),
        cumulativeInterest: formatINR(cumulativeInterest),
        cumulativePrincipal: formatINR(cumulativePrincipal),
      },
    });

    currentOpeningBalance = closingBalance;
  }

  // Derive exact totals from amortization schedule for 100% mathematical consistency
  const totalRepayment = monthlySchedule.reduce((acc, row) => acc + row.emi, 0);
  const totalInterest = monthlySchedule.reduce((acc, row) => acc + row.interestPaid, 0);
  const totalOutflow = totalRepayment + Math.round(processingFee);

  const interestToPrincipalRatio = principal > 0
    ? Number(((totalInterest / principal) * 100).toFixed(1))
    : 0;

  const totalSum = principal + totalInterest;
  const principalPercentage = totalSum > 0
    ? Number(((principal / totalSum) * 100).toFixed(1))
    : 100;
  const interestPercentage = totalSum > 0
    ? Number(((totalInterest / totalSum) * 100).toFixed(1))
    : 0;

  // Generate yearly aggregated schedule
  const totalYears = Math.ceil(n / 12);
  const yearlySchedule: AmortizationYear[] = [];

  for (let y = 1; y <= totalYears; y++) {
    const monthsInYear = monthlySchedule.filter((m) => m.yearIndex === y);
    if (monthsInYear.length === 0) continue;

    const openingBalance = monthsInYear[0].openingBalance;
    const closingBalance = monthsInYear[monthsInYear.length - 1].closingBalance;
    const totalEmiPaid = monthsInYear.reduce((acc, m) => acc + m.emi, 0);
    const yearPrincipalPaid = monthsInYear.reduce((acc, m) => acc + m.principalPaid, 0);
    const yearInterestPaid = monthsInYear.reduce((acc, m) => acc + m.interestPaid, 0);

    const firstPeriod = monthsInYear[0].periodLabel;
    const lastPeriod = monthsInYear[monthsInYear.length - 1].periodLabel;
    const yearLabel = `Year ${y} (${firstPeriod} - ${lastPeriod})`;

    yearlySchedule.push({
      yearIndex: y,
      yearLabel,
      openingBalance,
      totalEmiPaid,
      principalPaid: yearPrincipalPaid,
      interestPaid: yearInterestPaid,
      closingBalance,
      formatted: {
        openingBalance: formatINR(openingBalance),
        totalEmiPaid: formatINR(totalEmiPaid),
        principalPaid: formatINR(yearPrincipalPaid),
        interestPaid: formatINR(yearInterestPaid),
        closingBalance: formatINR(closingBalance),
      },
    });
  }

  const disclaimer =
    'Illustrative estimate only. Actual EMI, interest accrual, and repayment dates may vary depending on lender compounding frequency, rate reset cycles (repo-linked/MCLR benchmarks), broken period interest, insurance premiums, and rounding practices.';

  return {
    principal,
    annualInterestRate,
    tenureMonths,
    tenureYears,
    tenureUnit,
    processingFee: Math.round(processingFee),
    startDate: startDate || new Date().toISOString().substring(0, 7),
    monthlyEmi,
    totalRepayment,
    totalInterest,
    interestToPrincipalRatio,
    totalOutflow,
    principalPercentage,
    interestPercentage,
    formatted: {
      principal: formatINR(principal),
      annualInterestRate: `${annualInterestRate}%`,
      tenure: tenureUnit === 'years' ? `${tenureValue} Years (${tenureMonths} Mos)` : `${tenureMonths} Months`,
      monthlyEmi: formatINR(monthlyEmi),
      totalRepayment: formatINR(totalRepayment),
      totalInterest: formatINR(totalInterest),
      interestToPrincipalRatio: `${interestToPrincipalRatio}%`,
      processingFee: formatINR(processingFee),
      totalOutflow: formatINR(totalOutflow),
      principalPercentage: `${principalPercentage}%`,
      interestPercentage: `${interestPercentage}%`,
    },
    monthlySchedule,
    yearlySchedule,
    flags: {
      isZeroInterest: annualInterestRate === 0,
      isLongTenure: tenureMonths > 120,
      interestExceedsPrincipal: totalInterest > principal,
      hasProcessingFee: processingFee > 0,
    },
    disclaimer,
  };
}
