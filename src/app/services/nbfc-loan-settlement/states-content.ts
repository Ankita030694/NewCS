import { generateNBFCLoanContent } from './content-generator';

export interface StateContent {
  stateName: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle?: string;
  heroTitle: string;
  heroDescription: string;
  whyNBFCLoanSettlement?: string;
  commonNBFCLoanProblems?: string;
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
    title: 'NBFC Loan Settlement in Maharashtra | CredSettle',
    metaDescription: 'Expert NBFC loan settlement services in Maharashtra. Get RBI-compliant settlements, reduce debt by 60%, and stop harassment. CredSettle helps Mumbai, Pune borrowers.',
    heroTitle: 'NBFC Loan Settlement in Maharashtra - Settle Legally, Reduce Debt',
    heroDescription: 'Professional NBFC loan settlement services for Maharashtra borrowers. Stop harassment, reduce debt by 40-70%, restore financial stability.',
    ...generateNBFCLoanContent('maharashtra') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Maharashtra?',
        answer: 'NBFC loan settlement in Maharashtra involves CredSettle negotiating with your NBFC lender for a One-Time Settlement (OTS), typically reducing debt by 40-70%. We handle all NBFCs from Bajaj Finance to Mahindra Finance operating in Mumbai and Pune.'
      },
      {
        question: 'Is NBFC loan settlement legal in Maharashtra?',
        answer: 'Yes! NBFC loan settlement through RBI-compliant processes is completely legal. CredSettle ensures all settlements follow RBI guidelines and provide complete legal closure protecting you from future claims.'
      },
      {
        question: 'How much can I save through NBFC loan settlement in Mumbai/Pune?',
        answer: 'Most Maharashtra clients achieve 40-70% debt reductions. If you owe ₹5 lakh to NBFCs, settlement typically resolves for ₹1.5-3 lakh, saving you ₹2-3.5 lakh plus years of high interest.'
      },
      {
        question: 'Will NBFC settlement affect my CIBIL score?',
        answer: 'Settlement is marked as "Settled" on CIBIL, which is better than "Written Off" from default. We provide credit rehabilitation guidance to help rebuild scores to 650-700 within 18-24 months post-settlement.'
      },
      {
        question: 'How much does NBFC loan settlement cost in Maharashtra?',
        answer: 'We charge success-based fees only after settlement is achieved - no upfront costs. Our transparent fee structure is based on debt reduction achieved. Contact us for a free consultation specific to your Maharashtra case.'
      }
    ],
    keywords: ['NBFC loan settlement Maharashtra', 'NBFC debt settlement Mumbai', 'settle NBFC loan Pune', 'Bajaj Finance settlement Maharashtra', 'RBI compliant NBFC settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'NBFC Loan Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert NBFC loan settlement services in Karnataka. Get RBI-compliant settlements, reduce debt by 60%, and stop harassment. CredSettle helps Bangalore, Mysore borrowers.',
    heroTitle: 'NBFC Loan Settlement in Karnataka - Settle Legally, Reduce Debt',
    heroDescription: 'Professional NBFC loan settlement services for Karnataka borrowers. Stop harassment, reduce debt by 40-70%, restore financial stability.',
    ...generateNBFCLoanContent('karnataka') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Karnataka?',
        answer: 'NBFC loan settlement in Karnataka involves CredSettle negotiating with your NBFC lender for a One-Time Settlement (OTS), typically reducing debt by 40-70%. We handle all NBFCs operating in Bangalore and across Karnataka.'
      },
      {
        question: 'Can I settle loans from multiple NBFCs in Bangalore?',
        answer: 'Yes! We specialize in multi-NBFC settlements. If you have loans from Bajaj Finance, Tata Capital, and Mahindra Finance, we negotiate with all simultaneously for coordinated settlements.'
      },
      {
        question: 'How long does NBFC settlement take in Karnataka?',
        answer: 'Most Karnataka NBFC settlements complete in 45-90 days from initial consultation to final closure. Harassment typically stops within 48 hours of our legal intervention.'
      },
      {
        question: 'Will NBFC settlement affect my CIBIL score?',
        answer: 'Settlement is marked as "Settled" on CIBIL. With proper documentation and our guidance, most Karnataka clients rehabilitate scores to 650-700 within 18-24 months post-settlement.'
      },
      {
        question: 'How much does NBFC loan settlement cost in Karnataka?',
        answer: 'We charge success-based fees only after settlement is achieved - no upfront costs. Contact us for a free consultation specific to your Karnataka NBFC loan situation.'
      }
    ],
    keywords: ['NBFC loan settlement Karnataka', 'NBFC debt settlement Bangalore', 'settle NBFC loan Mysore', 'Bajaj Finance settlement Karnataka', 'RBI compliant NBFC settlement']
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
  const comprehensiveContent = generateNBFCLoanContent(slug) as Partial<StateContent>;
  const cityName = stateName.split(' ')[0];
  
  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `NBFC Loan Settlement in ${stateName} - Settle Legally | CredSettle`,
    metaTitle: `NBFC Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert NBFC loan settlement services in ${stateName}. Get RBI-compliant settlements, reduce debt by 40-70%, and achieve financial freedom with CredSettle.`,
    heroTitle: `NBFC Loan Settlement in ${stateName} - Settle Legally, Reduce Debt with CredSettle`,
    heroDescription: `Professional NBFC loan settlement services for borrowers in ${stateName}. Stop harassment, reduce debt significantly, and restore financial stability.`,
    whyNBFCLoanSettlement: comprehensiveContent.whyNBFCLoanSettlement || `For NBFC loan borrowers in ${stateName} struggling with high-interest EMIs and aggressive recovery tactics, settlement offers strategic escape. CredSettle's RBI-compliant process typically reduces debt by 40-70% while stopping harassment and ensuring complete legal closure.`,
    commonNBFCLoanProblems: comprehensiveContent.commonNBFCLoanProblems || `NBFC loan borrowers in ${stateName} face unique challenges: higher interest rates (18-36%) than banks, more aggressive recovery tactics, complex legal agreements, and harassment targeting family and workplace. CredSettle addresses all these systematically.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle provides specialized NBFC loan settlement services in ${stateName}, handling all major NBFCs from Bajaj Finance to Tata Capital. Our RBI-compliant approach achieves 45-65% debt reductions while ensuring complete legal protection.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our settlement process follows strict RBI guidelines: comprehensive case analysis, immediate harassment cessation, direct NBFC negotiations leveraging settlement frameworks, structured payment planning, and complete legal closure documentation.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle's expert negotiators leverage relationships with all major NBFCs and deep knowledge of RBI settlement frameworks to secure optimal outcomes. We understand NBFC-specific policies and recovery processes.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal team provides comprehensive protection: harassment cessation notices, settlement agreement review, RBI compliance verification, and complete closure documentation preventing future claims.`,
    benefits: comprehensiveContent.benefits || `Choosing CredSettle delivers: immediate harassment cessation, 40-70% debt reduction, complete legal protection, multi-NBFC coordination, zero upfront costs, and post-settlement credit rehabilitation guidance.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI guidelines mandate fair treatment of borrowers in financial distress. NBFCs must provide settlement options, follow proper recovery procedures, and respect borrower rights. CredSettle ensures your rights are protected throughout the process.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Step 1: Free consultation and case analysis. Step 2: Engagement and immediate harassment cessation. Step 3: Documentation and NBFC identification. Step 4: Settlement negotiation (45-90 days). Step 5: Agreement finalization and payment. Step 6: Complete legal closure.`,
    caseStudy: comprehensiveContent.caseStudy || `A ${cityName} resident owing ₹7 lakh to two NBFCs faced aggressive recovery and legal threats. CredSettle stopped harassment within 48 hours, negotiated ₹2.8 lakh settlement (60% reduction), and secured complete legal closure. Today, the client is financially stable.`,
    finalThoughts: comprehensiveContent.finalThoughts || `If you're struggling with NBFC loan debt in ${stateName}, facing harassment, or trapped in high-interest cycles, recognize that RBI-compliant settlement offers legitimate resolution. CredSettle's expertise transforms crises into manageable outcomes. Contact us today for your free consultation.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does NBFC loan settlement work in ${stateName}?`,
        answer: `NBFC loan settlement in ${stateName} involves CredSettle negotiating with your NBFC lender for a One-Time Settlement (OTS), typically reducing outstanding debt by 40-70% through RBI-compliant processes.`
      },
      {
        question: `Is NBFC loan settlement legal in ${stateName}?`,
        answer: `Yes! NBFC loan settlement through RBI-compliant processes is completely legal. CredSettle ensures all settlements follow regulatory guidelines and provide complete legal closure.`
      },
      {
        question: `How much can I save through NBFC settlement in ${stateName}?`,
        answer: `Most ${stateName} clients achieve 40-70% debt reductions. If you owe ₹5 lakh, settlement typically resolves for ₹1.5-3 lakh, saving you ₹2-3.5 lakh plus years of interest.`
      },
      {
        question: `Will NBFC settlement affect my CIBIL score in ${stateName}?`,
        answer: `Settlement is marked as "Settled" on CIBIL, which is better than "Written Off" from default. We provide guidance to help rebuild scores to 650-700 within 18-24 months.`
      },
      {
        question: `How much does NBFC settlement cost in ${stateName}?`,
        answer: `We charge success-based fees only after settlement is achieved—no upfront costs. Contact us for a free consultation specific to your ${stateName} NBFC loan situation.`
      }
    ],
    keywords: comprehensiveContent.keywords || [`NBFC loan settlement in ${stateName}`, `NBFC debt settlement ${stateName}`, `settle NBFC loan ${stateName}`, `RBI compliant NBFC settlement ${stateName}`],
    majorCities: comprehensiveContent.majorCities || [cityName],
    infographicSuggestion: comprehensiveContent.infographicSuggestion || `Infographic showing the RBI-compliant NBFC loan settlement process in ${stateName}, highlighting key steps and average debt reduction statistics.`
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
