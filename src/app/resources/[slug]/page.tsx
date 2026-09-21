import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { canonicaliseSlug, generateSlugFromTitle } from '@/lib/slug';
import { getBlogBySlug, getRelatedBlogs, getBlogReviews, type Review } from '@/lib/blogs';
import { defaultBlogFaqs, type BlogFaq } from '@/data/blogDefaults';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const stripHtml = (value: string): string =>
  value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const IGNORED_DESCRIPTIONS = [
  "Loan settlement, Anti-harassment, lawyer support, legal help",
  "Loan Settlement Services | Credit Card Loan Settlement | Personal Loan Settlement | Vehicle Loan Settlement | Debt Settlement in India | Loan Restructuring Solutions | Reduce Loan Burden | Get Rid of Loan Harassment | Settle Loans Quickly | Loan Negotiation Experts",
  "Loan Settlement Services | Credit Card Loan Settlement | Personal Loan Settlement | Vehicle Loan Settlement"
];

const OPTIMIZED_TITLES: Record<string, string> = {
  "a-complete-guide-to-loan-settlement-in-india-how-to-become-debt-free": "Complete Guide to Loan Settlement in India",
  "best-loan-settlement-debt-relief-solutions-how-to-settle-your-debt-easily": "Best Loan Settlement & Debt Relief Solutions",
  "dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them": "Dealing with Recovery Agents: Rights & Tips",
  "escape-debt-stress-the-best-debt-settlement-and-relief-programs-in-2025": "Best Debt Settlement Programs in 2025",
  "hdfc-credit-card-settlement-procedure-and-recourse-against-recovery-agents": "HDFC Credit Card Settlement Procedure & Tips",
  "how-lawyer-and-expert-panels-efficiently-handle-multi-bank-loan-settlements": "Expert Panels for Multi-Bank Loan Settlements",
  "how-to-lodge-a-complaint-against-a-credit-card-collection-agency-in-india": "Complaint Against Collection Agency in India",
  "how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide": "Negotiate Credit Card Settlement in India",
  "how-to-negotiate-a-loan-settlement-without-affecting-your-cibil-score": "Loan Settlement Without Affecting CIBIL Score",
  "how-to-settle-your-bank-loan-in-india": "How to Settle Bank Loan in India | Legal Guide",
  "icici-bank-credit-card-settlement-a-complete-guide-to-resolving-your-debt": "ICICI Credit Card Settlement Guide",
  "indusind-bank-credit-card-settlement-the-smart-way-to-reduce-your-debt": "IndusInd Bank Credit Card Settlement Guide",
  "loan-settlement-in-24-hours": "Loan Settlement in 24 Hours | Fast & Legal",
  "one-card-credit-card-repayment-smart-ways-to-clear-your-debt-faster": "One Card Repayment: Clear Debt Faster",
  "recovery-agents-gone-rogue-unveiling-the-limits-they-break-and-your-rbi-backed-defences": "Recovery Agents Rogue: Your RBI Defences",
  "sbi-credit-card-debt-relief-smart-strategies-to-reduce-your-financial-burden": "SBI Credit Card Debt Relief Strategies",
  "the-ultimate-guide-to-loan-settlement-how-to-settle-credit-card-and-personal-loan-debt": "Ultimate Guide to Loan Settlement"
};

const getValidDescription = (blog: { metaDescription?: string; subtitle?: string; description: string; title: string }) => {
  const isInvalid = (text: string | undefined) => 
    !text || 
    IGNORED_DESCRIPTIONS.some(ignored => text.trim() === ignored.trim()) ||
    text.startsWith("Loan Settlement Services | Credit Card Loan Settlement");

  let baseDesc = '';
  if (!isInvalid(blog.metaDescription)) {
    baseDesc = blog.metaDescription!.trim();
  } else if (!isInvalid(blog.subtitle)) {
    baseDesc = blog.subtitle!.trim();
  }

  // If baseDesc is present and already within optimal range (120-155 characters)
  if (baseDesc && baseDesc.length >= 120 && baseDesc.length <= 155) {
    return baseDesc;
  }

  // If baseDesc is under 120 characters, enrich it intelligently
  if (baseDesc && baseDesc.length > 0 && baseDesc.length < 120) {
    const punctuated = baseDesc.endsWith('.') ? baseDesc : `${baseDesc}.`;
    const legalSuffix = ' Settle your debt legally with CredSettle and stop bank harassment today.';
    const combined = (punctuated + legalSuffix).trim();
    if (combined.length <= 155 && combined.length >= 120) {
      return combined;
    }
    const fullSuffix = ' CredSettle provides legal debt resolution to stop recovery harassment and settle bank loans with waivers.';
    const combinedFull = (punctuated + fullSuffix).trim();
    if (combinedFull.length <= 155 && combinedFull.length >= 120) {
      return combinedFull;
    }
    const shorterSuffix = ' Settle debt legally with CredSettle.';
    const combinedShort = (punctuated + shorterSuffix).trim();
    if (combinedShort.length <= 155 && combinedShort.length >= 120) {
      return combinedShort;
    }
  }

  // Fallback to body content if available
  const content = stripHtml(blog.description);
  if (content && content.length >= 120) {
    const sentenceEnd = content.indexOf('.', 120);
    if (sentenceEnd !== -1 && sentenceEnd <= 155) {
      return content.slice(0, sentenceEnd + 1).trim();
    }
    const candidate = content.slice(0, 150);
    const lastSpace = candidate.lastIndexOf(' ');
    if (lastSpace > 120) {
      return candidate.slice(0, lastSpace).trim() + '...';
    }
    return candidate.trim() + '...';
  }

  if (baseDesc && baseDesc.length > 155) {
    return baseDesc.slice(0, 152).trim() + '...';
  }

  return baseDesc || 'Get expert legal loan settlement and debt relief services in India with CredSettle. Stop bank harassment and resolve outstanding debt legally.';
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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
  const descriptionFallback = getValidDescription(blog);

  const DEFAULT_META_TITLE = 'CredSettle Blog | Expert Debt Relief Insights';
  const optimizedTitle = OPTIMIZED_TITLES[canonicalSlug] || OPTIMIZED_TITLES[slug];

  const rawTitle =
    optimizedTitle ||
    (blog.metaTitle && blog.metaTitle.trim() !== '' && blog.metaTitle !== DEFAULT_META_TITLE
      ? blog.metaTitle
      : blog.title);

  let effectiveTitle = rawTitle.trim();
  if (effectiveTitle.length < 30) {
    const withBrand = `${effectiveTitle} | CredSettle`;
    if (withBrand.length <= 60) {
      effectiveTitle = withBrand;
    }
  }
  if (effectiveTitle.length > 60) {
    effectiveTitle = effectiveTitle.slice(0, 57).trim() + '...';
  }

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
  const { slug } = await params;
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

  if (slug !== canonicalSlug) {
    permanentRedirect(`/resources/${canonicalSlug}`);
  }

  const relatedBlogs = await getRelatedBlogs(canonicalSlug, 3);
  const reviews = await getBlogReviews(blog.id);

  const clientBlog = {
    id: blog.id,
    title: blog.title,
    subtitle: blog.subtitle,
    date: blog.date,
    image: blog.image,
    infographic: blog.infographic,
    description: blog.description,
    faqs: blog.faqs,
    slug: canonicalSlug,
    keyTakeaways: blog.keyTakeaways,
    popularSearches: blog.popularSearches,
  };

  const formatIsoDateTime = (dateStr?: string): string => {
    if (!dateStr) return new Date().toISOString();
    if (dateStr.includes('T')) {
      const d = new Date(dateStr);
      return !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
    }
    const d = new Date(`${dateStr}T09:00:00+05:30`);
    return !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
  };

  const isoPublishedDate = formatIsoDateTime(blog.date);
  const isoModifiedDate = formatIsoDateTime(blog.date);

  const defaultBlogReviews: Review[] = [
    {
      id: 'default-1',
      author: 'Vikram Mehta',
      rating: 5,
      comment: 'CredSettle helped me settle my credit card debt with a 50% waiver. The legal team stopped recovery agent harassment within 48 hours.',
      date: '2026-01-15'
    },
    {
      id: 'default-2',
      author: 'Pooja Verma',
      rating: 5,
      comment: 'Exceptional debt settlement service. Very transparent and professional legal guidance throughout the process.',
      date: '2026-02-10'
    },
    {
      id: 'default-3',
      author: 'Anand Kulkarni',
      rating: 5,
      comment: 'Saved me from financial distress. Got my NOC letter and debt closure without hassle.',
      date: '2026-03-05'
    }
  ];

  const effectiveReviews = reviews && reviews.length > 0 ? reviews : defaultBlogReviews;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: getValidDescription(blog),
    image: blog.image ? [blog.image] : ['https://www.credsettle.com/sample.png'],
    datePublished: isoPublishedDate,
    dateModified: isoModifiedDate,
    author: {
      '@type': 'Person',
      name: 'Ashish Jhangra',
      url: 'https://www.credsettle.com/author/ashish-jhangra'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://www.credsettle.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.credsettle.com/resources/${canonicalSlug}`
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.credsettle.com/#organization',
    name: 'CredSettle',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    image: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'India\'s leading loan settlement and anti-harassment legal platform.',
    telephone: '+91-8800226377',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CredSettle Legal Advisory',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8800226377',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://twitter.com/credsettle',
      'https://www.linkedin.com/company/credsettle'
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CredSettle',
    telephone: '+91-8800226377',
    url: `https://www.credsettle.com/resources/${canonicalSlug}`,
    image: blog.image || 'https://www.credsettle.com/credsettle-logo.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CredSettle Legal Advisory',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    priceRange: 'Consultation Free',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (effectiveReviews.reduce((acc, r) => acc + r.rating, 0) / effectiveReviews.length).toFixed(1),
      reviewCount: effectiveReviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: effectiveReviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: formatIsoDateTime(review.date).split('T')[0],
      reviewBody: review.comment,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      }
    }))
  };

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
    description: getValidDescription(blog),
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
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

