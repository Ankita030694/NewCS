// Import comprehensive bank content generator
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
  whyChooseSettlement: string; // H2: Why People Choose Loan Settlement with [Bank Name]
  understandingSettlement: string; // H2: Understanding [Bank Name] Loan Settlement Process
  howCredSettleHelps: string; // H2: How CredSettle Helps You Settle [Bank Name] Loans Legally
  cibilImpact: string; // H2: Impact of Loan Settlement on Your CIBIL Score
  whyChooseCredSettle: string; // H2: Why Choose CredSettle for [Bank Name] Loan Settlement
  stepByStepProcess: string; // H2: Step-by-Step Process to Start Your [Bank Name] Loan Settlement
  documentsRequired: string; // H2: Documents Required for [Bank Name] Loan Settlement
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

// Generate keywords for a bank
function generateKeywords(bankName: string): string[] {
  const baseKeywords = [
    `${bankName} loan settlement`,
    `${bankName} credit card settlement`,
    `${bankName} personal loan settlement`,
    `${bankName} settlement process`,
    `settle loans with ${bankName}`,
    `loan settlement company in India`,
    `RBI one-time settlement guidelines`,
    `legal loan settlement help`,
    `lawyer panel for loan settlement`,
    `debt resolution legal experts`,
    `OTS process ${bankName}`,
    `how to clear ${bankName} loans legally`,
    `settle credit card dues ${bankName}`,
    `${bankName} settlement advice`,
    `consumer loan settlement lawyers`,
    `loan settlement agreement`,
    `RBI-approved debt resolution`,
    `settle personal loans ethically`
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
    title: `${bankName} Loan Settlement - How to Settle Your Loan with ${bankName} Legally in India (2025 Guide)`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: `Struggling with ${bankName} loan dues? CredSettle helps you legally settle personal, business, or credit card loans under RBI guidelines. Get 50% settlement support today!`,
    heroTitle: `${bankName} Loan Settlement`,
    heroDescription: `Expert legal assistance to settle your ${bankName} loans through RBI-compliant One-Time Settlement (OTS). Stop harassment and achieve debt freedom with CredSettle’s lawyer panel.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Loan debt can be tough to handle when unexpected life events happen. If you cannot pay your ${bankName} EMIs on time, loan settlement offers a legal exit. CredSettle helps you negotiate an RBI-compliant settlement. We reduce your debt by 30% to 70% and stop recovery harassment.`,
    understandingSettlement: generatedContent?.understandingSettlement || `${bankName} follows RBI rules for one-time settlements (OTS). This allows you to close your loan with a single reduced payment. Our lawyers submit your hardship records to the bank. Once paid, the bank issues a final No Dues Certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides end-to-end legal support for ${bankName} loan settlements. We review your loan details and build a strong hardship file. Our team negotiates directly with bank officers to cut your total dues by up to 50%.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling your ${bankName} loan marks the account as settled. This is much better than ongoing default. We also guide you on simple steps to rebuild your credit score above 700 over the next 12 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India’s top debt settlement service. Our expert lawyers understand bank settlement rules. We handle all lender talks, stop agent calls, and ensure complete legal protection.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free consultation and case review. Step 2: Legal notice to halt agent harassment. Step 3: Hardship file submission to ${bankName}. Step 4: One-time settlement negotiation. Step 5: Official sanction letter from the bank. Step 6: Payment and final closure certificate.`,
    documentsRequired: generatedContent?.documentsRequired || `Key documents include: loan account statements, PAN card, Aadhaar card, income proof, and hardship evidence like medical bills or job loss letters.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement percentage for ${bankName}?`,
        answer: `${bankName} usually accepts settlements between 30% and 60% of total dues. The exact discount depends on your financial hardship.`
      },
      {
        question: `Can I settle my credit card dues legally with ${bankName}?`,
        answer: `Yes. Credit card dues with ${bankName} can be settled legally under RBI rules. Most clients get 40% to 60% debt reduction.`
      },
      {
        question: `How long does the settlement process take with ${bankName}?`,
        answer: `Settlement typically takes 45 to 90 days. Recovery calls usually stop within 48 hours of our legal notice.`
      },
      {
        question: `Will my CIBIL score recover after settling with ${bankName}?`,
        answer: `Yes. With disciplined financial habits, your score can recover to 700+ within 12 to 24 months.`
      },
      {
        question: `How can CredSettle help me get a better deal with ${bankName}?`,
        answer: `Our experienced legal team negotiates directly with bank managers to secure maximum discounts on principal and interest charges.`
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







