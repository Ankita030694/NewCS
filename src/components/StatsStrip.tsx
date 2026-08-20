import React from 'react';

export default function StatsStrip() {
  return (
    <div className="bg-gradient-to-r from-blue-50/90 via-blue-50/50 to-gray-50/90 py-5 md:py-6 border-b border-gray-200/80">
      <div className="max-w-[1440px] mx-auto px-4">
        <div className="flex flex-wrap justify-around items-center text-center gap-4 md:gap-2">
          {/* Column 1: Legal Experience */}
          <div className="flex flex-col items-center flex-1 min-w-[130px]">
            <span className="text-2xl sm:text-3xl font-black text-blue-800 tracking-tight">10+ Years</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-0.5">LEGAL EXPERIENCE</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-300"></div>

          {/* Column 2: Cases Handled */}
          <div className="flex flex-col items-center flex-1 min-w-[130px]">
            <span className="text-2xl sm:text-3xl font-black text-blue-800 tracking-tight">15,000+</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-0.5">CASES HANDLED</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-300"></div>

          {/* Column 3: Debt Settled */}
          <div className="flex flex-col items-center flex-1 min-w-[130px]">
            <span className="text-2xl sm:text-3xl font-black text-blue-800 tracking-tight">₹500Cr+</span>
            <span className="text-xs sm:text-sm font-medium text-gray-600 uppercase tracking-wide mt-0.5">DEBT SETTLED</span>
          </div>

          <div className="hidden md:block w-px h-10 bg-gray-300"></div>

          {/* Column 4: Google Rating */}
          <div className="flex items-center justify-center flex-1 min-w-[170px] gap-2.5">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" className="w-8 h-8 sm:w-9 sm:h-9 flex-shrink-0" aria-label="Google">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              <span className="text-2xl sm:text-3xl font-bold text-[#0A3F6D] tracking-tight leading-none pt-0.5">4.7/5</span>
            </div>
            <div className="flex flex-col items-start text-left text-xs sm:text-sm text-gray-600 font-normal leading-tight">
              <span>3,000+</span>
              <span>Reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
