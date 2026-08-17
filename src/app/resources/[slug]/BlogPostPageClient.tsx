'use client';

import { useEffect, useMemo, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';
import type { BlogFaq } from '@/data/blogDefaults';
import { defaultBlogFaqs } from '@/data/blogDefaults';
import { addBlogReview, type Review } from '@/lib/blogs';
import { useTransition } from 'react';
import CompanyProfile from '@/components/CompanyProfile';

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  infographic?: string;
  description: string;
  faqs: BlogFaq[];
  slug: string;
  keyTakeaways?: string[];
  popularSearches?: string[];
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
  reviews: Review[];
};

const formatDate = (dateStr: string) => {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  if (isNaN(date.getTime())) return dateStr;
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const calculateReadTime = (text: string) => {
  if (!text) return 1;
  const words = text.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
};

const getSolutionUrlForSearch = (term: string): string => {
  const lower = term.toLowerCase();
  
  if (lower.includes('credit card') || lower.includes('card')) {
    return '/services/credit-card-settlement';
  }
  if (lower.includes('personal')) {
    return '/services/personal-loan-settlement';
  }
  if (lower.includes('business') || lower.includes('msme') || lower.includes('commercial')) {
    return '/services/business-loan-settlement';
  }
  if (lower.includes('car') || lower.includes('vehicle') || lower.includes('auto')) {
    return '/services/car-loan-settlement';
  }
  if (lower.includes('cheque') || lower.includes('check') || lower.includes('138') || lower.includes('lawyer')) {
    return '/services/cheque-bounce-lawyer';
  }
  if (lower.includes('app') || lower.includes('instant') || lower.includes('7 day') || lower.includes('fintech')) {
    return '/services/app-loan-settlement';
  }
  if (lower.includes('nbfc') || lower.includes('bajaj')) {
    return '/services/nbfc-loan-settlement';
  }
  if (lower.includes('harass') || lower.includes('recovery agent') || lower.includes('threat') || lower.includes('calls')) {
    return '/services/anti-harassment';
  }
  if (lower.includes('score') || lower.includes('cibil') || lower.includes('builder') || lower.includes('repair') || lower.includes('credit')) {
    return '/services/credit-score-builder';
  }
  if (lower.includes('consolidation')) {
    return '/debt-settlement-vs-debt-consolidation';
  }
  if (lower.includes('management') || lower.includes('planning') || lower.includes('resolution')) {
    return '/debt-management-services';
  }
  if (lower.includes('contact') || lower.includes('consultation') || lower.includes('help') || lower.includes('call')) {
    return '/contact';
  }
  
  return '/loan-settlement';
};

const AnimatedCounter = ({
  end,
  decimals = 0,
  duration = 1800,
  prefix = '',
  suffix = '',
  useLocale = false,
}: {
  end: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  useLocale?: boolean;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const easeOutCubic = (x: number): number => 1 - Math.pow(1 - x, 3);

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const current = easedProgress * end;
      setCount(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, end, duration]);

  const displayValue = () => {
    if (decimals > 0) {
      return count.toFixed(decimals);
    }
    const val = Math.floor(count);
    if (useLocale) {
      return val.toLocaleString('en-IN');
    }
    return val.toString();
  };

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {displayValue()}
      {suffix}
    </span>
  );
};

const author = {
  name: 'Ashish Jhangra',
  title: 'AMA Legal Solutions',
  image: '/credsettle-logo-black.png', // Or perhaps a placeholder for Ashish's headshot
  bio: 'Ashish is a legal and debt resolution professional at AMA Legal Solutions, passionate about helping individuals and businesses overcome financial challenges through legal guidance, debt resolution, and financial recovery solutions.',
  href: '/author/ashish-jhangra'
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



const BlogPostPageClient = ({ blog, relatedBlogs, canonicalSlug, reviews: initialReviews }: BlogPostPageClientProps) => {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isPending, startTransition] = useTransition();
  const [newReview, setNewReview] = useState({ author: '', rating: 5, comment: '' });
  const [reviewStatus, setReviewStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [activeId, setActiveId] = useState<string>('');

  const processedContent = useMemo<ProcessedDescriptionResult>(() => {
    if (!blog.description) {
      return { processedHtml: '', headings: [] };
    }
    return processDescription(blog.description);
  }, [blog.description]);

  const { processedHtml, headings } = processedContent;

  const { part1, part2 } = useMemo(() => {
    if (!processedHtml || headings.length < 2) return { part1: processedHtml, part2: '' };
    
    const middleHeading = headings[Math.floor(headings.length / 2)];
    const searchString = `id="${middleHeading.id}"`;
    const headingIndex = processedHtml.indexOf(searchString);
    if (headingIndex === -1) return { part1: processedHtml, part2: '' };
    
    const splitIndex = processedHtml.lastIndexOf('<h', headingIndex);
    if (splitIndex === -1) return { part1: processedHtml, part2: '' };

    return {
      part1: processedHtml.substring(0, splitIndex),
      part2: processedHtml.substring(splitIndex)
    };
  }, [processedHtml, headings]);

  useEffect(() => {
    const handleScroll = () => {
      const headingElements = Array.from(document.querySelectorAll('.blog-content h2[id], .blog-content h3[id]'));
      if (headingElements.length === 0) return;

      // Header offset (height of navbar + some breathing room)
      const offset = 150;
      const scrollPosition = window.scrollY + offset;

      // Find the current section
      let currentId = '';
      
      // If we are at the very top, clear active ID or set first one? 
      // Usually users want to see the first context.
      
      // Loop to find the last heading that is above the "scrolled past" line
      for (const heading of headingElements) {
        if (heading instanceof HTMLElement) {
          // We use offsetTop because it’s absolute position on page (assuming no transforming parents, which is mostly true)
          // Actually, getBoundingClientRect is safer relative to viewport
          const top = heading.getBoundingClientRect().top + window.scrollY;
          
          if (scrollPosition >= top) {
            currentId = heading.id;
          } else {
            // Once we find a heading that is below our scroll point, we stop cause we want the *previous* one
            break; 
          }
        }
      }

      // Fallback: if we haven’t passed any heading but there are headings, 
      // and we are reasonably close to the first one, highlight it? 
      // Or if scrolled to bottom, highlight last?
      
      if (!currentId && headingElements.length > 0 && window.scrollY > 100) {
         // If we are passed the hero but haven’t hit first H2, maybe keep empty or highlight first?
         // Let’s stick to strict "passed the header" logic. 
         // But LoanSettlement uses IO which triggers early. 
         // Let’s check if we are near the first one.
         const first = headingElements[0] as HTMLElement;
         if (first.getBoundingClientRect().top + window.scrollY < scrollPosition + 200) {
            currentId = first.id;
         }
      }

      if (currentId !== activeId) {
        setActiveId(currentId);
      }
    };

    // Throttle slightly or just use rAF
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', scrollListener, { passive: true });
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, [headings]);

  const handleReviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReview.author || !newReview.comment) return;

    startTransition(async () => {
      try {
        await addBlogReview(blog.id, newReview);
        setReviews(prev => [
          {
            id: Date.now().toString(),
            ...newReview,
            date: new Date().toISOString()
          },
          ...prev
        ]);
        setNewReview({ author: '', rating: 5, comment: '' });
        setReviewStatus('success');
        setTimeout(() => setReviewStatus('idle'), 3000);
      } catch (error) {
        console.error('Failed to submit review:', error);
        setReviewStatus('error');
      }
    });
  };

  const [isFirefox, setIsFirefox] = useState(false);
  const [expandedFaqs, setExpandedFaqs] = useState<string[]>([]);
  const [sidebarsFixed, setSidebarsFixed] = useState(true);
  const [shareUrl, setShareUrl] = useState('');



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
    <div className="relative min-h-screen bg-white">
      <Navbar />

      <div className="blog-detail-container">
        {/* Breadcrumbs Section */}
        <nav aria-label="Breadcrumb" className="w-full bg-[#F8F9FC]">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' },
                { name: blog.title, url: `/resources/${canonicalSlug}` }
              ]}
            />
          </div>
        </nav>

        {/* Mobile TOC - simplified slider */}
        {headings.length > 0 && (
          <nav aria-label="In this article" className="lg:hidden w-full bg-[#EEF5FB]">
            <div className="w-full max-w-[1440px] mx-auto px-4 py-2.5">
              <ul className="m-0 flex list-none items-center gap-2 overflow-x-auto p-0 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {headings.map((heading) => (
                  <li key={heading.id} className="shrink-0">
                    <button
                      type="button"
                      onClick={() => {
                        document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: 'smooth' });
                        setActiveId(heading.id);
                      }}
                      className={`inline-flex h-9 items-center whitespace-nowrap rounded-[8px] border bg-white px-3 text-[12px] font-bold transition-colors ${
                        activeId === heading.id
                          ? 'border-[#004479] text-[#004479]'
                          : 'border-[#CBD5E1] text-[#3F3F3F] hover:border-[#94A3B8]'
                      }`}
                    >
                      {heading.text}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        )}

        {/* Hero Section */}
        <section className="bg-white pb-6 pt-8 md:pb-8 md:pt-10" aria-label="Article hero">
          <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-12 md:gap-10 lg:gap-12 md:items-center">
              
              {/* Left Column */}
              <div className="flex min-w-0 flex-col gap-5 md:col-span-6 md:gap-7">

                <h1 className="max-w-2xl break-words text-[34px] font-bold leading-[1.18] text-[#004479] sm:text-[38px] md:text-[44px] lg:text-[48px] font-serif tracking-tight">
                  {blog.title}
                </h1>
                
                {blog.subtitle && (
                  <p className="max-w-[680px] text-[15px] sm:text-[16px] md:text-[18px] leading-[1.6] text-[#4E4E4E]">
                    {blog.subtitle}
                  </p>
                )}
                
                <div className="flex flex-col items-start gap-3.5 pt-2 md:flex-row md:items-center md:gap-5 md:pt-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <Link href={author.href} className="flex aspect-square h-11 w-11 flex-none items-center justify-center rounded-full bg-[#004479] text-[16px] font-bold text-white overflow-hidden transition-transform hover:scale-105 shadow-sm">
                      AJ
                    </Link>
                    <div className="min-w-0">
                      <Link href={author.href} className="group flex items-center gap-1">
                        <p className="truncate text-[15px] font-bold leading-tight text-[#004479] md:text-[16px] group-hover:text-[#007AFF] transition-colors">{author.name}</p>
                        <i className="fas fa-external-link-alt text-[10px] text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity"></i>
                      </Link>
                      <p className="mt-0.5 break-words text-[12px] font-medium leading-snug text-[#8C8C8C] md:text-[13px]">
                        Reviewed by CredSettle Team
                      </p>
                    </div>
                  </div>
                  <div className="flex shrink-0 flex-wrap items-center gap-2">
                    <div className="inline-flex h-8 items-center gap-1.5 rounded-full border border-neutral-200 bg-[#F8FAFC] px-3.5 md:h-9 md:px-4">
                      <i className="fas fa-calendar-alt text-[12px] text-[#4A5568]"></i>
                      <span className="text-[12px] font-bold md:text-[13px] text-[#4A5568]">{formatDate(blog.date)}</span>
                    </div>
                    <div className="inline-flex h-8 items-center gap-1.5 rounded-full border border-neutral-200 bg-[#F8FAFC] px-3.5 md:h-9 md:px-4">
                      <i className="fas fa-clock text-[12px] text-[#4A5568]"></i>
                      <span className="text-[12px] font-bold md:text-[13px] text-[#4A5568]">{calculateReadTime(blog.description)} min read</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              {blog.image && (
                <div className="flex md:col-span-6 md:justify-center lg:justify-start lg:pl-8">
                  <div className="relative aspect-4/3 w-full max-w-[560px] overflow-hidden rounded-2xl bg-[#E8E8E8] lg:aspect-4/3">
                    <Image
                      src={blog.image || '/sample.png'}
                      alt={blog.title}
                      fill
                      sizes="(min-width: 1024px) 50vw, 100vw"
                      className="h-full w-full object-cover"
                      priority
                      placeholder="blur"
                      blurDataURL={PLACEHOLDER_BLUR_DATA_URL}
                      unoptimized
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Strip */}
        <div className="w-full py-4 lg:py-6 bg-[#EEF5FB]">
          <div className="hidden xl:flex w-full max-w-[1440px] mx-auto justify-center gap-8 lg:gap-10 w-fit">
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-3 items-center">
                <i className="fas fa-star text-[32px] text-[#007AFF]"></i>
                <span className="text-[#004479] text-[36px] font-medium tracking-tight">
                  <AnimatedCounter end={4.8} decimals={1} suffix="/5" duration={1500} />
                </span>
              </div>
              <div className="text-[#4F4F4F] text-[15px] mt-1 text-center">Client Rating</div>
            </div>
            <div className="border-r mx-4 lg:mx-6 border-white"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-2 items-center">
                <span className="text-[36px] font-medium text-[#007AFF]">₹</span>
                <span className="text-[#004479] text-[36px] font-medium tracking-tight">
                  <AnimatedCounter end={200} suffix="Cr+" duration={1800} />
                </span>
              </div>
              <div className="text-[#4F4F4F] text-[15px] mt-1 text-center">Debt Settled</div>
            </div>
            <div className="border-r mx-4 lg:mx-6 border-white"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-3 items-center">
                <i className="fas fa-users text-[32px] text-[#007AFF]"></i>
                <span className="text-[#004479] text-[36px] font-medium tracking-tight">
                  <AnimatedCounter end={5000} useLocale suffix="+" duration={2000} />
                </span>
              </div>
              <div className="text-[#4F4F4F] text-[15px] mt-1 text-center">Happy Clients</div>
            </div>
            <div className="border-r mx-4 lg:mx-6 border-white"></div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex gap-3 items-center">
                <i className="fas fa-shield-alt text-[32px] text-[#007AFF]"></i>
                <span className="text-[#004479] text-[36px] font-medium tracking-tight">
                  <AnimatedCounter end={100} suffix="%" duration={1600} />
                </span>
              </div>
              <div className="text-[#4F4F4F] text-[15px] mt-1 text-center">Legal Protection</div>
            </div>
          </div>
          <div className="w-full xl:hidden overflow-hidden overflow-x-auto px-4 py-2 flex gap-8 whitespace-nowrap [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
             {/* Mobile simplified view */}
             <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-[#004479] text-[24px] font-bold">
                    <AnimatedCounter end={4.8} decimals={1} suffix="/5" duration={1500} />
                  </span>
                </div>
                <div className="text-[#4F4F4F] text-[14px] mt-1 text-center leading-tight">Client Rating</div>
             </div>
             <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 justify-center">
                  <span className="text-[#007AFF] text-[24px] font-bold">₹</span>
                  <span className="text-[#004479] text-[24px] font-bold">
                    <AnimatedCounter end={200} suffix="Cr+" duration={1800} />
                  </span>
                </div>
                <div className="text-[#4F4F4F] text-[14px] mt-1 text-center leading-tight">Debt Settled</div>
             </div>
             <div className="flex flex-col items-center">
                <div className="flex items-center gap-2 justify-center">
                  <span className="text-[#004479] text-[24px] font-bold">
                    <AnimatedCounter end={5000} useLocale suffix="+" duration={2000} />
                  </span>
                </div>
                <div className="text-[#4F4F4F] text-[14px] mt-1 text-center leading-tight">Happy Clients</div>
             </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <div className="grid w-full grid-cols-1 lg:grid-cols-12 lg:items-start gap-8 lg:gap-12">
            
            {/* Left Sidebar - TOC */}
            <aside className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 lg:self-start z-10 w-full min-w-0">
              {headings.length > 0 && (
                <nav className="hidden lg:block w-full max-w-[320px] overflow-hidden rounded-[10px] border border-[#e0e0e0] bg-white shadow-[0_6px_20px_rgba(0,0,0,0.08)]" aria-label="In this article">
                  <div className="bg-[#004a80] px-4 py-3">
                    <p className="text-[12px] font-bold uppercase leading-none tracking-[0.14em] text-white">In this article</p>
                  </div>
                  <ol className="m-0 max-h-[calc(100vh-180px)] list-none overflow-y-auto p-0">
                    {headings.map((heading, index) => (
                      <li key={heading.id}>
                        <button
                          type="button"
                          onClick={() => {
                            document.querySelector(`#${heading.id}`)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(heading.id);
                          }}
                          className={`flex w-full cursor-pointer items-center gap-2.5 py-2.5 pl-[calc(1rem-5px)] pr-3 text-left transition-colors border-l-[5px] ${
                            activeId === heading.id
                              ? 'border-[#007AFF] bg-[#F0F7FF]'
                              : 'border-transparent bg-white hover:bg-gray-50'
                          }`}
                        >
                          <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-[12px] font-bold ${
                            activeId === heading.id ? 'bg-[#007AFF] text-white' : 'bg-[#eeeeee] text-[#555555]'
                          }`}>
                            {index + 1}
                          </span>
                          <span className={`flex-1 min-w-0 break-words text-[12px] font-bold leading-snug ${
                            activeId === heading.id ? 'text-[#007AFF]' : 'text-[#004479]'
                          }`}>
                            {heading.text}
                          </span>
                        </button>
                      </li>
                    ))}
                  </ol>
                </nav>
              )}
            </aside>

            {/* Content Column */}
            <div className="w-full min-w-0 lg:col-span-6 pb-8 lg:pb-0">
              
              {/* Share Block styled as CTA */}
              <section className="mb-8 md:mb-10" aria-label="Call to action">
                <div className="relative overflow-hidden rounded-xl px-5 py-4 md:px-10 md:py-6" style={{ backgroundColor: '#EEF5FB' }}>
                  <div className="relative z-10 max-w-3xl flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="leading-tight text-[20px] md:text-[24px] font-bold" style={{ color: '#004479' }}>
                        Share this insight
                      </h3>
                      <p className="mt-2 text-[14px] leading-[1.6] text-[#4E4E4E]">
                        Help someone else stay informed about debt relief.
                      </p>
                    </div>
                    {shareLinks && (
                      <div className="flex gap-2 shrink-0">
                        <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#004479]/10 bg-white text-[#1877F2] transition hover:bg-[#1877F2] hover:text-white flex items-center justify-center shadow-sm">
                          <i className="fab fa-facebook-f" aria-hidden="true"></i>
                        </a>
                        <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#004479]/10 bg-white text-black transition hover:bg-black hover:text-white flex items-center justify-center shadow-sm">
                          <i className="fa-brands fa-x-twitter" aria-hidden="true"></i>
                        </a>
                        <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#004479]/10 bg-white text-[#0A66C2] transition hover:bg-[#0A66C2] hover:text-white flex items-center justify-center shadow-sm">
                          <i className="fab fa-linkedin-in" aria-hidden="true"></i>
                        </a>
                        <a href={shareLinks.whatsapp} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-[#004479]/10 bg-white text-[#128C7E] transition hover:bg-[#128C7E] hover:text-white flex items-center justify-center shadow-sm">
                          <i className="fab fa-whatsapp" aria-hidden="true"></i>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </section>

              {/* Key Takeaways */}
              {blog.keyTakeaways && blog.keyTakeaways.length > 0 && (
                <section className="mb-8 md:mb-10 rounded-[20px] bg-[#F0F7FF] p-6 md:p-8 shadow-sm border border-[#CBE0F5]">
                  <div className="flex items-center gap-2.5 mb-6">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF]"></span>
                    <h2 className="text-[17px] font-bold uppercase tracking-[0.05em] text-[#004479] md:text-[19px] m-0">
                      KEY TAKEAWAYS
                    </h2>
                  </div>
                  <div className="flex flex-col gap-5">
                    {blog.keyTakeaways.map((takeaway, index) => (
                      <div key={index} className="flex gap-3.5 items-start pb-5 border-b border-dashed border-[#007AFF]/25 last:border-0 last:pb-0">
                        <div className="w-5 h-5 rounded-full bg-[#007AFF]/15 text-[#007AFF] flex items-center justify-center shrink-0 mt-0.5">
                          <i className="fas fa-check text-[10px]"></i>
                        </div>
                        <p className="text-[#1E293B] text-[15px] md:text-[16px] leading-[1.65] m-0 font-normal">
                          {takeaway}
                        </p>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Main HTML Content - Split to allow middle infographic */}
              <div className="w-full">
                <div
                  className="blog-content"
                  dangerouslySetInnerHTML={{
                    __html: part1 || blog.description || ''
                  }}
                />

                {blog.infographic && part2 && (
                  <section className="my-10" aria-labelledby="cms-key-takeaways-heading">
                    <div className="rounded-[20px] bg-[#F0F7FF] p-4 md:rounded-3xl md:p-6 shadow-sm border border-[#BFE0FF]">
                      <h2 id="cms-key-takeaways-heading" className="text-[18px] font-bold uppercase tracking-[0.04em] text-[#007AFF] md:text-[18px] mb-4">
                        KEY TAKEAWAYS
                      </h2>
                      <div className="relative w-full overflow-hidden rounded-xl">
                        <Image
                          src={blog.infographic}
                          alt="Infographic summary"
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain bg-white/50"
                          unoptimized
                        />
                      </div>
                    </div>
                  </section>
                )}

                {part2 && (
                  <div
                    className="blog-content"
                    dangerouslySetInnerHTML={{
                      __html: part2
                    }}
                  />
                )}
                
                {blog.infographic && !part2 && (
                  <section className="my-10" aria-labelledby="cms-key-takeaways-heading">
                    <div className="rounded-[20px] bg-[#F0F7FF] p-4 md:rounded-3xl md:p-6 shadow-sm border border-[#BFE0FF]">
                      <h2 id="cms-key-takeaways-heading" className="text-[18px] font-bold uppercase tracking-[0.04em] text-[#007AFF] md:text-[18px] mb-4">
                        KEY TAKEAWAYS
                      </h2>
                      <div className="relative w-full overflow-hidden rounded-xl">
                        <Image
                          src={blog.infographic}
                          alt="Infographic summary"
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain bg-white/50"
                          unoptimized
                        />
                      </div>
                    </div>
                  </section>
                )}
              </div>

              {/* Popular Searches */}
              {blog.popularSearches && blog.popularSearches.length > 0 && (
                <section className="mt-10 md:mt-12 mb-8">
                  <h3 className="text-[18px] md:text-[20px] font-bold text-[#004479] uppercase tracking-wide mb-6">
                    POPULAR SEARCHES
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {blog.popularSearches.map((search, index) => {
                      const href = getSolutionUrlForSearch(search);
                      return (
                        <Link
                          key={index}
                          href={href}
                          className="group inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-[14px] font-semibold text-[#1E293B] shadow-sm transition-all duration-200 hover:bg-[#007AFF] hover:text-white hover:border-[#007AFF] hover:shadow-md hover:-translate-y-0.5 cursor-pointer"
                        >
                          <span>{search}</span>
                          <i className="fas fa-arrow-right text-[10px] opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"></i>
                        </Link>
                      );
                    })}
                  </div>
                </section>
              )}



              {/* FAQs Section */}
              {faqs.length > 0 && (
                <div className="mt-12 md:mt-16">
                  <h2 className="text-[22px] font-bold leading-tight text-[#004479] md:text-[28px] mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-4">
                    {faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="rounded-xl border border-gray-200 bg-white overflow-hidden"
                      >
                        <button
                          className="flex w-full items-center justify-between p-4 text-left font-semibold text-[#004479] hover:bg-gray-50 focus:outline-none transition"
                          onClick={() => toggleFAQ(faq.question)}
                        >
                          <span className="pr-4">{faq.question}</span>
                          <i
                            className={`fas fa-chevron-down text-[#007AFF] transition-transform duration-300 ${
                              expandedFaqs.includes(faq.question) ? 'rotate-180' : ''
                            }`}
                          ></i>
                        </button>
                        <div
                          className={`px-4 text-sm text-[#3F4A56] transition-all duration-300 ease-in-out ${
                            expandedFaqs.includes(faq.question)
                              ? 'max-h-96 pb-4 opacity-100'
                              : 'max-h-0 py-0 opacity-0'
                          }`}
                        >
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Company Profile Component */}
              <div className="mt-10">
                <CompanyProfile />
              </div>

            </div>
            
            {/* Right Sidebar - Sticky Cards (Cols 10-12) */}
            <div className="hidden lg:block lg:col-span-3 lg:sticky lg:top-24 lg:self-start z-10 w-full min-w-0">
              <div className="flex flex-col gap-6">
                
                {/* Card 1: CTA */}
                <div className="rounded-[16px] bg-[#004479] text-white p-5 shadow-md flex flex-col items-center text-center">
                  <div className="w-10 h-10 mb-2.5 rounded-full bg-white/10 border border-white/15 flex items-center justify-center shadow-inner">
                    <i className="fas fa-headset text-lg text-white"></i>
                  </div>
                  <h3 className="text-[15px] font-bold mb-1.5 leading-tight">Talk to a CredSettle Expert Free!</h3>
                  <p className="text-[12px] text-blue-50/90 mb-3.5 leading-relaxed font-medium">
                    Get a personal debt assessment.<br/>
                    One call. No pressure.<br/>
                    Clear answers.
                  </p>
                  <Link href="/contact" className="w-full bg-[#007AFF] hover:bg-[#0056b3] text-white font-bold py-2.5 px-4 rounded-[10px] transition-colors duration-200 flex items-center justify-center gap-2 shadow text-[13px]">
                    <i className="fas fa-phone-alt"></i>
                    <span>Book My Free Call</span>
                  </Link>
                </div>

                {/* Card 2: Trust Badges */}
                <div className="rounded-[16px] border border-gray-200 bg-white p-4 shadow-sm">
                  <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-widest mb-4">Why People Trust CredSettle</h3>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EEF5FB] text-[#004479] flex items-center justify-center shrink-0">
                        <i className="fas fa-handshake text-[11px]"></i>
                      </div>
                      <span className="font-bold text-[#004479] text-[13px]">5,000+ Helped</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EEF5FB] text-[#004479] flex items-center justify-center shrink-0">
                        <i className="fas fa-gavel text-[11px]"></i>
                      </div>
                      <span className="font-bold text-[#004479] text-[13px]">100% Legal</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EEF5FB] text-[#004479] flex items-center justify-center shrink-0">
                        <i className="fas fa-ban text-[11px]"></i>
                      </div>
                      <span className="font-bold text-[#004479] text-[13px]">No Hidden Fees</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-[#EEF5FB] text-[#004479] flex items-center justify-center shrink-0">
                        <i className="fas fa-balance-scale text-[11px]"></i>
                      </div>
                      <span className="font-bold text-[#004479] text-[13px]">RBI Compliant</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx global>{`
        .blog-content {
          color: #3F4A56;
          line-height: 1.8;
          font-family: 'Poppins', sans-serif;
        }

        .blog-content h1,
        .blog-content h2,
        .blog-content h3,
        .blog-content h4,
        .blog-content h5,
        .blog-content h6 {
          color: #004479;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          scroll-margin-top: 150px;
          line-height: 1.25;
        }

        .blog-content h2 {
          font-size: 28px;
        }

        .blog-content h3 {
          font-size: 22px;
        }

        .blog-content p {
          margin: 1.25rem 0;
          color: #3F4A56;
          font-size: 16px;
        }

        .blog-content a {
          color: #007AFF;
          text-decoration: underline;
          text-decoration-color: rgba(0, 122, 255, 0.4);
          text-underline-offset: 2px;
          transition: all 0.2s ease;
        }

        .blog-content a:hover {
          color: #0056b3;
          text-decoration-color: #0056b3;
        }

        .blog-content blockquote {
          border-left: 4px solid #007AFF;
          margin: 2rem 0;
          padding: 1rem 1.5rem;
          background: #F0F7FF;
          border-radius: 0.5rem;
          font-style: italic;
          color: #4E4E4E;
        }

        .blog-content ul,
        .blog-content ol {
          margin: 1.5rem 0;
          padding-left: 1.5rem;
        }

        .blog-content ul {
          list-style: disc;
        }

        .blog-content ol {
          list-style: decimal;
        }

        .blog-content li {
          margin: 0.5rem 0;
          color: #3F4A56;
          font-size: 16px;
        }

        .blog-content li::marker {
          color: #007AFF;
        }

        .blog-content img {
          max-width: 100%;
          height: auto;
          border-radius: 1rem;
          margin: 2rem 0;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
        }

        .blog-content table {
          width: 100%;
          border-collapse: separate !important;
          border-spacing: 0 !important;
          margin: 2rem 0;
          border-radius: 12px;
          overflow: hidden;
          background: #ffffff;
          border: 1px solid #CBD5E1 !important;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
        }

        .blog-content table th,
        .blog-content table td {
          padding: 0.875rem 1.25rem;
          border-right: 1px solid #E2E8F0 !important;
          border-bottom: 1px solid #E2E8F0 !important;
          text-align: left;
          font-size: 14.5px;
          line-height: 1.5;
        }

        .blog-content table th:last-child,
        .blog-content table td:last-child {
          border-right: none !important;
        }

        .blog-content table tr:last-child td {
          border-bottom: none !important;
        }

        .blog-content table th {
          background: #F8FAFC;
          color: #004479;
          font-weight: 700;
          font-size: 14.5px;
          letter-spacing: 0.02em;
        }

        .blog-content strong {
          color: #004479;
          font-weight: 600;
        }
      `}</style>
    </div>
  );
};

export default BlogPostPageClient;
