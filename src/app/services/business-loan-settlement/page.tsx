'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import { useEffect, useState } from 'react';

export default function BusinessLoanSettlementPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {!isFirefox && (
        <div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: '#007AFF', filter: 'blur(400px)', WebkitFilter: 'blur(400px)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.6 }} />
      )}
      {isFirefox && (
        <div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.9 }} />
      )}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            {/* Right visual - comes first on mobile */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img src="/business_hero.png" alt="" aria-hidden className="hidden lg:block" style={{ position: 'absolute', width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center', filter: 'blur(6px)', opacity: 0.9, WebkitMaskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)', maskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)' }} />
              <img src="/business_hero.png" alt="Business Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }} />
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', marginBottom: '12px' }}>
                Business Loan Settlement: Stabilize and Grow Again
              </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                Defaults don't have to define your future. We negotiate flexible, RBI-compliant settlements that protect assets and restore cash flow. Business loan settlement is a legitimate debt resolution process in India that helps business owners resolve outstanding business loan debt through legal settlement solutions.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                At CredSettle, our expert legal team specializes in business loan settlement services, working directly with banks and NBFCs to negotiate reduced payoff amounts for business loans. Our debt settlement company ensures all business loan settlements follow RBI guidelines and Indian banking regulations, providing complete legal protection for your business.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '20px' }}>
                Our legal team manages lenders while you focus on rebuilding operations. We help business owners achieve financial freedom through legal business loan settlement, reducing outstanding balances by 30-70% while ensuring all settlements are properly documented and legally binding. Our RBI-compliant approach protects your business assets and stops harassment from recovery agents.
              </p>
              <button className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px]" style={{ borderRadius: '32.4px', background: '#007AFF', boxShadow: '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset' }}>
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Reviews + dividers + value props */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px', marginTop: '28px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '28px' }}>
            <div className="flex flex-col gap-4 lg:gap-3 w-full lg:w-auto lg:justify-start" style={{ maxWidth: '100%' }}>
              <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                <div className="w-1/2 flex justify-center items-center"><img src="/ggle.png" alt="Google Reviews - CredSettle" className="h-6 lg:h-[29.16px]" /></div>
                <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                  <div className="flex justify-center items-center" style={{ gap: '6.48px' }}><img src="/stars.png" alt="5 Star Rating - CredSettle" className="h-3 lg:h-[12.96px]" /><span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span></div>
                  <div className="text-center"><div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div></div>
                </div>
              </div>
              <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                <div className="w-1/2 flex justify-center items-center"><img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" className="h-6 lg:h-[29.16px]" /></div>
                <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                  <div className="flex justify-center items-center" style={{ gap: '6.48px' }}><img src="/stars.png" alt="5 Star Rating - CredSettle" className="h-3 lg:h-[12.96px]" /><span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span></div>
                  <div className="text-center"><div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div></div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Enterprise-Grade Compliance</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We structure every negotiation within RBI rules and lender policies to protect assets and directors.</p>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Cash-Flow Focused Outcomes</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Reduce principal, restructure dues, and restore working capital for business continuity.</p>
              </div>
            </div>
          </div>
        </section>
{/* Comprehensive Content Section */}
<section
          className="w-full mx-auto"
          style={{ maxWidth: '1280px', paddingLeft: '16px', paddingRight: '16px', marginTop: '60px', marginBottom: '40px' }}
        >
          <div className="bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 rounded-3xl p-6 md:p-8 lg:p-12" style={{ boxShadow: '0 4px 20px rgba(0, 122, 255, 0.08)', border: '1px solid rgba(0, 122, 255, 0.1)' }}>
            <h2
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontSize: 'clamp(24px, 5vw, 32px)',
                fontWeight: 700,
                lineHeight: '1.3',
                marginBottom: '32px',
                textAlign: 'center'
              }}
            >
              Understanding Business Loan Settlement in India
            </h2>
            
            {/* What is Business Loan Settlement */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                What is Business Loan Settlement?
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Business loan settlement is a legally sanctioned debt resolution mechanism in India that enables business owners and entrepreneurs to negotiate with lenders—including banks, NBFCs, and financial institutions—to repay a <strong>reduced lump sum amount</strong> instead of the full outstanding loan balance. This process is particularly crucial for businesses facing cash flow challenges, operational disruptions, or market downturns that have impaired their ability to service debt through regular EMI payments.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Unlike personal loans where the impact is limited to individual creditworthiness, business loans directly affect your company's operational continuity, credit rating, and ability to secure future financing. Business loans can be <strong>secured</strong> (backed by collateral like property, machinery, or inventory) or <strong>unsecured</strong> (based solely on business creditworthiness). Understanding this distinction is critical because it determines the settlement strategy, negotiation leverage, and asset protection approach.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                At CredSettle, we specialize in business loan settlements across all business loan categories—working capital loans, term loans, machinery loans, SME loans, MSME loans, overdraft facilities, and bill discounting facilities. Our legal and financial experts understand the unique challenges facing business owners and structure settlement strategies that prioritize <strong>business continuity, asset protection, and operational cash flow restoration</strong>.
              </p>
            </div>

            {/* How Business Loan Settlement Works */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                How the Business Loan Settlement Process Works
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The settlement journey begins with a <strong>comprehensive business debt audit</strong>. Our team analyzes your outstanding loan principal, accumulated interest, penal interest charges, processing fees, and any additional charges. For businesses with multiple loans, we create a consolidated debt picture to understand total exposure and prioritize which loans to settle first based on interest rates, security status, and legal exposure risk.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Once CredSettle assumes responsibility for your case, we <strong>initiate formal communication</strong> with your lender's corporate loan settlement desk or Non-Performing Asset (NPA) recovery division. Here's where technical knowledge becomes crucial: loans are classified as NPAs when EMI payments are overdue by 90 days or more. Once your account reaches NPA status, lenders become more willing to negotiate settlements, as their internal provisioning requirements increase and recovery becomes uncertain.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Our negotiators present a detailed <strong>One-Time Settlement (OTS) proposal</strong> backed by your business's financial hardship documentation—P&L statements, cash flow analysis, balance sheets, and repayment capacity assessment. We leverage RBI's prudential framework guidelines, which encourage lenders to consider OTS proposals that maximize recovery while minimizing legal and administrative costs. The typical settlement range is 30-70% of outstanding principal, depending on account age, loan type, security status, and lender policies.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                Upon agreement, we secure a formal <strong>OTS sanction letter</strong> that specifies the reduced settlement amount, payment terms (lump sum or structured payments), and account closure timeline. After you make the agreed payment, the lender issues a <strong>No Dues Certificate (NDC)</strong> and updates your account status with credit bureaus. For secured loans, we ensure lien removal and property document release as mandated by RBI's 30-day release guideline.
              </p>
            </div>

            {/* NPA Classification and Settlement Timing */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                Understanding NPA Classification and Settlement Timing
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                When your business loan EMI remains unpaid for 90 consecutive days, your loan is classified as a <strong>Non-Performing Asset (NPA)</strong> by the lender. This classification triggers several consequences: your business credit score (CIBIL, Equifax, Experian, CRIF High Mark) begins to deteriorate, lenders report the default to credit bureaus, and recovery agents may initiate contact. For businesses, this also affects your ability to secure credit limits from suppliers or access trade credit facilities.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                However, NPA classification creates a <strong>settlement opportunity</strong>. Under RBI guidelines, once a loan becomes NPA, banks must set aside provisions (funds reserved for potential loss). As these provisions increase over time, banks become increasingly motivated to recover whatever amount they can through settlements rather than lengthy legal proceedings. This is where CredSettle's expertise becomes invaluable—we time settlement negotiations to coincide with maximum lender flexibility.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                The optimal settlement window typically occurs between 6-18 months post-default. Too early, and lenders are still hopeful of full recovery; too late, and they may have already initiated legal action through SARFAESI Act proceedings or filed suit under Section 138 of the Negotiable Instruments Act. Our team monitors your account status and initiates negotiations at the strategically optimal moment to secure maximum reduction while protecting your business assets.
              </p>
            </div>

            {/* Secured vs Unsecured Business Loans */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                Secured vs. Unsecured Business Loan Settlements
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                <strong>Secured business loans</strong> are backed by collateral—commercial property, residential property pledged against business loan, machinery, inventory, or receivables. When you default on a secured loan, the lender has the legal right to invoke the <strong>SARFAESI Act, 2002</strong> (Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest) to take possession of your pledged assets without court intervention. This makes secured loan settlements more complex but also provides unique negotiation leverage.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                At CredSettle, our secured loan settlement strategy focuses on <strong>asset protection</strong>. We negotiate settlements that prevent asset seizure while securing substantial principal reductions. Because lenders know that asset liquidation involves lengthy procedures, auction discounts, and uncertain recovery values, they're often willing to accept 40-60% of outstanding amounts through OTS rather than pursue asset enforcement. We ensure all settlements include explicit lien release clauses and property document handover timelines.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                <strong>Unsecured business loans</strong>—including working capital loans, business credit cards, and overdraft facilities—don't have asset backing. While this means your assets aren't at immediate seizure risk, lenders can still pursue legal action through civil suits, recovery tribunals, or criminal proceedings under Section 138 (cheque bounce cases). Unsecured loan settlements typically achieve higher reduction percentages (50-70%) because lenders recognize that recovery without collateral is uncertain and expensive.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                For businesses with both secured and unsecured loans, we develop a <strong>strategic settlement sequence</strong>. Generally, we prioritize settling secured loans first to protect physical assets critical for business operations, then negotiate unsecured loan settlements to maximize overall debt reduction. This approach ensures business continuity while achieving comprehensive debt resolution.
              </p>
            </div>

            {/* Impact on Business Credit and Future Financing */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                Impact on Business Credit Score and Future Financing
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                It's essential to understand how settlement affects your business's creditworthiness. When a loan is settled, credit bureaus mark your account as <strong>"Settled"</strong> rather than "Closed," which indicates that you paid less than the agreed amount. This notation remains on your business credit report (and the promoter's personal credit report for sole proprietorships and partnerships) for up to 7 years from the settlement date.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                However, this is where perspective matters: defaulting on a business loan <strong>already damages</strong> your credit score severely. Continued defaults, NPA classification, and potential legal action cause far more damage than a "Settled" status. Through settlement, you're converting an indefinite negative spiral into a <strong>time-bound recovery path</strong>. After settlement, your credit score begins gradual improvement as the account shows "zero balance" and no ongoing defaults.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                CredSettle provides <strong>post-settlement credit rebuilding guidance</strong>. We advise clients on timeline-appropriate strategies: maintaining consistent payments on any remaining active loans, gradually building business savings, securing small credit limits (business credit cards with lower limits), and demonstrating improved cash flow management. Typically, businesses can begin accessing limited financing 18-24 months post-settlement, with full financing capabilities returning within 3-4 years.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                For businesses requiring immediate operational financing post-settlement, we guide you toward <strong>alternative financing options</strong>: invoice discounting, supply chain financing, peer-to-peer business lending, and fintech platforms that evaluate creditworthiness based on current cash flows rather than historical credit reports. This ensures your business maintains operational momentum during the credit recovery period.
              </p>
            </div>

            {/* SME and MSME Specific Considerations */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                Special Considerations for SME and MSME Businesses
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Small and Medium Enterprises (SMEs) and Micro, Small & Medium Enterprises (MSMEs) face unique challenges during financial distress. Many SME/MSME loans are guaranteed by business promoters through <strong>personal guarantees</strong>, meaning loan defaults can impact both business and personal assets. Additionally, SME loans often involve multiple facilities—term loans, working capital limits, bill discounting—creating complex debt structures.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The RBI has issued specific guidelines encouraging banks to support viable SME/MSME businesses through restructuring and settlement mechanisms. Under the <strong>RBI's Prudential Framework for Resolution of Stressed Assets</strong>, lenders are directed to work with stressed MSME borrowers to find sustainable solutions. CredSettle leverages these regulatory provisions to secure favorable settlement terms for SME/MSME clients.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                For businesses registered under the <strong>Udyam Registration (MSME registration)</strong>, we explore government-backed resolution schemes like the Emergency Credit Line Guarantee Scheme (ECLGS) extensions or restructuring programs offered through SIDBI (Small Industries Development Bank of India). When restructuring isn't viable, we negotiate settlements that protect both business operations and promoter assets.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                Our SME/MSME settlement approach also addresses <strong>inter-creditor agreements</strong>. When your business has loans from multiple lenders, we coordinate simultaneous settlement negotiations to prevent one lender from blocking resolution while others agree. This comprehensive approach ensures complete debt resolution and genuine business recovery.
              </p>
            </div>

            {/* Legal Protection and Compliance */}
            <div style={{ marginBottom: '0' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                Legal Protection and RBI Compliance
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Throughout the settlement process, CredSettle ensures <strong>strict adherence to RBI guidelines</strong> and banking regulations. The RBI's Fair Practices Code mandates that lenders and their recovery agents must treat borrowers with dignity and respect, prohibiting harassment, threats, or intimidation. When you engage our services, we immediately invoke these protections, directing all lender communication through our legal team.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                We ensure every settlement is <strong>properly documented</strong> with formal OTS sanction letters that specify the exact settlement amount, payment deadline, interest waiver details, and account closure procedures. After payment, we verify that lenders provide No Dues Certificates, update credit bureau records accurately, and release all security documents within the RBI-mandated 30-day timeline.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                For businesses facing legal notices—SARFAESI Act notices (Section 13(2)), Demand Recovery Tribunal (DRT) notices, or civil court summons—our legal team provides immediate <strong>response and representation services</strong>. We draft legally sound responses, file necessary applications, and negotiate settlements even after legal proceedings have commenced. Our goal is to achieve debt resolution while protecting your business from asset seizure, auction proceedings, and operational disruption.
              </p>
            </div>
          </div>
        </section>
        {/* Reused Why, Stats, Partner, FAQ, CTA from credit card with copy tweaks */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '28.8px' }}>
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '9.6px', marginBottom: '19.2px' }}>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why CredSettle is Your Best Resolution<br />Partner</h2>
            <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Six core benefits that secure a protected, successful, and final settlement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" style={{ gap: '19.2px' }}>
            {[
              { title: 'Sector-Specific Expertise', body: 'Experience with SME/MSME, secured and unsecured business facilities.' },
              { title: 'End-to-End Protection', body: 'From notices to OTS to closure—compliance and documentation guaranteed.' },
              { title: 'Dignity for Promoters', body: 'Shield leadership from harassment; maintain brand credibility.' },
              { title: 'Proven Results', body: 'Substantial principal reductions and workable terms achieved.' },
              { title: 'Strategic Negotiation', body: 'We align terms with business realities and repayment capacity.' },
              { title: 'Swift & Final', body: 'Close with legal finality and move forward with confidence.' },
            ].map((c, i) => (
              <div key={i} className="p-6 md:p-8 lg:p-[48.8px]" style={{ borderRadius: '40px', background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10), 4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', backdropFilter: 'blur(12.35px)' }}>
                <h3 className="mb-2 text-base md:text-lg lg:text-[18px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700 }}>{c.title}</h3>
                <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '36px', marginBottom: '24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative">
              <div aria-hidden className="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', borderRadius: '9999px', background: 'radial-gradient(closest-side, rgba(0,122,255,0.30), rgba(0,122,255,0.16) 55%, rgba(0,122,255,0.0) 80%)', filter: 'blur(4px)', pointerEvents: 'none', zIndex: 0 }} />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['8,500+','4.8/5','₹ 450 Crores+','100%'].map((stat, idx) => (
                  <div key={idx} className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12" style={{ borderRadius: '40px', background: 'rgba(239, 247, 255, 0.30)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)' }}>
                    <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>{stat}</h3>
                    <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                      {idx===0 && 'Successful Business Settlements enabling continuity and growth.'}
                      {idx===1 && 'Client Satisfaction Rating from promoters and SMEs.'}
                      {idx===2 && 'Total Principal Reduced across facilities and instruments.'}
                      {idx===3 && 'RBI Compliance Guaranteed with full documentation.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-between mt-8 lg:mt-0" style={{ gap: '16px' }}>
              <div className="w-full text-center lg:text-right">
                <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why CredSettle is Your Best Resolution Partner</h2>
                <p className="text-xs md:text-sm lg:text-[14px] mt-2" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Six benefits that ensure protection and final settlement.</p>
              </div>
              <div className="w-full flex justify-center lg:justify-end lg:mt-2" style={{ marginRight: '0' }}>
                <img src="/belowservices/Business%20Loan.png" alt="Business Loan" className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]" style={{ height: 'auto', borderRadius: '0px', transform: 'none', display: 'block', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="Business loan" servicePath="business-loan-settlement" />

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
              Business loan settlement services in all states and union territories
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
              const slug = state.toLowerCase().replace(/\s+/g, '-');
              const metroCities = ['Maharashtra', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Uttar Pradesh', 'Delhi', 'West Bengal', 'Gujarat', 'Haryana', 'Tamil Nadu', 'Rajasthan'];
              const isMetroCity = metroCities.includes(state);
              return (
                <a
                  key={index}
                  href={`/services/business-loan-settlement/${slug}`}
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
                </a>
              );
            })}
          </div>
        </section>

        <section className="w-full py-12">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[76px] w-full">
                <div className="flex flex-col items-start gap-[21px] w-full lg:w-[365px]">
                  <h2 className="text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-bold"><span style={{ color: '#0C2756' }}>Business Loan Settlement{`\n`}<br /> FAQs — </span><span style={{ color: '#007AFF' }}>Answered.</span></h2>
                  <p className="text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] font-normal"><span style={{ color: '#0C2756' }}>Need more details? </span><span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span><span style={{ color: '#0C2756' }}> anytime.</span></p>
                </div>
                <div className="w-full lg:w-[800px] lg:ml-auto p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
                  <div className="flex flex-col gap-4">
                    {[
                      { q: 'Can secured business loans be settled?', a: 'Yes, subject to lender policy. We negotiate settlements and restructures while protecting assets where possible.' },
                      { q: 'What’s required for an OTS?', a: 'Financials, proposed amount/timeline, and case background. We prepare a compliant strategy and handle lender discussions.' },
                      { q: 'Will this impact my company’s credit?', a: 'Short-term impact is possible. Our focus is legal finality and a plan to rebuild creditworthiness.' },
                      { q: 'Do you assist with notices and litigation?', a: 'We provide legal representation, draft responses, and coordinate with lender teams to resolve matters.' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
                        <details>
                          <summary className="flex justify-between items-start gap-[49px] p-[21px_28px] cursor-pointer list-none"><span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal flex-1" style={{ color: '#0C2756' }}>{item.q}</span></summary>
                          <div className="px-[28px] pb-[21px] pt-3 border-t border-gray-200"><p className="text-[11px] md:text-[13px] leading-[14px] md:leading-[15px] font-normal" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>{item.a}</p></div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{ background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)', boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)' }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>Ready to Legally Settle Your Business Loan?</h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Achieve an RBI-compliant OTS or restructure—protect your assets and restart growth.</p>
                  </div>
                  <button className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90" style={{ boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset' }}><span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal" style={{ color: '#0C2756' }}>Get Your Free Consultation</span></button>
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


