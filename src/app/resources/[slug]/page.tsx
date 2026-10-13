import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import BlogPostPageClient from './BlogPostPageClient';
import { canonicaliseSlug, generateSlugFromTitle } from '@/lib/slug';
import { getBlogBySlug, getRelatedBlogs, getBlogReviews, type Review } from '@/lib/blogs';
import { defaultBlogFaqs, type BlogFaq } from '@/data/blogDefaults';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = 'force-dynamic';
export const revalidate = 0;

const stripHtml = (value: string): string =>
  value.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim();

const IGNORED_DESCRIPTIONS = [
  "Loan settlement, Anti-harassment, lawyer support, legal help",
  "Loan Settlement Services | Credit Card Loan Settlement | Personal Loan Settlement | Vehicle Loan Settlement | Debt Settlement in India | Loan Restructuring Solutions | Reduce Loan Burden | Get Rid of Loan Harassment | Settle Loans Quickly | Loan Negotiation Experts",
  "Loan Settlement Services | Credit Card Loan Settlement | Personal Loan Settlement | Vehicle Loan Settlement"
];

export const formatH1Text = (rawText: string, maxLength: number = 65): string => {
  if (!rawText) return '';
  let cleaned = rawText
    .replace(/<[^>]*>/g, '')
    .replace(/[\s\u200B-\u200D\uFEFF]+/g, ' ')
    .replace(/[—–]/g, '-')
    .replace(/&mdash;|&ndash;/g, '-')
    .trim();

  if (cleaned.length <= maxLength) {
    return cleaned;
  }

  // If text contains colon or hyphen, see if the first part is self-contained and between 30 and maxLength
  const colonIndex = cleaned.indexOf(':');
  if (colonIndex >= 30 && colonIndex <= maxLength) {
    return cleaned.slice(0, colonIndex).trim();
  }

  const hyphenIndex = cleaned.indexOf(' - ');
  if (hyphenIndex >= 30 && hyphenIndex <= maxLength) {
    return cleaned.slice(0, hyphenIndex).trim();
  }

  // Truncate at word boundary safely
  const candidate = cleaned.slice(0, maxLength);
  const lastSpace = candidate.lastIndexOf(' ');
  const truncated = (lastSpace >= 30 ? candidate.slice(0, lastSpace) : candidate)
    .replace(/[:,\-&?]+$/, '')
    .trim();

  return truncated.length >= 30 ? truncated : cleaned.slice(0, maxLength).trim();
};

const OPTIMIZED_TITLES: Record<string, string> = {
  "a-complete-guide-to-loan-settlement-in-india-how-to-become-debt-free": "Complete Guide to Loan Settlement in India",
  "best-loan-settlement-debt-relief-solutions-how-to-settle-your-debt-easily": "Best Loan Settlement & Debt Relief Solutions in India",
  "dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them": "Dealing with Recovery Agents: Know Your Rights in India",
  "debt-settlement-vs-debt-consolidation": "Debt Settlement vs Debt Consolidation: Key Differences",
  "car-loan-settlement-process-a-comprehensive-guide": "Car Loan Settlement Process: Complete Legal Guide",
  "bank-loan-settlement-rules-a-complete-guide-for-borrowers": "Bank Loan Settlement Rules: Complete Guide for Borrowers",
  "escape-debt-stress-the-best-debt-settlement-and-relief-programs-in-2025": "Escape Debt Stress: Best Debt Relief Programs in 2025",
  "hdfc-credit-card-settlement-procedure-and-recourse-against-recovery-agents": "HDFC Credit Card Settlement Procedure: Complete Guide",
  "how-lawyer-and-expert-panels-efficiently-handle-multi-bank-loan-settlements": "Expert Legal Panels for Multi-Bank Loan Settlements",
  "how-to-lodge-a-complaint-against-a-credit-card-collection-agency-in-india": "File Complaint Against Collection Agency in India 2026",
  "how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide": "Negotiate Credit Card Settlement in India: Legal Guide",
  "how-to-negotiate-a-loan-settlement-without-affecting-your-cibil-score": "Loan Settlement Without Affecting CIBIL Score",
  "how-to-settle-your-bank-loan-in-india": "How to Settle Bank Loan in India | Legal Guide",
  "icici-bank-credit-card-settlement-a-complete-guide-to-resolving-your-debt": "ICICI Bank Credit Card Settlement Guide",
  "indusind-bank-credit-card-settlement-the-smart-way-to-reduce-your-debt": "IndusInd Bank Credit Card Settlement Guide",
  "loan-settlement-in-24-hours": "Loan Settlement in 24 Hours: Fast Legal Relief Guide",
  "one-card-credit-card-repayment-smart-ways-to-clear-your-debt-faster": "One Card Repayment: Clear Debt Faster",
  // Old long slugs (>115 chars) — kept for safety; pages now redirect to shorter slugs below
  "recovery-agents-gone-rogue-unveiling-the-limits-they-break-and-your-rbi-backed-defences": "Recovery Agents Rogue: Your RBI Defences | CredSettle",
  "the-ultimate-guide-to-loan-settlement-how-to-settle-credit-card-and-personal-loan-debt": "Complete Loan Settlement Guide: Credit Card and Loan Debt",
  "personal-loan-credit-card-debt-settlement-how-credsettle-rescued-a-client-from-harassment": "Personal Loan & Card Debt Settlement: Client Case Study",
  "loan-settlement-in-india-how-to-settle-loans-smartly-with-the-right-loan-settlement-company": "Loan Settlement Company in India: Settle Loans Smartly",
  "how-loan-settlement-and-anti-harassment-services-transformed-a-client-s-life-a-real-life-success-story": "Loan Settlement Anti-Harassment Story | CredSettle",
  "how-loan-settlement-and-anti-harassment-services-transformed-a-clients-life-a-real-life-success-story": "Loan Settlement Anti-Harassment Story | CredSettle",
  // New short slug entries (URL ≤ 115 chars)
  "loan-settlement-guide-credit-card-personal-loan-debt": "Complete Loan Settlement Guide: Credit Card and Loan Debt",
  "recovery-agents-rogue-rbi-backed-defences": "Recovery Agents Rogue: Your RBI Defences | CredSettle",
  "personal-loan-credit-card-settlement-credsettle-case-study": "Personal Loan & Card Debt Settlement: Client Case Study",
  "loan-settlement-company-india": "Loan Settlement Company in India: Settle Loans Smartly",
  "loan-settlement-anti-harassment-success-story": "Loan Settlement Anti-Harassment Story | CredSettle",
  "clear-loans-solutions-trusted-loan-repayment-guide": "Clear Loans Solutions: Trusted Loan Settlement Guide",
  "sbi-credit-card-debt-relief-smart-strategies-to-reduce-your-financial-burden": "SBI Credit Card Debt Relief Strategies",
  "understanding-ots-full-form-financial-impact": "Understanding OTS Full Form: Financial Impact & Relief",
  "loan-settlement-in-march-closing-guide": "Loan Settlement in March: Bank Closing & Relief Guide",
  "debt-settlement-vs-paying-minimum-dues-long-term-impact": "Debt Settlement vs Minimum Dues: Long-Term Impact Guide",
  "2026-debt-settlement-masterclass": "2026 Debt Settlement Masterclass: Complete Legal Guide",
  "why-hiring-a-loan-settlement-lawyer-can-save-you-time-and-money": "Why Hiring a Loan Settlement Lawyer Saves Time & Money",
  "file-rbi-ombudsman-complaint-bank-harassment-2026": "File RBI Ombudsman Complaint for Bank Harassment 2026",
  "clear-loans-solutions-expert-settlement-advice-from-a-trusted-loan-repayment-company": "Clear Loans Solutions: Trusted Loan Settlement Guide",
  // Fix: Page Titles Same as H1 — 8 slugs flagged by Screaming Frog (Oct 2026)
  "the-smart-way-to-settle-your-credit-card-dues-legally": "Legally Settle Credit Card Dues: Smart Legal Guide",
  "stop-loan-recovery-agent-harassment-whatsapp": "Stop Recovery Agent Harassment on WhatsApp | CredSettle",
  "trick-recovery-agents-dodge-harassment": "Trick Recovery Agents and Avoid Harassment | CredSettle",
  "ultimate-guide-debt-settlement-india-rbi-guidelines": "Debt Settlement in India: RBI Guidelines | CredSettle",
  "stop-bank-recovery-agents-harassment-legal-rights": "Stop Harassment from Bank Agents: Know Your Rights",
  "settle-multiple-bank-loans-india-legally": "Settle Multiple Bank Loans Legally in India | CredSettle",
  "received-legal-notice-from-hdfc-next-steps": "Handling HDFC Legal Notices: Expert Tips & Action Plan",
  "quick-loan-settlement-npa-included-180-days": "Quick Loan Settlement: NPA Included (180 Days) | CredSettle",
  "loan-settlement-august-maximum-waiver": "Loan Settlement in August: Maximum Waiver Tips | CredSettle",
  "debt-settlement-vs-debt-consolidation-india": "Debt Settlement vs. Debt Consolidation India | CredSettle",
  "debt-resolution-program-reviews-guide": "Debt Resolution Program Reviews: An In-Depth Guide",
  "credit-card-debt-settlement-vs-loan-restructuring-india": "Debt Settlement vs Loan Restructuring India | CredSettle",
  "credit-card-debt-vs-personal-loan-default-india": "Credit Card Debt vs Loan Default Rights | CredSettle",
  "need-help-paying-credit-card": "Need Help Paying Credit Cards? Loan Settlement India",
  "loan-settlement-vs-loan-closure-what-is-the-difference": "Loan Settlement vs Closure: Know the Key Difference",
  "latest-developments-in-debt-settlement-regulations-in-india": "New Debt Settlement Regulations in India 2026 Guide",
  "key-legal-strategies-for-loan-settlement-in-india": "Key Legal Loan Settlement Strategies in India 2026",
  "how-to-legally-settle-your-loan-in-india-without-harassment": "Legally Settle Loans in India: Stop Bank Harassment",
  "cibil-score-after-loan-settlement-how-to-improve-it": "Boost CIBIL Score After Loan Settlement: Tips India",
  // Fix: H1 over 70 characters URLs (Titles)
  "the-ultimate-guide-to-debt-relief-rbi-guidelines-how-credsettle-helps-you": "Debt Relief RBI Guidelines: Legal Guide | CredSettle",
  "the-ultimate-guide-to-debt-relief-how-to-settle-your-debts-legally-in-india": "How to Settle Debts Legally in India | Debt Relief",
  "settle-loan-india-without-hurting-credit-score": "Settle Loans in India Without Hurting Credit Score",
  "best-ways-to-settle-your-loan-in-india-without-hurting-your-credit-score": "Settle Loans in India Without Hurting Credit Score",
  "personal-loan-settlement-in-india-how-credsettle-helped-a-client-reduce-debt": "Personal Loan Settlement in India: Client Case Study",
  "personal-loan-for-credit-card": "Personal Loan for Credit Card Debt: Pros & Cons Guide",
  "how-to-handle-loan-recovery-agents-in-india-know-your-rights-legal-protection": "Handle Loan Recovery Agents in India: Legal Protection",
  "how-credsettle-helped-a-client-settle-credit-card-debt-effectively-in-india": "Credit Card Settlement Case Study: How CredSettle Helped",
  "debt-settlement-vs-debt-management-which-is-the-right-choice-for-you": "Debt Settlement vs Debt Management: Which is Right?",
};

const OPTIMIZED_H1S: Record<string, string> = {
  "dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them": "How to Handle Bank Recovery Agents: Legal Rights in India",
  "debt-settlement-vs-debt-consolidation": "Debt Settlement vs Debt Consolidation: Complete Guide",
  "car-loan-settlement-process-a-comprehensive-guide": "Car Loan Settlement Process: A Step-by-Step Guide",
  "bank-loan-settlement-rules-a-complete-guide-for-borrowers": "Bank Loan Settlement Rules: Key Rights and Guidelines",
  "sbi-credit-card-debt-relief-smart-strategies-to-reduce-your-financial-burden": "SBI Credit Card Debt Relief: Smart Strategies to Reduce Debt",
  "icici-bank-credit-card-settlement-a-complete-guide-to-resolving-your-debt": "ICICI Bank Credit Card Settlement: Complete Resolution Guide",
  "loan-settlement-in-24-hours": "Loan Settlement in 24 Hours: Fast & Legal Resolution",
  "understanding-ots-full-form-financial-impact": "Understanding OTS Full Form and Its Financial Impact",
  "loan-settlement-in-march-closing-guide": "Closing Your Loan Settlement in March: Essential Guide",
  "debt-settlement-vs-paying-minimum-dues-long-term-impact": "Debt Settlement vs Paying Minimum Dues: Long-Term Impact",
  "2026-debt-settlement-masterclass": "The 2026 Debt Settlement Masterclass: Strategic Guide",
  "why-hiring-a-loan-settlement-lawyer-can-save-you-time-and-money": "Why Hiring a Loan Settlement Lawyer Can Save You Time and Money",
  "file-rbi-ombudsman-complaint-bank-harassment-2026": "How to File an RBI Ombudsman Complaint for Bank Harassment",
  "clear-loans-solutions-expert-settlement-advice-from-a-trusted-loan-repayment-company": "Clear Loans Solutions: Expert Debt Settlement Advice",
  // Old long slugs (>115 chars) — redirected to new short slugs
  "the-ultimate-guide-to-loan-settlement-how-to-settle-credit-card-and-personal-loan-debt": "Ultimate Guide to Settling Credit Card and Loan Debt",
  "recovery-agents-gone-rogue-unveiling-the-limits-they-break-and-your-rbi-backed-defences": "Recovery Agents Gone Rogue: Know Your RBI Defences",
  "personal-loan-credit-card-debt-settlement-how-credsettle-rescued-a-client-from-harassment": "CredSettle Case Study: Debt Settlement and Anti-Harassment",
  "loan-settlement-in-india-how-to-settle-loans-smartly-with-the-right-loan-settlement-company": "Settle Loans Smartly with a Trusted Settlement Company",
  "how-loan-settlement-and-anti-harassment-services-transformed-a-client-s-life-a-real-life-success-story": "How Loan Settlement Transformed a Client Life",
  "how-loan-settlement-and-anti-harassment-services-transformed-a-clients-life-a-real-life-success-story": "How Loan Settlement Transformed a Client Life",
  // New short slug H1 entries (URL ≤ 115 chars)
  "loan-settlement-guide-credit-card-personal-loan-debt": "Ultimate Guide to Settling Credit Card and Loan Debt",
  "recovery-agents-rogue-rbi-backed-defences": "Recovery Agents Rogue: Know Your RBI Defences",
  "personal-loan-credit-card-settlement-credsettle-case-study": "CredSettle Case Study: Debt Settlement and Anti-Harassment",
  "loan-settlement-company-india": "Settle Loans Smartly with a Trusted Settlement Company",
  "loan-settlement-anti-harassment-success-story": "How Loan Settlement Transformed a Client Life",
  "clear-loans-solutions-trusted-loan-repayment-guide": "Clear Loans Solutions: Expert Debt Settlement Advice",
  // Fix: Page Titles Same as H1 — distinct H1s for 8 slugs (Oct 2026)
  "the-smart-way-to-settle-your-credit-card-dues-legally": "The Smart Way to Settle Your Credit Card Dues Legally",
  "stop-loan-recovery-agent-harassment-whatsapp": "Stop Loan Recovery Agent Harassment on WhatsApp 2026",
  "trick-recovery-agents-dodge-harassment": "How to Trick Recovery Agents and Dodge Harassment",
  "ultimate-guide-debt-settlement-india-rbi-guidelines": "The Ultimate Guide to Debt Settlement in India: RBI Guidelines",
  "stop-bank-recovery-agents-harassment-legal-rights": "How to Stop Harassment from Bank Recovery Agents Legally",
  "settle-multiple-bank-loans-india-legally": "How to Settle Multiple Bank Loans in India Legally",
  "received-legal-notice-from-hdfc-next-steps": "Received a Legal Notice from HDFC: Next Steps Guide",
  "quick-loan-settlement-npa-included-180-days": "Loan Settlement in Less Than 180 Days: NPA Included",
  "loan-settlement-august-maximum-waiver": "Loan Settlement in August: Maximize Your Bank Waiver",
  "debt-settlement-vs-debt-consolidation-india": "Debt Settlement vs Debt Consolidation in India Guide",
  "debt-resolution-program-reviews-guide": "Comprehensive Guide to Debt Resolution Program Reviews",
  "credit-card-debt-settlement-vs-loan-restructuring-india": "Credit Card Debt Settlement vs Loan Restructuring India",
  "credit-card-debt-vs-personal-loan-default-india": "Credit Card Debt vs Personal Loan Default in India",
  "need-help-paying-credit-card": "Loan Settlement in India - Need Help Paying Credit Cards",
  "loan-settlement-vs-loan-closure-what-is-the-difference": "Loan Settlement vs Loan Closure: What Is the Difference",
  "latest-developments-in-debt-settlement-regulations-in-india": "Latest Developments in Debt Settlement Regulations in India",
  "key-legal-strategies-for-loan-settlement-in-india": "Key Legal Strategies for Loan Settlement in India",
  "how-to-legally-settle-your-loan-in-india-without-harassment": "How to Legally Settle Your Loan in India Without Harassment",
  "cibil-score-after-loan-settlement-how-to-improve-it": "CIBIL Score After Loan Settlement: How to Improve It",
  // Fix: H1 over 70 characters URLs (H1s strictly 30-65 chars)
  "the-ultimate-guide-to-debt-relief-rbi-guidelines-how-credsettle-helps-you": "The Ultimate Guide to Debt Relief and RBI Guidelines",
  "the-ultimate-guide-to-debt-relief-how-to-settle-your-debts-legally-in-india": "The Ultimate Guide to Settling Debts Legally in India",
  "settle-loan-india-without-hurting-credit-score": "Best Ways to Settle Loans Without Hurting Credit Scores",
  "best-ways-to-settle-your-loan-in-india-without-hurting-your-credit-score": "Best Ways to Settle Loans Without Hurting Credit Scores",
  "personal-loan-settlement-in-india-how-credsettle-helped-a-client-reduce-debt": "Personal Loan Settlement Case Study: Reducing Bank Debt",
  "personal-loan-for-credit-card": "Should You Take a Personal Loan for Credit Card Debt?",
  "how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide": "How to Negotiate a Credit Card Settlement in India",
  "how-to-lodge-a-complaint-against-a-credit-card-collection-agency-in-india": "How to Lodge a Complaint Against Collection Agencies",
  "how-to-handle-loan-recovery-agents-in-india-know-your-rights-legal-protection": "How to Handle Loan Recovery Agents in India: Key Rights",
  "how-lawyer-and-expert-panels-efficiently-handle-multi-bank-loan-settlements": "How Expert Legal Panels Handle Multi-Bank Settlements",
  "how-credsettle-helped-a-client-settle-credit-card-debt-effectively-in-india": "How CredSettle Helped a Client Settle Credit Card Debt",
  "hdfc-credit-card-settlement-procedure-and-recourse-against-recovery-agents": "HDFC Credit Card Settlement and Recourse Against Agents",
  "escape-debt-stress-the-best-debt-settlement-and-relief-programs-in-2025": "Best Debt Settlement and Relief Programs in 2025 Guide",
  "debt-settlement-vs-debt-management-which-is-the-right-choice-for-you": "Debt Settlement vs Debt Management: The Complete Guide",
  "best-loan-settlement-debt-relief-solutions-how-to-settle-your-debt-easily": "Best Loan Settlement & Debt Relief Solutions for Debt",
};

const OPTIMIZED_DESCRIPTIONS: Record<string, string> = {
  "file-rbi-ombudsman-complaint-bank-harassment-2026": "File an RBI Ombudsman complaint against bank harassment in 2026. Learn legal steps, borrower rights, and debt relief solutions with CredSettle.",
  "debt-settlement-vs-debt-consolidation": "Compare debt settlement vs debt consolidation in India. Learn key differences, legal benefits, and debt relief solutions with CredSettle today.",
  "dealing-with-recovery-agents-know-your-rights-and-how-to-handle-them": "Know your rights against bank recovery agents in India. Learn RBI harassment rules, legal protections, and debt relief solutions with CredSettle.",
  "car-loan-settlement-process-a-comprehensive-guide": "Settle your car loan by negotiating with lenders for a reduced lump sum. Learn the legal auto loan settlement process and relief with CredSettle.",
  "bank-loan-settlement-rules-a-complete-guide-for-borrowers": "Understand bank loan settlement rules in India. Learn RBI guidelines, legal negotiation steps, waiver options, and debt relief with CredSettle.",
  "sbi-credit-card-debt-relief-smart-strategies-to-reduce-your-financial-burden": "Settle SBI credit card debt legally with CredSettle. Stop bank harassment, negotiate waivers, and clear outstanding dues with legal debt relief.",
  "icici-bank-credit-card-settlement-a-complete-guide-to-resolving-your-debt": "Settle ICICI Bank credit card debt with CredSettle. Stop recovery harassment, negotiate waivers, and clear outstanding dues with legal debt relief.",
  "understanding-ots-full-form-financial-impact": "Understand OTS full form, RBI settlement guidelines, and financial impacts. Learn how to settle debt legally with CredSettle and stop harassment.",
  "loan-settlement-in-march-closing-guide": "Learn how March year-end impacts bank loan settlement waivers. Settle outstanding debts legally with CredSettle and secure formal debt closure.",
  "loan-settlement-in-24-hours": "Can you settle loans in 24 hours? Learn realistic timelines, RBI settlement steps, and how CredSettle stops recovery harassment legally today.",
  "debt-settlement-vs-paying-minimum-dues-long-term-impact": "Compare debt settlement vs paying minimum dues on credit cards. Avoid high interest traps, understand CIBIL impacts, and settle with CredSettle.",
  "2026-debt-settlement-masterclass": "Master loan settlement in India with our 2026 masterclass. Learn negotiation tips, RBI borrower protections, and legal waivers with CredSettle.",
  "trick-recovery-agents-dodge-harassment": "Learn smart, legal ways to handle recovery agents in India without harassment. Protect your peace, rights, and settle debt with CredSettle today.",
  "ultimate-guide-debt-settlement-india-rbi-guidelines": "Master debt settlement in India with RBI guidelines. Understand borrower legal rights, stop agent harassment, and settle loans with CredSettle.",
  "stop-loan-recovery-agent-harassment-whatsapp": "Stop loan recovery agent harassment on WhatsApp in India. Learn legal rights, RBI rules, evidence collection, and debt relief with CredSettle.",
  "stop-bank-recovery-agents-harassment-legal-rights": "Legally stop bank recovery agent harassment in India. Learn RBI protection rules, file complaints, and settle outstanding loans with CredSettle.",
  "settle-multiple-bank-loans-india-legally": "Learn how to legally settle multiple bank loans in India. Understand RBI rules, negotiation steps, and debt relief strategies with CredSettle.",
  "received-legal-notice-from-hdfc-next-steps": "Received an HDFC legal notice? Learn essential next steps, borrower legal rights, response timelines, and loan settlement options with CredSettle.",
  "quick-loan-settlement-npa-included-180-days": "Settle bank loans and NPA accounts in under 180 days legally. Explore RBI settlement guidelines, waiver benefits, and debt relief with CredSettle.",
  "loan-settlement-august-maximum-waiver": "Learn how to secure maximum loan settlement waivers in August. Understand bank fiscal targets, negotiation tactics, and relief with CredSettle.",
  "debt-settlement-vs-debt-consolidation-india": "Compare debt settlement vs debt consolidation in India. Learn key differences, legal benefits, CIBIL impacts, and debt relief with CredSettle.",
  "debt-resolution-program-reviews-guide": "Explore comprehensive reviews and insights on debt resolution programs. Learn how they can help manage loans and credit card debts effectively.",
  "credit-card-debt-settlement-vs-loan-restructuring-india": "Compare credit card debt settlement vs loan restructuring in India. Understand key legal differences, waiver benefits, and relief with CredSettle.",
  "credit-card-debt-vs-personal-loan-default-india": "Explore RBI guidelines and legal rights for managing credit card debt and personal loan defaults in India. Settle debt legally with CredSettle.",
  "why-hiring-a-loan-settlement-lawyer-can-save-you-time-and-money": "Hire a loan settlement lawyer to save time, reduce bank debt, and stop harassment. Explore legal debt resolution and relief with CredSettle.",
  "clear-loans-solutions-expert-settlement-advice-from-a-trusted-loan-repayment-company": "Explore clear loan settlement solutions with CredSettle. Settle debt legally, reduce burden, stop recovery calls, and book a free advisor call today.",
  "a-complete-guide-to-loan-settlement-in-india-how-to-become-debt-free": "Facing financial hardship? Learn how the legal loan settlement process in India helps reduce debt, stop bank harassment, and become debt-free easily.",
  // Old long slugs (>115 chars) — kept for safety during redirect transition
  "the-ultimate-guide-to-loan-settlement-how-to-settle-credit-card-and-personal-loan-debt": "Settle credit card and personal loan debt legally in India. Learn the loan settlement process, RBI rights, and relief options with CredSettle.",
  "recovery-agents-gone-rogue-unveiling-the-limits-they-break-and-your-rbi-backed-defences": "Know your RBI-backed rights when recovery agents cross the line. Learn legal limits, complaint steps, and harassment defences with CredSettle.",
  "personal-loan-credit-card-debt-settlement-how-credsettle-rescued-a-client-from-harassment": "See how CredSettle rescued a client from loan harassment. Learn how debt settlement stops recovery agents and resolves outstanding dues legally.",
  "loan-settlement-in-india-how-to-settle-loans-smartly-with-the-right-loan-settlement-company": "Looking for a loan settlement company in India? Learn how to settle personal loans and credit cards smartly, stop harassment, and reduce debt.",
  "how-loan-settlement-and-anti-harassment-services-transformed-a-client-s-life-a-real-life-success-story": "Read how CredSettle transformed a client life using loan settlement and anti-harassment services. Real results, legal protection, and debt relief.",
  "how-loan-settlement-and-anti-harassment-services-transformed-a-clients-life-a-real-life-success-story": "Read how CredSettle transformed a client life using loan settlement and anti-harassment services. Real results, legal protection, and debt relief.",
  // New short slug descriptions (URL ≤ 115 chars)
  "loan-settlement-guide-credit-card-personal-loan-debt": "Settle credit card and personal loan debt legally in India. Learn the loan settlement process, RBI rights, and relief options with CredSettle.",
  "recovery-agents-rogue-rbi-backed-defences": "Know your RBI-backed rights when recovery agents cross the line. Learn legal limits, complaint steps, and harassment defences with CredSettle.",
  "personal-loan-credit-card-settlement-credsettle-case-study": "See how CredSettle rescued a client from loan harassment. Learn how debt settlement stops recovery agents and resolves outstanding dues legally.",
  "loan-settlement-company-india": "Looking for a loan settlement company in India? Learn how to settle personal loans and credit cards smartly, stop harassment, and reduce debt.",
  "loan-settlement-anti-harassment-success-story": "Read how CredSettle transformed a client life using loan settlement and anti-harassment services. Real results, legal protection, and debt relief.",
  "clear-loans-solutions-trusted-loan-repayment-guide": "Explore clear loan solutions with CredSettle. Settle debt legally, reduce burden, stop recovery calls, and book a free advisor call today online.",
  // Descriptions for 15 URLs flagged for H1 > 70 characters
  "the-ultimate-guide-to-debt-relief-rbi-guidelines-how-credsettle-helps-you": "Learn RBI debt relief guidelines and legal debt settlement options in India. Understand borrower rights, stop harassment, and settle loans easily.",
  "the-ultimate-guide-to-debt-relief-how-to-settle-your-debts-legally-in-india": "Learn how to settle your debts legally in India with CredSettle. Stop bank harassment, negotiate waivers, and resolve outstanding loans with ease.",
  "settle-loan-india-without-hurting-credit-score": "Discover how to settle bank loans in India without damaging your credit score. Learn legal negotiation tips, CIBIL repair, and debt relief steps.",
  "best-ways-to-settle-your-loan-in-india-without-hurting-your-credit-score": "Discover how to settle bank loans in India without damaging your credit score. Learn legal negotiation tips, CIBIL repair, and debt relief steps.",
  "personal-loan-settlement-in-india-how-credsettle-helped-a-client-reduce-debt": "Read how CredSettle helped a client settle personal loan debt with a major waiver. Stop recovery harassment and resolve bank dues legally in India.",
  "personal-loan-for-credit-card": "Should you take a personal loan to clear credit card debt? Compare interest rates, balance transfers, and legal debt settlement with CredSettle.",
  "how-to-negotiate-a-credit-card-settlement-in-india-a-step-by-step-guide": "Negotiate your credit card settlement in India with expert legal guidance. Learn how to settle dues, get waivers, and become debt-free easily.",
  "how-to-lodge-a-complaint-against-a-credit-card-collection-agency-in-india": "Learn how to lodge a complaint against abusive credit card collection agencies in India. Know RBI rules, police filing steps, and legal rights.",
  "how-to-handle-loan-recovery-agents-in-india-know-your-rights-legal-protection": "Know your rights when dealing with loan recovery agents in India. Learn RBI harassment rules, police complaint steps, and legal debt relief.",
  "how-lawyer-and-expert-panels-efficiently-handle-multi-bank-loan-settlements": "Learn how experienced lawyers and expert panels efficiently negotiate multi-bank loan settlements, reduce total debt, and stop harassment fast.",
  "how-credsettle-helped-a-client-settle-credit-card-debt-effectively-in-india": "See how CredSettle helped a client settle credit card debt effectively in India. Stop recovery calls, reduce dues, and resolve debts legally.",
  "hdfc-credit-card-settlement-procedure-and-recourse-against-recovery-agents": "Follow the step-by-step HDFC credit card settlement procedure in India. Learn how to stop recovery agent harassment and negotiate dues legally.",
  "escape-debt-stress-the-best-debt-settlement-and-relief-programs-in-2025": "Escape debt stress with the best debt settlement and relief programs in 2025. Learn legal ways to settle unsecured loans and credit card debts.",
  "debt-settlement-vs-debt-management-which-is-the-right-choice-for-you": "Compare debt settlement vs debt management in India. Learn the pros, cons, credit score impacts, and which relief option fits your finances.",
  "best-loan-settlement-debt-relief-solutions-how-to-settle-your-debt-easily": "Explore best loan settlement and debt relief solutions in India. Learn how to settle personal loans and credit cards easily with CredSettle.",
};

const getValidDescription = (blog: { metaDescription?: string; subtitle?: string; description: string; title: string }) => {
  const isInvalid = (text: string | undefined) => 
    !text || 
    IGNORED_DESCRIPTIONS.some(ignored => text.trim() === ignored.trim()) ||
    text.startsWith("Loan Settlement Services | Credit Card Loan Settlement");

  let baseDesc = '';
  if (!isInvalid(blog.metaDescription)) {
    baseDesc = blog.metaDescription!.trim();
  } else if (!isInvalid(blog.subtitle)) {
    baseDesc = blog.subtitle!.trim();
  }

  // If baseDesc is present and already within optimal range (140-146 characters)
  if (baseDesc && baseDesc.length >= 140 && baseDesc.length <= 146) {
    return baseDesc.replace(/[—–]/g, '-').trim();
  }

  // If baseDesc is between 120 and 139 characters
  if (baseDesc && baseDesc.length >= 120 && baseDesc.length < 140) {
    return baseDesc.replace(/[—–]/g, '-').trim();
  }

  // If baseDesc is under 120 characters, enrich it intelligently
  if (baseDesc && baseDesc.length > 0 && baseDesc.length < 120) {
    const punctuated = baseDesc.endsWith('.') ? baseDesc : `${baseDesc}.`;
    const legalSuffix = ' Settle your debt legally with CredSettle and stop bank harassment today.';
    const combined = (punctuated + legalSuffix).trim();
    if (combined.length <= 146 && combined.length >= 120) {
      return combined.replace(/[—–]/g, '-');
    }
    const fullSuffix = ' CredSettle provides legal debt resolution to stop recovery harassment and settle bank loans with waivers.';
    const combinedFull = (punctuated + fullSuffix).trim();
    if (combinedFull.length <= 146 && combinedFull.length >= 120) {
      return combinedFull.replace(/[—–]/g, '-');
    }
    const shorterSuffix = ' Settle debt legally with CredSettle.';
    const combinedShort = (punctuated + shorterSuffix).trim();
    if (combinedShort.length <= 146 && combinedShort.length >= 120) {
      return combinedShort.replace(/[—–]/g, '-');
    }
  }

  // If baseDesc is over 146 characters, safely truncate at sentence or word boundary
  if (baseDesc && baseDesc.length > 146) {
    const sentenceEnd = baseDesc.indexOf('.', 120);
    if (sentenceEnd !== -1 && sentenceEnd <= 145) {
      return baseDesc.slice(0, sentenceEnd + 1).replace(/[—–]/g, '-').trim();
    }
    const candidate = baseDesc.slice(0, 142);
    const lastSpace = candidate.lastIndexOf(' ');
    if (lastSpace > 120) {
      return candidate.slice(0, lastSpace).replace(/[—–]/g, '-').trim() + '...';
    }
    return candidate.replace(/[—–]/g, '-').trim() + '...';
  }

  // Fallback to body content if available
  const content = stripHtml(blog.description);
  if (content && content.length >= 120) {
    const sentenceEnd = content.indexOf('.', 120);
    if (sentenceEnd !== -1 && sentenceEnd <= 145) {
      const res = content.slice(0, sentenceEnd + 1).trim();
      if (res.length >= 120 && res.length <= 146) {
        return res.replace(/[—–]/g, '-');
      }
    }
    const candidate = content.slice(0, 142);
    const lastSpace = candidate.lastIndexOf(' ');
    if (lastSpace > 120) {
      return candidate.slice(0, lastSpace).replace(/[—–]/g, '-').trim() + '...';
    }
    return candidate.replace(/[—–]/g, '-').trim() + '...';
  }

  return 'Get expert legal loan settlement and debt relief services in India with CredSettle. Stop bank harassment and resolve outstanding debt legally.';
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return {
      title: 'Resource Not Found | CredSettle',
      description: 'The requested resource could not be found.',
      robots: {
        index: false,
        follow: false
      }
    };
  }

  const canonicalSlug = canonicaliseSlug(blog.slug || generateSlugFromTitle(blog.title) || slug);
  const canonicalUrl = `https://www.credsettle.com/resources/${canonicalSlug}`;
  const rawDescription = OPTIMIZED_DESCRIPTIONS[canonicalSlug] || OPTIMIZED_DESCRIPTIONS[slug] || getValidDescription(blog);
  let effectiveDescription = rawDescription.replace(/[—–]/g, '-').trim();
  if (effectiveDescription.length > 146) {
    const candidate = effectiveDescription.slice(0, 142);
    const lastSpace = candidate.lastIndexOf(' ');
    effectiveDescription = (lastSpace > 120 ? candidate.slice(0, lastSpace) : candidate).trim() + '...';
  }

  const DEFAULT_META_TITLE = 'CredSettle Blog | Expert Debt Relief Insights';
  const optimizedTitle = OPTIMIZED_TITLES[canonicalSlug] || OPTIMIZED_TITLES[slug];
  const optimizedH1 = OPTIMIZED_H1S[canonicalSlug] || OPTIMIZED_H1S[slug];
  const h1Text = formatH1Text(optimizedH1 || blog.title);

  const rawTitle =
    optimizedTitle ||
    (blog.metaTitle && blog.metaTitle.trim() !== '' && blog.metaTitle !== DEFAULT_META_TITLE
      ? blog.metaTitle
      : blog.title);

  let effectiveTitle = rawTitle.replace(/[—–]/g, '-').trim();

  // Ensure title is strictly distinct from H1 (Mistake 4)
  if (effectiveTitle.toLowerCase() === h1Text.toLowerCase()) {
    const suffix = ' | Relief';
    if (effectiveTitle.length + suffix.length <= 60) {
      effectiveTitle = `${effectiveTitle}${suffix}`;
    } else {
      effectiveTitle = `${effectiveTitle.slice(0, 60 - suffix.length).trim()}${suffix}`;
    }
  }

  if (effectiveTitle.length < 50) {
    const withBrand = `${effectiveTitle} | CredSettle`;
    if (withBrand.length <= 60 && withBrand.length >= 30) {
      effectiveTitle = withBrand;
    }
  }
  if (effectiveTitle.length > 60) {
    effectiveTitle = effectiveTitle.slice(0, 57).trim() + '...';
  }

  return {
    title: effectiveTitle,
    description: effectiveDescription,
    alternates: {
      canonical: canonicalUrl
    },
    openGraph: {
      title: effectiveTitle,
      description: effectiveDescription,
      type: 'article',
      url: canonicalUrl,
      images: blog.image ? [{ url: blog.image }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: effectiveTitle,
      description: effectiveDescription,
      images: blog.image ? [blog.image] : undefined
    }
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    notFound();
  }

  const canonicalSlug =
    canonicaliseSlug(blog.slug) ||
    canonicaliseSlug(generateSlugFromTitle(blog.title)) ||
    canonicaliseSlug(slug) ||
    canonicaliseSlug(blog.id) ||
    blog.id;

  if (slug !== canonicalSlug) {
    permanentRedirect(`/resources/${canonicalSlug}`);
  }

  const relatedBlogs = await getRelatedBlogs(canonicalSlug, 3);
  const reviews = await getBlogReviews(blog.id);

  const optimizedH1 = OPTIMIZED_H1S[canonicalSlug] || OPTIMIZED_H1S[slug];
  const effectiveH1 = formatH1Text(optimizedH1 || blog.title);

  const clientBlog = {
    id: blog.id,
    title: effectiveH1,
    rawTitle: blog.title,
    subtitle: blog.subtitle ? blog.subtitle.replace(/[—–]/g, '-') : blog.subtitle,
    date: blog.date,
    image: blog.image,
    infographic: blog.infographic,
    description: blog.description,
    faqs: blog.faqs,
    slug: canonicalSlug,
    keyTakeaways: blog.keyTakeaways,
    popularSearches: blog.popularSearches,
  };

  const formatIsoDateTime = (dateStr?: string): string => {
    if (!dateStr) return new Date().toISOString();
    if (dateStr.includes('T')) {
      const d = new Date(dateStr);
      return !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
    }
    const d = new Date(`${dateStr}T09:00:00+05:30`);
    return !isNaN(d.getTime()) ? d.toISOString() : new Date().toISOString();
  };

  const isoPublishedDate = formatIsoDateTime(blog.date);
  const isoModifiedDate = formatIsoDateTime(blog.date);

  const defaultBlogReviews: Review[] = [
    {
      id: 'default-1',
      author: 'Vikram Mehta',
      rating: 5,
      comment: 'CredSettle helped me settle my credit card debt with a 50% waiver. The legal team stopped recovery agent harassment within 48 hours.',
      date: '2026-01-15'
    },
    {
      id: 'default-2',
      author: 'Pooja Verma',
      rating: 5,
      comment: 'Exceptional debt settlement service. Very transparent and professional legal guidance throughout the process.',
      date: '2026-02-10'
    },
    {
      id: 'default-3',
      author: 'Anand Kulkarni',
      rating: 5,
      comment: 'Saved me from financial distress. Got my NOC letter and debt closure without hassle.',
      date: '2026-03-05'
    }
  ];

  const effectiveReviews = reviews && reviews.length > 0 ? reviews : defaultBlogReviews;

  const rawDescription = OPTIMIZED_DESCRIPTIONS[canonicalSlug] || OPTIMIZED_DESCRIPTIONS[slug] || getValidDescription(blog);
  let effectiveDescription = rawDescription.replace(/[—–]/g, '-').trim();
  if (effectiveDescription.length > 146) {
    const candidate = effectiveDescription.slice(0, 142);
    const lastSpace = candidate.lastIndexOf(' ');
    effectiveDescription = (lastSpace > 120 ? candidate.slice(0, lastSpace) : candidate).trim() + '...';
  }

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: blog.title,
    description: effectiveDescription,
    image: blog.image ? [blog.image] : ['https://www.credsettle.com/sample.png'],
    datePublished: isoPublishedDate,
    dateModified: isoModifiedDate,
    author: {
      '@type': 'Person',
      name: 'Ashish Jhangra',
      url: 'https://www.credsettle.com/author/ashish-jhangra'
    },
    publisher: {
      '@type': 'Organization',
      name: 'CredSettle',
      url: 'https://www.credsettle.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.credsettle.com/credsettle-logo.svg'
      }
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://www.credsettle.com/resources/${canonicalSlug}`
    }
  };

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.credsettle.com/#organization',
    name: 'CredSettle',
    url: 'https://www.credsettle.com',
    logo: 'https://www.credsettle.com/credsettle-logo.svg',
    image: 'https://www.credsettle.com/credsettle-logo.svg',
    description: 'India\'s leading loan settlement and anti-harassment legal platform.',
    telephone: '+91-8800226377',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CredSettle Legal Advisory',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+91-8800226377',
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi']
    },
    sameAs: [
      'https://twitter.com/credsettle',
      'https://www.linkedin.com/company/credsettle'
    ]
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'CredSettle',
    telephone: '+91-8800226377',
    url: `https://www.credsettle.com/resources/${canonicalSlug}`,
    image: blog.image || 'https://www.credsettle.com/credsettle-logo.svg',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'CredSettle Legal Advisory',
      addressLocality: 'New Delhi',
      addressRegion: 'DL',
      postalCode: '110001',
      addressCountry: 'IN'
    },
    priceRange: 'Consultation Free',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: (effectiveReviews.reduce((acc, r) => acc + r.rating, 0) / effectiveReviews.length).toFixed(1),
      reviewCount: effectiveReviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: effectiveReviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author
      },
      datePublished: formatIsoDateTime(review.date).split('T')[0],
      reviewBody: review.comment,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: '5',
        worstRating: '1'
      }
    }))
  };

  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://www.credsettle.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Resources',
        item: 'https://www.credsettle.com/resources'
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: blog.title,
        item: `https://www.credsettle.com/resources/${canonicalSlug}`
      }
    ]
  };

  const faqItems: BlogFaq[] =
    blog.faqs && blog.faqs.length > 0 ? blog.faqs : defaultBlogFaqs;

  const validFaqItems = faqItems.filter(
    (faq) =>
      typeof faq.question === 'string' &&
      faq.question.trim() !== '' &&
      typeof faq.answer === 'string' &&
      faq.answer.trim() !== ''
  );

  // Helper to safely serialize JSON-LD, escaping characters that can break script tags
  const safeJsonLdReplacer = (_key: string, value: any) => {
    if (typeof value === 'string') {
      return value
        .replace(/</g, '\\u003c')
        .replace(/>/g, '\\u003e')
        .replace(/&/g, '\\u0026');
    }
    return value;
  };

  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq`,
    name: `${blog.title} FAQs | CredSettle`,
    description: effectiveDescription,
    mainEntity: validFaqItems.map((faq, index) => ({
      '@type': 'Question',
      '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq-question-${index + 1}`,
      name: faq.question,
      acceptedAnswer: [{
        '@type': 'Answer',
        '@id': `https://www.credsettle.com/resources/${canonicalSlug}#faq-answer-${index + 1}`,
        text: faq.answer
      }]
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {validFaqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqStructuredData, safeJsonLdReplacer)
          }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      <BlogPostPageClient
        blog={clientBlog}
        reviews={reviews}
        relatedBlogs={relatedBlogs.map(({ title, slug: relatedSlug, date, image }) => ({
          title,
          slug: relatedSlug,
          date,
          image,
        }))}
        canonicalSlug={canonicalSlug}
      />
    </>
  );
}

