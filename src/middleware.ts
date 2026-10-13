import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the URL pathname contains any uppercase characters
  if (!pathname.startsWith('/_next') && /[A-Z]/.test(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  const response = NextResponse.next();

  // Mandatory security headers across all responses including image optimization
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for:
     * - api (API routes)
     * - _next/static (static build assets)
     * - favicon.ico (favicon file)
     * - files with extensions (e.g. .svg, .png, etc.)
     * Includes _next/image so security headers are guaranteed on optimized image responses
     */
    '/((?!api|_next/static|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|txt|xml|pdf|json|woff|woff2|ttf|eot)).*)',
    '/_next/image',
  ],
};
