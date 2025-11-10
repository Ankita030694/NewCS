'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in Delhi NCR - Strategic, Compliant, Result Driven',
  description:
    'Delhi NCR borrowers juggle metro living costs, start-up volatility, gig economy cash flows, and relentless recovery follow-ups. CredSettle’s Delhi command centre negotiates with every major NBFC operating in Connaught Place, Gurugram, Noida, Ghaziabad, and Faridabad, delivering RBI-compliant settlements that stop harassment, reduce liability, and protect legal rights.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle work with in Delhi NCR?',
    answer:
      'We negotiate with all major NBFCs and fintech lenders active in the capital region including Bajaj Finance, Tata Capital, Aditya Birla Finance, HDB Financial Services, Hero FinCorp, Clix Capital, Cashe, KreditBee, InCred, and regional housing finance companies. Multi-lender cases involving co-lending or NBFC-bank partnerships are coordinated through a single negotiation desk.'
  },
  {
    question: 'How fast can CredSettle stop recovery harassment in Delhi?',
    answer:
      'Most clients experience a noticeable reduction in calls within three to five business days. We issue representation notices referencing RBI Fair Practices Code, the Delhi Police standing order on recovery conduct, and the RBI Ombudsman escalation path. Persistent violations are escalated with call recordings, email transcripts, and complaints through the RBI CMS portal.'
  },
  {
    question: 'Does a settlement damage my credit score in Delhi NCR?',
    answer:
      'The bureau marks the account as settled, which is preferable to a write-off or ongoing default. CredSettle’s Delhi team prepares a post-settlement credit rebuild plan using secured credit cards, low-limit cooperative bank products, and bureau dispute submissions to lift scores back into the mid-600 range over 18 to 24 months.'
  },
  {
    question: 'Can CredSettle assist if my NBFC has already filed a case in Saket or Rohini courts?',
    answer:
      'Yes. We partner with Delhi-based advocates to file appearances, request mediation, or move the matter to Lok Adalat where appropriate. During litigation we continue negotiating with NBFC legal teams so the case can close with a consent settlement and formal court order.'
  },
  {
    question: 'Do you charge upfront fees for Delhi NCR clients?',
    answer:
      'No. We work on a success-linked model. After onboarding and document verification, we represent you with NBFCs and only raise invoices once an authorised settlement letter is issued and acknowledged.'
  }
];

const sections = [
  {
    id: 'delhi-borrower-snapshot',
    title: 'Delhi Borrower Snapshot: Metro Pressures and NCR Debt Patterns',
    level: 2,
    content: [
      "Delhi NCR is India’s densest financial ecosystem, combining central government employees, policy think-tanks, start-ups, e-commerce warehouses, gig riders, and traders from Chandni Chowk to Nehru Place. NBFC penetration remains high because digital lending apps, point-of-sale financing, and business credit lines provide faster disbursals than scheduled banks. The same convenience turns risky after two or three missed EMIs. Interest costs between 20% and 36% stack up quickly, while late fees and legal charges convert manageable arrears into runaway balances.",
      "Capital residents face a unique cost matrix: sky-high rentals in South Delhi, school fees in Dwarka and Gurugram, transport expenses, and inflation-hit groceries. Gig economy earners – delivery riders, ride-hailing drivers, and freelance professionals – experience inconsistent payouts. When revenue drops, NBFC EMIs slip behind quickly, prompting relentless follow-ups. Many salaried professionals also carry relocation costs, security deposits, and lifestyle debt from electronics or travel purchases, all of which strain cash flows when bonuses are delayed.",
      "By the time borrowers approach CredSettle, their cases often include multiple NBFCs plus wage garnishment threats or social media intimidation. Our Delhi desk handles these scenarios daily, ensuring the borrower regains control of communication, compiles the right evidence, and structures a settlement that matches capital-region living realities."],
  },
  {
    id: 'nbfc-footprint-ncr',
    title: 'NBFC Footprint Across Delhi NCR',
    level: 2,
    content: [
      "Bajaj Finance, Tata Capital, Aditya Birla Finance, L&T Finance, HDB Financial Services, and Mahindra Finance operate large branches in Connaught Place, Karol Bagh, Rajouri Garden, and Nehru Place. Digital-first lenders such as Cashe, KreditBee, MoneyTap, and EarlySalary run their risk and recovery teams out of Gurugram and Noida, leveraging analytics to trigger automated reminders within hours of a missed payment.",
      "Vehicle NBFCs finance fleets for cab aggregators and logistics companies in Ghaziabad, Faridabad, and Manesar. When fuel prices spike or platform incentives change, EMIs become unsustainable. Machinery and unsecured business loans dominate industrial clusters in Okhla, Bawana, and Greater Noida, while education and travel financing flourish in south campus student zones and airport-linked businesses.",
      "Our settlement team maintains direct channels with NBFC risk officers and cluster heads across these geographies. Because we understand each lender’s provisioning cycles, audit checkpoints, and board-approved compromise policies, we time proposals to coincide with quarter-end review meetings or fiscal year cleanups when approvals are most likely."],
  },
  {
    id: 'regulatory-environment',
    title: 'Regulatory Environment and Borrower Protection in Delhi',
    level: 2,
    content: [
      "Delhi residents can leverage a strong compliance backdrop. The RBI Fair Practices Code forces NBFCs to share transparent statements, respect working hours for communication, and display authorised recovery agent IDs. The RBI Integrated Ombudsman has an office at Sansad Marg that accepts online complaints through the CMS portal when NBFCs ignore grievance escalations.",
      "The Delhi Police issued a standing order in 2020 reiterating that recovery agents cannot threaten borrowers, visit workplaces without permission, or misuse contact lists scraped from smartphones. Violations invite FIRs for criminal intimidation. Additionally, the Delhi High Court has repeatedly emphasised dignified collection practices in judgments involving NBFCs and fintech apps, another lever we cite when pushing for immediate harassment cessation.",
      "CredSettle builds a compliance file for every Delhi case: grievance emails, call recordings, SMS screenshots, and detailed timelines. This dossier becomes leverage when negotiating settlements or drafting submissions to the Ombudsman, Delhi State Legal Services Authority (DSLSA), or consumer forums."],
  },
  {
    id: 'credsettle-command-centre',
    title: "CredSettle's Delhi Command Centre Methodology",
    level: 2,
    content: [
      "Our Delhi command centre runs a six-pillar methodology tailored to the capital’s pace. Pillar one is diagnostics: we pull credit bureau reports, decode loan agreements, identify co-applicants, and benchmark interest plus penalty accruals. Pillar two is harassment control: a dedicated compliance desk issues notices to NBFC nodal officers, recovery partners, and tele-calling vendors, warning them about RBI and Delhi Police norms.",
      "Pillar three focuses on financial architecture. We map inflows from salaries, business receipts, or gig platforms, then simulate various settlement payment plans to test feasibility. Pillar four handles negotiation campaigns. We prepare lender-specific memos referencing provisioning status, board-approved OTS schemes, and comparable case precedents achieved by CredSettle in Delhi the previous quarter.",
      "Pillar five is documentation vetting. Our legal team reviews each offer letter to ensure complete waiver of future claims, closure of legal notices, and accurate representation of outstanding versus agreed amounts. Pillar six delivers closure and aftercare, coordinating payment acknowledgements, NOC issuance, lien releases, and bureau updates while coaching clients through the rebuild roadmap."],
  },
  {
    id: 'sector-strategies',
    title: 'Industry-Specific Settlement Strategies in NCR',
    level: 2,
    content: [
      "Start-up founders in Gurugram and Noida often rely on unsecured business loans for runway. When funding rounds delay, we supply investors’ bridge commitment letters or revenue projections to position settlement as the cleanest exit. Retail traders in Sadar Bazaar and Lajpat Nagar need cash flow-sensitive instalment plans, so we align payment dates with seasonal peaks like Diwali and wedding shopping cycles.",
      "Gig workers in Dwarka, Rohini, and Ghaziabad depend on aggregator payouts. We compile platform statements showing incentive cuts, fuel reimbursement changes, and downtime during air pollution bans or weekend curfews, supporting a reduced settlement percentage. Healthcare professionals running clinics in South Delhi leverage patient appointment data and insurance claim delays to justify structured payments.",
      "Educational institutions and coaching centres along the Metro Blue Line suffered revenue dips during extended online learning. CredSettle integrates school fee collection data, rental agreements, and ESI/PF filings to build persuasive hardship narratives that NBFC credit committees accept."],
  },
  {
    id: 'legal-lifelines',
    title: 'Legal Lifelines: DSLSA, Lok Adalats, and DRT Benches',
    level: 2,
    content: [
      "The Delhi State Legal Services Authority conducts special Lok Adalat sittings for loan disputes at district courts in Patiala House, Saket, Dwarka, Rohini, and Karkardooma. NBFCs participate to clear non-performing assets swiftly. CredSettle drafts joint petitions so settlements receive the force of a decree, closing the door on future claims.",
      "Debts Recovery Tribunals (DRT-I and DRT-II) sit in New Delhi and handle higher-ticket NBFC litigations. Our advocates track cause lists, file appearances, and push for mediation or consent terms before assets are attached. For smaller digital lending disputes, Delhi District Consumer Commissions in Shalimar Bagh and Moti Nagar accept complaints, especially when hidden charges or data misuse is involved.",
      "When cyber intimidation or privacy breaches occur, we mobilise Delhi Police Cyber Cells at Dwarka and Mandir Marg, lodging complaints with evidence packages. Legal escalation combined with settlement outreach often persuades NBFCs to accept reasonable offers sooner."],
  },
  {
    id: 'step-by-step-delhi',
    title: 'Step-by-Step Settlement Blueprint for Delhi Clients',
    level: 2,
    content: [
      "Step 1: Discovery call and documentation checklist issued within 24 hours. Step 2: Engagement letter signed and compliance notices dispatched to halt harassment. Step 3: Financial analysis and case memo creation referencing Delhi market data. Step 4: Negotiation campaign launched with lender-specific strategy and timeline tracking dashboard shared with the client.",
      "Step 5: Offer evaluation, counter proposal drafting, and inclusion of structured payment options when needed. Step 6: Legal review of settlement terms, ensuring coverage of co-applicants, guarantors, and post-dated cheques. Step 7: Payment execution via traceable banking channels, followed by collection of receipts, NOCs, and lien release documents.",
      "Step 8: Bureau update monitoring, Lok Adalat filings (if required), and post-settlement coaching session. Step 9: Quarterly follow-ups for one year to ensure credit rebuild milestones and compliance with tax obligations on any waived amounts."],
  },
  {
    id: 'documentation-readiness',
    title: 'Documentation Blueprint for Delhi Settlements',
    level: 2,
    content: [
      "Identity and address proofs: Aadhaar, PAN, voter ID, utility bills, and passport copies. Employment or business proof: appointment letters, salary slips, bank statements, GST returns, MSME registrations, and rent agreements for offices or shops.",
      "Financial hardship evidence: salary reduction emails, Form 16, termination letters, invoicing dips captured in accounting software, Ola/Uber earnings statements, e-commerce settlement reports, or medical expense bills from AIIMS, Fortis, or Max hospitals.",
      "Communication records: call logs, WhatsApp screenshots, recovery agent ID photos, audio recordings, and email chains. Proof of funds available for settlement: bank balance certificates, fixed deposit encashment plans, or family contributions documented through affidavits. Each item accelerates negotiation and satisfies NBFC compliance checks."],
  },
  {
    id: 'payment-architecture',
    title: 'Payment Architecture and Compliance Safeguards',
    level: 2,
    content: [
      "Delhi NCR clients often juggle multiple banking relationships. CredSettle designs a payment architecture that locks settlement funds in escrow-like accounts until the NBFC issues an acceptance letter. We prefer NEFT/RTGS transfers or demand drafts to maintain a verifiable trail.",
      "For structured settlements, we align instalments with predictable inflows such as monthly retainers, rental income, or institutional purchase orders. Each payment triggers an acknowledgement request within 24 hours to avoid disputes. When NBFCs insist on securing post-dated cheques, we ensure the cheque count matches the schedule and that a destruction clause appears in the final NOC.",
      "We also handle compliance reporting: TDS certificates for any write-back taxation, Form 26AS verification, and ledger reconciliation so the borrower’s accounting software reflects accurate liabilities and waiver amounts."],
  },
  {
    id: 'recovery-and-rebuild',
    title: 'Financial Recovery and Credit Rebuild After Settlement',
    level: 2,
    content: [
      "Post-settlement, we schedule a financial reset workshop. Clients set up emergency funds through Delhi cooperative banks like Saraswat Bank or Punjab & Sind Bank branches, automate savings via recurring deposits, and segregate personal and business accounts to prevent cash flow confusion.",
      "We guide clients to review their credit reports from CIBIL, Experian, Equifax, and CRIF High Mark within 45 days of settlement. Any discrepancies trigger online disputes with supporting documents. Once bureaus reflect the correct status, we introduce secured credit products such as fixed-deposit-backed cards or gold loans with lower interest to rebuild repayment history.",
      "Entrepreneurs receive cash flow templates tailored to local realities – factoring in GST payments, vendor credit terms at Azadpur Mandi, or seasonal tourism inflows in central Delhi. Gig workers receive app-based earning trackers and fuel budgeting tools. Quarterly reviews ensure the recovery roadmap stays on track."],
  },
  {
    id: 'case-diaries',
    title: 'Case Diaries from Delhi NCR Borrowers',
    level: 2,
    content: [
      "Case 1: A Gurugram SaaS founder faced simultaneous defaults across three NBFC business loans totalling INR 96 lakh after a delayed Series A round. CredSettle negotiated a consolidated settlement of INR 41 lakh payable over four instalments aligned with a new client contract. Legal notices in Saket court were withdrawn after consent terms were filed.",
      "Case 2: A Dwarka-based ride-hailing driver with two vehicle loans and a digital payday loan saw earnings plummet during pollution-related odd-even restrictions. By presenting aggregator earnings data and repair invoices, we secured a 55% reduction and structured payments that matched new incentive cycles.",
      "Case 3: A Karol Bagh jewellery trader used six NBFC lines for working capital. After COVID-era store closures, arrears ballooned to INR 78 lakh. CredSettle routed the matter through a special Lok Adalat session at Patiala House Courts, closing with a 48% settlement funded through a family property refinancing plan."],
  }
];

const headings = [
  { id: 'delhi-borrower-snapshot', text: 'Delhi Borrower Snapshot: Metro Pressures and NCR Debt Patterns', level: 2 },
  { id: 'nbfc-footprint-ncr', text: 'NBFC Footprint Across Delhi NCR', level: 2 },
  { id: 'regulatory-environment', text: 'Regulatory Environment and Borrower Protection in Delhi', level: 2 },
  { id: 'credsettle-command-centre', text: "CredSettle's Delhi Command Centre Methodology", level: 2 },
  { id: 'sector-strategies', text: 'Industry-Specific Settlement Strategies in NCR', level: 2 },
  { id: 'legal-lifelines', text: 'Legal Lifelines: DSLSA, Lok Adalats, and DRT Benches', level: 2 },
  { id: 'step-by-step-delhi', text: 'Step-by-Step Settlement Blueprint for Delhi Clients', level: 2 },
  { id: 'documentation-readiness', text: 'Documentation Blueprint for Delhi Settlements', level: 2 },
  { id: 'payment-architecture', text: 'Payment Architecture and Compliance Safeguards', level: 2 },
  { id: 'recovery-and-rebuild', text: 'Financial Recovery and Credit Rebuild After Settlement', level: 2 },
  { id: 'case-diaries', text: 'Case Diaries from Delhi NCR Borrowers', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function DelhiPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const tocHeadings = useMemo(() => headings, []);

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
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px', marginBottom: '48px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            <div
              className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2"
              style={{ minWidth: '0', position: 'relative' }}
            >
              <img
                src="/nbfc_hero.png"
                alt="Delhi NBFC Loan Settlement"
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
                {heroCopy.title}
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
                {heroCopy.description}
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
                Connect With the Delhi Settlement Desk
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
          <div className="flex flex-col gap-4 lg:gap-8" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="w-full">
              <TableOfContents headings={tocHeadings} />
            </div>

            <div className="w-full" style={{ minWidth: '0' }}>
              {sections.map((section) => (
                <section
                  key={section.id}
                  id={section.id}
                  style={{ marginBottom: '48px', scrollMarginTop: '100px' }}
                >
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
                    {section.title}
                  </h2>
                  <div
                    className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                    style={{
                      color: 'rgba(12, 39, 86, 0.80)',
                      fontFamily: 'Poppins',
                      lineHeight: '28px'
                    }}
                  >
                    {section.content.map((paragraph, index) => (
                      <p key={index} style={{ marginBottom: '16px' }}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Delhi NCR" />

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
                      Ready to Build Your Delhi Settlement Plan?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share loan statements and hardship proof. Our Delhi command centre drafts your negotiation blueprint within 48 hours.
                    </p>
                  </div>

                  <button
                    className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90"
                    style={{ boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset' }}
                  >
                    <span
                      className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal"
                      style={{ color: '#0C2756' }}
                    >
                      Book a Free Consultation
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

export default DelhiPageClient;





