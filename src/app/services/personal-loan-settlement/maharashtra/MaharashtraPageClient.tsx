'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function MaharashtraPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'introduction', text: 'Personal Loan Settlement in Maharashtra', level: 2 },
    { id: 'why-maharashtra', text: 'Why Maharashtra Borrowers Need Settlement Services', level: 2 },
    { id: 'common-challenges', text: 'Common Loan Challenges in Mumbai, Pune & Major Cities', level: 2 },
    { id: 'credsettle-services', text: 'CredSettle – Your Trusted Partner in Maharashtra', level: 2 },
    { id: 'settlement-process', text: 'Our Proven Settlement Process', level: 3 },
    { id: 'legal-protection', text: 'Legal Protection & RBI Compliance', level: 3 },
    { id: 'lok-adalat', text: 'Maharashtra Lok Adalat System for Loan Settlement', level: 2 },
    { id: 'types-of-loans', text: 'Types of Loans We Settle in Maharashtra', level: 2 },
    { id: 'city-specific', text: 'City-Specific Settlement Services', level: 2 },
    { id: 'benefits', text: 'Benefits of Choosing CredSettle in Maharashtra', level: 2 },
    { id: 'legal-rights', text: 'Your Legal Rights as a Borrower in Maharashtra', level: 2 },
    { id: 'step-by-step', text: 'Step-by-Step Guide to Start Your Settlement Journey', level: 2 },
    { id: 'success-story', text: 'Success Story: Mumbai Entrepreneur Debt-Free Journey', level: 2 },
    { id: 'final-thoughts', text: 'Take Control of Your Financial Future Today', level: 2 },
    { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is personal loan settlement legal in Maharashtra?',
      answer: 'Yes, personal loan settlement is completely legal in Maharashtra and across India. It follows RBI guidelines and banking regulations. CredSettle ensures all settlements are legally compliant, documented, and binding. Maharashtra also has the Lok Adalat system that facilitates legal loan settlements.'
    },
    {
      question: 'How much can I save through loan settlement in Mumbai or Pune?',
      answer: 'Typically, borrowers in Maharashtra can reduce their outstanding debt by 30-70% through professional settlement. The exact savings depend on your loan type, outstanding amount, financial hardship documentation, and lender policies. CredSettle negotiates the best possible settlement for your situation.'
    },
    {
      question: 'Will loan settlement affect my CIBIL score in Maharashtra?',
      answer: 'Yes, settled loans are marked as "settled" (not "closed") on your CIBIL report, which can temporarily impact your credit score. However, this is better than continued defaults or legal action. CredSettle provides post-settlement credit rehabilitation guidance to help you rebuild your credit score over time.'
    },
    {
      question: 'Can CredSettle stop harassment from recovery agents in Mumbai?',
      answer: 'Absolutely. Once you engage CredSettle, we immediately intervene legally to stop harassment. We issue formal communication citing RBI Fair Practices Code and relevant regulations. Recovery calls and threats typically stop within 3-5 business days as we become your single point of contact with lenders.'
    },
    {
      question: 'Which banks and NBFCs in Maharashtra does CredSettle work with?',
      answer: 'We work with all major banks (HDFC, ICICI, SBI, Axis, Kotak, etc.) and NBFCs (Bajaj Finserv, Tata Capital, Fullerton India, etc.) operating in Maharashtra. Our team has established relationships and understands the settlement policies of lenders across Mumbai, Pune, Nagpur, and other cities.'
    },
    {
      question: 'How long does the settlement process take in Maharashtra?',
      answer: 'The settlement process typically takes 45-90 days from initial consultation to final closure. This includes financial assessment, negotiation with lenders, agreement finalization, and documentation. CredSettle expedites the process while ensuring all legal requirements are met for Maharashtra borrowers.'
    },
    {
      question: 'What is Lok Adalat and how can it help with loan settlement?',
      answer: 'Lok Adalat is an alternative dispute resolution system recognized under the Legal Services Authorities Act, 1987. Maharashtra has an active Lok Adalat system where borrowers can settle loan disputes amicably. CredSettle can guide you through the Lok Adalat process if it\'s the best option for your case.'
    },
    {
      question: 'Do I need to visit CredSettle office in Mumbai or Pune?',
      answer: 'No, the entire settlement process can be handled remotely. We offer phone consultations, video calls, and digital documentation. However, if you prefer in-person meetings in Mumbai or Pune, we can arrange that. Our goal is to make the process convenient for Maharashtra borrowers.'
    }
  ];

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
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img
                src="/personalhero.png"
                alt="Personal Loan Settlement Maharashtra"
                className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]"
                style={{
                  height: 'auto',
                  transform: 'rotate(335deg)',
                  transformOrigin: 'center'
                }}
              />
            </div>
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
                Personal Loan Settlement in Maharashtra – Mumbai, Pune, Nagpur
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
                Struggling with loan repayments in Mumbai, Pune or Nagpur? CredSettle helps Maharashtra borrowers reduce debt by 30-70% through legal, RBI-compliant settlement processes. We stop recovery agent harassment, negotiate directly with banks and NBFCs, and deliver proper legal documentation. Over 8,500 Maharashtra families have achieved debt freedom with our help.
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
                Get Free Consultation Now
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
              
              {/* Introduction */}
              <section id="introduction" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Personal Loan Settlement in Maharashtra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Maharashtra handles millions of personal loan transactions every year. Mumbai's financial sector, Pune's IT companies, and Nagpur's commercial growth have made personal loans common for education, medical needs, business expansion and daily expenses. But job losses, business downturns, medical emergencies and rising living costs leave many borrowers unable to keep up with EMIs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> lets you negotiate with banks and NBFCs to pay a reduced amount instead of the full balance. The RBI recognizes this as a legal debt resolution method. When you genuinely cannot repay your loans, settlement offers a way out without years of harassment or legal battles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 8,500 Maharashtra borrowers in Mumbai, Pune, Nagpur, Thane, Nashik and Aurangabad. Our clients typically save 30-70% on their outstanding amounts. Every settlement we negotiate follows RBI rules, includes proper legal documentation, and permanently closes your debt without future claims from lenders.
                  </p>
                </div>
              </section>

              {/* Why Maharashtra Borrowers Need Settlement */}
              <section id="why-maharashtra" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Why Maharashtra Borrowers Need Settlement Services
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Mumbai's financial sector, Pune's IT industry, Nagpur's logistics companies and the state's manufacturing units create a diverse economy. But this also means varied financial stress points. In Mumbai, EMIs often eat up 40-50% of monthly income because living costs are so high. Job security varies across sectors, and when income drops, loan payments become impossible.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When default happens:</strong> After 90 days of missed payments, your account becomes an NPA (Non-Performing Asset). Banks and NBFCs then push hard for recovery. Collection agencies call 20-30 times daily. Recovery agents visit your home and office. Your CIBIL score drops below 600. Some lenders threaten legal action or even try to seize assets if you have secured loans.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Settlement stops all of this. Lenders know that recovering 40-70% now is better than spending lakhs on legal fees with uncertain outcomes. You get four clear benefits: major debt reduction (save 30-70% of your balance), complete end to harassment calls, proper legal documentation that closes the loan permanently, and a chance to restart your financial life.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We focus specifically on Maharashtra. We know which banks in Mumbai are flexible on settlements, which Pune NBFCs have better policies, and how Nagpur lenders respond to negotiation. Our 92% success rate across the state comes from this local knowledge combined with strong legal backing.
                  </p>
                </div>
              </section>

              {/* Common Loan Challenges in Mumbai, Pune & Major Cities */}
              <section id="common-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Common Loan Challenges in Mumbai, Pune & Major Cities
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Urban living costs, job market swings and aggressive lenders create specific debt problems in Maharashtra. These are the five issues we handle most often:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Mumbai's High Living Costs:</strong> Rent alone costs ₹30,000-₹80,000 monthly in decent Mumbai areas. Add school fees, medical bills and daily expenses, and many families take 3-4 loans just to stay afloat. When someone loses their job or a business slows down, all those EMIs become impossible. We've helped hundreds of Mumbai families consolidate these multiple loans and settle for 55% less on average.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Pune IT Sector Problems:</strong> Pune's IT boom brings jobs but also layoffs, project closures and salary delays. People borrow based on good times, then get stuck when companies downsize or startups fail. Our Pune team knows this pattern well. We show lenders the real IT sector data and negotiate settlements that account for income drops.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Aggressive NBFCs in Smaller Cities:</strong> Nagpur, Nashik, Aurangabad and Solapur have seen NBFCs push loans with minimal paperwork and interest rates of 18-36% yearly. When you miss payments, their recovery gets brutal fast. We step in immediately, cite RBI rules that ban harassment, and force proper settlement negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The Multiple Loan Trap:</strong> Taking new loans to pay old ones creates a debt spiral. We regularly see Mumbai professionals juggling 5-7 active loans. Interest piles up faster than they can pay. Our approach handles all your loans together in one settlement package, not one by one.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Recovery Agent Harassment:</strong> Twenty to thirty calls every day. Threats to tell your boss or post on social media. Agents showing up at your home or office. Once you hire us, we send legal notices to every lender. The calls stop within a week because lenders know they have to deal with us now, not you.
                  </p>
                </div>
              </section>

              {/* CredSettle Services */}
              <section id="credsettle-services" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  CredSettle – Your Trusted Partner in Maharashtra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    We've handled over 8,500 loan settlement cases across Maharashtra in the last three years. Our clients save an average of 58% on their outstanding debt. We work with all the major banks and NBFCs that lend in Mumbai, Pune, Nagpur and other Maharashtra cities.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why we're different:</strong> We're not collection agents or grey-market operators. CredSettle is a registered legal services company that follows every RBI rule. Every settlement we negotiate gets proper documentation, legal standing and permanent closure. We have lawyers and financial experts in Mumbai, Pune and Nagpur who know the local banking scene inside out.
                  </p>

                  {/* H3: Settlement Process */}
                  <div id="settlement-process" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Our Proven Settlement Process
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Free Consultation</strong> - We review your loan papers, check your outstanding amounts, look at your income and collect hardship proof. This happens by phone, video call or in person if you're in Mumbai or Pune. <strong>Step 2: Stop the Harassment</strong> - We send legal notices to your lenders citing RBI Fair Practices rules. Direct recovery contact stops immediately. <strong>Step 3: Negotiate Hard</strong> - Our team uses your hardship documents, NPA cost data and lender policies to push for 30-70% debt reduction. <strong>Step 4: Get Legal Papers</strong> - Settlement agreements include OTS letters, payment receipts, account closure proof and NOC certificates. Everything documented properly. <strong>Step 5: Follow-Up Support</strong> - We check that credit bureaus update correctly and give you advice on rebuilding your score.
                    </p>
                  </div>

                  {/* H3: Legal Protection */}
                  <div id="legal-protection" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Legal Protection & RBI Compliance
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman rules. You get: (1) Written OTS agreement on official letterhead, (2) Clear statement that lender cannot claim more money after you pay, (3) Correct credit reporting (marked "settled" not "written off"), (4) Documents released within 30 days as RBI requires, and (5) Legal backup if any lender tries to cheat. Our Maharashtra lawyers step in fast if lenders violate the deal.
                    </p>
                  </div>
                </div>
              </section>

              {/* Lok Adalat System */}
              <section id="lok-adalat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Maharashtra Lok Adalat System for Loan Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Maharashtra runs one of India's best Lok Adalat systems. This is a court-backed mediation system under the Legal Services Authorities Act, 1987. Whatever Lok Adalat decides becomes legally binding like a court order. It's specifically designed to settle disputes including loan defaults without long court battles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why Lok Adalat works for loans:</strong> Both you and your lender sit with trained mediators who push for fair settlements. No court fees. Usually resolved in one session. The decision is final and legally enforceable. Banks and NBFCs in Maharashtra regularly participate and often agree to 40-60% settlements through Lok Adalat.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Lok Adalat experience:</strong> We've represented hundreds of Maharashtra borrowers in Lok Adalats across Mumbai, Pune, Nagpur, Thane and district courts. We prepare your hardship documents, write settlement proposals and argue your case hard. When Lok Adalat makes sense for your situation, we handle everything from start to finish.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When to use Lok Adalat:</strong> If your lender has already filed a court case or recovery tribunal claim, Lok Adalat is your best shot at quick resolution. Maharashtra Legal Services Authority holds regular banking Lok Adalats. We track these dates and prepare your case to get maximum debt reduction.
                  </p>
                </div>
              </section>



              {/* City-Specific Services */}
              <section id="city-specific" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  City-Specific Settlement Services Across Maharashtra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Mumbai:</strong> Handles 40% of Maharashtra's personal loans. High rents, tough job market, but also home to bank headquarters which helps us negotiate. We've helped thousands across Andheri, Borivali, Thane, Navi Mumbai and central Mumbai. Knowing the head office decision-makers gives us leverage other companies don't have.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Pune:</strong> IT professionals, students and startup founders borrow differently. Education loans for abroad, personal loans for company funding, credit cards to manage cash flow. When layoffs hit or startups fail, all these loans pile up. Our Pune team works from Hinjewadi, Magarpatta and Koregaon Park. We know the IT sector's hiring cycles and use that data in negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Nagpur:</strong> Central Maharashtra's logistics hub where NBFCs have pushed aggressive lending. Many people here have 2-3 small NBFC loans at 24-36% interest. Our Nagpur division specializes in NBFC negotiation and gets good results because we understand Vidarbha's economy and regional lender behavior.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Nashik, Aurangabad, Solapur, Kolhapur:</strong> Tier-2 cities with growing loan markets but less awareness about legal settlement options. We serve these cities with the same quality as Mumbai and Pune. Local legal partnerships, regular consultation visits, remote handling when needed.
                  </p>
                </div>
              </section>

              {/* Benefits */}
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
                  Benefits of Choosing CredSettle in Maharashtra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>1. Local Maharashtra Knowledge:</strong> We know which Mumbai banks settle easily, which Pune NBFCs are tough negotiators, how Nagpur lenders operate. This local knowledge gets you better deals.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Harassment Stops Fast:</strong> Within 3-5 days of hiring us, recovery calls end. We handle all lender contact. No more agents at your door or office.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Save 30-70% on Average:</strong> Our Maharashtra clients save 58% on average. That's lakhs of rupees back in your pocket. We use NPA cost data, hardship proof and lender policies to negotiate hard.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Legal RBI Process:</strong> Every settlement follows RBI rules. You get OTS letters, payment receipts, account closure proof and NOC. Everything documented so lenders cannot come back later.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Pay After Success:</strong> We charge only after getting your settlement approved. No upfront fees during consultation or negotiation. That's how confident we are.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Credit Score Help:</strong> After settlement, we guide you on rebuilding CIBIL score, managing money better and getting credit again when you need it.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Proven Track Record:</strong> Over 8,500 Maharashtra families trust us. Mumbai, Pune, Nagpur and across the state. Results speak for themselves.
                  </p>
                </div>
              </section>

              {/* Legal Rights */}
              <section id="legal-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Your Legal Rights as a Borrower in Maharashtra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Know your rights as a Maharashtra borrower. Multiple laws protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass you, threaten you, tell others about your debt (except courts), or abuse you. Break these rules and you can complain to Banking Ombudsman.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> If you have real financial hardship, lenders must discuss settlement. RBI wants them to try resolution before court action.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Deadline:</strong> After you pay settlement, lender has 30 days maximum to give you closure letter and NOC. RBI Master Direction says so. Delays mean penalties for them.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit Report Accuracy:</strong> Your settled account goes to CIBIL, Experian, Equifax and CRIF as "settled" not "written off." If they report wrong, you can dispute it.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Free Lok Adalat:</strong> Maharashtra residents can use Lok Adalat for loan mediation. If you earn under ₹5 lakhs yearly, Legal Services Authority gives free legal help.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>No Illegal Recovery:</strong> Agents cannot enter your home without permission, threaten violence or abuse you. That breaks Indian Penal Code. File police complaint in Maharashtra if this happens.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect these rights throughout settlement. Any lender or agent breaks the rules, we act fast.
                  </p>
                </div>
              </section>

              {/* Step-by-Step Guide */}
              <section id="step-by-step" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Step-by-Step Guide to Start Your Settlement Journey
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 1: Free Talk (Day 1-2)</strong> - Call, WhatsApp or visit our site. We spend 30-45 minutes reviewing your loans, income and problems. Completely confidential. No obligation to hire us.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 2: Gather Papers (Day 3-7)</strong> - You share loan agreements, bank statements, salary slips and hardship proof (medical bills, layoff letter, business closure docs). We analyze everything to build your case.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 3: Stop Harassment (Day 7-10)</strong> - We send legal notices to all lenders citing RBI rules. All recovery contact gets redirected to us. Harassment stops.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 4: Negotiate (Week 2-6)</strong> - Our team contacts each lender's NPA division. We push for 40-70% reduction using your hardship data, NPA costs and past settlements. May take several rounds to get best terms.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 5: Get Agreement (Week 6-8)</strong> - Lender agrees, we get proper OTS letter with amount, deadline and closure confirmation. Everything checked before you pay anything.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 6: Pay Settlement (Week 8-10)</strong> - You arrange agreed amount (lump sum or short installments). Pay directly to lender through banking channels. We help process payment and get receipt immediately.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 7: Close Account (Week 10-12)</strong> - Lender has 30 days to give closure letter, NOC and update credit bureaus. We follow up hard to ensure they do it on time and correctly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 8: Rebuild Credit (Ongoing)</strong> - After settlement, we counsel you on improving CIBIL, managing money and avoiding future debt traps. Support doesn't end at settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 45-90 days from first call to final closure. Depends on how fast lenders respond and when you can arrange payment.
                  </p>
                </div>
              </section>

              {/* Success Story */}
              <section id="success-story" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Success Story: Mumbai Entrepreneur's Debt-Free Journey
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The Client:</strong> Rajesh M., age 38, runs a textile export business in Andheri, Mumbai. Had borrowed ₹32 lakhs total (3 personal loans, 2 credit cards, 1 business loan) to expand operations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Went Wrong:</strong> COVID killed his export orders in 2020. Couldn't pay EMIs on ₹18 lakhs personal loans, ₹9 lakhs credit card debt and ₹5 lakhs business loan. All accounts went NPA. Recovery agents called 20-30 times daily, threatened court, showed up at his home and office. CIBIL fell from 750 to 520. Business dying, family stressed beyond limits.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Stepped In:</strong> Rajesh called us October 2021. We sent legal notices to all 6 lenders immediately. Harassment stopped in 5 days. Our assessment showed real hardship - 80% income drop, export orders gone, savings depleted. We documented everything properly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How We Negotiated:</strong> Our Mumbai team spent 2 months negotiating each lender separately. The 3 NBFC personal loans settled at 45-50% of balance. Both credit cards (major banks) agreed to 35-40% by showing them the revolving interest trap. Business loan settled at 55% because we proved closure and asset liquidation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Numbers:</strong> ₹32 lakhs outstanding became ₹14.2 lakhs settlement. Saved ₹17.8 lakhs (56% reduction). Rajesh arranged money by selling remaining business assets and family help. All 6 accounts closed legally with proper NOCs. Recovery stopped permanently.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Today:</strong> Rajesh is debt-free. Started a smaller, manageable business. CIBIL improved to 640 after 18 months (shows "settled" not "default"). We guided him on credit rebuilding. His words: "CredSettle saved my business and family from collapse. The debt was drowning me, their legal work and negotiation gave me a second chance."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Time taken:</strong> October 2021 first call, November-December negotiation, January 2022 payment, February 2022 closure. Total: 4 months.
                  </p>
                </div>
              </section>

              {/* Final Thoughts */}
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
                  Take Control of Your Financial Future Today
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Struggling with loan debt in Mumbai, Pune, Nagpur or anywhere in Maharashtra? You're not alone and you don't have to handle this yourself. Settlement is legal. RBI recognizes it. It's for people with real financial problems who need a way out.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Unmanageable debt ruins everything. Your health suffers. Family fights over money. Can't focus at work. Mental peace gone. Each day you wait, penalties pile up, interest compounds, CIBIL drops further. But there's a solution. Over 8,500 Maharashtra families already got financial freedom through our services.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Start now:</strong> Free confidential consultation with CredSettle. No pressure, no obligations. Just honest assessment and clear options. Our Maharashtra experts will show you how to stop harassment, cut debt 30-70% and close everything legally.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Financial problems are temporary. But unresolved debt drags on for years. With our legal team, Maharashtra knowledge and proven results, you can end the loan crisis and rebuild properly. Don't let debt control your life. Act today.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Mumbai streets, Pune IT parks, Nagpur neighborhoods or anywhere in Maharashtra. Debt-free life is possible. We'll help you get there.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        {/* FAQ + CTA Section */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              {/* FAQ */}
              <FAQWithSchema
                faqs={faqs}
                title="Personal Loan Settlement in Maharashtra"
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
                      Ready to Become Debt-Free in Maharashtra?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 8,500+ Maharashtra borrowers who achieved financial freedom through CredSettle. Free consultation, no upfront fees, guaranteed results.
                    </p>
                  </div>

                  <CTAButton>
                    Get Your Free Consultation Now
                  </CTAButton>
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

