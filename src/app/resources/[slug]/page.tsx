import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { canonicaliseSlug, generateSlugFromTitle } from '@/lib/slug';
import { getBlogBySlug, getRelatedBlogs, getBlogReviews, type Review } from '@/lib/blogs';
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

  const DEFAULT_META_TITLE = 'CredSettle Blog | Expert Debt Relief Insights';
  const effectiveTitle =
    blog.metaTitle && blog.metaTitle.trim() !== '' && blog.metaTitle !== DEFAULT_META_TITLE
      ? blog.metaTitle
      : blog.title;

  return {
    title: effectiveTitle,
    description: descriptionFallback,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: effectiveTitle,
      description: descriptionFallback,
      type: 'article',
      url: canonicalUrl,
      images: blog.image ? [{ url: blog.image }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: effectiveTitle,
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
  const reviews = await getBlogReviews(blog.id);

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

  const serviceSchema = reviews.length > 0 ? {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CredSettle',
    url: 'https://credsettle.com',
    image: 'https://credsettle.com/credsettle-logo.svg',
    address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN'
    },
    priceRange: 'Consultation Free',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length).toFixed(1),
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: review.date,
      reviewBody: review.comment,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      }
    }))
  } : null;

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://www.credsettle.com/resources'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: `https://www.credsettle.com/resources/${canonicalSlug}`
      }
    ]
  };

  const faqItems: BlogFaq[] =
    blog.faqs && blog.faqs.length > 0 ? blog.faqs : defaultBlogFaqs;

  const validFaqItems = faqItems.filter(
    (faq) =>
      typeof faq.question === 'string' &&
      faq.question.trim() !== '' &&
      typeof faq.answer === 'string' &&
      faq.answer.trim() !== ''
  );

  // Helper to safely serialize JSON-LD, escaping characters that can break script tags
  const safeJsonLdReplacer = (_key: string, value: any) => {
    if (typeof value === 'string') {
      return value
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026');
    }
    return value;
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq`,
    name: `${blog.title} FAQs | CredSettle`,
    description:
      blog.metaDescription ||
      blog.subtitle ||
      'Frequently asked questions about CredSettle’s RBI-compliant debt settlement services.',
    mainEntity: validFaqItems.map((faq, index) => ({
      '@type': 'Question',
      '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq-question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: [{
        '@type': 'Answer',
        '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq-answer-${index + 1}`,
        text: faq.answer
      }]
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {serviceSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      )}
      {validFaqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData, safeJsonLdReplacer)
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <BlogPostPageClient
        blog={clientBlog}
        reviews={reviews}
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

