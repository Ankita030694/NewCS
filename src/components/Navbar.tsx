'use client';

import { useState, useEffect } from 'react';

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

export default function ContactNavbar() {
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

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/resources', label: 'Resources' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact Us' }
  ];

  return (
    <>
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
                  <img src="/credsettle-logo-black.svg" alt="CredSettle Logo" className="h-8 md:h-[38.88px]" />
                </a>
              </div>
              
              {/* Desktop Navigation - Hidden on Mobile */}
              <div className="hidden md:flex" style={{gap: '38.88px'}}>
                {navItems.map((item) => (
                  <a 
                    key={item.href}
                    href={item.href} 
                    className="text-black hover:text-[#007AFF] transition-colors duration-200" 
                    style={{ fontWeight: 500, fontSize: '16.2px' }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
              
              {/* Right Column - Desktop Register Button / Mobile Hamburger */}
              <div className="flex-shrink-0 flex items-center gap-4">
                {/* Desktop Register Button - Hidden on Mobile */}
                <button
                  className="hidden md:flex bg-[#007AFF] text-white font-light transition-colors duration-200 hover:bg-[#0056CC] items-center justify-center"
                  style={{
                    paddingLeft: '19.44px',
                    paddingRight: '19.44px',
                    paddingTop: '12px',
                    paddingBottom: '12px',
                    fontSize: '14.58px',
                    borderRadius: '32.4px',
                    height: '38.88px',
                    boxShadow:
                      "0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset"
                  }}
                >
                  Register now
                </button>

                {/* Mobile Hamburger Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden text-black focus:outline-none"
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
        className={`fixed inset-0 z-[10000] overflow-y-auto transition-all duration-500 ease-out ${
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
          <div className={`w-full px-6 -pb-12 mt-auto overflow-hidden -mb-4 transition-all duration-700 delay-300 ${
            isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h2 
              className="text-center text-5xl md:text-7xl lg:text-[200px] font-normal leading-none text-white -mb-12 md:-mb-16 lg:-mb-20"
              style={{ 
                margin: 0,
                padding: 0,
                display: 'block',
                height: 'auto',
                position: 'relative',
                bottom: 0
              }}
            >
              CredSettle
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
