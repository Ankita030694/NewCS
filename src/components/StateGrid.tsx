import React from 'react';
import Link from 'next/link';
import { statesData } from '@/data/statesData';

export default function StateGrid({ bankSlug }: { bankSlug: string }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {statesData.map((state) => (
        <Link 
          key={state.slug} 
          href={`/credit-card-settlement/${bankSlug}/${state.slug}`}
          className="p-4 bg-white border border-gray-200 rounded-xl hover:shadow-md transition-shadow flex items-center justify-between group"
        >
          <span className="font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
            {state.name}
          </span>
          <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      ))}
    </div>
  );
}
