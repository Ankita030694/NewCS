'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { generateSlug } from './states-content';

export default function PersonalLoanSettlementPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {/* Background Circle Effect - mirrors contact page */}
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

      {/* Navbar */}
      <Navbar />

      {/* Main viewport-fit wrapper */}
      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        {/* Breadcrumbs */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginBottom: '20px' }}
        >
          <Breadcrumbs
            items={[
              { name: 'Home', url: '/' },
              { name: 'Services', url: '/services' },
              { name: 'Personal Loan Settlement', url: '/services/personal-loan-settlement' }
            ]}
          />
        </section>

        {/* Hero: left copy under logo, right image */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            {/* Right visual - comes first on mobile */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto lg:-mt-30 lg:ml-30 order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              {/* Blurred edge layer: only show left/right edges using mask */}
              <img
                src="/personalhero.png"
                alt=""
                aria-hidden
                className="hidden lg:block"
                style={{
                  position: 'absolute',
                  width: '100%',
                  maxWidth: '520px',
                  height: 'auto',
                  transform: 'rotate(335deg)',
                  transformOrigin: 'center',
                  filter: 'blur(6px)',
                  opacity: 0.9,
                  WebkitMaskImage:
                    'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)',
                  maskImage:
                    'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)'
                }}
              />
              {/* Main image */}
              <img
                src="/personalhero.png"
                alt="Personal Loan Settlement"
                className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]"
                style={{
                  height: 'auto',
                  transform: 'rotate(335deg)',
                  transformOrigin: 'center'
                }}
              />
            </div>

            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1
                className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  marginBottom: '12px'
                }}
              >
                Personal Loan Settlement: Your Path to Freedom
              </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                Is your personal loan causing stress? CredSettle offers expert Personal Loan
                Settlement services to significantly reduce your financial burden. Our RBI-compliant
                debt settlement process helps thousands of Indians achieve financial freedom through
                legal loan settlement solutions.
              </p>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                Personal loan settlement is a legitimate process in India that allows borrowers to
                negotiate a reduced payoff amount with their lenders. At CredSettle, our legal team
                specializes in personal loan settlement services, working directly with banks and
                NBFCs to secure the best possible settlement terms for our clients.
              </p>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              >
                Our legal team negotiates a formal, affordable One-Time Settlement (OTS) that
                strictly adheres to RBI guidelines. We empower you to reclaim control, stop
                harassment from recovery agents, and secure a debt-free future. Our debt settlement
                company ensures all negotiations follow Indian banking regulations, providing you
                with complete legal protection throughout the settlement process.
              </p>
              <button
                className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px]"
                style={{
                  borderRadius: '32.4px',
                  background: '#007AFF',
                  boxShadow:
                    '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset'
                }}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Below: reviews + dividers + two value props in a single row */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{
            maxWidth: '1280px',
            marginTop: '28px'
          }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '28px' }}>
            {/* Reviews column (similar to HeroSection small cards) */}
            <div className="flex flex-col lg:flex-col gap-4 lg:gap-3 w-full lg:w-auto lg:justify-start" style={{ maxWidth: '100%' }}>
              <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                <div className="w-1/2 flex justify-center items-center">
                  <img src="/ggle.png" alt="Google Reviews - CredSettle" className="h-6 lg:h-[29.16px]" />
                </div>
                <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                  <div className="flex justify-center items-center" style={{ gap: '6.48px' }}>
                    <img src="/stars.png" alt="5 Star Rating - CredSettle" className="h-3 lg:h-[12.96px]" />
                    <span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div>
                  </div>
                </div>
              </div>
              <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                <div className="w-1/2 flex justify-center items-center">
                  <img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" className="h-6 lg:h-[29.16px]" />
                </div>
                <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                  <div className="flex justify-center items-center" style={{ gap: '6.48px' }}>
                    <img src="/stars.png" alt="5 Star Rating - CredSettle" className="h-3 lg:h-[12.96px]" />
                    <span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span>
                  </div>
                  <div className="text-center">
                    <div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider - Vertical for desktop only */}
            <div
              className="hidden lg:block"
              style={{
                width: '8px',
                height: '228px',
                flexShrink: 0,
                borderRadius: '30px',
                background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
              }}
            />

            {/* Legally Compliant Process */}
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              {/* Divider on left for mobile */}
              <div
                className="lg:hidden flex-shrink-0"
                style={{
                  width: '8px',
                  height: '100%',
                  minHeight: '60px',
                  borderRadius: '30px',
                  background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
                }}
              />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Legally Compliant Process</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>
                  We operate with absolute integrity. Every negotiation is strategically executed by our
                  legal team, ensuring strict adherence to RBI guidelines and Indian financial law,
                  providing you with total legal protection.
                </p>
              </div>
            </div>

            {/* Divider - Vertical for desktop only */}
            <div
              className="hidden lg:block"
              style={{
                width: '8px',
                height: '228px',
                flexShrink: 0,
                borderRadius: '30px',
                background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
              }}
            />

            {/* Reduced Principal Guarantee */}
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              {/* Divider on left for mobile */}
              <div
                className="lg:hidden flex-shrink-0"
                style={{
                  width: '8px',
                  height: '100%',
                  minHeight: '60px',
                  borderRadius: '30px',
                  background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
                }}
              />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Reduced Principal Guarantee</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>
                  We focus exclusively on delivering a tangible result: a formal, legal One-Time
                  Settlement (OTS) that makes your debt a done deal. Our aim is always a significantly
                  reduced principal amount to secure your financial freedom.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why CredSettle Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginTop: '48px',
            marginBottom: '28.8px'
          }}
        >
          {/* Centered Heading */}
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '9.6px', marginBottom: '19.2px' }}>
            <h2
              className="text-2xl md:text-3xl lg:text-[32px] leading-tight"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '36px'
              }}
            >
              Why CredSettle is Your Best Resolution
              <br />
              Partner
            </h2>
            <p
              className="text-xs md:text-sm lg:text-[14px]"
              style={{
                color: 'rgba(12, 39, 86, 0.70)',
                fontFamily: 'Poppins',
                lineHeight: '20px'
              }}
            >
              The six core benefits that ensure a protected, successful, and final debt settlement.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" style={{ gap: '19.2px' }}>
            {[
              {
                title: 'Specialized Expertise',
                body:
                  'Expert legal negotiators specializing exclusively in debt settlement, RBI compliance, and financial dispute resolution.'
              },
              {
                title: 'End-to-End Protection',
                body:
                  'Complete assistance from initial debt analysis through to final legal settlement and creditworthiness restoration.'
              },
              {
                title: 'Client-Focused Dignity',
                body:
                  'Customized legal strategies based on your unique financial situation, prioritizing your peace of mind and protecting you from harassment.'
              },
              {
                title: 'Proven Track Record',
                body:
                  'Successfully achieved reduced principal amounts and secured formal One-Time Settlements (OTS) for thousands of clients.'
              },
              {
                title: 'Strategic Negotiation',
                body:
                  'Combination of legal knowledge and strategic negotiation for the optimal financial outcome in every settlement case.'
              },
              {
                title: 'Swift & Final Resolution',
                body:
                  'Efficient handling of settlement cases to minimize financial impact and deliver a formal, legal settlement that makes your debt a done deal.'
              }
            ].map((card, i) => (
              <div
                key={i}
                className="p-6 md:p-8 lg:p-[48.8px]"
                style={{
                  borderRadius: '40px',
                  background:
                    'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)',
                  boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10), 4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                  backdropFilter: 'blur(12.350000381469727px)'
                }}
              >
                <h3
                  className="mb-2 text-base md:text-lg lg:text-[18px]"
                  style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700 }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-xs md:text-sm lg:text-[14px]"
                  style={{
                    color: '#0C2756',
                    opacity: 0.8,
                    fontFamily: 'Poppins',
                    lineHeight: '20px'
                  }}
                >
                  {card.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats + Partner Callout Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{ maxWidth: '1280px', marginTop: '36px', marginBottom: '24px' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* Left: 2x2 stat cards with central radial gradient */}
            <div className="relative">
              {/* Radial gradient at the intersection */}
              <div
                aria-hidden
                className="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  borderRadius: '9999px',
                  background: 'radial-gradient(closest-side, rgba(0,122,255,0.30), rgba(0,122,255,0.16) 55%, rgba(0,122,255,0.0) 80%)',
                  filter: 'blur(4px)',
                  pointerEvents: 'none',
                  zIndex: 0
                }}
              />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {/* Card 1 */}
                <div
                  className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12"
                  style={{
                    borderRadius: '40px',
                    background: 'rgba(239, 247, 255, 0.30)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>12,500+</h3>
                  <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                    Successful Settlements Secured  Families and businesses transitioned from debt struggle to financial freedom.
                  </p>
                </div>
                {/* Card 2 */}
                <div
                  className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12"
                  style={{
                    borderRadius: '40px',
                    background: 'rgba(239, 247, 255, 0.30)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>4.9/5</h3>
                  <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                    Client Satisfaction Rating  Our commitment to dignity, transparency, and legal excellence is reflected in our client reviews.
                  </p>
                </div>
                {/* Card 3 */}
                <div
                  className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12"
                  style={{
                    borderRadius: '40px',
                    background: 'rgba(239, 247, 255, 0.30)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>₹ 680 Crores+</h3>
                  <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                    Debt Principal Reduced  Total principal debt negotiated down and saved for our clients via strategic OTS.
                  </p>
                </div>
                {/* Card 4 */}
                <div
                  className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-[38px]"
                  style={{
                    borderRadius: '40px',
                    background: 'rgba(239, 247, 255, 0.30)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)'
                  }}
                >
                  <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>100%</h3>
                  <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                    RBI Compliance Guaranteed  Every negotiation strictly follows regulatory guidelines, ensuring legal protection for you.
                  </p>
                </div>
              </div>
            </div>

            {/* Right: partner heading, description, and image */}
            <div className="flex flex-col items-center lg:items-end justify-between mt-8 lg:mt-0" style={{ gap: '16px' }}>
              <div className="w-full text-center lg:text-right">
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px'
                  }}
                >
                  Why CredSettle is Your Best Resolution Partner
                </h2>
                <p
                  className="text-xs md:text-sm lg:text-[14px] mt-2"
                  style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}
                >
                  The six core benefits that ensure a protected, successful, and final debt settlement.
                </p>
              </div>

              <div className="w-full flex justify-center lg:justify-end lg:-mt-20" style={{ marginRight: '0' }}>
                <img
                  src="/belowservices/Personal%20Loan.png"
                  alt="Personal Loan"
                  className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]"
                  style={{
                    height: 'auto',
                    borderRadius: '0px',
                    transform: 'none',
                    display: 'block',
                    objectFit: 'contain'
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="Personal loan" />

        {/* States & Union Territories Grid Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginTop: '36px',
            marginBottom: '36px'
          }}
        >
          {/* Centered Heading */}
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '6px', marginBottom: '20px' }}>
            <h2
              className="text-xl md:text-2xl lg:text-[28px] leading-tight"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '32px'
              }}
            >
              We Serve Across India
            </h2>
            <p
              className="text-xs md:text-sm lg:text-[13px]"
              style={{
                color: 'rgba(12, 39, 86, 0.70)',
                fontFamily: 'Poppins',
                lineHeight: '18px'
              }}
            >
              Personal loan settlement services in all states and union territories
            </p>
          </div>

          {/* States & UT Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3" style={{ gap: '12px' }}>
            {[
              'Andaman and Nicobar Islands',
              'Andhra Pradesh',
              'Arunachal Pradesh',
              'Assam',
              'Bihar',
              'Chandigarh',
              'Chhattisgarh',
              'Dadra and Nagar Haveli and Daman and Diu',
              'Delhi',
              'Goa',
              'Gujarat',
              'Haryana',
              'Himachal Pradesh',
              'Jammu and Kashmir',
              'Jharkhand',
              'Karnataka',
              'Kerala',
              'Ladakh',
              'Lakshadweep',
              'Madhya Pradesh',
              'Maharashtra',
              'Manipur',
              'Meghalaya',
              'Mizoram',
              'Nagaland',
              'Odisha',
              'Puducherry',
              'Punjab',
              'Rajasthan',
              'Sikkim',
              'Tamil Nadu',
              'Telangana',
              'Tripura',
              'Uttar Pradesh',
              'Uttarakhand',
              'West Bengal'
            ].map((state, index) => {
              const slug = generateSlug(state);
              const metroCities = ['Maharashtra', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Uttar Pradesh', 'Delhi', 'West Bengal', 'Gujarat', 'Haryana', 'Tamil Nadu', 'Rajasthan'];
              const isMetroCity = metroCities.includes(state);
              return (
                <Link
                  key={index}
                  href={`/services/personal-loan-settlement/${slug}`}
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                  style={{
                    borderRadius: '24px',
                    background: isMetroCity 
                      ? 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)'
                      : 'rgba(239, 247, 255, 0.30)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
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
                    className="text-[10px] md:text-xs lg:text-[12px]"
                    style={{
                      color: isMetroCity ? '#FFFFFF' : '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      lineHeight: '16px',
                      margin: 0
                    }}
                  >
                    {state}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FAQ + CTA (mirrors home page styling, tailored to this service) */}
        <section className="w-full py-12">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              {/* Header and FAQ Items Container */}
              <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[76px] w-full">
                {/* Left: Header Section */}
                <div className="flex flex-col items-start gap-[21px] w-full lg:w-[365px]">
                  <h2 className="text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-bold">
                    <span style={{ color: '#0C2756' }}>Personal Loan Settlement{`\n`}<br /> FAQs — </span>
                    <span style={{ color: '#007AFF' }}>Answered.</span>
                  </h2>
                  <p className="text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] font-normal">
                    <span style={{ color: '#0C2756' }}>Need more details? </span>
                    <span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span>
                    <span style={{ color: '#0C2756' }}> anytime.</span>
                  </p>
                </div>

                {/* Right: FAQ Items - Aligned to right end */}
                <div className="w-full lg:w-[800px] lg:ml-auto p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
                  <div className="flex flex-col gap-4">
                    {[
                      {
                        q: 'How does personal loan settlement differ from credit card settlement?',
                        a:
                          'Personal loans are term loans with fixed schedules and agreements. Our team negotiates an OTS with the lender for a reduced principal or lump-sum closure, ensuring full RBI compliance and proper closure letters.'
                      },
                      {
                        q: 'Will my CIBIL score be affected during the settlement process?',
                        a:
                          'Scores can be impacted in the short term with a “settled” remark, but we focus on legally closing the account and guiding you on credit rehabilitation so your creditworthiness improves over time.'
                      },
                      {
                        q: 'Can CredSettle stop harassment from recovery agents for personal loans?',
                        a:
                          'Yes. We intervene legally, route communications through us, and file formal complaints with the appropriate authorities when needed to stop harassment immediately.'
                      },
                      {
                        q: 'What documents will I receive after the OTS is completed?',
                        a:
                          'You receive formal OTS letters, payment acknowledgments, and a loan closure letter/NOC from the lender to confirm the finality of the settlement.'
                      },
                      {
                        q: 'How much can the principal typically be reduced?',
                        a:
                          'Reduction varies by lender and case strength. Our goal is always a significantly reduced principal, and we negotiate based on your financials, payment capacity, and the lender’s policies.'
                      }
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden"
                        onClick={() => setFaqOpenIndex(faqOpenIndex === index ? null : index)}
                      >
                        <div className="flex justify-between items-start gap-[49px] p-[21px_28px]">
                          <p className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal flex-1" style={{ color: '#0C2756' }}>
                            {item.q}
                          </p>
                          <div className="flex-shrink-0 w-[16px] h-[16px] relative">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 23 23"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className="transition-all duration-500 ease-in-out"
                              style={{ transform: faqOpenIndex === index ? 'rotate(45deg)' : 'rotate(0deg)' }}
                            >
                              <path d="M11.5 0C12.3284 0 13 0.671573 13 1.5V10H21.5C22.3284 10 23 10.6716 23 11.5C23 12.3284 22.3284 13 21.5 13H13V21.5C13 22.3284 12.3284 23 11.5 23C10.6716 23 10 22.3284 10 21.5V13H1.5C0.671573 13 0 12.3284 0 11.5C0 10.6716 0.671573 10 1.5 10H10V1.5C10 0.671573 10.6716 0 11.5 0Z" fill="black" />
                            </svg>
                          </div>
                        </div>
                        <div
                          className="transition-all duration-500 ease-in-out overflow-hidden"
                          style={{
                            maxHeight: faqOpenIndex === index ? '200px' : '0px',
                            opacity: faqOpenIndex === index ? 1 : 0,
                            paddingTop: faqOpenIndex === index ? '12px' : '0px',
                            paddingBottom: faqOpenIndex === index ? '21px' : '0px',
                            paddingLeft: '28px',
                            paddingRight: '28px'
                          }}
                        >
                          <div className="border-t border-gray-200 pt-3">
                            <p className="text-[11px] md:text-[13px] leading-[14px] md:leading-[15px] font-normal" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>
                              {item.a}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA Section */}
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
                      Ready to Close Your Personal Loan Legally?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Secure an RBI-compliant One-Time Settlement and end harassment—start your path to freedom today.
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90"
                    style={{
                      boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                    }}
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

        {/* Comprehensive Content Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginTop: '60px', marginBottom: '40px' }}
        >
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-10" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
            <h2
              className="text-xl md:text-2xl lg:text-[28px] leading-tight mb-6"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '36px'
              }}
            >
              Understanding Personal Loan Settlement in India
            </h2>
            
            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                What is Personal Loan Settlement?
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Personal loan settlement, also known as One-Time Settlement (OTS), is a legal
                process where borrowers negotiate with lenders to pay a reduced amount to settle
                their outstanding personal loan debt. This debt settlement process is completely
                legal in India and follows RBI guidelines for loan settlement. When you're
                struggling with personal loan repayment, settlement offers a way to resolve your
                debt without facing legal action or continuous harassment from recovery agents.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                CredSettle specializes in personal loan settlement services across India, helping
                clients negotiate with banks and NBFCs to achieve significant reductions in their
                outstanding loan amounts. Our legal team ensures all settlements comply with RBI
                regulations, providing you with a legitimate debt resolution solution.
              </p>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                How Personal Loan Settlement Works
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                The personal loan settlement process begins with a comprehensive analysis of your
                financial situation and outstanding debt. Our expert negotiators then contact your
                lender (bank or NBFC) to initiate settlement discussions. We leverage our
                knowledge of RBI guidelines and banking regulations to negotiate the best possible
                settlement terms for you.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Once a settlement amount is agreed upon, we help you obtain a formal settlement
                letter from the lender, which legally documents the agreed-upon terms. This
                settlement letter protects you from future claims and ensures the debt is
                permanently resolved. Throughout this process, CredSettle also provides harassment
                protection, stopping illegal recovery agent calls and threats.
              </p>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                Benefits of Personal Loan Settlement with CredSettle
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Choosing CredSettle for your personal loan settlement offers numerous advantages.
                Our debt settlement company provides complete legal protection, ensuring all
                negotiations follow RBI-compliant processes. We typically achieve 30-70% reductions
                in outstanding loan amounts, significantly reducing your financial burden.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Beyond financial savings, our loan settlement services include immediate harassment
                protection. Once CredSettle takes over your case, we legally intervene to stop all
                recovery agent harassment, giving you peace of mind. Our expert legal team handles
                all communication with lenders, allowing you to focus on rebuilding your financial
                future without the stress of constant calls and threats.
              </p>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                RBI Guidelines for Personal Loan Settlement
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                The Reserve Bank of India (RBI) has established clear guidelines for loan
                settlement processes in India. These RBI guidelines ensure that debt settlement
                procedures are fair, transparent, and legally compliant. At CredSettle, we strictly
                adhere to all RBI regulations, ensuring your settlement is legitimate and protects
                your legal rights as a borrower.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Our loan settlement company ensures that all settlements are properly documented
                with formal settlement letters, protecting you from future disputes. We also help
                you understand your rights under Indian banking regulations, including protection
                from illegal harassment by recovery agents. This RBI-compliant approach ensures
                your debt settlement is legally sound and provides permanent resolution to your
                financial challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Related Content */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginTop: '60px' }}
        >
          <RelatedContent
            title="Related Services"
            items={[
              {
                title: 'Credit Card Settlement',
                url: '/services/credit-card-settlement',
                description: 'Settle your credit card debts with RBI-compliant solutions'
              },
              {
                title: 'Business Loan Settlement',
                url: '/services/business-loan-settlement',
                description: 'Expert negotiation for business loan settlements'
              },
              {
                title: 'Anti-Harassment Protection',
                url: '/services/anti-harassment',
                description: 'Stop recovery agent harassment immediately'
              },
              {
                title: 'Credit Score Builder',
                url: '/services/credit-score-builder',
                description: 'Improve your credit score after settlement'
              }
            ]}
          />
        </section>
      </div>
      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}


