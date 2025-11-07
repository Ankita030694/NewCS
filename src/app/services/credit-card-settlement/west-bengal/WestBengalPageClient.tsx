'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function WestBengalPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'wb-cc-settlement', text: 'Credit Card Settlement in West Bengal', level: 2 },
    { id: 'kolkata-card-culture', text: 'Kolkata Card Culture and Lifestyle Spending', level: 2 },
    { id: 'dual-household-trap', text: 'The Dual Household and Education Trap', level: 2 },
    { id: 'wb-patterns', text: 'Six Credit Card Debt Patterns in West Bengal', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Bengal Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Strategy for Bengal Clients', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Closing Multiple Cards Together', level: 2 },
    { id: 'wb-cities', text: 'Kolkata Siliguri Durgapur Card Debt Snapshot', level: 2 },
    { id: 'benefits', text: 'Five Benefits of Credit Card Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Rights Against Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Timeline', level: 2 },
    { id: 'real-case', text: 'Real Case: Kolkata Creative Professional Saved 58%', level: 2 },
    { id: 'start-today', text: 'Start Your West Bengal Credit Card Settlement', level: 2 },
    { id: 'faqs', text: 'West Bengal Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in West Bengal?',
      answer: 'Yes. RBI recognises settlement for unsecured credit including credit cards. Banks in Kolkata, Siliguri, Durgapur and throughout West Bengal process settlements daily. We document the case so banks issue final letters and NOCs within RBI timelines.'
    },
    {
      question: 'How much can Bengal clients save?',
      answer: 'Clients across West Bengal usually save 40-75% on their card dues. Our state average is 55%. Savings depend on overdue months, number of banks involved and strength of hardship documents.'
    },
    {
      question: 'Can NRIs with Kolkata address settle cards?',
      answer: 'Yes. Many families in Kolkata and Howrah have members working abroad. We coordinate with relatives here and manage settlement through power of attorney where required.'
    },
    {
      question: 'How long does settlement take?',
      answer: 'Most cases close within 50-90 days. Multi-bank matters may take closer to 100 days. Still faster than paying minimum dues for several years.'
    },
    {
      question: 'Will settlement stop recovery calls?',
      answer: 'Yes. We send legal notices within the first week. After that banks route communication through us. If they do not comply we escalate to the Banking Ombudsman for Kolkata region.'
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
                alt="Credit Card Settlement West Bengal"
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
                Credit Card Settlement Kolkata Siliguri West Bengal
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
                Kolkata’s creative lifestyle, dual household responsibilities for professionals working outside Bengal, and education abroad dreams make credit cards a quick fix. When income cannot keep pace with EMI and interest, settlement gives a legal exit. CredSettle has supported 4,400+ West Bengal families in closing cards with average savings of 55% and full RBI-compliant documentation.
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
          style={{ maxWidth: '1280px', marginBottom: '48px', position: 'relative' }}
        >
          <div className="flex flex-col gap-4 lg:gap-8" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="w-full">
              <TableOfContents headings={headings} />
            </div>

            <div className="w-full" style={{ minWidth: '0', minHeight: '100vh' }}>
              <section id="wb-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Credit Card Settlement in West Bengal
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
                    Park Street nightlife, Salt Lake technology parks, New Town apartments and North Kolkata family homes rely on credit cards for lifestyle, travel, art supplies and education. Banks issue premium cards to consultants, designers, PSUs, doctors and freelancers without emphasising the minimum payment trap. When card maths stops adding up, settlement offers a lawful, documented way to close the chapter.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle works with Kolkata-based legal partners who understand Bengali banking operations and recovery styles. We prepare a hardship file, negotiate with card NPA teams in Kolkata, Mumbai and Bengaluru, lock settlement letters, supervise payment and collect NOCs so that banks cannot revive claims later.</p>
                </div>
              </section>

              <section id="kolkata-card-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Kolkata Card Culture and Lifestyle Spending
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
                    Kolkata celebrates food, art, theatre, books and music. Families dine out on weekends, shop at Gariahat and Quest, travel to hills in summer and beaches in winter. Credit cards make these experiences accessible even when savings are low. Many professionals also maintain a second rented accommodation in Bengaluru, Pune or Delhi due to job postings, so two sets of utility bills and rent hit the same salary.</p>
                  <p style={{ marginBottom: '16px' }}>
                    Creative freelancers, film crew, advertising professionals and media houses face irregular payments. They swipe cards for project expenses expecting client cheques soon. When clients delay 30-60 days, interest snowballs. Parents funding children’s education abroad use cards for flights, visa fees and initial deposits. Without quick settlement those cards remain maxed for years.</p>
                </div>
              </section>

              <section id="dual-household-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  The Dual Household and Education Trap
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
                    A common West Bengal story: one spouse works in another metro, the other stays in Kolkata with parents and children. Two rents, two utility sets, flights every month, plus parental healthcare. Credit cards fill the monthly gap. Add foreign education expenses—application fees, IELTS prep, university deposits, flight tickets—and card totals hit five to seven lakhs quickly.</p>
                  <p style={{ marginBottom: '16px' }}>
                    Settlement consolidates this burden. Instead of juggling multiple EMI plans, we negotiate a reduced lump sum, close all cards and help you focus on core responsibilities like education EMIs and medical insurance.</p>
                </div>
              </section>

              <section id="wb-patterns" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Credit Card Debt Patterns in West Bengal
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}><strong>1. Dual City Salaries:</strong> Professionals working outside Bengal maintain Kolkata home expenses on cards.</p>
                  <p style={{ marginBottom: '16px' }}><strong>2. Education Abroad:</strong> Sending children to Canada, UK, Australia using cards for flights, deposits and rent.</p>
                  <p style={{ marginBottom: '16px' }}><strong>3. Creative Freelancers:</strong> Film, music, ad projects reimbursed late, leaving production costs on personal cards.</p>
                  <p style={{ marginBottom: '16px' }}><strong>4. Festive Obligations:</strong> Durga Puja and wedding season spending on clothes, gifts, pandal contributions, travel.</p>
                  <p style={{ marginBottom: '16px' }}><strong>5. Medical Care for Parents:</strong> Card usage for surgery deposits and postoperative care at city hospitals.</p>
                  <p style={{ marginBottom: '16px' }}><strong>6. Small Business Slowdowns:</strong> Burrabazar, Howrah or Siliguri traders use cards for stock; if market slows, dues spiral.</p>
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
                  How CredSettle Handles Bengal Cases
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
                    We maintain a Kolkata settlement desk with legal partners who assemble bank-ready hardship packets in Bengali and English. Every case follows the same safe structure from notice to NOC. Local knowledge helps when negotiating with recovery managers posted in Eastern region.</p>

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
                      Our Settlement Strategy for Bengal Clients
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1:</strong> Map every card, EMI and overdue month. <strong>Step 2:</strong> Issue legal notices referencing RBI Fair Practices Code to halt harassment. <strong>Step 3:</strong> Compile evidence—salary slips, rent agreements, tuition receipts, medical papers—to prove hardship. <strong>Step 4:</strong> Negotiate collectively with all banks so offers arrive within the same window. <strong>Step 5:</strong> Verify letters, manage lump sum payment and gather acknowledgements. <strong>Step 6:</strong> Collect NOCs, monitor credit report updates and advise on rebuilding habits.</p>
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
                      Recovery agents cannot call before 8 am or after 7 pm, cannot threaten arrest and cannot speak to neighbours or employers without your consent. After settlement payment, banks must send NOC within 30 days. We monitor compliance and escalate if timelines slip.</p>
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
                  Closing Multiple Cards Together
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
                    Most Bengal households we support have four to six credit cards across HDFC, SBI, ICICI, Axis, Kotak and RBL. Taking one bank at a time drags the process for months. Instead we present the full hardship story to every bank in one fortnight, secure comparable settlement percentages and schedule all payments together. One effort, full closure.</p>
                </div>
              </section>

              <section id="wb-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Kolkata Siliguri Durgapur Card Debt Snapshot
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}><strong>Kolkata & Howrah:</strong> Consultants, designers, PSU staff and retirees supporting families. Average debt we settle: ₹5.4 lakh across five cards.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Siliguri & North Bengal:</strong> Tourism, tea garden and logistics businesses. Average debt: ₹3.8 lakh. Trigger: seasonal revenue dips.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Durgapur & Asansol:</strong> Steel, manufacturing and IT support centres. Average debt: ₹4.2 lakh. Trigger: job changes and dual household maintenance.</p>
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
                  Five Benefits of Credit Card Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>1. Save 40-75% of total dues and close cards permanently.</p>
                  <p style={{ marginBottom: '16px' }}>2. Stop recovery calls and doorstep visits within a week.</p>
                  <p style={{ marginBottom: '16px' }}>3. Finish process in about three months instead of paying minimums for ten years.</p>
                  <p style={{ marginBottom: '16px' }}>4. Handle all banks with one coordinated legal team.</p>
                  <p style={{ marginBottom: '16px' }}>5. Receive settlement letters and NOCs that protect you in future.</p>
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
                    RBI mandates respectful recovery. No abusive language, no repeated calls, no threats of arrest and no contact with neighbours or employers without permission. If any bank breaks these rules we file complaints with the Banking Ombudsman and follow up until you receive written apology and compensation where applicable.</p>
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
                  <p style={{ marginBottom: '16px' }}><strong>Day 1-2:</strong> Free consultation and assessment.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Day 3-7:</strong> Gather card statements, hardship proof, salary slips.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Day 8-12:</strong> Legal notices served, harassment stops.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 2-7:</strong> Negotiation with all banks.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 7-9:</strong> Settlement letters reviewed and finalised.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 9-11:</strong> You pay reduced amounts, receive acknowledgements.</p>
                  <p style={{ marginBottom: '16px' }}><strong>Weeks 11-15:</strong> We collect NOCs, verify credit report updates and close the file.</p>
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
                  Real Case: Kolkata Creative Professional Saved 58%
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
                    A 34-year-old advertising director from Ballygunge had five credit cards totalling ₹7.6 lakh. She funded a short film, supported parents’ medical treatments and paid rent for her partner working in Mumbai. Client payments delayed for six months during pandemic recovery. Interest and late fees pushed dues beyond control.</p>
                  <p style={{ marginBottom: '16px' }}>
                    We gathered invoices showing delayed client payments, medical bills and rent agreements. Negotiated 38-45% settlements across all cards. Final payout ₹3.2 lakh—she saved ₹4.4 lakh (58%). Harassment ended within a week, cards closed in 72 days, NOCs issued in another 30 days. She now uses a secured card and pays in full every month while rebuilding her CIBIL score.</p>
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
                  Start Your West Bengal Credit Card Settlement
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
                    Whether you are in Kolkata, Siliguri, Durgapur or any district of West Bengal, one phone call starts the process. We review your situation, calculate achievable savings, explain timelines and list the documents to arrange. Consultation is free. No upfront fees. Pay only after banks approve your settlements. Close cards, stop harassment and regain financial balance for your family.</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={faqs} title="Credit Card Settlement in West Bengal" />

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
                      Join 4,400+ West Bengal families who already became debt-free with CredSettle. We manage multiple cards, stop harassment fast and deliver legal closure.</p>
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
