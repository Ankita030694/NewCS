'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import Breadcrumbs from '@/components/Breadcrumbs';
import RelatedContent from '@/components/RelatedContent';
import FAQWithSchema from '@/components/FAQWithSchema';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { generateSlug } from './states-content';

export default function PersonalLoanSettlementPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const personalLoanFaqs = [
    {
      question: 'How does personal loan settlement differ from credit card settlement?',
      answer:
        'Personal loans are closed-ended term loans. We negotiate a One-Time Settlement with the lending bank or NBFC to reduce the principal and interest burden while ensuring the account is legally closed with proper documentation.'
    },
    {
      question: 'Will my CIBIL score be affected during the settlement process?',
      answer:
        'A temporary dip is possible because the account is reported as “settled.” However, this is preferable to a charge-off. We provide a credit rehabilitation roadmap so you can rebuild your score within 12-18 months.'
    },
    {
      question: 'Can CredSettle stop harassment from recovery agents for personal loans?',
      answer:
        'Yes. We route all communications through our legal desk, document violations, and escalate to RBI or police authorities when required so harassment ceases quickly.'
    },
    {
      question: 'What documents will I receive after the OTS is completed?',
      answer:
        'You receive the formal settlement sanction letter, payment acknowledgments, and the lender’s closure letter or No Objection Certificate confirming that no further dues remain.'
    },
    {
      question: 'How much can the principal typically be reduced?',
      answer:
        'The reduction depends on lender policies, delinquency stage, and your negotiation leverage. Our cases typically achieve 40-60% reductions while keeping the agreement fully RBI-compliant.'
    }
  ];

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

        {/* Understanding Personal Loan Settlement Section - Directly Under Hero */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '36px' }}
        >
          <div className="bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 rounded-3xl p-6 md:p-8 lg:p-12" style={{ boxShadow: '0 4px 20px rgba(0, 122, 255, 0.08)', border: '1px solid rgba(0, 122, 255, 0.1)' }}>
            <h2
              className="text-2xl md:text-3xl lg:text-[32px] leading-tight mb-6"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '42px'
              }}
            >
              Understanding Personal Loan Settlement in India: A Complete Guide
            </h2>
            
            {/* What is Personal Loan Settlement */}
            <div className="mb-8">
              <h3
                className="text-xl md:text-2xl lg:text-[24px] mb-4 flex items-center gap-3"
                style={{
                  color: '#007AFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '32px'
                }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[16px] font-bold" style={{ color: '#007AFF' }}>1</span>
                What is Personal Loan Settlement?
              </h3>
              <p
                className="text-sm md:text-base lg:text-[15px] leading-relaxed mb-4 pl-11"
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  lineHeight: '26px'
                }}
              >
                Personal loan settlement, officially termed <strong>One-Time Settlement (OTS)</strong>, is a formal debt resolution mechanism recognized by the Reserve Bank of India (RBI). In simple terms, it's a negotiated agreement between you (the borrower) and your lender (bank or NBFC) where you pay a <strong>reduced lump-sum amount</strong> instead of the full outstanding debt to legally close your loan account.
              </p>
              <p
                className="text-sm md:text-base lg:text-[15px] leading-relaxed mb-4 pl-11"
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  lineHeight: '26px'
                }}
              >
                This process is <strong>completely legal</strong> under Indian banking law and follows structured RBI guidelines. When financial hardships like job loss, medical emergencies, business failures, or income disruptions make it impossible to continue regular EMI payments, personal loan settlement provides a legitimate exit strategy that prevents legal action, stops harassment, and gives you a fresh financial start.
              </p>
              <div className="pl-11 p-4 rounded-xl" style={{ background: 'rgba(0, 122, 255, 0.05)', border: '1px solid rgba(0, 122, 255, 0.15)' }}>
                <p className="text-sm md:text-base lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                  <strong style={{ color: '#007AFF' }}>Key Fact:</strong> Typically, settlement amounts range between <strong>40% to 80%</strong> of your total outstanding debt, meaning you could save <strong>20% to 60%</strong> of what you originally owed. CredSettle's legal team negotiates to secure the lower end of this range, maximizing your savings while ensuring full RBI compliance.
                </p>
              </div>
            </div>

            {/* How Does the OTS Process Work */}
            <div className="mb-8">
              <h3
                className="text-xl md:text-2xl lg:text-[24px] mb-4 flex items-center gap-3"
                style={{
                  color: '#007AFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '32px'
                }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[16px] font-bold" style={{ color: '#007AFF' }}>2</span>
                How Does the OTS Process Actually Work?
              </h3>
              <p
                className="text-sm md:text-base lg:text-[15px] leading-relaxed mb-4 pl-11"
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  lineHeight: '26px'
                }}
              >
                Personal loan settlement follows a structured, multi-step process designed to protect both borrowers and lenders. Here's how CredSettle guides you through each stage:
              </p>
              <div className="pl-11 space-y-4">
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold mt-1" style={{ background: '#007AFF', color: 'white' }}>i</div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>Financial Assessment & NPA Status Verification</h4>
                    <p className="text-sm md:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                      We begin by analyzing your complete financial situation: outstanding loan amount, EMI arrears, interest accumulated, and your current repayment capacity. For most banks to consider OTS, your loan typically needs to be classified as an <strong>NPA (Non-Performing Asset)</strong>, which happens when payments are overdue by <strong>90 days or more</strong>. Our team confirms your loan's classification status and documents your financial hardship.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold mt-1" style={{ background: '#007AFF', color: 'white' }}>ii</div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>Legal Intervention & Harassment Protection</h4>
                    <p className="text-sm md:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                      Once you engage CredSettle, we immediately send formal legal notices to your lender and any recovery agencies, directing all communication through our office. This <strong>immediately stops harassment</strong>. No more threatening calls, no more visits to your home or workplace. Our legal protection shields you throughout the entire settlement process.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold mt-1" style={{ background: '#007AFF', color: 'white' }}>iii</div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>Strategic Negotiation with Your Lender</h4>
                    <p className="text-sm md:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                      Our expert negotiators present your case to the lender's recovery or settlement department. We leverage your documented financial hardship, our knowledge of banking policies, and precedent settlements to propose a realistic <strong>reduced lump-sum payment</strong>. The negotiation focuses on achieving the lowest possible settlement amount, typically aiming for 40-60% of the outstanding principal, while ensuring the lender agrees to a complete and permanent debt waiver.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold mt-1" style={{ background: '#007AFF', color: 'white' }}>iv</div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>Formal Settlement Agreement & Documentation</h4>
                    <p className="text-sm md:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                      Once the lender agrees, we ensure you receive a <strong>written OTS agreement</strong> on the bank's letterhead. This critical document specifies the exact settlement amount, payment deadline, and confirms that upon payment, the loan account will be permanently closed with no future claims. We scrutinize every clause to protect your interests before you make any payment.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-semibold mt-1" style={{ background: '#007AFF', color: 'white' }}>v</div>
                  <div>
                    <h4 className="text-base md:text-lg font-semibold mb-1" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>Payment & Loan Closure Confirmation</h4>
                    <p className="text-sm md:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                      You make the agreed settlement payment as a lump sum (or in structured installments if negotiated). After payment, CredSettle ensures you receive the <strong>official loan closure letter or No Objection Certificate (NOC)</strong> from the lender. Per RBI guidelines, the lender must release all original property documents (if any) within <strong>30 days</strong> and remove any registered charges. We verify complete closure to ensure no future disputes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* When Should You Consider Personal Loan Settlement */}
            <div className="mb-8">
              <h3
                className="text-xl md:text-2xl lg:text-[24px] mb-4 flex items-center gap-3"
                style={{
                  color: '#007AFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '32px'
                }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[16px] font-bold" style={{ color: '#007AFF' }}>3</span>
                When Should You Consider Personal Loan Settlement?
              </h3>
              <p
                className="text-sm md:text-base lg:text-[15px] leading-relaxed mb-4 pl-11"
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  lineHeight: '26px'
                }}
              >
                Settlement is not for everyone. It's specifically designed for borrowers facing genuine financial hardship. Consider OTS if you're experiencing:
              </p>
              <div className="pl-11 grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
                <div className="p-4 rounded-lg" style={{ background: 'white', border: '1px solid rgba(0, 122, 255, 0.15)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#007AFF', fontFamily: 'Poppins' }}>✓ Job Loss or Income Reduction</p>
                  <p className="text-xs" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '18px' }}>Sudden unemployment or significant pay cuts making EMIs unaffordable</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'white', border: '1px solid rgba(0, 122, 255, 0.15)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#007AFF', fontFamily: 'Poppins' }}>✓ Medical Emergencies</p>
                  <p className="text-xs" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '18px' }}>Unexpected health crises draining your financial resources</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'white', border: '1px solid rgba(0, 122, 255, 0.15)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#007AFF', fontFamily: 'Poppins' }}>✓ Business Failure</p>
                  <p className="text-xs" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '18px' }}>Enterprise closures or losses preventing loan repayment</p>
                </div>
                <div className="p-4 rounded-lg" style={{ background: 'white', border: '1px solid rgba(0, 122, 255, 0.15)' }}>
                  <p className="text-sm font-semibold mb-1" style={{ color: '#007AFF', fontFamily: 'Poppins' }}>✓ Multiple Debt Burden</p>
                  <p className="text-xs" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '18px' }}>Overwhelmed by several loans with no path to full repayment</p>
                </div>
              </div>
            </div>

            {/* Impact on Your Credit Score - Honest Truth */}
            <div className="mb-8">
              <h3
                className="text-xl md:text-2xl lg:text-[24px] mb-4 flex items-center gap-3"
                style={{
                  color: '#007AFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '32px'
                }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[16px] font-bold" style={{ color: '#007AFF' }}>4</span>
                Impact on Your Credit Score: The Honest Truth
              </h3>
              <p
                className="text-sm md:text-base lg:text-[15px] leading-relaxed mb-4 pl-11"
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  lineHeight: '26px'
                }}
              >
                We believe in complete transparency: <strong>yes, personal loan settlement will impact your credit score in the short term</strong>. Here's exactly what happens and how to recover:
              </p>
              <div className="pl-11 p-5 rounded-xl mb-4" style={{ background: 'rgba(255, 152, 0, 0.05)', border: '1px solid rgba(255, 152, 0, 0.2)' }}>
                <h4 className="text-base font-semibold mb-2" style={{ color: '#FF9800', fontFamily: 'Poppins' }}>Credit Report Status Change</h4>
                <p className="text-sm mb-3" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '22px' }}>
                  When your loan is settled, credit bureaus (CIBIL, Experian, Equifax) mark the account as <strong>"Settled"</strong> instead of "Closed" or "Paid in Full." This status indicates you paid less than the full contracted amount. Your credit score typically drops by <strong>50 to 100+ points</strong>, depending on your existing score and credit history.
                </p>
                <h4 className="text-base font-semibold mb-2" style={{ color: '#FF9800', fontFamily: 'Poppins' }}>Future Loan Eligibility</h4>
                <p className="text-sm mb-3" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '22px' }}>
                  For approximately <strong>3-7 years</strong>, the "Settled" status remains on your credit report. During this period, obtaining new loans or credit cards may be challenging, and if approved, you might face higher interest rates. However, this is still better than defaulting completely, facing legal action, or continuing to accumulate unpayable debt.
                </p>
              </div>
              <div className="pl-11 p-5 rounded-xl" style={{ background: 'rgba(76, 175, 80, 0.05)', border: '1px solid rgba(76, 175, 80, 0.2)' }}>
                <h4 className="text-base font-semibold mb-2" style={{ color: '#4CAF50', fontFamily: 'Poppins' }}>Credit Rehabilitation Path</h4>
                <p className="text-sm" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '22px' }}>
                  CredSettle doesn't just settle your debt. We provide <strong>credit rebuilding guidance</strong> to help you recover financially. After settlement, we help you establish responsible financial habits, secure small credit products (like secured credit cards), and demonstrate consistent payment behavior. Over 12-24 months of disciplined financial management, many clients see their credit scores begin recovering. <Link href="/services/credit-score-builder" className="text-blue-600 underline font-medium">Explore our Credit Score Builder service</Link> for structured post-settlement credit rehabilitation.
                </p>
              </div>
            </div>

            {/* RBI Guidelines & Legal Protection */}
            <div className="mb-6">
              <h3
                className="text-xl md:text-2xl lg:text-[24px] mb-4 flex items-center gap-3"
                style={{
                  color: '#007AFF',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '32px'
                }}
              >
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[16px] font-bold" style={{ color: '#007AFF' }}>5</span>
                RBI Guidelines & Your Legal Protection
              </h3>
              <p
                className="text-sm md:text-base lg:text-[15px] leading-relaxed mb-4 pl-11"
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  lineHeight: '26px'
                }}
              >
                The Reserve Bank of India has established comprehensive guidelines to ensure fair, transparent, and dignified debt resolution. CredSettle operates strictly within these regulatory frameworks:
              </p>
              <div className="pl-11 space-y-3">
                <div className="flex gap-2 items-start">
                  <span className="flex-shrink-0 text-lg" style={{ color: '#007AFF' }}>●</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                    <strong>Document Release Requirement:</strong> Lenders must release all original property documents within 30 days after settlement payment and remove any registered charges from public registries.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="flex-shrink-0 text-lg" style={{ color: '#007AFF' }}>●</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                    <strong>Harassment Prohibition:</strong> RBI strictly prohibits threatening, abusive, or coercive recovery practices. Recovery agents cannot visit your home at unreasonable hours, contact you outside 7 AM to 7 PM, or threaten legal action they don't intend to pursue.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="flex-shrink-0 text-lg" style={{ color: '#007AFF' }}>●</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                    <strong>Written Communication Mandate:</strong> All settlement terms must be documented in writing on official letterhead. Verbal promises or agreements have no legal standing. CredSettle ensures every negotiation culminates in formal written agreements.
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <span className="flex-shrink-0 text-lg" style={{ color: '#007AFF' }}>●</span>
                  <p className="text-sm leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.75)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                    <strong>Transparent Process:</strong> Borrowers have the right to understand the settlement calculation, including how principal, interest, and penalty components are treated. We ensure full transparency at every step.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose CredSettle Callout */}
            <div className="p-6 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(0, 122, 255, 0.08) 0%, rgba(12, 39, 86, 0.08) 100%)', border: '2px solid rgba(0, 122, 255, 0.2)' }}>
              <h3 className="text-lg md:text-xl font-bold mb-3" style={{ color: '#0C2756', fontFamily: 'Poppins' }}>Why CredSettle for Personal Loan Settlement?</h3>
              <p className="text-sm md:text-[15px] leading-relaxed mb-4" style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', lineHeight: '24px' }}>
                Unlike debt advisory firms that simply provide guidance, <strong>CredSettle takes full legal responsibility for your case</strong>. Our specialized legal team directly negotiates with lenders, stops harassment immediately, and ensures you receive a formal, RBI-compliant OTS that permanently resolves your debt. We've successfully settled <strong>12,500+ personal loans</strong>, reducing over <strong>₹680 crores</strong> in principal debt for our clients.
              </p>
              <button
                className="text-white text-sm md:text-base px-6 py-3 rounded-xl font-medium transition-all hover:shadow-lg justify-center text-center"
                style={{
                  background: 'linear-gradient(135deg, #007AFF 0%, #0052CC 100%)',
                  boxShadow: '0 4px 12px rgba(0, 122, 255, 0.3)'
                }}
              >
                Start Your Free Consultation Now
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
            {(() => {
              const stateSpecificRoutes: Record<string, string> = {
                'Andhra Pradesh': '/services/personal-loan-settlement/andhra-pradesh',
                'Delhi': '/services/personal-loan-settlement/delhi',
                'Gujarat': '/services/personal-loan-settlement/gujarat',
                'Haryana': '/services/personal-loan-settlement/haryana',
                'Karnataka': '/services/personal-loan-settlement/karnataka',
                'Maharashtra': '/services/personal-loan-settlement/maharashtra',
                'Rajasthan': '/services/personal-loan-settlement/rajasthan',
                'Tamil Nadu': '/services/personal-loan-settlement/tamil-nadu',
                'Telangana': '/services/personal-loan-settlement/telangana',
                'Uttar Pradesh': '/services/personal-loan-settlement/uttar-pradesh',
                'West Bengal': '/services/personal-loan-settlement/west-bengal'
              };
              return [
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
              const href = stateSpecificRoutes[state] ?? `/services/personal-loan-settlement/${slug}`;
              const metroCities = ['Maharashtra', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Uttar Pradesh', 'Delhi', 'West Bengal', 'Gujarat', 'Haryana', 'Tamil Nadu', 'Rajasthan'];
              const isMetroCity = metroCities.includes(state);
              return (
                <Link
                  key={index}
                  href={href}
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
            });
            })()}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={personalLoanFaqs} title="Personal Loan Settlement" />

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


