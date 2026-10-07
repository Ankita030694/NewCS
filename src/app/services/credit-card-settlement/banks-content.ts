// Import comprehensive bank content generator for credit card settlement
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
  whyChooseSettlement: string; // H2: Why People Choose Credit Card Settlement with [Bank Name]
  understandingSettlement: string; // H2: Understanding [Bank Name] Credit Card Settlement Process
  howCredSettleHelps: string; // H2: How CredSettle Helps You Settle [Bank Name] Credit Card Dues Legally
  cibilImpact: string; // H2: Impact of Credit Card Settlement on Your CIBIL Score
  whyChooseCredSettle: string; // H2: Why Choose CredSettle for [Bank Name] Credit Card Settlement
  stepByStepProcess: string; // H2: Step-by-Step Process to Start Your [Bank Name] Credit Card Settlement
  documentsRequired: string; // H2: Documents Required for [Bank Name] Credit Card Settlement
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

// Generate keywords for a bank (credit card settlement specific)
function generateKeywords(bankName: string): string[] {
  const baseKeywords = [
    `${bankName} credit card settlement`,
    `${bankName} card settlement`,
    `${bankName} credit card dues settlement`,
    `${bankName} settlement process`,
    `settle credit card dues with ${bankName}`,
    `credit card settlement company in India`,
    `RBI one-time settlement guidelines`,
    `legal credit card settlement help`,
    `lawyer panel for credit card settlement`,
    `debt resolution legal experts`,
    `OTS process ${bankName}`,
    `how to clear ${bankName} credit card dues legally`,
    `settle credit card dues ${bankName}`,
    `${bankName} credit card settlement advice`,
    `consumer credit card settlement lawyers`,
    `credit card settlement agreement`,
    `RBI-approved debt resolution`,
    `settle credit card dues ethically`
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
    title: `${bankName} Credit Card Settlement - Settle Dues Legally`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: `Struggling with ${bankName} credit card dues? CredSettle helps you settle card debt legally under RBI rules. Settle up to 50% today.`,
    heroTitle: `${bankName} Credit Card Settlement`,
    heroDescription: `Get legal help to settle your ${bankName} credit card dues. We use RBI One-Time Settlement rules. Stop collection calls and become debt-free today.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Credit card debt can grow very fast. High interest rates make it hard to pay off. When ${bankName} card bills pile up, settlement offers a clean exit. CredSettle helps cardholders across India negotiate with ${bankName}. We help cut your total dues by 30% to 70%. You get full legal safety at every step.`,
    understandingSettlement: generatedContent?.understandingSettlement || `${bankName} credit card settlement follows RBI rules for debt relief. You pay a reduced lump sum to close your card account permanently. CredSettle starts formal talks with ${bankName}. We present your financial hardship with clear proof. Once approved, you pay the agreed sum. ${bankName} then gives you a no dues certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle gives you full legal support for ${bankName} credit card settlement. Our expert lawyer panel reviews your debts. We write and send a strong settlement plan. Our team handles all calls from recovery agents. We help you settle ${bankName} dues for up to 50% of the total amount. You get genuine debt relief and peace of mind.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling card debt with ${bankName} will affect your CIBIL score. Your credit report will show the account as settled. Your score may drop by 50 to 100 points for a short time. However, this is much better than missing payments forever. CredSettle gives you a clear plan to rebuild your credit score. Most clients get back to a 700+ score within 18 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India's trusted debt resolution service. Our lawyers have settled hundreds of ${bankName} credit card cases. We know bank rules and settlement limits well. We protect you from unfair collection tactics. We negotiate the best possible waiver on interest and charges. We handle all paperwork so you can relax.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1. Free Consultation. Call CredSettle to discuss your ${bankName} card debt. Step 2. Document Review. Send your card statements and hardship proof. Step 3. Harassment Protection. Our legal team sends notices to stop collection calls. Step 4. Bank Negotiation. We talk directly to ${bankName} for the best waiver. Step 5. Payment and Closure. You pay the settlement amount and get your NOC.`,
    documentsRequired: generatedContent?.documentsRequired || `You need a few basic documents for ${bankName} card settlement. 1. Recent credit card statements. 2. PAN card and Aadhaar card. 3. Proof of income or bank statements. 4. Proof of financial hardship, like medical bills or job loss letters. 5. Any notices sent by ${bankName}. Our team helps you organize all documents quickly.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement amount for ${bankName} credit cards?`,
        answer: `${bankName} credit card settlements usually range from 30% to 60% of total dues. The exact discount depends on how long the account has been overdue. CredSettle works to get you the highest possible discount.`
      },
      {
        question: `Can I settle my credit card dues legally with ${bankName}?`,
        answer: `Yes. Settling credit card dues is completely legal under RBI rules. CredSettle negotiates a formal One-Time Settlement with ${bankName} for you.`
      },
      {
        question: `How long does the credit card settlement process take with ${bankName}?`,
        answer: `Most ${bankName} card settlements take 30 to 60 days. Our legal team speeds up the process by submitting complete paperwork early.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} credit card?`,
        answer: `Yes. Your score will drop initially, but it recovers over time. By following CredSettle’s credit rebuilding tips, you can reach 700+ within two years.`
      },
      {
        question: `How can CredSettle help me get a better deal with ${bankName}?`,
        answer: `CredSettle knows ${bankName} settlement policies inside out. We use legal notices and strong hardship evidence to secure maximum interest waivers for you.`
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







