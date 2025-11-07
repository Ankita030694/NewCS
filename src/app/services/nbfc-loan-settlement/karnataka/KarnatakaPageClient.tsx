'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in Karnataka – Policy-Savvy Relief for Bengaluru & Beyond',
  description:
    'Karnataka’s borrowers range from Bengaluru tech founders and Mysuru retailers to coastal logistics fleets and microfinance borrowers in the Malnad belt. CredSettle’s Karnataka desk combines RBI expertise with knowledge of the 2025 state anti-coercion law to negotiate compliant settlements, halt harassment, and close outstanding NBFC loans legally.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle negotiate with in Karnataka?',
    answer:
      'We cover Bajaj Finance, Tata Capital, Aditya Birla Finance, HDB Financial Services, Hero FinCorp, L&T Finance, Piramal Finance, KreditBee, ZestMoney, Cashe, and microfinance NBFCs licensed under the Karnataka Micro Loan & Small Loan Act. We also coordinate co-lending cases where private banks and NBFCs share exposure.'
  },
  {
    question: 'Can CredSettle protect me from coercive recovery under Karnataka law?',
    answer:
      'Yes. We invoke the Karnataka Micro Loan and Small Loan (Prevention of Coercive Actions) Act, 2025, along with the RBI Fair Practices Code. Our legal notices warn NBFCs and their agencies that harassment invites penalties and ban orders from district authorities. Persistent violations are escalated to the Consumer Affairs Department and the RBI Ombudsman in Bengaluru.'
  },
  {
    question: 'How much settlement reduction is typical in Bengaluru or Mysuru?',
    answer:
      'Most Karnataka clients achieve 40–70% reductions depending on the loan type, overdue tenure, and documentation quality. Vehicle loans in logistics corridors often settle around 50%, while unsecured fintech loans may see higher waivers once we evidence income disruption.'
  },
  {
    question: 'What if my case is already filed in the Karnataka Debt Recovery Tribunal or civil court?',
    answer:
      'Our panel advocates engage with NBFC counsel in the Bengaluru DRT, commercial court, or district courts across Hubballi, Mangaluru, and Shivamogga. We seek mediation, negotiate consent terms, and ensure the final order reflects full and final settlement. Lok Adalat routes remain available for quick closures.'
  },
  {
    question: 'Do you require upfront fees from Karnataka clients?',
    answer:
      'No upfront fees. We sign a success-linked mandate, complete due diligence, and collect our fee only after the NBFC issues the settlement letter and acknowledges receipt of negotiated payments.'
  }
];

const sections = [
  {
    id: 'karnataka-credit-landscape',
    title: 'Karnataka Credit Landscape: Tech Capital Meets Microfinance Heartland',
    level: 2,
    content: [
      "Karnataka is India’s technology launchpad and also a major microfinance hub. Bengaluru’s start-ups, IT parks, and gig economy rely on quick NBFC funding for expansion, employee relocation, and vehicle fleets. In contrast, coffee, pepper, and areca nut growers in Kodagu and Malnad districts use NBFC microloans to manage seasonal cash flow. The same depth of credit access turns risky when revenue cycles stumble – layoffs in tech corridors, delayed export payments in coastal logistics, or crop disease outbreaks can make EMIs unmanageable overnight.",
      "Lenders deploy multi-channel recovery teams from Whitefield to Belagavi, with data-driven dialers, doorstep collection, and social media nudges. Borrowers facing twin shocks – high urban living costs plus aggressive follow-ups – need a settlement partner that understands both RBI regulations and state-level protections. CredSettle fills that gap with a Karnataka-specific command centre staffed by negotiators, advocates, and chartered accountants."],
  },
  {
    id: 'nbfc-coverage-karnataka',
    title: 'NBFC Coverage Across Bengaluru, Mysuru, Coastal, and Northern Zones',
    level: 2,
    content: [
      "Bengaluru hosts major NBFC headquarters and service centres, including Bajaj Finance, Tata Capital, and multiple fintech lenders along the Outer Ring Road. Mysuru, Hubballi-Dharwad, and Belagavi feature auto-financing clusters supporting ancillary industries. Coastal cities like Mangaluru and Udupi depend on NBFCs for fisheries, logistics, and tourism-focussed lending, while Shivamogga and Ballari rely on NBFC working capital for agro-processing and mining supply chains.",
      "Microfinance NBFCs, self-help group (SHG) lenders, and cooperative-backed NBFCs have strong penetration in Davangere, Tumakuru, and rural Mandya. When borrowers default, enforcement teams operate in Kannada, Tulu, Konkani, and English, using local intelligence to trace co-borrowers and guarantors. CredSettle’s multilingual case managers ensure communication stays professional, documented, and within legal limits so that settlement negotiations proceed without intimidation."],
  },
  {
    id: 'regulatory-safeguards',
    title: 'Regulatory Safeguards: RBI Playbook + Karnataka Anti-Coercion Law',
    level: 2,
    content: [
      "The RBI Fair Practices Code mandates transparent statements, respectful recovery conduct, and grievance escalation within NBFCs. Karnataka went further with the 2025 Micro Loan and Small Loan Act, prohibiting coercive collections and requiring all micro lenders to register with district authorities. Violations attract fines up to INR 5 lakh and imprisonment.",
      "CredSettle anchors every case in this dual framework. We log harassment with audio clips, WhatsApp snapshots, and field visit photos, then alert NBFC nodal officers and district registrars. Many lenders pivot to settlement once they realise non-compliance could trigger license suspension or public naming by the Registrar of Cooperative Societies or the state Consumer Affairs Department.",
      "Borrowers also gain recourse through the RBI Ombudsman in Bengaluru, consumer disputes redressal commissions, and the Karnataka State Legal Services Authority (KSLSA). We draft escalations for clients whenever NBFCs delay or deny reasonable settlement proposals."],
  },
  {
    id: 'credsettle-karnataka-method',
    title: "CredSettle's Karnataka Settlement Methodology",
    level: 2,
    content: [
      "Our Karnataka methodology runs on five pillars. Pillar one is situation mapping: gathering loan agreements, EMI histories, co-applicant data, Udyam registrations, SHG passbooks, and GST returns. Pillar two enforces compliance – legal notices to NBFC headquarters, field recovery agencies, and if required, to the jurisdictional police station citing the anti-coercion act.",
      "Pillar three constructs negotiation dossiers. We analyse each NBFC’s provisioning matrix, quarter-end targets, and appetite for OTS in light of the new state regulations. Pillar four finalises settlements, vetting offer letters for complete release clauses, cheque destruction assurances, and credit bureau update commitments.",
      "Pillar five covers closure and rehabilitation: collecting NOCs, coordinating vehicle hypothecation releases at RTOs, supporting property lien removals, and scheduling credit rebuild coaching. Clients receive monthly tracker updates until every document and bureau entry reflects the new status."],
  },
  {
    id: 'sector-playbooks',
    title: 'Sector Playbooks Tailored to Karnataka’s Economy',
    level: 2,
    content: [
      "Bengaluru start-ups and IT professionals: we leverage payroll reduction letters, ESOP liquidity delays, and venture funding timelines to justify structured settlements. Our team also collaborates with CFOs to craft staggered payments aligned to expected receivable inflows.",
      "Agriculture and plantation borrowers: coffee and spice growers in Kodagu or Chikkamagaluru often battle price crashes and weather extremes. We compile rainfall deviations, Coffee Board advisories, and crop insurance claim status to secure significant waivers, especially from agro-focused NBFCs.",
      "Logistics and fleet operators along National Highway corridors: we gather freight rate data, toll cost spikes, and EV transition expenses to support settlement proposals. For fintech microloans in urban slums or coastal fishing communities, we showcase community income statistics and local government relief measures."],
  },
  {
    id: 'legal-forums-karnataka',
    title: 'Legal Forums: KSLSA, Lok Adalats, and DRT Bengaluru',
    level: 2,
    content: [
      "Karnataka State Legal Services Authority conducts Mega Lok Adalat drives across Bengaluru, Mysuru, Hubballi, and Mangaluru, resolving loan disputes in a single sitting. CredSettle files joint settlement memos so borrowers receive decree-backed closure without protracted litigation.",
      "The Debts Recovery Tribunal in Bengaluru handles higher-ticket NBFC cases, while city civil courts and magistrate courts manage cheque bounce and arbitration matters. Our advocates ensure settlement terms are recorded formally, preventing future enforcement attempts.",
      "When data misuse or cyber intimidation occurs, we work with the Bengaluru Cyber Crime police station and the state’s cyber command centre to register complaints. Legal escalation combined with settlement outreach accelerates approvals from cautious NBFC legal teams."],
  },
  {
    id: 'step-plan-karnataka',
    title: 'Step-by-Step Karnataka Settlement Game Plan',
    level: 2,
    content: [
      "Step 1: Intake and documentation checklist shared within 24 hours. Step 2: CredSettle issues representation notices and begins harassment logs. Step 3: Financial analysis using salary statements, Udyam data, and municipal tax records to define affordable settlement bands.",
      "Step 4: Negotiation campaign aligned with NBFC review calendars. Step 5: Offer evaluation, counter proposals, and structured payment scheduling. Step 6: Legal vetting, payment execution via traceable banking channels, and real-time receipt tracking.",
      "Step 7: Collect NOCs, lien release documents, and bureau update confirmations. Step 8: Lok Adalat or KSLSA filings if judicial backing is beneficial. Step 9: Post-settlement coaching on budgeting, tax compliance for write-offs, and credit rebuild checkpoints."],
  },
  {
    id: 'documentation-karnataka',
    title: 'Documentation & Evidence Toolkit for Karnataka Borrowers',
    level: 2,
    content: [
      "Identity & KYC: Aadhaar, PAN, voter ID, passport, local address proofs. Income & business proof: salary slips, Form 16, bank statements, GST returns, SHG passbooks, cooperative society certificates, and invoices from Kirana or textile suppliers.",
      "Hardship evidence: termination letters, salary revision emails, rainfall deficit reports from IMD, crop disease certificates from Krishi Vigyan Kendras, medical bills from Manipal, Narayana, or Jayadeva hospitals, and municipal closure notices for shops.",
      "Communication logs: call recordings, WhatsApp screenshots, social media tags, and field visit details. Settlement funding proof: bank balance letters, family contribution affidavits, or property sale agreements awaiting registration."],
  },
  {
    id: 'payment-structure',
    title: 'Payment Structure and Compliance Controls',
    level: 2,
    content: [
      "We design payment structures that respect Karnataka’s business cycles. For example, coir exporters align settlement instalments with export remittance receipts, while BMTC staff coordinate payments with quarterly allowances. Every transaction uses NEFT/RTGS or demand drafts for audit-ready trails.",
      "CredSettle secures acknowledgement letters within 24 hours of each payment. If NBFCs insist on post-dated cheques, we specify a destruction clause in the final NOC, referencing the Karnataka anti-coercion act to prevent misuse. We also verify TDS rules for any write-back taxation and update Form 26AS accordingly."],
  },
  {
    id: 'financial-rebuild-karnataka',
    title: 'Financial Recovery & Credit Rebuild for Karnataka Clients',
    level: 2,
    content: [
      "Our post-settlement clinics teach clients to set up emergency reserves through Karnataka Bank, Canara Bank, or regional cooperative societies. We separate business and personal accounts, automate savings via recurring deposits, and map expenses using Kannada and English budgeting dashboards.",
      "Credit rebuild involves pulling CIBIL, Experian, Equifax, and CRIF High Mark reports 45 days after settlement, filing disputes for inaccuracies, and gradually adding secured credit products. For SHG borrowers, we coordinate with NABARD-sponsored credit counselling cells to restore group lending eligibility.",
      "We also connect entrepreneurs to government schemes like the Karnataka Udyog Mitra incentives, Start-up Karnataka grants, and the state’s alternative credit platforms that offer lower-cost refinancing once regular repayments resume."],
  },
  {
    id: 'case-stories-karnataka',
    title: 'Case Stories from Bengaluru, Mysuru, and Coastal Karnataka',
    level: 2,
    content: [
      "Case 1: A Bengaluru-based SaaS company had three NBFC lines totalling INR 1.1 crore. When a global client deferred payments, defaults triggered legal notices. CredSettle negotiated a 52% settlement, structured across five tranches funded by a bridge round, and closed the DRT case with a consent decree.",
      "Case 2: A Mangaluru logistics entrepreneur operating six refrigerated trucks faced losses due to diesel price hikes and monsoon route disruptions. We used fuel invoices, route maps, and fish auction data to secure a 58% reduction and aligned payments with new contracts at New Mangalore Port.",
      "Case 3: A Chikkamagaluru coffee planter with SHG-backed microloans saw yield collapse because of heavy rainfall. CredSettle presented IMD rainfall reports, Coffee Board advisories, and crop insurance claim receipts to achieve a 63% waiver recorded through a KSLSA Lok Adalat settlement."],
  }
];

const headings = [
  { id: 'karnataka-credit-landscape', text: 'Karnataka Credit Landscape', level: 2 },
  { id: 'nbfc-coverage-karnataka', text: 'NBFC Coverage Across Karnataka', level: 2 },
  { id: 'regulatory-safeguards', text: 'Regulatory Safeguards', level: 2 },
  { id: 'credsettle-karnataka-method', text: "CredSettle's Karnataka Methodology", level: 2 },
  { id: 'sector-playbooks', text: 'Sector Playbooks', level: 2 },
  { id: 'legal-forums-karnataka', text: 'Legal Forums', level: 2 },
  { id: 'step-plan-karnataka', text: 'Step-by-Step Game Plan', level: 2 },
  { id: 'documentation-karnataka', text: 'Documentation Toolkit', level: 2 },
  { id: 'payment-structure', text: 'Payment Structure & Compliance', level: 2 },
  { id: 'financial-rebuild-karnataka', text: 'Financial Recovery & Credit Rebuild', level: 2 },
  { id: 'case-stories-karnataka', text: 'Case Stories', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function KarnatakaPageClient() {
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
                alt="Karnataka NBFC Loan Settlement"
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
                Talk to the Karnataka Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Karnataka" />

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
                      Ready to Plan Your Karnataka Settlement?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share your EMI statements and hardship proof. Our Karnataka desk drafts a negotiation roadmap within 48 hours.
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

export default KarnatakaPageClient;

