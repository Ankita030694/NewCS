// Import comprehensive bank content generator
import { generateBankContent, generateBankSlug, getBankMetaTitle, getBankMetaDescription, getShortBankName } from './bank-content-generator';

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
  'Credila Financial Services',
  'Credila',
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
  const shortName = getShortBankName(bankName);
  const slug = bankSlug;

  // Default/fallback content structure
  const defaultContent: BankContent = {
    bankName,
    slug,
    title: `${shortName} Personal Loan Settlement Guide | CredSettle`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: generatedContent?.metaDescription || getBankMetaDescription(bankName),
    heroTitle: `${shortName} Personal Loan Settlement`,
    heroDescription: `Get legal help to settle your ${shortName} personal loan dues under RBI OTS rules. Stop recovery calls and live debt free.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Loan debt can build up fast after job loss, pay cuts, or medical costs. When ${bankName} EMIs get hard to pay, legal debt settlement helps you exit safely. Under RBI OTS rules, you can cut total dues by 30% to 60%. This clears your debt for good and stops collection calls.`,
    understandingSettlement: generatedContent?.understandingSettlement || `Settling a personal loan with ${bankName} follows RBI OTS rules. It lets you close your unpaid loan with a single reduced payment. CredSettle lawyers review your money hardship and present your facts to ${bankName}. Once agreed and paid, the bank issues an official No Dues Certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle provides full legal help for ${bankName} loan settlements. Our lawyers check your loan records and build a strong hardship file. We talk directly with bank officers to cut your dues by 40% to 60%. We also send legal notices to stop recovery agent calls right away.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling a loan with ${bankName} marks your credit status as Settled. This causes a small score drop of 50 to 100 points at first. But it is much better than ongoing default. With simple credit habits and secured cards, your score can climb back to 700+ within 12 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India's top debt relief team. Our panel of lawyers knows bank laws and debt relief rules well. We manage all talks with ${bankName} directly so you do not face rude collection agents. We offer clear fees and full legal safety.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Review. Share your ${shortName} loan details with our team for a free review.
Step 2: Legal Notice. Our lawyers notify ${bankName} to stop collection agent calls.
Step 3: Hardship File. We prepare a formal settlement offer backed by your income proof.
Step 4: Bank Talks. We talk directly with ${bankName} for the best debt waiver.
Step 5: Sanction Letter. ${bankName} issues an official written OTS approval letter.
Step 6: Payment & NOC. You pay the agreed amount directly to ${bankName} and receive your No Dues Certificate.`,
    documentsRequired: generatedContent?.documentsRequired || `To settle your ${bankName} personal loan, you need basic papers: 1. Loan account statements. 2. PAN card and Aadhaar copies. 3. Income proof such as bank statements or salary slips. 4. Hardship proof such as medical bills or job loss letters. 5. Bank default notices. Our legal team helps you organize everything.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the average settlement waiver for ${shortName} loans?`,
        answer: `${bankName} usually accepts settlements with a 30% to 60% waiver on total dues. The exact discount depends on your payment delay and hardship proof.`
      },
      {
        question: `Can I settle my personal loan legally with ${shortName}?`,
        answer: `Yes. Personal loans with ${bankName} can be settled legally under RBI One-Time Settlement rules. The bank issues a formal sanction letter and closes your account upon payment.`
      },
      {
        question: `How long does the settlement process take with ${shortName}?`,
        answer: `Most personal loan settlements with ${bankName} take 45 to 90 days. Recovery calls stop fast once our legal team sends formal notice to the bank.`
      },
      {
        question: `Will my CIBIL score recover after settling with ${shortName}?`,
        answer: `Yes. Your score will show the account as settled. With on-time payments and good habits, your credit score can recover to 700+ within 12 to 24 months.`
      },
      {
        question: `How does CredSettle help me get a better deal with ${shortName}?`,
        answer: `Our legal team talks directly with bank managers to secure top waivers on interest and penalty fees with full legal safety.`
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