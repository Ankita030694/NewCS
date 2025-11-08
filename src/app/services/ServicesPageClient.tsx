'use client';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { useEffect, useState } from 'react';

export default function ServicesPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    // Detect Firefox browser
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const faqs = [
    {
      question: "How long does the debt settlement process take?",
      answer: "The debt settlement process typically takes 12-48 months, depending on your debt amount and lender cooperation. We work efficiently to negotiate the best possible settlement terms for you."
    },
    {
      question: "Will debt settlement affect my credit score?",
      answer: "Yes, debt settlement may initially impact your credit score. However, our credit repair services help improve your score over time, and settling debts is better than defaulting."
    },
    {
      question: "What types of debts can be settled?",
      answer: "We can settle credit card debts, personal loans, business loans, car loans, app loans, and NBFC loans. Secured loans like home loans require different approaches."
    },
    {
      question: "How much can I save through debt settlement?",
      answer: "Savings vary by case, but clients typically save 30-60% of their total debt amount. We negotiate aggressively to maximize your savings while ensuring legal compliance."
    },
    {
      question: "Is debt settlement legal in India?",
      answer: "Yes, debt settlement is completely legal in India. We follow RBI guidelines and ensure all settlements are compliant with Indian banking regulations."
    },
    {
      question: "What if recovery agents continue harassment?",
      answer: "Our anti-harassment services include call forwarding, complaint filing with RBI/NCH, and cease & desist notices. We provide immediate legal protection against illegal harassment."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {/* Background Circle Effect - Chrome/Safari */}
      {!isFirefox && (
        <div 
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background: '#007AFF',
            filter: 'blur(400px)',
            WebkitFilter: 'blur(400px)', // Safari/Chrome compatibility
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.6,
            willChange: 'filter', // Optimize for animations
            backfaceVisibility: 'hidden' // Force hardware acceleration
          }}
        />
      )}
      
      {/* Firefox-specific blur effect */}
      {isFirefox && (
        <div 
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}
      
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="relative z-10" style={{paddingTop: '100px', paddingLeft: '16.2px', paddingRight: '16.2px'}}>
        <div className="w-full max-w-8xl px-2">
          {/* Desktop Page Heading */}
          <div className="hidden md:block text-center mb-12">
            <h1 
              className="font-bold text-5xl mb-4"
              style={{ 
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '65px'
              }}
            >
              Our High-Impact Services
            </h1>
          </div>

          {/* Mobile Page Heading */}
          <div className="block md:hidden text-center mb-6 px-4">
            <h1 
              className="font-bold text-2xl mb-4"
              style={{ 
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: '400',
                lineHeight: '28px'
              }}
            >
              Our High-Impact Services
            </h1>
          </div>

          {/* Services Content */}
          <section className="w-full py-6">
            <div className="w-full max-w-7xl mx-auto">
          
              {/* Desktop Version - Middle Section: Anti-Harassment (Left) + 3 Services (Right) */}
              <div className="hidden md:flex relative items-center mb-6" style={{ minHeight: '300px', gap: '60px' }}>
                {/* Left: Main Anti-Harassment Container */}
                <div 
                  className="p-6 flex flex-col"
                  style={{
                    width: '52%',
                    height: '300px',
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    position: 'relative',
                    zIndex: 1
                  }}
                >
                  <div className="flex-1">
                    <h3 
                      className="font-bold text-left text-2xl mb-4" 
                      style={{ color: '#0C2756' }}
                    >
                      Stop Loan Recovery Agent Harassment – Protect Your Rights with CredSettle
                    </h3>
                    <p 
                      className="text-left text-sm mb-4" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
                    >
                      Are you facing constant calls, threats, or home visits from loan recovery agents? At CredSettle, we provide India's leading Anti-Harassment Services designed to legally stop recovery agent harassment and protect your peace of mind.
                    </p>
                    <p 
                      className="text-left text-sm" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
                    >
                      Our legal experts ensure that lenders and agents follow RBI recovery guidelines while helping you settle your loan safely and ethically.
                    </p>
                  </div>
                  
                  {/* View More Button - Bottom Right */}
                  <div className="flex justify-end mt-6">
                    <a 
                      href="/services/anti-harassment"
                      className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 flex items-center gap-2"
                      style={{ background: '#007AFF' }}
                    >
                      View More
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Right: 3 Service Containers in Column */}
                <div className="flex flex-col gap-2" style={{ flex: 1, height: '200px', position: 'relative', zIndex: 10 }}>
                  {/* Service 1 */}
                  <div 
                    className="flex-1"
                    style={{
                      borderRadius: '30px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.20) 49.48%, rgba(239, 247, 255, 0.80) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      padding: '12px'
                    }}
                  >
                    <h4 
                      className="font-bold text-left mb-1" 
                      style={{ color: '#0C2756', fontSize: '14px' }}
                    >
                      Call Forwarding Services
                    </h4>
                    <p 
                      className="text-left" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.3', fontSize: '12px' }}
                    >
                      Divert all recovery calls directly to our legal helpline.
                    </p>
                  </div>

                  {/* Service 2 */}
                  <div 
                    className="flex-1"
                    style={{
                      borderRadius: '30px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.20) 49.48%, rgba(239, 247, 255, 0.80) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      padding: '12px'
                    }}
                  >
                    <h4 
                      className="font-bold text-left mb-1" 
                      style={{ color: '#0C2756', fontSize: '14px' }}
                    >
                      Complaint Filing
                    </h4>
                    <p 
                      className="text-left" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.3', fontSize: '12px' }}
                    >
                      We file formal complaints with RBI, NCH, and Cyber Police against harassment.
                    </p>
                  </div>

                  {/* Service 3 */}
                  <div 
                    className="flex-1"
                    style={{
                      borderRadius: '30px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.20) 49.48%, rgba(239, 247, 255, 0.80) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      padding: '12px'
                    }}
                  >
                    <h4 
                      className="font-bold text-left mb-1" 
                      style={{ color: '#0C2756', fontSize: '14px' }}
                    >
                      Cease & Desist Notices
                    </h4>
                    <p 
                      className="text-left" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.3', fontSize: '12px' }}
                    >
                      Our legal team issues notices to stop illegal recovery activities immediately.
                    </p>
                  </div>
                </div>

                {/* Animated Connection Lines SVG */}
                <svg 
                  className="absolute pointer-events-none" 
                  style={{ 
                    width: '80px', 
                    height: '100%', 
                    top: 0,
                    left: '52%',
                    zIndex: 5 
                  }}
                  viewBox="0 0 149 400"
                  preserveAspectRatio="none"
                >
                  <defs>
                    {/* Animated gradient - traveling blue wave from left to right */}
                    <linearGradient id="flowGradient" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#E6E6E6"/>
                      <stop offset="0%" stopColor="#E6E6E6">
                        <animate attributeName="offset" values="-0.3;1" dur="3s" repeatCount="indefinite"/>
                      </stop>
                      <stop offset="15%" stopColor="#00B2F1">
                        <animate attributeName="offset" values="-0.15;1.15" dur="3s" repeatCount="indefinite"/>
                      </stop>
                      <stop offset="30%" stopColor="#E6E6E6">
                        <animate attributeName="offset" values="0;1.3" dur="3s" repeatCount="indefinite"/>
                      </stop>
                      <stop offset="100%" stopColor="#E6E6E6"/>
                    </linearGradient>
                  </defs>
                  
                  {/* Path to top container - curves upward to middle of top container */}
                  <path
                    d="M 0 200 H 50.6 C 66.6 200 79.6 187 79.6 171 V 120 C 79.6 110 92.6 100 108.6 100 H 149"
                    stroke="url(#flowGradient)"
                    strokeWidth="4"
                    fill="none"
                  />
                  
                  {/* Path to bottom container - curves downward to middle of bottom container */}
                  <path
                    d="M 0 200 H 50.6 C 66.6 200 79.6 213 79.6 229 V 280 C 79.6 290 92.6 300 108.6 300 H 149"
                    stroke="url(#flowGradient)"
                    strokeWidth="4"
                    fill="none"
                  />
                  
                  {/* Path to middle container - straight to middle of middle container */}
                  <path
                    d="M 0 200 H 149"
                    stroke="url(#flowGradient)"
                    strokeWidth="4"
                    fill="none"
                  />
                </svg>
              </div>

              {/* Mobile Version - Middle Section: Anti-Harassment Container */}
              <div className="block md:hidden mb-8 px-4 overflow-hidden">
                <div className="relative w-full max-w-full mx-auto">
                  {/* Main Anti-Harassment Container */}
                  <div
                    className="relative flex flex-col p-5 w-full"
                    style={{
                      minHeight: '364px',
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                    }}
                  >
                    <div
                      className="flex flex-col gap-[15px] w-full"
                      style={{
                        minHeight: '279px'
                      }}
                    >
                      <h3
                        className="font-medium w-full"
                        style={{
                          color: '#0C2756',
                          fontFamily: 'Poppins',
                          fontSize: '18px',
                          fontWeight: 500,
                          lineHeight: '22px',
                          letterSpacing: '0.18px'
                        }}
                      >
                        Stop Loan Recovery Agent Harassment – Protect Your Rights with CredSettle
                      </h3>
                      <p
                        className="w-full"
                        style={{
                          color: 'rgba(12, 39, 86, 0.70)',
                          fontFamily: 'Poppins',
                          fontSize: '16px',
                          fontWeight: 400,
                          lineHeight: '20px',
                          letterSpacing: '0.16px'
                        }}
                      >
                        Are you facing constant calls, threats, or home visits from loan recovery agents? At CredSettle, we provide India's leading Anti-Harassment Services designed to legally stop recovery agent harassment and protect your peace of mind.
                        <br /><br />
                        Our legal experts ensure that lenders and agents follow RBI recovery guidelines while helping you settle your loan safely and ethically.
                      </p>
                    </div>

                    <a href="/services/anti-harassment" className="self-end mt-4">
                      <div
                        className="flex flex-col items-start"
                        style={{
                          padding: '7px 14px',
                          gap: '10px',
                          borderRadius: '10px',
                          background: '#007AFF',
                          boxShadow: '0 1px 6.8px 0 rgba(0, 0, 0, 0.35), 0 -4px 4px 0 rgba(255, 255, 255, 0.10) inset, 0 4px 4px 0 rgba(255, 255, 255, 0.10) inset',
                          minWidth: '146px',
                          height: '35px'
                        }}
                      >
                        <div className="flex items-center gap-2">
                          <span
                            style={{
                              color: '#FFF',
                              fontFamily: 'Poppins',
                              fontSize: '15px',
                              fontWeight: 400,
                              lineHeight: '20px',
                              letterSpacing: '0.15px',
                              textAlign: 'center'
                            }}
                          >
                            View More
                          </span>
                          <svg width="14" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.3137 0.999123V10.6966M12.3137 0.999123H2.61623M12.3137 0.999123L0.999989 12.3128" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Services Container with SVG Lines */}
                  <div
                    className="relative w-full mt-4 pl-8"
                    style={{
                      minHeight: '331px'
                    }}
                  >
                    {/* Connecting Lines SVG */}
                    <svg
                      className="absolute"
                      style={{
                        width: '31px',
                        height: '100%',
                        left: '0px',
                        top: '0px'
                      }}
                      viewBox="0 0 32 285"
                      fill="none"
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 0V68C1 76.2843 7.71573 83 16 83H32" stroke="#0C2756" strokeOpacity="0.4" strokeWidth="2"/>
                      <path d="M1 66V166C1 174.284 7.71573 181 16 181H32" stroke="#0C2756" strokeOpacity="0.4" strokeWidth="2"/>
                      <path d="M1 149V269C1 277.284 7.71573 284 16 284H32" stroke="#0C2756" strokeOpacity="0.4" strokeWidth="2"/>
                    </svg>

                    {/* Service Cards */}
                    <div
                      className="flex justify-center items-center w-full mb-4"
                      style={{
                        padding: '15px',
                        borderRadius: '40px',
                        background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                        boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                        minHeight: '93px'
                      }}
                    >
                      <p
                        className="w-full"
                        style={{
                          color: 'rgba(0, 0, 0, 0.70)',
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '20px'
                        }}
                      >
                        <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>Call Forwarding Services –</span>
                        {' '}
                        <span style={{ color: 'rgba(0, 0, 0, 0.70)' }}>Divert all recovery calls directly to our legal helpline.</span>
                      </p>
                    </div>

                    <div
                      className="flex justify-center items-center w-full mb-4"
                      style={{
                        padding: '15px',
                        borderRadius: '40px',
                        background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                        boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                        minHeight: '93px'
                      }}
                    >
                      <p
                        className="w-full"
                        style={{
                          color: 'rgba(12, 39, 86, 0.70)',
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '20px'
                        }}
                      >
                        <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}>Complaint Filing –</span>
                        {' '}
                        <span style={{ color: 'rgba(12, 39, 86, 0.70)' }}>We file formal complaints with RBI, NCH, and Cyber Police against harassment.</span>
                      </p>
                    </div>

                    <div
                      className="flex justify-center items-center w-full mb-4"
                      style={{
                        padding: '15px',
                        borderRadius: '40px',
                        background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                        boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                        minHeight: '94px'
                      }}
                    >
                      <p
                        className="w-full"
                        style={{
                          color: 'rgba(12, 39, 86, 0.70)',
                          fontFamily: 'Poppins',
                          fontSize: '14px',
                          fontWeight: 400,
                          lineHeight: '20px'
                        }}
                      >
                        <span style={{ fontSize: '16px', color: 'rgba(12, 39, 86, 1)' }}>Cease & Desist Notices</span>
                        <span style={{ fontSize: '16px', color: 'rgba(0, 0, 0, 1)' }}> –</span>
                        {' '}
                        <span style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Our legal team issues notices to stop illegal recovery activities immediately.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Desktop Bottom Section: 2x3 Grid of Loan Settlement Services */}
              <div className="hidden md:grid grid-cols-3 gap-3 mb-6">
                {/* Personal Loan Settlement */}
                <a href="/services/personal-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                <div 
                  className="p-6 relative"
                  style={{
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    backdropFilter: 'blur(9.050000190734863px)',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Icon in top left */}
                  <div className="mb-3 -ml-12 -mt-12">
                    <img 
                      src="/service1.png" 
                      alt="Personal Loan Settlement" 
                      style={{ width: '200px', height: '200px' }}
                    />
                  </div>
                  
                  {/* Left aligned heading */}
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ color: '#0C2756', fontSize: '24px' }}
                  >
                    Personal Loan Settlement
                  </h4>
                  
                  {/* Left aligned description */}
                  <p 
                    className="text-left mb-5" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                  >
                    We recognize that life's financial challenges can be unpredictable. Our experts negotiate with lenders to secure manageable settlement plans for your unsecured personal loans.
                  </p>
                  
                  {/* Left aligned pointers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Expert negotiation with lenders</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Manageable settlement plans</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Legal protection throughout</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Reduced financial burden</span>
                    </div>
                  </div>
                </div>
                </a>

                {/* Credit Card Settlement */}
                <a href="/services/credit-card-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                <div 
                  className="p-6 relative"
                  style={{
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    backdropFilter: 'blur(9.050000190734863px)',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Icon in top left */}
                  <div className="mb-3 -ml-12 -mt-12">
                    <img 
                      src="/service2.png" 
                      alt="Credit Card Settlement" 
                      style={{ width: '200px', height: '200px' }}
                    />
                  </div>
                  
                  {/* Left aligned heading */}
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ color: '#0C2756', fontSize: '24px' }}
                  >
                    Credit Card Settlement
                  </h4>
                  
                  {/* Left aligned description */}
                  <p 
                    className="text-left mb-3" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                  >
                    Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
                  </p>
                  
                  {/* Left aligned pointers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>One-Time Settlement (OTS)</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Reduced interest rates</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Significant savings</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Improved credit score</span>
                    </div>
                  </div>
                </div>
                </a>

                {/* Business Loan Settlement */}
                <a href="/services/business-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                <div 
                  className="p-6 relative"
                  style={{
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    backdropFilter: 'blur(9.050000190734863px)',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Icon in top left */}
                  <div className="mb-3 -ml-12 -mt-12">
                    <img 
                      src="/service3.png" 
                      alt="Business Loan Settlement" 
                      style={{ width: '200px', height: '200px' }}
                    />
                  </div>
                  
                  {/* Left aligned heading */}
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ color: '#0C2756', fontSize: '24px' }}
                  >
                    Business Loan Settlement
                  </h4>
                  
                  {/* Left aligned description */}
                  <p 
                    className="text-left mb-5" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                  >
                    Business loan defaults can threaten your company's future. We negotiate flexible repayment terms and settlement options to help your business recover and thrive.
                  </p>
                  
                  {/* Left aligned pointers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Flexible repayment terms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Business recovery support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Asset protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Legal compliance</span>
                    </div>
                  </div>
                </div>
                </a>

                {/* Car Loan Settlement */}
                <a href="/services/car-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                <div 
                  className="p-6 relative"
                  style={{
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    backdropFilter: 'blur(9.050000190734863px)',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Icon in top left */}
                  <div className="mb-3 -ml-10 -mt-5">
                    <img 
                      src="/service4.png" 
                      alt="Car Loan Settlement" 
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  
                  {/* Left aligned heading */}
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ color: '#0C2756', fontSize: '24px' }}
                  >
                    Car Loan Settlement
                  </h4>
                  
                  {/* Left aligned description */}
                  <p 
                    className="text-left mb-5" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '15.6px' }}
                  >
                    Since car loans are secured, a default risks asset loss. We negotiate reduced balances and manageable payments, easing the fear of losing your vehicle while restoring stability.
                  </p>
                  
                  {/* Left aligned pointers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Reduced loan balance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Vehicle protection</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Manageable payments</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Financial stability</span>
                    </div>
                  </div>
                </div>
                </a>

                {/* App Loan Settlement */}
                <a href="/services/app-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                <div 
                  className="p-6 relative"
                  style={{
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    backdropFilter: 'blur(9.050000190734863px)',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Icon in top left */}
                  <div className="mb-3 -ml-10 -mt-5">
                    <img 
                      src="/service5.png" 
                      alt="App Loan Settlement" 
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  
                  {/* Left aligned heading */}
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ color: '#0C2756', fontSize: '24px' }}
                  >
                    App Loan Settlement
                  </h4>
                  
                  {/* Left aligned description */}
                  <p 
                    className="text-left mb-5" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                  >
                    Stop aggressive, illegal harassment from digital lending apps immediately. We provide legal representation to secure a final, RBI-compliant One-Time Settlement (OTS).
                  </p>
                  
                  {/* Left aligned pointers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Stop harassment immediately</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>RBI-compliant settlement</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Legal representation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Digital loan protection</span>
                    </div>
                  </div>
                </div>
                </a>

                {/* NBFC Loan Settlement */}
                <a href="/services/nbfc-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                <div 
                  className="p-6 relative"
                  style={{
                    borderRadius: '40px',
                    background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    backdropFilter: 'blur(9.050000190734863px)',
                    minHeight: '200px',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                >
                  {/* Icon in top left */}
                  <div className="mb-3 -ml-10 -mt-5">
                    <img 
                      src="/service6.png" 
                      alt="NBFC Loan Settlement" 
                      style={{ width: '150px', height: '150px' }}
                    />
                  </div>
                  
                  {/* Left aligned heading */}
                  <h4 
                    className="font-bold text-left mb-2" 
                    style={{ color: '#0C2756', fontSize: '24px' }}
                  >
                    NBFC Loan Settlement
                  </h4>
                  
                  {/* Left aligned description */}
                  <p 
                    className="text-left mb-5" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                  >
                    Non-Banking Financial Companies often have different settlement policies. We navigate these complexities to secure favorable terms and protect your financial interests.
                  </p>
                  
                  {/* Left aligned pointers */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Specialized NBFC expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Favorable settlement terms</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Policy navigation</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                      <span className="text-base" style={{ color: '#0C2756', opacity: 0.8 }}>Financial interest protection</span>
                    </div>
                  </div>
                </div>
                </a>
              </div>

              {/* Mobile Version - Bottom Section: Single Column of Loan Settlement Services */}
              <div className="block md:hidden flex flex-col gap-4 mb-8 px-4">
                {/* Personal Loan Settlement */}
                <a href="/services/personal-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                  <div 
                    className="p-6 relative"
                    style={{
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(9.050000190734863px)',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Icon in top right */}
                    <div className="mb-3 flex justify-end -mr-6 -mt-6">
                      <img 
                        src="/service1.png" 
                        alt="Personal Loan Settlement" 
                        style={{ width: '120px', height: '120px' }}
                      />
                    </div>
                    
                    {/* Heading */}
                    <h4 
                      className="font-bold text-left mb-2" 
                      style={{ color: '#0C2756', fontSize: '20px' }}
                    >
                      Personal Loan Settlement
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-left mb-5" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                    >
                      We recognize that life's financial challenges can be unpredictable. Our experts negotiate with lenders to secure manageable settlement plans for your unsecured personal loans.
                    </p>
                    
                    {/* Pointers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Expert negotiation with lenders</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Manageable settlement plans</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Legal protection throughout</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Reduced financial burden</span>
                      </div>
                    </div>

                    {/* Icon in bottom right */}
                    <div className="flex justify-end mt-auto">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#007AFF' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Credit Card Settlement */}
                <a href="/services/credit-card-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                  <div 
                    className="p-6 relative"
                    style={{
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(9.050000190734863px)',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Icon in top right */}
                    <div className="mb-3 flex justify-end -mr-6 -mt-6">
                      <img 
                        src="/service2.png" 
                        alt="Credit Card Settlement" 
                        style={{ width: '120px', height: '120px' }}
                      />
                    </div>
                    
                    {/* Heading */}
                    <h4 
                      className="font-bold text-left mb-2" 
                      style={{ color: '#0C2756', fontSize: '20px' }}
                    >
                      Credit Card Settlement
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-left mb-3" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                    >
                      Credit card debt can be overwhelming due to high interest rates. We secure an affordable One-Time Settlement (OTS), helping you save money and improve your financial outlook.
                    </p>
                    
                    {/* Pointers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>One-Time Settlement (OTS)</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Reduced interest rates</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Significant savings</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Improved credit score</span>
                      </div>
                    </div>

                    {/* Icon in bottom right */}
                    <div className="flex justify-end mt-auto">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#007AFF' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Business Loan Settlement */}
                <a href="/services/business-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                  <div 
                    className="p-6 relative"
                    style={{
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(9.050000190734863px)',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Icon in top right */}
                    <div className="mb-3 flex justify-end -mr-6 -mt-6">
                      <img 
                        src="/service3.png" 
                        alt="Business Loan Settlement" 
                        style={{ width: '120px', height: '120px' }}
                      />
                    </div>
                    
                    {/* Heading */}
                    <h4 
                      className="font-bold text-left mb-2" 
                      style={{ color: '#0C2756', fontSize: '20px' }}
                    >
                      Business Loan Settlement
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-left mb-5" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                    >
                      Business loan defaults can threaten your company's future. We negotiate flexible repayment terms and settlement options to help your business recover and thrive.
                    </p>
                    
                    {/* Pointers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Flexible repayment terms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Business recovery support</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Asset protection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Legal compliance</span>
                      </div>
                    </div>

                    {/* Icon in bottom right */}
                    <div className="flex justify-end mt-auto">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#007AFF' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Car Loan Settlement */}
                <a href="/services/car-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                  <div 
                    className="p-6 relative"
                    style={{
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(9.050000190734863px)',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Icon in top right */}
                    <div className="mb-3 flex justify-end -mr-6 -mt-6">
                      <img 
                        src="/service4.png" 
                        alt="Car Loan Settlement" 
                        style={{ width: '120px', height: '120px' }}
                      />
                    </div>
                    
                    {/* Heading */}
                    <h4 
                      className="font-bold text-left mb-2" 
                      style={{ color: '#0C2756', fontSize: '20px' }}
                    >
                      Car Loan Settlement
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-left mb-5" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                    >
                      Since car loans are secured, a default risks asset loss. We negotiate reduced balances and manageable payments, easing the fear of losing your vehicle while restoring stability.
                    </p>
                    
                    {/* Pointers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Reduced loan balance</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Vehicle protection</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Manageable payments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Financial stability</span>
                      </div>
                    </div>

                    {/* Icon in bottom right */}
                    <div className="flex justify-end mt-auto">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#007AFF' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                {/* App Loan Settlement */}
                <a href="/services/app-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                  <div 
                    className="p-6 relative"
                    style={{
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(9.050000190734863px)',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Icon in top right */}
                    <div className="mb-3 flex justify-end -mr-6 -mt-6">
                      <img 
                        src="/service5.png" 
                        alt="App Loan Settlement" 
                        style={{ width: '120px', height: '120px' }}
                      />
                    </div>
                    
                    {/* Heading */}
                    <h4 
                      className="font-bold text-left mb-2" 
                      style={{ color: '#0C2756', fontSize: '20px' }}
                    >
                      App Loan Settlement
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-left mb-5" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                    >
                      Stop aggressive, illegal harassment from digital lending apps immediately. We provide legal representation to secure a final, RBI-compliant One-Time Settlement (OTS).
                    </p>
                    
                    {/* Pointers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Stop harassment immediately</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>RBI-compliant settlement</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Legal representation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Digital loan protection</span>
                      </div>
                    </div>

                    {/* Icon in bottom right */}
                    <div className="flex justify-end mt-auto">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#007AFF' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>

                {/* NBFC Loan Settlement */}
                <a href="/services/nbfc-loan-settlement" className="block no-underline" style={{ color: 'inherit' }}>
                  <div 
                    className="p-6 relative"
                    style={{
                      borderRadius: '40px',
                      background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                      boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(9.050000190734863px)',
                      minHeight: '200px',
                      display: 'flex',
                      flexDirection: 'column'
                    }}
                  >
                    {/* Icon in top right */}
                    <div className="mb-3 flex justify-end -mr-6 -mt-6">
                      <img 
                        src="/service6.png" 
                        alt="NBFC Loan Settlement" 
                        style={{ width: '120px', height: '120px' }}
                      />
                    </div>
                    
                    {/* Heading */}
                    <h4 
                      className="font-bold text-left mb-2" 
                      style={{ color: '#0C2756', fontSize: '20px' }}
                    >
                      NBFC Loan Settlement
                    </h4>
                    
                    {/* Description */}
                    <p 
                      className="text-left mb-5" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.4', fontSize: '13.6px' }}
                    >
                      Non-Banking Financial Companies often have different settlement policies. We navigate these complexities to secure favorable terms and protect your financial interests.
                    </p>
                    
                    {/* Pointers */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Specialized NBFC expertise</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Favorable settlement terms</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Policy navigation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <img src="/pointer.svg" alt="Service feature indicator" style={{ width: '20px', height: '20px' }} />
                        <span className="text-sm" style={{ color: '#0C2756', opacity: 0.8 }}>Financial interest protection</span>
                      </div>
                    </div>

                    {/* Icon in bottom right */}
                    <div className="flex justify-end mt-auto">
                      <div 
                        className="w-8 h-8 rounded-full flex items-center justify-center"
                        style={{ background: '#007AFF' }}
                      >
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Desktop Section Heading */}
              <div className="hidden md:block mb-4">
                <h2 
                  className="font-bold text-center text-3xl py-4" 
                  style={{ color: '#0C2756', fontWeight: 500 }}
                >
                  Improve your Credit Score
                </h2>
              </div>

              {/* Mobile Section Heading */}
              <div className="block md:hidden mb-6">
                <h2 
                  className="font-bold text-center text-2xl py-4" 
                  style={{ color: '#0C2756', fontWeight: 500 }}
                >
                  Improve your Credit Score
                </h2>
              </div>

              {/* Desktop Credit Score Container */}
              <div 
                className="hidden md:flex p-6 items-center gap-6 relative"
                style={{
                  borderRadius: '30px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                }}
              >
                {/* Left: Credit Score Image */}
                <img 
                  src="/creditscore.png" 
                  alt="Credit Score" 
                  style={{ width: '250px', height: 'auto' }}
                />

                {/* Right: Content */}
                <div className="flex-1 flex flex-col h-full">
                  <div className="flex-1">
                    <h3 
                      className="font-bold text-left text-2xl mb-4" 
                      style={{ color: '#0C2756' }}
                    >
                      Boost Your Credit Score Now
                    </h3>
                    <p 
                      className="text-left text-base" 
                      style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.6' }}
                    >
                      Ready for real improvement? Our service gives you the advantage. We quickly analyze your report, fix errors with targeted disputes, and teach you the best ways to keep your score high. Start your journey to a better financial future today.
                    </p>
                  </div>
                  
                  {/* View More Button - Bottom Right */}
                  <div className="flex justify-end mt-6">
                    <a href="/services/credit-score-builder" className="block no-underline" style={{ color: 'inherit' }}>
                    <button 
                      className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 flex items-center gap-2"
                      style={{ background: '#007AFF' }}
                    >
                      View More
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Mobile Credit Score Container (visible only on mobile) */}
              <div 
                className="flex flex-col md:hidden p-5 relative w-full overflow-hidden px-4"
                style={{
                  borderRadius: '40px',
                  background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  minHeight: '200px'
                }}
              >
                <div className="flex items-start justify-between mb-3 gap-3 flex-wrap">
                  <div className="flex-1 min-w-0">
                    <h3 
                      className="font-bold text-left text-lg mb-2" 
                      style={{ color: '#0C2756', textAlign: 'center' }}
                    >
                      Boost Your Credit Score Now
                    </h3>
                  </div>
                  <img 
                    src="/creditscore.png" 
                    alt="Credit Score" 
                    style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain', flexShrink: 0 }}
                    className="max-w-[240px] sm:max-w-[48px]"
                  />
                </div>
                <div className="flex-1 mb-3">
                  <p 
                    className="text-left text-sm" 
                    style={{ color: '#0C2756', opacity: 0.8, lineHeight: '1.5' }}
                  >
                    Ready for real improvement? Our service gives you the advantage. We quickly analyze your report, fix errors with targeted disputes, and teach you the best ways to keep your score high.
                  </p>
                </div>
                <div className="flex justify-end mt-2">
                  <a href="/services/credit-score-builder" className="block no-underline" style={{ color: 'inherit' }}>
                    <button 
                      className="px-6 py-3 rounded-full text-sm font-medium text-white transition-colors duration-200 hover:opacity-90 flex items-center gap-2"
                      style={{ background: '#007AFF' }}
                    >
                      View More
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </section>

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

          {/* CTA Section */}
          <section className="w-full py-12">
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-col items-center gap-8 md:gap-14">
                <div
                  className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                    boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                  }}
                >
                  <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-[28px] w-full">
                      <h2
                        className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                        style={{ color: '#0C2756' }}
                      >
                        Ready to Take Control of Your Debt?
                      </h2>
                      <p
                        className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                        style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                      >
                        Don't let debt control your life. Our expert team is ready to help you settle your debts, stop harassment, and rebuild your financial future. Get started today with a free consultation.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <button
                      className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                      style={{
                        boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                      }}
                      onClick={() => window.location.href = '/contact'}
                    >
                      <span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal" style={{ color: '#0C2756' }}>
                        Get Your Free Consultation
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      
      <div style={{marginTop: '100px'}}>
        <Footer />
      </div>
    </div>
  );
}
