"use client";
import Link from 'next/link';
import { useMemo, useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import { BANKS_GRID_BANKS, BANKS_GRID_NBFCS, generateBankSlug } from '@/data/banksGridInstitutions';


function isPopularBank(bankName: string): boolean {
  // Normalize bank name for comparison (case-insensitive, handle spaces/special chars)
  const normalized = bankName.toLowerCase().trim();
  
  // Popular banks list - matching variations
  const popularBanks = [
    'axis bank', 'axis',
    'icici bank', 'icici',
    'hdfc bank', 'hdfc',
    'state bank of india', 'sbi',
    'rbl bank', 'rbl',
    'kotak mahindra bank', 'kotak bank', 'kotak',
    'idfc first bank', 'idfc firstbank', 'idfc',
    'yes bank', 'yes',
    'indus ind', 'indusind',
    'kisetsu saison finance', 'kisetsu saison', 'kisetsusaisonfinance',
    'bajaj finance', 'bajaj fin', 'bajaj',
    'early salary', 'earlysalary', 'fibe',
    'smfg india credit', 'smfg',
    'bank of baroda', 'baroda',
    'hero fincorp', 'hero',
    'aditya birla finance', 'aditya birla fin', 'aditya birla',
    'poonawala fin', 'poonawala',
    'tata capital', 'tata'
  ];
  
  return popularBanks.some(popular => normalized === popular || normalized.includes(popular) || popular.includes(normalized));
}

export default function BanksGrid({ serviceType, servicePath }: { serviceType: string; servicePath?: string }) {
  // Normalize service path to strip leading/trailing slashes and any redundant 'services/' prefix
  const cleanServicePath = (servicePath || 'personal-loan-settlement')
    .replace(/^\/+/, '')
    .replace(/^services\//, '')
    .replace(/\/+$/, '');
  
  const banks = BANKS_GRID_BANKS;
  const nbfcs = BANKS_GRID_NBFCS;

  // Use NBFCs list if servicePath is nbfc-loan-settlement, otherwise use combined list
  const institutions = cleanServicePath === 'nbfc-loan-settlement' ? nbfcs : [...banks, ...nbfcs];

  // Search state and debounced query
  const [query, setQuery] = useState('');
  const [debounced, setDebounced] = useState('');
  useEffect(() => {
    const t = setTimeout(() => setDebounced(query.trim().toLowerCase()), 200);
    return () => clearTimeout(t);
  }, [query]);

  const filteredInstitutions = useMemo(() => {
    if (!debounced) return institutions;
    return institutions.filter((name) => name.toLowerCase().includes(debounced));
  }, [institutions, debounced]);

  // Determine search mode
  const isSearching = debounced.length > 0;

  // Split institutions into 4 roughly equal rows (only when not searching)
  const rows = 4;
  const buckets: string[][] = isSearching
    ? [[]]
    : Array.from({ length: rows }, () => []);
  if (!isSearching) {
    filteredInstitutions.forEach((inst, i) => {
      buckets[i % rows].push(inst);
    });
  }

  const baseSliderOptions: any = {
    type: 'loop' as const,
    drag: true,
    focus: 'center' as const,
    perPage: 5,
    perMove: 1,
    autoScroll: { speed: 0.6, pauseOnHover: true, pauseOnFocus: true },
    arrows: false,
    pagination: false,
    gap: '0.75rem',
    breakpoints: {
      1024: { perPage: 4 },
      768: { perPage: 3 },
      640: { perPage: 2 }
    }
  };

  return (
    <section
      className="w-full mx-auto"
      style={{
        maxWidth: '1280px',
        paddingLeft: '19.2px',
        paddingRight: '19.2px',
        marginTop: '36px',
        marginBottom: '36px'
      }}
    >
      {/* Centered Heading */}
      <div className="w-full flex flex-col items-center text-center" style={{ gap: '6px', marginBottom: '20px' }}>
        <h2
          style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontSize: '28px',
            fontWeight: 700,
            lineHeight: '32px'
          }}
        >
          Banks & Financial Institutions We Work With
        </h2>
        <p
          style={{
            color: 'rgba(12, 39, 86, 0.70)',
            fontFamily: 'Poppins',
            fontSize: '13px',
            lineHeight: '18px'
          }}
        >
          {cleanServicePath === 'nbfc-loan-settlement' 
            ? `${serviceType} settlement services with leading NBFCs across India`
            : `${serviceType} settlement services with leading banks and NBFCs across India`}
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full mx-auto" style={{ maxWidth: '720px', marginBottom: '16px' }}>
        <input
          type="text"
          placeholder={`Search ${serviceType} banks/NBFCs...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            width: '100%',
            padding: '12px 16px',
            borderRadius: '24px',
            border: '1px solid rgba(12, 39, 86, 0.15)',
            outline: 'none',
            fontFamily: 'Poppins',
            fontSize: '14px',
            color: '#0C2756',
            background: '#FFFFFF',
            boxShadow: '0 0 0 rgba(0,0,0,0)'
          }}
        />
      </div>

      {/* Institutions Sliders */}
      <div className="flex flex-col" style={{ gap: '8px' }}>
        {/* Search mode: single row, non-looping to avoid clones of the same card */}
        {isSearching && (
          <Splide
            extensions={{ AutoScroll }}
            options={{
              ...baseSliderOptions,
              type: 'slide',
              autoScroll: undefined,
              perPage: 5,
              start: 0
            }}
          >
            {filteredInstitutions.map((institution, index) => {
              const institutionSlug = generateBankSlug(institution);
              const isPopular = isPopularBank(institution);
              return (
                <SplideSlide key={`search-${index}`}>
                  <Link
                    href={`/services/${cleanServicePath}/banks/${institutionSlug}`}
                    className="cursor-pointer transition-all duration-200 hover:opacity-80"
                    style={{
                      borderRadius: '24px',
                      background: isPopular 
                        ? 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)'
                        : 'rgba(239, 247, 255, 0.30)',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                      padding: '12px 10px',
                      minHeight: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <p
                      style={{
                        color: isPopular ? '#FFFFFF' : '#0C2756',
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        fontWeight: 500,
                        lineHeight: '16px',
                        margin: 0
                      }}
                    >
                      {institution}
                    </p>
                  </Link>
                </SplideSlide>
              );
            })}
          </Splide>
        )}

        {/* Default mode: 4 independent rows with staggered motion */}
        {!isSearching && buckets.map((row, rowIdx) => {
          // Stagger each row: alternate directions and vary speeds
          const speedByRow = [0.45, -0.6, 0.35, -0.5];
          const startByRow = [0, 1, 2, 3]; // start offset to desync slides
          const rowOptions = {
            ...baseSliderOptions,
            start: startByRow[rowIdx % startByRow.length],
            autoScroll: { ...baseSliderOptions.autoScroll, speed: speedByRow[rowIdx % speedByRow.length] }
          };
          // Create slight horizontal offset to achieve diagonal leading items
          const leftPad = `${rowIdx * 18}px`;
          return (
            <div key={rowIdx} style={{ paddingLeft: leftPad }}>
              <Splide extensions={{ AutoScroll }} options={rowOptions}>
                {row.map((institution, index) => {
              const institutionSlug = generateBankSlug(institution);
              const isPopular = isPopularBank(institution);
              return (
                <SplideSlide key={`${rowIdx}-${index}`}>
                  <Link
                    href={`/services/${cleanServicePath}/banks/${institutionSlug}`}
                    className="cursor-pointer transition-all duration-200 hover:opacity-80"
                    style={{
                      borderRadius: '24px',
                      background: isPopular 
                        ? 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)'
                        : 'rgba(239, 247, 255, 0.30)',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.05)',
                      padding: '12px 10px',
                      minHeight: '60px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      textDecoration: 'none'
                    }}
                  >
                    <p
                      style={{
                        color: isPopular ? '#FFFFFF' : '#0C2756',
                        fontFamily: 'Poppins',
                        fontSize: '12px',
                        fontWeight: 500,
                        lineHeight: '16px',
                        margin: 0
                      }}
                    >
                      {institution}
                    </p>
                  </Link>
                </SplideSlide>
              );
                })}
              </Splide>
            </div>
          );
        })}
      </div>

      {/* Empty state when no institutions match */}
      {filteredInstitutions.length === 0 && (
        <div className="w-full text-center" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', fontSize: '13px', marginTop: '12px' }}>
          No institutions found. Try another search.
        </div>
      )}
    </section>
  );
}

