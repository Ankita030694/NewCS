// Import comprehensive bank content generator for car loan settlement
import { generateBankContent, generateBankSlug, getBankMetaTitle } from './bank-content-generator';

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
    title: `${bankName} Car Loan Settlement - How to Settle Your Car Loan Dues with ${bankName} Legally in India (2025 Guide)`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: `Struggling with ${bankName} car loan dues? CredSettle helps you legally settle car loan debt under RBI guidelines. Protect your vehicle and achieve debt freedom with expert legal assistance.`,
    heroTitle: `${bankName} Car Loan Settlement`,
    heroDescription: `Expert legal help to settle your ${bankName} car loan dues through RBI One-Time Settlement (OTS). Stop harassment, prevent car repossession, and get debt free with CredSettle.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Car loan EMIs can become hard to manage over time. When ${bankName} car loan dues grow, a legal settlement offers a clean way out. CredSettle helps borrowers negotiate RBI-compliant settlements with ${bankName}. We typically reduce outstanding dues by 30% to 70% while keeping your car safe from repossession.`,
    understandingSettlement: generatedContent?.understandingSettlement || `Settling a car loan with ${bankName} follows RBI One-Time Settlement rules. Borrowers negotiate a reduced one-time payment to close the loan permanently. CredSettle starts formal talks with ${bankName} with full hardship proof. Once settled, ${bankName} issues a No Dues Certificate and removes the vehicle hypothecation.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides complete legal help for ${bankName} car loan settlements. Our lawyers analyze your loan account and build a strong hardship case. We negotiate directly with ${bankName} to get a 40% to 60% debt waiver. We also stop recovery agent calls and prevent vehicle seizure. You settle your loan safely for around 50% of total dues, including our fees.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling with ${bankName} will show as Settled on your CIBIL report. Your score may drop by 50 to 150 points at first. However, this is temporary and much better than ongoing default or vehicle seizure. With CredSettle credit rebuilding steps, scores usually recover to 650-700 within 2 years.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle offers trusted legal help for ${bankName} car loan settlements. Our banking lawyers know RBI rules and vehicle finance laws. We have settled hundreds of ${bankName} car loans with average waivers of 40% to 55%. We handle all bank talks and protect your car ownership.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Consultation. Contact CredSettle for a free initial review. Step 2: Lawyer Assignment. Our banking lawyer examines your ${bankName} car loan details. Step 3: OTS Proposal. We send a formal settlement proposal to ${bankName}. Step 4: Negotiation. Our lawyers negotiate the maximum debt waiver. Step 5: Payment and Closure. You pay the agreed amount and receive a No Dues Certificate. Step 6: Credit Rebuilding. We guide you on restoring your CIBIL score.`,
    documentsRequired: generatedContent?.documentsRequired || `Required documents include: car loan agreement copy, latest loan statement, vehicle RC copy, ID proof, address proof, income slips, default notices, and hardship proofs like medical bills. CredSettle formats all records properly for quick ${bankName} approval.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement percentage for ${bankName} car loans?`,
        answer: `${bankName} usually approves car loan settlements between 30% and 60% of total dues. CredSettle negotiates based on your financial hardship to secure the best possible waiver.`
      },
      {
        question: `Can I settle my car loan dues legally with ${bankName}?`,
        answer: `Yes, you can settle ${bankName} car loans legally under RBI One-Time Settlement rules. CredSettle helps you get a 30% to 60% waiver with full legal protection.`
      },
      {
        question: `How long does the car loan settlement process take with ${bankName}?`,
        answer: `Settling a car loan with ${bankName} takes about 45 to 90 days. Our legal team speeds up bank approvals with complete paperwork.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} car loan?`,
        answer: `Yes, your CIBIL score will recover after settlement. With good credit habits, scores usually climb to 650-700 within 2 to 3 years.`
      },
      {
        question: `Can settlement prevent vehicle repossession with ${bankName}?`,
        answer: `Yes, starting formal settlement stops repossession action in most cases. You keep your vehicle while settling the loan.`
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







