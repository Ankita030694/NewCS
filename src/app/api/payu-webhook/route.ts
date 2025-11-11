import { NextRequest, NextResponse } from 'next/server';
import { createHmac } from 'crypto';

import { adminDb } from '@/lib/firebaseAdmin';

const SUCCESS_STATUSES = new Set(['SUCCESS', 'COMPLETED', 'CAPTURED', 'APPROVED']);

const PHONE_FIELDS = [
  'phone',
  'mobile',
  'mobileNo',
  'customer_phone',
  'customerPhone',
  'customer_mobile',
  'customerMobile',
  'phoneNumber',
  'customerPhoneNumber',
];

const STATUS_FIELDS = ['txnStatus', 'status', 'paymentStatus', 'event', 'state'];

const REFERENCE_FIELDS = [
  'transactionId',
  'txnId',
  'mihpayid',
  'orderId',
  'paymentId',
  'referenceNo',
  'referenceId',
];

function parsePayload(rawBody: string, contentType: string | null): Record<string, unknown> {
  if (!rawBody) {
    return {};
  }

  const normalizedContentType = contentType?.toLowerCase() ?? '';

  if (normalizedContentType.includes('application/json')) {
    return JSON.parse(rawBody);
  }

  if (normalizedContentType.includes('application/x-www-form-urlencoded')) {
    const params = new URLSearchParams(rawBody);
    return Object.fromEntries(params.entries());
  }

  try {
    return JSON.parse(rawBody);
  } catch {
    const params = new URLSearchParams(rawBody);
    if ([...params.keys()].length > 0) {
      return Object.fromEntries(params.entries());
    }
  }

  throw new Error('Unsupported webhook payload format');
}

function extractFirstMatchingField(payload: Record<string, unknown>, candidateFields: string[]) {
  for (const field of candidateFields) {
    const value = payload[field];
    if (value !== undefined && value !== null && value !== '') {
      return value;
    }
  }
  return undefined;
}

function extractPhone(payload: Record<string, unknown>): string | undefined {
  const rawPhone = extractFirstMatchingField(payload, PHONE_FIELDS);
  if (rawPhone === undefined) {
    return undefined;
  }

  return String(rawPhone).trim();
}

function extractStatus(payload: Record<string, unknown>): string | undefined {
  const rawStatus = extractFirstMatchingField(payload, STATUS_FIELDS);
  if (rawStatus === undefined) {
    return undefined;
  }

  return String(rawStatus).trim();
}

function extractReference(payload: Record<string, unknown>): string | undefined {
  const rawReference = extractFirstMatchingField(payload, REFERENCE_FIELDS);
  if (rawReference === undefined) {
    return undefined;
  }

  return String(rawReference).trim();
}

function verifySignature(rawBody: string, request: NextRequest) {
  const secret = process.env.PAYU_WEBHOOK_SECRET;

  // Skip signature validation if no secret configured.
  if (!secret) {
    return true;
  }

  const signatureHeader =
    request.headers.get('x-payu-signature') ?? request.headers.get('x-payments-signature');

  if (!signatureHeader) {
    return false;
  }

  const computedSignature = createHmac('sha256', secret).update(rawBody).digest('hex');

  return signatureHeader === computedSignature;
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  if (!verifySignature(rawBody, request)) {
    return NextResponse.json({ error: 'Invalid webhook signature' }, { status: 401 });
  }

  let payload: Record<string, unknown>;

  try {
    payload = parsePayload(rawBody, request.headers.get('content-type'));
  } catch (error) {
    return NextResponse.json(
      { error: 'Unable to parse webhook payload', details: (error as Error).message },
      { status: 400 }
    );
  }

  const status = extractStatus(payload);
  const phone = extractPhone(payload);

  if (!phone) {
    return NextResponse.json({ error: 'Missing customer phone' }, { status: 400 });
  }

  if (!status || !SUCCESS_STATUSES.has(status.toUpperCase())) {
    return NextResponse.json({ status: 'ignored' }, { status: 200 });
  }

  const leadsSnapshot = await adminDb.collection('leads').where('phone', '==', phone).get();

  if (leadsSnapshot.empty) {
    return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
  }

  const batch = adminDb.batch();
  const reference = extractReference(payload);
  const paymentUpdate: Record<string, unknown> = {
    payment: 'paid',
    paymentUpdatedAt: new Date().toISOString(),
  };

  if (reference) {
    paymentUpdate.paymentReference = reference;
  }

  leadsSnapshot.forEach((doc) => {
    batch.update(doc.ref, paymentUpdate);
  });

  await batch.commit();

  return NextResponse.json({ status: 'updated' }, { status: 200 });
}



