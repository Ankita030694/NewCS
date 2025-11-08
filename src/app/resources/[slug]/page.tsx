import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collection, getDocs, type QueryDocumentSnapshot, type DocumentData } from 'firebase/firestore';
import BlogPostPageClient from './BlogPostPageClient';
import { db } from '@/lib/firebase';

type FAQ = {
  question: string;
  answer: string;
};

type BlogRecord = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  faqs: FAQ[];
  metaTitle: string;
  metaDescription: string;
  slug: string;
};

type RelatedBlog = {
  image: string;
  title: string;
  date: string;
  slug: string;
};

type PageProps = {
  params: {
    slug: string;
  };
};

export const revalidate = 300; // Revalidate every 5 minutes

const blogsRef = collection(db, 'blogs');

const generateSlugFromTitle = (title: string): string =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

const normaliseSlug = (value: string): string => value.trim().toLowerCase();

const stripHtml = (value: string): string =>
  value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const mapDocToBlog = (doc: QueryDocumentSnapshot<DocumentData>): BlogRecord => {
  const data = doc.data() ?? {};
  const rawTitle = typeof data.title === 'string' ? data.title : '';
  const fallbackSlug = generateSlugFromTitle(rawTitle || doc.id);
  const rawSlug = typeof data.slug === 'string' && data.slug.trim() !== '' ? data.slug : fallbackSlug;

  return {
    id: doc.id,
    title: rawTitle,
    subtitle: typeof data.subtitle === 'string' ? data.subtitle : '',
    date: typeof data.date === 'string' ? data.date : '',
    image: typeof data.image === 'string' && data.image.trim() !== '' ? data.image : '/sample.png',
    description: typeof data.description === 'string' ? data.description : '',
    faqs: Array.isArray(data.faqs) ? (data.faqs as FAQ[]) : [],
    metaTitle: typeof data.metaTitle === 'string' ? data.metaTitle : '',
    metaDescription: typeof data.metaDescription === 'string' ? data.metaDescription : '',
    slug: rawSlug.trim()
  };
};

const fetchAllBlogs = cache(async (): Promise<BlogRecord[]> => {
  const snapshot = await getDocs(blogsRef);
  return snapshot.docs.map(mapDocToBlog);
});

const findBlogBySlug = cache(async (slugParam: string): Promise<BlogRecord | null> => {
  const cleanSlug = normaliseSlug(decodeURIComponent(slugParam));
  const blogs = await fetchAllBlogs();

  const exactMatch = blogs.find((blog) => normaliseSlug(blog.slug) === cleanSlug);
  if (exactMatch) {
    return exactMatch;
  }

  const generatedMatch = blogs.find(
    (blog) => normaliseSlug(generateSlugFromTitle(blog.title)) === cleanSlug
  );

  return generatedMatch ?? null;
});

const getRelatedBlogs = async (slugParam: string, limit = 3): Promise<RelatedBlog[]> => {
  const currentSlug = normaliseSlug(slugParam);
  const blogs = await fetchAllBlogs();

  const filtered = blogs.filter((blog) => {
    const blogSlug = blog.slug ? normaliseSlug(blog.slug) : normaliseSlug(generateSlugFromTitle(blog.title));
    return blogSlug !== currentSlug;
  });

  const shuffled = [...filtered].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, limit).map((blog) => {
    const slug = blog.slug || generateSlugFromTitle(blog.title);
    return {
      image: blog.image || '/sample.png',
      title: blog.title,
      date: blog.date,
      slug
    };
  });
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const blog = await findBlogBySlug(params.slug);

  if (!blog) {
    return {
      title: 'Resource Not Found | CredSettle',
      description: 'The requested resource could not be found.',
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const canonicalSlug = blog.slug || generateSlugFromTitle(blog.title) || params.slug;
  const canonicalUrl = `https://www.credsettle.com/resources/${canonicalSlug}`;
  const descriptionFallback =
    blog.metaDescription || blog.subtitle || stripHtml(blog.description).slice(0, 160);

  return {
    title: blog.metaTitle || blog.title,
    description: descriptionFallback,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: descriptionFallback,
      type: 'article',
      url: canonicalUrl,
      images: blog.image ? [{ url: blog.image }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: blog.metaTitle || blog.title,
      description: descriptionFallback,
      images: blog.image ? [blog.image] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const blog = await findBlogBySlug(params.slug);

  if (!blog) {
    notFound();
  }

  const canonicalSlug = blog.slug || generateSlugFromTitle(blog.title) || params.slug;
  const relatedBlogs = await getRelatedBlogs(canonicalSlug, 3);

  const clientBlog = {
    id: blog.id,
    title: blog.title,
    subtitle: blog.subtitle,
    date: blog.date,
    image: blog.image,
    description: blog.description,
    faqs: blog.faqs,
    slug: canonicalSlug
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description:
      blog.metaDescription || blog.subtitle || stripHtml(blog.description).slice(0, 160),
    image: blog.image ? [blog.image] : undefined,
    datePublished: blog.date || undefined,
    author: {
      '@type': 'Organization',
      name: 'CredSettle'
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.credsettle.com/resources/${canonicalSlug}`
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <BlogPostPageClient
        blog={clientBlog}
        relatedBlogs={relatedBlogs}
        canonicalSlug={canonicalSlug}
      />
    </>
  );
}

