'use client';
import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';
const heroCopy = {
    title: 'NBFC Loan Settlement in Karnataka - Policy-Savvy Relief for Bengaluru & Beyond',
    description: "the state\u2019s clients range from the cash tech founders and Mysore retailers to coastal freight fleets and small loans clients in the Malnad belt. CredSettle\u2019s state desk combines RBI expertise with knowledge of the 2025 state anti-coercion law to settle compliant settlements, halt abuse. Close unpaid NBFC loans legally."
};
const faqs = [
    {
        question: 'Which NBFCs does CredSettle negotiate with in Karnataka?',
        answer: "We cover Bajaj Finance, Tata cash. Aditya Birla Finance, HDB money Services. Hero FinCorp, L&T Finance, Piramal Finance, KreditBee, ZestMoney, Cashe. small loans NBFCs licensed under the the state Micro Loan & Small Loan Act. We also align joint loans cases where private banks and NBFCs share exposure."
    },
    {
        question: 'Can CredSettle protect me from coercive recovery under Karnataka law?',
        answer: 'Yes. We invoke the the state Micro Loan and Small Loan (Prevention of Coercive Actions) Act. 2025, along with the RBI Fair Practices Code. Our legal notices warn NBFCs and their firms that abuse invites penalties and ban orders from areas officials. Persistent violations are escalated to the clients Affairs Department and the RBI Ombudsman in the cash.'
    },
    {
        question: 'How much settlement reduction is typical in Bengaluru or Mysuru?',
        answer: "Most the state clients achieve 40-70% cuts depending on the loan type. Overdue tenure, and paperwork quality. Vehicle loans in freight belts often settle around 50%. Meanwhile, no-security fintech loans may see higher waivers once we proof income breaks."
    },
    {
        question: 'What if my case is already filed in the Karnataka Debt Recovery Tribunal or civil court?',
        answer: "Our panel lawyers engage with NBFC counsel in the the cash DRT, trade court. areas courts across Hubli, Mangalore, and Shivamogga. We seek mediation, settle consent terms. And ensure the final order reflects full and final settlement. Lok Adalat routes remain available for quick closures."
    },
    {
        question: 'Do you require upfront fees from Karnataka clients?',
        answer: "No upfront fees. We sign a success-linked mandate, complete due diligence. Collect our fee only after the NBFC issues the settlement letter and acknowledges receipt of settled payments."
    }
];
const sections = [
    {
        id: 'karnataka-credit-landscape',
        title: 'Karnataka Credit Landscape: Tech Capital Meets Microfinance Heartland',
        level: 2,
        content: [
            "the state is India’s technology launchpad and also a major small loans hub. The cash’s start-ups, IT parks. And gig economy rely on quick NBFC funding for growth. Staff relocation, and vehicle fleets. In contrast, coffee, pepper, and areca nut growers in Kodagu and Malnad areas use NBFC small loans to manage seasonal cash flow. The same depth of credit access turns risky when income cycles stumble - layoffs in tech belts. Delayed export payments in coastal freight. Or crop disease outbreaks can make EMIs unmanageable overnight.",
            "Lenders deploy multi-channel collection teams from Whitefield to Belagavi. With data-driven dialers, doorstep collection, and social media nudges. clients facing twin shocks - high urban living costs plus aggressive follow-ups - need a settlement partner that understands both RBI regulations and state-level protections. CredSettle fills that gap with a the state-local command centre staffed by negotiators. Lawyers, and chartered accountants."
        ],
    },
    {
        id: 'nbfc-coverage-karnataka',
        title: 'NBFC Coverage Across Bengaluru, Mysuru, Coastal, and Northern Zones',
        level: 2,
        content: [
            "The cash hosts major NBFC headquarters and service centres. Including Bajaj Finance, Tata cash. And multiple fintech lenders along the Outer Ring Road. Mysore, Hubli-Dharwad, and Belagavi feature auto-financing hubs supporting ancillary industries. Coastal cities like Mangalore and Udupi depend on NBFCs for fisheries. Freight, and tourism-focussed lending. Meanwhile, Shivamogga and Ballari rely on NBFC working cash for agro-processing and mining supply chains.",
            "Small loans NBFCs, self-help group (SHG) lenders. And local-backed NBFCs have strong penetration in Davangere. Tumakuru, and rural Mandya. When clients default, enforcement teams operate in Kannada. Tulu, Konkani, and English, using local intelligence to trace co-clients and guarantors. CredSettle’s multilingual case managers ensure contact stays expert. Documented, and within legal limits so that settlement talks proceed without threats."
        ],
    },
    {
        id: 'regulatory-safeguards',
        title: 'Regulatory Safeguards: RBI Playbook + Karnataka Anti-Coercion Law',
        level: 2,
        content: [
            "The RBI Fair Practices Code mandates transparent records. Respectful collection conduct, and grievance escalation within NBFCs. The state went further with the 2025 Micro Loan and Small Loan Act. Prohibiting coercive collections and requiring all micro lenders to register with areas officials. Violations attract fines up to INR 5 lakh and imprisonment.",
            "CredSettle anchors every case in this dual rules. We log abuse with audio clips. WhatsApp snapshots, and field visit photos. Then alert NBFC nodal officers and areas registrars. Many lenders pivot to settlement once they realise non-compliance could trigger license suspension or public naming by the Registrar of local Societies or the state clients Affairs Department.",
            "Clients also gain recourse through the RBI Ombudsman in the cash. Clients disputes redressal commissions. And the the state State Legal Services formal (KSLSA). We draft escalations for clients whenever NBFCs delay or deny reasonable closure deals."
        ],
    },
    {
        id: 'credsettle-karnataka-method',
        title: "CredSettle’s Karnataka Settlement Methodology",
        level: 2,
        content: [
            "Our the state system runs on five pillars. Pillar one is situation mapping: gathering loan pacts. EMI histories, co-applicant data, Udyam registrations. SHG passbooks, and GST returns. Pillar two enforces compliance - legal notices to NBFC headquarters. Field collection firms, and if required. To the jurisdictional police station citing the anti-coercion act.",
            "Pillar three constructs talks dossiers. We analyse each NBFC’s provisioning matrix. Quarter-end targets, and appetite for OTS in light of the new state regulations. Pillar four finalises settlements. Vetting offer letters for complete release clauses. Cheque destruction assurances, and credit bureau update commitments.",
            "Pillar five covers closure and rehabilitation: collecting NOCs. Aligning vehicle hypothecation releases at RTOs. Supporting property lien removals, and scheduling credit rebuild coaching. Clients receive monthly tracker updates until every papers and bureau entry reflects the new status."
        ],
    },
    {
        id: 'sector-playbooks',
        title: 'Sector Playbooks Tailored to Karnataka’s Economy',
        level: 2,
        content: [
            "The cash start-ups and IT workers: we leverage payroll cut letters. ESOP liquidity delays. And venture funding timelines to justify structured settlements. Our team also collaborates with CFOs to craft staggered payments aligned to expected receivable inflows.",
            "farming and plantation clients: coffee and spice growers in Kodagu or Chikkamagaluru often battle price crashes and weather extremes. We compile rainfall deviations, Coffee Board alerts. And crop cover claim status to secure significant waivers. Especially from agro-focused NBFCs.",
            "Freight and fleet operators along National Highway belts: we gather freight rate data. Toll cost spikes. And EV transition expenses to support closure deals. For fintech small loans in urban slums or coastal fishing communities. We showcase community income statistics and local government relief measures."
        ],
    },
    {
        id: 'legal-forums-karnataka',
        title: 'Legal Forums: KSLSA, Lok Adalats, and DRT Bengaluru',
        level: 2,
        content: [
            "The state State Legal Services formal conducts Mega Lok Adalat drives across the cash. Mysore, Hubli, and Mangalore, resolving loan disputes in a single sitting. CredSettle files joint settlement memos so clients receive decree-backed closure without protracted lawsuits.",
            "The Debts collection Tribunal in the cash handles higher-ticket NBFC cases. Meanwhile, city civil courts and magistrate courts manage cheque bounce and arbitration matters. Our lawyers ensure settlement terms are recorded formally. Preventing future enforcement attempts.",
            "When data misuse or cyber threats occurs. We work with the the cash Cyber Crime police station and the state’s cyber command centre to register complaints. Legal escalation combined with settlement outreach accelerates approvals from cautious NBFC legal teams."
        ],
    },
    {
        id: 'step-plan-karnataka',
        title: 'Step-by-Step Karnataka Settlement Game Plan',
        level: 2,
        content: [
            "Step 1: Intake and records checklist shared within 24 hours. Step 2: CredSettle issues legal help notices and begins abuse logs. Step 3: money analysis using pay records. Udyam data, and municipal tax records to define affordable settlement bands.",
            "Step 4: talks campaign aligned with NBFC review calendars. Step 5: Offer evaluation. Counter proposals, and structured payment scheduling. Step 6: Legal vetting. Payment execution via traceable banking channels. And real-time receipt tracking.",
            "Step 7: Collect NOCs. Lien release papers, and bureau update confirmations. Step 8: Lok Adalat or KSLSA filings if judicial backing is beneficial. Step 9: Post-settlement coaching on budgeting. Tax compliance for write-offs, and credit rebuild checkpoints."
        ],
    },
    {
        id: 'documentation-karnataka',
        title: 'Documentation & Evidence Toolkit for Karnataka Borrowers',
        level: 2,
        content: [
            "Identity & KYC: Aadhaar, PAN. Voter ID, passport, local address proofs. Income & trade proof: pay slips. Form 16, bank records, GST returns. SHG passbooks, local society letters. And invoices from Kirana or textile suppliers.",
            "Hardship proof: termination letters, pay revision emails. Rainfall deficit reports from IMD. Crop disease letters from Krishi Vigyan Kendras. Medical bills from Manipal, Narayana. Or Jayadeva hospitals, and municipal closure notices for shops.",
            "Contact logs: call recordings, WhatsApp screenshots. Social media tags, and field visit details. Settlement funding proof: bank balance letters. Family contribution affidavits, or property sale pacts awaiting registration."
        ],
    },
    {
        id: 'payment-structure',
        title: 'Payment Structure and Compliance Controls',
        level: 2,
        content: [
            "We design payment structures that respect the state’s trade cycles. For example, coir exporters align settlement EMIs with export remittance receipts. Meanwhile, BMTC staff align payments with quarterly allowances. Every transaction uses NEFT/RTGS or demand drafts for audit-ready trails.",
            "CredSettle secures receipts letters within 24 hours of each payment. If NBFCs insist on post-dated cheques. We specify a destruction clause in the final NOC. Referencing the the state anti-coercion act to prevent misuse. We also verify TDS rules for any write-back taxation and update Form 26AS accordingly."
        ],
    },
    {
        id: 'financial-rebuild-karnataka',
        title: 'Financial Recovery & Credit Rebuild for Karnataka Clients',
        level: 2,
        content: [
            "Our post-settlement clinics teach clients to set up emergency reserves through the state Bank. Canara Bank, or local local societies. We separate trade and private accounts. Automate savings via recurring deposits. And map expenses using Kannada and English budgeting dashboards.",
            "Credit rebuild involves pulling CIBIL. Experian, Equifax, and CRIF High Mark reports 45 days after settlement. Filing disputes for inaccuracies. And gradually adding secured credit products. For SHG clients. We align with NABARD-sponsored credit counselling cells to restore group lending eligibility.",
            "We also connect founders to government schemes like the the state Udyog Mitra incentives. Start-up the state grants. And the state’s alternative credit platforms that offer lower-cost refinancing once regular payments resume."
        ],
    },
    {
        id: 'case-stories-karnataka',
        title: 'Case Stories from Bengaluru, Mysuru, and Coastal Karnataka',
        level: 2,
        content: [
            "Case 1: A the cash-based SaaS company had three NBFC lines totalling INR 1.1 crore. When a global client deferred payments. Defaults triggered legal notices. CredSettle settled a 52% settlement. Structured across five tranches funded by a bridge round. And closed the DRT case with a consent decree.",
            "Case 2: A Mangalore freight founders operating six refrigerated trucks faced losses due to diesel price hikes and monsoon route breaks. We used fuel invoices, route maps. And fish auction data to secure a 58% cut and aligned payments with new contracts at New Mangalore Port.",
            "Case 3: A Chikkamagaluru coffee planter with SHG-backed small loans saw yield collapse because of heavy rainfall. CredSettle presented IMD rainfall reports. Coffee Board alerts. And crop cover claim receipts to achieve a 63% waiver recorded through a KSLSA Lok Adalat settlement."
        ],
    }
];
const headings = [
    { id: 'karnataka-credit-landscape', text: 'Karnataka Credit Landscape', level: 2 },
    { id: 'nbfc-coverage-karnataka', text: 'NBFC Coverage Across Karnataka', level: 2 },
    { id: 'regulatory-safeguards', text: 'Regulatory Safeguards', level: 2 },
    { id: 'credsettle-karnataka-method', text: "CredSettle’s Karnataka Methodology", level: 2 },
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
              <img src="/nbfc_hero.png" alt="Karnataka NBFC Loan Settlement" className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]" style={{
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
                        NBFC Loan Settlement in Bengaluru<br />
                        <span className="text-blue-200">&amp; Karnataka State.</span>
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
                Talk to the Karnataka Settlement Desk.
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Karnataka"/>

              <div className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]" style={{
            background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
            boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
        }}>
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2 className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full" style={{ color: '#0C2756' }}>
                      Ready to Plan Your Karnataka Settlement?
                    </h2>
                    <p className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full" style={{ color: 'rgba(12, 39, 86, 0.70)' }}> Share your EMI records and hardship proof. Our state desk drafts a talks roadmap within 48 hours. </p>
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
export default KarnatakaPageClient;
