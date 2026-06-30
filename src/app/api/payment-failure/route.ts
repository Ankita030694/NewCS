import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  // PayU sends payment details via POST to the failure URL (furl).
  // Next.js Pages only accept GET requests. 
  // This API route catches the POST and redirects to the home page as a GET request.
  
  const baseUrl = request.nextUrl.origin;
  return NextResponse.redirect(new URL('/', baseUrl), 303);
}

export async function GET(request: NextRequest) {
  const baseUrl = request.nextUrl.origin;
  return NextResponse.redirect(new URL('/', baseUrl), 303);
}
