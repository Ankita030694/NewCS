'use client';

import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function VerticalTableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      let current = '';
      
      const validHeadings = headings.filter(h => h.id && h.id.trim() !== '');
      
      // Check sections
      for (let i = 0; i < validHeadings.length; i++) {
        const element = document.getElementById(validHeadings[i].id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;
          const viewportTop = window.scrollY + 150;
          
          if (viewportTop >= elementTop - 50 && viewportTop < elementBottom) {
             current = validHeadings[i].id;
             break; 
          }
        }
      }
      
      if (!current) {
         // Fallback logic
         for (let i = validHeadings.length - 1; i >= 0; i--) {
            const element = document.getElementById(validHeadings[i].id);
            if (element) {
                const elementTop = element.getBoundingClientRect().top + window.scrollY;
                if (window.scrollY >= elementTop - 200) {
                    current = validHeadings[i].id;
                    break;
                }
            }
         }
      }

      if (current) {
        setActiveId(current);
      }
    };

    const timeoutId = setTimeout(() => {
        handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const scrollToHeading = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <nav className="w-full bg-white rounded-xl border border-gray-200 shadow-sm p-6 max-h-[calc(100vh-120px)] overflow-y-auto custom-scrollbar">
      <h3 className="text-[#0C2756] font-bold mb-4 font-poppins text-lg">Table of Contents</h3>
      <ul className="space-y-3">
        {headings.map((heading) => (
          <li key={heading.id} 
              className={`${heading.level === 3 ? 'pl-4' : ''}`}>
            <a
              href={`#${heading.id}`}
              onClick={(e) => scrollToHeading(heading.id, e)}
              className={`block text-sm transition-colors duration-200 font-poppins leading-5
                ${activeId === heading.id 
                  ? 'text-[#007AFF] font-semibold bg-blue-50 -ml-2 p-2 rounded-lg' 
                  : 'text-gray-600 hover:text-[#0C2756] hover:bg-gray-50 -ml-2 p-2 rounded-lg'
                }`}
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 2px;
        }
      `}</style>
    </nav>
  );
}
