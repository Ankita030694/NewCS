const fetch = require('node-fetch');

async function testCAPI() {
    const url = 'http://localhost:3000/api/meta/capi';
    const testEventCode = process.argv[2];

    if (!testEventCode) {
        console.error('Please provide a test_event_code as an argument.');
        console.log('Usage: node test-meta-capi.js TEST12345');
        process.exit(1);
    }

    const payload = {
        email: 'test@example.com',
        phone: '1234567890',
        eventName: 'Lead',
        testEventCode: testEventCode,
        eventSourceUrl: 'http://localhost:3000/contact',
        value: 100,
        currency: 'INR'
    };

    console.log('Sending request to:', url);
    console.log('Payload:', JSON.stringify(payload, null, 2));

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        const result = await response.json();
        console.log('Status:', response.status);
        console.log('Response:', JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Error:', error.message);
    }
}

testCAPI();
