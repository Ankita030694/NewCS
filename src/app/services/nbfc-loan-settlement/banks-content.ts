import { getShortBankName, getBankH2Title, getBankH1Title } from '@/lib/seo-utils';
// Import comprehensive bank content generator for NBFC loan settlement
import { generateBankContent, generateBankSlug, getBankMetaTitle } from './bank-content-generator';

export { getShortBankName, getBankH2Title, getBankH1Title };

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
  const shortName = getShortBankName(bankName);
  const slug = bankSlug;

  // Default/fallback content structure
  const defaultContent: BankContent = {
    bankName,
    slug,
    title: `${shortName} NBFC Loan Settlement Guide | CredSettle`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: `Struggling with ${shortName} NBFC loan dues? CredSettle helps you settle loan debt legally under RBI rules. Settle up to 50% today.`,
    heroTitle: getBankH1Title(bankName, 'NBFC Loan Settlement'),
    heroDescription: `Get legal help to settle your ${shortName} NBFC loan dues. We use RBI One-Time Settlement rules. Stop recovery calls and become debt-free today.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `NBFC loan debt can become hard to manage when EMIs get too high. When ${bankName} loan dues pile up, settlement offers a clean exit. CredSettle helps borrowers across India negotiate with ${bankName}. We help reduce your total dues by 30% to 70%. You get full legal safety at every step.`,
    understandingSettlement: generatedContent?.understandingSettlement || `${bankName} loan settlement follows RBI One-Time Settlement rules. You pay a reduced lump sum to close your loan account permanently. CredSettle starts formal talks with ${bankName}. We present your financial hardship with clear proof. Once approved, you pay the agreed sum. ${bankName} then gives you a no dues certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle gives you full legal support for ${bankName} loan settlement. Our expert lawyer panel reviews your debts. We write and send a strong settlement plan. Our team handles all calls from recovery agents. We help you settle ${bankName} dues for up to 50% of the total amount. You get genuine debt relief and peace of mind.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling a loan with ${bankName} will affect your CIBIL score. Your credit report will show the account as settled. Your score may drop by 50 to 100 points for a short time. However, this is much better than missing payments forever. CredSettle gives you a clear plan to rebuild your credit score. Most clients get back to a 700+ score within 18 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India's trusted debt resolution service. Our lawyers have settled hundreds of ${bankName} loan cases. We know lender rules and settlement limits well. We protect you from unfair collection tactics. We negotiate the best possible waiver on interest and charges. We handle all paperwork so you can relax.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1. Free Consultation. Call CredSettle to discuss your ${bankName} loan debt. Step 2. Document Review. Send your loan statements and hardship proof. Step 3. Harassment Protection. Our legal team sends notices to stop collection calls. Step 4. Bank Negotiation. We talk directly to ${bankName} for the best waiver. Step 5. Payment and Closure. You pay the settlement amount and get your NOC.`,
    documentsRequired: generatedContent?.documentsRequired || `You need a few basic documents for ${bankName} loan settlement. 1. Recent loan statements. 2. PAN card and Aadhaar card. 3. Proof of income or bank statements. 4. Proof of financial hardship, like medical bills or job loss letters. 5. Any notices sent by ${bankName}. Our team helps you organize all documents quickly.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement amount for ${bankName} NBFC loans?`,
        answer: `${bankName} loan settlements usually range from 30% to 60% of total dues. The exact discount depends on how long the account has been overdue. CredSettle works to get you the highest possible discount.`
      },
      {
        question: `Can I settle my NBFC loan dues legally with ${bankName}?`,
        answer: `Yes. Settling loan dues is completely legal under RBI rules. CredSettle negotiates a formal One-Time Settlement with ${bankName} for you.`
      },
      {
        question: `How long does the NBFC loan settlement process take with ${bankName}?`,
        answer: `Most ${bankName} loan settlements take 30 to 60 days. Our legal team speeds up the process by submitting complete paperwork early.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} loan?`,
        answer: `Yes. Your score will drop initially, but it recovers over time. By following CredSettle’s credit rebuilding tips, you can reach 700+ within two years.`
      },
      {
        question: `Do NBFCs settle differently than banks?`,
        answer: `NBFCs have their own internal policies and approval levels. CredSettle understands how ${bankName} works and negotiates the best terms for you.`
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

