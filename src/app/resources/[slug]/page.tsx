'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import TableOfContents from '@/components/TableOfContents';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import Link from 'next/link';
import Image from 'next/image';
import { use, useEffect, useState } from 'react';

interface BlogPost {
  id: string;
  title: string;
  subtitle: string;
  date: string;
  image: string;
  description: string;
  faqs: Array<{ question: string; answer: string }>;
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const [isFirefox, setIsFirefox] = useState(false);
  const [openFAQIndex, setOpenFAQIndex] = useState<number | null>(null);
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedBlogs, setRelatedBlogs] = useState<Array<{ image: string; title: string; date: string; slug: string }>>([]);
  
  // Use React's use() hook to unwrap the Promise
  const { slug } = use(params);

  useEffect(() => {
    // Detect Firefox browser
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  useEffect(() => {
    if (!slug) {
      setError('Slug is required');
      setLoading(false);
      return;
    }

    const fetchBlog = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Next.js automatically decodes URL params, but handle it safely
        const cleanSlug = slug.trim();
        
        const response = await fetch(`/api/blogs/${encodeURIComponent(cleanSlug)}`);
        const data = await response.json();
        
        if (data.success && data.blog) {
          const blogImage = data.blog.image || '/sample.png';
          
          // Preload the image immediately when we get the blog data with high priority
          if (blogImage && blogImage !== '/sample.png') {
            // Remove any existing preload link for this image
            const existingLink = document.querySelector(`link[href="${blogImage}"]`);
            if (existingLink) {
              existingLink.remove();
            }
            
            // Create preload link with fetchpriority
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = blogImage;
            link.setAttribute('fetchpriority', 'high');
            link.setAttribute('crossorigin', 'anonymous');
            document.head.appendChild(link);
            
            // Also prefetch the image to start downloading immediately
            const img = new window.Image();
            img.src = blogImage;
            img.fetchPriority = 'high';
          }
          
          setBlogPost({
            id: data.blog.id,
            title: data.blog.title || '',
            subtitle: data.blog.subtitle || '',
            date: data.blog.date || '',
            image: blogImage,
            description: data.blog.description || '',
            faqs: data.blog.faqs || [],
          });
        } else {
          console.error('Blog not found. Response:', data);
          // Check if the response has an error message
          if (data.error) {
            setError(data.error);
          } else if (data.message) {
            setError(data.message);
          } else {
            setError('Blog not found');
          }
        }
      } catch (err) {
        console.error('Error fetching blog:', err);
        setError('Failed to load blog');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  // Fetch related blogs (3 random blogs excluding current one)
  useEffect(() => {
    const fetchRelatedBlogs = async () => {
      try {
        const response = await fetch('/api/blogs');
        const data = await response.json();
        
        if (data.success && data.blogs) {
          // Filter out current blog and format
          const availableBlogs = data.blogs
            .filter((blog: any) => blog.slug && blog.slug.trim() !== '' && blog.slug.trim() !== slug.trim())
            .map((blog: any) => ({
              image: blog.image || '/sample.png',
              title: blog.title || '',
              date: blog.date || '',
              slug: blog.slug || '',
            }));

          // Select 3 random blogs
          const shuffled = [...availableBlogs].sort(() => 0.5 - Math.random());
          const selected = shuffled.slice(0, 3);
          
          setRelatedBlogs(selected);
        }
      } catch (err) {
        console.error('Error fetching related blogs:', err);
        // Set empty array on error
        setRelatedBlogs([]);
      }
    };

    if (slug) {
      fetchRelatedBlogs();
    }
  }, [slug]);

  const toggleFAQ = (index: number) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };

  // Default FAQs if blog doesn't have them
  const defaultFaqs = [
    {
      question: "What is a One-Time Settlement (OTS), and how does CredSettle help me achieve it?",
      answer: "A One-Time Settlement (OTS) is a negotiated agreement where you pay a reduced lump sum to settle your debt. CredSettle negotiates with lenders on your behalf to secure the best possible settlement terms while ensuring RBI compliance."
    },
    {
      question: "Is debt settlement legal? Does it adhere to RBI guidelines?",
      answer: "Yes, debt settlement is completely legal in India. CredSettle ensures all settlements are conducted in accordance with RBI guidelines and regulatory frameworks, protecting your rights throughout the process."
    },
    {
      question: "How does CredSettle stop harassment from recovery agents?",
      answer: "CredSettle provides legal intervention and communication services to stop harassment from recovery agents. We file formal complaints with RBI, NCH, and Cyber Police when necessary, and issue cease and desist notices to protect your rights."
    }
  ];

  const faqs = blogPost?.faqs && blogPost.faqs.length > 0 ? blogPost.faqs : defaultFaqs;

  // Default author info
  const author = {
      name: 'Legal Expert Team',
      title: 'CredSettle Legal Advisory',
      image: '/man1.jpg',
      bio: 'Our team of experienced legal professionals, financial advisors, and debt settlement experts is dedicated to helping individuals navigate debt settlement challenges. With years of combined experience in RBI compliance, debt negotiation, and legal protection, we ensure that every client receives expert guidance tailored to their unique financial situation.'
  };

  // Process HTML content to add IDs to headings and extract headings
  const [processedDescription, setProcessedDescription] = useState<string>('');
  const [headings, setHeadings] = useState<Array<{ id: string; text: string; level: number }>>([]);

  useEffect(() => {
    if (!blogPost || !blogPost.description) {
      setProcessedDescription('');
      setHeadings([]);
      return;
    }

    const processDescription = (html: string) => {
      const headingsList: Array<{ id: string; text: string; level: number }> = [];
      
      // First pass: collect all headings and generate IDs
      const headingRegex = /<h([2-6])([^>]*)>(.*?)<\/h[2-6]>/gi;
      const matches: Array<{ match: RegExpExecArray; level: number; attrs: string; content: string; text: string; id?: string }> = [];
      let match;
      
      while ((match = headingRegex.exec(html)) !== null) {
        const level = parseInt(match[1]);
        const existingAttrs = match[2] || '';
        const content = match[3];
        const text = content.replace(/<[^>]*>/g, '').trim(); // Remove nested HTML tags
        
        if (text) {
          matches.push({ match, level, attrs: existingAttrs, content, text });
        }
      }
      
      // Second pass: generate unique IDs for each heading
      matches.forEach((item, index) => {
        // Generate ID from text
        let id = item.text.toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/^-+|-+$/g, '');
        
        // If ID is empty, generate a fallback ID
        if (!id) {
          id = `heading-${index}`;
        }
        
        // Ensure unique ID
        let uniqueId = id;
        let counter = 1;
        while (headingsList.some(h => h.id === uniqueId)) {
          uniqueId = `${id}-${counter}`;
          counter++;
        }
        
        headingsList.push({ id: uniqueId, text: item.text, level: item.level });
        item.id = uniqueId; // Store ID for replacement
      });
      
      // Third pass: replace headings in reverse order to preserve indices
      let processedHtml = html;
      for (let i = matches.length - 1; i >= 0; i--) {
        const item = matches[i];
        const originalMatch = item.match[0];
        const matchIndex = item.match.index;
        if (matchIndex === undefined || !item.id) continue;
        
        const hasIdAttr = item.attrs.includes('id=');
        const replacement = hasIdAttr 
          ? originalMatch // Keep existing ID if present
          : `<h${item.level} id="${item.id}"${item.attrs}>${item.content}</h${item.level}>`;
        processedHtml = processedHtml.substring(0, matchIndex) + replacement + processedHtml.substring(matchIndex + originalMatch.length);
      }
      
      return { processedHtml, headingsList };
    };

    const { processedHtml, headingsList } = processDescription(blogPost.description);
    setProcessedDescription(processedHtml);
    // Filter out any headings with empty IDs
    setHeadings(headingsList.filter(h => h.id && h.id.trim() !== ''));
  }, [blogPost]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-white mt-6">
        <Navbar />
        <div className="relative z-10 pt-10 md:pt-[50px] flex items-center justify-center min-h-[60vh]">
          <p className="text-[#0C2756]" style={{ fontFamily: 'Poppins' }}>Loading blog...</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="relative min-h-screen bg-white mt-6">
        <Navbar />
        <div className="relative z-10 pt-10 md:pt-[50px] flex items-center justify-center min-h-[60vh]">
          <p className="text-red-600" style={{ fontFamily: 'Poppins' }}>{error || 'Blog not found'}</p>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {/* Background Circle Effect - Chrome/Safari */}
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
      
      {/* Firefox-specific blur effect */}
      {isFirefox && (
        <div 
          className="absolute top-0 left-0"
          style={{
            width: 'clamp(300px, 50vw, 757px)',
            height: 'clamp(300px, 50vw, 757px)',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10" style={{paddingTop: '60px', paddingLeft: '16px', paddingRight: '16px'}}>
        <div className="w-full max-w-8xl px-2 md:px-4 mx-auto">
          {/* Page Heading - Center Aligned */}
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
              {blogPost.title}
            </h1>
            {blogPost.subtitle && (
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
              {blogPost.subtitle}
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
              {blogPost.date}
            </p>
          </div>

          {/* Breadcrumbs */}
          <div className="mb-4 md:mb-6 flex justify-center">
            <Breadcrumbs
              items={[
                { name: 'Home', url: '/' },
                { name: 'Resources', url: '/resources' },
                { name: blogPost.title, url: `/resources/${slug}` }
              ]}
            />
          </div>

          {/* Blog Image - 80% width and height, centered */}
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="w-full md:w-[80%] relative" style={{ maxHeight: '50vh', aspectRatio: '16/9' }}>
              <Image
              src={blogPost.image} 
              alt={blogPost.title}
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

          {/* Table of Contents - Horizontal Scrollable Strip */}
          {headings.length > 0 && (
            <div className="flex justify-center mb-8 md:mb-12">
              <div className="w-full md:w-[80%]">
                <TableOfContents headings={headings} />
              </div>
            </div>
          )}

          {/* Blog Description - Left Aligned */}
          <div className="flex justify-center mb-12 md:mb-16">
            <div 
              className="w-full md:w-[80%] rounded-[20px] md:rounded-[30px] p-5 md:p-8"
              style={{ 
                background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.20) 49.48%, rgba(239, 247, 255, 0.80) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
              }}
            >
              {/* Blog Content */}
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
                dangerouslySetInnerHTML={{ __html: processedDescription || blogPost.description || '' }}
              />
            </div>
          </div>

          {/* Author Section */}
          <section className="flex justify-center mb-12 md:mb-16">
            <div 
              className="p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl w-full md:w-[80%]"
              style={{
                background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
              }}
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-6">
                {/* Author Image */}
                <div className="flex-shrink-0">
                  <img 
                    src={author.image} 
                    alt={author.name} 
                    className="w-20 h-20 md:w-24 md:h-24 lg:w-[120px] lg:h-[120px] rounded-full object-cover"
                  />
                </div>
                
                {/* Author Info */}
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

          {/* Related Blogs Section */}
          <section className="w-full py-8 md:py-12 mb-12 md:mb-16">
            <div className="w-full max-w-7xl mx-auto px-4">
              <h2 
                className="text-center mb-6 md:mb-8 text-2xl md:text-3xl font-bold"
                style={{ 
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: '400'
                }}
              >
                Related Blogs
              </h2>
              {relatedBlogs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {relatedBlogs.map((blog, index) => {
                    if (!blog.slug || blog.slug.trim() === '') return null;
                    const cleanSlug = blog.slug.trim();
                    return (
                    <Link 
                    key={index} 
                      href={`/resources/${cleanSlug}`}
                    className="flex flex-col gap-3 md:gap-4 no-underline hover:opacity-90 transition-opacity"
                  >
                    <div className="w-full h-48 md:h-56 lg:h-64 relative">
                      <Image
                      src={blog.image} 
                      alt={blog.title} 
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover rounded-xl"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI1NicgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nNDAwJyBoZWlnaHQ9JzI1NicgZmlsbD0nI2VmZjknLz48L3N2Zz4="
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 
                        className="text-[#0C2756] font-semibold text-base md:text-lg leading-tight text-left"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {blog.title}
                      </h3>
                      <p 
                        className="text-[rgba(12,39,86,0.7)] text-xs md:text-sm text-left"
                        style={{ fontFamily: 'Poppins' }}
                      >
                        {blog.date}
                      </p>
                    </div>
                  </Link>
                  );
                  })}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-[rgba(12,39,86,0.7)]" style={{ fontFamily: 'Poppins' }}>
                    No related blogs available
                  </p>
              </div>
              )}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="w-full py-8 md:py-12 mt-10 md:mt-[60px] mb-10 md:mb-[60px]">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-14">
                {/* Header and FAQ Items Container */}
                <div className="flex flex-col lg:flex-row items-start gap-4 md:gap-6 lg:gap-[76px] w-full">
                  {/* Left: Header Section */}
                  <div className="flex flex-col items-start gap-4 md:gap-[21px] w-full lg:w-[365px]">
                    <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight font-bold">
                      <span style={{ color: '#0C2756' }}>Have Question?<br className="hidden md:block" /> We've Got </span>
                      <span style={{ color: '#007AFF' }}>Answers.</span>
                    </h2>
                    <p className="text-xs md:text-sm lg:text-[15px] leading-relaxed font-normal">
                      <span style={{ color: '#0C2756' }}>Still have questions? </span>
                      <span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span>
                      <span style={{ color: '#0C2756' }}> anytime.</span>
                    </p>
                  </div>

                  {/* Right: FAQ Items - Aligned to right end */}
                  <div className="w-full lg:w-[800px] lg:ml-auto p-3 md:p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
                    <div className="flex flex-col gap-3 md:gap-4">
                      {faqs.map((faq, index) => (
                        <div
                          key={index}
                          className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                          onClick={() => toggleFAQ(index)}
                        >
                          <div className="flex justify-between items-start gap-3 md:gap-[49px] p-4 md:p-[21px_28px]">
                            <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed font-normal flex-1" style={{ color: '#0C2756' }}>
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
                                style={{
                                  transform: openFAQIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                                }}
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
                              <p className="text-[10px] md:text-xs lg:text-[13px] leading-relaxed font-normal" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
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

          {/* CTA Section */}
          <section className="w-full py-8 md:py-12">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex justify-center items-center w-full rounded-xl px-4 md:px-6 lg:px-3 py-6 md:py-8 lg:py-[63px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="flex flex-col items-center gap-6 md:gap-8 lg:gap-[35px] w-full max-w-[644px]">
                  {/* Text Content */}
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

                  {/* CTA Button */}
                  <button
                    className="px-6 md:px-7 lg:px-[28px] py-3 md:py-3.5 lg:py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                    style={{
                      boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                    }}
                    onClick={() => window.location.href = '/contact'}
                  >
                    <span className="text-xs md:text-sm lg:text-[14px] leading-normal font-normal" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>
                      Get Your Free Consultation
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Related Content */}
          <section
            className="w-full mx-auto"
            style={{ maxWidth: '1280px', paddingLeft: '16px', paddingRight: '16px', marginTop: '60px' }}
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
}

