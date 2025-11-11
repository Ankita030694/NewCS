import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { canonicaliseSlug, generateSlugFromTitle } from '@/lib/slug';
import { getBlogBySlug, getRelatedBlogs } from '@/lib/blogs';
import { defaultBlogFaqs, type BlogFaq } from '@/data/blogDefaults';

type PageParams = {
  slug: string;
};

type PageProps = {
  params: PageParams | Promise<PageParams>;
};

export const revalidate = 300; // Revalidate every 5 minutes

const stripHtml = (value: string): string =>
  value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const isPromise = (value: PageProps['params']): value is Promise<PageParams> =>
  typeof value === 'object' &&
  value !== null &&
  'then' in value &&
  typeof (value as Promise<PageParams>).then === 'function';

const resolveParams = async (params: PageProps['params']): Promise<PageParams> =>
  (isPromise(params) ? await params : params);

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await resolveParams(params);
  const blog = await getBlogBySlug(slug);

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
  const { slug } = await resolveParams(params);
  const blog = await getBlogBySlug(slug);

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

  const faqItems: BlogFaq[] =
    blog.faqs && blog.faqs.length > 0 ? blog.faqs : defaultBlogFaqs;

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
        relatedBlogs={relatedBlogs.map(({ title, slug: relatedSlug, date, image }) => ({
          title,
          slug: relatedSlug,
          date,
          image,
        }))}
        canonicalSlug={canonicalSlug}
      />
    </>
  );
}

