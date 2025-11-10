'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';
import CTAButton from '@/components/CTAButton';

const heroCopy = {
  title: 'NBFC Loan Settlement in Uttar Pradesh Focused on Legal Relief Across 75 Districts',
  description:
    'CredSettle guides borrowers from Noida manufacturing lines to Gorakhpur transport yards through RBI-compliant NBFC settlements. Our Uttar Pradesh desk combines industrial cluster expertise, Lok Adalat coordination, and digital harassment monitoring so that every negotiated closure withstands scrutiny from lenders, police, and credit bureaus.'
};

const faqs = [
  {
    question: 'Which Uttar Pradesh NBFCs and digital lenders does CredSettle negotiate with?',
    answer:
      'We handle settlements with Bajaj Finance, Tata Capital, Aditya Birla Finance, Mahindra Finance, Hero FinCorp, Shriram Finance, Fullerton, HDB Financial Services, Piramal Finance, Cholamandalam Investment, CreditAccess Grameen, and fintech partners operating under RBI digital lending norms in Noida, Lucknow, Kanpur, Ghaziabad, and the state’s industrial corridors.'
  },
  {
    question: 'How does CredSettle stop coercive recovery in Uttar Pradesh?',
    answer:
      'We combine RBI Fair Practices Code notices with complaints to the Uttar Pradesh State Cyber Crime police units in Noida and Lucknow, references to the Legal Services Authorities Act for Lok Adalat escalation, and direct engagement with NBFC nodal officers. Documented harassment triggers rapid interventions that usually pause field visits within 48 hours.'
  },
  {
    question: 'What settlement outcomes are typical across Uttar Pradesh districts?',
    answer:
      'Unsecured NBFC loans across Lucknow, Kanpur, and Agra usually settle at 45-65 percent of outstanding dues when documentation is strong. Vehicle finance tied to logistics corridors like Eastern Peripheral Expressway averages 50-60 percent, while microfinance and self-help group exposures in Bundelkhand can reach 70 percent waivers when climate shocks or crop losses are evidenced.'
  },
  {
    question: 'Will a settlement hurt my CIBIL score and future borrowing in Uttar Pradesh?',
    answer:
      'The account is marked settled rather than written off, which still reduces negative weight compared to ongoing default. We schedule bureau disputes, help secure updated closure letters, and guide clients toward secured credit products offered by cooperative banks, regional rural banks, or SIDBI cluster programs to rebuild scores within 12-18 months.'
  },
  {
    question: 'Does CredSettle charge upfront fees for Uttar Pradesh NBFC cases?',
    answer:
      'No. Uttar Pradesh mandates operate on success-linked engagement letters. Fees become payable only after the NBFC issues a written settlement sanction, payment terms are executed, and closure certificates are received.'
  }
];

const sections = [
  {
    id: 'uttar-pradesh-credit-landscape',
    title: 'Uttar Pradesh Credit Landscape Grounded in MSME and Agri Demand',
    level: 2,
    content: [
      'Uttar Pradesh contributes India’s largest share of registered micro, small, and medium enterprises according to the Ministry of MSME 2023 report, accounting for about fourteen percent of units. Industrial pockets stretch from Noida electronics lines and Ghaziabad engineering vendors to Kanpur leather tanneries, Varanasi weaving clusters, and Gorakhpur fertilizer ancillaries. Household borrowers rely on NBFC instalments to fund working capital, inventory buffers before festival spikes, and seasonal farm inputs across the Gangetic plains.',
      'Credit access is broad yet uneven. Districts along the Delhi-Meerut-RRTS belt enjoy fast underwriting because lenders read GST, FASTag, and Udyam filings in real time, while Purvanchal borrowers often face handwritten ledger scrutiny and higher field visit pressure. CredSettle maps these regional differences before negotiating so that the settlement anchor reflects genuine income cycles and the lender’s provisioning appetite.'
    ]
  },
  {
    id: 'key-district-profiles',
    title: 'Key District Profiles From Noida to Bundelkhand',
    level: 2,
    content: [
      'Noida and Greater Noida host electronics, mobility, and data centre investments under the state’s industrial policy, drawing consumer and business NBFC credit for fleet leasing, salary overdrafts, and vendor finance. Ghaziabad and Meerut ride the Delhi NCR demand curve where construction material suppliers, steel fabricators, and packaging firms keep high working capital limits with NBFCs. Settlements in these districts need tight coordination with cash flow from government and private infrastructure contracts so that payment plans mirror milestone receipts.',
      'Lucknow anchors services, healthcare, and defence corridor procurement while Kanpur balances traditional leather exports with tyre and chemical manufacturing. Further east, Varanasi, Prayagraj, and Gorakhpur combine tourism, logistics, and agriculture. Bundelkhand districts, including Jhansi and Chitrakoot, rely on agri allied NBFC loans, dairy cooperatives, and self-help group credit that often buckle under rainfall deficits. CredSettle tunes negotiation narratives to each regional economy, using district-specific production indices, mandi prices, and tender schedules as evidence for waiver requests.'
    ]
  },
  {
    id: 'nbfc-coverage-up',
    title: 'NBFC Coverage Across Uttar Pradesh Corridors',
    level: 2,
    content: [
      'Large NBFCs operate dense branch networks along the Yamuna and Ganga expressways. Bajaj Finance, Mahindra Finance, and Shriram Finance combine urban storefronts with embedded financing at tractor dealerships in Barabanki, Sitapur, and Hardoi. Fintech lenders partner with regional NBFCs in Noida and Lucknow to push small ticket personal loans, while microfinance NBFCs like Satin Creditcare, Annapurna Finance, and CreditAccess Grameen supervise self-help group loans in Eastern Uttar Pradesh and Bundelkhand blocks.',
      'Co-lending models shape the state’s credit supply. Private banks share exposure with NBFCs on SME invoices in Agra’s glass belt and Moradabad’s brass clusters, and cooperative banks enlist NBFC collection teams in Saharanpur wood carving hubs. Every co-lending case triggers multi-party negotiations, so CredSettle pre-aligns with both the NBFC and partnering bank to ensure the compromise approval arrives from all credit committees at once.'
    ]
  },
  {
    id: 'pain-points-and-risk-patterns',
    title: 'Pain Points and Risk Patterns Unique to Uttar Pradesh Borrowers',
    level: 2,
    content: [
      'Power tariff revisions, freight cost jumps on the Eastern Peripheral Expressway, and payment delays on public works contracts often squeeze urban SMEs. Traders in Chowk, Aminabad, and Sadar markets juggle multiple NBFC limits and face batch-based debit instructions that continue even during lean cash weeks. In agrarian belts, erratic monsoons, river flooding, and input price spikes slash disposable income, leading to cross-defaults on equipment, dairy, and Kisan Credit Card linked NBFC loans.',
      'Recovery pressure echoes these stressors. Field agencies stage visits with local influencers, digital lenders threaten reputational exposure through morphed photographs, and some collection units still attempt extra-legal undertakings. CredSettle documents each violation through call recordings, CCTV exports, Kotwali diary entries, and cyber cell complaints. This evidence underpins negotiations by highlighting compliance risk faced by the NBFC if harassment persists.'
    ]
  },
  {
    id: 'borrower-rights-and-legal-guardrails',
    title: 'Borrower Rights and Legal Guardrails in Uttar Pradesh',
    level: 2,
    content: [
      'RBI Fair Practices Code, the 2022 digital lending guidelines, and the Ombudsman Scheme for NBFCs frame the compliance baseline. For Uttar Pradesh borrowers, grievances escalate to the New Delhi Ombudsman office that oversees the state. Lok Adalat benches under the Uttar Pradesh State Legal Services Authority sit across all seventy five districts, enabling pre-litigation conciliation for NBFC disputes when both parties consent. Awards passed there hold the force of civil court decrees.',
      'The state’s cyber crime units in Noida, Lucknow, and Varanasi actively register FIRs against digital loan app intimidation. District Consumer Commissions, the Micro, Small and Medium Enterprises Facilitation Councils, and Debt Recovery Tribunals at Lucknow and Allahabad offer additional paths when NBFCs file suits or arbitration claims. CredSettle selects the optimal forum per case, balancing speed, enforceability, and the borrower’s tolerance for in-person hearings.'
    ]
  },
  {
    id: 'credsettle-up-approach',
    title: 'CredSettle Approach Tailored for Uttar Pradesh',
    level: 2,
    content: [
      'Uttar Pradesh mandates start with a diagnostic that fuses loan ledgers, GST data, Udyam registrations, mandi receipts, contract copies, and rainfall or yield records. Our analysts compare each NBFC’s provisioning range, asset classification, and quarter-end targets with the borrower’s current cash flow so that the first settlement anchor is credible yet ambitious. Where multiple NBFCs share collateral, we map intercreditor agreements to prevent conflicting repossessions.',
      'Negotiations run through structured sprint cycles. Cycle one establishes compliance pressure and payment capacity, cycle two secures conditional waivers, and cycle three finalises sanction letters with full and final clauses. Because many Uttar Pradesh borrowers have co-obligors or guarantors within the same town, we extend counselling to the entire family or partnership firms so that all stakeholders align on the settlement roadmap.'
    ]
  },
  {
    id: 'sector-specific-gameplans',
    title: 'Sector Specific Gameplans for Uttar Pradesh Industries',
    level: 2,
    content: [
      'Electronics and mobile manufacturing units in Noida and Greater Noida run procurement-heavy models that suffer during export slowdowns. We present shipment cancellations, component price charts, Production Linked Incentive documentation, and payroll records to justify phased settlements tied to revived demand. Logistics operators along the Dedicated Freight Corridor and Lucknow-Kanpur expressway supply chains prefer structured instalments synced with toll refunds and freight receivables.',
      'Kanpur leather exporters battle environmental compliance costs and export payment lags. CredSettle compiles Pollution Control Board notices, tannery downtime logs, and Export Credit Guarantee claim files to negotiate deeper waivers. For agriculture and allied borrowers in Gorakhpur, Deoria, and Ayodhya divisions, we use Pradhan Mantri Fasal Bima Yojana claim acknowledgements, Agriculture Department pest advisories, and NABARD relief circulars to clinch higher haircuts on microfinance and gold loan accounts.'
    ]
  },
  {
    id: 'legal-and-alternate-forums',
    title: 'Legal and Alternate Forums Supporting Settlements',
    level: 2,
    content: [
      'Debts Recovery Tribunal Lucknow hears high-value NBFC cases from central and western Uttar Pradesh, while the Allahabad bench covers eastern corridors. CredSettle’s empanelled advocates negotiate consent terms inside these forums, ensuring settlements are recorded in tribunal orders that bar future enforcement attempts. When NBFCs invoke arbitration, we push for institutional panels seated in Lucknow so that borrowers avoid travel burdens.',
      'Lok Adalat sessions, mega camps run by UPSLSA, and cluster specific mediation cells in Kanpur and Varanasi provide quicker closures for smaller tickets. We prepare pre-signed compromise petitions, payment drafts, and compliance affidavits before the hearing date so that the matter closes in one sitting. Police facilitation centres such as the Integrated Grievance Redressal system in Noida also assist in restraining aggressive agents while negotiations mature.'
    ]
  },
  {
    id: 'nine-step-up-settlement-plan',
    title: 'Nine Step Uttar Pradesh Settlement Plan',
    level: 2,
    content: [
      'Step one captures complete documentation within forty eight hours, including KYC, sanction letters, repayment schedules, bank statements, and income proofs. Step two issues legal representations to NBFC head offices, branch managers, and recovery agencies citing RBI directives and Uttar Pradesh police advisories. Step three builds the hardship dossier covering cash flow dips, cost overruns, or climate shocks, while step four benchmarks the case against the NBFC’s historical settlement ratios in comparable Uttar Pradesh districts.',
      'Step five pitches the initial settlement proposal with structured instalment options. Step six negotiates counter offers and flags legal risk if the NBFC delays. Step seven secures a sanction letter with full and final language, cheque destruction clauses, and bureau update commitments. Step eight supervises payments through traceable banking channels, often timed near mandi payouts, government grant releases, or festival sales peaks. Step nine closes the loop with NOC collection, CIBIL dispute filings, and advisory sessions on tax treatment of waived interest.'
    ]
  },
  {
    id: 'documentation-checklist-up',
    title: 'Documentation Checklist for Uttar Pradesh Borrowers',
    level: 2,
    content: [
      'Identity proof, Udyam registration, PAN, Aadhaar, and address evidence anchor every file. Business owners supply GST returns, e-way bills, tender awards from bodies like Noida Authority or Uttar Pradesh Expressways Industrial Development Authority, and labour compliance registers. Agriculturists contribute land records, Khasra-Khatauni extracts, cooperative society statements, and Fasal Bima claim documents.',
      'Hardship evidence spans hospital bills from SGPGI or King George’s Medical University, layoff letters from Noida SEZ units, power outage logs, flood damage photographs endorsed by lekhpals, and mandi price charts. Settlement funding proof can include sanctioned limits from cooperative banks, family contribution affidavits notarised locally, or asset sale agreements awaiting registry slots at tehsil offices.'
    ]
  },
  {
    id: 'payment-structuring-and-compliance',
    title: 'Payment Structuring and Compliance Controls',
    level: 2,
    content: [
      'We design instalment plans around Uttar Pradesh’s revenue cycles. Textile exporters align settlement stages with international remittances that arrive near Diwali and Christmas order peaks. Farmers prefer tranches post Rabi procurement by the Food Corporation of India or state agencies, while transporters time payments with toll incentives on Purvanchal, Ganga, and Bundelkhand expressways. Each transaction flows through NEFT, RTGS, or demand draft to create unassailable audit trails.',
      'CredSettle tracks acknowledgements within twenty four hours of every payment. If NBFCs demand post dated cheques, we insist on reference clauses in the settlement letter that mandate prompt cheque cancellation once digital transfer is received. We also verify Form 26AS to ensure no erroneous tax deduction slips through after the NBFC books its waiver.'
    ]
  },
  {
    id: 'credit-rebuild-and-support',
    title: 'Credit Rebuild and Support Systems After Settlement',
    level: 2,
    content: [
      'Forty five days after the final receipt, we pull CIBIL, Experian, Equifax, and CRIF High Mark reports to verify that the account reflects a settled status with zero balance. Any discrepancy triggers disputes backed by sanction letters and NOCs. Borrowers then join customised credit coaching that covers budgeting, UPI autopay management, and prudent use of secured cards from Uttar Pradesh State Cooperative Bank or regional rural banks.',
      'Entrepreneurs tap state incentives such as the One District One Product programme, Uttar Pradesh Startup Policy 2020 subsidies, and SIDBI cluster funds to bridge working capital gaps without returning to high cost NBFC lines. We connect eligible clients to district industries centres, Khadi and Village Industries Board facilitators, and legal counsel for updating ROC filings or partnership deeds so that post settlement business operations stay compliant.'
    ]
  },
  {
    id: 'case-studies-up',
    title: 'Case Studies From Uttar Pradesh Clients',
    level: 2,
    content: [
      'A Ghaziabad based fabrication unit with three NBFC cash credit lines worth Rs 1.8 crore faced project payment delays on an elevated road contract. CredSettle documented pending invoices with the Uttar Pradesh State Bridge Corporation, secured a 48 percent waiver, and scheduled four instalments tied to certified bill releases. The NBFC withdrew its arbitration filing and updated CIBIL within thirty days of closure.',
      'In Kanpur, a tannery exporting to Italy was saddled with working capital debt and environmental compliance costs. Our team collated Uttar Pradesh Pollution Control Board notices, export order cancellations, and labour cost spikes. The NBFC accepted a 63 percent waiver payable across three quarters, and the remaining liability was refinanced through a SIDBI line accessed under the leather cluster support scheme.',
      'A Gorakhpur logistics entrepreneur operating cold chain trucks defaulted after diesel price jumps and flood disruptions along the Gandak river. By presenting route disruption reports, insurance claim acknowledgements, and client shipment delays, we negotiated a 58 percent waiver with the NBFC and channelled the balance through payments aligned with new contracts from the Food Corporation of India depot.'
    ]
  }
];

const headings = [
  { id: 'uttar-pradesh-credit-landscape', text: 'Uttar Pradesh Credit Landscape', level: 2 },
  { id: 'key-district-profiles', text: 'Key District Profiles', level: 2 },
  { id: 'nbfc-coverage-up', text: 'NBFC Coverage Across Corridors', level: 2 },
  { id: 'pain-points-and-risk-patterns', text: 'Pain Points and Risk Patterns', level: 2 },
  { id: 'borrower-rights-and-legal-guardrails', text: 'Borrower Rights and Legal Guardrails', level: 2 },
  { id: 'credsettle-up-approach', text: 'CredSettle Approach', level: 2 },
  { id: 'sector-specific-gameplans', text: 'Sector Specific Gameplans', level: 2 },
  { id: 'legal-and-alternate-forums', text: 'Legal and Alternate Forums', level: 2 },
  { id: 'nine-step-up-settlement-plan', text: 'Nine Step Settlement Plan', level: 2 },
  { id: 'documentation-checklist-up', text: 'Documentation Checklist', level: 2 },
  { id: 'payment-structuring-and-compliance', text: 'Payment Structuring and Compliance', level: 2 },
  { id: 'credit-rebuild-and-support', text: 'Credit Rebuild and Support', level: 2 },
  { id: 'case-studies-up', text: 'Case Studies', level: 2 },
  { id: 'faqs', text: 'Frequently Asked Questions', level: 2 }
];

function UttarPradeshPageClient() {
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
                alt="Uttar Pradesh NBFC Loan Settlement"
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
                Talk to the Uttar Pradesh Settlement Desk
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Uttar Pradesh" />

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
                      Ready to Plan Your Uttar Pradesh Settlement?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share your EMI statements, GST data, and hardship proof. Our Uttar Pradesh desk drafts a negotiation roadmap within 48 hours.
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

export default UttarPradeshPageClient;





