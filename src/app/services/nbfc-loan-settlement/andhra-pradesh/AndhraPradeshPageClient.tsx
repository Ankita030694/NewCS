'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';

const heroCopy = {
  title: 'NBFC Loan Settlement in Andhra Pradesh – Coastal Clarity, Legal Closure',
  description:
    'Andhra Pradesh borrowers juggle coastal trade cycles, agrarian income swings, fintech buzz, and microfinance networks. CredSettle’s AP command desk blends RBI policy mastery with state-level dispute forums to negotiate compliant settlements, throttle harassment, and deliver closure for borrowers in Vizag, Vijayawada, Guntur, Tirupati, and Rayalaseema.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle negotiate with in Andhra Pradesh?',
    answer:
      'We handle Bajaj Finance, Tata Capital, Aditya Birla Finance, Shriram Finance, Muthoot Finance, L&T Finance, Piramal Capital, HDB Financial Services, MoneyTap, KreditBee, and registered microfinance NBFCs operating across Andhra Pradesh. Multi-lender portfolios and co-lending arrangements are coordinated end-to-end.'
  },
  {
    question: 'What legal protections exist against coercive recovery in Andhra Pradesh?',
    answer:
      'We leverage the RBI Fair Practices Code, the Andhra Pradesh Micro Finance Institutions (Regulation of Money Lending) Act provisions, local police circulars on recovery conduct, and the AP Lok Adalat system. Our notices warn NBFCs that harassment invites FIRs and Ombudsman escalations through the RBI’s Chennai office.'
  },
  {
    question: 'How strong are settlement outcomes in coastal and Rayalaseema regions?',
    answer:
      'Average reductions range between 40% and 70% depending on loan category and documentation strength. Coastal traders and transporters typically see 45–55% waivers, while fintech personal loans and microfinance cases can cross the 60% mark once we substantiate income disruption.'
  },
  {
    question: 'Can CredSettle help if SARFAESI and arbitration proceedings run simultaneously?',
    answer:
      'Yes. The AP High Court allows parallel SARFAESI and arbitration actions. We engage with NBFC advocates to pause aggressive enforcement, steer the dispute toward negotiated settlement, and document consent terms in Lok Adalat or civil court to ensure final closure.'
  },
  {
    question: 'Do you charge upfront fees for Andhra Pradesh clients?',
    answer:
      'No. Our fee is success-based. Once we onboard, gather documentation, and secure the NBFC settlement letter, we raise invoices only after the negotiated payment is acknowledged.'
  }
];

const sections = [
  {
    id: 'ap-credit-dynamics',
    title: 'Andhra Pradesh Credit Dynamics: Ports, Farms, and Fintech',
    level: 2,
    content: [
      "Visakhapatnam’s ports, Vijayawada’s logistics hubs, Guntur’s spice traders, Tirupati’s pilgrimage economy, and Rayalaseema’s agrarian base all rely on NBFC capital. Cargo exporters, aqua farmers, sari retailers, and MSMEs use NBFCs for working capital and asset financing. Digital personal loans and buy-now-pay-later products now reach tier-2 towns via mobile apps, fuelling quick disbursal but also rapid delinquency when tourist seasons or agri prices dip.",
      "Post-pandemic recovery saw aggressive expansion by fintech lenders across coastal districts. Interest rates north of 24% plus platform penalties drive EMI burdens higher, while crop failure, cyclone impacts, or rail freight delays disrupt cash flow. Borrowers soon face domino calls from collection agencies, social media threats, and door-step visits that violate RBI norms. CredSettle intervenes with documentation, compliance warnings, and structured negotiation to defuse the pressure."
    ]
  },
  {
    id: 'nbfc-footprint-ap',
    title: 'NBFC Footprint Across North Coastal, Central, and Rayalaseema Andhra',
    level: 2,
    content: [
      "Northern coastal districts (Visakhapatnam, Vizianagaram, Srikakulam) feature logistics, steel, and fishing-based loans. Central Andhra (Vijayawada, Guntur, Eluru) leans on transport, spice trading, and FMCG distribution. Rayalaseema (Kurnool, Anantapur, Kadapa, Chittoor) depends on agro-input finance, solar pumps, and microfinance for self-help groups.",
      "NBFCs position branch teams, franchise partners, and digital recovery agents with local language proficiency (Telugu and coastal dialects). CredSettle’s AP negotiators work in Telugu and English, maintaining etiquette while recording every interaction. Our local network collects ground intelligence on NBFC policy shifts, quarter-end targets, and willingness to approve OTS proposals."
    ]
  },
  {
    id: 'legal-framework-ap',
    title: 'Legal Framework: RBI Rules, AP MF Regulation, and Judiciary Benchmarks',
    level: 2,
    content: [
      "The RBI Fair Practices Code mandates transparent interest disclosure, harassment-free recovery, and responsive grievance redressal. Andhra Pradesh strengthened protection with microfinance regulation requiring money lenders to register, disclose rates, and follow code-of-conduct norms.",
      "In May 2024 the Andhra Pradesh High Court affirmed that banks can invoke SARFAESI and arbitration simultaneously to recover dues. We use this precedent to craft dual-strategy settlements, ensuring NBFCs accept negotiated amounts before enforcement escalates.",
      "Borrowers can escalate grievances to the RBI NBFC Ombudsman (Chennai jurisdiction), Andhra Pradesh State Consumer Disputes Commissions, and AP Lok Adalat benches. CredSettle drafts petitions, collects evidence, and represents clients through allied advocates whenever escalations improve settlement leverage."
    ]
  },
  {
    id: 'credsettle-ap-method',
    title: "CredSettle's Andhra Settlement Method",
    level: 2,
    content: [
      "Diagnostics: We collect sanction letters, EMI trails, bank statements, GST returns, mandi invoices, shipping bills, SHG passbooks, and digital app screenshots. Compliance control: representation notices go to NBFC nodal officers, recovery agencies, and local police citing RBI and AP regulations.",
      "Negotiation memos: our analysts compile NBFC provisioning status, quarter-end closure pressures, and comparable settlements achieved by CredSettle for AP clients. Offer review: we vet OTS letters for clear waiver clauses, cheque destruction guarantees, and accurate outstanding vs settlement figures.",
      "Closure & aftercare: we schedule payments through trackable channels, secure NOCs, ensure release of hypothecation or mortgage documents, and monitor credit bureau updates. Clients receive bilingual updates via email and WhatsApp until every compliance point is complete."
    ]
  },
  {
    id: 'industry-playbooks-ap',
    title: 'Industry Playbooks Tailored to Andhra Pradesh',
    level: 2,
    content: [
      "Aquaculture & fisheries: we document harvest schedules, export delays, feed cost spikes, and cyclone alerts (e.g., Hudhud, Titli) to justify waivers.",
      "Agriculture & allied trades: chilli, turmeric, and cotton farmers face price volatility. CredSettle compiles Agriculture Market Committee data, warehousing receipts, and e-NAM price charts as proof of hardship.",
      "Transport & logistics: lorry owners on NH16 or port feeder services present diesel invoices, toll receipts, and slump in parcel volumes. Fintech personal loans for gig delivery riders in Vijayawada or Tirupati are negotiated using aggregator payout statements and algorithmic incentive cuts."
    ]
  },
  {
    id: 'legal-forums-ap',
    title: 'Dispute Forums: AP Lok Adalat, Consumer Commissions, and Ombudsman',
    level: 2,
    content: [
      "AP Lok Adalat, guided by the Andhra Pradesh State Legal Services Authority, resolves NBFC disputes in district court complexes across Vizag, Kakinada, Guntur, Nellore, and Anantapur. CredSettle prepays settlement drafts for decree-backed closure.",
      "District Consumer Commissions in Visakhapatnam, Vijayawada, and Tirupati handle complaints against unfair NBFC practices. Our legal partners file cases when hidden charges, mis-selling, or data misuse surfaces.",
      "The RBI NBFC Ombudsman (Chennai) and the integrated grievance portal (cms.rbi.org.in) provide additional oversight. We escalate unresolved grievances with structured evidence logs to nudge NBFC management toward settlement."
    ]
  },
  {
    id: 'step-plan-ap',
    title: 'Step-by-Step Andhra Settlement Roadmap',
    level: 2,
    content: [
      "Step 1: Free consultation, document checklist, and representation letter issuance within 48 hours.",
      "Step 2: Financial analysis using bank statements, mandi receipts, and platform payout reports to define settlement capacity.",
      "Step 3: Negotiation campaign timed with NBFC review cycles, including escalation to regional managers or board-level committees.",
      "Step 4: Offer evaluation, counter reasoning, and structured payment scheduling.",
      "Step 5: Legal vetting, payment execution, receipt verification, NOC and document release tracking.",
      "Step 6: Lok Adalat filings (if beneficial), credit bureau update monitoring, and post-settlement guidance."
    ]
  },
  {
    id: 'documentation-ap',
    title: 'Documentation Toolkit for Andhra Borrowers',
    level: 2,
    content: [
      "KYC: Aadhaar, PAN, ration card, voter ID, property tax receipts, or utility bills.",
      "Income & operations: GST returns, mandi slips, bank statements, shipping bills, SHG passbooks, aggregator payment dashboards, contract letters from seafood exporters or textile buyers.",
      "Hardship proof: cyclone relief claims, crop damage certificates, hospital bills, salary reduction letters, and digital communication logs (calls, WhatsApp, emails).",
      "Settlement funds proof: savings account snapshots, gold loan release plans, land sale agreements awaiting registration, or family contribution affidavits."
    ]
  },
  {
    id: 'payment-architecture-ap',
    title: 'Payment Architecture & Compliance',
    level: 2,
    content: [
      "We build settlement schedules aligned with seasonal inflows—paddy auctions, festival retail peaks, export remittances, or pilgrimage tourism cycles.",
      "Payments move via NEFT/RTGS or demand drafts from Andhra Bank/Union Bank, SBI, or cooperative banks. Acknowledgement letters are demanded within 24 hours to prevent disputes.",
      "Post-dated cheques, if unavoidable, include destruction clauses in the settlement letter. We ensure TDS implications on waivers are documented and Form 26AS matches the NBFC’s reporting."
    ]
  },
  {
    id: 'rebuild-ap',
    title: 'Financial Recovery & Credit Rebuild in Andhra Pradesh',
    level: 2,
    content: [
      "We design bilingual budgeting templates (English/Telugu) separating business and household flows, set up emergency funds through APCOB or district cooperative banks, and encourage systematic investment plans.",
      "Credit rebuild begins with bureau checks (CIBIL, Experian, Equifax, CRIF). Discrepancies are disputed with settlement letters attached. We then introduce secured credit products or community-based lending options as scores improve.",
      "Entrepreneurs get access to AP Industrial Infrastructure Corporation support, YSR Cheyutha or Rythu Bharosa scheme guidance, and DigiLocker-based document organisation to stay ready for future credit applications."
    ]
  },
  {
    id: 'case-stories-ap',
    title: 'Case Stories from Coastal & Rayalaseema Clients',
    level: 2,
    content: [
      "Case 1: A Visakhapatnam marine export firm defaulted on two NBFC loans after global freight delays. CredSettle secured a 49% settlement, timed payments with a new export contract, and closed SARFAESI proceedings via a consent order.",
      "Case 2: A Guntur chilli trader faced cascading defaults due to price crashes. Using Agricultural Market Committee data, warehousing receipts, and mandi transaction logs, we negotiated a 61% waiver recorded in a Guntur Lok Adalat session.",
      "Case 3: A Tirupati tour operator lost revenue during pandemic travel curbs. We compiled TTD pass data, aggregator platform figures, and bank statements to secure a 57% settlement and restructure remaining debt with a state cooperative bank."
    ]
  }
];

const headings = [
  { id: 'ap-credit-dynamics', text: 'Andhra Pradesh Credit Dynamics', level: 2 },
  { id: 'nbfc-footprint-ap', text: 'NBFC Footprint Across Andhra Pradesh', level: 2 },
  { id: 'legal-framework-ap', text: 'Legal Framework & Benchmarks', level: 2 },
  { id: 'credsettle-ap-method', text: "CredSettle's AP Settlement Method", level: 2 },
  { id: 'industry-playbooks-ap', text: 'Industry Playbooks', level: 2 },
  { id: 'legal-forums-ap', text: 'Dispute Forums', level: 2 },
  { id: 'step-plan-ap', text: 'Step-by-Step Roadmap', level: 2 },
  { id: 'documentation-ap', text: 'Documentation Toolkit', level: 2 },
  { id: 'payment-architecture-ap', text: 'Payment Architecture & Compliance', level: 2 },
  { id: 'rebuild-ap', text: 'Financial Recovery & Credit Rebuild', level: 2 },
  { id: 'case-stories-ap', text: 'Case Stories', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function AndhraPradeshPageClient() {
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
                alt="Andhra Pradesh NBFC Loan Settlement"
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
                Speak to the Andhra Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Andhra Pradesh" />

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
                      Ready to Craft Your Andhra Settlement Plan?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share your EMI statements and hardship proof. Our AP desk builds a negotiation blueprint within 48 hours.
                    </p>
                  </div>

                  <CTAButton>
                    Book a Free Consultation
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

export default AndhraPradeshPageClient;

