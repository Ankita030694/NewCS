import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebaseAdmin';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields (name, phone/number, email, state/city)
    const name = typeof body.name === 'string' ? body.name.trim() : '';
    const number = typeof (body.number || body.phone) === 'string' ? (body.number || body.phone).trim() : '';
    const email = typeof body.email === 'string' ? body.email.trim() : '';
    const stateOrCity = typeof (body.state || body.city) === 'string' ? (body.state || body.city).trim() : '';

    if (!name) {
      return NextResponse.json({ error: 'Missing required field: name' }, { status: 400 });
    }
    if (!number) {
      return NextResponse.json({ error: 'Missing required field: phone number' }, { status: 400 });
    }
    if (!email) {
      return NextResponse.json({ error: 'Missing required field: email' }, { status: 400 });
    }
    if (!stateOrCity) {
      return NextResponse.json({ error: 'Missing required field: state' }, { status: 400 });
    }

    // Verify reCAPTCHA token
    const captchaToken = body.captchaToken;
    if (!captchaToken) {
      return NextResponse.json(
        { error: 'reCAPTCHA token is missing.' },
        { status: 400 }
      );
    }

    const secretKey = process.env.RECAPTCHA_SECRET_KEY;
    if (!secretKey) {
      throw new Error('RECAPTCHA_SECRET_KEY is not defined in environment variables.');
    }
    const verifyUrl = `https://www.google.com/recaptcha/api/siteverify`;
    
    const captchaFormData = new URLSearchParams();
    captchaFormData.append('secret', secretKey);
    captchaFormData.append('response', captchaToken);

    const recaptchaRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: captchaFormData.toString()
    });
    const recaptchaData = await recaptchaRes.json();
    
    console.log('reCAPTCHA Verification Score:', recaptchaData.score);

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      console.error('reCAPTCHA verification failed:', recaptchaData);
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed. Please try again.' },
        { status: 400 }
      );
    }

    // Check if user has already submitted a form today (based on phone number)
    const today = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '-');

    const querySnapshot = await adminDb.collection('Form')
      .where('number', '==', number)
      .where('date', '==', today)
      .limit(1)
      .get();

    if (!querySnapshot.empty) {
      return NextResponse.json(
        {
          success: false,
          error: 'You have already submitted a form today. Our team will contact you soon.'
        },
        { status: 429 }
      );
    }

    const messageVal = typeof (body.message || body.queries) === 'string' ? (body.message || body.queries).trim() : '';

    // Prepare the data structure matching the provided format, saving unused fields as empty
    const formData = {
      canPay: body.canPay || '',
      city: stateOrCity,
      state: stateOrCity,
      created: body.created || Date.now(),
      creditCardDues: body.creditCardDues || '',
      date: body.date || today,
      email: email,
      employmentStatus: body.employmentStatus || '',
      harassment: body.harassment || '',
      monthlyIncome: body.monthlyIncome || '',
      name: name,
      number: number,
      personalLoanDues: body.personalLoanDues || '',
      queries: messageVal,
      message: messageVal,
      submissionUrl: body.submissionUrl || '',
      utmParams: body.utmParams || {},
    };

    // Save to Firestore using Admin SDK
    const docRef = await adminDb.collection('Form').add(formData);

    // Return success response
    return NextResponse.json(
      {
        success: true,
        message: 'Form submitted successfully',
        id: docRef.id,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Detailed error saving form data:', {
      message: error.message,
      code: error.code,
      stack: error.stack,
      details: error.details,
    });
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save form data',
        message: error.message || 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

