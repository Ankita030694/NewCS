"use client";

import Navbar from '@/components/Navbar';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  image: string;
  subtitle?: string;
}

export default function BlogPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 15,
    total: 0,
    totalPages: 0,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const blogSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/blogs?page=${currentPage}&limit=15`);
        const data = await response.json();
        
        if (data.success && data.blogs) {
          // Helper function to generate slug from title
          const generateSlugFromTitle = (title: string): string => {
            return title
              .toLowerCase()
              .trim()
              .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
              .replace(/\s+/g, '-') // Replace spaces with hyphens
              .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
              .replace(/^-+|-+$/g, ''); // Remove leading/trailing hyphens
          };
          
          const formattedBlogs = data.blogs.map((blog: any) => {
            // Generate slug from title if missing
            let slug = blog.slug && blog.slug.trim() !== '' 
              ? blog.slug.trim() 
              : generateSlugFromTitle(blog.title || '');
            
            // If still no slug, use blog ID as fallback
            if (!slug) {
              slug = blog.id || `blog-${Date.now()}`;
            }
            
            return {
              id: blog.id,
              title: blog.title || '',
              date: blog.date || '',
              slug: slug,
              image: blog.image || '/sample.png',
              subtitle: blog.subtitle || '',
              created: blog.created || null,
            };
          });
          
          setBlogPosts(formattedBlogs);
          
          // Update pagination state
          if (data.pagination) {
            setPagination(data.pagination);
          }
          
          // Scroll to top after blogs are loaded
          setTimeout(() => {
            const topElement = document.getElementById('blog-content-top');
            if (topElement) {
              topElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }, 100);
        } else {
          setError('Failed to fetch blogs');
        }
      } catch (err) {
        console.error('Error fetching blogs:', err);
        setError('Failed to load blogs');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

  const handlePageChange = (page: number, e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    
    if (page >= 1 && page <= pagination.totalPages && page !== currentPage) {
      // Scroll to top immediately when page number is clicked
      const topElement = document.getElementById('blog-content-top');
      if (topElement) {
        topElement.scrollIntoView({ behavior: 'instant', block: 'start' });
      } else {
        window.scrollTo({ top: 0, behavior: 'instant' });
      }
      
      // Then set the page which will trigger the fetch
      setCurrentPage(page);
    }
  };


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
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}

      <Navbar />

      <div id="blog-content-top" className="relative z-10 pt-10 md:pt-[50px] pl-4 md:pl-[12.96px] pr-4 md:pr-[12.96px]">
        <div className="container mx-auto px-4">
          {/* Left: Hero Content only, aligned under navbar logo */}
          <div className="flex-shrink-0 w-full md:w-[700px]">
             
              <h3
                className="mb-4 md:mb-6"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: 'clamp(28px, 5vw, 45px)',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '1.2'
                }}
              >
                The Debt-Free Knowledge<br className="hidden md:block" />
                Hub
              </h3>
              <p
                className="mb-4 md:mb-6 text-base md:text-lg lg:text-xl"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '1.4'
                }}
              >
                Insights, strategies, and legal guidance to help you master your finances and secure your future.
              </p>
          </div>
        </div>

        {/* Blog Grid */}
        <section ref={blogSectionRef} className="w-full mt-8 md:mt-12 lg:mt-[60px]">
          <div className="container mx-auto px-4">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-[#0C2756]" style={{ fontFamily: 'Poppins' }}>Loading blogs...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <p className="text-red-600" style={{ fontFamily: 'Poppins' }}>{error}</p>
              </div>
            ) : blogPosts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-[#0C2756]" style={{ fontFamily: 'Poppins' }}>No blogs available</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {blogPosts.map((post, idx) => {
                  // Ensure slug is valid
                  if (!post.slug || post.slug.trim() === '') {
                    if (process.env.NODE_ENV !== 'production') {
                      console.warn('Blog post missing slug:', post);
                    }
                    return null;
                  }
                  const cleanSlug = post.slug.trim();
                  return (
                  <Link 
                    key={post.id} 
                    href={`/resources/${cleanSlug}`}
                    className="flex flex-col gap-3 md:gap-4 no-underline hover:opacity-90 transition-opacity cursor-pointer"
                  >
                    <div className="w-full h-48 md:h-56 lg:h-64 relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover rounded-xl"
                        placeholder="blur"
                        blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMjQwJyBoZWlnaHQ9JzE2MCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48cmVjdCB3aWR0aD0nMjQwJyBoZWlnaHQ9JzE2MCcgZmlsbD0nI2VmZjknLz48L3N2Zz4="
                        priority={currentPage === 1 && idx < 3}
                      />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3 className="text-[#0C2756] font-semibold text-base md:text-lg leading-tight text-left" style={{ fontFamily: 'Poppins' }}>{post.title}</h3>
                      <p className="text-[rgba(12,39,86,0.7)] text-xs md:text-sm text-left" style={{ fontFamily: 'Poppins' }}>{post.date}</p>
                    </div>
                  </Link>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* Pagination */}
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
                  // Show all pages if 7 or fewer
                  for (let i = 1; i <= totalPages; i++) {
                    pages.push(i);
                  }
                } else {
                  if (currentPage <= 3) {
                    // Show first 5 pages, then ellipsis, then last
                    for (let i = 1; i <= 5; i++) {
                      pages.push(i);
                    }
                    pages.push('ellipsis-right');
                    pages.push(totalPages);
                  } else if (currentPage >= totalPages - 2) {
                    // Show first, ellipsis, then last 5 pages
                    pages.push(1);
                    pages.push('ellipsis-left');
                    for (let i = totalPages - 4; i <= totalPages; i++) {
                      pages.push(i);
                    }
                  } else {
                    // Show first, ellipsis, current-1, current, current+1, ellipsis, last
                    pages.push(1);
                    pages.push('ellipsis-left');
                    pages.push(currentPage - 1);
                    pages.push(currentPage);
                    pages.push(currentPage + 1);
                    pages.push('ellipsis-right');
                    pages.push(totalPages);
                  }
                }
                
                // Remove duplicate ellipsis
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
                        fontWeight: pageNum === currentPage ? '600' : '400',
                        cursor: 'pointer',
                        border: pageNum === currentPage ? 'none' : '1px solid rgba(12, 39, 86, 0.20)',
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

        {/* FAQ */}
        <div className="mt-12 md:mt-16 lg:mt-[100px]">
          <FAQ />
        </div>
      </div>

      <div className="mt-12 md:mt-16 lg:mt-[100px]">
        <Footer />
      </div>
    </div>
  );
}
