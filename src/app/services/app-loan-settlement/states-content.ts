import { generateAppLoanContent } from './content-generator';

export interface StateContent {
  stateName: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle?: string;
  heroTitle: string;
  heroDescription: string;
  whyAppLoanSettlement?: string;
  commonAppLoanProblems?: string;
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
    title: 'App Loan Settlement in Maharashtra | CredSettle',
    metaDescription: 'Expert instant loan app settlement services in Maharashtra. Stop harassment, protect data privacy, and achieve RBI-compliant debt resolution with CredSettle across Mumbai, Pune, and all districts.',
    heroTitle: 'App Loan Settlement in Maharashtra - Stop Harassment, Settle Legally',
    heroDescription: 'Professional instant loan app settlement services for Maharashtra borrowers. Stop harassment in 48 hours, reduce debt by 60%, restore peace.',
    ...generateAppLoanContent('maharashtra') as any,
    faqs: [
      {
        question: 'Can CredSettle stop app loan harassment in 48 hours in Mumbai/Pune?',
        answer: 'Yes, we send formal legal notices to app lenders and recovery agents. This stops phone calls, messages, and contact harassment within 24 to 48 hours.'
      },
      {
        question: 'How much debt reduction can I expect on app loan settlements in Maharashtra?',
        answer: 'Most clients in Maharashtra save 50% to 75% on total dues. For example, a debt of ₹100,000 across multiple apps usually settles for ₹30,000 to ₹40,000.'
      },
      {
        question: 'Will app loan settlement affect my CIBIL score in Maharashtra?',
        answer: 'Many loan apps do not report to CIBIL. For registered apps that do report, the loan is marked as Settled. We guide you on simple steps to restore your score.'
      },
      {
        question: 'Can CredSettle help if I have loans from 5-7 different apps in Maharashtra?',
        answer: 'Yes, multi-app settlement is our main specialty. We negotiate with all your loan apps at the same time to stop all collection calls together.'
      },
      {
        question: 'How much does app loan settlement cost in Maharashtra?',
        answer: 'We charge fees only after recovery calls stop and settlements are approved. There are no upfront fees. Contact us for a free case review.'
      }
    ],
    keywords: ['app loan settlement Maharashtra', 'instant loan settlement Mumbai', 'digital lending settlement Pune', 'stop app harassment Maharashtra', 'RBI compliant app loan settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'App Loan Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert instant loan app settlement services in Karnataka. Stop harassment, protect data privacy, and achieve RBI-compliant debt resolution with CredSettle across Bangalore, Mysore, and all districts.',
    heroTitle: 'App Loan Settlement in Karnataka - Stop Harassment, Settle Legally',
    heroDescription: 'Professional instant loan app settlement services for Karnataka borrowers. Stop harassment in 48 hours, reduce debt by 60%, restore peace.',
    ...generateAppLoanContent('karnataka') as any,
    faqs: [
      {
        question: 'Can CredSettle stop app loan harassment in 48 hours in Bangalore?',
        answer: 'Yes, our lawyers issue formal legal notices immediately. This stops collection agent calls and protects your contact list within 24 to 48 hours.'
      },
      {
        question: 'How much debt reduction can I expect on app loan settlements in Karnataka?',
        answer: 'Borrowers in Karnataka typically save 50% to 75% on their total app loan balance. We negotiate directly with lenders to secure the highest waiver.'
      },
      {
        question: 'Will app loan settlement affect my CIBIL score in Karnataka?',
        answer: 'Registered apps mark the account as Settled on your CIBIL report. While your score drops temporarily, you can rebuild it to 650-700 within 2 years.'
      },
      {
        question: 'How does CredSettle protect my data privacy during app loan settlement?',
        answer: 'We demand an immediate stop to contact list access under data privacy laws. We also ensure that lenders delete your private data upon settlement.'
      },
      {
        question: 'How much does app loan settlement cost in Karnataka?',
        answer: 'We do not charge any advance fees. Our fee is payable only after your settlement is successfully completed.'
      }
    ],
    keywords: ['app loan settlement Karnataka', 'instant loan settlement Bangalore', 'digital lending settlement Mysore', 'stop app harassment Karnataka', 'RBI compliant app loan settlement']
  }
};

export function generateSlug(stateName: string): string {
  return stateName.toLowerCase().replace(/\s+/g, '-');
}

export function getStateContent(slug: string): StateContent | null {
  return statesContent[slug] || null;
}

export function getAllStateSlugs(): string[] {
  return Object.keys(statesContent);
}

export function generateDefaultContent(stateName: string, slug: string): StateContent {
  const comprehensiveContent = generateAppLoanContent(slug) as Partial<StateContent>;
  const cityName = stateName.split(' ')[0];

  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `App Loan Settlement in ${stateName} - Stop Harassment Legally | CredSettle`,
    metaTitle: `App Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert instant loan app settlement services in ${stateName}. Stop harassment in 48 hours, protect data privacy, and achieve RBI-compliant debt resolution with CredSettle.`,
    heroTitle: `App Loan Settlement in ${stateName}`,
    heroDescription: `Professional instant loan app settlement services for borrowers in ${stateName}. Stop harassment in 48 hours, reduce debt significantly, and restore peace of mind.`,
    whyAppLoanSettlement: comprehensiveContent.whyAppLoanSettlement || `For borrowers in ${stateName} facing aggressive collection calls and high app loan interest, a legal settlement provides fast relief. CredSettle stops agent harassment within 48 hours and cuts your total debt by 50% to 75%.`,
    commonAppLoanProblems: comprehensiveContent.commonAppLoanProblems || `App loan borrowers in ${stateName} often deal with high weekly interest rates and collection calls to phone contacts. CredSettle solves these issues through formal legal intervention and direct lender negotiations.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle is the trusted app loan debt resolution service in ${stateName}. We help borrowers stop digital harassment and settle unmanageable loans under RBI rules with average debt waivers of 50% to 70%.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our settlement process follows RBI guidelines step by step. We send legal notices to stop calls, review your true loan balances, negotiate with lenders, and secure final No Dues Certificates.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle lawyers negotiate with multiple digital lenders at the same time. We know lender policies and RBI rules to secure the highest possible debt waivers.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal team protects you from collection harassment and data privacy violations. We ensure every settlement agreement is legally binding and permanently closes your accounts.`,
    benefits: comprehensiveContent.benefits || `CredSettle offers essential benefits: harassment stops within 48 hours, privacy protection, 50% to 75% debt reduction, multi-app settlement plans, and zero upfront fees.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI guidelines protect borrowers from unfair recovery practices. Lenders cannot harass contacts or use threatening language. CredSettle ensures your rights are protected throughout the settlement.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Step 1: Free consultation and case review. Step 2: Legal notices to stop harassment within 48 hours. Step 3: Loan account mapping. Step 4: Multi-app negotiations (45 to 90 days). Step 5: Final settlement payment and closure letters.`,
    caseStudy: comprehensiveContent.caseStudy || `A borrower in ${cityName} had debts across six apps totaling ₹1.2 lakh and faced daily collection calls. CredSettle stopped all calls within 48 hours and settled the entire debt for ₹38,000, delivering a 68% savings.`,
    finalThoughts: comprehensiveContent.finalThoughts || `If you are dealing with app loan harassment in ${stateName}, taking action today is important. CredSettle stops collection calls and settles your debt safely. Contact us today for a free consultation.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does app loan settlement work in ${stateName}?`,
        answer: `CredSettle sends legal notices to stop collection calls and negotiates with all your loan apps at once. This reduces your total debt by 50% to 75% under RBI rules.`
      },
      {
        question: `Can CredSettle stop harassment in 48 hours in ${stateName}?`,
        answer: `Yes, our legal notices invoke RBI guidelines and data privacy rules. This stops recovery calls and messages within 24 to 48 hours.`
      },
      {
        question: `How much debt reduction can I expect in ${stateName}?`,
        answer: `Most clients in ${stateName} achieve 50% to 75% debt reductions on their total outstanding app loan balance.`
      },
      {
        question: `Can CredSettle handle multiple app loans simultaneously in ${stateName}?`,
        answer: `Yes, we specialize in multi-app cases. We negotiate with all your lenders together in a single coordinated plan.`
      },
      {
        question: `How much does app loan settlement cost in ${stateName}?`,
        answer: `We charge fees only after your settlement is approved. There are no upfront fees. Contact us for a free consultation.`
      }
    ],
    keywords: comprehensiveContent.keywords || [`app loan settlement in ${stateName}`, `instant loan settlement ${stateName}`, `stop app harassment ${stateName}`, `digital lending settlement ${stateName}`, `RBI compliant app loan settlement ${stateName}`],
    majorCities: comprehensiveContent.majorCities || [cityName],
    infographicSuggestion: comprehensiveContent.infographicSuggestion || `Infographic showing the app loan harassment cessation and RBI-compliant settlement process in ${stateName}, highlighting key steps from crisis intervention through final closure with harassment protection guarantees.`
  };

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

export function getStateContentWithFallback(slug: string): StateContent {
  if (!slug || typeof slug !== 'string') {
    console.error('Invalid slug provided to getStateContentWithFallback:', slug);
    return generateDefaultContent('India', 'india');
  }

  const customContent = getStateContent(slug);
  if (customContent) return customContent;

  const stateName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return generateDefaultContent(stateName, slug);
}
