import { db } from '@/lib/firebase';
import {
  collection,
  getCountFromServer,
  getDocs,
  orderBy,
  query,
  limit as firestoreLimit,
} from 'firebase/firestore';
import type { Timestamp } from 'firebase/firestore';
import { unstable_cache } from 'next/cache';

export interface BlogDocument {
  id: string;
  created: number | null;
  date: string;
  description: string;
  faqs: unknown[];
  image: string;
  metaDescription: string;
  metaTitle: string;
  slug: string;
  subtitle: string;
  title: string;
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

async function fetchBlogsPage(page: number, limit: number): Promise<PaginatedBlogs> {
  const validPage = Math.max(1, page);
  const validLimit = Math.min(100, Math.max(1, limit));
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

  const blogs = querySnapshot.docs.map((doc) => {
    const data = doc.data();
    return {
      id: doc.id,
      created: parseCreatedField(data.created),
      date: data.date || '',
      description: data.description || '',
      faqs: data.faqs || [],
      image: data.image || '',
      metaDescription: data.metaDescription || '',
      metaTitle: data.metaTitle || '',
      slug: data.slug || '',
      subtitle: data.subtitle || '',
      title: data.title || '',
    } satisfies BlogDocument;
  });

  blogs.sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : (a.created || 0);
    const dateB = b.date ? new Date(b.date).getTime() : (b.created || 0);
    return dateB - dateA;
  });

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

export const getPaginatedBlogs = unstable_cache(
  async (page: number, limit: number) => fetchBlogsPage(page, limit),
  ['blogs-paginated'],
  {
    revalidate: 300,
    tags: ['blogs'],
  }
);


