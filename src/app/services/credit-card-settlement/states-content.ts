// Import comprehensive content generator
import { generateCreditCardContent } from './content-generator';

export interface StateContent {
  stateName: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle?: string;
  heroTitle: string;
  heroDescription: string;
  whyCreditCardSettlement?: string;
  commonCreditCardProblems?: string;
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
    title: 'Credit Card Settlement in Maharashtra | CredSettle',
    metaDescription: 'Expert credit card settlement services in Maharashtra. Get RBI-compliant OTS solutions, stop harassment, and achieve debt freedom with CredSettle across Mumbai, Pune, and all districts.',
    heroTitle: 'Credit Card Settlement in Maharashtra - Close Card Debt Legally',
    heroDescription: 'Professional credit card settlement services for Maharashtra residents. Stop compounding interest and secure legal debt closure.',
    ...generateCreditCardContent('maharashtra') as any,
    faqs: [
      {
        question: 'How much can I reduce my credit card debt in Maharashtra?',
        answer: 'Credit card settlements in Maharashtra typically reduce dues by 30% to 70%. For example, a ₹5 lakh debt can settle for ₹1.5 to ₹3.5 lakh. CredSettle negotiates with your bank to get the lowest possible amount.'
      },
      {
        question: 'Will credit card settlement stop interest charges?',
        answer: 'Yes. Once the settlement agreement is signed, all interest and late fees stop immediately. The bank freezes your balance at the agreed sum. This ends the compounding debt cycle.'
      },
      {
        question: 'Can CredSettle stop recovery agent calls in Mumbai and Pune?',
        answer: 'Yes. Our legal team sends cease-and-desist notices to bank recovery teams right away. Collection calls and home visits usually stop within 24 to 48 hours.'
      },
      {
        question: 'Which card issuers does CredSettle work with in Maharashtra?',
        answer: 'We settle credit cards from all major banks in Maharashtra. These include HDFC Bank, ICICI Bank, SBI Card, Axis Bank, Kotak Mahindra, and Citibank.'
      },
      {
        question: 'Will settling my credit card hurt my CIBIL score?',
        answer: 'Your credit report will show the card as settled. Your score may drop in the short term. However, our credit repair guidance helps you rebuild your score to 700+ within two years.'
      }
    ],
    keywords: ['credit card settlement Maharashtra', 'OTS Mumbai', 'credit card debt settlement Pune', 'card settlement Maharashtra', 'RBI compliant credit card settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'Credit Card Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert credit card settlement services in Karnataka. Get RBI-compliant OTS solutions across Bangalore, Mysore, and all districts. Stop harassment and achieve credit card debt freedom.',
    heroTitle: 'Credit Card Settlement in Karnataka - Close Card Debt Legally',
    heroDescription: 'Professional credit card settlement services for Karnataka residents. Stop compounding interest and secure legal debt closure.',
    ...generateCreditCardContent('karnataka') as any,
    faqs: [
      {
        question: 'How does credit card settlement work in Karnataka?',
        answer: 'Credit card settlement follows RBI guidelines. CredSettle negotiates a One-Time Settlement with your card issuer. You pay a reduced lump sum of 30% to 70% off your total balance to close the account.'
      },
      {
        question: 'Can I settle multiple credit cards at once in Bangalore?',
        answer: 'Yes. CredSettle often settles multiple cards from HDFC, ICICI, SBI, and Axis Bank at the same time. We coordinate talks with all lenders together.'
      },
      {
        question: 'Will recovery agents stop calling after I hire CredSettle?',
        answer: 'Yes. We issue legal notices to all recovery agencies. This stops harassment calls and visits within 24 to 48 hours in Karnataka.'
      },
      {
        question: 'How long does card settlement take in Karnataka?',
        answer: 'Most card settlements take 3 to 6 months. Our lawyers work to get your settlement approved quickly.'
      },
      {
        question: 'What documents do I get after settling my card?',
        answer: 'You receive an official settlement letter, payment receipt, and a No Objection Certificate (NOC) from the bank confirming full closure.'
      }
    ],
    keywords: ['credit card settlement Karnataka', 'OTS Bangalore', 'credit card debt settlement Mysore', 'card settlement Karnataka', 'RBI compliant credit card settlement']
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
  const comprehensiveContent = generateCreditCardContent(slug) as Partial<StateContent>;

  // Fallback content if generator doesn’t have state info
  const cityName = stateName.split(' ')[0];
  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `Credit Card Settlement in ${stateName} - Close Card Debt Legally | CredSettle`,
    metaTitle: `Credit Card Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert credit card settlement services in ${stateName}. Get RBI-compliant OTS solutions, stop harassment, and achieve debt freedom with CredSettle.`,
    heroTitle: `Credit Card Settlement in ${stateName}`,
    heroDescription: `Professional credit card settlement services for residents of ${stateName}. Stop compounding interest and secure legal debt closure.`,
    whyCreditCardSettlement: comprehensiveContent.whyCreditCardSettlement || `Credit card debt is hard to clear in ${stateName}. Cards charge 24% to 42% interest every year. Minimum payments barely cover the interest fees. CredSettle helps residents in ${stateName} negotiate a One-Time Settlement. We reduce total dues by 30% to 70%. We freeze extra interest and stop collection calls immediately.`,
    commonCreditCardProblems: comprehensiveContent.commonCreditCardProblems || `Cardholders in ${stateName} face several debt challenges. High compound interest makes balances grow fast. Holding multiple cards creates unmanageable bills. Recovery agents make threatening calls. CredSettle solves these issues with legal settlement under RBI rules.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle is India's leading card settlement firm. We help borrowers in ${stateName} settle debt with HDFC, ICICI, SBI Card, and other major lenders. We achieve 30% to 70% debt waivers while protecting your legal rights.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our settlement process follows RBI guidelines strictly. We audit your card fees, submit hardship proof, and negotiate with bank managers. You receive a formal closure letter confirming zero balance.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle has deep experience negotiating card settlements in ${stateName}. We submit verified hardship proof like income loss or medical bills. We secure the best possible discount from card issuers.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal team protects you from abusive recovery tactics in ${stateName}. We send legal notices to stop calls within 48 hours. We also review all settlement letters before you make any payment.`,
    benefits: comprehensiveContent.benefits || `Settling card debt with CredSettle in ${stateName} brings clear benefits. 1. 30% to 70% debt reduction. 2. Instant stop to interest charges. 3. Protection from collection harassment. 4. Complete legal closure and NOC. 5. Credit repair advice.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI rules protect cardholders in ${stateName}. Banks must disclose all interest charges clearly. Recovery agents cannot harass you or call at odd hours. Borrowers facing hardship have the right to request a settlement.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Card settlement in ${stateName} follows 6 simple steps. 1. Free debt assessment. 2. Document collection. 3. Legal notices to stop harassment. 4. Direct bank negotiation. 5. Settlement approval. 6. Payment and NOC.`,
    caseStudy: comprehensiveContent.caseStudy || `A borrower in ${stateName} had ₹12.5 lakh in card debt across four banks. Monthly interest was ₹38,000. CredSettle intervened and stopped recovery calls. We negotiated with all four banks and settled the total debt for ₹4.8 lakh. The client saved 62% and received official NOCs.`,
    finalThoughts: comprehensiveContent.finalThoughts || `Credit card settlement gives ${stateName} residents a fresh start. You do not need to struggle with endless minimum payments. Contact CredSettle today for a free debt review and start your journey to debt freedom.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does credit card settlement work in ${stateName}?`,
        answer: `Credit card settlement in ${stateName} follows RBI rules. CredSettle negotiates a One-Time Settlement with your bank, reducing your dues by 30% to 70%.`
      },
      {
        question: `Can CredSettle stop harassment from recovery agents in ${stateName}?`,
        answer: `Yes. We send formal legal notices to card issuers. This stops collection calls and home visits within 24 to 48 hours.`
      },
      {
        question: `What documents will I receive after settlement?`,
        answer: `You receive an official OTS letter, payment receipt, and a No Objection Certificate (NOC) confirming full account closure.`
      },
      {
        question: `How long does credit card settlement take in ${stateName}?`,
        answer: `The process usually takes 3 to 6 months depending on bank response times.`
      },
      {
        question: `Will settlement affect my CIBIL score?`,
        answer: `The card will be marked as settled on your credit report. Our team guides you on how to rebuild your score to 700+ over 18 to 24 months.`
      },
      {
        question: `Which credit card issuers do you work with in ${stateName}?`,
        answer: `We work with all major banks in ${stateName}, including HDFC, ICICI, SBI Card, Axis Bank, Kotak, and Citibank.`
      }
    ],
    keywords: comprehensiveContent.keywords || [`credit card settlement in ${stateName}`, `settle credit card in ${stateName}`, `credit card settlement company in ${stateName}`, `card debt settlement in ${stateName}`, `RBI compliant credit card settlement ${stateName}`],
    majorCities: comprehensiveContent.majorCities || [cityName],
    infographicSuggestion: comprehensiveContent.infographicSuggestion || `Infographic showing the RBI-compliant credit card settlement process in ${stateName}, highlighting key steps from initial consultation through final closure.`
  };

  // Merge comprehensive content with defaults
  return {
    ...defaultContent,
    ...comprehensiveContent,
    // Ensure required fields are present
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
  const customContent = getStateContent(slug);
  if (customContent) return customContent;

  // Generate default content
  const stateName = slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  return generateDefaultContent(stateName, slug);
}







