'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function TelanganaPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'telangana-settlement', text: 'Loan Settlement Services in Telangana', level: 2 },
    { id: 'hyderabad-tech-pharma', text: 'Hyderabad Tech and Pharma Capital Economy', level: 2 },
    { id: 'telangana-challenges', text: 'Five Major Debt Patterns in Telangana', level: 2 },
    { id: 'credsettle-telangana', text: 'CredSettle Telangana Track Record', level: 2 },
    { id: 'telangana-methods', text: 'How We Handle Telangana Cases', level: 3 },
    { id: 'rbi-compliance', text: 'RBI Guidelines and Legal Safety', level: 3 },
    { id: 'high-court-backing', text: 'Telangana High Court Observations', level: 2 },
    { id: 'hitec-city', text: 'HITEC City and Gachibowli IT Corridor', level: 2 },
    { id: 'pharma-sector', text: 'Pharma Professionals Loan Settlement', level: 2 },
    { id: 'telangana-benefits', text: 'Five Key Benefits for Telangana Borrowers', level: 2 },
    { id: 'borrower-protection', text: 'Your Legal Rights in Telangana', level: 2 },
    { id: 'settlement-timeline', text: 'Step-by-Step Settlement Timeline', level: 2 },
    { id: 'hyderabad-case', text: 'Real Story - Tech Lead Gets Debt-Free', level: 2 },
    { id: 'start-now', text: 'Get Your Free Telangana Consultation', level: 2 },
    { id: 'faqs', text: 'Telangana Loan Settlement Questions', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal in Telangana?',
      answer: 'Yes, completely legal in Telangana and across India. RBI recognizes settlement as legitimate debt resolution. Telangana High Court has also made observations protecting borrowers from unfair bank practices while acknowledging settlement rights.'
    },
    {
      question: 'Can IT professionals in HITEC City and Gachibowli settle loans?',
      answer: 'Absolutely. We specialize in Hyderabad tech corridor cases. Whether you work at Microsoft, Google, Amazon, TCS, Infosys or any IT company, we understand job market volatility, layoff cycles and EMI pressure. Have settled 4,200+ IT sector loans in Hyderabad.'
    },
    {
      question: 'Do pharma professionals qualify for settlement?',
      answer: 'Yes, Hyderabad pharma sector professionals (R&D scientists, medical reps, pharma sales) face unique income patterns. We understand pharma industry cycles and negotiate accordingly. Have handled hundreds of pharma professional cases.'
    },
    {
      question: 'How much can Telangana borrowers save?',
      answer: 'Telangana borrowers typically save 30-70% on outstanding debt. Our state average is 59% savings. IT sector cases often get 55-65% reductions because lenders understand tech layoff situations.'
    },
    {
      question: 'What did Telangana High Court say about bank harassment?',
      answer: 'Telangana High Court has criticized banks for harassing ordinary borrowers while ignoring large defaulters. Court observed aggressive recovery methods against small borrowers. This legal backing strengthens our negotiation position for you.'
    },
    {
      question: 'Do you work with Hyderabad local banks and NBFCs?',
      answer: 'Yes, all banks including AP Mahesh Bank, Andhra Bank branches, plus all major banks (SBI, HDFC, ICICI, Axis) and NBFCs (Bajaj, HDB Financial, Tata Capital) operating in Telangana.'
    },
    {
      question: 'Can startup founders settle business loans?',
      answer: 'Yes, Hyderabad has active startup ecosystem (T-Hub, WE Hub). When startups fail or funding dries up, founders stuck with business loans. We understand startup failure patterns, help negotiate showing business closure documentation.'
    },
    {
      question: 'How long does settlement take in Telangana?',
      answer: 'Typically 60-100 days from first consultation to final closure. Hyderabad cases sometimes resolve faster because major banks have NPA divisions in city itself. But complex cases take longer. We push for speed while ensuring legal safety.'
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
                alt="Personal Loan Settlement Telangana"
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
                Loan Settlement Hyderabad Telangana - IT Pharma Tech Professionals Focus
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
                Dealing with loan debt in Hyderabad, Warangal, Nizamabad or anywhere in Telangana? CredSettle helps IT professionals, pharma sector workers, tech employees and all Telangana borrowers reduce debt by 30-70% through legal, RBI-compliant settlement. HITEC City to Warangal coverage. Over 11,000 Telangana families got debt-free with us.
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
              
              <section id="telangana-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Loan Settlement Services in Telangana
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
                    Telangana, India's youngest state (formed 2014), has emerged as major IT and pharma hub. Hyderabad houses Google, Microsoft, Amazon offices in HITEC City and Gachibowli corridor. Also global pharma capital with over 800 pharmaceutical companies. This rapid growth created high-income jobs, real estate boom and aggressive lending by banks and NBFCs. Millions borrowed for homes, cars, lifestyle and business expansion.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> lets you negotiate with banks and NBFCs to pay reduced amounts instead of full outstanding balances. RBI recognizes this as legal debt resolution method. Telangana High Court has also made strong observations protecting borrowers from unfair bank harassment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 11,000 Telangana borrowers across Hyderabad, Warangal, Karimnagar, Khammam, Nizamabad and all 33 districts. Our Telangana clients typically save 30-70% on outstanding amounts (state average: 59%). Every settlement follows RBI rules, gets proper legal documentation, and permanently closes debt without future lender claims.
                  </p>
                </div>
              </section>

              <section id="hyderabad-tech-pharma" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Hyderabad Tech and Pharma Capital Economy
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
                    Hyderabad has unique dual economy. Tech corridor (HITEC City, Gachibowli, Madhapur, Kondapur) hosts global tech giants and Indian IT services. Pharma sector spans from Genome Valley to Bachupally with research facilities, manufacturing plants and corporate offices. Both sectors offer high salaries but come with job volatility.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Tech sector borrowing:</strong> Software engineers, data scientists, product managers borrowed ₹10-40 lakhs for apartments in Gachibowli, Kondapur, Madhapur areas (real estate prices doubled 2015-2019). Many took personal loans for down payments, car loans for vehicles, credit cards for lifestyle. When tech layoffs hit 2022-2024 (Meta, Amazon, Google, Microsoft, Indian IT companies), EMI payments became impossible. Projects cancelled, variable pay stopped, bench periods extended, some lost jobs completely.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Pharma sector patterns:</strong> Hyderabad is global pharma capital (Dr. Reddy's, Cipla, Lupin, Sun Pharma, Aurobindo). R&D scientists, quality control professionals, pharma sales teams borrowed for homes and lifestyle. Pharma sector faces drug patent expiries, FDA rejections, US pricing pressure. When plants get FDA warnings or export orders drop, job security vanishes. Medical representatives who borrowed expecting stable field jobs saw territories restructured, incentives cut.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real estate boom and bust:</strong> Telangana formation 2014 triggered real estate explosion in Hyderabad. Prices in Gachibowli, Kondapur, Kokapet jumped 120-150% in 3-4 years. Everyone borrowed maximum (₹30-60 lakhs) expecting prices to keep rising. Then market crashed 2019-2020. Projects delayed, developers defaulted, property values dropped 20-30%. People stuck with huge loans for homes worth less than purchase price.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Startup ecosystem challenges:</strong> Hyderabad has T-Hub (largest incubator), WE Hub (women entrepreneurs), strong startup culture. Founders borrowed personal loans ₹5-25 lakhs for startup operations (easier than venture funding). When startups failed (70-80% fail within 3 years), founders personally liable for loans. We've settled hundreds of startup founder personal loans.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We specialize in Telangana's tech and pharma economy. We know how to explain tech layoff cycles, pharma industry FDA challenges, startup failure rates and real estate market crashes to lenders. This sector knowledge gets you better settlement terms than generic companies can achieve.
                  </p>
                </div>
              </section>

              <section id="telangana-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Five Major Debt Patterns in Telangana
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
                    <strong>1. Tech Layoff Wave 2022-2024:</strong> Microsoft, Google, Meta, Amazon cut thousands of Hyderabad jobs. Indian IT companies (TCS, Infosys, Wipro, Tech Mahindra) put engineers on bench, cancelled variable pay, reduced new hiring. Software engineers earning ₹12-25 lakhs had borrowed ₹15-35 lakhs total (home loan down payment, personal loan for interiors, car loan, credit cards). When job lost or salary cut 30-40%, all loans defaulted. We've settled 2,100+ tech layoff cases using industry layoff statistics.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Pharma Sector FDA Warnings:</strong> When FDA issues warning letters to Hyderabad pharma plants, hundreds lose jobs immediately. Quality control professionals, R&D scientists, production staff see salaries stopped. Medical representatives whose territories serviced affected companies lose incentives. These borrowers had ₹8-20 lakhs loans (personal for home, car, education). We've settled pharma sector loans using FDA warning documentation and industry reports.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Real Estate Delayed Projects:</strong> Many bought under-construction apartments in Gachibowli, Kokapet, Narsingi expecting 2-3 year possession. Paid ₹10-20 lakhs down payment using personal loans. Then projects delayed 5-7 years. Stuck paying EMIs for flat they cannot occupy while also paying house rent. Double burden destroyed finances. We've settled hundreds of such cases showing project delay documents.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Startup Founder Personal Liability:</strong> T-Hub and WE Hub incubated hundreds of startups. Founders borrowed personal loans ₹5-25 lakhs for company operations (team salaries, product development, marketing). When startup failed to get funding or revenues never came, founders stuck with personal debt. Limited liability doesn't protect personal loans. We negotiate using startup closure documentation and business failure proof.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Lifestyle Inflation in Tech Corridor:</strong> HITEC City and Gachibowli created wealth effect. Young professionals earning ₹8-15 lakhs took multiple loans (car, gadgets, vacations, expensive phones on EMI). Bought iPhones on credit card EMI, financed bikes worth 6 months salary, took personal loans for foreign vacations. When recession hit or job changed, the pile of small EMIs became mountain of debt. We've settled hundreds of lifestyle debt cases.
                  </p>
                </div>
              </section>

              <section id="credsettle-telangana" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  CredSettle Telangana Track Record
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
                    We've handled 11,000+ loan settlements across Telangana in last four years. Our Telangana clients save an average of 59% on their debt. We work with all major banks, regional banks and NBFCs operating in Hyderabad and across the state.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Telangana advantage:</strong> We're registered legal services company following every RBI rule. We understand Hyderabad's tech layoff cycles, pharma industry FDA challenges, real estate market dynamics and startup ecosystem. We have local legal partners in Hyderabad who know district courts and Telangana Lok Adalat system.
                  </p>

                  <div id="telangana-methods" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      How We Handle Telangana Cases
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Sector Analysis</strong> - Tech layoff victim? Pharma professional facing FDA warning impact? Real estate project delayed? Startup founder with business failure? Each needs specific strategy. Free confidential consultation. <strong>Step 2: Stop Harassment</strong> - Legal notices to all lenders citing RBI Fair Practices Code and Telangana High Court observations on bank harassment. Recovery contact stops within 5-7 days. <strong>Step 3: Sector-Smart Negotiation</strong> - Our Telangana team uses tech layoff statistics, pharma industry reports, real estate market data, startup failure rates. Push for 30-70% debt reduction. <strong>Step 4: Legal Documentation</strong> - OTS letters, receipts, closure certificates, NOC. Everything verified. <strong>Step 5: Post-Settlement Guidance</strong> - Credit rebuilding advice for future borrowing when your career stabilizes or next job comes.
                    </p>
                  </div>

                  <div id="rbi-compliance" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      RBI Guidelines and Legal Safety
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman guidelines. You get: (1) Written OTS agreement on lender letterhead, (2) Clear terms that no more claims can be made, (3) Correct credit reporting, (4) Documents within 30 days per RBI rule, (5) Full legal protection. Our Telangana lawyers ensure complete compliance.
                    </p>
                  </div>
                </div>
              </section>

              <section id="high-court-backing" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Telangana High Court Observations
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
                    Telangana High Court has made strong observations protecting borrowers. In multiple judgments, court criticized banks for harassing ordinary borrowers while being lenient with large defaulters. Court noted that banks often pursue aggressive recovery methods against small loan defaulters but overlook corporate defaults worth crores.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What this means for you:</strong> These court observations strengthen our negotiation position. When banks threaten legal action or use aggressive recovery, we cite these High Court observations. Shows that courts in Telangana understand borrower hardships and expect banks to follow fair practices.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Court stance on harassment:</strong> Telangana High Court has specifically noted cases where banks seized property gates over loan defaults, causing public embarrassment. Court questioned why same aggressive approach not taken against large corporate defaulters. This judicial backing helps us push for reasonable settlements instead of harassment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>OTS discretion:</strong> While High Court has clarified that borrowers don't have absolute right to One-Time Settlement (banks have commercial discretion), the court also expects banks to consider genuine hardship cases. We use this balanced approach in negotiations, presenting your genuine financial crisis with proper documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Our Hyderabad legal team stays updated on all Telangana High Court judgments related to loan recovery and settlement. We use these legal precedents to protect your rights and achieve fair settlement terms.
                  </p>
                </div>
              </section>

              <section id="hitec-city" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  HITEC City and Gachibowli IT Corridor
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
                    <strong>HITEC City:</strong> Hyderabad Information Technology and Engineering Consultancy City houses Microsoft (largest R&D center outside US), Google, Facebook, Apple offices. Thousands of engineers earning ₹10-30 lakhs borrowed heavily for apartments, cars and lifestyle. 2022-2024 layoffs destroyed finances. We've handled 1,800+ HITEC City area cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Gachibowli corridor:</strong> From Financial District to Gachibowli to Madhapur, this stretch has Amazon, Deloitte, Accenture, TCS, Infosys, Wipro campuses. Real estate here costs ₹6,000-12,000 per sq ft. Engineers borrowed ₹20-40 lakhs for 2-3 BHK apartments. When tech recession hit, many on bench or laid off. We've settled 2,400+ Gachibowli area loans using tech sector layoff data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Kondapur and Madhapur:</strong> Residential hubs for IT professionals. Everyone borrowed for apartments in high-rise complexes. Monthly EMIs ₹40,000-80,000 manageable with ₹15 lakh salary but impossible when unemployed or salary cut. We negotiate using IT sector employment statistics and salary trend data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Common pattern we see:</strong> Software engineer age 28-35, earning ₹12-18 lakhs, borrowed total ₹25-40 lakhs (₹15 lakhs personal loan for flat down payment, ₹8 lakhs car loan, ₹5-7 lakhs credit cards and personal loans for interiors/gadgets). When laid off or put on bench with 40% salary cut, all loans default together. CIBIL drops from 750 to 520 in 6 months. We've handled thousands of such cases across Hyderabad tech corridor.
                  </p>
                </div>
              </section>

              <section id="pharma-sector" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Pharma Professionals Loan Settlement
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
                    <strong>Genome Valley pharma hub:</strong> Bachupally, Miyapur, Patancheru area has 800+ pharma companies. R&D scientists, quality control professionals, regulatory affairs specialists earning ₹8-20 lakhs borrowed for homes and lifestyle. When FDA issues warning letters or plants shut down, mass layoffs happen overnight.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Medical representatives:</strong> Pharma sales teams covering Telangana and AP borrowed ₹5-15 lakhs (car loans, personal loans, credit cards). MR income depends on incentives tied to sales targets. When patent expires on blockbuster drug or company loses market share, territories restructured, teams cut, incentives stopped. Base salary alone cannot cover EMIs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Pharma industry volatility:</strong> Unlike IT where layoffs are periodic, pharma has sudden shocks. Single FDA warning letter can shut entire plant, affecting thousands. Drug patent expiries wipe out revenue overnight. Generic pricing pressure from US market impacts export-focused companies. We've handled 600+ pharma sector loan settlements using industry-specific hardship documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How we help pharma professionals:</strong> We gather FDA warning letters (public documents), plant shutdown notices, layoff announcements from pharma companies. Show lenders this is industry-wide issue, not individual failure. Negotiate using pharma sector reports showing US pricing pressure and patent cliff challenges. Typically achieve 50-65% debt reduction for pharma professionals.
                  </p>
                </div>
              </section>

              <section id="telangana-benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Five Key Benefits for Telangana Borrowers
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
                    <strong>1. Tech and Pharma Sector Expertise:</strong> We understand layoff cycles, FDA warnings, startup failures, real estate crashes. Most settlement companies don't get Hyderabad's unique economy. We do. This knowledge gets better settlements.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Save 30-70% on Debt:</strong> Telangana clients save 59% on average. Tech sector cases often get 55-65% settlements because lenders understand layoff situations are genuine hardship. That's lakhs saved.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Harassment Stops Within Week:</strong> Legal notices citing RBI rules and Telangana High Court observations. Recovery calls stop within 5-7 days across state.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Complete Legal Process:</strong> Every settlement follows RBI rules. Proper documentation citing High Court protections. Lenders cannot return. Important for professionals who need clean exit to rebuild careers.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Pay After Success:</strong> No upfront fees. We charge only after settlement is negotiated and documented. Our confidence in results.
                  </p>
                </div>
              </section>

              <section id="borrower-protection" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Your Legal Rights in Telangana
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
                    Know your rights as Telangana borrower. Laws protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass, threaten or abuse. Cannot visit your workplace (IT office or pharma company) repeatedly. Cannot contact your manager or colleagues about debt. Break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Telangana High Court Protection:</strong> Court has criticized banks for aggressive recovery against small borrowers. If bank threatens unfair action, we cite these observations. Strengthens your legal position.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> If you have genuine hardship (layoff, FDA warning impact, business failure), lenders must discuss settlement. RBI encourages resolution before court action.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Rule:</strong> After settlement payment, lender has 30 days maximum for closure letter and NOC. RBI Master Direction. Delays mean penalties (₹5,000 daily). We ensure compliance.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Lok Adalat Access:</strong> Any Telangana resident can use Lok Adalat for loan disputes. Free legal aid if you earn under ₹5 lakhs yearly. Regular Lok Adalats held in Hyderabad and district headquarters.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Protection from Threats:</strong> Recovery agents cannot threaten job loss, property seizure or police action. IPC Sections 503 and 506 protect you. File FIR at Cyberabad or city police if threatened.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any violations, we take immediate legal action including police complaints when needed.
                  </p>
                </div>
              </section>

              <section id="settlement-timeline" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Step-by-Step Settlement Timeline
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
                    <strong>Days 1-3: Initial Contact</strong> - Call, WhatsApp us. Free 35-45 minute confidential assessment. We review loans, employment situation, hardship details. No pressure.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 4-10: Documentation</strong> - You share loan papers, layoff notice or FDA warning (if applicable), salary slips, income proof. We build settlement case with sector-specific data.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 10-15: Stop Harassment</strong> - Legal notices to all lenders citing RBI rules and Telangana High Court observations. Recovery contact stops within 5-7 days.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 3-8: Negotiation</strong> - Our Telangana team contacts lender NPA divisions. We use tech layoff statistics, pharma industry reports, real estate market data. Push for 30-70% debt reduction. Multiple rounds of negotiation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 8-10: Agreement</strong> - Lender agrees to settlement. We get formal OTS letter. Everything legally verified before payment.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 10-12: Payment</strong> - You arrange settlement amount (family help, savings, PF withdrawal, whatever works). Pay to lender account.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 12-16: Closure</strong> - Lender has 30 days for documents. We follow up aggressively. Get NOC, closure letter. Verify credit bureau updates.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Ongoing: Recovery Support</strong> - Credit rebuilding guidance, next job financial planning, future borrowing tips when career stabilizes.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 60-100 days for Telangana cases. Tech sector cases sometimes faster because major banks have NPA divisions in Hyderabad itself, speeding approvals.
                  </p>
                </div>
              </section>

              <section id="hyderabad-case" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Real Story - Tech Lead Gets Debt-Free
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
                    <strong>The Borrower:</strong> Rahul M., age 32, technical lead at major tech company in Gachibowli. Had borrowed ₹32 lakhs total (₹18 lakhs personal loan for flat down payment in Kondapur, ₹9 lakhs car loan, ₹5 lakhs credit cards).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Collapsed:</strong> September 2023, Rahul's company announced 15% workforce reduction. His entire team (cloud infrastructure) outsourced to vendor. Laid off with 3 months severance. Applied 80+ jobs over 4 months, only got contract offers at 40% lower salary. Could not pay ₹52,000 monthly EMIs. All 3 accounts went NPA. Recovery agents called 15-20 times daily, visited Kondapur apartment twice, sent legal notices. CIBIL crashed from 765 to 495. Family reputation at risk.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Protected His Future:</strong> Rahul contacted us January 2024. We sent immediate legal notices to all 3 lenders citing RBI rules and Telangana High Court observations on harassment. Harassment stopped in 5 days. Our assessment showed genuine tech layoff situation (not job hopping or income misuse). Built strong case.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation Strategy:</strong> Our Hyderabad tech specialist team spent 2.5 months negotiating. Personal loan from NBFC settled at 44% because we showed them 2023-2024 tech layoff statistics from LinkedIn and industry reports. Proved this is sector-wide crisis affecting thousands in Hyderabad, not individual failure. Car loan from bank settled at 48% using same tech sector data. Credit card debt (multiple cards) settled at 40-42% by showing unemployment period documentation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Result:</strong> ₹32 lakhs outstanding became ₹14.2 lakhs settlement. Saved ₹17.8 lakhs (56% reduction). Rahul arranged money by taking family help (₹8 lakhs), using severance payment (₹4 lakhs) and PF withdrawal (₹2.2 lakhs). All 3 accounts closed legally with NOCs. Recovery stopped completely.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Today:</strong> Rahul is debt-free. Got new job at another tech company in HITEC City (₹16 lakhs, slightly lower than before but stable). CIBIL improved to 640 after 10 months. We guided him on credit rebuilding. His words: "CredSettle understood Hyderabad tech layoffs are real. They had actual statistics showing thousands lost jobs. That sector knowledge saved me."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> January 2024 first call, February-March negotiation, April 2024 payment (used severance + family help), May 2024 closure. Total: 4 months.
                  </p>
                </div>
              </section>

              <section id="start-now" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Get Your Free Telangana Consultation
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
                    Dealing with loan debt in Hyderabad, Warangal or anywhere in Telangana? You don't need to face this alone. Settlement is legal. RBI backs it. Telangana High Court protects borrowers from unfair practices. It exists for tech professionals facing layoffs, pharma sector workers hit by FDA warnings, startup founders whose businesses failed, and anyone with genuine financial problems.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Debt destroys careers and peace. Your health suffers, family worries constantly, professional reputation at risk, sleep disappears. Each day you delay, penalties grow, interest compounds, CIBIL falls more. But proper exit exists. Over 11,000 Telangana families already got financial freedom through our settlement work.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Act today:</strong> Free confidential consultation. No obligations, no upfront fees. Just honest assessment and clear options. Our Telangana experts will show exactly how to stop harassment, cut debt 30-70% and close everything legally. We understand tech sector volatility, pharma industry challenges, real estate market crashes, whatever your situation is.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Tech layoffs and industry downturns are temporary. But unresolved debt can destroy your career and life permanently. With our legal team, Hyderabad sector knowledge and 11,000+ case experience, you can end this crisis properly and restart. Don't let debt destroy your future. Act now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> HITEC City, Gachibowli, Madhapur, Genome Valley or any Telangana district. Wherever you are, debt-free life is possible. We'll help you reach there.
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
                title="Personal Loan Settlement in Telangana"
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
                      Ready for Debt-Free Life in Telangana?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 11,000+ Telangana families who achieved financial freedom. Tech professionals, pharma sector workers, all welcome. Free consultation, Telangana High Court backed.
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


