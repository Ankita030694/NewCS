// Import comprehensive content generator
import { generateComprehensiveContent } from './content-generator';

export interface StateContent {
  stateName: string;
  slug: string;
  title: string;
  metaDescription: string;
  metaTitle?: string; // 60 characters optimized
  heroTitle: string;
  heroDescription: string;
  // Old format (backward compatibility)
  introduction?: string;
  overview?: string;
  benefits?: string;
  process?: string;
  legalAspects?: string;
  // New comprehensive blog sections
  stateIntroduction?: string;
  whyLoanSettlement?: string;
  commonLoanProblems?: string;
  credsettleOverview?: string;
  rbiCompliantProcess?: string;
  negotiationHelp?: string;
  legalSupport?: string;
  typesOfLoans?: {
    creditCard: string;
    personalLoan: string;
    businessLoan: string;
    autoLoan: string;
  };
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
  'andaman-and-nicobar-islands': {
    stateName: 'Andaman and Nicobar Islands',
    slug: 'andaman-and-nicobar-islands',
    title: 'Personal Loan Settlement in Andaman and Nicobar Islands | CredSettle',
    metaTitle: 'Personal Loan Settlement in Andaman & Nicobar | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Andaman and Nicobar Islands. Get RBI-compliant OTS solutions, stop harassment, and achieve financial freedom with CredSettle.',
    heroTitle: 'Personal Loan Settlement in Andaman and Nicobar Islands',
    heroDescription: 'Professional personal loan settlement services for residents of Andaman and Nicobar Islands. Stop harassment and secure legal debt closure.',
    ...generateComprehensiveContent('andaman-and-nicobar-islands') as any,
    faqs: [
      {
        question: 'Can I settle my personal loan without traveling to the mainland?',
        answer: 'Yes. CredSettle manages the entire loan settlement online. You do not need to travel to the mainland. We handle all talks with your bank and send your closure letters by email and post.'
      },
      {
        question: 'Do recovery agents have the right to visit my home in the islands?',
        answer: 'No. RBI rules strictly ban unauthorized home visits by recovery agents. If agents visit or harass you, CredSettle sends legal notices to stop them right away.'
      },
      {
        question: 'How do I make settlement payments from the islands?',
        answer: 'You pay your agreed settlement amount directly to your lender via NEFT, RTGS, or online banking. CredSettle verifies the payment receipt before closing your file.'
      },
      {
        question: 'Will my island location affect my settlement approval chances?',
        answer: 'No. Your location does not lower your chance of approval. Lenders follow standard RBI rules for all borrowers across India.'
      },
      {
        question: 'How will I receive my settlement closure documents?',
        answer: 'You will receive digital copies by email immediately after payment. Physical No Objection Certificates (NOC) are sent by registered post to your address.'
      }
    ],
    keywords: ['personal loan settlement Andaman and Nicobar Islands', 'OTS Andaman', 'debt settlement Port Blair', 'loan settlement services islands', 'RBI compliant settlement Andaman']
  },
  'andhra-pradesh': {
    stateName: 'Andhra Pradesh',
    slug: 'andhra-pradesh',
    title: 'Personal Loan Settlement in Andhra Pradesh | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Andhra Pradesh. Get RBI-compliant OTS solutions, stop harassment, and achieve financial freedom with CredSettle across Hyderabad, Visakhapatnam, and all districts.',
    heroTitle: 'Personal Loan Settlement in Andhra Pradesh',
    heroDescription: 'Professional personal loan settlement services for residents of Andhra Pradesh. Stop harassment and secure legal debt closure across all districts.',
    ...generateComprehensiveContent('andhra-pradesh') as any,
    faqs: [
      {
        question: 'Which banks and NBFCs do you handle settlements with in Andhra Pradesh?',
        answer: 'CredSettle works with all major lenders in Andhra Pradesh. We settle loans with SBI, HDFC Bank, ICICI Bank, Axis Bank, and top NBFCs like Bajaj Finserv and Tata Capital.'
      },
      {
        question: 'Recovery agents are visiting my workplace in Visakhapatnam. What can you do?',
        answer: 'Workplace visits by agents break RBI fair practice rules. CredSettle issues legal notices to the bank immediately. We stop these visits within 24 to 48 hours.'
      },
      {
        question: 'I took a loan for farming or business and suffered losses. Can this help my settlement?',
        answer: 'Yes. Income loss is a strong reason for loan relief. We share proof of business loss or crop failure with the lender to get a bigger waiver on your loan balance.'
      },
      {
        question: 'What settlement percentage can I expect on my personal loan?',
        answer: 'Borrowers in Andhra Pradesh usually save 25% to 65% on their unpaid loan. Your final waiver depends on your loan age, default period, and financial hardship.'
      },
      {
        question: 'How do I pay the settlement amount from Andhra Pradesh?',
        answer: 'You pay the settled sum directly to the lender bank account via NEFT, RTGS, or net banking. CredSettle verifies every payment before closing the account.'
      }
    ],
    keywords: ['personal loan settlement Andhra Pradesh', 'OTS Hyderabad', 'debt settlement Visakhapatnam', 'loan settlement Andhra', 'RBI compliant settlement AP']
  },
  'arunachal-pradesh': {
    stateName: 'Arunachal Pradesh',
    slug: 'arunachal-pradesh',
    title: 'Personal Loan Settlement in Arunachal Pradesh | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Arunachal Pradesh. Get RBI-compliant OTS solutions, stop harassment, and achieve financial freedom with CredSettle across Itanagar and all districts.',
    heroTitle: 'Personal Loan Settlement in Arunachal Pradesh',
    heroDescription: 'Professional personal loan settlement services for residents of Arunachal Pradesh. Stop harassment and secure legal debt closure.',
    ...generateComprehensiveContent('arunachal-pradesh') as any,
    faqs: [
      {
        question: 'Can CredSettle help me settle loans even if I live in a remote area?',
        answer: 'Yes. CredSettle works 100% remotely. You can share documents and complete negotiations over phone and WhatsApp from anywhere in Arunachal Pradesh.'
      },
      {
        question: 'My loan was taken from a bank in Itanagar but I have moved. Is this a problem?',
        answer: 'No. Bank loans are tracked centrally in India. Our legal team negotiates with the central debt recovery teams of your bank regardless of your current district.'
      },
      {
        question: 'What if I have poor internet connectivity in my town?',
        answer: 'We coordinate with you via simple phone calls and SMS whenever you have network access. We keep full buffers so network delays never hurt your case.'
      },
      {
        question: 'Will lenders take my financial hardship seriously?',
        answer: 'Yes. CredSettle prepares a formal hardship file. We present income proof, medical bills, or local market slowdowns to win lower settlement terms for you.'
      },
      {
        question: 'What happens if recovery agents visit my home or village?',
        answer: 'Unannounced agent visits violate RBI rules. Contact CredSettle right away. We send legal warnings to the lender and file RBI ombudsman complaints to halt harassment.'
      }
    ],
    keywords: ['personal loan settlement Arunachal Pradesh', 'OTS Itanagar', 'debt settlement Arunachal', 'loan settlement services AP', 'RBI compliant settlement']
  },
  'assam': {
    stateName: 'Assam',
    slug: 'assam',
    title: 'Personal Loan Settlement in Assam | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Assam. Get RBI-compliant OTS solutions, stop harassment, and achieve financial freedom with CredSettle across Guwahati, Dibrugarh, and all districts.',
    heroTitle: 'Personal Loan Settlement in Assam',
    heroDescription: 'Professional personal loan settlement services for residents of Assam. Stop harassment and secure legal debt closure across all districts.',
    ...generateComprehensiveContent('assam') as any,
    faqs: [
      {
        question: 'My business was affected by annual floods in Assam. Will this help my settlement?',
        answer: 'Yes. Flood damage and income loss are valid hardship grounds. We submit flood disruption reports and income loss proofs to help you secure a 40% to 65% debt reduction.'
      },
      {
        question: 'I work in the tea or oil industry with seasonal pay. Can payments be structured around my income?',
        answer: 'Yes. We negotiate with lenders to align settlement instalments with your salary cycles or harvest seasons so you can pay without extra strain.'
      },
      {
        question: 'Which banks and NBFCs in Assam do you work with?',
        answer: 'We settle loans from all banks in Assam including SBI, Assam Gramin Vikash Bank, HDFC, ICICI, Axis Bank, and leading NBFCs like Bajaj Finance and Tata Capital.'
      },
      {
        question: 'Recovery agents came to my home without permission. What should I do?',
        answer: 'Call CredSettle immediately. Unauthorized home visits violate RBI rules. Our lawyers issue cease-and-desist notices to stop harassment within 24 to 48 hours.'
      },
      {
        question: 'How long does loan settlement take in Assam?',
        answer: 'Most loan settlements take between 3 to 6 months. We handle all paperwork and lender discussions from start to finish.'
      }
    ],
    keywords: ['personal loan settlement Assam', 'OTS Guwahati', 'debt settlement Assam', 'loan settlement Dibrugarh', 'RBI compliant settlement Assam']
  },
  'bihar': {
    stateName: 'Bihar',
    slug: 'bihar',
    title: 'Personal Loan Settlement in Bihar | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Bihar. Get RBI-compliant OTS solutions, stop harassment, and achieve financial freedom across Patna, Gaya, Muzaffarpur, and all districts.',
    heroTitle: 'Personal Loan Settlement in Bihar',
    heroDescription: 'Professional personal loan settlement services for residents of Bihar. Stop harassment and secure legal debt closure across all districts.',
    ...generateComprehensiveContent('bihar') as any,
    faqs: [
      {
        question: 'I suffered business or farming losses in Bihar. Can this help my settlement?',
        answer: 'Yes. Real hardship like business loss or family medical bills helps prove genuine inability to pay. We use these records to negotiate a 30% to 70% loan waiver.'
      },
      {
        question: 'Recovery agents visited my village and spoke to neighbors. Is this legal?',
        answer: 'No. Disclosing your debt to neighbors violates RBI privacy guidelines. CredSettle takes immediate legal action against the lender to stop such unlawful visits.'
      },
      {
        question: 'My loan is from a local NBFC or fintech app in Patna. Can you help?',
        answer: 'Yes. We settle loans with all registered banks, NBFCs, and digital lending apps operating in Bihar.'
      },
      {
        question: 'Can settlement payments be paid in instalments?',
        answer: 'Yes. We often negotiate two to four easy instalments for borrowers who cannot pay the entire settlement amount in one lump sum.'
      },
      {
        question: 'What if a lender files a legal notice while we negotiate?',
        answer: 'Our panel lawyers reply to legal notices and inform the court or lender that a settlement is underway, protecting your rights at all times.'
      }
    ],
    keywords: ['personal loan settlement Bihar', 'OTS Patna', 'debt settlement Bihar', 'loan settlement Muzaffarpur', 'RBI compliant settlement Bihar']
  },
  'chhattisgarh': {
    stateName: 'Chhattisgarh',
    slug: 'chhattisgarh',
    title: 'Personal Loan Settlement in Chhattisgarh | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Chhattisgarh. Get RBI-compliant OTS solutions across Raipur, Bilaspur, and all districts. Stop harassment and achieve debt freedom.',
    heroTitle: 'Personal Loan Settlement in Chhattisgarh',
    heroDescription: 'Professional personal loan settlement services for residents of Chhattisgarh. Secure legal debt closure with expert RBI-compliant negotiations.',
    ...generateComprehensiveContent('chhattisgarh') as any,
    faqs: [
      {
        question: 'I lost my job in an industrial plant in Bhilai. Will this help my settlement?',
        answer: 'Yes. Job loss or pay cuts in manufacturing and mining are recognized hardships. We present your severance records to win higher waivers from your lenders.'
      },
      {
        question: 'Can you handle settlements for loans from both banks and NBFCs in Raipur?',
        answer: 'Yes. We settle loans with all major banks like SBI, HDFC, and ICICI, as well as top NBFCs like Bajaj Finserv, Muthoot, and Tata Capital.'
      },
      {
        question: 'Recovery agents are calling my family members. Is this allowed?',
        answer: 'No. Calling family members or friends violates RBI rules. CredSettle issues legal notices to stop these calls within 24 to 48 hours.'
      },
      {
        question: 'How long does the loan settlement process take in Chhattisgarh?',
        answer: 'A standard personal loan settlement takes 3 to 6 months depending on bank response times. We track every stage until you get your final NOC.'
      },
      {
        question: 'Will settlement help stop court notices or legal threats?',
        answer: 'Yes. A formal settlement closes your loan account with a full waiver of pending dues, ending all legal risks.'
      }
    ],
    keywords: ['personal loan settlement Chhattisgarh', 'OTS Raipur', 'debt settlement Bilaspur', 'loan settlement Chhattisgarh', 'RBI compliant settlement Raipur']
  },
  'goa': {
    stateName: 'Goa',
    slug: 'goa',
    title: 'Personal Loan Settlement in Goa | CredSettle',
    metaDescription: 'Expert personal loan settlement services in Goa. Get RBI-compliant OTS solutions across Panaji, Margao, and all talukas. Stop harassment and achieve financial freedom.',
    heroTitle: 'Personal Loan Settlement in Goa',
    heroDescription: 'Professional personal loan settlement services for Goa residents. Secure legal debt closure with expert negotiations tailored to Goa’s unique economy.',
    ...generateComprehensiveContent('goa') as any,
    faqs: [
      {
        question: 'My tourism business faced heavy losses. Can this help my settlement?',
        answer: 'Yes. Tourism seasonality and business drops are valid grounds for loan relief. We submit your income records to negotiate 30% to 60% waivers with your bank.'
      },
      {
        question: 'I have seasonal income in hospitality. Can payments be scheduled accordingly?',
        answer: 'Yes. We negotiate payment plans aligned with peak tourism months so you can pay comfortably without extra strain.'
      },
      {
        question: 'Recovery agents came to my workplace in Panaji. Can you stop them?',
        answer: 'Yes. Workplace visits violate RBI fair practice rules. CredSettle sends legal notices to stop all unauthorized visits immediately.'
      },
      {
        question: 'I have loans from multiple lenders. Can you settle all of them together?',
        answer: 'Yes. CredSettle manages multi-bank settlements at once. We negotiate with all your lenders simultaneously to close your debts cleanly.'
      },
      {
        question: 'Will my loan settlement remain confidential?',
        answer: 'Yes. We maintain 100% client privacy. All talks with lenders are handled confidentially by our legal team.'
      }
    ],
    keywords: ['personal loan settlement Goa', 'OTS Panaji', 'debt settlement Margao', 'loan settlement Goa', 'RBI compliant settlement Goa']
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
  const comprehensiveContent = generateComprehensiveContent(slug) as Partial<StateContent>;

  // Fallback content if generator doesn't have state info
  const cityName = stateName.split(' ')[0];
  const defaultContent: StateContent = {
    stateName,
    slug,
    title: `Personal Loan Settlement in ${stateName} | CredSettle`,
    metaTitle: `Personal Loan Settlement in ${stateName} | CredSettle`,
    metaDescription: `Expert personal loan settlement services in ${stateName}. Get RBI-compliant OTS solutions, stop harassment, and achieve financial freedom with CredSettle.`,
    heroTitle: `Personal Loan Settlement in ${stateName}`,
    heroDescription: `Professional personal loan settlement services for residents of ${stateName}. Stop harassment and secure legal debt closure.`,
    whyLoanSettlement: comprehensiveContent.whyLoanSettlement || `Loan settlement helps borrowers in ${stateName} who cannot pay their debts. When loan EMIs pile up, high interest makes repayment impossible. A One-Time Settlement (OTS) lets you clear your loan for a lower lump sum. CredSettle negotiates with your bank to cut your debt by 25% to 65%. This stops recovery agent calls. It also brings you peace of mind and full legal closure under RBI rules.`,
    commonLoanProblems: comprehensiveContent.commonLoanProblems || `Borrowers in ${stateName} face many financial hurdles. Sudden job loss, medical emergencies, and business slowdowns cause missed EMIs. High interest rates on personal loans make the debt balance grow quickly. Many borrowers also face aggressive recovery calls and workplace visits. CredSettle steps in to handle all lender talks and stop harassment right away.`,
    credsettleOverview: comprehensiveContent.credsettleOverview || `CredSettle is a leading debt settlement platform in India. We help residents in ${stateName} resolve unpaid personal loans legally. Our team consists of skilled debt negotiators and banking lawyers. We work within RBI guidelines to secure fair waivers for genuine borrowers. We have helped thousands of clients reduce their debt burden and regain financial peace.`,
    rbiCompliantProcess: comprehensiveContent.rbiCompliantProcess || `CredSettle follows strict RBI guidelines for debt resolution. We start by reviewing your loan records and income hardship. Next, we submit a formal OTS proposal to your lender. Once the lender agrees on a reduced amount, they issue an official settlement letter. You pay the agreed sum directly to the lender. Finally, you receive a No Objection Certificate (NOC) that confirms full account closure.`,
    negotiationHelp: comprehensiveContent.negotiationHelp || `CredSettle advocates on your behalf with banks and NBFCs in ${stateName}. We know bank settlement policies and internal approval limits. We present your medical, job loss, or business hardship proofs to the credit committee. This helps you get the deepest possible waiver on your outstanding balance.`,
    legalSupport: comprehensiveContent.legalSupport || `Our panel lawyers protect you from unlawful debt collection practices. When you join CredSettle, we issue legal notices to lenders and recovery teams. This stops recovery calls and home visits. If a lender sends a legal notice or summons, our lawyers guide you on the right legal response under RBI rules.`,
    typesOfLoans: comprehensiveContent.typesOfLoans || {
      creditCard: `Credit card debt settlement in ${stateName} helps cardholders clear high-interest card dues for a 30% to 70% lower lump sum.`,
      personalLoan: `Personal loan settlement in ${stateName} lets borrowers resolve unsecured loans with a 25% to 65% waiver on outstanding amounts.`,
      businessLoan: `Business loan settlement in ${stateName} helps business owners close unpaid commercial loans after business losses or cash flow issues.`,
      autoLoan: `Auto loan settlement in ${stateName} helps vehicle owners settle remaining shortfall balances after loan default or repossession.`
    },
    benefits: comprehensiveContent.benefits || `Settling your loan through CredSettle brings many advantages: 1. Big debt savings: Reduce your total debt by 25% to 65%. 2. No more harassment: Stop calls and home visits from collection agents. 3. Full legal safety: Receive official OTS letters and No Objection Certificates. 4. Expert support: Work with experienced banking lawyers and debt negotiators. 5. Fresh start: Clear bad debt so you can rebuild your credit score over time.`,
    rbiGuidelines: comprehensiveContent.rbiGuidelines || `The Reserve Bank of India sets clear rules to protect borrowers. Recovery agents cannot call before 8 AM or after 7 PM. They cannot visit your home without notice or threaten your family. Lenders must offer fair One-Time Settlement schemes to borrowers in genuine financial distress. CredSettle ensures that your lender follows every RBI rule during your settlement.`,
    stepByStepGuide: comprehensiveContent.stepByStepGuide || `Closing your loan with CredSettle is simple: Step 1: Free Consultation - Talk to our debt advisor about your loan details. Step 2: Hardship Review - Share your income proofs and bank statements. Step 3: Harassment Shield - We send legal notices to stop recovery calls. Step 4: Bank Negotiation - Our team talks to your bank to lower the debt. Step 5: Settlement Letter - You receive an official OTS letter from the lender. Step 6: Direct Payment - You pay the settled sum directly to the bank. Step 7: Account Closure - Receive your No Objection Certificate (NOC).`,
    caseStudy: comprehensiveContent.caseStudy || `A borrower in ${stateName} had ₹6.5 lakh in personal loan debt after losing their job. High interest made repayment impossible. CredSettle took over the case and stopped recovery calls within 48 hours. Our team negotiated with the bank and agreed on a final settlement of ₹2.6 lakh. The client saved ₹3.9 lakh (60% waiver) and received an official NOC from the bank.`,
    finalThoughts: comprehensiveContent.finalThoughts || `Personal loan debt can feel overwhelming, but you do not have to face it alone. CredSettle provides a safe, legal, and affordable way to settle your debts in ${stateName}. Take the first step toward financial freedom today. Contact CredSettle for a free and confidential debt consultation.`,
    faqs: comprehensiveContent.faqs || [
      {
        question: `How does loan settlement work in ${stateName}?`,
        answer: `CredSettle talks with your bank to agree on a lower lump sum payment. Once you pay the agreed amount, the lender closes the loan account permanently.`
      },
      {
        question: `Can CredSettle stop recovery agent harassment in ${stateName}?`,
        answer: `Yes. We send legal notices to lenders and collection agencies. This stops harassment calls and visits within 24 to 48 hours.`
      },
      {
        question: `What documents do I get after loan settlement?`,
        answer: `You receive an official One-Time Settlement (OTS) letter and a No Objection Certificate (NOC) confirming full debt closure.`
      },
      {
        question: `How long does the loan settlement take?`,
        answer: `Most loan settlements take 3 to 6 months depending on bank approval timelines.`
      },
      {
        question: `Will loan settlement hurt my credit score?`,
        answer: `The account will be marked as settled on your credit report. This is much better than ongoing default. We provide clear tips to help you rebuild your credit score.`
      },
      {
        question: `Which lenders do you settle loans with in ${stateName}?`,
        answer: `We work with all major public banks, private banks, and RBI-registered NBFCs across ${stateName}.`
      }
    ],
    keywords: comprehensiveContent.keywords || [`loan settlement in ${stateName}`, `settle loans in ${stateName}`, `loan settlement company in ${stateName}`, `best loan settlement lawyers in ${stateName}`, `debt settlement agency in ${stateName}`, `RBI compliant settlement ${stateName}`],
    majorCities: comprehensiveContent.majorCities || [cityName],
    infographicSuggestion: comprehensiveContent.infographicSuggestion || `Infographic showing the RBI-compliant loan settlement process in ${stateName}, highlighting key steps from initial consultation through final closure.`
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
