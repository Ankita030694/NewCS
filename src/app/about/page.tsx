'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState, useRef } from 'react';
import Script from 'next/script';

export default function AboutPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedYear, setSelectedYear] = useState<number>(2025);
  const timelineScrollRef = useRef<HTMLDivElement>(null);
  const yearRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const faqs = [
    {
      question: "Who is CredSettle and what makes us different?",
      answer: "CredSettle is India's leading legal loan settlement company, specializing in dignified debt resolution. We stand out through our RBI-compliant approach, expert legal team, and commitment to stopping harassment while securing structured paths to financial freedom for our clients."
    },
    {
      question: "How long has CredSettle been helping people with debt settlement?",
      answer: "CredSettle has been India's trusted partner in debt resolution for years, helping thousands of individuals and businesses achieve financial freedom. Our extensive experience and proven track record make us the go-to choice for legal loan settlements."
    },
    {
      question: "What is CredSettle's approach to debt resolution?",
      answer: "Our approach focuses on dignity and legal compliance. We don't just negotiate; we secure RBI-compliant settlements that stop harassment in its tracks and provide a fast, structured path to financial freedom, empowering clients to live secure, debt-free lives."
    },
    {
      question: "Why should I choose CredSettle over other debt settlement companies?",
      answer: "CredSettle combines legal expertise with compassionate service. We're India's leader in dignified debt resolution, offering RBI-compliant settlements, immediate harassment protection, and a proven track record of helping clients achieve financial stability through ethical and legal means."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://credsettle.in/about#faq",
    "name": "CredSettle Debt Resolution FAQs",
    "description": "Answers to common questions about CredSettle's RBI-compliant debt resolution services and legal loan settlements.",
    "mainEntity": faqs.map((faq, index) => ({
      "@type": "Question",
      "@id": `https://credsettle.in/about#faq-question-${index + 1}`,
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const yearDescriptions: { [key: number]: { title: string; description: string } } = {
    2025: {
      title: "A New Chapter for You:",
      description: "Our journey continues by focusing entirely on your future. We are dedicated to providing the final, legally sound solution that not only clears your debt but also secures your peace of mind and empowers you to build a debt-free future."
    },
    2024: {
      title: "Expanding Our Reach:",
      description: "We expanded our services across India, helping thousands more clients achieve financial freedom. Our commitment to RBI-compliant settlements and client dignity strengthened, making us the trusted partner for debt resolution."
    },
    2023: {
      title: "Building Trust and Excellence:",
      description: "This year marked significant growth in our client base and successful settlements. We refined our negotiation strategies and legal processes, ensuring even better outcomes for those seeking relief from financial burdens."
    },
    2022: {
      title: "Strengthening Our Foundation:",
      description: "We enhanced our legal expertise and compliance framework, ensuring every settlement meets the highest standards. Our team grew, bringing together experts dedicated to providing dignified debt resolution services."
    },
    2021: {
      title: "The Beginning:",
      description: "CredSettle was founded with a vision to help individuals and businesses find legal, dignified paths to financial freedom. From day one, we committed to RBI compliance and treating every client with respect and empathy."
    }
  };

  const handleYearClick = (year: number, index?: number) => {
    setSelectedYear(year);
    const yearElement = yearRefs.current[year];
    const scrollContainer = timelineScrollRef.current;
    
    if (yearElement && scrollContainer) {
      // Align the year number (not the item box) to the left edge by subtracting its internal padding-left
      const paddingLeftPx = (index ?? 0) === 0 ? 30 : 56; // matches item paddingLeft values
      const targetLeft = Math.max(0, yearElement.offsetLeft - paddingLeftPx);
      scrollContainer.scrollTo({ left: targetLeft, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-white mt-6">
      <Script id="faq-schema-about" type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </Script>
      {!isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background: '#007AFF',
            filter: 'blur(400px)',
            WebkitFilter: 'blur(400px)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.6,
            willChange: 'filter',
            backfaceVisibility: 'hidden'
          }}
        />
      )}

      {isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background:
              'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}

      <Navbar />

      <div className="relative z-10">
        <div
          className="container mx-auto"
          style={{
            paddingLeft: '12.96px',
            paddingRight: '12.96px',
            paddingTop: '100px',
            paddingBottom: '12.96px'
          }}
        >
          <div className="flex flex-col lg:flex-row items-start justify-between">
            {/* Left Column - Heading, Copy, CTA */}
            <div className="flex-shrink-0 w-full lg:w-auto" style={{width: 'clamp(400px, 50%, 600px)'}}>
            
              <h3
                className="mb-4"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: 'clamp(28px, 5vw, 45px)',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: 'clamp(40px, 6vw, 65px)'
                }}
              >
                India's Leader in Dignified Debt Resolution
              </h3>

              <p
                className="mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '28px'
                }}
              >
                As India's leading legal loan settlement company, we specialize in lifting the burden of debt, empowering everyday individuals and businesses to live the secure, debt-free lives they deserve.
              </p>

              <p
                className="mb-8"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  lineHeight: '28px'
                }}
              >
                We don't just negotiate; we secure RBI-compliant settlements that stop harassment in its tracks and provide a fast, structured path to financial freedom.
              </p>
              <a href="/contact" className='cursor-pointer' style={{ textDecoration: 'none', cursor: 'pointer' }}>
              <button
                className="bg-[#007AFF] text-white font-light cursor-pointer"
                style={{
                  paddingLeft: '39.44px',
                  paddingRight: '39.44px',
                  paddingTop: '13.48px',
                  paddingBottom: '13.48px',
                  borderRadius: '32.4px',
                  fontSize: '18.58px',
                  boxShadow:
                    '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset'
                }}
              >
                Get Started Today
              </button>
              </a>
                {/* Mobile Version - Google, Media, Trustpilot */}
              <div className="flex flex-col gap-4 mt-8 lg:hidden w-full">
                {/* Google Review Card */}
                <a href="https://share.google.com/UGjkJ5UCd6UiyJ7A6" target="_blank" rel="noopener noreferrer">
                <div className="flex mx-auto" style={{ borderRadius: '40px', background: '#EFF7FF', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', padding: '10px', gap: '8px', maxWidth: '320px', width: '100%' }}>
                  <div className="w-1/2 flex justify-center items-center">
                    <img src="/ggle.png" alt="Google Reviews - CredSettle" style={{ height: '32px' }} />
                  </div>
                  <div className="w-1/2 flex flex-col items-end justify-center" style={{ gap: '4px' }}>
                    {/* Stars - First, Right Aligned */}
                    <div className="flex justify-end">
                      <img src="/stars.png" alt="5 Star Rating - CredSettle" style={{ height: '12px' }} />
                    </div>
                    {/* Rating and Text Container - Right Aligned */}
                    <div className="flex flex-col items-end" style={{ gap: '2px' }}>
                      {/* 4.6/5 - Right Aligned */}
                      <div className="flex justify-end">
                        <span className="font-medium text-gray-900" style={{ fontSize: '11px' }}>4.6/5</span>
                      </div>
                      {/* Excellent and Reviews - Exactly Below Rating */}
                      <div className="flex justify-end items-center" style={{ gap: '3px' }}>
                        <b style={{ fontSize: '11px', color: 'rgba(12, 39, 86, 0.8)' }}>Excellent</b>
                        <span style={{ fontSize: '10px', color: 'rgba(12, 39, 86, 0.6)' }}>|</span>
                        <span style={{ fontSize: '10px', color: 'rgba(12, 39, 86, 0.6)' }}>2000+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                </a>

                {/* Media Coverages - Single Row */}
                <div
                  className="flex flex-col items-center justify-center w-full"
                  style={{
                    borderRadius: '32.4px',
                    background:
                      'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%), #EFF7FF',
                    boxShadow: '3.6px 3.6px 22.41px 0 rgba(12, 39, 86, 0.25)',
                    padding: '12.96px'
                  }}
                >
                  <h3
                    className="font-semibold text-gray-800 text-center mb-4"
                    style={{ fontSize: '18.58px' }}
                  >
                    Our media coverages
                  </h3>
                  <div className="flex flex-row items-center justify-center gap-2 w-full" style={{ flexWrap: 'wrap' }}>
                    <a
                      href="https://yourstory.com/companies/credsettle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle on YourStory"
                    >
                      <img src="/media/media1.svg" alt="CredSettle Media Coverage - News Publication" style={{ height: '28px', width: 'auto', flexShrink: 0 }} />
                    </a>
                    <a
                      href="https://yourstory.com/companies/credsettle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle on Medium"
                    >
                      <img src="/media/media2.svg" alt="CredSettle Media Coverage - Financial Publication" style={{ height: '28px', width: 'auto', flexShrink: 0 }} />
                    </a>
                    <a
                      href="https://medium.com/@credsettle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle on YourStory"
                    >
                      <img src="/media/media3.svg" alt="CredSettle Media Coverage - Business Publication" style={{ height: '28px', width: 'auto', flexShrink: 0 }} />
                    </a>
                    <a
                      href="https://medium.com/@credsettle/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle on Medium"
                    >
                      <img src="/media/media4.svg" alt="CredSettle Media Coverage - Industry Publication" style={{ height: '28px', width: 'auto', flexShrink: 0 }} />
                    </a>
                  </div>
                </div>

                {/* Trustpilot Review Card */}
                <a href="https://www.trustpilot.com/" target="_blank" rel="noopener noreferrer">
                <div className="flex mx-auto" style={{ borderRadius: '40px', background: '#EFF7FF', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', padding: '10px', gap: '8px', maxWidth: '320px', width: '100%' }}>
                  <div className="w-1/2 flex justify-center items-center">
                      <img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" style={{ height: '32px' }} />
                  </div>
                  <div className="w-1/2 flex flex-col items-end justify-center" style={{ gap: '4px' }}>
                    {/* Stars - First, Right Aligned */}
                    <div className="flex justify-end">
                      <img src="/stars.png" alt="5 Star Rating - CredSettle" style={{ height: '12px' }} />
                    </div>
                    {/* Rating and Text Container - Right Aligned */}
                    <div className="flex flex-col items-end" style={{ gap: '2px' }}>
                      {/* 4.6/5 - Right Aligned */}
                      <div className="flex justify-end">
                        <span className="font-medium text-gray-900" style={{ fontSize: '11px' }}>4.6/5</span>
                      </div>
                      {/* Excellent and Reviews - Exactly Below Rating */}
                      <div className="flex justify-end items-center" style={{ gap: '3px' }}>
                        <b style={{ fontSize: '11px', color: 'rgba(12, 39, 86, 0.8)' }}>Excellent</b>
                        <span style={{ fontSize: '10px', color: 'rgba(12, 39, 86, 0.6)' }}>|</span>
                        <span style={{ fontSize: '10px', color: 'rgba(12, 39, 86, 0.6)' }}>2000+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                </a>
              </div>
            </div>

            {/* Desktop Right Column - Google, Media, Trustpilot */}
            <div className="hidden lg:flex flex-shrink-0 flex flex-col items-end" style={{ width: '600px', gap: '12.96px' }}>
              {/* Google Review Card */}
              <a
                href="https://share.google/UGjkJ5UCd6UiyJ7A6"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '100%', display: 'flex', justifyContent: 'end', textDecoration: 'none' }}
              >
                <div className="flex" style={{ borderRadius: '40px', background: '#EFF7FF', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', padding: '12.96px', gap: '9.72px', width: '70%' }}>
                  <div className="w-1/2 flex justify-center items-center">
                    <img src="/ggle.png" alt="Google Reviews - CredSettle" style={{ height: '39.16px' }} />
                  </div>
                  <div className="w-1/2 flex flex-col" style={{ gap: '9.48px' }}>
                    <div className="flex justify-center items-center" style={{ gap: '6.48px' }}>
                      <img src="/stars.png" alt="5 Star Rating - CredSettle" style={{ height: '15.96px' }} />
                      <span className="font-medium text-gray-900" style={{ fontSize: '12.72px' }}>4.6/5</span>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-gray-600"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          fontSize: '8.72px'
                        }}
                      >
                        <b style={{ fontSize: '13.72px' }}>Excellent</b>{' '}
                        <span style={{ fontSize: '12.72px' }}>|</span>{' '}
                        <span style={{ fontSize: '13px' }}>2000+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

              {/* Media Coverages */}
              <div
                className="w-full flex flex-col items-end"
                style={{ textDecoration: 'none' }}
              >
                <div
                  className="flex flex-col items-center justify-center"
                  style={{
                    borderRadius: '32.4px',
                    background:
                      'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%), #EFF7FF',
                    boxShadow: '3.6px 3.6px 22.41px 0 rgba(12, 39, 86, 0.25)',
                    maxWidth: '296px'
                  }}
                >
                  <h3
                    className="font-semibold text-gray-800 text-center"
                    style={{ fontSize: '18.58px', paddingLeft: '15.96px', paddingRight: '15.96px', paddingTop: '12.96px' }}
                  >
                    Our media <br /> coverages
                  </h3>
                  <div className="flex flex-col w-full mt-5" style={{ gap: '9.72px', paddingLeft: '15.96px', paddingRight: '15.96px', paddingBottom: '12.96px' }}>
                    <a
                      href="https://yourstory.com/companies/credsettle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle Media Coverage - YourStory"
                      className="flex items-center justify-center mb-5"
                    >
                      <img src="/media/media1.svg" alt="CredSettle Media Coverage - News Publication" style={{ height: '35.92px' }} />
                    </a>
                    <a
                      href="https://yourstory.com/companies/credsettle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle Media Coverage - YourStory"
                      className="flex items-center justify-center mb-5"
                    >
                      <img src="/media/media2.svg" alt="CredSettle Media Coverage - Financial Publication" style={{ height: '35.92px' }} />
                    </a>
                    <a
                      href="https://medium.com/@credsettle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle Media Coverage - Medium"
                      className="flex items-center justify-center mb-5"
                    >
                      <img src="/media/media3.svg" alt="CredSettle Media Coverage - Business Publication" style={{ height: '35.92px' }} />
                    </a>
                    <a
                      href="https://medium.com/@credsettle"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="CredSettle Media Coverage - Medium"
                      className="flex items-center justify-center mb-5"
                    >
                      <img src="/media/media4.svg" alt="CredSettle Media Coverage - Industry Publication" style={{ height: '35.92px' }} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Trustpilot Review Card */}
              <a
                href="https://www.trustpilot.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ width: '100%', display: 'flex', justifyContent: 'end', textDecoration: 'none' }}
              >
                <div className="flex" style={{ borderRadius: '40px', background: '#EFF7FF', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', padding: '12.96px', gap: '9.72px', width: '70%' }}>
                  <div className="w-1/2 flex justify-center items-center">
                      <img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" style={{ height: '39.16px' }} />
                  </div>
                  <div className="w-1/2 flex flex-col" style={{ gap: '9.48px' }}>
                    <div className="flex justify-center items-center" style={{ gap: '6.48px' }}>
                      <img src="/stars.png" alt="5 Star Rating - CredSettle" style={{ height: '15.96px' }} />
                      <span className="font-medium text-gray-900" style={{ fontSize: '12.72px' }}>4.6/5</span>
                    </div>
                    <div className="text-center">
                      <div
                        className="text-gray-600"
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '4px',
                          fontSize: '8.72px'
                        }}
                      >
                        <b style={{ fontSize: '13.72px' }}>Excellent</b>{' '}
                        <span style={{ fontSize: '12.72px' }}>|</span>{' '}
                        <span style={{ fontSize: '13px' }}>2000+ reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>


      {/* Timeline Section */}
      <div className="relative z-10">
        <div
          className="container mx-auto"
          style={{
            paddingLeft: '12.96px',
            paddingRight: '12.96px',
            paddingTop: '50px',
            paddingBottom: '50px'
          }}
        >
          <div className="flex flex-col gap-8">
            {/* Section Header */}
            <h2 
              className="text-[32px] md:text-[48px] font-semibold font-['Poppins'] leading-[48px]"
              style={{ color: '#0C2756' }}
            >
              The CredSettle Story: Why We Fight
            </h2>

            {/* Desktop Timeline - Horizontal */}
            <div className="hidden lg:block relative">
              {/* Scrollable Years Container */}
              <div 
                ref={timelineScrollRef}
                className="overflow-x-auto overflow-y-hidden relative hide-scrollbar"
              >
                <div 
                  className="relative flex items-start"
                  style={{ 
                    minWidth: 'max-content',
                    height: '224px', // 320 * 0.7
                    paddingTop: '20px', // 28 * 0.7
                    paddingBottom: '20px' // 28 * 0.7
                  }}
                >
                  {/* Years */}
                  {[2025, 2024, 2023, 2022, 2021].map((year, index) => {
                    const colors = ['#01B1F0', '#038DC8', '#076AA0', '#0A4678', '#0C2857'];
                    const color = colors[index];
                    return (
                      <div
                        key={year}
                      ref={(el) => { yearRefs.current[year] = el; }}
                      onClick={() => handleYearClick(year, index)}
                        className="cursor-pointer transition-all duration-300 hover:opacity-80 relative"
                        style={{
                          minWidth: '256px', // 365 * 0.7
                          paddingLeft: index === 0 ? '30px' : '56px', // 42->30, 80->56
                          paddingRight: '56px',
                          flexShrink: 0
                        }}
                      >
                        <div
                          className="justify-start text-9xl font-medium font-['Poppins'] leading-[84px] transition-all duration-300 text-center"
                          style={{
                            color: selectedYear === year ? '#0C2756' : 'rgba(12, 39, 86, 0.5)',
                            fontSize: '101px' // 144 * 0.7
                          }}
                        >
                          {year}
                        </div>

                        {/* Marker (professional pointer) */}
                        <div
                          className="absolute flex flex-col items-center"
                          style={{
                            left: '50%',
                            top: '132px', // slightly below the line (line at ~132px)
                            transform: 'translate(-50%, -50%)',
                            zIndex: 9999
                          }}
                        >
                          {/* Provided SVG pointer with ring + inner circle */}
                          <div style={{ filter: selectedYear === year ? `drop-shadow(0 0 6px ${color}66)` : 'none' }}>
                            <svg width="21" height="21" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="15" cy="15" r="10" fill={color}/>
                              <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM0.897437 15C0.897437 22.7886 7.21137 29.1026 15 29.1026C22.7886 29.1026 29.1026 22.7886 29.1026 15C29.1026 7.21137 22.7886 0.897437 15 0.897437C7.21137 0.897437 0.897437 7.21137 0.897437 15Z" fill={color} fillOpacity="0.67"/>
                            </svg>
                          </div>

                          {/* Label (title) */}
                          <div
                            className="transition-opacity duration-300"
                            style={{
                              marginTop: '8px',
                              padding: '6px 10px',
                              borderRadius: '10px',
                              background: 'rgba(239, 247, 255, 0.95)',
                              boxShadow: '0 2px 10px rgba(0,0,0,0.08)',
                              color: '#0C2756',
                              fontFamily: 'Inter',
                              fontSize: '12px',
                              lineHeight: '16px',
                              whiteSpace: 'nowrap',
                              opacity: selectedYear === year ? 1 : 0.0
                            }}
                          >
                            {yearDescriptions[year].title}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  
                  {/* Timeline Line - spans entire scrollable content (scaled) */}
                  <div 
                    className="absolute left-0 right-0"
                    style={{
                      top: '132px', // 188 * 0.7
                      height: '3px',
                      background: '#01B1F0'
                    }}
                  />
                </div>
              </div>

              {/* Description Section - aligned left under the horizontal line (scaled) */}
              <div 
                className="transition-all duration-500"
                style={{
                  marginTop: '14px', // 20 * 0.7
                  paddingLeft: '30px', // 42 * 0.7
                  maxWidth: '535px' // 764 * 0.7
                }}
              >
                <span className="text-xl font-medium font-['Inter'] leading-6" style={{ color: '#0C2756' }}>
                  {yearDescriptions[selectedYear].title}
                </span>
                <span className="text-xl font-normal font-['Inter'] leading-6" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
                  {' '}{yearDescriptions[selectedYear].description}
                </span>
              </div>
            </div>

            {/* Mobile Timeline - Vertical */}
            <div className="lg:hidden relative">
              <div className="flex flex-col">
                {/* Vertical Timeline Line */}
                <div 
                  className="absolute left-6"
                  style={{
                    top: '0',
                    bottom: '0',
                    width: '3px',
                    background: '#01B1F0'
                  }}
                />

                {/* Timeline Items */}
                {[2025, 2024, 2023, 2022, 2021].map((year, index) => {
                  const colors = ['#01B1F0', '#038DC8', '#076AA0', '#0A4678', '#0C2857'];
                  const color = colors[index];
                  const isSelected = selectedYear === year;
                  
                  return (
                    <div
                      key={year}
                      onClick={() => handleYearClick(year, index)}
                      className="relative pl-12 pb-8 cursor-pointer transition-all duration-300"
                      style={{ paddingLeft: '60px' }}
                    >
                      {/* Year Number */}
                      <div
                        className="font-medium font-['Poppins'] transition-all duration-300 mb-2"
                        style={{
                          color: isSelected ? '#0C2756' : 'rgba(12, 39, 86, 0.5)',
                          fontSize: '32px',
                          lineHeight: '40px'
                        }}
                      >
                        {year}
                      </div>

                      {/* Marker Circle */}
                      <div
                        className="absolute flex items-center"
                        style={{
                          left: '25px',
                          top: '8px',
                          transform: 'translate(-50%, 0)',
                          zIndex: 10
                        }}
                      >
                        <div style={{ filter: isSelected ? `drop-shadow(0 0 6px ${color}66)` : 'none' }}>
                          <svg width="21" height="21" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="15" cy="15" r="10" fill={color}/>
                            <path d="M30 15C30 23.2843 23.2843 30 15 30C6.71573 30 0 23.2843 0 15C0 6.71573 6.71573 0 15 0C23.2843 0 30 6.71573 30 15ZM0.897437 15C0.897437 22.7886 7.21137 29.1026 15 29.1026C22.7886 29.1026 29.1026 22.7886 29.1026 15C29.1026 7.21137 22.7886 0.897437 15 0.897437C7.21137 0.897437 0.897437 7.21137 0.897437 15Z" fill={color} fillOpacity="0.67"/>
                          </svg>
                        </div>
                      </div>

                      {/* Description Content */}
                      <div 
                        className="transition-all duration-500 overflow-hidden"
                        style={{
                          maxHeight: isSelected ? '500px' : '0',
                          opacity: isSelected ? 1 : 0,
                          marginTop: isSelected ? '12px' : '0'
                        }}
                      >
                        <div
                          className="rounded-lg p-4"
                          style={{
                            background: 'rgba(239, 247, 255, 0.95)',
                            boxShadow: '0 2px 10px rgba(0,0,0,0.08)'
                          }}
                        >
                          <span className="text-base font-medium font-['Inter'] leading-6 block mb-2" style={{ color: '#0C2756' }}>
                            {yearDescriptions[year].title}
                          </span>
                          <span className="text-sm font-normal font-['Inter'] leading-5 block" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
                            {yearDescriptions[year].description}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Our Foundational Values Section */}
      <div className="relative z-10">
        <div
          className="container mx-auto"
          style={{
            paddingLeft: '12.96px',
            paddingRight: '12.96px',
            paddingTop: '50px',
            paddingBottom: '12.96px'
          }}
        >
          <div className="flex flex-col gap-8">
            {/* Section Header - Right Aligned */}
            <div className="w-full flex justify-end">
              <h2 
                className="text-right text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-bold"
                style={{ color: '#0C2756' }}
              >
                Our Foundational Values
              </h2>
            </div>

            {/* Values Cards Grid - Full Width */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Card 1 - Integrity and Compliance */}
              <div 
                className="p-6 relative"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="absolute top-0 left-0 -ml-5">
                  <img src="/aboutcard1.png" alt="Integrity and Compliance" style={{ width: '180px', height: '180px' }} />
                </div>
                <div className="mt-36">
                  <h3 
                    className="font-bold text-left mb-3 mt-10" 
                    style={{ color: '#0C2756', fontSize: '18px' }}
                  >
                    Integrity and Compliance
                  </h3>
                  <p 
                    className="text-left" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5', fontSize: '14px' }}
                  >
                    We guarantee unwavering honesty and legal protection, ensuring every settlement strictly follows RBI guidelines and financial laws.
                  </p>
                </div>
              </div>

              {/* Card 2 - Client Dignity First */}
              <div 
                className="p-6 relative"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="absolute top-0 left-0 -ml-5">
                  <img src="/aboutcard2.png" alt="Client Dignity First" style={{ width: '180px', height: '180px' }} />
                </div>
                <div className="mt-36">
                  <h3 
                    className="font-bold text-left mb-3 mt-10" 
                    style={{ color: '#0C2756', fontSize: '18px' }}
                  >
                    Client Dignity First
                  </h3>
                  <p 
                    className="text-left" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5', fontSize: '14px' }}
                  >
                    We treat clients with empathy, dedicated to shielding you from harassment and providing a stress-free, dignified path to health.
                  </p>
                </div>
              </div>

              {/* Card 3 - Expert Negotiation */}
              <div 
                className="p-6 relative"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="absolute top-5 left-0">
                  <img src="/aboutcard3.png" alt="Expert Negotiation" style={{ width: '150px', height: '150px' }} />
                </div>
                <div className="mt-36">
                  <h3 
                    className="font-bold text-left mb-3 mt-10" 
                    style={{ color: '#0C2756', fontSize: '18px' }}
                  >
                    Expert Negotiation
                  </h3>
                  <p 
                    className="text-left" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5', fontSize: '14px' }}
                  >
                    Expert negotiation for strategic settlements that significantly reduce your principal amount.
                  </p>
                </div>
              </div>

              {/* Card 4 - Transparency */}
              <div 
                className="p-6 relative"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="absolute top-0 left-0 -ml-5">
                  <img src="/aboutcard4.png" alt="Transparency" style={{ width: '180px', height: '180px' }} />
                </div>
                <div className="mt-36">
                  <h3 
                    className="font-bold text-left mb-3 mt-10" 
                    style={{ color: '#0C2756', fontSize: '18px' }}
                  >
                    Transparency
                  </h3>
                  <p 
                    className="text-left" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5', fontSize: '14px' }}
                  >
                    You get clear, upfront communication from consultation to final OTS, with zero hidden fees or confusing jargon about the process.
                  </p>
                </div>
              </div>

              {/* Card 5 - Financial Empowerment */}
              <div 
                className="p-6 relative"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="absolute top-0 left-0 -ml-5">
                  <img src="/aboutcard5.png" alt="Financial Empowerment" style={{ width: '180px', height: '180px' }} />
                </div>
                <div className="mt-36">
                  <h3 
                    className="font-bold text-left mb-3 mt-10" 
                    style={{ color: '#0C2756', fontSize: '18px' }}
                  >
                    Financial Empowerment
                  </h3>
                  <p 
                    className="text-left" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5', fontSize: '14px' }}
                  >
                    Our goal is to go beyond relief, restoring your creditworthiness and ensuring a debt-free future.
                  </p>
                </div>
              </div>

              {/* Card 6 - Results-Oriented */}
              <div 
                className="p-6 relative"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <div className="absolute top-0 left-0 ml-5">
                  <img src="/aboutcard6.png" alt="Results-Oriented" style={{ width: '180px', height: '180px' }} />
                </div>
                <div className="mt-36">
                  <h3 
                    className="font-bold text-left mb-3 mt-10" 
                    style={{ color: '#0C2756', fontSize: '18px' }}
                  >
                    Results-Oriented
                  </h3>
                  <p 
                    className="text-left" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5', fontSize: '14px' }}
                  >
                    We are relentless in securing a formal, legal settlement that makes your debt a done deal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <section className="w-full py-12">
        <div className="w-full max-w-7xl mx-auto px-4">
          <div className="flex flex-col items-center gap-8 md:gap-14">
            {/* Header and FAQ Items Container */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[76px] w-full">
              {/* Left: Header Section */}
              <div className="flex flex-col items-start gap-[21px] w-full lg:w-[365px]">
                <h2 className="text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-bold">
                  <span style={{ color: '#0C2756' }}>Have Question?{'\n'}<br /> We've Got </span>
                  <span style={{ color: '#007AFF' }}>Answers.</span>
                </h2>
                <p className="text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] font-normal">
                  <span style={{ color: '#0C2756' }}>Still have questions? </span>
                  <span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span>
                  <span style={{ color: '#0C2756' }}> anytime.</span>
                </p>
              </div>

              {/* Right: FAQ Items - Aligned to right end */}
              <div className="w-full lg:w-[800px] lg:ml-auto p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
                <div className="flex flex-col gap-4">
                  {faqs.map((faq, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                      onClick={() => toggleFAQ(index)}
                      >
                      <div className="flex justify-between items-start gap-[49px] p-[21px_28px]">
                        <p className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal flex-1" style={{ color: '#0C2756' }}>
                          {faq.question}
                        </p>
                        <div className="flex-shrink-0 w-[16px] h-[16px] relative">
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="transition-all duration-500 ease-in-out"
                            style={{
                              transform: openIndex === index ? 'rotate(45deg)' : 'rotate(0deg)'
                            }}
                          >
                            <path
                              d="M11.5 0C12.3284 0 13 0.671573 13 1.5V10H21.5C22.3284 10 23 10.6716 23 11.5C23 12.3284 22.3284 13 21.5 13H13V21.5C13 22.3284 12.3284 23 11.5 23C10.6716 23 10 22.3284 10 21.5V13H1.5C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10H10V1.5C10 0.671573 10.6716 0 11.5 0Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                      </div>
                      <div 
                        className="transition-all duration-500 ease-in-out overflow-hidden"
                        style={{
                          maxHeight: openIndex === index ? '200px' : '0px',
                          opacity: openIndex === index ? 1 : 0,
                          paddingTop: openIndex === index ? '12px' : '0px',
                          paddingBottom: openIndex === index ? '21px' : '0px',
                          paddingLeft: '28px',
                          paddingRight: '28px'
                        }}
                      >
                        <div className="border-t border-gray-200 pt-3">
                          <p className="text-[11px] md:text-[13px] leading-[14px] md:leading-[15px] font-normal" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>

    );
  }
