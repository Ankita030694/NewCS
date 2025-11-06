'use client';

import { useState, useEffect } from 'react';

interface TableOfContentsProps {
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // Offset for navbar + padding

      // Find the current section based on scroll position
      let current = '';
      let currentElementTop = -1;
      
      // Filter out headings with empty IDs
      const validHeadings = headings.filter(h => h.id && h.id.trim() !== '');
      
      // Check all sections and find the one that's currently in view
      for (let i = 0; i < validHeadings.length; i++) {
        const element = document.getElementById(validHeadings[i].id);
        if (element) {
          const elementTop = element.getBoundingClientRect().top + window.scrollY;
          const elementBottom = elementTop + element.offsetHeight;
          const viewportTop = window.scrollY + 150;
          
          // Check if the section is currently in the viewport
          if (viewportTop >= elementTop - 100 && viewportTop < elementBottom) {
            // This section is in view, but we want the one closest to the top
            if (currentElementTop === -1 || elementTop < currentElementTop) {
              current = validHeadings[i].id;
              currentElementTop = elementTop;
            }
          }
        } else {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`TableOfContents: Element not found for id: ${validHeadings[i].id}`);
          }
        }
      }
      
      // If no section found in viewport, find the one we've scrolled past
      if (!current) {
        for (let i = validHeadings.length - 1; i >= 0; i--) {
          const element = document.getElementById(validHeadings[i].id);
          if (element) {
            const elementTop = element.getBoundingClientRect().top + window.scrollY;
            if (scrollPosition >= elementTop - 100) {
              current = validHeadings[i].id;
              break;
            }
          }
        }
      }

      // If no section found, use the first one
      if (!current && validHeadings.length > 0) {
        current = validHeadings[0].id;
      }

      // Only update if different to prevent unnecessary re-renders
      setActiveId((prevId) => {
        if (prevId !== current) {
          return current;
        }
        return prevId;
      });
    };

    // Wait for DOM to be ready
    const timeoutId = setTimeout(() => {
      handleScroll();
    }, 100);

    // Listen to scroll events
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [headings]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navbar
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
    <div
      className="flex justify-center"
      style={{
        background: 'rgba(239, 247, 255, 0.98)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        padding: '16px 0',
        boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.10)',
        marginBottom: '24px',
        width: '100%',
        borderRadius: '12px',
      }}
    >
      <div style={{ width: '100%' }}>
      {/* Title */}
      <h3
        style={{
          color: '#0C2756',
          fontFamily: 'Poppins',
          fontSize: '16px',
          fontWeight: 600,
          marginBottom: '12px',
          paddingLeft: '16px',
          paddingRight: '16px'
        }}
      >
        Table of Contents
      </h3>
      
      {/* Horizontal Scrollable Navigation */}
      <div className="w-full overflow-x-auto">
        <nav className="flex gap-3 px-4" style={{ minWidth: 'max-content' }}>
          {headings.filter(h => h.id && h.id.trim() !== '').map((heading, index) => (
            <button
              key={heading.id || `heading-${index}`}
              onClick={() => scrollToHeading(heading.id)}
              className="flex-shrink-0 px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap"
              style={{
                color: activeId === heading.id ? '#FFFFFF' : 'rgba(12, 39, 86, 0.70)',
                background: activeId === heading.id ? '#007AFF' : 'rgba(239, 247, 255, 0.80)',
                fontFamily: 'Poppins',
                fontSize: heading.level === 2 ? '14px' : '13px',
                fontWeight: activeId === heading.id ? 600 : 400,
                border: activeId === heading.id ? 'none' : '1px solid rgba(12, 39, 86, 0.20)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {heading.text}
            </button>
          ))}
        </nav>
      </div>
      </div>
    </div>
  );
}

