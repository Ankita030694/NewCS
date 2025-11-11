import { NextRequest, NextResponse } from 'next/server';
import { getPaginatedBlogs } from '@/lib/blogs';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '9', 10);
    
    // Validate pagination parameters
    const validPage = Math.max(1, page);
    const validLimit = Math.min(100, Math.max(1, limit)); // Limit between 1 and 100
    
    const { blogs, pagination } = await getPaginatedBlogs(validPage, validLimit);
    const responseHeaders = new Headers({
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=900',
    });

    return NextResponse.json(
      {
        success: true,
        blogs,
        pagination,
      },
      { status: 200, headers: responseHeaders }
    );
  } catch (error: any) {
    console.error('Error fetching blogs:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blogs',
        message: error.message || 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

