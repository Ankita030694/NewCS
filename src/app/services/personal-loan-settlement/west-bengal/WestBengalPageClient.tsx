'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function WestBengalPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'wb-settlement', text: 'Loan Settlement Services in West Bengal', level: 2 },
    { id: 'kolkata-economy', text: 'Kolkata Economy and Rising Debt Burden', level: 2 },
    { id: 'debt-problems', text: 'Five Debt Problems Facing Bengali Families', level: 2 },
    { id: 'credsettle-bengal', text: 'CredSettle Track Record in West Bengal', level: 2 },
    { id: 'bengal-method', text: 'Settlement Methods That Work in WB', level: 3 },
    { id: 'legal-safety', text: 'Legal Safety and RBI Rules', level: 3 },
    { id: 'wb-legal-systems', text: 'WB Lok Adalat and Consumer Commission System', level: 2 },
    { id: 'kolkata-areas', text: 'Kolkata Region Coverage - Salt Lake to Howrah', level: 2 },
    { id: 'districts-coverage', text: 'Covering All WB Districts - Durgapur to Siliguri', level: 2 },
    { id: 'bengal-benefits', text: 'Six Benefits for West Bengal Borrowers', level: 2 },
    { id: 'borrower-protection', text: 'Legal Protection Available to WB Residents', level: 2 },
    { id: 'settlement-stages', text: 'Settlement Process in Clear Stages', level: 2 },
    { id: 'kolkata-success', text: 'Success Story - Kolkata Trader Gets Fresh Start', level: 2 },
    { id: 'consultation', text: 'Start Your Free WB Consultation Today', level: 2 },
    { id: 'faqs', text: 'West Bengal Loan Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal in West Bengal?',
      answer: 'Yes, completely legal in West Bengal and all India. RBI recognizes settlement as legitimate debt resolution. CredSettle operates within all legal frameworks including WB Lok Adalat and State Consumer Commission.'
    },
    {
      question: 'How much can Kolkata borrowers save through settlement?',
      answer: 'Kolkata and West Bengal borrowers typically save 30-70% on outstanding debt. Our WB state average is 60% savings. Exact amount depends on your loan type, outstanding balance and hardship documentation.'
    },
    {
      question: 'Will settlement affect my CIBIL score in WB?',
      answer: 'Yes, settled loans show "settled" status on CIBIL. Drops score temporarily (50-100 points). But better than continued defaults or court cases. We guide you on rebuilding CIBIL over 12-18 months after settlement.'
    },
    {
      question: 'Can you stop recovery harassment in Kolkata?',
      answer: 'Yes, within 3-5 days. We send legal notices citing RBI Fair Practices Code to all lenders. Recovery agents must stop direct contact. This applies across Kolkata, Howrah, Durgapur and all WB districts.'
    },
    {
      question: 'Do you work with Bandhan Bank and other Bengal banks?',
      answer: 'Yes, we work with all banks including Bandhan Bank (headquartered in Kolkata), UCO Bank, Allahabad Bank and all major private banks and NBFCs operating in West Bengal. We have settled thousands of loans from these lenders.'
    },
    {
      question: 'Can small traders in Burrabazar or New Market settle loans?',
      answer: 'Absolutely. We handle many Kolkata trader cases from Burrabazar, New Market, Hatibagan areas. We understand trading business cash flows, festival season impacts and wholesale business cycles. This helps negotiate better terms.'
    },
    {
      question: 'What is WB Lok Adalat success rate?',
      answer: 'Very good. West Bengal conducts regular Lok Adalats across all districts. We have handled hundreds of WB loan cases through Lok Adalat with 85%+ settlement success. Usually achieve 40-60% debt reduction.'
    },
    {
      question: 'Do you serve North Bengal areas like Siliguri?',
      answer: 'Yes, full coverage across West Bengal including Siliguri, Jalpaiguri, Darjeeling, Cooch Behar in North Bengal. We coordinate through local legal partners and handle cases remotely when needed.'
    }
  ];

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
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginBottom: '48px' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img
                src="/personalhero.png"
                alt="Personal Loan Settlement West Bengal"
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
                Personal Loan Settlement Kolkata West Bengal - Howrah Durgapur Siliguri
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
                Trapped in loan debt across West Bengal? CredSettle helps Kolkata, Howrah, Durgapur and all WB borrowers reduce debt by 30-70% through legal, RBI-compliant settlement. We stop recovery harassment, negotiate with all banks and NBFCs including Bandhan Bank, and deliver complete legal closure. Over 13,000 Bengali families achieved debt freedom with us.
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
            <div className="w-full">
              <TableOfContents headings={headings} />
            </div>

            <div className="w-full" style={{ minWidth: '0', minHeight: '100vh' }}>
              
              <section id="wb-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Loan Settlement Services in West Bengal
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
                    West Bengal’s personal loan usage covers education, medical needs, trading inventory and family obligations. When income dips for Salt Lake IT teams, Burrabazar traders, Howrah manufacturers or Siliguri tea planters, EMIs pile up quickly and banks start recovery reminders.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> is a lawful path approved by RBI to pay a reduced amount, end harassment and close accounts with proper documentation. CredSettle has already guided 13,000+ West Bengal borrowers through this process with average savings near 60%.
                  </p>
                </div>
              </section>

              <section id="kolkata-economy" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Kolkata Economy and Rising Debt Burden
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
                    Kolkata blends Salt Lake technology salaries, Park Street services, Burrabazar wholesale trade and Howrah industries. Families borrow for marriages, higher education, medical care and home upgrades. When layoffs, business slowdowns or health expenses hit, most households juggle multiple personal loans at once.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Once an account crosses 90 days overdue, recovery calls start daily and visits follow. Settlement breaks that cycle—banks prefer a 40-70% recovery today over years of litigation. Our legal desk knows Bengal lending culture and negotiates using sector data plus hardship proof so you regain financial stability.
                  </p>
                </div>
              </section>

              <section id="debt-problems" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Five Debt Problems Facing Bengali Families
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
                    <strong>1. Marriage Loans:</strong> Wedding costs of ₹5-15 lakhs stretch repayments once festivities end. We present cultural obligations to secure 50-60% settlements.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Trading Cash Flow:</strong> Burrabazar, New Market and Hatibagan traders depend on seasonal cycles. Delayed receivables freeze EMIs; we use inventory and sales data to negotiate relief.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. IT Layoffs:</strong> Salt Lake and New Town professionals faced sudden job cuts in 2023-24. Hardship files with termination letters help us achieve 50-65% reductions.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Medical Emergencies:</strong> Hospital bills for parents or relatives create multiple loans overnight. Lenders respond favourably when we share treatment records and expense sheets.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. NBFC Clusters:</strong> Easy NBFC credit from Bajaj Finserv, Tata Capital, Fullerton or IIFL traps families in 30% interest cycles. We club these accounts and push for one combined solution.
                  </p>
                </div>
              </section>

              <section id="credsettle-bengal" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  CredSettle Track Record in West Bengal
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
                    We have delivered 13,000+ settlements for West Bengal borrowers, working with Bandhan Bank, UCO Bank, SBI, HDFC and every major NBFC. Average savings stay close to 60% with complete legal closure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What makes us different:</strong> CredSettle is a registered legal services organisation. Kolkata-based lawyers and negotiators prepare bilingual paperwork, follow RBI rules and remain present until NOC arrives.
                  </p>

                  <div id="bengal-method" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Settlement Methods That Work in WB
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1:</strong> Free consultation to map every loan and hardship proof. <strong>Step 2:</strong> Legal notices stop harassment within a week. <strong>Step 3:</strong> We negotiate using Bengal-specific financial data to secure 30-70% reductions. <strong>Step 4:</strong> Lawyers verify OTS letters, supervise payment and plan credit rebuilding.
                    </p>
                  </div>

                  <div id="legal-safety" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Legal Safety and RBI Rules
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions and Fair Practices Code. You receive written OTS terms, transparent payment schedules, accurate credit reporting and legal backing if any lender deviates from the agreement.
                    </p>
                  </div>
                </div>
              </section>

              <section id="wb-legal-systems" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  WB Lok Adalat and Consumer Commission System
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
                    <strong>West Bengal Lok Adalat:</strong> Court-backed mediation sessions held across all districts help borrowers and lenders close matters in a single sitting with binding terms.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>State Consumer Commission:</strong> Ideal when banks hide charges or harass aggressively. Cases finish in 3-5 months and can award compensation in addition to settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We recommend the right route for your situation and coordinate with State Legal Services Authority if you qualify for free legal aid (income below ₹5 lakhs annually).
                  </p>
                </div>
              </section>

              <section id="kolkata-areas" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Kolkata Region Coverage - Salt Lake to Howrah
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
                    <strong>Salt Lake & New Town:</strong> Sector V layoffs reshaped repayment capacity for IT and BPO staff. We tailor negotiations with salary slips and separation letters.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Central & South Kolkata:</strong> Park Street professionals and Ballygunge families carry higher ticket personal loans for lifestyle, education and heritage property upgrades. We ensure settlements match social obligations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>North Kolkata & Howrah:</strong> Traders and industrial workers depend on festival sales or factory schedules. We align settlements with business cycles so repayments stay practical.
                  </p>
                </div>
              </section>

              <section id="districts-coverage" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Covering All WB Districts - Durgapur to Siliguri
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
                    <strong>Durgapur & Asansol:</strong> Steel and mining slowdowns create overdue EMIs. We use production data and employment letters to justify lower payouts.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Siliguri & North Bengal:</strong> Tea plantations and border trade depend on seasonal cash flows. Settlements align with harvest and logistics cycles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Rest of West Bengal:</strong> From Bardhaman to Haldia, Murshidabad to Jalpaiguri, local partners help us run the same documented process statewide.
                  </p>
                </div>
              </section>

              <section id="bengal-benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Benefits for West Bengal Borrowers
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
                    <strong>1. Bengal-specific insight:</strong> Local negotiators understand IT layoffs, trading cycles and industrial slowdowns.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Harassment stops fast:</strong> RBI-backed notices shift all calls to our legal desk within a week.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. 30-70% savings:</strong> Average reduction is 60% with clear payment plans.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Lok Adalat support:</strong> 85%+ success across Bengal benches for clients who need court-backed closure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. End-to-end paperwork:</strong> OTS letters, receipts and NOCs verified by our lawyers before case closes.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Pay after approval:</strong> Fees trigger only once your settlement is sanctioned.
                  </p>
                </div>
              </section>

              <section id="borrower-protection" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Legal Protection Available to WB Residents
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
                    Know your rights as West Bengal borrower. Laws protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Lenders must stay respectful, cannot discuss your debt with neighbours and must visit only during notified hours.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement Rights:</strong> Genuine hardship gives you the right to request restructuring or settlement before litigation. We document your case to enforce this.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>30-day document rule:</strong> After payment, lenders have 30 days to release closure letters and NOCs. We chase delays and escalate when needed.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Legal escalation:</strong> Consumer Commission and police complaints remain available if harassment continues. Our team files on your behalf when necessary.
                  </p>
                </div>
              </section>

              <section id="settlement-stages" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Settlement Process in Clear Stages
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
                    <strong>Days 1-5:</strong> Consultation, document checklist and legal notices that redirect all recovery calls to us.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 2-6:</strong> Negotiations with every lender using hardship proof, income data and sector benchmarks.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 6-9:</strong> OTS letters reviewed, lump sum or instalment plans finalised and payments executed under supervision.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 9-12:</strong> We collect receipts, NOCs and ensure credit bureaus update accounts to “settled” status while guiding your credit rebuild plan.
                  </p>
                </div>
              </section>

              <section id="kolkata-success" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Success Story - Kolkata Trader Gets Fresh Start
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
                    <strong>The Client:</strong> Debashis, a Burrabazar textile trader, had ₹26 lakh exposure across business and personal loans plus two cards. GST disruption and pandemic shutdowns stalled payments.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Intervention:</strong> Legal notices halted harassment within five days. Negotiations with Bandhan Bank, two NBFCs and card issuers closed at 42-48% of dues using sales data and lockdown evidence.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Outcome:</strong> Final payout was ₹11.8 lakh—saving ₹14.2 lakh. All lenders issued NOCs within 30 days and Debashis rebuilt his CIBIL score to 665 in a year.
                  </p>
                </div>
              </section>

              <section id="consultation" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Start Your Free WB Consultation Today
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
                    Struggling with personal loan dues in Kolkata, Howrah, Durgapur, Siliguri or any WB district? Settlement is legal and protects your family from harassment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Book a free consultation:</strong> No upfront fees. We review your hardship, design a 30-70% savings plan and manage every legal step until closure so you can restart with confidence.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema
                faqs={faqs}
                title="Personal Loan Settlement in West Bengal"
              />

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
                      Ready for Debt-Free Life in West Bengal?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 13,000+ Bengali families who achieved financial freedom. Free consultation, no upfront fees, proven results across all 23 districts.
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

