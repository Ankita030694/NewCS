import { getShortBankName, getBankH2Title } from '@/lib/seo-utils';
// Import comprehensive bank content generator for car loan settlement
import { generateBankContent, generateBankSlug, getBankMetaTitle, getBankMetaDescription, getShortBankName } from './bank-content-generator';

export { getShortBankName, getBankH2Title };

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
  const shortName = getShortBankName(bankName);
  const slug = bankSlug;

  // Default/fallback content structure
  const defaultContent: BankContent = {
    bankName,
    slug,
    title: `${shortName} Car Loan Settlement Guide | CredSettle`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: generatedContent?.metaDescription || getBankMetaDescription(bankName),
    heroTitle: `${shortName} Car Loan Settlement`,
    heroDescription: `Get legal help to settle your ${shortName} car loan dues under RBI One-Time Settlement rules. Stop calls, save money, and keep your car safe.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Car loan EMIs can get hard to pay when cash is tight. If you miss EMIs on your ${bankName} loan, late fees add up fast. Recovery calls can also cause daily stress. An RBI One-Time Settlement gives you a clean way out. You can cut total dues by 30% to 60%. This helps you clear the debt for good. It stops calls from agents and keeps your car safe.`,
    understandingSettlement: generatedContent?.understandingSettlement || `A car loan settlement with ${bankName} follows RBI OTS rules. It is a legal way to close your loan with a single reduced payment. CredSettle lawyers review your case. We share proof of your money hardship with the bank. Our team talks to ${bankName} to agree on a fair sum. Once paid, the bank gives you a No Dues Certificate. They also remove the bank claim from your car RC.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle gives you full legal help from start to end. Our banking lawyers check your loan details and build a strong hardship file. We deal directly with ${bankName} officials to get the best waiver for you. We also send legal notices to stop recovery agent calls. With CredSettle, you settle your loan safely for a fraction of your total dues.`,
    cibilImpact: generatedContent?.cibilImpact || `When you settle a loan with ${bankName}, your credit report will show the status as Settled. Your CIBIL score may drop by 50 to 100 points at first. But this is far better than an ongoing default or losing your car. With simple credit habits and secured cards, most borrowers raise their score to 700+ within 12 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India's trusted debt relief partner. Our panel of banking lawyers knows RBI rules and auto finance laws well. We have resolved hundreds of car loan cases with big savings for our clients. We offer clear fees, full privacy, and strong legal safety at every step.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Review. Contact CredSettle to review your ${shortName} car loan balance and hardship.
Step 2: Legal Notice. Our lawyers notify ${bankName} to stop collection agent visits.
Step 3: OTS Proposal. We draft a formal settlement offer backed by your financial proof.
Step 4: Bank Talks. We negotiate directly with ${bankName} for the lowest lump sum.
Step 5: Official Letter. ${bankName} issues an official OTS sanction letter.
Step 6: Payment and NOC. You pay the agreed sum to ${bankName} and get your No Dues Certificate.`,
    documentsRequired: generatedContent?.documentsRequired || `To start your car loan settlement with ${bankName}, you only need basic records. These include your loan account statement, vehicle RC copy, PAN card, Aadhaar card, income proof, and hardship proof such as medical bills or job loss letters. Our legal team helps you organize everything properly.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the average settlement waiver for ${shortName} car loans?`,
        answer: `${bankName} usually approves car loan settlements with a 30% to 60% waiver. The exact discount depends on your hardship and delay. Our lawyers work to get you the highest possible relief.`
      },
      {
        question: `Can I settle my car loan legally with ${shortName}?`,
        answer: `Yes. You can settle your ${bankName} car loan legally under RBI One-Time Settlement rules. The bank gives you a formal sanction letter and closes your account upon payment.`
      },
      {
        question: `How long does the settlement take with ${shortName}?`,
        answer: `The car loan settlement process with ${bankName} usually takes 45 to 90 days. Recovery calls stop much sooner once our lawyers send formal notice to the bank.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${shortName} car loan?`,
        answer: `Yes. Your score will show the account as settled. With on-time payments and good habits, your credit score can recover to 700+ within 12 to 24 months.`
      },
      {
        question: `Can settlement prevent my car from being seized by ${shortName}?`,
        answer: `Yes. Starting formal legal settlement talks with ${bankName} halts repossession actions in most cases. You get to keep your car while resolving your debt.`
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







