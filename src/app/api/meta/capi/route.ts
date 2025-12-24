import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import { adminDb } from '@/lib/firebaseAdmin';

const PIXEL_ID = '477133588597367';
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

function hashData(data: string) {
    return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        let { email, phone, fbc, fbp, eventName = 'Lead', eventSourceUrl, testEventCode } = body;

        if (!ACCESS_TOKEN) {
            console.error('META_ACCESS_TOKEN is not defined');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

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
                    // Also fill in email/phone if they were missing but found in DB
                    email = email || leadData.email;
                    phone = phone || leadData.number;
                }
            }
        }

        const userData: any = {};
        if (email) userData.em = [hashData(email)];
        if (phone) userData.ph = [hashData(phone)];
        if (fbc) userData.fbc = fbc;
        if (fbp) userData.fbp = fbp;

        const eventData: any = {
            data: [
                {
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    action_source: 'website',
                    event_source_url: eventSourceUrl || request.headers.get('referer') || 'https://www.credsettle.com',
                    user_data: userData,
                },
            ],
        };

        if (testEventCode) {
            eventData.test_event_code = testEventCode;
        }

        const response = await fetch(`https://graph.facebook.com/v18.0/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });

        const result = await response.json();

        if (!response.ok) {
            console.error('Meta CAPI Error:', result);
            return NextResponse.json({ error: 'Failed to send event to Meta', details: result }, { status: response.status });
        }

        return NextResponse.json({ success: true, result, lookupPerformed: true }, { status: 200 });
    } catch (error: any) {
        console.error('CAPI Endpoint Error:', error);
        return NextResponse.json({ error: 'Internal server error', message: error.message }, { status: 500 });
    }
}
