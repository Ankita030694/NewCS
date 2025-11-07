'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

interface BlogPost {
  id: string;
  slug: string;
  image: string;
  title: string;
  date: string;
}

const Blogs = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch('/api/blogs?page=1&limit=3');
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
            };
          });
          
          setBlogPosts(formattedBlogs);
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
  }, []);

  return (
    <section className="flex flex-col items-center gap-8 md:gap-14 py-12 px-4 overflow-x-hidden w-full max-w-full">
      {/* Header Section */}
      <div className="flex flex-col items-center gap-4 md:gap-[21px] w-full max-w-[610px]">
        <h2 className="text-[#0C2756] text-center font-semibold text-2xl md:text-[34px] leading-tight md:leading-[34px]" style={{ fontWeight: 500 }}>
          CredSettle Blog: Your Resource
        </h2>
        <p className="text-[rgba(12,39,86,0.7)] text-center font-normal text-base md:text-[21px] leading-tight md:leading-[21px] tracking-[-0.21px]">
          Read our latest articles on debt settlement, anti-harassment, and securing your financial future.
        </p>
      </div>

      {/* Loading State */}
      {loading && (
        <div className="w-full flex justify-center items-center py-12">
          <p className="text-[rgba(12,39,86,0.7)] text-base">Loading blogs...</p>
        </div>
      )}

      {/* Error State */}
      {error && !loading && (
        <div className="w-full flex justify-center items-center py-12">
          <p className="text-[rgba(12,39,86,0.7)] text-base">{error}</p>
        </div>
      )}

      {/* Mobile Blog Posts - Horizontal Scroll */}
      {!loading && !error && blogPosts.length > 0 && (
        <div className="md:hidden w-full">
          <h3 className="text-[#0C2756] text-left font-semibold text-xl mb-4 px-2" style={{ fontWeight: 500 }}>
            Latest Blogs
          </h3>
          <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/resources/${post.slug}`}
                className="flex-shrink-0 w-[280px] flex flex-col gap-4 transition-all duration-200 hover:opacity-90 cursor-pointer"
                style={{ scrollSnapAlign: 'start' }}
              >
                {/* Image */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-xl"
                />
                {/* Content */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-[#0C2756] font-semibold text-lg leading-tight text-left">
                    {post.title}
                  </h3>
                  <p className="text-[rgba(12,39,86,0.7)] text-sm text-left">
                    {post.date}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Desktop Blog Posts - Grid */}
      {!loading && !error && blogPosts.length > 0 && (
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              href={`/resources/${post.slug}`}
              className="flex flex-col gap-4 transition-all duration-200 hover:opacity-90 cursor-pointer"
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover rounded-xl"
              />
              
              {/* Content */}
              <div className="flex flex-col gap-2">
                <h3 className="text-[#0C2756] font-semibold text-lg leading-tight text-left">
                  {post.title}
                </h3>
                <p className="text-[rgba(12,39,86,0.7)] text-sm text-left">
                  {post.date}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Empty State */}
      {!loading && !error && blogPosts.length === 0 && (
        <div className="w-full flex justify-center items-center py-12">
          <p className="text-[rgba(12,39,86,0.7)] text-base">No blogs available at the moment.</p>
        </div>
      )}
    </section>
  );
};

export default Blogs;
