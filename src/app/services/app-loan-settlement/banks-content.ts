// Import comprehensive bank content generator for app loan settlement
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
  whyChooseSettlement: string; // H2: Why People Choose App Loan Settlement with [Bank Name]
  understandingSettlement: string; // H2: Understanding [Bank Name] App Loan Settlement Process
  howCredSettleHelps: string; // H2: How CredSettle Helps You Settle [Bank Name] App Loan Dues Legally
  cibilImpact: string; // H2: Impact of App Loan Settlement on Your CIBIL Score
  whyChooseCredSettle: string; // H2: Why Choose CredSettle for [Bank Name] App Loan Settlement
  stepByStepProcess: string; // H2: Step-by-Step Process to Start Your [Bank Name] App Loan Settlement
  documentsRequired: string; // H2: Documents Required for [Bank Name] App Loan Settlement
  faqs: Array<{ question: string; answer: string }>;
  keywords: string[];
}

// Get all app-based lender names (primarily fintech and app-based NBFCs)
const allBankNames = [
  // Popular Fintech & Digital Lenders (App-based)
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
  // Other App-based NBFCs & Financial Institutions
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
  // P2P & Other App-based NBFCs
  'NDX P2P PRIVATE',
  'Zype',
  'Infocredit',
  'Newtap Finance',
  'Loan in need',
  'Moneyview'
];

// Generate keywords for a bank (app loan settlement specific)
function generateKeywords(bankName: string): string[] {
  const baseKeywords = [
    `${bankName} app loan settlement`,
    `${bankName} loan settlement`,
    `${bankName} app loan dues settlement`,
    `${bankName} settlement process`,
    `settle app loan dues with ${bankName}`,
    `app loan settlement company in India`,
    `RBI one-time settlement guidelines`,
    `legal app loan settlement help`,
    `lawyer panel for app loan settlement`,
    `debt resolution legal experts`,
    `OTS process ${bankName}`,
    `how to clear ${bankName} app loan dues legally`,
    `settle app loan dues ${bankName}`,
    `${bankName} app loan settlement advice`,
    `consumer app loan settlement lawyers`,
    `app loan settlement agreement`,
    `RBI-approved debt resolution`,
    `settle app loan dues ethically`,
    `app loan policy settlement`,
    `stop harassment from ${bankName}`,
    `${bankName} recovery agent harassment`,
    `legal protection from ${bankName} harassment`
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
    title: `${bankName} App Loan Settlement: How to Settle Your App Loan Dues with ${bankName} Legally in India (2025 Guide)`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: `Struggling with ${bankName} app loan dues and harassment? CredSettle helps you legally settle app loan debt under RBI guidelines. Stop harassment, navigate app loan policies, and achieve debt freedom with expert legal assistance.`,
    heroTitle: `${bankName} App Loan Settlement`,
    heroDescription: `Expert legal help to settle your ${bankName} app loan dues through RBI One-Time Settlement (OTS). Stop harassment, protect your privacy, and get debt free with CredSettle.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `App loan dues can grow rapidly with high interest charges. When ${bankName} loan payments become hard to manage, an RBI-compliant settlement provides a legal way out. CredSettle helps borrowers negotiate with ${bankName} to reduce dues by 30% to 70% and stop recovery harassment immediately.`,
    understandingSettlement: generatedContent?.understandingSettlement || `Settling an app loan with ${bankName} follows RBI One-Time Settlement rules. Borrowers negotiate a reduced lump-sum payment to close the account permanently. CredSettle starts formal discussions with ${bankName} using full hardship documentation. Once paid, the lender issues an official No Dues Certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides complete legal help for ${bankName} app loan settlements. Our banking lawyers examine your loan statements and build a strong hardship file. We negotiate directly with ${bankName} for a 40% to 60% debt waiver. We also take over recovery calls to protect your peace of mind. You settle your loan for about 50% of total dues, including our fees.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling with ${bankName} shows as Settled on your CIBIL report. Your score may drop slightly by 50 to 150 points at first. However, this is temporary and much safer than continuous default. With CredSettle credit rebuilding steps, scores usually climb back to 650-700 within 2 years.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle offers trusted legal help for ${bankName} app loan settlements. Our lawyers know digital lending policies and RBI regulations. We have settled hundreds of ${bankName} loans with average debt reductions of 40% to 55%. We stop harassment and protect your privacy from day one.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Consultation. Contact CredSettle for a free review. Step 2: Lawyer Assignment. Our banking lawyer examines your ${bankName} loan details. Step 3: OTS Proposal. We send a formal settlement proposal to ${bankName}. Step 4: Negotiation. Our lawyers negotiate the maximum waiver. Step 5: Payment and Closure. You pay the agreed amount and receive a No Dues Certificate. Step 6: Credit Rebuilding. We guide you on restoring your CIBIL score.`,
    documentsRequired: generatedContent?.documentsRequired || `Required documents include: loan agreement copy, latest statement, ID proof, address proof, income slips, default notices, and harassment proof like message screenshots. CredSettle formats all records properly for fast digital approval.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement percentage for ${bankName} app loans?`,
        answer: `${bankName} usually approves app loan settlements between 30% and 60% of total dues. CredSettle negotiates directly with the lender to secure the highest possible waiver.`
      },
      {
        question: `Can I settle my app loan dues legally with ${bankName}?`,
        answer: `Yes, you can settle ${bankName} app loans legally under RBI One-Time Settlement rules. CredSettle helps you secure a 30% to 60% debt waiver with full legal protection.`
      },
      {
        question: `How long does the app loan settlement process take with ${bankName}?`,
        answer: `Settling an app loan with ${bankName} takes about 45 to 90 days. Our legal team speeds up approvals with complete documentation.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} app loan?`,
        answer: `Yes, your CIBIL score will recover after settlement. With good credit habits, scores usually rise to 650-700 within 2 to 3 years.`
      },
      {
        question: `How can I stop harassment from ${bankName}?`,
        answer: `CredSettle stops collection harassment within 48 hours. Our lawyers issue formal notices and handle all recovery communications directly.`
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







