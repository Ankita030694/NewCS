'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in Gujarat Designed for Ports, Parks, and Growth Corridors',
  description:
    'CredSettle’s Gujarat desk supports borrowers from Ahmedabad pharma campuses and Surat diamond exporters to Mundra logistics operators. We combine RBI compliant negotiation, Gujarat Lok Adalat coordination, and fraud risk monitoring so that every NBFC settlement restores cash flow without regulatory surprises.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle negotiate with in Gujarat?',
    answer:
      'We manage cases involving Bajaj Finance, Tata Capital, Aditya Birla Finance, Mahindra Finance, Hero FinCorp, HDB Financial Services, Cholamandalam Investment, Piramal Finance, Shriram Finance, Fullerton, CreditAccess Grameen, Annapurna Finance, and fintech backed NBFCs servicing Ahmedabad, Surat, Vadodara, Rajkot, Bhavnagar, and Kutch.'
  },
  {
    question: 'How fast can coercive recovery be paused in Gujarat?',
    answer:
      'Our legal notices cite the RBI Fair Practices Code, recent Gujarat Police advisories, and the Legal Services Authorities Act. We file complaints with the Ahmedabad Cyber Crime cell or the state helpline when required. Most borrowers see field visits and intimidation soften within forty eight hours of engagement.'
  },
  {
    question: 'What settlement savings are typical in Ahmedabad or Surat?',
    answer:
      'Unsecured NBFC exposures in Ahmedabad’s manufacturing belt usually settle at 45 to 60 percent of outstanding dues when documentary proof is strong. Surat textile and diamond borrowers average 50 to 65 percent waivers, while logistics and port linked loans in Kutch or Bharuch often close around 50 to 55 percent depending on asset condition.'
  },
  {
    question: 'Will a settlement damage my CIBIL score permanently?',
    answer:
      'Settlements are recorded as settled instead of written off. We secure closure letters, file bureau disputes, and coordinate secured trade credit or cooperative bank products so that most Gujarat clients rebuild to credit scores above 650 within twelve to eighteen months.'
  },
  {
    question: 'Do Gujarat clients pay any upfront fee to CredSettle?',
    answer:
      'No. Engagement letters are success linked. CredSettle fees are payable only after the NBFC issues a written sanction, the borrower executes agreed payments, and updated no due certificates are received.'
  }
];

const sections = [
  {
    id: 'gujarat-credit-landscape',
    title: 'Gujarat Credit Landscape Powered by MSMEs, Ports, and Renewable Parks',
    level: 2,
    content: [
      'Gujarat ranks among the top Indian states for registered micro, small, and medium enterprises, with Ministry of MSME figures for FY23 placing it alongside Maharashtra and Tamil Nadu for unit count and credit demand. Manufacturing hubs from Ahmedabad to Vapi rely on NBFC working capital for machinery upgrades, export receivable buffers, and wage continuity during order swings. Renewable clusters in Kutch and Jamnagar borrow to build solar and green hydrogen projects, while cooperative dairies in Anand lean on NBFC equipment loans for plant expansions.',
      'The state’s trade friendly policies and industrial corridors attract rapid credit deployment, yet cash flow can become volatile. Diamond exports from Surat react to United States retail trends, while chemicals and pharmaceuticals in Vadodara and Ankleshwar navigate global regulatory inspections. These dynamics create spike risk for NBFC delinquency, making structured settlements essential for borrowers who want to stay compliant, avoid litigation, and secure quick release of pledged collateral.'
    ]
  },
  {
    id: 'industrial-corridors',
    title: 'Industrial Corridors from Ahmedabad to Kutch That Shape NBFC Exposure',
    level: 2,
    content: [
      'Ahmedabad and Gandhinagar anchor pharmaceuticals, engineering design, and GIFT City financial services. NBFC borrowers here include contract research outfits, IT service providers, and professional consultancies that rely on predictable billing cycles. Vadodara, Bharuch, and Ankleshwar form India’s largest chemicals and speciality manufacturing belt, where NBFCs fund effluent plant upgrades, logistics fleets, and raw material stocking for export orders.',
      'Western corridors covering Rajkot, Morbi, Jamnagar, and Kutch revolve around precision engineering, ceramics, brass components, and petrochemical logistics. Rajkot’s machine tool makers often stack NBFC equipment loans to meet auto component contracts, while Morbi’s tile cluster needs working capital to balance energy costs and order book swings. Mundra and Pipavav ports generate demand for heavy haulage equipment leasing, warehouse finance, and trade receivable discounting. CredSettle’s corridor mapping ensures each settlement narrative includes freight data, energy tariffs, and cluster level performance evidence.'
    ]
  },
  {
    id: 'nbfc-presence-gujarat',
    title: 'NBFC Presence Across Gujarat Counties and Urban Centres',
    level: 2,
    content: [
      'Large NBFCs maintain dense branch networks in Ahmedabad, Surat, Vadodara, Rajkot, and Bhavnagar, complemented by digital originators that lend through marketplaces and payment apps. Cooperative linked NBFCs partner with district central banks to deliver agri and dairy credit, especially in Saurashtra and North Gujarat. Fintech NBFCs service gig workers and e-commerce sellers in Surat, Bharuch, and Vapi, while microfinance NBFCs engage self help groups in Banaskantha, Dahod, and tribal belts near Narmada district.',
      'Co-lending relationships between NBFCs and private banks escalated after 2022, especially for MSME invoice finance in Vadodara chemicals, Rajkot auto ancillaries, and Surat textile processors. Such structures mean settlement approvals must travel across joint credit committees. CredSettle aligns communication with both lenders, preventing scenarios where the NBFC agrees but the bank refuses to ratify the compromise, and ensuring bureau updates happen simultaneously.'
    ]
  },
  {
    id: 'borrower-pressure-points',
    title: 'Borrower Pressure Points Unique to Gujarat’s Economy',
    level: 2,
    content: [
      'Surat’s diamond and jewellery exporters face cyclical dips when United States and Europe retail orders slow, leading to furloughs and inventory pile ups. Textile dyeing and weaving units contend with environmental compliance expenses and sudden export duty adjustments. Morbi’s ceramic makers deal with natural gas price spikes, while Jamnagar’s brass parts supply chain is exposed to global metal price volatility. These shocks cascade into overdue NBFC instalments when receivables stall.',
      'Logistics firms operating out of Mundra, Kandla, and Pipavav ports manage rising bunker fuel costs and occasional congestion fines. Agricultural borrowers in Banaskantha and Kutch suffer when erratic monsoons or cyclone conditions disrupt groundnut, cumin, or cotton yields. CredSettle documents each driver using shipping manifests, commodity board advisories, energy bills, and crop loss certificates so that settlement proposals highlight externally validated hardship, not generic narratives.'
    ]
  },
  {
    id: 'regulatory-safeguards-gujarat',
    title: 'Regulatory Safeguards and Relief Forums Available in Gujarat',
    level: 2,
    content: [
      'Borrowers in Gujarat can escalate grievances to the RBI Ombudsman office in Ahmedabad, which oversees NBFC compliance for the western region. Gujarat Lok Adalat, operated by the State Legal Services Authority, handled more than ten thousand cases during its first e-Lok Adalat drive in 2020, settling around one hundred ninety one crore rupees in disputes that included financial claims. These forums offer structured pathways for pre litigation settlements and ensure agreements receive legal recognition.',
      'State government channels provide additional support. The Gujarat State Co-operative Bank runs a one time settlement scheme that has helped thousands of borrowers regularise loans at reduced interest, while district industries centres offer counseling for MSMEs facing NBFC claims. CredSettle references these schemes where relevant, aligning settlement requests with precedents that lenders already acknowledge. The team also warns clients about fraud cases like the Chandkheda incident where a senior citizen lost funds to fake settlement agents, reinforcing the importance of documented, regulator-aware negotiations.'
    ]
  },
  {
    id: 'credsettle-method-gujarat',
    title: 'CredSettle Methodology Tailored for Gujarat Borrowers',
    level: 2,
    content: [
      'Engagement begins with a diagnostic covering loan agreements, repayment ledgers, GST filings, export data, energy bills, and subsidy claims. Analysts then map the lending NBFC’s provisioning norms, quarter end pressure, and prior settlement ratios for similar industries in Gujarat. Findings shape the opening anchor and demonstrate that the borrower understands the NBFC’s approval rhythm, reducing resistance during negotiations.',
      'Active cases run through structured negotiation sprints. The first sprint covers legal compliance notices and harassment documentation. The second sprint compiles evidence that justifies waiver thresholds, such as industry slowdown letters, crop loss surveys, or order cancellation emails. The third sprint finalises sanction letters, ensuring clauses confirm full and final closure, cheque destruction, and bureau update timelines. Clients receive bilingual progress trackers in English and Gujarati so stakeholders remain aligned and ready to act on instructions promptly.'
    ]
  },
  {
    id: 'sector-strategies-gujarat',
    title: 'Sector Strategies Covering Textiles, Diamonds, Chemicals, and Renewables',
    level: 2,
    content: [
      'Textile processors in Surat, Vapi, and Ahmedabad often face export duty swings and dye price volatility. CredSettle gathers Directorate General of Foreign Trade circulars, dye import invoices, and electricity consumption records to illustrate margin compression. Diamond units rely on export receipts and consignment financing, so settlement dossiers include Gem and Jewellery Export Promotion Council updates, buyer deferment letters, and insurance correspondence.',
      'Chemical and pharmaceutical borrowers in Vadodara, Ankleshwar, and Bharuch depend on compliance heavy processes. Negotiations leverage evidence from pollution control board inspections, United States Food and Drug Administration audit timelines, and raw material price charts. Renewable energy developers in Kutch and Jamnagar produce project progress reports, power purchase agreements, and tariff petitions to align settlement instalments with commissioning milestones or subsidy disbursals.'
    ]
  },
  {
    id: 'msme-and-cooperative-support',
    title: 'MSME and Cooperative Sector Support During Settlement',
    level: 2,
    content: [
      'Gujarat’s cooperative banks and credit societies remain influential, especially in dairy, agriculture, and rural retail. When NBFC loans overlap with cooperative funding, CredSettle coordinates tripartite discussions so that repayment routing and collateral releases are sequenced without conflict. The team collaborates with the Gujarat State Co-operative Bank OTS cell, district industry centres, and GujRERA where real estate borrowers face simultaneous obligations with developers and NBFC financiers.',
      'Morbi ceramic manufacturers, Rajkot engineering MSMEs, and Jamnagar brass clusters often operate in consortiums. CredSettle engages trade associations, arranges group counseling sessions, and aligns settlement calendars with industry peak seasons. This approach reassures NBFCs that settlements are based on collective market intelligence, improving approval probability and lowering the risk of borrowers relapsing into default.'
    ]
  },
  {
    id: 'legal-forums-gujarat',
    title: 'Legal and Quasi Judicial Forums That Influence Settlement Outcomes',
    level: 2,
    content: [
      'Debt Recovery Tribunal Ahmedabad oversees high value NBFC disputes arising across Gujarat. CredSettle’s advocates pursue consent terms inside the tribunal where possible, ensuring settlement clauses receive judicial backing and enforcement stays block aggressive recovery. Arbitration matters often seat in Ahmedabad or Mumbai; we push for venues convenient to borrowers and insist on institutional arbitrators so that negotiation leverage remains intact.',
      'Gujarat Lok Adalat sittings in district courts such as Surat, Rajkot, and Bhavnagar help close lower ticket loans quickly. CredSettle prepares compromise petitions, draft payment plans, and supporting affidavits in advance, enabling same day awards. For consumer complaints about harassment or hidden charges, the Gujarat State Consumer Commission and district consumer commissions provide redress, and our legal team helps file when NBFCs resist cooperative settlement offers.'
    ]
  },
  {
    id: 'nine-step-plan-gujarat',
    title: 'Nine Step Gujarat Settlement Playbook',
    level: 2,
    content: [
      'Step one compiles KYC, sanction letters, repayment schedules, bank statements, GST returns, and export invoices within forty eight hours. Step two issues representations to NBFC headquarters, branch managers, and recovery agencies referencing RBI directives and Gujarat law enforcement advisories. Step three documents hardship using shipment delays, energy tariff notifications, crop reports, or buyer cancellations.',
      'Step four benchmarks expected waivers against the NBFC’s historic settlements for similar industries. Step five presents an initial proposal with structured instalment or lump sum options. Step six manages counter offers and records harassment escalation for leverage. Step seven secures the sanction letter with full and final language, cheque destruction instructions, and bureau update commitments. Step eight supervises payments through NEFT, RTGS, or demand draft aligned with cash inflow events such as export remittances or subsidy credits. Step nine closes the file by collecting NOCs, updating bureaus, and scheduling credit rehabilitation sessions.'
    ]
  },
  {
    id: 'documentation-checklist-gujarat',
    title: 'Documentation Checklist for Gujarat Borrowers',
    level: 2,
    content: [
      'Manufacturing and export borrowers provide GST returns, e-way bills, customs shipping bills, DGFT documents, energy bills from Torrent Power or Uttar Gujarat Vij Company, and contracts with GIDC authorities. Service providers submit client invoices, timesheets, vendor agreements, and provident fund payment proofs. Real estate and infrastructure borrowers share GujRERA registration files, construction progress reports, and environmental clearance documents.',
      'Agricultural clients supply land records, 7/12 extracts, soil health cards, crop insurance claims, and certificates from Krishi Vigyan Kendras. Cooperative members add society resolutions, milk procurement statements, and subsidy sanction letters. Funding evidence includes bank balance confirmations, sanctioned limits from cooperative banks, and affidavits for family contributions or asset sales used to finance the settlement.'
    ]
  },
  {
    id: 'payment-structures-gujarat',
    title: 'Payment Structuring and Compliance Controls',
    level: 2,
    content: [
      'CredSettle aligns payment calendars with Gujarat specific revenue cycles. Diamond exporters schedule instalments after jewellery buying seasons in the United States and the Middle East. Textile units plan payments post festival demand peaks such as Navratri and Diwali. Agricultural borrowers prefer tranches after procurement drives by the state civil supplies department or dairy union bonus payouts.',
      'Every disbursement uses traceable banking channels. We demand same day acknowledgement from NBFCs, verify that post dated cheques are cancelled after digital payments clear, and audit TDS entries in Form 26AS so borrowers avoid double taxation on waived interest. Compliance trackers log each transaction, enabling rapid response if an NBFC claims default despite timely payments.'
    ]
  },
  {
    id: 'credit-rebuild-gujarat',
    title: 'Credit Rebuild and Growth Support After Settlement',
    level: 2,
    content: [
      'Forty five days after the final payment we pull credit reports from CIBIL, Experian, Equifax, and CRIF High Mark to confirm zero balances and settled remarks. If discrepancies remain, CredSettle files bureau disputes with attached sanction letters, receipts, and NOCs. Clients attend budgeting workshops that cover cash flow forecasting, invoice follow ups, and data security to avoid phishing scams similar to the Chandkheda case.',
      'Business borrowers receive introductions to Gujarat Industrial Development Corporation facilitation desks, Startup Gujarat incentives, and SIDBI refinance lines. We also coordinate with GIFT City advisory cells for firms seeking alternative financing or export credit insurance, ensuring post settlement operations grow on stable, lower cost capital instead of high interest NBFC products.'
    ]
  },
  {
    id: 'case-stories-gujarat',
    title: 'Case Stories from Ahmedabad, Surat, and Kutch',
    level: 2,
    content: [
      'An Ahmedabad based pharmaceutical contract manufacturer owed Rs 2.6 crore across three NBFCs after United States client delays. CredSettle compiled FDA audit correspondence, energy surcharge notices, and export order deferrals. Two lenders accepted a 48 percent waiver and the third agreed to a 52 percent waiver payable over four tranches, with bureau updates completed within thirty days of final payment.',
      'A Surat diamond exporter fell behind on Rs 1.8 crore of working capital after retailers in North America postponed orders. We documented Gem and Jewellery Export Promotion Council advisories, insurance claim files, and revised shipment schedules. The NBFC settled at 58 percent of dues, staggered across five months aligned with the next buying season, and withdrew its arbitration notice.',
      'A logistics consortium in Kutch servicing Mundra port defaulted on equipment leases worth Rs 3.4 crore when cyclone warnings halted cargo movement. CredSettle submitted port authority circulars, Border Roads Organisation repair schedules, and client deferment letters. The NBFC approved a 55 percent waiver with instalments tied to cargo volumes resuming, and the borrower regained fleet utilisation without further legal action.'
    ]
  }
];

const headings = [
  { id: 'gujarat-credit-landscape', text: 'Gujarat Credit Landscape', level: 2 },
  { id: 'industrial-corridors', text: 'Industrial Corridors', level: 2 },
  { id: 'nbfc-presence-gujarat', text: 'NBFC Presence', level: 2 },
  { id: 'borrower-pressure-points', text: 'Borrower Pressure Points', level: 2 },
  { id: 'regulatory-safeguards-gujarat', text: 'Regulatory Safeguards', level: 2 },
  { id: 'credsettle-method-gujarat', text: 'CredSettle Method', level: 2 },
  { id: 'sector-strategies-gujarat', text: 'Sector Strategies', level: 2 },
  { id: 'msme-and-cooperative-support', text: 'MSME and Cooperative Support', level: 2 },
  { id: 'legal-forums-gujarat', text: 'Legal and Quasi Judicial Forums', level: 2 },
  { id: 'nine-step-plan-gujarat', text: 'Nine Step Settlement Plan', level: 2 },
  { id: 'documentation-checklist-gujarat', text: 'Documentation Checklist', level: 2 },
  { id: 'payment-structures-gujarat', text: 'Payment Structures', level: 2 },
  { id: 'credit-rebuild-gujarat', text: 'Credit Rebuild Support', level: 2 },
  { id: 'case-stories-gujarat', text: 'Case Stories', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function GujaratPageClient() {
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
                alt="Gujarat NBFC Loan Settlement"
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
                Talk to the Gujarat Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Gujarat" />

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
                      Ready to Plan Your Gujarat Settlement?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share bank statements, export evidence, or crop loss reports. Our Gujarat desk drafts a negotiation blueprint within 48 hours.
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

export default GujaratPageClient;



