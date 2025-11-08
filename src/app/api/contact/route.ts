import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export async function POST(request: NextRequest) {
  try {
    // Parse the request body
    const body = await request.json();

    // Validate required fields
    const requiredFields = [
      'name',
      'number',
      'email',
      'city',
      'employmentStatus',
      'monthlyIncome',
      'harassment',
      'creditCardDues',
      'personalLoanDues',
      'canPay',
    ];

    // Check if all required fields are present
    for (const field of requiredFields) {
      const value = body[field];
      const isMissing =
        value === undefined ||
        value === null ||
        (typeof value === 'string' && value.trim() === '') ||
        (typeof value === 'number' && Number.isNaN(value));

      if (isMissing) {
        return NextResponse.json(
          { error: `Missing required field: ${field}` },
          { status: 400 }
        );
      }
    }

    // Prepare the data structure matching the provided format
    const formData = {
      canPay: body.canPay,
      city: body.city,
      created: body.created || Date.now(),
      creditCardDues: body.creditCardDues,
      date: body.date || new Date().toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
      }).replace(/\//g, '-'),
      email: body.email,
      employmentStatus: body.employmentStatus,
      harassment: body.harassment,
      monthlyIncome: body.monthlyIncome,
      name: body.name,
      number: body.number,
      personalLoanDues: body.personalLoanDues,
      queries: body.queries || '',
    };

    // Save to Firestore
    const docRef = await addDoc(collection(db, 'Form'), formData);

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
    console.error('Error saving form data:', error);
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

