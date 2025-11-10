'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';
import CTAButton from '@/components/CTAButton';

export default function DelhiPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'introduction', text: 'Loan Settlement Services Across Delhi NCR Region', level: 2 },
    { id: 'why-delhi-ncr', text: 'Understanding NCR Debt Landscape - Delhi to Gurgaon', level: 2 },
    { id: 'common-problems', text: 'Debt Traps Facing NCR Residents Today', level: 2 },
    { id: 'credsettle-ncr', text: 'How CredSettle Dominates NCR Loan Settlements', level: 2 },
    { id: 'our-process', text: 'Our NCR-Specific Settlement Strategy', level: 3 },
    { id: 'legal-compliance', text: 'Legal Framework and RBI Protection', level: 3 },
    { id: 'drt-lok-adalat', text: 'Using DRT and Lok Adalat for Faster Settlements', level: 2 },
    { id: 'ncr-coverage', text: 'Every NCR City Covered - Delhi, Noida, Gurgaon, Faridabad', level: 2 },
    { id: 'benefits-delhi', text: 'Eight Reasons NCR Borrowers Pick CredSettle', level: 2 },
    { id: 'borrower-rights', text: 'Know Your Legal Rights in Delhi NCR', level: 2 },
    { id: 'settlement-steps', text: 'From First Call to Final Closure - The Complete Process', level: 2 },
    { id: 'case-study-delhi', text: 'Success Story: How Noida Engineer Beat Debt', level: 2 },
    { id: 'take-action', text: 'Time to Act - Get Your Free NCR Consultation', level: 2 },
    { id: 'faqs', text: 'Delhi NCR Settlement FAQs Answered', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is loan settlement legal in Delhi NCR?',
      answer: 'Yes, completely legal. Loan settlement follows RBI guidelines and is recognized across India including Delhi NCR. CredSettle operates within all legal frameworks. We also use Delhi Lok Adalat and DRT (Debt Recovery Tribunal) when needed for formal legal settlements.'
    },
    {
      question: 'How much debt can I save through settlement in Delhi/Noida/Gurgaon?',
      answer: 'Delhi NCR clients typically save 30-70% on their outstanding debt. The exact amount depends on your loan type, outstanding balance, financial hardship proof and lender policies. Our average Delhi NCR client saves 60% (higher than national average).'
    },
    {
      question: 'Will settlement affect my CIBIL score in NCR?',
      answer: 'Yes, settled loans show as "settled" (not "closed") on your CIBIL report. This impacts your score temporarily. However, it\'s better than continued defaults or legal action. We provide credit rehabilitation guidance after settlement to help you rebuild your score over 12-18 months.'
    },
    {
      question: 'Can you stop recovery harassment in Delhi NCR areas?',
      answer: 'Yes, within 3-5 days. Once you engage us, we send legal notices to all lenders citing RBI Fair Practices Code. Recovery agents must stop direct contact. We handle all lender communication. Harassment stops fast across Delhi, Noida, Gurgaon, Faridabad.'
    },
    {
      question: 'Do you work with all banks and NBFCs in NCR?',
      answer: 'Yes, we settle loans from all major banks (HDFC, ICICI, SBI, Axis, Kotak, Standard Chartered, Citibank) and NBFCs (Bajaj Finserv, Tata Capital, Fullerton, Muthoot Finance) operating in Delhi NCR. We have negotiated thousands of settlements across the region.'
    },
    {
      question: 'What is DRT and how does it help Delhi borrowers?',
      answer: 'DRT (Debt Recovery Tribunal) is a special court in Delhi for debt recovery cases above ₹20 lakhs. If your lender files a case at DRT, we represent you there and negotiate settlements. DRT proceedings are faster than regular courts and often result in good settlements.'
    },
    {
      question: 'How does Delhi Lok Adalat work for loan settlement?',
      answer: 'Delhi Lok Adalat is a mediation system under Legal Services Authority. Both you and lender sit with mediators who facilitate fair settlements. No court fees, quick resolution (usually one session), legally binding decision. We\'ve handled hundreds of cases through Delhi Lok Adalat.'
    },
    {
      question: 'Can government employees in Delhi settle loans?',
      answer: 'Yes, absolutely. Many central and Delhi government employees face loan problems due to salary delays or family expenses. We have special experience with government employee cases. Settlement process is same but we use your job security as negotiation leverage to get better terms.'
    },
    {
      question: 'Do I need to visit your Delhi office?',
      answer: 'No, entire process can be remote via phone, video calls and digital documents. But if you prefer in-person meetings in Delhi, Noida or Gurgaon, we can arrange that. We make it convenient for NCR borrowers wherever they are.'
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
            opacity: 0.9,
            willChange: 'filter',
            backfaceVisibility: 'hidden'
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
                alt="Personal Loan Settlement Delhi NCR"
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
                Personal Loan Settlement Delhi NCR - Noida, Gurgaon, Faridabad
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
                Drowning in loan debt across Delhi NCR? CredSettle helps borrowers in Delhi, Noida, Gurgaon, Faridabad and entire NCR region reduce debt by 30-70% through legal, RBI-compliant settlement. We stop recovery harassment, negotiate with all banks and NBFCs, and deliver complete legal documentation. Over 12,000 NCR families achieved debt freedom with our help.
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
              
              <section id="introduction" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Loan Settlement Services Across Delhi NCR Region
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
                    Delhi NCR (National Capital Region) covers one of India's largest urban clusters. From central Delhi's government offices to Noida's IT parks, Gurgaon's corporate towers and Faridabad's industrial estates, millions of people borrow personal loans for homes, education, medical needs and business. But high living costs, job volatility and family pressures make repayment hard for many.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Personal loan settlement</strong> lets you negotiate with banks and NBFCs to pay less than your full balance. RBI recognizes this as legal debt resolution. When you genuinely cannot repay loans, settlement provides an exit without years of recovery harassment or court battles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled loans for over 12,000 NCR borrowers across Delhi, Noida, Gurgaon, Faridabad, Ghaziabad and surrounding areas. Our clients typically save 30-70% on outstanding amounts (NCR average: 60%). Every settlement follows RBI rules, gets proper legal documentation, and permanently closes your debt without future lender claims.
                  </p>
                </div>
              </section>

              <section id="why-delhi-ncr" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Understanding NCR Debt Landscape - Delhi to Gurgaon
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
                    Delhi NCR's economy creates specific debt traps. Central and state government employees take loans thinking their jobs are secure, then face salary delays or freezes. Noida and Gurgaon IT professionals borrow during boom times, get laid off during downturns. Faridabad's manufacturing workers deal with seasonal income drops. Delhi's traders and small business owners face constant cash flow issues.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Living costs hit hard:</strong> Rent in decent NCR areas runs ₹15,000-₹60,000 monthly. Add school fees for kids, medical bills for parents, commute costs (petrol, metro, tolls) and utility bills. Many families take 2-3 loans just to maintain basic lifestyle. When income drops or stops, all those EMIs become impossible to pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What happens after default:</strong> Miss payments for 90 days and your account becomes NPA (Non-Performing Asset). Banks and NBFCs then unleash recovery pressure. Calls start, 15-25 times daily. Agents show up at your home, sometimes at your office. Your CIBIL score crashes below 600. Some lenders threaten legal action through DRT (Debt Recovery Tribunal) for larger loans.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Settlement ends this nightmare fast. Lenders prefer getting 40-70% now versus spending lakhs on DRT proceedings with uncertain outcomes. You get four direct benefits: major debt cut (save 30-70%), all harassment stops, proper legal closure, and chance to restart financially.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We specialize in NCR's banking scene. We know which Delhi banks settle easily at branch level, which Noida NBFCs need head office approvals, and how Gurgaon lenders handle government employee cases. This local knowledge gets you better deals than national settlement companies can.
                  </p>
                </div>
              </section>

              <section id="common-problems" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Debt Traps Facing NCR Residents Today
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
                    NCR borrowers face debt problems shaped by the region's unique economic mix. These five issues come up most often:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Government Employee Salary Issues:</strong> Delhi has lakhs of central and state government employees. They borrow thinking jobs are secure. But salary freezes happen, pension delays occur, and departmental transfers disrupt income. We handle many government employee cases. Strategy: Use job security as leverage to negotiate better settlement terms, showing lenders they'll get paid eventually but borrower needs time.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Noida-Gurgaon IT Sector Layoffs:</strong> NCR's IT belt (Noida, Greater Noida, Gurgaon, Cyber City) employs thousands. People borrow big during high-salary years. Then company downsizes, project ends, or startup fails. Income drops 60-80% instantly. We've settled hundreds of IT professional cases. We show lenders the sector data, prove income loss is real, push for 50-70% reductions.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Multiple Small Loans Trap:</strong> NBFCs target NCR heavily with easy loans. Many people end up with 4-6 small loans (₹50,000 to ₹2 lakhs each) from different NBFCs, all at 20-35% interest. Total debt: ₹8-12 lakhs. Interest piles up faster than they can pay. Our approach: Negotiate all loans together in one settlement package, not one by one.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit Card Debt Spiral:</strong> NCR professionals often carry 3-4 credit cards. Outstanding grows to ₹5-15 lakhs at 36-42% yearly interest. Revolving interest means debt doubles if you only pay minimums. We settle by stopping interest accumulation and negotiating 30-50% lump sum settlements with card issuers.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Recovery Agent Abuse:</strong> Calls all day, every day. Threats to contact your employer. Messages to family and friends. Agents visiting your home in Delhi, Noida or Gurgaon. Some even threaten police action (illegal). Once you hire us, we cite RBI Fair Practices Code and send legal notices. All direct recovery contact stops within a week.
                  </p>
                </div>
              </section>

              <section id="credsettle-ncr" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  How CredSettle Dominates NCR Loan Settlements
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
                    We've handled over 12,000 loan settlements across Delhi NCR in the last four years. Our NCR clients save an average of 60% on their outstanding debt (higher than national average of 55%). We work with every major bank and NBFC lending in Delhi, Noida, Gurgaon and Faridabad.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What sets us apart:</strong> We're not recovery agents or fly-by-night operators. CredSettle is a registered legal services company following every RBI guideline. Every settlement gets proper documentation, legal standing and permanent closure. We have lawyers and financial experts in Delhi NCR who know the local banking ecosystem inside out.
                  </p>

                  <div id="our-process" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Our NCR-Specific Settlement Strategy
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Free Assessment</strong> - Call or WhatsApp us. We review your loan papers, check outstanding amounts, look at income and collect hardship proof. Phone, video call or in-person meeting in Delhi/Noida/Gurgaon. Completely confidential. <strong>Step 2: Stop Harassment</strong> - We send legal notices to your lenders citing RBI rules. Direct recovery contact stops immediately. All communication comes through us. <strong>Step 3: Negotiate Hard</strong> - Our NCR team contacts each lender's NPA division. We use your hardship documents, NPA cost data and sector knowledge to push for 30-70% debt reduction. Multiple negotiation rounds if needed. <strong>Step 4: Legal Documentation</strong> - Settlement agreements include OTS letters, payment receipts, account closure proof and NOC certificates. Everything properly documented before you pay. <strong>Step 5: Follow Through</strong> - We verify credit bureaus update correctly. We give you advice on rebuilding CIBIL score and avoiding future debt traps.
                    </p>
                  </div>

                  <div id="legal-compliance" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
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
                      Legal Framework and RBI Protection
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions, Fair Practices Code and Banking Ombudsman rules. You get: (1) Written OTS agreement on lender letterhead, (2) Clear statement that no more money can be claimed after you pay, (3) Correct credit reporting (marked "settled" not "written off"), (4) Documents released within 30 days as RBI requires, (5) Legal backup if lender violates terms. Our Delhi NCR lawyers act fast if lenders try to cheat.
                    </p>
                  </div>
                </div>
              </section>

              <section id="drt-lok-adalat" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Using DRT and Lok Adalat for Faster Settlements
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
                    Delhi has two special legal systems for debt cases that borrowers in other states don't have easy access to. We use both regularly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Debt Recovery Tribunal (DRT Delhi):</strong> For loans above ₹20 lakhs, banks and NBFCs can file recovery cases at DRT instead of regular courts. DRT is faster - cases usually finish in 6-18 months versus 3-5 years in civil courts. If your lender files at DRT, we represent you there. Our DRT strategy: Show genuine hardship, propose reasonable settlement (40-60% of outstanding), get tribunal approval. DRT orders are legally binding and final. We've handled over 200 DRT cases in Delhi with 85% settlement success rate.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Delhi Lok Adalat:</strong> This is a mediation system under Legal Services Authorities Act. Works for any loan amount, any stage (even before court filing). Both you and lender sit with trained mediators. Mediators push both sides toward fair settlement. No court fees. Usually resolved in single session. Decision is legally binding like a court order. Banks and NBFCs participate actively in Delhi Lok Adalat because it's fast and cheap for them too.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Lok Adalat Experience:</strong> We've represented hundreds of Delhi NCR borrowers in Lok Adalat across all districts (Central Delhi, South Delhi, East Delhi, Noida, Gurgaon). We prepare complete hardship documentation, write settlement proposals and argue your case hard. Lok Adalat settlements typically land at 40-60% of outstanding amount. Everything gets documented properly with legally enforceable orders.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>When to Use These Options:</strong> If your lender already filed a DRT case or court case, Lok Adalat becomes your fastest route to settlement. If your loan is large (above ₹20 lakhs) and lender is aggressive, we may proactively suggest DRT route. For most cases below ₹20 lakhs, direct negotiation with lender works best. We assess your situation and recommend the right legal path.
                  </p>
                </div>
              </section>

              <section id="ncr-coverage" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Every NCR City Covered - Delhi, Noida, Gurgaon, Faridabad
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
                    <strong>Delhi (All Districts):</strong> South Delhi, Central Delhi, East Delhi, West Delhi, North Delhi, Dwarka, Rohini. We handle loans from all bank branches and NBFCs across Delhi. Special experience with government employee loans because Delhi has the highest concentration of central government offices.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Noida & Greater Noida:</strong> IT professionals, startup employees and real estate investors borrow heavily here. Sector 18, Sector 62 (IT hub), Greater Noida West. We know Noida's IT sector layoff cycles and use that economic data in settlement negotiations. Handled over 2,000 Noida cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Gurgaon (Gurugram):</strong> Corporate professionals in Cyber City, DLF Phase areas, MG Road, Sohna Road. High salaries but also high living costs and job changes. We've settled loans for hundreds of Gurgaon corporate employees, using their employment contracts and salary slips to negotiate better terms.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Faridabad:</strong> Mix of manufacturing workers, traders and service sector employees. Loans often from local NBFCs and cooperative banks. We handle Faridabad cases with understanding of industrial sector cycles and seasonal income patterns.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Ghaziabad & Other NCR:</strong> Full coverage across entire NCR including Ghaziabad, Baghpat, Meerut, Sonipat areas. We coordinate settlements for all NCR borrowers regardless of location.
                  </p>
                </div>
              </section>

              <section id="benefits-delhi" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Eight Reasons NCR Borrowers Pick CredSettle
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
                    <strong>1. NCR-Specific Expertise:</strong> We know which Delhi banks settle at branch level, which Noida NBFCs need regional manager approval, how Gurgaon corporate lenders handle layoff cases. Local knowledge matters.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. DRT & Lok Adalat Experience:</strong> Over 200 DRT cases and hundreds of Lok Adalat representations in Delhi. Most settlement companies have no experience with these legal forums. We do.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Harassment Ends Fast:</strong> Within 3-5 days of hiring us, recovery calls stop. Legal notices citing RBI rules go to all lenders. We handle all contact. No more agents at your door.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Save 30-70% Average:</strong> NCR clients save 60% on average. That's lakhs of rupees. We use NPA economics, hardship proof and settlement precedents to negotiate hard.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Complete Legal Process:</strong> Every settlement follows RBI rules. OTS letters, payment receipts, closure proof, NOC - all properly documented so lenders cannot come back.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Pay Only After Success:</strong> No upfront fees during consultation or negotiation. We charge only after getting your settlement approved and documented. That's our confidence.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>7. Credit Rebuilding Help:</strong> After settlement, we guide you on improving CIBIL, managing finances better and accessing credit responsibly when you need it later.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>8. Proven NCR Track Record:</strong> Over 12,000 Delhi NCR families trust us. Delhi, Noida, Gurgaon, Faridabad across the region. Numbers don't lie.
                  </p>
                </div>
              </section>

              <section id="borrower-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Know Your Legal Rights in Delhi NCR
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
                    Know your legal rights in Delhi NCR. Multiple laws protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices Code:</strong> Banks and NBFCs cannot harass, threaten or abuse you. Cannot tell others about your debt (except courts). Break these rules and you file complaints with Banking Ombudsman or RBI directly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate:</strong> If you have real financial hardship, lenders must discuss settlement. RBI wants resolution before legal action. You have right to propose settlement terms.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Document Release Deadline:</strong> After settlement payment, lender has 30 days maximum to give closure letter and NOC. RBI rule. Delays mean penalties (₹5,000 per day).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit Report Rights:</strong> Settled accounts must show as "settled" (not "written off") on CIBIL, Experian, Equifax. Wrong reporting can be disputed.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>DRT Access:</strong> If bank files DRT case for loans above ₹20 lakhs, you have right to legal representation, right to file counter-claims, and right to propose settlement even after case filing.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Free Lok Adalat:</strong> Delhi NCR residents can use Lok Adalat for any loan dispute. If you earn under ₹5 lakhs yearly, Delhi State Legal Services Authority gives free legal aid.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Police Protection:</strong> Recovery agents cannot enter home without permission, threaten violence or abuse. That's illegal under Indian Penal Code. File FIR at nearest police station in Delhi NCR.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement. Any lender or agent violates rules, we take immediate legal action.
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
                  From First Call to Final Closure - The Complete Process
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
                    <strong>Week 1: Initial Contact</strong> - Call, WhatsApp or website form. Free 30-minute consultation with our Delhi NCR expert. We review your loans, income and problems. Completely confidential. No pressure to sign up.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Week 1-2: Documentation</strong> - You share loan agreements, bank statements, salary slips and hardship proof (layoff letter, medical bills, business closure docs). We analyze everything and calculate best settlement strategy.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Week 2: Stop Harassment</strong> - We send legal notices to all your lenders. Citations of RBI Fair Practices Code. All recovery contact redirected to us. Harassment typically stops within 5-7 days across Delhi NCR.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Week 3-8: Negotiate</strong> - Our NCR team contacts each lender's NPA or settlement division. We push for 30-70% reduction using your hardship data, NPA provisioning costs and settlement precedents. May need multiple negotiation rounds for best terms.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Week 8-10: Agreement</strong> - Lender agrees to settlement. We get formal OTS letter on letterhead with all terms: amount, deadline, closure confirmation. Everything verified before you pay anything.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Week 10-12: Payment</strong> - You arrange agreed amount (lump sum or short installments if negotiated). Pay directly to lender through proper banking channels. We help process and get official receipt immediately.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Week 12-16: Closure</strong> - Lender has 30 days to provide closure letter, NOC and update credit bureaus. We follow up aggressively. Verify CIBIL, Experian and other bureaus show correct "settled" status.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>After Closure: Support</strong> - We counsel you on rebuilding credit score (takes 12-18 months typically). Advice on managing finances and avoiding future debt problems. Our support continues beyond settlement.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total time:</strong> Usually 60-120 days from first consultation to final closure. Depends on lender speed and when you can arrange settlement payment.
                  </p>
                </div>
              </section>

              <section id="case-study-delhi" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Success Story: How Noida Engineer Beat Debt
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
                    <strong>The Client:</strong> Amit K., age 32, software engineer at a Noida Sector 62 IT company. Had ₹28 lakhs total debt (2 personal loans, 3 credit cards, 1 car loan).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What Happened:</strong> Company downsized in early 2023, Amit's project got cancelled. Took 4 months to find new job at 40% lower salary. Couldn't pay EMIs on ₹12 lakhs personal loans, ₹8 lakhs credit cards and ₹8 lakhs car loan. All accounts went NPA. Recovery agents called 25-30 times daily. Visited his Noida flat twice. His CIBIL dropped from 780 to 490. New employer found out about debt, created work stress.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>We Took Over:</strong> Amit called us March 2023. We sent immediate legal notices to all 6 lenders. Harassment stopped in 4 days. Our assessment showed genuine hardship - layoff proof, 40% salary drop, family medical expenses. We documented everything.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Negotiation Details:</strong> Our Noida team spent 2.5 months negotiating. Both personal loans (from NBFCs) settled at 45% of balance. All 3 credit cards (HDFC, ICICI, Axis) settled at 35-40% by showing revolving interest trap and income drop. Car loan (major bank) settled at 50% because car value had depreciated below loan amount.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Final Result:</strong> ₹28 lakhs became ₹11.8 lakhs settlement. Saved ₹16.2 lakhs (58% reduction). Amit arranged money through personal savings, family help and selling some assets. All 6 accounts closed legally with proper NOCs. Recovery stopped permanently.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Current Status:</strong> Amit is completely debt-free. Working at new Noida company without stress. CIBIL improved to 670 after 14 months (shows "settled" but no active defaults). We guided him on credit rebuilding. He told us: "CredSettle saved my career and mental health. The debt was crushing me, constant calls were affecting my work. They handled everything legally and got me out."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> March 2023 first call, April-May negotiation, June 2023 payment, July 2023 complete closure. Total: 4 months.
                  </p>
                </div>
              </section>

              <section id="take-action" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
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
                  Time to Act - Get Your Free NCR Consultation
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
                    Stuck with loan debt in Delhi, Noida, Gurgaon, Faridabad or anywhere in NCR? You don't have to handle this alone. Settlement is legal. RBI recognizes it. It exists for people with real financial problems who need an exit.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Debt destroys everything. Health suffers, family fights increase, work performance drops, peace of mind disappears. Each day you wait, penalties add up, interest compounds, CIBIL falls further, stress multiplies. But there's a solution. Over 12,000 NCR families already escaped through our settlement services.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Start today:</strong> Free confidential consultation. No pressure, no obligations. Just honest assessment and clear options. Our Delhi NCR experts will show you exactly how to stop harassment, cut debt 30-70% and close everything legally.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Financial problems are temporary situations. But unresolved debt can drag on for years, ruining everything. With our legal team, NCR knowledge and proven track record, you can end the debt crisis properly and rebuild your life. Don't let debt control you anymore. Act now.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Central Delhi offices, Noida IT parks, Gurgaon corporate areas or Faridabad homes. Wherever you are in NCR, debt-free life is possible. We'll help you get there.
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
                title="Personal Loan Settlement in Delhi NCR"
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
                      Ready to Become Debt-Free in Delhi NCR?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 12,000+ Delhi NCR families who achieved financial freedom through CredSettle. Free consultation, no upfront fees, guaranteed results.
                    </p>
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

