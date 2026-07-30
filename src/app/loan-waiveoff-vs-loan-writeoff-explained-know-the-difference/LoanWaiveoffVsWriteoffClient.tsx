'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanWaiveoffVsWriteoffClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
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

    const toggleFaq = (index: number) => {
        if (openFaqIndex === index) {
            setOpenFaqIndex(null);
        } else {
            setOpenFaqIndex(index);
        }
    };

    const navLinks = [
        { id: 'introduction', label: 'The Big Misconception' },
        { id: 'what-is-waive-off', label: 'What is a Waive Off?' },
        { id: 'what-is-write-off', label: 'What is a Write Off?' },
        { id: 'accounting-perspective', label: 'The Accounting Reality' },
        { id: 'legal-implications', label: 'Legal Implications' },
        { id: 'cibil-impact', label: 'CIBIL Score Impact' },
        { id: 'recovery-process', label: 'Recovery After Write Off' },
        { id: 'comparison-table', label: 'Comparison Table' },
        { id: 'how-to-check', label: 'How to Check Your Status' },
        { id: 'settlement-option', label: 'The Settlement Option' },
        { id: 'myths-vs-facts', label: 'Myths vs Facts' },
        { id: 'rbi-guidelines', label: 'RBI Guidelines' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Does a loan write off mean I do not have to pay the bank anymore?',
            answer: 'No. A loan write off is strictly an internal accounting maneuver used by banks to clean their balance sheets and claim tax benefits. Your legal obligation to repay the debt remains completely intact. The bank or a recovery agency can still pursue you legally and demand full repayment.'
        },
        {
            question: 'Can I get a new loan if my previous account is marked as written off?',
            answer: 'It is highly unlikely. An account marked as written off in your CIBIL report acts as a massive red flag to future lenders. It indicates that you severely defaulted on a previous obligation and the bank had to classify it as a loss. You will face rejections from almost all regulated financial institutions until you resolve the written off account.'
        },
        {
            question: 'How do I change my CIBIL status from written off to closed?',
            answer: 'To remove the written off status, you must negotiate with the lender and either pay the outstanding amount in full or reach a mutual compromise settlement. If you pay in full, the status changes to closed. If you settle for a lesser amount, the status changes to settled. Both are significantly better than having a written off status dragging down your profile.'
        },
        {
            question: 'What is the main difference between loan waive off and write off in India?',
            answer: 'The primary difference between loan waive off and write off lies in legal liability. A waive off is a complete forgiveness of the debt by the lender, meaning you owe nothing and the account is closed gracefully. A write off simply removes the non performing asset from the bank\'s primary ledger for tax reasons, but you still owe the money and will still be chased for recovery.'
        },
        {
            question: 'Why do banks sell written off accounts to Asset Reconstruction Companies (ARCs)?',
            answer: 'Since the bank has already removed the bad asset from its active books, it often sells the legal right to recover the debt to an Asset Reconstruction Company at a heavily discounted price. The ARC then takes over the recovery process, which is why borrowers often face aggressive recovery attempts even years after a loan write off.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I thought my loan was forgiven because it said written off in my CIBIL. I was shocked when recovery agents showed up three years later. The legal experts at CredSettle explained the difference between loan waive off and write off. They helped me negotiate a formal settlement with the bank and finally get the NOC.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'My credit card debt was written off and my score dropped to 520. No bank would give me a home loan. CredSettle stepped in, spoke to the bank, and we converted the write off into a closed account by paying a negotiated amount. It took time, but my financial life is back on track.'
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
        'name': 'Loan Waive Off vs Write Off Legal Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1450',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Loan Waive Off vs. Loan Write Off Explained<br />
                        <span className="text-blue-300">Know the Difference</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        When you see Written Off on your credit report, it is not a reason to celebrate. Discover the harsh accounting realities, the permanent legal liability, and how to protect yourself from aggressive recovery tactics.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Legal Advice
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb Section */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4 font-sans">
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
                                        Waive Off vs Write Off
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={`text-sm font-bold px-4 py-2 rounded-lg transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            const element = document.getElementById(link.id);
                            if (element) {
                                const offset = 80;
                                const bodyRect = document.body.getBoundingClientRect().top;
                                const elementRect = element.getBoundingClientRect().top;
                                const elementPosition = elementRect - bodyRect;
                                const offsetPosition = elementPosition - offset;

                                window.scrollTo({
                                    top: offsetPosition,
                                    behavior: 'smooth'
                                });
                            }
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Topic Index</h3>
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
                                            const element = document.getElementById(link.id);
                                            if (element) {
                                                const offset = 100;
                                                const bodyRect = document.body.getBoundingClientRect().top;
                                                const elementRect = element.getBoundingClientRect().top;
                                                const elementPosition = elementRect - bodyRect;
                                                const offsetPosition = elementPosition - offset;

                                                window.scrollTo({
                                                    top: offsetPosition,
                                                    behavior: 'smooth'
                                                });
                                            }
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
                    <main className="lg:w-2/4 xl:w-3/5">
                        <article className="prose prose-lg max-w-none text-gray-800">
                            
                            {/* Alert Banner 1 */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-lg mb-10 shadow-sm">
                                <div className="flex items-center mb-2">
                                    <svg className="w-6 h-6 text-red-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    <h4 className="text-red-800 font-bold m-0 text-xl">Important Legal Warning on Written Off Accounts</h4>
                                </div>
                                <p className="text-red-700 m-0 font-medium">
                                    If you see a written off status on your credit report, you are still legally bound to repay the debt. A write off is purely an internal banking procedure for tax benefits. Your liability remains active, and the lender can initiate legal action or deploy recovery agents against you at any time. Do not ignore a written off account.
                                </p>
                            </div>

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Big Misconception</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                One of the most dangerous financial misunderstandings in India revolves around the difference between loan waive off and write off. When individuals struggle with immense financial burdens and finally stop paying their EMIs, their loan account eventually transitions through various stages of delinquency. After a prolonged period of non payment, the borrower might pull their credit report and see a specific status tag next to the loan account. Often, the tag reads Written Off.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Many borrowers mistakenly believe that a loan write off meaning India context is identical to a complete debt forgiveness. They assume the bank has taken pity on their financial situation, absorbed the loss, and closed the chapter forever. This misconception leads to a false sense of security. Borrowers stop answering calls, stop checking their mail, and move on with their lives. However, this peace is entirely an illusion.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Months or even years later, the borrower is abruptly awakened by aggressive recovery agents knocking on their door or an official legal notice arriving in the mail. They are shocked to discover that the debt has multiplied significantly due to compounded interest and penalty charges. The reality is that the bank never forgave the debt. Understanding the technical and legal difference between loan waive off and write off is absolutely critical to protecting your financial future and preventing catastrophic legal surprises.
                            </p>

                            <h2 id="what-is-waive-off" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">What is a Loan Waive Off?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                A loan waive off is the ultimate form of debt relief. When a loan is waived off, the lender officially and legally relinquishes their right to collect the outstanding debt. This means the borrower is completely freed from the obligation to repay the principal amount, the interest, and any associated penalties. The debt ceases to exist in the eyes of the law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Waive offs are exceptionally rare in the commercial retail banking sector. Commercial banks operate on tight margins and are accountable to their shareholders; they do not simply hand out free money. A true loan waive off typically occurs only under highly specific and often systemic circumstances. For instance, government mandated agricultural loan waivers are the most common examples. In these scenarios, the state or central government compensates the banks for the losses incurred by waiving the farmers debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                In extremely rare cases, a bank might waive off a small retail loan if the borrower faces a catastrophic, verifiable tragedy, such as severe terminal illness or death, and there is no collateral or guarantor to recover the funds from. However, borrowers should never rely on the expectation of a waive off. If a waive off does happen, the bank provides an official No Objection Certificate explicitly stating that the borrower has zero remaining liability.
                            </p>

                            <h2 id="what-is-write-off" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">What is a Loan Write Off?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                A loan write off is a completely different mechanism. To comprehend loan write off meaning India, you must look at it from the banks perspective. When a borrower stops paying their EMIs for ninety consecutive days, the account is classified as a Non Performing Asset. As the NPA ages, the bank is required by the Reserve Bank of India to set aside capital provisions from its profits to cover the potential loss.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                If the loan remains unpaid for a very long duration, typically over a year or two, maintaining the NPA on the active balance sheet becomes detrimental to the banks financial health indicators. The non performing asset drags down the banks profitability ratios and increases their tax burden. To clean up their balance sheet, the bank executes a technical write off.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                A write off simply means the bank has moved the bad debt from its primary active ledger to an off balance sheet record. By doing this, the bank acknowledges the asset as a loss for accounting purposes. This maneuver allows the bank to claim tax deductions on the bad debt and present a healthier balance sheet to investors and regulators. However, the critical element is that the legal right to recover the money is entirely preserved. The borrower still owes every single rupee, plus ongoing interest and penalties.
                            </p>

                            <h2 id="accounting-perspective" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Accounting Reality vs Legal Reality</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                The confusion primarily stems from mixing accounting terminology with legal standing. Let us break down the exact difference between loan waive off and write off by looking at both realities side by side.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                In the accounting reality, a write off is a cleanup operation. Banks have strict regulatory requirements imposed by the Reserve Bank of India regarding their gross and net non performing asset ratios. If a bank holds too many bad loans, it faces regulatory penalties and a drop in investor confidence. Therefore, banks routinely perform massive write off exercises at the end of financial quarters. They wipe thousands of crores of bad loans off the main books. The media often reports this with sensational headlines stating that banks have forgiven massive amounts of debt. This is highly misleading.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                In the legal reality, nothing changes for the borrower during a write off. The loan agreement signed at the time of disbursement remains fully enforceable in a court of law. The bank retains all original documents, all bounced cheques, and all legal rights to initiate civil or criminal proceedings, including actions under the Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest Act for secured loans, or the Negotiable Instruments Act for bounced cheques. You can learn more about <Link href="/check-free-cibil-score" className="text-blue-600 font-bold hover:underline">checking your CIBIL score</Link> to monitor these statuses.
                            </p>

                            <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Severe Legal Implications of a Write Off</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                When you understand the true loan write off meaning India, you realize the severe legal vulnerabilities you face. Because the debt is still legally valid, the bank has multiple avenues to pursue recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Firstly, the bank can file a civil suit for recovery of money. While civil suits take time in Indian courts, they can eventually lead to a decree against you, allowing the bank to attach your properties or garnish your salary. Secondly, if you submitted post dated cheques or set up an electronic clearing mandate that subsequently bounced due to insufficient funds, the bank can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act or the Payment and Settlement Systems Act. These are criminal offenses that can result in arrest warrants and potential imprisonment if ignored.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Furthermore, banks often utilize the Right of General Lien. This powerful banking right allows them to unilaterally deduct funds from any other account you hold with the same bank to adjust against your written off loan dues. If you have a savings account or a fixed deposit with the bank where you defaulted, they can instantly freeze and liquidate those assets without prior permission.
                            </p>

                            <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Devastating Impact on Your CIBIL Score</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                The impact of a written off account on your credit profile is catastrophic. Your CIBIL report is a permanent financial report card. When a bank writes off a loan, they report this status to all major credit bureaus including CIBIL, Experian, Equifax, and CRIF High Mark.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                A written off status is considered the worst possible remark on a credit report. It clearly tells any prospective lender that you completely failed to honor your financial commitment and the bank suffered a loss. Your credit score will plummet, often falling below 600 or even into the 500s. More importantly, regardless of the numerical score, the presence of the written off tag acts as an absolute barrier to new credit. Our comprehensive guide on <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-blue-600 font-bold hover:underline">written off vs settled CIBIL impact</Link> details the long term consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                You will be systematically rejected for personal loans, home loans, auto loans, and credit cards by all mainstream banks and reputable Non Banking Financial Companies. Even if you apply for a loan five years after the write off, the algorithm will flag the unresolved bad debt and instantly decline the application. You become a financial pariah, locked out of the formal credit system until you take active steps to resolve the issue.
                            </p>

                            <h2 id="recovery-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Aggressive Recovery Process Post Write Off</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Borrowers often wonder why recovery agents suddenly become so aggressive long after the loan has been written off. The answer lies in the business models of debt recovery.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Once a bank completes a technical write off, it has two primary options for recovery. The bank can assign the portfolio to third party collection agencies on a high commission basis. Since the debt is already considered a total loss on the books, any amount recovered is pure profit. Therefore, banks offer substantial incentives to these agencies, sometimes up to thirty or forty percent of the recovered amount. This high commission structure drives recovery agents to employ extremely aggressive and often unethical tactics to force the borrower to pay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Alternatively, the bank may sell the entire portfolio of written off loans to an Asset Reconstruction Company. The ARC purchases the bad debt at a steep discount, perhaps ten or twenty cents on the dollar. The ARC then assumes the legal right to recover the full amount. Since the ARC specializes purely in debt recovery, they have dedicated legal teams and field networks designed to track down borrowers and extract payments. They will monitor your financial footprint, locate your new workplace, and relentlessly pursue you until a resolution is reached.
                            </p>

                            {/* Comparison Table */}
                            <h2 id="comparison-table" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Waive-Off vs Write-Off Comparison Table</h2>
                            <div className="overflow-x-auto mb-10 shadow-sm rounded-lg border border-gray-200">
                                <table className="min-w-full text-left bg-white border-collapse">
                                    <thead>
                                        <tr className="bg-blue-900 text-white">
                                            <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider border-b border-blue-800">Parameter</th>
                                            <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider border-b border-blue-800">Loan Waive Off</th>
                                            <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider border-b border-blue-800">Loan Write Off</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 font-light">
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-6 font-bold text-gray-900 bg-gray-50">Primary Meaning</td>
                                            <td className="py-4 px-6">Total forgiveness of the debt. The borrower owes nothing.</td>
                                            <td className="py-4 px-6">Accounting adjustment. The debt is moved off the primary ledger.</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-6 font-bold text-gray-900 bg-gray-50">Legal Liability</td>
                                            <td className="py-4 px-6 text-green-700 font-bold">Completely Extinguished</td>
                                            <td className="py-4 px-6 text-red-700 font-bold">Fully Active and Enforceable</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-6 font-bold text-gray-900 bg-gray-50">Recovery Action</td>
                                            <td className="py-4 px-6">Stops immediately. No further calls or visits.</td>
                                            <td className="py-4 px-6">Continues aggressively. Often outsourced to ARCs.</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-6 font-bold text-gray-900 bg-gray-50">CIBIL Reporting Status</td>
                                            <td className="py-4 px-6">Closed</td>
                                            <td className="py-4 px-6 text-red-600 font-bold">Written Off</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-6 font-bold text-gray-900 bg-gray-50">Future Credit Eligibility</td>
                                            <td className="py-4 px-6">Positive impact. Eligible for new loans.</td>
                                            <td className="py-4 px-6">Extremely negative. Blocked from formal credit.</td>
                                        </tr>
                                        <tr className="border-b border-gray-100 hover:bg-gray-50">
                                            <td className="py-4 px-6 font-bold text-gray-900 bg-gray-50">Frequency of Occurrence</td>
                                            <td className="py-4 px-6">Extremely rare. Usually government mandated.</td>
                                            <td className="py-4 px-6">Very common. Routine banking procedure.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="how-to-check" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">How to Check Your Status Accurately</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Never rely on verbal confirmations from collection agents. Agents often use deceptive language, promising that a small payment will result in a waive off, when in reality, they are merely collecting a partial payment toward a written off account. You must verify your status through official documentation.
                            </p>

                            {/* Checklist Section */}
                            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                                    Checklist: How to Verify Your Loan Status
                                </h3>
                                <ul className="space-y-3 font-light text-gray-700">
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span><strong>Download Official CIBIL Report:</strong> Obtain your detailed credit report directly from TransUnion CIBIL. Look specifically at the Account Status section for the loan in question.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span><strong>Check for Written Off Tag:</strong> If the status reads Written Off or WO, the debt is active and you remain legally liable.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span><strong>Demand a No Objection Certificate:</strong> The only definitive proof of a Waive Off or successful closure is a physical or digitally signed NOC from the bank stating that the outstanding balance is zero.</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                        <span><strong>Verify the Settlement Letter:</strong> If an agent offers a settlement, ensure you receive a formal settlement letter on the banks letterhead detailing the exact terms before making any payment.</span>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="settlement-option" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">The Settlement Option: Your Path to Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Since a true waive off is virtually impossible for retail loans, and a write off leaves you legally exposed and financially paralyzed, the most practical and effective solution is a formal One Time Settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                In a loan settlement, you negotiate with the bank to pay a mutually agreed upon lumpsum amount that is lower than the total outstanding balance. In exchange, the bank agrees to close the account and relinquish their legal right to pursue further recovery. It is vital to understand that banks prefer settlements over lengthy litigation, especially for accounts that are already classified as non performing or written off. To understand how effective this is, read about the <Link href="/what-is-the-success-rate-of-debt-settlement-programs" className="text-blue-600 font-bold hover:underline">success rate of debt settlement programs</Link>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                A successful settlement involves meticulous negotiation. You must demonstrate genuine financial hardship, such as severe medical emergencies, sudden job loss, or catastrophic business failure. If negotiated professionally, you can often settle the debt for a fraction of the total demanded amount, frequently securing massive waivers on the accrued interest and penal charges. Once the settlement amount is paid, the bank issues a No Dues Certificate, and your CIBIL status is updated to Settled. While a settled status is not as pristine as a closed status, it definitively stops the bleeding, halts all recovery harassment, and allows you to begin the slow process of rebuilding your creditworthiness.
                            </p>

                            <h2 id="myths-vs-facts" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Common Myths vs Financial Facts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                The landscape of debt recovery is riddled with dangerous misinformation. Let us address the most common misconceptions regarding the difference between loan waive off and write off.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 font-light">
                                <strong>Myth:</strong> If the bank writes off my loan, the police cannot arrest me because it is now a civil matter.
                                <br />
                                <strong>Fact:</strong> While the loan default itself is a civil matter, if you have issued security cheques that bounce, the bank can file criminal charges under Section 138 of the Negotiable Instruments Act. This is a criminal proceeding that absolutely can lead to arrest warrants if you fail to appear in court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4 font-light">
                                <strong>Myth:</strong> After three years, the loan is time barred, and the bank loses all rights to collect.
                                <br />
                                <strong>Fact:</strong> The Limitation Act of 1963 states that a bank has three years from the date of the last payment to file a civil suit. However, this only limits their ability to sue in civil court. It does not erase the debt. They can still employ recovery agents, they can still initiate proceedings under the SARFAESI Act for secured loans, and the written off tag will remain on your CIBIL report indefinitely, blocking future credit.
                            </p>

                            <h2 id="rbi-guidelines" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Reserve Bank of India Guidelines</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                The Reserve Bank of India strictly regulates how banks classify and manage non performing assets. The RBI mandates that banks must transparently report all written off accounts to the credit information companies. The central bank has repeatedly clarified in its master circulars that a technical write off does not entail any waiver of claims against the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Furthermore, the RBI insists that banks must have a board approved policy for the recovery of written off accounts. Banks are expected to vigorously pursue recovery to protect depositor funds. This regulatory pressure ensures that lenders will never simply forget about a written off loan. They are structurally obligated to keep chasing the money, which is why borrowers must take proactive steps to resolve the issue through a formal settlement process rather than hoping it will disappear.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Real Life Impact</h2>
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-10">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            className="w-full text-left p-4 font-bold text-gray-900 bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
                                            onClick={() => toggleFaq(index)}
                                        >
                                            <span className="pr-8">{faq.question}</span>
                                            <svg className={`w-5 h-5 text-blue-600 transform transition-transform duration-200 ${openFaqIndex === index ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                        </button>
                                        <div className={`p-4 bg-white border-t border-gray-100 transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'block' : 'hidden'}`}>
                                            <p className="text-gray-700 leading-relaxed font-light m-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Final Verdict: Take Control of Your Debt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Do not let the terminology confuse you. The difference between loan waive off and write off is the difference between total freedom and a hidden trap. A write off is simply a tactical move by the bank to clean their balance sheet. It provides zero legal relief for the borrower. You remain fully exposed to civil lawsuits, criminal cheque bounce cases, and aggressive harassment from third party recovery agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-light">
                                Ignorance is not a defense, and ignoring a written off account will only compound your problems. The longer you wait, the higher the accrued interest, and the more aggressive the recovery tactics will become. You must transition from a passive victim to an active negotiator. By understanding the legal framework and leveraging professional debt settlement strategies, you can safely navigate out of the write off trap.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-black text-blue-800 uppercase tracking-widest text-sm border-t-2 border-blue-100 pt-6 animate-pulse">
                                Stop hiding from your credit report. Address the written off status today and reclaim your financial dignity.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help Settling a Written Off Loan?</h3>
                                <p className="text-blue-800 mb-6 font-light">Our expert legal team specializes in converting written off nightmares into formally settled accounts. We protect you from harassment and negotiate directly with the banks to secure massive waivers on your behalf.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Protection Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Legal outcomes vary based on individual loan contracts, state specific rules, and the nature of the default. Always seek formal legal counsel. CredSettle is a social fintech mediation service.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Recovery Agents?</h4>
                                <p className="text-sm text-gray-600 mb-6 font-light">We can send an immediate Legal Notice to stop agents from harassing you over written off loans.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1 font-light">
                                    <p>✓ 24hr Legal Response</p>
                                    <p>✓ RBI Compliance Check</p>
                                    <p>✓ Settlement Negotiation</p>
                                    <p>✓ Legal Defense Setup</p>
                                </div>
                            </div>

                            {/* Related Expertise */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/loan-written-off-vs-settled-cibil-impact" className="block text-sm text-blue-600 hover:underline">Written Off vs Settled Impact</Link>
                                    <Link href="/what-is-the-success-rate-of-debt-settlement-programs" className="block text-sm text-blue-600 hover:underline">Debt Settlement Success Rate</Link>
                                    <Link href="/check-free-cibil-score" className="block text-sm text-blue-600 hover:underline">Check Your CIBIL Score</Link>
                                    <Link href="/1-loan-settlement-services-in-india" className="block text-sm text-blue-600 hover:underline">Top Settlement Services</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
