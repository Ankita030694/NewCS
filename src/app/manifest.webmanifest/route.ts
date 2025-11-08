import { NextResponse } from 'next/server';

export function GET() {
  return new NextResponse(
    JSON.stringify({
      name: 'CredSettle',
      short_name: 'CredSettle',
      description:
        "CredSettle is India's leading legal loan settlement company helping borrowers secure RBI-compliant debt resolutions.",
      start_url: '/',
      display: 'standalone',
      background_color: '#FFFFFF',
      theme_color: '#007AFF',
      icons: [
        {
          src: '/credsettle-logo.svg',
          sizes: '192x192',
          type: 'image/svg+xml'
        },
        {
          src: '/favicon.ico',
          sizes: '48x48',
          type: 'image/x-icon'
        }
      ]
    }),
    {
      headers: {
        'Content-Type': 'application/manifest+json; charset=utf-8',
        'Cache-Control': 'public, max-age=86400, immutable'
      }
    }
  );
}

