'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import FAQWithSchema from '@/components/FAQWithSchema';
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
      answer:
        'Within hours of engagement. We forward all communications to our legal helpline, issue cease-and-desist notices, and escalate violations to RBI and cyber crime cells.'
    },
    {
      question: 'Is a legal One-Time Settlement possible with app lenders?',
      answer:
        'Yes. Many digital lenders operate under NBFC licenses. We negotiate documented settlements aligned with their policies and ensure you receive formal closure.'
    },
    {
      question: 'Will my contacts and personal data stay protected?',
      answer:
        'We challenge unlawful data usage and lodge complaints when lenders misuse contact lists. Protecting your privacy and dignity is central to our engagement.'
    },
    {
      question: 'What paperwork will I receive after settlement?',
      answer:
        'You get the settlement confirmation, payment acknowledgments, and a no-dues certificate. We verify credit bureau updates so the account reflects as settled.'
    },
    {
      question: 'Does settling an app loan hurt my credit for years?',
      answer:
        'There may be a short-term impact, but it is better than ongoing defaults. We guide a credit rebuild plan so you can restore your score responsibly.'
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
              <img src="/app_hero.png" alt="" aria-hidden className="hidden lg:block" style={{ position: 'absolute', width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center', filter: 'blur(6px)', opacity: 0.9, WebkitMaskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)', maskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)' }} />
              <img src="/app_hero.png" alt="App Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }} />
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', marginBottom: '12px' }}>
                App Loan Settlement: Stop Harassment, Settle Legally
              </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                We intervene immediately against illegal recovery tactics and secure an RBI-compliant settlement. App loan settlement is a legitimate debt resolution process in India that helps borrowers resolve outstanding app-based loan debt through legal settlement solutions.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                At CredSettle, our expert legal team specializes in app loan settlement services, working directly with app-based lenders and NBFCs to negotiate reduced payoff amounts for app loans. Our debt settlement company ensures all app loan settlements follow RBI guidelines and Indian banking regulations, providing complete legal protection.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '20px' }}>
                Your dignity and data privacy come first—our legal team handles the rest. We help app loan borrowers achieve financial freedom through legal app loan settlement, reducing outstanding balances by 30-70% while ensuring all settlements are properly documented and legally binding. Our RBI-compliant approach protects your rights and stops harassment from recovery agents.
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
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Legal Shield From Day One</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We stop illegal recovery tactics and negotiate within RBI norms for final closure.</p>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Closure With Dignity</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We prioritize your privacy and rights while securing a legal OTS.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Understanding App Loan Settlement Section - Placed after Reviews/Value Props */}
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
              Understanding App Loan Settlement in India
            </h2>
            
            {/* What is App Loan Settlement */}
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
                What is App Loan Settlement?
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
                App loan settlement is a legally recognized debt resolution mechanism specifically designed for loans obtained through <strong>digital lending platforms</strong> and instant loan applications. Unlike traditional bank loans that involve physical documentation and branch visits, app-based loans are disbursed entirely through mobile applications—often within minutes of application. This digital-first nature creates unique challenges that make app loan settlement fundamentally different from settling bank personal loans or credit cards.
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
                Here's what makes app loans distinct: most app-based lenders operate through <strong>Non-Banking Financial Companies (NBFCs)</strong> or as Digital Lending Platforms (DLPs) registered with the RBI. These lenders typically offer small-ticket, short-tenure loans (₹5,000 to ₹5,00,000 for 3-12 months) with minimal documentation requirements. The approval process relies heavily on automated credit scoring algorithms that analyze your phone data, banking transactions, and digital footprint—often requiring access to your contacts, SMS, photos, and location.
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
                At CredSettle, we specialize in app loan settlement cases where borrowers face <strong>privacy violations, harassment through contact lists, and abusive recovery practices</strong>. Our legal team ensures all settlements comply with the RBI's Digital Lending Guidelines (issued September 2022), which mandate transparency in interest rates, prohibit unregulated third-party data access, and protect borrowers from predatory lending practices.
              </p>
            </div>

            {/* How App Loan Settlement Works - Technical Process */}
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
                How App Loan Settlement Works: The Technical Process
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
                The settlement journey for app loans requires a <strong>specialized approach</strong> because these lenders operate differently from traditional banks. Step one involves verification: we confirm whether your app lender is RBI-regulated or operating illegally. According to RBI guidelines, only regulated entities (REs) like banks, NBFCs, and authorized DLPs can legally lend in India. Unregulated apps—often those demanding excessive permissions or charging exorbitant processing fees—have no legal standing to pursue recovery.
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
                For regulated app lenders, CredSettle initiates <strong>strategic documentation review</strong>. We analyze your loan agreement for compliance with the Key Fact Statement (KFS) mandate—a requirement under RBI digital lending norms. The KFS must disclose: all-in-cost (Annual Percentage Rate including processing fees, GST, insurance), exact repayment schedule, cooling-off period details, and grievance redressal mechanism. If your lender failed to provide a compliant KFS before disbursement, it strengthens our negotiation leverage significantly.
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
                Our legal experts then engage with the lender's designated settlement desk or collections department. We present a comprehensive settlement proposal backed by your financial hardship documentation—bank statements showing income disruption, medical bills, or unemployment proof. Because app lenders prioritize quick portfolio turnarounds and have higher operational costs for prolonged recovery, they're often more amenable to settlements ranging from <strong>30-70% of the outstanding principal</strong>.
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
                Once settlement terms are agreed, we ensure you receive a formal settlement letter on the lender's letterhead with authorized digital signature or physical stamp. This letter must explicitly state: the original outstanding amount, the agreed settlement amount, payment deadline, confirmation that all dues will be considered "settled" upon payment, and commitment to issue a No Objection Certificate (NOC). Payment is always routed through official channels—NEFT/RTGS to the lender's registered business account—never to personal accounts or third-party recovery agents.
              </p>
            </div>

            {/* The App Loan Data Privacy Crisis */}
            <div style={{ marginBottom: '32px', padding: '20px', borderRadius: '16px', background: 'rgba(255, 59, 48, 0.05)', border: '1px solid rgba(255, 59, 48, 0.15)' }}>
              <h3
                style={{
                  color: '#FF3B30',
                  fontFamily: 'Poppins',
                  fontSize: '20px',
                  fontWeight: 600,
                  lineHeight: '28px',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                <i className="fas fa-exclamation-triangle"></i>
                The App Loan Data Privacy Crisis
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
                <strong>Why app loan harassment is uniquely invasive:</strong> When you install a loan app, you typically grant permissions to access your phone's contact list, SMS history, call logs, photos, and location data. The RBI's Digital Lending Guidelines now prohibit this excessive data collection, but many apps still violate these norms.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '15px',
                  lineHeight: '26px',
                  marginBottom: '12px'
                }}
              >
                <strong>What happens when you default:</strong> Recovery agents access your contacts and begin calling family members, friends, and colleagues—often with threats, morphed images, and false legal claims. They send bulk SMS/WhatsApp messages to your entire contact list, causing public humiliation and social stigma.
              </p>
              <p
                style={{
                  color: 'rgba(12, 39, 86, 0.80)',
                  fontFamily: 'Poppins',
                  fontSize: '15px',
                  lineHeight: '26px',
                  marginBottom: '0'
                }}
              >
                <strong>CredSettle's intervention:</strong> We immediately issue legal notices citing violations of RBI/2022-23/111 DOR.STR.REC.51/21.04.048/2022-23 (Digital Lending Guidelines) and file formal complaints with the Digital Lending Working Group. For illegal apps, we coordinate with the Cyber Crime Cell for app deactivation and pursue criminal proceedings under IT Act 2000 for data misuse.
              </p>
            </div>

            {/* RBI Digital Lending Guidelines - What Borrowers Must Know */}
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
                RBI Digital Lending Guidelines: Your Legal Rights
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
                The Reserve Bank of India issued comprehensive digital lending regulations in September 2022 to protect borrowers from predatory app-based lending practices. Understanding these guidelines is critical for app loan settlement because they define what lenders can and cannot do during recovery processes.
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
                <strong>Key Protection 1: Direct Disbursement Mandate</strong> – All loan amounts must be disbursed directly to your bank account by the regulated entity (bank/NBFC). If any loan app disburses money from a third-party account or LSP (Lending Service Provider) account, it's non-compliant and potentially illegal. This violation alone can nullify repayment obligations in settlement negotiations.
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
                <strong>Key Protection 2: Cooling-Off Period</strong> – Borrowers have the right to exit the loan within 3 days of disbursement without any penalty. If your lender charges pre-payment penalties or processing fees upon early closure within this period, they're violating RBI norms. CredSettle leverages such violations to negotiate full debt waivers, not just settlements.
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
                <strong>Key Protection 3: Recovery Agent Restrictions</strong> – Recovery agents must maintain "dignity and respect" during collection efforts. Physical visits without prior notice, calls between 7 PM to 7 AM, contacting third parties (except guarantors), and using abusive language are strictly prohibited under RBI/2023-24/82 DOR.STR.REC.48/21.04.048/2023-24. When CredSettle takes over your case, we document all harassment instances and file regulatory complaints, which accelerates settlement approvals at reduced amounts.
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
                <strong>Key Protection 4: Automated Repayment System</strong> – Lenders can only debit your bank account or deduct money from your credit/debit card through properly disclosed auto-debit mandates registered with NPCI (National Payments Corporation of India). If an app lender uses unauthorized payment gateways or deducts amounts without proper e-mandate registration, it constitutes a serious violation that strengthens your position in settlement negotiations.
              </p>
            </div>

            {/* Why App Loan Settlement With CredSettle Works */}
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
                Why App Loan Settlement With CredSettle Works
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
                <strong>Immediate Harassment Stoppage:</strong> The moment we assume representation of your case, we issue legal cease-and-desist notices to the app lender and their recovery agencies. We invoke your rights under RBI Fair Practices Code, Digital Lending Guidelines, and IT Act 2000 provisions against data misuse. Within 24-48 hours, most harassment calls and contact list abuse stop completely, giving you immediate mental peace.
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
                <strong>Compliance-Based Negotiation Leverage:</strong> Our legal team conducts forensic analysis of your loan agreement, disbursal records, repayment history, and lender communications to identify regulatory violations. Common violations we find include: excessive processing fees beyond 3% of loan amount, hidden charges not disclosed in KFS, interest rates exceeding NBFC guidelines, third-party disbursements, and unauthorized data access. Each violation becomes a negotiation tool to secure settlements at 30-50% of outstanding, or even complete debt waivers in cases of egregious misconduct.
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
                <strong>Data Privacy Protection and Deletion:</strong> Beyond settlement, CredSettle ensures your personal data is permanently deleted from the lender's systems. Under the Digital Personal Data Protection Act 2023 (DPDP Act), you have the "Right to Erasure"—meaning lenders must delete your contact list, photos, SMS history, and location data once the loan relationship ends. We obtain written confirmation of data deletion and server-level erasure certificates, preventing future misuse.
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
                <strong>Credit Bureau Management:</strong> App loan settlements are reported to credit bureaus (CIBIL, Experian, Equifax) as "Settled" status. While this temporarily impacts your credit score, CredSettle provides post-settlement credit rehabilitation services. We guide you through secured credit card applications, credit builder loans, and timely utility payments that help rebuild scores. Most clients see their CIBIL scores improve from "Default" (300-500 range) to "Fair" (650-700 range) within 12-18 months post-settlement, reopening access to formal credit channels.
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
                <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>Immediate dignity protection and RBI-compliant settlement path.</p>
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
                {['5,500+','4.8/5','₹ 195 Crores+','100%'].map((stat, idx) => (
                  <div key={idx} className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12" style={{ borderRadius: '40px', background: 'rgba(239, 247, 255, 0.30)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)' }}>
                    <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>{stat}</h3>
                    <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                      {idx===0 && 'Successful App Loan Settlements and harassment stoppage.'}
                      {idx===1 && 'Client Satisfaction Rating for rapid dignity protection.'}
                      {idx===2 && 'Debt Principal Reduced with lawful settlements.'}
                      {idx===3 && 'RBI Compliance Guaranteed with proper closure.'}
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
              <div className="w-full flex justify-center lg:justify-end lg:-mt-10" style={{ marginRight: '0' }}>
                <img src="/belowservices/App%20Loan.png" alt="App Loan" className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]" style={{ height: 'auto', borderRadius: '0px', transform: 'none', display: 'block', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="App loan" servicePath="app-loan-settlement" />

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
              App loan settlement services in all states and union territories
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
                  href={`/services/app-loan-settlement/${slug}`}
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
              <FAQWithSchema faqs={appLoanFaqs} title="App Loan Settlement" />
              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{ background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)', boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)' }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>Ready to End App Loan Harassment?</h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}>Start an RBI-compliant settlement and reclaim your peace today.</p>
                  </div>
                  <button className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90" style={{ boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset' }}><span className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal" style={{ color: '#0C2756' }}>Get Your Free Consultation</span></button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section */}
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginTop: '60px', marginBottom: '40px' }}
        >
          <div className="bg-white rounded-2xl p-4 md:p-6 lg:p-10" style={{ boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' }}>
            <h2
              className="text-xl md:text-2xl lg:text-[28px] leading-tight mb-6"
              style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '36px'
              }}
            >
              Understanding App Loan Settlement in India
            </h2>
            
            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                What is App Loan Settlement?
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                App loan settlement is a legal debt resolution process that allows borrowers to
                negotiate with app-based lenders to pay a reduced amount to settle outstanding
                app loan debt. This debt settlement process is completely legal in India and
                follows RBI guidelines for app loan settlement. When you're struggling with
                app loan repayment, settlement offers a way to resolve debt without facing
                continuous harassment from recovery agents or legal action.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                CredSettle specializes in app loan settlement services across India, helping
                borrowers negotiate with app-based lenders and NBFCs to achieve significant
                reductions in their outstanding app loan amounts. Our legal team ensures all
                settlements comply with RBI regulations, providing you with a legitimate debt
                resolution solution.
              </p>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                How App Loan Settlement Works
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                The app loan settlement process begins with a comprehensive analysis of your
                financial situation and outstanding app loan debt. Our expert negotiators then
                contact your app-based lender to initiate settlement discussions. We leverage our
                knowledge of RBI guidelines and banking regulations to negotiate the best possible
                settlement terms for you, typically achieving 30-70% reductions in outstanding
                amounts.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Once a settlement amount is agreed upon, we help you obtain a formal settlement
                letter from the lender, which legally documents the agreed-upon terms. This
                settlement letter protects you from future claims and ensures the debt is
                permanently resolved. Throughout this process, CredSettle also provides harassment
                protection, stopping illegal recovery agent calls and threats immediately.
              </p>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                Benefits of App Loan Settlement with CredSettle
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Choosing CredSettle for your app loan settlement offers numerous advantages.
                Our debt settlement company provides complete legal protection, ensuring all
                negotiations follow RBI-compliant processes. We help app loan borrowers achieve
                financial freedom through legal app loan settlement, reducing outstanding balances
                while protecting your legal rights.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Beyond financial savings, our app loan settlement services include immediate
                harassment protection. Once CredSettle takes over your case, we legally intervene
                to stop all recovery agent harassment, giving you peace of mind. Our expert legal
                team handles all communication with app-based lenders, allowing you to focus on
                rebuilding your financial future without the stress of constant calls and threats.
              </p>
            </div>

            <div className="mb-6">
              <h3
                className="text-lg md:text-xl lg:text-[20px] mb-3"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontWeight: 600,
                  lineHeight: '28px'
                }}
              >
                RBI Guidelines for App Loan Settlement
              </h3>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed mb-4"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                The Reserve Bank of India (RBI) has established clear guidelines for app loan
                settlement processes in India. These RBI guidelines ensure that debt settlement
                procedures are fair, transparent, and legally compliant. At CredSettle, we strictly
                adhere to all RBI regulations, ensuring your app loan settlement is legitimate
                and protects your legal rights as a borrower.
              </p>
              <p
                className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px'
                }}
              >
                Our loan settlement company ensures that all app loan settlements are properly
                documented with formal settlement letters, protecting you from future disputes. We
                also help you understand your rights under Indian banking regulations, including
                protection from illegal harassment by recovery agents. This RBI-compliant approach
                ensures your app loan settlement is legally sound and provides permanent
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


