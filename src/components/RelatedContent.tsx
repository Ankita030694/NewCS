import Link from 'next/link';

interface RelatedContentItem {
  title: string;
  url: string;
  description?: string;
}

interface RelatedContentProps {
  title?: string;
  items: RelatedContentItem[];
}

export default function RelatedContent({ title = "Related Content", items }: RelatedContentProps) {
  if (items.length === 0) return null;

  return (
    <section className="mt-8 md:mt-12 py-6 md:py-8" style={{ borderTop: '1px solid rgba(12, 39, 86, 0.1)' }}>
      <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6" style={{ color: '#0C2756' }}>
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {items.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="block p-4 rounded-lg transition-all duration-200 hover:shadow-md"
            style={{
              background: '#EFF7FF',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)'
            }}
          >
            <h3 className="text-base md:text-lg font-semibold mb-2" style={{ color: '#0C2756' }}>
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
                {item.description}
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}




