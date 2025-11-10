'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';
import { useEffect, useState } from 'react';

export default function CarLoanSettlementPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const carLoanFaqs = [
    {
      question: 'Can a secured car loan be settled without losing the vehicle?',
      answer:
        'Yes, provided we align with the lender’s asset recovery policy. We negotiate for settlements that prioritize legal closure while working to retain possession wherever feasible.'
    },
    {
      question: 'What happens once a car loan OTS is executed?',
      answer:
        'Collections stop and you receive the sanctioned OTS letter, payment receipts, and the lender’s closure/NOC. If the vehicle was hypothecated, we ensure the lien is removed promptly.'
    },
    {
      question: 'How quickly can harassment from field agents be stopped?',
      answer:
        'Immediately after engagement. We route communication through our legal team, log violations, and escalate to compliance officers so coercive visits cease.'
    },
    {
      question: 'Do I still owe interest or penalties after settlement?',
      answer:
        'No. Once the OTS amount is paid within the agreed timeline, waived interest and penalties cannot be revived. We verify the account reflects zero balance.'
    },
    {
      question: 'Will settlement damage my credit long term?',
      answer:
        'A short-term credit impact is expected, but it is preferable to repossession or charge-off. We provide a credit rebuild strategy to restore your score over the next 12-24 months.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {!isFirefox && (
        <div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: '#007AFF', filter: 'blur(400px)', WebkitFilter: 'blur(400px)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.6 }} />
      )}
      {isFirefox && (
        <div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.9 }} />
      )}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            {/* Right visual - comes first on mobile */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img src="/car_hero.png" alt="" aria-hidden className="hidden lg:block" style={{ position: 'absolute', width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center', filter: 'blur(6px)', opacity: 0.9, WebkitMaskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)', maskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)' }} />
              <img src="/car_hero.png" alt="Car Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }} />
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', marginBottom: '12px' }}>
                Car Loan Settlement: Keep Your Vehicle, Regain Control
              </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                We negotiate reduced balances and legal settlements to minimize asset risk and stress. Car loan settlement is a legitimate debt resolution process in India that helps vehicle owners resolve outstanding car loan debt through RBI-compliant settlement solutions.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                At CredSettle, our expert legal team specializes in car loan settlement services, working directly with banks and NBFCs to negotiate reduced payoff amounts for car loans. Our debt settlement company ensures all car loan settlements follow RBI guidelines and Indian banking regulations, providing complete legal protection.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '20px' }}>
                All actions strictly follow RBI recovery and settlement guidelines. We help car owners achieve financial freedom through legal car loan settlement, reducing outstanding balances by 30-70% while ensuring all settlements are properly documented and legally binding. Our RBI-compliant approach protects your vehicle and stops harassment from recovery agents.
              </p>
              <button className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px]" style={{ borderRadius: '32.4px', background: '#007AFF', boxShadow: '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset' }}>
                Get Started Today
              </button>
            </div>
          </div>
        </section>

        {/* Reviews + dividers + value props */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px', marginTop: '28px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '28px' }}>
            <div className="flex flex-col gap-4 lg:gap-3 w-full lg:w-auto lg:justify-start" style={{ maxWidth: '100%' }}>
              <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                <div className="w-1/2 flex justify-center items-center"><img src="/ggle.png" alt="Google Reviews - CredSettle" className="h-6 lg:h-[29.16px]" /></div>
                <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                  <div className="flex justify-center items-center" style={{ gap: '6.48px' }}><img src="/stars.png" alt="5 Star Rating - CredSettle" className="h-3 lg:h-[12.96px]" /><span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span></div>
                  <div className="text-center"><div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div></div>
                </div>
              </div>
              <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                <div className="w-1/2 flex justify-center items-center"><img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" className="h-6 lg:h-[29.16px]" /></div>
                <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                  <div className="flex justify-center items-center" style={{ gap: '6.48px' }}><img src="/stars.png" alt="5 Star Rating - CredSettle" className="h-3 lg:h-[12.96px]" /><span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span></div>
                  <div className="text-center"><div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div></div>
                </div>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Compliance With Asset Security</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We negotiate within RBI norms to limit risk of repossession and ensure dignity.</p>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Reduced Liability Outcomes</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Target significant reductions and final legal closure for true peace of mind.</p>
              </div>
            </div>
          </div>
        </section>
  {/* Comprehensive Content Section */}
  <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '36px' }}
        >
          <div className="bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 rounded-3xl p-6 md:p-8 lg:p-12" style={{ boxShadow: '0 4px 20px rgba(0, 122, 255, 0.08)', border: '1px solid rgba(0, 122, 255, 0.1)' }}>
            <h2
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontSize: 'clamp(24px, 5vw, 32px)',
                fontWeight: 700,
                lineHeight: '1.3',
                marginBottom: '32px',
                textAlign: 'center'
              }}
            >
              Understanding Car Loan Settlement in India
            </h2>
            
            {/* What is Car Loan Settlement */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                What is Car Loan Settlement?
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Car loan settlement is a legally recognized debt resolution mechanism in India that enables vehicle owners to negotiate with their lender—whether a bank or NBFC—to pay a <strong>reduced lump sum amount</strong> instead of the full outstanding loan balance. What makes car loans fundamentally different from personal loans or credit cards is their <strong>secured nature</strong>: your vehicle serves as collateral through a hypothecation agreement, giving the lender legal rights to repossess the asset if payments default.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                This secured status means car loan settlements require understanding of <strong>vehicle depreciation dynamics</strong> and the Loan-to-Value (LTV) ratio. When you financed your vehicle, the lender approved the loan based on the car's on-road price. However, vehicles depreciate rapidly—typically 15-20% in the first year, and 10-15% annually thereafter. By the time you're seeking settlement, the vehicle's current market value (often assessed through platforms like CarDekho or OLX resale values) may be significantly lower than your outstanding loan principal, especially if you're in the early years of the loan tenure.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                At CredSettle, our car loan settlement specialists understand these technical nuances. We leverage the depreciated vehicle value, your financial hardship documentation, and the lender's provisioning requirements (cost of repossession, storage, auction, and potential loss) to negotiate settlements that typically reduce your payoff obligation by 30-70%. Our legal team ensures all settlements comply with RBI guidelines and properly address the <strong>hypothecation release process</strong>, ensuring you receive a clear Registration Certificate (RC) with the lender's charge mark removed.
              </p>
            </div>

            {/* How Car Loan Settlement Process Works */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                How the Car Loan Settlement Process Works
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The settlement journey begins with a <strong>comprehensive secured loan audit</strong>. We analyze your loan agreement to identify the principal borrowed, the interest rate structure (flat rate vs. reducing balance method—most car loans use reducing balance), any processing fees or charges, accumulated interest, and penalty charges. Importantly, we calculate your current <strong>outstanding principal-to-vehicle-value ratio</strong>. If your outstanding amount exceeds the vehicle's current market value (creating a "negative equity" situation), this significantly strengthens our negotiation position.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Once CredSettle assumes responsibility for your case, we <strong>initiate strategic communication</strong> with your lender's vehicle loan recovery or NPA (Non-Performing Asset) division. Here's where technical knowledge becomes crucial: when your EMIs are overdue for 90 days or more, your account is classified as an NPA. At this stage, lenders face increased provisioning requirements—they must set aside capital against potential loss. A settlement offer becomes attractive because repossession involves significant costs: hiring recovery agents, transporting and storing the vehicle, auctioning it (often at 20-40% below market value), and accounting for legal costs if the borrower contests seizure.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Our negotiation strategy addresses the <strong>hypothecation agreement</strong> head-on. Under the Motor Vehicles Act, 1988, and the Central Motor Vehicles Rules, 1989, your vehicle's Registration Certificate (Form 23) includes the lender's name as the hypothecation holder. This legal charge prevents you from selling or transferring the vehicle without the lender's No Objection Certificate (NOC). We negotiate settlements that include explicit hypothecation removal—ensuring the lender provides a NOC and submits Form 35 (Notice of Removal/Satisfaction of Hypothecation) to the Regional Transport Office (RTO) within the RBI-mandated 30-day period after settlement payment.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                Crucially, CredSettle also protects you from repossession attempts during negotiations. Under Section 13 of the SARFAESI Act (Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest Act, 2002), lenders have the right to take possession of secured assets without court intervention—but only after issuing a 60-day demand notice. Our legal team ensures proper notice periods are followed, and we challenge any illegal seizure attempts. If recovery agents threaten immediate repossession without proper notice, we file formal complaints with the RBI Ombudsman and local law enforcement, as such actions violate both SARFAESI procedures and RBI's Fair Practices Code.
              </p>
            </div>

            {/* Benefits of Car Loan Settlement */}
            <div style={{ marginBottom: '32px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                Benefits of Settling Your Car Loan with CredSettle
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The primary advantage of professional car loan settlement is <strong>asset protection combined with debt reduction</strong>. In many cases, we successfully negotiate settlements that allow you to retain vehicle ownership. This is particularly feasible when the settlement amount we secure is less than the vehicle's current market value—the lender realizes more value by accepting the settlement payment than by repossessing, auctioning, and potentially selling the vehicle at a steep discount while bearing all associated costs.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Beyond financial savings, CredSettle provides <strong>immediate protection from repossession threats and harassment</strong>. The moment we take over your case, we legally intervene to stop all direct contact between the lender and you. Recovery agents are notorious for aggressive tactics: showing up at your workplace, contacting family members, threatening immediate vehicle seizure, or using tracker devices installed in vehicles to locate and repossess them. Our legal team files formal complaints against any violations of the RBI's Fair Practices Code or SARFAESI procedural requirements, creating a documented record that strengthens your position and often halts illegal recovery actions immediately.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                Additionally, CredSettle ensures you receive <strong>complete documentation for hypothecation removal</strong>. Many borrowers who settle independently receive the settlement letter but struggle for months to get the lender to file Form 35 with the RTO, leaving the hypothecation active on the RC book. Our team tracks this process end-to-end, ensuring compliance with the RBI's September 2023 mandate requiring lenders to release all security documents and remove registered charges within 30 days of settlement payment—or face penalties of ₹5,000 per day of delay. This ensures you receive a clean, unencumbered RC, allowing you to sell, transfer, or refinance the vehicle in the future without restrictions.
              </p>
            </div>

            {/* RBI Guidelines Specific to Car Loan Settlement */}
            <div style={{ marginBottom: '0' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '22px',
                  fontWeight: 600,
                  lineHeight: '32px',
                  marginBottom: '16px'
                }}
              >
                RBI Guidelines Governing Car Loan Settlement
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The Reserve Bank of India has established comprehensive frameworks specifically protecting secured loan borrowers. The most critical recent development is the <strong>30-day document release mandate</strong> (effective December 1, 2023), which requires lenders to release all original security documents—including the RC book original (if held) and submit the hypothecation removal form (Form 35) to the RTO—within 30 days of receiving the settlement payment. Non-compliance triggers automatic penalties of ₹5,000 per day attributable to the lender, providing strong enforcement leverage for borrowers.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Another significant protection is the <strong>abolition of penal interest on overdue EMIs</strong> (effective June 15, 2025). Previously, lenders could charge penalty interest rates as high as 24-36% annually on overdue amounts, compounding your debt burden exponentially. Under the new RBI directive, lenders can only charge a one-time <strong>penal charge</strong> (flat fee, not compounding interest) on the overdue principal. This reform significantly reduces the outstanding amount accumulating while you negotiate settlement, making settlements more affordable and fair.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                Finally, the RBI's <strong>Fair Practices Code for Lenders</strong> and <strong>Guidelines on Managing Risks and Code of Conduct in Outsourcing of Financial Services</strong> establish strict conduct requirements for recovery agents. Lenders are fully responsible for agent behavior and cannot disclaim liability. Prohibited practices include: visiting borrowers without prior notice, contacting third parties (employers, neighbors, family not co-signed on the loan), using abusive language or threats, repossessing vehicles without issuing the mandatory 60-day SARFAESI notice, and using physical force or intimidation. At CredSettle, we meticulously document any violations and file complaints with the RBI Ombudsman, Banking Ombudsman, and local law enforcement, often resulting in immediate cessation of harassment and strengthening our settlement negotiation position significantly.
              </p>
            </div>
          </div>
        </section>
        {/* Why section */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '28.8px' }}>
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '9.6px', marginBottom: '19.2px' }}>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why CredSettle is Your Best Resolution<br />Partner</h2>
            <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Six core benefits that ensure a protected, successful, and final settlement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" style={{ gap: '19.2px' }}>
            {['Specialized Expertise','End-to-End Protection','Client-Focused Dignity','Proven Track Record','Strategic Negotiation','Swift & Final Resolution'].map((t, i) => (
              <div key={i} className="p-6 md:p-8 lg:p-[48.8px]" style={{ borderRadius: '40px', background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10), 4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', backdropFilter: 'blur(12.35px)' }}>
                <h3 className="mb-2 text-base md:text-lg lg:text-[18px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700 }}>{t}</h3>
                <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>We negotiate legally and strategically to protect your vehicle and finances.</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats + Partner + image */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '36px', marginBottom: '24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative">
              <div aria-hidden className="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', borderRadius: '9999px', background: 'radial-gradient(closest-side, rgba(0,122,255,0.30), rgba(0,122,255,0.16) 55%, rgba(0,122,255,0.0) 80%)', filter: 'blur(4px)', pointerEvents: 'none', zIndex: 0 }} />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['4,800+','4.9/5','₹ 280 Crores+','100%'].map((stat, idx) => (
                  <div key={idx} className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12" style={{ borderRadius: '40px', background: 'rgba(239, 247, 255, 0.30)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)' }}>
                    <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>{stat}</h3>
                    <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                      {idx===0 && 'Successful Car Loan Settlements with minimized asset risk.'}
                      {idx===1 && 'Client Satisfaction Rating based on service outcomes.'}
                      {idx===2 && 'Debt Principal Reduced through strategic negotiations.'}
                      {idx===3 && 'RBI Compliance Guaranteed at every step.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-between mt-8 lg:mt-0" style={{ gap: '16px' }}>
              <div className="w-full text-center lg:text-right">
                <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why CredSettle is Your Best Resolution Partner</h2>
                <p className="text-xs md:text-sm lg:text-[14px] mt-2" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Six benefits that ensure protection and final settlement.</p>
              </div>
              <div className="w-full flex justify-center lg:justify-end lg:-mt-20" style={{ marginRight: '0' }}>
                <img src="/belowservices/Car%20Loan.png" alt="Car Loan" className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]" style={{ height: 'auto', borderRadius: '0px', transform: 'none', display: 'block', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="Car loan" servicePath="car-loan-settlement" />

        {/* States & Union Territories Grid Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginTop: '36px',
            marginBottom: '36px'
          }}
        >
          {/* Centered Heading */}
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '6px', marginBottom: '20px' }}>
            <h2
              className="text-xl md:text-2xl lg:text-[28px] leading-tight"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '32px'
              }}
            >
              We Serve Across India
            </h2>
            <p
              className="text-xs md:text-sm lg:text-[13px]"
              style={{
                color: 'rgba(12, 39, 86, 0.70)',
                fontFamily: 'Poppins',
                lineHeight: '18px'
              }}
            >
              Car loan settlement services in all states and union territories
            </p>
          </div>

          {/* States & UT Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3" style={{ gap: '12px' }}>
            {[
              'Andaman and Nicobar Islands',
              'Andhra Pradesh',
              'Arunachal Pradesh',
              'Assam',
              'Bihar',
              'Chandigarh',
              'Chhattisgarh',
              'Dadra and Nagar Haveli and Daman and Diu',
              'Delhi',
              'Goa',
              'Gujarat',
              'Haryana',
              'Himachal Pradesh',
              'Jammu and Kashmir',
              'Jharkhand',
              'Karnataka',
              'Kerala',
              'Ladakh',
              'Lakshadweep',
              'Madhya Pradesh',
              'Maharashtra',
              'Manipur',
              'Meghalaya',
              'Mizoram',
              'Nagaland',
              'Odisha',
              'Puducherry',
              'Punjab',
              'Rajasthan',
              'Sikkim',
              'Tamil Nadu',
              'Telangana',
              'Tripura',
              'Uttar Pradesh',
              'Uttarakhand',
              'West Bengal'
            ].map((state, index) => {
              const slug = state.toLowerCase().replace(/\s+/g, '-');
              const metroCities = ['Maharashtra', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Uttar Pradesh', 'Delhi', 'West Bengal', 'Gujarat', 'Haryana', 'Tamil Nadu', 'Rajasthan'];
              const isMetroCity = metroCities.includes(state);
              return (
                <a
                  key={index}
                  href={`/services/car-loan-settlement/${slug}`}
                  className="cursor-pointer transition-all duration-200 hover:opacity-80"
                  style={{
                    borderRadius: '24px',
                    background: isMetroCity 
                      ? 'linear-gradient(168deg, #007AFF 0%, #0C2756 100%)'
                      : 'rgba(239, 247, 255, 0.30)',
                    boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)',
                    padding: '12px 10px',
                    minHeight: '60px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    textDecoration: 'none'
                  }}
                >
                  <p
                    className="text-[10px] md:text-xs lg:text-[12px]"
                    style={{
                      color: isMetroCity ? '#FFFFFF' : '#0C2756',
                      fontFamily: 'Poppins',
                      fontWeight: 500,
                      lineHeight: '16px',
                      margin: 0
                    }}
                  >
                    {state}
                  </p>
                </a>
              );
            })}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={carLoanFaqs} title="Car Loan Settlement" />
              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{ background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)', boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)' }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>Ready to Resolve Your Car Loan Legally?</h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Pursue an RBI-compliant OTS and reduce your liability with confidence.</p>
                  </div>
                  <CTAButton>
                    Get Your Free Consultation
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


