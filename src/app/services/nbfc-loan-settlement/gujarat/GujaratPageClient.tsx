'use client';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';
const heroCopy = {
    title: 'NBFC Loan Settlement in Gujarat Designed for Ports, Parks, and Growth Corridors',
    description: "CredSettle\u2019s the state desk supports clients from the city pharma campuses and the city diamond exporters to Mundra freight operators. We combine RBI compliant talks. the state Lok Adalat coordination. Fraud risk monitoring so that each NBFC deal restores cash flow without RBI surprises."
};
const faqs = [
    {
        question: 'Which NBFCs does CredSettle negotiate with in Gujarat?',
        answer: "We manage cases involving Bajaj. Tata cash. Aditya Birla Finance. Mahindra Finance. Hero FinCorp. HDB money Services. Cholamandalam Investment. Piramal Finance. Shriram Finance. Fullerton. CreditAccess Grameen. Annapurna Finance. Fintech backed NBFCs servicing the city. the city. the city. Rajkot. Bhavnagar. Kutch."
    },
    {
        question: 'How fast can coercive recovery be paused in Gujarat?',
        answer: "Our legal notices cite the RBI Fair Practices Code. Recent the state Police alerts. The Legal Services officials Act. We file reports with the the city Cyber Crime cell or the state helpline when required. Most clients see field visits and threats soften within forty eight hours of engagement."
    },
    {
        question: 'What settlement savings are typical in Ahmedabad or Surat?',
        answer: 'no-pledge NBFC exposures in the city’s output belt usually settle at 45 to 60 percent of dues when documentary proof is strong. the city textile and diamond clients average 50 to 65 percent waivers. Meanwhile. Freight and port linked loans in Kutch or Bharuch often close around 50 to 55 percent depending on asset condition.'
    },
    {
        question: 'Will a settlement damage my CIBIL score permanently?',
        answer: "deals are recorded as settled instead of written off. We secure closure letters. File CIBIL desk claims. Coordinate secured trade credit or local bank products so that most the state clients rebuild to credit scores above 650 within twelve to eighteen months."
    },
    {
        question: 'Do Gujarat clients pay any upfront fee to CredSettle?',
        answer: "No. Engagement letters are success linked. CredSettle fees are payable only after the NBFC issues a written sanction. The client executes agreed payments. Updated no due letters are received."
    }
];
const sections = [
    {
        id: 'gujarat-credit-landscape',
        title: 'Gujarat Credit Landscape Powered by MSMEs, Ports, and Renewable Parks',
        level: 2,
        content: [
            'the state ranks among the top Indian states for registered micro. Small. And medium firms. With Ministry of MSME figures for FY23 placing it alongside Maharashtra and Tamil Nadu for unit count and credit demand. Output hubs from the city to Vapi rely on NBFC working cash for machinery upgrades. Export receivable buffers. And wage continuity during order swings. Renewable hubs in Kutch and Jamnagar borrow to build solar and green hydrogen projects. Meanwhile. Local dairies in Anand lean on NBFC tools loans for plant expansions.',
            'The state’s trade friendly policies and factory belts attract rapid credit deployment. Yet cash flow can become volatile. Diamond exports from the city react to United States retail trends. Meanwhile. Chemicals and pharmaceuticals in the city and Ankleshwar navigate global RBI checks. These dynamics create spike risk for NBFC delinquency. Making structured deals essential for clients who want to stay compliant. Avoid lawsuits. And secure quick release of pledged pledge.'
        ]
    },
    {
        id: 'industrial-corridors',
        title: 'Industrial Corridors from Ahmedabad to Kutch That Shape NBFC Exposure',
        level: 2,
        content: [
            'the city and Gandhinagar anchor pharmaceuticals. Tech design. And GIFT City money services. NBFC clients here include contract research outfits. IT service providers. And expert consultancies that rely on predictable billing cycles. the city. Bharuch. And Ankleshwar form India’s largest chemicals and speciality output belt. Where NBFCs fund effluent plant upgrades. Freight fleets. And raw material stocking for export orders.',
            'Western belts covering Rajkot. Morbi. Jamnagar. And Kutch revolve around precision tech. Ceramics. Brass components. petrochemical freight. Rajkot’s machine tool makers often stack NBFC tools loans to meet auto component contracts. Meanwhile. Morbi’s tile hubs needs working cash to balance energy costs and order book swings. Mundra and Pipavav ports generate demand for heavy haulage tools leasing. Warehouse finance. trade receivable discounting. CredSettle’s belts mapping ensures each closure facts includes freight data. Energy tariffs. And hubs level performance proof.'
        ]
    },
    {
        id: 'nbfc-presence-gujarat',
        title: 'NBFC Presence Across Gujarat Counties and Urban Centres',
        level: 2,
        content: [
            'Large NBFCs maintain dense branch networks in the city. The city. The city. Rajkot. Bhavnagar. Complemented by online originators that lend through marketplaces and payment apps. Local linked NBFCs partner with areas central banks to deliver farm and dairy credit. Especially in Saurashtra and North the state. Fintech NBFCs service gig workers and e-commerce sellers in the city. Bharuch. And Vapi. Meanwhile. Small loans NBFCs engage self help groups in Banaskantha. Dahod. And tribal belts near Narmada areas.',
            'joint loans relationships between NBFCs and private banks escalated after 2022. This helps MSME invoice finance in the city chemicals. Rajkot auto ancillaries. And the city textile processors. Such structures mean deal sign-offs must travel across joint credit boards. CredSettle aligns contact with both lenders. Preventing scenarios where the NBFC agrees but the bank refuses to ratify the OTS deal. And ensuring CIBIL desk updates happen simultaneously.'
        ]
    },
    {
        id: 'borrower-pressure-points',
        title: 'Borrower Pressure Points Unique to Gujarat’s Economy',
        level: 2,
        content: [
            'the city’s diamond and jewellery exporters face cyclical dips when United States and Europe retail orders slow. This leading to furloughs and stock pile ups. Textile dyeing and weaving units contend with environmental compliance expenses and sudden export duty adjustments. Morbi’s ceramic makers deal with natural gas price spikes. Meanwhile. Jamnagar’s brass parts supply chain is exposed to global metal price swings. These shocks cascade into late NBFC EMIs when receivables stall.',
            'Freight firms operating out of Mundra. Kandla. And Pipavav ports manage rising bunker fuel costs and occasional congestion fines. Farm clients in Banaskantha and Kutch suffer when erratic monsoons or cyclone conditions disrupt groundnut. Cumin. Or cotton yields. CredSettle papers each driver using shipping manifests. Commodity board alerts. Energy bills. And crop loss letters so that offers highlight externally validated hardship. Not generic narratives.'
        ]
    },
    {
        id: 'regulatory-safeguards-gujarat',
        title: 'Regulatory Safeguards and Relief Forums Available in Gujarat',
        level: 2,
        content: [
            'clients in the state can escalate grievances to the RBI staff office in the city. This oversees NBFC compliance for the western region. the state Lok Adalat. Operated by the State Legal Services formal. Handled more than ten thousand cases during its first e-Lok Adalat drive in 2020. Settling around one hundred ninety one crore rupees in claims that included money claims. These forums offer structured pathways for pre lawsuits deals and ensure pacts receive legal recognition.',
            'State state channels provide additional support. The the state State Co-operative Bank runs a one time closure scheme that has helped thousands of clients regularise loans at reduced rates. Meanwhile. Areas industries centres offer counseling for MSMEs facing NBFC claims. CredSettle references these schemes where relevant. Aligning closure requests with rulings that lenders already acknowledge. The team also warns clients about fraud cases like the Chandkheda incident where a senior citizen lost funds to fake closure staff. Reinforcing the importance of documented. Regulator-aware talks.'
        ]
    },
    {
        id: 'credsettle-method-gujarat',
        title: 'CredSettle Methodology Tailored for Gujarat Borrowers',
        level: 2,
        content: [
            'Engagement begins with a diagnostic covering loan pacts. Payment ledgers. GST filings. Export data. Energy bills. subsidy claims. Analysts then map the lending NBFC’s bank reserves norms. Quarter end pressure. And prior closure rates for similar industries in the state. Findings shape the opening anchor and demonstrate that the client understands the NBFC’s approval rhythm. Reducing resistance during talks.',
            'Active cases run through structured talks sprints. The first sprint covers legal compliance notices and abuse records. The second sprint compiles proof that justifies waiver thresholds. Such as industry slowdown letters. Crop loss surveys. Or order cancellation emails. The third sprint finalises sanction letters. Ensuring clauses confirm full and final closure. Cheque destruction. CIBIL desk update timelines. Clients receive bilingual progress trackers in English and Gujarati so stakeholders remain aligned and ready to act on instructions promptly.'
        ]
    },
    {
        id: 'sector-strategies-gujarat',
        title: 'Sector Strategies Covering Textiles, Diamonds, Chemicals, and Renewables',
        level: 2,
        content: [
            'Textile processors in the city. Vapi. And the city often face export duty swings and dye price swings. CredSettle gathers Directorate General of Foreign Trade circulars. Dye import invoices. And electricity consumption records to illustrate margin compression. Diamond units rely on export receipts and consignment financing. So closure dossiers include Gem and Jewellery Export Promotion Council updates. Buyer deferment letters. cover correspondence.',
            'Chemical and drug clients in the city. Ankleshwar. And Bharuch depend on compliance heavy processes. Talks leverage proof from pollution control board checks. United States Food and Drug Administration audit timelines. And raw material price charts. Renewable energy developers in Kutch and Jamnagar produce project progress reports. Power purchase pacts. And tariff petitions to align closure EMIs with commissioning milestones or subsidy disbursals.'
        ]
    },
    {
        id: 'msme-and-cooperative-support',
        title: 'MSME and Cooperative Sector Support During Settlement',
        level: 2,
        content: [
            'the state’s local banks and credit societies remain influential. Especially in dairy. Farming. And rural retail. When NBFC loans overlap with local funding. CredSettle coordinates tripartite discussions so that payment routing and pledge releases are sequenced without conflict. The team collaborates with the the state State Co-operative Bank OTS cell. Areas industry centres. And GujRERA where real estate clients face simultaneous debts with developers and NBFC financiers.',
            'Morbi ceramic makers. Rajkot tech MSMEs. And Jamnagar brass hubs often operate in consortiums. CredSettle engages trade associations. Arranges group counseling sessions. And aligns closure calendars with industry peak seasons. This approach reassures NBFCs that deals are based on collective market intelligence. Improving approval probability and lowering the risk of clients relapsing into default.'
        ]
    },
    {
        id: 'legal-forums-gujarat',
        title: 'Legal and Quasi Judicial Forums That Influence Settlement Outcomes',
        level: 2,
        content: [
            'Debt claims Tribunal the city oversees high value NBFC claims arising across the state. CredSettle’s lawyers pursue consent terms inside the tribunal where possible. Ensuring closure clauses receive court backing and enforcement stays block harsh claims. hearing matters often seat in the city or Mumbai. we push for venues convenient to clients and insist on bank arbitrators so that talks leverage remains intact.',
            'the state Lok Adalat sittings in areas courts such as the city. Rajkot. And Bhavnagar help close lower ticket loans quickly. CredSettle prepares OTS deal petitions. Draft payment plans. And supporting affidavits in advance. This lets same day awards. For clients reports about abuse or hidden charges. The the state State clients Commission and areas clients commissions provide redress. And our legal team helps file when NBFCs resist local deal offers.'
        ]
    },
    {
        id: 'nine-step-plan-gujarat',
        title: 'Nine Step Gujarat Settlement Playbook',
        level: 2,
        content: [
            'Step one compiles KYC. Sanction letters. Payment schedules. Bank records. GST returns. And export invoices within forty eight hours. Step two issues representations to NBFC headquarters. Branch managers. And claims firms referencing RBI directives and the state law enforcement alerts. Step three papers hardship using shipment delays. Energy tariff notices. Crop reports. Or buyer cancellations.',
            'Step four benchmarks expected waivers against the NBFC’s historic deals for similar industries. Step five presents an initial proposal with structured EMIs or lump sum options. Step six manages counter offers and records abuse reports for leverage. Step seven secures the sanction letter with full and final language. Cheque destruction instructions. And CIBIL desk update commitments. Step eight supervises payments through NEFT. RTGS. Or demand draft aligned with cash inflow events such as export remittances or subsidy credits. Step nine closes the file by collecting NOCs. Updating bureaus. And scheduling credit rehabilitation sessions.'
        ]
    },
    {
        id: 'documentation-checklist-gujarat',
        title: 'Documentation Checklist for Gujarat Borrowers',
        level: 2,
        content: [
            'Output and export clients provide GST returns. E-way bills. Customs shipping bills. DGFT papers. Energy bills from Torrent Power or Uttar the state Vij firm. And contracts with GIDC officials. Service providers submit client invoices. Timesheets. Vendor pacts. And provident fund payment proofs. Real estate and infrastructure clients share GujRERA registration files. Construction progress reports. And environmental clearance papers.',
            'Farm clients supply land records. 7/12 extracts. Soil health cards. Crop cover claims. And letters from Krishi Vigyan Kendras. Local members add society resolutions. Milk crop sales records. And subsidy sanction letters. Funding proof includes bank balance confirmations. Sanctioned limits from local banks. And affidavits for kin contributions or asset sales used to finance the closure.'
        ]
    },
    {
        id: 'payment-structures-gujarat',
        title: 'Payment Structuring and Compliance Controls',
        level: 2,
        content: [
            'CredSettle aligns payment calendars with the state local income cycles. Diamond exporters schedule EMIs after jewellery buying seasons in the United States and the Middle East. Textile units plan payments post festival demand peaks such as Navratri and Diwali. farm clients prefer tranches after crop sales drives by the state civil supplies unit or dairy union bonus payouts.',
            'Every disbursement uses traceable banking channels. We demand same day receipts from NBFCs. Verify that post dated cheques are cancelled after online payments clear. And audit TDS entries in Form 26AS so clients avoid double taxation on waived rates. Compliance trackers log each transaction. This lets rapid response if an NBFC claims default despite timely payments.'
        ]
    },
    {
        id: 'credit-rebuild-gujarat',
        title: 'Credit Rebuild and Growth Support After Settlement',
        level: 2,
        content: [
            'Forty five days after the final payment we pull credit reports from CIBIL. Experian. Equifax. And CRIF High Mark to confirm zero balances and settled remarks. If discrepancies remain. CredSettle files CIBIL desk claims with attached sanction letters. Receipts. And NOCs. Clients attend budgeting workshops that cover cash flow forecasting. Invoice follow ups. And data pledge to avoid phishing scams similar to the Chandkheda case.',
            'Trade clients receive introductions to the state factory Development Corporation facilitation desks. Startup the state incentives. And SIDBI refinance lines. We also coordinate with GIFT City alert cells for firms seeking alternative financing or export credit cover. Ensuring post closure work grow on stable. Lower cost cash instead of high rates NBFC products.'
        ]
    },
    {
        id: 'case-stories-gujarat',
        title: 'Case Stories from Ahmedabad, Surat, and Kutch',
        level: 2,
        content: [
            'An the city based drug contract makers owed Rs 2.6 crore across three NBFCs after United States client delays. CredSettle compiled FDA audit correspondence. Energy surcharge notices. And export order deferrals. Two lenders accepted a 48 percent waiver and the third agreed to a 52 percent waiver payable over four tranches. With CIBIL desk updates completed within thirty days of final payment.',
            'A the city diamond exporter fell behind on Rs 1.8 crore of working cash after retailers in North America postponed orders. We documented Gem and Jewellery Export Promotion Council alerts. Cover claim files. And revised shipment schedules. The NBFC settled at 58 percent of dues. Staggered across five months aligned with the next buying season. And withdrew its hearing notice.',
            'A freight consortium in Kutch servicing Mundra port defaulted on tools leases worth Rs 3.4 crore when cyclone warnings halted cargo movement. CredSettle submitted port formal circulars. Border Roads Organisation repair schedules. And client deferment letters. The NBFC approved a 55 percent waiver with EMIs tied to cargo volumes resuming. And the client regained fleet utilisation without further legal steps.'
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
    return (<div className="relative min-h-screen bg-white mt-6">
      {!isFirefox && (<div className="absolute top-0 left-0" style={{
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
            }}/>)}

      {isFirefox && (<div className="absolute top-0 left-0" style={{
                width: '757px',
                height: '757px',
                borderRadius: '757px',
                background: 'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
                transform: 'translate(-50%, -50%)',
                zIndex: 0,
                opacity: 0.9
            }}/>)}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4" style={{ maxWidth: '1280px', marginBottom: '48px' }}>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img src="/nbfc_hero.png" alt="Gujarat NBFC Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{
            height: 'auto',
            transform: 'rotate(335deg)',
            transformOrigin: 'center'
        }} width={500} height={500} />
            </div>

            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1 className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]" style={{
            color: '#0C2756',
            fontFamily: 'Poppins',
            fontStyle: 'normal',
            fontWeight: '400',
            marginBottom: '12px'
        }}>
                        NBFC Loan Settlement in Ahmedabad,<br />
                        <span className="text-blue-200">Surat &amp; Gujarat.</span>
                    </h1>
              <p className="text-xs md:text-sm lg:text-[14px] leading-relaxed" style={{
            color: 'rgba(12, 39, 86, 0.70)',
            fontFamily: 'Poppins',
            lineHeight: '28px',
            marginBottom: '20px'
        }}> {heroCopy.description} </p>
              <button className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px]" style={{
            borderRadius: '32.4px',
            background: '#007AFF',
            boxShadow: '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset'
        }}>
                Talk to the Gujarat Settlement Desk.
              </button>
            </div>
          </div>
        </section>

        <section className="w-full mx-auto px-4 md:px-6 lg:px-5" style={{
            maxWidth: '1280px',
            marginBottom: '48px',
            position: 'relative'
        }}>
          <div className="flex flex-col gap-4 lg:gap-8" style={{ alignItems: 'flex-start', position: 'relative' }}>
            <div className="w-full">
              <TableOfContents headings={tocHeadings}/>
            </div>

            <div className="w-full" style={{ minWidth: '0' }}>
              {sections.map((section) => (<section key={section.id} id={section.id} style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                  <h2 className="text-xl md:text-2xl lg:text-[32px] leading-tight" style={{
                color: '#0C2756',
                fontFamily: 'Poppins',
                fontWeight: 700,
                lineHeight: '36px',
                marginBottom: '20px'
            }}>
                    {section.title}
                  </h2>
                  <div className="text-sm md:text-base lg:text-[16px] leading-relaxed" style={{
                color: 'rgba(12, 39, 86, 0.80)',
                fontFamily: 'Poppins',
                lineHeight: '28px'
            }}>
                    {section.content.map((paragraph, index) => (<p key={index} style={{ marginBottom: '16px' }}> {paragraph} </p>))}
                  </div>
                </section>))}
            </div>
          </div>
        </section>

        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Gujarat"/>

              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{
            background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
            boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
        }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>
                      Ready to Plan Your Gujarat Settlement?
                    </h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}> Share bank records. Export proof. Or crop loss reports. Our the state desk drafts a talks blueprint within 48 hours. </p>
                  </div>

                  <CTAButton>
                    Book a Free Consultation.
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
export default GujaratPageClient;
