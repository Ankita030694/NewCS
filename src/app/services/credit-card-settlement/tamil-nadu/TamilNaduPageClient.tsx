'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function TamilNaduPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'tamilnadu-cc-settlement', text: 'Credit Card Settlement in Tamil Nadu', level: 2 },
    { id: 'chennai-card-culture', text: 'Chennai Auto and IT Sector Card Usage', level: 2 },
    { id: 'vehicle-emi-trap', text: 'The Vehicle Purchase EMI Trap', level: 2 },
    { id: 'tamilnadu-challenges', text: 'Six Credit Card Debt Patterns in Tamil Nadu', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Tamil Nadu Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Approach for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Settling Multiple Credit Cards Together', level: 2 },
    { id: 'tamilnadu-cities', text: 'Chennai Coimbatore Madurai Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Card Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Process Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Chennai Auto Professional Saved 59%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Tamil Nadu Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Tamil Nadu?',
      answer: 'Yes, completely legal in Tamil Nadu and across India. RBI recognizes settlement as valid debt resolution for credit cards. Banks negotiate settlements regularly. Your right to negotiate is protected under banking regulations.'
    },
    {
      question: 'Can I settle multiple credit cards at once?',
      answer: 'Yes. Most Chennai clients have 3-5 credit cards (HDFC, ICICI, SBI, Axis, Citi, etc). We handle all cards together with coordinated strategy. Single negotiation timeline, one legal process, all cards closed simultaneously. Better than handling each card separately.'
    },
    {
      question: 'How does vehicle purchase on cards create debt trap?',
      answer: 'Many people use credit cards for bike or car down payment (2-4 lakhs). Then have vehicle loan EMI 12,000 plus credit card EMI 35,000. Total 47,000 just for vehicle. Add regular expenses, becomes impossible to manage. Cards go overdue. Settlement helps close card debt.'
    },
    {
      question: 'How much can I save on credit card settlement?',
      answer: 'Tamil Nadu clients typically save 40-75% on credit card debt. Our state average is 55% reduction. Depends on overdue period, number of cards, total amount. Higher debt usually gets better percentage reduction.'
    },
    {
      question: 'Will settlement stop credit card collection calls?',
      answer: 'Yes, within 5-7 days. We send legal notices to all banks citing RBI Fair Practices Code. Recovery calls, WhatsApp messages, emails stop immediately. If any bank violates after notice, we file Banking Ombudsman complaint. Very effective.'
    },
    {
      question: 'What happens to my credit score after settlement?',
      answer: 'Score drops initially (already dropped if cards overdue). Settled status stays 7 years but impact reduces over time. After 18-24 months of no new defaults plus small secured credit (FD-backed card), score recovers to 650-700 range.'
    },
    {
      question: 'Can auto industry employees settle credit card debt?',
      answer: 'Yes. Many auto sector employees faced salary cuts or job loss recently. Had credit card EMIs based on old higher salary. When income reduced, could not maintain payments. We handle these cases with income reduction documentation as hardship proof.'
    },
    {
      question: 'How long does credit card settlement take?',
      answer: 'Typically 50-90 days from first call to final closure in Tamil Nadu. Chennai cases sometimes faster because many banks have offices here. Multiple card cases take slightly longer but still much better than years of EMI payments.'
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
                alt="Credit Card Settlement Tamil Nadu"
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
                Credit Card Settlement Chennai Tamil Nadu - Break Free From Auto Industry Debt
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
                Stuck with credit card debt in Chennai, Coimbatore or anywhere in Tamil Nadu? Multiple cards, vehicle EMIs, auto sector challenges, interest piling up? CredSettle helps you settle credit card debt legally. Reduce outstanding by 40-75% through RBI-compliant negotiation. Stop collection calls within 7 days. Over 5,900 Tamil Nadu families became debt-free from credit card burden.
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
              
              <section id="tamilnadu-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Credit Card Settlement in Tamil Nadu
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
                    Tamil Nadu, home to Chennai auto industry hub and growing IT sector, has significant credit card usage across Chennai, Coimbatore, Madurai and other cities. As of 2024, Tamil Nadu accounts for substantial credit card debt concentration especially in manufacturing and auto sectors. Professionals earning 6-25 lakhs annually carry 3-5 credit cards on average (HDFC, ICICI, SBI, Axis, Citi). Easy approvals, vehicle purchases on cards, family expenses and high interest rates (36-42% annually) create debt trap affecting many families.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit card settlement</strong> means negotiating with banks to pay reduced lump sum amounts instead of full outstanding. RBI recognizes this as legal debt resolution. Banks have dedicated credit card NPA divisions handling settlements daily. This is not loan waiver. You pay what you can afford, bank accepts it as full and final, all legal.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled credit card debt for over 5,900 Tamil Nadu clients across all regions. Our Tamil Nadu clients typically save 40-75% on credit card outstanding (state average: 55% reduction). Every settlement follows RBI rules, stops harassment within 7 days, gets proper legal documentation, and permanently closes all cards.
                  </p>
                </div>
              </section>

              <section id="chennai-card-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Chennai Auto and IT Sector Card Usage
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
                    Chennai creates unique credit card usage pattern shaped by auto industry (Hyundai, Ford, Renault, suppliers), IT sector (TCS, Infosys, Wipro, CTS), and traditional business community. Mix of manufacturing workers, IT professionals, and business owners. Credit cards used for vehicle purchases, family needs, medical expenses, home improvements.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Auto sector impact:</strong> Chennai is India's Detroit. Thousands work in auto companies and supplier firms. Good salaries 8-20 lakhs. Got multiple credit cards during boom years. Used cards for two-wheeler down payment, car down payment, home appliances. Then auto sector slowdown happened. Companies cut overtime pay, reduced bonuses, some laid off workers. Income reduced but credit card EMIs kept running. Many could not maintain payments. Cards went overdue.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Vehicle purchase on cards:</strong> Chennai people love vehicles. Use credit cards for down payment. Two-wheeler down payment 15,000-30,000 on cards. Car down payment 1-2 lakhs on cards (across multiple cards). Then have vehicle loan EMI 12,000 monthly plus credit card EMI 35,000 monthly. Total 47,000 just for vehicle. Add rent, food, school fees. Salary 60,000-80,000 cannot support this. Cards default within year.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Family obligation spending:</strong> Tamil Nadu has strong family culture. Use credit cards for family weddings, medical emergencies, education expenses, gold purchases during festivals. Each occasion adds 50,000-2 lakhs to cards. Multiple occasions per year. Debt builds up. Income does not grow as fast. Cards become burden.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>IT sector patterns:</strong> Chennai IT professionals in Guindy, Porur, OMR. Good salaries 10-30 lakhs. Got 4-5 cards easily. Used for online shopping, gadgets, travel, dining. Living expenses in Chennai. Each looked affordable. Total debt 4-8 lakhs. Job switches, project bench time, company closures create income gaps. EMIs become difficult. Need settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We understand Tamil Nadu spending patterns completely. We know auto sector challenges, family obligations are real. But when debt becomes unmanageable, settlement provides legal exit. We have helped thousands across Tamil Nadu.
                  </p>
                </div>
              </section>

              <section id="vehicle-emi-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  The Vehicle Purchase EMI Trap
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
                    Vehicle purchase on credit cards is common trap in Tamil Nadu. Here is how it destroys finances:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real example from Chennai client:</strong> Working in auto supplier company, earning 10 lakhs annually (83,000 monthly). Had 4 credit cards. Decided to buy car. Car cost 8 lakhs. Bank offered vehicle loan with 20% down payment (1.6 lakhs). Did not have 1.6 lakhs cash. Used 3 credit cards to withdraw cash advance and balance transfer. Arranged 1.6 lakhs down payment. Got vehicle loan for remaining 6.4 lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The debt trap begins:</strong> Vehicle loan EMI 12,500 monthly for 5 years. Credit card debt 1.6 lakhs needs repayment. Paying 35,000 monthly on cards (minimum plus some extra). Total vehicle related payment 47,500 monthly. Salary 83,000, rent 12,000, leaves 71,000. After vehicle payments, only 23,500 for food, petrol, insurance, family needs. Very tight.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Crisis hits:</strong> Company reduced overtime work. Monthly salary dropped to 68,000. Now after rent, only 56,000 left. Cannot pay 47,500 for vehicle. Started paying minimum on credit cards. Card debt started growing. After 8 months, credit card outstanding grew to 2.1 lakhs from original 1.6 lakhs due to interest. Still paying vehicle loan EMI. Still overdue on cards.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why this is common:</strong> Vehicle salesmen push this. "Sir, down payment is just 1.6 lakhs. You have 4 credit cards with 5 lakh total limit. Use cards for down payment. EMI will be manageable." Sounds logical at showroom. Reality at home different. Vehicle loan EMI plus card EMI plus petrol plus maintenance becomes too much.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Two-wheeler same trap:</strong> Even bike purchase on cards creates issues. Bike costs 1.2 lakhs. Down payment 25,000 on card. Bike EMI 3,500. Card minimum payment 2,000. Looks small. But across 3-4 such purchases, adds up. Plus insurance, petrol, maintenance. Becomes burden on 50,000-60,000 salary.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement helps:</strong> We negotiate card debt settlement. 2.1 lakh card debt settles for 90,000-1 lakh. Saves 1.1-1.2 lakhs. Can focus on vehicle loan EMI. Cards closed. No more double burden of vehicle loan plus card EMI.
                  </p>
                </div>
              </section>

              <section id="tamilnadu-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Credit Card Debt Patterns in Tamil Nadu
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
                    <strong>1. Auto Sector Job Loss:</strong> Chennai auto industry faced slowdowns. Companies laid off workers or cut salaries 20-30%. People had credit card EMIs based on old full salary. When income reduced or stopped, could not maintain payments. Cards went overdue. We have settled 1,600+ auto sector related card cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Vehicle Down Payment Debt:</strong> Used credit cards for two-wheeler or car down payment. Now paying vehicle loan EMI plus credit card EMI. Double burden too much on salary. One defaults, usually cards go first. We settle card debt so they can keep vehicle and pay vehicle loan.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Medical Emergency Expenses:</strong> Serious illness in family. Chennai hospitals expensive. Bills 3-8 lakhs. Insurance does not cover full amount. Use credit cards to pay hospital. Then cannot repay cards due to ongoing medical expenses or income loss during treatment period. We settle with medical documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Family Wedding Expenses:</strong> Tamil weddings elaborate affairs. Venue, catering, jewelry, clothes for entire family, gifts, ceremonies. Total 6-12 lakhs. Family members use multiple credit cards. After wedding, large debt but no extra income. Cards go overdue within months. We settle using wedding expense documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Business Failure on Personal Cards:</strong> Small business owners in Coimbatore, Madurai use personal credit cards for business expenses. Inventory purchase, supplier payments, shop rent during slow months. Business struggles. Cannot repay personal cards from business income. Personal salary alone cannot cover card EMIs. Need settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Education Loan Plus Card Debt:</strong> Children higher education in engineering, medical colleges. Education loan taken. But full expenses not covered. Use credit cards for hostel fees, exam fees, books, laptop. Graduate but starting salary low. Paying education loan EMI plus credit card EMI very difficult. Parents need card debt settlement.
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
                  How CredSettle Handles Tamil Nadu Card Cases
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
                    We have handled 5,900+ credit card settlements across Tamil Nadu in last four years. Our Tamil Nadu clients save an average of 55% on their credit card debt. We work with all major banks (HDFC, ICICI, SBI, Axis, Citi, Standard Chartered, HSBC, American Express, Kotak, Yes Bank) and NBFCs (Bajaj Finserv, HDB Financial).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Tamil Nadu advantage:</strong> We are registered legal services company following every RBI rule. We understand auto sector challenges, family obligation spending, vehicle purchase patterns. We have local legal partners in Chennai and Coimbatore who know Tamil Nadu banking systems and consumer courts.
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
                      <strong>Step 1: Complete Card Analysis</strong> - List all cards, outstanding amounts, vehicle EMI details, overdue months. Calculate total exposure. Free consultation. <strong>Step 2: Stop Harassment Immediately</strong> - Legal notices to all banks citing RBI Fair Practices Code. Collection calls stop within 5-7 days. <strong>Step 3: Build Strong Case File</strong> - Gather salary slips, bank statements, hardship documents (job loss letter, medical bills, business records, salary cut proof). <strong>Step 4: Present Financial Situation</strong> - Show banks your genuine inability to pay full amount with proper documentation. Present income reduction, expenses, family obligations. <strong>Step 5: Multi-Card Negotiation</strong> - Handle all cards together with coordinated approach. Negotiate 40-75% reductions. <strong>Step 6: Credit Rebuilding Guidance</strong> - After settlement, guide on secured credit cards, score rebuilding, future credit management.
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
                      Every settlement follows RBI Master Directions on Credit Card Operations. You get: (1) Written settlement letter from bank on letterhead, (2) Clear statement that settled amount is full and final with no more claims, (3) NOC after payment, (4) Credit bureau reporting as "settled", (5) All documents within 30 days per RBI timeline. Our Tamil Nadu lawyers ensure complete compliance.
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
                    Most Tamil Nadu clients have debt across 3-5 credit cards. Average Chennai professional we help has: HDFC card 1.4 lakhs, ICICI card 1.6 lakhs, SBI card 1.1 lakhs, Axis card 90,000. Total 5.1 lakhs across 4 cards. Handling each bank separately is very difficult. Different recovery agents, different timelines, very confusing.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our coordinated approach:</strong> We treat all cards as single debt portfolio. Build one hardship file. Contact all banks same week. Present identical financial situation. Negotiate similar percentages. Coordinate so all settlements close together. You arrange total money once. Pay all banks. All cards closed simultaneously.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why coordinated works:</strong> When bank A knows you are settling with banks B, C, D also, they are more willing to accept reduced payment. They do not want to be only bank still chasing you after others settled. Coordinated settlement makes sense for everyone.
                  </p>
                </div>
              </section>

              <section id="tamilnadu-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Chennai Coimbatore Madurai Credit Card Debt
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
                    <strong>Chennai:</strong> Auto industry hub, IT sector, manufacturing. Guindy, Porur, OMR, Ambattur. Mix of auto workers, IT professionals, business owners. Card usage for vehicles, lifestyle, family needs. Average 4-5 cards per person, 4-7 lakhs total debt. We have handled 3,400+ Chennai cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Coimbatore:</strong> Textile, manufacturing, small businesses. Commercial hub. Business community, professionals. Card usage for business and personal needs. Average 3-4 cards per person, 2-5 lakhs total debt. We have settled 1,500+ Coimbatore cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Madurai and other cities:</strong> Mix of business, professionals, salaried class. Card usage for family weddings, medical needs, education. Average 2-4 cards per person, 1.5-4 lakhs total debt. We have handled 1,000+ cases in these cities.
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
                    <strong>1. Save 40-75% on Credit Card Debt:</strong> Tamil Nadu clients save 55% on average. 5 lakh card debt becomes 2.25 lakh settlement. Save 2.75 lakhs. Much better than paying EMIs for years.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Break Vehicle EMI Plus Card EMI Trap:</strong> No more double burden of vehicle loan EMI plus card EMI. Settlement closes cards. Focus on vehicle loan only.
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
                    Know your rights as Tamil Nadu credit card holder. RBI has specific rules protecting you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices for Credit Cards:</strong> Banks cannot call before 8am or after 7pm. Cannot call more than 3 times per week. Cannot use abusive language. Cannot contact office or family without permission. Cannot visit home repeatedly. Break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>No Criminal Case for Card Debt:</strong> Credit card debt is civil matter, not criminal. Banks cannot threaten police case. Regular card usage and inability to pay is purely civil debt issue.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> You have full right to negotiate and settle. Bank cannot force full payment if genuine hardship. RBI encourages settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Consumer Court Access:</strong> If bank violated fair practices, file case in Tamil Nadu Consumer Court. Chennai, Coimbatore consumer forums handle banking complaints. Banks often settle quickly to avoid court.
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
                    <strong>Days 1-2: First Call</strong> - Free 30-40 minute consultation. Tell us about all cards, outstanding amounts, vehicle EMIs, harassment level. We explain settlement process, realistic savings, timeline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 3-8: Documentation</strong> - Share all card statements, ID proof, salary slips, hardship details (job loss letter, medical bills, salary reduction proof). We build strong case file.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 8-12: Stop Harassment</strong> - Legal notices to all banks citing RBI rules. Recovery calls stop within 5-7 days. You get peace while we negotiate.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 2-7: Negotiation</strong> - Our Tamil Nadu team contacts NPA divisions of all banks. Present hardship case. Show financial situation. Negotiate 40-75% reductions. Coordinate timing across all banks.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 7-9: Settlement Agreements</strong> - All banks send formal offers. We review legally. Verify terms clear. Only after verification, you pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 9-11: Payment</strong> - You arrange settlement money (savings, family help, PF withdrawal). Pay each bank. Keep all receipts.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 11-15: Document Collection</strong> - Banks have 30 days to send NOC. We follow up aggressively. Collect all documents. Verify credit bureau updates.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Post-Settlement: Rebuilding</strong> - We guide on secured credit card after 18 months. Show how to rebuild score. Advise on future credit management.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 50-90 days for Tamil Nadu cases. Much better than years stuck in EMI trap.
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
                  Real Case: Chennai Auto Professional Saved 59%
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
                    <strong>The Card Holder:</strong> Suresh K., age 35, quality inspector at auto component supplier in Ambattur, Chennai. Earning 12 lakhs annually (1 lakh monthly). Had 4 credit cards: HDFC 1.8 lakhs, ICICI 1.5 lakhs, SBI 1.3 lakhs, Axis 1.1 lakhs. Total outstanding 5.7 lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How Debt Happened:</strong> Suresh worked in auto sector for 10 years. Stable job, good salary. Got 4 credit cards over years. Used for everything. Bought car, used cards for 1.8 lakh down payment. Home renovation 1.2 lakhs on cards. Sister marriage 1.5 lakhs on cards. Regular shopping and expenses another 1.2 lakhs. Total 5.7 lakhs across 4 cards. Monthly card payment 38,000 (mix of EMIs and minimums). Plus car loan EMI 14,000. Total 52,000 just for EMIs. Salary 1 lakh, rent 15,000. Left with 33,000 for food, petrol, family expenses. Very tight but managing.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Auto Sector Crisis:</strong> His company lost major contract. Had to cut costs. Reduced overtime work (his income included overtime pay 20,000-25,000 monthly). Salary dropped to 75,000 monthly. Cannot pay 52,000 EMI on 75,000 salary after rent. Started paying only minimums on cards. Within 6 months, cards went overdue. Outstanding grew to 6.2 lakhs with interest and late fees.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Harassment Started:</strong> Recovery calls 20+ daily. Threatening tone. Called his office main line twice. Very embarrassing in front of colleagues. Stress affecting work and health. Fear of losing job made situation worse.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Found Us:</strong> Contacted us June 2023. We sent legal notices to all 4 banks immediately. Harassment stopped within 6 days. Built case file with salary reduction documentation, company overtime cancellation letter, family expense details.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement Success:</strong> Negotiated 2.5 months with all banks. Final settlements: HDFC at 40% (72,000), ICICI at 42% (63,000), SBI at 41% (53,300), Axis at 39% (42,900). Total settlement 2.31 lakhs for 5.7 lakh debt. Saved 3.39 lakhs (59% reduction).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How He Paid:</strong> Suresh borrowed 1.2 lakhs from parents, 70,000 from brother, withdrew 41,000 from PF. Total 2.31 lakhs. Paid all banks September 2023. All 4 cards closed. NOCs received by November 2023.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Life After Settlement:</strong> Suresh is card-free now. Still paying car loan EMI but no card burden. Repaid family over 20 months. His words: "Auto sector problems made me lose income but credit cards made it impossible. CredSettle saved me 3.4 lakhs and my peace of mind. Those recovery calls at office were killing me. Now I can work without fear."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> June 2023 first call, June-August negotiation, September 2023 payment, November 2023 all documents. Total: 5 months.
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
                    Drowning in credit card debt in Chennai, Coimbatore or anywhere in Tamil Nadu? Multiple cards, vehicle EMI burden, auto sector challenges, recovery harassment? You do not have to suffer alone. Settlement is completely legal. RBI allows it. Banks do it daily.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Credit card debt destroys peace. Phone rings 25 times daily with collection calls. Cannot focus at work. Family worried. Every day you delay, interest keeps adding. 3.5% monthly interest means debt grows every month.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Act today:</strong> Free confidential consultation. No obligations. Just honest assessment and clear options. Our Tamil Nadu experts will show exactly how much you can save, how quickly harassment stops. We have helped 5,900+ Tamil Nadu families escape credit card trap. You can be next.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Do not let credit card debt ruin your life. With our legal team, Tamil Nadu banking knowledge and proven track record, you can close all cards legally and start fresh.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Chennai, Coimbatore, Madurai or any Tamil Nadu city. Whether 2 cards or 5 cards, 50,000 debt or 8 lakh debt, legal solution exists. We will help you find it.
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
                title="Credit Card Settlement in Tamil Nadu"
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
                      Join 5,900+ Tamil Nadu families debt-free. Multiple cards, vehicle EMIs, auto sector debt, all welcome. Free consultation, fast harassment stop.
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

