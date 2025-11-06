import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export async function GET(request: NextRequest) {
  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page') || '1', 10);
    const limit = parseInt(searchParams.get('limit') || '15', 10);
    
    // Validate pagination parameters
    const validPage = Math.max(1, page);
    const validLimit = Math.min(100, Math.max(1, limit)); // Limit between 1 and 100
    
    // Get all blogs from Firestore
    const blogsRef = collection(db, 'blogs');
    
    // Try to order by date first, fallback to created if date doesn't have an index
    let querySnapshot;
    try {
      const q = query(blogsRef, orderBy('date', 'desc'));
      querySnapshot = await getDocs(q);
    } catch (indexError: any) {
      // If date index doesn't exist, fetch without ordering and sort in memory
      if (process.env.NODE_ENV !== 'production') {
        console.log('Date index not available, fetching all and sorting in memory');
      }
      querySnapshot = await getDocs(blogsRef);
    }

    const blogs = querySnapshot.docs.map((doc) => {
      const data = doc.data();
      return {
        id: doc.id,
        created: data.created || null,
        date: data.date || '',
        description: data.description || '',
        faqs: data.faqs || [],
        image: data.image || '',
        metaDescription: data.metaDescription || '',
        metaTitle: data.metaTitle || '',
        slug: data.slug || '',
        subtitle: data.subtitle || '',
        title: data.title || '',
      };
    });

    // Sort by date descending on the server side (handles cases where date might be missing or Firestore index doesn't exist)
    blogs.sort((a, b) => {
      // Parse dates for comparison
      const dateA = a.date ? new Date(a.date).getTime() : (a.created || 0);
      const dateB = b.date ? new Date(b.date).getTime() : (b.created || 0);
      return dateB - dateA; // Descending order (newest first)
    });

    // Calculate pagination
    const totalBlogs = blogs.length;
    const totalPages = Math.ceil(totalBlogs / validLimit);
    const startIndex = (validPage - 1) * validLimit;
    const endIndex = startIndex + validLimit;
    const paginatedBlogs = blogs.slice(startIndex, endIndex);

    return NextResponse.json(
      {
        success: true,
        blogs: paginatedBlogs,
        pagination: {
          page: validPage,
          limit: validLimit,
          total: totalBlogs,
          totalPages: totalPages,
          hasNextPage: validPage < totalPages,
          hasPreviousPage: validPage > 1,
        },
      },
      { status: 200 }
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

