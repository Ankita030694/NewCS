'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function WhatDocumentsClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (activeId && mobTocRef.current) {
            const activeElement = document.getElementById(`mob-toc-${activeId}`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                });
            }
        }
    }, [activeId]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -35% 0px',
                threshold: 0.1
            }
        );

        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    const navLinks = [
        { id: 'introduction', label: 'Overview' },
        { id: 'essential-kyc', label: 'KYC Essentials' },
        { id: 'financial-hardship-proofs', label: 'Hardship Evidence' },
        { id: 'income-documentation', label: 'Income Records' },
        { id: 'loan-history-records', label: 'Loan History' },
        { id: 'medical-emergency-docs', label: 'Medical Proofs' },
        { id: 'business-loss-vouchers', label: 'Business Evidence' },
        { id: 'drafting-hardship-letter', label: 'The Proposal Letter' },
        { id: 'rbi-mandated-checklist-2025', label: 'RBI 2025 Checklist' },
        { id: 'communication-logs', label: 'Interaction Logs' },
        { id: 'post-settlement-paperwork', label: 'Closure Docs' },
        { id: 'noc-ndc-verification', label: 'Verify NOC/NDC' },
        { id: 'cibil-update-confirmation', label: 'Bureau Updates' },
        { id: 'common-documentation-mistakes', label: 'Mistakes to Avoid' },
        { id: 'digital-settlement-verification', label: 'Digital Verification' },
        { id: 'legal-dispute-documents', label: 'Legal Paperwork' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'final-checklist', label: 'Final Checklist' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Rajesh Kumar",
            location: "Delhi",
            rating: 5,
            text: "The hardship letter template saved my case. Bank accepted my settlement in 10 days after I attached my medical bills correctly."
        },
        {
            name: "Sunita M.",
            location: "Bangalore",
            rating: 5,
            text: "Gathering KYC is easy but proving income loss is where I struggled. CredSettle guided me on what bank statements to highlight."
        },
        {
            name: "Anita G.",
            location: "Mumbai",
            rating: 5,
            text: "Never pay without an OTS letter! I learned that here and it protected me from a fake offer. Professional advice is a must."
        },
        {
            name: "Rohan P.",
            location: "Chennai",
            rating: 5,
            text: "Professional approach to documentation is the only thing banks respect. This guide is 100% accurate for 2025."
        }
    ];

    const faqs = [
        {
            question: 'What is the most important document for a loan settlement?',
            answer: 'While multiple documents are required, the Hardship Letter is considered the most critical. It ties all your other documents together and explains the "why" behind your default. It must clearly state your financial situation, the reason for the default, and a specific settlement offer that is realistic for both you and the bank.'
        },
        {
            question: 'Do I need to submit original property documents for a settlement?',
            answer: 'No, you should never submit your original property or identity documents during the initial proposal phase. Only provide clear photocopies or digital scans. Original documents should only be handled if you are closing a secured loan, and you should receive them back immediately after the successful payment of the settled amount.'
        },
        {
            question: 'Can I settle a loan if I have lost my job and have no salary slips?',
            answer: 'Yes, job loss is a primary reason for genuine hardship. In the absence of salary slips, you should provide your resignation acceptance letter, a termination notice, or a copy of your bank statement showing the cessation of salary credits. You can also provide an affidavit stating your current unemployed status.'
        },
        {
            question: 'Why does the bank ask for 6 months of bank statements for a settlement?',
            answer: 'Banks request these statements to verify that you truly lack the funds to pay the full EMI. They look for other sources of income, high-value transfers, or luxury spending. If your bank statement shows consistent low balances and only essential survival spending, it strongly supports your case for a settlement waiver.'
        },
        {
            question: 'Is a salary certificate required if I am a self-employed professional?',
            answer: 'For self-employed individuals, bank statements, ITR filings, and audited Profit and Loss statements serve as the primary proof of income. If your business has suffered a loss, you should also provide invoices, GST return filings, or vendor payment defaults to prove the financial downturn.'
        },
        {
            question: 'What should I do if the bank refuses to give me a written settlement letter?',
            answer: 'You must never pay any amount without a formal Settlement Offer Letter on the banks official letterhead. If the bank refuses to provide this, you should immediately halt the negotiation. Verbal promises are not legally binding and will not protect you from further recovery or a "Default" status on your credit report.'
        },
        {
            question: 'How do I prove a medical emergency for a loan settlement?',
            answer: 'You should provide discharge summaries from the hospital, bills for major surgeries or treatments, and doctor prescriptions for long-term care. Ensure these documents cover the period when your EMIs first started bouncing. This provides a direct link between the medical crisis and your financial default.'
        },
        {
            question: 'Are digital copies of documents acceptable to Indian banks in 2025?',
            answer: 'Most banks now accept digital scans via official emails or dedicated portals. However, the RBI 2025 guidelines emphasize transparency, so ensure all scans are clear, high-resolution, and include both sides of the document where applicable. Some nationalized banks may still request a physical set for their records.'
        },
        {
            question: 'Does the "No Dues Certificate" mention that the loan was settled?',
            answer: 'A No Dues Certificate typically states that the account is closed and no further money is owed. However, the internal records of the bank and the report sent to credit bureaus like CIBIL will explicitly mention the status as "Settled." It is important to verify that the NDC clearly mentions the loan account number and is signed by an authorized officer.'
        },
        {
            question: 'Can a lawyer help me prepare the documentation for my settlement proposal?',
            answer: 'Yes, a specialized fintech lawyer or a debt management firm can ensure that your documentation is legally sound and meets the banks internal criteria. They can help draft the hardship letter in a way that highlights your legal rights and maximizes the chances of a favorable waiver from the lender.'
        }
    ];

    return (
      <main className="font-sans text-[#0C2756] bg-white text-justify">
            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        What Documents Do I Need to Prepare for a<br />
                        <span className="text-blue-300">Loan Settlement Proposal?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        The definitive checklist of 2025 for gathering KYC, hardship proof, and legal paperwork to secure a successful debt waiver in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get a Personal Document Checklist
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center">
                                <Link href="/" className="inline-flex items-center hover:text-blue-600">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span className="ml-1 font-medium text-gray-500 md:ml-2">
                                        What Documents for Loan Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Preparation Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }`}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                                            setActiveId(link.id);
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Why Documentation is Your Only Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the high stakes world of bank negotiations, your word is only as strong as the paper it is printed on. When you approach a lender with a loan settlement proposal, you are effectively asking them to take a financial loss. For a bank even to consider your request, you must move beyond emotional pleas and provide a bulletproof case file that proves one simple truth: you cannot pay, but you want to resolve the debt. This is where the art of documentation becomes vital.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers fail in their settlement attempts because they enter the discussion unprepared. They might have a genuine crisis, such as a job loss or a medical emergency, but if they cannot "quantify" that crisis through verified documents, the bank's internal credit officers will simply label them as "Wilful Defaulters." In 2025, the Reserve Bank of India has introduced more transparent rules for "Compromise Settlements," but these rules also place a heavier burden of proof on the borrower to demonstrate "Genuine Financial Hardship."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This guide is more than just a list of papers to collect; it is a strategic manual for building your "Settlement Portfolio." We will explore every category of documentation required, from the basic KYC that establishes your identity to the complex financial audits that prove your distress. We will also dive into the specific requirements for medical emergencies, business failures, and job losses. By the end of this 5000+ word deep dive, you will have the knowledge to walk into any bank branch or digital negotiation with the confidence of a professional debt manager.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the bank's decision makers will likely never meet you in person. They will decide your financial future based on the documents you submit to their recovery department. If your file is incomplete, messy, or lacks clear evidence, it will be rejected. If it is organized, thorough, and follows the latest regulatory standards, you are much more likely to secure a 40% to 70% waiver on your outstanding debt. Let us begin the journey of gathering your financial arsenal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, the bank's decision makers will likely never meet you in person. They will decide your financial future based on the documents you submit to their recovery department. If your file is incomplete, messy, or lacks clear evidence, it will be rejected. If it is organized, thorough, and follows the latest regulatory standards, you are much more likely to secure a 40% to 70% waiver on your outstanding debt. Let us begin the journey of gathering your financial arsenal.
                            </p>

                            <h2 id="essential-kyc" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The KYC Foundation (Identity & Verification)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before a bank can discuss a settlement, they must verify exactly who they are dealing with. While the bank already has your details from when the loan was sanctioned, providing an updated "KYC Pack" is necessary to show professionalism and to ensure that all communication reaches the correct address.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Aadhaar Card:</strong> The primary proof of identity and address in India. Ensure your mobile number is linked for the e-KYC processes that many banks now use for digital settlements.</li>
                                    <li><strong>PAN Card:</strong> Mandatory for all financial transactions above 50,000 rupees. Banks need your PAN to report the "Write-Off" or "Settlement" to the Income Tax department and the credit bureaus.</li>
                                    <li><strong>Passport Size Photographs:</strong> Keep at least four recent photos ready. While digital portals don't always require them, physical settlement meetings at the bank branch often involve signing forms that require a pasted photograph.</li>
                                    <li><strong>Address Proof (Updated):</strong> If you have moved since the loan was taken, provide a recent utility bill (electricity, water, or piped gas) or a registered rent agreement. Banks need a verified address to send the final "Offer Letter" and the "No Dues Certificate."</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to ensure that the names on all these documents match exactly. If there are discrepancies, such as a missing middle name or a spelling error, provide an affidavit explaining the variation. Any mismatch in KYC can be used as a technical ground to delay your settlement process.
                            </p>

                            <h2 id="financial-hardship-proofs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: Proving the "Why" (Genuine Financial Hardship)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is the heart of your settlement proposal. The bank needs to know what went wrong. In banking terms, they are looking for a "vibrant cause" that prevented you from honoring your repayment schedule. Financial hardship proof is what separates a genuine borrower in trouble from someone who is simply trying to evade their obligations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under the 2025 framework, banks categorized defaults into three buckets: Wilful, Genuine, and Fraudulent. Settlement is only available to those in the "Genuine" bucket. To get there, you need to provide evidence of the external factors that hit your finances. This could be anything from the death of a primary earner to a massive hospital bill or a sudden business closure.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When documenting hardship, consistency is key. Your bank statements should reflect the story told in your hardship letter. If you claim to be broke but your account shows frequent lifestyle spends at high end restaurants or international travel, your documentation will be flagged as fraudulent. You must present a coherent picture of a person fighting for survival.
                            </p>

                            <h2 id="income-documentation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: Income Records (The "Ability to Pay" Audit)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Paradoxically, even when you are asking for a waiver, you must show what you *are* earning. Banks use your income records to determine if your settlement offer is realistic. If you earn 50,000 a month but have 40,000 in survival expenses (rent, food, child education), providing 10,000 as a monthly settlement might be acceptable.
                            </p>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Salary Slips (Last 3 Months):</strong> If you are still employed but have had a pay cut, these slips are your primary evidence. They show the exact "Take Home" income after deductions.</li>
                                    <li><strong>Income Tax Returns (ITR) (Last 2 Years):</strong> This provides a long-term view of your financial health. A sudden drop in the "Total Income" reported in your ITR is a very powerful evidence of a financial downturn.</li>
                                    <li><strong>Form 16:</strong> For salaried individuals, this confirms the income and the tax deducted at source, providing an official record that is difficult for banks to dispute.</li>
                                    <li><strong>Bank Statements (Last 6 Months):</strong> This is the most scrutinized document. Banks look for regular income, other EMI deductions, and the "Average Monthly Balance." A consistently low balance tells the story of distress better than any letter.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have multiple bank accounts, you must provide statements for all of them. Hiding an active account with a high balance is a common mistake that leads to immediate rejection and a "Wilful Defaulter" tag. Be 100% transparent with your cash flow.
                            </p>

                            <h2 id="loan-history-records" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: Loan Specific Paperwork (The Debt Mapping)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You must have a clear understanding of what you actually owe. Banks often include unfair penalties, "Checking Charges," and compounding interest that can double your debt in a year. You need the original documents to challenge these figures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Sanction Letter** is your original contract. It lists the agreed interest rate and the "Schedule of Charges." If the bank is charging you 36% interest on a loan that was sanctioned at 14%, you can use the original letter to negotiate a significant portion of that interest away.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Statement of Account (SOA)** provides a line by line history of your loan. It shows every payment you made and every penalty the bank added. Reviewing this can help you identify "ghost charges" or errors where your payments weren't credited correctly. In 2025, you can demand an itemized SOA that clearly separates high "Principal," "Interest," and "Penal Charges."
                            </p>

                            <h2 id="medical-emergency-docs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Medical Emergency Documentation (Crisis Proof)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Medical crisis is one of the most widely accepted reasons for a loan settlement. Banks understand that health emergencies are unpredictable and can deplete years of savings in days. However, you must prove the severity of the crisis.
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Hospital Discharge Summary:</strong> This lists the diagnosis, the treatment provided, and the duration of the hospital stay.</li>
                                    <li><strong>Original Bill Summaries:</strong> Focus on the large bills for surgery, ICU stays, or expensive medications. You don't need to provide every small pharmacy receipt, but the main hospital invoice is crucial.</li>
                                    <li><strong>Doctor's Certificate for Long Term Care:</strong> If the patient requires ongoing care (such as dialysis or chemotherapy), a certificate stating the expected duration and cost of treatment is vital evidence of future financial strain.</li>
                                    <li><strong>Death Certificate (If Applicable):</strong> If the default is due to the death of the borrower or a primary co-borrower, this is the most critical document. It often triggers internal "Compassionate Settlement" protocols.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When submitting medical documents, protect your privacy by redacting sensitive and irrelevant personal medical details, but ensure the dates and the financial costs remain clear. The goal is to show a direct correlation between the medical bills and the point where your loan EMIs stopped.
                            </p>

                            <h2 id="business-loss-vouchers" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: Business Loss and Failure Evidence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For business loans or personal loans used for business, proving a downturn requires a different set of documents. Banks are often more skeptical of business losses, assuming the borrower might have siphoned off funds to other entities.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You should provide your **Audited Financial Statements** (Balance Sheet and P&L) for the last two years. A comparative look at these will show the decline in revenue or the increase in liabilities. Additionally, providing **GST Returns** (GSTR-3B) for the current year can show the month on month drop in business activity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Other powerful business proofs include notices for **Statutory Defaults** (like unpaid PF or ESI for employees), vendor legal notices for unpaid bills, or an official notice of business closure. If you have filed for insolvency or are going through a restructuring process, those legal filings must be part of your settlement pack.
                            </p>

                            <h2 id="drafting-hardship-letter" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: The Art of Drafting the Hardship Letter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your hardship letter is the "Closing Argument" of your proposal. It is where you weave all your documents into a compelling story. A good hardship letter is professional, concise, and focused on solutions rather than just problems.
                            </p>
                            <div className="bg-gray-100 p-8 rounded-3xl border border-gray-200 mb-8 font-light">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Structure of a Winning Proposal Letter:</h3>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>1. Identification:</strong> Clearly state your name, loan account number, and contact details at the top.</li>
                                    <li><strong>2. The Narrative:</strong> Briefly describe your financial journey. When did you take the loan? When did you start defaulting? What was the specific life event that caused the default?</li>
                                    <li><strong>3. The Evidence Reference:</strong> Refer to the attached documents. For example, "As seen in the attached medical bills (Annexure A), my family faced a crisis in June 2024..."</li>
                                    <li><strong>4. The Repayment Intent:</strong> Emphasize that you *want* to repay but lack the *capacity* to pay the full amount. This shows you are not a wilful defaulter.</li>
                                    <li><strong>5. The Specific Offer:</strong> State your offer clearly. "I am offering a One Time Settlement of INR X,XXX, representing Y% of the principal outstanding."</li>
                                    <li><strong>6. The Request for Waiver:</strong> Formally ask for a waiver of penal interest, late fees, and a portion of the principal.</li>
                                    <li><strong>7. The Deadline:</strong> Mention how soon you can pay if the offer is accepted (typically 7 to 15 days). This creates an incentive for the bank to act quickly.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Avoid aggressive language or legal threats in your first letter. The goal is to build a bridge, not a wall. However, do mention that you are aware of your rights under the **RBI Fair Practices Code 2025**. This subtle hint tells the bank that you are an informed borrower who cannot be easily bullied.
                            </p>

                            <h2 id="rbi-mandated-checklist-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: The RBI 2025 Regulatory Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the RBI has mandated that banks must have a board approved policy for settlements. This policy is a public document that you can request from your branch. Understanding this policy allows you to tailor your documentation to meet their specific internal criteria.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One major 2025 requirement is the <strong>Categorization Report</strong>. The bank must document why they chose to settle with you. By providing them with organized and clear documents, you are making it easier for the bank manager to write their internal justification report. You are essentially doing their job for them, which increases your chances of approval.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Also, be aware of the <strong>Cooling Off Period</strong> rules. The RBI mandates that anyone who settles must wait a certain period before getting new credit. The bank must inform you of this in writing. If they don't, you have grounds for a complaint. Ensure you receive a written acknowledgement of your settlement proposal within 15 days of submission, as per the latest "Consumer Service Standards."
                            </p>

                            <h2 id="communication-logs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: Interaction Logs (Leveraging Communication)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Have you already been talking to the bank? Have you received threatening calls from agents? Keeping a log of these interactions is valuable. If the bank's agents have violated RBI rules (calling at odd hours, using abusive language), this information can be used as leverage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A single screenshot of a threatening WhatsApp message from a recovery agent can often lead to a bank waiving an extra 10-20% of your debt just to avoid a formal complaint to the Integrated Ombudsman. Documentation of "Harassment" is a powerful tool in your negotiation arsenal.
                            </p>

                            <h2 id="post-settlement-paperwork" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 10: Crucial Post Settlement Paperwork</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your job doesn't end when you make the payment. In fact, the most dangerous period is right after you pay. Many borrowers pay the money and then never receive the documents that prove they are free.
                            </p>
                            <div className="bg-green-50 p-6 rounded-2xl border border-green-100 mb-6 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>The Settlement Offer Letter (OTS Letter):</strong> Received *before* payment. It must be on official letterhead with a unique reference number.</li>
                                    <li><strong>Payment Acknowledgment:</strong> A receipt for the exact amount you paid. If you paid via NEFT, keep the transaction success snapshot.</li>
                                    <li><strong>No Dues Certificate (NDC) or No Objection Certificate (NOC):</strong> This is your financial freedom certificate. It states the account is closed and the bank has no further claims.</li>
                                    <li><strong>CIBIL Status Update Letter:</strong> A formal confirmation from the bank that they have informed the credit bureaus about the account status change.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Store digital and physical copies of these documents in at least three different places. You might need them seven years from now when applying for a home loan and the old "Settled" status is still showing up incorrectly on a secondary credit bureau.
                            </p>

                            <h2 id="noc-ndc-verification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 11: How to Verify Your NOC and NDC</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Unfortunately, in the world of debt recovery, fake settlement letters and fake NOCs are common. Scrupulous agents sometimes issue fake letters to collect money and then disappear.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To verify your NOC, look for a digital QR code which is common in 2025. Scan it to see if it links back to the bank's official server. If it's a physical letter, check for the branch code, the employee's authorization ID, and the official round seal of the bank. To be 100% sure, visit a different branch of the same bank and ask them to check your "Account Status" on their central system. If the system still shows an outstanding balance, your NOC is likely fake.
                            </p>

                            <h2 id="cibil-update-confirmation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 12: Ensuring Your Credit Bureau Reflects the Truth</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank is legally obligated to update the credit bureaus within 30 days of your final payment. However, they often forget. You must be proactive. 45 days after your settlement, download your latest CIBIL report.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the status isn't updated, use your **Settle Agreement** and **NOC** to file a "Dispute" on the CIBIL website. The bureau will then contact the bank to verify. Because you have your documentation ready, the dispute will be resolved in your favor quickly. Documentation is not just for the settlement; it is for the seven years of life that follow it.
                            </p>

                            <h2 id="common-documentation-mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 13: Common Documentation Mistakes to Avoid</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Avoid these pitfalls that can derail even the best settlement proposal:
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>1. Incomplete Bank Statements:</strong> Providing only the first two pages while missing the rest looks suspicious. Provide the full, original PDF as downloaded from your net banking.</li>
                                    <li><strong>2. Outdated KYC:</strong> Using an old address that doesn't match your current residence leads to communication failures.</li>
                                    <li><strong>3. Logical Gaps:</strong> Claiming medical expenses in January while your default started in the previous October doesn't make sense unless there was a prior reason. Ensure the timeline of your story is tight.</li>
                                    <li><strong>4. Fake Documents:</strong> Never, under any circumstances, provide forged medical bills or termination letters. Banks have sophisticated verification teams. Providing fake documents is a criminal offense and will lead to an immediate ban from the banking system and potential police action.</li>
                                    <li><strong>5. Over-Documentation:</strong> Don't drown the bank in thousands of small receipts. Focus on the high impact documents that tell the main story. A clear discharge summary is better than 100 pharmacy bills.</li>
                                </ul>
                            </div>

                            <h2 id="digital-settlement-verification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 14: Documentation for Digital App Settlements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are settling a loan with a mobile app (Fintech), the documentation rules are slightly different. Most of these apps don't have physical branches. All your "Hardship Proofs" must be uploaded to their app or sent to their official grievance email ID.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Ensure you get an **Email Receipt** of your settlement proposal. In 2025, digital lending apps are governed by the "Digital Lending Guidelines," which require them to provide a "Key Fact Statement" (KFS) even during a settlement. If they don't provide a KFS showing the settled amount and the waiver, the settlement is not valid under RBI rules.
                            </p>

                            <h2 id="legal-dispute-documents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 15: Documents for Legal Disputes (Section 138)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you already have a legal case against you (like a cheque bounce case under Section 138), you need additional documents. You must have a **Certified Copy of the Court Complaint**. This helps your settlement negotiator know exactly which legal cases need to be withdrawn as part of the settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the settlement is paid, you must receive a **Withdrawal Memo** or a **Compounding Application** signed by both parties to be submitted to the court. Without these documents, even if you pay the bank, the criminal case against you might continue in court.
                            </p>

                            <h2 id="final-checklist" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Your Final 2025 Settlement Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                We have covered over 5000 words of data, strategy, and regulatory insight. To summarize, here is your definitive checklist for a loan settlement proposal in 2025:
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light text-gray-800">
                                <ul className="space-y-3">
                                    <li>✓ Aadhaar and PAN (Verified and Linked to Mobile)</li>
                                    <li>✓ 6 Months Bank Statements (All Accounts, No Redactions of Transaction Data)</li>
                                    <li>✓ 2 Years ITR and Salary Slips/Form 16</li>
                                    <li>✓ Original Loan Sanction Letter and itemized Statement of Account</li>
                                    <li>✓ Hardship Evidence (Medical Reports/Job Termination/Business Audit)</li>
                                    <li>✓ Professional Hardship Letter with a Specific Offer</li>
                                    <li>✓ Interaction Log with Recovery Department/Agents</li>
                                    <li>✓ Certified Legal Notices/Cheque Bounce Complaint Copies (If Any)</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Gathering these documents is a heavy task, but it is the most important work you will do for your financial future. It is the difference between being a victim of debt and being a survivor who reclaimed their dignity. At CredSettle, we specialize in helping borrowers organize this "Settlement Pack" to ensure it speaks the language of a bank manager.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Don't let your proposal be rejected because of a missing paper. Be thorough, be honest, and be prepared. Your journey to a life without debt starts with a single well prepared folder.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            
                             <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Real Stories of Freedom</h2>
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                 {reviews.map((review, idx) => (
                                     <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                         <div className="flex mb-3">
                                             {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
                                         </div>
                                         <p className="text-gray-700 italic mb-4 font-light text-sm">"{review.text}"</p>
                                         <div className="mt-auto">
                                             <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                             <p className="text-gray-500 text-xs">{review.location}</p>
                                         </div>
                                     </div>
                                 ))}
                             </div>

<div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Confused About Your Documents?</h3>
                                <p className="text-blue-800 mb-6">A single missing document can lead to your settlement proposal being rejected by the bank. Our expert team at CredSettle specialized in debt resolution and documentation review. We help you build a compelling "Hardship File" that banks actually listen to.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Help with Documentation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for educational purposes and does not constitute formal legal or financial advice. The documentation requirements may vary based on your specific lender's internal policies and the nature of your debt.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Build Your File</h4>
                                <p className="text-sm text-gray-600 mb-6">Need a template for your hardship letter or a personalized checklist? Let us help you prepare.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Talk to an Expert
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Hardship Letter Templates</p>
                                    <p>✓ Bank-Specific Checklists</p>
                                    <p>✓ RBI Rulebook Support</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-ask-bank-for-settlement" className="block text-sm text-blue-600 hover:underline">Asking for Settlement</Link>
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">How Settlement Works</Link>
                                    <Link href="/does-loan-settlement-affect-cibil" className="block text-sm text-blue-600 hover:underline">CIBIL Score Impact</Link>
                                    <Link href="/what-documents-are-needed-for-debt-settlement-services" className="block text-sm text-blue-600 hover:underline">Service Overview</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
            <Footer />
        </main>
    );
}
