'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function AndhraPradeshPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'ap-cc-settlement', text: 'Credit Card closure in Andhra Pradesh', level: 2 },
    { id: 'ap-card-culture', text: 'Vizag Vijayawada Tirupati Card Spending Patterns', level: 2 },
    { id: 'emi-trap', text: 'The EMI Trap in Coastal Andhra', level: 2 },
    { id: 'ap-challenges', text: 'Six Credit Card Debt Triggers in Andhra', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Andhra Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our closure Strategy for Andhra Clients', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Managing Multiple Cards Together', level: 2 },
    { id: 'ap-cities', text: 'City Wise Credit Card Debt in Andhra', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of closure', level: 2 },
    { id: 'your-rights', text: 'Your Rights Against threats', level: 2 },
    { id: 'settlement-steps', text: 'Complete closure Timeline', level: 2 },
    { id: 'real-case', text: 'Real Story: Vizag Tech Lead Saved 59%', level: 2 },
    { id: 'start-today', text: "Start Your Andhra Credit Card closure Today", level: 2 },
    { id: 'faqs', text: 'Andhra Pradesh Credit Card closure FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Andhra Pradesh?',
      answer: 'Yes. RBI recognises credit card closure as lawful across India. Banks in Visakhapatnam. Vijayawada and every other Andhra district accept closure proposals when hardship is genuine. We ensure all papers meets RBI Master Directions.'
    },
    {
      question: 'How much can Andhra customers typically save?',
      answer: 'Most clients in Andhra Pradesh save 40-75% on unpaid card dues. Our current average reduction across the state is 55%. Longer overdue periods. Multiple cards and strong hardship proof usually bring deeper savings.'
    },
    {
      question: 'Will settlement stop recovery calls?',
      answer: 'Yes. Within 5-7 days of onboarding we send legal notices to each bank. Calls. WhatsApp messages and doorstep visits stop quickly. If any bank crosses limits after notice we escalate to the Banking RBI officer for Andhra region.'
    },
    {
      question: 'Do NRIs with cards at Andhra address qualify?',
      answer: 'Yes. Many Andhra families have relatives working abroad who left credit cards unpaid. We coordinate with local family members and handle closure with power of lawyer or consent letters where necessary.'
    },
    {
      question: 'How long does the entire settlement process take?',
      answer: 'Most Andhra cases finish in 50-90 days. Multi-card matters or cases involving NRI cards can stretch to 100 days. Still faster and cheaper than paying minimum dues for years.'
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
                alt="Credit Card Settlement Andhra Pradesh"
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
                        Credit Card Settlement in Vizag,<br />
                        <span className="text-blue-200">Vijayawada &amp; Andhra Pradesh</span>
                    </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              > Visakhapatnam’s IT corridor. Vijayawada’s trading streets and Tirupati’s tourism economy all encourage easy credit card swipes. Salaried experts. Small-firm owners and NRIs from coastal Andhra often juggle four or five cards at once. When salary dips. Season slows or a family emergency hits. These cards pile up faster than savings. CredSettle has helped 3,900+ Andhra households cut card dues by 40-75%. Stop calls by law and close every card with RBI-compliant papers. </p>
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
              <section id="ap-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Credit Card Settlement in Andhra Pradesh
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Andhra Pradesh’s coastal belt. Port-based exports. IT parks and thriving education sector make credit cards extremely popular. People use them for gadgets. Travel. Firm inventory. Wedding functions and children education abroad. When EMIs outrun cash flow. Legal closure is the fastest. Safest way to regain control. </p>
                  <p style={{ marginBottom: '16px' }}> CredSettle operates with on-ground counsel in Visakhapatnam and Vijayawada. We know how banks allocate Andhra portfolios. which claims teams handle Vizag IT clients versus Vijayawada traders. which papers convince them fastest. That local insight drives higher reduction rate and quicker closures for our clients.</p>
                </div>
              </section>

              <section id="ap-card-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Vizag Vijayawada Tirupati Card Spending Patterns
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Visakhapatnam:</strong> IT and PSU employees upgrade phones. Laptops and two-wheelers every 18 months on EMI. Spend on cafés and weekend getaways. support parents in neighbouring districts. One salary covers two households. Pushing card limits quickly.</p>
                  <p style={{ marginBottom: '16px' }}> <strong>Vijayawada & Guntur:</strong> Traders stock inventory before festival season using cards expecting quick turnover. Any rain-affected season or logistics delay leaves those cards maxed out. Automobile dealers swipe for cover. Registration fees. Fuel expenses and office operations.</p>
                  <p style={{ marginBottom: '16px' }}> <strong>Tirupati & Rayalaseema towns:</strong> Tourism and hospitality have a six-month high season. During the lean period. Hoteliers. Cab drivers and souvenir shop owners keep salaries going via credit card cash withdrawals or EMI conversions.</p>
                  <p style={{ marginBottom: '16px' }}> <strong>Nellore. West Godavari and Krishna coast:</strong> Aquaculture farmers face export bans. Price crashes or climate disruptions. They use cards to pay feed manufacturers and labourers. When export wire transfers delay. Card dues soar.</p>
                </div>
              </section>

              <section id="emi-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  The EMI Trap in Coastal Andhra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> EMI festivals in Vizag and Vijayawada make it easy to buy everything on zero-cost options. Phone EMI (₹9,000) + bike EMI (₹8,000) + home interior EMI (₹11,000) + travel EMI (₹7,500) equals ₹35,500 per month before regular expenses. A small salary dip or emergency forces missed payments. Banks then slash grace period and add 3.5% monthly rates. Within six months unpaid grows by ₹1-1.5 lakhs without any new purchases.</p>
                  <p style={{ marginBottom: '16px' }}> closure cuts this spiral. Instead of balancing five EMIs you settle one reduced figure. Pay it and close all cards permanently.</p>
                </div>
              </section>

              <section id="ap-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Credit Card Debt Triggers in Andhra
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}><strong>1. IT Bench Periods:</strong> Salary cut 30-40% for months. Minimum payments rely on other cards.</p>
                  <p style={{ marginBottom: '16px' }}><strong>2. Aquaculture Losses:</strong> Export bans leave farmers with zero cash for card dues.</p>
                  <p style={{ marginBottom: '16px' }}><strong>3. Shipping Invoice Delays:</strong> Agents clear containers using cards while clients take months to reimburse.</p>
                  <p style={{ marginBottom: '16px' }}><strong>4. Tourism Off Seasons:</strong> firms run from March to June or October to January. During lean months they swipe cards for salaries and maintenance.</p>
                  <p style={{ marginBottom: '16px' }}><strong>5. Government Transfers:</strong> heads shifting cities maintain two households simultaneously using cards until allowances arrive.</p>
                  <p style={{ marginBottom: '16px' }}><strong>6. Medical Travel:</strong> Families take elders to Chennai/Hyderabad for treatment. Swipe cards for procedures and stay. Post-treatment. Salary cannot cover EMIs.</p>
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
                  How CredSettle Handles Andhra Cases
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Our Andhra closure desk combines legal notices. Talks expertise and papers support. Case managers map every credit card. Gather hardship proof and coordinate straight with bank teams in Visakhapatnam and Vijayawada to accelerate approvals.</p>

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
                    > Our closure Strategy for Andhra Clients </h3>
                    <p style={{ marginBottom: '16px' }}> <strong>Step 1:</strong> Map every card. EMI and overdue month. <strong>Step 2:</strong> Send RBI-backed notices that pause threats. <strong>Step 3:</strong> Compile evidence like bench emails. Aquaculture invoices or medical bills to prove hardship. <strong>Step 4:</strong> settle all banks together so offers land in one window. <strong>Step 5:</strong> Vet letters. Schedule discounted payments and collect acknowledgements. <strong>Step 6:</strong> Secure NOCs. Monitor CIBIL updates and coach you on rebuilding credit.</p>
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
                    <p style={{ marginBottom: '16px' }}> agents must call only between 8 am and 7 pm. Cannot threaten arrest and cannot speak to your employer without consent. After closure payment. Banks must issue NOCs within 30 days. We escalate to the Andhra Banking RBI officer if any lender disregards these safety.</p>
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
                  Managing Multiple Cards Together
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Andhra households usually juggle four to six cards across HDFC. SBI. ICICI. Axis. Kotak and RBL. We coordinate all lenders simultaneously so you prepare papers once. Receive similar reduction rate and close every account within the same month.</p>
                </div>
              </section>

              <section id="ap-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Andhra City Credit Card Snapshot
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}><strong>Visakhapatnam:</strong> IT. PSU and port employees carry ₹5-7 lakh across premium cards. bench periods are the main trigger.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Vijayawada & Guntur:</strong> Traders stock inventory ahead of festivals. rain-affected seasons leave cards maxed.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Tirupati & Rayalaseema:</strong> Tourism off-season pushes hoteliers and cab operators toward cash withdrawals and EMI conversions.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Nellore & West Godavari:</strong> Aquaculture disruptions force families to pay feed suppliers via cards until exports resume.</p>
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
                  Five Major Benefits of Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>1. Save 40-75% and close every card with legal proof.</p>
                  <p style={{ marginBottom: '16px' }}>2. Stop calls. WhatsApp spam and doorstep visits within days.</p>
                  <p style={{ marginBottom: '16px' }}>3. Finish in 50-90 days rather than paying minimums for years.</p>
                  <p style={{ marginBottom: '16px' }}>4. Coordinate all lenders with one Andhra-focused team.</p>
                  <p style={{ marginBottom: '16px' }}>5. Receive closure letters. NOCs and a credit rebuilding roadmap.</p>
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
                  Your Rights Against Harassment
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> RBI mandates respectful claims. Agents cannot threaten police cases. Use abusive language or discuss dues with neighbours or employers. If threats continues after our notice. We escalate with call recordings until lenders issue written apologies and halt improper contact.</p>
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
                  Complete Settlement Timeline
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}><strong>Day 1-3:</strong> Consultation. Hardship review and papers checklist.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Day 4-7:</strong> Legal notices dispatched. Threats drops sharply.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 2-6:</strong> talks with every bank and NBFC.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 6-8:</strong> Offers vetted. Payment plans finalised.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 8-10:</strong> Discounted payments executed. Acknowledgements collected.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 10-14:</strong> NOCs received. Credit report monitored.</p>
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
                  Real Story: Vizag Tech Lead Saved 59%
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> A 36-year-old IT tech lead from Vizag carried four cards totalling ₹6.8 lakh after a three-month bench period cut income by 45%. Parents' medical expenses added another ₹1 lakh and agents began calling his office.</p>
                  <p style={{ marginBottom: '16px' }}> We compiled bench letters. Hospital bills and dependent expenses. Closures between 34-42% reduced the payout to ₹2.8 lakh. Saving ₹4 lakh (59%). Threats stopped within a week. Cards closed in 68 days and all NOCs arrived within the next month.</p>
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
                  Start Your Andhra Credit Card Settlement Today
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Whether you are in Visakhapatnam. Vijayawada. Tirupati or any Andhra town. One talk starts the process. We analyse dues. Share savings estimates. List papers and assign a dedicated case manager. Consultation is free and there are no upfront fees-pay only after banks approve discounted closures and you receive legal closure.</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={faqs} title="Andhra Pradesh Credit Card Settlement FAQs" />

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
                      Break Free from Andhra Credit Card Debt
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    > Join 3,900+ Andhra households who already became debt-free with CredSettle. We manage multiple cards. Stop threats fast and deliver legal closure.</p>

                    <CTAButton>
                      Get Your Free Consultation Now
                    </CTAButton>
                  </div>
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
