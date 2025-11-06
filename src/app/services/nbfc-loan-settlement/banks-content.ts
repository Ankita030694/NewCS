// Import comprehensive bank content generator for NBFC loan settlement
import { generateBankContent, generateBankSlug } from './bank-content-generator';

export interface BankContent {
  bankName: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroTitle: string;
  heroDescription: string;
  // Main content sections
  whyChooseSettlement: string; // H2: Why People Choose NBFC Loan Settlement with [Bank Name]
  understandingSettlement: string; // H2: Understanding [Bank Name] NBFC Loan Settlement Process
  howCredSettleHelps: string; // H2: How CredSettle Helps You Settle [Bank Name] NBFC Loan Dues Legally
  cibilImpact: string; // H2: Impact of NBFC Loan Settlement on Your CIBIL Score
  whyChooseCredSettle: string; // H2: Why Choose CredSettle for [Bank Name] NBFC Loan Settlement
  stepByStepProcess: string; // H2: Step-by-Step Process to Start Your [Bank Name] NBFC Loan Settlement
  documentsRequired: string; // H2: Documents Required for [Bank Name] NBFC Loan Settlement
  faqs: Array<{ question: string; answer: string }>;
  keywords: string[];
}

// Get all NBFC names (only NBFCs, no banks)
const allBankNames = [
  // Popular NBFCs & Finance Companies
  'Bajaj Fin',
  'Tata Capital',
  'Aditya Birla Fin',
  'L&T',
  'Muthoot Finance',
  'Shriram Finance',
  'Home credit',
  'Cholamandalam',
  'Fullerton',
  'TVS Credit',
  'Hero Fincorp',
  'Piramal',
  'InCred',
  'IIFL',
  'DMI Finance Pvt Ltd',
  'SMFG',
  // Popular Fintech & Digital Lenders (NBFCs)
  'Paytm',
  'PayU',
  'Cred',
  'Navi',
  'Groww',
  'Mobikwik',
  'Slice',
  'KreditBee',
  'MoneyTap',
  'Early Salary',
  'LoanTap',
  'Onecard',
  'Uni Card',
  'True Balance',
  'Stashfin',
  'Paysense',
  'LAZY PAY',
  'Prefr',
  'Prefer',
  // Other NBFCs & Financial Institutions
  'MAS Financial',
  'Zest Money',
  'Cashe',
  'VIVRITI',
  'UNIFINZ',
  'Finable',
  'Jupiter money',
  'UGRO Capital',
  'FREOPAY',
  'Nira Finance',
  'MPOCKET',
  'Indifi Capital Private Limited',
  'Lending Plate',
  'Tyger',
  'Cashmypayment',
  'Rupee 112',
  'Clix Capital',
  'Krzaybee',
  'Aye Finance',
  'Vivi Fin',
  'TRANSACTREE',
  'Mintifi',
  'Niro',
  'SI Creva',
  'Speedo India',
  'Snapmint',
  'FlexSalary',
  'Rupee redee',
  'Chimnay Finlease Ltd',
  'Poonawala Fin',
  'OXYZO',
  'EDGRO',
  'Bharat Loan',
  'UPMOVE',
  'Fibe',
  'BRANCH',
  'HDB',
  'CAPFLOAT',
  'Easyfincare',
  'Ashv Finance Limited',
  'Everyday loan india',
  'Payme India',
  'SmartCoin',
  'Fincfriends',
  'REFYNE',
  'Faircent Technologies India Pvt Ltd',
  'Ram FIncorp',
  'Kisetsu saison Finance',
  'DayTodayloan',
  'Epimoney Private Limited',
  'Xpressloan',
  'Borrowera',
  'LendingClub',
  'Creditt',
  'KISSHT',
  // P2P & Other NBFCs
  'NDX P2P PRIVATE',
  'Zype',
  'Infocredit',
  'Newtap Finance',
  'Loan in need',
  'Moneyview'
];

// Generate keywords for a bank (NBFC loan settlement specific)
function generateKeywords(bankName: string): string[] {
  const baseKeywords = [
    `${bankName} NBFC loan settlement`,
    `${bankName} loan settlement`,
    `${bankName} NBFC dues settlement`,
    `${bankName} settlement process`,
    `settle NBFC loan dues with ${bankName}`,
    `NBFC loan settlement company in India`,
    `RBI one-time settlement guidelines`,
    `legal NBFC loan settlement help`,
    `lawyer panel for NBFC loan settlement`,
    `debt resolution legal experts`,
    `OTS process ${bankName}`,
    `how to clear ${bankName} NBFC loan dues legally`,
    `settle NBFC loan dues ${bankName}`,
    `${bankName} NBFC loan settlement advice`,
    `consumer NBFC loan settlement lawyers`,
    `NBFC loan settlement agreement`,
    `RBI-approved debt resolution`,
    `settle NBFC loan dues ethically`,
    `NBFC policy settlement`
  ];
  return baseKeywords;
}

// Generate content for a bank (with fallback)
export function getBankContentWithFallback(bankSlug: string): BankContent {
  const generatedContent = generateBankContent(bankSlug) as Partial<BankContent>;
  
  // Find bank name from slug
  const bankEntry = allBankNames.find(
    bank => generateBankSlug(bank) === bankSlug
  );
  
  const bankName = bankEntry || bankSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const slug = bankSlug;
  
  // Default/fallback content structure
  const defaultContent: BankContent = {
    bankName,
    slug,
    title: `${bankName} NBFC Loan Settlement – How to Settle Your NBFC Loan Dues with ${bankName} Legally in India (2025 Guide)`,
    metaTitle: generatedContent?.metaTitle || `${bankName} NBFC Loan Settlement | Legal Help to Settle NBFC Loan Dues | CredSettle`,
    metaDescription: `Struggling with ${bankName} NBFC loan dues? CredSettle helps you legally settle NBFC loan debt under RBI guidelines. Navigate NBFC policies and achieve debt freedom with expert legal assistance.`,
    heroTitle: `${bankName} NBFC Loan Settlement – Legal & Safe Way to Settle Your NBFC Loan Dues in India`,
    heroDescription: `Expert legal assistance to settle your ${bankName} NBFC loan dues through RBI-compliant One-Time Settlement (OTS). Navigate NBFC-specific policies, stop harassment, and achieve debt freedom with CredSettle's lawyer panel.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `NBFC loan debt can become overwhelming when EMIs become unmanageable. When ${bankName} NBFC loan dues accumulate, settlement offers a legal, dignified path to debt freedom. CredSettle helps borrowers across India negotiate RBI-compliant settlements with ${bankName}, leveraging NBFC-specific policy knowledge to typically reduce outstanding dues by 30-70% while ensuring complete legal protection.`,
    understandingSettlement: generatedContent?.understandingSettlement || `${bankName} NBFC loan settlement follows RBI's One-Time Settlement (OTS) framework, allowing borrowers to negotiate reduced lump-sum payments to permanently close NBFC loan accounts. CredSettle's legal team leverages ${bankName}'s specific NBFC policies to initiate formal settlement discussions, presenting financial hardship cases supported by documentation. Settlement involves formal negotiation, legal documentation, structured payment schedules, and issuance of final closure letters confirming zero balance.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides end-to-end legal support for ${bankName} NBFC loan settlements through our experienced lawyer panel. We understand ${bankName}'s NBFC-specific policies, analyze your financial situation, prepare structured OTS proposals aligned with their framework, handle all negotiations, and guide you through payment execution and documentation. Importantly, CredSettle assists you to settle your NBFC loan dues for up to 50% of your outstanding amount—including our fees. This means genuine debt relief with complete legal protection.`,
    cibilImpact: generatedContent?.cibilImpact || `Settlement with ${bankName} will impact your CIBIL score—CredSettle provides transparent information upfront. The account status changes to "Settled," typically reducing scores by 50-150 points temporarily. However, this impact is manageable: with CredSettle's credit rehabilitation guidance, scores typically recover to 650-700+ within 2-3 years. The alternative—continuing defaults—keeps scores below 400-500 indefinitely, making recovery impossible.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle stands apart through legal expertise, RBI compliance, and NBFC policy mastery. Our lawyer panel includes experienced attorneys specializing in banking law and debt resolution, with deep understanding of NBFC-specific frameworks. We've successfully negotiated hundreds of ${bankName} NBFC loan settlements, achieving average principal reductions of 40-55% while ensuring complete legal closure. Our end-to-end assistance means you don't deal with recovery agents or complex documentation alone.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Initial Inquiry & Consultation — Contact CredSettle for free preliminary consultation. Step 2: Lawyer Panel Assignment & Case Analysis — Comprehensive review of your ${bankName} NBFC loan details. Step 3: OTS Proposal Preparation & Submission — Structured proposal aligned with ${bankName}'s NBFC policies. Step 4: Negotiation & OTS Approval — Professional negotiation handling. Step 5: Payment Execution & Settlement Completion — Guided payment and documentation. Step 6: Post-Settlement Support & Credit Rehabilitation — Credit rebuilding guidance.`,
    documentsRequired: generatedContent?.documentsRequired || `Essential documents include: original NBFC loan agreement, latest loan statement, identity proof, address proof, income proof, default notices, hardship documentation, bank statements, employment proof, and any previous settlement proposals. CredSettle's legal team reviews all documents and prepares them in formats preferred by ${bankName}.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement percentage for ${bankName} NBFC loans?`,
        answer: `${bankName} typically offers NBFC loan settlements between 25% and 70% of total outstanding, depending on loan vintage and default duration. CredSettle negotiates based on your specific case and ${bankName}'s NBFC policies, typically achieving 40-60% reductions.`
      },
      {
        question: `Can I settle my NBFC loan dues legally with ${bankName}?`,
        answer: `Yes, ${bankName} offers legal NBFC loan settlement through RBI-compliant OTS programs. CredSettle helps negotiate structured settlements typically reducing dues by 30-60%, with complete legal protection and NBFC policy compliance.`
      },
      {
        question: `How long does the NBFC loan settlement process take with ${bankName}?`,
        answer: `${bankName} NBFC loan settlement timelines typically range from 45-120 days. CredSettle's experienced legal team expedites timelines through proper documentation and strategic negotiation aligned with ${bankName}'s NBFC policies, typically completing settlements within 60-90 days.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} NBFC loan?`,
        answer: `Yes, CIBIL scores recover after ${bankName} NBFC loan settlement with time and responsible credit behavior. With CredSettle's credit rehabilitation guidance, scores typically recover to 650-700+ within 2-3 years.`
      },
      {
        question: `Do NBFCs settle differently than banks?`,
        answer: `Yes, NBFCs often have distinct settlement policies and frameworks. CredSettle leverages deep understanding of ${bankName}'s NBFC-specific policies to secure favorable, compliant settlements that align with their internal processes.`
      }
    ],
    keywords: generateKeywords(bankName)
  };

  // Merge generated content with defaults
  return {
    ...defaultContent,
    ...generatedContent,
    bankName,
    slug,
    keywords: generateKeywords(bankName)
  };
}

// Generate slug from bank name (exported for use in components)
export { generateBankSlug };

// Get all valid bank slugs
export function getAllBankSlugs(): string[] {
  return allBankNames.map(bank => generateBankSlug(bank));
}

