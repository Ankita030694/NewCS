import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json();

    if (!phone) {
      return NextResponse.json({ error: 'Phone number is required' }, { status: 400 });
    }

    let normalizedPhone = String(phone).trim();
    if (normalizedPhone.startsWith('+91')) {
      normalizedPhone = normalizedPhone.substring(3);
    } else if (normalizedPhone.startsWith('91') && normalizedPhone.length === 12) {
      normalizedPhone = normalizedPhone.substring(2);
    }

    const leadsSnapshot = await adminDb.collection('Form').where('number', '==', normalizedPhone).get();

    if (leadsSnapshot.empty) {
      console.error(`[Mark Paid API] Lead not found for phone: ${normalizedPhone}`);
      return NextResponse.json({ error: 'Lead not found' }, { status: 404 });
    }

    const batch = adminDb.batch();
    const paymentUpdate: Record<string, unknown> = {
      payment: 'paid',
      paymentStatus: 'paid',
      paymentUpdatedAt: new Date().toISOString(),
      markedVia: 'frontend_localstorage',
    };

    leadsSnapshot.forEach((doc) => {
      batch.update(doc.ref, paymentUpdate);
    });

    await batch.commit();
    console.log('[Mark Paid API] Successfully updated lead(s) for phone:', normalizedPhone);

    return NextResponse.json({ success: true, message: 'Lead marked as paid' }, { status: 200 });
  } catch (error) {
    console.error('[Mark Paid API] Error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
