/**
 * Pure Calculation Engine for Tool 12: Credit Card Interest Calculator
 *
 * Implements a transparent monthly billing cycle convention:
 * 1. Accrue monthly interest on opening balance: Interest = Opening Balance * (APR / 12 / 100)
 * 2. Add recurring monthly fees and new monthly purchases/spending
 * 3. Apply monthly payment (with final payment clamped so balance stops exactly at zero)
 * 4. Detect negative amortization / perpetual debt traps (Payment <= Monthly Interest + Fees + Spending)
 * 5. Cap simulation strictly at 600 months (50 years)
 * 6. Provide side-by-side comparison with an accelerated larger payment
 */

export interface PaymentGrowthConfig {
  enabled: boolean;
  type: 'percentage' | 'fixed_amount'; // percentage increase annually vs fixed amount increase annually
  value: number; // e.g. 5% per year or ₹500 per year
  frequencyMonths: number; // typically 12 (annual salary hike/adjustment)
}

export interface CreditCardInterestInput {
  currentBalance: number; // INR; > 0
  annualInterestRate: number; // APR %; >= 0
  monthlyPayment: number; // INR; >= 0
  newMonthlySpending?: number; // INR; >= 0; default 0
  monthlyFees?: number; // INR; >= 0; default 0
  paymentGrowth?: PaymentGrowthConfig;
}

export interface MonthlyCardScheduleRow {
  month: number;
  openingBalance: number;
  interestAccrued: number;
  newSpending: number;
  monthlyFees: number;
  payment: number;
  principalPaid: number; // Net reduction applied to opening balance
  closingBalance: number;
  cumulativeInterest: number;
  cumulativePaid: number;
  formatted: {
    openingBalance: string;
    interestAccrued: string;
    newSpending: string;
    monthlyFees: string;
    payment: string;
    principalPaid: string;
    closingBalance: string;
    cumulativeInterest: string;
    cumulativePaid: string;
  };
}

export interface AcceleratedComparisonResult {
  monthlyPayment: number;
  monthsToPayoff: number;
  payoffDurationFormatted: string;
  totalInterest: number;
  totalPaid: number;
  monthsSaved: number;
  interestSaved: number;
  totalCashSaved: number;
  formatted: {
    monthlyPayment: string;
    totalInterest: string;
    totalPaid: string;
    interestSaved: string;
    totalCashSaved: string;
  };
}

export interface DebtTrapWarning {
  isTrapped: boolean;
  type: 'negative_amortization' | 'perpetual_stagnation' | 'extreme_tenure' | 'none';
  monthlyFinanceCharges: number;
  monthlyRecurringChargesTotal: number;
  deficitOrSurplus: number;
  headline: string;
  explanation: string;
  recommendedMinimumPayment: number;
}

export interface CreditCardInterestResult {
  isPayable: boolean;
  isCappedAt600: boolean;
  monthsToPayoff: number; // 0 if not payable or capped
  payoffDurationFormatted: string;
  currentBalance: number;
  annualInterestRate: number;
  monthlyInterestRatePercentage: number;
  initialMonthlyPayment: number;
  newMonthlySpending: number;
  monthlyFees: number;

  totalPrincipalPaid: number;
  totalInterestPaid: number;
  totalFeesPaid: number;
  totalSpendingPaid: number;
  totalAmountPaid: number;

  firstMonthInterest: number;
  firstMonthRecurringChargesTotal: number;
  warning: DebtTrapWarning;

  schedule: MonthlyCardScheduleRow[];
  acceleratedComparison: AcceleratedComparisonResult | null;

  conventionNotes: string[];
  disclaimer: string;
}

/**
 * Formats a numeric value into INR currency string with Indian digit grouping
 * Example: 125000 -> ₹1,25,000
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
export function formatPercentage(val: number, decimals: number = 2): string {
  return `${val.toFixed(decimals)}%`;
}

/**
 * Formats payoff duration in human-readable years and months
 */
export function formatPayoffDuration(months: number): string {
  if (months <= 0) return 'Immediate';
  const years = Math.floor(months / 12);
  const remMonths = months % 12;

  if (years === 0) {
    return `${remMonths} ${remMonths === 1 ? 'month' : 'months'}`;
  }
  if (remMonths === 0) {
    return `${years} ${years === 1 ? 'year' : 'years'}`;
  }
  return `${years} yr ${remMonths} mo (${months} months)`;
}

/**
 * Validates and sanitizes user inputs for Credit Card Interest Calculator
 */
export function validateCreditCardInterestInput(input: any): {
  isValid: boolean;
  error?: string;
  sanitized?: CreditCardInterestInput;
} {
  if (!input || typeof input !== 'object') {
    return { isValid: false, error: 'Please provide valid calculation parameters.' };
  }

  const balance = Number(input.currentBalance);
  if (isNaN(balance) || balance <= 0) {
    return {
      isValid: false,
      error: 'Current card balance must be a valid amount greater than ₹0.',
    };
  }

  const apr = Number(input.annualInterestRate);
  if (isNaN(apr) || apr < 0) {
    return {
      isValid: false,
      error: 'Annual interest rate (APR) cannot be negative.',
    };
  }
  if (apr > 120) {
    return {
      isValid: false,
      error: 'Annual interest rate cannot exceed 120% APR.',
    };
  }

  const payment = Number(input.monthlyPayment);
  if (isNaN(payment) || payment < 0) {
    return {
      isValid: false,
      error: 'Monthly payment amount cannot be negative.',
    };
  }

  const spending = input.newMonthlySpending !== undefined ? Number(input.newMonthlySpending) : 0;
  if (isNaN(spending) || spending < 0) {
    return {
      isValid: false,
      error: 'New monthly spending cannot be negative.',
    };
  }

  const fees = input.monthlyFees !== undefined ? Number(input.monthlyFees) : 0;
  if (isNaN(fees) || fees < 0) {
    return {
      isValid: false,
      error: 'Monthly fees cannot be negative.',
    };
  }

  let growthConfig: PaymentGrowthConfig | undefined = undefined;
  if (input.paymentGrowth && typeof input.paymentGrowth === 'object') {
    const isEnabled = Boolean(input.paymentGrowth.enabled);
    const growthType = input.paymentGrowth.type === 'fixed_amount' ? 'fixed_amount' : 'percentage';
    const growthVal = Number(input.paymentGrowth.value) || 0;
    const freq = Number(input.paymentGrowth.frequencyMonths) || 12;

    if (growthVal < 0) {
      return {
        isValid: false,
        error: 'Payment growth value cannot be negative.',
      };
    }

    if (growthType === 'percentage' && growthVal > 50) {
      return {
        isValid: false,
        error: 'Annual payment growth percentage cannot exceed 50%.',
      };
    }

    growthConfig = {
      enabled: isEnabled,
      type: growthType,
      value: growthVal,
      frequencyMonths: Math.max(1, Math.min(60, freq)),
    };
  }

  return {
    isValid: true,
    sanitized: {
      currentBalance: Math.round(balance * 100) / 100,
      annualInterestRate: Math.round(apr * 100) / 100,
      monthlyPayment: Math.round(payment * 100) / 100,
      newMonthlySpending: Math.round(spending * 100) / 100,
      monthlyFees: Math.round(fees * 100) / 100,
      paymentGrowth: growthConfig,
    },
  };
}

/**
 * Runs a single simulation trajectory under the simplified monthly convention.
 */
function simulateCardSchedule(
  balance: number,
  apr: number,
  baseMonthlyPayment: number,
  spending: number,
  fees: number,
  growthConfig?: PaymentGrowthConfig
): {
  isPayable: boolean;
  isCapped: boolean;
  months: number;
  totalInterest: number;
  totalPaid: number;
  totalFees: number;
  totalSpending: number;
  totalPrincipal: number;
  schedule: MonthlyCardScheduleRow[];
} {
  const monthlyRate = apr / 12 / 100;
  let currentBalance = balance;
  let cumulativeInterest = 0;
  let cumulativePaid = 0;
  let totalFees = 0;
  let totalSpending = 0;
  let totalPrincipal = 0;

  const schedule: MonthlyCardScheduleRow[] = [];
  const MAX_MONTHS = 600;

  for (let m = 1; m <= MAX_MONTHS; m++) {
    const openingBalance = currentBalance;
    const interestAccrued = Math.round(openingBalance * monthlyRate * 100) / 100;
    const recurringSpending = spending;
    const recurringFees = fees;

    // Calculate current month's intended payment considering growth
    let scheduledPayment = baseMonthlyPayment;
    if (growthConfig && growthConfig.enabled && growthConfig.value > 0) {
      const stepIndex = Math.floor((m - 1) / growthConfig.frequencyMonths);
      if (stepIndex > 0) {
        if (growthConfig.type === 'percentage') {
          scheduledPayment = baseMonthlyPayment * Math.pow(1 + growthConfig.value / 100, stepIndex);
        } else {
          scheduledPayment = baseMonthlyPayment + growthConfig.value * stepIndex;
        }
      }
    }
    scheduledPayment = Math.round(scheduledPayment * 100) / 100;

    // Pre-payment balance: Opening + Interest + Spending + Fees
    const prePaymentBalance = openingBalance + interestAccrued + recurringSpending + recurringFees;

    // Actual payment cannot exceed prePaymentBalance (do not overpay)
    const actualPayment = Math.min(scheduledPayment, prePaymentBalance);

    // Closing balance
    const closingBalance = Math.max(0, prePaymentBalance - actualPayment);

    // Net principal reduction applied to opening balance
    // PrePayment = Opening + Interest + Spending + Fees
    // Closing = Opening + Interest + Spending + Fees - Payment
    // Net Principal Paid = Opening - Closing = Payment - (Interest + Spending + Fees)
    const principalPaid = openingBalance - closingBalance;

    cumulativeInterest += interestAccrued;
    cumulativePaid += actualPayment;
    totalFees += recurringFees;
    totalSpending += recurringSpending;
    totalPrincipal += principalPaid;

    schedule.push({
      month: m,
      openingBalance,
      interestAccrued,
      newSpending: recurringSpending,
      monthlyFees: recurringFees,
      payment: actualPayment,
      principalPaid,
      closingBalance,
      cumulativeInterest: Math.round(cumulativeInterest * 100) / 100,
      cumulativePaid: Math.round(cumulativePaid * 100) / 100,
      formatted: {
        openingBalance: formatINR(openingBalance),
        interestAccrued: formatINR(interestAccrued),
        newSpending: formatINR(recurringSpending),
        monthlyFees: formatINR(recurringFees),
        payment: formatINR(actualPayment),
        principalPaid: formatINR(principalPaid),
        closingBalance: formatINR(closingBalance),
        cumulativeInterest: formatINR(cumulativeInterest),
        cumulativePaid: formatINR(cumulativePaid),
      },
    });

    currentBalance = closingBalance;

    // Debt completely paid off
    if (closingBalance <= 0.009) {
      return {
        isPayable: true,
        isCapped: false,
        months: m,
        totalInterest: Math.round(cumulativeInterest * 100) / 100,
        totalPaid: Math.round(cumulativePaid * 100) / 100,
        totalFees: Math.round(totalFees * 100) / 100,
        totalSpending: Math.round(totalSpending * 100) / 100,
        totalPrincipal: Math.round(totalPrincipal * 100) / 100,
        schedule,
      };
    }
  }

  // Reached 600 months without clearing balance
  return {
    isPayable: false,
    isCapped: true,
    months: MAX_MONTHS,
    totalInterest: Math.round(cumulativeInterest * 100) / 100,
    totalPaid: Math.round(cumulativePaid * 100) / 100,
    totalFees: Math.round(totalFees * 100) / 100,
    totalSpending: Math.round(totalSpending * 100) / 100,
    totalPrincipal: Math.round(totalPrincipal * 100) / 100,
    schedule,
  };
}

/**
 * Main calculation engine for Tool 12
 */
export function calculateCreditCardInterest(
  input: CreditCardInterestInput
): CreditCardInterestResult {
  const {
    currentBalance,
    annualInterestRate,
    monthlyPayment,
    newMonthlySpending = 0,
    monthlyFees = 0,
    paymentGrowth,
  } = input;

  const monthlyRate = annualInterestRate / 12 / 100;
  const firstMonthInterest = Math.round(currentBalance * monthlyRate * 100) / 100;
  const firstMonthRecurringCharges =
    Math.round((firstMonthInterest + newMonthlySpending + monthlyFees) * 100) / 100;

  // Evaluate debt trap condition
  let warning: DebtTrapWarning = {
    isTrapped: false,
    type: 'none',
    monthlyFinanceCharges: firstMonthInterest,
    monthlyRecurringChargesTotal: firstMonthRecurringCharges,
    deficitOrSurplus: Math.round((monthlyPayment - firstMonthRecurringCharges) * 100) / 100,
    headline: '',
    explanation: '',
    recommendedMinimumPayment: Math.max(
      Math.round(currentBalance * 0.05), // standard 5% MAD in India
      Math.round(firstMonthRecurringCharges + currentBalance * 0.02)
    ),
  };

  // Case 1: Payment is strictly less than monthly interest + fees + spending
  if (monthlyPayment < firstMonthRecurringCharges) {
    const deficit = Math.round((firstMonthRecurringCharges - monthlyPayment) * 100) / 100;
    warning = {
      isTrapped: true,
      type: 'negative_amortization',
      monthlyFinanceCharges: firstMonthInterest,
      monthlyRecurringChargesTotal: firstMonthRecurringCharges,
      deficitOrSurplus: -deficit,
      headline: 'Negative Amortization Warning: Your Balance Will Increase Every Month',
      explanation: `Your monthly payment of ${formatINR(
        monthlyPayment
      )} does not even cover the monthly finance charges (${formatINR(
        firstMonthInterest
      )}) plus recurring expenses (${formatINR(
        newMonthlySpending + monthlyFees
      )}). Every month, an unpaid deficit of ${formatINR(
        deficit
      )} will be added to your card balance, causing your debt to spiral uncontrollably.`,
      recommendedMinimumPayment: Math.max(
        Math.round(currentBalance * 0.05),
        Math.round(firstMonthRecurringCharges + 1500)
      ),
    };
  }
  // Case 2: Payment exactly equals recurring charges (perpetual debt)
  else if (Math.abs(monthlyPayment - firstMonthRecurringCharges) < 0.5) {
    warning = {
      isTrapped: true,
      type: 'perpetual_stagnation',
      monthlyFinanceCharges: firstMonthInterest,
      monthlyRecurringChargesTotal: firstMonthRecurringCharges,
      deficitOrSurplus: 0,
      headline: 'Perpetual Debt Alert: Your Principal Balance Will Never Fall',
      explanation: `Your monthly payment of ${formatINR(
        monthlyPayment
      )} matches the monthly interest and recurring fees (${formatINR(
        firstMonthRecurringCharges
      )}) dollar-for-dollar. 100% of your payment is consumed by finance charges, leaving ₹0 to reduce your original ₹${currentBalance.toLocaleString(
        'en-IN'
      )} card balance.`,
      recommendedMinimumPayment: Math.max(
        Math.round(currentBalance * 0.05),
        Math.round(firstMonthRecurringCharges + 2000)
      ),
    };
  }

  // If permanently trapped with no growth mechanism that overcomes it within 600m
  const isImmediatelyTrapped =
    warning.isTrapped &&
    (!paymentGrowth || !paymentGrowth.enabled || paymentGrowth.value <= 0);

  let simulationResult: ReturnType<typeof simulateCardSchedule>;

  if (isImmediatelyTrapped) {
    // Generate an illustrative first 12-month schedule demonstrating the growing or stagnant balance
    simulationResult = simulateCardSchedule(
      currentBalance,
      annualInterestRate,
      monthlyPayment,
      newMonthlySpending,
      monthlyFees,
      paymentGrowth
    );
    simulationResult.isPayable = false;
    simulationResult.months = 0;
  } else {
    simulationResult = simulateCardSchedule(
      currentBalance,
      annualInterestRate,
      monthlyPayment,
      newMonthlySpending,
      monthlyFees,
      paymentGrowth
    );
  }

  // Check extreme tenure (> 60 months / 5 years)
  if (simulationResult.isPayable && simulationResult.months > 60 && warning.type === 'none') {
    warning = {
      isTrapped: false,
      type: 'extreme_tenure',
      monthlyFinanceCharges: firstMonthInterest,
      monthlyRecurringChargesTotal: firstMonthRecurringCharges,
      deficitOrSurplus: Math.round((monthlyPayment - firstMonthRecurringCharges) * 100) / 100,
      headline: 'Prolonged Payoff Warning: High Interest Burden Over 5+ Years',
      explanation: `At your current payment rate, it will take ${formatPayoffDuration(
        simulationResult.months
      )} to eliminate this debt. Over this extended period, you will pay ${formatINR(
        simulationResult.totalInterest
      )} solely in interest charges—often exceeding the original purchase price.`,
      recommendedMinimumPayment: Math.round(monthlyPayment * 1.3),
    };
  }

  // Accelerated comparison calculation
  let acceleratedComparison: AcceleratedComparisonResult | null = null;
  const higherPaymentTarget = Math.max(
    Math.round(monthlyPayment * 1.25),
    monthlyPayment + 2000,
    Math.round(firstMonthRecurringCharges + 2500)
  );

  if (higherPaymentTarget > monthlyPayment) {
    const higherSim = simulateCardSchedule(
      currentBalance,
      annualInterestRate,
      higherPaymentTarget,
      newMonthlySpending,
      monthlyFees,
      paymentGrowth
    );

    if (higherSim.isPayable) {
      const monthsSaved = simulationResult.isPayable
        ? Math.max(0, simulationResult.months - higherSim.months)
        : higherSim.months;
      const interestSaved = simulationResult.isPayable
        ? Math.max(0, simulationResult.totalInterest - higherSim.totalInterest)
        : 0;
      const totalCashSaved = simulationResult.isPayable
        ? Math.max(0, simulationResult.totalPaid - higherSim.totalPaid)
        : 0;

      acceleratedComparison = {
        monthlyPayment: higherPaymentTarget,
        monthsToPayoff: higherSim.months,
        payoffDurationFormatted: formatPayoffDuration(higherSim.months),
        totalInterest: higherSim.totalInterest,
        totalPaid: higherSim.totalPaid,
        monthsSaved,
        interestSaved,
        totalCashSaved,
        formatted: {
          monthlyPayment: formatINR(higherPaymentTarget),
          totalInterest: formatINR(higherSim.totalInterest),
          totalPaid: formatINR(higherSim.totalPaid),
          interestSaved: formatINR(interestSaved),
          totalCashSaved: formatINR(totalCashSaved),
        },
      };
    }
  }

  const conventionNotes = [
    'Simplified Monthly Compounding: Interest is calculated monthly as (APR / 12 / 100) applied directly to the month’s opening ledger balance.',
    'Accounting Order of Operations: Opening Balance + Monthly Finance Charges + New Spending + Monthly Fees - Monthly Payment = Closing Balance.',
    'Payoff Clamping: In the final payoff month, the payment is strictly capped at the remaining balance so that the card ledger reaches exactly ₹0 without overpayment.',
    '600-Month Safety Cap: Simulations are capped at 50 years (600 months). Scenarios where payments fail to amortize the principal within this window are reported as non-payable.',
  ];

  const disclaimer =
    'Educational Model Disclaimer: This calculator estimates interest, payment velocity, and payoff schedules using a standard monthly compounding model. In reality, Indian card issuers (e.g. HDFC, SBI Card, ICICI, Axis, Kotak, RBL) compute finance charges daily using the Average Daily Balance (ADB) method from the exact transaction date, and statutory 18% Goods & Services Tax (GST) is levied on all interest charges and processing fees. This tool does not guarantee specific bank billing cycle amounts or represent an official statement quote.';

  return {
    isPayable: simulationResult.isPayable,
    isCappedAt600: simulationResult.isCapped,
    monthsToPayoff: simulationResult.isPayable ? simulationResult.months : 0,
    payoffDurationFormatted: simulationResult.isPayable
      ? formatPayoffDuration(simulationResult.months)
      : simulationResult.isCapped
      ? 'Exceeds 50 Years (600+ Months)'
      : 'Never (Perpetual Debt Trap)',
    currentBalance,
    annualInterestRate,
    monthlyInterestRatePercentage: Math.round(monthlyRate * 100 * 100) / 100,
    initialMonthlyPayment: monthlyPayment,
    newMonthlySpending,
    monthlyFees,

    totalPrincipalPaid: simulationResult.totalPrincipal,
    totalInterestPaid: simulationResult.totalInterest,
    totalFeesPaid: simulationResult.totalFees,
    totalSpendingPaid: simulationResult.totalSpending,
    totalAmountPaid: simulationResult.totalPaid,

    firstMonthInterest,
    firstMonthRecurringChargesTotal: firstMonthRecurringCharges,
    warning,

    schedule: simulationResult.schedule,
    acceleratedComparison,

    conventionNotes,
    disclaimer,
  };
}
