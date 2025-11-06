import Link from 'next/link';

const Blogs = () => {
  const blogPosts = [
    {
      slug: "home-credit-loan-settlement-guide",
      image: "/sample.png",
      title: "Home Credit Loan Settlement in India: A Complete Legal Guide",
      date: "October 2, 2025"
    },
    {
      slug: "debt-settlement-laws-rights",
      image: "/sample.png", 
      title: "Understanding Debt Settlement Laws: Your Rights and Protections",
      date: "September 28, 2025"
    },
    {
      slug: "stop-loan-recovery-harassment",
      image: "/sample.png",
      title: "How to Stop Loan Recovery Harassment: Legal Remedies",
      date: "September 25, 2025"
    }
  ];

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

      {/* Mobile Blog Posts - Horizontal Scroll */}
      <div className="md:hidden w-full">
        <h3 className="text-[#0C2756] text-left font-semibold text-xl mb-4 px-2" style={{ fontWeight: 500 }}>
          Latest Blogs
        </h3>
        <div className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide" style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {blogPosts.map((post, index) => (
            <Link
              key={index}
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

      {/* Desktop Blog Posts - Grid */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {blogPosts.map((post, index) => (
          <Link
            key={index}
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
    </section>
  );
};

export default Blogs;
