'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';
import type { BlogFaq } from '@/data/blogDefaults';
import { defaultBlogFaqs } from '@/data/blogDefaults';

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  faqs: BlogFaq[];
  slug: string;
};

type RelatedBlog = {
  image: string;
  title: string;
  date: string;
  slug: string;
};

type BlogPostPageClientProps = {
  blog: BlogPost;
  relatedBlogs: RelatedBlog[];
  canonicalSlug: string;
};

const author = {
  name: 'Legal Expert Team',
  title: 'CredSettle Legal Advisory',
  image: '/credsettle-logo-black.png',
  bio: 'Our team of experienced legal professionals, financial advisors, and debt settlement experts is dedicated to helping individuals navigate debt settlement challenges. With years of combined experience in RBI compliance, debt negotiation, and legal protection, we ensure that every client receives expert guidance tailored to their unique financial situation.'
};

type Heading = {
  id: string;
  text: string;
  level: number;
};

type ProcessedDescriptionResult = {
  processedHtml: string;
  headings: Heading[];
};

const processDescription = (html: string): ProcessedDescriptionResult => {
  const headingsList: Heading[] = [];
  const headingRegex = /<h([2-6])([^>]*)>(.*?)<\/h[2-6]>/gi;
  const matches: Array<{
    match: RegExpExecArray;
    level: number;
    attrs: string;
    content: string;
    text: string;
    id?: string;
  }> = [];

  let execMatch: RegExpExecArray | null = null;

  while ((execMatch = headingRegex.exec(html)) !== null) {
    const level = parseInt(execMatch[1], 10);
    const attrs = execMatch[2] || '';
    const content = execMatch[3];
    const text = content.replace(/<[^>]*>/g, '').trim();

    if (text) {
      matches.push({ match: execMatch, level, attrs, content, text });
    }
  }

  matches.forEach((item, index) => {
    let id = item.text
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');

    if (!id) {
      id = `heading-${index}`;
    }

    let uniqueId = id;
    let counter = 1;
    while (headingsList.some((heading) => heading.id === uniqueId)) {
      uniqueId = `${id}-${counter}`;
      counter += 1;
    }

    headingsList.push({ id: uniqueId, text: item.text, level: item.level });
    item.id = uniqueId;
  });

  let processedHtml = html;

  for (let i = matches.length - 1; i >= 0; i -= 1) {
    const item = matches[i];
    const originalMatch = item.match[0];
    // RegExpExecArray in V8 includes index property; guard for TypeScript.
    const matchIndex = (item.match as RegExpExecArray & { index: number }).index;

    if (matchIndex === undefined || !item.id) continue;

    const hasIdAttr = item.attrs.includes('id=');
    const replacement = hasIdAttr
      ? originalMatch
      : `<h${item.level} id="${item.id}"${item.attrs}>${item.content}</h${item.level}>`;

    processedHtml =
      processedHtml.substring(0, matchIndex) +
      replacement +
      processedHtml.substring(matchIndex + originalMatch.length);
  }

  return {
    processedHtml,
    headings: headingsList.filter((heading) => heading.id && heading.id.trim() !== '')
  };
};

const PLACEHOLDER_BLUR_DATA_URL =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIwMCIgaGVpZ2h0PSI2NzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjEyMDAiIGhlaWdodD0iNjcwIiBmaWxsPSIjZWZmN2ZmIi8+PC9zdmc+';

const BlogPostPageClient = ({ blog, relatedBlogs, canonicalSlug }: BlogPostPageClientProps) => {
  const [isFirefox, setIsFirefox] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [sidebarsFixed, setSidebarsFixed] = useState(true);
  const [shareUrl, setShareUrl] = useState('');

  const processedContent = useMemo<ProcessedDescriptionResult>(() => {
    if (!blog.description) {
      return { processedHtml: '', headings: [] };
    }
    return processDescription(blog.description);
  }, [blog.description]);

  const { processedHtml, headings } = processedContent;

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setShareUrl(window.location.href);
    }
  }, []);

  const faqs = useMemo(() => {
    return blog.faqs && blog.faqs.length > 0 ? blog.faqs : defaultBlogFaqs;
  }, [blog.faqs]);

  const related = useMemo(() => {
    return relatedBlogs.filter((relatedBlog) => relatedBlog.slug && relatedBlog.slug.trim() !== '').slice(0, 4);
  }, [relatedBlogs]);

  const shareLinks = useMemo(() => {
    if (!shareUrl) return null;

    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(blog.title);

    return {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      twitter: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      whatsapp: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`
    };
  }, [blog.title, shareUrl]);

  const toggleFAQ = (question: string) => {
    setExpandedFaqs((prev) =>
      prev.includes(question) ? prev.filter((q) => q !== question) : [...prev, question]
    );
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const updateSidebarPosition = () => {
      const footer = document.querySelector('footer');
      if (!footer) return;

      const scrollY = window.scrollY;
      const footerTop = footer.getBoundingClientRect().top + scrollY;
      const shouldRelease = footerTop < scrollY + 480;
      setSidebarsFixed(!shouldRelease);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateSidebarPosition();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateSidebarPosition();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', updateSidebarPosition);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateSidebarPosition);
    };
  }, []);

  const breadcrumbsSlug = canonicalSlug || blog.slug;

  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        background:
          'linear-gradient(180deg, #F7FBFF 0%, #FFFFFF 45%, #E7F3FF 100%)'
      }}
    >
      <Navbar />

      <div
        className="absolute inset-0 pointer-events-none"
        style={{ contain: 'layout style paint' }}
      >
      {!isFirefox && (
          <div
            className="absolute -top-32 -left-32 w-[480px] h-[480px] opacity-70 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(0, 122, 255, 0.35) 0%, transparent 70%)' }}
          />
        )}
        <div
          className="absolute top-[40%] -right-48 w-[420px] h-[420px] opacity-40 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(12, 39, 86, 0.25) 0%, transparent 65%)' }}
        />
        <div
          className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 w-[560px] h-[560px] opacity-30 rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(0, 178, 241, 0.3) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 pt-24 pb-24 px-3 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-7xl">
          <div
            className="text-center mb-10 lg:mb-14 transition-all duration-700 opacity-100 translate-y-0"
          >
            <div className="flex items-center justify-center gap-1.5 text-[10px] md:text-xs mb-4 font-medium">
              <span className="text-sky-800/90">Home</span>
              <i className="fas fa-chevron-right text-sky-700/60 text-[8px]" aria-hidden="true"></i>
              <span className="text-sky-800/90">Resources</span>
              <i className="fas fa-chevron-right text-sky-700/60 text-[8px]" aria-hidden="true"></i>
              <span className="text-[#007AFF]">{blog.title}</span>
            </div>

            <h1
              className="font-semibold text-[28px] md:text-[40px] lg:text-[52px] leading-tight mb-3"
              style={{
                fontFamily: 'Poppins',
                background: 'linear-gradient(120deg, #0C2756 0%, #0E5AD0 45%, #007AFF 90%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              {blog.title}
            </h1>

            {blog.subtitle && (
              <p
                className="max-w-3xl mx-auto text-sm md:text-base lg:text-lg mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.75)',
                  fontFamily: 'Poppins',
                  fontWeight: 400,
                  lineHeight: 1.6
                }}
              >
                {blog.subtitle}
              </p>
            )}

            <div className="flex flex-wrap items-center justify-center gap-3 text-xs md:text-sm">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-900/10 bg-white/70 backdrop-blur">
                <i className="fas fa-calendar-alt text-[#007AFF]" aria-hidden="true"></i>
                <span
              style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins'
              }}
            >
              {blog.date}
                </span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-sky-900/10 bg-white/70 backdrop-blur">
                <i className="fas fa-bookmark text-[#007AFF]" aria-hidden="true"></i>
                <span
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins'
                  }}
                >
                  {blog.slug.replace(/-/g, ' ')}
                </span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8 lg:mb-12">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' },
                { name: blog.title, url: `/resources/${breadcrumbsSlug}` }
              ]}
            />
          </div>

          {blog.image && (
            <div
              className="relative mx-auto mb-10 lg:mb-16 overflow-hidden rounded-[26px] shadow-lg transition duration-700 opacity-100 translate-y-0"
              style={{ aspectRatio: '16/9', maxWidth: '960px' }}
            >
              <Image
                src={blog.image || '/sample.png'}
                alt={blog.title}
                fill
                sizes="(min-width: 1024px) 60vw, (min-width: 768px) 80vw, 100vw"
                className="object-cover"
                priority
                placeholder="blur"
                blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
              />
            </div>
          )}

          {headings.length > 0 && (
            <div className="mb-10 lg:mb-14">
                <TableOfContents headings={headings} />
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div
              className="lg:col-span-8 transition duration-700 opacity-100 translate-y-0"
            >
              <div
                className="rounded-3xl p-6 md:p-8 lg:p-10 shadow-[0_18px_60px_rgba(12,39,86,0.08)] border border-sky-900/10 backdrop-blur-xl"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(231, 243, 255, 0.8) 100%)'
                }}
              >
                <div
                  className="blog-content"
                dangerouslySetInnerHTML={{
                  __html: processedHtml || blog.description || ''
                }}
              />
              </div>

              <div
                className="mt-8 rounded-2xl border border-sky-900/10 bg-white/90 backdrop-blur px-6 py-5 shadow-[0_10px_35px_rgba(12,39,86,0.08)]"
                style={{
                  background: 'linear-gradient(135deg, rgba(0, 178, 241, 0.12) 0%, rgba(255, 255, 255, 0.9) 100%)'
                }}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#007AFF]/10 flex items-center justify-center text-[#007AFF]">
                      <i className="fas fa-share-alt" aria-hidden="true"></i>
                    </div>
                    <div>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                      >
                        Share this insight
                      </p>
                      <p
                        className="text-xs"
                        style={{ color: 'rgba(12, 39, 86, 0.65)', fontFamily: 'Poppins' }}
                      >
                        Help someone else stay informed about debt relief
                      </p>
                    </div>
                  </div>
                  {shareLinks && (
                    <div className="flex gap-2">
                      <a
                        href={shareLinks.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-sky-900/10 bg-white text-[#1877F2] transition hover:bg-[#1877F2] hover:text-white flex items-center justify-center"
                        aria-label="Share on Facebook"
                      >
                        <i className="fab fa-facebook-f" aria-hidden="true"></i>
                      </a>
                      <a
                        href={shareLinks.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-sky-900/10 bg-white text-[#1DA1F2] transition hover:bg-[#1DA1F2] hover:text-white flex items-center justify-center"
                        aria-label="Share on X"
                      >
                        <i className="fab fa-twitter" aria-hidden="true"></i>
                      </a>
                      <a
                        href={shareLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-sky-900/10 bg-white text-[#0A66C2] transition hover:bg-[#0A66C2] hover:text-white flex items-center justify-center"
                        aria-label="Share on LinkedIn"
                      >
                        <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                      </a>
                      <a
                        href={shareLinks.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-sky-900/10 bg-white text-[#128C7E] transition hover:bg-[#128C7E] hover:text-white flex items-center justify-center"
                        aria-label="Share on WhatsApp"
                      >
                        <i className="fab fa-whatsapp" aria-hidden="true"></i>
                      </a>
                    </div>
                  )}
            </div>
          </div>

            <div
                className="mt-8 rounded-3xl border border-sky-900/10 bg-white/90 backdrop-blur shadow-[0_18px_60px_rgba(12,39,86,0.08)] p-6 md:p-8"
              style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(239, 247, 255, 0.85) 100%)'
              }}
            >
                <div className="flex flex-col gap-5 sm:flex-row sm:gap-6">
                <div className="flex-shrink-0">
                  <Image
                    src={author.image}
                    alt={author.name}
                    width={96}
                    height={96}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-2xl border border-sky-900/10 object-contain bg-white p-2"
                    priority={false}
                    placeholder="blur"
                    blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                  />
                </div>
                  <div>
                    <h3
                      className="text-lg md:text-xl font-semibold mb-1"
                      style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                  >
                    {author.name} 
                  </h3>
                  <p
                      className="text-sm font-medium mb-3"
                      style={{ color: '#007AFF', fontFamily: 'Poppins' }}
                  >
                    {author.title}
                  </p>
                  <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins' }}
                  >
                    {author.bio}
                  </p>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[#007AFF] font-medium transition hover:text-[#0E5AD0]"
                      style={{ fontFamily: 'Poppins' }}
                    >
                      Talk to our legal desk <i className="fas fa-arrow-right text-xs" aria-hidden="true"></i>
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className="mt-8 rounded-3xl border border-sky-900/10 bg-white/95 backdrop-blur shadow-[0_18px_60px_rgba(12,39,86,0.08)] p-6 md:p-8"
                style={{
                  background: 'linear-gradient(180deg, rgba(239, 247, 255, 0.95) 0%, rgba(255, 255, 255, 0.9) 100%)'
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-11 h-11 rounded-xl bg-[#007AFF]/12 text-[#007AFF] flex items-center justify-center">
                    <i className="fas fa-question-circle text-lg" aria-hidden="true"></i>
            </div>
                  <div>
                    <h2
                      className="text-xl font-semibold"
                      style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                    >
                      Frequently Asked Questions
                    </h2>
                    <p
                      className="text-xs"
                      style={{ color: 'rgba(12, 39, 86, 0.65)', fontFamily: 'Poppins' }}
                    >
                      Answers from RBI-compliant debt settlement experts
                    </p>
                  </div>
                  </div>

                <div className="space-y-3">
                  {faqs.map((faq) => {
                    const isOpen = expandedFaqs.includes(faq.question);
                    return (
                      <div
                        key={faq.question}
                        className="rounded-2xl border border-sky-900/10 bg-white/90 shadow-sm transition hover:shadow-md"
                      >
                        <button
                          type="button"
                          onClick={() => toggleFAQ(faq.question)}
                          className="w-full flex items-start justify-between gap-4 px-5 py-4 text-left"
                        >
                          <span
                            className="text-sm font-medium"
                            style={{ color: '#0C2756', fontFamily: 'Poppins', lineHeight: 1.5 }}
                          >
                            {faq.question}
                          </span>
                          <span
                            className={`mt-1 inline-flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-sky-900/10 bg-blue-50/80 text-[#007AFF] transition-transform ${
                              isOpen ? 'rotate-45' : ''
                            }`}
                          >
                            <i className="fas fa-plus" aria-hidden="true"></i>
                          </span>
                        </button>
                        <div
                          className={`px-5 pb-5 overflow-hidden transition-[max-height,opacity] duration-300 ${
                            isOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                          }`}
                        >
                          <div className="border-t border-sky-900/10 pt-4">
                            <p
                              className="text-sm leading-relaxed"
                              style={{ color: 'rgba(12, 39, 86, 0.7)', fontFamily: 'Poppins' }}
                            >
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                    </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              className="lg:col-span-4 transition duration-700 opacity-100 translate-y-0"
            >
              <div className={`${sidebarsFixed ? 'lg:sticky lg:top-32' : ''} space-y-6`}>
                <div
                  className="rounded-3xl border border-sky-900/10 bg-white/90 backdrop-blur p-6 shadow-[0_16px_40px_rgba(12,39,86,0.08)]"
                style={{
                    background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.95) 0%, rgba(239, 247, 255, 0.9) 100%)'
                  }}
                >
                  <h3
                    className="text-xl font-semibold mb-2"
                      style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                    >
                    Need urgent legal help?
                  </h3>
                  <p
                    className="text-sm mb-5"
                    style={{ color: 'rgba(12, 39, 86, 0.7)', fontFamily: 'Poppins' }}
                  >
                    Our RBI-compliant legal experts negotiate with lenders, stop harassment, and secure faster
                    settlements.
                  </p>
                  <div className="flex flex-col gap-3 text-sm" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007AFF]/12 text-[#007AFF]">
                        <i className="fas fa-headset" aria-hidden="true"></i>
                      </span>
                      Speak to an RBI-compliant negotiator
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007AFF]/12 text-[#007AFF]">
                        <i className="fas fa-shield-alt" aria-hidden="true"></i>
                      </span>
                      Get legal protection from recovery agents
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#007AFF]/12 text-[#007AFF]">
                        <i className="fas fa-file-signature" aria-hidden="true"></i>
                      </span>
                      Custom settlement plan within 24 hours
                    </div>
                  </div>
                  <div className="mt-6">
                    <CTAButton className="w-full justify-center py-3">
                      Book your free consultation
                  </CTAButton>
                  </div>
                </div>

                {related.length > 0 && (
                  <div
                    className="rounded-3xl border border-sky-900/10 bg-white/95 backdrop-blur p-6 shadow-[0_16px_40px_rgba(12,39,86,0.08)]"
                    style={{
                      background: 'linear-gradient(180deg, rgba(239, 247, 255, 0.95) 0%, rgba(255, 255, 255, 0.92) 100%)'
                    }}
                  >
                    <div className="flex items-center gap-3 mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#007AFF]/12 text-[#007AFF] flex items-center justify-center">
                        <i className="fas fa-newspaper" aria-hidden="true"></i>
                      </div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                      >
                        Related Articles
                      </h3>
                    </div>
                    <div className="space-y-4">
                      {related.map((relatedBlog) => (
                        <Link
                          key={relatedBlog.slug}
                          href={`/resources/${relatedBlog.slug}`}
                          className="block group"
                          prefetch={false}
                        >
                          <div className="rounded-2xl border border-transparent bg-white/80 p-4 transition group-hover:border-[#007AFF]/40 group-hover:shadow-md">
                            <h4
                              className="text-sm font-semibold mb-2 transition"
                              style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                            >
                              {relatedBlog.title}
                            </h4>
                            <p
                              className="text-xs"
                              style={{ color: 'rgba(12, 39, 86, 0.6)', fontFamily: 'Poppins' }}
                            >
                              {relatedBlog.date}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

        <Footer />

      <style jsx global>{`
        .blog-content {
          color: rgba(12, 39, 86, 0.85);
          line-height: 1.8;
          font-family: 'Poppins', sans-serif;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          color: #0c2756;
          font-weight: 600;
          margin-top: 2.5rem;
          margin-bottom: 1.25rem;
        }

        .blog-content h2 {
          font-size: clamp(1.75rem, 2.2vw, 2rem);
          border-bottom: 2px solid rgba(0, 122, 255, 0.2);
          padding-bottom: 0.75rem;
        }

        .blog-content h3 {
          font-size: clamp(1.35rem, 2vw, 1.6rem);
        }

        .blog-content p {
          margin: 1.5rem 0;
          color: rgba(12, 39, 86, 0.78);
        }

        .blog-content a {
          color: #007aff;
          text-decoration: underline;
          text-decoration-color: rgba(0, 122, 255, 0.25);
          transition: all 0.2s ease;
        }

        .blog-content a:hover {
          color: #0e5ad0;
          text-decoration-color: rgba(14, 90, 208, 0.6);
        }

        .blog-content blockquote {
          border-left: 4px solid rgba(0, 122, 255, 0.35);
          margin: 2rem 0;
          padding: 1rem 1.5rem;
          background: rgba(239, 247, 255, 0.8);
          border-radius: 0.75rem;
          font-style: italic;
          color: rgba(12, 39, 86, 0.8);
        }

        .blog-content code {
          background: rgba(0, 122, 255, 0.08);
          color: #0c2756;
          padding: 0.2rem 0.45rem;
          border-radius: 0.35rem;
          font-size: 0.9em;
          font-family: 'Fira Code', 'Courier New', monospace;
        }

        .blog-content pre {
          background: rgba(12, 39, 86, 0.88);
          color: #eff7ff;
          padding: 1.75rem;
          border-radius: 1rem;
          overflow-x: auto;
          margin: 2rem 0;
          border: 1px solid rgba(0, 122, 255, 0.25);
        }

        .blog-content pre code {
          background: transparent;
          color: inherit;
          padding: 0;
        }

        .blog-content ul,
        .blog-content ol {
          margin: 1.75rem 0;
          padding-left: 1.75rem;
        }

        .blog-content ul {
          list-style: disc;
        }

        .blog-content ol {
          list-style: decimal;
        }

        .blog-content li {
          margin: 0.75rem 0;
          color: rgba(12, 39, 86, 0.78);
        }

        .blog-content li::marker {
          color: #007aff;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 1.25rem;
          margin: 2.5rem 0;
          box-shadow: 0 18px 40px rgba(12, 39, 86, 0.12);
        }

        .blog-content table {
          width: 100%;
          border-collapse: collapse;
          margin: 2.5rem 0;
          border-radius: 1rem;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.9);
        }

        .blog-content table th,
        .blog-content table td {
          padding: 0.9rem 1.1rem;
          border: 1px solid rgba(0, 122, 255, 0.12);
          text-align: left;
        }

        .blog-content table th {
          background: rgba(0, 122, 255, 0.08);
          color: #0c2756;
          font-weight: 600;
        }

        .blog-content table tbody tr:hover {
          background: rgba(239, 247, 255, 0.7);
        }

        .blog-content strong {
          color: #0c2756;
          font-weight: 600;
        }

        .blog-content hr {
          border: none;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 122, 255, 0.3), transparent);
          margin: 3rem 0;
        }
      `}</style>
    </div>
  );
};

export default BlogPostPageClient;
