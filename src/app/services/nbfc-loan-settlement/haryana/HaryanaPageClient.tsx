'use client';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';
const heroCopy = {
    title: 'NBFC Loan Settlement in Haryana: NCR & Agri Belts',
    description: "CredSettle\u2019s Haryana desk supports clients from Gurugram technology parks and Manesar auto vendors to Panipat textile exporters and Hisar agro firms. We blend RBI compliant talks. Haryana Lok Adalat coordination. Scam-risk monitoring so that each NBFC deal restores cash flow and protects long term compliance."
};
const faqs = [
    {
        question: 'Which NBFCs does CredSettle work with in Haryana?',
        answer: "We settle with Bajaj Finance. Tata cash. Aditya Birla Finance. Mahindra Finance. HDB money Services. Hero FinCorp. Shriram Finance. Cholamandalam Investment. Piramal Finance. Fullerton. CreditAccess Grameen. Fintech backed NBFCs serving Gurugram. Faridabad. Panipat. Rohtak. Hisar. And the NCR freight belt."
    },
    {
        question: 'How quickly can CredSettle stop coercive recovery in Haryana?',
        answer: "We issue legal notices citing the RBI Fair Practices Code. Lodge reports with the NBFC grievance cell. Engage the Gurugram and Faridabad cyber crime units when abuse or fake call centre threats appear. Most clients see claims aggression ease within forty eight hours once paperwork and legal reports begin."
    },
    {
        question: 'What settlement savings are typical in Haryana?',
        answer: "no-pledge NBFC exposures held by NCR workers often settle at 45 to 60 percent of dues. Automotive and tech clients in Manesar or Bawal average 50 to 55 percent depending on stock valuations. Meanwhile. Textile and petrochemical clients in Panipat and Sonipat can reach 55 to 65 percent waivers when order cancellations or input cost spikes are documented. Rural small loans cases in Hisar. Sirsa. Mahendragarh may see 60 to 70 percent waivers when crop loss proof is strong."
    },
    {
        question: 'Will settlements hurt my CIBIL score permanently?',
        answer: "deals are reported as settled rather than written off. CredSettle secures closure letters. Files CIBIL desk claims. Guides local clients toward secured credit lines from local banks. State agrarian schemes. SIDBI programs so that credit scores recover within twelve to eighteen months."
    },
    {
        question: 'Does CredSettle charge any upfront fee in Haryana?',
        answer: "No. Haryana mandates operate on success linked pacts. Fees become payable only after the NBFC issues a written sanction. settlement payments are executed. No dues letters are released."
    }
];
const sections = [
    {
        id: 'haryana-credit-landscape',
        title: 'Haryana Credit Landscape: NCR & Industrial Corridors',
        level: 2,
        content: [
            'Haryana reported more than two lakh registered micro. Small. And medium firms by FY24 according to state industry bulletins. Driven by the Gurugram-Manesar-Bawal investment belts. Faridabad’s tech base. Panipat’s textile processing. And Rohtak’s agro freight. NBFC credit underpins automotive vendor upgrades. IT services growth. Warehouse construction. And dairy local scaling. Farm belts in Hisar. Sirsa. And Karnal depend on NBFC tools finance to modernise irrigation and post harvest storage.',
            'This breadth of activity also creates payment swings. Automotive order books shifting with global demand for components. Meanwhile. Panipat textile processors face energy price swings and export duty shifts. Monsoon variability impacts oilseed. Cotton. And basmati cash flows. CredSettle maps these sectoral rhythms before proposing settlement anchors so that talks reflect realistic income projections and not one size fits all templates lifted from other states.'
        ]
    },
    {
        id: 'ncr-industrial-corridors',
        title: 'NCR and Industrial Corridors that Shape NBFC Exposure',
        level: 2,
        content: [
            'Gurugram. Manesar. And Bawal form a critical automotive and technology belts linked to the Delhi-Mumbai factory belts. Large OEMs and Tier 1 suppliers rely on NBFC lease lines for robotics. Tooling. And freight fleets. Nearby cyber parks host IT and BPO firms that borrow for working cash and growth into new delivery centers. Faridabad supports heavy tech. Clients durables. And solar output. Drawing NBFC working cash for vendor financing and component imports.',
            'Panipat and Sonipat specialise in textiles. Petrochemicals. And packaging. Meanwhile. Rohtak. Jhajjar. And Mahendragarh host warehouse hubs feeding e-commerce and FMCG supply chains. Farm hubs in Karnal. Kaithal. And Jind leverage NBFC loans for dairy expansions and farming cold storage. CredSettle builds settlement dossiers that align with each belts’s data points. Including auto output indexes. Storage occupancy. Or commodity price charts.'
        ]
    },
    {
        id: 'nbfc-presence-haryana',
        title: 'NBFC Presence Across Haryana Districts',
        level: 2,
        content: [
            'Large NBFCs run dense branch networks in Gurugram. Faridabad, Ambala, Hisar. Panipat. Meanwhile. online originators extend private loans to NCR workers through API driven partnerships. Local linked NBFCs support dairy unions and self help groups across Sirsa. Bhiwani. And Yamunanagar. And small loans NBFCs operate joint debt risk groups in Mewat. Fatehabad. And Palwal. joint loans deals between NBFCs and private banks grew after the RBI’s 2023 OTS deals rules update. This helps MSME supply chain financing in Manesar and Sonipat.',
            'These layered exposures require coordinated deals. CredSettle aligns contact with joint loans banks to prevent the common scenario where an NBFC approves a OTS deal but the partner bank refuses the waiver. Simultaneous approvals also ensure CIBIL desk updates and lien releases happen without conflicting instructions.'
        ]
    },
    {
        id: 'borrower-pressure-points',
        title: 'Borrower Pressure Points Unique to Haryana',
        level: 2,
        content: [
            'Automotive vendors in Manesar and Bawal face delays whenever global chip supply tightens or original tools makers rationalise orders. Textile processors in Panipat juggle natural gas price revisions and compliance costs linked to effluent treatment. Gurugram IT firms manage client attrition and delayed receivables. Meanwhile. Warehouse operators in Sonipat absorb freight cost surges on arterial highways. Farmers skill erratic rainfall. Pest outbreaks. And market price swings. Impacting NBFC farm and dairy loans.',
            'clients also confront fraudulent settlement agents and loan app extortion. clients advocacy reports and the RBI’s agents summaries highlight cases where clients paid unregulated intermediaries or faced threats when original papers were withheld after closure. CredSettle papers valid hardship. Exposes banned tactics. And warns clients against unauthorised operators referencing alerts shared by the Haryana state and the RBI agents.'
        ]
    },
    {
        id: 'regulatory-safeguards-haryana',
        title: 'Regulatory Safeguards and State Relief Mechanisms',
        level: 2,
        content: [
            'The Haryana state’s January 2025 One-Time settlement scheme for traders waived rates and reduced main loan debts for dues up to ten crore rupees. Illustrating state level willingness to recognise genuine distress. Earlier local bank programs offered full rates waivers to heirs of deceased clients. CredSettle leverages these rulings to argue for comparable relief when private NBFCs resist OTS deal offers.',
            'clients can escalate grievances to the RBI’s NBFC agents office in New Delhi. This covers Haryana. Moneylife’s clients desk has documented cases where NBFCs delayed returning original home papers until clients bore additional charges. Reinforcing the need for documented reports. Haryana Real Estate RBI formal orders. Such as the 2024 directive preventing lenders from auctioning projects without protecting homebuyers. Show that regulators expect settled outcomes before harsh claims. CredSettle cites these rulings to push NBFCs toward compliant deals.'
        ]
    },
    {
        id: 'credsettle-method-haryana',
        title: 'CredSettle Methodology Tuned to Haryana Borrowers',
        level: 2,
        content: [
            'Every mandate starts with a deep review covering sanction letters. Payment ledgers. GST filings. TDS records. Export invoices. Utility bills. And crop records. Analysts then line up the lending NBFC’s bank reserves rules. Quarter end goals. And historical settlement rates for Haryana portfolios. This due diligence produces an opening anchor that manages lender expectations while aiming for significant waiver leverage.',
            'talks run in structured sprints. Sprint one papers abuse. Issues legal notices. And registers police or agents reports if required. Sprint two frames the waiver case with proof such as OEM order cuts. DGFT export alerts. Or farming unit crop loss reports. Sprint three finalises sanction letters with full and final clauses. Cheque destruction instructions. And CIBIL desk update timelines. Clients receive bilingual updates in English and Hindi so partners. Directors. kin guarantors stay aligned.'
        ]
    },
    {
        id: 'sector-strategies-haryana',
        title: 'Sector Strategies Covering Automotive, IT, Textiles, and Agriculture',
        level: 2,
        content: [
            'Automotive suppliers in Manesar and Bawal present output schedules. OEM correspondence. Chip shortage notices. And workforce rationalisation data. IT and BPM firms in Gurugram share client attrition reports. Delayed milestone approvals. And payroll continuity proof. Textile processors in Panipat and Sonipat contribute natural gas invoices. Pollution control compliance costs. And export duty impact analyses. Warehouse operators provide e-way bill data. Occupancy reports. freight benchmarks.',
            'Farm clients in Karnal. Kaithal. And Hisar compile mandi price charts. Crop cutting experiments. And crop cover claim receipts. Dairy local units provide crop sales records and veterinary risk reports. CredSettle weaves these datasets into lender ready dossiers that justify waivers or structured payment aligned to income revival.'
        ]
    },
    {
        id: 'microfinance-rural-support-haryana',
        title: 'Microfinance and Rural Borrower Support',
        level: 2,
        content: [
            'Self help groups in Mewat. Palwal. And Fatehabad juggle multiple small loans EMIs tied to dairy. Poultry. small retail ventures. When income dips due to disease outbreaks or supply breaks. Group dynamics strain. CredSettle conducts community meetings. Captures gram panchayat endorsements. And coordinates with Haryana State Rural Livelihood Mission agents to map realistic settlement EMIs.',
            'We also work with local banks and areas credit boards to synchronise payments after grants or subsidies arrive. Where app loans apps engaged in abuse. CredSettle helps clients file FIRs with the Gurugram and Faridabad cyber police stations. Referencing cases recorded by state cyber cells in 2023 and 2024. This proof pressures NBFCs and fintech partners to step back from reputational coercion.'
        ]
    },
    {
        id: 'legal-forums-haryana',
        title: 'Legal and Quasi Judicial Forums Supporting Haryana Settlements',
        level: 2,
        content: [
            'Debt claims Tribunal benches in Chandigarh and Delhi handle high value Haryana NBFC matters. CredSettle’s lawyers secure consent terms that record compromises in tribunal orders. Blocking future enforcement beyond agreed sums. hearing matters are often seated in Gurugram or New Delhi. we push for bank arbitrators to ensure due process.',
            'Haryana Lok Adalat sittings in areas courts. Along with e-Lok Adalat drives. Close smaller tickets quickly when both parties consent. The state clients claims redressal commission and areas clients courts entertain reports about unfair claims or paper retention. Haryana RERA orders. Such as the 2024 instruction preventing project auctions without protecting allottees. Show that developers and NBFCs must settle before executing drastic claims. CredSettle references these forums in talks to underline legal risk.'
        ]
    },
    {
        id: 'nine-step-plan-haryana',
        title: 'Nine Step Haryana Settlement Playbook',
        level: 2,
        content: [
            'Step one compiles KYC. Sanction letters. Payment records. GST returns. Bank records. And sector local proof within forty eight hours. Step two issues legal help notices to NBFC heads. State claims firms. And if needed police officials citing RBI rules. Step three builds hardship portfolios containing OEM order reductions. Export cancellation emails. Crop loss letters. Or tax filings showing income dips.',
            'Step four benchmarks waiver expectations using the NBFC’s previous deals in similar Haryana hubs. Step five proposes the initial settlement figure with structured EMIs options. Step six negotiates counter offers while logging abuse or paper withholding. Step seven secures sanction letters with explicit full and final language. Step eight supervises payments via NEFT. RTGS. Or demand drafts tied to forecast income events such as festival sales or crop sales drives. Step nine collects NOCs. Retrieves papers. Files CIBIL desk updates. And schedules credit rebuild coaching.'
        ]
    },
    {
        id: 'documentation-checklist-haryana',
        title: 'Documentation Checklist for Haryana Borrowers',
        level: 2,
        content: [
            'Makers and exporters submit GST filings. E-way bills. Customs shipping bills. Directorate General of Foreign Trade letters. Electricity bills from Dakshin Haryana Bijli Vitran Nigam. And lease pacts for plots in HSIIDC factory estates. Service firms share client contracts. Invoice ageing reports. payroll summaries. Real estate entities present Haryana RERA registrations. Construction progress pictures. municipal approvals.',
            'Farmers and dairy local units provide land records. Girdawari extracts. Crop cover claim receipts. Milk crop sales records. And veterinary letters. Households supply salary slips. Form 16. Aadhaar copies. bank records. Funding proofs include sanctioned local bank lines. kin contribution affidavits. Or asset sale pacts. Ensuring NBFCs trust the payment plan.'
        ]
    },
    {
        id: 'payment-structures-haryana',
        title: 'Payment Structuring and Compliance Controls',
        level: 2,
        content: [
            'Automotive suppliers align EMIs with OEM payment cycles and festive demand surges. Textile processors schedule tranches after Diwali export dispatches or gas subsidy adjustments. Farmers prefer deals post rabi crop sales or dairy bonus distributions. Gurgaon based workers often choose staggered payments aligned to annual appraisals or ESOP vesting.',
            'CredSettle ensures all payments move through traceable channels and obtains same day receipts. Where NBFCs insist on post dated cheques. We secure cheque destruction clauses inside settlement letters. We also verify Form 26AS to avoid double taxation on waived rates and reinforce compliance logs so clients can counter any future claims.'
        ]
    },
    {
        id: 'credit-rebuild-haryana',
        title: 'Credit Rebuild and Growth Enablement',
        level: 2,
        content: [
            'Forty five days after final payment CredSettle pulls credit reports from CIBIL. Experian, Equifax. CRIF High Mark. Any discrepancy triggers CIBIL desk claims backed by sanction letters. Bank receipts. And agents references if needed. Clients join credit coaching covering budget discipline. safety against fake settlement calls. And responsible use of secured credit cards from Haryana State local Bank or nationalised lenders.',
            'Trade clients are connected with Invest Haryana single window desks. Startup Haryana grants. SIDBI refinance lines. And sector incentives in auto. Renewable energy. Or textiles. These programs provide lower cost working cash so clients do not re-enter high rates NBFC cycles.'
        ]
    },
    {
        id: 'case-stories-haryana',
        title: 'Case Stories from Gurugram, Panipat, and Hisar',
        level: 2,
        content: [
            'A Gurugram based auto component supplier defaulted on Rs 2.1 crore across two NBFCs after OEM order rationalisation. CredSettle presented output downtime logs. Supplier penalty notices. And payroll retention records. Both NBFCs accepted waivers near fifty percent and allowed EMIs aligned to the next model launch schedule.',
            'In Panipat. A textile processor with Rs 1.4 crore unpaid faced energy cost spikes and delayed export payments. We collated natural gas invoices. Export contract amendments. And Haryana State factory and Infrastructure Development Corporation notices. The lender sanctioned a 58 percent waiver with four EMIs matched to confirmed overseas orders.',
            'A Hisar dairy local defaulted on Rs 68 lakh after fodder shortages and disease outbreaks. CredSettle documented veterinary reports. Milk crop sales dips. And local resolutions. The NBFC agreed to a 62 percent waiver with structured payments tied to Haryana Dairy Development Federation support and seasonal crop sales peaks.'
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
              <img src="/nbfc_hero.png" alt="Haryana NBFC Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{
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
                        NBFC Loan Settlement in Gurgaon,<br />
                        <span className="text-blue-200">Faridabad &amp; Haryana.</span>
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
                Talk to the Haryana Settlement Desk.
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Haryana"/>

              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{
            background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
            boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
        }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>
                      Ready to Plan Your Haryana Settlement?
                    </h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}> Share EMI schedules. OEM or export proof. Or crop loss records. Our Haryana desk responds with a talks blueprint within 48 hours. </p>
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
export default HaryanaPageClient;
