'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function GujaratPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'gujarat-settlement', text: 'Loan Settlement for Gujarat Entrepreneurs', level: 2 },
    { id: 'business-culture', text: 'Gujarat Business Culture and Debt Patterns', level: 2 },
    { id: 'industry-problems', text: 'Seven Debt Problems Hitting Gujarat Industries', level: 2 },
    { id: 'credsettle-gujarat', text: 'CredSettle Success Record in Gujarat', level: 2 },
    { id: 'gujarat-tactics', text: 'Business-Focused Settlement Tactics', level: 3 },
    { id: 'compliance-security', text: 'RBI Compliance and Security', level: 3 },
    { id: 'gujarat-legal', text: 'Gujarat Lok Adalat for Business Debt Cases', level: 2 },
    { id: 'ahmedabad-surat', text: 'Ahmedabad and Surat - Business Capital Coverage', level: 2 },
    { id: 'vadodara-rajkot', text: 'Vadodara, Rajkot and Industrial Gujarat', level: 2 },
    { id: 'advantages', text: 'Eight Advantages for Gujarati Borrowers', level: 2 },
    { id: 'legal-rights', text: 'Legal Rights for Gujarat Business Owners', level: 2 },
    { id: 'step-process', text: 'Step by Step Settlement Process', level: 2 },
    { id: 'surat-diamond', text: 'Real Case - Surat Diamond Trader Beats Crisis', level: 2 },
    { id: 'start-consultation', text: 'Begin Your Gujarat Settlement Journey', level: 2 },
    { id: 'faqs', text: 'Gujarat Loan Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal for Gujarat businesses?',
      answer: 'Yes, completely legal for all borrowers including business owners in Gujarat. RBI recognizes settlement as legitimate debt resolution. CredSettle follows all legal frameworks including Gujarat Lok Adalat system for business debt cases.'
    },
    {
      question: 'Can Surat diamond traders settle business loans?',
      answer: 'Yes, we specialize in Surat diamond industry cases. We understand rough diamond purchase cycles, export dependencies and market volatility. Have settled hundreds of diamond trader loans with 50-65% average reductions.'
    },
    {
      question: 'How much can Ahmedabad MSME owners save?',
      answer: 'Gujarat MSME and business owners typically save 35-70% on outstanding debt. Our Gujarat state average is 61% savings (highest among Western states). Depends on business type, loan amount and hardship documentation.'
    },
    {
      question: 'Will settlement affect my business credit in Gujarat?',
      answer: 'Yes, settled loans show "settled" on CIBIL. Impacts score temporarily. But better than business closure or personal bankruptcy. We guide you on rebuilding business credit over 18-24 months.'
    },
    {
      question: 'Can you stop recovery at my Ahmedabad or Surat business?',
      answer: 'Yes, within 3-5 days. We send legal notices citing RBI rules. Recovery agents cannot visit business premises or harass at trade associations. Important for maintaining reputation in Gujarat business community.'
    },
    {
      question: 'Do you work with Gujarat local banks and NBFCs?',
      answer: 'Yes, all major banks (SBI, Bank of Baroda, HDFC, ICICI, Axis) and NBFCs (Bajaj, Tata Capital, Mahindra Finance) plus Gujarat local banks and cooperative societies. We have negotiated thousands of settlements across Gujarat banking system.'
    },
    {
      question: 'What is Gujarat Lok Adalat success for business loans?',
      answer: 'Very good. Gujarat conducts active Lok Adalats for commercial disputes. We have handled hundreds of business loan cases through Gujarat Lok Adalat with 88% settlement success. Usually get 40-60% debt reduction with legally binding orders.'
    },
    {
      question: 'Do you understand textile and diamond business cycles?',
      answer: 'Yes, we have sector specialists. We know diamond rough import patterns, textile order-to-delivery cycles, export dependencies, working capital needs. This industry knowledge helps us negotiate better with lenders who may not understand Gujarat business models.'
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
                alt="Personal Loan Settlement Gujarat"
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
                Loan Settlement Ahmedabad Surat Gujarat - Business and MSME Experts
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
                Caught in business loan crisis across Gujarat? CredSettle helps Ahmedabad, Surat, Vadodara and all Gujarat entrepreneurs reduce debt by 30-70% through legal, RBI-compliant settlement. Diamond traders, textile manufacturers, MSME owners, salaried professionals - we handle all cases. Stop recovery harassment, negotiate with all banks and NBFCs. Over 11,000 Gujarati families achieved debt freedom with us.
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
              
              <section id="gujarat-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Loan Settlement for Gujarat Entrepreneurs
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
                    Gujarat, known for entrepreneurial spirit and vibrant MSME sector, leads India in business ownership per capita. From Surat's diamond cutting and textile powerhouses to Ahmedabad's pharmaceutical and chemical industries, Vadodara's manufacturing belt to Rajkot's engineering units, millions of Gujaratis borrow for business expansion, inventory purchase and working capital needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal and business loan settlement</strong> lets you negotiate with banks and NBFCs to pay reduced amounts instead of full outstanding balances. RBI recognizes this as legal debt resolution across India including Gujarat. When your business faces cash flow crisis or personal income drops, settlement provides proper exit without years of harassment or legal battles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 11,000 Gujarat borrowers across Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar and all districts. Our Gujarat clients typically save 30-70% on outstanding amounts (state average: 61%, highest in Western India). Every settlement follows RBI rules, gets proper legal documentation, and permanently closes debt without future lender claims.
                  </p>
                </div>
              </section>

              <section id="business-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Gujarat Business Culture and Debt Patterns
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
                    Gujarat's economy runs on entrepreneurship. From small family shops to large manufacturing units, Gujaratis start businesses at much higher rates than national average. This creates specific borrowing patterns. People take business loans for inventory, machinery, shop expansion. Personal loans often go into business during cash crunches. Working capital loans sustain operations. Credit cards fund immediate business needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The Gujarat borrowing model:</strong> Business owners borrow big during expansion phases. Diamond trader in Surat takes ₹20-50 lakhs for rough diamond inventory. Textile manufacturer in Ahmedabad borrows ₹30-80 lakhs for new looms and working capital. Pharmaceutical distributor in Vadodara gets ₹15-40 lakhs for stock. When export orders drop, raw material prices spike or payment cycles extend, these businesses get stuck. EMIs become impossible to pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Default consequences for business owners:</strong> After 90 days default, accounts become NPA. Banks and NBFCs push recovery aggressively. Daily calls to mobile and business landline. Recovery agents visit business premises (diamond market in Surat, textile mills in Ahmedabad, shops in Rajkot). In tight-knit Gujarati business communities, recovery visits damage reputation badly. News spreads in trade associations. CIBIL crashes, blocking future business credit.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Settlement protects business reputation and provides exit. Lenders prefer getting 40-70% now versus years in Gujarat courts. You get critical benefits: major debt reduction (save 30-70%), harassment stops protecting business reputation, legal closure with proper documents, ability to restart business without debt burden.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We specialize in Gujarat business ecosystem. We know how Surat diamond associations work, what Ahmedabad textile networks value, how Rajkot engineering clusters operate. We understand "Jode" (partnership) culture, family business dynamics and Gujarati business honor code. This cultural knowledge helps us negotiate settlements that protect your business standing while reducing debt.
                  </p>
                </div>
              </section>

              <section id="industry-problems" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Seven Debt Problems Hitting Gujarat Industries
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
                    <strong>1. Surat Diamond Trade Crisis:</strong> Surat processes 90% of world's diamonds. When global demand drops (happened 2023), thousands of diamond traders get stuck. They borrow to buy rough diamonds (₹20-80 lakhs per lot), process them, then sell polished. If polished diamonds don't sell or prices crash, entire cash flow stops. We've settled 400+ Surat diamond trader loans. Strategy: Show lenders the diamond trade data, export figures and prove crisis is sector-wide using Gem and Jewelry Export Council statistics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Textile Manufacturing Squeeze:</strong> Ahmedabad and Surat textile units face margin pressures. Raw material (cotton, polyester) prices spike, labor costs increase, but buyers (mostly export) refuse price hikes. Many manufacturers borrowed ₹30-80 lakhs for machinery or working capital. When margins disappear or export orders cancel, loan payments become impossible. We negotiate using textile industry reports and margin squeeze data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Pharmaceutical Distribution Cash Crunch:</strong> Ahmedabad and Vadodara have strong pharma distribution networks. Distributors borrow ₹20-50 lakhs for medicine stock. When hospitals or retailers delay payments by 90-120 days (common in pharma), distributors get cash stuck. Cannot pay EMIs even though sales happened. We've settled many pharma distributor cases explaining working capital cycle issues to lenders.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Engineering Unit GST Impact:</strong> Rajkot and Jamnagar engineering units (auto parts, machine tools) faced GST transition badly. Cash flow disrupted, working capital locked in GST credits, buyers delayed payments. Many units borrowed to bridge gap. Some couldn't recover. We settle these using GST transition documentation and industry association reports.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Chemical Industry Volatility:</strong> Vadodara and Vapi chemical manufacturers face raw material price swings and environmental compliance costs. Borrowed for expansion or pollution control equipment. When chemical prices crash or orders drop, EMIs become burden. We handle chemical industry cases understanding sector regulations and market dynamics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Real Estate Construction Debt:</strong> Gujarat saw massive real estate boom. Developers and contractors borrowed heavily. Then market corrected 2018-2022. Projects stalled, buyer payments stopped, loans accumulated. We've settled construction-related loans using RERA data and market correction reports.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Multiple Business + Personal Loan Mix:</strong> Common Gujarat pattern: Business loan for company, personal loan for additional working capital, credit cards for immediate needs, property loan against shop or factory. When business fails, entire debt structure collapses (₹40 lakhs to ₹1 crore total). We handle these complex cases negotiating all loans together, not separately.
                  </p>
                </div>
              </section>

              <section id="credsettle-gujarat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  CredSettle Success Record in Gujarat
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
                    We've handled 11,000+ loan settlements across Gujarat in last four years. Our Gujarat clients save an average of 61% on their debt (highest in Western India). We work with all major banks, regional banks, cooperative societies and NBFCs operating in Ahmedabad, Surat, Vadodara and across the state.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why we succeed in Gujarat:</strong> We're registered legal services company, not agents. Every settlement follows RBI rules strictly. We have business-focused lawyers and financial experts in Ahmedabad who understand Gujarat's unique business culture, speak Gujarati, know the trade association networks, and respect the community values that drive Gujarat business world.
                  </p>

                  <div id="gujarat-tactics" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Business-Focused Settlement Tactics
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Business Analysis</strong> - We look at your complete business picture, not just loans. Diamond trader with inventory stuck? Textile unit with order cancellations? Pharma distributor with payment delays? Each business problem needs different settlement approach. Free assessment. <strong>Step 2: Protect Business Reputation</strong> - Legal notices to lenders citing RBI rules. Recovery visits to business stop immediately. Critical for maintaining standing in Gujarat trade communities. <strong>Step 3: Industry-Smart Negotiation</strong> - Our Gujarat team uses sector-specific data. Diamond trade reports, textile export statistics, pharma industry payment cycle data, engineering order books. Lenders understand business crisis better when we present industry proof. Push for 30-70% debt reduction. <strong>Step 4: Legal Documentation</strong> - OTS letters, receipts, closure documents, NOC. Everything verified before you pay. <strong>Step 5: Business Credit Rebuild</strong> - After settlement, we guide you on rebuilding business credit and managing cash flow better.
                    </p>
                  </div>

                  <div id="compliance-security" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      RBI Compliance and Security
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman guidelines. You get: (1) Written OTS agreement on lender letterhead, (2) Clear statement that no additional claims can be made, (3) Correct credit reporting (marked "settled"), (4) Documents released within 30 days per RBI mandate, (5) Legal backup if lender violates terms. Our Gujarat lawyers act immediately when needed.
                    </p>
                  </div>
                </div>
              </section>

              <section id="gujarat-legal" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Gujarat Lok Adalat for Business Debt Cases
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
                    Gujarat runs efficient Lok Adalat system especially for commercial disputes. This court-backed mediation operates under Legal Services Authorities Act and delivers legally binding orders like regular court judgments. Gujarat business community uses Lok Adalat actively because it's fast, cheap and preserves business relationships.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How Gujarat Lok Adalat helps businesses:</strong> You and lender sit with trained mediators in district court premises. Mediators understand business cash flow issues and push both sides toward practical settlement. Zero court fees. Usually resolved in single session (3-4 hours). Decision is final and enforceable. Banks and NBFCs participate actively because it saves them legal costs and time.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Gujarat Lok Adalat experience:</strong> We've represented hundreds of business owners in Lok Adalats across Ahmedabad, Surat, Vadodara, Rajkot districts. We prepare business hardship files in Gujarati and English both (helps with local judges). Write detailed settlement proposals with industry data. Argue cases strongly. 88% success rate in Gujarat Lok Adalat business cases. Settlements typically land at 40-60% of outstanding.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When Lok Adalat makes sense:</strong> If lender filed court case already, Lok Adalat gives fastest resolution. If your business loan is large (above ₹10 lakhs) and involves secured assets, Lok Adalat provides structured settlement with asset protection. Gujarat State Legal Services Authority conducts regular commercial Lok Adalats specifically for business disputes.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Free legal support:</strong> If your business turnover is below threshold (varies by case), Gujarat Legal Services provides free legal representation for Lok Adalat. We coordinate with them for eligible business owners.
                  </p>
                </div>
              </section>

              <section id="ahmedabad-surat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Ahmedabad and Surat - Business Capital Coverage
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
                    <strong>Ahmedabad:</strong> Gujarat's largest city and commercial capital. CG Road, SG Highway have corporate offices and banks. Narol, Odhav, Vatva house pharmaceutical and chemical manufacturers. Kalupur, Maninagar have textile traders. We've handled 3,200+ Ahmedabad cases across all sectors. Mix of salaried professionals, business owners and traders. We understand Ahmedabad's diverse economy and negotiate accordingly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Surat:</strong> Diamond cutting capital of world and textile powerhouse. Diamond traders dominate the economy - thousands of units cutting and polishing. Mini Bazar, Varachha, Katargam areas are diamond hubs. Textile manufacturers and traders operate from Sarthana, Pandesara areas. We've settled 2,800+ Surat loans. Most are business-related. We have diamond industry specialists who understand rough diamond pricing, polished diamond markets, export cycles and trader cash flows. This sector knowledge directly improves settlement terms.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why Ahmedabad-Surat dominate our work:</strong> These two cities account for 55% of Gujarat's loan settlements we handle. Both have strong entrepreneurial culture, high business loan volumes and complex business structures. Our teams in both cities know local banks, understand trade associations and have relationships with district court systems. When we negotiate, lenders know we're local experts, not outsiders.
                  </p>
                </div>
              </section>

              <section id="vadodara-rajkot" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Vadodara, Rajkot and Industrial Gujarat
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
                    <strong>Vadodara:</strong> Pharma manufacturing, chemical industries, engineering units. Mix of large companies and MSME suppliers. We've handled 1,500+ Vadodara cases. Many involve working capital loans, machinery financing and inventory purchase loans. We understand Vadodara's industrial estate dynamics and GIDC (Gujarat Industrial Development Corporation) area economics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Rajkot:</strong> Engineering and auto parts manufacturing hub. Thousands of small units making components, tools, machine parts. Heavy MSME concentration. We've settled 1,200+ Rajkot loans. Mostly business owners and unit operators. We know Rajkot's engineering cluster, understand order-based manufacturing and help negotiate settlements that protect business continuity.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Bhavnagar, Jamnagar, Anand:</strong> Ship breaking in Alang-Bhavnagar, oil refineries near Jamnagar, dairy and food processing in Anand. Each city has distinct economy. Full settlement coverage with industry-specific understanding.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Other Gujarat Districts:</strong> Gandhinagar (state capital), Mehsana, Surendranagar, Junagadh and all 33 districts. We serve entire Gujarat through local legal partnerships. Same expertise everywhere regardless of location.
                  </p>
                </div>
              </section>

              <section id="advantages" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Eight Advantages for Gujarati Borrowers
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
                    <strong>1. Business Culture Understanding:</strong> We know Gujarat's entrepreneurial spirit, Jode partnerships, family business structures, trade association influence. This cultural understanding improves negotiation outcomes.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Industry Expertise:</strong> Diamond trade specialists, textile sector knowledge, pharma distribution understanding, engineering cluster experience. We speak your business language.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Reputation Protection:</strong> We stop recovery visits to business premises within 3-5 days. Critical for maintaining standing in Gujarat business communities where word spreads fast.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Save 30-70% Debt:</strong> Gujarat clients save 61% on average (highest in West India). That's lakhs saved to reinvest in business or personal needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Lok Adalat Mastery:</strong> 88% success rate in Gujarat Lok Adalat business cases. Hundreds handled across districts. We know the system intimately.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Complete Legal Process:</strong> Every settlement follows RBI rules. Proper documentation so lenders cannot return. Important for business owners who need clean closure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Pay After Results:</strong> No upfront fees. We charge only after settlement is negotiated and documented. Shows confidence in delivery.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>8. 11,000+ Gujarat Success Stories:</strong> Ahmedabad, Surat, Vadodara, Rajkot across the state. Business owners, professionals, traders all trust us. Track record proves our capability.
                  </p>
                </div>
              </section>

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
                  Legal Rights for Gujarat Business Owners
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
                    Know your rights as Gujarat borrower. Laws protect business owners and individuals:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass, threaten or visit business without proper notice. Cannot tell trade association members or business partners about your debt. Break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Business Continuity:</strong> During settlement negotiation, lenders cannot force business closure or asset seizure. You have right to operate business while settlement is being worked out.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Rule:</strong> After settlement payment, lender has 30 days maximum to release documents, NOC and update credit bureaus. RBI Master Direction. Delays mean penalties (₹5,000 daily).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Lok Adalat Access:</strong> Any Gujarat business owner or individual can use Lok Adalat for loan disputes. Process is business-friendly and fast. Legally binding decisions.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>No Illegal Recovery:</strong> Agents cannot threaten business closure, cannot contact business partners or suppliers, cannot visit repeatedly causing reputation damage. File police complaint at local station if this happens.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Asset Protection:</strong> For secured business loans (against property or machinery), you have right to negotiate asset retention or orderly sale, not forced seizure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any violations, we take immediate legal action protecting your business interests.
                  </p>
                </div>
              </section>

              <section id="step-process" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Step by Step Settlement Process
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
                    <strong>Step 1: First Discussion (Days 1-3)</strong> - Call, WhatsApp or visit Ahmedabad office. Free 40-minute business assessment. We review loans, business situation, cash flow problems. Completely confidential. No obligations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 2: Business Documentation (Days 4-10)</strong> - You share loan agreements, business financials, GST returns, cash flow statements, hardship proof (order cancellations, export drops, payment delays). We analyze and plan strategy.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 3: Stop Business Harassment (Days 10-14)</strong> - Legal notices to all lenders citing RBI Fair Practices Code. Recovery visits to business premises stop. Harassment at trade associations or through business networks ends. Typically within 5 days across Gujarat.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 4: Industry-Based Negotiation (Weeks 3-8)</strong> - Our Gujarat team contacts lender NPA divisions with industry data. Diamond trade reports, textile export statistics, pharma payment cycles, whatever applies. Push for 35-70% debt reduction using sector knowledge.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 5: Lock Settlement Terms (Weeks 8-10)</strong> - Lender agrees. We get formal OTS letter with all terms. Legal team verifies asset clauses if applicable. You don't pay until everything is confirmed.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 6: Arrange Payment (Weeks 10-12)</strong> - You organize settlement amount (lump sum or installments if negotiated). Many Gujarat business owners use business cash reserves, partner contributions or asset liquidation. Pay directly to lender. We get receipt.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 7: Close Everything (Weeks 12-16)</strong> - Lender has 30 days for closure letter, NOC, asset document release if applicable, credit bureau updates. We follow up hard.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Step 8: Business Recovery Support (Ongoing)</strong> - We counsel you on business credit rebuilding, cash flow management, future business borrowing when needed. Support continues after settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Average time:</strong> 60-100 days from first consultation to final closure for Gujarat business cases. Sometimes faster because Gujarat banks understand business cycles better than other regions.
                  </p>
                </div>
              </section>

              <section id="surat-diamond" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Real Case - Surat Diamond Trader Beats Crisis
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
                    <strong>The Entrepreneur:</strong> Ketan P., age 38, diamond trader in Mini Bazar, Surat. Family diamond business for 15 years. Had borrowed ₹42 lakhs total (2 business loans for rough diamond purchase, 1 working capital loan, 1 personal loan for business cash flow, 2 credit cards).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Crashed:</strong> Global diamond demand dropped sharply in late 2022-2023. China market collapsed, US buyers reduced orders by 60%. Lab-grown diamond competition hurt natural diamond prices. Ketan had ₹35 lakhs worth of polished diamonds inventory that wouldn't sell at profitable prices. Couldn't pay EMIs on ₹25 lakhs business loans, ₹10 lakhs personal loan and ₹7 lakhs credit cards. All accounts went NPA. Recovery agents called 30+ times daily, visited his Mini Bazar office repeatedly, spoke to other traders in diamond market (damaged reputation). CIBIL fell from 770 to 505. Feared losing diamond business and family standing in Surat diamond community.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Took Charge:</strong> Ketan contacted us November 2023. We sent immediate legal notices to all 6 lenders. Harassment stopped in 4 days. Our assessment showed genuine sector crisis - diamond trade association data, export statistics, lab-grown diamond impact reports, inventory valuation. We documented everything in detail including rough diamond purchase invoices and unsold polished stock records.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation Approach:</strong> Our Surat diamond specialist team spent 2.5 months negotiating. Both business loans (from NBFCs) settled at 40-45% because we showed them diamond trade data from Gem and Jewelry Export Council proving sector-wide crisis, not individual trader problem. Working capital loan settled at 48% using cash flow statements. Personal loan settled at 50% because it was used for business. Credit cards settled at 38% by showing business use and revenue collapse.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Result:</strong> ₹42 lakhs outstanding became ₹18.5 lakhs settlement. Saved ₹23.5 lakhs (56% reduction). Ketan arranged money by selling part of diamond inventory at market rates (took 10% loss but worth it), partner contribution and family gold. All 6 accounts closed legally with proper NOCs. Business reputation preserved. Recovery stopped completely.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Current Status:</strong> Ketan is debt-free. Running diamond business at smaller scale focusing on domestic market. Reputation restored in Surat diamond community. CIBIL improved to 685 after 16 months. We guided him on business credit rebuilding and working capital management. His feedback: "CredSettle understood diamond business cycles. Banks didn't know rough versus polished or global demand patterns, but CredSettle explained everything in language lenders understood. They saved my family business and honor in diamond community."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> November 2023 first call, December-January negotiation, February 2024 payment, March 2024 closure. Total: 4 months.
                  </p>
                </div>
              </section>

              <section id="start-consultation" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Begin Your Gujarat Settlement Journey
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
                    Stuck with business or personal loan debt in Ahmedabad, Surat, Vadodara, Rajkot or anywhere in Gujarat? You don't need to fight this alone. Settlement is legal. RBI backs it. It exists for businesses facing cash flow crisis and individuals with real financial problems.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Debt ruins business and life. Your health suffers, family worries constantly, business focus disappears, community respect drops, sleep vanishes. Each day you delay, penalties grow, interest compounds, CIBIL falls further, stress multiplies. But proper exit exists. Over 11,000 Gujarati families and businesses already got financial freedom through our settlement work.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Start today:</strong> Free confidential consultation. No obligations, no upfront fees. Just honest business assessment and clear options. Our Gujarat experts will show exactly how to stop harassment, cut debt 30-70% and close everything legally. We understand diamond trade, textile manufacturing, pharma distribution, engineering units - whatever your business or situation is.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Business problems are temporary cycles. But unresolved debt drags for years destroying everything you built. With our legal team, Gujarat business knowledge and 11,000+ case experience, you can end this crisis properly and restart. Don't let debt destroy your entrepreneurial spirit. Act now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Ahmedabad offices, Surat diamond market, Vadodara factories, Rajkot workshops or any Gujarat district. Wherever you are, debt-free business life is possible. We'll help you reach there.
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
                title="Personal Loan Settlement in Gujarat"
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
                      Ready for Debt-Free Business in Gujarat?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 11,000+ Gujarat entrepreneurs who achieved financial freedom. Free consultation, no upfront fees, business-focused approach.
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




