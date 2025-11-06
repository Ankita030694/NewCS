'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

interface StatePageClientProps {
  content: {
    bankName: string;
    stateName: string;
    heroTitle: string;
    heroDescription: string;
    whyChooseSettlement?: string;
    understandingSettlement?: string;
    howCredSettleHelps?: string;
    cibilImpact?: string;
    whyChooseCredSettle?: string;
    stepByStepProcess?: string;
    documentsRequired?: string;
    faqs?: Array<{ question: string; answer: string }>;
  };
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
        {/* Hero */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px', marginBottom: '48px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            {/* Right visual - comes first on mobile */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img src="/business_hero.png" alt={`${content.bankName} Business Loan Settlement in ${content.stateName}`} className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }} />
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 400, marginBottom: '12px' }}>{content.heroTitle}</h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '20px' }}>{content.heroDescription}</p>
            </div>
          </div>
        </section>

        {/* Content with TOC */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginBottom: '48px', position: 'relative' }}>
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="w-full lg:w-auto lg:flex-shrink-0">
              <TableOfContents headings={headings} />
            </div>

            <div className="flex-1 w-full lg:w-auto" style={{ minWidth: '0', minHeight: '100vh' }}>
              {content.whyChooseSettlement && (
                <section id="why-choose-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>Why {content.stateName} Businesses Choose Settlement with {content.bankName}</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px' }}>{content.whyChooseSettlement}</p>
                  </div>
                </section>
              )}

              {content.understandingSettlement && (
                <section id="understanding-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>Understanding {content.bankName} Business Loan Settlement in {content.stateName}</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px' }}>{content.understandingSettlement}</p>
                  </div>
                </section>
              )}

              {content.howCredSettleHelps && (
                <section id="how-credsettle-helps" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>How CredSettle Helps {content.stateName} Businesses Settle with {content.bankName}</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px' }}>{content.howCredSettleHelps}</p>
                  </div>
                </section>
              )}

              {content.cibilImpact && (
                <section id="cibil-impact" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>Impact on Credit after Settlement in {content.stateName}</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px' }}>{content.cibilImpact}</p>
                  </div>
                </section>
              )}

              {content.whyChooseCredSettle && (
                <section id="why-choose-credsettle" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>Why Choose CredSettle in {content.stateName}</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px' }}>{content.whyChooseCredSettle}</p>
                  </div>
                </section>
              )}

              {content.stepByStepProcess && (
                <section id="step-by-step-process" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>Step-by-Step Process</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px', whiteSpace: 'pre-line' }}>{content.stepByStepProcess}</p>
                  </div>
                </section>
              )}

              {content.documentsRequired && (
                <section id="documents-required" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px', marginBottom: '20px' }}>Documents Required</h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '28px' }}>
                    <p style={{ marginBottom: '16px' }}>{content.documentsRequired}</p>
                  </div>
                </section>
              )}
            </div>
          </div>
        </section>

        {content.faqs && content.faqs.length > 0 && (
          <section id="faqs" className="w-full py-12" style={{ scrollMarginTop: '100px' }}>
            <div className="w-full max-w-7xl mx-auto px-4">
              <FAQWithSchema faqs={content.faqs} title={`${content.bankName} Business Loan Settlement in ${content.stateName}`} />
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






