import Link from 'next/link';
import Image from 'next/image';
import { unstable_cache } from 'next/cache';
import { collection, getDocs, limit as limitDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/lib/firebase';

interface BlogPost {
  id: string;
  slug: string;
  image: string;
  title: string;
  date: string;
}

const generateSlugFromTitle = (title: string): string =>
  title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');

const fetchRecentBlogs = unstable_cache(
  async (): Promise<BlogPost[]> => {
    try {
      const blogsRef = collection(db, 'blogs');
      let snapshot;

      try {
        const ordered = query(blogsRef, orderBy('date', 'desc'), limitDocs(3));
        snapshot = await getDocs(ordered);
      } catch (orderError) {
        console.warn('Falling back to unordered blogs fetch:', orderError);
        snapshot = await getDocs(blogsRef);
      }

      return snapshot.docs.slice(0, 3).map((doc) => {
        const data = doc.data() ?? {};
        const title = typeof data.title === 'string' ? data.title : '';
        const id = doc.id;
        let slug = typeof data.slug === 'string' && data.slug.trim() !== ''
          ? data.slug.trim()
          : generateSlugFromTitle(title);

        if (!slug) {
          slug = id;
        }

        return {
          id,
          slug,
          image: typeof data.image === 'string' && data.image.trim() !== '' ? data.image : '/sample.png',
          title,
          date: typeof data.date === 'string' ? data.date : '',
        };
      });
    } catch (error) {
      console.error('Error fetching recent blogs for homepage:', error);
      return [];
    }
  },
  ['homepage-recent-blogs'],
  { revalidate: 600 }
);

export default async function Blogs() {
  const blogPosts = await fetchRecentBlogs();
  const hasBlogs = blogPosts.length > 0;

  return (
    <section className="flex flex-col items-center gap-8 md:gap-14 py-12 px-4 overflow-x-hidden w-full max-w-full">
      <div className="flex flex-col items-center gap-4 md:gap-[21px] w-full max-w-[610px]">
        <h2
          className="text-[#0C2756] text-center font-semibold text-2xl md:text-[34px] leading-tight md:leading-[34px]"
          style={{ fontWeight: 500 }}
        >
          CredSettle Blog: Your Resource
        </h2>
        <p className="text-[rgba(12,39,86,0.7)] text-center font-normal text-base md:text-[21px] leading-tight md:leading-[21px] tracking-[-0.21px]">
          Read our latest articles on debt settlement, anti-harassment, and securing your financial future.
        </p>
      </div>

      {!hasBlogs && (
        <div className="w-full flex justify-center items-center py-12">
          <p className="text-[rgba(12,39,86,0.7)] text-base">No blogs available at the moment.</p>
        </div>
      )}

      {hasBlogs && (
        <>
          <div className="md:hidden w-full">
            <h3
              className="text-[#0C2756] text-left font-semibold text-xl mb-4 px-2"
              style={{ fontWeight: 500 }}
            >
              Latest Blogs
            </h3>
            <div
              className="flex overflow-x-auto gap-4 pb-4 px-2 scrollbar-hide"
              style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  href={`/resources/${post.slug}`}
                  className="flex-shrink-0 w-[280px] flex flex-col gap-4 transition-all duration-200 hover:opacity-90 cursor-pointer"
                  style={{ scrollSnapAlign: 'start' }}
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-xl"
                      sizes="(max-width: 768px) 280px"
                      priority
                    />
                  </div>
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

          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/resources/${post.slug}`}
                className="flex flex-col gap-4 transition-all duration-200 hover:opacity-90 cursor-pointer"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover rounded-xl"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  />
                </div>
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
        </>
      )}
    </section>
  );
}
