import crypto from 'crypto';

const PIXEL_ID = '477133588597367';
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN;

function hashData(data: string) {
    return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
}

export interface MetaEventParams {
    email?: string;
    phone?: string;
    fbc?: string;
    fbp?: string;
    eventName?: string;
    eventId?: string;
    eventSourceUrl?: string;
    testEventCode?: string;
    value?: number;
    currency?: string;
    clientIpAddress?: string;
    clientUserAgent?: string;
}

export async function sendMetaCAPIEvent(params: MetaEventParams) {
    const {
        email,
        phone,
        fbc,
        fbp,
        eventName = 'Lead',
        eventSourceUrl,
        testEventCode,
        value = 0.00,
        currency = 'INR',
        clientIpAddress,
        clientUserAgent
    } = params;

    if (!ACCESS_TOKEN) {
        console.error('META_ACCESS_TOKEN is not defined');
        return { success: false, error: 'Server configuration error' };
    }

    const userData: any = {};
    if (email) userData.em = [hashData(email)];
    if (phone) userData.ph = [hashData(phone)];
    if (fbc) userData.fbc = fbc;
    if (fbp) userData.fbp = fbp;
    if (clientIpAddress) userData.client_ip_address = clientIpAddress;
    if (clientUserAgent) userData.client_user_agent = clientUserAgent;

    const eventData: any = {
        data: [
            {
                event_name: eventName,
                event_time: Math.floor(Date.now() / 1000),
                event_id: params.eventId,
                action_source: 'website',
                event_source_url: eventSourceUrl || 'https://www.credsettle.com',
                user_data: userData,
                custom_data: {
                    value: value,
                    currency: currency,
                },
            },
        ],
    };

    if (testEventCode) {
        eventData.test_event_code = testEventCode;
    }

    try {
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
            return { success: false, error: 'Failed to send event to Meta', details: result };
        }

        return { success: true, result };
    } catch (error: any) {
        console.error('CAPI Utility Error:', error);
        return { success: false, error: 'Internal server error', message: error.message };
    }
}
