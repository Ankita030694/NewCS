'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in West Bengal Crafted for Kolkata, Siliguri, and Industrial River Ports',
  description:
    'CredSettle’s West Bengal desk supports borrowers from Kolkata export houses and Howrah machining units to Darjeeling tea growers. We blend RBI compliant negotiation, Bengal Consumer Affairs escalation, and Lok Adalat representation so that every NBFC settlement survives audits and restores cash flow.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle cover in West Bengal?',
    answer:
      'We negotiate with Bajaj Finance, Tata Capital, Shriram Finance, Aditya Birla Finance, Hero FinCorp, HDB Financial Services, Equitas, Cholamandalam Investment, Fullerton, CreditAccess Grameen, Annapurna Finance, and digital lenders partnering with local NBFCs that service Kolkata, Durgapur, Asansol, and the tea belt in North Bengal.'
  },
  {
    question: 'How quickly can CredSettle stop harassment in West Bengal?',
    answer:
      'Our legal notices cite RBI Fair Practices Code, state police advisories, and the Legal Services Authorities Act. We also file complaints with the Kolkata Cyber Crime PS or Siliguri regional cyber cell. Most clients see field visits and intimidation halt within forty eight hours.'
  },
  {
    question: 'What savings are typical for West Bengal settlements?',
    answer:
      'Urban unsecured loans in Kolkata or Salt Lake often close at 45 to 60 percent of outstanding balances when hardship is documented. Vehicle and equipment loans in Durgapur and Haldia average 50 to 55 percent. Microfinance and SHG portfolios in Jalpaiguri, Cooch Behar, and Bankura can reach 65 to 70 percent waivers if weather shocks or market closures are evidenced.'
  },
  {
    question: 'Will settlement damage my CIBIL score in West Bengal?',
    answer:
      'A settled status still beats a written off tag. CredSettle secures closure letters, files bureau disputes, and guides borrowers toward secured trade credit facilities from cooperative banks, West Bengal State Financial Corporation programs, or SIDBI cluster lines to rebuild scores within twelve to eighteen months.'
  },
  {
    question: 'Do you charge any enrollment fees for West Bengal borrowers?',
    answer:
      'No. Our West Bengal team signs success linked mandates. Fees become payable only after the NBFC issues a written settlement sanction and funds flow as per the negotiated calendar.'
  }
];

const sections = [
  {
    id: 'west-bengal-credit-landscape',
    title: 'West Bengal Credit Landscape Anchored in Ports, MSMEs, and Rural Trade',
    level: 2,
    content: [
      'West Bengal contributes more than nine percent of India’s registered micro and small manufacturing units according to the MSME Ministry’s 2023 dashboard. Kolkata’s port led ecosystem, Howrah’s foundries, and the Kharagpur engineering corridor rely on NBFC working capital to finance export receivables, raw material stocking, and fleet maintenance. The same credit supports upcountry agribusiness such as paddy milling in Nadia, potato cold chains in Hooghly, and tea processing in Jalpaiguri.',
      'Seasonality and price volatility make repayment patterns unpredictable. Tea auctions, monsoon flooding, and global freight disruptions are common triggers behind missed EMIs. CredSettle maps these industry rhythms before engaging lenders so that proposed settlements are grounded in realistic cash flow forecasts, not generic templates copied from other states.'
    ]
  },
  {
    id: 'economic-zones-and-corridors',
    title: 'Economic Zones and Corridors Driving NBFC Exposure',
    level: 2,
    content: [
      'The state’s credit demand clusters around Kolkata’s IT hubs in Sector V, the Haldia petrochemical complex, the Durgapur-Asansol steel belt, and the Eastern Freight Corridor that passes through Dankuni. NBFCs extend invoice financing, factoring, and equipment leases to logistics operators moving cargo through the river port network. In North Bengal, the Siliguri corridor services trans-Himalayan trade, encouraging NBFC lending to transporters, hospitality providers, and cross border traders.',
      'These diverse corridors require different negotiation scripts. A Kolkata exporter may lean on shipping data and pending duty drawback claims, while a Durgapur rolling mill emphasises power tariff hikes and slag disposal costs. CredSettle collects corridor specific evidence so NBFCs accept that the hardship is rooted in verifiable market realities.'
    ]
  },
  {
    id: 'nbfc-presence-west-bengal',
    title: 'NBFC Presence Across West Bengal Districts',
    level: 2,
    content: [
      'Large NBFCs maintain dense branches in Kolkata, Salt Lake, and surrounding municipalities, while also partnering with fintech originators to reach Tirupur garment buyers who source from Howrah wholesalers. Durgapur, Asansol, and Burdwan see high penetration from equipment finance firms that underwrite heavy machinery for mining, steel rolling, and power maintenance. Microfinance NBFCs work with self help groups in Purulia, Bankura, and Birbhum where agricultural diversification and handicrafts create credit demand.',
      'Co-lending arrangements have grown since 2022. Private banks now pool risk with NBFCs for SME term loans in Rajarhat tech parks and for rural infrastructure projects along the Bengal Silicon Valley development. CredSettle coordinates settlement approvals across both lenders to avoid scenarios where the NBFC agrees but the partner bank refuses to honour the compromise.'
    ]
  },
  {
    id: 'borrower-pain-points',
    title: 'Borrower Pain Points Unique to West Bengal',
    level: 2,
    content: [
      'Cyclone seasons and riverine flooding impose repeated shocks on agro businesses in the coastal and delta districts. When crops fail or supply routes collapse, borrowers juggle emergency expenses while NBFC agents demand continuity of EMIs. In urban clusters, delayed GST refunds, port congestion penalties, and fluctuating freight charges erode margins for exporters and logistics firms.',
      'Some recovery teams escalate by contacting customers, suppliers, and even trade associations, threatening reputational harm. CredSettle documents each violation by capturing call recordings, WhatsApp screenshots, and letters from trade bodies such as the Engineering Export Promotion Council, giving leverage to compel NBFCs to negotiate rather than intimidate.'
    ]
  },
  {
    id: 'regulatory-safeguards-west-bengal',
    title: 'Regulatory Safeguards and Relief Forums in West Bengal',
    level: 2,
    content: [
      'Borrowers can escalate complaints under the RBI’s Ombudsman Scheme for NBFCs, with the Kolkata regional office handling West Bengal grievances. The state’s Consumer Affairs Department and the Directorate of Micro, Small and Medium Enterprises frequently intervene when NBFC recovery contravenes fair practice guidelines. Lok Adalat sessions run by the West Bengal State Legal Services Authority provide a binding settlement route, especially effective for small ticket loans and microfinance dues.',
      'Police circulars issued after high profile harassment cases instruct local stations to accept complaints against abusive agents. Cyber crime cells in Lalbazar, Bidhannagar, and Siliguri register offences involving data misuse or defamatory messaging. CredSettle taps these mechanisms strategically so that negotiation pressure is rooted in rule of law rather than rhetoric.'
    ]
  },
  {
    id: 'credsettle-method-west-bengal',
    title: 'CredSettle Methodology Tailored to Bengal Borrowers',
    level: 2,
    content: [
      'Every mandate begins with a deep dive across loan agreements, repayment histories, export documents, warehouse receipts, mandi reports, and seasonal revenue charts. We chart the NBFC’s provisioning requirements, identify quarter end pressures, and capture their past settlement pattern for similar industries in Kolkata, Durgapur, or Siliguri. This research informs the opening settlement anchor and demonstrates that the borrower is coordinated rather than distressed.',
      'During negotiation, we run structured weekly sprints. Sprint one focuses on legal compliance notices, sprint two locks in a waiver ceiling by presenting hardship data, and sprint three finalises sanction letters with full and final language, cheque destruction clauses, and clear bureau update timelines. Clients receive tracker updates through bilingual dashboards in English and Bengali for inclusive decision making.'
    ]
  },
  {
    id: 'sector-strategies',
    title: 'Sector Strategies for Ports, Tea, and Creative Services',
    level: 2,
    content: [
      'Port logistics companies in Kolkata and Haldia rely on container turnaround and freight rates that swing with global trade. CredSettle references port trust circulars, berth occupancy data, and demurrage invoices to justify settlement reductions. For IT and BPM players in Salt Lake, we showcase attrition reports, deferred client payments, and proof of wage continuity to support structured instalments.',
      'Tea estates and bought leaf factories in Darjeeling and Dooars suffer from crop damage, labour negotiations, and auction price dips. Our team collates weather station data, estate closure permits, and Tea Board advisories. Creative enterprises in Kolkata’s film and cultural sectors provide production schedules, stalled project contracts, and government grant paperwork to explain revenue disruption.'
    ]
  },
  {
    id: 'microfinance-and-rural',
    title: 'Microfinance and Rural Borrower Support',
    level: 2,
    content: [
      'Self help groups and joint liability groups across Bankura, Purulia, and Murshidabad often juggle multiple NBFC microloans. When floods or market closures hit, repayment collectives crack under social pressure. CredSettle trains group leaders to document loss of income through block development officer certificates, panchayat resolutions, and agricultural extension reports, reinforcing the case for higher waivers and moratorium linked settlements.',
      'We coordinate with district lead banks, State Rural Livelihood Mission functionaries, and cooperative societies to sequence payments in line with livelihood restoration grants. This community driven framework prevents relapse into default and reassures NBFCs that the settlement plan is sustainable.'
    ]
  },
  {
    id: 'legal-forums-west-bengal',
    title: 'Legal and Quasi Judicial Forums Supporting Settlement',
    level: 2,
    content: [
      'Debt Recovery Tribunal Kolkata covers high ticket NBFC cases originating from the entire state. CredSettle’s advocates negotiate consent terms so that compromise orders are recorded and enforcement stays are issued. For arbitration disputes, we push for institutions located in Kolkata or Durgapur to cut travel costs for borrowers.',
      'West Bengal Lok Adalat benches convened in district court complexes allow pre litigation settlements for smaller accounts. We file joint applications with NBFC counsel, prepare payment drafts, and secure award copies on the same day, giving borrowers enforceable closure. Consumer Commissions at state and district levels also hear complaints about unfair recovery tactics or excessive charges.'
    ]
  },
  {
    id: 'nine-step-plan-west-bengal',
    title: 'Nine Step West Bengal Settlement Plan',
    level: 2,
    content: [
      'Step one captures the borrower’s documentation set within forty eight hours, including KYC, loan sanction letters, repayment ledgers, GST filings, and trade licenses. Step two issues legal representations to NBFC headquarters, branch managers, and empanelled recovery agencies referencing RBI directives. Step three compiles hardship portfolios featuring port congestion receipts, cyclone damage reports, and wage register evidence.',
      'Step four benchmarks expected waivers by comparing the NBFC’s previous compromises in the same sector. Step five presents the initial settlement proposal with structured instalment options. Step six handles counter offers while maintaining harassment logs. Step seven secures a sanctioned settlement letter with full and final clauses. Step eight supervises payment execution via NEFT, RTGS, or demand draft aligned to cash inflow events. Step nine closes the matter with NOC collection, bureau dispute filings, and post settlement coaching.'
    ]
  },
  {
    id: 'documentation-west-bengal',
    title: 'Documentation Checklist for Bengal Borrowers',
    level: 2,
    content: [
      'Business borrowers supply GST returns, e-way bills, port or airport cargo manifests, excise challans, electricity bills from CESC or WBSEDCL, and contracts with Kolkata Port Trust or state departments. Manufacturing units add factory licenses, pollution control board clearances, and labour registers. Retailers and service providers include bank statements, POS sales summaries, and municipal trade permits.',
      'Agriculture and rural borrowers provide land deeds, mutation certificates, crop cutting reports, weather alerts from the India Meteorological Department, fishery department notices, and farmer producer organisation minutes. Funding proof includes sanctioned lines from cooperative banks, credit union letters, and affidavits detailing family contributions or asset sales.'
    ]
  },
  {
    id: 'payment-structures',
    title: 'Payment Structures and Compliance Controls',
    level: 2,
    content: [
      'We align settlement schedules with Bengal specific revenue cycles. Exporters time instalments after cargo clearance or receipt of foreign remittances. Tea estates prefer tranches linked to auction proceeds or tourism inflow during peak seasons. Rural borrowers schedule payments after paddy procurement by the state food and supplies department or after state relief disbursements.',
      'Every payment is routed through digital channels to create verifiable trails. CredSettle tracks acknowledgements within twenty four hours, insists on cheque destruction clauses when PDCs exist, and reviews TDS deductions so that borrowers do not face unexpected tax liabilities once the NBFC books write backs.'
    ]
  },
  {
    id: 'credit-rebuild-west-bengal',
    title: 'Credit Rebuild and Business Recovery Support',
    level: 2,
    content: [
      'Forty five days after the final settlement payment, we pull CIBIL, Experian, Equifax, and CRIF High Mark reports to ensure entries reflect zero balance and settled status. Any discrepancies trigger disputes backed by sanction letters and NOCs. Borrowers join credit coaching cohorts that cover budgeting, invoice discipline, and safeguarding digital lending credentials.',
      'CredSettle introduces clients to the West Bengal MSME Facilitation Centre, the One District One Product program, Startup Bengal incentives, and SIDBI or NABARD refinance lines. These pathways offer cheaper capital alternatives, helping businesses grow without falling back into high interest NBFC cycles.'
    ]
  },
  {
    id: 'case-stories-west-bengal',
    title: 'Case Stories From Kolkata, Durgapur, and Siliguri',
    level: 2,
    content: [
      'A Kolkata based exporter of leather goods owed Rs 1.4 crore across two NBFCs after a European client defaulted. CredSettle produced shipping bills, unpaid buyer acknowledgements, and Insurance Credit Guarantee paperwork. Both NBFCs agreed to a 52 percent waiver with instalments tied to new orders, and the arbitration case filed in Kolkata was withdrawn.',
      'In Durgapur, a rolling mill financed by an NBFC equipment loan faced cash flow stress when power tariffs rose. We documented tariff hike notifications, production downtime logs, and pending state subsidy claims. The lender accepted a 58 percent waiver payable over three quarters, and the client refinanced the balance through a SIDBI cluster scheme.',
      'A Siliguri logistics operator servicing the India Bangladesh trade route missed EMIs due to flood damaged highways and customs delays. CredSettle gathered Border Roads Organisation repair orders, client correspondence, and insurance claims. The NBFC settled at 55 percent of dues with payments scheduled once the corridor reopened, restoring the borrower’s fleet operations.'
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
                alt="West Bengal NBFC Loan Settlement"
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
                Talk to the West Bengal Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement West Bengal" />

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
                      Ready to Plan Your West Bengal Settlement?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share EMI statements, contract copies, or crop loss reports. Our West Bengal desk responds with a negotiation blueprint within 48 hours.
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

export default WestBengalPageClient;


