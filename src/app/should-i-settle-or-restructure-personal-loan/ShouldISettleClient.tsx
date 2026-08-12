'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function ShouldISettleClient() {
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
        { id: 'core-differences', label: 'Core Differences' },
        { id: 'when-to-restructure', label: 'When to Restructure' },
        { id: 'when-to-settle', label: 'When to Settle' },
        { id: 'cibil-score-impact', label: 'CIBIL Score Impact' },
        { id: 'financial-relief-analysis', label: 'Financial Relief Analysis' },
        { id: 'case-study-restructuring', label: 'Case Study 1: Restructuring' },
        { id: 'case-study-settlement', label: 'Case Study 2: Settlement' },
        { id: 'legal-implications', label: 'Legal Implications' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What is the main difference between settlement and restructuring?",
            answer: "Restructuring modifies your existing loan terms to lower the monthly EMI, while settlement allows you to close the loan entirely by paying a negotiated lump sum amount that is less than the total outstanding balance."
        },
        {
            question: "Does restructuring negatively impact my CIBIL score?",
            answer: "Yes, restructuring does impact your credit score because it indicates that you could not honor the original terms of the agreement. However, the impact is generally less severe than a settlement."
        },
        {
            question: "How long does a settlement stay on my credit report?",
            answer: "A settlement will be marked as 'Settled' on your CIBIL report and will remain visible for up to seven years. It significantly lowers your score and makes it very difficult to obtain unsecured credit in the near future."
        },
        {
            question: "Can I get a new personal loan after restructuring an old one?",
            answer: "It is difficult but not impossible. Lenders will view you as a higher risk borrower. You might have to pay higher interest rates or provide collateral until you demonstrate a solid repayment history on the restructured loan."
        },
        {
            question: "What happens if I miss an EMI on a restructured loan?",
            answer: "Missing an EMI on a restructured loan is viewed very seriously by banks. They may cancel the restructuring agreement, demand the entire outstanding amount immediately, and initiate aggressive recovery proceedings."
        },
        {
            question: "Do banks always agree to settle a personal loan?",
            answer: "No, banks are not obligated to settle a loan. They typically only consider settlement if the account has been classified as a Non Performing Asset (NPA) and they believe that recovery through normal channels is impossible."
        },
        {
            question: "Is there any tax implication on the waived amount in a settlement?",
            answer: "The amount waived by the bank during a settlement is technically considered a benefit or income. You should consult with a tax advisor regarding the potential tax liabilities on the forgiven debt amount."
        },
        {
            question: "Can I convert a settled account to a closed account later?",
            answer: "Yes, if you manage to arrange the funds later, you can approach the bank to pay the waived amount. Once the full original due amount is paid, the bank will update the status from 'Settled' to 'Closed'."
        },
        {
            question: "Will restructuring reduce the total interest I pay?",
            answer: "Generally, no. Restructuring usually extends the loan tenure, which means you will end up paying more total interest over the life of the loan, even if the monthly EMI is reduced."
        },
        {
            question: "Should I hire a professional agency to negotiate a settlement?",
            answer: "If you are facing severe harassment, have multiple defaults, or do not understand the legal framework, hiring a professional and legitimate agency can help you negotiate a better waiver and protect you from abusive recovery tactics."
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

    return (
        <>
            <Script id="faq-schema-should-i-settle" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                        Financial Relief Advisory
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Should I Settle or <br />
                        <span className="text-blue-300">Restructure My Personal Loan?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Confused between loan settlement and EMI restructuring? Learn the difference, the impact on your CIBIL score, and which option provides better financial relief.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Evaluate Settlement vs Restructuring Options
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
                                        Settle or Restructure
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Navigation</h3>
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
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction to Financial Relief Strategies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When financial hardship strikes, meeting your monthly EMI obligations can suddenly feel like an impossible task. Borrowers facing job losses, medical emergencies, or severe business downturns often find themselves trapped in a cycle of mounting debt and aggressive recovery calls. At this critical juncture, making the right decision is vital. The core question many borrowers ask is: Should I settle or restructure my personal loan?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Choosing the right path requires a deep understanding of your current financial capacity and your future financial goals. Both loan settlement and EMI restructuring are tools designed to offer relief, but they operate on entirely different principles and have vastly different consequences for your credit profile. Making the wrong choice could result in years of financial restriction or immediate, unbearable pressure on your monthly budget.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide is designed to dissect every aspect of personal loan settlement versus EMI restructuring. We will explore the mechanical differences, the severe impacts on your CIBIL score, the exact scenarios where one option outshines the other, and the long term legal implications of each choice. By the end of this extensive document, you will have the clarity needed to make a sound, strategic decision regarding your unsecured debt.
                            </p>

                            <h2 id="core-differences" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Understanding the Core Differences</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To make an informed decision, you must first understand the fundamental mechanics of both options. The distinction lies in whether you are trying to buy more time to pay the full amount or trying to permanently eliminate a portion of the debt you cannot afford.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What is EMI Restructuring?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan restructuring is an official modification of the original terms of your loan agreement. When you restructure a loan, the bank agrees to alter the parameters of your repayment schedule to make the monthly burden lighter. This is typically achieved by extending the tenure of the loan, reducing the interest rate temporarily, or providing a short moratorium period where payments are paused.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most important characteristic of restructuring is that you are still legally obligated to repay the entire principal amount borrowed, along with the accrued interest. The bank is not forgiving any portion of your debt. They are merely stretching it out over a longer period. While this immediately reduces your monthly EMI, it almost always guarantees that you will pay a higher total interest amount over the life of the loan.
                            </p>

                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What is Loan Settlement?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan settlement, on the other hand, is a drastic measure taken when a borrower is completely incapable of repaying the full outstanding amount. In a settlement, you negotiate with the lender to pay a single, lump sum amount that is significantly lower than the actual balance owed. Once this agreed amount is paid, the bank considers the loan account closed and writes off the remaining balance as a loss.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A settlement represents a permanent reduction in your total debt obligation. However, because the bank is taking a financial loss, this action is reported negatively to the credit bureaus. The loan is not marked as closed in a standard manner; it is marked explicitly as settled, which serves as a major warning flag to all future lenders.
                            </p>

                            <h2 id="when-to-restructure" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">When to Choose EMI Restructuring</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Restructuring is a tool for temporary hardship, not permanent financial ruin. It is the preferred option when you are facing a short term cash flow problem but fully anticipate a return to normal income levels.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Ideal Scenarios for Restructuring</h3>
                            <ul className="space-y-3 text-gray-700 font-normal list-disc pl-5 mb-6">
                                <li><strong>Temporary Income Reduction:</strong> If you have taken a pay cut but expect to return to your previous salary soon, restructuring buys you the necessary time.</li>
                                <li><strong>Short Term Medical Leave:</strong> If an illness has temporarily halted your income but your job is secure, extending the loan tenure can bridge the gap.</li>
                                <li><strong>Preserving Future Credit:</strong> If you plan to apply for a home loan, car loan, or business capital in the next three to five years, restructuring protects your creditworthiness far better than a settlement.</li>
                                <li><strong>Manageable Total Debt:</strong> If your total debt is relatively small and the only issue is the monthly cash flow, stretching the payments is a logical choice.</li>
                            </ul>
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Strategic Insight: Restructuring requires proof of intent. Banks will scrutinize your bank statements to verify your temporary hardship. If they see frivolous spending, they will deny the restructuring request. You must demonstrate that you are cutting back on expenses and prioritizing loan repayment.
                            </p>

                            <h2 id="when-to-settle" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">When to Choose Loan Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Settlement is the financial equivalent of a reset button. It is reserved for situations of severe, prolonged, and unrecoverable financial distress. It is not an easy way out, but rather a necessary mechanism to prevent complete bankruptcy.
                            </p>
                            
                            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-4">Ideal Scenarios for Settlement</h3>
                            <ul className="space-y-3 text-gray-700 font-normal list-disc pl-5 mb-6">
                                <li><strong>Permanent Job Loss or Disability:</strong> If your ability to earn an income has been permanently severely reduced, you physically cannot meet the original or restructured terms.</li>
                                <li><strong>Massive Debt Burden:</strong> If your total unsecured debt exceeds your annual income and there is no mathematical path to repayment, settlement is the only viable exit strategy.</li>
                                <li><strong>Failed Business Ventures:</strong> Entrepreneurs who have heavily leveraged personal loans for a business that subsequently collapsed often have no choice but to settle the resulting debt.</li>
                                <li><strong>Severe Harassment:</strong> When recovery agents are disrupting your life, threatening your family, and causing severe mental agony, a structured settlement can quickly legally halt the harassment.</li>
                            </ul>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is crucial to understand that banks do not easily agree to settlements. They will exhaust every recovery tactic before accepting a loss. A settlement typically only becomes possible after the account has been delinquent for over 90 days and has been officially classified as a Non Performing Asset.
                            </p>

                            <h2 id="cibil-score-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Severe Impact on Your CIBIL Score</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most significant differentiator between restructuring and settlement is the long lasting damage inflicted upon your credit profile. Your CIBIL score is a reflection of your reliability as a borrower. Both actions signal distress, but the severity varies wildly.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Credit Profile Warning:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>The Restructuring Mark:</strong> A restructured loan is reported to the credit bureau. It shows lenders that you needed a modification to survive. While it drops your score by perhaps 40 to 60 points, you can rebuild it by making the new, lower payments consistently on time.</li>
                                    <li><strong>The Settlement Mark:</strong> A settled loan is a catastrophic event for your credit profile. The status changes to settled, and your score will plummet by 75 to 150 points immediately.</li>
                                    <li><strong>The Seven Year Stigma:</strong> The settled status remains on your report for up to seven years. During this time, almost all automated loan approval systems will reject your applications for unsecured credit.</li>
                                    <li><strong>Employment Verification:</strong> Many modern employers check credit reports for positions involving financial responsibility. A settled mark can negatively impact job prospects in the banking and finance sectors.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                If preserving your future borrowing capacity is paramount, you must explore every possible avenue for restructuring before even considering a settlement. Settlement is the nuclear option.
                            </p>

                            <h2 id="financial-relief-analysis" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Deep Financial Relief Analysis</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond the credit score, we must analyze the mathematical reality of both options. The goal is financial relief, but the cost of that relief must be carefully calculated.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Cost of Restructuring:</strong> Imagine you have a personal loan of 5 Lakh with an EMI of 15,000 per month for three remaining years. If you restructure and extend the tenure to five years, your EMI might drop to 9,000. You gain 6,000 in monthly cash flow relief. However, over those extra two years, the interest continues to compound. The total amount you pay back to the bank will be significantly higher than the original agreement. You are buying time at a premium price.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Benefit of Settlement:</strong> Imagine the same 5 Lakh loan. You lose your job and cannot pay anything. The bank classifies the loan as an NPA. After tough negotiations, they agree to a settlement of 2.5 Lakh as a one time payment. You immediately save 2.5 Lakh. That is instant, massive financial relief. The cost, however, is your credit reputation for the next seven years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You must weigh the immediate cash savings of a settlement against the long term opportunity cost of being unable to borrow money for future needs like housing or education.
                            </p>

                            <h2 id="case-study-restructuring" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: The Power of Restructuring</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Amit Sharma, a 34 year old IT professional in Bangalore, faced a sudden medical emergency in his family. His monthly take home salary was 80,000, and his personal loan EMI was 25,000. The medical expenses completely drained his savings, and he was forced to take unpaid leave for two months to care for his father.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Amit knew he would return to work soon, but the immediate cash flow crisis meant he would definitely miss his next two EMIs. If he did nothing, the loan would default, recovery agents would call, and his excellent CIBIL score of 780 would be ruined.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Action Taken:</strong> Amit proactively approached his bank manager before the first default occurred. He submitted all medical records, proof of his unpaid leave, and a clear timeline for his return to work. He formally requested a restructuring of his loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Result:</strong> Recognizing his proactive approach and excellent past record, the bank agreed to restructure. They offered him a three month moratorium on principal payments, requiring him to pay only the much smaller interest component during the crisis. Furthermore, they extended his loan tenure by 12 months, which permanently reduced his EMI from 25,000 to 18,000 when full payments resumed. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Amit’s CIBIL score dipped slightly to 740 due to the restructuring flag, but he avoided a default. Within a year of consistent payments on the new schedule, his score climbed back to 765. He preserved his financial reputation while managing a severe temporary crisis.
                            </p>

                            <h2 id="case-study-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: The Necessity of Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya Patel, a 42 year old small business owner in Mumbai, took a heavy personal loan of 12 Lakh to expand her boutique. Unfortunately, severe supply chain disruptions and a changing retail market caused her business to collapse entirely. She was forced to shut down the boutique, leaving her with no income and a massive debt.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya defaulted on her EMIs. Within three months, the bank classified the account as an NPA. The recovery process began aggressively. Agents visited her home, calling her relatives and causing extreme mental distress. Priya was terrified and completely out of options. Restructuring was impossible because she had zero income to support even a reduced EMI.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Action Taken:</strong> Recognizing the severity of the situation, Priya sought help from a professional debt relief agency. The agency immediately sent a legal notice to the bank to halt the physical harassment, citing RBI guidelines. They then began the grueling process of negotiating a settlement based on extreme financial hardship.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Result:</strong> After several weeks of intense negotiation, proving Priya’s absolute inability to pay the full amount, the bank agreed to a one time settlement of 4.5 Lakh. Priya arranged this amount by liquidating some personal jewelry and borrowing from close family members. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                The loan was officially settled. The harassment stopped immediately. Priya’s CIBIL score crashed to 580, effectively locking her out of the formal credit market for years. However, she was free from the crushing weight of a 12 Lakh debt and could finally focus on rebuilding her life from scratch without the constant fear of recovery agents. The settlement saved her sanity and prevented total financial destruction.
                            </p>

                            <h2 id="legal-implications" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Understanding the Legal Implications</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Both restructuring and settlement involve formal legal agreements. You must never rely on verbal promises from bank employees or recovery agents. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you agree to a restructuring plan, ensure you receive a new, updated loan schedule document detailing the revised EMI, new tenure, and any changes to the interest rate. If you fail to meet the terms of this new agreement, the bank has the right to revoke the restructuring and demand immediate payment of the entire original balance.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the case of a settlement, the legal documentation is even more critical. You must secure a formal Settlement Letter on the bank’s official letterhead, signed by an authorized officer. This letter must explicitly state the agreed settlement amount, the deadline for payment, and a clear clause stating that upon receipt of this amount, the bank waives the remaining balance and closes the account. Never make a settlement payment without this legally binding document in hand.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating these legal waters can be treacherous. Banks have vast legal departments protecting their interests. As a borrower in distress, understanding your rights under the RBI guidelines is your only shield against exploitation.
                            </p>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Make the Right Choice for Your Future.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our expert consultants specialize in analyzing your financial profile and guiding you toward the best possible resolution for your unsecured debt.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Start Your Free Strategy Call
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-xs mb-5 leading-relaxed px-1">
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
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-3 mb-5">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            MSME Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Default Notice Help
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
