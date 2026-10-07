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
    heroDescription: `Get expert legal help to clear your ${bankName} app loan dues. Settle debt under RBI rules. Stop agent calls, protect your privacy, and live debt free with CredSettle.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `App loan debt can grow fast due to high daily interest rates. If you fall behind on your ${bankName} loan, extra fees add up quickly. Collection agents often call many times a day. An RBI One-Time Settlement (OTS) gives you a legal way out. CredSettle steps in to talk with ${bankName}. We help reduce your total dues by 30% to 70%. We stop harassment calls right away and close your account for good.`,
    understandingSettlement: generatedContent?.understandingSettlement || `Settling an app loan with ${bankName} is fully legal under RBI rules. You pay a lower one-time amount to clear your dues for good. CredSettle lawyers submit your case directly to ${bankName}. We present clear proof of your financial hardship. The lender reviews the file and approves a large waiver on the total balance. Once you pay, ${bankName} gives you an official No Dues Certificate.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle gives you full legal support to settle your ${bankName} app loan. Our team reviews your loan papers and current budget. We build a strong hardship case to show why you cannot pay in full. We negotiate directly with ${bankName} to cut 40% to 60% off your dues. We also take over all recovery calls to give you instant peace of mind. You settle your debt at a fraction of the cost and become debt free.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling your ${bankName} app loan will cause a small drop in your CIBIL score. The lender marks the account as Settled. This drop is only short term and much safer than ongoing default. Unpaid loans harm your score every month. A legal settlement stops the drop at once. CredSettle shows you simple steps to rebuild your score. Most clients reach a good 700+ score within 12 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is a trusted name for ${bankName} app loan settlements. Our legal team knows RBI lending laws and borrower rights. We have helped thousands of borrowers settle digital app loans with big waivers. We stop agent harassment from day one and protect your data privacy. We handle the entire process until you get your final closure letter.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Review. Contact CredSettle online or by phone. We review your ${bankName} loan and explain your options. Step 2: Case Review. Our legal team checks your loan file and takes over recovery calls to stop agent pressure. Step 3: Settlement Offer. We send a formal OTS proposal to ${bankName} with your hardship proof. Step 4: Negotiation. Our lawyers negotiate directly with ${bankName} to secure the highest waiver. Step 5: Payment and Closure. You pay the agreed reduced amount directly to ${bankName} and get your No Dues Certificate. Step 6: Credit Building. We guide you on simple ways to raise your CIBIL score quickly.`,
    documentsRequired: generatedContent?.documentsRequired || `To settle your ${bankName} app loan, you only need basic documents. These include your PAN card, Aadhaar card, and latest loan statement. You can also share income slips, default notices, or screenshots of agent messages. CredSettle formats all your papers properly for quick approval.`,
    faqs: generatedContent?.faqs || [
      {
        question: `What is the settlement percentage for ${bankName} app loans?`,
        answer: `${bankName} often approves settlements between 30% and 60% of total dues. The exact waiver depends on your hardship. CredSettle negotiates directly with the lender to get the lowest payoff amount.`
      },
      {
        question: `Can I settle my app loan dues legally with ${bankName}?`,
        answer: `Yes. You can settle your ${bankName} app loan legally under RBI One-Time Settlement rules. CredSettle helps you get a formal waiver and an official No Dues Certificate.`
      },
      {
        question: `How long does the ${bankName} app loan settlement process take?`,
        answer: `Settling an app loan with ${bankName} usually takes 30 to 60 days. Our legal team speeds up approvals with proper paperwork.`
      },
      {
        question: `Will my CIBIL score recover after settling my ${bankName} app loan?`,
        answer: `Yes. Your score drops slightly at first because the loan is marked as Settled. With regular on-time bills, your score can rise back to 700+ within 1 to 2 years.`
      },
      {
        question: `How can I stop harassment from ${bankName} recovery agents?`,
        answer: `CredSettle stops collection harassment within 48 hours. Our lawyers issue formal notices and handle all recovery calls for you.`
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







