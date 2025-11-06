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
        question: 'Can CredSettle really stop app loan harassment in 48 hours in Mumbai/Pune?',
        answer: 'Yes! We deploy immediate legal notices to app lenders and recovery agencies invoking RBI harassment guidelines, IT Act data privacy provisions, and criminal law protections. This typically stops calls, messages, and contact list harassment within 24-48 hours across Maharashtra.'
      },
      {
        question: 'How much debt reduction can I expect on app loan settlements in Maharashtra?',
        answer: 'Most Maharashtra clients achieve 50-75% debt reductions. If you owe ₹100,000 across multiple apps, settlement typically resolves for ₹30,000-40,000. Actual reduction depends on how many apps operate illegally, interest rate violations, and harassment documentation.'
      },
      {
        question: 'Will app loan settlement affect my CIBIL score in Maharashtra?',
        answer: 'Many instant loan apps don\'t report to CIBIL. For those that do, settlement is marked as "Settled" which is better than "Written Off" from default. We provide credit rehabilitation guidance to help rebuild scores post-settlement.'
      },
      {
        question: 'Can CredSettle help if I have loans from 5-7 different apps in Maharashtra?',
        answer: 'Yes, that\'s exactly our specialty! We negotiate with all your apps simultaneously, preventing the common failure where settling one app just intensifies others\' harassment. Multi-app coordination is our core expertise.'
      },
      {
        question: 'How much does app loan settlement cost in Maharashtra?',
        answer: 'We charge success-based fees only after harassment stops and settlements are negotiated—no upfront costs. Our transparent fee structure is based on debt reduction achieved. Contact us for a free consultation specific to your Maharashtra case.'
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
        question: 'Can CredSettle really stop app loan harassment in 48 hours in Bangalore?',
        answer: 'Yes! We deploy immediate legal notices to app lenders and recovery agencies invoking RBI harassment guidelines, IT Act data privacy provisions, and criminal law protections. This typically stops calls, messages, and contact list harassment within 24-48 hours across Karnataka.'
      },
      {
        question: 'How much debt reduction can I expect on app loan settlements in Karnataka?',
        answer: 'Most Karnataka clients achieve 50-75% debt reductions. If you owe ₹100,000 across multiple apps, settlement typically resolves for ₹30,000-40,000. Actual reduction depends on how many apps operate illegally, interest rate violations, and harassment documentation.'
      },
      {
        question: 'Will app loan settlement affect my CIBIL score in Karnataka?',
        answer: 'Many instant loan apps don\'t report to CIBIL. For those that do, settlement is marked as "Settled" which is better than "Written Off" from default. We provide credit rehabilitation guidance to help rebuild scores post-settlement.'
      },
      {
        question: 'How does CredSettle protect my data privacy during app loan settlement?',
        answer: 'We file IT Act data privacy violation reports, demand contact list access cessation, and include data deletion requirements in settlement agreements where enforceable. This prevents further exploitation of your contacts and photos.'
      },
      {
        question: 'How much does app loan settlement cost in Karnataka?',
        answer: 'We charge success-based fees only after harassment stops and settlements are negotiated—no upfront costs. Our transparent fee structure is based on debt reduction achieved. Contact us for a free consultation specific to your Karnataka case.'
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
    heroTitle: `App Loan Settlement in ${stateName} - Stop Harassment, Settle Legally with CredSettle`,
    heroDescription: `Professional instant loan app settlement services for borrowers in ${stateName}. Stop harassment in 48 hours, reduce debt significantly, and restore peace of mind.`,
    whyAppLoanSettlement: comprehensiveContent.whyAppLoanSettlement || `For instant loan app borrowers in ${stateName} facing harassment, morphed photos, and contact list exploitation, immediate settlement intervention isn't just about reducing debt—it's about stopping psychological terrorism. CredSettle offers RBI-compliant settlement that halts harassment within 48 hours and reduces debt by 50-75% typically.`,
    commonAppLoanProblems: comprehensiveContent.commonAppLoanProblems || `App loan borrowers in ${stateName} face unique challenges including illegal harassment tactics, contact list exploitation, morphed photos sent to family, fake legal notices, workplace reputation damage, and predatory interest rates often exceeding RBI limits. CredSettle addresses all these systematically.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle stands as ${stateName}'s specialized app loan crisis intervention service, offering immediate harassment cessation and RBI-compliant debt resolution. We've helped hundreds of borrowers stop digital terrorism, achieve 60%+ debt reductions, and restore normal life within weeks.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our settlement process follows strict RBI and legal frameworks: immediate harassment cessation through legal notices, data privacy protection under IT Act, multi-app negotiation leveraging illegal operations, and complete legal closure with harassment cessation guarantees.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle's expert negotiators leverage relationships with instant lending platforms and deep knowledge of RBI violations to secure optimal settlements. We negotiate all your apps simultaneously, preventing the failure pattern where settling one intensifies others.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal team provides comprehensive protection including immediate harassment cessation, data privacy violation reports, RBI complaints, criminal harassment documentation, and complete closure agreements barring future contact or data exploitation.`,
    benefits: comprehensiveContent.benefits || `Choosing CredSettle delivers: harassment cessation within 24-48 hours, data privacy protection, 50-75% debt reduction, multi-app coordinated resolution, zero upfront costs, complete legal protection, and post-settlement support. Most importantly: immediate safety from digital terrorism.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI guidelines mandate fair treatment of borrowers and prohibit harassment. Many instant loan apps violate these regulations through illegal interest rates, data privacy breaches, and recovery tactics. CredSettle ensures your rights under these frameworks are protected throughout settlement.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Step 1: Free consultation and crisis assessment. Step 2: Immediate legal intervention stopping harassment (24-48 hours). Step 3: Complete app loan documentation and illegal operation identification. Step 4: Simultaneous multi-app settlement negotiation (45-90 days). Step 5: Final closure with harassment cessation guarantees and data protection.`,
    caseStudy: comprehensiveContent.caseStudy || `A ${cityName} resident owing ₹120,000 across 6 apps faced severe harassment including morphed photos sent to family and fake legal notices to employer. CredSettle stopped all harassment within 48 hours, negotiated ₹38,000 settlement (68% reduction), and delivered complete legal closure. Today, the client lives harassment-free with family relationships restored.`,
    finalThoughts: comprehensiveContent.finalThoughts || `If you're struggling with app loan harassment in ${stateName}, facing contact list exploitation, morphed photos, or workplace threats, recognize that immediate professional intervention offers escape you might not know exists. CredSettle stops harassment within 48 hours and reduces debt by 50-75% typically. Contact us today for your free consultation—your life can be normal again.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does app loan settlement work in ${stateName}?`,
        answer: `App loan settlement in ${stateName} involves CredSettle deploying immediate legal intervention to stop harassment, then negotiating with all your apps simultaneously for One-Time Settlements typically reducing debt by 50-75%. Process takes 45-90 days with harassment cessation in 24-48 hours.`
      },
      {
        question: `Can CredSettle really stop harassment in 48 hours in ${stateName}?`,
        answer: `Yes! We deploy legal notices invoking RBI harassment guidelines, IT Act data privacy protections, and criminal law provisions. This multi-pronged legal approach typically stops calls, messages, and contact exploitation within 24-48 hours across ${stateName}.`
      },
      {
        question: `How much debt reduction can I expect in ${stateName}?`,
        answer: `Most ${stateName} clients achieve 50-75% debt reductions. If you owe ₹100,000 across multiple apps, settlement typically resolves for ₹30,000-40,000. Actual reduction depends on illegal operations, rate violations, and harassment documentation.`
      },
      {
        question: `Can CredSettle handle multiple app loans simultaneously in ${stateName}?`,
        answer: `Yes, that's our specialty! We negotiate with all your apps concurrently (typical client has 3-7 apps), preventing the failure pattern where settling one intensifies others. Multi-app coordination is our core expertise in ${stateName}.`
      },
      {
        question: `How much does app loan settlement cost in ${stateName}?`,
        answer: `We charge success-based fees only after harassment stops and settlements are negotiated—no upfront costs. Our transparent fee structure is based on debt reduction achieved. Contact us for a free consultation specific to your ${stateName} case.`
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
