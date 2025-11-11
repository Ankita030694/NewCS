import { NextRequest, NextResponse } from 'next/server';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

const ERROR_MESSAGES: Record<string, string> = {
  'auth/invalid-credential': 'The email or password is incorrect. Please try again.',
  'auth/user-disabled': 'This account has been disabled. Contact support for assistance.',
  'auth/user-not-found': 'No account found with this email address.',
  'auth/wrong-password': 'The email or password is incorrect. Please try again.',
  'auth/too-many-requests': 'Too many failed attempts. Please wait a moment and try again.',
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const email = typeof body?.email === 'string' ? body.email.trim() : '';
    const password = typeof body?.password === 'string' ? body.password : '';

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          error: 'Email and password are required.',
        },
        { status: 400 },
      );
    }

    const credential = await signInWithEmailAndPassword(auth, email, password);
    const token = await credential.user.getIdToken();
    const refreshToken = credential.user.refreshToken;

    return NextResponse.json(
      {
        success: true,
        token,
        refreshToken,
        user: {
          uid: credential.user.uid,
          email: credential.user.email,
          displayName: credential.user.displayName,
        },
      },
      { status: 200 },
    );
  } catch (error: any) {
    console.error('Firebase login error:', error);
    const code = error?.code || 'auth/unknown';
    const message =
      ERROR_MESSAGES[code] ||
      'Unable to sign you in right now. Please verify your credentials or try again later.';

    const statusCode = code === 'auth/invalid-credential' || code === 'auth/wrong-password' || code === 'auth/user-not-found'
      ? 401
      : 500;

    return NextResponse.json(
      {
        success: false,
        error: message,
        code,
      },
      { status: statusCode },
    );
  }
}


