'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import { StateContent } from '../states-content';

interface StatePageClientProps {
  content: StateContent;
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function StatePageClient({ content, headings }: StatePageClientProps) {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {/* Background Circle Effect */}
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

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        {/* Hero Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginBottom: '48px' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            {/* Right visual - comes first on mobile */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img
                src="/business_hero.png"
                alt={content.stateName}
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
                {content.heroTitle || `Business Loan Settlement in ${content.stateName} – Stabilize & Grow Again with CredSettle`}
              </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              >
                {content.heroDescription}
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

        {/* Main Content Section with TOC */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginBottom: '48px',
            position: 'relative'
          }}
        >
          <div 
            className="flex flex-col gap-4 lg:gap-8" 
            style={{ 
              alignItems: 'flex-start',
              position: 'relative'
            }}
          >
            {/* Table of Contents */}
            <div className="w-full">
              <TableOfContents headings={headings} />
            </div>

            {/* Main Content */}
            <div className="w-full" style={{ minWidth: '0', minHeight: '100vh' }}>
              {/* H2: Why Business Loan Settlement Is Critical */}
              {content.whyBusinessLoanSettlement && (
                <section id="why-business-loan-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Why Business Loan Settlement Is Critical for {content.stateName} Businesses
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.whyBusinessLoanSettlement}</p>
                  </div>
                </section>
              )}

              {/* H2: Common Business Loan Problems */}
              {content.commonBusinessLoanProblems && (
                <section id="common-business-loan-problems" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Common Business Loan Problems Faced in {content.stateName}
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.commonBusinessLoanProblems}</p>
                  </div>
                </section>
              )}

              {/* H2: CredSettle - India's Trusted Business Loan Settlement Company */}
              {content.credsettleOverview && (
                <section id="credsettle-overview" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    CredSettle - India&apos;s Trusted Business Loan Settlement Company
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.credsettleOverview}</p>
                    
                    {/* H3: Our RBI-Compliant Business Loan Settlement Process */}
                    {content.rbiCompliantProcess && (
                      <div id="rbi-compliant-process" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                        <h3
                          className="text-lg md:text-xl lg:text-[24px] leading-tight"
                          style={{
                            color: '#0C2756',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            lineHeight: '32px',
                            marginBottom: '16px'
                          }}
                        >
                          Our RBI-Compliant Business Loan Settlement Process
                        </h3>
                        <p style={{ marginBottom: '16px' }}>{content.rbiCompliantProcess}</p>
                      </div>
                    )}

                    {/* H3: How CredSettle Helps You Negotiate with Banks & NBFCs */}
                    {content.negotiationHelp && (
                      <div id="negotiation-help" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                        <h3
                          className="text-lg md:text-xl lg:text-[24px] leading-tight"
                          style={{
                            color: '#0C2756',
                            fontFamily: 'Poppins',
                            fontWeight: 600,
                            lineHeight: '32px',
                            marginBottom: '16px'
                          }}
                        >
                          How CredSettle Helps You Negotiate with Banks & NBFCs
                        </h3>
                        <p style={{ marginBottom: '16px' }}>{content.negotiationHelp}</p>
                      </div>
                    )}
                  </div>
                </section>
              )}

              {/* H2: Legal Support through Our Lawyer Panel */}
              {content.legalSupport && (
                <section id="legal-support" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Legal Support through Our Lawyer Panel
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.legalSupport}</p>
                  </div>
                </section>
              )}

              {/* H2: Benefits of Choosing CredSettle */}
              {content.benefits && (
                <section id="benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Benefits of Choosing CredSettle for Business Loan Settlement in {content.stateName}
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.benefits}</p>
                  </div>
                </section>
              )}

              {/* H2: RBI Guidelines & Legal Rights */}
              {content.rbiGuidelines && (
                <section id="rbi-guidelines" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    RBI Guidelines & Legal Rights of Business Borrowers
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.rbiGuidelines}</p>
                  </div>
                </section>
              )}

              {/* H2: Step-by-Step Guide */}
              {content.stepByStepGuide && (
                <section id="step-by-step-guide" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Step-by-Step Guide to Start Business Loan Settlement with CredSettle
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.stepByStepGuide}</p>
                  </div>
                </section>
              )}

              {/* H2: Real Case Study */}
              {content.caseStudy && (
                <section id="case-study" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Real Case Study: Business Loan Settlement Success in {content.stateName}
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.caseStudy}</p>
                  </div>
                </section>
              )}

              {/* H2: Final Thoughts */}
              {content.finalThoughts && (
                <section id="final-thoughts" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2
                    className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                    style={{
                      color: '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      lineHeight: '36px',
                      marginBottom: '20px'
                    }}
                  >
                    Final Thoughts - Take the First Step Toward a Debt-Free Business
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.finalThoughts}</p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>

        {/* FAQ + CTA Section */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              {/* FAQ */}
              <FAQWithSchema
                faqs={content.faqs}
                title={`Business Loan Settlement in ${content.stateName}`}
              />

              {/* CTA Section */}
              <div
                className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2
                      className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                      style={{ color: '#0C2756' }}
                    >
                      Ready to Settle Your Business Loan?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Stop harassment and secure your RBI-compliant settlement for a debt-free business future.
                    </p>
                  </div>

                  <button
                    className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90"
                    style={{
                      boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                    }}
                  >
                    <span
                      className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal"
                      style={{ color: '#0C2756' }}
                    >
                      Get Your Free Consultation
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}

