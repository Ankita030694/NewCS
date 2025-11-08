import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { canonicaliseSlug, ensureBlogSlug } from '@/lib/slug';

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

    const targetSlug = canonicaliseSlug(slug);

    if (!targetSlug) {
      return NextResponse.json(
        {
          success: false,
          error: 'Blog not found'
        },
        { status: 404 }
      );
    }

    const blogsSnapshot = await getDocs(collection(db, 'blogs'));

    for (const doc of blogsSnapshot.docs) {
      const data = doc.data() ?? {};
      const title = typeof data.title === 'string' ? data.title : '';
      const slugFromDoc = ensureBlogSlug(data.slug, title, doc.id);
      const idSlug = canonicaliseSlug(doc.id);

      if (canonicaliseSlug(slugFromDoc) === targetSlug || idSlug === targetSlug) {
        const blog = {
          id: doc.id,
          created: data.created || null,
          date: data.date || '',
          description: data.description || '',
          faqs: Array.isArray(data.faqs) ? data.faqs : [],
          image: data.image || '',
          metaDescription: data.metaDescription || '',
          metaTitle: data.metaTitle || '',
          slug: slugFromDoc,
          subtitle: data.subtitle || '',
          title,
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

    return NextResponse.json(
      {
        success: false,
        error: 'Blog not found'
      },
      { status: 404 }
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

