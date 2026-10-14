'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function RajasthanPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'rajasthan-cc-settlement', text: 'Credit Card closure in Rajasthan', level: 2 },
    { id: 'jaipur-card-culture', text: 'Jaipur firm and Tourism Card Usage', level: 2 },
    { id: 'business-card-trap', text: 'The firm Expense Card Trap', level: 2 },
    { id: 'rajasthan-challenges', text: 'Six Credit Card Debt Patterns in Rajasthan', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Rajasthan Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our closure Approach for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Settling Multiple Credit Cards Together', level: 2 },
    { id: 'rajasthan-cities', text: 'Jaipur Udaipur Jodhpur Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Card closure', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card threats', level: 2 },
    { id: 'settlement-steps', text: 'Complete steps Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Jaipur firm Owner Saved 58%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Rajasthan Credit Card closure FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Rajasthan?',
      answer: 'Yes. Fully legal in Rajasthan and across India. RBI recognizes closure as valid debt relief for credit cards. Banks settle closures regularly. Your right to settle is protected under banking rules.'
    },
    {
      question: 'Can business owners settle personal credit cards used for business?',
      answer: 'Yes. Many Jaipur firm owners use own credit cards for firm expenses. When firm struggles. They have own card debt. We handle these cases with firm proof showing income loss. Firm failure as hardship reason. Banks understand and settle.'
    },
    {
      question: 'How does using personal cards for business create debt trap?',
      answer: 'Firm owners use own cards for inventory. Supplier payments. Shop expenses. When firm faces losses or seasonal slowdowns. Cannot repay cards. own salary or family income alone cannot cover firm related card debt. closure provides exit.'
    },
    {
      question: 'How much can I save on credit card settlement?',
      answer: 'Rajasthan clients typically save 40-75% on credit card debt. Our state average is 54% reduction. Depends on overdue period. Number of cards. Total amount. hardship proof quality.'
    },
    {
      question: 'Will settlement stop credit card collection calls?',
      answer: 'Yes. Within 5-7 days. We send legal notices to all banks citing RBI Fair Practices Code. Claims calls. WhatsApp messages. Emails stop fast. If any bank violates after notice. We file Banking RBI officer complaint.'
    },
    {
      question: 'What happens to my credit score after settlement?',
      answer: 'Score drops initially (already dropped if cards overdue). Settled status stays 7 years but impact reduces over time. After 18-24 months of no new defaults plus small secured credit. Score recovers to 650-700 range.'
    },
    {
      question: 'Can I settle multiple credit cards at once?',
      answer: 'Yes. Most Rajasthan clients have 3-5 credit cards. We handle all cards together with coordinated strategy. Single talks timeline. One legal process. All cards closed simultaneously. Better than handling each separately.'
    },
    {
      question: 'How long does credit card settlement take?',
      answer: 'Typically 50-90 days from first call to final closure in Rajasthan. Jaipur cases sometimes faster because banks have offices there. Multiple card cases take slightly longer but still much better than years of EMI payments.'
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
                alt="Credit Card Settlement Rajasthan"
                className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]"
                style={{
                  height: 'auto',
                  transform: 'rotate(335deg)',
                  transformOrigin: 'center'
                }}
               width={661} height={377} />
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
                        Credit Card Settlement in Jaipur,<br />
                        <span className="text-blue-200">Jodhpur &amp; Rajasthan</span>
                    </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              > Stuck with credit card debt in Jaipur. Udaipur or anywhere in Rajasthan? Multiple cards. Firm expenses on own cards. Tourism seasonal challenges. Rates piling up? CredSettle helps you settle credit card debt by law. Reduce unpaid by 40-75% through RBI-compliant talks. Stop calls calls within 7 days. Over 4,200 Rajasthan families became debt-free from credit card burden. </p>
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
              
              <section id="rajasthan-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Credit Card Settlement in Rajasthan
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Rajasthan. With tourism. Gems and jewelry trade. Textiles. Growing service sector. Has substantial credit card usage across Jaipur. Udaipur. Jodhpur and other cities. Firm owners and experts earning 5-20 lakhs annually carry 3-5 credit cards on average (HDFC. ICICI. SBI. Axis). Many firm owners use own cards for firm expenses. Easy approvals. Seasonal firm fluctuations. Family expenses and high rates rates (36-42% annually) create debt trap for many families. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Credit card closure</strong> means settle with banks to pay reduced lump sum amounts instead of full unpaid. RBI recognizes this as legal debt relief. Banks have dedicated credit card NPA divisions handling closures daily. This is not loan waiver. You pay what you can afford. Bank accepts it as full and final. All legal. </p>
                  <p style={{ marginBottom: '16px' }}> CredSettle has settled credit card debt for over 4,200 Rajasthan clients across all regions. Our Rajasthan clients typically save 40-75% on credit card unpaid (state average: 54% reduction). Every closure follows RBI rules. Stops threats within 7 days. Gets proper legal proof. permanently closes all cards. </p>
                </div>
              </section>

              <section id="jaipur-card-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Jaipur Business and Tourism Card Usage
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Rajasthan creates unique credit card usage pattern shaped by tourism trade (hotels. Travel firms. Handicraft firms). Gems and jewelry trade. Textile firms. growing IT sector in Jaipur. Mix of traditional firm owners and modern experts. Credit cards used heavily for firm inventory. Supplier payments. Family needs. Medical expenses. Weddings. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>firm expense on own cards:</strong> Many small firm owners use own credit cards for firm needs. Buy inventory on cards (jewelry. Textiles. Handicrafts). Pay suppliers using cards. Shop rent during slow months on cards. Marketing and travel on cards. When firm does well. They repay easily. But when tourism season is bad or firm faces losses. Cannot repay own cards. own salary or family income alone cannot cover firm related card debt. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Tourism seasonal challenges:</strong> Rajasthan tourism is seasonal. October to March good season. April to September slow. Hotels. Travel agents. Handicraft sellers all face seasonal income variation. Use credit cards during slow season to manage expenses. Plan to repay during peak season. But if peak season is also bad (like during COVID years or economic slowdown). Cannot repay accumulated card debt. Cards go overdue. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Jewelry and gems firm:</strong> Jaipur famous for gems and jewelry. Many traders use own cards for small inventory purchases or quick payments. High value. Low margin firm. If few deals go wrong or payments delayed by buyers. Face cash crunch. Cannot repay own cards used for firm. Need closure. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Family and social debts:</strong> Rajasthan has strong family and social culture. Weddings. Festivals. Religious ceremonies. All expensive. Use credit cards to maintain social standing and fulfill debts. Each event adds 30,000-1.5 lakhs to cards. Multiple events per year. Debt accumulates. Firm income irregular. Difficult to repay consistently. </p>
                  <p style={{ marginBottom: '16px' }}> We understand Rajasthan firm culture and social debts fully. We know seasonal challenges are real. But when card debt becomes unmanageable. Closure provides legal exit. We have helped thousands of firm owners and experts across Rajasthan. </p>
                </div>
              </section>

              <section id="business-card-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  The Business Expense Card Trap
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Using own credit cards for firm expenses is very common in Rajasthan. Here is how it creates debt trap: </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Real example from Jaipur firm owner:</strong> Owns textile shop in Johari Bazaar. Annual firm turnover 40-50 lakhs. Profit 8-10 lakhs. Had 4 own credit cards. Used cards regularly for firm. Bought inventory on cards during slow season (2-3 lakhs). Paid supplier advance using cards (1 lakh). Shop renovation on cards (80,000). Regular firm expenses like electricity. Transport. Labor during cash crunch periods (1.2 lakhs). Total 5.2 lakhs across 4 own cards. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>When firm struggled:</strong> Expected good Diwali season sales. But sales were 30% lower than expected. Could not repay all card debt from firm profit. Next season also average. Started paying minimum on cards to keep them active for firm use. rates piling up. After 8 months. Total card unpaid 6.1 lakhs (from original 5.2 lakhs). Cards went overdue one by one. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>own vs firm debt problem:</strong> firm debt can be restructured or dealt with through firm bankruptcy if needed. But own credit card debt is personally liable. Bank can take legal action against person individually. Cannot separate firm failure from own card risk. This is major problem for firm owners using own cards for firm. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Why firm owners do this:</strong> Getting firm credit card difficult. Requires company registration. GST papers. Firm bank statements. Higher rates rates. own credit cards easy to get. No questions asked about usage. Can use freely for firm. Works well when firm going good. Becomes nightmare when firm struggles. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>closure solution:</strong> We handle firm related own card debt with special proof. Show firm income statements. Sales records. Seasonal variations. Recent losses. Banks understand firm challenges (especially post-COVID). settle 45-65% reductions. Firm owner gets own card debt closed. Can focus on running firm without claims threats. </p>
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
                  Six Credit Card Debt Patterns in Rajasthan
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>1. firm Inventory on own Cards:</strong> Shop owners buy inventory using own cards. Textiles. Jewelry. Handicrafts. Electronics. When inventory sells fast. Repay easily. When inventory moves slow or prices drop. Stuck with card debt. We have settled 1,200+ firm related own card cases. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>2. Tourism Seasonal Income Variation:</strong> Hotels. Travel agents. Tour guides. Handicraft sellers all depend on tourism season. Use credit cards during off-season for expenses. When peak season is bad. Cannot repay accumulated debt. We handle these with seasonal income proof. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>3. Family Wedding Expenses:</strong> Rajasthan weddings elaborate and expensive. Venue. Catering. Jewelry. Clothes. Gifts. Ceremonies. Total 8-15 lakhs. Multiple family members use credit cards. After wedding. Huge card debt to service. No income increase. Cards go overdue within year. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>4. Medical Emergency Expenses:</strong> Serious illness requiring treatment in Jaipur or traveling to Delhi. Mumbai for specialized treatment. Medical bills 4-10 lakhs. cover partial coverage. Use credit cards to pay hospitals and travel. Cannot repay due to ongoing treatment costs and income loss during illness. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>5. Real Estate Investment Gone Wrong:</strong> Invested in home using cards for booking amount. Down payment. home project delayed or cancelled. Money stuck. Card EMIs keep running. Cannot pay EMIs while waiting for refund. Cards go overdue. We settle with investment proof. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>6. Gems Trading Losses:</strong> Gems and jewelry traders in Jaipur use own cards for quick purchases and payments. High value transactions. If few deals result in losses or buyer payments delayed. Face severe cash crunch. Cannot repay own cards. Need closure to separate own finances from firm losses. </p>
                </div>
              </section>

              <section id="credsettle-process" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  How CredSettle Handles Rajasthan Card Cases
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> We have handled 4,200+ credit card closures across Rajasthan in last four years. Our Rajasthan clients save an average of 54% on their credit card debt. We work with all major banks (HDFC. ICICI. SBI. Axis. Citi. Standard Chartered. HSBC. American Express. Kotak. Yes Bank) and NBFCs. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Our Rajasthan advantage:</strong> We are registered legal services company following every RBI rule. We understand firm expense patterns. Tourism seasonal challenges. Family debts. We have local legal partners in Jaipur who know Rajasthan banking systems and consumer courts. </p>

                  <div id="settlement-strategy" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                    <h3
                      className="text-lg md:text-xl lg:text-[24px] leading-tight"
                      style={{
                        color: '#0C2756',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        lineHeight: '32px',
                        marginBottom: '16px'
                      }}
                    > Our closure Approach for Card Debt </h3>
                    <p style={{ marginBottom: '16px' }}> <strong>Step 1: Complete Card Analysis</strong> - List all cards. Unpaid amounts. Firm vs own usage. Overdue months. Free consultation. <strong>Step 2: Stop threats fast</strong> - Legal notices to all banks citing RBI Fair Practices Code. calls calls stop within 5-7 days. <strong>Step 3: Build firm Case File</strong> - For firm owners. Gather firm income records. Seasonal variations. Recent losses. Inventory details. For salaried. Get salary slips and hardship papers. <strong>Step 4: Present to Banks</strong> - Show genuine firm struggles or own money hardship. Explain seasonal income variations. Unexpected losses. <strong>Step 5: Multi-Card talks</strong> - Handle all cards together. settle 40-75% reductions. <strong>Step 6: Credit Rebuilding</strong> - Guide on future credit handling. Avoiding firm expense on own cards. </p>
                  </div>

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
                    > RBI Rules That Protect You </h3>
                    <p style={{ marginBottom: '16px' }}> Every closure follows RBI Master Directions on Credit Card Operations. You get: (1) Written closure note from bank on letterhead. (2) Clear statement that settled amount is full and final with no more claims. (3) NOC after payment. (4) Credit desk reporting as "settled". (5) All papers within 30 days per RBI timeline. Our Rajasthan counsel ensure complete compliance. </p>
                  </div>
                </div>
              </section>

              <section id="multiple-cards" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Settling Multiple Credit Cards Together
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Most Rajasthan clients have debt across 3-5 credit cards. Average Jaipur firm owner we help has: HDFC card 1.3 lakhs. ICICI card 1.5 lakhs. SBI card 90,000. Axis card 1.1 lakhs. Total 4.9 lakhs across 4 cards. Handling each bank separately very difficult. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Our coordinated approach:</strong> We treat all cards as single debt portfolio. Build one hardship file (firm or own). Contact all banks same week. Present identical case. settle similar rate. Coordinate so all closures close together. You arrange total money once. Pay all banks. All cards closed simultaneously. </p>
                </div>
              </section>

              <section id="rajasthan-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Jaipur Udaipur Jodhpur Credit Card Debt
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Jaipur:</strong> Capital city. Tourism hub. Gems and jewelry trade. Textile firm. Growing IT sector. Mix of traditional firm owners and modern experts. Card usage for firm and own needs. Average 3-5 cards per person. 3-6 lakhs total debt. We have handled 2,600+ Jaipur cases. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Udaipur:</strong> Tourism city. Hospitality firms. Handicrafts. Seasonal income patterns. Card usage for firm inventory. Family needs. Average 3-4 cards per person. 2-4 lakhs total debt. We have settled 800+ Udaipur cases. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Jodhpur and other cities:</strong> Mix of firm. Experts. Salaried class. Card usage for lifestyle. Firm. Family debts. Average 2-4 cards per person. 1.5-4 lakhs total debt. We have handled 800+ cases in these cities. </p>
                </div>
              </section>

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
                  Five Major Benefits of Card Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>1. Save 40-75% on Credit Card Debt:</strong> Rajasthan clients save 54% on average. 5 lakh card debt becomes 2.3 lakh closure. Save 2.7 lakhs. Much better than paying for years. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>2. Separate own Finances from firm:</strong> If used cards for firm. Closure closes own card risk. Can focus on firm without own threats. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>3. Stop calls threats Within Week:</strong> Legal notices to all banks. claims calls stop within 5-7 days. Mental peace restored. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>4. Handle All Cards Together:</strong> Do not fight multiple banks separately. We settle all simultaneously. Single timeline. All cards closed together. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>5. Legal RBI-Compliant Process:</strong> Every closure documented properly. Closure letters. Receipts. NOC. No bank can return later claiming you still owe money. </p>
                </div>
              </section>

              <section id="your-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Your Legal Rights Against Card Harassment
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Know your rights as Rajasthan credit card holder. RBI has exact rules protecting you: </p>
                  <p style={{ marginBottom: '16px' }}> <strong>RBI Fair Practices for Credit Cards:</strong> Banks cannot call before 8am or after 7pm. Cannot call more than 3 times per week. Cannot use abusive language. Cannot contact firm premises or family without permission. Break these rules. File Banking RBI officer complaint. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>No penal Case for Card Debt:</strong> Credit card debt is civil matter. Not penal. Banks cannot threaten police case. Only if fake papers given can there be penal case. Regular card usage and inability to pay is purely civil matter. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Right to settle:</strong> You have full right to settle and settle. Bank cannot force full payment if genuine hardship (firm losses. Seasonal income variation. Medical emergency). RBI encourages closure. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Consumer Court Access:</strong> If bank violated fair practices. File case in Rajasthan Consumer Court. Jaipur Consumer Forum handles banking complaints. Banks often settle quickly to avoid court. </p>
                  <p style={{ marginBottom: '16px' }}> We protect all these rights during closure. Any violations. We take fast action including Banking RBI officer complaints and consumer court cases when needed. </p>
                </div>
              </section>

              <section id="settlement-steps" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Complete Settlement Process Step by Step
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Days 1-2: First Call</strong> - Free 30-40 minute consultation. Tell us about all cards. Firm or own usage. Unpaid amounts. Threats level. We explain steps. Realistic savings. Timeline. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Days 3-8: proof</strong> - Share all card statements. ID proof. Firm owners: firm income records. Losses. Seasonal variations. Salaried: salary slips. Hardship papers. We build strong case file. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Days 8-12: Stop threats</strong> - Legal notices to all banks citing RBI rules. claims calls stop within 5-7 days. Peace while we settle. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 2-7: talks</strong> - Our Rajasthan team contacts NPA divisions of all banks. Present hardship case. Show firm losses or own money crisis. settle 40-75% reductions. Coordinate timing. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 7-9: closure pacts</strong> - All banks send formal offers. We review by law. check terms. Only after verification. You pay. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 9-11: Payment</strong> - You arrange closure money (savings. Family help. PF withdrawal. Firm profits). Pay each bank. Keep receipts. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 11-15: papers calls</strong> - Banks have 30 days to send NOC. We follow up aggressively. Collect all papers. check credit desk updates. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Total time:</strong> Usually 50-90 days for Rajasthan cases. Much better than years of EMI trap. </p>
                </div>
              </section>

              <section id="real-case" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Real Case: Jaipur Business Owner Saved 58%
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>The Card Holder:</strong> Ramesh S. Age 42. Owns handicraft shop in Johari Bazaar. Jaipur. firm turnover 35-45 lakhs annually. Had 4 own credit cards: HDFC 1.7 lakhs. ICICI 1.5 lakhs. SBI 1.2 lakhs. Axis 95,000. Total unpaid 5.35 lakhs. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>How Debt Happened:</strong> Ramesh used own cards for firm. Bought handicraft inventory during off-season (2.2 lakhs). Paid suppliers advance for special orders (1.1 lakhs). Shop renovation (85,000). Regular firm expenses during cash crunch (1.2 lakhs). Total 5.35 lakhs on own cards. Planned to repay from Diwali and wedding season sales. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Crisis Hit:</strong> COVID lockdowns destroyed tourism. Shop closed for months. When reopened. Tourist footfall 70% lower. Sales dropped drastically. Could not repay own card debt. Started paying minimums. rates piling up. After 10 months. Cards went overdue. unpaid grew to 6.1 lakhs with rates and fees. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>threats Started:</strong> claims calls 20+ daily. Threatening language. Called his shop phone. Very embarrassing in front of customers. Called family members. Mental stress affecting firm decisions. Fear of losing shop. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Found Us:</strong> Contacted us July 2023. We sent legal notices to all 4 banks fast. threats stopped within 5 days. Built case file showing firm income records. COVID impact. Tourism slowdown. Years of regular payments before default. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>closure Success:</strong> settle 2.5 months with all banks. Final closures: HDFC at 42% (71,400). ICICI at 41% (61,500). SBI at 43% (51,600). Axis at 40% (38,000). Total closure 2.225 lakhs for 5.35 lakh debt. Saved 3.125 lakhs (58% reduction). </p>
                  <p style={{ marginBottom: '16px' }}> <strong>How He Paid:</strong> Ramesh arranged 1.5 lakhs from family. Sold some gold jewelry for 72,500. Total 2.225 lakhs. Paid all banks October 2023. All 4 cards closed. NOCs received by December 2023. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Life After closure:</strong> Ramesh is card-free. Now uses firm current account for all firm expenses. Learned not to mix own cards with firm. His words: "COVID destroyed my firm income but own card debt almost destroyed me mentally. CredSettle saved me 3 lakhs and my firm. Now I can focus on rebuilding without claims threats." </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Timeline:</strong> July 2023 first call. July-September talks. October 2023 payment. December 2023 all papers. Total: 5 months. </p>
                </div>
              </section>

              <section id="start-today" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Get Free Credit Card Debt Consultation
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Drowning in credit card debt in Jaipur. Udaipur or anywhere in Rajasthan? Multiple cards. Firm expenses on own cards. Tourism seasonal challenges. Claims threats? You do not have to suffer alone. closure is fully legal. RBI allows it. Banks do it daily. </p>
                  <p style={{ marginBottom: '16px' }}> Credit card debt destroys peace and firm. Phone rings 25 times daily. Cannot focus on firm or work. Family worried. Every day you delay. Rates keeps adding. 3.5% monthly rates means debt grows every month. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Act today:</strong> Free private consultation. No debts. Just honest assessment and clear options. Our Rajasthan experts will show exactly how much you can save. How quickly threats stops. We have helped 4,200+ Rajasthan families and firms escape credit card trap. You can be next. </p>
                  <p style={{ marginBottom: '16px' }}> Do not let credit card debt destroy your firm or life. With our legal team. Rajasthan banking knowledge and proven track record. You can close all cards by law and start fresh. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Call CredSettle for free consultation.</strong> Jaipur. Udaipur. Jodhpur or any Rajasthan city. Whether 2 cards or 5 cards. 50,000 debt or 8 lakh debt. Firm or own. Legal solution exists. We will help you find it. </p>
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
                title="Credit Card Settlement in Rajasthan"
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
                      Break Free from Credit Card Debt?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    > Join 4,200+ Rajasthan families debt-free. Multiple cards. Firm debt. Tourism seasonal challenges. All welcome. Free consultation. Fast threats stop. </p>
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




