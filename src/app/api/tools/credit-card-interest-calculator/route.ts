import { NextRequest, NextResponse } from 'next/server';
import {
  validateCreditCardInterestInput,
  calculateCreditCardInterest,
} from '@/lib/tools/calculators/creditCardInterestCalculator';
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
    const validation = validateCreditCardInterestInput(body);
    if (!validation.isValid || !validation.sanitized) {
      return NextResponse.json(
        {
          success: false,
          error: validation.error || 'Invalid calculation inputs.',
        },
        { status: 400 }
      );
    }

    // Pure server-side calculation
    const calculatedResult = calculateCreditCardInterest(validation.sanitized);

    // Save calculation session to Firestore 'tool_calculations'
    let calculationId = `cc_int_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    try {
      if (adminDb) {
        const docRef = await adminDb.collection('tool_calculations').add({
          toolId: 'credit-card-interest-calculator',
          toolCategory: 'Credit & CIBIL',
          inputs: {
            currentBalance: validation.sanitized.currentBalance,
            annualInterestRate: validation.sanitized.annualInterestRate,
            monthlyPayment: validation.sanitized.monthlyPayment,
            newMonthlySpending: validation.sanitized.newMonthlySpending,
            monthlyFees: validation.sanitized.monthlyFees,
            paymentGrowthEnabled: validation.sanitized.paymentGrowth?.enabled ?? false,
            paymentGrowthValue: validation.sanitized.paymentGrowth?.value ?? 0,
          },
          results: {
            isPayable: calculatedResult.isPayable,
            isCappedAt600: calculatedResult.isCappedAt600,
            monthsToPayoff: calculatedResult.monthsToPayoff,
            payoffDuration: calculatedResult.payoffDurationFormatted,
            totalInterestPaid: calculatedResult.totalInterestPaid,
            totalAmountPaid: calculatedResult.totalAmountPaid,
            warningType: calculatedResult.warning.type,
            isTrapped: calculatedResult.warning.isTrapped,
            hasAcceleratedComparison: Boolean(calculatedResult.acceleratedComparison),
            acceleratedInterestSaved:
              calculatedResult.acceleratedComparison?.interestSaved ?? 0,
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
      // Non-blocking Firestore fallback: log warning but never fail user response
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
    console.error('Error in credit-card-interest-calculator API route:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'An internal server error occurred while simulating credit card interest.',
      },
      { status: 500 }
    );
  }
}
