import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // PayU sends payment details via POST to the success URL (surl).
  // Next.js Pages only accept GET requests. 
  // This API route catches the POST and redirects to the /success page as a GET request.
  
  const baseUrl = request.nextUrl.origin;
  return NextResponse.redirect(new URL('/success', baseUrl), 303);
}

export async function GET(request: NextRequest) {
  // Fallback just in case PayU sends a GET request
  const baseUrl = request.nextUrl.origin;
  return NextResponse.redirect(new URL('/success', baseUrl), 303);
}
