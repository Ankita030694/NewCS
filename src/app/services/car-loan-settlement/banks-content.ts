// Import comprehensive bank content generator for car loan settlement
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
  whyChooseSettlement: string; // H2: Why People Choose Car Loan Settlement with [Bank Name]
  understandingSettlement: string; // H2: Understanding [Bank Name] Car Loan Settlement Process
  howCredSettleHelps: string; // H2: How CredSettle Helps You Settle [Bank Name] Car Loan Dues Legally
  cibilImpact: string; // H2: Impact of Car Loan Settlement on Your CIBIL Score
  whyChooseCredSettle: string; // H2: Why Choose CredSettle for [Bank Name] Car Loan Settlement
  stepByStepProcess: string; // H2: Step-by-Step Process to Start Your [Bank Name] Car Loan Settlement
  documentsRequired: string; // H2: Documents Required for [Bank Name] Car Loan Settlement
  faqs: Array<{ question: string; answer: string }>;
  keywords: string[];
}

// Get all bank names from BanksGrid component
const allBankNames = [
  'HDFC',
  'ICICI',
  'SBI',
  'Axis Bank',
  'Kotak Bank',
  'Punjab National Bank',
  'Bank of Baroda',
  'Union Bank of India',
  'Yes Bank',
  'Federal Bank',
  'Indian Bank',
  'South Indian Bank',
  'RBL Bank',
  'Indus Ind',
  'IDFC',
  'Standard Chartered Bank',
  'HSBC',
  'CitiBank',
  'DBS',
  'Amex',
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
  'NDX P2P PRIVATE',
  'Zype',
  'Infocredit',
  'Newtap Finance',
  'Loan in need',
  'Moneyview'
];

// Generate keywords for a bank (car loan settlement specific)
function generateKeywords(bankName: string): string[] {
  const baseKeywords = [
    `${bankName} car loan settlement`,
    `${bankName} vehicle loan settlement`,
    `${bankName} auto loan settlement`,
    `${bankName} car loan dues settlement`,
    `${bankName} settlement process`,
    `settle car loan dues with ${bankName}`,
    `car loan settlement company in India`,
    `RBI one-time settlement guidelines`,
    `legal car loan settlement help`,
    `lawyer panel for car loan settlement`,
    `debt resolution legal experts`,
    `OTS process ${bankName}`,
    `how to clear ${bankName} car loan dues legally`,
    `settle car loan dues ${bankName}`,
    `${bankName} car loan settlement advice`,
    `consumer car loan settlement lawyers`,
    `car loan settlement agreement`,
    `RBI-approved debt resolution`,
    `settle car loan dues ethically`,
    `vehicle repossession prevention`
  ];
  return baseKeywords;
}

// Generate content for a bank (with fallback)
export function getBankContentWithFallback(bankSlug: string): BankContent {
  const generatedContent = generateBankContent(bankSlug);
  
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
    title: `${bankName} Car Loan Settlement – How to Settle Your Car Loan Dues with ${bankName} Legally in India (2025 Guide)`,
    metaTitle: generatedContent?.metaTitle || `${bankName} Car Loan Settlement | Legal Help to Settle Car Loan Dues | CredSettle`,
    metaDescription: `Struggling with ${bankName} car loan dues? CredSettle helps you legally settle car loan debt under RBI guidelines. Protect your vehicle and achieve debt freedom with expert legal assistance.`,
    heroTitle: `${bankName} Car Loan Settlement – Legal & Safe Way to Settle Your Car Loan Dues in India`,
    heroDescription: `Expert legal assistance to settle your ${bankName} car loan dues through RBI-compliant One-Time Settlement (OTS). Stop harassment, prevent vehicle repossession, and achieve debt freedom with CredSettle's lawyer panel.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Car loan debt can become overwhelming when EMIs become unmanageable. When ${bankName} car loan dues accumulate, settlement offers a legal, dignified path to debt freedom while protecting your vehicle. CredSettle helps borrowers across India negotiate RBI-compliant settlements with ${bankName}, typically reducing outstanding dues by 30-70% while ensuring complete legal protection and preventing vehicle repossession.`,
    understandingSettlement: generatedContent?.understandingSettlement || `${bankName} car loan settlement follows RBI's One-Time Settlement (OTS) framework, allowing borrowers to negotiate reduced lump-sum payments to permanently close car loan accounts. CredSettle's legal team initiates formal settlement discussions with ${bankName}, presenting financial hardship cases supported by documentation. Settlement involves formal negotiation, legal documentation, structured payment schedules, and issuance of final closure letters confirming zero balance and vehicle hypothecation removal.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides end-to-end legal support for ${bankName} car loan settlements through our experienced lawyer panel. We analyze your financial situation, prepare structured OTS proposals, handle all negotiations, and guide you through payment execution and documentation. Importantly, CredSettle assists you to settle your car loan dues for up to 50% of your outstanding amount—including our fees. This means genuine debt relief with complete legal protection and vehicle ownership preservation.`,
    cibilImpact: generatedContent?.cibilImpact || `Settlement with ${bankName} will impact your CIBIL score—CredSettle provides transparent information upfront. The account status changes to "Settled," typically reducing scores by 50-150 points temporarily. However, this impact is manageable: with CredSettle's credit rehabilitation guidance, scores typically recover to 650-700+ within 2-3 years. The alternative—continuing defaults or vehicle repossession—keeps scores below 400-500 indefinitely, making recovery impossible.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle stands apart through legal expertise, RBI compliance, and client-focused service. Our lawyer panel includes experienced attorneys specializing in banking law and debt resolution. We've successfully negotiated hundreds of ${bankName} car loan settlements, achieving average principal reductions of 40-55% while ensuring complete legal closure and vehicle hypothecation removal. Our end-to-end assistance means you don't deal with recovery agents or complex documentation alone.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Initial Inquiry & Consultation — Contact CredSettle for free preliminary consultation. Step 2: Lawyer Panel Assignment & Case Analysis — Comprehensive review of your ${bankName} car loan details. Step 3: OTS Proposal Preparation & Submission — Structured proposal to ${bankName}. Step 4: Negotiation & OTS Approval — Professional negotiation handling. Step 5: Payment Execution & Settlement Completion — Guided payment and documentation. Step 6: Post-Settlement Support & Credit Rehabilitation — Credit rebuilding guidance and vehicle hypothecation removal.`,
    documentsRequired: generatedContent?.documentsRequired || `Essential documents include: original car loan agreement, latest loan statement, vehicle RC copy, identity proof, address proof, income proof, default notices, hardship documentation, bank statements, employment proof, and any previous settlement proposals. CredSettle's legal team reviews all documents and prepares them in formats preferred by ${bankName}.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement percentage for ${bankName} car loans?`,
        answer: `${bankName} typically offers car loan settlements between 25% and 70% of total outstanding, depending on loan vintage and default duration. CredSettle negotiates based on your specific case, typically achieving 40-60% reductions.`
      },
      {
        question: `Can I settle my car loan dues legally with ${bankName}?`,
        answer: `Yes, ${bankName} offers legal car loan settlement through RBI-compliant OTS programs. CredSettle helps negotiate structured settlements typically reducing dues by 30-60%, with complete legal protection.`
      },
      {
        question: `How long does the car loan settlement process take with ${bankName}?`,
        answer: `${bankName} car loan settlement timelines typically range from 45-120 days. CredSettle's experienced legal team expedites timelines through proper documentation and strategic negotiation, typically completing settlements within 60-90 days.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} car loan?`,
        answer: `Yes, CIBIL scores recover after ${bankName} car loan settlement with time and responsible credit behavior. With CredSettle's credit rehabilitation guidance, scores typically recover to 650-700+ within 2-3 years.`
      },
      {
        question: `Can settlement prevent vehicle repossession with ${bankName}?`,
        answer: `Yes, CredSettle's settlement process typically prevents vehicle repossession in 90%+ of cases by stopping repossession proceedings during negotiations and securing settlements that preserve vehicle ownership.`
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







