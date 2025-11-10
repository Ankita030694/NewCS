'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function TamilNaduPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'tn-settlement', text: 'Personal Loan Settlement in Tamil Nadu', level: 2 },
    { id: 'tn-protection-law', text: 'TN Anti-Harassment Law - Strongest Protection in India', level: 2 },
    { id: 'economy-mix', text: 'Tamil Nadu Economy - IT, Auto, Textile Mix', level: 2 },
    { id: 'debt-problems', text: 'Seven Common Debt Problems in TN', level: 2 },
    { id: 'credsettle-tn', text: 'Why CredSettle Leads in Tamil Nadu', level: 2 },
    { id: 'tn-strategy', text: 'Our Tamil Nadu Settlement Strategy', level: 3 },
    { id: 'legal-backing', text: 'RBI Rules Plus TN Law Protection', level: 3 },
    { id: 'tn-lok-adalat', text: 'Tamil Nadu Lok Adalat for Loan Cases', level: 2 },
    { id: 'chennai-coverage', text: 'Chennai Metro - OMR to Porur Coverage', level: 2 },
    { id: 'coimbatore-madurai', text: 'Coimbatore, Madurai and Industrial TN', level: 2 },
    { id: 'tn-benefits', text: 'Eight Reasons Tamil Borrowers Pick Us', level: 2 },
    { id: 'your-tn-rights', text: 'Your Rights Under TN and RBI Laws', level: 2 },
    { id: 'process-stages', text: 'Settlement Process - Stage by Stage', level: 2 },
    { id: 'chennai-story', text: 'Success Story - Chennai Auto Engineer Wins', level: 2 },
    { id: 'tn-consultation', text: 'Book Your Free Tamil Nadu Consultation', level: 2 },
    { id: 'faqs', text: 'Tamil Nadu Settlement Questions', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal in Tamil Nadu?',
      answer: 'Yes, completely legal in Tamil Nadu and across India. RBI recognizes settlement as legitimate debt resolution. Tamil Nadu also has strongest anti-harassment law in India (TN Money Lending Act 2025) that gives you extra protection during settlement process.'
    },
    {
      question: 'What is TN Anti-Harassment Law 2025?',
      answer: 'Tamil Nadu Money Lending Entities (Prevention of Coercive Actions) Act, 2025. Gives 3-5 years imprisonment and up to ₹5 lakh fine for harassment. Strongest borrower protection law in India. Applies to all lenders including banks and NBFCs if they use coercive tactics.'
    },
    {
      question: 'Can Chennai IT professionals settle loans?',
      answer: 'Yes, we specialize in Chennai IT sector cases from OMR, Porur, Ambattur areas. We understand tech layoffs, startup failures and IT job market. Have settled thousands of Chennai IT professional loans with 55-70% average reductions.'
    },
    {
      question: 'How much can TN borrowers save?',
      answer: 'Tamil Nadu borrowers typically save 30-70% on outstanding debt. Our TN state average is 60% savings. Chennai IT professionals often get 60-65% reductions, Coimbatore manufacturing cases get 55-60%.'
    },
    {
      question: 'Do you work with Tamil Nadu local banks?',
      answer: 'Yes, all banks including Indian Bank (headquartered in Chennai), Indian Overseas Bank, City Union Bank and all major private banks and NBFCs. We have settled thousands of loans from TN lenders.'
    },
    {
      question: 'Can Coimbatore textile workers settle loans?',
      answer: 'Absolutely. Coimbatore textile sector employs lakhs. We understand spinning mills, garment units, dyeing factories and their employment patterns. This sector knowledge helps negotiate better with lenders.'
    },
    {
      question: 'What is TN Lok Adalat success rate?',
      answer: 'Excellent. Tamil Nadu conducts very active Lok Adalats across all districts. We have handled hundreds of TN cases through Lok Adalat with 86% settlement success. Usually achieve 40-60% debt reduction with legally binding orders.'
    },
    {
      question: 'Can you handle cases in Tamil language?',
      answer: 'Yes, our TN team can communicate in Tamil. We prepare documentation in Tamil and English both when needed. This helps with local lenders and district courts across Tamil Nadu.'
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
                alt="Personal Loan Settlement Tamil Nadu"
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
                Loan Settlement Chennai Coimbatore Tamil Nadu - TN Law Protects You
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
                Facing loan debt in Chennai, Coimbatore or anywhere in Tamil Nadu? CredSettle helps TN borrowers reduce debt by 30-70% through legal, RBI-compliant settlement. Tamil Nadu's new Anti-Harassment Law (2025) gives you strongest protection in India. IT professionals, auto sector workers, textile manufacturers, all sectors covered. Over 14,000 Tamil families got debt-free with us.
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
              
              <section id="tn-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Personal Loan Settlement in Tamil Nadu
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
                    Tamil Nadu, India's manufacturing powerhouse and emerging IT hub, handles massive loan volumes yearly. From Chennai's OMR IT corridor and auto manufacturing clusters to Coimbatore's textile mills and engineering units, Madurai's trading hub to Tiruppur's garment exports, millions borrow for homes, education, business expansion and family needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> lets you negotiate with banks and NBFCs to pay reduced amounts instead of full outstanding balances. RBI recognizes this as legal debt resolution across India. Tamil Nadu now has India's strongest borrower protection law (TN Money Lending Act 2025) that makes harassment criminal offense with jail time.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 14,000 Tamil Nadu borrowers across Chennai, Coimbatore, Madurai, Salem, Trichy, Tiruppur and all districts. Our TN clients typically save 30-70% on outstanding amounts (state average: 60%). Every settlement follows RBI rules, gets proper legal documentation, and permanently closes debt without future lender claims.
                  </p>
                </div>
              </section>

              <section id="tn-protection-law" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  TN Anti-Harassment Law - Strongest Protection in India
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
                    Tamil Nadu passed revolutionary law in June 2025: <strong>Tamil Nadu Money Lending Entities (Prevention of Coercive Actions) Act, 2025</strong>. This law makes Tamil Nadu the most borrower-friendly state in India for debt resolution. Why this matters for you: Recovery agents face serious criminal consequences for harassment, making them very careful in TN now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What TN law says:</strong> Any lender (including banks and NBFCs) using coercive recovery methods faces 3-5 years imprisonment plus up to ₹5 lakh fine. Coercive actions defined as: intimidation, threats, property seizure attempts, undue influence, harassment of family members, repeated visits causing distress, abusive language. If harassment causes suicide, criminal liability applies (extremely serious).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How we use TN law:</strong> When we send legal notices to lenders in Tamil Nadu cases, we cite this state law prominently along with RBI rules. We explicitly warn that we will file police complaints under TN Act for any violations. This dual protection (RBI + TN Law) makes harassment stop faster in Tamil Nadu than most other states. Typically stops within 2-4 days (fastest in South India).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real impact:</strong> Since TN law passed, recovery agents in Tamil Nadu have become much more cautious. They know harassment can lead to jail time, not just regulatory complaints. This gives us strong leverage in settlement negotiations. Lenders prefer settling fairly rather than risking criminal cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Your advantage as TN borrower:</strong> You have double protection. RBI Fair Practices Code applies nationwide. TN Anti-Harassment Law adds criminal penalties specific to Tamil Nadu. Together, these make you one of the most protected borrowers in India. We use both aggressively to shield you during settlement process.
                  </p>
                </div>
              </section>

              <section id="economy-mix" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Tamil Nadu Economy - IT, Auto, Textile Mix
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
                    Tamil Nadu has most diversified economy in South India. Chennai houses IT companies on OMR (Old Mahabalipuram Road), auto manufacturing (Ford, Hyundai, Nissan, BMW), financial services and port operations. Coimbatore runs textile spinning, garment manufacturing and engineering units. Tiruppur dominates knitwear exports. Madurai has trading and MSME clusters. Each sector creates different borrowing and default patterns.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Chennai borrowing patterns:</strong> IT professionals in OMR, Porur, Ambattur areas borrow for flats in ECR, Velachery, Chromepet (₹15-40 lakhs personal loans for down payments). Auto sector engineers and workers take loans for education, vehicles and homes. When tech layoffs hit or auto plants reduce production, EMIs become burden. High cost of living in Chennai (₹20,000-₹50,000 rent) makes situation worse.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Coimbatore industrial economy:</strong> Textile spinning mills, garment factories, pump manufacturing, engineering units employ hundreds of thousands. Workers and small business owners borrow for homes, education, business needs. When cotton prices spike, export orders drop or power costs increase, entire sector feels stress. Loan defaults rise.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Tiruppur export vulnerability:</strong> Knitwear export capital of India. When US and European buyers reduce orders (happens during recessions), thousands of garment workers and unit owners get affected. Many borrowed during boom times, now struggle with loans during slow periods.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We understand all these TN sector patterns. We know how to negotiate with lenders using industry-specific data. IT layoff reports for Chennai tech sector, textile export statistics for Coimbatore cases, auto production data for manufacturing sector loans. This sector expertise improves your settlement outcome directly.
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
                  Seven Common Debt Problems in TN
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
                    <strong>1. Chennai IT Sector Layoffs:</strong> OMR corridor, Porur IT park, Ambattur IT SEZ house major companies (TCS, Infosys, Wipro, Cognizant, smaller startups). Layoffs hit 2023-2024. People borrowed on ₹20-35 lakh packages. New jobs pay ₹15-25 lakhs. EMIs don't adjust. We've settled 2,500+ Chennai IT cases. Strategy: Use layoff data, funding winter reports and income drop proof to negotiate 55-70% reductions.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Auto Manufacturing Job Losses:</strong> Chennai houses India's second largest auto hub (Detroit of Asia tag). Ford shut plant 2022, many vendor layoffs followed. Hyundai, Renault-Nissan also cut staff during slow periods. Auto workers and engineers borrowed for homes and vehicles. We've settled many auto sector loans using industry production data and employment reports.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Coimbatore Textile Margin Squeeze:</strong> Spinning mills and textile units face cost pressures. Cotton prices volatile, power tariffs high, labor costs up, but export prices flat. Many mill owners and workers borrowed during good times. Now margins crushed. We've handled 1,800+ Coimbatore textile sector cases. We show lenders the textile industry reports and margin data proving sector-wide crisis.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Tiruppur Export Order Cancellations:</strong> Garment exporters in Tiruppur depend on US and European orders. When global demand drops, orders get cancelled. Small garment unit owners borrowed ₹10-30 lakhs for machinery and working capital. Cannot service loans when orders disappear. We negotiate using export statistics and order cancellation documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Medical Debt Crisis:</strong> Healthcare costs in Tamil Nadu metros are high. People borrow ₹5-15 lakhs for serious treatments. After medical crisis, debt remains. Medical emergency loans get good settlement terms (60-70% reduction) because lenders understand unavoidable nature.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Education Loan Burden:</strong> Tamil Nadu has strong education culture. Parents borrow heavily for children's engineering, medical, MBA education (₹8-25 lakhs). When child's job doesn't materialize or pays less than expected, parents struggle with EMI burden. We've settled many such family cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Multiple Small Loans Trap:</strong> NBFCs and fintech apps have targeted TN aggressively. Many people end up with 4-6 small loans (₹30,000 to ₹2 lakhs each) at 24-36% interest. Interest compounds faster than repayments. Our method: Bundle all loans in single negotiation showing total default risk.
                  </p>
                </div>
              </section>

              <section id="credsettle-tn" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Why CredSettle Leads in Tamil Nadu
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
                    We've handled 14,000+ loan settlements across Tamil Nadu in last four years. Our TN clients save an average of 60% on their debt (among highest in South India). We work with all major banks including Indian Bank and Indian Overseas Bank (both headquartered in Chennai) and all NBFCs operating across the state.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our TN edge:</strong> We're registered legal services company following every RBI rule. We understand TN's new Anti-Harassment Law and use it aggressively to protect clients. We have Tamil-speaking team members who know Chennai IT culture, Coimbatore textile economics, auto sector employment patterns and regional business practices.
                  </p>

                  <div id="tn-strategy" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Our Tamil Nadu Settlement Strategy
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Sector Assessment</strong> - IT professional from OMR? Auto worker from Sriperumbudur? Textile employee from Coimbatore? Each needs different approach. Free confidential consultation. <strong>Step 2: Immediate Legal Shield</strong> - Legal notices citing both RBI rules and TN Anti-Harassment Law 2025. We warn explicitly about criminal penalties (3-5 years jail). Harassment stops within 2-4 days (fastest in South India). <strong>Step 3: Industry-Smart Negotiation</strong> - Our TN team uses sector data. IT layoff reports, auto production statistics, textile export figures, whatever applies to your case. Push for 30-70% debt reduction. <strong>Step 4: Tamil + English Documentation</strong> - Settlement papers in both languages when needed. Helps with regional banks and local lenders. <strong>Step 5: Credit Recovery Plan</strong> - After settlement, we guide on CIBIL rebuilding considering TN job market and future needs.
                    </p>
                  </div>

                  <div id="legal-backing" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      RBI Rules Plus TN Law Protection
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman guidelines. Plus TN Anti-Harassment Law 2025 adds criminal penalties for violations. You get: (1) Written OTS agreement, (2) Clear terms that no more claims can be made, (3) Correct credit reporting, (4) Documents within 30 days, (5) Dual legal protection (RBI + TN Law). Our TN lawyers file criminal complaints immediately if harassment continues.
                    </p>
                  </div>
                </div>
              </section>

              <section id="tn-lok-adalat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Tamil Nadu Lok Adalat for Loan Cases
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
                    Tamil Nadu runs highly efficient Lok Adalat system across all districts. Court-backed mediation under Legal Services Authorities Act delivers legally binding orders like regular court judgments. TN Lok Adalats are known for high settlement rates and borrower-friendly approach.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How TN Lok Adalat works:</strong> You and lender sit with trained mediators in district court. Mediators push both sides toward fair settlement. Zero court fees. Usually done in one session (2-4 hours). Decision is final and enforceable. Banks and NBFCs participate actively because it saves legal costs. Settlements typically land at 40-60% of outstanding.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our TN Lok Adalat experience:</strong> We've represented hundreds of Tamil borrowers in Lok Adalats across Chennai, Coimbatore, Madurai, Salem and district courts. We prepare hardship files in Tamil and English (helps with judges). Write settlement proposals with sector data. Argue cases strongly. 86% success rate in TN Lok Adalat cases. Everything documented with legally binding orders.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When Lok Adalat is best:</strong> If lender filed court case already, Lok Adalat provides fastest resolution. If your loan is above ₹10 lakhs and involves property or vehicle, Lok Adalat gives structured settlement with asset protection. Tamil Nadu Legal Services Authority conducts regular banking Lok Adalats.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Free legal help:</strong> If you earn under ₹5 lakhs yearly, TN Legal Services Authority provides free lawyers for Lok Adalat. We coordinate for eligible Tamil Nadu borrowers.
                  </p>
                </div>
              </section>

              <section id="chennai-coverage" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Chennai Metro - OMR to Porur Coverage
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
                    <strong>OMR IT Corridor:</strong> Old Mahabalipuram Road from Taramani to Siruseri houses IT parks (TCS Campus, Infosys, Cognizant, HCL). We've handled 2,800+ cases from OMR residents. Mostly IT professionals, some startup employees. We understand tech sector layoffs, funding winters and IT job market volatility. Use this knowledge in settlement negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Porur and Ambattur Industrial Areas:</strong> Mix of IT parks and manufacturing units. We've settled 1,200+ loans from these areas. Different profile than pure IT corridor. Mix of tech and manufacturing employees.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Sriperumbudur Auto Belt:</strong> Ford (now closed), Hyundai, Renault-Nissan, BMW plants plus hundreds of vendor units. Auto sector employs lakhs. When production drops or plants close, mass impact. We've handled 900+ auto sector loan cases using production data and employment statistics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Central Chennai:</strong> T Nagar, Anna Nagar, Nungambakkam. Mix of professionals, business owners, traders. Higher loan amounts typically. We handle central Chennai cases understanding property values and lifestyle loan patterns.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>South Chennai:</strong> Velachery, Chromepet, Tambaram. Residential areas with salaried class. We've settled thousands of loans from South Chennai families.
                  </p>
                </div>
              </section>

              <section id="coimbatore-madurai" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Coimbatore, Madurai and Industrial TN
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
                    <strong>Coimbatore:</strong> Textile city with thousands of spinning mills, garment units, engineering workshops, pump manufacturers. We've handled 2,200+ Coimbatore cases. Mix of mill workers, business owners and professionals. We understand Coimbatore's industrial clusters, textile economics and engineering sector. Use this local knowledge in settlement negotiations with lenders.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Tiruppur:</strong> Knitwear export hub. Almost everyone works in or around garment industry. We've settled 1,100+ Tiruppur loans. We understand export cycles, buyer payment delays and garment unit cash flows. Critical for negotiating with lenders who may not understand export business dynamics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Madurai:</strong> Trading and commercial hub of South TN. Temple economy, textile trading, small industries. We've handled 1,000+ Madurai cases with understanding of regional business patterns.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Salem, Erode, Trichy:</strong> Mix of steel, textiles, agriculture trading, education institutions. Full settlement coverage across these cities.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Other TN Districts:</strong> Vellore, Thanjavur, Kanchipuram, Tirunelveli and all 38 districts. We serve entire Tamil Nadu through local partnerships and Tamil-speaking coordination.
                  </p>
                </div>
              </section>

              <section id="tn-benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Eight Reasons Tamil Borrowers Pick Us
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
                    <strong>1. TN Anti-Harassment Law Expertise:</strong> We know how to use TN's 2025 law aggressively. Cite criminal penalties, threaten police complaints. Makes harassment stop fastest here (2-4 days typically).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Sector-Specific Knowledge:</strong> IT sector understanding for Chennai, textile economics for Coimbatore, auto manufacturing for Sriperumbudur, garment exports for Tiruppur. We speak your industry language.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Tamil Communication:</strong> Our TN team handles cases in Tamil language. Documentation in regional language when needed. Helps with local lenders and courts.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Save 30-70% Average:</strong> TN clients save 60% on average. Chennai IT professionals often get 60-65%. That's lakhs saved.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Lok Adalat Mastery:</strong> 86% success rate in TN Lok Adalat cases. Hundreds handled across districts. We know the system inside out.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Complete Legal Process:</strong> Every settlement follows RBI rules. Proper documentation so lenders cannot return. Important in TN where strong law backs you.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Pay After Results:</strong> No upfront fees. We charge only after settlement is negotiated and documented. Our confidence.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>8. 14,000+ TN Success Stories:</strong> Chennai, Coimbatore, Madurai across the state. Track record proves capability.
                  </p>
                </div>
              </section>

              <section id="your-tn-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Your Rights Under TN and RBI Laws
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
                    Know your rights as Tamil Nadu borrower. You have strongest legal protection in India:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>TN Anti-Harassment Law 2025:</strong> Any lender or agent using coercive recovery faces 3-5 years imprisonment plus ₹5 lakh fine. Coercion includes: intimidation, threats, repeated visits, abusive language, contacting family, property seizure attempts. File police FIR immediately if this happens.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass, threaten or abuse. Cannot visit without notice. Cannot tell employers or colleagues about debt. Break these rules, file Banking Ombudsman complaint plus police complaint under TN law.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> If you have genuine hardship, lenders must discuss settlement. RBI encourages resolution before legal action.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Rule:</strong> After settlement payment, lender has 30 days for closure letter and NOC. RBI Master Direction. Delays mean penalties (₹5,000 daily).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Lok Adalat Access:</strong> Any TN resident can use Lok Adalat for loan disputes. Free legal aid if you earn under ₹5 lakhs yearly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Criminal Protection:</strong> Under TN law, if harassment causes you extreme distress or health problems, recovery agents face serious criminal charges. This is unique to Tamil Nadu.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights aggressively. Tamil Nadu gives us strongest legal tools in India to shield you from harassment while negotiating settlement.
                  </p>
                </div>
              </section>

              <section id="process-stages" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Settlement Process - Stage by Stage
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
                    <strong>Stage 1: Quick Connect (Days 1-2)</strong> - Call, WhatsApp us immediately if facing harassment. Free 30-40 minute confidential assessment. We review loans, sector, harassment severity. No pressure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 2: Legal Shield Activation (Days 2-4)</strong> - Legal notices to all lenders citing RBI rules and TN Anti-Harassment Law 2025. We warn about criminal penalties explicitly. Harassment typically stops within 2-4 days (fastest in South India).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 3: Documentation (Days 5-10)</strong> - You share loan papers, employment proof, hardship documents. We analyze and build settlement case with sector-specific data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 4: Negotiate (Weeks 2-7)</strong> - Our TN team contacts lender NPA divisions. We use IT layoff data, auto production reports, textile export statistics. Push for 30-70% debt reduction.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 5: Lock Settlement (Weeks 7-9)</strong> - Lender agrees. We get formal OTS letter. Everything legally verified.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 6: Payment (Weeks 9-11)</strong> - You arrange settlement amount. Pay to lender. We get receipt immediately.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 7: Close Account (Weeks 11-15)</strong> - Lender has 30 days for all documents. We follow up hard. Verify credit bureau updates.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 8: Post-Settlement (Ongoing)</strong> - Credit rebuilding guidance, financial management advice. We stay available for support.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 55-95 days for TN cases. Chennai corporate cases sometimes faster because documentation is better and lenders respond quicker.
                  </p>
                </div>
              </section>

              <section id="chennai-story" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Success Story - Chennai Auto Engineer Wins
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
                    <strong>The Borrower:</strong> Murugan S., age 39, senior design engineer at auto component manufacturer near Sriperumbudur. Salary ₹12 lakhs yearly. Had borrowed ₹22 lakhs total (1 personal loan for flat down payment, 1 car loan, 2 credit cards).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Crashed:</strong> Ford India shut Maraimalai Nagar plant in 2022. His company supplied components to Ford. When Ford closed, orders dropped 60%. Company cut workforce by 45%. Murugan survived but salary reduced 25% (from ₹12 lakhs to ₹9 lakhs). Couldn't pay EMIs on ₹15 lakhs personal loan, ₹4 lakhs car loan and ₹3 lakhs credit cards. All accounts went NPA. Recovery agents called 30+ times daily, visited his Chromepet flat 4 times, contacted his brother twice, sent threatening messages. CIBIL fell from 760 to 510. Family was stressed beyond limits.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Protected Him:</strong> Murugan contacted us January 2024. We sent immediate legal notices citing TN Anti-Harassment Law 2025 with explicit warnings about 3-5 years jail for harassment. Copied local police station. Harassment stopped in 3 days completely. Our assessment showed genuine sector crisis - Ford closure news, vendor impact reports, salary reduction letter. Documented everything.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation Process:</strong> Our Chennai auto sector specialist team spent 2 months negotiating. Personal loan (from major bank) settled at 45% because we showed them Ford closure impact on entire vendor ecosystem (not individual problem). Car loan settled at 50% using depreciation data. Both credit cards settled at 38% by showing salary cut and revolving interest.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Result:</strong> ₹22 lakhs outstanding became ₹10.2 lakhs settlement. Saved ₹11.8 lakhs (54% reduction). Murugan arranged money through provident fund withdrawal, family help and selling old car. All 4 accounts closed legally with NOCs. Harassment stopped permanently. Family peace restored.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Today:</strong> Murugan is debt-free. Still working at same vendor company (orders improved from other OEMs). CIBIL improved to 680 after 15 months. We guided him on credit rebuilding. His words: "CredSettle used TN's new harassment law to protect me immediately. The legal protection came first, then settlement. That approach saved my family from hell."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> January 2024 first call, February-March negotiation, April 2024 payment, May 2024 closure. Total: 4 months. Harassment stopped in 3 days.
                  </p>
                </div>
              </section>

              <section id="tn-consultation" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Book Your Free Tamil Nadu Consultation
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
                    Struggling with loan debt in Chennai, Coimbatore, Madurai or anywhere in Tamil Nadu? You don't need to suffer harassment or debt burden alone. Settlement is legal. RBI backs it. TN's new law protects you with strongest harassment penalties in India.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Debt plus harassment destroys life. Health suffers, family peace gone, work focus disappears, social stress increases, sleep impossible. Each day you delay, harassment continues (agents don't care until legal action hits them), penalties grow, CIBIL falls more. But exit exists. Over 14,000 Tamil families already achieved debt-free and harassment-free life through our services.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Start today:</strong> Free confidential consultation. No obligations, no upfront fees. Just honest assessment and immediate protection plan using TN law. Our Tamil Nadu experts will show exactly how to stop harassment fast (2-4 days), cut debt 30-70% and close everything legally. We understand IT sector, auto manufacturing, textile industry, whatever your situation is.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Financial problems are temporary phases. But unresolved debt and continuing harassment can destroy years. With our legal team, TN law expertise and 14,000+ case experience, you can end both debt and harassment properly. Don't suffer anymore. Act now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Chennai OMR corridor, Coimbatore textile mills, Tiruppur garment units, Madurai markets or any TN district. Wherever you are, debt-free and harassment-free life is possible. We'll help you reach there safely.
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
                title="Personal Loan Settlement in Tamil Nadu"
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
                      Ready to Use TN Law and End Debt?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 14,000+ Tamil families protected by TN's strongest law. Free consultation, no upfront fees, harassment stops in 2-4 days.
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




