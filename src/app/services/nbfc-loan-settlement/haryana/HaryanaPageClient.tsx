'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in Haryana Built for NCR, Industrial Corridors, and Agri Belts',
  description:
    'CredSettle’s Haryana desk supports borrowers from Gurugram technology parks and Manesar auto vendors to Panipat textile exporters and Hisar agro enterprises. We blend RBI compliant negotiation, Haryana Lok Adalat coordination, and scam-risk monitoring so that every NBFC settlement restores cash flow and protects long term compliance.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle work with in Haryana?',
    answer:
      'We negotiate with Bajaj Finance, Tata Capital, Aditya Birla Finance, Mahindra Finance, HDB Financial Services, Hero FinCorp, Shriram Finance, Cholamandalam Investment, Piramal Finance, Fullerton, CreditAccess Grameen, and fintech backed NBFCs serving Gurugram, Faridabad, Panipat, Rohtak, Hisar, and the NCR logistics belt.'
  },
  {
    question: 'How quickly can CredSettle stop coercive recovery in Haryana?',
    answer:
      'We issue legal notices citing the RBI Fair Practices Code, lodge complaints with the NBFC grievance cell, and engage the Gurugram and Faridabad cyber crime units when harassment or fake call centre threats appear. Most clients see recovery aggression ease within forty eight hours once documentation and legal escalation begin.'
  },
  {
    question: 'What settlement savings are typical in Haryana?',
    answer:
      'Unsecured NBFC exposures held by NCR professionals often settle at 45 to 60 percent of dues. Automotive and engineering borrowers in Manesar or Bawal average 50 to 55 percent depending on inventory valuations, while textile and petrochemical borrowers in Panipat and Sonipat can reach 55 to 65 percent waivers when order cancellations or input cost spikes are documented. Rural microfinance cases in Hisar, Sirsa, and Mahendragarh may see 60 to 70 percent waivers when crop loss evidence is strong.'
  },
  {
    question: 'Will settlements hurt my CIBIL score permanently?',
    answer:
      'Settlements are reported as settled rather than written off. CredSettle secures closure letters, files bureau disputes, and guides Haryana borrowers toward secured credit lines from cooperative banks, state agrarian schemes, or SIDBI programs so that credit scores recover within twelve to eighteen months.'
  },
  {
    question: 'Does CredSettle charge any upfront fee in Haryana?',
    answer:
      'No. Haryana mandates operate on success linked agreements. Fees become payable only after the NBFC issues a written sanction, settlement payments are executed, and no dues certificates are released.'
  }
];

const sections = [
  {
    id: 'haryana-credit-landscape',
    title: 'Haryana Credit Landscape Connecting NCR, Industrial Corridors, and Farm Districts',
    level: 2,
    content: [
      'Haryana reported more than two lakh registered micro, small, and medium enterprises by FY24 according to state industry bulletins, driven by the Gurugram-Manesar-Bawal investment corridor, Faridabad’s engineering base, Panipat’s textile processing, and Rohtak’s agro logistics. NBFC credit underpins automotive vendor upgrades, IT services expansion, warehouse construction, and dairy cooperative scaling. Agricultural belts in Hisar, Sirsa, and Karnal depend on NBFC equipment finance to modernise irrigation and post harvest storage.',
      'This breadth of activity also creates repayment volatility. Automotive order books fluctuate with global demand for components, while Panipat textile processors face energy price swings and export duty shifts. Monsoon variability impacts oilseed, cotton, and basmati cash flows. CredSettle maps these sectoral rhythms before proposing settlement anchors so that negotiations reflect realistic revenue projections and not one size fits all templates lifted from other states.'
    ]
  },
  {
    id: 'ncr-industrial-corridors',
    title: 'NCR and Industrial Corridors that Shape NBFC Exposure',
    level: 2,
    content: [
      'Gurugram, Manesar, and Bawal form a critical automotive and technology corridor linked to the Delhi-Mumbai Industrial Corridor. Large OEMs and Tier 1 suppliers rely on NBFC lease lines for robotics, tooling, and logistics fleets. Nearby cyber parks host IT and BPO firms that borrow for working capital and expansion into new delivery centers. Faridabad supports heavy engineering, consumer durables, and solar manufacturing, drawing NBFC working capital for vendor financing and component imports.',
      'Panipat and Sonipat specialise in textiles, petrochemicals, and packaging, while Rohtak, Jhajjar, and Mahendragarh host warehouse clusters feeding e-commerce and FMCG supply chains. Agricultural hubs in Karnal, Kaithal, and Jind leverage NBFC loans for dairy expansions and horticulture cold storage. CredSettle builds settlement dossiers that align with each corridor’s data points, including auto production indexes, warehousing occupancy, or commodity price charts.'
    ]
  },
  {
    id: 'nbfc-presence-haryana',
    title: 'NBFC Presence Across Haryana Districts',
    level: 2,
    content: [
      'Large NBFCs run dense branch networks in Gurugram, Faridabad, Ambala, Hisar, and Panipat, while digital originators extend personal loans to NCR professionals through API driven partnerships. Cooperative linked NBFCs support dairy unions and self help groups across Sirsa, Bhiwani, and Yamunanagar, and microfinance NBFCs operate joint liability groups in Mewat, Fatehabad, and Palwal. Co-lending deals between NBFCs and private banks grew after the RBI’s 2023 compromise settlement framework update, especially for MSME supply chain financing in Manesar and Sonipat.',
      'These layered exposures require coordinated settlements. CredSettle aligns communication with co-lending banks to prevent the common scenario where an NBFC approves a compromise but the partner bank refuses the waiver. Simultaneous approvals also ensure credit bureau updates and lien releases happen without conflicting instructions.'
    ]
  },
  {
    id: 'borrower-pressure-points',
    title: 'Borrower Pressure Points Unique to Haryana',
    level: 2,
    content: [
      'Automotive vendors in Manesar and Bawal face delays whenever global chip supply tightens or original equipment manufacturers rationalise orders. Textile processors in Panipat juggle natural gas price revisions and compliance costs linked to effluent treatment. Gurugram IT firms manage client attrition and delayed receivables, while warehouse operators in Sonipat absorb freight cost surges on arterial highways. Farmers experience erratic rainfall, pest outbreaks, and market price volatility, impacting NBFC agri and dairy loans.',
      'Borrowers also confront fraudulent settlement agents and loan app extortion. Consumer advocacy reports and the RBI’s ombudsman summaries highlight cases where borrowers paid unregulated intermediaries or faced threats when original documents were withheld after closure. CredSettle documents valid hardship, exposes illegal tactics, and warns clients against unauthorised operators referencing advisories shared by the Haryana government and the RBI Ombudsman.'
    ]
  },
  {
    id: 'regulatory-safeguards-haryana',
    title: 'Regulatory Safeguards and State Relief Mechanisms',
    level: 2,
    content: [
      'The Haryana government’s January 2025 One-Time Settlement scheme for traders waived interest and reduced principal obligations for dues up to ten crore rupees, illustrating state level willingness to recognise genuine distress. Earlier cooperative bank programs offered full interest waivers to heirs of deceased borrowers. CredSettle leverages these precedents to argue for comparable relief when private NBFCs resist compromise offers.',
      'Borrowers can escalate grievances to the RBI’s NBFC Ombudsman office in New Delhi, which covers Haryana. Moneylife’s consumer desk has documented cases where NBFCs delayed returning original property documents until borrowers bore additional charges, reinforcing the need for documented escalation. Haryana Real Estate Regulatory Authority orders, such as the 2024 directive preventing lenders from auctioning projects without protecting homebuyers, show that regulators expect negotiated outcomes before aggressive recovery. CredSettle cites these rulings to push NBFCs toward compliant settlements.'
    ]
  },
  {
    id: 'credsettle-method-haryana',
    title: 'CredSettle Methodology Tuned to Haryana Borrowers',
    level: 2,
    content: [
      'Every mandate starts with a forensic review covering sanction letters, repayment ledgers, GST filings, TDS statements, export invoices, utility bills, and crop records. Analysts then line up the lending NBFC’s provisioning rules, quarter end goals, and historical settlement ratios for Haryana portfolios. This due diligence produces an opening anchor that manages lender expectations while aiming for significant waiver leverage.',
      'Negotiations run in structured sprints. Sprint one documents harassment, issues legal notices, and registers police or ombudsman complaints if required. Sprint two frames the waiver case with evidence such as OEM order cuts, DGFT export advisories, or Agriculture Department crop loss reports. Sprint three finalises sanction letters with full and final clauses, cheque destruction instructions, and bureau update timelines. Clients receive bilingual updates in English and Hindi so partners, directors, and family guarantors stay aligned.'
    ]
  },
  {
    id: 'sector-strategies-haryana',
    title: 'Sector Strategies Covering Automotive, IT, Textiles, and Agriculture',
    level: 2,
    content: [
      'Automotive suppliers in Manesar and Bawal present production schedules, OEM correspondence, chip shortage notices, and workforce rationalisation data. IT and BPM firms in Gurugram share client attrition reports, delayed milestone approvals, and payroll continuity evidence. Textile processors in Panipat and Sonipat contribute natural gas invoices, pollution control compliance costs, and export duty impact analyses. Warehouse operators provide e-way bill data, occupancy reports, and freight benchmarks.',
      'Agricultural borrowers in Karnal, Kaithal, and Hisar compile mandi price charts, crop cutting experiments, and crop insurance claim receipts. Dairy cooperatives provide procurement statements and veterinary risk reports. CredSettle weaves these datasets into lender ready dossiers that justify waivers or structured repayment aligned to revenue revival.'
    ]
  },
  {
    id: 'microfinance-rural-support-haryana',
    title: 'Microfinance and Rural Borrower Support',
    level: 2,
    content: [
      'Self help groups in Mewat, Palwal, and Fatehabad juggle multiple microfinance instalments tied to dairy, poultry, or small retail ventures. When income dips due to disease outbreaks or supply disruptions, group dynamics strain. CredSettle conducts community meetings, captures gram panchayat endorsements, and coordinates with Haryana State Rural Livelihood Mission officers to map realistic settlement instalments.',
      'We also work with cooperative banks and district credit committees to synchronise payments after grants or subsidies arrive. Where digital loan apps engaged in harassment, CredSettle helps borrowers file FIRs with the Gurugram and Faridabad cyber police stations, referencing cases recorded by state cyber cells in 2023 and 2024. This evidence pressures NBFCs and fintech partners to step back from reputational coercion.'
    ]
  },
  {
    id: 'legal-forums-haryana',
    title: 'Legal and Quasi Judicial Forums Supporting Haryana Settlements',
    level: 2,
    content: [
      'Debt Recovery Tribunal benches in Chandigarh and Delhi handle high value Haryana NBFC matters. CredSettle’s advocates secure consent terms that record compromises in tribunal orders, blocking future enforcement beyond agreed sums. Arbitration matters are often seated in Gurugram or New Delhi; we push for institutional arbitrators to ensure due process.',
      'Haryana Lok Adalat sittings in district courts, along with e-Lok Adalat drives, close smaller tickets quickly when both parties consent. The state consumer disputes redressal commission and district consumer courts entertain complaints about unfair recovery or document retention. Haryana RERA orders, such as the 2024 instruction preventing project auctions without protecting allottees, show that developers and NBFCs must negotiate before executing drastic recovery. CredSettle references these forums in negotiations to underline legal risk.'
    ]
  },
  {
    id: 'nine-step-plan-haryana',
    title: 'Nine Step Haryana Settlement Playbook',
    level: 2,
    content: [
      'Step one compiles KYC, sanction letters, repayment statements, GST returns, bank statements, and sector specific proof within forty eight hours. Step two issues representation notices to NBFC heads, state collection agencies, and if needed police authorities citing RBI guidelines. Step three builds hardship portfolios containing OEM order reductions, export cancellation emails, crop loss certificates, or tax filings showing revenue dips.',
      'Step four benchmarks waiver expectations using the NBFC’s previous settlements in similar Haryana clusters. Step five proposes the initial settlement figure with structured instalment options. Step six negotiates counter offers while logging harassment or document withholding. Step seven secures sanction letters with explicit full and final language. Step eight supervises payments via NEFT, RTGS, or demand drafts tied to forecast revenue events such as festival sales or procurement drives. Step nine collects NOCs, retrieves documents, files bureau updates, and schedules credit rebuild coaching.'
    ]
  },
  {
    id: 'documentation-checklist-haryana',
    title: 'Documentation Checklist for Haryana Borrowers',
    level: 2,
    content: [
      'Manufacturers and exporters submit GST filings, e-way bills, customs shipping bills, Directorate General of Foreign Trade letters, electricity bills from Dakshin Haryana Bijli Vitran Nigam, and lease agreements for plots in HSIIDC industrial estates. Service firms share client contracts, invoice ageing reports, and payroll summaries. Real estate entities present Haryana RERA registrations, construction progress pictures, and municipal approvals.',
      'Farmers and dairy cooperatives provide land records, girdawari extracts, crop insurance claim receipts, milk procurement statements, and veterinary certificates. Households supply salary slips, Form 16, Aadhaar copies, and bank statements. Funding proofs include sanctioned cooperative bank lines, family contribution affidavits, or asset sale agreements, ensuring NBFCs trust the payment plan.'
    ]
  },
  {
    id: 'payment-structures-haryana',
    title: 'Payment Structuring and Compliance Controls',
    level: 2,
    content: [
      'Automotive suppliers align instalments with OEM payment cycles and festive demand surges. Textile processors schedule tranches after Diwali export dispatches or gas subsidy adjustments. Farmers prefer settlements post rabi procurement or dairy bonus distributions. Gurgaon based professionals often choose staggered payments aligned to annual appraisals or ESOP vesting.',
      'CredSettle ensures all payments move through traceable channels and obtains same day acknowledgements. Where NBFCs insist on post dated cheques, we secure cheque destruction clauses inside settlement letters. We also verify Form 26AS to avoid double taxation on waived interest and reinforce compliance logs so borrowers can counter any future dispute.'
    ]
  },
  {
    id: 'credit-rebuild-haryana',
    title: 'Credit Rebuild and Growth Enablement',
    level: 2,
    content: [
      'Forty five days after final payment CredSettle pulls credit reports from CIBIL, Experian, Equifax, and CRIF High Mark. Any discrepancy triggers bureau disputes backed by sanction letters, bank receipts, and ombudsman references if needed. Clients join credit coaching covering budget discipline, protection against fake settlement calls, and responsible use of secured credit cards from Haryana State Cooperative Bank or nationalised lenders.',
      'Business borrowers are connected with Invest Haryana single window desks, Startup Haryana grants, SIDBI refinance lines, and sector incentives in auto, renewable energy, or textiles. These programs provide lower cost working capital so borrowers do not re-enter high interest NBFC cycles.'
    ]
  },
  {
    id: 'case-stories-haryana',
    title: 'Case Stories from Gurugram, Panipat, and Hisar',
    level: 2,
    content: [
      'A Gurugram based auto component supplier defaulted on Rs 2.1 crore across two NBFCs after OEM order rationalisation. CredSettle presented production downtime logs, supplier penalty notices, and payroll retention records. Both NBFCs accepted waivers near fifty percent and allowed instalments aligned to the next model launch schedule.',
      'In Panipat, a textile processor with Rs 1.4 crore outstanding faced energy cost spikes and delayed export payments. We collated natural gas invoices, export contract amendments, and Haryana State Industrial and Infrastructure Development Corporation notices. The lender sanctioned a 58 percent waiver with four instalments matched to confirmed overseas orders.',
      'A Hisar dairy cooperative defaulted on Rs 68 lakh after fodder shortages and disease outbreaks. CredSettle documented veterinary reports, milk procurement dips, and cooperative resolutions. The NBFC agreed to a 62 percent waiver with structured payments tied to Haryana Dairy Development Federation support and seasonal procurement peaks.'
    ]
  }
];

const headings = [
  { id: 'haryana-credit-landscape', text: 'Haryana Credit Landscape', level: 2 },
  { id: 'ncr-industrial-corridors', text: 'NCR and Industrial Corridors', level: 2 },
  { id: 'nbfc-presence-haryana', text: 'NBFC Presence', level: 2 },
  { id: 'borrower-pressure-points', text: 'Borrower Pressure Points', level: 2 },
  { id: 'regulatory-safeguards-haryana', text: 'Regulatory Safeguards', level: 2 },
  { id: 'credsettle-method-haryana', text: 'CredSettle Method', level: 2 },
  { id: 'sector-strategies-haryana', text: 'Sector Strategies', level: 2 },
  { id: 'microfinance-rural-support-haryana', text: 'Microfinance and Rural Support', level: 2 },
  { id: 'legal-forums-haryana', text: 'Legal and Quasi Judicial Forums', level: 2 },
  { id: 'nine-step-plan-haryana', text: 'Nine Step Settlement Plan', level: 2 },
  { id: 'documentation-checklist-haryana', text: 'Documentation Checklist', level: 2 },
  { id: 'payment-structures-haryana', text: 'Payment Structures', level: 2 },
  { id: 'credit-rebuild-haryana', text: 'Credit Rebuild Support', level: 2 },
  { id: 'case-stories-haryana', text: 'Case Stories', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function HaryanaPageClient() {
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
                alt="Haryana NBFC Loan Settlement"
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
                Talk to the Haryana Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Haryana" />

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
                      Ready to Plan Your Haryana Settlement?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share EMI schedules, OEM or export evidence, or crop loss records. Our Haryana desk responds with a negotiation blueprint within 48 hours.
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

export default HaryanaPageClient;





