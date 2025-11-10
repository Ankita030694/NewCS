'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function HaryanaPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'haryana-intro', text: 'Loan Settlement in Haryana - NCR and Beyond', level: 2 },
    { id: 'corporate-ncr', text: 'Corporate Haryana and NCR Debt Dynamics', level: 2 },
    { id: 'haryana-challenges', text: 'Eight Debt Challenges Across Haryana', level: 2 },
    { id: 'credsettle-haryana', text: 'Our Haryana Settlement Expertise', level: 2 },
    { id: 'haryana-approach', text: 'Haryana-Specific Settlement Approach', level: 3 },
    { id: 'rbi-protection', text: 'RBI and Legal Protection Framework', level: 3 },
    { id: 'haryana-legal-systems', text: 'Haryana Lok Adalat and Debt Conciliation Board', level: 2 },
    { id: 'gurgaon-faridabad', text: 'Gurgaon and Faridabad - Corporate Hub Services', level: 2 },
    { id: 'industrial-haryana', text: 'Panipat, Ambala and Industrial Belt', level: 2 },
    { id: 'haryana-advantages', text: 'Seven Strong Reasons to Choose Us in Haryana', level: 2 },
    { id: 'rights-haryana', text: 'What Rights You Have as Haryana Borrower', level: 2 },
    { id: 'process-flow', text: 'Complete Settlement Process Flow', level: 2 },
    { id: 'gurgaon-case', text: 'Real Story - Gurgaon Manager Clears Debt', level: 2 },
    { id: 'free-consult', text: 'Get Free Haryana Consultation Now', level: 2 },
    { id: 'faqs', text: 'Haryana Borrowers Ask These Questions', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal in Haryana and Gurgaon?',
      answer: 'Yes, completely legal in Haryana and across India. RBI recognizes settlement as legitimate debt resolution. CredSettle operates within all legal frameworks including Haryana Lok Adalat and Debt Conciliation Board systems.'
    },
    {
      question: 'Can Gurgaon corporate employees settle personal loans?',
      answer: 'Absolutely. We specialize in corporate employee cases from Gurgaon, Faridabad NCR areas. We understand job changes, notice periods, variable pay structures. Have settled thousands of corporate professional loans with 50-70% average reductions.'
    },
    {
      question: 'How much debt can Haryana borrowers save?',
      answer: 'Haryana borrowers typically save 30-70% on outstanding debt. Our state average is 59% savings. Corporate employees in Gurgaon often get better terms (60-65%) because job stability helps negotiation.'
    },
    {
      question: 'Will settlement affect my job in Gurgaon corporates?',
      answer: "Settlement itself doesn't affect employment. But we stop recovery harassment at workplace immediately (within 3 days). Critical for corporate professionals worried about HR or manager finding out about debt issues."
    },
    {
      question: 'What is Haryana Debt Conciliation Board?',
      answer: 'Unique to Haryana. Board established under Haryana Relief of Agricultural Indebtedness Act helps borrowers (mainly agricultural but also others) negotiate debt relief. We can guide you through this process if applicable to your case.'
    },
    {
      question: 'Do you work with Faridabad local banks?',
      answer: 'Yes, all banks and NBFCs in Haryana including local cooperative banks in Faridabad, Panipat, Ambala. We have settled loans from all major lenders operating across Haryana.'
    },
    {
      question: 'Can Panipat textile workers settle loans?',
      answer: 'Yes, we handle many Panipat industrial sector cases. We understand textile industry cycles, wage structures and seasonal employment patterns. This helps negotiate better settlement terms with lenders.'
    },
    {
      question: 'How long does settlement take in Haryana?',
      answer: 'Typically 50-90 days from first consultation to final closure. Gurgaon corporate cases sometimes faster (45-60 days) because documentation is cleaner and lenders respond quicker to corporate employee cases.'
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
                alt="Personal Loan Settlement Haryana"
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
                Loan Settlement Gurgaon Faridabad Haryana - Corporate and Industrial Focus
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
                Stuck with loan debt in Gurgaon, Faridabad, Panipat or anywhere in Haryana? CredSettle helps corporate professionals, industrial workers and all Haryana borrowers reduce debt by 30-70% through legal, RBI-compliant settlement. Stop recovery harassment at workplace, negotiate with all banks and NBFCs. Over 9,500 Haryana families got debt-free with us.
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
              
              <section id="haryana-intro" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Loan Settlement in Haryana - NCR and Beyond
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
                    Haryana, bordering Delhi and forming critical part of NCR (National Capital Region), has transformed into corporate and industrial powerhouse. Gurgaon houses hundreds of MNCs and corporate offices. Faridabad runs manufacturing and industrial estates. Panipat dominates textile production. Ambala has defense equipment and scientific instruments. Millions of Haryanvis borrow for homes, education, vehicles and business needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> lets you negotiate with banks and NBFCs to pay reduced amounts instead of full outstanding balances. RBI recognizes this as legal debt resolution method across India including Haryana. When you genuinely cannot repay loans, settlement provides proper exit without years of harassment or court battles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 9,500 Haryana borrowers across Gurgaon, Faridabad, Panipat, Ambala, Rohtak, Hisar, Karnal and all districts. Our Haryana clients typically save 30-70% on outstanding amounts (state average: 59%). Every settlement follows RBI rules, gets proper legal documentation, and permanently closes debt without future lender claims.
                  </p>
                </div>
              </section>

              <section id="corporate-ncr" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Corporate Haryana and NCR Debt Dynamics
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
                    Haryana's economy splits into two worlds. Gurgaon and Faridabad form NCR's corporate belt with high salaries and expensive lifestyles. Rest of Haryana has industrial towns (Panipat textiles, Ambala manufacturing) and agricultural economy. Both create different debt patterns.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Gurgaon corporate borrowing:</strong> MNC employees earning ₹12-40 lakhs yearly borrow big. Personal loans for flat down payments in DLF, Golf Course Road areas (₹20-50 lakhs). Car loans for premium vehicles (₹10-25 lakhs). Credit cards for lifestyle (₹5-12 lakhs outstanding common). When layoff notice comes or company shuts India operations, all EMIs become impossible. We've seen this repeatedly with corporate professionals in Cyber City, Udyog Vihar, Sohna Road areas.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Industrial Haryana debt patterns:</strong> Factory workers in Faridabad, textile workers in Panipat, manufacturing employees in Ambala borrow for homes, children education, medical needs. Loans are smaller (₹3-12 lakhs) but same burden when factory closes, wages get delayed or production drops. Different challenges than corporate employees but equally stressful.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Default impact in Haryana:</strong> After 90 days default, accounts become NPA. Recovery pressure starts. For corporate employees, agents sometimes call at office or send messages to work email (highly embarrassing). For industrial workers, agents visit homes and factories. CIBIL crashes below 600. Some lenders file cases at Gurgaon or district courts.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Settlement provides clean exit. Lenders prefer getting 40-70% now versus court battles in Haryana. You get key wins: major debt reduction (save 30-70%), harassment stops protecting workplace reputation, legal closure with documents, fresh financial start.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We specialize in Haryana's dual economy. We know how to negotiate with banks serving Gurgaon corporate clients (different approach than industrial worker cases). We understand NCR living costs, corporate compensation structures, industrial sector cycles and agricultural income patterns. This Haryana-specific knowledge improves your settlement terms.
                  </p>
                </div>
              </section>

              <section id="haryana-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Eight Debt Challenges Across Haryana
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
                    <strong>1. Gurgaon Corporate Layoffs:</strong> MNCs in Cyber City, DLF Cyber Hub, Udyog Vihar have laid off thousands in 2022-2024 (tech downturn, global recession). People borrowed big during ₹30 lakh package days. New jobs pay ₹18-22 lakhs. EMIs don't adjust down. We've settled 2,000+ Gurgaon corporate employee loans. Strategy: Show lenders the layoff is industry-wide using LinkedIn data, news reports and HR communications.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Job Change Variable Pay Loss:</strong> Many Gurgaon corporate salaries have 30-40% variable component (bonus, commissions, stock options). People borrow based on total package. When they change jobs or company cuts variable pay, take-home drops 25-35%. EMIs become burden. We negotiate using offer letters showing fixed versus variable breakup.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Faridabad Industrial Slowdown:</strong> Manufacturing units in Faridabad face order cancellations and production cuts. Workers get wages but overtime stops, bonuses disappear. Borrowed expecting stable income, now stuck. We've settled 1,200+ Faridabad worker loans using industrial production data and employment statistics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Panipat Textile Sector Crisis:</strong> Panipat is India's textile city. Thousands work in power loom units, dyeing factories, textile trading. Sector faces competition from cheap imports, power cost increases, GST compliance burdens. Many textile workers and small unit owners borrowed for business or personal needs. Now struggling. We negotiate using Panipat textile association data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Real Estate EMI Trap:</strong> Gurgaon and Faridabad saw massive real estate boom. People bought flats with big personal loans for down payments. Then property prices corrected 15-25% in many areas. Stuck with EMIs on property worth less than loan. We've settled hundreds of such cases showing lenders the property market correction data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Multiple Credit Card Debt:</strong> Corporate professionals in Gurgaon often carry 2-4 premium credit cards. Outstanding grows to ₹6-12 lakhs at 36-42% interest. Revolving interest means minimum payments don't reduce principal. We settle by stopping interest and negotiating 30-50% lump sum.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Medical Emergency Loans:</strong> Common across Haryana. Family medical crisis forces borrowing ₹5-15 lakhs. After treatment, debt remains. Medical loans get good settlement terms (55-70% reduction) because lenders understand these are unavoidable.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>8. Workplace Harassment Fear:</strong> Unique problem for corporate employees. Recovery agents calling at office, sending emails to work ID, contacting colleagues. Causes extreme stress and career risk. Once you hire us, we stop all workplace contact within 3 days through legal notices.
                  </p>
                </div>
              </section>

              <section id="credsettle-haryana" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Our Haryana Settlement Expertise
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
                    We've handled 9,500+ loan settlements across Haryana in last four years. Our Haryana clients save an average of 59% on their debt. We work with all major banks and NBFCs operating in Gurgaon, Faridabad, Panipat and across the state.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Haryana strength:</strong> We're registered legal services company following every RBI rule. We have corporate employment specialists who understand MNC structures, stock options, joining bonuses and variable pay. We also have industrial sector experts who know factory economics, wage patterns and production cycles. This dual expertise helps us handle Haryana's mixed economy effectively.
                  </p>

                  <div id="haryana-approach" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Haryana-Specific Settlement Approach
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Phase 1: Profile Understanding</strong> - Corporate employee with stock options? Industrial worker with wage issues? Textile business owner? Farmer with crop loan converted to personal loan? Each needs different strategy. Free confidential assessment. <strong>Phase 2: Stop Workplace Harassment</strong> - For corporate employees, we act extra fast. Legal notices citing RBI rules plus specific warnings against workplace contact. Harassment at office stops within 3 days typically. <strong>Phase 3: Smart Negotiation</strong> - Our Haryana team uses profile-specific data. Corporate layoff reports for MNC cases, industrial production data for factory workers, textile export statistics for Panipat cases. Push for 30-70% debt reduction. <strong>Phase 4: Legal Documentation</strong> - OTS letters, receipts, closure proof, NOC. All verified before you pay anything. <strong>Phase 5: Post-Settlement Guidance</strong> - Credit score rebuilding, financial management advice especially for corporate professionals planning career moves.
                    </p>
                  </div>

                  <div id="rbi-protection" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      RBI and Legal Protection Framework
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman guidelines. You get: (1) Written OTS agreement on lender letterhead, (2) Clear statement that no additional claims can be made, (3) Correct credit reporting (marked "settled"), (4) Documents released within 30 days per RBI rule, (5) Legal support if lender violates terms. Our Haryana lawyers act fast when needed.
                    </p>
                  </div>
                </div>
              </section>

              <section id="haryana-legal-systems" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Haryana Lok Adalat and Debt Conciliation Board
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
                    Haryana has two unique legal systems for debt resolution. We use both depending on your case type.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Haryana Lok Adalat:</strong> Court-backed mediation under Legal Services Authorities Act. Operates across all Haryana districts. You and lender sit with mediators who push fair settlement. No court fees. Quick resolution (one session usually). Decision is legally binding. Haryana conducts regular banking Lok Adalats where banks and NBFCs actively participate. Settlements typically land at 40-60% of outstanding.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Haryana Lok Adalat record:</strong> We've represented hundreds of borrowers in Lok Adalats across Gurgaon, Faridabad, Panipat, Rohtak and district courts. We prepare complete hardship files (corporate layoff proof, industrial closure docs, income loss records). Write strong settlement proposals. Argue cases hard. 87% success rate in Haryana Lok Adalat cases. Everything gets legally binding orders that lenders cannot appeal.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Haryana Debt Conciliation Board:</strong> Unique to Haryana. Established under Haryana Relief of Agricultural Indebtedness Act, 1989. Originally for farmers but board also helps other borrowers facing genuine hardship. Provides structured debt relief mechanism. If your case involves agricultural income or if you're from farming background with mixed loans, this board can help. We've used Debt Conciliation Board route for eligible Haryana borrowers with good results.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Which system to use:</strong> If lender filed court case, Lok Adalat is fastest. If you have agricultural income or farming background, Debt Conciliation Board may apply. For most corporate and industrial cases, direct negotiation with our legal backing works best. We assess your situation and recommend right legal path for Haryana.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Free legal aid:</strong> If you earn under ₹5 lakhs yearly, Haryana State Legal Services Authority provides free lawyers for Lok Adalat cases. We coordinate with them for eligible borrowers.
                  </p>
                </div>
              </section>

              <section id="gurgaon-faridabad" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Gurgaon and Faridabad - Corporate Hub Services
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
                    <strong>Gurgaon (Gurugram):</strong> Corporate capital of Haryana. DLF Cyber City, Cyber Hub, Udyog Vihar, Sohna Road house hundreds of MNCs (Google, Microsoft, American Express, Accenture, Genpact and more). We've handled 3,500+ Gurgaon cases. Mostly corporate professionals earning ₹12-45 lakhs but facing layoffs, job changes or variable pay cuts. We understand corporate employment contracts, stock vesting schedules, notice period disputes and severance packages. This knowledge helps us negotiate better with lenders who see Gurgaon corporate clients differently than other borrowers.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Faridabad:</strong> Industrial city with manufacturing, automotive components, electronics assembly. Mix of factory owners and workers. We've settled 1,800+ Faridabad loans. Different profile than Gurgaon corporate cases. We understand industrial economics, production cycles and working class income stability. Negotiate accordingly using sector-specific data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why we dominate Gurgaon-Faridabad:</strong> These two cities account for 60% of Haryana settlements we handle. Strong local presence through legal partners. We know local banks, district courts and recovery agent networks. When we tell a Gurgaon bank we're local experts, they take negotiations seriously.
                  </p>
                </div>
              </section>

              <section id="industrial-haryana" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Panipat, Ambala and Industrial Belt
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
                    <strong>Panipat:</strong> Textile capital with thousands of power loom units. Workers, traders and small unit owners borrow for business capital and personal needs. Textile sector faces ups and downs based on domestic demand and export markets. We've handled 900+ Panipat cases. We understand power loom economics, yarn price cycles and textile export patterns. Use this knowledge in settlement negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Ambala:</strong> Manufacturing hub for defense equipment, scientific instruments, hardware. Mix of large defense units and small MSME suppliers. We've settled 600+ Ambala loans. Many involve working capital issues or order cancellation problems. We negotiate using defense sector procurement data and MSME supplier challenges.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Rohtak, Hisar, Karnal:</strong> Mix of agricultural economy, educational institutions (universities), small industries. Different patterns than corporate Gurgaon or industrial Faridabad. Full settlement coverage with understanding of local economies.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Other Haryana Districts:</strong> Sonipat, Jhajjar, Rewari, Palwal, Mahendragarh and all 22 districts. We serve entire Haryana through local partnerships and remote handling when needed.
                  </p>
                </div>
              </section>

              <section id="haryana-advantages" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Seven Strong Reasons to Choose Us in Haryana
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
                    <strong>1. Corporate Employment Expertise:</strong> We understand Gurgaon MNC culture, variable pay structures, stock options, layoff patterns. Most settlement companies don't get corporate compensation nuances. We do.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Workplace Harassment Stops Fast:</strong> Within 3 days for corporate employees. Legal notices warn against any workplace contact. Critical for professionals worried about career impact.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Save 30-70% Average:</strong> Haryana clients save 59% on average. Corporate employees often get 60-65% reductions because job stability (even after layoff) helps negotiation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Industrial Sector Knowledge:</strong> We understand Faridabad manufacturing, Panipat textiles, Ambala defense sector economics. Use this data in negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Debt Conciliation Board Access:</strong> We can guide you through Haryana's unique Debt Conciliation Board if applicable to your case (especially if agricultural income involved).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Complete Legal Process:</strong> Every settlement follows RBI rules. Proper documentation so lenders cannot return. Important for corporate professionals who need clean records.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Pay After Success:</strong> No upfront fees. We charge only after settlement is negotiated and documented. Our confidence in results.
                  </p>
                </div>
              </section>

              <section id="rights-haryana" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  What Rights You Have as Haryana Borrower
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
                    Know your rights as Haryana borrower. Multiple laws protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass, threaten or contact at workplace without permission. Cannot tell colleagues or employers about debt. Break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Workplace Protection:</strong> Recovery agents cannot visit your office, send emails to work ID or contact your employer. Especially important for Gurgaon corporate employees. Violations can be reported to police and RBI.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> If you have genuine hardship (layoff, salary cut, business loss), lenders must discuss settlement. RBI encourages resolution before legal action.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Timeline:</strong> After settlement payment, lender has 30 days maximum for closure letter and NOC. RBI Master Direction. Delays mean penalties (₹5,000 per day).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Lok Adalat Access:</strong> Any Haryana resident can use Lok Adalat for loan disputes. Free legal aid if you earn under ₹5 lakhs yearly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Debt Conciliation Board:</strong> If you have agricultural income or background, you can approach Haryana Debt Conciliation Board for structured debt relief.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Police Protection:</strong> Recovery agents cannot force entry, threaten violence or abuse. File FIR at local Haryana police station.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any violations, we take immediate legal action protecting your interests.
                  </p>
                </div>
              </section>

              <section id="process-flow" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Complete Settlement Process Flow
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
                    <strong>Stage 1: Free Assessment (Days 1-3)</strong> - Call, WhatsApp or visit our Gurgaon office. 30-45 minute confidential consultation. We review loans, employment situation, hardship. No pressure to hire.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 2: Documentation (Days 4-7)</strong> - You share loan papers, salary slips, offer letters, layoff notice (if applicable), hardship proof. We analyze and build settlement case.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 3: Stop All Harassment (Days 7-10)</strong> - Legal notices to all lenders. Special emphasis on stopping workplace contact for corporate employees. Harassment typically stops within 3-5 days across Haryana.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 4: Negotiate (Weeks 2-7)</strong> - Our Haryana team contacts lender NPA divisions. We use employment sector data, industrial reports or business proof. Push for 30-70% debt reduction.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 5: Lock Agreement (Weeks 7-9)</strong> - Lender agrees to terms. We get formal OTS letter. Everything legally verified before you pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 6: Payment (Weeks 9-11)</strong> - You arrange settlement amount. Many Gurgaon professionals use severance pay or family support. Direct payment to lender. We get receipt.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 7: Complete Closure (Weeks 11-15)</strong> - Lender has 30 days for all documents. We follow up aggressively. Verify credit bureau updates.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Stage 8: Career Guidance (Ongoing)</strong> - For corporate employees, we provide credit rebuilding advice considering career moves, job changes and future borrowing needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 50-90 days for Haryana cases. Gurgaon corporate cases often faster (45-75 days) because documentation is cleaner and lenders respond quicker.
                  </p>
                </div>
              </section>

              <section id="gurgaon-case" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Real Story - Gurgaon Manager Clears Debt
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
                    <strong>The Professional:</strong> Neha R., age 34, senior marketing manager at MNC in DLF Cyber City, Gurgaon. Package ₹28 lakhs (₹18 lakhs fixed + ₹10 lakhs variable). Had borrowed ₹30 lakhs total (1 personal loan for flat down payment, 1 car loan, 3 credit cards).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Happened:</strong> Company underwent global restructuring in mid-2023. India marketing team downsized from 40 to 12 people. Neha got 3 months notice period. New job took 4 months to find, pays ₹20 lakhs (₹17 lakhs fixed + ₹3 lakhs variable). Lost 30% of income. Couldn't pay EMIs on ₹18 lakhs personal loan, ₹7 lakhs car loan and ₹5 lakhs credit cards. All accounts went NPA. Recovery agents called her mobile 25+ times daily, sent messages to her work email (before she left), called at new office twice. CIBIL dropped from 805 to 520. New employer's HR questioned her about debt during onboarding.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Stepped In:</strong> Neha contacted us October 2023. We sent urgent legal notices to all 5 lenders with specific warnings against workplace contact. Harassment stopped in 3 days. Our assessment showed genuine hardship - layoff notice, severance pay records, new offer letter showing income drop. We documented everything including company restructuring announcement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation Details:</strong> Our Gurgaon corporate specialist team spent 2 months negotiating. Personal loan (from major bank) settled at 47% because we showed layoff was part of global restructuring affecting thousands, not individual performance issue. Car loan settled at 52% using vehicle depreciation data. All 3 credit cards settled at 38-42% by showing income drop and revolving interest accumulation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Numbers:</strong> ₹30 lakhs outstanding became ₹13.8 lakhs settlement. Saved ₹16.2 lakhs (54% reduction). Neha arranged money through severance package, selling car (upgraded to smaller vehicle), family help. All 5 accounts closed legally with NOCs. Workplace harassment stopped permanently.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Current Status:</strong> Neha is debt-free. Working at new Gurgaon company without stress. CIBIL improved to 695 after 15 months. We guided her on credit rebuilding considering career growth plans. Her words: "CredSettle understood corporate layoffs and compensation structures. Banks saw me as defaulter, but CredSettle explained the restructuring context properly. They protected my career and got me out of debt trap."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> October 2023 first call, November-December negotiation, January 2024 payment, February 2024 closure. Total: 4 months.
                  </p>
                </div>
              </section>

              <section id="free-consult" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Get Free Haryana Consultation Now
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
                    Dealing with loan debt in Gurgaon, Faridabad, Panipat or anywhere in Haryana? You don't need to handle this crisis alone. Settlement is legal. RBI backs it. It exists for people with genuine financial problems who need proper exit.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Debt destroys everything. Health problems start, family stress increases, work performance drops (constant worry), mental peace disappears. Each day you wait, penalties add up, interest grows, CIBIL falls more, stress multiplies. But exit route exists. Over 9,500 Haryana families already achieved financial freedom through our settlement services.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Act today:</strong> Free confidential consultation. No obligations, no upfront costs. Just honest assessment and clear options. Our Haryana experts will show exactly how to stop harassment (especially workplace harassment), cut debt 30-70% and close everything legally. We understand corporate layoffs, industrial cycles, business cash flow problems - whatever your situation is.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Financial troubles are temporary situations. But unresolved debt can drag for years ruining career and life. With our legal team, Haryana expertise and 9,500+ case experience, you can end this crisis properly and restart. Don't let debt control you. Take action now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Gurgaon corporate offices, Faridabad factories, Panipat textile units or any Haryana district. Wherever you are, debt-free life is possible. We'll help you get there.
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
                title="Personal Loan Settlement in Haryana"
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
                      Ready for Debt-Free Life in Haryana?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 9,500+ Haryana families who achieved financial freedom. Corporate professionals, industrial workers, all welcome. Free consultation, no upfront fees.
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

