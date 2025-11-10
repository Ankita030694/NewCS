'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in Telangana Tailored for Hyderabad, Tier-2 Cities, and Agri Hubs',
  description:
    'CredSettle’s Telangana desk supports borrowers from HITEC City product teams and Pharma City manufacturers to Warangal handloom clusters and Karimnagar turmeric farmers. We combine RBI compliant negotiation, Telangana Lok Adalat coordination, and cyber fraud surveillance so that every NBFC settlement brings durable relief without regulatory setbacks.'
};

const faqs = [
  {
    question: 'Which NBFCs does CredSettle negotiate with in Telangana?',
    answer:
      'We work with Bajaj Finance, Tata Capital, Aditya Birla Finance, Mahindra Finance, HDB Financial Services, Hero FinCorp, Shriram Finance, Cholamandalam Investment, Piramal Finance, Fullerton, CreditAccess Grameen, Annapurna Finance, and fintech backed NBFCs serving Hyderabad, Warangal, Karimnagar, Khammam, Nizamabad, and tier-2 towns across the state.'
  },
  {
    question: 'How fast can coercive recovery stop once CredSettle intervenes?',
    answer:
      'We issue legal notices referencing the RBI Fair Practices Code, escalate to NBFC grievance officers, and file complaints with the Telangana State Cyber Security Bureau when digital harassment is involved. Most clients see field calls and intimidation slow within forty eight hours once our documentation and legal escalation reach lenders and agencies.'
  },
  {
    question: 'What waiver ranges are realistic in Telangana?',
    answer:
      'Hyderabad unsecured professional loans usually settle between 45 and 60 percent of outstanding dues. Pharma vendors and logistics borrowers in the Genome Valley, Shamshabad, and Kothur belts average 50 to 55 percent depending on inventory valuations. Agri and food processing loans in Karimnagar, Nizamabad, and Adilabad can secure 55 to 70 percent waivers when crop loss or procurement delays are well evidenced.'
  },
  {
    question: 'Will settlement damage my CIBIL score permanently?',
    answer:
      'Settlements are reported as settled rather than written off. CredSettle secures closure letters, files bureau disputes, and guides Telangana borrowers toward secured credit cards, gold backed loans, or cooperative bank products so that credit scores recover above 650 within twelve to eighteen months.'
  },
  {
    question: 'Do Telangana clients pay upfront fees to CredSettle?',
    answer:
      'No. We operate on success linked engagement letters. Fees are due only after the NBFC issues a written sanction, the borrower executes negotiated payments, and no dues certificates are collected.'
  }
];

const sections = [
  {
    id: 'telangana-credit-landscape',
    title: 'Telangana Credit Landscape Led by IT, Pharma, and Agri Value Chains',
    level: 2,
    content: [
      'Telangana’s gross state domestic product crossed fifteen lakh crore rupees in FY24 with services contributing more than sixty five percent, largely due to Hyderabad’s IT, biotech, and entertainment clusters. NBFC funding plays a crucial role in working capital for product engineering firms, film production houses, logistics operators, and retail chains across the capital region. Beyond the metropolis, districts such as Warangal, Karimnagar, medak, and Khammam rely on NBFC loans for textile weaving, spice processing, and hatchery expansion.',
      'The state’s irrigation push through Kaleshwaram and Mission Bhagiratha has increased agri credit demand for drip irrigation, cold chains, and agri equipment. Seasonal cash flow swings, however, trigger repayment stress when monsoons misfire or procurement is delayed. CredSettle maps these cyclical patterns so that settlement proposals align with actual revenue inflows instead of generic monthly schedules.'
    ]
  },
  {
    id: 'urban-corridors',
    title: 'Urban Corridors from HITEC City to Warangal Driving NBFC Exposure',
    level: 2,
    content: [
      'Hyderabad’s HITEC City, Financial District, and Genome Valley anchor IT services, SaaS startups, and pharmaceutical manufacturing. NBFCs extend venture debt, invoice financing, and equipment loans to these entities, often with bullet repayment structures. Shamshabad and Kothur host e-commerce warehouses and logistics parks tied to the Hyderabad Outer Ring Road, increasing demand for fleet finance and working capital.'
      ,
      'Warangal, Hanamkonda, and Kazipet form the state’s eastern hub for textile weaving, rice milling, and academic services. Karimnagar and Nizamabad balance agri processing with medical device manufacturing, while Khammam and Nalgonda specialise in horticulture, spice trading, and solar projects. CredSettle tailors settlement narratives with corridor specific data such as IT contract attrition rates, pharma inspection schedules, handloom order books, and chilli market price movements.'
    ]
  },
  {
    id: 'nbfc-presence-telangana',
    title: 'NBFC Presence Across Telangana Districts',
    level: 2,
    content: [
      'Major NBFCs maintain strong branch and digital networks in Hyderabad, Warangal, Karimnagar, and Nizamabad, while microfinance NBFCs focus on Mahabubnagar, Adilabad, Jangaon, and Gadwal self help groups. Fintech NBFCs partner with payment apps and online travel aggregators across the state, pushing personal loans to gig workers and small merchants. Co-lending arrangements with private banks have grown since 2022, particularly for MSME invoice financing in pharma, animation, and packaging sectors.'
      ,
      'These layered relationships complicate settlement approvals. CredSettle coordinates with lead NBFCs and partner banks to secure simultaneous sign offs and unified bureau reporting. We also monitor when collection outsourcing shifts to agencies in and around Hyderabad so proactive compliance notices reach every stake holder.'
    ]
  },
  {
    id: 'borrower-pressure-points-telangana',
    title: 'Borrower Pressure Points Unique to Telangana’s Economy',
    level: 2,
    content: [
      'IT and SaaS firms endure client budget freezes and slower ramp ups, causing deferred milestone payments and high bench costs. Film and OTT producers in Jubilee Hills juggle release delays and fluctuating streaming advances, affecting NBFC bridge loans. Pharma exporters in Genome Valley face regulatory inspection holds and raw material price spikes. Agricultural borrowers in Karimnagar, Jagtial, and Nirmal weather erratic monsoons and pest outbreaks that disrupt turmeric, paddy, and cotton revenue.',
      'Telangana police and cyber security bureaus have reported repeated loan app harassment cases since 2021, with arrests in Hyderabad and Cyberabad jurisdictions. Borrowers often receive threats via morphed photos or contact spamming. CredSettle gathers FIR copies, cyber complaint numbers, and phone recording logs to demonstrate compliance risk when NBFCs or their digital partners ignore RBI guidelines.'
    ]
  },
  {
    id: 'regulatory-safeguards-telangana',
    title: 'Regulatory Safeguards and State Relief Mechanisms',
    level: 2,
    content: [
      'The RBI Ombudsman office in Hyderabad covers NBFC grievances for Telangana and neighbouring states, offering escalations when lenders ignore fair practice norms. Telangana State Legal Services Authority conducts regular Lok Adalats and recently scaled up e-Lok Adalats to de-clog civil and loan disputes. Borrowers can also approach consumer fora in Hyderabad, Warangal, and district headquarters when NBFCs hold original documents or levy hidden fees.',
      'The state government’s enhanced Rythu Bandhu support and crop insurance subsidies provide cash flow relief that can be aligned with settlement tranches. Telangana Police and Cyber Security Bureau publish advisories warning against paying unregulated settlement agents, a point CredSettle reinforces during onboarding to keep clients safe from fraud. When lenders delay returning property documents after closure, we reference legal precedents from Telangana consumer forums that penalised such behaviour.'
    ]
  },
  {
    id: 'credsettle-method-telangana',
    title: 'CredSettle Methodology Crafted for Telangana Borrowers',
    level: 2,
    content: [
      'We start with a diagnostic review gathering loan agreements, repayment ledgers, bank statements, GST returns, TDS filings, project contracts, and agri produce receipts. Analysts map each NBFC’s provisioning guidelines, fiscal quarter targets, and historical settlement ratios for Telangana portfolios. This research sets a data backed anchor rather than a random percentage guess.',
      'Negotiation unfolds over structured sprints. Sprint one documents harassment, sends legal notices, and registers cyber complaints when digital intimidation appears. Sprint two compiles hardship evidence such as client attrition charts, export backlog emails, mandi price data, and rainfall deviations. Sprint three secures sanction letters with full and final language, cheque destruction assurances, and bureau update commitments. Clients receive bilingual updates in English and Telugu so promoters, guarantors, and family members stay informed.'
    ]
  },
  {
    id: 'sector-strategies-telangana',
    title: 'Sector Strategies for IT, Pharma, Aerospace, and Agri Value Chains',
    level: 2,
    content: [
      'For IT and SaaS borrowers we leverage customer churn metrics, deferred milestone logs, and bench cost analyses to justify phased settlements tied to renewed contracts. Pharma manufacturers provide USFDA or EU inspection schedules, batch failure reports, and raw material import invoices to illustrate temporary cash strain. Aerospace and defense suppliers around Adibatla and Ibrahimpatnam share production rescheduling letters from public sector undertakings.',
      'Agri and food processing clients in Karimnagar, Nizamabad, and Siddipet present mandi receipts, Telangana State Warehousing Corporation storage data, and crop insurance claim acknowledgements. Handloom and handicraft cooperatives in Warangal and Gadwal deliver order cancellations from export houses and evidence of yarn price hikes. CredSettle converts these datasets into negotiation briefs that resonate with NBFC risk committees.'
    ]
  },
  {
    id: 'microfinance-support-telangana',
    title: 'Microfinance and Rural Borrower Support Structures',
    level: 2,
    content: [
      'Self help groups and joint liability groups under the Telangana State Rural Livelihood Mission rely on microfinance NBFCs for livestock, small retail, and weaving businesses. When income dips due to drought, disease, or market closures, repayment discipline suffers. CredSettle conducts group workshops, obtains gram panchayat endorsements, and coordinates with district project managers to reshape instalments while preserving group credit scores.',
      'For rural borrowers facing digital harassment, we help file complaints via cybercrime.gov.in and liaise with police stations in Cyberabad, Rachakonda, and Warangal Commissionarates. We also advise on verifying NBFC field staff identities, referencing Telangana Police circulars that mandate photo ID and authorisation letters during collection visits.'
    ]
  },
  {
    id: 'legal-forums-telangana',
    title: 'Legal and Quasi Judicial Forums Strengthening Settlements',
    level: 2,
    content: [
      'Debt Recovery Tribunal Hyderabad handles larger NBFC suits from across Telangana, while commercial courts and civil courts in Hyderabad, Warangal, and Karimnagar take mid ticket disputes. CredSettle’s advocates pursue consent terms or withdrawal petitions once compromise terms are agreed, ensuring the tribunal or court records the settlement to prevent future enforcement.',
      'Telangana Lok Adalat benches and e-Lok Adalat sessions move smaller loans quickly when both parties submit joint memos. Telangana State Consumer Commission precedents show that lenders who hold documents or mis-sell insurance face penalties. We integrate these references into negotiation decks to highlight litigation risk for stubborn NBFCs.'
    ]
  },
  {
    id: 'nine-step-plan-telangana',
    title: 'Nine Step Telangana Settlement Playbook',
    level: 2,
    content: [
      'Step one collects loan files, bank statements, GST returns, salary slips, and sector specific evidence within forty eight hours. Step two issues representation notices to NBFC headquarters, branch heads, and collection agencies citing RBI rules. Step three documents hardship with client attrition records, crop loss certificates, procurement delays, or medical expenses.',
      'Step four benchmarks desired waivers based on the NBFC’s prior Telangana settlements and quarter end provisioning needs. Step five tables an opening proposal with either lump sum or structured instalments tied to forecast revenue. Step six manages counter offers while logging every harassment incident for leverage. Step seven locks a sanction letter spelling out full and final closure, cheque destruction, and bureau updates. Step eight supervises payments via NEFT, RTGS, or demand draft scheduled around salary cycles, export remittances, or Rythu Bandhu disbursals. Step nine gathers NOCs, retrieves pledged documents, files credit bureau disputes, and schedules credit rebuild sessions.'
    ]
  },
  {
    id: 'documentation-checklist-telangana',
    title: 'Documentation Checklist for Telangana Borrowers',
    level: 2,
    content: [
      'IT and SaaS companies provide contracts, invoice ageing reports, timesheets, payroll records, and software subscription logs. Pharma borrowers submit plant licences, batch production records, regulator correspondence, and raw material bills. Logistics operators share fleet registration papers, fuel invoices, FASTag statements, and warehouse rental agreements.',
      'Agricultural and rural borrowers supply pattadar passbooks, crop booking certificates, market yard receipts, and insurance claims. Handloom cooperatives provide society resolutions, buyer cancellations, and yarn purchase registers. Funding proof includes cooperative bank sanction letters, family contribution affidavits, and asset sale agreements that demonstrate ability to honour the negotiated plan.'
    ]
  },
  {
    id: 'payment-structures-telangana',
    title: 'Payment Structuring and Compliance Controls',
    level: 2,
    content: [
      'IT professionals align instalments with quarterly bonuses or annual appraisal cycles. Pharma and logistics borrowers schedule payments after export remittances, regulator clearances, or procurement settlements. Farmers and millers prefer tranches post Rythu Bandhu credit, civil supplies procurement, or chilli market season. Creative studios tie payments to streaming platform disbursements or theatrical release windows.',
      'CredSettle routes every instalment through traceable banking channels, receives acknowledgements, and confirms that post dated cheques are destroyed once digital transfers clear. We review Form 26AS entries to prevent TDS errors and maintain compliance trackers so any future lender audit recognises the settlement as fully honoured.'
    ]
  },
  {
    id: 'credit-rebuild-telangana',
    title: 'Credit Rebuild and Business Revival Support',
    level: 2,
    content: [
      'Forty five days after final payment we pull reports from CIBIL, Experian, Equifax, and CRIF High Mark to confirm settled status and zero balance. Any mismatch triggers bureau disputes with attached sanction letters and receipts. Clients join credit health workshops covering budget discipline, phishing awareness, and responsible credit usage in English and Telugu.',
      'We connect business borrowers with Telangana State Industrial Infrastructure Corporation facilitation desks, T Hub and WE Hub programs, TS-iPASS incentives, SIDBI cluster lines, and NABARD refinancing. These channels provide lower cost working capital so clients avoid returning to high interest NBFC cycles after settlement.'
    ]
  },
  {
    id: 'case-stories-telangana',
    title: 'Case Stories from Hyderabad, Warangal, and Karimnagar',
    level: 2,
    content: [
      'A Hyderabad SaaS startup with Rs 1.9 crore across two NBFC lines faced delayed renewals from international clients. CredSettle compiled churn metrics, revised contract emails, and payroll continuity proof. Both NBFCs accepted waivers around fifty percent and aligned instalments to renewed client onboarding schedules.',
      'A Warangal handloom cooperative defaulted on Rs 78 lakh after export orders were cancelled and yarn prices doubled. We presented buyer cancellation letters, yarn tariff data, and government relief receipts. The lender sanctioned a 60 percent waiver payable over four instalments matched to the next export season and state marketing society advances.',
      'A Karimnagar turmeric farmer collective owed Rs 52 lakh after market fluctuations and heavy rainfall damaged crop quality. CredSettle submitted crop loss panchanama records, mandi price charts, and insurance claim acknowledgements. The NBFC agreed to a 65 percent waiver with payments tied to Rythu Bandhu disbursals and the next procurement drive, releasing pledged land documents within thirty days.'
    ]
  }
];

const headings = [
  { id: 'telangana-credit-landscape', text: 'Telangana Credit Landscape', level: 2 },
  { id: 'urban-corridors', text: 'Urban Corridors', level: 2 },
  { id: 'nbfc-presence-telangana', text: 'NBFC Presence', level: 2 },
  { id: 'borrower-pressure-points-telangana', text: 'Borrower Pressure Points', level: 2 },
  { id: 'regulatory-safeguards-telangana', text: 'Regulatory Safeguards', level: 2 },
  { id: 'credsettle-method-telangana', text: 'CredSettle Method', level: 2 },
  { id: 'sector-strategies-telangana', text: 'Sector Strategies', level: 2 },
  { id: 'microfinance-support-telangana', text: 'Microfinance and Rural Support', level: 2 },
  { id: 'legal-forums-telangana', text: 'Legal and Quasi Judicial Forums', level: 2 },
  { id: 'nine-step-plan-telangana', text: 'Nine Step Settlement Plan', level: 2 },
  { id: 'documentation-checklist-telangana', text: 'Documentation Checklist', level: 2 },
  { id: 'payment-structures-telangana', text: 'Payment Structures', level: 2 },
  { id: 'credit-rebuild-telangana', text: 'Credit Rebuild Support', level: 2 },
  { id: 'case-stories-telangana', text: 'Case Stories', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function TelanganaPageClient() {
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
                alt="Telangana NBFC Loan Settlement"
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
                Talk to the Telangana Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Telangana" />

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
                      Ready to Plan Your Telangana Settlement?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share EMI schedules, client attrition reports, or crop evidence. Our Telangana desk replies with a negotiation blueprint within 48 hours.
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

export default TelanganaPageClient;





