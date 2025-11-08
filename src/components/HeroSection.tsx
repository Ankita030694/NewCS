'use client';
import { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';

// Hamburger Icon Component
const HamburgerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="20" viewBox="0 0 32 20" fill="none">
    <path fillRule="evenodd" clipRule="evenodd" d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0H30.5C30.8978 0 31.2794 0.158035 31.5607 0.43934C31.842 0.720644 32 1.10218 32 1.5C32 1.89782 31.842 2.27936 31.5607 2.56066C31.2794 2.84196 30.8978 3 30.5 3H1.5C1.10218 3 0.720644 2.84196 0.43934 2.56066C0.158035 2.27936 0 1.89782 0 1.5ZM0 10C0 9.60218 0.158035 9.22064 0.43934 8.93934C0.720644 8.65804 1.10218 8.5 1.5 8.5H30.5C30.8978 8.5 31.2794 8.65804 31.5607 8.93934C31.842 9.22064 32 9.60218 32 10C32 10.3978 31.842 10.7794 31.5607 11.0607C31.2794 11.342 30.8978 11.5 30.5 11.5H1.5C1.10218 11.5 0.720644 11.342 0.43934 11.0607C0.158035 10.7794 0 10.3978 0 10ZM1.5 17C1.10218 17 0.720644 17.158 0.43934 17.4393C0.158035 17.7206 0 18.1022 0 18.5C0 18.8978 0.158035 19.2794 0.43934 19.5607C0.720644 19.842 1.10218 20 1.5 20H30.5C30.8978 20 31.2794 19.842 31.5607 19.5607C31.842 19.2794 32 18.8978 32 18.5C32 18.1022 31.842 17.7206 31.5607 17.4393C31.2794 17.158 30.8978 17 30.5 17H1.5Z" fill="currentColor"/>
  </svg>
);

// Close/X Icon Component
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  // Generate sequential bank indices initially (for SSR)
  const generateBankIndices = () => {
    const indices = [];
    for (let i = 1; i <= 83; i++) {
      indices.push(i);
    }
    return indices;
  };
  
  const [bankIndices, setBankIndices] = useState(generateBankIndices());
  
  // Shuffle on client side only
  useEffect(() => {
    setBankIndices(prev => [...prev].sort(() => Math.random() - 0.5));
  }, []);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{paddingTop: '16.2px', backgroundImage: 'url(/hero-bg.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div
        style={{
          position: 'relative',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 9999,
          pointerEvents: 'auto'
        }}
      >
          <nav className="w-full bg-transparent">
            <div className="container mx-auto px-3 md:px-[12.96px] py-3 md:py-[12.96px]">
              <div className="flex justify-between items-center">
                {/* Left Column - Logo */}
                <div className="flex-shrink-0">
                  <a href="/" onClick={closeMenu}>
                    <img src="/credsettle-logo.svg" alt="CredSettle Logo" className="h-8 md:h-[38.88px]" />
                  </a>
                </div>
                
                {/* Desktop Navigation - Hidden on Mobile */}
                <div className="hidden md:flex" style={{gap: '38.88px'}}>
                  {navItems.map((item) => (
                    <a 
                      key={item.href}
                      href={item.href} 
                      className="text-white hover:text-black transition-colors duration-200" 
                      style={{ fontWeight: 500, fontSize: '16.2px' }}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
                
                {/* Right Column - Desktop Register Button / Mobile Hamburger */}
                <div className="flex-shrink-0 flex items-center gap-4">
                  <a href="/contact" className="hidden md:flex">
                  {/* Desktop Register Button - Hidden on Mobile */}
                  <button
                    className="hidden md:flex bg-[#FFFFFF] text-[#0C2756] font-medium transition-colors duration-200 hover:bg-gray-100"
                    style={{
                      paddingLeft: '16.2px',
                      paddingRight: '16.2px',
                      paddingTop: '8.1px',
                      paddingBottom: '8.1px',
                      fontSize: '14.58px',
                      borderRadius: '32.4px',
                      boxShadow:
                        "0 -4.68px 12.06px 0 rgba(9, 9, 9, 0.30) inset, 0 4.68px 12.06px 0 rgba(9, 9, 9, 0.30) inset"
                    }}
                    onClick={() => {
                      const element = document.querySelector('a[href="#"] + a[href="#"] + a[href="#"] + a[href="#"] + a[href="#"]');
                      if (element) {
                        (element as HTMLElement).click();
                      }
                    }}
                  >
                    Register now
                  </button>
                  </a>

                  {/* Mobile Hamburger Menu Button */}
                  <button
                    onClick={toggleMenu}
                    className="md:hidden text-white focus:outline-none"
                    aria-label="Toggle menu"
                  >
                    {isMenuOpen ? (
                      <CloseIcon />
                    ) : (
                      <div className="w-8 h-5">
                        <HamburgerIcon />
                      </div>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 z-[10000] overflow-y-auto overflow-x-hidden transition-all duration-500 ease-out ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
          style={{
            background: 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)'
          }}
        >
          <div className="min-h-screen flex flex-col">
            {/* Top Section - Logo and Close Button */}
            <div className={`flex justify-between items-center px-6 pt-6 pb-8 transition-all duration-500 delay-100 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
            }`}>
              <a href="/" onClick={closeMenu}>
                <img src="/credsettle-logo-black.svg" alt="CredSettle Logo" className="h-8 brightness-0 invert" />
              </a>
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none w-6 h-6 transition-opacity hover:opacity-70"
                aria-label="Close menu"
              >
                <CloseIcon />
              </button>
            </div>

            {/* Navigation Items - Left Aligned */}
            <div className="flex-1 flex flex-col justify-start px-6 pt-8">
              {navItems.map((item, index) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`text-white mb-8 hover:opacity-80 transition-all duration-500 ${
                    isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                  }`}
                  style={{
                    fontFamily: 'Poppins',
                    fontSize: '40px',
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: '40px',
                    transitionDelay: `${150 + index * 50}ms`
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* Bottom Section - CredSettle Text */}
            <div className={`w-full px-6 -pb-12 mt-auto overflow-hidden overflow-x-hidden -mb-4 transition-all duration-700 delay-300 ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h2 
                className="text-center text-5xl md:text-7xl lg:text-[200px] font-normal leading-none text-white -mb-12 md:-mb-16 lg:-mb-20 overflow-x-hidden"
                style={{ 
                  margin: 0,
                  padding: 0,
                  display: 'block',
                  height: 'auto',
                  position: 'relative',
                  bottom: 0,
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}
              >
                CredSettle
              </h2>
            </div>
          </div>
        </div>
    
    {/* Centered Hero Text */}
    <div className="absolute inset-0 flex items-center justify-center px-4 md:px-[16.2px]" style={{ transform: 'translateY(-4.5%)', zIndex: 1, pointerEvents: 'none' }}>
      <div className="flex flex-col items-center gap-4 md:gap-[32.4px]" style={{pointerEvents: 'auto' }}>
        <div
          className="rounded-[32.4px] px-3 py-1.5 md:px-[16.2px] md:py-[6.48px]"
          style={{
            background: '#FFFFFF',
            boxShadow: '0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.10) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.10) inset, 0 0.9px 15.93px 0 rgba(12, 39, 86, 0.70)',
            backdropFilter: 'blur(11.16px)'
          }}
        >
          <h1 className="text-black font-medium text-center text-[15px] md:text-[12.96px]">Expert Loan Settlement Company in India 🇮🇳
          </h1>
        </div>
        <div
          className="rounded-[32.4px] px-3 py-2 md:px-[16.2px] md:py-[12.96px]"
          style={{
          }}
        >
          <p className="text-white font-bold text-center max-w-5xl text-xl md:text-4xl" style={{ fontWeight: 500, lineHeight: '1.7' }}>
            Facing <span 
              className="inline-block rounded-[32.4px] px-2 py-[0.1px] md:px-[13.2px] md:py-[0.48px]"
              style={{ 
                color: 'rgb(226, 48, 28)',
              }}
            >Loan Recovery calls? </span> Get peace of mind with CredSettle, India's most trusted <br /> Loan Settlement Company.
          </p>
        </div>
        <a
          href="/contact"
          className="bg-[#0044bc] text-white font-light px-9 py-3 md:px-[19.44px] md:py-[6.48px] text-lg md:text-lg rounded-[32.4px] inline-block"
          style={{
            boxShadow:
              "0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset"
          }}
        >
          Register Now
        </a>
      </div>
       {/* Mobile Banks Slider at Bottom */}
    <div className="block md:hidden absolute bottom-0 left-0 right-0 w-full" style={{paddingLeft: '16px', paddingRight: '16px', paddingBottom: '24px'}}>
      <div 
        className="w-full flex flex-col items-center justify-center"
        style={{
          borderRadius: '24px',
          background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%), #EFF7FF',
          boxShadow: '3.6px 3.6px 22.41px 0 rgba(12, 39, 86, 0.25)',
          padding: '16px'
        }}
      >
        <h2 className="font-bold text-center text-gray-800 mb-4" style={{fontSize: '16px'}}>
          Settlements Achieved With Banks
        </h2>
        
        {/* Sliding Bank Logos using Splide */}
        <div className="w-full">
          <Splide
            extensions={{ AutoScroll }}
            options={{
              type: 'loop',
              drag: false,
              focus: 'center',
              perPage: 3,
              perMove: 1,
              autoScroll: {
                speed: 0.45,
                pauseOnHover: false,
                pauseOnFocus: false,
              },
              arrows: false,
              pagination: false,
              gap: '1rem',
            }}
          >
            {bankIndices.map((bankIndex, i) => (
              <SplideSlide key={i}>
                <div className="flex justify-center items-center">
                  <img
                    src={`/banks/${bankIndex}.svg`}
                    alt={`Bank or NBFC Logo ${bankIndex} - CredSettle Loan Settlement Partner`}
                    className="opacity-100"
                    style={{height: '28px'}}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </div>
    </div>

    {/* 3-Column Layout at Bottom - Hidden on Mobile */}
    <div className="hidden md:block absolute bottom-0 left-0 right-0 overflow-x-hidden" style={{paddingLeft: '25.92px', paddingRight: '25.92px', paddingTop: '25.92px', paddingBottom: '25.92px'}}>
      <div className="flex max-w-8xl" style={{gap: '19.44px', paddingLeft: '32.4px', paddingRight: '32.4px'}}>
        {/* 1st Column - 25% width - Reviews */}
        <div className="w-1/4" style={{display: 'flex', flexDirection: 'column', gap: '12.96px'}}>
          {/* First Review Row */}
          <div className="bg-white flex" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
            <div className="w-1/2 flex justify-center items-center">
              <img src="/ggle.png" alt="Google Reviews - CredSettle" style={{height: '29.16px'}} />
            </div>
            <div className="w-1/2 flex flex-col" style={{gap: '6.48px'}}>
              <div className="flex justify-center items-center" style={{gap: '6.48px'}}>
                <img src="/stars.png" alt="5 Star Rating - CredSettle" style={{height: '12.96px'}} />
                <span className="font-medium text-gray-900" style={{fontSize: '9.72px'}}>4.6/5</span>
              </div>
              <div className="text-center">
                <div className="text-gray-600" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '8.72px' }}><b style={{fontSize: '10.72px'}}>Excellent</b> <span style={{fontSize: '9.72px'}}>|</span> <span style={{fontSize: '10px'}}>2000+ reviews</span></div>
              </div>
            </div>
          </div>
          
          {/* Second Review Row */}
          <div className="bg-white flex" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
            <div className="w-1/2 flex justify-center items-center">
                <img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" style={{height: '29.16px'}} />
            </div>
            <div className="w-1/2 flex flex-col" style={{gap: '6.48px'}}>
              <div className="flex justify-center items-center" style={{gap: '6.48px'}}>
                <img src="/stars.png" alt="5 Star Rating - CredSettle" style={{height: '12.96px'}} />
                <span className="font-medium text-gray-900" style={{fontSize: '9.72px'}}>4.6/5</span>
              </div>
              <div className="text-center">
                <div className="text-gray-600" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '8.72px' }}><b style={{fontSize: '10.72px'}}>Excellent</b> <span style={{fontSize: '9.72px'}}>|</span> <span style={{fontSize: '10px'}}>2000+ reviews</span></div>
              </div>
            </div>
          </div>
        </div>

        {/* 2nd Column - 50% width - Settlements */}
        <div 
          className="w-1/2 flex flex-col items-center justify-center"
          style={{
            borderRadius: '32.4px',
            background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%), #EFF7FF',
            boxShadow: '3.6px 3.6px 22.41px 0 rgba(12, 39, 86, 0.25)'
          }}
        >
          <h2 className="font-bold text-center text-gray-800" style={{fontSize: '19.44px', paddingLeft: '25.92px', paddingRight: '25.92px', marginBottom: '19.44px'}}>
            Settlements Achieved With Banks
          </h2>
          
          {/* Sliding Bank Logos using Splide */}
          <div className="w-full" style={{paddingLeft: '12.96px', paddingRight: '12.96px'}}>
            <Splide
              extensions={{ AutoScroll }}
              options={{
                type: 'loop',
                drag: false,
                focus: 'center',
                perPage: 5,
                perMove: 1,
                autoScroll: {
                  speed: 0.45,
                  pauseOnHover: false,
                  pauseOnFocus: false,
                },
                arrows: false,
                pagination: false,
                gap: '3.24rem',
                breakpoints: {
                  1024: {
                    perPage: 4,
                  },
                  768: {
                    perPage: 3,
                  },
                  640: {
                    perPage: 2,
                  },
                },
              }}
            >
              {bankIndices.map((bankIndex, i) => (
                <SplideSlide key={i}>
                  <div className="flex justify-center items-center">
                    <img
                      src={`/banks/${bankIndex}.svg`}
                      alt={`Bank or NBFC Logo ${bankIndex} - CredSettle Loan Settlement Partner`}
                      className="opacity-100"
                      style={{height: '32.4px'}}
                    />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>

        {/* 3rd Column - 25% width - Media Coverage */}
        <div 
          className="w-1/4 flex flex-col items-center justify-center"
          style={{
            borderRadius: '32.4px',
            background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%), #EFF7FF',
            boxShadow: '3.6px 3.6px 22.41px 0 rgba(12, 39, 86, 0.25)',
            gap: '12.96px'
          }}
        >
          <h3 className="font-semibold text-gray-800 text-center" style={{fontSize: '14.58px', paddingLeft: '12.96px', paddingRight: '12.96px'}}>
            Our media coverages
          </h3>
          <div className="grid grid-cols-2 w-full" style={{gap: '9.72px', paddingLeft: '12.96px', paddingRight: '12.96px', paddingBottom: '12.96px'}}>
            <div className="flex items-center justify-center">
              <img src="/media/media1.svg" alt="CredSettle Media Coverage - News Publication" style={{height: '25.92px'}} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/media2.svg" alt="CredSettle Media Coverage - Financial Publication" style={{height: '25.92px'}} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/media3.svg" alt="CredSettle Media Coverage - Business Publication" style={{height: '25.92px'}} />
            </div>
            <div className="flex items-center justify-center">
              <img src="/media/media4.svg" alt="CredSettle Media Coverage - Industry Publication" style={{height: '25.92px'}} />
            </div>
          </div>
        </div>
      </div>
    </div>

   
    </div>
  );
}