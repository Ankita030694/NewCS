import { getShortBankName, getBankH2Title, getBankH1Title } from '@/lib/seo-utils';
// Import comprehensive bank content generator for business loan settlement
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
  'Ahmedabad Mercantile Co-operative Bank',
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

// Generate compliant meta description (140-146 chars, <= 960px)
function getBusinessBankMetaDesc(shortName: string, bankName: string): string {
  const candidates = [
    `Settle ${shortName} business loan dues under RBI rules with CredSettle. Cut debt up to 50%, protect assets & clear dues safely.`,
    `Settle ${shortName} business loan dues legally under RBI rules. Cut debt up to 50%, protect assets & resolve debt with CredSettle.`,
    `Resolve ${shortName} business loan debt legally under RBI rules. Stop harassment, save up to 50% & get your NOC with CredSettle.`,
    `Struggling with ${shortName} business loan dues? Settle legally under RBI rules. Cut debt by up to 50%, protect assets & settle with CredSettle.`,
    `Struggling with ${bankName} business loan dues? Settle legally under RBI rules. Cut debt by up to 50%, protect assets, and become debt-free with CredSettle.`
  ];
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 146) return c;
  }
  for (const c of candidates) {
    if (c.length >= 140 && c.length <= 150) return c;
  }
  return candidates[0];
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
  const shortName = getShortBankName(bankName);
  const slug = safeSlug;

  // Default/fallback content structure with high readability
  const defaultContent: BankContent = {
    bankName,
    slug,
    title: `${shortName} Business Loan Settlement Guide | CredSettle`,
    metaTitle: generatedContent?.metaTitle || getBankMetaTitle(bankName),
    metaDescription: generatedContent?.metaDescription || getBusinessBankMetaDesc(shortName, bankName),
    heroTitle: getBankH1Title(bankName, 'Business Loan Settlement'),
    heroDescription: `Get legal help to settle your ${shortName} business loan under RBI rules. Protect your business assets, save money, and clear debt fast.`,
    whyChooseSettlement: generatedContent?.whyChooseSettlement || `Business loan debt can hurt even the strongest firms. If your ${bankName} loan EMIs are too high, you do not have to close down your business. Cash flow drops and late client payments are common. When loan dues take up your cash flow, you need a safe way out. A One-Time Settlement (OTS) with ${bankName} gives you a fresh start. Under RBI rules, you can settle your unpaid loan for a lower lump sum. Most settlements cut the total dues by 30% to 70%. This stops recovery calls right away. It also keeps your business assets safe. You can protect your firm and get back on track in peace.`,
    understandingSettlement: generatedContent?.understandingSettlement || `A business loan settlement with ${bankName} follows RBI One-Time Settlement rules. This path lets a business close an old loan by paying a lower sum. Our legal team sends a formal proposal to ${bankName}. We share clear proof of your business hardship. This includes lower sales or client payment delays. The bank reviews your file and agrees to waive a big part of your dues. Once approved, you get a formal settlement letter. After you pay the agreed sum, the bank gives you a No Dues Certificate and closes the loan for good.`,
    howCredSettleHelps: generatedContent?.howCredSettleHelps || `CredSettle gives you full legal aid to settle your ${bankName} business loan. Our panel of experienced banking lawyers manages the whole process for you. First, we review your loan papers, bank statements, and cash flow. Next, we prepare a strong hardship plan under RBI rules. We submit this directly to ${bankName} and lead all talks. We work hard to cut your total dues by up to 50% or more, including our fees. If you owe ₹50 lakhs, we aim to settle the full amount for ₹25 lakhs or less. We also stop recovery agent calls within 48 hours. When the settlement is complete, we secure your official No Dues Certificate (NOC) and release your collateral.`,
    cibilImpact: generatedContent?.cibilImpact || `Settling a business loan with ${bankName} will affect your credit score in the short term. The bank marks the loan status as "Settled" on credit bureau reports. This can lower credit scores by 50 to 100 points initially. But this dip is only temporary. A settled loan is far better than an open default, which ruins your credit for years. CredSettle helps you rebuild your credit systematically. By following our simple credit plan, most business owners see their score rise back to 700+ within 12 to 24 months.`,
    whyChooseCredSettle: generatedContent?.whyChooseCredSettle || `CredSettle is India's trusted firm for ${bankName} business loan settlements. Our team has deep legal skill and years of banking experience. We follow RBI rules so your settlement is safe, valid, and permanent. We offer honest advice and clear fees with no hidden costs. We have settled hundreds of bank loans across India. We stop harassment fast, protect your assets, and win maximum debt relief.`,
    stepByStepProcess: generatedContent?.stepByStepProcess || `Step 1: Free Call. Contact us for a free review of your ${bankName} loan. We check your dues and explain your settlement options.
Step 2: Case Review. Our legal team checks your loan papers and bank records to build a strong hardship case.
Step 3: OTS Filing. We draft a formal OTS proposal and send it to ${bankName} under RBI rules.
Step 4: Legal Talks. Our lawyers negotiate directly with the bank to get the lowest payout.
Step 5: Written Deal. ${bankName} issues a formal written settlement letter with the agreed amount.
Step 6: Account Closed. You pay the agreed sum. The bank gives you a No Dues Certificate and frees your assets.`,
    documentsRequired: generatedContent?.documentsRequired || `To settle your ${bankName} business loan, you need basic records:
1. Original loan agreement with ${bankName}.
2. Latest loan account statement showing total dues.
3. Business registration proof like GST or shop act license.
4. PAN and Aadhaar cards of business owners or partners.
5. Bank statements for the last 6 to 12 months.
6. Recent income tax returns or profit and loss sheets.
7. Any demand letters or legal notices from the bank.
8. Proof of business loss or lower cash flow.
CredSettle checks and files all papers for quick bank approval.`,
    faqs: generatedContent?.faqs || [
      {
        question: `How much discount can I get on a ${bankName} business loan settlement?`,
        answer: `Most firms settle with ${bankName} for 30% to 60% of total dues. The exact discount depends on loan age and proof of loss. CredSettle works to get you the lowest legal amount.`
      },
      {
        question: `Can I settle a secured business loan with ${bankName} and keep my assets?`,
        answer: `Yes. You can settle secured loans. Our legal team protects your tools and property. Once you pay the settlement sum, the bank removes all liens on your assets.`
      },
      {
        question: `How long does the loan settlement take with ${bankName}?`,
        answer: `Settling a business loan with ${bankName} takes about 60 to 90 days. Unsecured loans close faster. Cases with property take a bit longer. We track each step to save time.`
      },
      {
        question: `Will my business credit rating recover after settling with ${bankName}?`,
        answer: `Yes, your credit score will recover. The bureau marks the loan as "Settled". With CredSettle's step-by-step credit rebuild guide, most owners reach a 700+ score in 12 to 24 months.`
      },
      {
        question: `How can CredSettle help me get a better deal with ${bankName}?`,
        answer: `Our banking lawyers know ${bankName}'s exact settlement rules. We build a solid hardship case and handle all talks. On average, we help clients save up to 50% or more on outstanding debt, including our fees.`
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




