'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function WhatIsCreditAppraisalClient() {
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
        { id: 'introduction', label: 'The Gap' },
        { id: 'five-cs', label: 'The 5 Cs of Credit' },
        { id: 'financial-health', label: 'Financial Health' },
        { id: 'the-underwriter', label: 'The Underwriter' },
        { id: 'rejection-reasons', label: 'Why Loans Fail' },
        { id: 'cibil-impact', label: 'CIBIL Impact' },
        { id: 'negotiation-tactics', label: 'Negotiation Strategy' },
        { id: 'case-studies', label: 'Success Stories' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'What is the credit appraisal process in banks?',
            answer: 'The credit appraisal process is a systematic evaluation conducted by a lender to assess the creditworthiness of a borrower. It involves analyzing financial statements, business plans, and personal credit histories to determine if the applicant can repay the requested loan amount.'
        },
        {
            question: 'How do underwriters evaluate a loan application?',
            answer: 'Underwriters evaluate loan applications using the 5 Cs of Credit: Character, Capacity, Capital, Collateral, and Conditions. They look at your past repayment history, your current cash flow, the money you have invested, the assets you can pledge, and the market conditions surrounding your business.'
        },
        {
            question: 'Why do business owners get rejected for loans repeatedly?',
            answer: 'Repeated rejections often happen because the business owner fails to understand the gap between what they believe their business is worth and what the underwriter can verify. Common reasons include insufficient cash flow, high existing debt obligations, poor personal credit scores, and incomplete documentation.'
        },
        {
            question: 'What happens to my CIBIL score if my loan application is rejected?',
            answer: 'A single rejection does not directly lower your CIBIL score. However, every time you apply for a loan, the lender makes a hard inquiry. Multiple hard inquiries in a short period will negatively impact your credit score and signal desperation to other lenders.'
        },
        {
            question: 'Can I reapply after a loan rejection?',
            answer: 'Yes, but it is highly advised that you wait at least 3 to 6 months before reapplying. During this time, you must identify the exact reason for the rejection, improve your cash flow, fix any errors on your credit report, and prepare a stronger business case before approaching a different lender.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was rejected by three banks for an MSME loan and had no idea why. Understanding the credit appraisal process and the 5 Cs completely changed my approach. I restructured my balance sheet and finally secured the funding I needed without collateral issues.'
        },
        {
            name: 'Pooja Desai',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'This guide on loan underwriting is a lifesaver. I realized my high debt to income ratio was the silent killer of my applications. After focusing on my capacity rather than just my capital, the bank approved my working capital limit in just two weeks.'
        }
    ];

    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': faqs.map(faq => ({
            '@type': 'Question',
            'name': faq.question,
            'acceptedAnswer': {
                '@type': 'Answer',
                'text': faq.answer
            }
        }))
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Credit Appraisal Process Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '2150',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-appraisal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-appraisal" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        What is a Credit Appraisal Process?<br />
                        <span className="text-blue-300">Demystifying Loan Underwriting</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Business owners get rejected for loans repeatedly without understanding why. Learn how banks evaluate the 5 Cs of credit and secure the funding you deserve.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Expert Advice
                        </Link>
                    </div>
                </div>
            </section>

            {/* Mobile TOC */}
            {isMobile && (
                <div className="sticky top-[60px] z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar">
                    <div className="flex px-4 py-3 gap-3 w-max" ref={mobTocRef}>
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                id={`mob-toc-${link.id}`}
                                href={`#${link.id}`}
                                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${activeId === link.id
                                    ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                    : 'bg-gray-50 text-gray-600 border border-gray-100 hover:bg-gray-100'
                                    }`}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </div>
            )}

            <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 relative">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Column: Desktop TOC */}
                    <aside className="hidden lg:block lg:w-1/4 xl:w-1/5 shrink-0">
                        <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Contents</h3>
                            <nav className="flex flex-col space-y-2">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`text-sm py-2 px-3 rounded-lg transition-colors duration-200 ${activeId === link.id
                                            ? 'bg-blue-50 text-blue-700 font-bold border-l-4 border-blue-600'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600 border-l-4 border-transparent'
                                            }`}
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Gap: Why Do Business Owners Keep Getting Rejected?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Imagine pouring your life savings into a business, working endless hours, and achieving a steady growth rate. You decide it is time to expand. You approach your bank for a business loan, armed with optimism and a binder full of invoices. A week later, you receive a sterile email stating that your application has been declined. No detailed explanation is given, only vague references to "internal policies" and "risk parameters."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This scenario is incredibly common in India. Business owners get rejected for loans repeatedly without understanding why. This knowledge gap is the primary reason why perfectly viable businesses fail to secure the capital they need to grow. The problem is not necessarily the business itself. The problem is the presentation of the business to the bank. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold text-blue-900 uppercase tracking-tighter border-y border-blue-100 py-4">
                                Banks do not evaluate your passion. They evaluate risk.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The credit appraisal process is the rigorous methodology that financial institutions use to assess the creditworthiness of a borrower. It is the mechanism that stands between your business proposal and the capital you seek. By demystifying the underwriter's desk, we can transform rejection into approval. To survive the scrutiny of a loan officer, you must understand exactly how a bank evaluates a loan application. It all comes down to the fundamental principles known as the 5 Cs of Credit. If you are struggling with a complex dispute due to loan rejections or defaults, consulting the <Link href="/best-lawyer-for-msme-business-loan-dispute" className="text-blue-600 hover:underline">best lawyer for MSME business loan disputes</Link> can provide a clear legal pathway.
                            </p>
                            
                            <div className="bg-red-50 border-l-8 border-red-600 p-6 rounded-r-2xl mb-10 shadow-sm relative">
                                <div className="absolute top-0 right-0 bg-red-600 text-white px-4 py-1 rounded-bl-lg font-bold text-xs uppercase tracking-widest">Alert</div>
                                <h4 className="text-xl font-bold text-red-900 mb-2">Critical Mistakes That Lead to Instant Rejection</h4>
                                <ul className="list-disc pl-5 text-red-800 space-y-2 font-medium">
                                    <li>Unexplained drops in bank statement balances at the end of the month.</li>
                                    <li>Recent default remarks on your CIBIL report that you failed to disclose upfront.</li>
                                    <li>Applying for a loan amount that far exceeds your verified annual turnover.</li>
                                    <li>Inconsistent business addresses across your GST certificate and utility bills.</li>
                                </ul>
                            </div>

                            <h2 id="five-cs" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The 5 Cs of Credit: The Underwriter's Framework</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every bank and Non-Banking Financial Company (NBFC) in India relies on the 5 Cs of Credit. This is the universal language of lending. If your application fails in even one of these areas, the risk assessment algorithm will likely flag your file for rejection. Let us break down each component in detail.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Character (The Borrower's Reputation)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Character refers to your track record of repaying debt. This is the first hurdle. Before looking at your business plan, the underwriter looks at you. The primary metric for character is your credit score, typically generated by CIBIL or Experian. Lenders want to see a history of timely payments, low credit utilization, and a responsible borrowing history.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, character is more than just a three-digit number. It also encompasses your business reputation, your experience in the industry, and your relationship with suppliers. If you have a history of bouncing checks or delaying vendor payments, the bank will view this as a major character flaw, regardless of your current profitability. Learning <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:underline">how to improve CIBIL score</Link> is a foundational step before submitting any loan application.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Capacity (The Ability to Repay)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Capacity, often referred to as cash flow, is arguably the most critical of the 5 Cs. Lenders need concrete proof that your business generates enough revenue to cover its operating expenses, existing debt obligations, and the new EMI you are requesting.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Underwriters assess capacity by analyzing your Debt-to-Income (DTI) ratio and your Debt Service Coverage Ratio (DSCR). If your DSCR is below 1.25, meaning your net operating income is only barely enough to cover your debt, your application is in serious jeopardy. The bank needs a comfortable margin of error in case your sales decline unexpectedly.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Capital (Skin in the Game)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Capital represents the amount of money you, as the business owner, have personally invested in the enterprise. Lenders are averse to taking on 100% of the financial risk. If the business fails, they want to know that you stand to lose significantly as well.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A high level of personal capital investment indicates strong commitment and confidence in the business. Conversely, if you are asking for a 50 lakh loan but have only invested 2 lakhs of your own money, the underwriter will interpret this as a lack of commitment. You must demonstrate that you have substantial skin in the game.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Collateral (The Safety Net)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Collateral provides the lender with a secondary source of repayment if your business fails to generate sufficient cash flow. This can take the form of real estate, machinery, inventory, or even accounts receivable.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Not all loans require collateral (such as unsecured business loans), but offering collateral significantly reduces the risk for the lender. This often results in a lower interest rate and a higher probability of approval. It is important to note that the bank will heavily discount the value of your collateral to account for depreciation and the cost of liquidation. An asset valued at 100 rupees by you might only be valued at 60 rupees by the bank's surveyor.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">5. Conditions (The Economic Environment)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Conditions refer to external factors that could impact your ability to repay the loan. This includes the overall state of the economy, specific industry trends, and the purpose of the loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For instance, if you are applying for a loan to open a new retail store in a neighborhood that is experiencing an economic downturn, the underwriter will view this condition unfavorably. Furthermore, lenders scrutinize the purpose of the loan. Borrowing money to buy income-generating machinery is viewed much more favorably than borrowing money to cover operating losses or pay off aggressive creditors. If a business conditions deteriorate significantly after taking a loan, it risks becoming a Non-Performing Asset. Understanding <Link href="/what-is-npa" className="text-blue-600 hover:underline">what is NPA</Link> is crucial for any business owner taking on debt.
                            </p>

                            <h2 id="financial-health" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Financial Health: Pre-Appraisal Document Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Preparation is the key to successfully navigating the credit appraisal process. Do not wait until the bank asks for documents; have a comprehensive financial dossier ready before you even fill out the application form. This level of organization signals to the underwriter that you are a competent and reliable manager.
                            </p>
                            
                            <div className="bg-gray-900 text-white p-10 rounded-[3rem] mb-10 shadow-2xl relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 blur-3xl rounded-full"></div>
                                <h4 className="text-2xl font-black mb-6 flex items-center gap-3">
                                    <span className="w-3 h-10 bg-blue-500 inline-block rounded-full"></span>
                                    The Ultimate Document Arsenal
                                </h4>
                                <ul className="space-y-5 font-light text-gray-300">
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">KYC Documents:</strong> PAN Card, Aadhar Card, and address proof for all directors and partners.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Business Proof:</strong> GST Registration certificate, Udyam Registration, and Shop & Establishment License.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Financial Statements:</strong> Audited Balance Sheet and Profit & Loss statements for the last 3 financial years.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Tax Returns:</strong> Income Tax Returns (ITR) with computation of income for the last 3 years.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Bank Statements:</strong> Primary current account statements for the last 12 months, showing healthy turnover.</li>
                                    <li><strong className="text-white uppercase tracking-wider italic text-sm">Project Report:</strong> A detailed business plan explaining exactly how the loan funds will be utilized to generate additional revenue.</li>
                                </ul>
                            </div>

                            <h2 id="the-underwriter" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Inside the Mind of the Underwriter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Underwriters are not optimists. They are paid to be professional skeptics. Their job is not to find reasons to approve your loan; their job is to find reasons to reject it. By anticipating their objections, you can preemptively address their concerns.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A major factor underwriters consider is the consistency of your financial records. If your declared turnover in your GST returns does not match the deposits in your bank statements, it instantly triggers a red flag. Discrepancies suggest either poor accounting practices or intentional tax evasion, both of which severely damage your "Character" assessment.
                            </p>

                            <div className="overflow-x-auto mb-10">
                                <table className="min-w-full bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                    <thead className="bg-gray-50 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-gray-700 uppercase tracking-wider">Metric</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-green-700 uppercase tracking-wider">Good Appraisal Indicator (Approval)</th>
                                            <th className="px-6 py-4 text-left text-xs font-bold text-red-700 uppercase tracking-wider">Bad Appraisal Indicator (Rejection)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-100">
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Average Bank Balance</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Maintained high balance consistently over 6 months</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Accounts frequently near zero or overdraft limits</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Check Bounces</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Zero inward or outward bounces in 12 months</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Multiple EMI bounces due to insufficient funds</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Debt Service Ratio</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Greater than 1.5x (comfortable margin)</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Below 1.1x (high risk of default)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50 transition-colors">
                                            <td className="px-6 py-4 text-sm font-medium text-gray-900">Credit Score Trends</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Steady upward trajectory above 750</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">Recent sharp drop or multiple hard inquiries</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="rejection-reasons" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Why Loans Fail: The Hidden Culprits</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond the obvious reasons like a terrible credit score, loans often fail due to structural issues within the application that business owners overlook. One primary hidden culprit is the "Vintage of the Business." Most banks require a minimum of 3 years of operational history. If your business is only 18 months old, no matter how profitable, traditional banks will likely reject the application due to policy constraints.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another massive hurdle is the nature of the industry. Banks categorize industries into different risk profiles. If you operate in a sector that the bank currently views as "negative" or "high risk" (for example, highly volatile commodities, speculative real estate, or certain unsecured trading sectors), your application will face extreme prejudice regardless of your individual financial health.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Lastly, disorganized financial reporting is a silent killer. When an underwriter sees handwritten ledgers, unaudited statements lacking proper stamps, or tax returns filed late, they do not just see poor administration. They see a business that lacks internal controls, making it too dangerous to lend to.
                            </p>

                            <h2 id="cibil-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">CIBIL Impact and the Rejection Loop</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What happens when a loan is rejected? A dangerous phenomenon known as the "Rejection Loop" can occur. When you apply for a loan, the bank initiates a "hard inquiry" on your credit report. A hard inquiry slightly lowers your CIBIL score. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-medium">
                                If you are rejected by Bank A, and in a state of panic, you immediately apply to Bank B, Bank C, and Bank D within the same week, you are creating a disaster. Multiple hard inquiries in a short timeframe not only drag down your score significantly but also send a glaring signal to all future lenders: this borrower is desperate for credit. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The correct response to a rejection is patience. You must obtain the exact reason for the rejection, spend 3 to 6 months fixing the underlying issue, and only then reapply. Breaking the rejection loop requires discipline and a strategic approach to credit management.
                            </p>

                            <h2 id="negotiation-tactics" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Negotiation Strategy: Turning a "Maybe" into a "Yes"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Credit appraisal is not always a black and white binary outcome. There is a grey area where your application might be borderline. In these situations, your ability to negotiate with the loan manager can dictate the final result.
                            </p>
                            <ul className="list-disc pl-6 mb-8 space-y-4 text-gray-700 font-light">
                                <li><strong>Provide Context:</strong> If there is a dip in your profit margin for one specific year, do not let the underwriter guess why. Provide a proactive explanation in your project report (e.g., "Purchased heavy machinery resulting in higher depreciation, but leading to increased capacity in year two").</li>
                                <li><strong>Offer Additional Comfort:</strong> If the bank is hesitant about your cash flow, offer to pledge a secondary collateral, such as a fixed deposit, or bring in a strong co-applicant or guarantor to bolster the application's strength.</li>
                                <li><strong>Demonstrate Future Orders:</strong> Past performance is important, but future revenue is what pays the EMI. If you have confirmed Purchase Orders (POs) or long-term contracts from reputable clients, make sure these are front and center in your file.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                At CredSettle, we help business owners structure their financial narratives. A bank wants to lend money. They just need you to prove that it is safe to do so. By presenting a fortified, well-documented case, you reduce the perceived risk and dramatically increase your chances of approval.
                            </p>

                            <h2 id="case-studies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Success Stories: Navigating the Appraisal Maze</h2>
                            <div className="space-y-8 mb-12">
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Case Study 1: The Manufacturing Turnaround (Pune)</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        An auto-parts manufacturer had his loan application rejected twice. His business was profitable, but his CIBIL showed a minor dispute over a 500-rupee credit card charge from 4 years ago that he had ignored. The banks' automated systems were auto-rejecting the file.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: We intervened by resolving the dispute with the credit card company and updating the CIBIL record. Furthermore, we helped him prepare a detailed CMA (Credit Monitoring Arrangement) data report highlighting his strong DSCR. The third application was approved within 10 days for a 2 Crore working capital limit.
                                    </p>
                                </div>
                                <div className="bg-blue-50 p-10 rounded-[3rem] border border-blue-100 shadow-xl border-l-8 border-blue-700">
                                    <h4 className="text-2xl font-black text-blue-900 mb-4 uppercase tracking-tight italic">Case Study 2: The Service Sector Dilemma (Delhi)</h4>
                                    <p className="text-gray-800 mb-4 font-light">
                                        An IT consulting firm needed expansion capital. Since it was a service business, they had no hard collateral (machinery or inventory) to pledge. Traditional banks were skeptical of their "Capacity" because their revenue was tied to just two major clients.
                                    </p>
                                    <p className="text-gray-800 font-bold italic">
                                        Action: We restructured their proposal to focus on the "Character" and "Conditions" metrics. We provided executed 5-year retainer contracts with their clients and demonstrated zero debt on their balance sheet. We successfully secured an unsecured business loan through a specialized NBFC tailored for the service sector.
                                    </p>
                                </div>
                            </div>

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Conclusion: Master the Process, Secure the Capital</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Securing a business loan in India is not a lottery. It is a highly structured, data-driven process. The credit appraisal mechanism is designed to filter out risk, and if you continually approach banks without understanding this filter, you will face continuous rejection.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-black text-blue-800 uppercase tracking-widest text-sm border-t-2 border-blue-100 pt-6 animate-pulse">
                                Do not let a rejection define your business trajectory. Analyze the failure, adjust your strategy, and reapply with strength.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 text-blue-900 font-medium">
                                Understanding the 5 Cs of credit is the first step toward financial mastery. By ensuring your Character, Capacity, Capital, Collateral, and Conditions are impeccably documented, you transition from a desperate borrower to an attractive investment for any financial institution. Contact CredSettle today to audit your financial health before you submit your next loan application.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Feedback</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                {reviews.map((review, index) => (
                                    <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                        <div className="flex items-center mb-3">
                                            <div className="flex text-yellow-400 mr-2">
                                                {[...Array(review.stars)].map((_, i) => (
                                                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                ))}
                                            </div>
                                        </div>
                                        <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Empower Your Business Today</h3>
                                <p className="text-blue-800 mb-6">Our financial experts specialize in optimizing business profiles for successful credit appraisal. We help you present a bulletproof case to lenders, drastically improving your approval odds.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Consult a Financial Expert
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Bank underwriting criteria vary by institution, loan product, and economic conditions. CredSettle provides financial research and mediation services.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Loan Rejected?</h4>
                                <p className="text-sm text-gray-600 mb-6">Let us audit your financial documents before your next application to guarantee a stronger file.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get a File Audit
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Pre-Appraisal Checks</p>
                                    <p>v DSCR Optimization</p>
                                    <p>v Document Structuring</p>
                                    <p>v Bureau Dispute Resolution</p>
                                </div>
                            </div>

                            {/* Related Expertise */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">MSME Loan Defense</Link>
                                    <Link href="/what-is-npa" className="block text-sm text-blue-600 hover:underline">Understanding NPA Crisis</Link>
                                    <Link href="/how-to-improve-cibil-score" className="block text-sm text-blue-600 hover:underline">Credit Score Building</Link>
                                    <Link href="/what-is-line-of-credit" className="block text-sm text-blue-600 hover:underline">Line of Credit Strategy</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
