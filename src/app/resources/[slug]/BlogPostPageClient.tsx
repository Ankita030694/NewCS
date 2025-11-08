'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TableOfContents from '@/components/TableOfContents';
import RelatedContent from '@/components/RelatedContent';

type FAQ = {
  question: string;
  answer: string;
};

type BlogPost = {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  faqs: FAQ[];
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

const defaultFaqs: FAQ[] = [
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

const BlogPostPageClient = ({ blog, relatedBlogs, canonicalSlug }: BlogPostPageClientProps) => {
  const [isFirefox, setIsFirefox] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [processedDescription, setProcessedDescription] = useState<string>('');
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  useEffect(() => {
    console.debug('[BlogPostPageClient] Page mounted', {
      canonicalSlug,
      blogSlug: blog.slug,
      blogId: blog.id,
      hasDescription: Boolean(blog.description),
      relatedCount: relatedBlogs.length
    });
  }, [canonicalSlug, blog.slug, blog.id, blog.description, relatedBlogs.length]);

  useEffect(() => {
    if (!blog.description) {
      setProcessedDescription('');
      setHeadings([]);
      return;
    }

    const { processedHtml, headings: generatedHeadings } = processDescription(blog.description);
    setProcessedDescription(processedHtml);
    setHeadings(generatedHeadings);
  }, [blog.description]);

  const faqs = useMemo(() => {
    return blog.faqs && blog.faqs.length > 0 ? blog.faqs : defaultFaqs;
  }, [blog.faqs]);

  const related = useMemo(() => {
    return relatedBlogs.filter((relatedBlog) => relatedBlog.slug && relatedBlog.slug.trim() !== '');
  }, [relatedBlogs]);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex((prev) => (prev === index ? null : index));
  };

  const breadcrumbsSlug = canonicalSlug || blog.slug;

  return (
    <div className="relative min-h-screen bg-white mt-6">
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
            backfaceVisibility: 'hidden'
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
            opacity: 0.9
          }}
        />
      )}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '60px', paddingLeft: '16px', paddingRight: '16px' }}>
        <div className="w-full max-w-8xl px-2 md:px-4 mx-auto">
          <div className="text-center mb-6 md:mb-8">
            <h1
              className="font-bold text-2xl md:text-4xl lg:text-5xl mb-3 md:mb-4"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '1.2'
              }}
            >
              {blog.title}
            </h1>
            {blog.subtitle && (
              <p
                className="text-base md:text-lg mb-2 px-4 md:px-0"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: 'clamp(16px, 4vw, 20px)',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '1.4'
                }}
              >
                {blog.subtitle}
              </p>
            )}
            <p
              className="text-sm md:text-base"
              style={{
                color: 'rgba(12, 39, 86, 0.70)',
                fontFamily: 'Poppins',
                fontSize: 'clamp(14px, 3vw, 16px)',
                fontStyle: 'normal',
                fontWeight: '400'
              }}
            >
              {blog.date}
            </p>
          </div>

          <div className="mb-4 md:mb-6 flex justify-center">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' },
                { name: blog.title, url: `/resources/${breadcrumbsSlug}` }
              ]}
            />
          </div>

          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-full md:w-[80%] relative" style={{ maxHeight: '50vh', aspectRatio: '16/9' }}>
              <Image
                src={blog.image || '/sample.png'}
                alt={blog.title}
                fill
                sizes="(min-width: 768px) 80vw, 100vw"
                className="object-cover rounded-[20px]"
                priority
                quality={75}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nODAwJyBoZWlnaHQ9JzQ1MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nODAwJyBoZWlnaHQ9JzQ1MCcgZmlsbD0nI2VmZjknLz48L3N2Zz4="
                loading="eager"
                fetchPriority="high"
              />
            </div>
          </div>

          {headings.length > 0 && (
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="w-full md:w-[80%]">
                <TableOfContents headings={headings} />
              </div>
            </div>
          )}

          <div className="flex justify-center mb-12 md:mb-16">
            <div
              className="w-full md:w-[80%] rounded-[20px] md:rounded-[30px] p-5 md:p-8"
              style={{
                background:
                  'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.20) 49.48%, rgba(239, 247, 255, 0.80) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
              }}
            >
              <div
                className="text-left prose prose-lg"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: 'clamp(16px, 4vw, 18px)',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '1.6'
                }}
                dangerouslySetInnerHTML={{
                  __html: processedDescription || blog.description || ''
                }}
              />
            </div>
          </div>

          <section className="flex justify-center mb-12 md:mb-16">
            <div
              className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl w-full md:w-[80%]"
              style={{
                background:
                  'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
              }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <img
                    src={author.image}
                    alt={author.name}
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full object-contain"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3
                    className="text-lg md:text-xl lg:text-2xl font-semibold mb-2"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: '600'
                    }}
                  >
                    {author.name} 
                  </h3>
                  <p
                    className="text-sm md:text-base mb-2 md:mb-3"
                    style={{
                      color: '#007AFF',
                      fontFamily: 'Poppins',
                      fontWeight: '500'
                    }}
                  >
                    {author.title}
                  </p>
                  <p
                    className="text-xs md:text-sm leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.70)',
                      fontFamily: 'Poppins',
                      lineHeight: '1.5'
                    }}
                  >
                    {author.bio}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-8 md:py-12 mt-10 md:mt-[60px] mb-10 md:mb-[60px]">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-14">
                <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-[76px] w-full">
                  <div className="flex flex-col items-start gap-4 md:gap-[21px] w-full lg:w-[365px]">
                    <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight font-bold">
                      <span style={{ color: '#0C2756' }}>
                        Have Question?
                        <br className="hidden md:block" /> We've Got
                      </span>
                      <span style={{ color: '#007AFF' }}> Answers.</span>
                    </h2>
                    <p className="text-xs md:text-sm lg:text-[15px] leading-relaxed font-normal">
                      <span style={{ color: '#0C2756' }}>Still have questions? </span>
                      <span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span>
                      <span style={{ color: '#0C2756' }}> anytime.</span>
                    </p>
                  </div>

                  <div className="w-full lg:w-[800px] lg:ml-auto p-3 md:p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
                    <div className="flex flex-col gap-3 md:gap-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={`${faq.question}-${index}`}
                          className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                          onClick={() => toggleFAQ(index)}
                        >
                          <div className="flex justify-between items-start gap-3 md:gap-[49px] p-4 md:p-[21px_28px]">
                            <p
                              className="text-xs md:text-sm lg:text-[14px] leading-relaxed font-normal flex-1"
                              style={{ color: '#0C2756' }}
                            >
                              {faq.question}
                            </p>
                            <div className="flex-shrink-0 w-[14px] h-[14px] md:w-[16px] md:h-[16px] relative">
                              <svg
                                width="16"
                                height="16"
                                viewBox="0 0 23 23"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="transition-all duration-500 ease-in-out"
                                style={{ transform: openFAQIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                              >
                                <path
                                  d="M11.5 0C12.3284 0 13 0.671573 13 1.5V10H21.5C22.3284 10 23 10.6716 23 11.5C23 12.3284 22.3284 13 21.5 13H13V21.5C13 22.3284 12.3284 23 11.5 23C10.6716 23 10 22.3284 10 21.5V13H1.5C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10H10V1.5C10 0.671573 10.6716 0 11.5 0Z"
                                  fill="black"
                                />
                              </svg>
                            </div>
                          </div>
                          <div
                            className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQIndex === index ? 'pt-2 md:pt-3 pb-4 md:pb-5 px-4 md:px-7' : ''}`}
                            style={{
                              maxHeight: openFAQIndex === index ? '300px' : '0px',
                              opacity: openFAQIndex === index ? 1 : 0
                            }}
                          >
                            <div className="border-t border-gray-200 pt-3">
                              <p
                                className="text-[10px] md:text-xs lg:text-[13px] leading-relaxed font-normal"
                                style={{ color: 'rgba(12, 39, 86, 0.7)' }}
                              >
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full py-8 md:py-12">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div
                className="flex justify-center items-center w-full rounded-xl px-4 md:px-6 lg:px-3 py-6 md:py-8 lg:py-[63px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-4 md:gap-6 lg:gap-[28px] w-full">
                    <h2
                      className="text-center text-lg md:text-xl lg:text-[28px] leading-tight font-normal w-full px-2"
                      style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                    >
                      Ready to End Your Debt Struggle?
                    </h2>
                    <p
                      className="text-center text-sm md:text-base lg:text-[18px] leading-relaxed font-normal w-full px-2"
                      style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins' }}
                    >
                      Stop harassment and secure your RBI-compliant settlement for a debt-free future.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="px-6 md:px-7 lg:px-[28px] py-3 md:py-3.5 lg:py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                    style={{ boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset' }}
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                  >
                    <span
                      className="text-xs md:text-sm lg:text-[14px] leading-normal font-normal"
                      style={{ color: '#0C2756', fontFamily: 'Poppins' }}
                    >
                      Get Your Free Consultation
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          <section
            className="w-full mx-auto"
            style={{
              maxWidth: '1280px',
              paddingLeft: '16px',
              paddingRight: '16px',
              marginTop: '60px'
            }}
          >
            <RelatedContent
              title="Related Articles"
              items={[
                {
                  title: 'Home Credit Loan Settlement in India: A Complete Legal Guide',
                  url: '/resources/home-credit-loan-settlement-guide',
                  description: 'Learn about home credit loan settlement process and legal requirements'
                },
                {
                  title: 'How to Stop Loan Recovery Harassment: Legal Remedies',
                  url: '/resources/stop-loan-recovery-harassment',
                  description: 'Protect yourself from illegal recovery agent harassment'
                },
                {
                  title: 'Personal Loan Settlement',
                  url: '/services/personal-loan-settlement',
                  description: 'Expert personal loan settlement services'
                },
                {
                  title: 'Anti-Harassment Protection',
                  url: '/services/anti-harassment',
                  description: 'Stop recovery agent harassment immediately'
                }
              ]}
            />
          </section>
        </div>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-[100px]">
        <Footer />
      </div>
    </div>
  );
};

export default BlogPostPageClient;
