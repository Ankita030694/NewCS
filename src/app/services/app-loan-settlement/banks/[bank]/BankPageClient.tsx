'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';
import { BankContent } from '../../banks-content';

interface BankPageClientProps {
  content: BankContent;
  headings: Array<{ id: string; text: string; level: number }>;
}

export default function BankPageClient({ content, headings }: BankPageClientProps) {
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
                src="/app_hero.png"
                alt={`${content.bankName} App Loan Settlement`}
                className="w-full max-w-[280px] md:max-w-[350px] lg:max-w-[420px]"
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
                {content.heroTitle}
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
                    '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset',
                  cursor: 'pointer'
                }}
                onClick={() => window.location.href = '/contact'}
              >
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Table of Contents Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{
            maxWidth: '1280px',
            marginBottom: '48px'
          }}
        >
          <TableOfContents headings={headings} />
        </section>

        {/* Main Content Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginBottom: '48px',
            position: 'relative'
          }}
        >
          <div style={{ minHeight: '100vh' }}>
              {/* H2: Why People Choose App Loan Settlement with [Bank Name] */}
              {content.whyChooseSettlement && (
                <section id="why-choose-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    Why People Choose App Loan Settlement with {content.bankName}
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.whyChooseSettlement}</p>
                  </div>
                </section>
              )}

              {/* H2: Understanding [Bank Name] App Loan Settlement Process */}
              {content.understandingSettlement && (
                <section id="understanding-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    Understanding {content.bankName} App Loan Settlement Process
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.understandingSettlement}</p>
                  </div>
                </section>
              )}

              {/* H2: How CredSettle Helps You Settle [Bank Name] App Loan Dues Legally */}
              {content.howCredSettleHelps && (
                <section id="how-credsettle-helps" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    How CredSettle Helps You Settle {content.bankName} App Loan Dues Legally
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.howCredSettleHelps}</p>
                  </div>
                </section>
              )}

              {/* H2: Impact of App Loan Settlement on Your CIBIL Score */}
              {content.cibilImpact && (
                <section id="cibil-impact" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    Impact of App Loan Settlement on Your CIBIL Score
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.cibilImpact}</p>
                  </div>
                </section>
              )}

              {/* H2: Why Choose CredSettle for [Bank Name] App Loan Settlement */}
              {content.whyChooseCredSettle && (
                <section id="why-choose-credsettle" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    Why Choose CredSettle for {content.bankName} App Loan Settlement
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.whyChooseCredSettle}</p>
                  </div>
                </section>
              )}

              {/* H2: Step-by-Step Process to Start Your [Bank Name] App Loan Settlement */}
              {content.stepByStepProcess && (
                <section id="step-by-step-process" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    Step-by-Step Process to Start Your {content.bankName} App Loan Settlement
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px', whiteSpace: 'pre-line' }}>{content.stepByStepProcess}</p>
                  </div>
                </section>
              )}

              {/* H2: Documents Required for [Bank Name] App Loan Settlement */}
              {content.documentsRequired && (
                <section id="documents-required" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                    Documents Required for {content.bankName} App Loan Settlement
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    <p style={{ marginBottom: '16px' }}>{content.documentsRequired}</p>
                  </div>
                </section>
              )}

          </div>
        </section>

        {/* FAQ + CTA Section - Full Width */}
        {content.faqs && content.faqs.length > 0 && (
          <section id="faqs" className="w-full py-12" style={{ scrollMarginTop: '100px' }}>
            <div className="w-full max-w-7xl mx-auto px-4">
              <div className="flex flex-col items-center gap-8 md:gap-14">
                {/* FAQ Section */}
                <div className="w-full">
                  <FAQWithSchema 
                    faqs={content.faqs} 
                    title={`${content.bankName} App Loan Settlement`}
                  />
                </div>

                {/* CTA Section */}
                <div
                  id="get-legal-help"
                  className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                  style={{
                    background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                    boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)',
                    scrollMarginTop: '100px'
                  }}
                >
                  <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                    {/* Text Content */}
                    <div className="flex flex-col items-center gap-[28px] w-full">
                      <h2
                        className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                        style={{ color: '#0C2756' }}
                      >
                        Ready to Settle Your {content.bankName} App Loan Dues Legally?
                      </h2>
                      <p
                        className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                        style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                      >
                        Get professional legal assistance from CredSettle's lawyer panel. Stop harassment, navigate app loan policies, secure an RBI-compliant One-Time Settlement, and protect your data privacy—start your path to freedom today.
                      </p>
                    </div>

                    {/* CTA Button */}
                    <CTAButton>
                      Talk to a Legal Expert Today
                    </CTAButton>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}



