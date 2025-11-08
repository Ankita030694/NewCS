'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function HaryanaPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'haryana-cc-settlement', text: 'Credit Card Settlement in Haryana', level: 2 },
    { id: 'ncr-corporate-culture', text: 'Haryana NCR Corporate Card Culture', level: 2 },
    { id: 'property-investment-trap', text: 'The Property Investment Card Trap', level: 2 },
    { id: 'haryana-challenges', text: 'Six Credit Card Debt Patterns in Haryana', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Haryana Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Strategy for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Settling Multiple Credit Cards Together', level: 2 },
    { id: 'haryana-cities', text: 'Gurgaon Faridabad Panipat Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Card Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Process Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Faridabad Professional Saved 57%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Haryana Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Haryana?',
      answer: 'Yes, completely legal in Haryana and across India. RBI recognizes settlement as valid debt resolution for credit cards. Banks negotiate settlements regularly. Your right to negotiate is protected under banking regulations.'
    },
    {
      question: 'Can I settle credit cards used for property investment?',
      answer: 'Yes. Many Haryana residents use credit cards for property booking amount or down payment. If property delayed or investment stuck, card EMIs become burden. We handle these cases with property documentation showing delays, issues as hardship reason. Banks understand real estate challenges.'
    },
    {
      question: 'How does property investment on cards create debt trap?',
      answer: 'Property costs 50-80 lakhs in Gurgaon, Faridabad. Need 10-15 lakhs down payment. Use credit cards to arrange. Property delivery delayed by 2-3 years (very common). Paying card EMIs while waiting. Total interest paid becomes huge. Settlement helps exit this cycle.'
    },
    {
      question: 'How much can I save on credit card settlement?',
      answer: 'Haryana clients typically save 40-75% on credit card debt. Our state average is 55% reduction. Depends on overdue period, number of cards, total amount, and hardship documentation quality.'
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
      answer: 'Yes. Most Haryana clients have 4-5 credit cards. We handle all cards together with coordinated strategy. Single negotiation timeline, one legal process, all cards closed simultaneously.'
    },
    {
      question: 'How long does credit card settlement take?',
      answer: 'Typically 50-90 days from first call to final closure in Haryana. Gurgaon and Faridabad cases sometimes faster because proximity to Delhi banking centers. Multiple card cases take slightly longer.'
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
                alt="Credit Card Settlement Haryana"
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
                Credit Card Settlement Gurgaon Faridabad Haryana - Break Free From Property Investment Debt
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
                Stuck with credit card debt in Gurgaon, Faridabad or anywhere in Haryana? Multiple cards, property investment debt, corporate job challenges, interest piling up? CredSettle helps you settle credit card debt legally. Reduce outstanding by 40-75% through RBI-compliant negotiation. Stop collection calls within 7 days. Over 4,800 Haryana families became debt-free from credit card burden.
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
              
              <section id="haryana-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Credit Card Settlement in Haryana
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
                    Haryana, especially NCR region (Gurgaon, Faridabad), has strong corporate culture and rapid urbanization with substantial credit card usage. Professionals earning 8-30 lakhs annually carry 4-5 credit cards on average (HDFC, ICICI, SBI, Axis). Many residents use credit cards for property investments, vehicle purchases, and lifestyle expenses. Easy approvals, real estate boom, corporate job switches and high interest rates (36-42% annually) create debt trap for many families.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit card settlement</strong> means negotiating with banks to pay reduced lump sum amounts instead of full outstanding. RBI recognizes this as legal debt resolution. Banks have dedicated credit card NPA divisions handling settlements daily. This is not loan waiver. You pay what you can afford, bank accepts it as full and final, all legal.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled credit card debt for over 4,800 Haryana clients across all regions. Our Haryana clients typically save 40-75% on credit card outstanding (state average: 55% reduction). Every settlement follows RBI rules, stops harassment within 7 days, gets proper legal documentation, and permanently closes all cards.
                  </p>
                </div>
              </section>

              <section id="ncr-corporate-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Haryana NCR Corporate Card Culture
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
                    Haryana NCR region (Gurgaon, Faridabad) creates unique credit card culture due to proximity to Delhi, corporate hub presence, and rapid real estate development. High salaries, lifestyle aspirations, property investment opportunities lead to heavy credit card usage. Banks target NCR residents aggressively with premium cards and high limits.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Property investment obsession:</strong> Gurgaon property prices 8,000-15,000 per sq ft. Faridabad 4,000-7,000 per sq ft. Everyone wants to invest in property. Use credit cards for booking amount (1-2 lakhs), down payment (3-5 lakhs). Across multiple cards. Property delivery supposed to be 2-3 years. Reality is 4-5 years or more. Paying card EMIs while waiting. By the time property delivers, paid double the card amount in interest.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Corporate lifestyle spending:</strong> Gurgaon has mall culture, dining scene, weekend getaways. Corporate professionals earn 15-30 lakhs but spend on lifestyle to match peer group. Weekend at Cyber Hub 5,000-8,000. Monthly shopping at malls 15,000-25,000. Two vacations per year 3-4 lakhs. All on credit cards. Looks manageable until job change or salary reduction happens.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Vehicle purchases on cards:</strong> Everyone needs vehicle in NCR. Buy bike or car, use credit cards for down payment. Two-wheeler down payment 20,000-30,000 on cards. Car down payment 1.5-2.5 lakhs on cards. Then have vehicle loan EMI plus card EMI. Total burden 40,000-50,000 monthly. Difficult to sustain on 1 lakh salary after rent and expenses.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Job switching without planning:</strong> Corporate professionals switch jobs frequently for better packages. But gap between jobs (notice period, finding new role) creates income gap of 2-4 months. Credit card EMIs keep running. Use savings first. Then cards themselves to pay minimums. By the time new job starts, cards maxed out and some overdue.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Supporting family back home:</strong> Many Haryana NCR professionals from smaller towns or rural backgrounds. Good salaries but supporting parents, siblings education, family medical needs. Send 20,000-30,000 monthly home. Plus own expenses in expensive NCR. Use credit cards to bridge gap. Debt builds over time.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We understand Haryana NCR lifestyle and challenges completely. We know property investment dreams, corporate pressures, family obligations are real. But when card debt becomes unmanageable, settlement provides legal exit. We have helped thousands across Haryana.
                  </p>
                </div>
              </section>

              <section id="property-investment-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  The Property Investment Card Trap
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
                    Property investment using credit cards is major debt trap in Haryana. Here is how it destroys finances:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real example from Faridabad professional:</strong> Working in IT company in Gurgaon, earning 15 lakhs annually. Saw new apartment project in Faridabad. 2BHK flat 60 lakhs. Builder offered 5 year payment plan (pay 20% booking, rest during construction). Seemed great investment (property prices rising). Booking amount needed 12 lakhs. Had only 5 lakhs savings. Used 4 credit cards to withdraw 7 lakhs (cash advance, balance transfer). Paid 12 lakh booking.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The waiting game begins:</strong> Project supposed to complete in 3 years. Started paying card EMIs 45,000 monthly on 7 lakh card debt. Also paying builder installments 25,000 monthly. Total 70,000 monthly. Salary 1.25 lakhs, rent 20,000 in Gurgaon. Left with 35,000 for food, transport, savings. Very tight. Manageable if project completes on time.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Project delays and crisis:</strong> After 2 years, project only 40% complete. Builder asking for more installments but not delivering. After 3 years, project 60% complete. Builder says will take 2 more years. Total 5 years. Been paying card EMIs for 3 years already. Total paid 16 lakhs (45,000 x 36 months) on 7 lakh card debt. Still owe 3.5 lakhs on cards due to interest. Property still not delivered.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Cannot exit, cannot continue:</strong> Cannot sell under-construction property easily. Cannot get money back from builder (in legal dispute). Card debt still there. Been paying for 3 years, will need to pay 2 more years. Total will pay 25+ lakhs for 7 lakh card debt if continue. Or default now and settle.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why this is common:</strong> Property investment feels like safe bet. Prices always rise in NCR. But construction delays are standard. 3 year project takes 5-6 years. During this time, card interest piles up. Many people stuck in this exact trap. Property coming but card debt destroyed finances.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement solution:</strong> We negotiate card debt settlement. 3.5 lakh card debt settles for 1.5 lakhs. Save 2 lakhs. Stop paying EMIs. Wait for property to deliver. When property delivers, can sell if needed or keep it. Property investment remains but personal card debt exits.
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
                  Six Credit Card Debt Patterns in Haryana
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
                    <strong>1. Property Down Payment Debt:</strong> Used credit cards for property booking amount or down payment. Property delayed by years. Paying card EMIs while waiting. We have settled 1,600+ property related card cases with delay documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Job Switch Income Gap:</strong> Switched jobs, had 2-4 month income gap. Credit card EMIs kept running. Used savings and cards themselves to pay minimums. By new job start, cards maxed and some overdue. We handle with job change documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Vehicle Down Payment Trap:</strong> Used cards for two-wheeler or car down payment. Now paying vehicle loan EMI plus card EMI. Double burden unsustainable. We settle card debt so they can focus on vehicle loan.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Corporate Lifestyle Overspending:</strong> High salary but higher lifestyle expenses. Dining, shopping, vacations all on cards. Job change or salary reduction made payments impossible. We settle with income reduction documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Family Support Obligations:</strong> Sending money home regularly. Supporting parents, siblings education. Using credit cards to manage own expenses. Debt accumulated over time. We handle with family obligation documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Medical Emergency Expenses:</strong> Serious illness in family. Used cards for hospital bills, treatment, travel for medical care. Cannot repay due to ongoing medical expenses. We settle with medical documentation.
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
                  How CredSettle Handles Haryana Card Cases
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
                    We have handled 4,800+ credit card settlements across Haryana in last four years. Our Haryana clients save an average of 55% on their credit card debt. We work with all major banks (HDFC, ICICI, SBI, Axis, Citi, Standard Chartered, American Express, Kotak, Yes Bank) and NBFCs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Haryana advantage:</strong> We are registered legal services company following every RBI rule. We understand NCR corporate culture, property investment challenges, job switching patterns. We have local legal partners in Gurgaon who know Haryana banking systems and consumer courts.
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
                      Our Settlement Strategy for Card Debt
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Complete Analysis</strong> - List all cards, outstanding amounts, usage (property, vehicle, lifestyle), overdue months. Free consultation. <strong>Step 2: Stop Harassment</strong> - Legal notices to all banks citing RBI Fair Practices Code. Calls stop within 5-7 days. <strong>Step 3: Build Case File</strong> - Gather salary slips, property documents (if relevant), job change letters, family obligation proof. Strong documentation. <strong>Step 4: Present to Banks</strong> - Show genuine financial hardship. Explain property delays, job gaps, income reduction. <strong>Step 5: Multi-Card Negotiation</strong> - Handle all cards together. Negotiate 40-75% reductions. <strong>Step 6: Future Planning</strong> - After settlement, guide on avoiding property investment on cards, proper financial planning.
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
                      Every settlement follows RBI Master Directions on Credit Card Operations. You get: (1) Written settlement letter from bank, (2) Clear statement of no more claims, (3) NOC after payment, (4) Credit bureau reporting as "settled", (5) All documents within 30 days. Our Haryana lawyers ensure complete compliance.
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
                    Most Haryana clients have debt across 4-5 credit cards. Average Gurgaon or Faridabad professional we help has: HDFC card 1.6 lakhs, ICICI card 1.9 lakhs, Axis card 1.4 lakhs, SBI card 1.2 lakhs. Total 6.1 lakhs across 4 cards. Handling each bank separately very difficult.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our coordinated approach:</strong> We treat all cards as single debt portfolio. Build one case file. Contact all banks same week. Present identical situation. Negotiate similar percentages. All settlements close together. You arrange total money once. Pay all banks. All cards closed simultaneously.
                  </p>
                </div>
              </section>

              <section id="haryana-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Gurgaon Faridabad Panipat Credit Card Debt
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
                    <strong>Gurgaon:</strong> Corporate hub, MNCs, high salaries, expensive lifestyle. Card usage for property, lifestyle, vehicles. Average 4-5 cards per person, 5-8 lakhs total debt. We have handled 2,800+ Gurgaon cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Faridabad:</strong> Industrial city, mix of corporate and manufacturing. Card usage for property investment, family needs. Average 4 cards per person, 3-6 lakhs total debt. We have settled 1,400+ Faridabad cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Panipat, Ambala, Karnal:</strong> Tier 2 cities with professionals and business community. Card usage for business, family, lifestyle. Average 3-4 cards per person, 2-4 lakhs total debt. We have handled 600+ cases in these cities.
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
                    <strong>1. Save 40-75% on Credit Card Debt:</strong> Haryana clients save 55% on average. 6 lakh card debt becomes 2.7 lakh settlement. Save 3.3 lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Exit Property Investment Trap:</strong> Stop paying EMIs while waiting for delayed property. Settlement closes card debt. Focus on property investment separately.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Stop Collection Harassment:</strong> Legal notices to all banks. Recovery calls stop within 5-7 days. Mental peace restored.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Handle All Cards Together:</strong> Do not fight multiple banks separately. We negotiate all simultaneously. Single timeline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Legal RBI-Compliant Process:</strong> Every settlement documented properly. Important for corporate professionals who need clean records.
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
                    Know your rights as Haryana credit card holder. RBI has specific rules protecting you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices:</strong> Banks cannot call before 8am or after 7pm. Cannot call more than 3 times per week. Cannot use abusive language. Cannot contact office or family without permission. Break rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>No Criminal Case:</strong> Credit card debt is civil matter, not criminal. Banks cannot threaten police case. Regular card usage and inability to pay is civil matter.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> You have full right to negotiate and settle. Bank cannot force full payment if genuine hardship. RBI encourages settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Consumer Court:</strong> If bank violated fair practices, file case in Haryana Consumer Court. Gurgaon Consumer Forum handles banking complaints. Banks often settle quickly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any violations, we take immediate action including Banking Ombudsman complaints and consumer court cases.
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
                    <strong>Days 1-2: First Call</strong> - Free consultation. Tell us about all cards, property or other usage, outstanding amounts. We explain process, savings, timeline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 3-8: Documentation</strong> - Share card statements, ID, salary slips, property documents (if relevant), hardship details. We build strong case.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 8-12: Stop Harassment</strong> - Legal notices to all banks. Recovery calls stop within 5-7 days. Peace while we negotiate.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 2-7: Negotiation</strong> - Our Haryana team contacts banks. Present hardship case. Negotiate 40-75% reductions. Coordinate timing.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 7-9: Agreements</strong> - Banks send offers. We review legally. Verify terms. Then you pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 9-11: Payment</strong> - Arrange money (savings, family, PF). Pay banks. Keep receipts.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 11-15: Documents</strong> - Banks send NOC within 30 days. We follow up. Collect all documents.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 50-90 days for Haryana cases. Much better than years of EMI trap.
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
                  Real Case: Faridabad Professional Saved 57%
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
                    <strong>The Card Holder:</strong> Amit K., age 33, works in corporate job in Gurgaon, lives in Faridabad. Earning 18 lakhs annually. Had 4 credit cards: HDFC 2.2 lakhs, ICICI 1.8 lakhs, Axis 1.6 lakhs, SBI 1.3 lakhs. Total outstanding 6.9 lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How Debt Happened:</strong> Amit invested in under-construction flat in Faridabad. Used 5 lakhs from credit cards for booking amount. Property supposed to deliver in 3 years. Also used cards for car down payment (1.5 lakhs) and regular lifestyle expenses. Total 6.9 lakhs across 4 cards. Paying 42,000 monthly in card EMIs plus car loan EMI 14,000. Total 56,000 just EMIs. Manageable on 1.5 lakh monthly salary.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Project Delay Crisis:</strong> After 2.5 years, property only 50% complete. Builder saying will take 2 more years minimum. Been paying card EMIs for 2.5 years. Already paid 12.6 lakhs (42,000 x 30 months) on 6.9 lakh card debt. Still owe 3.8 lakhs due to interest. Property nowhere near completion.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Harassment:</strong> Started paying minimum on cards to reduce burden. Cards went overdue. Recovery calls 20+ daily. Very stressful. Cannot even sell property because under construction.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Found Us:</strong> Contacted us September 2023. We sent legal notices. Harassment stopped. Built case with property documents showing delays, payment receipts showing years of regular payments.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement Success:</strong> Negotiated with all banks. Final settlements: HDFC at 42% (92,400), ICICI at 44% (79,200), Axis at 41% (65,600), SBI at 43% (55,900). Total settlement 2.93 lakhs for 6.9 lakh debt. Saved 3.97 lakhs (57% reduction).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How He Paid:</strong> Amit borrowed 1.6 lakhs from parents, 90,000 from brother, withdrew 43,000 from PF. Total 2.93 lakhs. Paid all banks November 2023. All cards closed. NOCs received January 2024.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Life After:</strong> Amit card-free. Still waiting for property but no EMI burden. His words: "Using credit cards for property seemed smart. But construction delays made it nightmare. CredSettle saved me 4 lakhs. Now just waiting for property without debt stress."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> September 2023 first call, September-November negotiation, November 2023 payment, January 2024 documents. Total: 4 months.
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
                    Drowning in credit card debt in Gurgaon, Faridabad or anywhere in Haryana? Multiple cards, property investment stuck, job challenges, recovery harassment? You do not have to suffer alone. Settlement is completely legal. RBI allows it. Banks do it daily.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Credit card debt destroys peace. Phone rings constantly. Cannot focus at work. Family worried. Every day you delay, interest keeps adding. 3.5% monthly interest means debt grows every month.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Act today:</strong> Free confidential consultation. No obligations. Just honest assessment. Our Haryana experts will show exactly how much you can save. We have helped 4,800+ Haryana families escape credit card trap. You can be next.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Do not let credit card debt ruin your life. With our legal team and proven track record, you can close all cards legally and start fresh.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Gurgaon, Faridabad, Panipat or any Haryana city. Whether 2 cards or 5 cards, 50,000 debt or 8 lakh debt, legal solution exists.
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
                title="Credit Card Settlement in Haryana"
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
                      Join 4,800+ Haryana families debt-free. Multiple cards, property debt, corporate challenges, all welcome. Free consultation, fast harassment stop.
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



