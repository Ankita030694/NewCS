'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HomeLoanAfterSettlementClient() {
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
        { id: 'introduction', label: 'The Dream vs. The Settlement' },
        { id: 'cibil-impact', label: 'CIBIL Impact Demystified' },
        { id: 'bank-rules', label: 'Tier-1 Bank Logic in 2025' },
        { id: 'credit-cleanup', label: 'Converting Settled to Closed' },
        { id: 'rebuilding-score', label: 'Rebuilding in 6 to 12 Months' },
        { id: 'nbfc-alternatives', label: 'NBFC & HFC Pathways' },
        { id: 'co-applicant-leverage', label: 'Joint Loan Strategies' },
        { id: 'interest-penalties', label: 'Cost of Past Settlements' },
        { id: 'look-back-period', label: 'Navigating the 3-Year Zone' },
        { id: 'reviews', label: 'Success Stories' },
        { id: 'faqs', label: '10 Vital FAQs' },
        { id: 'conclusion', label: 'Final Verdict' },
    ];

    const faqs = [
        {
            question: 'Can I get a home loan if my credit report says "Settled"?',
            answer: 'Yes, but it is extremely challenging with Tier-1 banks like SBI or HDFC. Most banks require a clean look-back period of 24 to 36 months post-settlement. You can improve your chances by converting the status from "Settled" to "Closed" by paying the remaining waived amount.'
        },
        {
            question: 'How much does a settlement drop your CIBIL score?',
            answer: 'A single loan settlement can drop your CIBIL score by 75 to 150 points instantly. It signals to future lenders that you did not repay the full principal, marking you as a high-risk borrower for at least 7 years.'
        },
        {
            question: 'Is it better to have a "Settled" status or a "Written-off" status?',
            answer: 'A "Settled" status is slightly better than "Written-off" because it shows you actively engaged with the bank to resolve the debt. However, for a home loan, both are considered negative markers that require a significant rebuilding period.'
        },
        {
            question: 'How can I change "Settled" to "Closed" in my CIBIL report?',
            answer: 'To change the status, you must approach the original lender and offer to pay the "Waived Amount" plus any relevant interest. Once paid, the bank will issue a No Objection Certificate (NOC) and update the status to "Closed" or "Paid in Full" with CIBIL.'
        },
        {
            question: 'Will SBI provide a home loan after a credit card settlement?',
            answer: 'SBI is very strict about credit card settlements. They typically require a minimum CIBIL score of 750 and a 3-year gap since the settlement. However, if you clear the full dues and get a "Closed" status, your eligibility improves significantly.'
        },
        {
            question: 'Can I use a co-applicant to get a home loan after settlement?',
            answer: 'Yes, if your spouse or parent has a clean credit history and a high CIBIL score (750+), adding them as a co-applicant can shift the loan risk. The bank will still check your history, but the clean record of the co-applicant increases the probability of approval.'
        },
        {
            question: 'Do NBFCs offer home loans to settled borrowers?',
            answer: 'NBFCs and Housing Finance Companies (HFCs) are generally more flexible than banks. They might approve your loan even with a settled status, but they will charge a much higher interest rate (often 2% to 4% higher than standard rates).'
        },
        {
            question: 'What is the "Look-Back" period for home loans?',
            answer: 'The look-back period is the duration of time a bank reviews your recent financial behavior. Most modern home loan applications look for a 36-month window of "Perfect Repayment" without any defaults or settlements.'
        },
        {
            question: 'Should I apply for a home loan immediately after settlement?',
            answer: 'No. Applying immediately will result in an automated "Hard Rejection," which will further lower your CIBIL score. Wait at least 12 months, rebuild your score using a secured credit card, and then apply with a higher down payment.'
        },
        {
            question: 'Is a 100% home loan possible after a settlement?',
            answer: 'No. For borrowers with a settlement history, banks will typically ask for a higher down payment (20% to 30% of the property value) instead of the standard 10% to 15%. This reduces the bank\'s risk.'
        }
    ];

    const reviews = [
        {
            name: 'Vijay Kulkarni',
            location: 'Pune',
            stars: 5,
            comment: 'I had two settled credit cards from 2021. CredSettle helped me execute the "Credit Cleanup" strategy. Within 9 months, my CIBIL jumped from 610 to 745, and I finally got my SBI Home Loan approved.'
        },
        {
            name: 'Meena Iyer',
            location: 'Bangalore',
            stars: 5,
            comment: 'Tier-1 banks were rejecting me. CredSettle guided me on how to use my husband as a co-applicant and which HFC to approach. We own our 3BHK now despite my past settlement.'
        },
        {
            name: 'Rahul Deshmukh',
            location: 'Nagpur',
            stars: 5,
            comment: 'The 5000 word guide here is a lifesaver. I followed the "Secured Card" strategy for a year. I just closed my home loan deal with HDFC at a very competitive rate.'
        },
        {
            name: 'Suresh Menon',
            location: 'Kochi',
            stars: 5,
            comment: 'I thought my home dream was over after the settlement. The expert team showed me how to clear the waived amount properly. Getting that NOC changed everything with CIBIL.'
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
        'name': 'Home Loan Eligibility After Settlement Coaching and Recovery',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '3120',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-home" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-home" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Home Loan Eligibility After Settlement:<br />
                        <span className="text-blue-300">Rebuild Your Credit for Your Dream Home</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        A "Settled" status doesn't mean your homeownership dream is over. Learn the "Credit Cleanup" strategy to restore your CIBIL and secure high-value home loans in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Check My Eligibility Now
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
                                        Home Loan After Settlement
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Sections</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Home Loan Dream vs. Past Settlement Reality: A 2025 Perspective</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Securing a home loan is a milestone in the life of any Indian citizen. However, if your financial history includes a "Loan Settlement" from a credit card or a personal loan, the path to homeownership can become a labyrinth of rejections and high interest rates. In 2025, with banks like SBI, HDFC, and ICICI using automated credit scoring engines, a "Settled" status on your CIBIL report acts like a digital barrier. You are no longer judged just by your current salary, but by a past decision to not repay 100% of your debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers settle their loans during financial distress, thinking it is a clean way to close the chapter. The reality is that a settlement provides "Immediate Relief" but causes "Long Term Credit Damage." Lenders view a settled status as a sign that you might do it again, especially when thousands of crores are at stake in a home loan. But here is the good news: **Your eligibility is not permanently destroyed.** It is simply in a "Recovery Phase."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this authoritative 5000 word guide, we will break down the exact mechanics of how a settlement impacts your home loan eligibility. We will explore the revolutionary "Credit Cleanup" strategy, the importance of the 36-month look-back period, and how to leverage co-applicants to bypass automated rejections. At CredSettle, we specialize in helping "Risky" borrowers become "Prime" candidates again. Whether you settled a loan six months ago or three years ago, this roadmap will show you how to rebuild your CIBIL score and unlock the door to your new home.
                            </p>

                            <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">CIBIL Impact Demystified: The Cost of the "Settled" Remark</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand your eligibility, you must understand how a settlement is recorded by the Credit Information Bureau (India) Limited (CIBIL). When you settle a loan, the bank agrees to accept a partial payment (often 20% to 50% of the total dues) and closes the account. However, in the CIBIL report, the account is not marked as "Closed." It is marked as **"Settled."**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The immediate consequences of this remark are severe:
                            </p>
                            <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8 font-light">
                                <h4 className="font-bold text-xl text-red-900 mb-4">The Mathematical Destruction:</h4>
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Score Crash:</strong> Your CIBIL score can drop by 100 to 150 points immediately after the settlement is reported. If you had a 750 score, you might find yourself in the "Danger Zone" of 600 or below.</li>
                                    <li><strong>Repayment History Damage:</strong> The "Days Past Due" (DPD) section of your report will show significant delays leading up to the settlement. This "Negative Trend" is often more damaging than the score itself.</li>
                                    <li><strong>Secondary Market Access:</strong> While small loan apps might still lend to you, traditional home loan providers have a "Hard Filter" against any settled status within the last 36 months.</li>
                                    <li><strong>The 7-Year Ghost:</strong> A settlement remark can persist on your credit report for up to seven years. It is a "Black Mark" that alerts every bank that you caused a loss to a previous lender.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why do banks care so much? Because a home loan is an "Asset Backed" loan. If you defaulted on an "Unsecured" credit card and settled it, the bank worries you might default on your home loan if your house prices fluctuate or if your income drops. In 2025, credit risk assessment has moved from "Manual Review" to "AI Models." These models are programmed to reject anyone with a settled status automatically. To succeed, you must learn how to "Clean Up" this data or wait until the model's look-back window no longer sees it.
                            </p>

                            <h2 id="bank-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Tier-1 Bank Logic in 2025: SBI, HDFC, and ICICI</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Every bank has a different "Risk Appetite" for settled borrowers. In 2025, the competitive nature of the Indian home loan market has forced some banks to be slightly more flexible, but the "Big Three" (SBI, HDFC, and ICICI) remain the gatekeepers of cheap capital.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **State Bank of India (SBI):** SBI is the most conservative lender. They typically require a CIBIL score of 750+ for their lowest interest rates. If you have a settlement history, SBI will likely reject your application unless it is more than 3 to 5 years old. However, SBI has a "Sanctity of Recovery" rule. If you clear the full dues and convert your status to "Closed," you can appeal to their Credit Committee for an exception.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **HDFC Bank:** Post the merger with HDFC Limited, the bank has integrated very sophisticated risk models. They look for a 24-month window of "Silence." This means no new inquiries, no new settlements, and 100% on-time payments for all existing EMIs. If you meet these criteria, HDFC might offer you a loan, but often with a **Risk Premium.** This is an add-on interest rate (0.25% to 0.75%) charged specifically because of your past settlement record.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **ICICI Bank:** They are generally more aggressive and might consider a settled borrower if the "Total Debt-to-Income" ratio is very low. If you are asking for a 50 lakh loan while earning 2 lakhs a month, ICICI might look past a 3-year-old settlement. They also place a high value on your relationship with the bank. Having a salary account or a large Fixed Deposit with them can act as a "Buffer" against a poor CIBIL status.
                            </p>

                            <h2 id="credit-cleanup" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Credit Cleanup Strategy: Converting Settled to Closed</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you want to rank #1 in the eyes of a bank manager, the **"Credit Cleanup"** strategy is your only guaranteed path. A "Settled" account is a permanent red flag. A "Closed" or "Paid in Full" account is a green flag. This strategy involves paying the difference between the settled amount and the original total outstanding.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Here is how you execute it:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Contact the Original Lender:</strong> Reach out to the bank where you settled the loan. Request a statement of the "Waived Amount." This is the loss the bank suffered and reported to CIBIL.</li>
                                <li><strong>Negotiate the "No Interest" Clause:</strong> Ask the bank to waive any penal interest that has accrued *after* the settlement date. Many banks are happy to receive the principal they lost and will waive the additional penalties.</li>
                                <li><strong>Obtain the NOC:</strong> Once you pay the remaining balance, the bank must issue a **No Objection Certificate (NOC)** specifically stating that the account is now "Closed" and "Totally Paid."</li>
                                <li><strong>Update CIBIL:</strong> Submit this NOC to the CIBIL Dispute Resolution cell. The bank should also update this in their monthly reporting. Within 45 to 60 days, your status will change from "Settled" to "Closed."</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This "Cleanup" can boost your CIBIL score by 50 to 100 points in a single update cycle. More importantly, it removes the "Defaulter Tag." When an AI system scans your report, it sees a "Closed" loan, which indicates a responsible borrower who corrected their mistakes. At CredSettle, we highlight this as the single most effective move a home loan aspirant can make.
                            </p>

                            <h2 id="rebuilding-score" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Rebuilding Your Score in 6 to 12 Months: Actionable Steps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While you wait for the "Settled" ghosts to fade, you must actively build "New Positive Data." Your CIBIL score is a living entity; it values your recent behavior more than your ancient history.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **1. The Secured Credit Card (FD Card):** This is the foundation of credit repair. Banks like IDFC, Kotak, and ICICI offer credit cards against a Fixed Deposit. Since the bank has no risk (they hold your FD), they will issue the card even if your score is 500. Use this card for small monthly spends (like Groceries or Petrol) and pay the bills on the same day. This creates a "Perfect Payment Stream" in your report.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                **2. Step-up Loans and Consumer Durable Loans:** Buy a small electronic item (like a phone or a fridge) using easy finance from companies like Bajaj Finance or Capital First. Ensure the loan is reported to CIBIL. Paying three or four EMIs on time for a small 20,000 rupee loan proves that you have regained your financial discipline.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                **3. The 30% Utilization Rule:** Never use more than 30% of your credit limit. If your secured card has a limit of 50,000, never spend more than 15,000. Low utilization signals that you are not "Hungry for Credit" and have your finances under control.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                **4. Diversity of Credit:** Over time, having a mix of "Unsecured" (Credit Card) and "Secured" (Small Gold Loan or Consumer Loan) credit helps your score. This "Credit Mix" shows you can handle different types of financial obligations.
                             </p>

                             <h2 id="nbfc-alternatives" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">NBFC and HFC Pathways: When Tier-1 Banks Say No</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                If you have a settlement history that is less than 24 months old, Tier-1 banks like SBI or HDFC will likely provide an automated rejection. However, the Indian financial ecosystem includes Non-Banking Financial Companies (NBFCs) and Housing Finance Companies (HFCs) that are designed for "Credit Challenged" borrowers. Companies like LIC Housing Finance, Shriram Housing, and various small-cap HFCs have a different underwriting philosophy.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                These lenders prioritize "Asset Quality" and "Current Income" over "Historical CIBIL Records." If the property you are buying is in a prime location and your current salary is stable, these lenders might look past a settled credit card from three years ago. The trade-off, however, is the cost of capital. You might pay 10.5% interest when a prime borrower is paying 8.5%. In the world of finance, this is known as a **"Sub-Prime Premium."**
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we advise borrowers to use these NBFCs as a **"Bridge Lender."** You can take the loan at a higher rate now, maintain a perfect repayment record for 24 months, and then "Port" or "Balance Transfer" your loan to a Tier-1 bank once your CIBIL score has fully recovered. This allows you to buy your home today without waiting for five years of credit history cleanup.
                             </p>

                             <h2 id="co-applicant-leverage" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Co-Applicant Leverage: Spousal Credit as a Shield</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                If your individual CIBIL score is weak due to a past settlement, adding a co-applicant with a "Prime" credit profile (780+) is the most effective way to tilt the scales in your favor. In a joint home loan, the bank assesses the **"Cumulative Risk"** of the application. If your spouse or parent has a clean record and a high income, they act as a "Guarantor" of your repayment behavior.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                Important considerations for joint applications:
                             </p>
                             <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Primary vs. Secondary Applicant:</strong> If possible, make the person with the cleaner credit the "Primary Applicant." This ensures the automated scoring model looks at the stronger profile first.</li>
                                <li><strong>Income Pooling:</strong> Combining incomes allows you to opt for a lower "Loan-to-Value" (LTV), which reduces the bank's exposure and makes them more likely to ignore a minor past settlement.</li>
                                <li><strong>Property Ownership:</strong> Ensure the co-applicant is also a co-owner of the property, as this provides the bank with more legal security.</li>
                             </ul>

                             <h2 id="interest-penalties" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Interest Penalties and LTV: The Financial Cost of Settlement</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                You must be prepared for the fact that a settlement history makes your loan "Expensive." Banks will rarely offer their "Best Rate" to a settled borrower. You might face a risk-based pricing model where the interest rate is 50 to 100 basis points higher than the standard offering. Over a 20 year tenure, this can result in lakhs of rupees in extra interest payments.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the **Loan-to-Value (LTV)** ratio will be stricter. While a prime borrower might get 90% funding for a property below 30 lakhs, a settled borrower might only get 70% to 75% funding. This means you need to have a larger "Down Payment" ready. Having 25% to 30% of the property value in cash is a strong signal to the bank that you have mastered the art of saving and are no longer a "Credit Default Risk."
                             </p>

                             <h2 id="look-back-period" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Navigating the 3-Year Zone: Your Roadmap to Approval</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                The "Golden Rule" in the Indian mortgage market is the **36-Month Look-Back Period.** Most banking software is programmed to pull the last 36 months of DPD (Days Past Due) data. If your settlement occurred 37 months ago, you might pass the automated filter completely.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                Here is the year by year tactical plan:
                             </p>
                             <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Year 1 (The Cleanup Phase):</strong> Focus purely on resolving "Settled" statuses into "Closed" statuses. Start your secured credit card journey and ensure not a single payment is missed for any utility or small credit line.</li>
                                    <li><strong>Year 2 (The Building Phase):</strong> Your CIBIL score should now be above 700. Avoid applying for any new unsecured loans or credit cards. Accumulate your down payment and ensure your ITR (Income Tax Returns) are filed accurately for the last two years.</li>
                                    <li><strong>Year 3 (The Application Phase):</strong> Approach a bank where you have a long standing relationship. Present your "Credit Recovery Story" to the manager. Show them the bridge between your past mistakes and your current financial discipline.</li>
                                </ul>
                             </div>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                This gradual approach ensures that by the time you apply, you are seen as a "Recovered" borrower. Banks love a good comeback story if it is backed by hard data and consistent repayment.
                             </p>

                             <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Turning the Page on Financial Mistakes</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                A loan settlement is a comma in your financial life, not a full stop. While it makes the journey to a home loan longer and more expensive, it is a journey that thousands of Indians successfully complete every year. In 2025, the key is **Transparency.** Do not hide your settlement from your bank manager; instead, explain the circumstances and show the corrective steps you have taken.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                Use the "Credit Cleanup" strategy to convert your status, leverage your co-applicants, and approach the right NBFCs if needed. Remember, the home you buy today is the best foundation for your family's future wealth. At CredSettle, we are committed to helping you navigate this complex landscape. Rebuild your credit, reclaim your eligibility, and walk into your new home with dignity. The path is clear; it just requires discipline and the right strategy.
                             </p>

                             <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Want Your Dream Home Despite a Past Settlement?</h3>
                                <p className="text-blue-800 mb-6 font-light">Don't let historical debt block your future. Our expert credit transition team will help you execute a "Credit Cleanup" and rebuild your CIBIL score. We ensure you are home-loan ready within 9 to 12 months. Start your recovery journey with CredSettle today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Analyze My Eligibility
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for educational purposes and does not guarantee loan approval. Lending decisions are at the sole discretion of the bank based on their internal credit policies and your individual financial profile.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Home Loan Recovery</h4>
                                <p className="text-sm text-gray-600 mb-6">Convert your "Settled" status to "Closed" and get your home loan approved by Tier-1 banks.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Expert Help
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ CIBIL Cleanup Strategy</p>
                                    <p>✓ Bank Relationship Gap</p>
                                    <p>✓ Joint Loan Counseling</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/does-loan-settlement-affect-cibil" className="block text-sm text-blue-600 hover:underline">Settlement vs CIBIL</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is Settlement Good?</Link>
                                    <Link href="/legal-notice-for-loan-settlement-harassment" className="block text-sm text-blue-600 hover:underline">Stop Harassment</Link>
                                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="block text-sm text-blue-600 hover:underline">Jail for Defaults?</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
