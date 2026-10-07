// Import comprehensive content generator
import { generateBusinessLoanContent } from './content-generator';

export interface StateContent {
  stateName: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle?: string;
  heroTitle: string;
  heroDescription: string;
  whyBusinessLoanSettlement?: string;
  commonBusinessLoanProblems?: string;
  credsettleOverview?: string;
  rbiCompliantProcess?: string;
  negotiationHelp?: string;
  legalSupport?: string;
  benefits?: string;
  rbiGuidelines?: string;
  stepByStepGuide?: string;
  caseStudy?: string;
  finalThoughts?: string;
  faqs: Array<{ question: string; answer: string }>;
  keywords: string[];
  majorCities?: string[];
  infographicSuggestion?: string;
}

export const statesContent: Record<string, StateContent> = {
  'maharashtra': {
    stateName: 'Maharashtra',
    slug: 'maharashtra',
    title: 'Business Loan Settlement in Maharashtra | CredSettle',
    metaDescription: 'Expert business loan settlement in Maharashtra. Get RBI-compliant OTS solutions for SMEs and MSMEs in Mumbai and Pune. Settle debt and stop harassment.',
    heroTitle: 'Business Loan Settlement in Maharashtra - Protect Your Enterprise',
    heroDescription: 'Professional business loan settlement in Maharashtra. Settle dues, protect assets, and discharge guarantees under RBI rules.',
    ...generateBusinessLoanContent('maharashtra') as any,
    faqs: [
      {
        question: 'Can secured business loans be settled in Maharashtra?',
        answer: 'Yes, secured business loans can be settled in Maharashtra. CredSettle works with lenders to release your assets as part of the agreement. Most lenders prefer a settlement over lengthy court cases.'
      },
      {
        question: 'Will settlement discharge director guarantees in Mumbai and Pune?',
        answer: 'Yes. We negotiate director guarantee discharge into the settlement terms. This protects your personal assets and credit score.'
      },
      {
        question: 'What documentation is required for business loan settlement?',
        answer: 'You need simple business records: recent bank statements, profit and loss statements, GST papers, and proof of revenue drops.'
      },
      {
        question: 'How long does business loan settlement take in Maharashtra?',
        answer: 'Settlement in Maharashtra usually takes 3 to 6 months depending on the number of lenders.'
      },
      {
        question: 'Can my business continue operations during settlement?',
        answer: 'Yes. CredSettle halts recovery calls and asset seizures right away so your company can operate normally.'
      }
    ],
    keywords: ['business loan settlement Maharashtra', 'SME loan settlement Mumbai', 'MSME debt settlement Pune', 'business OTS Maharashtra', 'RBI compliant business settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'Business Loan Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert business loan settlement in Karnataka. RBI-compliant OTS for startups and SMEs in Bangalore and Mysore. Protect assets and settle debt.',
    heroTitle: 'Business Loan Settlement in Karnataka - Rebuild with Confidence',
    heroDescription: 'Professional settlement services for Karnataka businesses. Resolve debt and protect company assets with legal help.',
    ...generateBusinessLoanContent('karnataka') as any,
    faqs: [
      {
        question: 'Do you handle startup loan settlements in Bangalore?',
        answer: 'Yes, CredSettle handles startup loan settlements across Bangalore. We present funding cycles and cash flow challenges to lenders for favorable settlement terms.'
      },
      {
        question: 'Can working capital facilities be settled along with term loans?',
        answer: 'Yes, CredSettle coordinates multi-facility settlements. We negotiate term loans, credit lines, and machinery loans together for a complete debt resolution.'
      },
      {
        question: 'Will settlement affect my company’s ability to get future credit?',
        answer: 'Settlement causes a short-term drop in credit scores. With CredSettle’s guidance, most firms rebuild their credit profile within 18 to 24 months.'
      },
      {
        question: 'What if my lender threatens SARFAESI proceedings in Karnataka?',
        answer: 'Our legal team can pause SARFAESI enforcement through formal legal representations. We show the bank that a settlement yields faster recovery than forced auctions.'
      },
      {
        question: 'Can we settle loans from multiple NBFCs operating in Karnataka?',
        answer: 'Yes. We run parallel talks with all NBFCs to ensure a unified settlement and full account closure.'
      }
    ],
    keywords: ['business loan settlement Karnataka', 'startup loan settlement Bangalore', 'SME debt settlement Karnataka', 'business OTS Bangalore', 'RBI compliant settlement Karnataka']
  }
};

// Generate slug from state name
export function generateSlug(stateName: string): string {
  return stateName.toLowerCase().replace(/\s+/g, '-');
}

// Get state content by slug
export function getStateContent(slug: string): StateContent | null {
  return statesContent[slug] || null;
}

// Get all state slugs
export function getAllStateSlugs(): string[] {
  return Object.keys(statesContent);
}

// Generate default content for states not in the custom content
export function generateDefaultContent(stateName: string, slug: string): StateContent {
  // Use comprehensive content generator
  const comprehensiveContent = generateBusinessLoanContent(slug) as Partial<StateContent>;

  // Fallback content if generator doesn’t have state info
  const cityName = stateName.split(' ')[0];
  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `Business Loan Settlement in ${stateName} - Settle Legally | CredSettle`,
    metaTitle: `Business Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert business loan settlement services in ${stateName}. Get RBI-compliant OTS solutions for SMEs, MSMEs. Stop harassment and achieve debt freedom.`,
    heroTitle: `Business Loan Settlement in ${stateName}`,
    heroDescription: `Get trusted legal help to settle your ${stateName} business loan dues. Cut your debt, stop agent calls, and protect your assets under RBI rules.`,
    whyBusinessLoanSettlement: comprehensiveContent.whyBusinessLoanSettlement || `Business loan settlement helps firms in ${stateName} clear heavy debt. When sales drop, monthly EMIs drain your cash. A One-Time Settlement (OTS) under RBI rules lets you pay a lower lump sum. CredSettle helps ${stateName} businesses cut total debt by 30% to 70%. We stop recovery calls right away, protect company assets, and release personal guarantees. This gives you a fresh start so your business can grow again.`,
    commonBusinessLoanProblems: comprehensiveContent.commonBusinessLoanProblems || `Companies in ${stateName} face real loan hurdles. Cash flow drops make fixed EMIs hard to pay. Debt payments eat up funds needed for stock and staff pay. Recovery calls and site visits hurt your daily work. Director guarantees also put personal homes at risk. CredSettle solves these problems. We stop agent calls within 48 hours, keep your property safe, and win large debt waivers.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle is the top business debt settlement firm in ${stateName}. We help firms of all sizes settle unpaid loans. Our team has deep banking skill and strong lender ties. We talk directly with banks and NBFCs across ${stateName} to win 40% to 60% debt waivers. We keep your property safe, release personal guarantees, and give you full legal closure.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our business loan settlement process follows clear RBI rules. We check your loan papers and bank records. We build a simple hardship file that explains your drop in revenue. Then, we send a formal settlement offer to your bank. Once approved, the bank signs off on debt waivers and releases your assets. You get a No Dues Certificate as soon as you pay.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle's legal team knows bank settlement policies in ${stateName}. We know how credit heads review settlement files. We highlight local market trends to prove your financial stress. Our lawyers show verified business records to win maximum debt cuts. If you owe money to several banks, we settle all of them at the same time.`,
    legalSupport: comprehensiveContent.legalSupport || `CredSettle gives your ${stateName} business complete legal safety. Our lawyers know banking rules and borrower rights inside out. We send legal notices to stop recovery calls and site visits right away. We review all loan contracts to keep your property and machinery safe. Every settlement letter is checked by our lawyers before you pay.`,
    benefits: comprehensiveContent.benefits || `Choosing CredSettle gives your ${stateName} firm major benefits: (1) Instant relief through a 30% to 70% debt cut. (2) Asset safety that keeps your business running. (3) Full release of personal guarantees for owners. (4) An end to recovery calls within 48 hours. (5) Full help for multi-bank loans under one plan. (6) Official No Dues Certificates for total peace of mind.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI rules protect businesses facing money trouble. The RBI Master Direction lets banks offer One-Time Settlements. The Fair Practices Code bans abusive recovery tactics and threats. Borrowers have the legal right to ask for a fair settlement and receive written closure papers. CredSettle makes sure your rights are fully honored.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Settling a business loan with CredSettle in ${stateName} is simple: Step 1: Free Consultation to review your loan balance. Step 2: Account Review of your records and assets. Step 3: Hardship File Prep under RBI rules. Step 4: Legal Shield to stop agent calls and visits. Step 5: Direct Talks with senior bank heads. Step 6: OTS Letter with your approved discount. Step 7: Final Payment and NOC to clear all debt for good.`,
    caseStudy: comprehensiveContent.caseStudy || `A small factory in ${stateName} owed ₹80 lakhs to two banks. Due to a market dip, sales fell by half and EMI payments stopped. Recovery agents began calling and threatened property seizure. CredSettle stepped in, stopped all calls within 48 hours, and negotiated with both banks. After five months, we won a 60% debt waiver. The owner settled the entire debt for ₹32 lakhs in easy parts and received a No Dues Certificate.`,
    finalThoughts: comprehensiveContent.finalThoughts || `Business loan settlement through CredSettle gives ${stateName} firms a clean path out of debt. You do not have to let heavy EMIs ruin your hard work. Our legal team leads all talks, stops recovery calls, and protects your assets. Contact CredSettle today for a free, private consultation. Let our banking lawyers help you win financial freedom with dignity.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `Can secured business loans be settled in ${stateName}?`,
        answer: `Yes, secured business loans can be settled. CredSettle negotiates terms that protect your company property and machinery. Once you pay the settlement amount, the bank releases all collateral liens.`
      },
      {
        question: `Will settlement discharge director guarantees in ${stateName}?`,
        answer: `Yes. We ensure that director guarantee release is written into the settlement agreement. This protects your personal property and credit profile.`
      },
      {
        question: `What documentation is required for business settlement?`,
        answer: `You need basic business records: loan agreements, account statements, GST or registration papers, director ID proofs, bank statements, and proof of financial hardship.`
      },
      {
        question: `How long does business loan settlement take in ${stateName}?`,
        answer: `Settling a business loan usually takes 3 to 6 months depending on loan size and number of lenders.`
      },
      {
        question: `Can my business continue operations during settlement?`,
        answer: `Yes. CredSettle stops recovery calls and asset seizures right away so you can continue running your business normally.`
      },
      {
        question: `Which lenders do you work with in ${stateName}?`,
        answer: `We work with all major banks and NBFCs in ${stateName}, including SBI, HDFC, ICICI, Axis Bank, and leading non-banking lenders.`
      }
    ],
    keywords: comprehensiveContent.keywords || [`business loan settlement ${stateName}`, `SME loan settlement ${stateName}`, `MSME debt settlement ${stateName}`, `business OTS ${stateName}`, `RBI compliant business settlement`],
    majorCities: comprehensiveContent.majorCities || [cityName],
    infographicSuggestion: comprehensiveContent.infographicSuggestion || `Infographic showing the RBI-compliant business loan settlement process in ${stateName}, highlighting debt reduction, asset protection, and guarantee discharge procedures.`
  };

  // Merge comprehensive content with defaults
  return {
    ...defaultContent,
    ...comprehensiveContent,
    stateName: comprehensiveContent.stateName || stateName,
    slug: comprehensiveContent.slug || slug,
    title: comprehensiveContent.title || defaultContent.title,
    metaTitle: comprehensiveContent.metaTitle || defaultContent.metaTitle,
    metaDescription: comprehensiveContent.metaDescription || defaultContent.metaDescription,
    heroTitle: comprehensiveContent.heroTitle || defaultContent.heroTitle,
    heroDescription: comprehensiveContent.heroDescription || defaultContent.heroDescription,
    faqs: comprehensiveContent.faqs || defaultContent.faqs,
    keywords: comprehensiveContent.keywords || defaultContent.keywords
  };
}

// Get state content with fallback to default
export function getStateContentWithFallback(slug: string): StateContent {
  // Ensure slug is defined and is a string
  if (!slug || typeof slug !== 'string') {
    console.error('Invalid slug provided to getStateContentWithFallback:', slug);
    // Return a default state content for safety
    return generateDefaultContent('India', 'india');
  }

  const customContent = getStateContent(slug);
  if (customContent) return customContent;

  // Generate default content
  const stateName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return generateDefaultContent(stateName, slug);
}

