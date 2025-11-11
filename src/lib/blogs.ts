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
  metaDescription: string;
  metaTitle: string;
  slug: string;
  subtitle: string;
  title: string;
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
  const slug = ensureBlogSlug(
    typeof data.slug === 'string' ? data.slug : '',
    rawTitle,
    doc.id
  );

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
    metaDescription: typeof data.metaDescription === 'string' ? data.metaDescription : '',
    metaTitle: typeof data.metaTitle === 'string' ? data.metaTitle : '',
    slug,
    subtitle: typeof data.subtitle === 'string' ? data.subtitle : '',
    title: rawTitle,
  };
}

function sortBlogsByDateDesc(blogs: BlogDocument[]): BlogDocument[] {
  return [...blogs].sort((a, b) => {
    const dateA = a.date ? new Date(a.date).getTime() : (a.created || 0);
    const dateB = b.date ? new Date(b.date).getTime() : (b.created || 0);
    return dateB - dateA;
  });
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

export const getPaginatedBlogs = unstable_cache(
  async (page: number, limit: number) => fetchBlogsPage(page, limit),
  ['blogs-paginated'],
  {
    revalidate: 300,
    tags: ['blogs'],
  }
);

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
  const canonical = canonicaliseSlug(slug);
  if (!canonical) {
    return null;
  }

  const blogs = await getAllBlogs();

  return (
    blogs.find((blog) => canonicaliseSlug(blog.slug) === canonical) ??
    blogs.find(
      (blog) => canonicaliseSlug(generateSlugFromTitle(blog.title)) === canonical
    ) ??
    blogs.find((blog) => canonicaliseSlug(blog.id) === canonical) ??
    null
  );
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


