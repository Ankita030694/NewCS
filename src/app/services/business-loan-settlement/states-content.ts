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
    metaDescription: 'Expert business loan settlement services in Maharashtra. Get RBI-compliant OTS solutions for SMEs, MSMEs across Mumbai, Pune. Stop harassment and achieve debt freedom.',
    heroTitle: 'Business Loan Settlement in Maharashtra – Protect Your Enterprise',
    heroDescription: 'Professional business loan settlement services for Maharashtra enterprises. Reduce debt, protect assets, discharge guarantees.',
    ...generateBusinessLoanContent('maharashtra') as any,
    faqs: [
      {
        question: 'Can secured business loans be settled in Maharashtra?',
        answer: 'Yes, secured business loans can be settled in Maharashtra, though the process requires strategic negotiation to release securities. CredSettle negotiates with lenders to either release securities as part of settlement or provide substitute security. Most lenders prefer settlement over lengthy enforcement proceedings, especially when businesses demonstrate genuine distress.'
      },
      {
        question: 'Will settlement discharge director guarantees in Mumbai/Pune?',
        answer: 'Director guarantee discharge is typically negotiated as part of settlement agreements. CredSettle ensures settlement terms explicitly include guarantee discharge provisions, protecting promoters\' personal assets and creditworthiness. This is critical for Maharashtra entrepreneurs facing personal liability exposure.'
      },
      {
        question: 'What documentation is required for business loan settlement?',
        answer: 'Business loan settlement requires financial statements (P&L, balance sheet, cash flow), tax returns, bank statements, loan agreements, security documents, board resolutions, and hardship evidence. CredSettle guides Maharashtra clients through documentation, ensuring compliance with lender requirements while protecting business interests.'
      },
      {
        question: 'How long does business loan settlement take in Maharashtra?',
        answer: 'Business loan settlement typically takes 3-8 months in Maharashtra, depending on loan complexity, number of lenders, and security structures. CredSettle\'s established relationships with Maharashtra lenders often expedite timelines by understanding specific documentation requirements and approval processes.'
      },
      {
        question: 'Can my business continue operations during settlement?',
        answer: 'Yes, businesses can typically continue operations during settlement negotiations. CredSettle\'s legal intervention stops asset seizures and harassment, enabling operational continuity. Settlement structures often include provisions allowing continued business operations, which strengthens lender confidence in recovering settlement amounts.'
      }
    ],
    keywords: ['business loan settlement Maharashtra', 'SME loan settlement Mumbai', 'MSME debt settlement Pune', 'business OTS Maharashtra', 'RBI compliant business settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'Business Loan Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert business loan settlement services in Karnataka. RBI-compliant OTS for startups, SMEs across Bangalore, Mysore. Protect assets and discharge guarantees.',
    heroTitle: 'Business Loan Settlement in Karnataka – Rebuild with Confidence',
    heroDescription: 'Professional settlement services for Karnataka businesses. Navigate tech sector challenges with strategic debt resolution.',
    ...generateBusinessLoanContent('karnataka') as any,
    faqs: [
      {
        question: 'Do you handle startup loan settlements in Bangalore?',
        answer: 'Yes, CredSettle specializes in startup loan settlements across Bangalore\'s tech ecosystem. We understand unique startup challenges—funding cycles, burn rates, and pivot necessities—presenting these factors credibly to lenders familiar with Karnataka\'s startup landscape for favorable settlement terms.'
      },
      {
        question: 'Can working capital facilities be settled along with term loans?',
        answer: 'Yes, CredSettle coordinates multi-facility settlements common with Karnataka businesses. We negotiate simultaneously with lenders for term loans, working capital, equipment financing, and other facilities, achieving comprehensive debt resolution rather than partial settlements leaving residual liabilities.'
      },
      {
        question: 'Will settlement affect my company\'s ability to get future credit?',
        answer: 'Settlement may temporarily impact company creditworthiness, but this is significantly better than default or insolvency. CredSettle provides post-settlement credit rehabilitation guidance, helping Karnataka businesses rebuild credibility over 18-24 months, enabling access to future growth capital when needed.'
      },
      {
        question: 'What if my lender threatens SARFAESI proceedings in Karnataka?',
        answer: 'SARFAESI action can be challenged on technical grounds or suspended during settlement negotiations. CredSettle\'s legal team files representations with DRTs, negotiates suspension of enforcement, and leverages settlement proposals showing better recovery than forced asset sales. Most lenders prefer settlement over lengthy SARFAESI proceedings.'
      },
      {
        question: 'Can we settle loans from multiple NBFCs operating in Karnataka?',
        answer: 'Yes, CredSettle handles multi-NBFC settlements common with Karnataka businesses. We coordinate parallel negotiations with various NBFCs, often achieving better overall terms by demonstrating comprehensive financial distress across your entire debt portfolio, ensuring consistent settlement structures.'
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
  
  // Fallback content if generator doesn't have state info
  const cityName = stateName.split(' ')[0];
  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `Business Loan Settlement in ${stateName} – Settle Legally | CredSettle`,
    metaTitle: `Business Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert business loan settlement services in ${stateName}. Get RBI-compliant OTS solutions for SMEs, MSMEs. Stop harassment and achieve debt freedom.`,
    heroTitle: `Business Loan Settlement in ${stateName} – Protect Your Enterprise`,
    heroDescription: `Professional business loan settlement services for ${stateName} enterprises. Reduce debt, protect assets, discharge guarantees.`,
    whyBusinessLoanSettlement: comprehensiveContent.whyBusinessLoanSettlement || `Business loan settlement represents a critical financial strategy for ${stateName} enterprises facing debt challenges. Rather than continuing to struggle with unsustainable EMIs that drain working capital, settlement offers structured resolution through RBI-compliant One-Time Settlement (OTS) agreements. CredSettle helps ${stateName} businesses negotiate settlements typically reducing debt by 30-70%, protecting business assets, discharging director guarantees, and enabling either operational continuity or dignified closures. Settlement stops harassment, preserves business relationships, and provides complete legal closure allowing entrepreneurs to rebuild or restart.`,
    commonBusinessLoanProblems: comprehensiveContent.commonBusinessLoanProblems || `${stateName} businesses face unique loan challenges that make settlement valuable. Cash flow mismatches occur when revenues fluctuate but EMIs remain fixed. Working capital gets diverted to debt service rather than operations. Recovery harassment targets business premises, threatening customers and suppliers. Director guarantees expose promoters' personal assets to seizure. Multiple loan facilities create complex multi-lender situations. Secured loans threaten asset seizures that would destroy operational capacity. CredSettle addresses all these challenges through professional settlement services securing debt reductions while protecting assets and guarantees.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle stands as ${stateName}'s leading business loan settlement specialist, bringing extensive expertise to enterprises across all sectors. Our success stems from sector-specific knowledge, established lender relationships, legal expertise protecting assets and guarantees, and RBI-compliant processes. We've negotiated settlements with all major banks and NBFCs operating in ${stateName}, achieving average debt reductions of 40-50% for businesses demonstrating documented distress. Our approach stops harassment, prevents asset seizures, discharges director guarantees, and provides complete documentation ensuring legal finality.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `CredSettle's business loan settlement process strictly adheres to RBI's Master Direction on Resolution of Stressed Assets. Our compliance begins with comprehensive business analysis, reviewing loan agreements, understanding security structures, and documenting genuine hardship. Settlement proposals align with RBI guidelines while emphasizing documented business distress. All agreements follow prescribed formats including explicit facility closures, security releases, guarantee discharges, and full and final closure confirmations. This RBI-compliant approach protects ${stateName} businesses from future claims and ensures complete legal resolution.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle's negotiation expertise for ${stateName} businesses leverages deep understanding of lender policies and resolution frameworks. We know how different lenders evaluate business OTS proposals and structure presentations that pass risk assessment committees. Our negotiators emphasize state-specific factors strengthening cases, compile comprehensive business distress documentation, understand lender approval hierarchies, and coordinate multi-lender negotiations for comprehensive debt resolution.`,
    legalSupport: comprehensiveContent.legalSupport || `CredSettle provides comprehensive legal protection for ${stateName} businesses through our commercial law panel. Our advocates understand business loan frameworks, security enforcement, director guarantee obligations, and RBI regulations. From engagement, our legal team acts to protect your business: stopping asset seizure, preventing unauthorized harassment, reviewing security documentation, analyzing guarantee enforceability, and negotiating discharge provisions. Every settlement undergoes legal review ensuring complete protection for both business and personal assets.`,
    benefits: comprehensiveContent.benefits || `${stateName} businesses choosing CredSettle gain immediate working capital relief through 30-70% debt reduction, operational continuity through asset protection, director protection via guarantee discharge, harassment elimination within 48 hours, customer/supplier relationship preservation, multi-lender coordination for complex situations, sector expertise enabling compelling presentations, complete documentation providing legal finality, business revival planning guidance, and proven track record across the state.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI regulations provide comprehensive protection for ${stateName} businesses, establishing clear frameworks for stressed asset resolution. The Master Direction on Resolution of Stressed Assets mandates fair treatment and reasonable settlement consideration. Fair Practices Code prohibits harassment and requires respectful communication. Businesses have rights to request settlement terms, receive clear documentation, and appeal unreasonable decisions through Banking Ombudsman. CredSettle ensures ${stateName} businesses understand and exercise these rights effectively throughout settlement.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Business loan settlement with CredSettle in ${stateName} follows a structured process: Step 1: Initial Consultation assessing debt situation. Step 2: Business Analysis reviewing loans, securities, and guarantees. Step 3: Documentation Collection gathering financial statements and hardship evidence. Step 4: Legal Protection stopping harassment and asset seizure. Step 5: Strategic Negotiation presenting comprehensive hardship cases. Step 6: Agreement Review ensuring RBI compliance and protection. Step 7: Payment Coordination facilitating structured payments. Step 8: Closure Documentation obtaining releases, discharges, and NOCs. Step 9: Revival Planning providing post-settlement business guidance.`,
    caseStudy: comprehensiveContent.caseStudy || `Consider a ${stateName} manufacturing business that approached CredSettle with ₹80 lakhs debt across multiple lenders. Facing revenue decline from market challenges, the business struggled with fixed EMIs while maintaining operations. Recovery harassment threatened business viability. CredSettle intervened, stopping harassment within 48 hours and coordinating multi-lender negotiations. After 5 months, settlements achieved 60% overall debt reduction. The business paid through structured installments, received complete closure documentation including security releases and guarantee discharge, and today operates debt-free with improved cash flow enabling operational expansion.`,
    finalThoughts: comprehensiveContent.finalThoughts || `Business loan settlement through CredSettle offers ${stateName} enterprises a strategic path to debt resolution that protects assets, discharges guarantees, and enables continuity or dignified exits. Our track record demonstrates that professional settlement consistently delivers optimal outcomes for businesses facing genuine distress. The first step begins with contacting CredSettle for confidential assessment. We handle all complexities—stopping harassment, negotiating with lenders, protecting assets, ensuring RBI compliance, and securing complete closure. Don't let debt destroy businesses and entrepreneurial futures. Contact CredSettle today for professional, dignified debt resolution.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `Can secured business loans be settled in ${stateName}?`,
        answer: `Yes, secured business loans can be settled in ${stateName}. CredSettle negotiates security releases or substitute arrangements as part of settlements. Most lenders prefer settlement over lengthy enforcement proceedings when businesses demonstrate genuine distress.`
      },
      {
        question: `Will settlement discharge director guarantees?`,
        answer: `Director guarantee discharge is typically negotiated as part of settlement agreements. CredSettle ensures settlement terms explicitly include guarantee discharge provisions, protecting promoters' personal assets and creditworthiness.`
      },
      {
        question: `What documentation is required for business settlement?`,
        answer: `Business settlement requires financial statements, tax returns, bank statements, loan agreements, security documents, board resolutions, and hardship evidence. CredSettle guides ${stateName} clients through documentation requirements.`
      },
      {
        question: `How long does business loan settlement take?`,
        answer: `Settlement typically takes 3-8 months depending on complexity, number of lenders, and security structures. CredSettle\'s established lender relationships often expedite timelines.`
      },
      {
        question: `Can my business continue operations during settlement?`,
        answer: `Yes, businesses typically continue operations during settlement. CredSettle\'s legal intervention stops asset seizures and harassment, enabling operational continuity while negotiations proceed.`
      },
      {
        question: `Which lenders do you work with in ${stateName}?`,
        answer: `CredSettle works with all major lenders in ${stateName} including SBI, HDFC, ICICI, Axis, and numerous NBFCs. Our experience spans diverse lender types, ensuring effective negotiation for any business loan situation.`
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

