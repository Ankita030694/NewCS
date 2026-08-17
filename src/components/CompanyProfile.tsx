import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function CompanyProfile() {
  const mediaLogos = [
    { src: '/media/media1.svg', alt: 'Media 1' },
    { src: '/media/media2.svg', alt: 'Media 2' },
    { src: '/media/media3.svg', alt: 'Media 3' },
    { src: '/media/media4.svg', alt: 'Media 4' },
  ];

  const solutions = [
    { title: 'Settle your loans', href: '/loan-settlement' },
    { title: 'Reduce your EMIs', href: '/services/personal-loan-settlement' },
    { title: 'Eliminate your loans', href: '/services/credit-card-settlement' },
    { title: 'Support against Harassment', href: '/services/anti-harassment' },
    { title: 'Improve your Credit Score', href: '/credit-score-repair' },
    { title: 'Business Loan Relief', href: '/services/business-loan-settlement' },
  ];

  return (
    <div className="mt-12 rounded-[20px] border border-[#BFE0FF] bg-white p-6 shadow-sm md:rounded-3xl md:p-10">
      <div className="mb-6 flex items-center">
        <Image 
          src="/credsettle-logo-black.png" 
          alt="CredSettle Logo" 
          width={150} 
          height={40} 
          className="object-contain" 
        />
      </div>
      
      <p className="mb-10 text-[15px] leading-relaxed text-[#4E4E4E] md:text-[16px]">
        CredSettle is India's trusted loan management platform. Founded to help people break free from the cycle of debt, CredSettle has counselled countless individuals struggling with personal loans, credit cards, and app loans. We ensure you get ethical, RBI-compliant resolution strategies. CredSettle charges fees only on successful settlement, not upfront. CredSettle does not handle secured loans (home loans, car loans, gold loans).
      </p>
      
      <div className="mb-12">
        <h3 className="mb-6 text-center text-[20px] font-bold text-[#004479] md:text-[24px]">
          Media Mentions
        </h3>
        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden bg-white py-4">
          <div className="flex w-max animate-[slide-right-seamless_30s_linear_infinite] items-center space-x-12 px-6 hover:[animation-play-state:paused]">
            {[...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos, ...mediaLogos].map((logo, index) => (
              <div key={index} className="flex h-12 w-32 shrink-0 items-center justify-center grayscale transition-all duration-300 hover:grayscale-0 md:h-16 md:w-40">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={160}
                  height={60}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="rounded-2xl bg-[#F0F7FF] p-6 md:p-8 border border-[#CBE0F5] shadow-sm">
        <h3 className="mb-6 text-[18px] font-bold text-[#004479] md:text-[20px] flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-[#007AFF]"></span>
          <span>Our Solutions:</span>
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {solutions.map((solution, idx) => (
            <Link
              key={idx}
              href={solution.href}
              className="flex min-h-[70px] items-center justify-center rounded-xl border border-[#007AFF]/30 bg-white p-4 text-center text-[15px] font-bold text-[#004479] shadow-sm transition-all duration-200 hover:bg-[#007AFF] hover:text-white hover:border-[#007AFF] hover:shadow-md hover:-translate-y-0.5"
            >
              {solution.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
