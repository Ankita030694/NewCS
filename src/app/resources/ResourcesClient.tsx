'use client';

import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Script from 'next/script';
import Image from 'next/image';
import type { SyntheticEvent } from 'react';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { canonicaliseSlug, ensureBlogSlug } from '@/lib/slug';
import type { BlogDocument, PaginatedBlogs } from '@/lib/blogs';
import { resourcesFaqItems } from '@/data/faq';

const PAGE_SIZE = 9;
const PLACEHOLDER_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2NzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjcwIiBmaWxsPSIjZWZmN2ZmIi8+PC9zdmc+';
const SESSION_STORAGE_NAMESPACE = 'credsettle:resources';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  image: string;
  subtitle?: string;
  created: number | null;
}

interface ResourcesClientProps {
  initialBlogs: BlogDocument[];
  initialPagination: PaginatedBlogs['pagination'];
}

function normaliseBlog(blog: BlogDocument): BlogPost {
  const slug = ensureBlogSlug(
    blog.slug,
    blog.title,
    blog.id || `blog-${Date.now()}`
  );

  return {
    id: blog.id,
    title: blog.title || '',
    date: blog.date || '',
    slug,
    image: blog.image || '/sample.png',
    subtitle: blog.subtitle || '',
    created: blog.created,
  };
}

function storePageInSession(page: number, data: { blogs: BlogPost[]; pagination: PaginatedBlogs['pagination'] }) {
  if (typeof window === 'undefined') {
    return;
  }

  try {
    const key = `${SESSION_STORAGE_NAMESPACE}:page:${page}`;
    window.sessionStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to persist resources page cache', error);
    }
  }
}

function readPageFromSession(page: number): { blogs: BlogPost[]; pagination: PaginatedBlogs['pagination'] } | null {
  if (typeof window === 'undefined') {
    return null;
  }

  try {
    const key = `${SESSION_STORAGE_NAMESPACE}:page:${page}`;
    const rawValue = window.sessionStorage.getItem(key);
    if (!rawValue) {
      return null;
    }
    return JSON.parse(rawValue);
  } catch (error) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('Failed to read resources page cache', error);
    }
    return null;
  }
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  '@id': 'https://credsettle.in/resources#faq',
  name: "CredSettle Resources FAQs",
  description:
    "Answers to common questions about CredSettle's RBI-compliant debt settlement services and resource library.",
  mainEntity: resourcesFaqItems.map((faq, index) => ({
    '@type': 'Question',
    '@id': `https://credsettle.in/resources#faq-question-${index + 1}`,
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ResourcesClient({
  initialBlogs,
  initialPagination,
}: ResourcesClientProps) {
  const formattedInitialBlogs = useMemo(
    () => initialBlogs.map(normaliseBlog),
    [initialBlogs]
  );

  const [isFirefox, setIsFirefox] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(formattedInitialBlogs);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(initialPagination.page);
  const [pagination, setPagination] = useState(initialPagination);
  const blogSectionRef = useRef<HTMLElement>(null);
  const prefetchedPagesRef = useRef<Map<number, BlogPost[]>>(new Map());
  const abortControllerRef = useRef<AbortController | null>(null);

  const prefetchPage = useCallback(async (pageToPrefetch: number) => {
    if (prefetchedPagesRef.current.has(pageToPrefetch) || pageToPrefetch <= 0) {
      return;
    }

    try {
      const response = await fetch(
        `/api/blogs?page=${pageToPrefetch}&limit=${PAGE_SIZE}`,
        { cache: 'force-cache' }
      );
      if (!response.ok) {
        return;
      }

      const data = await response.json();
      if (data.success && Array.isArray(data.blogs)) {
        const normalisedBlogs = data.blogs.map(normaliseBlog);
        prefetchedPagesRef.current.set(pageToPrefetch, normalisedBlogs);
        storePageInSession(pageToPrefetch, {
          blogs: normalisedBlogs,
          pagination: data.pagination,
        });
      }
    } catch (prefetchError) {
      if (process.env.NODE_ENV !== 'production') {
        console.info('Prefetch blogs warning:', prefetchError);
      }
    }
  }, []);

  useEffect(() => {
    prefetchedPagesRef.current.set(initialPagination.page, formattedInitialBlogs);
    storePageInSession(initialPagination.page, {
      blogs: formattedInitialBlogs,
      pagination: initialPagination,
    });
  }, [formattedInitialBlogs, initialPagination]);

  useEffect(() => {
    const sessionCache = readPageFromSession(initialPagination.page);
    if (sessionCache && sessionCache.blogs.length > 0) {
      prefetchedPagesRef.current.set(initialPagination.page, sessionCache.blogs);
    }
  }, [initialPagination.page]);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));

    return () => {
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
    };
  }, []);

  useEffect(() => {
    if (currentPage === initialPagination.page) {
      setLoading(false);
      return;
    }

    const cachedBlogs = prefetchedPagesRef.current.get(currentPage);
    if (cachedBlogs) {
      setBlogPosts(cachedBlogs);
      setPagination((prev) => ({
        ...prev,
        page: currentPage,
      }));
      setLoading(false);
      return;
    }

    const cachedSession = readPageFromSession(currentPage);
    if (cachedSession) {
      prefetchedPagesRef.current.set(currentPage, cachedSession.blogs);
      setBlogPosts(cachedSession.blogs);
      setPagination(cachedSession.pagination);
      setLoading(false);
      return;
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;
    setLoading(true);
    setError(null);

    const fetchBlogs = async () => {
      try {
        const response = await fetch(
          `/api/blogs?page=${currentPage}&limit=${PAGE_SIZE}`,
          {
            cache: 'force-cache',
            signal: controller.signal,
          }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch blogs (status ${response.status})`);
        }

        const data = await response.json();
        if (data.success && Array.isArray(data.blogs)) {
          const normalisedBlogs = data.blogs.map(normaliseBlog);
          prefetchedPagesRef.current.set(currentPage, normalisedBlogs);
          storePageInSession(currentPage, {
            blogs: normalisedBlogs,
            pagination: data.pagination,
          });

          setBlogPosts(normalisedBlogs);
          setPagination(data.pagination);

          if (data.pagination?.hasNextPage) {
            void prefetchPage(data.pagination.page + 1);
          }
        } else {
          throw new Error('Unexpected response shape while fetching blogs');
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          return;
        }
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();

    return () => {
      controller.abort();
    };
  }, [currentPage, initialPagination.page]);

  useEffect(() => {
    if (!pagination.hasNextPage) {
      return;
    }
    void prefetchPage(pagination.page + 1);
  }, [pagination, prefetchPage]);

  const handlePageChange = (page: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    if (page >= 1 && page <= pagination.totalPages && page !== currentPage) {
      const topElement = document.getElementById('blog-content-top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }

      setCurrentPage(page);
    }
  };

  const handleBlogCardClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    post: BlogPost,
    cleanSlug: string
  ) => {
    console.debug('[Resources] Blog card click detected', {
      postId: post.id,
      title: post.title,
      originalSlug: post.slug,
      canonicalSlug: cleanSlug,
      targetHref: `/resources/${cleanSlug}`,
      metaKey: event.metaKey,
      ctrlKey: event.ctrlKey,
      shiftKey: event.shiftKey,
    });

    if (!cleanSlug) {
      console.error('[Resources] Missing canonical slug. Preventing navigation.', {
        postId: post.id,
        title: post.title,
        originalSlug: post.slug,
      });
      event.preventDefault();
    }
  };

  return (
    <div className="relative min-h-screen bg-white mt-6">
      <Script id="faq-schema-resources" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      {!isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: 'clamp(300px, 50vw, 757px)',
            height: 'clamp(300px, 50vw, 757px)',
            borderRadius: '50%',
            background: '#007AFF',
            filter: 'blur(400px)',
            WebkitFilter: 'blur(400px)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.6,
            willChange: 'filter',
            backfaceVisibility: 'hidden',
          }}
        />
      )}

      {isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: 'clamp(300px, 50vw, 757px)',
            height: 'clamp(300px, 50vw, 757px)',
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9,
          }}
        />
      )}

      <Navbar />

      <div
        id="blog-content-top"
        className="relative z-10 pt-10 md:pt-[50px] pl-4 md:pl-[12.96px] pr-4 md:pr-[12.96px]"
      >
        <div className="container mx-auto px-4">
          <div className="flex-shrink-0 w-full md:w-[700px]">
            <h3
              className="mb-4 md:mb-6"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontSize: 'clamp(28px, 5vw, 45px)',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.2',
              }}
            >
              The Debt-Free Knowledge
              <br className="hidden md:block" />
              Hub
            </h3>
            <p
              className="mb-4 md:mb-6 text-base md:text-lg lg:text-xl"
              style={{
                color: 'rgba(12, 39, 86, 0.70)',
                fontFamily: 'Poppins',
                fontStyle: 'normal',
                fontWeight: '400',
                lineHeight: '1.4',
              }}
            >
              Insights, strategies, and legal guidance to help you master your finances and secure your future.
            </p>
          </div>
        </div>

        <section ref={blogSectionRef} className="w-full mt-8 md:mt-12 lg:mt-[60px]">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {Array.from({ length: PAGE_SIZE }).map((_, index) => (
                  <div
                    key={`skeleton-${index}`}
                    className="flex flex-col gap-3 md:gap-4 animate-pulse"
                  >
                    <div className="w-full h-48 md:h-56 lg:h-64 rounded-xl bg-[rgba(239,247,255,0.6)]" />
                    <div className="flex flex-col gap-2">
                      <div className="h-4 md:h-5 bg-[rgba(239,247,255,0.8)] rounded" />
                      <div className="h-3 md:h-4 bg-[rgba(239,247,255,0.7)] rounded w-3/4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600" style={{ fontFamily: 'Poppins' }}>
                  {error}
                </p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#0C2756]" style={{ fontFamily: 'Poppins' }}>
                  No blogs available
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {blogPosts.map((post, idx) => {
                  const cleanSlug = canonicaliseSlug(post.slug);

                  if (!cleanSlug) {
                    if (process.env.NODE_ENV !== 'production') {
                      console.warn('Blog post missing slug:', post);
                    }
                    return null;
                  }

                  return (
                    <Link
                      key={post.id}
                      href={`/resources/${cleanSlug}`}
                      className="flex flex-col gap-3 md:gap-4 no-underline hover:opacity-90 transition-opacity cursor-pointer"
                      onClick={(event) => handleBlogCardClick(event, post, cleanSlug)}
                      prefetch={false}
                    >
                      <div className="w-full h-48 md:h-56 lg:h-64 relative overflow-hidden rounded-xl bg-[rgba(239,247,255,0.6)]">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          priority={pagination.page === 1 && idx < 3}
                          placeholder="blur"
                          blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                          onError={(event: SyntheticEvent<HTMLImageElement>) => {
                            const target = event.currentTarget;
                            if (target.dataset?.fallbackApplied) {
                              return;
                            }
                            if (target.dataset) {
                              target.dataset.fallbackApplied = 'true';
                            }
                            target.src = '/sample.png';
                          }}
                          loading={pagination.page === 1 && idx < 3 ? 'eager' : 'lazy'}
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <h3
                          className="text-[#0C2756] font-semibold text-base md:text-lg leading-tight text-left"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {post.title}
                        </h3>
                        <p
                          className="text-[rgba(12,39,86,0.7)] text-xs md:text-sm text-left"
                          style={{ fontFamily: 'Poppins' }}
                        >
                          {post.date}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {!loading && !error && pagination.totalPages > 1 && (
          <div className="flex justify-center items-center mt-8 md:mt-12 gap-2 md:gap-3">
            <button
              onClick={(e) => handlePageChange(currentPage - 1, e)}
              disabled={!pagination.hasPreviousPage}
              type="button"
              className="px-4 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: pagination.hasPreviousPage ? '#007AFF' : 'rgba(12, 39, 86, 0.20)',
                color: pagination.hasPreviousPage ? '#FFFFFF' : 'rgba(12, 39, 86, 0.50)',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '500',
                cursor: pagination.hasPreviousPage ? 'pointer' : 'not-allowed',
              }}
            >
              Previous
            </button>

            <div className="flex gap-1 md:gap-2 items-center flex-wrap justify-center">
              {(() => {
                const pages: (number | string)[] = [];
                const totalPages = pagination.totalPages;

                if (totalPages <= 7) {
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  if (currentPage <= 3) {
                    for (let i = 1; i <= 5; i++) {
                      pages.push(i);
                    }
                    pages.push('ellipsis-right');
                    pages.push(totalPages);
                  } else if (currentPage >= totalPages - 2) {
                    pages.push(1);
                    pages.push('ellipsis-left');
                    for (let i = totalPages - 4; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    pages.push(1);
                    pages.push('ellipsis-left');
                    pages.push(currentPage - 1);
                    pages.push(currentPage);
                    pages.push(currentPage + 1);
                    pages.push('ellipsis-right');
                    pages.push(totalPages);
                  }
                }

                const cleanedPages: (number | string)[] = [];
                let lastWasEllipsis = false;
                for (const page of pages) {
                  if (page === 'ellipsis-left' || page === 'ellipsis-right') {
                    if (!lastWasEllipsis) {
                      cleanedPages.push(page);
                      lastWasEllipsis = true;
                    }
                  } else {
                    cleanedPages.push(page);
                    lastWasEllipsis = false;
                  }
                }

                return cleanedPages.map((page, index) => {
                  if (page === 'ellipsis-left' || page === 'ellipsis-right') {
                    return (
                      <span
                        key={`ellipsis-${index}`}
                        className="px-2 text-[rgba(12,39,86,0.7)]"
                        style={{ fontFamily: 'Poppins', fontSize: '14px' }}
                      >
                        ...
                      </span>
                    );
                  }

                  const pageNum = page as number;
                  return (
                    <button
                      key={pageNum}
                      onClick={(e) => handlePageChange(pageNum, e)}
                      type="button"
                      className="px-3 md:px-4 py-2 rounded-lg transition-all"
                      style={{
                        background: pageNum === currentPage ? '#007AFF' : 'rgba(239, 247, 255, 0.80)',
                        color: pageNum === currentPage ? '#FFFFFF' : '#0C2756',
                        fontFamily: 'Poppins',
                        fontSize: '14px',
                        fontWeight: '500',
                      }}
                    >
                      {pageNum}
                    </button>
                  );
                });
              })()}
            </div>

            <button
              onClick={(e) => handlePageChange(currentPage + 1, e)}
              disabled={!pagination.hasNextPage}
              type="button"
              className="px-4 py-2 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              style={{
                background: pagination.hasNextPage ? '#007AFF' : 'rgba(12, 39, 86, 0.20)',
                color: pagination.hasNextPage ? '#FFFFFF' : 'rgba(12, 39, 86, 0.50)',
                fontFamily: 'Poppins',
                fontSize: '14px',
                fontWeight: '500',
                cursor: pagination.hasNextPage ? 'pointer' : 'not-allowed',
              }}
            >
              Next
            </button>
          </div>
        )}
      </div>

      <div id="faq" className="relative z-10">
        <FAQ />
      </div>
      <Footer />
    </div>
  );
}


