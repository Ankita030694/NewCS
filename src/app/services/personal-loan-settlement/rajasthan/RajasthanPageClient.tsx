'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function RajasthanPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'rajasthan-settlement', text: 'Loan Settlement Services in Rajasthan', level: 2 },
    { id: 'heritage-economy', text: 'Rajasthan Heritage and Tourism Economy', level: 2 },
    { id: 'ots-scheme', text: 'Rajasthan OTS Scheme 2024 - Government Relief', level: 2 },
    { id: 'rajasthan-challenges', text: 'Six Unique Debt Challenges in Rajasthan', level: 2 },
    { id: 'credsettle-rajasthan', text: 'CredSettle Expertise in Rajasthan', level: 2 },
    { id: 'rajasthan-methods', text: 'Settlement Methods for Rajasthan Cases', level: 3 },
    { id: 'rbi-plus-state', text: 'RBI and Rajasthan Government Support', level: 3 },
    { id: 'rajasthan-lok-adalat', text: 'Rajasthan Lok Adalat System', level: 2 },
    { id: 'jaipur-services', text: 'Jaipur Pink City Settlement Services', level: 2 },
    { id: 'heritage-cities', text: 'Jodhpur, Udaipur and Heritage Cities', level: 2 },
    { id: 'rajasthan-benefits', text: 'Six Major Benefits for Rajasthan Borrowers', level: 2 },
    { id: 'borrower-rights', text: 'Your Rights as Rajasthan Borrower', level: 2 },
    { id: 'settlement-phases', text: 'Settlement Phases Explained', level: 2 },
    { id: 'jaipur-case', text: 'Real Case - Jaipur Hotel Owner Recovers', level: 2 },
    { id: 'free-consult', text: 'Start Your Free Rajasthan Consultation', level: 2 },
    { id: 'faqs', text: 'Rajasthan Loan Questions Answered', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal in Rajasthan?',
      answer: 'Yes, completely legal in Rajasthan and across India. RBI recognizes settlement as legitimate debt resolution. Rajasthan also has OTS Scheme 2024 that gives additional government support for certain loans.'
    },
    {
      question: 'What is Rajasthan OTS Scheme 2024?',
      answer: 'Rajasthan government scheme offering 50% interest waiver on certain loans (personal, consumer, self-employment). Valid until March 31, 2025. Requires 25% upfront payment. We can guide you if your loan qualifies for this scheme along with our settlement services.'
    },
    {
      question: 'Can tourism business owners in Jaipur/Udaipur settle loans?',
      answer: 'Absolutely. We specialize in Rajasthan tourism sector cases (hotels, travel agencies, handicraft exporters, heritage properties). We understand seasonal tourism patterns, COVID impact and recovery challenges. Have settled hundreds of tourism business loans.'
    },
    {
      question: 'How much can Rajasthan borrowers save?',
      answer: 'Rajasthan borrowers typically save 30-70% on outstanding debt. Our state average is 56% savings. Tourism sector cases often get 55-65% reductions because lenders understand seasonal nature.'
    },
    {
      question: 'Do you work with Rajasthan local banks?',
      answer: 'Yes, all banks including Rajasthan local cooperative banks, regional rural banks plus all major banks (SBI, PNB, Bank of Baroda, HDFC, ICICI) and NBFCs operating in Rajasthan.'
    },
    {
      question: 'Can marble and mining industry workers settle loans?',
      answer: 'Yes, Rajasthan marble and mining sector employs thousands. We understand industry cycles, safety issues and income patterns. This helps negotiate better settlement terms with lenders.'
    },
    {
      question: 'What is Rajasthan Lok Adalat success rate?',
      answer: 'Good success rate. Rajasthan conducts regular Lok Adalats across 33 districts. We have handled hundreds of Rajasthan cases through Lok Adalat with 84% settlement success. Usually achieve 40-60% debt reduction.'
    },
    {
      question: 'How long does settlement take in Rajasthan?',
      answer: 'Typically 65-110 days from first consultation to final closure. Rajasthan cases sometimes take slightly longer because regional lender approvals need Jaipur head office clearance. But we push for speed.'
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
                alt="Personal Loan Settlement Rajasthan"
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
                Loan Settlement Jaipur Jodhpur Udaipur Rajasthan - Tourism and Heritage Focus
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
                Dealing with loan debt in Jaipur, Jodhpur, Udaipur or anywhere in Rajasthan? CredSettle helps tourism businesses, handicraft exporters, mining sector workers and all Rajasthan borrowers reduce debt by 30-70% through legal, RBI-compliant settlement. Rajasthan OTS Scheme 2024 support available. Over 7,500 Rajasthan families got debt-free with us.
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
              
              <section id="rajasthan-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Loan Settlement Services in Rajasthan
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
                    Rajasthan, known for majestic forts, vibrant tourism, handicraft heritage and emerging industries, has diverse economy creating varied loan patterns. From Jaipur's jewelry and IT sectors to Jodhpur's handicraft exports, Udaipur's hotel businesses to Kota's education industry, millions borrow for business expansion, home purchase, education and family needs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> lets you negotiate with banks and NBFCs to pay reduced amounts instead of full outstanding balances. RBI recognizes this as legal debt resolution method. Rajasthan also has government OTS Scheme 2024 that provides additional relief for certain loans.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 7,500 Rajasthan borrowers across Jaipur, Jodhpur, Udaipur, Kota, Ajmer, Bikaner and all 33 districts. Our Rajasthan clients typically save 30-70% on outstanding amounts (state average: 56%). Every settlement follows RBI rules, gets proper legal documentation, and permanently closes debt without future lender claims.
                  </p>
                </div>
              </section>

              <section id="heritage-economy" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Rajasthan Heritage and Tourism Economy
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
                    Rajasthan's economy heavily depends on tourism and heritage sectors. Jaipur's Hawa Mahal and Amber Fort, Udaipur's lake palaces, Jodhpur's Mehrangarh Fort attract millions of tourists yearly. This creates employment in hotels, travel agencies, handicraft shops, transport services, restaurants and tour operations. Many borrowed to expand tourism businesses during peak years. Then COVID destroyed tourism completely. Recovery remains slow and seasonal.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Tourism borrowing patterns:</strong> Hotel owners in Jaipur, Udaipur and Jaisalmer borrowed ₹20-80 lakhs for property renovation, expansion or new construction. Travel agency owners took ₹5-15 lakhs for vehicles and operations. Handicraft exporters borrowed ₹10-30 lakhs for inventory and workshop expansion. When tourism crashed, all these loans became impossible to service. Hotels ran empty, travel bookings stopped, handicraft exports dried up.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Handicraft sector stress:</strong> Jaipur's blue pottery, gemstone cutting and jewelry. Jodhpur's handicraft exports. Udaipur's miniature paintings and crafts. These traditional businesses borrowed for workshops, raw materials and export operations. Global demand fluctuations and domestic sales drops create cash flow problems. Many artisans and small exporters face loan default situations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Mining and marble economy:</strong> Rajasthan has significant marble and mining industry (Makrana marble, sandstone, granite). Mining operations and marble trading businesses borrowed heavily. When construction sector slows (happened 2020-2023), marble demand drops. Mining sector workers and business owners struggle with loan payments.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We specialize in Rajasthan's tourism and heritage economy. We know how to explain seasonal tourism patterns, COVID impact on heritage businesses, handicraft export challenges and marble industry cycles to lenders. This Rajasthan-specific knowledge gets you better settlement terms than generic settlement companies can achieve.
                  </p>
                </div>
              </section>

              <section id="ots-scheme" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Rajasthan OTS Scheme 2024 - Government Relief
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
                    Rajasthan government launched special One-Time Settlement Scheme in 2024 to help borrowers clear overdue loans. This is unique to Rajasthan (only few states offer such schemes). Here's what you need to know:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Rajasthan OTS Scheme offers:</strong> 50% waiver on interest for personal loans, consumer loans and self-employment loans. You pay only half the interest amount. Flexible payment structure: 25% upfront with application, remaining 75% in up to two installments by March 31, 2025. Scheme valid only until March 31, 2025 deadline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Who qualifies:</strong> Primarily for government scheme loans, cooperative society loans, certain MSME loans. Not all private bank loans qualify. Eligibility depends on loan type, lending institution and default period. We help you check if your loans qualify.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How we combine OTS Scheme with our services:</strong> If your loan qualifies for Rajasthan OTS Scheme, we guide you through application process while also negotiating any non-qualifying loans you have. If your loan doesn't qualify for scheme, we use regular RBI-compliant settlement process. Either way, you get maximum benefit. Some clients use OTS Scheme for one loan and our negotiation for other loans, getting dual benefit.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Time sensitivity:</strong> Scheme ends March 31, 2025. If you think you might qualify, contact us immediately so we can check eligibility and apply before deadline. Don't miss this Rajasthan government benefit.
                  </p>
                </div>
              </section>

              <section id="rajasthan-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Unique Debt Challenges in Rajasthan
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
                    <strong>1. Tourism Sector COVID Collapse:</strong> Jaipur, Udaipur, Jaisalmer, Pushkar depend heavily on tourism. Hotel occupancy was 60-80% pre-COVID. Dropped to 5-15% during pandemic. Even now runs at 40-50% (domestic tourists increased but international tourists haven't returned fully). Hotel owners, travel agents, tour operators, restaurants borrowed during boom years. Now struggling. We've settled 900+ tourism sector loans using tourism department statistics and hotel occupancy data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Handicraft Export Challenges:</strong> Jaipur jewelry, blue pottery, gemstones. Jodhpur handicrafts and textiles. Udaipur paintings and crafts. Many artisans and small exporters borrowed ₹5-20 lakhs for workshops, raw materials and export operations. Global demand fluctuates, exchange rates impact margins, international buyers delay payments. We've settled hundreds of handicraft business loans explaining export sector challenges to lenders.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Marble and Mining Sector Slowdown:</strong> Rajasthan produces major portion of India's marble (Makrana marble famous worldwide). Mining operations and marble trading businesses borrowed ₹15-50 lakhs. When construction sector slowed 2020-2023, marble demand crashed. Many mining contractors and marble traders defaulted. We negotiate using construction industry data and marble price trends.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Kota Education Industry Impact:</strong> Kota is India's coaching capital. Thousands of coaching institutes, hostels, food services depend on students coming for IIT-JEE preparation. During COVID and online education shift, many businesses collapsed. Owners who borrowed for expansion now stuck with loans. We've handled Kota education sector cases understanding the coaching industry dynamics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Agricultural Income Volatility:</strong> Rajasthan has significant agricultural economy but faces water scarcity and monsoon dependency. Farmers and agricultural traders borrow for crops, equipment and trading. When monsoon fails or crop prices fall, loan defaults happen. Rajasthan OTS Scheme 2024 helps many agricultural borrowers.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Government Employee Transfer Issues:</strong> Rajasthan state government employees get transferred across districts frequently. Transfer costs, double rent (old and new location), family relocation expenses drain savings. Many borrowed to manage transfers. When transfers become frequent or salary adjustments delay, EMIs become burden. We negotiate using government employee transfer records and showing lenders this is systemic issue.
                  </p>
                </div>
              </section>

              <section id="credsettle-rajasthan" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  CredSettle Expertise in Rajasthan
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
                    We've handled 7,500+ loan settlements across Rajasthan in last four years. Our Rajasthan clients save an average of 56% on their debt. We work with all major banks, regional rural banks, cooperative societies and NBFCs operating in Jaipur, Jodhpur, Udaipur and across the state.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Rajasthan edge:</strong> We're registered legal services company following every RBI rule. We understand Rajasthan's tourism economy, handicraft business culture, heritage property challenges and OTS Scheme 2024 details. We have local legal partners in Jaipur who know district courts and Lok Adalat systems across Rajasthan.
                  </p>

                  <div id="rajasthan-methods" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Settlement Methods for Rajasthan Cases
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Sector Analysis</strong> - Tourism business with seasonal income? Handicraft exporter with order cancellations? Marble trader with construction slowdown? Government employee with transfer costs? Each needs specific strategy. Free confidential consultation. <strong>Step 2: Check OTS Scheme Eligibility</strong> - We immediately check if any of your loans qualify for Rajasthan OTS Scheme 2024 (50% interest waiver). If yes, we help you apply before March 31, 2025 deadline. <strong>Step 3: Stop Harassment</strong> - Legal notices to all lenders citing RBI Fair Practices Code. Recovery contact stops within 5-7 days across Rajasthan. <strong>Step 4: Sector-Smart Negotiation</strong> - Our Rajasthan team uses tourism statistics, handicraft export data, marble industry reports, whatever applies. Push for 30-70% debt reduction. <strong>Step 5: Legal Documentation</strong> - OTS letters, receipts, closure certificates, NOC. Everything verified. <strong>Step 6: Post-Settlement Guidance</strong> - Credit rebuilding advice for future borrowing when your business recovers or income stabilizes.
                    </p>
                  </div>

                  <div id="rbi-plus-state" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      RBI and Rajasthan Government Support
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman guidelines. Plus if eligible, Rajasthan OTS Scheme 2024 adds government support (50% interest waiver). You get: (1) Written OTS agreement on lender letterhead, (2) Clear terms that no more claims can be made, (3) Correct credit reporting, (4) Documents within 30 days per RBI rule, (5) Government scheme benefits if applicable. Our Rajasthan lawyers ensure full compliance.
                    </p>
                  </div>
                </div>
              </section>

              <section id="rajasthan-lok-adalat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Rajasthan Lok Adalat System
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
                    Rajasthan operates Lok Adalat system across all 33 districts. Court-backed mediation under Legal Services Authorities Act delivers legally binding orders like regular court judgments. Rajasthan Lok Adalats are particularly active for banking and loan dispute cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How it works in Rajasthan:</strong> You and lender sit with mediators in district court. Mediators understand regional business challenges (tourism seasonality, handicraft market fluctuations, agricultural cycles). Push both sides toward practical settlement. No court fees. Quick resolution (usually one session). Decision is final and enforceable. Settlements typically land at 40-60% of outstanding.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Rajasthan Lok Adalat record:</strong> We've represented hundreds of borrowers in Lok Adalats across Jaipur, Jodhpur, Udaipur, Kota and district courts. We prepare hardship files explaining tourism sector challenges, handicraft business cycles, seasonal income patterns. Write strong settlement proposals. 84% success rate in Rajasthan Lok Adalat cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When Lok Adalat is right choice:</strong> If lender filed court case, Lok Adalat provides fastest resolution. If your business loan involves seasonal income (tourism, agriculture), Lok Adalat judges in Rajasthan understand these patterns better than regular courts. We recommend right path for your case.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Free legal aid:</strong> If you earn under ₹5 lakhs yearly, Rajasthan State Legal Services Authority provides free lawyers for Lok Adalat. We coordinate for eligible borrowers.
                  </p>
                </div>
              </section>

              <section id="jaipur-services" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Jaipur Pink City Settlement Services
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
                    <strong>Jaipur:</strong> Rajasthan capital and largest city. Mix of government offices, tourism businesses, jewelry and gemstone industry, emerging IT sector, handicraft exports. We've handled 2,800+ Jaipur cases. Diverse borrower profile: government employees, hotel owners, jewelry traders, handicraft exporters, IT professionals in Malviya Nagar and Mansarovar areas. We understand Jaipur's mixed economy and negotiate using sector-appropriate data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Jaipur tourism corridor:</strong> Hotels near Hawa Mahal, Amber Fort, Nahargarh areas. Travel agencies in MI Road, Johari Bazar. Handicraft shops in Bapu Bazar, Tripolia Bazar. All borrowed during tourism boom. COVID crashed everything. We've settled hundreds of Jaipur tourism business loans showing lenders the visitor statistics and occupancy rate collapse.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Jaipur jewelry and gems:</strong> Gemstone cutting, jewelry manufacturing, export businesses. Johari Bazar is major jewelry market. Many borrowed for inventory, workshop expansion or export operations. Global precious metal price swings and demand fluctuations create cash flow issues. We've settled jewelry sector loans using gold price trends and export statistics.
                  </p>
                </div>
              </section>

              <section id="heritage-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Jodhpur, Udaipur and Heritage Cities
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
                    <strong>Jodhpur (Blue City):</strong> Mehrangarh Fort, handicraft exports, textile trading. We've handled 1,200+ Jodhpur cases. Mix of tourism businesses, handicraft exporters and traders. We understand Jodhpur's handicraft cluster and export market patterns. Use this knowledge in negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Udaipur (City of Lakes):</strong> Heavy tourism dependency. Lake palaces, heritage hotels, lakeside restaurants, cultural shows. Udaipur businesses borrowed big for property development and tourism operations. COVID impact was severe (tourism-only economy). We've settled 1,000+ Udaipur tourism business loans using visitor data and hotel revenue reports.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Kota (Education Hub):</strong> Coaching center capital with thousands of institutes preparing students for IIT-JEE, medical entrance. COVID shifted education online, many institutes lost students. Owners borrowed for buildings, facilities, now struggling. We've handled 800+ Kota education sector cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Ajmer, Bikaner, Jaisalmer:</strong> Religious tourism in Ajmer, desert tourism in Jaisalmer, heritage tourism in Bikaner. Full settlement coverage understanding each city's unique economy.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Other Rajasthan Districts:</strong> Alwar, Bharatpur, Bhilwara, Sikar and all 33 districts. We serve entire Rajasthan through local partnerships and remote coordination.
                  </p>
                </div>
              </section>

              <section id="rajasthan-benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Major Benefits for Rajasthan Borrowers
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
                    <strong>1. Tourism Sector Expertise:</strong> We understand seasonal patterns, festival tourism, international versus domestic tourist splits, hotel occupancy economics. Most settlement companies don't get tourism business cycles. We do.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. OTS Scheme 2024 Guidance:</strong> We help check if your loans qualify for Rajasthan government's 50% interest waiver scheme. Apply before March 31, 2025 deadline. Get maximum benefit.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Save 30-70% on Debt:</strong> Rajasthan clients save 56% on average. Tourism businesses often get 55-65% settlements because lenders understand seasonal nature. That's lakhs saved.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Harassment Stops Within Week:</strong> Legal notices citing RBI rules to all lenders. Recovery calls and visits stop within 5-7 days across Rajasthan.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Complete Legal Process:</strong> Every settlement follows RBI rules. Proper documentation so lenders cannot return. Important for business owners who need clean closure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Pay After Success:</strong> No upfront fees. We charge only after settlement is negotiated and documented. Our confidence in results.
                  </p>
                </div>
              </section>

              <section id="borrower-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Your Rights as Rajasthan Borrower
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
                    Know your rights as Rajasthan borrower. Laws protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass, threaten or abuse. Cannot visit business premises or hotels repeatedly. Cannot contact tourists or guests about your debt. Break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to OTS Scheme Benefits:</strong> If your loan qualifies for Rajasthan OTS Scheme 2024, you have right to 50% interest waiver. Check eligibility immediately before March 31, 2025 deadline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> If you have genuine hardship (tourism sector collapse, handicraft demand drop, business slowdown), lenders must discuss settlement. RBI encourages resolution before court action.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Rule:</strong> After settlement payment, lender has 30 days maximum for closure letter and NOC. RBI Master Direction. Delays mean penalties (₹5,000 daily).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Lok Adalat Access:</strong> Any Rajasthan resident can use Lok Adalat for loan disputes. Free legal aid if you earn under ₹5 lakhs yearly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Protection from Threats:</strong> Recovery agents cannot threaten property seizure, business closure or police action. IPC Sections 503 and 506 protect you. File FIR at local Rajasthan police station if threatened.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any violations, we take immediate legal action including police complaints when needed.
                  </p>
                </div>
              </section>

              <section id="settlement-phases" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Settlement Phases Explained
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
                    <strong>Phase 1: Initial Contact (Days 1-3)</strong> - Call, WhatsApp us. Free 35-45 minute confidential assessment. We review loans, business type, hardship situation. Check OTS Scheme eligibility immediately if applicable. No pressure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 2: Documentation (Days 4-12)</strong> - You share loan papers, business records, tourism revenue drops, handicraft export cancellations, whatever applies. We build settlement case with Rajasthan-specific sector data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 3: Stop Harassment (Days 12-17)</strong> - Legal notices to all lenders citing RBI rules. Recovery contact stops within 5-7 days across Rajasthan.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 4: Negotiation (Weeks 3-9)</strong> - Our Rajasthan team contacts lender NPA divisions. We use tourism statistics, handicraft export data, OTS Scheme leverage when applicable. Push for 30-70% debt reduction.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 5: Agreement (Weeks 9-11)</strong> - Lender agrees to settlement. We get formal OTS letter. Everything legally verified before payment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 6: Payment (Weeks 11-13)</strong> - You arrange settlement amount. Many Rajasthan tourism businesses time payments with peak season cash flow (Diwali, winter tourism months). We help structure timing.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 7: Closure (Weeks 13-17)</strong> - Lender has 30 days for documents. We follow up aggressively. Verify credit bureau updates.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Phase 8: Recovery Support (Ongoing)</strong> - Credit rebuilding guidance, seasonal business cash flow advice, future borrowing tips when business recovers.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 65-110 days for Rajasthan cases. Tourism business cases sometimes longer because we time settlement payments with seasonal cash flow for your convenience.
                  </p>
                </div>
              </section>

              <section id="jaipur-case" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Real Case - Jaipur Hotel Owner Recovers
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
                    <strong>The Business Owner:</strong> Vikram C., age 48, runs heritage hotel near Amer Fort in Jaipur. 25-room property operating for 12 years. Had borrowed ₹38 lakhs total (2 business loans for hotel renovation, 1 property loan against hotel, 1 personal loan for working capital).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Collapsed:</strong> COVID hit March 2020. International tourists stopped completely. Hotel occupancy fell from 75% to 0% overnight. Ran empty for 18 months. When domestic tourism restarted 2021-2022, occupancy reached only 35-40% (down from 75%). Revenue fell from ₹45 lakhs yearly to ₹15 lakhs. Couldn't pay EMIs on ₹25 lakhs business loans, ₹10 lakhs property loan and ₹3 lakhs personal loan. All accounts went NPA. Recovery agents called 20+ times daily, visited hotel twice (embarrassing in front of guests), sent legal notices. CIBIL dropped from 710 to 480. Feared losing family hotel built over decades.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Protected His Business:</strong> Vikram contacted us September 2023. We sent immediate legal notices to all 4 lenders with specific warnings against visiting hotel property (protecting business reputation). Harassment stopped in 6 days. Our assessment showed genuine tourism sector crisis - Rajasthan tourism department occupancy data, hotel revenue records, COVID impact documentation. Built strong case.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation Strategy:</strong> Our Jaipur tourism specialist team spent 3 months negotiating. Both business loans (from NBFCs) settled at 42-45% because we showed them Rajasthan tourism statistics proving sector-wide crisis, not individual hotel problem. Property loan was complex - settled at 52% by showing property market value trends and threatening that forced auction would recover less. Personal loan settled at 48% using business income loss proof.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Result:</strong> ₹38 lakhs outstanding became ₹17.5 lakhs settlement. Saved ₹20.5 lakhs (54% reduction). Vikram arranged money by selling personal jewelry, taking family support and using 2 months of peak season (Diwali-winter) hotel revenue. All 4 accounts closed legally with NOCs. Hotel mortgage released. Recovery stopped completely. Business reputation preserved.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Today:</strong> Vikram is debt-free. Hotel running at 60-65% occupancy now (tourism recovering). Property mortgage-free allows business flexibility. CIBIL improved to 665 after 14 months. We guided him on business credit rebuilding. His words: "CredSettle understood Jaipur tourism business. They knew occupancy rates matter more than balance sheets for hotels. That sector knowledge saved my family hotel."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> September 2023 first call, October-December negotiation, January 2024 payment (after Diwali season cash flow), February 2024 closure. Total: 5 months.
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
                  Start Your Free Rajasthan Consultation
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
                    Dealing with loan debt in Jaipur, Jodhpur, Udaipur or anywhere in Rajasthan? You don't need to carry this burden alone. Settlement is legal. RBI backs it. Rajasthan government supports it with OTS Scheme. It exists for businesses facing tourism crisis and individuals with genuine financial problems.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Debt destroys business and peace. Your health suffers, family worries constantly, business reputation drops, seasonal opportunities missed, sleep disappears. Each day you delay, penalties grow, interest compounds, CIBIL falls more. But proper exit exists. Over 7,500 Rajasthan families and businesses already got financial freedom through our settlement work.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Act today:</strong> Free confidential consultation. No obligations, no upfront fees. Just honest assessment and clear options including OTS Scheme check. Our Rajasthan experts will show exactly how to stop harassment, cut debt 30-70% and close everything legally. We understand tourism seasonality, handicraft exports, marble trading, education sector - whatever your situation is.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Tourism downturns and business slowdowns are temporary cycles. But unresolved debt can destroy everything you built over years. With our legal team, Rajasthan tourism knowledge and 7,500+ case experience, you can end this crisis properly and restart. Don't let debt destroy your heritage business. Act now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Jaipur heritage hotels, Jodhpur handicraft shops, Udaipur lake palaces, Kota coaching centers or any Rajasthan district. Wherever you are, debt-free life is possible. We'll help you reach there.
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
                title="Personal Loan Settlement in Rajasthan"
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
                      Ready for Debt-Free Life in Rajasthan?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 7,500+ Rajasthan families who achieved financial freedom. Tourism businesses, handicraft exporters, all welcome. Free consultation, OTS Scheme support.
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
                      Get Your Free Consultation Now
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



