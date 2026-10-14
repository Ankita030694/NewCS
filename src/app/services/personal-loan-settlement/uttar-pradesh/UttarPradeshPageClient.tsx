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
    { id: 'up-overview', text: 'own Loan closure Across Uttar Pradesh', level: 2 },
    { id: 'up-economy', text: 'UP Economy and clients Challenges', level: 2 },
    { id: 'debt-issues', text: 'Six Major Debt Issues in UP Cities', level: 2 },
    { id: 'credsettle-up', text: 'Why CredSettle Works Best in Uttar Pradesh', level: 2 },
    { id: 'up-settlement-method', text: 'How We Handle UP Loan Cases', level: 3 },
    { id: 'rbi-legal-cover', text: 'RBI safety and Legal Security', level: 3 },
    { id: 'up-lok-adalat', text: 'UP Lok Adalat and Consumer Commission Routes', level: 2 },
    { id: 'lucknow-kanpur', text: 'Lucknow and Kanpur - Our Strongest Presence', level: 2 },
    { id: 'other-cities', text: 'Agra. Varanasi. Meerut and Beyond', level: 2 },
    { id: 'up-benefits', text: 'Six Core Benefits for UP clients', level: 2 },
    { id: 'rights-up', text: 'Your Legal Rights Under UP and RBI Laws', level: 2 },
    { id: 'process-breakdown', text: 'Week by Week Process Breakdown', level: 2 },
    { id: 'kanpur-case', text: 'Real Case - Kanpur Trader Escapes Debt Trap', level: 2 },
    { id: 'get-started', text: 'Get Started With Free UP Consultation', level: 2 },
    { id: 'faqs', text: 'UP clients Questions Answered', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal for UP borrowers?',
      answer: 'Yes. Fully legal in Uttar Pradesh and all India. RBI recognizes closure as legitimate debt relief. CredSettle follows all legal frameworks including UP State Consumer Commission and Lok Adalat systems.'
    },
    {
      question: 'How much debt can Lucknow or Kanpur borrowers save?',
      answer: 'UP clients typically save 30-70% on unpaid debt. Our Uttar Pradesh average is 58% savings. Exact amount depends on your loan type. Unpaid balance. Hardship proof and lender policies.'
    },
    {
      question: 'Will settlement affect my CIBIL in UP?',
      answer: 'Yes. Settled loans show "settled" status on CIBIL report. Impacts score temporarily (drops 50-100 points). But better than continued defaults or court cases. We guide you on rebuilding CIBIL over 12-18 months.'
    },
    {
      question: 'Can you help UP government employees settle loans?',
      answer: 'Yes. We specialize in UP state government employee cases. Many face salary delays. Pension issues or transfer problems. We use job security as talks leverage with lenders and have settled hundreds of government employee loans across UP.'
    },
    {
      question: 'Do you work with Kanpur and Agra local banks?',
      answer: 'Yes. We work with all banks and NBFCs operating in UP including local cooperative banks in Kanpur. Agra and other cities. We have settled loans from SBI. PNB. Bank of Baroda. HDFC. ICICI and regional banks across UP.'
    },
    {
      question: 'Can traders and business owners in Agra/Varanasi settle loans?',
      answer: 'Absolutely. Many UP traders and MSME owners face cash flow issues. We understand seasonal firm patterns. Festival economy impacts and GST compliance burdens. Our firm closure approach works for traders. Manufacturers and service providers across UP.'
    },
    {
      question: 'What is UP Lok Adalat success rate?',
      answer: 'Very good. UP conducts regular Lok Adalats across 75 districts. We have handled hundreds of UP loan cases through Lok Adalat with 85%+ closure success. Usually achieve 40-60% debt reduction through this route.'
    },
    {
      question: 'How long does settlement take in Uttar Pradesh?',
      answer: 'Typically 60-120 days from first consultation to final closure. UP cases sometimes take slightly longer than metro cities because regional lender approvals may need head office clearance. But we push hard for fast relief.'
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
                alt="Personal Loan Settlement Uttar Pradesh"
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
                        Personal Loan Settlement in Lucknow,<br />
                        <span className="text-blue-200">Kanpur &amp; Uttar Pradesh</span>
                    </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              > Buried under loan debt in Lucknow. Kanpur. Agra or anywhere in Uttar Pradesh? CredSettle helps UP clients reduce debt by 30-70% through legal. RBI-compliant closure. Government employees. Traders. MSME owners. Salaried experts - we handle all cases. Stop claims threats. Settle with all banks and NBFCs. Over 15,000 UP families got debt-free with our help. </p>
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
              
              <section id="up-overview" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Personal Loan Settlement Across Uttar Pradesh
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Uttar Pradesh’s 75 districts depend on own loans for education. Healthcare. Trading inventory and family milestones. Lucknow government employees. Kanpur manufacturers. Agra tourism operators and Varanasi service owners often carry multiple loans at once. so a single income shock quickly escalates into missed EMIs and nonstop claims pressure. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>own loan closure</strong> offers a lawful exit endorsed by RBI. CredSettle has already guided 15,000+ UP clients to close accounts across Lucknow. Kanpur. Agra. Varanasi. Meerut and beyond with average savings near 58%. Every case ends with checked proof so lenders cannot return later. </p>
                </div>
              </section>

              <section id="up-economy" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  UP Economy and Borrower Challenges
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Lucknow salaries. Kanpur factory cycles. Agra tourism swings and Varanasi pilgrim seasons feed very different payment risks. Families routinely juggle wedding loans. Medical borrowing and firm capital. Once income slows. Every EMI becomes a burden and claims teams start calling relatives or visiting workplaces. </p>
                  <p style={{ marginBottom: '16px' }}> We combine hardship evidence with local data - government salary delays. Industrial output drops. Tourism statistics - to win 40-70% closures before lenders pursue crowded UP courts. Results: threats stops. Debt shrinks and you restart finances with clean papers. </p>
                </div>
              </section>

              <section id="debt-issues" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Major Debt Issues in UP Cities
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>1. Salary delays:</strong> Teachers. Police and clerks live on fixed government pay. When disbursements slip for a few months. EMIs bounce and we leverage job security to secure breathing room. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>2. Industrial swings:</strong> Kanpur leather and textile units run hot and cold. Production cuts leave owners and workers with stalled cash flow. so we use trade data to justify reduced payouts. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>3. Tourism shocks:</strong> Agra’s hospitality chain still recovers from COVID. Visitor stats prove why 40-60% closures make sense for hotels. Guides and artisans. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>4. Medical emergencies:</strong> Treatment bills of ₹5-15 lakhs are unavoidable. so lenders accept 50-65% closures when we file hospital and income records. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>5. Wedding debts:</strong> Cultural expectations push families to borrow heavily. explaining social context helps us reset EMIs to realistic levels. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>6. NBFC clusters:</strong> Easy credit creates five small high-rates loans instead of one big one. We bundle them and show every lender why cooperation protects their claims. </p>
                </div>
              </section>

              <section id="credsettle-up" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Why CredSettle Works Best in Uttar Pradesh
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> We have closed 15,000+ Uttar Pradesh closures with average savings near 58%. Working with PSU banks. Cooperatives and NBFCs across all 75 districts. </p>
                  <p style={{ marginBottom: '16px' }}> CredSettle is a registered legal services partner with Lucknow- and Kanpur-based counsel. so every offer we secure meets RBI standards and ends with airtight papers. </p>

                  <div id="up-settlement-method" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                    <h3
                      className="text-lg md:text-xl lg:text-[24px] leading-tight"
                      style={{
                        color: '#0C2756',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        lineHeight: '32px',
                        marginBottom: '16px'
                      }}
                    > How We Handle UP Loan Cases </h3>
                    <p style={{ marginBottom: '16px' }}> <strong>Phase 1:</strong> Free consultation maps every loan. Income stream and hardship proof. <strong>Phase 2:</strong> Legal notices halt claims within a week. <strong>Phase 3:</strong> We settle with state-exact data - salary calendars. Leather export trends. Tourism indices - to win 30-70% reductions. <strong>Phase 4:</strong> counsel check OTS letters. Supervise payment and design your credit rebuild plan. </p>
                  </div>

                  <div id="rbi-legal-cover" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                    <h3
                      className="text-lg md:text-xl lg:text-[24px] leading-tight"
                      style={{
                        color: '#0C2756',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        lineHeight: '32px',
                        marginBottom: '16px'
                      }}
                    > RBI safety and Legal Security </h3>
                    <p style={{ marginBottom: '16px' }}> We enforce RBI Master Directions at each step - written offers. Fixed payment schedules. 30-day papers delivery and fast legal action if a lender deviates. </p>
                  </div>
                </div>
              </section>

              <section id="up-lok-adalat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  UP Lok Adalat and Consumer Commission Routes
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Uttar Pradesh Lok Adalat:</strong> Court-backed mediation sessions operate in every district and usually close matters in a single sitting. We prepare the hardship file. Present the offer and typically land 40-60% resolutions backed by enforceable orders. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>State Consumer Commission:</strong> Ideal when lenders add hidden charges or harass illegally. Cases finish in 3-5 months and can award compensation beyond closure. </p>
                  <p style={{ marginBottom: '16px' }}> We help you choose the right route and coordinate free legal aid through UP State Legal Services Authority when household income is below ₹5 lakhs. </p>
                </div>
              </section>

              <section id="lucknow-kanpur" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Lucknow and Kanpur - Our Strongest Presence
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Lucknow:</strong> We have handled 3,500+ capital-city cases for government employees. Doctors and firm owners by speaking the language of salary cycles. Transfer policies and pension rules. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Kanpur:</strong> Leather and textile swings create cash squeezes for 2,000+ clients we have supported. Local legal partners. Data on export orders and court relationships help us settle faster outcomes in both cities. </p>
                </div>
              </section>

              <section id="other-cities" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Agra, Varanasi, Meerut and Beyond
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Agra and Varanasi:</strong> Tourism-driven incomes rise and fall with visitor flows. So we time closures around peak seasons and present occupancy data to banks for 1,400+ clients. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Meerut. Ghaziabad and Prayagraj:</strong> Manufacturing. Trading and administrative hubs need customised strategies - whether it is aligning payments with factory cycles or coordinating with local courts. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Rest of UP:</strong> Through district partners we cover Bareilly. Gorakhpur. Jhansi. Mathura and every other region with the same documented process and Lok Adalat support. </p>
                </div>
              </section>

              <section id="up-benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Six Core Benefits for UP Borrowers
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>1.</strong> Local insight into salary cycles. Tourism swings and industrial trends improves closure terms. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>2.</strong> Legal notices stop threats within a week across metros and tier-2 towns. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>3.</strong> Average savings hover around 58%. Returning lakhs to UP households. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>4.</strong> Lok Adalat expertise delivers court-backed closure when cases demand it. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>5.</strong> We manage every OTS letter. Receipt and NOC. fees trigger only after success. </p>
                </div>
              </section>

              <section id="rights-up" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Your Legal Rights Under UP and RBI Laws
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Fair treatment:</strong> RBI’s Fair Practices Code bars threats. Public shaming or surprise visits. We escalate to the Banking RBI officer the moment those lines are crossed. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Jurisdiction safety:</strong> The UP Money-Lending Act keeps disputes within your district and protects you from being dragged to out-of-state courts. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>closure rights:</strong> Genuine hardship means lenders must discuss restructuring. After payment. RBI rules force them to issue closure letters and NOCs within 30 days. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Escalation paths:</strong> Consumer Commission. Lok Adalat and police support remain available - we activate them whenever threats or unfair charges persist. </p>
                </div>
              </section>

              <section id="process-breakdown" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Week by Week Process Breakdown
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>Days 1-7:</strong> Free assessment. Papers checklist and legal notices that redirect every claims call to us. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 2-6:</strong> talks with each lender using hardship proof plus sector data to achieve 30-70% reductions. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 6-9:</strong> We vet OTS letters. Schedule lump-sum or installment payments and collect receipts. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Weeks 9-12:</strong> Closure letters and NOCs arrive. Credit bureaus update. we map your credit rebuild plan. </p>
                </div>
              </section>

              <section id="kanpur-case" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Real Case - Kanpur Trader Escapes Debt Trap
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> <strong>The clients:</strong> Suresh. A Kanpur leather trader. Faced ₹35 lakh exposure across firm. Own and mortgage-linked loans after export orders collapsed. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Our response:</strong> Legal notices stopped threats in six days. Trade data proved to lenders that the downturn was sector-wide. Leading to closures between 42% and 55% across all five accounts. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Outcome:</strong> He paid ₹16.5 lakhs. Saved ₹18.5 lakhs. Released the shop mortgage and rebuilt his CIBIL score to 650 within 15 months. </p>
                </div>
              </section>

              <section id="get-started" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Get Started With Free UP Consultation
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}> Struggling with own loan dues anywhere in Uttar Pradesh? Closure is legal. RBI-backed and already helped 15,000+ local families reclaim peace of mind. </p>
                  <p style={{ marginBottom: '16px' }}> <strong>Book a free consultation:</strong> No upfront fees - just a clear plan to stop threats. Save 30-70% and close every account by law. Whether you are a government employee. Trader or MSME owner. </p>
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
                title="Personal Loan Settlement in Uttar Pradesh"
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
                      Ready for Debt-Free Life in Uttar Pradesh?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    > Join 15,000+ UP families who achieved money freedom. Free consultation. No upfront fees. Proven results across all 75 districts. </p>
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


