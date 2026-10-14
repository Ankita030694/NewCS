'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function UttarPradeshPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'up-cc-settlement', text: 'Credit Card closure in Uttar Pradesh', level: 2 },
    { id: 'education-family-culture', text: 'UP Family and Education debts Culture', level: 2 },
    { id: 'education-expense-trap', text: 'The Education and Family Expense Trap', level: 2 },
    { id: 'up-challenges', text: 'Six Credit Card Debt Patterns in UP', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles UP Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our closure Strategy for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Settling Multiple Credit Cards Together', level: 2 },
    { id: 'up-cities', text: 'Lucknow Kanpur Noida Agra Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Card closure', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card threats', level: 2 },
    { id: 'settlement-steps', text: 'Complete steps Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Lucknow Government Employee Saved 56%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Uttar Pradesh Credit Card closure FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Uttar Pradesh?',
      answer: 'Yes. Fully legal in UP and across India. RBI recognizes closure as valid debt relief for credit cards. Banks settle closures regularly. Your right to settle is protected under banking rules.'
    },
    {
      question: 'Can government employees settle credit card debt?',
      answer: 'Yes. Many UP government employees have credit card debt from children education. Family debts. Medical expenses. We handle these cases with income proof and hardship proof. Banks understand government employee case. closure is fully legal for government employees.'
    },
    {
      question: 'How does education expense create card debt trap?',
      answer: 'Children engineering. Medical. MBA colleges cost 5-20 lakhs. Education loan covers tuition only. Use credit cards for hostel fees. Books. Laptop. Coaching. Entrance exam fees. Total 2-5 lakhs on cards. payment burden falls on parents salary which is already stretched. closure helps.'
    },
    {
      question: 'How much can I save on credit card settlement?',
      answer: 'UP clients typically save 40-75% on credit card debt. Our state average is 54% reduction. Depends on overdue period. Number of cards. Total amount. hardship proof.'
    },
    {
      question: 'Will settlement stop credit card collection calls?',
      answer: 'Yes. Within 5-7 days. We send legal notices to all banks citing RBI Fair Practices Code. Claims calls. WhatsApp messages. Emails stop fast. If any bank violates. We file Banking RBI officer complaint.'
    },
    {
      question: 'What happens to my credit score after settlement?',
      answer: 'Score drops initially (already dropped if cards overdue). Settled status stays 7 years but impact reduces over time. After 18-24 months of no new defaults plus small secured credit. Score recovers to 650-700 range.'
    },
    {
      question: 'Can I settle multiple credit cards at once?',
      answer: 'Yes. Most UP clients have 3-5 credit cards. We handle all cards together with coordinated strategy. Single talks timeline. One legal process. All cards closed simultaneously.'
    },
    {
      question: 'How long does credit card settlement take?',
      answer: 'Typically 50-90 days from first call to final closure in UP. Lucknow. Noida cases sometimes faster. Multiple card cases take slightly longer but still much better than years of payments.'
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
                alt="Credit Card Settlement Uttar Pradesh"
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
                        Credit Card Settlement in Lucknow<br />
                        <span className="text-blue-200">&amp; Uttar Pradesh</span>
                    </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              > Stuck with credit card debt in Lucknow. Kanpur. Noida or anywhere in Uttar Pradesh? Multiple cards. Education expenses. Family debts. Medical bills. Rates piling up? CredSettle helps you settle credit card debt by law. Reduce unpaid by 40-75% through RBI-compliant talks. Stop calls calls within 7 days. Over 6,200 UP families became debt-free from credit card burden. </p>
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
              
              <section id="up-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Credit Card Settlement in Uttar Pradesh
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Credit cards fill funding gaps for UP families coping with education costs. Weddings. Medical bills and firm slowdowns across Lucknow. Kanpur. Noida and Agra. Multiple cards plus 36-42% rates quickly snowball into unpayable dues. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Credit card closure</strong> is an RBI-recognised path to pay a reduced amount. End threats and close accounts. CredSettle has already delivered 6,200+ UP closures with average savings around 54% and complete legal papers. </p>
                </div>
              </section>

              <section id="education-family-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  UP Family and Education Obligation Culture
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> UP’s joint families stretch incomes across education. Weddings and healthcare. Government employees and MSME owners often swipe 3-5 cards to cover hostel fees. Medical deposits or festival debts. Only to watch minimum dues exceed their salary. </p>
                  <p style={{ marginBottom: '16px' }}> We accept these debts as genuine and turn them into a structured hardship case. Proving why closure-not endless minimum payments-is the lawful exit. </p>
                </div>
              </section>

              <section id="education-expense-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  The Education and Family Expense Trap
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Education loans rarely cover hostel fees. Devices or coaching. Parents bridge the gap with cards. within two academic years the combined dues can cross ₹7-8 lakhs while salaries remain fixed. </p>
                  <p style={{ marginBottom: '16px' }}> We convert those expenses into a documented hardship file. Helping families settle for roughly 45% of unpaid so children continue studying without daily calls calls. </p>
                </div>
              </section>

              <section id="up-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Credit Card Debt Patterns in UP
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>1.</strong> Education add-ons-hostel. Devices. Coaching-stack 2-5 lakhs per child on cards. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>2.</strong> Medical emergencies leave ₹3-8 lakhs unpaid while income drops. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>3.</strong> Family weddings create parallel card dues across siblings and parents. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>4.</strong> Joint families rely on one salary to support many households. so cards plug monthly gaps. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>5.</strong> Traders swipe cards for stock during slow seasons and struggle when sales lag. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>6.</strong> Fixed government salaries cannot meet ₹25k-40k monthly card EMIs for long. </p>
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
                  How CredSettle Handles UP Card Cases
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> We have resolved 6,200+ UP credit card matters with average savings of 54%. Partnering with every major bank and NBFC. </p>
                  <p style={{ marginBottom: '16px' }}> Lucknow-based legal teams keep each case RBI-compliant while addressing family debts. Fixed salaries and MSME cash cycles. </p>

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
                    > Our closure Strategy for Card Debt </h3>
                    <p style={{ marginBottom: '16px' }}> <strong>Step 1:</strong> Map every card and hardship trigger during a free consult. <strong>Step 2:</strong> Legal notices silence calls within a week. <strong>Step 3:</strong> We package salary slips. Education bills or medical records to prove stress. <strong>Step 4:</strong> All banks settle together. Yielding 40-75% reductions and a credit rebuild plan. </p>
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
                    <p style={{ marginBottom: '16px' }}> We enforce RBI Master Directions-written offers. Clear closure terms. 30-day papers delivery and accurate desk updates. </p>
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
                  <p style={{ marginBottom: '16px' }}> Most households carry four cards totaling ₹4-6 lakhs. Tackling banks one by one drags the process for months. </p>
                  <p style={{ marginBottom: '16px' }}> We bundle every card into one talks window so offers. Payments and closures happen together. </p>
                </div>
              </section>

              <section id="up-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Lucknow Kanpur Noida Agra Credit Card Debt
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Lucknow & Kanpur:</strong> Government employees and industrial traders lean on cards for education and working capital. so we tailor talks to salary slips and export cycles. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Noida. Ghaziabad. Agra & Varanasi:</strong> IT hubs and tourism cities follow different cash rhythms. we match offers to those timelines while covering every remaining district through local partners. </p>
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
                  <p style={{ marginBottom: '16px' }}> <strong>1.</strong> Save 40-75% on dues. With state averages near 54%. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>2.</strong> Redirect income back to education. Healthcare and essentials instead of minimum payments. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>3.</strong> Stop calls calls within a week through RBI-backed notices. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>4.</strong> Settle every card in one coordinated timeline with airtight proof. </p>
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
                  <p style={{ marginBottom: '16px' }}> <strong>Fair practices:</strong> Collectors must stay within RBI’s time and conduct limits. violations trigger our RBI officer complaints. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Civil matter:</strong> Credit card defaults are not penal offences. so police threats hold no weight. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>talks rights:</strong> Genuine hardship requires lenders to discuss closure. we secure written terms plus 30-day papers delivery. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Escalations:</strong> Consumer forums and local police remain on standby if threats persists. </p>
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
                  <p style={{ marginBottom: '16px' }}> <strong>Days 1-7:</strong> Consultation. Proof and legal notices that stop calls. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 2-6:</strong> talks with every bank based on hardship proof. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 6-9:</strong> Offers finalised. Payments scheduled and receipts collected. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 9-12:</strong> NOCs arrive. Bureaus update and your credit rebuild plan begins. </p>
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
                  Real Case: Lucknow Government Employee Saved 56%
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>The card holder:</strong> Rajesh. A Lucknow government teacher. Owed ₹5.4 lakhs across four cards after funding two children’s experts courses and his father’s medical care. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Our response:</strong> Legal notices protected his workplace. education plus medical bills built a strong hardship file that drove closures between 43% and 46%. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Outcome:</strong> Rajesh closed everything for ₹2.39 lakhs. Saved ₹3.01 lakhs and received NOCs within four months. All while keeping his children’s studies on track. </p>
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
                  <p style={{ marginBottom: '16px' }}> Credit card pressure across Lucknow. Kanpur. Noida or Agra is solvable-closure is legal. Fast and already proven for 6,200+ UP families. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Book a free consultation:</strong> We tailor a 40-75% savings plan around your education. Medical or family commitments and close every card with full proof. </p>
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
                title="Credit Card Settlement in Uttar Pradesh"
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
                    > Join 6,200+ UP families debt-free. Multiple cards. Education expenses. Family debts. All welcome. Free consultation. Fast threats stop. </p>
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

