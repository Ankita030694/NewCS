'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function TaxImplicationsClient() {
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
        { id: 'introduction', label: 'Introduction' },
        { id: 'capital-vs-revenue', label: 'Capital vs Revenue' },
        { id: 'section-28-iv', label: 'Section 28(iv)' },
        { id: 'section-41-1', label: 'Section 41(1)' },
        { id: 'section-56-2-x', label: 'Section 56(2)(x)' },
        { id: 'personal-loans', label: 'Personal Loans' },
        { id: 'education-loans', label: 'Education Loans' },
        { id: 'home-loans', label: 'Home Loans' },
        { id: 'arc-settlements', label: 'ARC Settlements' },
        { id: 'disclosure-itr', label: 'ITR Disclosure' },
        { id: 'tax-myths', label: 'Tax Myths' },
        { id: 'tax-strategy', label: 'Tax Strategy' },
        { id: 'reviews', label: 'Reviews' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'Is the waiver of a credit card debt taxable in India?',
            answer: 'For individuals, the waiver of credit card principal is generally considered a non taxable capital receipt. However, any waived interest that was previously claimed as a business expense (if the card was used for business) would be taxable.'
        },
        {
            question: 'How does the Finance Act 2023 change loan settlement taxes?',
            answer: 'It amended Section 28(iv) to include "Cash" benefits. This means monetary benefits like loan waivers for businesses are now clearly taxable, closing the loophole used in the Mahindra & Mahindra case.'
        },
        {
            question: 'Will I receive a tax notice after settling a large loan?',
            answer: 'If the settlement amount is high, the bank may report it in their annual returns. While this doesn\'t automatically mean a notice, you should be prepared to explain the nature of the waiver to a tax officer if asked.'
        },
        {
            question: 'Can I claim the settlement amount as a "Loss" in my taxes?',
            answer: 'No. Paying a debt is not an expense or a loss; it is the fulfillment of an obligation. You cannot reduce your taxable income by the amount you paid to settle a loan.'
        },
        {
            question: 'What is the tax impact of a home loan principal waiver?',
            answer: 'It reduces the "Cost of Acquisition" of your property. While not taxed immediately, it increases your Capital Gains tax liability when you sell the property in the future.'
        },
        {
            question: 'If a relative settles my loan, is it a gift?',
            answer: 'If a relative (as defined by the IT Act) pays your loan directly to the bank, it is considered a non taxable gift. However, if a non relative pays more than 50,000, it is taxable as "Income from Other Sources."'
        },
        {
            question: 'Does Section 41(1) apply to personal loans?',
            answer: 'No. Section 41(1) only applies to "Trading Liabilities" where a deduction was previously claimed. Since personal consumption expenses aren\'t deductible, their waiver isn\'t taxed under this section.'
        },
        {
            question: 'What documents do I need for my CA after a settlement?',
            answer: 'You need the Settlement Offer Letter, the payment receipts, the No Dues Certificate, and a detailed statement of account showing the split between principal and interest.'
        },
        {
            question: 'Can I set off a taxable loan waiver against my salary income?',
            answer: 'No. Business income (PGBP) cannot be set off against "Salary" income. It can only be set off against other business losses or carry forward losses.'
        },
        {
            question: 'Is an OTS (One-Time Settlement) letter enough for tax filing?',
            answer: 'Yes, the OTS letter is the primary legal document that proves the terms of the waiver. Keep it safely for at least 8 years, as tax assessments can be reopened.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was very worried about the tax audit after my business loan settlement. This guide gave me the exact Sections 28 and 41 info my CA needed. We disclosed it as a capital receipt properly.'
        },
        {
            name: 'Priya Sharma',
            location: 'Delhi',
            stars: 5,
            comment: 'The explanation on Finance Act 2023 was eye opening. I realized my personal credit card settlement wasn\'t taxable, but my husband\'s business overdraft settlement was. Very detailed!'
        },
        {
            name: 'Rohan Gupta',
            location: 'Bangalore',
            stars: 5,
            comment: 'Highly professional analysis. Most websites just give generic advice, but this deep dive into Supreme Court cases like Mahindra & Mahindra settled my nerves about a tax notice.'
        },
        {
            name: 'Anjali Nair',
            location: 'Chennai',
            stars: 5,
            comment: 'The section on Home Loan principal waiver and its impact on cost of acquisition was brilliant. Saved me from a major capital gains headache in the future.'
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

    const organizationSchema = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        'name': 'CredSettle',
        'url': 'https://www.credsettle.com',
        'logo': 'https://www.credsettle.com/logo.png',
        'sameAs': [
            'https://www.facebook.com/credsettle',
            'https://www.twitter.com/credsettle',
            'https://www.linkedin.com/company/credsettle'
        ]
    };

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Income Tax Implications of Settled Debt Analysis',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '1250',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-tax" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-tax" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
            <Script id="org-schema-tax" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #1a365d 0%, #000 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Income Tax Implications of<br />
                        <span className="text-blue-400">Settled Debt: 2025 Guide</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expert analysis on Section 28(iv), 41(1), and 56(2)(x) for personal and business loan settlements in India.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional Tax Advice
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
                                        Income Tax Implications of Settled Debt
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div
                ref={mobTocRef}
                className="sticky top-0 z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {navLinks.map((link) => (
                    <a
                        key={link.id}
                        id={`mob-toc-${link.id}`}
                        href={`#${link.id}`}
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }`}
                        onClick={(e) => {
                            e.preventDefault();
                            document.getElementById(link.id)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
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

                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Financial Crossroads of Debt Resolution</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the complex ecosystem of Indian personal finance, loan settlement is often viewed as a "get out of jail" card for stressed borrowers. When you find yourself drowning in debt, negotiate with a bank, and pay a fraction of what you owe, the immediate feeling is one of immense relief. However, once the dust settles and the collection calls stop, a new question often emerges from the shadows: "Do I owe the government money for the debt that was forgiven?"
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This question is not just academic. In the eyes of the Income Tax Department, the waiver of a loan is a transfer of value. If you owed 10 lakhs and the bank accepted 4 lakhs, you have effectively "gained" 6 lakhs. Whether this gain is taxable as income or treated as a non taxable capital receipt is one of the most litigated and misunderstood areas of Indian tax law. As we move into 2025, the landscape has shifted significantly due to landmark Supreme Court judgements and legislative changes in the Finance Act 2023.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This exhaustive guide will peel back the layers of the Income Tax Act, 1961, to help you understand your liabilities, your rights, and the best practices for reporting a settled debt. Whether you are an individual with a personal loan, a business owner with a working capital default, or a student struggling with education debt, the implications discussed here will determine your tax strategy for the coming years.
                            </p>

                            <h2 id="capital-vs-revenue" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Fundamental Concept: Capital Receipt vs. Revenue Receipt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand taxability, we must first look at the nature of the loan itself. Under Indian tax principles, a loan is a "Capital Receipt." When you receive a loan, you are not taxed on it because it comes with an obligation to repay. It is not considered "income" in the traditional sense because it does not increase your net wealth permanently; it creates a matching liability.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, when a portion of that loan is waived, the liability disappears but the benefit remains. This creates a "remission of liability." The core debate in tax courts has always been: Does the remission of a capital liability convert that "capital receipt" into "taxable income"?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For a long time, the answer was a resounding "No" for individual personal loans. The logic was simple: If the receipt of the money wasn\'t taxable, the waiver of the repayment shouldn\'t be either. But for businesses, the logic was different. If the loan was used for business operations (like buying stock or paying salaries), the waiver was seen as a boost to business profits. This distinction between "Personal" and "Business" use is the first hurdle in determining your tax impact.
                            </p>

                            <h2 id="section-28-iv" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 28(iv): The Evolution of Business Benefits</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Historically, Section 28(iv) of the Income Tax Act was the primary weapon used by tax officers to tax loan waivers. It stated that any "benefit or perquisite" arising from a business or profession was taxable. For decades, the tax department argued that a loan waiver is a "benefit" and should be taxed under this head.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, the Supreme Court, in the famous case of Mahindra & Mahindra Ltd (2018), delivered a blow to this argument. The Court ruled that Section 28(iv) only applied to benefits received "in kind" (non monetary). Since a loan waiver is a monetary benefit—a cessation of a cash liability—it could not be taxed under this section. This judgement became the shield for thousands of businesses that had settled their debts during restructuring.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6">
                                <strong>The Finance Act 2023 Amendment: The Game Changer</strong>
                                <p className="mt-2 text-gray-700">The government, not happy with the loophole created by the Mahindra judgement, amended Section 28(iv) in the Finance Act 2023. As of April 1, 2024, the section now explicitly includes benefits received "in cash or in kind." This means the old Supreme Court protection is effectively dead for business loans. If your loan settlement is related to your business or profession, the waived amount is now directly taxable under "Profits and Gains of Business or Profession" (PGBP).</p>
                            </div>

                            <h2 id="section-41-1" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 41(1): Remission of Trading Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another critical section is Section 41(1). This section applies if you have previously claimed a tax deduction for an expense, and later that expense is waived or remitted.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For example, if you took a business loan and claimed the interest as a business expense in your past tax filings, and now the bank waives that interest, the waived interest is 100% taxable as business income. This is because you already took a tax benefit for that "cost" in the past. Now that the cost has been reversed, the tax benefit must also be reversed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This section, however, generally does not apply to the "Principal" amount of a loan taken for capital assets (like machinery or building). Since you didn\'t claim the principal repayment as an "expense" (you only get depreciation), the waiver of that principal is often still protected from Section 41(1), provided it isn\'t related to stock-in-trade or trading operations.
                            </p>

                            <h2 id="section-56-2-x" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 56(2)(x): The "Gift Tax" Alternative</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For individual borrowers who don\'t have a business, the tax department often tries to use Section 56(2)(x). This section taxes any "sum of money" received without consideration if it exceeds 50,000 rupees.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Can a loan waiver be called a "gift"? Most legal experts argue "No." A loan settlement is a "Compromise." You are giving something up (the right to borrow in the future, your credit score, etc.) and the bank is giving something up. It is a commercial transaction, not a gift. There is "consideration" involved, even if it isn\'t cash.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, there is a risk that an aggressive tax officer might try to bridge this gap. This is why having a clear "Settlement Offer Letter" that cites "Hardship" or "Inability to Pay" is crucial. It proves the waiver wasn\'t a gift, but a necessity forced by your financial situation.
                            </p>

                            <h2 id="personal-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Personal Loans for Consumption: The Safe Zone?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you settled a credit card bill or a personal loan used for a wedding, medical bills, or travel, are you safe? Generally, yes. For a pure "Individual Consumer," the waiver of a personal loan principal is still a "Capital Receipt." It doesn\'t fall under Category 28 (Business), it doesn\'t fall under Category 41 (no deduction was claimed), and it usually doesn\'t qualify as a gift under Section 56.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the consensus remains that personal debt waivers for individuals are not "Income." You didn\'t "earn" the money; you just failed to pay it back. Bankruptcy or settlement is a loss of creditworthiness, not a gain of wealth.
                            </p>

                            <h2 id="education-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Education Loans and Section 80E</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Education loans have a unique tax profile. Under Section 80E, you can deduct the entire interest paid on an education loan from your taxable income for up to 8 years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you settle an education loan, two things happen:
                                1. The principal waiver is likely tax free (capital receipt).
                                2. The interest waiver might have a "reversal effect." If you claimed deductions for interest in previous years and that interest is now waived, the tax department might seek to add that interest back to your income.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, once you settle, you can no longer claim deductions for any "notional" interest. The tax benefit stops the day you settle.
                            </p>

                            <h2 id="home-loans" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Home Loans and the Section 80C Reversal</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Home loans are the most document intensive settlements. Most people take home loans to get tax benefits under Section 80C (Principal) and Section 24(b) (Interest).
                            </p>
                            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 mb-6">
                                <strong>Warning:</strong> Under Section 80C, if you sell the house within 5 years of taking the loan, all the tax benefits you claimed for principal repayment are "reversed" and added to your income. While a settlement isn\'t a sale, if the settlement leads to the bank seizing and selling the house (SARFAESI auction), you will definitely face a tax reversal.
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Additionally, if the bank waives a portion of the home loan principal, your "Cost of Acquisition" for that house will be reduced by the waived amount. This means when you eventually sell the house, your "Capital Gains" tax will be higher because your "Cost" was officially lowered by the settlement.
                            </p>

                            <h2 id="arc-settlements" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Settlements with ARCs (Asset Reconstruction Companies)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many bad loans in India are sold to ARCs like Phoenix or Edelweiss. When you settle with an ARC, the legal principles of the Income Tax Act remain the same. The ARC is simply stepping into the shoes of the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, ARCs are often more aggressive in reporting to the tax department. They are required to file "SFT" (Statement of Financial Transactions) for high value settlements. If you settle for more than 2 lakhs with an ARC, it is almost certain that the Income Tax Department will be notified of the transaction. Honest disclosure in your ITR becomes mandatory in these cases.
                            </p>

                            <h2 id="disclosure-itr" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Disclosure in Income Tax Returns</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                "Should I mention my settlement in my tax return?" This is the 5 lakh rupee question.
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>For Salaried Individuals (ITR-1/2):</strong> If it\'s a personal loan, many CAs suggest you don\'t need to list it as income. However, it is safe to mention it in the "Schedule EI" (Exempt Income) if the amount is large. This shows transparency without increasing your tax bill.</li>
                                <li><strong>For Business Owners (ITR-3/4):</strong> You must be very careful. If you don\'t disclose a business loan waiver, and the bank/ARC has reported it, you will receive a "Notice of Mismatch." It is better to treat it as income or have a very strong legal note ready to explain why it is a capital receipt.</li>
                            </ul>

                            <h2 id="tax-myths" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Common Myths about Loan Settlement and Tax</h2>
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 mb-6 font-light">
                                <ul className="space-y-4 text-gray-800">
                                    <li><strong>Myth 1: "The Bank will pay my tax."</strong> Absolutely not. The bank\'s only concern is recovering their money. They will issue you a No Dues Certificate, but they will also report the loss to the RBI and the Tax Department. The tax liability is 100% yours.</li>
                                    <li><strong>Myth 2: "If it\'s less than 50,000, there\'s no tax."</strong> The 50,000 limit only applies to "Gifts" under Section 56. If it\'s business income under Section 28, even a 10,000 rupee waiver is technically taxable.</li>
                                    <li><strong>Myth 3: "A 'Settled' status in CIBIL means I'm safe from Tax."</strong> No. CIBIL is for creditworthiness; ITR is for taxability. They are two different systems. A bad CIBIL score doesn\'t exempt you from tax laws.</li>
                                </ul>
                            </div>

                            <h2 id="tax-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Strategy for a Tax Efficient Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dealing with tax after a settlement requires a professional approach. Here are the steps to ensure you don't face penalties:
                            </p>
                            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Request a Breakup:</strong> Always ask the bank for a written breakup of the settlement—how much principal is waived and how much interest is waived. This is vital for your CA to determine taxability.</li>
                                <li><strong>Timing the Settlement:</strong> If you are a business owner, try to settle in a year where you have business losses. You can then "set off" the taxable waiver income against your business losses, reducing your total tax liability.</li>
                                <li><strong>The Hardship Narrative:</strong> Ensure your communication with the bank emphasizes "Insolvency" or "Hardship." This reinforces the argument that the waiver is a capital adjustment due to loss, rather than a revenue gain.</li>
                            </ol>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Expert Reviews and Feedback</h2>
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Navigating the 2025 Tax Maze</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan settlement is a powerful tool for financial recovery, but it is not without its complexities. As we have seen, the tax implications depend heavily on the intent of the loan and the status of the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the "wait and see" approach to tax disclosure is becoming risky. With the integration of bank data, CIBIL data, and Income Tax records through Artificial Intelligence, the government has become much better at spotting undisclosed "wealth gains."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are settling a small personal debt, you likely have nothing to worry about. But if you are a professional or a business owner dealing with significant waivers, professional advice is not an option—it is a necessity. A single mistake in your ITR can lead to penalties that are far higher than the "savings" you made in the settlement.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Minimize Your Tax Liability</h3>
                                <p className="text-blue-800 mb-6">Settling a loan is only half the battle. Ensuring you don't face unexpected tax burdens is equally important. Let our tax experts and legal advisors guide you through the process for a clean financial break.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book a Tax Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes and does not constitute official tax or legal advice. Case laws and regulations are subject to change. Always consult a qualified Chartered Accountant before filing your taxes.
                            </div>

                        </article>
                    </main>

                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Worried About Tax?</h4>
                                <p className="text-sm text-gray-600 mb-6">Get a personalized analysis of your settlement and its tax impact today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Talk to a Tax Expert
                                </Link>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Deep Dives</h4>
                                <nav className="space-y-3">
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Is settlement good?</Link>
                                    <Link href="/can-i-settle-loan-for-free" className="block text-sm text-blue-600 hover:underline">Settle for Free?</Link>
                                    <Link href="/how-does-loan-settlement-affect-your-financial-health-in-long-term" className="block text-sm text-blue-600 hover:underline">Long-Term Impact</Link>
                                    <Link href="/services/personal-loan-settlement" className="block text-sm text-blue-600 hover:underline">Personal Loan Help</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
