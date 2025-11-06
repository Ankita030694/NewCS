import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json(
        { error: 'Slug parameter is required' },
        { status: 400 }
      );
    }

    // Decode the slug from URL
    const decodedSlug = decodeURIComponent(slug);

    // Helper function to generate slug from title (must match client-side generation)
    const generateSlugFromTitle = (title: string): string => {
      return title
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
        .replace(/\s+/g, '-') // Replace spaces with hyphens
        .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
        .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
    };

    // Get blog by slug from Firestore
    const blogsRef = collection(db, 'blogs');
    let q = query(blogsRef, where('slug', '==', decodedSlug));
    let querySnapshot = await getDocs(q);

    // If not found by slug, try to find by matching generated slug from title
    if (querySnapshot.empty) {
      // Fetch all blogs to find by generated slug
      const allBlogsSnapshot = await getDocs(blogsRef);
      
      // Find blog where generated slug from title matches
      for (const doc of allBlogsSnapshot.docs) {
        const data = doc.data();
        const title = data.title || '';
        const generatedSlug = generateSlugFromTitle(title);
        const existingSlug = data.slug || '';
        
        // Match if generated slug matches OR existing slug matches
        if (generatedSlug === decodedSlug || existingSlug === decodedSlug) {
          const blog = {
            id: doc.id,
            created: data.created || null,
            date: data.date || '',
            description: data.description || '',
            faqs: data.faqs || [],
            image: data.image || '',
            metaDescription: data.metaDescription || '',
            metaTitle: data.metaTitle || '',
            slug: existingSlug || generatedSlug,
            subtitle: data.subtitle || '',
            title: data.title || '',
          };

          return NextResponse.json(
            {
              success: true,
              blog,
            },
            { status: 200 }
          );
        }
      }
      
      // Still not found
      return NextResponse.json(
        { 
          success: false,
          error: 'Blog not found'
        },
        { status: 404 }
      );
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data();

    const blog = {
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

    return NextResponse.json(
      {
        success: true,
        blog,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error('Error fetching blog:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blog',
        message: error.message || 'Unknown error occurred',
      },
      { status: 500 }
    );
  }
}

