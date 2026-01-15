import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';
import { sendMetaCAPIEvent } from '@/lib/meta';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        let { email, phone, fbc, fbp, eventName = 'Lead', eventId, eventSourceUrl, testEventCode, value, currency } = body;

        // If fbc or fbp are missing, try to look them up in Firestore
        if (!fbc || !fbp) {
            const leadsRef = adminDb.collection('Form');
            let query;

            if (email) {
                query = leadsRef.where('email', '==', email.trim().toLowerCase());
            } else if (phone) {
                query = leadsRef.where('number', '==', phone.trim());
            }

            if (query) {
                const snapshot = await query.limit(1).get();
                if (!snapshot.empty) {
                    const leadData = snapshot.docs[0].data();
                    fbc = fbc || leadData.fbc;
                    fbp = fbp || leadData.fbp;
                    email = email || leadData.email;
                    phone = phone || leadData.number;
                }
            }
        }

        const result = await sendMetaCAPIEvent({
            email,
            phone,
            fbc,
            fbp,
            eventName,
            eventId,
            eventSourceUrl: eventSourceUrl || request.headers.get('referer') || undefined,
            testEventCode,
            value,
            currency,
            clientIpAddress: request.headers.get('x-forwarded-for')?.split(',')[0] || undefined,
            clientUserAgent: request.headers.get('user-agent') || undefined,
        });

        if (!result.success) {
            return NextResponse.json(result, { status: 500 });
        }

        return NextResponse.json({ success: true, result: result.result, lookupPerformed: true }, { status: 200 });
    } catch (error: any) {
        console.error('CAPI Endpoint Error:', error);
        return NextResponse.json({ error: 'Internal server error', message: error.message }, { status: 500 });
    }
}
