'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { SitemapLink } from './sitemapData';

interface SitemapClientProps {
  initialLinks: SitemapLink[];
}

export default function SitemapClient({ initialLinks }: SitemapClientProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLinks = useMemo(() => {
    if (!searchQuery.trim()) return initialLinks;
    const q = searchQuery.toLowerCase().trim();
    return initialLinks.filter(
      (link) =>
        link.title.toLowerCase().includes(q) ||
        link.href.toLowerCase().includes(q)
    );
  }, [searchQuery, initialLinks]);

  return (
    <div className="relative min-h-screen bg-[#F8FAFC]">
      {/* Hero Header */}
      <section className="relative pt-32 pb-14 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F8FAFC] border-b border-gray-100">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              {initialLinks.length} Curated Query Guides
            </div>
            <span className="text-xs text-gray-500 font-medium">
              Sorted chronologically (Latest additions first)
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            CredSettle Sitemap
          </h1>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl leading-relaxed">
            Browse our comprehensive, hardcoded library of legal defense guides, RBI guidelines, debt settlement procedures, and financial recovery resources.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic, keyword, bank, or query (e.g., recovery, cibil, personal loan)..."
                className="w-full pl-11 pr-10 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm text-sm sm:text-base text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {searchQuery && (
              <p className="mt-2 text-xs sm:text-sm text-gray-500">
                Found <span className="font-semibold text-gray-800">{filteredLinks.length}</span> matching guides
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {filteredLinks.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100 p-8 shadow-sm">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gray-400">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-1">No guides found</h3>
              <p className="text-sm text-gray-500 max-w-sm mx-auto mb-4">
                We couldn&apos;t find any query matching &quot;{searchQuery}&quot;. Try a different keyword or clear the search.
              </p>
              <button
                onClick={() => setSearchQuery('')}
                className="inline-flex items-center px-4 py-2 text-sm font-semibold text-blue-600 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredLinks.map((link, index) => {
                return (
                  <Link
                    key={link.href + '-' + index}
                    href={link.href}
                    className="bg-white border border-gray-200/80 hover:border-blue-500 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <h2 className="text-sm sm:text-base font-semibold text-gray-800 hover:text-blue-600 transition-colors leading-snug line-clamp-3 mb-3">
                      {link.title}
                    </h2>
                    {link.date && (
                      <span className="text-xs text-gray-400 font-medium">
                        {link.date}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
