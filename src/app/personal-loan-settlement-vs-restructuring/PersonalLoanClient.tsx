'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
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
        setOpenFaq(openFaq === index ? null : index);
    };

    const navLinks = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'understanding-the-gap', label: 'Diagnosing the Problem' },
        { id: 'what-is-restructuring', label: 'Loan Restructuring Explained' },
        { id: 'what-is-settlement', label: 'Loan Settlement Explained' },
        { id: 'case-study-one', label: 'Case Study: Cash Flow Crisis' },
        { id: 'case-study-two', label: 'Case Study: Total Insolvency' },
        { id: 'cibil-impact-comparison', label: 'CIBIL Impact Comparison' },
        { id: 'legal-implications', label: 'Legal Implications' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What is the main difference between personal loan settlement vs restructuring?",
            answer: "Restructuring modifies your existing loan terms to reduce your EMI, but you still pay the full principal amount over a longer period. Settlement is an agreement where the bank accepts a one-time partial payment to close the account, effectively waiving off the remaining balance."
        },
        {
            question: "How can I reduce personal loan EMI immediately?",
            answer: "To reduce personal loan EMI, you must apply for restructuring with your bank. This usually involves extending the loan tenure or lowering the interest rate. Keep in mind that a longer tenure means you might pay more total interest over time."
        },
        {
            question: "Should I settle or restructure my loan if I lost my job?",
            answer: "If you lost your job and expect to be unemployed for a long time, settlement might be the only viable path since you cannot sustain any monthly payments. If you expect a new job soon, restructuring can provide temporary breathing room."
        },
        {
            question: "Does restructuring negatively impact my CIBIL score?",
            answer: "Yes, restructuring is reported to credit bureaus and will lower your CIBIL score, though usually less severely than a settlement. It signals to future lenders that you struggled to meet your original loan obligations."
        },
        {
            question: "Will the bank automatically offer me a settlement?",
            answer: "No. Banks prefer restructuring because they recover the full principal. Settlement is only offered when the bank is convinced that recovering the full amount is impossible, usually after several months of non-payment."
        },
        {
            question: "Can I get a new loan after a settlement?",
            answer: "It is very difficult to get an unsecured loan immediately after a settlement because your CIBIL report will show a 'Settled' status. You will need to rebuild your credit over a few years using secured credit options."
        },
        {
            question: "Can I get a new loan after restructuring?",
            answer: "While easier than after a settlement, securing a new loan after restructuring is still challenging. Lenders will view you as a higher risk until you demonstrate a consistent repayment history on the restructured terms."
        },
        {
            question: "What happens if I default on a restructured loan?",
            answer: "Defaulting on a restructured loan is considered a severe breach of contract. The bank will likely initiate aggressive recovery proceedings, and your chances of negotiating a favorable settlement afterward drop significantly."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Delhi", stars: 5, comment: "I was confused between personal loan settlement vs restructuring. CredSettle analyzed my cash flow and helped me get a restructured EMI that saved my business from going under." },
        { name: "Ananya Patel", location: "Ahmedabad", stars: 5, comment: "I thought I just needed to reduce personal loan EMI, but my debt was too high. The team guided me through a settlement process that wiped out 60% of my principal." },
        { name: "Rajesh Kumar", location: "Bangalore", stars: 4, comment: "Clear, objective advice on whether I should settle or restructure my loan. No false promises, just solid legal and financial guidance." }
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
        'name': 'Personal Loan Restructuring and Settlement Advisory',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-pl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-pl" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Debt Diagnosis Toolkit
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Personal Loan Settlement <br />
                        <span className="text-blue-300">vs Restructuring</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Should you settle or restructure your loan? Discover how to diagnose your financial sickness and pick the right remedy to reduce your EMI or wipe out principal.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Expert Diagnosis
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
                                        Settlement vs Restructuring
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
                        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Analysis Guide</h3>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block py-1.5 px-3 rounded-full transition-all ${activeId === link.id
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
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Crossroad of Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower is unable to pay their monthly Equated Monthly Installment (EMI), panic sets in. The immediate reaction is to contact the bank and ask for a way out. However, many borrowers use the wrong terminology. They walk into a bank branch asking for a settlement when they actually just want a lower monthly payment, which is restructuring. Conversely, some borrowers accept a restructured high interest loan to reduce personal loan EMI, when they actually qualify for a massive principal wipeout through a formal settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding the fundamental difference between personal loan settlement vs restructuring is critical. These are two completely different financial and legal remedies designed for two completely different types of financial sickness. Choosing the wrong path can either destroy your credit score unnecessarily or trap you in a cycle of debt that you can never realistically escape.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide will objectively compare both options, helping you diagnose your own financial situation. By the end of this article, you will have a clear answer to the question: should I settle or restructure my loan?
                            </p>

                            <h2 id="understanding-the-gap" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Diagnosing the Problem: Cash Flow Issue vs. Total Insolvency</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before exploring the solutions, you must accurately diagnose your financial illness. Lenders assess your situation based on your intent to pay and your capacity to pay. If you have the intent but lack the immediate capacity to meet the current EMI, you have a cash flow issue. If you lack the capacity to pay the principal amount ever again, you are facing total insolvency.
                            </p>
                            
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Core Distinction:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Cash Flow Issue:</strong> You have a steady income, but sudden expenses (like a medical emergency) or a slight salary reduction have made the current EMI unaffordable. You can still pay the total debt, just not as fast.</li>
                                    <li><strong>Total Insolvency:</strong> You have lost your primary source of income entirely, your business has failed, or you are buried under multiple loans whose combined EMIs exceed your total monthly income. You mathematically cannot repay the principal.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you only have a cash flow issue, restructuring is the appropriate remedy. It stretches the timeline, lowering the burden. If you are facing total insolvency, restructuring is merely delaying the inevitable default. In cases of insolvency, settlement is the painful but necessary surgical procedure to amputate the debt and save your financial future.
                            </p>

                            <h2 id="what-is-restructuring" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Loan Restructuring Explained</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan restructuring is a modification of the original terms of your loan agreement. The primary goal is to reduce personal loan EMI to a level that you can comfortably afford, thereby preventing the account from turning into a Non Performing Asset (NPA). 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a bank agrees to restructure your loan, they are not forgiving any of the money you borrowed. They are simply changing the math to make the monthly payments smaller. This is typically achieved in two ways. First, the bank may extend the tenure of the loan. If you had a three year loan, they might stretch it to five years. By spreading the principal over more months, the monthly payment drops. Second, the bank might agree to temporarily lower the interest rate or grant a moratorium period where you only pay the interest component for a few months.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is vital to understand that stretching the loan tenure means you will accrue interest for a longer period. Ultimately, you will pay significantly more total interest over the life of the loan than you originally planned. Restructuring is not a discount. It is a convenience fee for extra time.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Important Notice: Banks will thoroughly scrutinize your financials before approving a restructuring request. They want proof that the new, lower EMI is sustainable for you. If your income has dropped to zero, they will likely reject the restructuring application because even a reduced EMI is impossible to collect.
                            </p>

                            <h2 id="what-is-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Loan Settlement Explained</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan settlement is a far more aggressive intervention. It is an agreement between you and the lender wherein the lender accepts a lump sum payment that is substantially less than the total outstanding balance, and in return, agrees to close the account and write off the remaining debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Unlike restructuring, settlement involves actual forgiveness of debt. The bank takes a financial loss. Why would a bank agree to this? Banks are pragmatic institutions. When a borrower is in a state of total insolvency and has defaulted for several months, the bank categorizes the loan as an NPA. They must set aside capital reserves for this bad debt, which hurts their profitability. Furthermore, legal recovery through the courts is time consuming and expensive.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank believes that the borrower has no assets to seize and no income to garnish, they realize that recovering twenty percent of the loan today is better than spending money on lawyers to recover nothing tomorrow. Settlement is a damage control strategy for the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The catch is that settlement destroys your credit rating. The bank will report the account as Settled to CIBIL and other bureaus. This red mark serves as a warning to all future lenders that you previously caused a financial loss to a bank. Getting new unsecured credit becomes extremely difficult for several years following a settlement.
                            </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study One: The Cash Flow Crisis</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the situation of Rohan, a software engineer in Bangalore. Rohan took a personal loan of ten lakhs to fund his sister's wedding. His EMI was thirty five thousand rupees, which he paid comfortably from his one lakh twenty thousand rupee monthly salary.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Unexpectedly, Rohan's father suffered a severe medical emergency. The health insurance coverage was exhausted quickly, and Rohan had to start paying forty thousand rupees a month out of pocket for ongoing treatments and medications. Suddenly, his disposable income evaporated. The thirty five thousand rupee EMI became an unbearable burden. Rohan started missing payments, and the recovery calls began.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Rohan panicked and thought he needed to ask for a settlement. However, when he consulted a financial advisor, the diagnosis was clear. Rohan still had his high paying job. He had the intent to pay and long term capacity, but an immediate cash flow crisis.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The advisor helped Rohan apply for restructuring. He presented the medical bills to the bank, proving the temporary financial hardship. The bank agreed to extend his loan tenure by three years. This brought his EMI down from thirty five thousand to a manageable fifteen thousand rupees. Rohan was able to afford his father's medical care while continuing to service his debt without defaulting further. While his CIBIL score took a minor hit due to the restructuring flag, he avoided the catastrophic damage of a settlement and kept his financial reputation largely intact.
                            </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study Two: Total Insolvency</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Now consider Priya, who ran a small boutique clothing store in Delhi. She took an unsecured business loan of fifteen lakhs and used personal credit cards to fund inventory. Her total monthly EMI obligations reached fifty thousand rupees.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A sudden economic downturn hit the retail sector hard. Foot traffic collapsed, and Priya's monthly revenue dropped to barely thirty thousand rupees, not even enough to cover rent and electricity, let alone her massive EMIs. She shut down the boutique. Priya had no income, no savings, and twenty lakhs in unsecured debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank initially offered to restructure her loan, suggesting an EMI reduction to thirty thousand rupees. A desperate borrower might accept this to stop the harassment calls. But Priya realized that promising thirty thousand when she had zero income was mathematical suicide. Accepting the restructuring would only delay the inevitable default and reset the clock on legal action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Priya opted for settlement. She endured six months of severe collection pressure. During this time, the loan turned into an NPA. She gathered a small lump sum by selling off leftover inventory and borrowing from family. When the bank realized her business was defunct and she had no attachable assets, they agreed to a one time settlement of five lakhs against the fifteen lakh principal. Her CIBIL score plummeted, and her access to unsecured credit was revoked, but she was legally free from a debt she could never have repaid. For Priya, settlement was the only realistic exit strategy.
                            </p>

                            <h2 id="cibil-impact-comparison" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">CIBIL Impact Comparison</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most significant factor when deciding between personal loan settlement vs restructuring is the resulting damage to your credit profile. Both actions signal distress, but the severity differs drastically.
                            </p>
                            
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Credit Score Implications</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">A</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Restructuring Impact</h5>
                                            <p className="text-sm text-gray-600 m-0">When a loan is restructured, the bank reports it to CIBIL with a specific flag, often termed Restructured. Your score will drop, typically between fifty to eighty points. Lenders will see that you could not handle the original terms. However, as you make the new, lower EMI payments consistently over the next year, your score will gradually begin to recover. It shows responsibility despite hardship.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">B</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Settlement Impact</h5>
                                            <p className="text-sm text-gray-600 m-0">Settlement is a major derogatory mark. The account status will be permanently marked as Settled. Your CIBIL score will drop drastically, often by more than one hundred points, pushing you into the high risk category. The Settled status remains on your report for up to seven years. During this time, standard banks and NBFCs will almost certainly automatically reject any applications for personal loans, credit cards, or unsecured business loans.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10">
                                If you ask should I settle or restructure my loan, the answer often hinges on your future need for credit. If you plan to apply for a home loan or need business funding in the next two to three years, you must avoid settlement at all costs and attempt restructuring. If you are drowning in debt and survival is your only priority, the credit score damage of a settlement is a secondary concern.
                            </p>

                            <h2 id="legal-implications" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Legal Implications and Recovery Tactics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The legal environment surrounding these two options is complex. When you formally apply for restructuring, you are actively communicating with the bank and showing a willingness to cooperate. Banks generally pause aggressive recovery tactics, such as daily calls or sending agents to your home, while a restructuring application is under review. If approved, the account becomes regularized, and all recovery actions cease entirely.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Settlement is a battlefield. Banks do not offer settlements willingly. They offer settlements when they are convinced they have no other choice. This means you have to endure the storm of the recovery process. You will face relentless calls, intimidating legal notices, and potentially even arbitration proceedings or cases filed under the Payment and Settlement Systems Act if a bounce cheque is involved.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating the settlement process requires immense psychological fortitude and a deep understanding of your legal rights. You must know how to counter illegal harassment tactics by recovery agents and how to interpret complex legal jargon in demand notices. This is why many borrowers facing total insolvency seek the guidance of professional debt settlement agencies or legal counsel. These professionals can shield the borrower from harassment and negotiate a favorable settlement percentage based on the borrower's verifiable financial hardship.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success and Feedback</h2>
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-lg overflow-hidden bg-white">
                                        <button 
                                            onClick={() => toggleFaq(index)}
                                            className="w-full text-left p-4 focus:outline-none flex justify-between items-center bg-gray-50 hover:bg-gray-100 transition-colors"
                                        >
                                            <h3 className="font-bold text-lg text-gray-900 pr-4 m-0">{faq.question}</h3>
                                            <svg 
                                                className={`w-6 h-6 text-blue-600 transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} 
                                                fill="none" 
                                                stroke="currentColor" 
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-[500px] opacity-100 p-4 border-t border-gray-100' : 'max-h-0 opacity-0 overflow-hidden px-4'}`}
                                        >
                                            <p className="text-gray-600 leading-relaxed font-normal m-0">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Ready to Make the Right Choice?</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our legal and financial experts will analyze your debt profile and help you decide whether restructuring or settlement is your optimal path to financial freedom.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Get Your Free Assessment
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
                        <div className="sticky top-24 self-start space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-2 mt-1 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-xs mb-4 leading-relaxed px-1">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-sm border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/services/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/business-loan-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Business Loan Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/credit-card-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Credit Card Settlement
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-check-the-cibil-defaulter-list" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            CIBIL Defaulter Check
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
