'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import { useEffect, useState } from 'react';

export default function CreditCardSettlementPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {!isFirefox && (
        <div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: '#007AFF', filter: 'blur(400px)', WebkitFilter: 'blur(400px)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.6, willChange: 'filter', backfaceVisibility: 'hidden' }} />
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
              <img src="/credit_card_hero.png" alt="" aria-hidden className="hidden lg:block" style={{ position: 'absolute', width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center', filter: 'blur(6px)', opacity: 0.9, WebkitMaskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)', maskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)' }} />
              <img src="/credit_card_hero.png" alt="Credit Card Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }} />
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', marginBottom: '12px' }}>
                Credit Card Settlement: Your Path to Freedom
              </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                Drowning in revolving interest? We negotiate a formal, affordable OTS that ends compounding interest and closes your account legally. Credit card settlement is a legitimate debt resolution process in India that helps you eliminate overwhelming credit card debt through RBI-compliant settlement solutions.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                At CredSettle, our expert legal team specializes in credit card settlement services, working directly with card issuers to negotiate reduced payoff amounts. Our debt settlement company ensures all credit card settlements follow RBI guidelines and Indian banking regulations, providing you with complete legal protection.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '20px' }}>
                Our RBI-compliant approach protects your rights, stops harassment from recovery agents, and secures a debt-free future. We help thousands of Indians achieve financial freedom through legal credit card settlement, reducing outstanding balances by 30-70% while ensuring all settlements are properly documented and legally binding.
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
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Legally Compliant Process</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>All negotiations follow RBI and card issuer policies to ensure a legally sound, final closure.</p>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Reduced Principal Guarantee</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We target a significantly reduced outstanding with a documented OTS that makes compounding interest stop.</p>
              </div>
            </div>
          </div>
        </section>
           {/* Comprehensive Content Section - Placed after Reviews/Value Props */}
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
              Understanding Credit Card Settlement in India
            </h2>
            
            {/* What is Credit Card Settlement */}
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
                What is Credit Card Settlement?
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
                Credit card settlement is a legally sanctioned debt resolution mechanism in India where cardholders negotiate with their issuing bank to pay a reduced lump sum amount to close their outstanding credit card account. Unlike personal loans which have fixed EMI structures, credit cards operate on a <strong>revolving credit model</strong>. Your balance continuously accrues interest on the outstanding amount every billing cycle, typically at rates between 36-42% annually (3-3.5% monthly).
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
                Here's what makes credit card debt particularly challenging: if you only pay the minimum amount due (usually 5% of total outstanding), the remaining 95% continues to accumulate compound interest. For example, a ₹1,00,000 outstanding balance at 42% annual interest can balloon to ₹1,42,000 within a year if only minimum payments are made. This "debt trap" is what makes credit card settlement such a critical option for financially stressed cardholders.
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
                At CredSettle, our specialized credit card settlement team understands the unique mechanics of revolving credit. We negotiate directly with card issuers to secure One-Time Settlement (OTS) agreements that typically reduce your total payoff to 30-70% of the outstanding balance, while permanently stopping interest accumulation and closing your account with a formal No Objection Certificate (NOC).
              </p>
            </div>

            {/* How the Settlement Process Works */}
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
                How the Credit Card Settlement Process Works
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
                The settlement journey begins with a comprehensive debt analysis. We examine your credit card statement to break down the principal amount you originally borrowed, accumulated interest charges, late payment fees, over-limit charges, and GST components. This breakdown is crucial because card issuers are often more willing to waive interest and penalty charges than the principal amount.
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
                Once CredSettle takes over your case, we <strong>initiate strategic communication</strong> with your card issuer's collection or settlement department. Our legal experts leverage your financial hardship documentation, account delinquency duration, and repayment capacity to present a compelling settlement proposal. Banks understand that a partial payment now is often better than lengthy legal proceedings or complete write-offs, which strengthens our negotiating position.
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
                When an agreement is reached, you receive a formal settlement letter from the bank. This letter clearly states the settlement amount (for example, ₹50,000 to settle a ₹1,00,000 debt), payment deadline, payment mode, and explicit confirmation that upon payment, all dues will be considered settled and the account will be closed. We ensure this letter is on bank letterhead with authorized signatures, making it a legally binding document.
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
                After you make the settlement payment, CredSettle ensures you receive three critical documents: payment acknowledgment receipt, formal account closure letter, and No Objection Certificate (NOC). We always recommend using official banking channels like NEFT or RTGS for clear documentation. These documents legally protect you from any future claims and confirm that your revolving credit obligation has been permanently terminated.
              </p>
            </div>

            {/* The Revolving Credit Trap */}
            <div style={{ marginBottom: '32px', padding: '20px', borderRadius: '16px', background: 'rgba(0, 122, 255, 0.05)', border: '1px solid rgba(0, 122, 255, 0.15)' }}>
              <h3
                style={{
                  color: '#007AFF',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                <i className="fas fa-info-circle" style={{ marginRight: '8px' }}></i>
                Understanding the Revolving Credit Trap
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '15px',
                  lineHeight: '26px',
                  marginBottom: '12px'
                }}
              >
                Many cardholders don't realize how quickly credit card debt escalates. Let's break down a real example:
              </p>
              <ul style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', fontSize: '15px', lineHeight: '26px', paddingLeft: '24px', marginBottom: '0' }}>
                <li style={{ marginBottom: '8px' }}><strong>Month 1:</strong> You have ₹1,00,000 outstanding. Interest rate is 3.5% per month (42% annually). Interest charged: ₹3,500. You pay minimum due ₹5,000. New balance: ₹98,500.</li>
                <li style={{ marginBottom: '8px' }}><strong>Month 2:</strong> Interest on ₹98,500 = ₹3,447. You pay ₹5,000. New balance: ₹96,947.</li>
                <li style={{ marginBottom: '8px' }}><strong>After 12 months</strong> of minimum payments: You've paid ₹60,000 total, but your balance is still ₹79,000 because ₹39,000 went to interest alone.</li>
                <li><strong>The problem:</strong> At this rate, it would take 8+ years to clear the debt while paying nearly ₹2,50,000 total—2.5X the original amount!</li>
              </ul>
            </div>

            {/* Benefits of Settlement */}
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
                Why Credit Card Settlement with CredSettle Works
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
                <strong>Immediate Interest Cessation:</strong> The moment a settlement is finalized and paid, the revolving interest mechanism stops. No more compounding, no more monthly interest charges ballooning your debt. If you settle a ₹1,00,000 debt for ₹40,000, you save ₹60,000 plus all future interest that would have accumulated.
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
                <strong>Legal Harassment Protection:</strong> Under RBI's Fair Practices Code and the Banking Ombudsman Scheme, borrowers have explicit protection against abusive collection practices. However, many collection agencies violate these norms with threatening calls, visits to workplaces, and public shaming. When CredSettle takes over your case, we issue legal notices to these agencies, invoking your rights under RBI/2021-22/125 DOR.STR.REC.68/21.04.048/2021-22 guidelines, which mandate dignified treatment and prohibit harassment.
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
                <strong>Credit Report Management:</strong> Settlement marks your account as "Settled" rather than "Closed" on your credit report, which temporarily impacts your CIBIL score. However, this is far better than having a "Written Off" status or continuing delinquency. CredSettle provides post-settlement credit rehabilitation guidance. Within 12-18 months of responsible financial behavior (using secured credit cards, maintaining utility payment records), most clients see their credit scores recover to acceptable levels.
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
                <strong>Preventing Legal Escalation:</strong> When credit card dues remain unpaid for over 180 days, banks can initiate legal recovery under Section 138 of the Negotiable Instruments Act or file civil suits. Settlement before legal proceedings begin saves you from court appearances, legal fees, and potential asset attachment orders.
              </p>
            </div>

            {/* RBI Guidelines */}
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
                RBI Guidelines Protecting Your Settlement Rights
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
                The Reserve Bank of India's <strong>Master Direction on Credit Card and Debit Card Operations</strong> mandates that banks must have board-approved policies for debt resolution and settlement. Key protections include:
              </p>
              <ul style={{ color: 'rgba(12, 39, 86, 0.80)', fontFamily: 'Poppins', fontSize: '16px', lineHeight: '28px', paddingLeft: '24px', marginBottom: '16px' }}>
                <li style={{ marginBottom: '12px' }}><strong>Transparent Communication:</strong> Banks must clearly communicate all charges, interest calculation methods, and your outstanding breakup (principal vs. interest vs. fees).</li>
                <li style={{ marginBottom: '12px' }}><strong>No Forced Settlements:</strong> Settlement must be voluntary. Banks cannot coerce you into accepting unfavorable terms or threaten criminal action for civil debt.</li>
                <li style={{ marginBottom: '12px' }}><strong>Dignified Collection:</strong> Recovery agents cannot call before 7 AM or after 7 PM, cannot use abusive language, cannot contact your employer or publicly shame you.</li>
                <li style={{ marginBottom: '12px' }}><strong>Proper Documentation:</strong> Every settlement must be documented in writing with formal letters confirming terms, and upon completion, banks must issue NOC and update credit bureaus within 30 days.</li>
                <li><strong>Grievance Redressal:</strong> If a bank or its agents violate these norms, you can file complaints with the Banking Ombudsman at no cost, with decisions typically within 30 days.</li>
              </ul>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '0'
                }}
              >
                CredSettle's legal team ensures strict adherence to these RBI guidelines throughout your settlement process. We maintain comprehensive documentation, ensure all communications are through proper channels, and don't hesitate to escalate to the Banking Ombudsman if card issuers or their agents violate your rights. This regulatory-compliant approach gives you maximum leverage in negotiations while protecting your legal standing.
              </p>
            </div>
          </div>
        </section>
        {/* Why CredSettle Section (same structure) */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '28.8px' }}>
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '9.6px', marginBottom: '19.2px' }}>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why CredSettle is Your Best Resolution<br />Partner</h2>
            <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>The six core benefits that ensure a protected, successful, and final debt settlement.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" style={{ gap: '19.2px' }}>
            {[
              { title: 'Specialized Expertise', body: 'We focus on credit card closures, issuer policies, and RBI compliance.' },
              { title: 'End-to-End Protection', body: 'From account analysis to OTS letter and final closure support.' },
              { title: 'Client-Focused Dignity', body: 'Your peace of mind first—harassment protection and transparent updates.' },
              { title: 'Proven Track Record', body: 'Thousands of successful card settlements with reduced final outflows.' },
              { title: 'Strategic Negotiation', body: 'Leverage repayment capacity and case strength for best outcomes.' },
              { title: 'Swift & Final Resolution', body: 'Stop interest accumulation and close the account with finality.' },
            ].map((c, i) => (
              <div key={i} className="p-6 md:p-8 lg:p-[48.8px]" style={{ borderRadius: '40px', background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10), 4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', backdropFilter: 'blur(12.35px)' }}>
                <h3 className="mb-2 text-base md:text-lg lg:text-[18px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700 }}>{c.title}</h3>
                <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>{c.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats + Partner Callout */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '36px', marginBottom: '24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative">
              <div aria-hidden className="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%, -50%)', borderRadius: '9999px', background: 'radial-gradient(closest-side, rgba(0,122,255,0.30), rgba(0,122,255,0.16) 55%, rgba(0,122,255,0.0) 80%)', filter: 'blur(4px)', pointerEvents: 'none', zIndex: 0 }} />
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['15,000+','4.9/5','₹ 850 Crores+','100%'].map((stat, idx) => (
                  <div key={idx} className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12" style={{ borderRadius: '40px', background: 'rgba(239, 247, 255, 0.30)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)' }}>
                    <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>{stat}</h3>
                    <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                      {idx===0 && 'Successful Settlements Secured for cardholders across India.'}
                      {idx===1 && 'Client Satisfaction Rating from verified reviews and testimonials.'}
                      {idx===2 && 'Debt Principal Reduced via strategic OTS and waiver of charges.'}
                      {idx===3 && 'RBI Compliance Guaranteed with proper closure letters and NOC.'}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center lg:items-end justify-between mt-8 lg:mt-0" style={{ gap: '16px' }}>
              <div className="w-full text-center lg:text-right">
                <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why CredSettle is Your Best Resolution Partner</h2>
                <p className="text-xs md:text-sm lg:text-[14px] mt-2" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>The six core benefits that ensure a protected, successful, and final debt settlement.</p>
              </div>
              <div className="w-full flex justify-center lg:justify-end lg:-mt-20" style={{ marginRight: '0' }}>
                <img src="/belowservices/Credit%20Score.png" alt="Credit Score" className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]" style={{ height: 'auto', borderRadius: '0px', transform: 'none', display: 'block', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="Credit card" servicePath="credit-card-settlement" />

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
              Credit card settlement services in all states and union territories
            </p>
          </div>

          {/* States & UT Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3" style={{ gap: '12px' }}>
            {(() => {
              const stateSpecificRoutes: Record<string, string> = {
                'Andhra Pradesh': '/services/credit-card-settlement/andhra-pradesh',
                'Delhi': '/services/credit-card-settlement/delhi',
                'Gujarat': '/services/credit-card-settlement/gujarat',
                'Haryana': '/services/credit-card-settlement/haryana',
                'Karnataka': '/services/credit-card-settlement/karnataka',
                'Maharashtra': '/services/credit-card-settlement/maharashtra',
                'Rajasthan': '/services/credit-card-settlement/rajasthan',
                'Tamil Nadu': '/services/credit-card-settlement/tamil-nadu',
                'Telangana': '/services/credit-card-settlement/telangana',
                'Uttar Pradesh': '/services/credit-card-settlement/uttar-pradesh',
                'West Bengal': '/services/credit-card-settlement/west-bengal'
              };
              return [
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
              const href = stateSpecificRoutes[state] ?? `/services/credit-card-settlement/${slug}`;
              const metroCities = ['Maharashtra', 'Andhra Pradesh', 'Telangana', 'Karnataka', 'Uttar Pradesh', 'Delhi', 'West Bengal', 'Gujarat', 'Haryana', 'Tamil Nadu', 'Rajasthan'];
              const isMetroCity = metroCities.includes(state);
              return (
                <a
                  key={index}
                  href={href}
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
                    style={{
                      color: isMetroCity ? '#FFFFFF' : '#0C2756',
                      fontFamily: 'Poppins',
                      fontSize: '12px',
                      fontWeight: 500,
                      lineHeight: '16px',
                      margin: 0
                    }}
                  >
                    {state}
                  </p>
                </a>
              );
            });
            })()}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="w-full py-12">
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-[76px] w-full">
                <div className="flex flex-col items-start gap-[21px] w-full lg:w-[365px]">
                  <h2 className="text-[24px] md:text-[32px] leading-[24px] md:leading-[32px] font-bold"><span style={{ color: '#0C2756' }}>Credit Card Settlement{`\n`}<br /> FAQs — </span><span style={{ color: '#007AFF' }}>Answered.</span></h2>
                  <p className="text-[13px] md:text-[15px] leading-[13px] md:leading-[15px] font-normal"><span style={{ color: '#0C2756' }}>Need more details? </span><span style={{ color: '#007AFF', textDecoration: 'underline' }}>Contact us</span><span style={{ color: '#0C2756' }}> anytime.</span></p>
                </div>
                <div className="w-full lg:w-[800px] lg:ml-auto p-4 rounded-xl" style={{ background: '#EFF7FF' }}>
                  <div className="flex flex-col gap-4">
                    {[
                      { q: 'How is credit card OTS calculated?', a: 'Issuers consider outstanding principal, interest, fees, your repayment capacity, and account age. We position your case for the most affordable lawful closure.' },
                      { q: 'Will interest stop after OTS?', a: 'On acceptance and payment as per OTS terms, compounding interest and collections cease; you receive closure documents.' },
                      { q: 'Can you stop recovery calls?', a: 'Yes. We route communications via us and file complaints against harassment where needed.' },
                      { q: 'What documents do I get?', a: 'Formal OTS letter, payment acknowledgments, and account closure/NOC from the issuer.' },
                      { q: 'Does settlement ruin my credit?', a: 'It can impact scores short term. We guide rehabilitation so your creditworthiness improves over time.' }
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-lg transition-all duration-500 ease-in-out cursor-pointer overflow-hidden">
                        <details>
                          <summary className="flex justify-between items-start gap-[49px] p-[21px_28px] cursor-pointer list-none"><span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal flex-1" style={{ color: '#0C2756' }}>{item.q}</span></summary>
                          <div className="px-[28px] pb-[21px] pt-3 border-t border-gray-200"><p className="text-[11px] md:text-[13px] leading-[14px] md:leading-[15px] font-normal" style={{ color: 'rgba(12, 39, 86, 0.7)' }}>{item.a}</p></div>
                        </details>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{ background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)', boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)' }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>Ready to Close Your Credit Card Legally?</h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Secure an RBI-compliant One-Time Settlement and end compounding interest—start today.</p>
                  </div>
                  <button className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90" style={{ boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset' }}><span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal" style={{ color: '#0C2756' }}>Get Your Free Consultation</span></button>
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


