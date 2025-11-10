'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BanksGrid from '@/components/BanksGrid';
import FAQWithSchema from '@/components/FAQWithSchema';
import { useEffect, useState } from 'react';

const nbfcFaqs = [
  {
    question: 'Do NBFCs settle differently than banks?',
    answer:
      'Often yes. Our team maps each NBFC’s settlement framework, provisioning economics, and approval hierarchy so negotiations align with their policy and close faster.'
  },
  {
    question: 'What documentation do I receive once we settle?',
    answer:
      'You receive the official One-Time Settlement letter, payment acknowledgments, and a No Objection Certificate (NOC). We also ensure lien release or hypothecation cancellation and credit bureau updates.'
  },
  {
    question: 'Will NBFC settlement impact my credit score long term?',
    answer:
      'There is a short-term dip after settlement, but it is far better than a charge-off. With our credit rehabilitation plan, most clients rebuild scores above 650 within 12-18 months.'
  },
  {
    question: 'How long does an NBFC settlement typically take?',
    answer:
      'Most cases complete within 45-75 days depending on lender responsiveness and complexity. Harassment usually stops within 3-5 business days after our legal notices go out.'
  },
  {
    question: 'Can I bundle multiple NBFC loans into one settlement plan?',
    answer:
      'Yes. We coordinate multi-loan negotiations either with the same NBFC or across portfolios, sequencing offers so you receive consolidated closure and aligned payment schedules.'
  }
];

export default function NBFCLoanSettlementPage() {
  const [isFirefox, setIsFirefox] = useState(false);
  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

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
              <img src="/nbfc_hero.png" alt="" aria-hidden className="hidden lg:block" style={{ position: 'absolute', width: '100%', maxWidth: '520px', height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center', filter: 'blur(6px)', opacity: 0.9, WebkitMaskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)', maskImage: 'linear-gradient(to right, black 0%, black 10%, transparent 35%, transparent 65%, black 90%, black 100%)' }} />
              <img src="/nbfc_hero.png" alt="NBFC Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{ height: 'auto', transform: 'rotate(335deg)', transformOrigin: 'center' }} />
            </div>
            {/* Left copy - comes second on mobile */}
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: '400', marginBottom: '12px' }}>
                NBFC Loan Settlement: Navigate Policies, Close Legally
              </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                NBFCs follow distinct frameworks. We leverage policy experience to secure favorable, RBI-compliant OTS outcomes. NBFC loan settlement is a legitimate debt resolution process in India that helps borrowers resolve outstanding NBFC loan debt through legal settlement solutions.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '12px' }}>
                At CredSettle, our expert legal team specializes in NBFC loan settlement services, working directly with NBFCs to negotiate reduced payoff amounts for NBFC loans. Our debt settlement company ensures all NBFC loan settlements follow RBI guidelines and Indian banking regulations, providing complete legal protection.
              </p>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '28px', marginBottom: '20px' }}>
                Protect your interests while achieving a formal, final closure. We help NBFC loan borrowers achieve financial freedom through legal NBFC loan settlement, reducing outstanding balances by 30-70% while ensuring all settlements are properly documented and legally binding. Our RBI-compliant approach protects your rights and stops harassment from recovery agents.
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
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>NBFC Policy Mastery</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We navigate NBFC-specific frameworks to secure compliant, favorable settlements.</p>
              </div>
            </div>
            <div className="hidden lg:block" style={{ width: '8px', height: '228px', flexShrink: 0, borderRadius: '30px', background: 'linear-gradient(180deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
            <div className="flex-1 w-full lg:w-auto flex items-start gap-3 lg:gap-0" style={{ maxWidth: '420px' }}>
              <div className="lg:hidden flex-shrink-0" style={{ width: '8px', height: '100%', minHeight: '60px', borderRadius: '30px', background: 'linear-gradient(90deg, #007AFF 0%, #007AFF 50%, #E7E7E7 50%, #E7E7E7 100%)' }} />
              <div className="flex-1">
                <h3 className="text-lg lg:text-[20px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 600, lineHeight: '28px', marginBottom: '8px' }}>Reduced Principal Focus</h3>
                <p className="text-sm lg:text-[14px]" style={{ color: 'rgba(12, 39, 86, 0.70)', fontFamily: 'Poppins', lineHeight: '20px' }}>We aim for a significantly reduced principal and complete legal closure.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Content Section - Understanding NBFC Loan Settlement */}
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
              Understanding NBFC Loan Settlement in India
            </h2>
            
            {/* What is NBFC Loan Settlement */}
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
                What is NBFC Loan Settlement and How NBFCs Differ from Banks
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
                NBFC loan settlement is a legally recognized debt resolution mechanism in India where borrowers negotiate with <strong>Non-Banking Financial Companies</strong> to pay a reduced amount to settle their outstanding loan obligations. But what exactly makes NBFCs different from traditional banks, and why do these differences matter for your settlement strategy? Understanding this distinction is crucial for navigating the settlement process effectively.
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
                NBFCs are financial institutions regulated by the Reserve Bank of India (RBI) that provide banking-like services—loans, credit facilities, asset financing, and investment products—but cannot accept <strong>demand deposits</strong> (savings/current accounts) like traditional banks. Under the RBI Act, 1934, NBFCs are classified into several categories: <strong>Asset Finance Companies</strong> (AFCs), <strong>Loan Companies</strong>, <strong>Investment Companies</strong>, <strong>Infrastructure Finance Companies</strong> (IFCs), and <strong>Microfinance Institutions</strong> (MFIs). Each category operates under specific regulatory frameworks that influence their lending policies, interest rate structures, and most importantly, their settlement approaches.
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
                Here's what makes NBFC settlements unique: NBFCs typically have <strong>higher operational flexibility</strong> than scheduled commercial banks. While banks follow stringent internal audit processes and centralized decision-making protocols mandated by Basel III norms, NBFCs often have faster turnaround times for settlement approvals. Additionally, many NBFCs demonstrate higher risk appetite, which historically allowed them to lend to borrowers with lower credit scores or minimal documentation. This same risk tolerance often translates into more pragmatic settlement negotiations. At CredSettle, we leverage our deep understanding of NBFC-specific <strong>compromise settlement policies</strong>, board-mandated provisioning norms, and sector-wise operational frameworks to secure favorable One-Time Settlement (OTS) outcomes that typically reduce your outstanding liability by 30-70%.
              </p>
            </div>

            {/* How NBFC Loan Settlement Process Works */}
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
                How the NBFC Loan Settlement Process Works: Technical Framework
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
                The NBFC settlement journey begins with <strong>regulatory classification verification</strong>. We first confirm your lender's RBI registration status by checking the official RBI list of registered NBFCs. This verification is critical because only RBI-regulated NBFCs follow the Fair Practices Code (FPC) mandated under Master Direction - Non-Banking Financial Company Returns (Reserve Bank) Directions, 2016. This FPC compliance ensures your settlement will follow transparent processes, documented communication channels, and legal grievance redressal mechanisms.
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
                Once CredSettle assumes responsibility for your case, we conduct a <strong>comprehensive loan portfolio analysis</strong>. This involves examining your loan agreement for compliance with RBI disclosure requirements: all-in-cost breakup (principal, interest rate, processing fees, prepayment charges, and GST), loan classification (secured or unsecured), repayment schedule, and penalty charge structure. We analyze whether your account has crossed the 90-day overdue threshold that classifies it as a <strong>Non-Performing Asset (NPA)</strong>. NBFC NPA classification follows the same timeline as banks—when EMI payments are overdue by 90 days or more—but NBFCs face different provisioning requirements based on their asset classification (Standard, Sub-Standard, Doubtful, or Loss).
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
                Our negotiation strategy leverages the <strong>NBFC's internal policy framework</strong>. According to RBI guidelines, NBFCs must have board-approved policies for compromise settlements, especially for loans classified as Sub-Standard or Doubtful assets. We present your financial hardship documentation—income loss proof, medical emergency bills, or business closure certificates—along with a realistic settlement proposal based on your repayment capacity. The key technical aspect here is understanding <strong>provisioning economics</strong>: NBFCs must maintain Capital Adequacy Ratios (CAR) mandated by RBI (minimum 15% for systemically important NBFCs). When loans turn into NPAs, they tie up capital and increase provisioning requirements. A settlement offer that recovers 30-70% of the outstanding becomes financially attractive compared to prolonged recovery litigation that may yield even less after years of legal proceedings.
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
                Once we reach a mutually agreeable settlement amount, we ensure proper documentation aligned with RBI's Master Direction on Asset Classification and Provisioning. The NBFC must provide a formal <strong>OTS letter</strong> (One-Time Settlement letter) on company letterhead, clearly stating: the original loan amount, total outstanding (including principal, interest, and charges), the agreed settlement amount, payment terms (lump sum or structured), and most importantly, confirmation that upon payment, the loan will be marked as "settled" and no further claims will be made. We also ensure compliance with RBI's directive requiring NBFCs to release all property documents or hypothecation endorsements within 30 days of settlement payment completion, with penalty provisions of ₹5,000 per day for delays.
              </p>
            </div>

            {/* RBI's Regulatory Framework for NBFC Settlements */}
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
                RBI's Regulatory Framework for NBFC Loan Settlements
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
                The Reserve Bank of India maintains stringent oversight of NBFC operations through a multi-layered regulatory framework that directly impacts loan settlement processes. Under the <strong>Master Direction – Non-Banking Financial Company – Systemically Important Non-Deposit taking Company and Deposit taking Company (Reserve Bank) Directions, 2016</strong>, NBFCs are mandated to follow specific guidelines for asset classification, income recognition, and provisioning for bad debts. This framework ensures that settlement practices remain fair, transparent, and legally compliant.
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
                One critical RBI guideline that protects borrowers seeking NBFC loan settlement is the <strong>Fair Practices Code</strong>. This code requires NBFCs to: clearly disclose loan terms and charges before disbursal, provide transparent information about settlement options when borrowers face genuine financial distress, follow dignified recovery practices without harassment or coercion, and maintain a structured grievance redressal mechanism. If any NBFC violates these norms during your loan term or settlement discussions, you have legal recourse through the RBI's Banking Ombudsman Scheme (which was extended to cover certain NBFC activities) or through direct complaints to RBI's Complaints Management System.
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
                At CredSettle, we ensure every NBFC loan settlement strictly adheres to these RBI guidelines. We verify that the settlement offer includes proper accounting treatment—NBFCs must report settled accounts accurately to credit bureaus (CIBIL, Experian, Equifax, CRIF High Mark) with the status "settled," not "written off." We also ensure compliance with RBI's <strong>document release timeline</strong>: NBFCs must release all collateral documents, hypothecation endorsements, or encumbrance certificates within 30 days of settlement payment. If the NBFC delays document release, they are liable for compensation at ₹5,000 per day of delay as per RBI Master Direction on Customer Service in Banks. Our legal team provides complete documentation—settlement letters, payment acknowledgments, NOC (No Objection Certificate), and document release confirmations—ensuring you have legally binding proof that permanently resolves your NBFC loan obligation.
              </p>
            </div>

            {/* Benefits of NBFC Settlement with CredSettle */}
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
                Why Choose CredSettle for NBFC Loan Settlement
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
                Navigating NBFC loan settlement requires specialized expertise because NBFCs operate under distinct regulatory frameworks and employ varied settlement policies based on their business models. At CredSettle, our legal and financial experts possess deep knowledge of NBFC-specific compromise settlement frameworks across all categories—Asset Finance Companies, Loan Companies, Infrastructure Finance Companies, and Microfinance Institutions. We understand that a gold loan settlement with an NBFC requires different strategies than settling an unsecured personal loan or a two-wheeler loan.
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
                Our approach focuses on <strong>immediate harassment protection</strong>. Many borrowers approach us after facing aggressive recovery practices from NBFC-appointed collection agencies. Once CredSettle takes over your case, we legally intervene by issuing formal communication to the NBFC, citing the Fair Practices Code and relevant RBI Master Directions. This legal intervention typically stops direct recovery calls and harassment within 3-5 business days. We become your single point of contact, handling all communication with the NBFC while you focus on arranging the settlement amount without constant stress and intimidation.
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
                Beyond financial savings (typically 30-70% reduction in outstanding amount), CredSettle provides <strong>complete legal closure</strong>. We ensure the NBFC provides proper settlement documentation, updates credit bureau records accurately, releases all security documents within the mandated 30-day timeline, and provides a formal No Objection Certificate (NOC). Our post-settlement support includes verifying that your CIBIL report correctly reflects the "settled" status and that no encumbrances remain on hypothecated assets. This comprehensive approach ensures your NBFC loan settlement isn't just a temporary relief but a permanent, legally binding resolution that restores your financial freedom and protects your credit profile for future financial planning.
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
                <p className="text-xs md:text-sm lg:text-[14px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>Policy-savvy negotiation for compliant, favorable OTS outcomes.</p>
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
                {['6,200+','4.7/5','₹ 320 Crores+','100%'].map((stat, idx) => (
                  <div key={idx} className="px-4 md:px-5 lg:px-[22px] py-6 md:py-8 lg:py-12" style={{ borderRadius: '40px', background: 'rgba(239, 247, 255, 0.30)', boxShadow: '4px 4px 15.4px 0 rgba(0, 0, 0, 0.10)' }}>
                    <h3 className="text-lg md:text-xl lg:text-[24px]" style={{ color: '#0C2756', fontFamily: 'Poppins', fontWeight: 500, lineHeight: '28px' }}>{stat}</h3>
                    <p className="text-xs md:text-sm lg:text-[14px] mt-8 md:mt-12 lg:mt-[58.4px]" style={{ color: '#0C2756', opacity: 0.8, fontFamily: 'Poppins', lineHeight: '20px' }}>
                      {idx===0 && 'Successful NBFC Settlements across multiple products.'}
                      {idx===1 && 'Client Satisfaction Rating with dignified handling.'}
                      {idx===2 && 'Debt Principal Reduced using NBFC policy experience.'}
                      {idx===3 && 'RBI Compliance Guaranteed; proper documentation provided.'}
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
                <img src="/belowservices/NBFC.png" alt="NBFC" className="w-full max-w-[280px] md:max-w-[340px] lg:max-w-[380px]" style={{ height: 'auto', borderRadius: '0px', transform: 'none', display: 'block', objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </section>

        {/* Banks Grid Section */}
        <BanksGrid serviceType="NBFC loan" servicePath="nbfc-loan-settlement" />

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
              NBFC loan settlement services in all states and union territories
            </p>
          </div>

          {/* States & UT Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-3" style={{ gap: '12px' }}>
            {(() => {
              const stateSpecificRoutes: Record<string, string> = {
                'Andhra Pradesh': '/services/nbfc-loan-settlement/andhra-pradesh',
                'Delhi': '/services/nbfc-loan-settlement/delhi',
                'Gujarat': '/services/nbfc-loan-settlement/gujarat',
                'Haryana': '/services/nbfc-loan-settlement/haryana',
                'Karnataka': '/services/nbfc-loan-settlement/karnataka',
                'Maharashtra': '/services/nbfc-loan-settlement/maharashtra',
                'Rajasthan': '/services/nbfc-loan-settlement/rajasthan',
                'Tamil Nadu': '/services/nbfc-loan-settlement/tamil-nadu',
                'Telangana': '/services/nbfc-loan-settlement/telangana',
                'Uttar Pradesh': '/services/nbfc-loan-settlement/uttar-pradesh',
                'West Bengal': '/services/nbfc-loan-settlement/west-bengal'
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
              const href = stateSpecificRoutes[state] ?? `/services/nbfc-loan-settlement/${slug}`;
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
            });
            })()}
          </div>
        </section>

        {/* FAQ + CTA */}
        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={nbfcFaqs} title="NBFC Loan Settlement" />

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
                      Ready to Close Your NBFC Loan Legally?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Use our NBFC policy expertise to secure a compliant, final OTS.
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
                      Get Your Free Consultation
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


