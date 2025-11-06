import Link from 'next/link';
import Script from 'next/script';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate breadcrumb schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://www.credsettle.com${item.url}`
    }))
  };

  return (
    <>
      {/* Breadcrumb Schema */}
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Breadcrumb UI */}
      <nav aria-label="Breadcrumb" className="mb-4 md:mb-6">
        <ol className="flex flex-wrap items-center justify-center gap-2 text-sm" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
          {items.map((item, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && (
                <span className="mx-2" style={{ color: 'rgba(12, 39, 86, 0.5)' }}>/</span>
              )}
              {index === items.length - 1 ? (
                <span className="font-medium" style={{ color: '#0C2756' }}>{item.name}</span>
              ) : (
                <Link
                  href={item.url}
                  className="hover:text-[#007AFF] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}


