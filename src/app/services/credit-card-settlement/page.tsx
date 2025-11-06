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
                  href={`/services/credit-card-settlement/${slug}`}
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
            })}
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

        {/* Comprehensive Content Section */}
        <section
          className="w-full mx-auto"
          style={{ maxWidth: '1280px', paddingLeft: '16px', paddingRight: '16px', marginTop: '60px', marginBottom: '40px' }}
        >
          <div className="bg-white rounded-2xl p-6 md:p-10" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
            <h2
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontSize: '28px',
                fontWeight: 700,
                lineHeight: '36px',
                marginBottom: '24px'
              }}
            >
              Understanding Credit Card Settlement in India
            </h2>
            
            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                What is Credit Card Settlement?
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Credit card settlement is a legal debt resolution process that allows cardholders to
                negotiate with their credit card issuer to pay a reduced amount to settle
                outstanding credit card debt. This debt settlement process is completely legal in
                India and follows RBI guidelines for credit card settlement. When you're struggling
                with high-interest credit card debt, settlement offers a way to eliminate your debt
                without facing continuous harassment from recovery agents or legal action.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                At CredSettle, our expert legal team specializes in credit card settlement services
                across India, helping clients negotiate with card issuers to achieve significant
                reductions in their outstanding credit card balances. Our debt settlement company
                ensures all credit card settlements comply with RBI regulations, providing you
                with a legitimate debt resolution solution.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                How Credit Card Settlement Works
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The credit card settlement process begins with a comprehensive analysis of your
                outstanding credit card debt and financial situation. Our expert negotiators then
                contact your card issuer to initiate settlement discussions. We leverage our
                knowledge of RBI guidelines and card issuer policies to negotiate the best possible
                settlement terms for you, typically achieving 30-70% reductions in outstanding
                balances.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Once a settlement amount is agreed upon, we help you obtain a formal settlement
                letter from the card issuer, which legally documents the agreed-upon terms. This
                settlement letter protects you from future claims and ensures your credit card
                account is permanently closed. Throughout this process, CredSettle also provides
                harassment protection, stopping illegal recovery agent calls and threats
                immediately.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                Benefits of Credit Card Settlement with CredSettle
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Choosing CredSettle for your credit card settlement offers numerous advantages.
                Our debt settlement company provides complete legal protection, ensuring all
                negotiations follow RBI-compliant processes. We help thousands of Indians achieve
                financial freedom through legal credit card settlement, eliminating overwhelming
                debt while protecting your legal rights.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Beyond financial savings, our credit card settlement services include immediate
                harassment protection. Once CredSettle takes over your case, we legally intervene
                to stop all recovery agent harassment, giving you peace of mind. Our expert legal
                team handles all communication with card issuers, allowing you to focus on
                rebuilding your financial future without the stress of constant calls and threats.
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <h3
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  marginBottom: '12px'
                }}
              >
                RBI Guidelines for Credit Card Settlement
              </h3>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                The Reserve Bank of India (RBI) has established clear guidelines for credit card
                settlement processes in India. These RBI guidelines ensure that debt settlement
                procedures are fair, transparent, and legally compliant. At CredSettle, we strictly
                adhere to all RBI regulations, ensuring your credit card settlement is legitimate
                and protects your legal rights as a cardholder.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  fontSize: '16px',
                  lineHeight: '28px',
                  marginBottom: '16px'
                }}
              >
                Our loan settlement company ensures that all credit card settlements are properly
                documented with formal settlement letters, protecting you from future disputes. We
                also help you understand your rights under Indian banking regulations, including
                protection from illegal harassment by recovery agents. This RBI-compliant approach
                ensures your credit card settlement is legally sound and provides permanent
                resolution to your financial challenges.
              </p>
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


