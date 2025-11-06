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
        answer: 'Yes! CredSettle specializes in negotiating settlements that allow you to keep your vehicle in most cases. We prevent repossession during negotiations and structure settlements that preserve your ownership while reducing debt by 40-65% typically.'
      },
      {
        question: 'How long does car loan settlement take in Mumbai/Pune?',
        answer: 'Most car loan settlements in Maharashtra are completed within 45-90 days from initial consultation to final closure. Timeline depends on lender responsiveness and your ability to arrange the settlement amount once negotiated.'
      },
      {
        question: 'Will car loan settlement affect my CIBIL score in Maharashtra?',
        answer: 'Settlement is marked on your CIBIL as "Settled" rather than "Closed," which is better than "Written Off" from default. With proper documentation and our guidance, most Maharashtra clients rehabilitate their scores to 650-700 within 18-24 months post-settlement.'
      },
      {
        question: 'What vehicle types does CredSettle handle for settlement in Maharashtra?',
        answer: 'We handle all vehicle loan types in Maharashtra: cars (hatchback to luxury), SUVs, two-wheelers, commercial vehicles, and even electric vehicles. Our expertise covers loans from all major banks and NBFCs operating in Mumbai, Pune, and across the state.'
      },
      {
        question: 'How much does CredSettle charge for car loan settlement services in Maharashtra?',
        answer: 'We charge fees only after successful settlement, with no upfront costs. Our transparent fee structure is based on the settlement amount and debt reduction achieved. Contact us for a free consultation and customized quote for your Maharashtra case.'
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
        answer: 'Yes! CredSettle specializes in negotiating settlements that allow you to keep your vehicle in most cases. We prevent repossession during negotiations and structure settlements that preserve your ownership while reducing debt by 40-65% typically.'
      },
      {
        question: 'How long does car loan settlement take in Bangalore/Mysore?',
        answer: 'Most car loan settlements in Karnataka are completed within 45-90 days from initial consultation to final closure. Timeline depends on lender responsiveness and your ability to arrange the settlement amount once negotiated.'
      },
      {
        question: 'Will car loan settlement affect my CIBIL score in Karnataka?',
        answer: 'Settlement is marked on your CIBIL as "Settled" rather than "Closed," which is better than "Written Off" from default. With proper documentation and our guidance, most Karnataka clients rehabilitate their scores to 650-700 within 18-24 months post-settlement.'
      },
      {
        question: 'Does CredSettle handle electric vehicle loan settlements in Bangalore?',
        answer: 'Yes, we handle EV loan settlements in Karnataka including Bangalore. Our expertise covers all vehicle types including electric cars and scooters from manufacturers like Tata, MG, Ola, and Ather, financed through banks or NBFCs.'
      },
      {
        question: 'How much does CredSettle charge for car loan settlement services in Karnataka?',
        answer: 'We charge fees only after successful settlement, with no upfront costs. Our transparent fee structure is based on the settlement amount and debt reduction achieved. Contact us for a free consultation and customized quote for your Karnataka case.'
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
    heroTitle: `Car Loan Settlement in ${stateName} - Drive Toward Financial Freedom with CredSettle`,
    heroDescription: `Professional car loan settlement services for vehicle owners in ${stateName}. Reduce debt, prevent repossession, and restore financial stability.`,
    whyCarLoanSettlement: comprehensiveContent.whyCarLoanSettlement || `For vehicle owners in ${stateName} facing unmanageable car loan EMIs, settlement isn't just about reducing debt—it's about preventing repossession and preserving your vehicle ownership. CredSettle offers a strategic, RBI-compliant path to One-Time Settlement (OTS) that typically reduces outstanding vehicle loan debt by 40-65%.`,
    commonCarLoanProblems: comprehensiveContent.commonCarLoanProblems || `Car loan borrowers in ${stateName} face unique challenges including income volatility affecting EMI payments, rapid vehicle depreciation creating negative equity, recovery agent harassment, and the risk of vehicle repossession. CredSettle addresses all these issues systematically.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle stands as ${stateName}'s trusted car loan settlement specialist, offering comprehensive RBI-compliant debt resolution services. We've successfully resolved hundreds of vehicle loan cases, achieving average debt reductions of 45-65% while preventing repossession in 90%+ of cases.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `Our settlement process follows strict RBI guidelines: comprehensive case analysis, immediate harassment cessation, direct lender negotiations, structured payment planning, and complete legal closure documentation including vehicle hypothecation removal.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle's expert negotiators leverage relationships with all major auto lenders to secure optimal settlements. We understand lender policies, settlement authorization processes, and negotiation leverage points that individual borrowers cannot access.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal team provides comprehensive protection including harassment cessation notices, repossession prevention, settlement agreement review, and complete closure documentation. We ensure every settlement complies with RBI frameworks and protects your rights.`,
    benefits: comprehensiveContent.benefits || `Choosing CredSettle delivers: immediate harassment cessation, vehicle repossession prevention, 40-65% debt reduction, complete legal protection, zero upfront costs, customized payment terms, and post-settlement CIBIL rehabilitation guidance.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI guidelines mandate fair treatment of borrowers in financial distress. Lenders must provide settlement options, cease harassment, and follow proper repossession procedures. CredSettle ensures your rights under these frameworks are protected throughout the settlement process.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Step 1: Free consultation and case analysis. Step 2: Engagement and immediate harassment cessation. Step 3: Documentation collection and lender identification. Step 4: Settlement negotiation (typically 45-90 days). Step 5: Agreement finalization and payment. Step 6: Complete legal closure and vehicle hypothecation removal.`,
    caseStudy: comprehensiveContent.caseStudy || `A ${cityName} resident owing ₹8.5 lakh on a vehicle worth ₹5 lakh faced repossession and aggressive recovery. CredSettle negotiated a ₹3.8 lakh settlement (55% reduction), prevented repossession, and secured complete legal closure. Today, the client retains vehicle ownership and has rebuilt their CIBIL score to 640.`,
    finalThoughts: comprehensiveContent.finalThoughts || `If you're struggling with car loan EMIs in ${stateName}, facing repossession threats, or trapped in negative equity, recognize that RBI-compliant settlement offers legitimate resolution. CredSettle's expertise transforms vehicle loan crises into manageable outcomes. Contact us today for your free consultation.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does car loan settlement work in ${stateName}?`,
        answer: `Car loan settlement in ${stateName} involves CredSettle negotiating with your lender for a One-Time Settlement (OTS), typically reducing outstanding debt by 40-65%. We prevent vehicle repossession while achieving debt reduction through RBI-compliant processes.`
      },
      {
        question: `Can I keep my vehicle after settlement in ${stateName}?`,
        answer: `Yes! In most cases, CredSettle's settlements allow you to retain vehicle ownership. We prevent repossession during negotiations and structure settlements that preserve your vehicle while reducing debt substantially.`
      },
      {
        question: `Will settlement affect my CIBIL score in ${stateName}?`,
        answer: `Settlement is marked as "Settled" on CIBIL, which is better than "Written Off" from default. With proper documentation and our guidance, most clients rehabilitate scores to 650-700 within 18-24 months.`
      },
      {
        question: `What types of vehicle loans can CredSettle settle in ${stateName}?`,
        answer: `We handle all vehicle loan types in ${stateName}: cars, SUVs, two-wheelers, commercial vehicles, and electric vehicles. Our expertise covers loans from all major banks and NBFCs.`
      },
      {
        question: `How much does car loan settlement cost in ${stateName}?`,
        answer: `CredSettle charges fees only after successful settlement, with no upfront costs. Our transparent fee structure is based on the settlement amount and debt reduction achieved. Contact us for a free consultation.`
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







