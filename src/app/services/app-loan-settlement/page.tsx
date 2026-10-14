'use client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';
import { useEffect, useState } from 'react';
export default function AppLoanSettlementPage() {
    const [isFirefox, setIsFirefox] = useState(false);
    useEffect(() => {
        const userAgent = navigator.userAgent.toLowerCase();
        setIsFirefox(userAgent.includes('firefox'));
    }, []);
    const appLoanFaqs = [
        {
            question: 'How quickly can you stop harassment from app-based recovery agents?',
            answer: "Within hours of engagement. We forward all contacts to our legal helpline. Issue cease-and-desist notices. Escalate violations to RBI and cyber crime cells."
        },
        {
            question: 'Is a legal One-Time Settlement possible with app lenders?',
            answer: 'Yes. Many digital lenders operate under NBFC licenses. We settle documented closures aligned with their policies and make sure you receive formal closure.'
        },
        {
            question: 'Will my contacts and personal data stay protected?',
            answer: 'We challenge unlawful data usage and lodge complaints when lenders misuse contact lists. Protecting your privacy and dignity is central to our engagement.'
        },
        {
            question: 'What paperwork will I receive after settlement?',
            answer: 'You get the closure proof. Payment acknowledgments. a no-dues letter. We check credit desk updates so the account reflects as settled.'
        },
        {
            question: 'Does settling an app loan hurt my credit for years?',
            answer: 'There may be a short-term impact. it is better than ongoing defaults. We guide a credit rebuild plan so you can restore your score responsibly.'
        }
    ];
    return (<div className="relative min-h-screen bg-white mt-6">
      {!isFirefox && (<div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: '#007AFF', filter: 'blur(400px)', WebkitFilter: 'blur(400px)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.3 }}/>)}
      {isFirefox && (<div className="absolute top-0 left-0" style={{ width: '757px', height: '757px', borderRadius: '757px', background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)', transform: 'translate(-50%, -50%)', zIndex: 0, opacity: 0.9 }}/>)}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            {/* Right visual - comes first on mobile */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img src="/app_hero.png" alt="App Loan Settlement" aria-hidden width={500} height={500} className="hidden lg:block" style={{ position: 'absolute', width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center', filter: 'blur(6px)', opacity: 0.9, WebkitMaskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)', maskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)' }}/>
              <img src="/app_hero.png" alt="App Loan Settlement" width={500} height={500} className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }}/>
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', marginBottom: '12px' }}>
                App Loan Settlement: Stop Harassment, Settle Legally
              </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}> We intervene fast against unlawful claims tactics and secure an RBI-compliant closure. App loan closure is a legitimate debt relief process in India that helps clients resolve unpaid app-based loan debt through legal closure solutions. </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}> At CredSettle. Our expert legal team specializes in app loan closure services. Working straight with app-based lenders and NBFCs to settle reduced payoff amounts for app loans. Our debt closure company makes sure all app loan closures follow RBI guidelines and Indian banking rules. Providing complete legal safety. </p>
              <a href="/contact" className='cursor-pointer' style={{ textDecoration: 'none', cursor: 'pointer' }}>    
              <button className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px] cursor-pointer" style={{ borderRadius: '32.4px', background: '#007AFF', boxShadow: '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset' }}>
                Get Started Today.
              </button>
              </a>
            </div>
          </div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '28px' }}>
            {/* Reviews column (similar to HeroSection small cards) */}
            <div className="flex w-full lg:w-auto lg:justify-start items-start gap-3 lg:gap-0" style={{ maxWidth: '100%' }}>
              {/* Divider on left for mobile */}
              <div className="lg:hidden flex-shrink-0" style={{
            width: '8px',
            height: '120%',
            minHeight: '100px',
            borderRadius: '30px',
            background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)',
            marginTop: '14px',
        }}/>
              <div className="flex flex-col lg:flex-col gap-4 lg:gap-3 flex-1">
                <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                  <div className="w-1/2 flex justify-center items-center">
                    <img src="/ggle.png" alt="Google Reviews - CredSettle" width={386} height={130} className="h-6 lg:h-[29.16px] w-auto"/>
                  </div>
                  <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                    <div className="flex justify-center items-center" style={{ gap: '6.48px' }}>
                      <img src="/stars.png" alt="5 Star Rating - CredSettle" width={127} height={20} className="h-3 lg:h-[12.96px] w-auto"/>
                      <span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div>
                    </div>
                  </div>
                </div>
                <div className="flex w-full lg:w-auto lg:flex-initial" style={{ borderRadius: '36px', padding: '12.96px', gap: '9.72px' }}>
                  <div className="w-1/2 flex justify-center items-center">
                    <img src="/trustpilot.svg" alt="Trustpilot Reviews - CredSettle" width={119} height={29} className="h-6 lg:h-[29.16px] w-auto"/>
                  </div>
                  <div className="w-1/2 flex flex-col" style={{ gap: '6.48px' }}>
                    <div className="flex justify-center items-center" style={{ gap: '6.48px' }}>
                      <img src="/stars.png" alt="5 Star Rating - CredSettle" width={127} height={20} className="h-3 lg:h-[12.96px] w-auto"/>
                      <span className="font-medium text-gray-900 text-xs lg:text-[9.72px]">4.6/5</span>
                    </div>
                    <div className="text-center">
                      <div className="text-gray-600 text-[8px] lg:text-[8.72px]" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', flexWrap: 'wrap' }}><b className="text-[9px] lg:text-[10.72px]">Excellent</b> <span className="text-[8px] lg:text-[9.72px]">|</span> <span className="text-[9px] lg:text-[10px]">2000+ reviews</span></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Divider - Vertical for desktop only */}
            <div className="hidden lg:block" style={{
            width: '8px',
            height: '228px',
            flexShrink: 0,
            borderRadius: '30px',
            background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
        }}/>

            {/* Legal Shield From Day One */}
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              {/* Divider on left for mobile */}
              <div className="lg:hidden flex-shrink-0" style={{
            width: '8px',
            height: '120%',
            minHeight: '100px',
            borderRadius: '30px',
            background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
        }}/>
              <div className="flex-1">
                <p className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Legal Shield From Day One.</p>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We stop unlawful claims tactics and settle within RBI norms for final closure.</p>
              </div>
            </div>

            {/* Divider - Vertical for desktop only */}
            <div className="hidden lg:block" style={{
            width: '8px',
            height: '228px',
            flexShrink: 0,
            borderRadius: '30px',
            background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
        }}/>

            {/* Closure With Dignity */}
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              {/* Divider on left for mobile */}
              <div className="lg:hidden flex-shrink-0" style={{
            width: '8px',
            height: '120%',
            minHeight: '100px',
            borderRadius: '30px',
            background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)'
        }}/>
              <div className="flex-1">
                <p className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Closure With Dignity.</p>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We prioritize your privacy and rights while securing a legal OTS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding App Loan Settlement Section - Placed after Reviews/Value Props */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '36px' }}>
          <div className="bg-gradient-to-br from-blue-50/30 via-white to-blue-50/20 rounded-3xl p-6 md:p-8 lg:p-12" style={{ boxShadow: '0 4px 20px rgba(0, 122, 255, 0.08)', border: '1px solid rgba(0, 122, 255, 0.1)' }}>
            <h2 style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontSize: 'clamp(24px, 5vw, 32px)',
            fontWeight: 700,
            lineHeight: '1.3',
            marginBottom: '32px',
            textAlign: 'center'
        }}>
              Understanding App Loan Settlement in India
            </h2>
            
            {/* What is App Loan Settlement */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '32px',
            marginBottom: '16px'
        }}> What is App Loan closure? </h3>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> App loan closure is a by law recognized debt relief method specifically designed for loans obtained through. <strong>digital lending platforms.</strong> and instant loan applications. Unlike traditional bank loans that involve real papers and branch visits. App-based loans are released fully through mobile applications-often within minutes of application. This digital-first nature creates unique challenges that make app loan closure fundamentally different from settling bank own loans or credit cards. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> Here’s what makes app loans distinct: most app-based lenders operate through. <strong>Non-Banking money Companies (NBFCs).</strong> or as Digital Lending Platforms (DLPs) registered with the RBI. These lenders typically offer small-ticket. Short-tenure loans (₹5,000 to ₹5,00,000 for 3-12 months) with minimal papers requirements. The approval process relies heavily on automated credit scoring algorithms that analyze your phone data. Banking transactions. Digital footprint-often requiring access to your contacts. SMS. Photos. location. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '0'
        }}> At CredSettle. We specialize in app loan closure cases where clients face. <strong>Privacy violations. Threats through contact lists. abusive claims practices.</strong>. Our legal team makes sure all closures comply with the RBI’s Digital Lending Guidelines (issued September 2022). Which mandate clarity in rates rates. Prohibit unregulated third-party data access. Protect clients from predatory lending practices. </p>
            </div>

            {/* How App Loan Settlement Works - Technical Process */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '32px',
            marginBottom: '16px'
        }}> How App Loan closure Works: The Technical Process </h3>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> The closure journey for app loans requires a. <strong>specialized approach.</strong> because these lenders operate differently from traditional banks. Step one involves verification: we confirm whether your app lender is RBI-regulated or operating illegally. According to RBI guidelines. Only regulated entities (REs) like banks. NBFCs. Authorized DLPs can by law lend in India. Unregulated apps-often those demanding excessive permissions or charging excessive processing fees-have no legal standing to pursue claims. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> For regulated app lenders. CredSettle initiates. <strong>strategic papers review.</strong>. We analyze your loan pacts for compliance with the Key Fact Statement (KFS) mandate-a requirement under RBI digital lending norms. The KFS must disclose: all-in-cost (Annual rate Rate including processing fees. GST. Cover). Exact payment schedule. Cooling-off period details. Grievance redressal method. If your lender failed to provide a compliant KFS before disbursement. It strengthens our talks leverage greatly. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> Our legal experts then engage with the lender’s designated closure desk or collections department. We present a complete deals backed by your hardship papers-bank statements showing income disruption. Medical bills. job loss proof. Because app lenders prioritize quick portfolio turnarounds and have higher operational costs for prolonged claims. They’re often more amenable to closures ranging from. <strong>30-70% of the unpaid main sum.</strong>. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '0'
        }}> Once closure terms are agreed. We make sure you receive a formal closure note on the lender’s letterhead with authorized digital signature or real stamp. This letter must explicitly state: the original unpaid amount. The agreed payout sum. Payment deadline. Proof that all dues will be considered "settled" upon payment. Commitment to issue a No Objection letter (NOC). Payment is always routed through valid channels-NEFT/RTGS to the lender’s registered firm account-never to own accounts or third-party agents. </p>
            </div>

            {/* The App Loan Data Privacy Crisis */}
            <div style={{ marginBottom: '32px', padding: '20px', borderRadius: '16px', background: 'rgba(255, 59, 48, 0.05)', border: '1px solid rgba(255, 59, 48, 0.15)' }}>
              <h3 style={{
            color: '#FF3B30',
            fontFamily: 'Poppins',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '28px',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
        }}> <i className="fas fa-exclamation-triangle"></i> The App Loan Data Privacy Crisis </h3>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '15px',
            lineHeight: '26px',
            marginBottom: '12px'
        }}> <strong>Why app loan threats is uniquely invasive:</strong> When you install a loan app. You typically grant permissions to access your phone’s contact list. SMS history. Call logs. Photos. Location data. The RBI’s Digital Lending Guidelines now prohibit this excessive data calls. many apps still violate these norms. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '15px',
            lineHeight: '26px',
            marginBottom: '12px'
        }}> <strong>What happens when you default:</strong> agents access your contacts and begin calling family members. Friends. Colleagues-often with threats. Morphed images. false legal claims. They send bulk SMS/WhatsApp messages to your entire contact list. Causing public humiliation and social stigma. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '15px',
            lineHeight: '26px',
            marginBottom: '0'
        }}> <strong>CredSettle’s action:</strong> We fast issue legal notices citing violations of RBI/2022-23/111 DOR.STR.REC.51/21.04.048/2022-23 (Digital Lending Guidelines) and file formal complaints with the Digital Lending Working Group. For unlawful apps. We coordinate with the Cyber Crime Cell for app deactivation and pursue penal actions under IT Act 2000 for data misuse. </p>
            </div>

            {/* RBI Digital Lending Guidelines - What Borrowers Must Know */}
            <div style={{ marginBottom: '32px' }}>
              <h3 style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '32px',
            marginBottom: '16px'
        }}> RBI Digital Lending Guidelines: Your Legal Rights </h3>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> The Reserve Bank of India issued complete digital lending rules in September 2022 to protect clients from predatory app-based lending practices. grasp these guidelines is key for app loan closure because they define what lenders can and cannot do during claims processes. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> <strong>Key safety 1: Direct Disbursement Mandate.</strong> - All loan amounts must be released straight to your bank account by the regulated entity (bank/NBFC). If any loan app disburses money from a third-party account or LSP (Lending Service Provider) account. It’s non-compliant and potentially unlawful. This violation alone can nullify payment dues in closure talks. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> <strong>Key safety 2: Cooling-Off Period.</strong> - clients have the right to exit the loan within 3 days of disbursement without any fine. If your lender charges pre-payment fines or processing fees upon early closure within this period. They’re violating RBI norms. CredSettle leverages such violations to settle full debt waivers. Not just closures. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> <strong>Key safety 3: agents Restrictions.</strong> - agents must maintain "dignity and respect" during calls efforts. Real visits without prior notice. Calls between 7 PM to 7 AM. Contacting third parties (except guarantors). Using abusive language are strictly prohibited under RBI/2023-24/82 DOR.STR.REC.48/21.04.048/2023-24. When CredSettle takes over your case. We papers all threats instances and file RBI complaints. which accelerates closure approvals at reduced amounts. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '0'
        }}> <strong>Key safety 4: Automated payment System.</strong> - Lenders can only debit your bank account or deduct money from your credit/debit card through properly disclosed auto-debit mandates registered with NPCI (National Payments Corporation of India). If an app lender uses illegal payment gateways or deducts amounts without proper e-mandate registration. It constitutes a serious violation that strengthens your position in closure talks. </p>
            </div>

            {/* Why App Loan Settlement With CredSettle Works */}
            <div style={{ marginBottom: '0' }}>
              <h3 style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontSize: '22px',
            fontWeight: 600,
            lineHeight: '32px',
            marginBottom: '16px'
        }}> Why App Loan closure With CredSettle Works </h3>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> <strong>fast threats Stoppage:</strong> The moment we assume representation of your case. We issue legal cease-and-desist notices to the app lender and their claims firms. We invoke your rights under RBI Fair Practices Code. Digital Lending Guidelines. IT Act 2000 rules against data misuse. Within 24-48 hours. Most threats calls and contact list abuse stop fully. Giving you fast mental peace. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> <strong>Compliance-Based talks Leverage:</strong> Our legal team conducts forensic analysis of your loan pacts. Payout records. Payment history. Lender contacts to identify RBI violations. Common violations we find include: excessive processing fees beyond 3% of loan amount. Hidden charges not disclosed in KFS. Rates rates exceeding NBFC guidelines. Third-party disbursements. illegal data access. Each violation becomes a talks tool to secure closures at 30-50% of unpaid. Even complete debt waivers in cases of egregious misconduct. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '16px'
        }}> <strong>Data Privacy safety and Deletion:</strong> Beyond closure. CredSettle makes sure your own data is permanently deleted from the lender’s systems. Under the Digital own Data safety Act 2023 (DPDP Act). You have the "Right to Erasure"-meaning lenders must delete your contact list. Photos. SMS history. Location data once the loan relationship ends. We obtain written proof of data deletion and server-level erasure letters. Preventing future misuse. </p>
              <p style={{
            color: 'rgba(12, 39, 86, 0.80)',
            fontFamily: 'Poppins',
            fontSize: '16px',
            lineHeight: '28px',
            marginBottom: '0'
        }}> <strong>Credit desk handling:</strong> App loan closures are reported to credit bureaus (CIBIL. Experian. Equifax) as "Settled" status. While this temporarily impacts your credit score. CredSettle provides post-closure credit rehabilitation services. We guide you through secured credit card applications. Credit builder loans. Timely utility payments that help rebuild scores. Most clients see their CIBIL scores improve from "Default" (300-500 range) to "Fair" (650-700 range) within 12-18 months post-closure. Reopening access to formal credit channels. </p>
            </div>
          </div>
        </section>

        {/* Why section */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '48px', marginBottom: '28.8px' }}>
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '9.6px', marginBottom: '19.2px' }}>
            <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-tight" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Why Choose CredSettle for App Loan Settlement</h2>
            <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Six core benefits that make sure a protected. Successful. final closure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10" style={{ gap: '19.2px' }}>
            {['Specialized Expertise', 'End-to-End Protection', 'Client-Focused Dignity', 'Proven Track Record', 'Strategic Negotiation', 'Swift & Final Resolution'].map((t, i) => (<div key={i} className="p-6 md:p-8 lg:p-[48.8px]" style={{ borderRadius: '40px', background: 'linear-gradient(228deg, rgba(12, 39, 86, 0.00) 4.05%, rgba(0, 178, 241, 0.12) 49.48%, rgba(239, 247, 255, 0.49) 94.92%)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10), 4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)', backdropFilter: 'blur(12.35px)' }}>
                <h3 className="mb-2 text-base md:text-lg lg:text-[18px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700 }}>{t}</h3>
                <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>fast dignity safety and RBI-compliant closure path.</p>
              </div>))}
          </div>
        </section>

        {/* Stats + Partner + image */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{ maxWidth: '1280px', marginTop: '36px', marginBottom: '24px' }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            <div className="relative">
            <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight text-center" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 700, lineHeight: '36px' }}>Our Track Record in App Loan Settlement</h2>
            <p className="text-xs md:text-sm lg:text-[14px] text-center" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>Six benefits that make sure safety and final closure.</p>
              <div aria-hidden className="w-[180px] h-[180px] lg:w-[260px] lg:h-[260px]" style={{ position: 'absolute', left: '50%', top: '62%', transform: 'translate(-50%, -50%)', borderRadius: '9999px', background: 'radial-gradient(closest-side, rgba(0,122,255,0.30), rgba(0,122,255,0.16) 55%, rgba(0,122,255,0.0) 80%)', filter: 'blur(4px)', pointerEvents: 'none', zIndex: 0 }}/>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['5,500+', '4.8/5', '₹ 195 Crores+', '100%'].map((stat, idx) => (<div key={idx} className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12" style={{ borderRadius: '40px', background: 'rgba(239, 247, 255, 0.30)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)' }}>
                    <h3 className="text-lg md:text-xl lg:text-[30px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>{stat}</h3>
                    <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}> {idx === 0 && 'Successful App Loan Settlements and harassment stoppage.'} {idx === 1 && 'Client Satisfaction Rating for rapid dignity protection.'} {idx === 2 && 'Debt Principal Reduced with lawful settlements.'} {idx === 3 && 'RBI Compliance Guaranteed with proper closure.'} </p>
                  </div>))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="App loan" servicePath="app-loan-settlement"/>

        {/* States & Union Territories Grid Section */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{
            maxWidth: '1280px',
            marginTop: '36px',
            marginBottom: '36px'
        }}>
          {/* Centered Heading */}
          <div className="w-full flex flex-col items-center text-center" style={{ gap: '6px', marginBottom: '20px' }}>
            <h2 className="text-xl md:text-2xl lg:text-[28px] leading-tight" style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontWeight: 700,
            lineHeight: '32px'
        }}>
              We Serve Across India
            </h2>
            <p className="text-xs md:text-sm lg:text-[13px]" style={{
            color: 'rgba(12, 39, 86, 0.70)',
            fontFamily: 'Poppins',
            lineHeight: '18px'
        }}> App loan closure services in all states and union territories. </p>
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
            return (<a key={index} href={`/services/app-loan-settlement/${slug}`} className="cursor-pointer transition-all duration-200 hover:opacity-80" style={{
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
                }}>
                  <p className="text-[10px] md:text-xs lg:text-[12px]" style={{
                    color: isMetroCity ? '#FFFFFF' : '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    lineHeight: '16px',
                    margin: 0
                }}> {state} </p>
                </a>);
        })}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={appLoanFaqs} title="App Loan Settlement"/>
              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{ background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)', boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)' }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h3 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>Ready to End App Loan threats?</h3>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Start an RBI-compliant closure and reclaim your peace today.</p>
                  </div>
                  <CTAButton>
                    Get Your Free Consultation.
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
    </div>);
}
