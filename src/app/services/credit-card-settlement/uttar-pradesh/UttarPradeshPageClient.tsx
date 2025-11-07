'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function UttarPradeshPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'up-cc-settlement', text: 'Credit Card Settlement in Uttar Pradesh', level: 2 },
    { id: 'education-family-culture', text: 'UP Family and Education Obligation Culture', level: 2 },
    { id: 'education-expense-trap', text: 'The Education and Family Expense Trap', level: 2 },
    { id: 'up-challenges', text: 'Six Credit Card Debt Patterns in UP', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles UP Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Strategy for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Settling Multiple Credit Cards Together', level: 2 },
    { id: 'up-cities', text: 'Lucknow Kanpur Noida Agra Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Major Benefits of Card Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Process Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Lucknow Government Employee Saved 56%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Uttar Pradesh Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Uttar Pradesh?',
      answer: 'Yes, completely legal in UP and across India. RBI recognizes settlement as valid debt resolution for credit cards. Banks negotiate settlements regularly. Your right to negotiate is protected under banking regulations.'
    },
    {
      question: 'Can government employees settle credit card debt?',
      answer: 'Yes. Many UP government employees have credit card debt from children education, family obligations, medical expenses. We handle these cases with income proof and hardship documentation. Banks understand government employee situation. Settlement is completely legal for government employees.'
    },
    {
      question: 'How does education expense create card debt trap?',
      answer: 'Children engineering, medical, MBA colleges cost 5-20 lakhs. Education loan covers tuition only. Use credit cards for hostel fees, books, laptop, coaching, entrance exam fees. Total 2-5 lakhs on cards. Repayment burden falls on parents salary which is already stretched. Settlement helps.'
    },
    {
      question: 'How much can I save on credit card settlement?',
      answer: 'UP clients typically save 40-75% on credit card debt. Our state average is 54% reduction. Depends on overdue period, number of cards, total amount, and hardship documentation.'
    },
    {
      question: 'Will settlement stop credit card collection calls?',
      answer: 'Yes, within 5-7 days. We send legal notices to all banks citing RBI Fair Practices Code. Recovery calls, WhatsApp messages, emails stop immediately. If any bank violates, we file Banking Ombudsman complaint.'
    },
    {
      question: 'What happens to my credit score after settlement?',
      answer: 'Score drops initially (already dropped if cards overdue). Settled status stays 7 years but impact reduces over time. After 18-24 months of no new defaults plus small secured credit, score recovers to 650-700 range.'
    },
    {
      question: 'Can I settle multiple credit cards at once?',
      answer: 'Yes. Most UP clients have 3-5 credit cards. We handle all cards together with coordinated strategy. Single negotiation timeline, one legal process, all cards closed simultaneously.'
    },
    {
      question: 'How long does credit card settlement take?',
      answer: 'Typically 50-90 days from first call to final closure in UP. Lucknow, Noida cases sometimes faster. Multiple card cases take slightly longer but still much better than years of payments.'
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
                Credit Card Settlement Lucknow Uttar Pradesh - Break Free From Family Obligation Debt
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
                Stuck with credit card debt in Lucknow, Kanpur, Noida or anywhere in Uttar Pradesh? Multiple cards, education expenses, family obligations, medical bills, interest piling up? CredSettle helps you settle credit card debt legally. Reduce outstanding by 40-75% through RBI-compliant negotiation. Stop collection calls within 7 days. Over 6,200 UP families became debt-free from credit card burden.
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
                  <p style={{ marginBottom: '16px' }}>
                    Credit cards fill funding gaps for UP families coping with education costs, weddings, medical bills and business slowdowns across Lucknow, Kanpur, Noida and Agra. Multiple cards plus 36-42% interest quickly snowball into unpayable dues.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit card settlement</strong> is an RBI-recognised path to pay a reduced amount, end harassment and close accounts. CredSettle has already delivered 6,200+ UP settlements with average savings around 54% and complete legal paperwork.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    UP’s joint families stretch incomes across education, weddings and healthcare. Government employees and MSME owners often swipe 3-5 cards to cover hostel fees, medical deposits or festival obligations, only to watch minimum dues exceed their salary.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We accept these obligations as genuine and turn them into a structured hardship case, proving why settlement—not endless minimum payments—is the lawful exit.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    Education loans rarely cover hostel fees, devices or coaching. Parents bridge the gap with cards, and within two academic years the combined dues can cross ₹7-8 lakhs while salaries remain fixed.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We convert those expenses into a documented hardship file, helping families settle for roughly 45% of outstanding so children continue studying without daily collection calls.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>1.</strong> Education add-ons—hostel, devices, coaching—stack 2-5 lakhs per child on cards.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2.</strong> Medical emergencies leave ₹3-8 lakhs outstanding while income drops.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3.</strong> Family weddings create parallel card dues across siblings and parents.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4.</strong> Joint families rely on one salary to support many households, so cards plug monthly gaps.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5.</strong> Traders swipe cards for stock during slow seasons and struggle when sales lag.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6.</strong> Fixed government salaries cannot meet ₹25k-40k monthly card EMIs for long.
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
                  <p style={{ marginBottom: '16px' }}>
                    We have resolved 6,200+ UP credit card matters with average savings of 54%, partnering with every major bank and NBFC.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Lucknow-based legal teams keep each case RBI-compliant while addressing family obligations, fixed salaries and MSME cash cycles.
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
                      <strong>Step 1:</strong> Map every card and hardship trigger during a free consult. <strong>Step 2:</strong> Legal notices silence collection within a week. <strong>Step 3:</strong> We package salary slips, education bills or medical records to prove stress. <strong>Step 4:</strong> All banks negotiate together, yielding 40-75% reductions and a credit rebuild plan.
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
                      We enforce RBI Master Directions—written offers, clear closure terms, 30-day document delivery and accurate bureau updates.
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
                    Most households carry four cards totaling ₹4-6 lakhs. Tackling banks one by one drags the process for months.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We bundle every card into one negotiation window so offers, payments and closures happen together.
                  </p>
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Lucknow & Kanpur:</strong> Government employees and industrial traders lean on cards for education and working capital, so we tailor negotiations to salary slips and export cycles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Noida, Ghaziabad, Agra & Varanasi:</strong> IT hubs and tourism cities follow different cash rhythms; we match offers to those timelines while covering every remaining district through local partners.
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
                    <strong>1.</strong> Save 40-75% on dues, with state averages near 54%.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2.</strong> Redirect income back to education, healthcare and essentials instead of minimum payments.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3.</strong> Stop collection calls within a week through RBI-backed notices.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4.</strong> Settle every card in one coordinated timeline with airtight documentation.
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
                    <strong>Fair practices:</strong> Collectors must stay within RBI’s time and conduct limits; violations trigger our Ombudsman complaints.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Civil matter:</strong> Credit card defaults are not criminal offences, so police threats hold no weight.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation rights:</strong> Genuine hardship requires lenders to discuss settlement, and we secure written terms plus 30-day document delivery.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Escalations:</strong> Consumer forums and local police remain on standby if harassment persists.
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
                    <strong>Days 1-7:</strong> Consultation, documentation and legal notices that stop calls.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 2-6:</strong> Negotiations with every bank based on hardship proof.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 6-9:</strong> Offers finalised, payments scheduled and receipts collected.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 9-12:</strong> NOCs arrive, bureaus update and your credit rebuild plan begins.
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
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The card holder:</strong> Rajesh, a Lucknow government teacher, owed ₹5.4 lakhs across four cards after funding two children’s professional courses and his father’s medical care.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our response:</strong> Legal notices protected his workplace, and education plus medical bills built a strong hardship file that drove settlements between 43% and 46%.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Outcome:</strong> Rajesh closed everything for ₹2.39 lakhs, saved ₹3.01 lakhs and received NOCs within four months, all while keeping his children’s studies on track.
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
                    Credit card pressure across Lucknow, Kanpur, Noida or Agra is solvable—settlement is legal, fast and already proven for 6,200+ UP families.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Book a free consultation:</strong> We tailor a 40-75% savings plan around your education, medical or family commitments and close every card with full documentation.
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
                    >
                      Join 6,200+ UP families debt-free. Multiple cards, education expenses, family obligations, all welcome. Free consultation, fast harassment stop.
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

