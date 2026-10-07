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
    metaDescription: 'Expert NBFC loan settlement in Maharashtra. Settle debt with 40-70% reduction, stop harassment, and protect cash flow legally across Mumbai & Pune.',
    heroTitle: 'NBFC Loan Settlement in Maharashtra - Settle Legally, Reduce Debt',
    heroDescription: 'Professional NBFC loan settlement services for Maharashtra borrowers. Stop harassment, reduce debt by 40-70%, restore financial stability.',
    ...generateNBFCLoanContent('maharashtra') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Maharashtra?',
        answer: 'CredSettle talks with your NBFC lender. We aim for a one-time settlement (OTS). Most clients get 40% to 70% debt relief. We handle lenders across Mumbai and Pune.'
      },
      {
        question: 'Is NBFC loan settlement legal in Maharashtra?',
        answer: 'Yes. NBFC loan settlement follows RBI rules. It is 100% legal. CredSettle ensures full legal closure so lenders cannot claim more money later.'
      },
      {
        question: 'How much can I save on NBFC loan settlement in Mumbai or Pune?',
        answer: 'Most clients save 40% to 70%. If you owe ₹5 lakh, you might pay only ₹1.5 to ₹3 lakh. This saves you ₹2 to ₹3.5 lakh and stops high interest charges.'
      },
      {
        question: 'Will NBFC settlement affect my CIBIL score?',
        answer: 'Your credit report will mark the account as settled. This is much better than a write-off. We also guide you on how to rebuild your credit score step by step.'
      },
      {
        question: 'How much does NBFC loan settlement cost in Maharashtra?',
        answer: 'We charge fees only after we settle your debt. There are no upfront fees. Our charges are linked to how much money you save.'
      }
    ],
    keywords: ['NBFC loan settlement Maharashtra', 'NBFC debt settlement Mumbai', 'settle NBFC loan Pune', 'Bajaj Finance settlement Maharashtra', 'RBI compliant NBFC settlement']
  },
  'karnataka': {
    stateName: 'Karnataka',
    slug: 'karnataka',
    title: 'NBFC Loan Settlement in Karnataka | CredSettle',
    metaDescription: 'Expert NBFC loan settlement in Karnataka. Settle debt with 40-70% reduction, stop recovery harassment, and protect cash flow across Bangalore & Mysore.',
    heroTitle: 'NBFC Loan Settlement in Karnataka - Settle Legally, Reduce Debt',
    heroDescription: 'Professional NBFC loan settlement services for Karnataka borrowers. Stop harassment, reduce debt by 40-70%, restore financial stability.',
    ...generateNBFCLoanContent('karnataka') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Karnataka?',
        answer: 'CredSettle talks with your NBFC lender. We aim for a one-time settlement (OTS). Most clients get 40% to 70% debt relief. We handle lenders across Bangalore and Mysore.'
      },
      {
        question: 'Can I settle loans from multiple NBFCs in Bangalore?',
        answer: 'Yes. We handle multi-lender settlements. If you owe money to several NBFCs, we talk to all of them at the same time.'
      },
      {
        question: 'How long does NBFC settlement take in Karnataka?',
        answer: 'Most settlements take 45 to 90 days. Recovery calls usually stop within 48 hours after our legal team steps in.'
      },
      {
        question: 'Will NBFC settlement affect my CIBIL score?',
        answer: 'Your credit report will mark the loan as settled. We help you fix errors and guide you on rebuilding your score back above 700.'
      },
      {
        question: 'How much does NBFC loan settlement cost in Karnataka?',
        answer: 'We charge fees only after we settle your debt. There are zero upfront fees. Book a free call to review your case.'
      }
    ],
    keywords: ['NBFC loan settlement Karnataka', 'NBFC debt settlement Bangalore', 'settle NBFC loan Mysore', 'Bajaj Finance settlement Karnataka', 'RBI compliant NBFC settlement']
  },
  'uttar-pradesh': {
    stateName: 'Uttar Pradesh',
    slug: 'uttar-pradesh',
    title: 'NBFC Loan Settlement in Uttar Pradesh | CredSettle',
    metaDescription: 'Expert NBFC loan settlement in Uttar Pradesh. Get RBI-compliant relief, stop recovery harassment, and reduce debt legally across Lucknow, Noida & Kanpur.',
    heroTitle: 'NBFC Loan Settlement in Uttar Pradesh - Settle Legally',
    heroDescription: 'Professional NBFC loan settlement services for Uttar Pradesh borrowers. Stop coercive recovery, secure 40-70% waivers, and rebuild credit with RBI-compliant strategy.',
    ...generateNBFCLoanContent('uttar-pradesh') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Uttar Pradesh?',
        answer: 'CredSettle helps you negotiate a one-time settlement with your NBFC. Borrowers across Lucknow, Kanpur, and Noida often save 40% to 70% on total debt.'
      },
      {
        question: 'Can CredSettle stop NBFC harassment in Uttar Pradesh?',
        answer: 'Yes. We send formal legal notices to the lender. We also escalate issues to NBFC grievance cells and Lok Adalat benches to stop agent harassment.'
      },
      {
        question: 'How long do NBFC settlements take in Uttar Pradesh?',
        answer: 'Most cases finish in 45 to 90 days. Harassment stops quickly once our legal team contacts your lenders.'
      },
      {
        question: 'Will settlement hurt my CIBIL score in Uttar Pradesh?',
        answer: 'The loan is marked as settled. This is safer than default. We also guide you on how to raise your credit score over the next 12 to 18 months.'
      },
      {
        question: 'What are CredSettle’s fees for Uttar Pradesh NBFC cases?',
        answer: 'We charge fees only after you receive your official settlement letter from the lender. There are no upfront charges.'
      }
    ],
    keywords: ['NBFC loan settlement Uttar Pradesh', 'NBFC debt settlement Lucknow', 'settle NBFC loan Noida', 'CredSettle Uttar Pradesh', 'RBI compliant NBFC settlement UP']
  },
  'west-bengal': {
    stateName: 'West Bengal',
    slug: 'west-bengal',
    title: 'NBFC Loan Settlement in West Bengal | CredSettle',
    metaDescription: 'Expert NBFC loan settlement in West Bengal. Get RBI-compliant relief, stop harassment, and reduce debt legally across Kolkata, Howrah & Siliguri.',
    heroTitle: 'NBFC Loan Settlement in West Bengal - Settle Legally',
    heroDescription: 'Professional NBFC loan settlement services for West Bengal borrowers. Halt coercive recovery, achieve 40-70% waivers, and rebuild credit with localized legal support.',
    ...generateNBFCLoanContent('west-bengal') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in West Bengal?',
        answer: 'CredSettle negotiates a one-time settlement with your NBFC. We submit genuine hardship proof to secure 40% to 70% debt waivers across Kolkata, Howrah, and Siliguri.'
      },
      {
        question: 'Can CredSettle stop NBFC harassment in West Bengal?',
        answer: 'Yes. We send legal notices to lenders and use RBI grievance channels. This stops abusive recovery calls while talks continue.'
      },
      {
        question: 'How long do settlements take in West Bengal?',
        answer: 'Most cases close in 45 to 90 days. Collection pressure drops sharply within 48 hours of our legal intervention.'
      },
      {
        question: 'Will settlement impact my CIBIL score in West Bengal?',
        answer: 'The bank marks the account as settled. We help you obtain no dues certificates and guide you on rebuilding your credit profile.'
      },
      {
        question: 'What are CredSettle fees for West Bengal cases?',
        answer: 'You pay our fees only after your loan is settled. We do not ask for any advance or upfront payment.'
      }
    ],
    keywords: ['NBFC loan settlement West Bengal', 'NBFC debt settlement Kolkata', 'settle NBFC loan Siliguri', 'CredSettle West Bengal', 'RBI compliant NBFC settlement Bengal']
  },
  'gujarat': {
    stateName: 'Gujarat',
    slug: 'gujarat',
    title: 'NBFC Loan Settlement in Gujarat | CredSettle',
    metaDescription: 'Expert NBFC loan settlement in Gujarat. Get RBI-compliant relief, stop harassment, and reduce debt legally across Ahmedabad, Surat, Vadodara & Rajkot.',
    heroTitle: 'NBFC Loan Settlement in Gujarat - Settle Strategically, Protect Growth',
    heroDescription: 'Professional NBFC loan settlement services for Gujarat borrowers. Halt coercive recovery, secure 40-70% waivers, and rebuild credit with industrial corridor expertise.',
    ...generateNBFCLoanContent('gujarat') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Gujarat?',
        answer: 'CredSettle negotiates directly with your NBFC. We prove financial hardship and reduce outstanding debt by 40% to 70% across Ahmedabad, Surat, and Vadodara.'
      },
      {
        question: 'Can CredSettle stop NBFC harassment in Gujarat?',
        answer: 'Yes. We issue legal notices and contact NBFC grievance cells. This protects you and your business from unlawful recovery tactics.'
      },
      {
        question: 'How long do settlements take in Gujarat?',
        answer: 'The settlement process typically takes 45 to 90 days. Recovery calls stop within 48 hours of our legal action.'
      },
      {
        question: 'Will settlement affect my CIBIL score in Gujarat?',
        answer: 'The loan status shows as settled. We ensure you get proper legal closure documents and guide you on restoring your credit score.'
      },
      {
        question: 'What fees does CredSettle charge for Gujarat NBFC cases?',
        answer: 'Our fee is purely success-based. You pay only after your NBFC issues the final settlement approval letter.'
      }
    ],
    keywords: ['NBFC loan settlement Gujarat', 'NBFC debt settlement Ahmedabad', 'settle NBFC loan Surat', 'CredSettle Gujarat', 'RBI compliant NBFC settlement Gujarat']
  },
  'haryana': {
    stateName: 'Haryana',
    slug: 'haryana',
    title: 'NBFC Loan Settlement in Haryana | CredSettle',
    metaDescription: 'Expert NBFC loan settlement in Haryana. Get RBI-compliant debt relief, stop harassment, and settle legally across Gurugram, Faridabad, Panipat & Hisar.',
    heroTitle: 'NBFC Loan Settlement in Haryana - Settle Confidently, Safeguard Growth',
    heroDescription: 'Professional NBFC loan settlement services for Haryana borrowers. Halt coercive recovery, achieve 40-70% waivers, and rebuild credit with NCR and agri expertise.',
    ...generateNBFCLoanContent('haryana') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Haryana?',
        answer: 'CredSettle negotiates a one-time settlement with your lenders. We secure 40% to 70% debt waivers for borrowers in Gurugram, Faridabad, and Panipat.'
      },
      {
        question: 'Can CredSettle stop NBFC harassment in Haryana?',
        answer: 'Yes. We send formal legal notices and take action against rogue agents under RBI fair practice codes.'
      },
      {
        question: 'How long does the settlement process take in Haryana?',
        answer: 'Settlement takes about 45 to 90 days. Agent visits and calls cease soon after we file legal notices.'
      },
      {
        question: 'Will settlement affect my CIBIL score in Haryana?',
        answer: 'The record is updated as settled. We help you collect full clearance paperwork and improve your score over time.'
      },
      {
        question: 'What are CredSettle’s fees for Haryana NBFC cases?',
        answer: 'We do not charge upfront fees. You only pay our service fee after your settlement is successfully approved.'
      }
    ],
    keywords: ['NBFC loan settlement Haryana', 'NBFC debt settlement Gurugram', 'settle NBFC loan Panipat', 'CredSettle Haryana', 'RBI compliant NBFC settlement Haryana']
  },
  'telangana': {
    stateName: 'Telangana',
    slug: 'telangana',
    title: 'NBFC Loan Settlement in Telangana | CredSettle',
    metaDescription: 'Expert NBFC loan settlement in Telangana. Get RBI-compliant debt relief, stop harassment, and settle legally across Hyderabad, Warangal & Nizamabad.',
    heroTitle: 'NBFC Loan Settlement in Telangana - Settle Legally',
    heroDescription: 'Professional NBFC loan settlement services for Telangana borrowers. Halt coercive recovery, secure 40-70% waivers, and rebuild credit with HITEC City and rural expertise.',
    ...generateNBFCLoanContent('telangana') as any,
    faqs: [
      {
        question: 'How does NBFC loan settlement work in Telangana?',
        answer: 'CredSettle helps borrowers in Hyderabad and Warangal negotiate one-time settlements. We cut total loan dues by 40% to 70% under RBI guidelines.'
      },
      {
        question: 'Can CredSettle stop NBFC harassment in Telangana?',
        answer: 'Yes. We send legal notices to lenders and use RBI grievance channels to protect you from abusive recovery agents.'
      },
      {
        question: 'How long do settlements take in Telangana?',
        answer: 'Most cases finish in 45 to 90 days. Harassment stops quickly after our legal team notifies your lender.'
      },
      {
        question: 'Will settlement affect my CIBIL score in Telangana?',
        answer: 'Your account is marked as settled. We guide you on credit rebuilding steps to get your score back over 650 to 700.'
      },
      {
        question: 'What are CredSettle’s fees for Telangana cases?',
        answer: 'Our fee is 100% success-based. You pay only after receiving the official settlement letter from your NBFC.'
      }
    ],
    keywords: ['NBFC loan settlement Telangana', 'NBFC debt settlement Hyderabad', 'settle NBFC loan Warangal', 'CredSettle Telangana', 'RBI compliant NBFC settlement Telangana']
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
    title: `NBFC Loan Settlement in ${stateName} | CredSettle`,
    metaTitle: `NBFC Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert NBFC loan settlement in ${stateName}. RBI-compliant debt relief, stop harassment, and reduce debt legally with CredSettle.`,
    heroTitle: `NBFC Loan Settlement in ${stateName}`,
    heroDescription: `Professional NBFC loan settlement services for borrowers in ${stateName}. Stop harassment, reduce debt significantly, and restore financial stability.`,
    whyNBFCLoanSettlement: comprehensiveContent.whyNBFCLoanSettlement || `Are you struggling with NBFC loan EMIs in ${stateName}? High interest rates make repayment hard. Loan settlement offers a fresh start. CredSettle works under RBI rules. We help reduce your debt by 40% to 70%. We also stop agent harassment and protect your rights.`,
    commonNBFCLoanProblems: comprehensiveContent.commonNBFCLoanProblems || `Borrowers in ${stateName} face heavy interest rates of 18% to 36%. Hidden fees and strict recovery calls add stress. When income drops, paying EMIs becomes tough. CredSettle gives you legal backing and helps resolve these issues step by step.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle provides expert loan settlement across ${stateName}. We handle major NBFC lenders. Our team cuts your outstanding dues by 40% to 70%. We ensure full legal protection and zero harassment.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `We follow clear RBI rules. First, we review your debt. Next, we stop recovery calls. Then, we negotiate lower terms with your lender. Finally, you get a full no dues certificate.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `Our experienced team negotiates directly with NBFCs. We know their settlement policies. We secure the best possible waiver on interest and principal for you.`,
    legalSupport: comprehensiveContent.legalSupport || `Our legal experts protect you at every step. We issue formal legal replies to recovery notices. We verify settlement terms and secure valid closure letters.`,
    benefits: comprehensiveContent.benefits || `Key benefits include: fast stop to agent harassment, 40% to 70% debt reduction, full legal safety, no advance charges, and guidance to rebuild your credit score.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `RBI rules require fair treatment for all borrowers in distress. Lenders must offer genuine settlement options and follow ethical conduct. CredSettle defends your rights under these rules.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Step 1: Free review of your loan details. Step 2: Legal notice to halt agent harassment. Step 3: Financial hardship assessment. Step 4: Direct settlement talks with the lender. Step 5: Official settlement sanction letter. Step 6: Payment and final no dues certificate.`,
    caseStudy: comprehensiveContent.caseStudy || `A borrower in ${cityName} owed ₹7 lakh across two NBFCs. Aggressive recovery calls caused immense stress. CredSettle stepped in and stopped all calls in 48 hours. We negotiated a final settlement of ₹2.8 lakh, cutting debt by 60%. The client is now debt-free.`,
    finalThoughts: comprehensiveContent.finalThoughts || `If you face mounting NBFC debt in ${stateName}, take action today. Settle your debt legally through RBI rules and regain peace of mind. Call CredSettle now for a free consultation.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does NBFC loan settlement work in ${stateName}?`,
        answer: `CredSettle negotiates a one-time settlement with your NBFC lender. This typically reduces your total debt by 40% to 70% under RBI guidelines.`
      },
      {
        question: `Is NBFC loan settlement legal in ${stateName}?`,
        answer: `Yes. NBFC loan settlement follows RBI guidelines. It is completely legal and gives you full formal closure.`
      },
      {
        question: `How much can I save through NBFC settlement in ${stateName}?`,
        answer: `Most clients save between 40% and 70%. For example, an outstanding debt of ₹5 lakh can often be settled for ₹1.5 to ₹3 lakh.`
      },
      {
        question: `Will NBFC settlement affect my CIBIL score in ${stateName}?`,
        answer: `The loan shows as settled on your credit report. This is better than a default. We also guide you on how to rebuild your score step by step.`
      },
      {
        question: `How much does NBFC settlement cost in ${stateName}?`,
        answer: `We charge success-based fees only after your settlement is complete. There are no upfront fees. Contact us for a free case assessment.`
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
