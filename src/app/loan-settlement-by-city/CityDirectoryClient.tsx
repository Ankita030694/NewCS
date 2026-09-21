"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";

interface LocationItem {
  slug: string;
  name: string;
}

interface CityDirectoryClientProps {
  locations: LocationItem[];
}

export default function CityDirectoryClient({ locations }: CityDirectoryClientProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(60);

  const filteredLocations = useMemo(() => {
    if (!searchQuery.trim()) {
      return locations;
    }
    const q = searchQuery.toLowerCase().trim();
    return locations.filter(
      (loc) => loc.name.toLowerCase().includes(q) || loc.slug.toLowerCase().includes(q)
    );
  }, [locations, searchQuery]);

  const displayedLocations = useMemo(() => {
    if (searchQuery.trim()) {
      return filteredLocations;
    }
    return filteredLocations.slice(0, visibleCount);
  }, [filteredLocations, searchQuery, visibleCount]);

  const hasMore = !searchQuery.trim() && visibleCount < filteredLocations.length;

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 md:p-10 border border-gray-100">
      {/* Header and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-gray-100 pb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 tracking-tight">
            Find Loan Settlement Lawyers by City
          </h2>
          <p className="text-sm text-gray-500 mt-1">
            Search or browse through legal debt relief networks across India
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-72">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your city or district..."
              className="w-full pl-9 pr-4 py-2.5 text-sm bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all text-gray-800 placeholder-gray-400"
            />
            <svg
              className="w-4 h-4 text-gray-400 absolute left-3 top-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-3 text-xs text-gray-400 hover:text-gray-600 font-semibold"
              >
                Clear
              </button>
            )}
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 bg-blue-50 rounded-xl text-xs font-bold text-blue-700 border border-blue-100 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            {filteredLocations.length} CITIES
          </div>
        </div>
      </div>

      {/* City Links Grid */}
      {displayedLocations.length === 0 ? (
        <div className="py-12 text-center text-gray-500">
          <p className="text-lg font-medium text-gray-700">No matching city found</p>
          <p className="text-sm mt-1">
            Don't worry, CredSettle operates pan-India. You can still consult our legal panel directly.
          </p>
          <Link
            href="/contact"
            className="inline-block mt-4 px-6 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold hover:bg-blue-700 transition"
          >
            Contact Pan-India Support
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
          {displayedLocations.map((loc) => (
            <Link
              key={loc.slug}
              href={`/loan-settlement-by-city/${loc.slug}`}
              className="group flex items-center justify-between p-3 border border-gray-100 rounded-xl hover:border-blue-500 hover:bg-blue-50/70 transition-all duration-200 text-sm font-medium text-gray-700 hover:text-blue-700 shadow-sm hover:shadow"
            >
              <span className="truncate">{loc.name}</span>
              <span className="text-gray-300 group-hover:text-blue-500 transition-colors ml-1.5 flex-shrink-0 font-bold">
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      )}

      {/* Show More Button */}
      {hasMore && (
        <div className="mt-8 text-center pt-6 border-t border-gray-100">
          <button
            type="button"
            onClick={() => setVisibleCount((prev) => Math.min(prev + 120, filteredLocations.length))}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-blue-50 text-blue-700 font-bold text-sm hover:bg-blue-100 transition shadow-sm border border-blue-200"
          >
            <span>Load More Cities ({filteredLocations.length - visibleCount} remaining)</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => setVisibleCount(filteredLocations.length)}
            className="ml-3 text-xs text-gray-500 hover:text-blue-600 underline font-medium cursor-pointer"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
}
