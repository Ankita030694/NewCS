'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function AndhraPradeshPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'ap-cc-settlement', text: 'Credit Card Settlement in Andhra Pradesh', level: 2 },
    { id: 'ap-card-culture', text: 'Vizag Vijayawada Tirupati Card Spending Patterns', level: 2 },
    { id: 'emi-trap', text: 'The EMI Trap in Coastal Andhra', level: 2 },
    { id: 'ap-challenges', text: 'Six Credit Card Debt Triggers in Andhra', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Andhra Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Strategy for Andhra Clients', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Managing Multiple Cards Together', level: 2 },
    { id: 'ap-cities', text: 'City Wise Credit Card Debt in Andhra', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Rights Against Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Timeline', level: 2 },
    { id: 'real-case', text: 'Real Story: Vizag Tech Lead Saved 59%', level: 2 },
    { id: 'start-today', text: "Start Your Andhra Credit Card Settlement Today", level: 2 },
    { id: 'faqs', text: 'Andhra Pradesh Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Andhra Pradesh?',
      answer: 'Yes. RBI recognises credit card settlement as lawful across India. Banks in Visakhapatnam, Vijayawada and every other Andhra district accept settlement proposals when hardship is genuine. We ensure all paperwork meets RBI Master Directions.'
    },
    {
      question: 'How much can Andhra customers typically save?',
      answer: 'Most clients in Andhra Pradesh save 40-75% on outstanding card dues. Our current average reduction across the state is 55%. Longer overdue periods, multiple cards and strong hardship documentation usually bring deeper savings.'
    },
    {
      question: 'Will settlement stop recovery calls?',
      answer: 'Yes. Within 5-7 days of onboarding we send legal notices to each bank. Calls, WhatsApp messages and doorstep visits stop quickly. If any bank crosses limits after notice we escalate to the Banking Ombudsman for Andhra region.'
    },
    {
      question: 'Do NRIs with cards at Andhra address qualify?',
      answer: 'Yes. Many Andhra families have relatives working abroad who left credit cards unpaid. We coordinate with local family members and handle settlement with power of attorney or consent letters where necessary.'
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
                Credit Card Settlement Visakhapatnam Vijayawada Tirupati Andhra Pradesh
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
                Visakhapatnam’s IT corridor, Vijayawada’s trading streets and Tirupati’s tourism economy all encourage easy credit card swipes. Salaried professionals, small-business owners and NRIs from coastal Andhra often juggle four or five cards at once. When salary dips, season slows or a family emergency hits, these cards pile up faster than savings. CredSettle has helped 3,900+ Andhra households cut card dues by 40-75%, stop calls legally and close every card with RBI-compliant paperwork.
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
                  <p style={{ marginBottom: '16px' }}>
                    Andhra Pradesh’s coastal belt, port-based exports, IT parks and thriving education sector make credit cards extremely popular. People use them for gadgets, travel, business inventory, wedding functions and children education abroad. When EMIs outrun cash flow, legal settlement is the fastest, safest way to regain control.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle operates with on-ground advocates in Visakhapatnam and Vijayawada. We know how banks allocate Andhra portfolios, which recovery teams handle Vizag IT clients versus Vijayawada traders, and which documents convince them fastest. That local insight drives higher reduction percentages and quicker closures for our clients.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Visakhapatnam:</strong> IT and PSU employees upgrade phones, laptops and two-wheelers every 18 months on EMI, spend on cafés and weekend getaways, and support parents in neighbouring districts. One salary covers two households, pushing card limits quickly.</p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Vijayawada & Guntur:</strong> Traders stock inventory before festival season using cards expecting quick turnover. Any rain-affected season or logistics delay leaves those cards maxed out. Automobile dealers swipe for insurance, registration fees, fuel expenses and office operations.</p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Tirupati & Rayalaseema towns:</strong> Tourism and hospitality have a six-month high season. During the lean period, hoteliers, cab drivers and souvenir shop owners keep salaries going via credit card cash withdrawals or EMI conversions.</p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Nellore, West Godavari and Krishna coast:</strong> Aquaculture farmers face export bans, price crashes or climate disruptions. They use cards to pay feed manufacturers and labourers. When export remittances delay, card dues soar.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    EMI festivals in Vizag and Vijayawada make it easy to buy everything on zero-cost options. Phone EMI (₹9,000) + bike EMI (₹8,000) + home interior EMI (₹11,000) + travel EMI (₹7,500) equals ₹35,500 per month before regular expenses. A small salary dip or emergency forces missed payments. Banks then slash grace period and add 3.5% monthly interest. Within six months outstanding grows by ₹1-1.5 lakhs without any new purchases.</p>
                  <p style={{ marginBottom: '16px' }}>
                    Settlement cuts this spiral. Instead of balancing five EMIs you negotiate one reduced figure, pay it and close all cards permanently.</p>
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
                  <p style={{ marginBottom: '16px' }}><strong>4. Tourism Off Seasons:</strong> Businesses run from March to June or October to January. During lean months they swipe cards for salaries and maintenance.</p>
                  <p style={{ marginBottom: '16px' }}><strong>5. Government Transfers:</strong> Officers shifting cities maintain two households simultaneously using cards until allowances arrive.</p>
                  <p style={{ marginBottom: '16px' }}><strong>6. Medical Travel:</strong> Families take elders to Chennai/Hyderabad for treatment, swipe cards for procedures and stay. Post-treatment, salary cannot cover EMIs.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Our Andhra settlement desk combines legal notices, negotiation expertise and document support. Case managers map every credit card, gather hardship proof and coordinate directly with bank teams in Visakhapatnam and Vijayawada to accelerate approvals.</p>

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
                      Our Settlement Strategy for Andhra Clients
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1:</strong> Map every card, EMI and overdue month. <strong>Step 2:</strong> Send RBI-backed notices that pause harassment. <strong>Step 3:</strong> Compile evidence like bench emails, aquaculture invoices or medical bills to prove hardship. <strong>Step 4:</strong> Negotiate all banks together so offers land in one window. <strong>Step 5:</strong> Vet letters, schedule discounted payments and collect acknowledgements. <strong>Step 6:</strong> Secure NOCs, monitor CIBIL updates and coach you on rebuilding credit.</p>
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
                      Recovery agents must call only between 8 am and 7 pm, cannot threaten arrest and cannot speak to your employer without consent. After settlement payment, banks must issue NOCs within 30 days. We escalate to the Andhra Banking Ombudsman if any lender disregards these protections.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Andhra households usually juggle four to six cards across HDFC, SBI, ICICI, Axis, Kotak and RBL. We coordinate all lenders simultaneously so you prepare documents once, receive similar reduction percentages and close every account within the same month.</p>
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
                  <p style={{ marginBottom: '16px' }}><strong>Visakhapatnam:</strong> IT, PSU and port employees carry ₹5-7 lakh across premium cards; bench periods are the main trigger.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Vijayawada & Guntur:</strong> Traders stock inventory ahead of festivals; rain-affected seasons leave cards maxed.</p>
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
                  <p style={{ marginBottom: '16px' }}>2. Stop calls, WhatsApp spam and doorstep visits within days.</p>
                  <p style={{ marginBottom: '16px' }}>3. Finish in 50-90 days rather than paying minimums for years.</p>
                  <p style={{ marginBottom: '16px' }}>4. Coordinate all lenders with one Andhra-focused team.</p>
                  <p style={{ marginBottom: '16px' }}>5. Receive settlement letters, NOCs and a credit rebuilding roadmap.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    RBI mandates respectful recovery. Agents cannot threaten police cases, use abusive language or discuss dues with neighbours or employers. If harassment continues after our notice, we escalate with call recordings until lenders issue written apologies and halt improper contact.</p>
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
                  <p style={{ marginBottom: '16px' }}><strong>Day 1-3:</strong> Consultation, hardship review and document checklist.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Day 4-7:</strong> Legal notices dispatched, harassment drops sharply.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 2-6:</strong> Negotiations with every bank and NBFC.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 6-8:</strong> Offers vetted, payment plans finalised.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 8-10:</strong> Discounted payments executed, acknowledgements collected.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 10-14:</strong> NOCs received, credit report monitored.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    A 36-year-old IT tech lead from Vizag carried four cards totalling ₹6.8 lakh after a three-month bench period cut income by 45%. Parents' medical expenses added another ₹1 lakh and recovery agents began calling his office.</p>
                  <p style={{ marginBottom: '16px' }}>
                    We compiled bench letters, hospital bills and dependent expenses. Settlements between 34-42% reduced the payout to ₹2.8 lakh, saving ₹4 lakh (59%). Harassment stopped within a week, cards closed in 68 days and all NOCs arrived within the next month.</p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Whether you are in Visakhapatnam, Vijayawada, Tirupati or any Andhra town, one conversation starts the process. We analyse dues, share savings estimates, list documents and assign a dedicated case manager. Consultation is free and there are no upfront fees—pay only after banks approve discounted settlements and you receive legal closure.</p>
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
                    >
                      Join 3,900+ Andhra households who already became debt-free with CredSettle. We manage multiple cards, stop harassment fast and deliver legal closure.</p>

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
          </div>
        </section>
      </div>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}
