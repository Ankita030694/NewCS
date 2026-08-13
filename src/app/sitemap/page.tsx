import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "HTML Sitemap | CredSettle",
    description: "Navigate through CredSettle's complete directory of legal and financial services, debt settlement guides, and resources.",
    alternates: {
        canonical: 'https://www.credsettle.com/sitemap',
    },
};

// Auto-generated list of all pages on the site
const sitemapLinks = [
  {
    "title": "Homepage",
    "href": "/"
  },
  {
    "title": "Rbi Guidelines For Recovery Agents 2026",
    "href": "/rbi-guidelines-for-recovery-agents-2026"
  },
  {
    "title": "Loan Emi Overdue 1 Day What Happens",
    "href": "/loan-emi-overdue-1-day-what-happens"
  },
  {
    "title": "Loan Overdue Nach Bounce Immediate Steps",
    "href": "/loan-overdue-nach-bounce-immediate-steps"
  },
  {
    "title": "How To Regularise Overdue Loan Account Npa To Standard",
    "href": "/how-to-regularise-overdue-loan-account-npa-to-standard"
  },
  {
    "title": "Can Bank Contact Guarantor For Recovery",
    "href": "/can-bank-contact-guarantor-for-recovery"
  },
  {
    "title": "Steps To Repair Your Cibil Score After Taking An Urgent Loan",
    "href": "/steps-to-repair-your-cibil-score-after-taking-an-urgent-loan"
  },
  {
    "title": "About",
    "href": "/about"
  },
  {
    "title": "Settle 10 Lakh Credit Card Loan",
    "href": "/settle-10-lakh-credit-card-loan"
  },
  {
    "title": "Contact",
    "href": "/contact"
  },
  {
    "title": "What Is The Success Rate Of Debt Settlement Programs",
    "href": "/what-is-the-success-rate-of-debt-settlement-programs"
  },
  {
    "title": "Debt Management Services",
    "href": "/debt-management-services"
  },
  {
    "title": "1 Debt Management Services In India",
    "href": "/1-debt-management-services-in-india"
  },
  {
    "title": "1 Loan Settlement Services In India",
    "href": "/1-loan-settlement-services-in-india"
  },
  {
    "title": "Can I Waive Off 100 Percent Of My Loan",
    "href": "/can-i-waive-off-100-percent-of-my-loan"
  },
  {
    "title": "Loan Management Services",
    "href": "/loan-management-services"
  },
  {
    "title": "Services",
    "href": "/services"
  },
  {
    "title": "Resources",
    "href": "/resources"
  },
  {
    "title": "Terms And Conditions",
    "href": "/terms-and-conditions"
  },
  {
    "title": "Privacy Policy",
    "href": "/privacy-policy"
  },
  {
    "title": "Personal Loan Settlement",
    "href": "/personal-loan-settlement"
  },
  {
    "title": "What To Do If Your Bank Sends Legal Notices Repeatedly",
    "href": "/what-to-do-if-your-bank-sends-legal-notices-repeatedly"
  },
  {
    "title": "How To Contact The Banking Ombudsman Regarding Harassment Complaints",
    "href": "/how-to-contact-the-banking-ombudsman-regarding-harassment-complaints"
  },
  {
    "title": "Prepaying Loan Impact On Credit Score",
    "href": "/prepaying-loan-impact-on-credit-score"
  },
  {
    "title": "Foreclosure And Part Prepayment Charges On Personal Loan",
    "href": "/foreclosure-and-part-prepayment-charges-on-personal-loan"
  },
  {
    "title": "How Does Long Lien Stay After Foreclosure",
    "href": "/how-does-long-lien-stay-after-foreclosure"
  },
  {
    "title": "Receive Documents After Loan Pre Closure",
    "href": "/receive-documents-after-loan-pre-closure"
  },
  {
    "title": "Auction Settlement Process Loan Recovery Explained",
    "href": "/auction-settlement-process-loan-recovery-explained"
  },
  {
    "title": "Drt Jurisdiction Minimum Limit Loan Recovery",
    "href": "/drt-jurisdiction-minimum-limit-loan-recovery"
  },
  {
    "title": "How To Reply Sarfaesi Notice",
    "href": "/how-to-reply-sarfaesi-notice"
  },
  {
    "title": "Cibil Dispute Wrong Overdue Entry Filing Process",
    "href": "/cibil-dispute-wrong-overdue-entry-filing-process"
  },
  {
    "title": "Loan Written Off Vs Settled Cibil Impact",
    "href": "/loan-written-off-vs-settled-cibil-impact"
  },
  {
    "title": "How To Improve Cibil Score",
    "href": "/how-to-improve-cibil-score"
  },
  {
    "title": "Check Free Cibil Score",
    "href": "/check-free-cibil-score"
  },
  {
    "title": "Experian Credit History",
    "href": "/experian-credit-history"
  },
  {
    "title": "What Is Credit Pulse Report",
    "href": "/what-is-credit-pulse-report"
  },
  {
    "title": "Can I Settle Debt Without Third Party Agency",
    "href": "/can-i-settle-debt-without-third-party-agency"
  },
  {
    "title": "Voluntary Surrender Vehicle Car Loan Shortfall",
    "href": "/voluntary-surrender-vehicle-car-loan-shortfall"
  },
  {
    "title": "Loan Default Crypto Stock Market Loss India",
    "href": "/loan-default-crypto-stock-market-loss-india"
  },
  {
    "title": "Personal Loan Time Barred After 3 Years Limitation Act",
    "href": "/personal-loan-time-barred-after-3-years-limitation-act"
  },
  {
    "title": "Legal Notice To Loan Guarantor Liability",
    "href": "/legal-notice-to-loan-guarantor-liability"
  },
  {
    "title": "Jail For Not Paying Personal Loan",
    "href": "/jail-for-not-paying-personal-loan"
  },
  {
    "title": "Sue Bank Recovery Agent For Defamation India",
    "href": "/sue-bank-recovery-agent-for-defamation-india"
  },
  {
    "title": "Education Loan Default Settlement India",
    "href": "/education-loan-default-settlement-india"
  },
  {
    "title": "Nbfc Recovery Agent Home Visit Stop",
    "href": "/nbfc-recovery-agent-home-visit-stop"
  },
  {
    "title": "7 Day Loan App Harassment Morphed Photos",
    "href": "/7-day-loan-app-harassment-morphed-photos"
  },
  {
    "title": "Msme Business Loan Restructuring Vs Settlement",
    "href": "/msme-business-loan-restructuring-vs-settlement"
  },
  {
    "title": "Cheque Bounce Case Defense Section 138",
    "href": "/cheque-bounce-case-defense-section-138"
  },
  {
    "title": "Credit Card Settlement Vs Minimum Due",
    "href": "/credit-card-settlement-vs-minimum-due"
  },
  {
    "title": "Credit Card Partial Payment",
    "href": "/credit-card-partial-payment"
  },
  {
    "title": "Loan Partial Payment",
    "href": "/loan-partial-payment"
  },
  {
    "title": "Prepayment Reflection Time In Loan Account",
    "href": "/prepayment-reflection-time-in-loan-account"
  },
  {
    "title": "Can I Pay Extra Emi For Personal Loan",
    "href": "/can-i-pay-extra-emi-for-personal-loan"
  },
  {
    "title": "Interest Rate Recalculate After Prepayment",
    "href": "/interest-rate-recalculate-after-prepayment"
  },
  {
    "title": "What Is Line Of Credit",
    "href": "/what-is-line-of-credit"
  },
  {
    "title": "Credit Card Legal Notice Process Next Steps",
    "href": "/credit-card-legal-notice-process-next-steps"
  },
  {
    "title": "Kya Mai Apna Loan Settle Kr Skta Hu",
    "href": "/kya-mai-apna-loan-settle-kr-skta-hu"
  },
  {
    "title": "Nri Loan Default India Settlement From Abroad",
    "href": "/nri-loan-default-india-settlement-from-abroad"
  },
  {
    "title": "Full Form Of Ots",
    "href": "/full-form-of-ots"
  },
  {
    "title": "Loan Settlement After Crypto Stock Market Loss India",
    "href": "/loan-settlement-after-crypto-stock-market-loss-india"
  },
  {
    "title": "What Is The Punishment For Cheque Bounce Under Section 138 Ni Act",
    "href": "/what-is-the-punishment-for-cheque-bounce-under-section-138-ni-act"
  },
  {
    "title": "Check Loan Settlement Status",
    "href": "/check-loan-settlement-status"
  },
  {
    "title": "Unsecured Loans Explained Meaning Types Benefits",
    "href": "/unsecured-loans-explained-meaning-types-benefits"
  },
  {
    "title": "Loan Waiveoff Vs Loan Writeoff Explained Know The Difference",
    "href": "/loan-waiveoff-vs-loan-writeoff-explained-know-the-difference"
  },
  {
    "title": "What Is Debt Consolidation And How It Helps Reduce Monthly Financial Stress",
    "href": "/what-is-debt-consolidation-and-how-it-helps-reduce-monthly-financial-stress"
  },
  {
    "title": "What Is A Moratorium Period Meaning Benefits And Examples",
    "href": "/what-is-a-moratorium-period-meaning-benefits-and-examples"
  },
  {
    "title": "Steps To Rectify A Suit Filed Entry In Cibil A Complete Guide",
    "href": "/steps-to-rectify-a-suit-filed-entry-in-cibil-a-complete-guide"
  },
  {
    "title": "Loan Recovery Notice",
    "href": "/loan-recovery-notice"
  },
  {
    "title": "Expert Panel Vs Recovery Agents Who Should You Trust",
    "href": "/expert-panel-vs-recovery-agents-who-should-you-trust"
  },
  {
    "title": "Post Dated Cheques In Loan Settlement Are They Legally Enforceable",
    "href": "/post-dated-cheques-in-loan-settlement-are-they-legally-enforceable"
  },
  {
    "title": "How Lawyer Panels Help In Negotiating Better Settlement Terms",
    "href": "/how-lawyer-panels-help-in-negotiating-better-settlement-terms"
  },
  {
    "title": "How Expert Panels Helps In Reconstructing High Interest Loans",
    "href": "/how-expert-panels-helps-in-reconstructing-high-interest-loans"
  },
  {
    "title": "Top Lenders Offering Urgent Loans To Cibil Defaulters",
    "href": "/top-lenders-offering-urgent-loans-to-cibil-defaulters"
  },
  {
    "title": "Loan Foreclosure Prepayment Charges Waiver",
    "href": "/loan-foreclosure-prepayment-charges-waiver"
  },
  {
    "title": "What Is Loan Settlement And How Does It Work In India",
    "href": "/what-is-loan-settlement-and-how-does-it-work-in-india"
  },
  {
    "title": "Loc Cant Be Issues For Mere Bank Loan Default Delhi High Court",
    "href": "/loc-cant-be-issues-for-mere-bank-loan-default-delhi-high-court"
  },
  {
    "title": "Can I Settle A Secured Loan Like A Home Loan Or Only Unsecured Ones",
    "href": "/can-i-settle-a-secured-loan-like-a-home-loan-or-only-unsecured-ones"
  },
  {
    "title": "Can I Track My Loan Settlement Status Through Financial Service Websites",
    "href": "/can-i-track-my-loan-settlement-status-through-financial-service-websites"
  },
  {
    "title": "Is It Possible To Settle A Personal Loan Through Mobile Banking Apps",
    "href": "/is-it-possible-to-settle-a-personal-loan-through-mobile-banking-apps"
  },
  {
    "title": "Find Debt Settlement Services Known For Effective Negotiation",
    "href": "/find-debt-settlement-services-known-for-effective-negotiation"
  },
  {
    "title": "Compare Features Of Loan Settlement Services Offered By Major Financial Apps",
    "href": "/compare-features-of-loan-settlement-services-offered-by-major-financial-apps"
  },
  {
    "title": "Where Can I Locate Government Approved Consumer Credit Counseling Services In Chennai",
    "href": "/where-can-i-locate-government-approved-consumer-credit-counseling-services-in-chennai"
  },
  {
    "title": "How To Get The Best Settlement Deal On A Vehicle Loan Using Online Services",
    "href": "/how-to-get-the-best-settlement-deal-on-a-vehicle-loan-using-online-services"
  },
  {
    "title": "Understanding 90 Day Loan Default India",
    "href": "/understanding-90-day-loan-default-india"
  },
  {
    "title": "Do Banks File Fir For Credit Card Dues",
    "href": "/do-banks-file-fir-for-credit-card-dues"
  },
  {
    "title": "Bank Froze Salary Account For Loan Default How To Get Salary",
    "href": "/bank-froze-salary-account-for-loan-default-how-to-get-salary"
  },
  {
    "title": "Is Loan Settlement Illegal In India Truth",
    "href": "/is-loan-settlement-illegal-in-india-truth"
  },
  {
    "title": "Does Settlement Erase The Debt Completely",
    "href": "/does-settlement-erase-the-debt-completely"
  },
  {
    "title": "Is Cibil Ruined Forever After Settlement",
    "href": "/is-cibil-ruined-forever-after-settlement"
  },
  {
    "title": "Is There A Government Portal For Debt Collection Complaints",
    "href": "/is-there-a-government-portal-for-debt-collection-complaints"
  },
  {
    "title": "Can Recovery Agents Abuse You Legally India",
    "href": "/can-recovery-agents-abuse-you-legally-india"
  },
  {
    "title": "Quick Loan Relief",
    "href": "/quick-loan-relief"
  },
  {
    "title": "Missed Car Loan Emi More Than 90 Days",
    "href": "/missed-car-loan-emi-more-than-90-days"
  },
  {
    "title": "Why Emi Payment Keep Failing",
    "href": "/why-emi-payment-keep-failing"
  },
  {
    "title": "How To Check If Bank Account Is Blocked Before Emi",
    "href": "/how-to-check-if-bank-account-is-blocked-before-emi"
  },
  {
    "title": "Is Pre Closure Of A Personal Loan A Good Choice",
    "href": "/is-pre-closure-of-a-personal-loan-a-good-choice"
  },
  {
    "title": "Loan Payment Is Not Reflected On Time",
    "href": "/loan-payment-is-not-reflected-on-time"
  },
  {
    "title": "How To Check The Cibil Defaulter List",
    "href": "/how-to-check-the-cibil-defaulter-list"
  },
  {
    "title": "Education Loan Default Consequences",
    "href": "/education-loan-default-consequences"
  },
  {
    "title": "Personal Loan Settlement Process Consequences",
    "href": "/personal-loan-settlement-process-consequences"
  },
  {
    "title": "Is Loan Settlement A Good Option For Borrowers",
    "href": "/is-loan-settlement-a-good-option-for-borrowers"
  },
  {
    "title": "Will Banks Blacklist You After Loan Settlement",
    "href": "/will-banks-blacklist-you-after-loan-settlement"
  },
  {
    "title": "Can You Get A Loan Again After Settling A Previous Loan",
    "href": "/can-you-get-a-loan-again-after-settling-a-previous-loan"
  },
  {
    "title": "What Documents Do I Need To Prepare For A Loan Settlement Proposal",
    "href": "/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal"
  },
  {
    "title": "How To Check If A Loan Settlement Offer Is Genuine On Digital Platforms",
    "href": "/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms"
  },
  {
    "title": "How Can I Initiate A Full And Final Settlement Discussion With My Bank",
    "href": "/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank"
  },
  {
    "title": "Top Rated Loan Settlement Consultants For Small Business Loans",
    "href": "/top-rated-loan-settlement-consultants-for-small-business-loans"
  },
  {
    "title": "Compare Different Debt Management And Settlement Programs Available To Indian Consumers",
    "href": "/compare-different-debt-management-and-settlement-programs-available-to-indian-consumers"
  },
  {
    "title": "How Do Digital Lending Companies Handle Loan Settlement Requests",
    "href": "/how-do-digital-lending-companies-handle-loan-settlement-requests"
  },
  {
    "title": "When Should You Choose Loan Settlement Instead Of Repayment",
    "href": "/when-should-you-choose-loan-settlement-instead-of-repayment"
  },
  {
    "title": "How Can I Negotiate A Personal Loan Settlement With Lenders",
    "href": "/how-can-I-negotiate-a-personal-loan-settlement-with-lenders"
  },
  {
    "title": "Which Companies Offer Loan Settlement Services In India",
    "href": "/which-companies-offer-loan-settlement-services-in-india"
  },
  {
    "title": "How Does Settling A Loan Impact My Cibil Credit Score",
    "href": "/how-does-settling-a-loan-impact-my-cibil-credit-score"
  },
  {
    "title": "How To Check If A Debt Settlement Company Is Legit And Trustworthy",
    "href": "/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy"
  },
  {
    "title": "Best Apps For Managing And Settling Unsecured Loans",
    "href": "/best-apps-for-managing-and-settling-unsecured-loans"
  },
  {
    "title": "Which Companies Offer Professional Debt Settlement Services For Personal Loans",
    "href": "/which-companies-offer-professional-debt-settlement-services-for-personal-loans"
  },
  {
    "title": "Steps To Apply For A Loan Settlement Through A Financial Service Provider",
    "href": "/steps-to-apply-for-a-loan-settlement-through-a-financial-service-provider"
  },
  {
    "title": "What Are The Key Benefits And Drawbacks Of Pursuing A Loan Settlement",
    "href": "/what-are-the-key-benefits-and-drawbacks-of-pursuing-a-loan-settlement"
  },
  {
    "title": "Find Reputable Debt Relief Agencies Specializing In Unsecured Loans In Bangalore",
    "href": "/find-reputable-debt-relief-agencies-specializing-in-unsecured-loans-in-bangalore"
  },
  {
    "title": "Can I Use Online Platforms To Settle My Home Loan Faster",
    "href": "/can-i-use-online-platforms-to-settle-my-home-loan-faster"
  },
  {
    "title": "What Are The Income Tax Implications Of A Settled Debt Amount",
    "href": "/what-are-the-income-tax-implications-of-a-settled-debt-amount"
  },
  {
    "title": "What Documents Are Required For Loan Settlement With A Professional Service",
    "href": "/what-documents-are-required-for-loan-settlement-with-a-professional-service"
  },
  {
    "title": "Can I Settle My Credit Card Dues Using Third Party Loan Settlement Companies",
    "href": "/can-i-settle-my-credit-card-dues-using-third-party-loan-settlement-companies"
  },
  {
    "title": "What Alternatives Exist To Loan Settlement For Managing Overwhelming Debt",
    "href": "/what-alternatives-exist-to-loan-settlement-for-managing-overwhelming-debt"
  },
  {
    "title": "Can I Get A Loan Settlement Quote Instantly From Online Services",
    "href": "/can-I-get-a-loan-settlement-quote-instantly-from-online-services-"
  },
  {
    "title": "Are There Online Services That Help With Loan Settlement Offers",
    "href": "/are-there-online-services-that-help-with-loan-settlement-offers"
  },
  {
    "title": "What Online Tools Can Help Estimate The Benefits Of Loan Settlement",
    "href": "/what-online-tools-can-help-estimate-the-benefits-of-loan-settlement"
  },
  {
    "title": "Stress Free Debt Free",
    "href": "/stress-free-debt-free"
  },
  {
    "title": "Best Financial Advisors For Debt Settlement In Major Indian Cities",
    "href": "/best-financial-advisors-for-debt-settlement-in-major-indian-cities"
  },
  {
    "title": "What Is Minimum Amount Due For Credit Card",
    "href": "/what-is-minimum-amount-due-for-credit-card"
  },
  {
    "title": "Timely Repayment Of Loan Result",
    "href": "/timely-repayment-of-loan-result"
  },
  {
    "title": "Settlement Of Loan Letter",
    "href": "/settlement-of-loan-letter"
  },
  {
    "title": "Smfg Loan Settlement",
    "href": "/smfg-loan-settlement"
  },
  {
    "title": "Which Professional Services Assist In Negotiating Loan Settlement Terms",
    "href": "/which-professional-services-assist-in-negotiating-loan-settlement-terms"
  },
  {
    "title": "What Are The Interest Savings By Settling Loans Early Through Digital Services",
    "href": "/what-are-the-interest-savings-by-settling-loans-early-through-digital-services"
  },
  {
    "title": "Are There Specialized Programs For Settling Student Loan Defaults In India",
    "href": "/are-there-specialized-programs-for-settling-student-loan-defaults-in-india"
  },
  {
    "title": "Available Loan Settlement Plans For Salaried Individuals Via Fintech Apps",
    "href": "/available-loan-settlement-plans-for-salaried-individuals-via-fintech-apps"
  },
  {
    "title": "Loan Settlement For Startup Founders",
    "href": "/loan-settlement-for-startup-founders"
  },
  {
    "title": "Loan Settlement For Msme Owners",
    "href": "/loan-settlement-for-msme-owners"
  },
  {
    "title": "Loan Settlement For Traders",
    "href": "/loan-settlement-for-traders"
  },
  {
    "title": "Loan Settlement During Medical Emergency",
    "href": "/loan-settlement-during-medical-emergency"
  },
  {
    "title": "Which Bank Provide Personal Loan For Cibil Defaulters",
    "href": "/which-bank-provide-personal-loan-for-cibil-defaulters"
  },
  {
    "title": "Legal Notice For Recovery Of Money",
    "href": "/legal-notice-for-recovery-of-money"
  },
  {
    "title": "How To Improve Cibil Score After Loan Settlement",
    "href": "/how-to-improve-cibil-score-after-loan-settlement"
  },
  {
    "title": "How To Block Recovery Agent Numbers On Android And Iphone Devices",
    "href": "/how-to-block-recovery-agent-numbers-on-android-and-iphone-devices"
  },
  {
    "title": "Best Debt Settlement Companies In India For Loan And Credit Card Debt Relief",
    "href": "/best-debt-settlement-companies-in-india-for-loan-and-credit-card-debt-relief"
  },
  {
    "title": "Does Foreclosure Of Loan Affect Cibil",
    "href": "/does-foreclosure-of-loan-affect-cibil"
  },
  {
    "title": "Can I Settle My Debts Without Using A Third Party Company",
    "href": "/can-i-settle-my-debts-without-using-a-third-party-company"
  },
  {
    "title": "Reviews Of Popular Debt Settlement Services Available To Indian Consumers",
    "href": "/reviews-of-popular-debt-settlement-services-available-to-indian-consumers"
  },
  {
    "title": "How To Negotiate A Debt Settlement With Creditors In India",
    "href": "/how-to-negotiate-a-debt-settlement-with-creditors-in-India"
  },
  {
    "title": "Find Reputable Agencies That Help Settle Credit Card Debt In India",
    "href": "/find-reputable-agencies-that-help-settle-credit-card-debt-in-india"
  },
  {
    "title": "Best Companies For Debt Settlement Services In India",
    "href": "/best-companies-for-debt-settlement-services-in-india"
  },
  {
    "title": "What Are The Risks Of Entering A Debt Settlement Agreement",
    "href": "/what-are-the-risks-of-entering-a-debt-settlement-agreement"
  },
  {
    "title": "What Questions Should I Ask A Debt Settlement Consultant",
    "href": "/what-questions-should-i-ask-a-debt-settlement-consultant"
  },
  {
    "title": "Customer Testimonials For Debt Settlement Service Providers",
    "href": "/customer-testimonials-for-debt-settlement-service-providers"
  },
  {
    "title": "Debt Settlement Options For Freelancers And Self Employed Individuals",
    "href": "/debt-settlement-options-for-freelancers-and-self-employed-individuals"
  },
  {
    "title": "Get A Free Consultation For Debt Settlement Options",
    "href": "/get-a-free-consultation-for-debt-settlement-options"
  },
  {
    "title": "Which Banks Offer Debt Consolidation Loans In India",
    "href": "/which-banks-offer-debt-consolidation-loans-in-india"
  },
  {
    "title": "Punishment For Non Payment Of Personal Loan In India",
    "href": "/punishment-for-non-payment-of-personal-loan-in-india"
  },
  {
    "title": "Which Banks Offer Debt Consolidation Loans For Bad Credit",
    "href": "/which-banks-offer-debt-consolidation-loans-for-bad-credit"
  },
  {
    "title": "Get Contact Details For Top Rated Debt Resolution Companies In India",
    "href": "/get-contact-details-for-top-rated-debt-resolution-companies-in-india"
  },
  {
    "title": "Which Credit Card Debt Relief Services Offer The Best Settlement Options In India",
    "href": "/which-credit-card-debt-relief-services-offer-the-best-settlement-options-in-india"
  },
  {
    "title": "Loan Recovery Agent Near Me",
    "href": "/loan-recovery-agent-near-me"
  },
  {
    "title": "Support For Loan Settlement During Medical Emergencies",
    "href": "/support-for-loan-settlement-during-medical-emergencies"
  },
  {
    "title": "Trading Loan Settlement",
    "href": "/trading-loan-settlement"
  },
  {
    "title": "Best Loan Settlement Services Near Me With Flexible Payment Plans",
    "href": "/best-loan-settlement-services-near-me-with-flexible-payment-plans"
  },
  {
    "title": "How To Get 800 Credit Score In India",
    "href": "/how-to-get-800-credit-score-in-india"
  },
  {
    "title": "Best Time For Loan Settlement",
    "href": "/best-time-for-loan-settlement"
  },
  {
    "title": "Recommendations For Debt Settlement Services In India With Low Processing Fees",
    "href": "/recommendations-for-debt-settlement-services-in-india-with-low-processing-fees"
  },
  {
    "title": "What Is The Best Loan Settlement Company In India For High Credit Card Balances",
    "href": "/what-is-the-best-loan-settlement-company-in-india-for-high-credit-card-balances"
  },
  {
    "title": "Recommendations For Loan Settlement Services That Negotiate Lower Interest Rates In India",
    "href": "/recommendations-for-loan-settlement-services-that-negotiate-lower-interest-rates-in-india"
  },
  {
    "title": "Which Loan Settlement Service Should I Use For Settling Multiple Credit Card Debts",
    "href": "/which-loan-settlement-service-should-i-use-for-settling-multiple-credit-card-debts"
  },
  {
    "title": "How Do I Officially Submit A Loan Settlement Offer To My Lender",
    "href": "/how-do-i-officially-submit-a-loan-settlement-offer-to-my-lender"
  },
  {
    "title": "How To Document Evidence Of Debt Collector Harassment",
    "href": "/how-to-document-evidence-of-debt-collector-harassment"
  },
  {
    "title": "Affordable Debt Settlement Plans For Salaried Individuals",
    "href": "/affordable-debt-settlement-plans-for-salaried-individuals"
  },
  {
    "title": "How Do Online Debt Settlement Platforms Work In India",
    "href": "/how-do-online-debt-settlement-platforms-work-in-india"
  },
  {
    "title": "Can I Settle Credit Card Debt Through A Debt Settlement Service",
    "href": "/can-i-settle-credit-card-debt-through-a-debt-settlement-service"
  },
  {
    "title": "How To Avoid Scams In The Debt Settlement Industry",
    "href": "/how-to-avoid-scams-in-the-debt-settlement-industry"
  },
  {
    "title": "Loan Settlement",
    "href": "/loan-settlement"
  },
  {
    "title": "Loan Settlement/hdfc",
    "href": "/loan-settlement/hdfc"
  },
  {
    "title": "Loan Settlement/sbi",
    "href": "/loan-settlement/sbi"
  },
  {
    "title": "Loan Settlement/indusind",
    "href": "/loan-settlement/indusind"
  },
  {
    "title": "Loan Settlement/icici",
    "href": "/loan-settlement/icici"
  },
  {
    "title": "Loan Settlement/idfc",
    "href": "/loan-settlement/idfc"
  },
  {
    "title": "Loan Settlement/kotak",
    "href": "/loan-settlement/kotak"
  },
  {
    "title": "Loan Settlement/yes Bank",
    "href": "/loan-settlement/yes-bank"
  },
  {
    "title": "Loan Settlement/axis Bank",
    "href": "/loan-settlement/axis-bank"
  },
  {
    "title": "Loan Settlement/dmi Finance",
    "href": "/loan-settlement/dmi-finance"
  },
  {
    "title": "Loan Settlement/rbl Bank",
    "href": "/loan-settlement/rbl-bank"
  },
  {
    "title": "Loan Settlement/bajaj Finserv",
    "href": "/loan-settlement/bajaj-finserv"
  },
  {
    "title": "Loan Settlement/hero Fincorp",
    "href": "/loan-settlement/hero-fincorp"
  },
  {
    "title": "Loan Settlement/aditya Birla",
    "href": "/loan-settlement/aditya-birla"
  },
  {
    "title": "Loan Settlement/federal Bank",
    "href": "/loan-settlement/federal-bank"
  },
  {
    "title": "Loan Settlement/union Bank",
    "href": "/loan-settlement/union-bank"
  },
  {
    "title": "Loan Settlement/bank Of Baroda",
    "href": "/loan-settlement/bank-of-baroda"
  },
  {
    "title": "Loan Settlement/kisetsu",
    "href": "/loan-settlement/kisetsu"
  },
  {
    "title": "Loan Settlement/smfg India Credit",
    "href": "/loan-settlement/smfg-india-credit"
  },
  {
    "title": "Loan Settlement/fibe",
    "href": "/loan-settlement/fibe"
  },
  {
    "title": "Best Lawyer For Msme Loan Recovery Defence",
    "href": "/best-lawyer-for-MSME-loan-recovery-defence"
  },
  {
    "title": "Best Lawyer For Msme Personal Loan",
    "href": "/best-lawyer-for-MSME-personal-loan"
  },
  {
    "title": "Best Lawyer For Personal Loans",
    "href": "/best-lawyer-for-personal-loans"
  },
  {
    "title": "Best Lawyer For Bank Loan Recovery Defence",
    "href": "/best-lawyer-for-bank-loan-recovery-defence"
  },
  {
    "title": "Best Lawyers For Bounced Security Check For Loans And Credit Card Disputes",
    "href": "/best-lawyers-for-bounced-security-check-for-loans-and-credit-card-disputes"
  },
  {
    "title": "Best Lawyer For Drt Case Defence For Bank Loan Recovery",
    "href": "/best-lawyer-for-drt-case-defence-for-bank-loan-recovery"
  },
  {
    "title": "Best Lawyer For Loan Settlement During Drt",
    "href": "/best-lawyer-for-loan-settlement-during-drt"
  },
  {
    "title": "Best Project Finance Builder Loan Recovery Matter Lawyer",
    "href": "/best-project-finance-builder-loan-recovery-matter-lawyer"
  },
  {
    "title": "Best Loan Agreement Arbitration Lawyer",
    "href": "/best-loan-agreement-arbitration-lawyer"
  },
  {
    "title": "Best Lawyer For Home Loan Check Bounce Case",
    "href": "/best-lawyer-for-home-loan-check-bounce-case"
  },
  {
    "title": "Drt Lawyer In Mumbai Loan Recovery",
    "href": "/drt-lawyer-in-mumbai-loan-recovery"
  },
  {
    "title": "Best Lawyer For Account Documents Drt",
    "href": "/best-lawyer-for-account-documents-drt"
  },
  {
    "title": "Best Lawyer For Loan Recovery Documentation",
    "href": "/best-lawyer-for-loan-recovery-documentation"
  },
  {
    "title": "Best Lawyer For Documentation Review Of Loan Agreement",
    "href": "/best-lawyer-for-documentation-review-of-loan-agreement"
  },
  {
    "title": "Best Lawyer For Arc Loan Assignment Dispute",
    "href": "/best-lawyer-for-arc-loan-assignment-dispute"
  },
  {
    "title": "Best Lawyer For Msme Business Loan Dispute",
    "href": "/best-lawyer-for-msme-business-loan-dispute"
  },
  {
    "title": "Best Lawyer For Loan Settlement By Drt",
    "href": "/best-lawyer-for-loan-settlement-by-drt"
  },
  {
    "title": "Best Lawyer For Notice For Loan Default",
    "href": "/best-lawyer-for-notice-for-loan-default"
  },
  {
    "title": "Best Lawyer For Drt Loan Assignment Dispute Defence In Drt",
    "href": "/best-lawyer-for-drt-loan-assignment-dispute-defence-in-drt"
  },
  {
    "title": "Best Lawyer For Msme And Business Loans",
    "href": "/best-lawyer-for-msme-and-business-loans"
  },
  {
    "title": "Best Lawyer For Company Loan Matters",
    "href": "/best-lawyer-for-company-loan-matters"
  },
  {
    "title": "Best Lawyer For Notice For Default On Mortgage Or Loan Repayment",
    "href": "/best-lawyer-for-notice-for-default-on-mortgage-or-loan-repayment"
  },
  {
    "title": "Best Lawyer For Consortium Loan Recovery Defence",
    "href": "/best-lawyer-for-consortium-loan-recovery-defence"
  },
  {
    "title": "Loan Agreement Drafting Review",
    "href": "/loan-agreement-drafting-review"
  },
  {
    "title": "Best Nbfc Loan Settlement Lawyer",
    "href": "/best-nbfc-loan-settlement-lawyer"
  },
  {
    "title": "Sme Loan Dispute Resolution",
    "href": "/SME-loan-dispute-resolution"
  },
  {
    "title": "Mudra Loan Settlement Legal Help",
    "href": "/mudra-loan-settlement-legal-help"
  },
  {
    "title": "Dispute Over Forged Loan Signatures",
    "href": "/dispute-over-forged-loan-signatures"
  },
  {
    "title": "Rbi New Recovery Guidelines July 2026",
    "href": "/rbi-new-recovery-guidelines-july-2026"
  },
  {
    "title": "Bank Sent Legal Notice For Loan What To Do",
    "href": "/bank-sent-legal-notice-for-loan-what-to-do"
  },
  {
    "title": "Can Bank File Case For Personal Loan",
    "href": "/can-bank-file-case-for-personal-loan"
  },
  {
    "title": "Legal Action For Credit Card Default",
    "href": "/legal-action-for-credit-card-default"
  },
  {
    "title": "Bank Arbitration Notice Loan",
    "href": "/bank-arbitration-notice-loan"
  },
  {
    "title": "Bank Recovery Case In Court",
    "href": "/bank-recovery-case-in-court"
  },
  {
    "title": "Recovery Agents Threatening Me What To Do",
    "href": "/recovery-agents-threatening-me-what-to-do"
  },
  {
    "title": "Bank Recovery Harassment Complaint",
    "href": "/bank-recovery-harassment-complaint"
  },
  {
    "title": "Rbi Rules For Recovery Agents",
    "href": "/rbi-rules-for-recovery-agents"
  },
  {
    "title": "Can Recovery Agents Come Home",
    "href": "/can-recovery-agents-come-home"
  },
  {
    "title": "Recovery Agents Calling Family Members Law",
    "href": "/recovery-agents-calling-family-members-law"
  },
  {
    "title": "Can I Go To Jail For Loan Default In India",
    "href": "/can-i-go-to-jail-for-loan-default-in-india"
  },
  {
    "title": "Police Case For Credit Card Debt",
    "href": "/police-case-for-credit-card-debt"
  },
  {
    "title": "Bank Filed Fir For Loan Default",
    "href": "/bank-filed-fir-for-loan-default"
  },
  {
    "title": "Startup Loan Legal Advisory",
    "href": "/startup-loan-legal-advisory"
  },
  {
    "title": "Working Capital Loan Legal Help",
    "href": "/working-capital-loan-legal-help"
  },
  {
    "title": "How To Negotiate A Full And Final Settlement For An Overdue Personal Loan",
    "href": "/how-to-negotiate-a-full-and-final-settlement-for-an-overdue-personal-loan"
  },
  {
    "title": "Loan Taken In Spouse Name Without Consent What To Do",
    "href": "/loan-taken-in-spouse-name-without-consent-what-to-do"
  },
  {
    "title": "Legal Case For Loan Sanction Without Consent",
    "href": "/legal-case-for-loan-sanction-without-consent"
  },
  {
    "title": "Loan Default Recovery Freeze Defense",
    "href": "/loan-default-recovery-freeze-defense"
  },
  {
    "title": "Post Loan Settlement Legal Help",
    "href": "/post-loan-settlement-legal-help"
  },
  {
    "title": "Digital Online Cyber Loan Disputes",
    "href": "/digital-online-cyber-loan-disputes"
  },
  {
    "title": "Business Corporate Loan Matters",
    "href": "/business-corporate-loan-matters"
  },
  {
    "title": "Loan Default Emi Foreclosure Assistance",
    "href": "/loan-default-emi-foreclosure-assistance"
  },
  {
    "title": "Legal Help For Non Closure Of Settled Loan",
    "href": "/legal-help-for-non-closure-of-settled-loan"
  },
  {
    "title": "Best Loan Emi Settlement Lawyer",
    "href": "/best-loan-emi-settlement-lawyer"
  },
  {
    "title": "Loan Parties Dispute Resolution",
    "href": "/loan-parties-dispute-resolution"
  },
  {
    "title": "Loan Settlement/poonawalla",
    "href": "/loan-settlement/poonawalla"
  },
  {
    "title": "Loan Settlement/tata Capital",
    "href": "/loan-settlement/tata-capital"
  },
  {
    "title": "Loan Settlement/krazybee",
    "href": "/loan-settlement/krazybee"
  },
  {
    "title": "Loan Settlement/au Small Finance Bank",
    "href": "/loan-settlement/au-small-finance-bank"
  },
  {
    "title": "Loan Settlement/piramal Finance",
    "href": "/loan-settlement/piramal-finance"
  },
  {
    "title": "Loan Settlement/stashfin",
    "href": "/loan-settlement/stashfin"
  },
  {
    "title": "Loan Settlement/payu Finance",
    "href": "/loan-settlement/payu-finance"
  },
  {
    "title": "Loan Settlement/maharashtra",
    "href": "/loan-settlement/maharashtra"
  },
  {
    "title": "Loan Settlement/delhi",
    "href": "/loan-settlement/delhi"
  },
  {
    "title": "Loan Settlement/karnataka",
    "href": "/loan-settlement/karnataka"
  },
  {
    "title": "Loan Settlement/rajasthan",
    "href": "/loan-settlement/rajasthan"
  },
  {
    "title": "Loan Settlement/haryana",
    "href": "/loan-settlement/haryana"
  },
  {
    "title": "Loan Settlement/gujarat",
    "href": "/loan-settlement/gujarat"
  },
  {
    "title": "Loan Settlement/west Bengal",
    "href": "/loan-settlement/west-bengal"
  },
  {
    "title": "Loan Settlement/tamil Nadu",
    "href": "/loan-settlement/tamil-nadu"
  },
  {
    "title": "Loan Settlement/uttar Pradesh",
    "href": "/loan-settlement/uttar-pradesh"
  },
  {
    "title": "Loan Settlement/andhra Pradesh",
    "href": "/loan-settlement/andhra-pradesh"
  },
  {
    "title": "Loan Settlement/telangana",
    "href": "/loan-settlement/telangana"
  },
  {
    "title": "What Is Npa",
    "href": "/what-is-npa"
  },
  {
    "title": "Cheque Bounce Case In Kolkata",
    "href": "/cheque-bounce-case-in-kolkata"
  },
  {
    "title": "Cheque Bounce Case In Ahmedabad",
    "href": "/cheque-bounce-case-in-ahmedabad"
  },
  {
    "title": "Cheque Bounce Case In Delhi",
    "href": "/cheque-bounce-case-in-delhi"
  },
  {
    "title": "Cheque Bounce Case In Noida",
    "href": "/cheque-bounce-case-in-noida"
  },
  {
    "title": "Best Lawyer For Secured Loan Litigation Drt",
    "href": "/best-lawyer-for-secured-loan-litigation-drt"
  },
  {
    "title": "Best Lawyer For Car Loan Settlement",
    "href": "/best-lawyer-for-car-loan-settlement"
  },
  {
    "title": "Best Check Bounce Lawyer For Loan Case",
    "href": "/best-check-bounce-lawyer-for-loan-case"
  },
  {
    "title": "Which Loan Settlement Service Offers The Fastest Resolution For Personal Loans",
    "href": "/which-loan-settlement-service-offers-the-fastest-resolution-for-personal-loans"
  },
  {
    "title": "Loan Settlement Services Vs Debt Consolidation Companies Which Is Better For Reducing Emi",
    "href": "/loan-settlement-services-vs-debt-consolidation-companies-which-is-better-for-reducing-emi"
  },
  {
    "title": "How To Handle Recovery Agent Harrasment",
    "href": "/how-to-handle-recovery-agent-harrasment"
  },
  {
    "title": "How To Stop Recovery Agent Home Visit",
    "href": "/how-to-stop-recovery-agent-home-visit"
  },
  {
    "title": "How To Stop Recovery Agent Harassment",
    "href": "/how-to-stop-recovery-agent-harassment"
  },
  {
    "title": "How To Ask Bank For Settlement",
    "href": "/how-to-ask-bank-for-settlement"
  },
  {
    "title": "Can I Settle Loan For Free",
    "href": "/can-i-settle-loan-for-free"
  },
  {
    "title": "Loan Settlement Vs Repayment",
    "href": "/loan-settlement-vs-repayment"
  },
  {
    "title": "Is Loan Settlement A Good Option",
    "href": "/is-loan-settlement-a-good-option"
  },
  {
    "title": "What Are The Advantages And Disadvantages Of Loan Settlement",
    "href": "/what-are-the-advantages-and-disadvantages-of-loan-settlement"
  },
  {
    "title": "How Does Loan Settlement Affect Your Financial Health In Long Term",
    "href": "/how-does-loan-settlement-affect-your-financial-health-in-long-term"
  },
  {
    "title": "Does Loan Settlement Affect Cibil",
    "href": "/does-loan-settlement-affect-cibil"
  },
  {
    "title": "Bajaj Finance Recovery Agent Harassment Home Visit",
    "href": "/bajaj-finance-recovery-agent-harassment-home-visit"
  },
  {
    "title": "Rbl Bank Harrasement Home Visit",
    "href": "/rbl-bank-harrasement-home-visit"
  },
  {
    "title": "What Steps Should I Take Before Negotiating A Loan Settlement With My Lender",
    "href": "/what-steps-should-i-take-before-negotiating-a-loan-settlement-with-my-lender"
  },
  {
    "title": "Best Lawyer For Loan Recovery Cases",
    "href": "/best-lawyer-for-loan-recovery-cases"
  },
  {
    "title": "Best Lawyer For Msme Loan Disputes",
    "href": "/best-lawyer-for-msme-loan-disputes"
  },
  {
    "title": "Best Lawyer For Bank Harassment For Loan",
    "href": "/best-lawyer-for-bank-harassment-for-loan"
  },
  {
    "title": "How To Settle 7 Days Loan App",
    "href": "/how-to-settle-7-days-loan-app"
  },
  {
    "title": "Loan Settlement During Divorce Joint Loan India",
    "href": "/loan-settlement-during-divorce-joint-loan-india"
  },
  {
    "title": "Loan Recovery After Death Of Borrower Legal Heir Rights India",
    "href": "/loan-recovery-after-death-of-borrower-legal-heir-rights-india"
  },
  {
    "title": "Best Lawyer For Loan Contract",
    "href": "/best-lawyer-for-loan-contract"
  },
  {
    "title": "Best Lawyer For Home Loan Settlement",
    "href": "/best-lawyer-for-home-loan-settlement"
  },
  {
    "title": "Best Lawyer For Loan And Mortgage Agreements",
    "href": "/best-lawyer-for-loan-and-mortgage-agreements"
  },
  {
    "title": "Best Lawyer For Education Loan Settlement",
    "href": "/best-lawyer-for-education-loan-settlement"
  },
  {
    "title": "Best Lawyer For Loan Against Property Settlement",
    "href": "/best-lawyer-for-loan-against-property-settlement"
  },
  {
    "title": "Best Lawyer For Business Loan Settlement",
    "href": "/best-lawyer-for-business-loan-settlement"
  },
  {
    "title": "Best Lawyer For Loan Agreement",
    "href": "/best-lawyer-for-loan-agreement"
  },
  {
    "title": "Best Lawyer For Trading Loan Settlement",
    "href": "/best-lawyer-for-trading-loan-settlement"
  },
  {
    "title": "Best Lawyer For Unsecured Loan",
    "href": "/best-lawyer-for-unsecured-loan"
  },
  {
    "title": "Best Lawyer To Challenge Loan Assignment To Arc",
    "href": "/best-lawyer-to-challenge-loan-assignment-to-arc"
  },
  {
    "title": "Bad Loan Recovery Strategy",
    "href": "/bad-loan-recovery-strategy"
  },
  {
    "title": "Debt Consolidation Loans Types Pros And Cons And Ideal Situations",
    "href": "/debt-consolidation-loans-types-pros-and-cons-and-ideal-situations"
  },
  {
    "title": "Best Microfinance Loan Settlement Lawyer",
    "href": "/best-microfinance-loan-settlement-lawyer"
  },
  {
    "title": "Loan Auction Notice Stop Postpone Cancel Options",
    "href": "/loan-auction-notice-stop-postpone-cancel-options"
  },
  {
    "title": "Ignoring Legal Notices Financial Default Consequences",
    "href": "/ignoring-legal-notices-financial-default-consequences"
  },
  {
    "title": "Debt Settlement Services That Work With Multiple Creditors",
    "href": "/debt-settlement-services-that-work-with-multiple-creditors"
  },
  {
    "title": "What Is Minimun Debt Amount Required For Settlement Programs",
    "href": "/what-is-minimun-debt-amount-required-for-settlement-programs"
  },
  {
    "title": "Are There Legal Implecations Or Non Payment During Debt Settlement",
    "href": "/are-there-legal-implecations-or-non-payment-during-debt-settlement"
  },
  {
    "title": "How Long Does A Debt Settlement Typically Take",
    "href": "/how-long-does-a-debt-settlement-typically-take"
  },
  {
    "title": "Debt Settlement Offers For Business Loans",
    "href": "/debt-settlement-offers-for-business-loans"
  },
  {
    "title": "Compare Debt Settlement Fees And Success Rate",
    "href": "/compare-debt-settlement-fees-and-success-rate"
  },
  {
    "title": "How To Choose A Trustworthy Debt Settlement Provider",
    "href": "/how-to-choose-a-trustworthy-debt-settlement-provider"
  },
  {
    "title": "How To Find A Trustworthy Debt Settlement Agency Near Me",
    "href": "/how-to-find-a-trustworthy-debt-settlement-agency-near-me"
  },
  {
    "title": "What Are The Best Apps To Block Recovery Agent Calls And Messages",
    "href": "/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages"
  },
  {
    "title": "How To Deal With Collection Calls While In A Debt Settlement Program",
    "href": "/how-to-deal-with-collection-calls-while-in-a-debt-settlement-program"
  },
  {
    "title": "Find Alternatives Solutions To Debt Settlement For Small Debts",
    "href": "/find-alternatives-solutions-to-debt-settlement-for-small-debts"
  },
  {
    "title": "Debt Settlement Vs Bankruptcy",
    "href": "/debt-settlement-vs-bankruptcy"
  },
  {
    "title": "What Documents Are Needed For Debt Settlement Services",
    "href": "/what-documents-are-needed-for-debt-settlement-services"
  },
  {
    "title": "What Are The Consumer Protection Laws Related To Debt Settlement In India",
    "href": "/what-are-the-consumer-protection-laws-related-to-debt-settlement-in-india"
  },
  {
    "title": "Debt Settlement Vs Debt Consolidation",
    "href": "/debt-settlement-vs-debt-consolidation"
  },
  {
    "title": "Debt Settlement Vs Loan Restructuring For Credit Card Debt Relief In India Which Should I Choose",
    "href": "/debt-settlement-vs-loan-restructuring-for-credit-card-debt-relief-in-india-which-should-i-choose"
  },
  {
    "title": "How To Negotiate A Lower Principal Amount For Creditors",
    "href": "/how-to-negotiate-a-lower-principal-amount-for-creditors"
  },
  {
    "title": "What Are The Legal Risks Associated With Defaulting On A Loan Without Settlement",
    "href": "/what-are-the-legal-risks-associated-with-defaulting-on-a-loan-without-settlement"
  },
  {
    "title": "What Are User Reviews For Popular Loan Settlement Platforms",
    "href": "/what-are-user-reviews-for-popular-loan-settlement-platforms"
  },
  {
    "title": "Are There Any Government Approved Loan Settlement Services Available Online",
    "href": "/are-there-any-government-approved-loan-settlement-services-available-online"
  },
  {
    "title": "Request A Free Evaluation Of My Debt Situation From A Settlement Firm",
    "href": "/request-a-free-evaluation-of-my-debt-situation-from-a-settlement-firm"
  },
  {
    "title": "Loan Settlement For Salaried People",
    "href": "/loan-settlement-for-salaried-people"
  },
  {
    "title": "Top 10 Instant Loan Apps Revolutionizing Access To Credit In India",
    "href": "/top-10-instant-loan-apps-revolutionizing-access-to-credit-in-india"
  },
  {
    "title": "Rbi July 2026 Recovery Guidelines",
    "href": "/rbi-july-2026-recovery-guidelines"
  },
  {
    "title": "Top Rated Loan Settlement Agencies In India For Reducing Credit Card Debt",
    "href": "/top-rated-loan-settlement-agencies-in-india-for-reducing-credit-card-debt"
  },
  {
    "title": "Bank Calling References And Family Members",
    "href": "/bank-calling-references-and-family-members"
  },
  {
    "title": "Can I Settle My Home Loan",
    "href": "/can-I-settle-my-home-loan"
  },
  {
    "title": "Can I Convert Settled To Closed Later",
    "href": "/can-i-convert-settled-to-closed-later"
  },
  {
    "title": "Can I Settle My Loan Without A Lawyer",
    "href": "/can-i-settle-my-loan-without-a-lawyer"
  },
  {
    "title": "Cred Settle Plan For Building Debt Free Future After Settlement",
    "href": "/cred-settle-plan-for-building-debt-free-future-after-settlement"
  },
  {
    "title": "Cred Settle Support For Avoiding Aggressive Recovery Practices",
    "href": "/cred-settle-support-for-avoiding-aggressive-recovery-practices"
  },
  {
    "title": "Credsettle Reviews And Comparisons With Other Credit Card Debt Relief Providers In India",
    "href": "/credsettle-reviews-and-comparisons-with-other-credit-card-debt-relief-providers-in-india"
  },
  {
    "title": "Credsettle Vs Other Debt Settlement Companies In India Which Is More Effective",
    "href": "/credsettle-vs-other-debt-settlement-companies-in-india-which-is-more-effective"
  },
  {
    "title": "Does Settlement Impact A Co Borrower",
    "href": "/does-settlement-impact-a-co-borrower"
  },
  {
    "title": "Explain The Difference Between A Loan Write Off And A Loan Settlement",
    "href": "/explain-the-difference-between-a-loan-write-off-and-a-loan-settlement"
  },
  {
    "title": "Where To Find Lawyers Specializing In Consumer Debt Protection",
    "href": "/where-to-find-lawyers-specializing-in-consumer-debt-protection"
  },
  {
    "title": "Is There Any Mobile Software To Automatically Block Harassment Calls From Recovery Agents",
    "href": "/is-there-any-mobile-software-to-automatically-block-harassment-calls-from-recovery-agents"
  },
  {
    "title": "How To Protect Family Members From Debt Collector Calls",
    "href": "/how-to-protect-family-members-from-debt-collector-calls"
  },
  {
    "title": "What Are The Best Legal Aid Websites For Recovery Agent Harassment Cases",
    "href": "/what-are-the-best-legal-aid-websites-for-recovery-agent-harassment-cases"
  },
  {
    "title": "What Are The Best Loan Settlement Services In India For High Value Debts",
    "href": "/what-are-the-best-loan-settlement-services-in-india-for-high-value-debts"
  },
  {
    "title": "Which Financial Institutions Provide Support To Stop Recovery Agent Harassment",
    "href": "/which-financial-institutions-provide-support-to-stop-recovery-agent-harassment"
  },
  {
    "title": "Find Certified Financial Planners Who Specialize In Debt Restructuring And Settlement",
    "href": "/find-certified-financial-planners-who-specialize-in-debt-restructuring-and-settlement"
  },
  {
    "title": "Get A Quote For Debt Settlement Services For My Credit Card Debt",
    "href": "/get-a-quote-for-debt-settlement-services-for-my-credit-card-debt"
  },
  {
    "title": "Handle Loan Default Without Panicking",
    "href": "/handle-loan-default-without-panicking"
  },
  {
    "title": "Home Loan Eligibility After Settlement",
    "href": "/home-loan-eligibility-after-settlement"
  },
  {
    "title": "How Do Peer To Peer Lending Platforms Handle Loan Settlements",
    "href": "/how-do-peer-to-peer-lending-platforms-handle-loan-settlements"
  },
  {
    "title": "How To Avoid Debt Settlement Scams In India",
    "href": "/how-to-avoid-debt-settlement-scams-in-india"
  },
  {
    "title": "How To Check Active Loan On Your Name In India Stepbystep Guide",
    "href": "/how-to-check-active-loan-on-your-name-in-india-stepbystep-guide"
  },
  {
    "title": "How To Get Freed From Debt",
    "href": "/how-to-get-freed-from-debt"
  },
  {
    "title": "How To Identify Fake Recovery Agents",
    "href": "/how-to-identify-fake-recovery-agents"
  },
  {
    "title": "How To Initiate A Loan Settlement Request Through A Banks Online Portal",
    "href": "/how-to-initiate-a-loan-settlement-request-through-a-banks-online-portal"
  },
  {
    "title": "How To Settle Loan",
    "href": "/how-to-settle-loan"
  },
  {
    "title": "Is It Possible To Settle A Joint Loan And What Are The Implications For Co Borrowers",
    "href": "/is-it-possible-to-settle-a-joint-loan-and-what-are-the-implications-for-co-borrowers"
  },
  {
    "title": "Is Loan Settlement In Installments Possible",
    "href": "/is-loan-settlement-in-installments-possible"
  },
  {
    "title": "Legal Notice For Loan Settlement Harassment",
    "href": "/legal-notice-for-loan-settlement-harassment"
  },
  {
    "title": "Loan Settlement By Bank",
    "href": "/loan-settlement-by-bank"
  },
  {
    "title": "Loan Settlement By City",
    "href": "/loan-settlement-by-city"
  },
  {
    "title": "Loan Settlement For Borrowers Facing Economic Downturn",
    "href": "/loan-settlement-for-borrowers-facing-economic-downturn"
  },
  {
    "title": "Loan Settlement For Borrowers Planning Financial Reset",
    "href": "/loan-settlement-for-borrowers-planning-financial-reset"
  },
  {
    "title": "Loan Settlement For Self Employed",
    "href": "/loan-settlement-for-self-employed"
  },
  {
    "title": "Loan Settlement Letter Format Noc Format",
    "href": "/loan-settlement-letter-format-noc-format"
  },
  {
    "title": "Loan Settlement Process In Hindi",
    "href": "/loan-settlement-process-in-hindi"
  },
  {
    "title": "P2p Crypto Scam Unfreeze Bank Account",
    "href": "/p2p-crypto-scam-unfreeze-bank-account"
  },
  {
    "title": "Rbi Guidelines Calling After 7pm",
    "href": "/rbi-guidelines-calling-after-7pm"
  },
  {
    "title": "Smart Ways To Manage Emi Payment",
    "href": "/smart-ways-to-manage-emi-payment"
  },
  {
    "title": "What Alternatives Exist To Loan Settlement Services For Debt Relief Online",
    "href": "/what-alternatives-exist-to-loan-settlement-services-for-debt-relief-online"
  },
  {
    "title": "What Are The Charges For Loan Settlement Services By Top Financial Firms",
    "href": "/what-are-the-charges-for-loan-settlement-services-by-top-financial-firms"
  },
  {
    "title": "What Are The Consequences Of Not Paying Emi",
    "href": "/what-are-the-consequences-of-not-paying-emi"
  },
  {
    "title": "What Are The Eligibility Criteria For Loan Settlement Programs By Lending Platforms",
    "href": "/what-are-the-eligibility-criteria-for-loan-settlement-programs-by-lending-platforms"
  },
  {
    "title": "What Customer Support Options Do Loan Settlement Companies Provide",
    "href": "/what-customer-support-options-do-loan-settlement-companies-provide"
  },
  {
    "title": "What Is The Average Timeframe For Completing A Loan Settlement Process",
    "href": "/what-is-the-average-timeframe-for-completing-a-loan-settlement-process"
  },
  {
    "title": "What Is The Best Way To Negotiate Loan Settlement",
    "href": "/what-is-the-best-way-to-negotiate-loan-settlement"
  },
  {
    "title": "What Kind Of Loans Can Not Be Settled",
    "href": "/what-kind-of-loans-can-not-be-settled"
  },
  {
    "title": "What Percentage Do Banks Accept In Loan Settlement",
    "href": "/what-percentage-do-banks-accept-in-loan-settlement"
  },
  {
    "title": "Why Does My Credit Score Drop Even Though I Pay On Time",
    "href": "/why-does-my-credit-score-drop-even-though-i-pay-on-time"
  },
  {
    "title": "What Are My Rights When Dealing With Loan Recovery Agents",
    "href": "/what-are-my-rights-when-dealing-with-loan-recovery-agents"
  },
  {
    "title": "Application To Unblock Bank Account For Loan Emi",
    "href": "/application-to-unblock-bank-account-for-loan-emi"
  },
  {
    "title": "Personal Loan Settlement Letter Format",
    "href": "/personal-loan-settlement-letter-format"
  },
  {
    "title": "Recovery Agent Sending Morphed Images",
    "href": "/recovery-agent-sending-morphed-images"
  },
  {
    "title": "Personal Loan Defaulter For 10 Years",
    "href": "/personal-loan-defaulter-for-10-years"
  },
  {
    "title": "Personal Loan Negotiation",
    "href": "/personal-loan-negotiation"
  },
  {
    "title": "Settle 5 Lakh Personal Loan",
    "href": "/settle-5-lakh-personal-loan"
  },
  {
    "title": "What Is Credit Appraisal",
    "href": "/what-is-credit-appraisal"
  },
  {
    "title": "What Are The Pros And Cons Of Using A Debt Settlement Company",
    "href": "/what-are-the-pros-and-cons-of-using-a-debt-settlement-company"
  },
  {
    "title": "Personal Loan Settlement Lawyer",
    "href": "/personal-loan-settlement-lawyer"
  },
  {
    "title": "How To Settle A Credit Card Debt",
    "href": "/how-to-settle-a-credit-card-debt"
  },
  {
    "title": "Nri Personal Loan Settlement India",
    "href": "/nri-personal-loan-settlement-india"
  },
  {
    "title": "Settling Debt In India Guide",
    "href": "/settling-debt-in-india-guide"
  },
  {
    "title": "Salary Account Frozen By Bank For Loan Default",
    "href": "/salary-account-frozen-by-bank-for-loan-default"
  },
  {
    "title": "Icici Credit Card Settlement",
    "href": "/icici-credit-card-settlement"
  },
  {
    "title": "Personal Loan Settlement Vs Restructuring",
    "href": "/personal-loan-settlement-vs-restructuring"
  },
  {
    "title": "Credit Card Settlement",
    "href": "/credit-card-settlement"
  },
  {
    "title": "Personal Loan Settlement Tax Implications",
    "href": "/personal-loan-settlement-tax-implications"
  },
  {
    "title": "Legal Notice Bank Personal Loan Harassment",
    "href": "/legal-notice-bank-personal-loan-harassment"
  },
  {
    "title": "Settle Multiple Personal Loans",
    "href": "/settle-multiple-personal-loans"
  },
  {
    "title": "Recovery Agent Came To My Office",
    "href": "/recovery-agent-came-to-my-office"
  },
  {
    "title": "Ots Kya Hota Hai Full Form",
    "href": "/ots-kya-hota-hai-full-form"
  },
  {
    "title": "Negotiate Personal Loan Settlement",
    "href": "/negotiate-personal-loan-settlement"
  },
  {
    "title": "Personal Loan Settlement Calculator",
    "href": "/personal-loan-settlement-calculator"
  },
  {
    "title": "Personal Loan Settlement Services",
    "href": "/personal-loan-settlement-services"
  },
  {
    "title": "Personal Loan Settlement Cibil Impact",
    "href": "/personal-loan-settlement-cibil-impact"
  },
  {
    "title": "Multiple Personal Loan Settlement",
    "href": "/multiple-personal-loan-settlement"
  },
  {
    "title": "Personal Loan Settlement Process",
    "href": "/personal-loan-settlement-process"
  },
  {
    "title": "Personal Loan Recovery Harassment",
    "href": "/personal-loan-recovery-harassment"
  },
  {
    "title": "Personal Loan Settlement Company",
    "href": "/personal-loan-settlement-company"
  },
  {
    "title": "Cheque Bounce Lawyer In Delhi",
    "href": "/cheque-bounce-lawyer-in-delhi"
  },
  {
    "title": "Impact Of Loan Settlement On Cibil Score",
    "href": "/impact-of-loan-settlement-on-cibil-score"
  },
  {
    "title": "Personal Loan Debt Settlement",
    "href": "/personal-loan-debt-settlement"
  },
  {
    "title": "Loan Settlement For Senior Citizens Pension Holders India",
    "href": "/loan-settlement-for-senior-citizens-pension-holders-india"
  },
  {
    "title": "Personal Loan Settlement Rbi Guidelines",
    "href": "/personal-loan-settlement-rbi-guidelines"
  },
  {
    "title": "Reduce Personal Loan Outstanding Amount",
    "href": "/reduce-personal-loan-outstanding-amount"
  },
  {
    "title": "Understanding The Impact Of High Credit Card Interest Rates What You Need To Know",
    "href": "/understanding-the-impact-of-high-credit-card-interest-rates-what-you-need-to-know"
  },
  {
    "title": "Personal Loan Settlement Percentage",
    "href": "/personal-loan-settlement-percentage"
  },
  {
    "title": "Personal Loan Settlement Cost",
    "href": "/personal-loan-settlement-cost"
  },
  {
    "title": "Request Personal Loan Settlement Offer",
    "href": "/request-personal-loan-settlement-offer"
  },
  {
    "title": "Personal Loan Settlement Vs Closure",
    "href": "/personal-loan-settlement-vs-closure"
  },
  {
    "title": "Settle 5 Lakh Credit Card Loan",
    "href": "/settle-5-lakh-credit-card-loan"
  },
  {
    "title": "Bank Employee Threatening Arrest On Call",
    "href": "/bank-employee-threatening-arrest-on-call"
  },
  {
    "title": "Personal Loan Settlement After Default",
    "href": "/personal-loan-settlement-after-default"
  },
  {
    "title": "Personal Loan One Time Settlement",
    "href": "/personal-loan-one-time-settlement"
  },
  {
    "title": "Sarfaesi Act Section 13 2 Notice Stop Auction",
    "href": "/sarfaesi-act-section-13-2-notice-stop-auction"
  },
  {
    "title": "Credit Card Settlement Hdfc",
    "href": "/credit-card-settlement-hdfc"
  },
  {
    "title": "Whats A Credit Line And Who Should Consider One",
    "href": "/whats-a-credit-line-and-who-should-consider-one"
  },
  {
    "title": "Does Settled Loan Npa Affect Government Job Verification",
    "href": "/does-settled-loan-npa-affect-government-job-verification"
  },
  {
    "title": "How Do Loan Settlement Agents Work Through Online Portals",
    "href": "/how-do-loan-settlement-agents-work-through-online-portals"
  },
  {
    "title": "Settle 10 Lakh Personal Loan",
    "href": "/settle-10-lakh-personal-loan"
  },
  {
    "title": "Which Loan Settlement Companies Offer The Lowest Fees",
    "href": "/which-loan-settlement-companies-offer-the-lowest-fees"
  },
  {
    "title": "Personal Loan Settlement After Npa",
    "href": "/personal-loan-settlement-after-npa"
  },
  {
    "title": "How To Check Your Loan Status Without Visiting The Bank",
    "href": "/how-to-check-your-loan-status-without-visiting-the-bank"
  },
  {
    "title": "What Happens After 3 Missed Emis",
    "href": "/what-happens-after-3-missed-emis"
  },
  {
    "title": "Personal Loan Settlement Vs Debt Consolidation",
    "href": "/personal-loan-settlement-vs-debt-consolidation"
  },
  {
    "title": "Should I Stop Paying Emi For Settlement",
    "href": "/should-i-stop-paying-emi-for-settlement"
  },
  {
    "title": "Personal Loan Settlement Vs Bankruptcy",
    "href": "/personal-loan-settlement-vs-bankruptcy"
  },
  {
    "title": "Stop Recovery Agent Harassment",
    "href": "/stop-recovery-agent-harassment"
  },
  {
    "title": "Is Personal Loan Settlement Safe",
    "href": "/is-personal-loan-settlement-safe"
  },
  {
    "title": "Reply Personal Loan Legal Notice",
    "href": "/reply-personal-loan-legal-notice"
  },
  {
    "title": "Bank Rejected Settlement Request",
    "href": "/bank-rejected-settlement-request"
  },
  {
    "title": "What Happens After Missing Personal Loan Emi",
    "href": "/what-happens-after-missing-personal-loan-emi"
  },
  {
    "title": "Lawyer Personal Loan Default",
    "href": "/lawyer-personal-loan-default"
  },
  {
    "title": "Cannot Pay Personal Loan Emi",
    "href": "/cannot-pay-personal-loan-emi"
  },
  {
    "title": "Recovery Agent Visiting Home Workplace",
    "href": "/recovery-agent-visiting-home-workplace"
  },
  {
    "title": "Lost Job Cannot Pay Personal Loan",
    "href": "/lost-job-cannot-pay-personal-loan"
  },
  {
    "title": "Should I Settle Or Restructure Personal Loan",
    "href": "/should-i-settle-or-restructure-personal-loan"
  },
  {
    "title": "Services/${service}",
    "href": "/services/${service}"
  },
  {
    "title": "Services/cheque Bounce Lawyer",
    "href": "/services/cheque-bounce-lawyer"
  },
  {
    "title": "Services/${servicetype}",
    "href": "/services/${serviceType}"
  },
  {
    "title": "Services/${servicetype}/${state}",
    "href": "/services/${serviceType}/${state}"
  },
  {
    "title": "Services/${servicetype}/banks/${bank}",
    "href": "/services/${serviceType}/banks/${bank}"
  },
  {
    "title": "Resources/${slug}",
    "href": "/resources/${slug}"
  },
  {
    "title": "Are There Government Backed Programs For Debt Relief In India",
    "href": "/are-there-government-backed-programs-for-debt-relief-in-india"
  },
  {
    "title": "Salary Account Frozen By Bank",
    "href": "/salary-account-frozen-by-bank"
  },
  {
    "title": "What Is Unsecured Personal Loans",
    "href": "/what-is-unsecured-personal-loans"
  }
];

export default function SitemapPage() {
    return (
        <div className="relative min-h-screen bg-white mt-5">
            <Navbar />
            <div className="relative z-10 pt-32 pb-20 px-4 md:px-8 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#3a3532] mb-12" style={{ fontFamily: 'sans-serif' }}>
                        Sitemap
                    </h1>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {sitemapLinks.map((link, index) => (
                            <Link 
                                key={index} 
                                href={link.href}
                                className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex items-center text-sm md:text-base text-gray-700 font-medium hover:text-[#007AFF]"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
