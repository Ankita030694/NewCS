import { NextRequest, NextResponse } from 'next/server';
import {
  validateDebtPlannerInput,
  calculateDebtRepaymentPlan,
} from '@/lib/tools/calculators/debtRepaymentPlanner';
import { adminDb } from '@/lib/firebaseAdmin';

// In-memory rate limiting against spam (IP-based, max 60 requests/minute)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(clientIp: string): boolean {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const maxRequests = 60;

  const entry = rateLimitMap.get(clientIp);
  if (!entry || now - entry.timestamp > windowMs) {
    rateLimitMap.set(clientIp, { count: 1, timestamp: now });
    return false;
  }

  if (entry.count >= maxRequests) {
    return true;
  }

  entry.count += 1;
  return false;
}

// Clean old rate limit entries periodically
setInterval(() => {
  const now = Date.now();
  rateLimitMap.forEach((entry, ip) => {
    if (now - entry.timestamp > 60 * 1000) {
      rateLimitMap.delete(ip);
    }
  });
}, 5 * 60 * 1000);

export async function POST(request: NextRequest) {
  try {
    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
      request.headers.get('x-real-ip') ||
      'anonymous';

    if (isRateLimited(clientIp)) {
      return NextResponse.json(
        {
          success: false,
          error: 'Too many requests. Please wait a moment before calculating again.',
        },
        { status: 429 }
      );
    }

    const body = await request.json().catch(() => null);

    // Validate inputs
    const validation = validateDebtPlannerInput(body);
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error || 'Invalid calculation inputs.',
        },
        { status: 400 }
      );
    }

    // Perform pure server-side calculation
    const calculatedResult = calculateDebtRepaymentPlan(validation.sanitized);

    // Save calculation session to Firestore 'tool_calculations'
    let calculationId = `repay_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    try {
      if (adminDb) {
        const docRef = await adminDb.collection('tool_calculations').add({
          toolId: 'debt-repayment-planner',
          toolCategory: 'Debt Management',
          inputs: {
            debtCount: validation.sanitized.debts.length,
            strategy: validation.sanitized.strategy,
            extraMonthlyPayment: validation.sanitized.extraMonthlyPayment,
            oneTimeExtraPayment: validation.sanitized.oneTimeExtraPayment,
            startMonthYear: validation.sanitized.startMonthYear,
            debts: validation.sanitized.debts.map((d) => ({
              name: d.name,
              balance: d.balance,
              interestRate: d.interestRate,
              minPayment: d.minPayment,
            })),
          },
          results: {
            chosenStrategy: calculatedResult.chosenStrategy,
            isPayable: calculatedResult.activeResult.isPayable,
            totalMonths: calculatedResult.activeResult.totalMonths,
            payoffDate: calculatedResult.activeResult.payoffDate,
            totalInterest: calculatedResult.activeResult.totalInterest,
            totalPayments: calculatedResult.activeResult.totalPayments,
            totalPrincipal: calculatedResult.activeResult.totalPrincipal,
            cheaperStrategy: calculatedResult.cheaperStrategy,
            interestSavedDifference: calculatedResult.interestSavedDifference,
            fasterStrategy: calculatedResult.fasterStrategy,
            monthsDifference: calculatedResult.monthsDifference,
          },
          clientMeta: {
            userAgent: request.headers.get('user-agent')?.substring(0, 200) || '',
            referer: request.headers.get('referer')?.substring(0, 200) || '',
          },
          convertedToLead: false,
          createdAt: Date.now(),
        });
        calculationId = docRef.id;
      }
    } catch (dbErr) {
      // Non-blocking Firestore fallback: log warning but never fail calculation response
      console.warn('Firestore tool_calculations write skipped or failed:', dbErr);
    }

    return NextResponse.json(
      {
        success: true,
        calculationId,
        data: calculatedResult,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error in debt-repayment-planner API route:', error);
    return NextResponse.json(
      {
        success: false,
        error: error.message || 'Internal server error while computing debt repayment plan.',
      },
      { status: 500 }
    );
  }
}
