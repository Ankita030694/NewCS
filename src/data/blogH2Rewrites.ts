// Map of slug -> specific H2 replacements for generic headings across blog articles
// Supports both original terms (settlement, understanding) and readability variants (closure, knowing)
export const GENERIC_H2_REWRITES: Record<string, Record<string, string>> = {
  // 1. how-credsettle-helped-a-client-settle-credit-card-debt-effectively-in-india
  'how-credsettle-helped-a-client-settle-credit-card-debt-effectively-in-india': {
    'a real-life success story with credsettle': 'Credit Card Settlement: Real-Life Success Story',
    'what is debt settlement in india?': 'What is Credit Card Debt Settlement in India?',
    'what is debt closure in india?': 'What is Credit Card Debt Settlement in India?',
    'final thoughts': 'Final Thoughts: Settling Card Dues Legally',
  },
  // 2. what-is-loan-settlement-and-how-does-it-affect-your-credit-score
  'what-is-loan-settlement-and-how-does-it-affect-your-credit-score': {
    'what is loan settlement?': 'What is Loan Settlement and How Does It Work?',
    'what is loan closure?': 'What is Loan Settlement and How Does It Work?',
    'how does loan settlement work?': 'How Does Loan Settlement Work with Lenders?',
    'how does loan closure work?': 'How Does Loan Settlement Work with Lenders?',
    'impact of loan settlement on your credit score': 'Impact of Loan Settlement on Your Credit Score',
    'impact of loan closure on your credit score': 'Impact of Loan Settlement on Your Credit Score',
    'choices to loan settlement': 'Alternatives to Loan Settlement That Protect Credit',
    'choices to loan closure': 'Alternatives to Loan Settlement That Protect Credit',
    'alternatives to loan settlement': 'Alternatives to Loan Settlement That Protect Credit',
    'alternatives to loan closure': 'Alternatives to Loan Settlement That Protect Credit',
    'how to improve credit score after loan settlement': 'How to Improve Credit Score After Loan Settlement',
    'how to improve credit score after loan closure': 'How to Improve Credit Score After Loan Settlement',
    'conclusion:': 'Conclusion: Managing Loan Settlement and Credit Score',
  },
  // 3. rebuilding-your-credit-score-after-debt-settlement-with-credsettle
  'rebuilding-your-credit-score-after-debt-settlement-with-credsettle': {
    'how debt settlement affects your credit score': 'How Debt Settlement Affects Your CIBIL Score',
    'how debt closure affects your credit score': 'How Debt Settlement Affects Your CIBIL Score',
    'plans to rebuild your credit score:': 'Strategies to Rebuild Your Credit Score Fast',
    'strategies to rebuild your credit score:': 'Strategies to Rebuild Your Credit Score Fast',
    'why choose credsettle for credit recovery?': 'Why Choose CredSettle for Credit Score Recovery?',
    'conclusion:': 'Conclusion: Rebuilding Credit Score with CredSettle',
  },
  // 4. recovery-agents-rogue-rbi-backed-defences
  'recovery-agents-rogue-rbi-backed-defences': {
    'identification:': 'Agent Identification Rules Under RBI',
    'respect and dignity:': 'Borrower Right to Respect and Dignity',
    'confidentiality:': 'Confidentiality of Borrower Loan Records',
    'confidentiality: nbsp;': 'Confidentiality of Borrower Loan Records',
    'time restrictions:': 'Permissible Calling Time Restrictions',
    'fair treatment:': 'Fair Treatment Guidelines for Recovery Agents',
    'transparency:': 'Transparency in Loan Recovery Operations',
  },
  // 5. protecting-yourself-from-creditor-harassment-with-credsettle
  'protecting-yourself-from-creditor-harassment-with-credsettle': {
    'identifying creditor harassment': 'Identifying Creditor and Collection Harassment',
    'identifying lender harassment': 'Identifying Creditor and Collection Harassment',
    'your legal rights against harassment': 'Your Legal Rights Against Creditor Harassment',
    'how credsettle helps you:': 'How CredSettle Protects Borrowers from Harassment',
    'conclusion:': 'Conclusion: Stopping Creditor Harassment Legally',
  },
  // 6. loan-settlement-vs-loan-closure-what-is-the-difference
  'loan-settlement-vs-loan-closure-what-is-the-difference': {
    'introduction': 'Introduction: Settlement vs Loan Closure',
    'what is loan settlement?': 'Understanding What Loan Settlement Entails',
    'what is loan closure?': 'Understanding What Loan Closure Entails',
    'pros and cons of loan settlement': 'Pros and Cons of Choosing Loan Settlement',
    'pros and cons of loan closure': 'Pros and Cons of Choosing Loan Settlement',
    'why loan closure is better for your credit score': 'Why Loan Closure is Better for Your Credit Score',
    'conclusion': 'Conclusion: Choosing Between Settlement and Closure',
  },
  // 7. latest-developments-in-debt-settlement-regulations-in-india
  'latest-developments-in-debt-settlement-regulations-in-india': {
    'key regulatory bodies governing debt settlement in india': 'Key Regulatory Bodies Governing Settlement in India',
    'key regulatory bodies governing debt closure in india': 'Key Regulatory Bodies Governing Settlement in India',
    'how credsettle can assist you': 'How CredSettle Helps You Navigate New RBI Rules',
    'final thoughts': 'Final Thoughts on India Debt Settlement Rules',
  },
  // 8. lien-removal-from-bank-accounts-in-india
  'lien-removal-from-bank-accounts-in-india': {
    'knowing a lien': 'Understanding What a Bank Lien Means in India',
    'understanding a lien': 'Understanding What a Bank Lien Means in India',
    'steps to remove a lien from your bank account': 'Steps to Remove a Lien from Your Bank Account',
    'addressing common queries': 'Common Questions on Bank Account Lien Removal',
    'preventive measures': 'Preventive Measures to Avoid Future Bank Liens',
    'conclusion': 'Conclusion: Securing Bank Lien Removal Legally',
  },
  // 9. aggressive-debt-collectors-know-your-rights
  'aggressive-debt-collectors-know-your-rights': {
    'knowing debt collection laws in india': 'Understanding Debt Collection Laws in India',
    'understanding debt collection laws in india': 'Understanding Debt Collection Laws in India',
    'your rights against aggressive debt collectors': 'Your Legal Rights Against Aggressive Collectors',
    'steps to handle aggressive debt collectors in india': 'Steps to Handle Aggressive Collectors in India',
    'legal remedies available in india': 'Legal Remedies and RBI Defences Available in India',
  },
  // 10. how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide
  'how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide': {
    'introduction:': 'Introduction: Credit Card Settlement Steps',
    '1. understand credit card settlement:': '1. Understand Credit Card Settlement Terms',
    '1. know credit card closure:': '1. Understand Credit Card Settlement Terms',
    '2. assess your financial situation:': '2. Assess Your Debt and Financial Hardship',
    '3. contact your credit card issuer:': '3. Contact Your Bank Credit Card Issuer',
    '4. make a settlement offer:': '4. Make a Formal Card Settlement Offer',
    '4. make a closure offer:': '4. Make a Formal Card Settlement Offer',
    '5. negotiate the terms:': '5. Negotiate Waivers and Payment Terms',
    '6. get the agreement in writing:': '6. Obtain the Official Bank Settlement Letter',
    '7. make the payment:': '7. Pay the Agreed Settlement Sum',
    '8. follow-up on your credit report:': '8. Verify Credit Report Closure Updates',
    '9. consult with experts (optional):': '9. Consult with Legal Debt Settlement Experts',
    'conclusion:': 'Conclusion: Negotiating Card Settlement in India',
  },
  // 11. how-to-negotiate-a-loan-settlement-without-affecting-your-cibil-score
  'how-to-negotiate-a-loan-settlement-without-affecting-your-cibil-score': {
    'knowing loan settlement and its impact on cibil score': 'Understanding Loan Settlement Impact on CIBIL',
    'knowing loan closure and its impact on cibil score': 'Understanding Loan Settlement Impact on CIBIL',
    'understanding loan settlement and its impact on cibil score': 'Understanding Loan Settlement Impact on CIBIL',
    'key steps to settle a loan settlement without damaging your cibil score': 'Steps to Settle a Loan Without Damaging CIBIL',
    'key steps to settle a loan closure without damaging your cibil score': 'Steps to Settle a Loan Without Damaging CIBIL',
    'choices to loan settlement that protect your cibil score': 'Alternatives to Settlement That Protect CIBIL Score',
    'choices to loan closure that protect your cibil score': 'Alternatives to Settlement That Protect CIBIL Score',
    'alternatives to loan settlement that protect your cibil score': 'Alternatives to Settlement That Protect CIBIL Score',
    'how credsettle can help': 'How CredSettle Helps Protect Your Credit Score',
    'final thoughts': 'Final Thoughts on Loan Settlement and CIBIL',
  },
  // 12. how-lawyer-and-expert-panels-efficiently-handle-multi-bank-loan-settlements
  'how-lawyer-and-expert-panels-efficiently-handle-multi-bank-loan-settlements': {
    '1. what are multi-bank loan settlements?': '1. What Are Multi-Bank Loan Settlements?',
    '1. what are multi-bank loan closures?': '1. What Are Multi-Bank Loan Settlements?',
    '2. why multi-bank loan settlements are complex': '2. Why Multi-Bank Loan Settlements Are Complex',
    '2. why multi-bank loan closures are complex': '2. Why Multi-Bank Loan Settlements Are Complex',
    '3. how lawyer and expert panels collaborate in multi-bank loan settlements': '3. How Expert Lawyer Panels Coordinate Settlements',
    '3. how lawyer and expert panels collaborate in multi-bank loan closures': '3. How Expert Lawyer Panels Coordinate Settlements',
    '5. real-life example: successful multi-bank loan settlement': '4. Case Study: Successful Multi-Bank Resolution',
    'conclusion': 'Conclusion: Expert Panels for Multi-Bank Relief',
  },
  // 13. bank-loan-settlement-rules-a-complete-guide-for-borrowers
  'bank-loan-settlement-rules-a-complete-guide-for-borrowers': {
    'introduction': 'Introduction: Complete Bank Settlement Rules',
    'what is loan settlement?': 'What is Bank Loan Settlement Under RBI Rules?',
    'what is loan closure?': 'What is Bank Loan Settlement Under RBI Rules?',
    'eligibility for loan settlement': 'Eligibility Criteria for Bank Loan Settlement',
    'eligibility for loan closure': 'Eligibility Criteria for Bank Loan Settlement',
    'loan settlement process': 'Step-by-Step Bank Loan Settlement Process',
    'loan closure steps': 'Step-by-Step Bank Loan Settlement Process',
    'impact on credit score': 'Impact of Bank Loan Settlement on Credit Score',
    'choice options to loan settlement': 'Alternative Options to Bank Loan Settlement',
    'choice options to loan closure': 'Alternative Options to Bank Loan Settlement',
    'how to settle loan settlement?': 'How to Negotiate Bank Loan Settlement',
    'how to settle loan closure?': 'How to Negotiate Bank Loan Settlement',
    'conclusion': 'Conclusion: Navigating Bank Loan Settlement Rules',
    'faqs': 'Common Questions on Bank Loan Settlement Rules',
  },
  // 14. need-help-paying-credit-card
  'need-help-paying-credit-card': {
    'introduction': 'Introduction: Resolving Credit Card Debt',
    'what is loan settlement?': 'What is Credit Card Debt Settlement?',
    'what is loan closure?': 'What is Credit Card Debt Settlement?',
    'what is the loan settlement process?': 'The Credit Card Settlement Process Explained',
    'what is the loan closure steps?': 'The Credit Card Settlement Process Explained',
    'advantages and disadvantages of loan settlement': 'Pros and Cons of Credit Card Debt Settlement',
    'advantages and disadvantages of loan closure': 'Pros and Cons of Credit Card Debt Settlement',
    'how does loan settlement impact your credit score?': 'Credit Score Impact of Credit Card Settlement',
    'how does loan closure impact your credit score?': 'Credit Score Impact of Credit Card Settlement',
    'factors to consider before choosing loan settlement': 'Key Factors Before Opting for Card Settlement',
    'factors to consider before choosing loan closure': 'Key Factors Before Opting for Card Settlement',
    'choices to loan settlement': 'Alternatives to Credit Card Loan Settlement',
    'choices to loan closure': 'Alternatives to Credit Card Loan Settlement',
    '✅ conclusion': 'Conclusion: Settling Credit Card Debt in India',
  },
  // 15. ultimate-guide-debt-settlement-india-rbi-guidelines
  'ultimate-guide-debt-settlement-india-rbi-guidelines': {
    'introduction to debt settlement in india': 'Introduction: Debt Settlement Rules in India',
    'introduction to debt closure in india': 'Introduction: Debt Settlement Rules in India',
    'knowing rbi guidelines for debt settlement': 'RBI Guidelines for Debt Settlement in India',
    'knowing rbi guidelines for debt closure': 'RBI Guidelines for Debt Settlement in India',
    'understanding rbi guidelines for debt settlement': 'RBI Guidelines for Debt Settlement in India',
  },
  // 16. how-to-deal-with-recovery-agents-for-credit-card-defaults-legally
  'how-to-deal-with-recovery-agents-for-credit-card-defaults-legally': {
    'who are recovery agents?': 'Who Are Credit Card Recovery Agents in India?',
  },
  // 17. debt-settlement-vs-debt-consolidation
  'debt-settlement-vs-debt-consolidation': {
    'knowing debt settlement': 'Understanding Debt Settlement: How It Works',
    'knowing debt closure': 'Understanding Debt Settlement: How It Works',
    'understanding debt settlement': 'Understanding Debt Settlement: How It Works',
    'knowing debt combining loans': 'Understanding Debt Consolidation: Key Features',
    'conclusion': 'Conclusion: Settlement vs Consolidation Decision',
  },
  // 18. debt-settlement-vs-paying-minimum-dues-long-term-impact
  'debt-settlement-vs-paying-minimum-dues-long-term-impact': {
    'debt closure vs paying minimum dues: long-term impact': 'Debt Settlement vs Minimum Dues: Long-Term Impact',
    'debt settlement vs paying minimum dues: long-term impact': 'Debt Settlement vs Minimum Dues: Long-Term Impact',
    'knowing debt settlement': 'Understanding Debt Settlement and Debt Relief',
    'knowing debt closure': 'Understanding Debt Settlement and Debt Relief',
    'understanding debt settlement': 'Understanding Debt Settlement and Debt Relief',
    'knowing paying minimum dues': 'Understanding the Trap of Paying Minimum Dues',
    'conclusion': 'Conclusion: Debt Settlement vs Minimum Dues',
    'conclusion:': 'Conclusion: Debt Settlement vs Minimum Dues',
  },
  // 19. best-loan-settlement-debt-relief-solutions-how-to-settle-your-debt-easily
  'best-loan-settlement-debt-relief-solutions-how-to-settle-your-debt-easily': {
    'knowing debt settlement': 'Understanding Best Loan Settlement Solutions',
    'knowing debt closure': 'Understanding Best Loan Settlement Solutions',
    'understanding debt settlement': 'Understanding Best Loan Settlement Solutions',
    'loan combining loans: a smart debt plan': 'Loan Consolidation: A Smart Debt Strategy',
  },
  // 20. debt-settlement-vs-debt-consolidation-india
  'debt-settlement-vs-debt-consolidation-india': {
    'knowing debt settlement': 'Understanding Debt Settlement in India',
    'knowing debt closure': 'Understanding Debt Settlement in India',
    'understanding debt settlement': 'Understanding Debt Settlement in India',
    'knowing debt combining loans': 'Understanding Debt Consolidation Loans in India',
  },
  // 21. loan-settlement-and-how-credsettle-can-help-you
  'loan-settlement-and-how-credsettle-can-help-you': {
    'knowing debt settlement': 'Understanding Loan Settlement with CredSettle',
    'knowing debt closure': 'Understanding Loan Settlement with CredSettle',
    'understanding debt settlement': 'Understanding Loan Settlement with CredSettle',
    'why choose credsettle?': 'Why Choose CredSettle for Your Debt Resolution?',
    'our services': 'Our Comprehensive Debt Settlement Services',
  },
  // 22. the-ultimate-guide-to-debt-relief-rbi-guidelines-how-credsettle-helps-you
  'the-ultimate-guide-to-debt-relief-rbi-guidelines-how-credsettle-helps-you': {
    'knowing rbi guidelines for debt settlement': 'How RBI Guidelines Support Debt Relief in India',
    'knowing rbi guidelines for debt closure': 'How RBI Guidelines Support Debt Relief in India',
    'understanding rbi guidelines for debt settlement': 'How RBI Guidelines Support Debt Relief in India',
    'how credsettle helps you through the legal debt settlement process': 'How CredSettle Helps Through Legal Debt Process',
    'how credsettle helps you through the legal debt steps': 'How CredSettle Helps Through Legal Debt Process',
  },
  // 23. understanding-recovery-agents-and-your-rights-as-a-borrower
  'understanding-recovery-agents-and-your-rights-as-a-borrower': {
    'knowing recovery agents and your rights as a borrower': 'Recovery Agents and Your Legal Rights as a Borrower',
    'understanding recovery agents and your rights as a borrower': 'Recovery Agents and Your Legal Rights as a Borrower',
    'who are recovery agents?': 'Who Are Loan Recovery Agents in India?',
    'what recovery agents can legally do': 'What Recovery Agents Are Legally Allowed to Do',
    'what recovery agents cannot do': 'What Recovery Agents Are Prohibited from Doing',
    'what to do if you face harassment from recovery agents?': 'Steps to Take Against Recovery Agent Harassment',
    'alternatives to avoid recovery agent intervention': 'Legal Alternatives to Avoid Recovery Harassment',
    'final thoughts': 'Final Thoughts: Defending Your Borrower Rights',
  },
  // 24. loan-settlement-procedure-india
  'loan-settlement-procedure-india': {
    'introduction': 'Introduction: Step-by-Step Settlement Procedure',
    'choices to loan settlement': 'Alternative Options to Legal Loan Settlement',
    'choices to loan closure': 'Alternative Options to Legal Loan Settlement',
    'how does loan settlement impact your credit score?': 'Credit Score Impact of the Settlement Procedure',
    'how does loan closure impact your credit score?': 'Credit Score Impact of the Settlement Procedure',
    'faqs': 'Frequently Asked Questions on Settlement Procedure',
    '✅ conclusion': 'Conclusion: Successfully Completing Loan Settlement',
  },
  // 25. effective-debt-settlement-strategies-in-india
  'effective-debt-settlement-strategies-in-india': {
    'strong debt settlement plans in india': 'Effective Debt Settlement Strategies in India',
    'knowing debt settlement': 'Understanding Debt Settlement Fundamentals',
    'knowing debt closure': 'Understanding Debt Settlement Fundamentals',
    'understanding debt settlement': 'Understanding Debt Settlement Fundamentals',
    'key benefits of debt settlement with credsettle:': 'Key Benefits of Professional Debt Settlement',
    'key benefits of debt closure with credsettle:': 'Key Benefits of Professional Debt Settlement',
    'steps to a successful debt settlement:': 'Steps to Achieving a Successful Debt Settlement',
    'steps to a successful debt closure:': 'Steps to Achieving a Successful Debt Settlement',
    'why choose credsettle for debt relief?': 'Why Choose CredSettle for Strategic Debt Relief',
    'conclusion:': 'Conclusion: Implementing Debt Settlement Strategies',
  },
  // 26. personal-loan-settlement-in-india-how-credsettle-helped-a-client-reduce-debt
  'personal-loan-settlement-in-india-how-credsettle-helped-a-client-reduce-debt': {
    'struggling with personal loan debt in india? here’s a solution': 'Struggling with Personal Loan Debt: Key Solutions',
    'struggling with personal loan debt in india? here\'s a solution': 'Struggling with Personal Loan Debt: Key Solutions',
    'a real-life success story with credsettle': 'Personal Loan Settlement: Real Client Success Story',
    'final thoughts': 'Final Thoughts: Settling Personal Loans Legally',
  },
  // 27. debt-settlement-made-easy-a-step-by-step-guide-to-financial-freedom
  'debt-settlement-made-easy-a-step-by-step-guide-to-financial-freedom': {
    'what is debt settlement?': 'What is Debt Settlement for Financial Freedom?',
    'what is debt closure?': 'What is Debt Settlement for Financial Freedom?',
    'how does debt settlement work?': 'How Debt Settlement Works Step-by-Step',
    'how does debt closure work?': 'How Debt Settlement Works Step-by-Step',
    'frequently asked questions (faqs)': 'FAQs: Step-by-Step Debt Settlement Guide',
  },
  // 28. debt-settlement-vs-debt-management-which-is-the-right-choice-for-you
  'debt-settlement-vs-debt-management-which-is-the-right-choice-for-you': {
    'what is debt settlement?': 'What is Debt Settlement and How It Compares',
    'what is debt closure?': 'What is Debt Settlement and How It Compares',
    'what is debt management?': 'What is Debt Management and How It Compares',
    'why choose credsettle?': 'Why Choose CredSettle for Debt Relief Guidance?',
    'frequently asked questions (faqs)': 'Common Questions: Debt Settlement vs Management',
  },
  // 29. the-ultimate-guide-to-debt-settlement-and-relief
  'the-ultimate-guide-to-debt-settlement-and-relief': {
    'what is loan settlement?': 'What is Debt Settlement and Relief in India?',
    'what is loan closure?': 'What is Debt Settlement and Relief in India?',
    'debt settlement vs. debt combining loans': 'Debt Settlement vs Debt Consolidation in India',
    'debt closure vs. debt combining loans': 'Debt Settlement vs Debt Consolidation in India',
    'final thoughts': 'Final Thoughts on Debt Settlement and Relief',
  },
  // 30. the-truth-about-loan-settlement-how-to-free-yourself-from-debt-legally
  'the-truth-about-loan-settlement-how-to-free-yourself-from-debt-legally': {
    'what is loan settlement?': 'The Truth: What is Legal Loan Settlement?',
    'what is loan closure?': 'The Truth: What is Legal Loan Settlement?',
    'how does loan settlement work?': 'How Legal Loan Settlement Works with Banks',
    'how does loan closure work?': 'How Legal Loan Settlement Works with Banks',
    'conclusion': 'Conclusion: Freeing Yourself from Debt Legally',
  },
  // 31. settle-loan-india-without-hurting-credit-score
  'settle-loan-india-without-hurting-credit-score': {
    'what is loan settlement?': 'What is Loan Settlement and Its Credit Impact?',
    'what is loan closure?': 'What is Loan Settlement and Its Credit Impact?',
    'how does loan settlement work?': 'How Loan Settlement Works for Credit Scores',
    'how does loan closure work?': 'How Loan Settlement Works for Credit Scores',
    'choices to loan settlement': 'Credit-Friendly Alternatives to Loan Settlement',
    'choices to loan closure': 'Credit-Friendly Alternatives to Loan Settlement',
    'final thoughts': 'Final Thoughts on Protecting Credit During Settlement',
  },
  // 32. loan-settlement-with-hdfc-and-icici-banks-a-complete-guide
  'loan-settlement-with-hdfc-and-icici-banks-a-complete-guide': {
    'what is loan settlement?': 'What is Loan Settlement with HDFC and ICICI Banks?',
    'what is loan closure?': 'What is Loan Settlement with HDFC and ICICI Banks?',
    'why consider loan settlement with hdfc or icici?': 'Why Consider Loan Settlement with HDFC or ICICI?',
    'why consider loan closure with hdfc or icici?': 'Why Consider Loan Settlement with HDFC or ICICI?',
  },
  // 33. a-complete-guide-to-loan-settlement-in-india-how-to-become-debt-free
  'a-complete-guide-to-loan-settlement-in-india-how-to-become-debt-free': {
    'what is loan settlement?': 'What is Loan Settlement in India: A Full Guide',
    'what is loan closure?': 'What is Loan Settlement in India: A Full Guide',
    'final thoughts': 'Final Thoughts on Becoming Debt-Free Through Settlement',
  },
  // 34. loan-settlement-guide-credit-card-personal-loan-debt
  'loan-settlement-guide-credit-card-personal-loan-debt': {
    'what is loan settlement?': 'What is Loan Settlement for Cards and Personal Loans?',
    'what is loan closure?': 'What is Loan Settlement for Cards and Personal Loans?',
    'how does loan settlement work?': 'How Loan Settlement Works for Unsecured Debts',
    'how does loan closure work?': 'How Loan Settlement Works for Unsecured Debts',
  },
  // 35. loan-settlement-company-india
  'loan-settlement-company-india': {
    'what is loan settlement?': 'What is Professional Loan Settlement in India?',
    'what is loan closure?': 'What is Professional Loan Settlement in India?',
    'why people opt for loan settlement': 'Why People Opt for Professional Settlement',
    'why people opt for loan closure': 'Why People Opt for Professional Settlement',
  },
  // 36. how-to-legally-settle-your-loan-in-india-without-harassment
  'how-to-legally-settle-your-loan-in-india-without-harassment': {
    'what is loan settlement?': 'What is Legal Loan Settlement Without Harassment?',
    'what is loan closure?': 'What is Legal Loan Settlement Without Harassment?',
    'conclusion': 'Conclusion: Legally Settling Debt Without Harassment',
  },
  // 37. how-to-settle-your-bank-loan-in-india
  'how-to-settle-your-bank-loan-in-india': {
    'what is loan settlement?': 'What is Bank Loan Settlement in India?',
    'what is loan closure?': 'What is Bank Loan Settlement in India?',
    'top reasons why people opt for loan settlement': 'Top Reasons Why Borrowers Choose Settlement',
    'top reasons why people opt for loan closure': 'Top Reasons Why Borrowers Choose Settlement',
  },
  // 38. dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them
  'dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them': {
    'who are recovery agents?': 'Who Are Bank Recovery Agents in India?',
  },
  // 39. key-legal-strategies-for-loan-settlement-in-india
  'key-legal-strategies-for-loan-settlement-in-india': {
    'understanding loan settlement in india': 'Understanding Key Legal Settlement Strategies',
    'understanding loan settlement in india?': 'Understanding Key Legal Settlement Strategies',
    'understanding loan settlement': 'Understanding Key Legal Settlement Strategies',
    'understanding loan settlement?': 'Understanding Key Legal Settlement Strategies',
    'what is loan settlement in india?': 'Understanding Key Legal Settlement Strategies',
    'what is loan settlement in india': 'Understanding Key Legal Settlement Strategies',
    'what is loan settlement?': 'Understanding Key Legal Settlement Strategies',
    'what is loan closure?': 'Understanding Key Legal Settlement Strategies',
    'knowing debt settlement': 'Understanding Key Legal Settlement Strategies',
    'knowing debt closure': 'Understanding Key Legal Settlement Strategies',
  },
  // 40. how-to-negotiate-a-better-waiver-for-loan-settlement-in-india
  'how-to-negotiate-a-better-waiver-for-loan-settlement-in-india': {
    'understanding loan settlement in india': 'Understanding Loan Settlement Waiver Negotiation',
    'understanding loan settlement in india?': 'Understanding Loan Settlement Waiver Negotiation',
    'understanding loan settlement': 'Understanding Loan Settlement Waiver Negotiation',
    'understanding loan settlement?': 'Understanding Loan Settlement Waiver Negotiation',
    'what is loan settlement in india?': 'Understanding Loan Settlement Waiver Negotiation',
    'what is loan settlement in india': 'Understanding Loan Settlement Waiver Negotiation',
    'what is loan settlement?': 'Understanding Loan Settlement Waiver Negotiation',
    'what is loan closure?': 'Understanding Loan Settlement Waiver Negotiation',
    'knowing debt settlement': 'Understanding Loan Settlement Waiver Negotiation',
    'knowing debt closure': 'Understanding Loan Settlement Waiver Negotiation',
  },
};

/**
 * Generates a clean, contextual, unique FAQ section heading (35-65 chars)
 * ensuring 0 em-dashes and 0 duplicate headings across pages.
 */
export const getFaqHeading = (blogTitle: string): string => {
  const cleanTitle = blogTitle
    .replace(/^(How to|The Ultimate Guide to|Complete Guide to|A Complete Guide to|Master Guide to)\s+/i, '')
    .replace(/:.*$/, '')
    .replace(/\s*\|\s*.*$/, '')
    .replace(/[—–]/g, '-')
    .trim();

  let cand = `Frequently Asked Questions: ${cleanTitle}`;
  if (cand.length >= 35 && cand.length <= 65) {
    return cand;
  }

  cand = `FAQs: ${cleanTitle}`;
  if (cand.length >= 30 && cand.length <= 65) {
    return cand;
  }

  if (cand.length > 65) {
    const slice = cand.slice(0, 65);
    const lastSpace = slice.lastIndexOf(' ');
    cand = (lastSpace > 35 ? slice.slice(0, lastSpace) : slice).replace(/[,;:\-\s]+$/, '').trim();
    return cand;
  }

  return `Frequently Asked Questions on ${cleanTitle}`.slice(0, 65).replace(/[,;:\-\s]+$/, '').trim();
};

/**
 * Rewrites generic recurring headings into descriptive, unique H2 headings.
 * Handles both standard terms ("settlement", "understanding") and
 * readability-transformed terms ("closure", "knowing", "steps").
 */
export const getRewrittenH2Text = (
  canonicalSlug: string,
  rawText: string,
  blogTitle: string = ''
): string => {
  const clean = rawText
    .replace(/<[^>]*>/g, '')
    .replace(/[\s\u200B-\u200D\uFEFF]+/g, ' ')
    .replace(/[—–]/g, '-')
    .replace(/&mdash;|&ndash;/g, '-')
    .trim();
  const lower = clean.toLowerCase();

  // Normalized key for robust matching across readability variants
  const normalizedKey = lower
    .replace(/\bclosure\b/g, 'settlement')
    .replace(/\bknowing\b/g, 'understanding')
    .replace(/\bplans\b/g, 'strategies')
    .replace(/\bchoices\b/g, 'alternatives')
    .replace(/\btalks\b/g, 'negotiations')
    .replace(/\bsteps\b/g, 'procedure')
    .replace(/\s+/g, ' ')
    .trim();

  // 1. Check exact slug-specific rewrite (both original and normalized)
  const slugMap = GENERIC_H2_REWRITES[canonicalSlug];
  if (slugMap) {
    if (slugMap[lower]) return slugMap[lower];
    if (slugMap[normalizedKey]) return slugMap[normalizedKey];
  }

  // 2. Global exact replacements for bare "frequently asked questions"
  if (lower === 'frequently asked questions' || normalizedKey === 'frequently asked questions') {
    return getFaqHeading(blogTitle);
  }

  // 3. Dynamic contextual fallback for generic recurring headings
  let cleanTopic = blogTitle
    .replace(/^(How to|The Ultimate Guide to|Complete Guide to|A Complete Guide to|Master Guide to)\s+/i, '')
    .replace(/:.*$/, '')
    .replace(/\s*\|\s*.*$/, '')
    .replace(/[—–]/g, '-')
    .trim();

  if (cleanTopic.length > 35) {
    const slice = cleanTopic.slice(0, 35);
    const lastSpace = slice.lastIndexOf(' ');
    cleanTopic = (lastSpace > 20 ? slice.slice(0, lastSpace) : slice).replace(/[,;:\-\s]+$/, '').trim();
  }

  const formatFallbackH2 = (prefix: string, topic: string): string => {
    if (!topic) return prefix;
    const combined = `${prefix}: ${topic}`.replace(/[—–]/g, '-').trim();
    if (combined.length <= 65) return combined;
    const slice = combined.slice(0, 65);
    const lastSpace = slice.lastIndexOf(' ');
    let cand = (lastSpace > 35 ? slice.slice(0, lastSpace) : slice).replace(/[,;:\-\s]+$/, '').trim();
    cand = cand.replace(/\s+(?:in|on|for|with|to|of|the|a|an|at|by|from)$/i, '').replace(/[,;:\-\s]+$/, '').trim();
    return cand;
  };

  if (/^(?:what is|what's) (?:loan|debt) (?:settlement|closure)(?:\s+in\s+india)?\??$/i.test(lower) || /^(?:what is|what's) (?:loan|debt) (?:settlement|closure)(?:\s+in\s+india)?\??$/i.test(normalizedKey)) {
    return formatFallbackH2('What is Loan Settlement', cleanTopic);
  }
  if (/^how does (?:loan|debt) (?:settlement|closure) work(?:\s+in\s+india)?\??$/i.test(lower) || /^how does (?:loan|debt) (?:settlement|closure) work(?:\s+in\s+india)?\??$/i.test(normalizedKey)) {
    return formatFallbackH2('How Settlement Works', cleanTopic);
  }
  if (/^(?:understanding|knowing) (?:loan|debt) (?:settlement|closure)(?:\s+in\s+india)?\??$/i.test(lower) || /^(?:understanding|knowing) (?:loan|debt) (?:settlement|closure)(?:\s+in\s+india)?\??$/i.test(normalizedKey)) {
    return formatFallbackH2('Understanding Loan Settlement', cleanTopic);
  }
  if (/^(?:understanding|knowing) rbi guidelines for (?:loan|debt) (?:settlement|closure)(?:\s+in\s+india)?\??$/i.test(lower) || /^(?:understanding|knowing) rbi guidelines for (?:loan|debt) (?:settlement|closure)(?:\s+in\s+india)?\??$/i.test(normalizedKey)) {
    return formatFallbackH2('RBI Guidelines for Debt Settlement', cleanTopic);
  }
  if (/^introduction:?$/i.test(lower)) {
    return formatFallbackH2('Introduction', cleanTopic);
  }
  if (/^[✅\s]*conclusion:?$/i.test(lower)) {
    return formatFallbackH2('Conclusion', cleanTopic);
  }
  if (/^final thoughts:?$/i.test(lower)) {
    return formatFallbackH2('Final Thoughts on', cleanTopic);
  }
  if (/^why choose credsettle\??$/i.test(lower)) {
    return formatFallbackH2('Why Choose CredSettle for', cleanTopic);
  }
  if (/^(?:frequently asked questions|faqs)(?:\s*\(faqs\))?:?$/i.test(lower)) {
    return formatFallbackH2('Common Questions on', cleanTopic);
  }
  if (/^who are (?:bank\s+)?recovery agents\??$/i.test(lower)) {
    return `Who Are Bank Recovery Agents in India?`;
  }
  if (/^a real-life success story with credsettle$/i.test(lower)) {
    return formatFallbackH2('Real-Life Success Story with CredSettle', cleanTopic);
  }

  return clean;
};
