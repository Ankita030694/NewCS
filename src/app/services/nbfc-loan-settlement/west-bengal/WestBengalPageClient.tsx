'use client';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';
const heroCopy = {
    title: 'NBFC Loan Settlement in West Bengal Crafted for Kolkata, Siliguri, and Industrial River Ports',
    description: "CredSettle\u2019s state desk supports clients from Kolkata export houses and Howrah machining units to Darjeeling tea growers. We blend RBI compliant talks, Bengal clients Affairs escalation. Lok Adalat legal help so that each NBFC deal survives audits and restores cash flow."
};
const faqs = [
    {
        question: 'Which NBFCs does CredSettle cover in West Bengal?',
        answer: "We settle with Bajaj Finance. Tata cash, Shriram Finance, Aditya Birla Finance. Hero FinCorp, HDB money Services. Equitas, Cholamandalam Investment, Fullerton, CreditAccess Grameen, Annapurna Finance. Digital lenders partnering with local NBFCs that service Kolkata. Durgapur, Asansol, and the tea belt in North Bengal."
    },
    {
        question: 'How quickly can CredSettle stop harassment in West Bengal?',
        answer: 'Our legal notices cite RBI Fair Practices Code. State police alerts, and the Legal Services officials Act. We also file complaints with the Kolkata Cyber Crime PS or Siliguri local cyber cell. Most clients see field visits and threats halt within forty eight hours.'
    },
    {
        question: 'What savings are typical for West Bengal settlements?',
        answer: "Urban no-security loans in Kolkata or Salt Lake often close at 45 to 60 percent of unpaid balances when hardship is documented. Vehicle and tools loans in Durgapur and Haldia average 50 to 55 percent. small loans and SHG portfolios in Jalpaiguri, Cooch Behar. Bankura can reach 65 to 70 percent waivers if weather shocks or market closures are evidenced."
    },
    {
        question: 'Will settlement damage my CIBIL score in West Bengal?',
        answer: "A settled status still beats a written off tag. CredSettle secures closure letters, files bureau disputes. Guides clients toward secured trade credit facilities from local banks. The state State money Corporation programs. SIDBI hubs lines to rebuild scores within twelve to eighteen months."
    },
    {
        question: 'Do you charge any enrollment fees for West Bengal borrowers?',
        answer: 'No. Our the state team signs success linked mandates. Fees become payable only after the NBFC issues a written settlement sanction and funds flow as per the settled calendar.'
    }
];
const sections = [
    {
        id: 'west-bengal-credit-landscape',
        title: 'West Bengal Credit Landscape Anchored in Ports, MSMEs, and Rural Trade',
        level: 2,
        content: [
            'the state contributes more than nine percent of India’s registered micro and small output units according to the MSME Ministry’s 2023 dashboard. Kolkata’s port led hub, Howrah’s foundries. And the Kharagpur tech belts rely on NBFC working cash to finance export receivables. Raw material stocking, and fleet maintenance. The same credit supports upcountry agribusiness such as paddy milling in Nadia. Potato cold chains in Hooghly. And tea processing in Jalpaiguri.',
            'Seasonality and price swings make payment patterns unpredictable. Tea auctions, monsoon flooding, and global freight breaks are common triggers behind missed EMIs. CredSettle maps these industry rhythms before engaging lenders so that proposed settlements are grounded in realistic cash flow forecasts. Not generic templates copied from other states.'
        ]
    },
    {
        id: 'economic-zones-and-corridors',
        title: 'Economic Zones and Corridors Driving NBFC Exposure',
        level: 2,
        content: [
            'The state’s credit demand hubs around Kolkata’s IT hubs in Sector V. The Haldia petrochemical complex, the Durgapur-Asansol steel belt. And the Eastern Freight belts that passes through Dankuni. NBFCs extend invoice financing, factoring. And tools leases to freight operators moving cargo through the river port network. In North Bengal, the Siliguri belts services trans-Himalayan trade. Encouraging NBFC lending to transporters. Hospitality providers, and cross border traders.',
            'These diverse belts require different talks scripts. A Kolkata exporter may lean on shipping data and pending duty drawback claims. Meanwhile, a Durgapur rolling mill emphasises power tariff hikes and slag disposal costs. CredSettle collects belts local proof so NBFCs accept that the hardship is rooted in verifiable market realities.'
        ]
    },
    {
        id: 'nbfc-presence-west-bengal',
        title: 'NBFC Presence Across West Bengal Districts',
        level: 2,
        content: [
            'Large NBFCs maintain dense branches in Kolkata. Salt Lake, and surrounding municipalities. Meanwhile, also partnering with fintech originators to reach Tirupur garment buyers who source from Howrah wholesalers. Durgapur, Asansol, and Burdwan see high penetration from tools finance firms that underwrite heavy machinery for mining. Steel rolling, and power maintenance. Small loans NBFCs work with self help groups in Purulia. Bankura, and Birbhum where farm diversification and crafts create credit demand.',
            'joint loans arrangements have grown since 2022. Private banks now pool risk with NBFCs for SME term loans in Rajarhat tech parks and for rural infrastructure projects along the Bengal Silicon Valley development. CredSettle coordinates deal sign-offs across both lenders to avoid scenarios where the NBFC agrees but the partner bank refuses to honour the OTS deal.'
        ]
    },
    {
        id: 'borrower-pain-points',
        title: 'Borrower Pain Points Unique to West Bengal',
        level: 2,
        content: [
            'Cyclone seasons and riverine flooding impose repeated shocks on agro firms in the coastal and delta areas. When crops fail or supply routes collapse. Clients juggle emergency expenses while NBFC agents demand continuity of EMIs. In urban hubs, delayed GST refunds. Port congestion penalties. And shifting freight charges erode margins for exporters and freight firms.',
            'Some collection teams escalate by contacting customers. Suppliers, and even trade associations, threatening reputational harm. CredSettle papers each violation by capturing call recordings. WhatsApp screenshots, and letters from trade bodies such as the tech Export Promotion Council. Giving leverage to compel NBFCs to settle rather than intimidate.'
        ]
    },
    {
        id: 'regulatory-safeguards-west-bengal',
        title: 'Regulatory Safeguards and Relief Forums in West Bengal',
        level: 2,
        content: [
            'Clients can escalate complaints under the RBI’s Ombudsman Scheme for NBFCs. With the Kolkata local office handling the state grievances. The state’s clients Affairs Department and the Directorate of Micro. Small and Medium firms often intervene when NBFC collection contravenes fair practice rules. Lok Adalat sessions run by the the state State Legal Services formal provide a binding settlement route. Especially effective for small ticket loans and small loans dues.',
            'Police circulars issued after high profile abuse cases instruct local stations to accept complaints against abusive agents. Cyber crime cells in Lalbazar. Bidhannagar, and Siliguri register offences involving data misuse or defamatory messaging. CredSettle taps these mechanisms strategically so that talks pressure is rooted in rule of law rather than rhetoric.'
        ]
    },
    {
        id: 'credsettle-method-west-bengal',
        title: 'CredSettle Methodology Tailored to Bengal Borrowers',
        level: 2,
        content: [
            'Every mandate begins with a deep dive across loan pacts. Payment histories, export papers, warehouse receipts. Mandi reports, and seasonal income charts. We chart the NBFC’s provisioning requirements. Identify quarter end pressures. And capture their past settlement pattern for similar industries in Kolkata. Durgapur, or Siliguri. This research informs the opening settlement anchor and demonstrates that the clients is aligned rather than distressed.',
            'During talks, we run structured weekly sprints. Sprint one focuses on legal compliance notices. Sprint two locks in a waiver ceiling by presenting hardship data. And sprint three finalises sanction letters with full and final language. Cheque destruction clauses, and clear bureau update timelines. Clients receive tracker updates through bilingual dashboards in English and Bengali for inclusive decision making.'
        ]
    },
    {
        id: 'sector-strategies',
        title: 'Sector Strategies for Ports, Tea, and Creative Services',
        level: 2,
        content: [
            'Port freight companies in Kolkata and Haldia rely on container turnaround and freight rates that swing with global trade. CredSettle references port trust circulars. Berth occupancy data. And demurrage invoices to justify settlement cuts. For IT and BPM players in Salt Lake. We showcase attrition reports, deferred client payments. And proof of wage continuity to support structured EMIs.',
            'Tea estates and bought leaf factories in Darjeeling and Dooars suffer from crop damage. Labour talks, and auction price dips. Our team collates weather station data. Estate closure permits, and Tea Board alerts. Creative firms in Kolkata’s film and cultural sectors provide output schedules. Stalled project contracts. And government grant paperwork to explain income breaks.'
        ]
    },
    {
        id: 'microfinance-and-rural',
        title: 'Microfinance and Rural Borrower Support',
        level: 2,
        content: [
            'Self help groups and joint debt risk groups across Bankura. Purulia, and Murshidabad often juggle multiple NBFC small loans. When floods or market closures hit. Payment collectives crack under social pressure. CredSettle trains group leaders to papers loss of income through block development officer letters. Panchayat resolutions, and farm extension reports. Reinforcing the case for higher waivers and moratorium linked settlements.',
            'We align with areas lead banks. State Rural Livelihood Mission functionaries. And local societies to sequence payments in line with livelihood restoration grants. This community driven rules prevents relapse into default and reassures NBFCs that the relief plan is sustainable.'
        ]
    },
    {
        id: 'legal-forums-west-bengal',
        title: 'Legal and Quasi Judicial Forums Supporting Settlement',
        level: 2,
        content: [
            'Debt collection Tribunal Kolkata covers high ticket NBFC cases originating from the entire state. CredSettle’s lawyers settle consent terms so that OTS deal orders are recorded and enforcement stays are issued. For arbitration disputes. We push for institutions located in Kolkata or Durgapur to cut travel costs for clients.',
            'the state Lok Adalat benches convened in areas court complexes allow pre lawsuits settlements for smaller accounts. We file joint applications with NBFC counsel. Prepare payment drafts. And secure award copies on the same day. Giving clients enforceable closure. clients Commissions at state and areas levels also hear complaints about unfair collection tactics or excessive charges.'
        ]
    },
    {
        id: 'nine-step-plan-west-bengal',
        title: 'Nine Step West Bengal Settlement Plan',
        level: 2,
        content: [
            'Step one captures the clients’s records set within forty eight hours. Including KYC, loan sanction letters. Payment ledgers, GST filings, and trade licenses. Step two issues legal representations to NBFC headquarters. Branch managers, and empanelled collection firms referencing RBI directives. Step three compiles hardship portfolios featuring port congestion receipts. Cyclone damage reports, and wage register proof.',
            'Step four benchmarks expected waivers by comparing the NBFC’s previous compromises in the same sector. Step five presents the initial closure deals with structured EMIs options. Step six handles counter offers while maintaining abuse logs. Step seven secures a sanctioned settlement letter with full and final clauses. Step eight supervises payment execution via NEFT. RTGS, or demand draft aligned to cash inflow events. Step nine closes the matter with NOC collection. Bureau dispute filings, and post settlement coaching.'
        ]
    },
    {
        id: 'documentation-west-bengal',
        title: 'Documentation Checklist for Bengal Borrowers',
        level: 2,
        content: [
            'Trade clients supply GST returns. E-way bills, port or airport cargo manifests. Excise challans, electricity bills from CESC or WBSEDCL. And contracts with Kolkata Port Trust or state departments. Output units add factory licenses. Pollution control board clearances, and labour registers. Retailers and service providers include bank records. POS sales summaries, and municipal trade permits.',
            'Farming and rural clients provide land deeds. Mutation letters, crop cutting reports. Weather alerts from the India Meteorological Department. Fishery department notices, and farmer producer organisation minutes. Funding proof includes sanctioned lines from local banks. Credit union letters. And affidavits detailing family contributions or asset sales.'
        ]
    },
    {
        id: 'payment-structures',
        title: 'Payment Structures and Compliance Controls',
        level: 2,
        content: [
            'We align settlement schedules with Bengal local income cycles. Exporters time EMIs after cargo clearance or receipt of foreign remittances. Tea estates prefer tranches linked to auction proceeds or tourism inflow during peak seasons. Rural clients schedule payments after paddy crop sales by the state food and supplies department or after state relief disbursements.',
            'Every payment is routed through digital channels to create verifiable trails. CredSettle tracks receipts within twenty four hours. Insists on cheque destruction clauses when PDCs exist. And reviews TDS deductions so that clients do not face unexpected tax debts once the NBFC books write backs.'
        ]
    },
    {
        id: 'credit-rebuild-west-bengal',
        title: 'Credit Rebuild and Business Recovery Support',
        level: 2,
        content: [
            'Forty five days after the final settlement payment. We pull CIBIL, Experian, Equifax. And CRIF High Mark reports to ensure entries reflect zero balance and settled status. Any discrepancies trigger disputes backed by sanction letters and NOCs. Clients join credit coaching cohorts that cover budgeting. Invoice discipline, and safeguarding digital lending credentials.',
            'CredSettle introduces clients to the the state MSME Facilitation Centre. The One areas One Product program. Startup Bengal incentives, and SIDBI or NABARD refinance lines. These pathways offer cheaper cash alternatives. Helping firms grow without falling back into high interest NBFC cycles.'
        ]
    },
    {
        id: 'case-stories-west-bengal',
        title: 'Case Stories From Kolkata, Durgapur, and Siliguri',
        level: 2,
        content: [
            'A Kolkata based exporter of leather goods owed Rs 1.4 crore across two NBFCs after a European client defaulted. CredSettle produced shipping bills, unpaid buyer receipts. And cover Credit Guarantee paperwork. Both NBFCs agreed to a 52 percent waiver with EMIs tied to new orders. And the arbitration case filed in Kolkata was withdrawn.',
            'In Durgapur, a rolling mill financed by an NBFC tools loan faced cash flow stress when power tariffs rose. We documented tariff hike notifications. Output downtime logs, and pending state subsidy claims. The lender accepted a 58 percent waiver payable over three quarters. And the client refinanced the balance through a SIDBI hubs scheme.',
            'A Siliguri freight operator servicing the India Bangladesh trade route missed EMIs due to flood damaged highways and customs delays. CredSettle gathered Border Roads Organisation repair orders. Client correspondence, and cover claims. The NBFC settled at 55 percent of dues with payments scheduled once the belts reopened. Restoring the clients’s fleet work.'
        ]
    }
];
const headings = [
    { id: 'west-bengal-credit-landscape', text: 'West Bengal Credit Landscape', level: 2 },
    { id: 'economic-zones-and-corridors', text: 'Economic Zones and Corridors', level: 2 },
    { id: 'nbfc-presence-west-bengal', text: 'NBFC Presence', level: 2 },
    { id: 'borrower-pain-points', text: 'Borrower Pain Points', level: 2 },
    { id: 'regulatory-safeguards-west-bengal', text: 'Regulatory Safeguards', level: 2 },
    { id: 'credsettle-method-west-bengal', text: 'CredSettle Method', level: 2 },
    { id: 'sector-strategies', text: 'Sector Strategies', level: 2 },
    { id: 'microfinance-and-rural', text: 'Microfinance and Rural Support', level: 2 },
    { id: 'legal-forums-west-bengal', text: 'Legal and Quasi Judicial Forums', level: 2 },
    { id: 'nine-step-plan-west-bengal', text: 'Nine Step Settlement Plan', level: 2 },
    { id: 'documentation-west-bengal', text: 'Documentation Checklist', level: 2 },
    { id: 'payment-structures', text: 'Payment Structures', level: 2 },
    { id: 'credit-rebuild-west-bengal', text: 'Credit Rebuild Support', level: 2 },
    { id: 'case-stories-west-bengal', text: 'Case Stories', level: 2 },
    { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];
function WestBengalPageClient() {
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
              <img src="/nbfc_hero.png" alt="West Bengal NBFC Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{
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
                        NBFC Loan Settlement in Kolkata,<br />
                        <span className="text-blue-200">Siliguri &amp; West Bengal.</span>
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
                Talk to the West Bengal Settlement Desk.
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement West Bengal"/>

              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{
            background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
            boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
        }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>
                      Ready to Plan Your West Bengal Settlement?
                    </h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}> Share EMI records, contract copies, or crop loss reports. Our state desk responds with a talks blueprint within 48 hours. </p>
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
export default WestBengalPageClient;
