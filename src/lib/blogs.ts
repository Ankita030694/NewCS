import { db } from '@/lib/firebase';
import {
  collection,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  limit as firestoreLimit,
  type DocumentData,
  type QueryDocumentSnapshot,
} from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { addDoc, serverTimestamp } from 'firebase/firestore';
import { unstable_cache } from 'next/cache';
import { canonicaliseSlug, ensureBlogSlug, generateSlugFromTitle } from '@/lib/slug';
import type { BlogFaq } from '@/data/blogDefaults';

export interface BlogDocument {
  id: string;
  created: number | null;
  date: string;
  description: string;
  faqs: BlogFaq[];
  image: string;
  infographic?: string;
  metaDescription: string;
  metaTitle: string;
  slug: string;
  subtitle: string;
  title: string;
  keyTakeaways?: string[];
  popularSearches?: string[];
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface RelatedBlogSummary {
  id: string;
  title: string;
  slug: string;
  date: string;
  image: string;
}

export interface PaginatedBlogs {
  blogs: BlogDocument[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

function parseCreatedField(created: unknown): number | null {
  if (!created) {
    return null;
  }

  if (typeof created === 'number') {
    return created;
  }

  if (typeof created === 'object' && created !== null) {
    const maybeTimestamp = created as Timestamp;
    if (typeof maybeTimestamp.toMillis === 'function') {
      return maybeTimestamp.toMillis();
    }
  }

  return null;
}

function mapDocToBlogDocument(
  doc: QueryDocumentSnapshot<DocumentData>
): BlogDocument {
  const data = doc.data() ?? {};
  const rawTitle = typeof data.title === 'string' ? data.title : '';
  let slug = ensureBlogSlug(
    typeof data.slug === 'string' ? data.slug : '',
    rawTitle,
    doc.id
  );

  const reverseMapping: Record<string, string> = {
    'best-ways-to-settle-your-loan-in-india-without-hurting-your-credit-score': 'settle-loan-india-without-hurting-credit-score',
    'how-to-settle-your-loans-with-major-banks-like-icici-hdfc-axis-sbi': 'settle-loans-major-banks-icici-hdfc-axis-sbi',
    'loan-settlement-in-india-how-to-settle-loans-smartly-with-the-right-loan-settlement-company': 'loan-settlement-company-india'
  };

  const canonicalSlug = canonicaliseSlug(slug);
  if (reverseMapping[canonicalSlug]) {
    slug = reverseMapping[canonicalSlug];
  }

  return {
    id: doc.id,
    created: parseCreatedField(data.created),
    date: typeof data.date === 'string' ? data.date : '',
    description: typeof data.description === 'string' ? data.description : '',
    faqs: Array.isArray(data.faqs) ? (data.faqs as BlogFaq[]) : [],
    image:
      typeof data.image === 'string' && data.image.trim() !== ''
        ? data.image
        : '/sample.png',
    infographic: typeof data.infographic === 'string' ? data.infographic : undefined,
    metaDescription: typeof data.metaDescription === 'string' ? data.metaDescription : '',
    metaTitle: typeof data.metaTitle === 'string' ? data.metaTitle : '',
    slug,
    subtitle: typeof data.subtitle === 'string' ? data.subtitle : '',
    title: rawTitle,
    keyTakeaways: Array.isArray(data.keyTakeaways) ? (data.keyTakeaways as string[]) : [],
    popularSearches: Array.isArray(data.popularSearches) ? (data.popularSearches as string[]) : [],
  };
}

function sortBlogsByDateDesc(blogs: BlogDocument[]): BlogDocument[] {
  return [...blogs].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : (a.created || 0);
    const dateB = b.date ? new Date(b.date).getTime() : (b.created || 0);
    return dateB - dateA;
  });
}

async function fetchBlogsPage(page: number, limit: number, searchQuery?: string): Promise<PaginatedBlogs> {
  const validPage = Math.max(1, page);
  const validLimit = Math.min(100, Math.max(1, limit));

  if (searchQuery) {
    const allBlogs = await getAllBlogs();
    const queryLower = searchQuery.toLowerCase();

    const filteredBlogs = allBlogs.filter((blog) =>
      blog.title.toLowerCase().includes(queryLower) ||
      blog.subtitle.toLowerCase().includes(queryLower) ||
      blog.description.toLowerCase().includes(queryLower)
    );

    const totalBlogsSearch = filteredBlogs.length;
    const startIndexSearch = (validPage - 1) * validLimit;
    const endIndexSearch = startIndexSearch + validLimit;
    const paginatedBlogsSearch = filteredBlogs.slice(startIndexSearch, endIndexSearch);
    const totalPagesSearch = Math.ceil(totalBlogsSearch / validLimit);

    return {
      blogs: paginatedBlogsSearch,
      pagination: {
        page: validPage,
        limit: validLimit,
        total: totalBlogsSearch,
        totalPages: totalPagesSearch,
        hasNextPage: validPage < totalPagesSearch,
        hasPreviousPage: validPage > 1,
      },
    };
  }

  const blogsRef = collection(db, 'blogs');
  const effectiveLimit = validLimit * validPage;

  let querySnapshot;
  try {
    const orderedQuery = query(
      blogsRef,
      orderBy('date', 'desc'),
      firestoreLimit(effectiveLimit)
    );
    querySnapshot = await getDocs(orderedQuery);
  } catch (indexError) {
    const fallbackQuery = query(blogsRef, firestoreLimit(effectiveLimit));
    querySnapshot = await getDocs(fallbackQuery);
  }

  const totalSnapshot = await getCountFromServer(blogsRef);
  const totalBlogs = totalSnapshot.data().count;

  const blogs = sortBlogsByDateDesc(querySnapshot.docs.map(mapDocToBlogDocument));

  const startIndex = (validPage - 1) * validLimit;
  const endIndex = startIndex + validLimit;
  const paginatedBlogs = blogs.slice(startIndex, endIndex);

  const totalPages = Math.ceil(totalBlogs / validLimit);

  return {
    blogs: paginatedBlogs,
    pagination: {
      page: validPage,
      limit: validLimit,
      total: totalBlogs,
      totalPages,
      hasNextPage: validPage < totalPages,
      hasPreviousPage: validPage > 1,
    },
  };
}

export const getPaginatedBlogs = (page: number, limit: number, searchQuery?: string) => 
  unstable_cache(
    async () => fetchBlogsPage(page, limit, searchQuery),
    ['blogs-paginated', page.toString(), limit.toString(), searchQuery || 'none'],
    {
      revalidate: 300,
      tags: ['blogs'],
    }
  )();

async function fetchAllBlogs(): Promise<BlogDocument[]> {
  const blogsRef = collection(db, 'blogs');
  const snapshot = await getDocs(blogsRef);
  const blogs = snapshot.docs.map(mapDocToBlogDocument);
  return sortBlogsByDateDesc(blogs);
}

export const getAllBlogs = unstable_cache(
  async () => fetchAllBlogs(),
  ['blogs-all'],
  {
    revalidate: 300,
    tags: ['blogs'],
  }
);

export async function getBlogBySlug(slug: string): Promise<BlogDocument | null> {
  if (!slug) return null;

  const slugMapping: Record<string, string> = {
    'settle-loan-india-without-hurting-credit-score': 'best-ways-to-settle-your-loan-in-india-without-hurting-your-credit-score',
    'settle-loans-major-banks-icici-hdfc-axis-sbi': 'how-to-settle-your-loans-with-major-banks-like-icici-hdfc-axis-sbi',
    'loan-settlement-company-india': 'loan-settlement-in-india-how-to-settle-loans-smartly-with-the-right-loan-settlement-company'
  };

  const lookupSlug = slugMapping[slug] || slug;

  const canonical = canonicaliseSlug(lookupSlug);
  if (!canonical) {
    return null;
  }

  // Try to get blogs from cache
  const blogs = await getAllBlogs();
  
  const findBlog = (list: BlogDocument[]) => {
    return (
      list.find((blog) => canonicaliseSlug(blog.slug) === canonical) ??
      list.find((blog) => canonicaliseSlug(generateSlugFromTitle(blog.title)) === canonical) ??
      list.find((blog) => canonicaliseSlug(blog.id) === canonical)
    );
  };

  let blog = findBlog(blogs);

  // Fallback: If not found in cache, query Firestore directly for instant real-time access
  if (!blog) {
    try {
      const { collection: getCol, getDocs: fetchDocs, query: buildQ, where: whereFilter, limit: limitDocs, doc: getDocRef, getDoc: fetchSingleDoc } = await import('firebase/firestore');
      
      // 1. Try querying by slug directly
      const q = buildQ(getCol(db, 'blogs'), whereFilter('slug', '==', slug), limitDocs(1));
      const querySnap = await fetchDocs(q);
      if (!querySnap.empty) {
        blog = mapDocToBlogDocument(querySnap.docs[0]);
      } else {
        // 2. Try querying by canonical slug
        const qCanonical = buildQ(getCol(db, 'blogs'), whereFilter('slug', '==', canonical), limitDocs(1));
        const canonicalSnap = await fetchDocs(qCanonical);
        if (!canonicalSnap.empty) {
          blog = mapDocToBlogDocument(canonicalSnap.docs[0]);
        } else {
          // 3. Try direct ID fetch
          const docRef = getDocRef(db, 'blogs', slug);
          const docSnap = await fetchSingleDoc(docRef);
          if (docSnap.exists()) {
            blog = mapDocToBlogDocument(docSnap as any);
          }
        }
      }
    } catch (e) {
      console.error('Direct fetch fallback failed:', e);
    }
  }

  return blog || null;
}

export async function getRelatedBlogs(
  slug: string,
  limit = 3
): Promise<RelatedBlogSummary[]> {
  const canonical = canonicaliseSlug(slug);
  const blogs = await getAllBlogs();

  const filtered = blogs.filter((blog) => {
    if (!canonical) {
      return true;
    }
    const candidate =
      canonicaliseSlug(blog.slug) ||
      canonicaliseSlug(generateSlugFromTitle(blog.title)) ||
      canonicaliseSlug(blog.id);
    return candidate !== canonical;
  });

  return filtered.slice(0, limit).map((blog) => ({
    id: blog.id,
    title: blog.title,
    slug: blog.slug || generateSlugFromTitle(blog.title),
    date: blog.date,
    image:
      typeof blog.image === 'string' && blog.image.trim() !== ''
        ? blog.image
        : '/sample.png',
  }));
}

export async function getBlogReviews(blogId: string): Promise<Review[]> {
  const reviewsRef = collection(db, 'blogs', blogId, 'reviews');
  const q = query(reviewsRef, orderBy('date', 'desc'));
  const snapshot = await getDocs(q);

  return snapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      author: data.author || 'Anonymous',
      rating: data.rating || 5,
      comment: data.comment || '',
      date: data.date ? (data.date.toDate ? data.date.toDate().toISOString() : new Date(data.date).toISOString()) : new Date().toISOString()
    };
  });
}

export async function addBlogReview(blogId: string, review: { author: string; rating: number; comment: string }) {
  const reviewsRef = collection(db, 'blogs', blogId, 'reviews');
  await addDoc(reviewsRef, {
    ...review,
    date: serverTimestamp()
  });
}


