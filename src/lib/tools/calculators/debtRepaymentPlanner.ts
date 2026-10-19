/**
 * Calculation Engine for Tool 5: Debt Repayment Planner
 * 
 * Provides month-by-month debt amortization simulation comparing:
 * - Debt Avalanche (Highest Interest Rate First - mathematically optimal)
 * - Debt Snowball (Smallest Balance First - psychological momentum)
 * 
 * Features:
 * - Interest accrued before payments on opening monthly balance (explicitly disclosed convention)
 * - Minimum payment application first, followed by strategy-based extra allocation
 * - Rollover effect (freed minimum payments from retired debts accelerate remaining balances)
 * - Final payment capped to exact remaining balance (no overpayment)
 * - Negative amortization detection (warns when payments cannot cover monthly interest)
 * - 600-month simulation ceiling to prevent infinite loops
 * - Side-by-side strategy comparison (time, interest, payments, milestones)
 * - Indian Rupee (INR) formatting with Lakhs/Crores grouping
 */

export type RepaymentStrategy = 'avalanche' | 'snowball';

export interface DebtInputItem {
  id: string;
  name: string;
  balance: number; // INR, > 0
  interestRate: number; // %, >= 0
  minPayment: number; // INR, >= 0
}

export interface PlannerInput {
  debts: DebtInputItem[];
  extraMonthlyPayment: number; // INR, >= 0
  strategy: RepaymentStrategy;
  oneTimeExtraPayment?: number; // INR, >= 0 (applied in Month 1)
  startMonthYear?: string; // YYYY-MM format, defaults to current month
}

export interface MonthlyDebtSnapshot {
  debtId: string;
  debtName: string;
  openingBalance: number;
  interestAccrued: number;
  minPaymentApplied: number;
  extraPaymentApplied: number;
  totalPaymentApplied: number;
  principalPaid: number;
  endingBalance: number;
  isPaidOffThisMonth: boolean;
}

export interface MonthlyScheduleRow {
  monthIndex: number; // 1, 2, 3...
  calendarDate: string; // e.g., "Nov 2026"
  openingTotalBalance: number;
  totalInterestAccrued: number;
  totalMinPaymentApplied: number;
  totalExtraPaymentApplied: number;
  totalPaymentApplied: number;
  totalPrincipalPaid: number;
  endingTotalBalance: number;
  debtSnapshots: MonthlyDebtSnapshot[];
  debtsPaidOffThisMonth: string[]; // Names of debts cleared in this month
  activeDebtCount: number;
}

export interface DebtPayoffMilestone {
  debtId: string;
  debtName: string;
  originalBalance: number;
  interestRate: number;
  payoffMonth: number;
  payoffDate: string;
  totalInterestPaid: number;
  totalPaymentsPaid: number;
}

export interface SimulationResult {
  strategy: RepaymentStrategy;
  isPayable: boolean;
  unpayableReason?: string;
  reachedMaxMonths: boolean;
  totalMonths: number;
  payoffDate: string;
  totalInterest: number;
  totalPayments: number;
  totalPrincipal: number;
  milestones: DebtPayoffMilestone[];
  monthlySchedule: MonthlyScheduleRow[];
  totalExtraContributed: number;
  interestToPrincipalRatio: number; // percentage of original principal
  formatted: {
    totalMonths: string;
    payoffDate: string;
    totalInterest: string;
    totalPayments: string;
    totalPrincipal: string;
    totalExtraContributed: string;
    interestToPrincipalRatio: string;
  };
}

export interface PlannerComparisonResult {
  avalanche: SimulationResult;
  snowball: SimulationResult;
  chosenStrategy: RepaymentStrategy;
  activeResult: SimulationResult;
  fasterStrategy: 'avalanche' | 'snowball' | 'tied';
  monthsDifference: number; // absolute difference
  cheaperStrategy: 'avalanche' | 'snowball' | 'tied';
  interestSavedDifference: number; // absolute difference in interest
  formattedInterestSaved: string;
  firstPayoffMilestone: {
    avalanche: { debtName: string; month: number; date: string } | null;
    snowball: { debtName: string; month: number; date: string } | null;
  };
  recommendation: string;
}

export const MAX_SIMULATION_MONTHS = 600; // 50 years ceiling

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
export function formatPercentage(val: number | null, decimals = 1): string {
  if (val === null || isNaN(val) || !isFinite(val)) return '0%';
  return `${val.toFixed(decimals)}%`;
}

/**
 * Helper to compute calendar month string from start date and month index
 */
export function getCalendarMonthLabel(startMonthYear: string, monthIndex: number): string {
  try {
    let [yearStr, monthStr] = startMonthYear.split('-');
    let year = parseInt(yearStr, 10);
    let month = parseInt(monthStr, 10) - 1; // 0-indexed

    if (isNaN(year) || isNaN(month)) {
      const now = new Date();
      year = now.getFullYear();
      month = now.getMonth();
    }

    const targetDate = new Date(year, month + (monthIndex - 1), 1);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
      'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    return `${months[targetDate.getMonth()]} ${targetDate.getFullYear()}`;
  } catch {
    return `Month ${monthIndex}`;
  }
}

/**
 * Get current year-month string in YYYY-MM format
 */
export function getCurrentYearMonth(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  return `${year}-${month}`;
}

/**
 * Simulate single strategy (Avalanche or Snowball)
 */
export function simulateRepayment(
  debts: DebtInputItem[],
  extraMonthly: number,
  strategy: RepaymentStrategy,
  oneTimeExtra = 0,
  startMonthYear?: string
): SimulationResult {
  const startMY = startMonthYear && /^\d{4}-\d{2}$/.test(startMonthYear)
    ? startMonthYear
    : getCurrentYearMonth();

  const totalPrincipal = debts.reduce((sum, d) => sum + d.balance, 0);

  // Initial check: if debts is empty or invalid
  if (debts.length === 0 || totalPrincipal <= 0) {
    return createEmptyResult(strategy, 'No active debts provided.');
  }

  // Check initial monthly interest accrued across all debts
  const initialMonthlyInterest = debts.reduce(
    (sum, d) => sum + d.balance * (d.interestRate / 1200),
    0
  );
  const totalBaseMonthlyPayment = debts.reduce((sum, d) => sum + d.minPayment, 0) + extraMonthly;

  // If even with extra payment, total payment <= total interest, debt cannot be paid off
  if (totalBaseMonthlyPayment <= initialMonthlyInterest) {
    return {
      strategy,
      isPayable: false,
      unpayableReason: `Your total monthly payments (${formatINR(totalBaseMonthlyPayment)}) are less than or equal to monthly interest accrued (${formatINR(initialMonthlyInterest)}). Balances will increase every month without larger payments.`,
      reachedMaxMonths: false,
      totalMonths: 0,
      payoffDate: 'Never',
      totalInterest: 0,
      totalPayments: 0,
      totalPrincipal,
      milestones: [],
      monthlySchedule: [],
      totalExtraContributed: 0,
      interestToPrincipalRatio: 0,
      formatted: {
        totalMonths: 'Cannot be paid off',
        payoffDate: 'Unpayable',
        totalInterest: 'N/A',
        totalPayments: 'N/A',
        totalPrincipal: formatINR(totalPrincipal),
        totalExtraContributed: '₹0',
        interestToPrincipalRatio: 'N/A',
      },
    };
  }

  // Clone debt tracking states
  interface ActiveDebtState {
    id: string;
    name: string;
    originalBalance: number;
    interestRate: number;
    minPayment: number;
    currentBalance: number;
    totalInterestPaid: number;
    totalPaymentsPaid: number;
    isPaidOff: boolean;
    payoffMonth: number | null;
    payoffDate: string | null;
  }

  const debtStates: ActiveDebtState[] = debts.map((d) => ({
    id: d.id,
    name: d.name,
    originalBalance: d.balance,
    interestRate: Math.max(0, d.interestRate),
    minPayment: Math.max(0, d.minPayment),
    currentBalance: d.balance,
    totalInterestPaid: 0,
    totalPaymentsPaid: 0,
    isPaidOff: false,
    payoffMonth: null,
    payoffDate: null,
  }));

  const milestones: DebtPayoffMilestone[] = [];
  const monthlySchedule: MonthlyScheduleRow[] = [];

  let monthIndex = 0;
  let totalCumulativeInterest = 0;
  let totalCumulativePayments = 0;
  let totalCumulativeExtra = 0;
  let reachedMaxMonths = false;

  while (debtStates.some((d) => !d.isPaidOff) && monthIndex < MAX_SIMULATION_MONTHS) {
    monthIndex += 1;
    const calendarDate = getCalendarMonthLabel(startMY, monthIndex);

    // Sum opening balances before this month's interest
    const openingTotalBalance = debtStates.reduce(
      (sum, d) => sum + (d.isPaidOff ? 0 : d.currentBalance),
      0
    );

    // 1. Accrue interest on opening balances for each active debt
    let monthTotalInterestAccrued = 0;
    const debtsInterestThisMonth = debtStates.map((d) => {
      if (d.isPaidOff || d.currentBalance <= 0) return 0;
      // Monthly interest = opening balance * (rate / 1200)
      const interest = d.currentBalance * (d.interestRate / 1200);
      monthTotalInterestAccrued += interest;
      return interest;
    });

    // 2. Minimum payments allocation
    let monthTotalMinApplied = 0;
    const snapshots: MonthlyDebtSnapshot[] = [];
    const debtsPaidThisMonthNames: string[] = [];

    // Temporary storage for adjusted balance after min payments
    const afterMinBalances: number[] = [];
    const minPaymentsApplied: number[] = [];

    debtStates.forEach((d, i) => {
      if (d.isPaidOff) {
        afterMinBalances.push(0);
        minPaymentsApplied.push(0);
        return;
      }

      const interest = debtsInterestThisMonth[i];
      const balanceWithInterest = d.currentBalance + interest;

      // Minimum payment cannot exceed balance with interest
      const minPaymentToApply = Math.min(d.minPayment, balanceWithInterest);
      const remainingBalance = balanceWithInterest - minPaymentToApply;

      afterMinBalances.push(remainingBalance);
      minPaymentsApplied.push(minPaymentToApply);
      monthTotalMinApplied += minPaymentToApply;
    });

    // 3. Calculate available extra funds for this month
    // Base extra + Month 1 one-time extra + Rollover from previously retired debts
    let freedMinPaymentsRollover = 0;
    debtStates.forEach((d) => {
      if (d.isPaidOff) {
        freedMinPaymentsRollover += d.minPayment;
      }
    });

    let extraPool =
      extraMonthly +
      (monthIndex === 1 ? oneTimeExtra : 0) +
      freedMinPaymentsRollover;

    let monthTotalExtraApplied = 0;
    const extraPaymentsApplied: number[] = new Array(debtStates.length).fill(0);

    // 4. Sort active debts according to selected strategy for extra payment allocation
    // Active debts are those with afterMinBalances > 0.0001
    const activeIndices = debtStates
      .map((d, idx) => ({ idx, debt: d, remBal: afterMinBalances[idx] }))
      .filter((item) => !item.debt.isPaidOff && item.remBal > 0.0001);

    if (strategy === 'avalanche') {
      // Avalanche: highest interest rate first, tie-breaker smallest balance
      activeIndices.sort((a, b) => {
        if (b.debt.interestRate !== a.debt.interestRate) {
          return b.debt.interestRate - a.debt.interestRate;
        }
        return a.remBal - b.remBal;
      });
    } else {
      // Snowball: smallest balance first, tie-breaker highest interest rate
      activeIndices.sort((a, b) => {
        if (a.remBal !== b.remBal) {
          return a.remBal - b.remBal;
        }
        return b.debt.interestRate - a.debt.interestRate;
      });
    }

    // Allocate extra pool sequentially
    for (const item of activeIndices) {
      if (extraPool <= 0.0001) break;

      const idx = item.idx;
      const neededToClear = afterMinBalances[idx];
      const extraToApply = Math.min(extraPool, neededToClear);

      extraPaymentsApplied[idx] = extraToApply;
      afterMinBalances[idx] -= extraToApply;
      extraPool -= extraToApply;
      monthTotalExtraApplied += extraToApply;
    }

    // 5. Update debt states and create snapshots
    let endingTotalBalance = 0;

    debtStates.forEach((d, i) => {
      if (d.isPaidOff) {
        return;
      }

      const interest = debtsInterestThisMonth[i];
      const minApplied = minPaymentsApplied[i];
      const extraApplied = extraPaymentsApplied[i];
      const totalApplied = minApplied + extraApplied;
      const principalPaid = totalApplied - interest;
      const endingBalance = Math.max(0, afterMinBalances[i]);

      endingTotalBalance += endingBalance;
      d.currentBalance = endingBalance;
      d.totalInterestPaid += interest;
      d.totalPaymentsPaid += totalApplied;

      let isClearedNow = false;
      if (endingBalance <= 0.0001) {
        d.isPaidOff = true;
        d.currentBalance = 0;
        d.payoffMonth = monthIndex;
        d.payoffDate = calendarDate;
        isClearedNow = true;
        debtsPaidThisMonthNames.push(d.name);

        milestones.push({
          debtId: d.id,
          debtName: d.name,
          originalBalance: d.originalBalance,
          interestRate: d.interestRate,
          payoffMonth: monthIndex,
          payoffDate: calendarDate,
          totalInterestPaid: d.totalInterestPaid,
          totalPaymentsPaid: d.totalPaymentsPaid,
        });
      }

      snapshots.push({
        debtId: d.id,
        debtName: d.name,
        openingBalance: d.currentBalance + principalPaid, // original start for this debt
        interestAccrued: interest,
        minPaymentApplied: minApplied,
        extraPaymentApplied: extraApplied,
        totalPaymentApplied: totalApplied,
        principalPaid,
        endingBalance: d.currentBalance,
        isPaidOffThisMonth: isClearedNow,
      });
    });

    const monthTotalPayment = monthTotalMinApplied + monthTotalExtraApplied;
    const monthTotalPrincipal = monthTotalPayment - monthTotalInterestAccrued;

    totalCumulativeInterest += monthTotalInterestAccrued;
    totalCumulativePayments += monthTotalPayment;
    totalCumulativeExtra += monthTotalExtraApplied;

    monthlySchedule.push({
      monthIndex,
      calendarDate,
      openingTotalBalance,
      totalInterestAccrued: monthTotalInterestAccrued,
      totalMinPaymentApplied: monthTotalMinApplied,
      totalExtraPaymentApplied: monthTotalExtraApplied,
      totalPaymentApplied: monthTotalPayment,
      totalPrincipalPaid: monthTotalPrincipal,
      endingTotalBalance,
      debtSnapshots: snapshots,
      debtsPaidOffThisMonth: debtsPaidThisMonthNames,
      activeDebtCount: debtStates.filter((d) => !d.isPaidOff).length,
    });

    // Check for negative amortization stall: if after 12 months, ending balance has not decreased
    if (monthIndex >= 12 && endingTotalBalance >= openingTotalBalance) {
      return {
        strategy,
        isPayable: false,
        unpayableReason: 'Debt balance is expanding or stagnating. Minimum payments are insufficient to cover ongoing interest charges.',
        reachedMaxMonths: false,
        totalMonths: monthIndex,
        payoffDate: 'Indefinite',
        totalInterest: totalCumulativeInterest,
        totalPayments: totalCumulativePayments,
        totalPrincipal,
        milestones,
        monthlySchedule,
        totalExtraContributed: totalCumulativeExtra,
        interestToPrincipalRatio: (totalCumulativeInterest / totalPrincipal) * 100,
        formatted: {
          totalMonths: `${monthIndex}+ months (Stagnant)`,
          payoffDate: 'Indefinite',
          totalInterest: formatINR(totalCumulativeInterest),
          totalPayments: formatINR(totalCumulativePayments),
          totalPrincipal: formatINR(totalPrincipal),
          totalExtraContributed: formatINR(totalCumulativeExtra),
          interestToPrincipalRatio: formatPercentage(
            (totalCumulativeInterest / totalPrincipal) * 100
          ),
        },
      };
    }
  }

  if (monthIndex >= MAX_SIMULATION_MONTHS && debtStates.some((d) => !d.isPaidOff)) {
    reachedMaxMonths = true;
  }

  const finalPayoffDate = getCalendarMonthLabel(startMY, monthIndex);
  const years = Math.floor(monthIndex / 12);
  const remainingMonths = monthIndex % 12;
  const tenureLabel =
    years > 0
      ? `${years} yr${years > 1 ? 's' : ''} ${remainingMonths > 0 ? `${remainingMonths} mo${remainingMonths > 1 ? 's' : ''}` : ''}`.trim()
      : `${monthIndex} month${monthIndex > 1 ? 's' : ''}`;

  const interestRatio = totalPrincipal > 0 ? (totalCumulativeInterest / totalPrincipal) * 100 : 0;

  return {
    strategy,
    isPayable: !reachedMaxMonths,
    unpayableReason: reachedMaxMonths
      ? `Debt repayment exceeded maximum simulation limit of ${MAX_SIMULATION_MONTHS} months (50 years). Consider increasing extra contributions or exploring formal debt settlement.`
      : undefined,
    reachedMaxMonths,
    totalMonths: monthIndex,
    payoffDate: finalPayoffDate,
    totalInterest: totalCumulativeInterest,
    totalPayments: totalCumulativePayments,
    totalPrincipal,
    milestones,
    monthlySchedule,
    totalExtraContributed: totalCumulativeExtra,
    interestToPrincipalRatio: interestRatio,
    formatted: {
      totalMonths: reachedMaxMonths ? `50+ Years (${MAX_SIMULATION_MONTHS} mo)` : tenureLabel,
      payoffDate: reachedMaxMonths ? 'Exceeds 50 Years' : finalPayoffDate,
      totalInterest: formatINR(totalCumulativeInterest),
      totalPayments: formatINR(totalCumulativePayments),
      totalPrincipal: formatINR(totalPrincipal),
      totalExtraContributed: formatINR(totalCumulativeExtra),
      interestToPrincipalRatio: formatPercentage(interestRatio),
    },
  };
}

/**
 * Creates empty simulation structure
 */
function createEmptyResult(strategy: RepaymentStrategy, reason: string): SimulationResult {
  return {
    strategy,
    isPayable: false,
    unpayableReason: reason,
    reachedMaxMonths: false,
    totalMonths: 0,
    payoffDate: 'N/A',
    totalInterest: 0,
    totalPayments: 0,
    totalPrincipal: 0,
    milestones: [],
    monthlySchedule: [],
    totalExtraContributed: 0,
    interestToPrincipalRatio: 0,
    formatted: {
      totalMonths: '0 months',
      payoffDate: 'N/A',
      totalInterest: '₹0',
      totalPayments: '₹0',
      totalPrincipal: '₹0',
      totalExtraContributed: '₹0',
      interestToPrincipalRatio: '0%',
    },
  };
}

/**
 * Run comprehensive comparison between Avalanche and Snowball
 */
export function calculateDebtRepaymentPlan(input: PlannerInput): PlannerComparisonResult {
  const { debts, extraMonthlyPayment, strategy, oneTimeExtraPayment = 0, startMonthYear } = input;

  const avalancheResult = simulateRepayment(
    debts,
    extraMonthlyPayment,
    'avalanche',
    oneTimeExtraPayment,
    startMonthYear
  );

  const snowballResult = simulateRepayment(
    debts,
    extraMonthlyPayment,
    'snowball',
    oneTimeExtraPayment,
    startMonthYear
  );

  const activeResult = strategy === 'avalanche' ? avalancheResult : snowballResult;

  // Comparison metrics
  let fasterStrategy: 'avalanche' | 'snowball' | 'tied' = 'tied';
  let monthsDifference = 0;

  if (avalancheResult.isPayable && snowballResult.isPayable) {
    if (avalancheResult.totalMonths < snowballResult.totalMonths) {
      fasterStrategy = 'avalanche';
      monthsDifference = snowballResult.totalMonths - avalancheResult.totalMonths;
    } else if (snowballResult.totalMonths < avalancheResult.totalMonths) {
      fasterStrategy = 'snowball';
      monthsDifference = avalancheResult.totalMonths - snowballResult.totalMonths;
    }
  }

  let cheaperStrategy: 'avalanche' | 'snowball' | 'tied' = 'tied';
  let interestSavedDifference = 0;

  if (avalancheResult.isPayable && snowballResult.isPayable) {
    if (avalancheResult.totalInterest < snowballResult.totalInterest - 1) {
      cheaperStrategy = 'avalanche';
      interestSavedDifference = snowballResult.totalInterest - avalancheResult.totalInterest;
    } else if (snowballResult.totalInterest < avalancheResult.totalInterest - 1) {
      cheaperStrategy = 'snowball';
      interestSavedDifference = avalancheResult.totalInterest - snowballResult.totalInterest;
    }
  }

  // First payoff milestone comparison
  const firstAvalancheMilestone = avalancheResult.milestones[0]
    ? {
        debtName: avalancheResult.milestones[0].debtName,
        month: avalancheResult.milestones[0].payoffMonth,
        date: avalancheResult.milestones[0].payoffDate,
      }
    : null;

  const firstSnowballMilestone = snowballResult.milestones[0]
    ? {
        debtName: snowballResult.milestones[0].debtName,
        month: snowballResult.milestones[0].payoffMonth,
        date: snowballResult.milestones[0].payoffDate,
      }
    : null;

  // Strategic Recommendation text
  let recommendation = '';
  if (!avalancheResult.isPayable || !snowballResult.isPayable) {
    recommendation =
      'Payments are insufficient under current terms. Increase monthly contributions or consider a structured settlement.';
  } else if (cheaperStrategy === 'avalanche' && interestSavedDifference > 5000) {
    recommendation = `The Avalanche method saves ${formatINR(interestSavedDifference)} in interest by eliminating high-APR debt first. Choose Avalanche for maximum financial efficiency.`;
  } else if (
    firstSnowballMilestone &&
    firstAvalancheMilestone &&
    firstSnowballMilestone.month < firstAvalancheMilestone.month
  ) {
    recommendation = `Snowball eliminates your first loan (${firstSnowballMilestone.debtName}) in Month ${firstSnowballMilestone.month}, providing immediate behavioral momentum with only a ${formatINR(interestSavedDifference)} interest difference.`;
  } else {
    recommendation =
      'Both strategies yield near-identical results for your portfolio. Choose Snowball for psychological ease or Avalanche for optimal math.';
  }

  return {
    avalanche: avalancheResult,
    snowball: snowballResult,
    chosenStrategy: strategy,
    activeResult,
    fasterStrategy,
    monthsDifference,
    cheaperStrategy,
    interestSavedDifference,
    formattedInterestSaved: formatINR(interestSavedDifference),
    firstPayoffMilestone: {
      avalanche: firstAvalancheMilestone,
      snowball: firstSnowballMilestone,
    },
    recommendation,
  };
}

/**
 * Validate user inputs before calculating
 */
export function validateDebtPlannerInput(data: any): {
  isValid: boolean;
  sanitized?: PlannerInput;
  error?: string;
} {
  if (!data || typeof data !== 'object') {
    return { isValid: false, error: 'Invalid input payload.' };
  }

  if (!Array.isArray(data.debts) || data.debts.length === 0) {
    return { isValid: false, error: 'Please provide at least one debt.' };
  }

  const sanitizedDebts: DebtInputItem[] = [];

  for (let i = 0; i < data.debts.length; i++) {
    const raw = data.debts[i];
    const indexLabel = `Debt #${i + 1}`;

    if (!raw || typeof raw !== 'object') {
      return { isValid: false, error: `Invalid format for ${indexLabel}.` };
    }

    const name =
      typeof raw.name === 'string' && raw.name.trim() !== ''
        ? raw.name.trim().substring(0, 80)
        : `Debt ${i + 1}`;

    const balance = parseFloat(raw.balance);
    if (isNaN(balance) || balance <= 0) {
      return {
        isValid: false,
        error: `${indexLabel} (${name}) must have a balance greater than ₹0.`,
      };
    }

    const interestRate = parseFloat(raw.interestRate ?? 0);
    if (isNaN(interestRate) || interestRate < 0) {
      return {
        isValid: false,
        error: `${indexLabel} (${name}) interest rate cannot be negative.`,
      };
    }

    const minPayment = parseFloat(raw.minPayment ?? 0);
    if (isNaN(minPayment) || minPayment < 0) {
      return {
        isValid: false,
        error: `${indexLabel} (${name}) minimum payment cannot be negative.`,
      };
    }

    sanitizedDebts.push({
      id: raw.id || `debt_${i + 1}`,
      name,
      balance,
      interestRate,
      minPayment,
    });
  }

  const extraMonthlyPayment = parseFloat(data.extraMonthlyPayment ?? 0);
  if (isNaN(extraMonthlyPayment) || extraMonthlyPayment < 0) {
    return {
      isValid: false,
      error: 'Extra monthly payment must be zero or a positive amount.',
    };
  }

  const oneTimeExtraPayment = parseFloat(data.oneTimeExtraPayment ?? 0);
  if (isNaN(oneTimeExtraPayment) || oneTimeExtraPayment < 0) {
    return {
      isValid: false,
      error: 'One-time extra payment must be zero or a positive amount.',
    };
  }

  const strategy: RepaymentStrategy =
    data.strategy === 'snowball' ? 'snowball' : 'avalanche';

  const startMonthYear =
    typeof data.startMonthYear === 'string' && /^\d{4}-\d{2}$/.test(data.startMonthYear)
      ? data.startMonthYear
      : getCurrentYearMonth();

  return {
    isValid: true,
    sanitized: {
      debts: sanitizedDebts,
      extraMonthlyPayment,
      strategy,
      oneTimeExtraPayment,
      startMonthYear,
    },
  };
}
