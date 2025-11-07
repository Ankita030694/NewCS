'use client';

import { useEffect, useMemo, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TableOfContents from '@/components/TableOfContents';
import FAQWithSchema from '@/components/FAQWithSchema';

const heroCopy = {
  title: 'NBFC Loan Settlement in Maharashtra - Practical Legal Relief for Borrowers',
  description:
    "Maharashtra households and MSMEs borrow heavily from NBFCs for business expansion, vehicles, education, healthcare, and consumer needs. When repayments fall behind, CredSettle provides evidence-backed negotiations, RBI compliant documentation, and harassment protection across Mumbai, Pune, Nagpur, Nashik, Thane, Aurangabad, Kolhapur, and every district in the state."
};

const faqs = [
  {
    question: 'Which NBFC loans can CredSettle negotiate in Maharashtra?',
    answer:
      "We handle unsecured and secured NBFC portfolios across Bajaj Finance, Mahindra Finance, Tata Capital, Piramal Finance, Hero FinCorp, Shriram Finance, Muthoot Finance, Manappuram, IIFL, Clix Capital, and regional housing finance companies. Our team also takes up co-lending cases where banks and NBFCs originate loans together."
  },
  {
    question: 'How quickly can harassment calls stop after onboarding?',
    answer:
      "Most Maharashtra clients see noticeable relief within three to five business days. We send statutory notices citing the Fair Practices Code, RBI Integrated Ombudsman Scheme, and Maharashtra Police circulars on recovery ethics, and we escalate violations with call recordings when needed."
  },
  {
    question: 'Does settlement hurt my credit score in Mumbai or Pune?',
    answer:
      "All credit bureaus mark the account as settled, which is better than a write off entry. We prepare a credit action plan that covers gold loan rebuilders, secured card ladders, and bureau dispute submissions so that scores improve to the mid 600s within 18 to 24 months after closure."
  },
  {
    question: 'Can CredSettle help if legal notices are already filed in DRT or civil court?',
    answer:
      "Yes. We collaborate with Maharashtra based advocates to file appearance, pause coercive measures, and push the NBFC toward structured settlement. We align with the e filing systems used in Mumbai, Pune, Nagpur, and Aurangabad benches and integrate settlement terms into consent orders when the judge permits."
  },
  {
    question: 'Do I pay upfront fees to start NBFC settlement with CredSettle?',
    answer:
      "There is no upfront charge. We sign a success linked mandate, complete KYC, and only raise invoices after the NBFC issues a legally valid One Time Settlement letter and acknowledges receipt of the negotiated amount."
  }
];

const mainSections = [
  {
    id: 'maharashtra-nbfc-landscape',
    title: 'Maharashtra NBFC Landscape and Why Borrowers Feel the Pressure',
    level: 2,
    content: [
      "Maharashtra hosts the country’s deepest NBFC ecosystem because Mumbai anchors capital markets and Pune, Nagpur, Nashik, and Aurangabad provide diversified borrower bases. Bajaj Finance, the largest NBFC by market capitalisation, operates from Pune and reports that more than forty percent of its consumer durable and two wheeler portfolios originate from Western India. Mahindra Finance, headquartered in Mumbai, funds tractor and rural vehicle purchases across Vidarbha and Marathwada. Tata Capital, Piramal Finance, and Aditya Birla Finance run major mortgage processing hubs in Mumbai’s Bandra Kurla Complex. Smaller regional players such as Vastu Housing, Poonawalla Fincorp, Capri Global, and Shriram Housing Finance maintain strong distribution networks in Thane, Navi Mumbai, Kalyan, and Pimpri Chinchwad.",
      "This density of lenders means Maharashtra residents receive offers faster than borrowers in most states, but the flip side is aggressive recovery when EMI cycles break. NBFC products carry blended interest rates between eighteen and thirty two percent, and short tenures amplify the monthly burden. Rural households in Vidarbha often pledge tractors or harvesters to Mahindra Finance and then face cash flow shocks when crop payments arrive late. Retail workers in Mumbai suburbs rely on zero cost EMI cards from Bajaj, and missed payroll during seasonal layoffs can place multiple accounts in the ninety day past due bucket simultaneously. Business owners in Pune’s auto ancillary belt borrowed heavily through supply chain finance programs during the 2021 rebound and later faced order cancellations, making instalments unmanageable by 2023. Each of these situations triggers automated dialers, third party agencies, doorstep visits, and legal notices demanding full and final payment even when borrowers display willingness to settle logically.",
      "COVID moratorium relaxations ended in late 2020, and Maharashtra borrowers entered 2021 with capital expenditure and personal consumption debt that matured in quick succession. RBI data released through the December 2024 Financial Stability Report confirms that NBFC gross non performing assets climbed to six point eight percent statewide, with vehicle loans and unsecured consumer credit forming the largest stress pockets. Maharashtra contributes the highest share to that figure because it combines urban consumer portfolios with rural equipment loans. NBFCs must protect their capital adequacy ratios, so they prefer to convert doubtful assets into partial recoveries rather than stretch restructuring programmes. That is where settlement driven outcomes show up naturally in board level policies, and CredSettle’s Mumbai based negotiation team uses those policy levers to secure structured reductions.",
      "Industry analysts tracking CRISIL and ICRA quarterly reviews place Maharashtra in the top bracket for micro enterprise credit linked to NBFCs. The state’s logistics corridors across the Mumbai Pune Expressway and Nagpur’s multimodal hub push transport operators to depend on working capital loans that cycle every ninety days. When freight rates soften, instalments fall overdue quickly. CredSettle maps these economic indicators and factors them into negotiation briefs, showing NBFC credit committees that borrower hardship is tied to macro events like diesel price spikes, agricultural commodity swings, and delayed municipal payments. By presenting settlement proposals backed by data, we improve approval odds compared to emotional pleas alone."
    ]
  },
  {
    id: 'borrower-rights',
    title: 'Borrower Rights Under RBI Policy and Maharashtra Specific Statutes',
    level: 2,
    content: [
      "Every settlement discussion sits on top of RBI’s Master Directions on NBFC Fair Practices, the Integrated Ombudsman Scheme 2021, and prudential norms for income recognition and asset classification. NBFCs must provide transparent statements, share amortisation tables, and record borrower consent before modifying schedules. They are expressly barred from using threatening or obscene language and must work only with recovery partners who hold valid authorisations. If borrowers in Mumbai, Thane, or Pune experience misconduct, they can escalate through the NBFC grievance cell, the Head Office nodal officer, and finally the RBI Ombudsman located in South Mumbai’s Reserve Bank of India Building on Shahid Bhagat Singh Marg. CredSettle drafts these escalations with supporting call logs and digitally signed applications to create pressure for timely settlement approvals.",
      "Maharashtra also enforces the Maharashtra Protection of Interest of Depositors in Financial Establishments Act, which allows authorities to attach assets of fraudulent NBFC like entities. While regulated NBFCs fall under RBI jurisdiction, the Act’s existence motivates lenders to maintain compliance when operating in the state. Maharashtra Police issues standing instructions to recovery agents under the Bombay Police Act, and district superintendents routinely hold sensitisation sessions after receiving complaints. When we intervene on behalf of clients in Nagpur or Nashik, we cite these state instructions along with RBI circular DBR.Leg.BC.75.07.12.001 2015 16 that prohibits intimidation during loan recovery.",
      "Settlement success improves dramatically when borrowers produce a dossier of hardship evidence. Maharashtra residents often hold Aadhaar, PAN, Udyam registration, Shop and Establishment licenses, and Goods and Services Tax filings. CredSettle’s documentation team assembles income drop proofs such as e way bill declines, bank statements showing slashed turnover, hospital discharge summaries from Mumbai’s civic hospitals, or agricultural distress certificates issued by tehsildars in Yavatmal and Wardha. These documents help NBFC credit heads justify settlement write backs during internal audits and RBI supervisory reviews.",
      "We also prepare compliance narratives referencing the RBI Integrated Ombudsman Scheme contact centre in Mumbai, which operates toll free helplines and digital complaint portals. When NBFCs delay responses, we send a summary of the borrower’s harassment log and financial hardship to the Ombudsman office. Past case outcomes demonstrate that well documented grievances nudge lenders to accept rational settlements instead of risking regulatory inquiries. Borrowers gain confidence knowing that an independent regulator monitors each step."
    ]
  },
  {
    id: 'credsettle-approach',
    title: 'How CredSettle Designs Maharashtra Focused Settlement Strategies',
    level: 2,
    content: [
      "CredSettle maintains a dedicated Maharashtra desk staffed by negotiators, chartered accountants, and advocates with offices near BKC in Mumbai, Shivajinagar in Pune, and Civil Lines in Nagpur. When a borrower signs the engagement letter, we deploy a six stage framework that balances compliance, empathy, and financial analytics.",
      "Stage one covers intake and case mapping. We identify every NBFC linked to the borrower through credit bureau pulls, CKYC data, and loan account statements. Maharashtra clients frequently juggle five or more facilities, including gold loans, business lines of credit, personal instalment loans, and co branded EMI cards. Stage two focuses on harassment control. We send statutory notices to NBFC nodal officers, notify recovery agents that representation has shifted, and set up recorded telephone lines routed through our call management system. Stage three involves financial modelling. Using the borrower’s cash flows and asset base, we determine a feasible settlement range and staggered payment plan. For small manufacturers in Aurangabad or Pimpri Chinchwad, we align settlement instalments with purchase order release cycles so cash management remains practical.",
      "Stage four handles negotiation. We track every NBFCs historical approval ratios, provisioning coverage, and quarter end objectives. For instance, Bajaj Finance and Tata Capital often review settlement dockets during the last month of each quarter, while Mahindra Finance and Shriram Finance prefer pushing approvals toward financial year end to clean up books. We time proposal submissions accordingly, pair them with comparable case precedents, and include consent letters from co applicants when required. Stage five executes documentation. Once the NBFC issues an offer letter, we vet the wording to ensure complete waiver of future claims, inclusion of all loan identifiers, and clarity on payment deadlines. Stage six ensures post settlement compliance, covering payment proof acknowledgements, lien removal from hypothecated assets, Form 35 submission to RTO for vehicle loans, and follow ups with credit bureaus for status updates.",
      "Throughout the mandate we maintain a collaboration log that records every phone call, email, and in person visit with lender teams. Borrowers receive weekly updates summarising movement so that they never feel left in the dark. When NBFCs request revised offers, we test the impact on the borrower's cash flow and only accept if the revised plan preserves living expenses and essential business costs. Transparent communication keeps expectations realistic and prevents last minute surprises when final settlement letters arrive."
    ]
  },
  {
    id: 'regional-insights',
    title: 'Regional Insights Across Mumbai, Pune, Nagpur, Nashik, and Beyond',
    level: 2,
    content: [
      "Mumbai and Thane concentrate salaried borrowers working in financial services, media, and logistics. Their NBFC exposure skews toward lifestyle financing, personal loans, credit cards converted to instalments, and top up housing loans. Recovery agencies assign field executives to visit office complexes in Lower Parel, Andheri, and Navi Mumbai. CredSettle arranges intervention meetings in neutral venues, ensuring borrowers do not feel ambushed at workplaces. We reference case law from the Mumbai High Court that reiterates dignified recovery standards, which usually softens collection behaviour.",
      "Pune, Pimpri Chinchwad, and Talegaon host automotive suppliers and IT service hubs. NBFCs extend unsecured business loans not backed by collateral, and downturns in export demand can batter cash flows. Our Pune desk works closely with chartered accountants to prepare projected cash flow statements that prove repayment challenges stem from order shrinkage rather than wilful default. We have successfully reduced NBFC exposure by forty to sixty percent for tool room owners in Bhosari and Hinjawadi based startups that faced delayed venture funding. Many Pune cases also involve co lending arrangements between a bank and an NBFC, requiring coordination with both parties to avoid duplicate legal notices.",
      "Nagpur, Amravati, and Wardha anchor Vidarbha agriculture and logistics. Mahindra Finance, Samunnati, and regional NBFCs finance tractors, harvesters, and cold chain equipment. Weather volatility makes crop income uncertain, so settlement proposals must include affidavits from local agricultural officers, crop insurance claim copies, and records of minimum support price delays. We also integrate state government relief announcements, such as interest subvention programs, to show the lender that structured settlements align with policy intent.",
      "Nashik, Jalgaon, and Ahmednagar combine agriculture with manufacturing. Bajaj Finance runs strong distribution networks for consumer loans in Nashik city, while Sinnar industrial units prefer equipment loans. CredSettle’s Nashik field associates collect original hypothecation documents, ensure NBFCs issue Form 35 after settlement, and track release of warehouse receipts. In coastal districts like Ratnagiri and Sindhudurg, fisherfolk often pledge boats and engines to NBFCs. When storms damage equipment, we compile inspection photographs, Marine Mercantile Department reports, and community certificates to justify deep haircuts during settlement talks.",
      "Marathwada districts such as Latur, Osmanabad, and Nanded witnessed repeated drought cycles over the past decade. NBFC microfinance subsidiaries lent extensively to self help groups in these areas, and defaults rose after monsoon failures. We collaborate with district collectors who document drought declarations and with state agricultural universities that publish advisories on crop replacement. These official records become compelling annexures inside settlement proposals and demonstrate that borrowers attempted to maintain repayment until uncontrollable weather changes intervened."
    ]
  },
  {
    id: 'harassment-protection',
    title: 'Stopping Harassment and Managing Legal Escalations',
    level: 2,
    content: [
      "Harassment complaints form the top reason borrowers reach out to CredSettle. NBFCs deploy outsourced agencies that sometimes cross legal lines by calling at odd hours, sending social media messages, or parking vehicles outside residences. We rely on RBI circulars that restrict communication to reasonable hours and require agents to carry identity cards. When violations occur, we file entries with the local police station under Section 384 and 503 of the Indian Penal Code relating to extortion and criminal intimidation. Maharashtra cyber police cells also take cognizance of WhatsApp abuse, especially in Mumbai and Pune.",
      "If NBFCs issue legal demand notices under Section 138 of the Negotiable Instruments Act or under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act, we collaborate with partner law firms to respond within statutory timelines. Maharashtra hosts Debts Recovery Tribunals in Mumbai, Pune, and Nagpur, and we maintain cause lists to track case priorities. Rather than letting matters escalate to auction or attachment, we push for court monitored settlement conferences, referencing successful precedents like the 2022 Religare Finvest one time settlement agreement that was recorded with consortium lenders including Bank of Maharashtra. The courts often encourage compromise when borrowers demonstrate bona fide intent and when settlement yields faster recovery than contested litigation.",
      "We also educate clients about Lok Adalat mechanisms available under the Maharashtra State Legal Services Authority. Many NBFC disputes qualify for pre litigation Lok Adalat hearings where both parties submit settlement terms for quick validation. The award carries the same enforceability as a civil court decree and closes the chapter permanently. For families who fear extended court visits in Mumbai or Pune, this alternative forum provides reassurance and shields them from additional legal expenses."
    ]
  },
  {
    id: 'times-of-india-reference',
    title: 'Learning from Maharashtra Settlement Campaigns and Government Programs',
    level: 2,
    content: [
      "The Nashik District Central Cooperative Bank’s August 2025 one time settlement scheme made headlines in the Times of India when three defaulters collectively deposited twenty one point three lakh rupees on the first day. The campaign targeted fifty six thousand seven hundred accounts worth more than two thousand three hundred crore rupees. Although NDCC is a cooperative bank, the program signalled to NBFC boards that rural Maharashtra borrowers respond positively when lenders offer realistic closure terms. CredSettle leverages that precedent during negotiations with vehicle and agro equipment NBFCs, demonstrating that settlements keep borrowers eligible for future credit and unlock stored collateral for productive use.",
      "Maharashtra also runs district level Lok Adalats under the Legal Services Authorities Act 1987. These forums dispose of pre litigation disputes, including NBFC loan defaults, in a single sitting at the district court. Awards issued by Lok Adalats carry the same weight as civil court decrees. CredSettle prepares joint applications when both borrower and NBFC agree on amounts but need judicial recognition to prevent future claims. We have closed cases in Mumbai, Pune, and Nagpur Lok Adalats within sixty days of filing, saving clients from prolonged hearings and reducing legal expenses."
    ]
  },
  {
    id: 'financial-recovery',
    title: 'Rebuilding Finances After a Successful Settlement',
    level: 2,
    content: [
      "Settlement is the beginning of financial recovery, not the end. Maharashtra residents have access to state backed financial literacy programs through the Maharashtra State Rural Livelihood Mission and Pune’s Bharatiya Reserve Bank Staff College outreach initiatives. CredSettle guides clients toward structured budgeting, encouraging them to maintain separate business and personal accounts if they operate small enterprises. We recommend setting up automated transfers to recurring deposit accounts in cooperative banks or small finance banks based in Maharashtra so that surplus cash does not get consumed by daily needs.",
      "Credit rebuilding requires deliberate steps. Within thirty days of settlement, we obtain written confirmation that the NBFC has updated credit bureaus with the settled status. We then instruct clients to check Experian, TransUnion CIBIL, Equifax, and CRIF High Mark reports for accuracy. Any discrepancies are challenged through online dispute portals with scanned copies of settlement letters and payment proofs. Customers in Mumbai and Pune can visit the RBI Lok Seva Kendra for assistance if bureaus delay corrections. When scores stabilise, we introduce secured credit cards or gold backed credit lines, ensuring repayment behaviour rebuilds trust before applying for larger facilities.",
      "For business owners, we create simple cash flow dashboards that plot receivables, payables, and statutory dues. Pune based manufacturers receive templates synced with GST filings, while Nagpur transporters track trip wise fuel and toll expenses. Agricultural borrowers in Vidarbha and Marathwada evaluate crop planning with the help of Krishi Vigyan Kendra advisories and crop insurance options. The objective is to prevent relapse into high cost NBFC borrowing unless it directly supports revenue growth. CredSettle’s financial coaches conduct quarterly check ins for the first twelve months to ensure that settlement savings translate into long term stability.",
      "We also connect clients to Maharashtra Industrial Development Corporation subsidy desks, District Industries Centres, and cooperative credit societies that offer lower cost refinancing once settlement is complete. Access to these programs helps entrepreneurs restart operations without resorting to another expensive NBFC loan. Our support team keeps a calendar of application deadlines and trains clients to submit paperwork correctly so that subsidies or working capital limits arrive on schedule."
    ]
  },
  {
    id: 'documents-checklist',
    title: 'Documents and Evidence Borrowers Should Prepare Before Negotiations',
    level: 2,
    content: [
      "CredSettle’s success rate improves when borrowers organise their paperwork meticulously. Begin with identity and address proofs such as Aadhaar, PAN, voter identification, ration card, or passport copies. Attach photographs of co applicants and guarantors where applicable. Maintain a file that lists loan account numbers, sanction amounts, outstanding balances, interest rates, and last payment dates for each NBFC. The more precise the data, the easier it becomes to work through eligibility checks and settlement calculations.",
      "Financial hardship documentation strengthens the proposal. Salaried clients should collect employment termination letters, salary reduction emails, or Form 16 statements showing income drops. Business owners can furnish GST returns, profit and loss statements, cancelled purchase orders, and audited balance sheets illustrating revenue declines. Farmers may gather crop damage inspection reports from talathi officers, crop insurance claim acknowledgements, and mandi receipts reflecting lower commodity prices. Healthcare emergencies require medical prescriptions, hospital discharge summaries, and pharmacy bills. Each document validates the borrower’s inability to repay under original terms.",
      "Communication records also matter. Save call recordings, SMS screenshots, WhatsApp chats, and email chains from NBFC representatives. Note down dates, times, and names of recovery agents who visited residences or offices. When harassment breaches RBI norms, these logs become evidence that pushes NBFCs toward settlement. Finally, maintain proof of funds that can be deployed once the settlement amount is approved. This may include bank statements, fixed deposit closure letters, or commitments from family members willing to contribute. Showing financial readiness during negotiations encourages NBFCs to seal the deal quickly."
    ]
  },
  {
    id: 'settlement-timeline',
    title: 'Expected Settlement Timeline and Milestones for Maharashtra Cases',
    level: 2,
    content: [
      "Week one focuses on onboarding, documentation, and harassment control. We issue representation letters to NBFCs, verify account statements, and create a case file. If recovery calls persist, we forward warning letters referencing the RBI Fair Practices Code and Maharashtra Police directions on respectful recovery. Borrowers experience the first wave of relief at this stage.",
      "Week two and three involve detailed financial assessment and negotiation proposal drafting. Our analysts compute settlement bands using outstanding principal, accrued interest, penalty charges, and the NBFC’s provisioning status. We prepare multiple scenarios, for example lump sum payment within fifteen days or staggered payment across two months. Borrowers review these options, confirm affordability, and authorise us to submit formal requests.",
      "Week four through six usually deliver the first offer from the NBFC credit or recovery team. We examine the wording, negotiate for waiver of penal charges, and ensure no residual liability clause remains. If the NBFC counters with a higher amount than planned, we supply additional hardship evidence or escalate to senior officials. Once both sides agree, we finalise payment instructions, transfer funds through traceable banking channels, and secure acknowledgement receipts. Within thirty days of full payment we monitor issuance of No Objection Certificates, lien release letters, and credit bureau updates. Most Maharashtra cases close within forty five to ninety days, with priority cases in high pressure legal stages closing even faster when documentation is watertight."
    ]
  },
  {
    id: 'action-plan',
    title: 'Action Plan for Borrowers Ready to Pursue NBFC Settlement',
    level: 2,
    content: [
      "Borrowers who want to begin the settlement journey in Maharashtra should follow a disciplined checklist. First, collect all loan agreements, sanctioned letters, repayment schedules, and communication logs. Second, prepare a hardship brief that outlines job loss, medical emergencies, business downturns, or crop failure with concrete dates and documentation. Third, determine the maximum lump sum or staggered payment capacity without disrupting essential living expenses. Fourth, sign a mandate with CredSettle so that our team can represent you with lenders and authorities. Fifth, avoid unverified agents who promise unrealistic haircuts or ask for cash. Sixth, stay responsive during negotiations because NBFC approval windows often close within seven to ten business days. Finally, once settlement is complete, retain all documentation digitally and physically, and ensure property documents or vehicle RCs are collected within the RBI mandated thirty days."
    ]
  },
  {
    id: 'case-stories',
    title: 'Case Stories from Maharashtra Clients',
    level: 2,
    content: [
      "A Pune based precision engineering firm borrowed one crore rupees through two NBFCs to upgrade CNC machinery in 2022. When export orders from Europe stalled in 2024, the firm’s monthly instalments of seven lakh rupees became unsustainable. CredSettle negotiated with Tata Capital and an allied co lending partner, reducing the outstanding to forty two lakh rupees payable over four structured tranches. We aligned payments with new purchase orders from an automotive OEM, prevented litigation in the Pune civil court, and secured a no objection certificate within thirty five days of the final remittance.",
      "In Nagpur, a farmer cooperative financed three harvesters and one cold storage unit through Mahindra Finance and a regional NBFC. Erratic monsoon rains cut yields by half, and the cooperative defaulted on six instalments. Our team secured certification from the agricultural department documenting crop loss, gathered Panchayat resolutions supporting settlement, and negotiated a fifty eight percent reduction. The NBFC released hypothecation on tractors and the cold storage plant, allowing the cooperative to lease equipment to neighbouring villages during the next season and stabilise income.",
      "A Mumbai based hospitality entrepreneur accumulated personal loans, business loans, and credit card conversions worth seventy five lakh rupees across five NBFCs. After the 2023 slowdown in corporate events, cash flow dried up. CredSettle filed harassment complaints with the Mumbai Police social media response unit when recovery agents began tagging the borrower publicly on Instagram. We consolidated the portfolio into a composite settlement of twenty nine lakh rupees, structured across a ninety day window. The entrepreneur relaunched operations with a leaner business model and now maintains timely EMI payments with a nationalised bank.",
      "Another success story comes from Kolhapur where a family owned transport firm had six vehicles financed through Shriram Finance and Cholamandalam. A bridge closure on the Pune Bengaluru highway disrupted freight routes and left the fleet idle for three months. We negotiated a moratorium during the disruption, followed by a fifty one percent settlement on accumulated dues. The lender reinstated normal repayment schedules for the remaining vehicles, preventing repossession and enabling the family to restore operations once infrastructure reopened."
    ]
  },
  {
    id: 'final-thoughts',
    title: 'Take the Next Step with CredSettle',
    level: 2,
    content: [
      "Debt stress can feel isolating, especially in Maharashtra where lenders move fast and economic volatility swings between urban consumption and rural agriculture. CredSettle’s Maharashtra desk exists to restore balance. We combine local insight, RBI regulatory mastery, district specific documentation, and structured negotiation to protect borrowers from runaway interest and intimidation. When you are ready, book a consultation, share your documents securely, and let our specialists convert confusion into a clear plan. Settlements are not shortcuts; they are disciplined financial resolutions that preserve dignity, unlock future credit access, and stabilise homes and businesses. CredSettle is ready to champion your case.",
      "Our consultations remain confidential and focus on actionable steps rather than generic advice. Whether you live in Mumbai’s suburbs, Pune’s industrial clusters, or smaller towns across Vidarbha, you can expect the same structured methodology, transparent fee model, and post settlement support. Reach out before legal pressure builds further; early intervention gives us more room to negotiate and protects your family, business, and assets."
    ]
  }
];

function MaharashtraPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = useMemo(
    () =>
      mainSections.map((section) => ({
        id: section.id,
        text: section.title,
        level: section.level
      })),
    []
  );

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
              "radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)",
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
                alt="Maharashtra NBFC Loan Settlement"
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
                    "0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset"
                }}
              >
                Speak With Our Maharashtra Team
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
              <TableOfContents headings={headings} />
            </div>

            <div className="w-full" style={{ minWidth: '0' }}>
              {mainSections.map((section) => (
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
              <FAQWithSchema faqs={faqs} title="NBFC Loan Settlement Maharashtra" />

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
                      Ready to Close Your NBFC Account Legally
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Share your loan statements and hardship proof. Our Maharashtra desk will draft a negotiation plan within forty eight hours.
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
                      Book Your Free Consultation
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

export default MaharashtraPageClient;


