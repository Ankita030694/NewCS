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
    { id: 'rajasthan-cc-settlement', text: 'Credit Card Settlement in Rajasthan', level: 2 },
    { id: 'jaipur-card-culture', text: 'Jaipur Business and Tourism Card Usage', level: 2 },
    { id: 'business-card-trap', text: 'The Business Expense Card Trap', level: 2 },
    { id: 'rajasthan-challenges', text: 'Six Credit Card Debt Patterns in Rajasthan', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Rajasthan Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Approach for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Settling Multiple Credit Cards Together', level: 2 },
    { id: 'rajasthan-cities', text: 'Jaipur Udaipur Jodhpur Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Card Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Process Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Jaipur Business Owner Saved 58%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Rajasthan Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Rajasthan?',
      answer: 'Yes, completely legal in Rajasthan and across India. RBI recognizes settlement as valid debt resolution for credit cards. Banks negotiate settlements regularly. Your right to negotiate is protected under banking regulations.'
    },
    {
      question: 'Can business owners settle personal credit cards used for business?',
      answer: 'Yes. Many Jaipur business owners use personal credit cards for business expenses. When business struggles, they have personal card debt. We handle these cases with business documentation showing income loss, business failure as hardship reason. Banks understand and negotiate.'
    },
    {
      question: 'How does using personal cards for business create debt trap?',
      answer: 'Business owners use personal cards for inventory, supplier payments, shop expenses. When business faces losses or seasonal slowdowns, cannot repay cards. Personal salary or family income alone cannot cover business related card debt. Settlement provides exit.'
    },
    {
      question: 'How much can I save on credit card settlement?',
      answer: 'Rajasthan clients typically save 40-75% on credit card debt. Our state average is 54% reduction. Depends on overdue period, number of cards, total amount, and hardship documentation quality.'
    },
    {
      question: 'Will settlement stop credit card collection calls?',
      answer: 'Yes, within 5-7 days. We send legal notices to all banks citing RBI Fair Practices Code. Recovery calls, WhatsApp messages, emails stop immediately. If any bank violates after notice, we file Banking Ombudsman complaint.'
    },
    {
      question: 'What happens to my credit score after settlement?',
      answer: 'Score drops initially (already dropped if cards overdue). Settled status stays 7 years but impact reduces over time. After 18-24 months of no new defaults plus small secured credit, score recovers to 650-700 range.'
    },
    {
      question: 'Can I settle multiple credit cards at once?',
      answer: 'Yes. Most Rajasthan clients have 3-5 credit cards. We handle all cards together with coordinated strategy. Single negotiation timeline, one legal process, all cards closed simultaneously. Better than handling each separately.'
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
                Credit Card Settlement Jaipur Rajasthan - Break Free From Business Debt Trap
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
                Stuck with credit card debt in Jaipur, Udaipur or anywhere in Rajasthan? Multiple cards, business expenses on personal cards, tourism seasonal challenges, interest piling up? CredSettle helps you settle credit card debt legally. Reduce outstanding by 40-75% through RBI-compliant negotiation. Stop collection calls within 7 days. Over 4,200 Rajasthan families became debt-free from credit card burden.
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
                  <p style={{ marginBottom: '16px' }}>
                    Rajasthan, with tourism, gems and jewelry trade, textiles, and growing service sector, has substantial credit card usage across Jaipur, Udaipur, Jodhpur and other cities. Business owners and professionals earning 5-20 lakhs annually carry 3-5 credit cards on average (HDFC, ICICI, SBI, Axis). Many business owners use personal cards for business expenses. Easy approvals, seasonal business fluctuations, family expenses and high interest rates (36-42% annually) create debt trap for many families.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit card settlement</strong> means negotiating with banks to pay reduced lump sum amounts instead of full outstanding. RBI recognizes this as legal debt resolution. Banks have dedicated credit card NPA divisions handling settlements daily. This is not loan waiver. You pay what you can afford, bank accepts it as full and final, all legal.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled credit card debt for over 4,200 Rajasthan clients across all regions. Our Rajasthan clients typically save 40-75% on credit card outstanding (state average: 54% reduction). Every settlement follows RBI rules, stops harassment within 7 days, gets proper legal documentation, and permanently closes all cards.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Rajasthan creates unique credit card usage pattern shaped by tourism industry (hotels, travel agencies, handicraft businesses), gems and jewelry trade, textile businesses, and growing IT sector in Jaipur. Mix of traditional business owners and modern professionals. Credit cards used heavily for business inventory, supplier payments, family needs, medical expenses, weddings.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Business expense on personal cards:</strong> Many small business owners use personal credit cards for business needs. Buy inventory on cards (jewelry, textiles, handicrafts). Pay suppliers using cards. Shop rent during slow months on cards. Marketing and travel on cards. When business does well, they repay easily. But when tourism season is bad or business faces losses, cannot repay personal cards. Personal salary or family income alone cannot cover business related card debt.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Tourism seasonal challenges:</strong> Rajasthan tourism is seasonal. October to March good season, April to September slow. Hotels, travel agents, handicraft sellers all face seasonal income variation. Use credit cards during slow season to manage expenses. Plan to repay during peak season. But if peak season is also bad (like during COVID years or economic slowdown), cannot repay accumulated card debt. Cards go overdue.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Jewelry and gems business:</strong> Jaipur famous for gems and jewelry. Many traders use personal cards for small inventory purchases or quick payments. High value, low margin business. If few deals go wrong or payments delayed by buyers, face cash crunch. Cannot repay personal cards used for business. Need settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Family and social obligations:</strong> Rajasthan has strong family and social culture. Weddings, festivals, religious ceremonies, all expensive. Use credit cards to maintain social standing and fulfill obligations. Each event adds 30,000-1.5 lakhs to cards. Multiple events per year. Debt accumulates. Business income irregular, difficult to repay consistently.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We understand Rajasthan business culture and social obligations completely. We know seasonal challenges are real. But when card debt becomes unmanageable, settlement provides legal exit. We have helped thousands of business owners and professionals across Rajasthan.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Using personal credit cards for business expenses is very common in Rajasthan. Here is how it creates debt trap:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real example from Jaipur business owner:</strong> Owns textile shop in Johari Bazaar. Annual business turnover 40-50 lakhs, profit 8-10 lakhs. Had 4 personal credit cards. Used cards regularly for business. Bought inventory on cards during slow season (2-3 lakhs). Paid supplier advance using cards (1 lakh). Shop renovation on cards (80,000). Regular business expenses like electricity, transport, labor during cash crunch periods (1.2 lakhs). Total 5.2 lakhs across 4 personal cards.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When business struggled:</strong> Expected good Diwali season sales. But sales were 30% lower than expected. Could not repay all card debt from business profit. Next season also average. Started paying minimum on cards to keep them active for business use. Interest piling up. After 8 months, total card outstanding 6.1 lakhs (from original 5.2 lakhs). Cards went overdue one by one.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal vs business debt problem:</strong> Business debt can be restructured or dealt with through business bankruptcy if needed. But personal credit card debt is personally liable. Bank can take legal action against person individually. Cannot separate business failure from personal card liability. This is major problem for business owners using personal cards for business.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why business owners do this:</strong> Getting business credit card difficult, requires company registration, GST documents, business bank statements, higher interest rates. Personal credit cards easy to get. No questions asked about usage. Can use freely for business. Works well when business going good. Becomes nightmare when business struggles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement solution:</strong> We handle business related personal card debt with special documentation. Show business income statements, sales records, seasonal variations, recent losses. Banks understand business challenges (especially post-COVID). Negotiate 45-65% reductions. Business owner gets personal card debt closed, can focus on running business without recovery harassment.
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>1. Business Inventory on Personal Cards:</strong> Shop owners buy inventory using personal cards. Textiles, jewelry, handicrafts, electronics. When inventory sells fast, repay easily. When inventory moves slow or prices drop, stuck with card debt. We have settled 1,200+ business related personal card cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Tourism Seasonal Income Variation:</strong> Hotels, travel agents, tour guides, handicraft sellers all depend on tourism season. Use credit cards during off-season for expenses. When peak season is bad, cannot repay accumulated debt. We handle these with seasonal income documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Family Wedding Expenses:</strong> Rajasthan weddings elaborate and expensive. Venue, catering, jewelry, clothes, gifts, ceremonies. Total 8-15 lakhs. Multiple family members use credit cards. After wedding, huge card debt to service. No income increase. Cards go overdue within year.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Medical Emergency Expenses:</strong> Serious illness requiring treatment in Jaipur or traveling to Delhi, Mumbai for specialized treatment. Medical bills 4-10 lakhs. Insurance partial coverage. Use credit cards to pay hospitals and travel. Cannot repay due to ongoing treatment costs and income loss during illness.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Real Estate Investment Gone Wrong:</strong> Invested in property using cards for booking amount, down payment. Property project delayed or cancelled. Money stuck. Card EMIs keep running. Cannot pay EMIs while waiting for refund. Cards go overdue. We settle with investment documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Gems Trading Losses:</strong> Gems and jewelry traders in Jaipur use personal cards for quick purchases and payments. High value transactions. If few deals result in losses or buyer payments delayed, face severe cash crunch. Cannot repay personal cards. Need settlement to separate personal finances from business losses.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    We have handled 4,200+ credit card settlements across Rajasthan in last four years. Our Rajasthan clients save an average of 54% on their credit card debt. We work with all major banks (HDFC, ICICI, SBI, Axis, Citi, Standard Chartered, HSBC, American Express, Kotak, Yes Bank) and NBFCs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Rajasthan advantage:</strong> We are registered legal services company following every RBI rule. We understand business expense patterns, tourism seasonal challenges, family obligations. We have local legal partners in Jaipur who know Rajasthan banking systems and consumer courts.
                  </p>

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
                    >
                      Our Settlement Approach for Card Debt
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Complete Card Analysis</strong> - List all cards, outstanding amounts, business vs personal usage, overdue months. Free consultation. <strong>Step 2: Stop Harassment Immediately</strong> - Legal notices to all banks citing RBI Fair Practices Code. Collection calls stop within 5-7 days. <strong>Step 3: Build Business Case File</strong> - For business owners, gather business income records, seasonal variations, recent losses, inventory details. For salaried, get salary slips and hardship documents. <strong>Step 4: Present to Banks</strong> - Show genuine business struggles or personal financial hardship. Explain seasonal income variations, unexpected losses. <strong>Step 5: Multi-Card Negotiation</strong> - Handle all cards together. Negotiate 40-75% reductions. <strong>Step 6: Credit Rebuilding</strong> - Guide on future credit management, avoiding business expense on personal cards.
                    </p>
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
                    >
                      RBI Rules That Protect You
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions on Credit Card Operations. You get: (1) Written settlement letter from bank on letterhead, (2) Clear statement that settled amount is full and final with no more claims, (3) NOC after payment, (4) Credit bureau reporting as "settled", (5) All documents within 30 days per RBI timeline. Our Rajasthan lawyers ensure complete compliance.
                    </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Most Rajasthan clients have debt across 3-5 credit cards. Average Jaipur business owner we help has: HDFC card 1.3 lakhs, ICICI card 1.5 lakhs, SBI card 90,000, Axis card 1.1 lakhs. Total 4.9 lakhs across 4 cards. Handling each bank separately very difficult.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our coordinated approach:</strong> We treat all cards as single debt portfolio. Build one hardship file (business or personal). Contact all banks same week. Present identical situation. Negotiate similar percentages. Coordinate so all settlements close together. You arrange total money once. Pay all banks. All cards closed simultaneously.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Jaipur:</strong> Capital city, tourism hub, gems and jewelry trade, textile business, growing IT sector. Mix of traditional business owners and modern professionals. Card usage for business and personal needs. Average 3-5 cards per person, 3-6 lakhs total debt. We have handled 2,600+ Jaipur cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Udaipur:</strong> Tourism city, hospitality businesses, handicrafts. Seasonal income patterns. Card usage for business inventory, family needs. Average 3-4 cards per person, 2-4 lakhs total debt. We have settled 800+ Udaipur cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Jodhpur and other cities:</strong> Mix of business, professionals, salaried class. Card usage for lifestyle, business, family obligations. Average 2-4 cards per person, 1.5-4 lakhs total debt. We have handled 800+ cases in these cities.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>1. Save 40-75% on Credit Card Debt:</strong> Rajasthan clients save 54% on average. 5 lakh card debt becomes 2.3 lakh settlement. Save 2.7 lakhs. Much better than paying for years.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Separate Personal Finances from Business:</strong> If used cards for business, settlement closes personal card liability. Can focus on business without personal harassment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Stop Collection Harassment Within Week:</strong> Legal notices to all banks. Recovery calls stop within 5-7 days. Mental peace restored.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Handle All Cards Together:</strong> Do not fight multiple banks separately. We negotiate all simultaneously. Single timeline. All cards closed together.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Legal RBI-Compliant Process:</strong> Every settlement documented properly. Settlement letters, receipts, NOC. No bank can return later claiming you still owe money.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Know your rights as Rajasthan credit card holder. RBI has specific rules protecting you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices for Credit Cards:</strong> Banks cannot call before 8am or after 7pm. Cannot call more than 3 times per week. Cannot use abusive language. Cannot contact business premises or family without permission. Break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>No Criminal Case for Card Debt:</strong> Credit card debt is civil matter, not criminal. Banks cannot threaten police case. Only if fake documents given can there be criminal case. Regular card usage and inability to pay is purely civil matter.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> You have full right to negotiate and settle. Bank cannot force full payment if genuine hardship (business losses, seasonal income variation, medical emergency). RBI encourages settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Consumer Court Access:</strong> If bank violated fair practices, file case in Rajasthan Consumer Court. Jaipur Consumer Forum handles banking complaints. Banks often settle quickly to avoid court.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any violations, we take immediate action including Banking Ombudsman complaints and consumer court cases when needed.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 1-2: First Call</strong> - Free 30-40 minute consultation. Tell us about all cards, business or personal usage, outstanding amounts, harassment level. We explain settlement process, realistic savings, timeline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 3-8: Documentation</strong> - Share all card statements, ID proof. Business owners: business income records, losses, seasonal variations. Salaried: salary slips, hardship documents. We build strong case file.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 8-12: Stop Harassment</strong> - Legal notices to all banks citing RBI rules. Recovery calls stop within 5-7 days. Peace while we negotiate.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 2-7: Negotiation</strong> - Our Rajasthan team contacts NPA divisions of all banks. Present hardship case. Show business losses or personal financial crisis. Negotiate 40-75% reductions. Coordinate timing.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 7-9: Settlement Agreements</strong> - All banks send formal offers. We review legally. Verify terms. Only after verification, you pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 9-11: Payment</strong> - You arrange settlement money (savings, family help, PF withdrawal, business profits). Pay each bank. Keep receipts.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 11-15: Document Collection</strong> - Banks have 30 days to send NOC. We follow up aggressively. Collect all documents. Verify credit bureau updates.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 50-90 days for Rajasthan cases. Much better than years of EMI trap.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The Card Holder:</strong> Ramesh S., age 42, owns handicraft shop in Johari Bazaar, Jaipur. Business turnover 35-45 lakhs annually. Had 4 personal credit cards: HDFC 1.7 lakhs, ICICI 1.5 lakhs, SBI 1.2 lakhs, Axis 95,000. Total outstanding 5.35 lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How Debt Happened:</strong> Ramesh used personal cards for business. Bought handicraft inventory during off-season (2.2 lakhs). Paid suppliers advance for special orders (1.1 lakhs). Shop renovation (85,000). Regular business expenses during cash crunch (1.2 lakhs). Total 5.35 lakhs on personal cards. Planned to repay from Diwali and wedding season sales.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Crisis Hit:</strong> COVID lockdowns destroyed tourism. Shop closed for months. When reopened, tourist footfall 70% lower. Sales dropped drastically. Could not repay personal card debt. Started paying minimums. Interest piling up. After 10 months, cards went overdue. Outstanding grew to 6.1 lakhs with interest and fees.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Harassment Started:</strong> Recovery calls 20+ daily. Threatening language. Called his shop phone, very embarrassing in front of customers. Called family members. Mental stress affecting business decisions. Fear of losing shop.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Found Us:</strong> Contacted us July 2023. We sent legal notices to all 4 banks immediately. Harassment stopped within 5 days. Built case file showing business income records, COVID impact, tourism slowdown, years of regular payments before default.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement Success:</strong> Negotiated 2.5 months with all banks. Final settlements: HDFC at 42% (71,400), ICICI at 41% (61,500), SBI at 43% (51,600), Axis at 40% (38,000). Total settlement 2.225 lakhs for 5.35 lakh debt. Saved 3.125 lakhs (58% reduction).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How He Paid:</strong> Ramesh arranged 1.5 lakhs from family, sold some gold jewelry for 72,500. Total 2.225 lakhs. Paid all banks October 2023. All 4 cards closed. NOCs received by December 2023.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Life After Settlement:</strong> Ramesh is card-free. Now uses business current account for all business expenses. Learned not to mix personal cards with business. His words: "COVID destroyed my business income but personal card debt almost destroyed me mentally. CredSettle saved me 3 lakhs and my business. Now I can focus on rebuilding without recovery harassment."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> July 2023 first call, July-September negotiation, October 2023 payment, December 2023 all documents. Total: 5 months.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Drowning in credit card debt in Jaipur, Udaipur or anywhere in Rajasthan? Multiple cards, business expenses on personal cards, tourism seasonal challenges, recovery harassment? You do not have to suffer alone. Settlement is completely legal. RBI allows it. Banks do it daily.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Credit card debt destroys peace and business. Phone rings 25 times daily. Cannot focus on business or work. Family worried. Every day you delay, interest keeps adding. 3.5% monthly interest means debt grows every month.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Act today:</strong> Free confidential consultation. No obligations. Just honest assessment and clear options. Our Rajasthan experts will show exactly how much you can save, how quickly harassment stops. We have helped 4,200+ Rajasthan families and businesses escape credit card trap. You can be next.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Do not let credit card debt destroy your business or life. With our legal team, Rajasthan banking knowledge and proven track record, you can close all cards legally and start fresh.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Jaipur, Udaipur, Jodhpur or any Rajasthan city. Whether 2 cards or 5 cards, 50,000 debt or 8 lakh debt, business or personal, legal solution exists. We will help you find it.
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
                    >
                      Join 4,200+ Rajasthan families debt-free. Multiple cards, business debt, tourism seasonal challenges, all welcome. Free consultation, fast harassment stop.
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


