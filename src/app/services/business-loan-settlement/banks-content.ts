// Import comprehensive bank content generator for business loan settlement
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
  whyChooseSettlement: string; // H2: Why People Choose Business Loan Settlement with [Bank Name]
  understandingSettlement: string; // H2: Understanding [Bank Name] Business Loan Settlement Process
  howCredSettleHelps: string; // H2: How CredSettle Helps You Settle [Bank Name] Business Loans Legally
  cibilImpact: string; // H2: Impact of Business Loan Settlement on Your Credit Rating
  whyChooseCredSettle: string; // H2: Why Choose CredSettle for [Bank Name] Business Loan Settlement
  stepByStepProcess: string; // H2: Step-by-Step Process to Start Your [Bank Name] Business Loan Settlement
  documentsRequired: string; // H2: Documents Required for [Bank Name] Business Loan Settlement
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

// Generate keywords for a bank (business loan settlement specific)
function generateKeywords(bankName: string): string[] {
  const baseKeywords = [
    `${bankName} business loan settlement`,
    `${bankName} corporate loan settlement`,
    `${bankName} business loan dues settlement`,
    `${bankName} settlement process`,
    `settle business loans with ${bankName}`,
    `business loan settlement company in India`,
    `RBI one-time settlement guidelines`,
    `legal business loan settlement help`,
    `lawyer panel for business loan settlement`,
    `corporate debt resolution legal experts`,
    `OTS process ${bankName}`,
    `how to clear ${bankName} business loans legally`,
    `settle business loan dues ${bankName}`,
    `${bankName} business loan settlement advice`,
    `corporate loan settlement lawyers`,
    `business loan settlement agreement`,
    `RBI-approved debt resolution`,
    `settle business loans ethically`
  ];
  return baseKeywords;
}

// Generate content for a bank (with fallback)
export function getBankContentWithFallback(bankSlug: string): BankContent {
  const safeSlug = typeof bankSlug === 'string' && bankSlug.length > 0 ? bankSlug : 'bank';
  const generatedContent = generateBankContent(safeSlug) as Partial<BankContent>;

  // Find bank name from slug
  const bankEntry = allBankNames.find(
    bank => generateBankSlug(bank) === safeSlug
  );

  const bankName = bankEntry || safeSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  const slug = safeSlug;

  // Default/fallback content structure
  const defaultContent: BankContent = {
    bankName,
    slug,
    title: `${bankName} Business Loan Settlement - How to Settle Your Business Loan with ${bankName} Legally in India (2025 Guide)`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: `Struggling with ${bankName} business loan dues? CredSettle helps you legally settle business loans under RBI guidelines. Get 50% settlement support and protect your assets today!`,
    heroTitle: `${bankName} Business Loan Settlement`,
    heroDescription: `Get expert legal help to settle your ${bankName} business loan under RBI rules. Protect your assets, restore cash flow, and become debt-free.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Business loan debt can hurt any company. When your ${bankName} EMIs become too high to pay, a One-Time Settlement (OTS) offers a legal way out. CredSettle negotiates with ${bankName} to reduce your debt by 30% to 70%. This protects your business assets and lets you operate in peace.`,
    understandingSettlement: generatedContent?.understandingSettlement || `Settling a loan with ${bankName} follows RBI rules. Our legal team shows proof of your business hardship to the bank. ${bankName} reviews your case and agrees to waive a large portion of your dues. Once you pay the reduced sum, you receive a No Dues Certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides complete legal support for ${bankName} business loan settlements. We review your loan papers, build a strong case, and lead all talks. We help settle your dues for up to 50% of the balance, including our fees. We also stop recovery calls within 48 hours.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling with ${bankName} marks the loan as "Settled" on credit reports. This causes a temporary dip in credit scores. However, with our credit repair advice, most owners rebuild their scores back to 700+ within 12 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India's trusted loan settlement company. We have settled hundreds of loans with ${bankName}. Our experienced lawyers protect your rights, stop harassment, and secure the maximum debt waiver for your business.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Consultation. Contact us to discuss your ${bankName} loan. Step 2: File Review. We check your accounts and hardship proof. Step 3: OTS Filing. We submit a formal proposal to ${bankName}. Step 4: Negotiation. Our lawyers negotiate for the highest waiver. Step 5: Approval. The bank issues an official settlement letter. Step 6: Closure. You pay the reduced amount and receive your NOC.`,
    documentsRequired: generatedContent?.documentsRequired || `Key documents include: (1) Original ${bankName} loan agreement. (2) Recent loan statement showing total dues. (3) Business registration papers. (4) Director or owner PAN and Aadhaar cards. (5) Bank statements for 6 to 12 months. (6) Recent balance sheets or tax returns. (7) Notices from ${bankName}. (8) Hardship proof.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the minimum settlement percentage for ${bankName} business loans?`,
        answer: `${bankName} usually settles business loans for 30% to 60% of total dues. The exact discount depends on your loan age and verified financial hardship.`
      },
      {
        question: `Can I settle my secured business loan with ${bankName} while protecting assets?`,
        answer: `Yes. CredSettle negotiates terms that protect your company property and machinery. Once you complete the settlement payment, ${bankName} releases all collateral liens.`
      },
      {
        question: `How long does the business loan settlement process take with ${bankName}?`,
        answer: `Settling a business loan with ${bankName} usually takes 60 to 120 days from start to finish.`
      },
      {
        question: `Will my business credit rating recover after settling with ${bankName}?`,
        answer: `Yes. Your credit score will recover. With CredSettle's step-by-step credit rebuilding guide, most owners see their score reach 700+ within 12 to 24 months.`
      },
      {
        question: `How can CredSettle help me get a better deal with ${bankName}?`,
        answer: `Our banking lawyers know ${bankName}'s settlement limits. We build a solid hardship case and negotiate directly to get you a waiver of up to 50% or more, including our fees.`
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



