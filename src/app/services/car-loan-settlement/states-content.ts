import { generateCarLoanContent } from './content-generator';

export interface StateContent {
  stateName: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle?: string;
  heroTitle: string;
  heroDescription: string;
  whyCarLoanSettlement?: string;
  commonCarLoanProblems?: string;
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
    title: 'Car Loan Settlement in Maharashtra | CredSettle',
    metaDescription: 'Expert car loan settlement services in Maharashtra. Get RBI-compliant vehicle loan settlements, protect your car, and achieve financial freedom with CredSettle across Mumbai, Pune, and all districts.',
    heroTitle: 'Car Loan Settlement in Maharashtra - Drive Toward Financial Freedom',
    heroDescription: 'Professional car loan settlement services for Maharashtra vehicle owners. Reduce debt, prevent repossession, and restore financial stability.',
    ...generateCarLoanContent('maharashtra') as any,
    faqs: [
      {
        question: 'Can I settle my car loan in Maharashtra without losing my vehicle?',
        answer: 'Yes, you can keep your vehicle in most cases. CredSettle negotiates with the lender to stop repossession and lower your total debt by 40% to 65%.'
      },
      {
        question: 'How long does car loan settlement take in Mumbai/Pune?',
        answer: 'Most car loan settlements in Maharashtra take 45 to 90 days. The timeline depends on how fast the bank reviews your records and approves the proposal.'
      },
      {
        question: 'Will car loan settlement affect my CIBIL score in Maharashtra?',
        answer: 'Your loan is marked as Settled on your credit report. This causes a minor temporary drop in your score. With good credit habits, your score can reach 650-700 within 18 to 24 months.'
      },
      {
        question: 'What vehicle types does CredSettle handle for settlement in Maharashtra?',
        answer: 'We settle loans for cars, SUVs, two-wheelers, commercial vehicles, and electric cars. We work with all major banks and NBFCs across Maharashtra.'
      },
      {
        question: 'How much does CredSettle charge for car loan settlement services in Maharashtra?',
        answer: 'We charge fees only after a successful settlement with no advance payment. Contact us for a free case review and custom quote.'
      }
    ],
    keywords: ['car loan settlement Maharashtra', 'vehicle loan settlement Mumbai', 'car loan OTS Pune', 'auto loan settlement Maharashtra', 'RBI compliant car loan settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'Car Loan Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert car loan settlement services in Karnataka. Get RBI-compliant vehicle loan settlements, protect your car, and achieve financial freedom with CredSettle across Bangalore, Mysore, and all districts.',
    heroTitle: 'Car Loan Settlement in Karnataka - Drive Toward Financial Freedom',
    heroDescription: 'Professional car loan settlement services for Karnataka vehicle owners. Reduce debt, prevent repossession, and restore financial stability.',
    ...generateCarLoanContent('karnataka') as any,
    faqs: [
      {
        question: 'Can I settle my car loan in Karnataka without losing my vehicle?',
        answer: 'Yes, CredSettle helps you keep your car. We stop repossession action during negotiations and secure a 40% to 65% debt waiver.'
      },
      {
        question: 'How long does car loan settlement take in Bangalore/Mysore?',
        answer: 'Car loan settlements in Karnataka usually take 45 to 90 days. We manage all talks with the bank to finish the process as fast as possible.'
      },
      {
        question: 'Will car loan settlement affect my CIBIL score in Karnataka?',
        answer: 'Settlement shows as Settled on your CIBIL report. While your score dips temporarily, you can rebuild it to 650-700 within 2 years.'
      },
      {
        question: 'Does CredSettle handle electric vehicle loan settlements in Bangalore?',
        answer: 'Yes, we handle EV loan settlements for electric cars and scooters. We work with all banks and NBFCs offering green vehicle loans.'
      },
      {
        question: 'How much does CredSettle charge for car loan settlement services in Karnataka?',
        answer: 'We do not charge upfront fees. Our fee is payable only after your settlement is approved and signed.'
      }
    ],
    keywords: ['car loan settlement Karnataka', 'vehicle loan settlement Bangalore', 'car loan OTS Mysore', 'auto loan settlement Karnataka', 'RBI compliant car loan settlement']
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
  const comprehensiveContent = generateCarLoanContent(slug) as Partial<StateContent>;
  const cityName = stateName.split(' ')[0];

  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `Car Loan Settlement in ${stateName} - Settle Vehicle Loans Legally | CredSettle`,
    metaTitle: `Car Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert car loan settlement services in ${stateName}. Get RBI-compliant vehicle loan settlements, protect your car, and achieve financial freedom with CredSettle.`,
    heroTitle: `Car Loan Settlement in ${stateName}`,
    heroDescription: `Professional car loan settlement services for vehicle owners in ${stateName}. Reduce debt, prevent repossession, and restore financial stability.`,
    whyCarLoanSettlement: comprehensiveContent.whyCarLoanSettlement || `For car owners in ${stateName} struggling with monthly EMIs, a legal settlement offers a fresh start. It protects your car from repossession and lowers your total debt. CredSettle negotiates an RBI One-Time Settlement (OTS) that cuts total dues by 40% to 65%.`,
    commonCarLoanProblems: comprehensiveContent.commonCarLoanProblems || `Car loan borrowers in ${stateName} often face income drops, rising living costs, and high interest rates. Vehicle value drops fast while loan balances stay high. CredSettle helps you resolve these problems through legal bank negotiations.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle is the trusted car loan settlement expert for ${stateName}. We help vehicle owners settle their debt under RBI rules. Our banking lawyers negotiate average waivers of 45% to 65% while keeping cars safe from seizure.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our settlement process follows RBI guidelines step by step. We review your case, stop recovery agent calls, negotiate with your lender, and secure a complete No Dues Certificate with hypothecation removal.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle lawyers know the settlement rules of all major lenders. We use strong hardship proofs and banking rules to get you the lowest settlement terms.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal team protects you from lender harassment and repossession threats. We verify all settlement letters and ensure full legal protection under RBI rules.`,
    benefits: comprehensiveContent.benefits || `CredSettle offers key benefits: immediate stop to recovery calls, car protection, 40% to 65% debt reduction, no upfront fees, and support in rebuilding your credit score.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI guidelines require banks to treat borrowers fairly during financial distress. Lenders must offer settlement options and follow proper procedures before taking any asset action.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Step 1: Free consultation and case review. Step 2: Legal notice to stop collection calls. Step 3: Hardship file preparation. Step 4: Bank negotiations (45 to 90 days). Step 5: Settlement agreement and payment. Step 6: No Dues Certificate and hypothecation removal.`,
    caseStudy: comprehensiveContent.caseStudy || `A borrower in ${cityName} had a car loan balance of ₹8.5 lakh on a car worth ₹5 lakh. CredSettle negotiated an approved settlement of ₹3.8 lakh, delivering a 55% waiver. The client kept the car and cleared the loan with full legal closure.`,
    finalThoughts: comprehensiveContent.finalThoughts || `If you are struggling with car loan EMIs in ${stateName}, a legal settlement provides a practical way out. CredSettle stops collection pressure and helps you settle your loan safely. Contact us today for a free consultation.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does car loan settlement work in ${stateName}?`,
        answer: `CredSettle negotiates a One-Time Settlement (OTS) with your bank in ${stateName}. This reduces your total loan balance by 40% to 65% and clears your debt legally.`
      },
      {
        question: `Can I keep my vehicle after settlement in ${stateName}?`,
        answer: `Yes, in most cases you keep your vehicle. We put repossession on hold and structure a settlement that protects your car ownership.`
      },
      {
        question: `Will settlement affect my CIBIL score in ${stateName}?`,
        answer: `Settlement shows as Settled on your CIBIL report. While your score drops temporarily, you can rebuild it to 650-700 within 18 to 24 months.`
      },
      {
        question: `What types of vehicle loans can CredSettle settle in ${stateName}?`,
        answer: `We settle loans for cars, SUVs, two-wheelers, and commercial vehicles from all major banks and NBFCs in ${stateName}.`
      },
      {
        question: `How much does car loan settlement cost in ${stateName}?`,
        answer: `We charge fees only after your settlement is approved. There are no upfront fees. Contact us for a free consultation.`
      }
    ],
    keywords: comprehensiveContent.keywords || [`car loan settlement in ${stateName}`, `vehicle loan settlement ${stateName}`, `car loan OTS ${stateName}`, `auto loan settlement ${stateName}`, `RBI compliant car loan settlement ${stateName}`],
    majorCities: comprehensiveContent.majorCities || [cityName],
    infographicSuggestion: comprehensiveContent.infographicSuggestion || `Infographic showing the RBI-compliant car loan settlement process in ${stateName}, highlighting key steps from initial consultation through final vehicle hypothecation removal, with state-specific statistics.`
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







