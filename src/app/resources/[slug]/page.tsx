import { cache } from 'react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { collection, getDocs, type QueryDocumentSnapshot, type DocumentData } from 'firebase/firestore';
import BlogPostPageClient from './BlogPostPageClient';
import { db } from '@/lib/firebase';
import { canonicaliseSlug, ensureBlogSlug, generateSlugFromTitle } from '@/lib/slug';

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
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 300; // Revalidate every 5 minutes

const blogsRef = collection(db, 'blogs');

const stripHtml = (value: string): string =>
  value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const mapDocToBlog = (doc: QueryDocumentSnapshot<DocumentData>): BlogRecord => {
  const data = doc.data() ?? {};
  const rawTitle = typeof data.title === 'string' ? data.title : '';
  const slug = ensureBlogSlug(
    typeof data.slug === 'string' ? data.slug : '',
    rawTitle,
    doc.id
  );

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
    slug
  };
};

const fetchAllBlogs = cache(async (): Promise<BlogRecord[]> => {
  const snapshot = await getDocs(blogsRef);
  return snapshot.docs.map(mapDocToBlog);
});

const findBlogBySlug = cache(async (slugParam: string): Promise<BlogRecord | null> => {
  const targetSlug = canonicaliseSlug(slugParam);
  if (!targetSlug) {
    return null;
  }
  const blogs = await fetchAllBlogs();

  const exactMatch = blogs.find((blog) => canonicaliseSlug(blog.slug) === targetSlug);
  if (exactMatch) {
    return exactMatch;
  }

  const generatedMatch = blogs.find(
    (blog) => canonicaliseSlug(generateSlugFromTitle(blog.title)) === targetSlug
  );

  const idMatch = blogs.find((blog) => canonicaliseSlug(blog.id) === targetSlug);

  return generatedMatch ?? idMatch ?? null;
});

const getRelatedBlogs = async (slugParam: string, limit = 3): Promise<RelatedBlog[]> => {
  const currentSlug = canonicaliseSlug(slugParam);
  const blogs = await fetchAllBlogs();

  const filtered = blogs.filter((blog) => {
    const blogSlug = blog.slug
      ? canonicaliseSlug(blog.slug)
      : canonicaliseSlug(generateSlugFromTitle(blog.title));
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
  const { slug } = await params;
  const blog = await findBlogBySlug(slug);

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

  const canonicalSlug = canonicaliseSlug(blog.slug || generateSlugFromTitle(blog.title) || slug);
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
  const { slug } = await params;
  const blog = await findBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const canonicalSlug =
    canonicaliseSlug(blog.slug) ||
    canonicaliseSlug(generateSlugFromTitle(blog.title)) ||
    canonicaliseSlug(slug) ||
    canonicaliseSlug(blog.id) ||
    blog.id;
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

  const faqItems =
    blog.faqs && blog.faqs.length > 0
      ? blog.faqs
      : [
          {
            question:
              'What is a One-Time Settlement (OTS), and how does CredSettle help me achieve it?',
            answer:
              'A One-Time Settlement (OTS) is a negotiated agreement where you pay a reduced lump sum to settle your debt. CredSettle negotiates with lenders on your behalf to secure the best possible settlement terms while ensuring RBI compliance.'
          },
          {
            question: 'Is debt settlement legal? Does it adhere to RBI guidelines?',
            answer:
              'Yes, debt settlement is completely legal in India. CredSettle ensures all settlements are conducted in accordance with RBI guidelines and regulatory frameworks, protecting your rights throughout the process.'
          },
          {
            question: 'How does CredSettle stop harassment from recovery agents?',
            answer:
              'CredSettle provides legal intervention and communication services to stop harassment from recovery agents. We file formal complaints with RBI, NCH, and Cyber Police when necessary, and issue cease and desist notices to protect your rights.'
          }
        ];

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq`,
    name: `${blog.title} FAQs | CredSettle`,
    description:
      blog.metaDescription ||
      blog.subtitle ||
      'Frequently asked questions about CredSettle’s RBI-compliant debt settlement services.',
    mainEntity: faqItems.map((faq, index) => ({
      '@type': 'Question',
      '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq-question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <BlogPostPageClient
        blog={clientBlog}
        relatedBlogs={relatedBlogs}
        canonicalSlug={canonicalSlug}
      />
    </>
  );
}

