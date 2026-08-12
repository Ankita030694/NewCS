'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function CannotPayPersonalLoanEmiClient() {
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
        { id: 'initial-steps', label: 'Immediate Action Steps' },
        { id: 'legal-implications', label: 'Understanding Legal Consequences' },
        { id: 'harassment-protection', label: 'Stopping Recovery Agent Harassment' },
        { id: 'case-study-one', label: 'Case Study: Job Loss and Recovery' },
        { id: 'debt-settlement', label: 'Exploring Debt Settlement' },
        { id: 'restructuring-options', label: 'Loan Restructuring vs Settlement' },
        { id: 'case-study-two', label: 'Case Study: Medical Emergency Crisis' },
        { id: 'negotiation-strategy', label: 'How to Negotiate with Banks' },
        { id: 'cibil-impact', label: 'Impact on Your CIBIL Score' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What happens if I cannot pay my personal loan EMI this month?",
            answer: "Missing a single EMI will result in a late payment penalty and a minor drop in your CIBIL score. The bank will send automated reminders. It is critical to communicate with your lender immediately rather than ignoring their messages."
        },
        {
            question: "Can the bank send police to my house for unpaid EMI?",
            answer: "No. Defaulting on a personal loan is a civil matter, not a criminal offense. The bank cannot send the police or file an FIR for simple non payment. They can only initiate civil recovery proceedings through the courts."
        },
        {
            question: "How do I stop recovery agents from calling my workplace?",
            answer: "Under RBI guidelines, recovery agents are strictly prohibited from contacting your colleagues, relatives, or neighbors. If they do, you must record the calls and file a formal complaint with the bank nodal officer and the RBI Ombudsman."
        },
        {
            question: "Is it possible to settle a personal loan if I have no money?",
            answer: "Yes. If you can prove severe financial hardship, banks may agree to a one time settlement where they waive a significant portion of the principal and interest. However, this will negatively impact your credit score for the next few years."
        },
        {
            question: "Will I go to jail for not paying my personal loan in India?",
            answer: "No. You cannot go to jail for failing to repay an unsecured personal loan. Jail time is only possible in cases of proven financial fraud, such as submitting fake documents to obtain the loan, or if a cheque bounces under Section 138 of the Negotiable Instruments Act."
        },
        {
            question: "How long does a loan default stay on my CIBIL report?",
            answer: "A default or a settled account status will reflect on your CIBIL report for up to seven years. During this period, it will be extremely difficult to secure new credit cards or loans from mainstream financial institutions."
        },
        {
            question: "What is the difference between loan restructuring and loan settlement?",
            answer: "Restructuring involves modifying the terms of your loan, such as extending the tenure to reduce the EMI, without reducing the principal amount. Settlement involves paying a lump sum amount that is less than the total outstanding balance to close the account permanently."
        },
        {
            question: "Should I take another loan to pay off my current EMI?",
            answer: "Taking new debt to pay old debt is a dangerous cycle that often leads to a severe debt trap. It is always better to negotiate with your current lender for a hardship program or consider debt settlement if your financial situation is permanently altered."
        }
    ];

    const reviews = [
        { name: "Vikram Sharma", location: "Bangalore", stars: 5, comment: "I lost my job and had no money to pay my personal loan. The team helped me stop the harassment and negotiated a settlement that saved my peace of mind." },
        { name: "Priya Patel", location: "Ahmedabad", stars: 5, comment: "The detailed explanation of my legal rights gave me the confidence to face the recovery agents. I highly recommend their consultation services." },
        { name: "Arjun Singh", location: "Hyderabad", stars: 4, comment: "Excellent guidance on how to communicate with the bank during a financial crisis. Their strategy is extremely effective and transparent." }
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
        'name': 'CredSettle Financial Hardship Consultation',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '1240',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-cannot-pay-emi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-cannot-pay-emi" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Emergency Financial Guidance
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        I Cannot Pay My <br />
                        <span className="text-blue-300">Personal Loan EMI</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Discover your legal rights, learn how to stop recovery agent harassment, and explore proven strategies to negotiate a debt settlement with your bank.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Can't Afford Your EMI? Check Your Settlement Options
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
                                        Cannot Pay EMI
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Survival Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Facing the Reality of Unpaid EMIs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The realization that you cannot afford to pay your personal loan EMI can trigger immense anxiety. Life is unpredictable. Sudden job loss, medical emergencies, business failures, or unexpected family responsibilities can completely derail your financial stability in an instant. When you have no money to pay your personal loan, the fear of aggressive recovery agents and legal notices can become overwhelming.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, you are not alone, and you are not a criminal. A personal loan is an unsecured debt, which means it is not backed by collateral like your house or car. Defaulting on an unsecured loan is a civil breach of contract, not a criminal offense. The most important step you can take right now is to stop panicking and start planning. Ignoring the problem will only make it worse, but understanding your legal rights and financial options will give you the power to regain control of your life.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide is designed to walk you through exactly what you need to do when you are facing financial problems paying your loan. We will cover immediate action steps, the legal implications of defaulting, how to protect yourself and your family from recovery agent harassment, and the strategic pathways to resolving your debt, including loan restructuring and debt settlement. We will also explore real world case studies to show you how other borrowers successfully navigated similar crises.
                            </p>

                            <h2 id="initial-steps" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Immediate Action Steps When You Cannot Pay</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The moment you realize that your bank account lacks the funds for the upcoming EMI deduction, you must act strategically. Doing nothing and letting the Electronic Clearing Service mandate fail will result in immediate bounce charges from both your bank and the lending institution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your very first action should be to assess your overall financial situation. Calculate your essential living expenses, including rent, groceries, and medical necessities. These survival expenses must take absolute priority over unsecured debt payments. Once you have secured your basic needs, you must calculate exactly how much of a shortfall you are facing. Is this a temporary problem that will be resolved in a month or two, or is this a permanent reduction in your income?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Next, you must communicate with your lender before the payment date. Draft a formal letter or email to the branch manager or the customer service department. In this communication, clearly explain your financial hardship. Attach any relevant proof, such as a termination letter from your employer or hospital bills. Informing them in advance demonstrates your intent to repay and can sometimes prevent them from immediately classifying your account as high risk. Do not make promises you cannot keep, but do keep the lines of communication open.
                            </p>

                            <h2 id="legal-implications" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Understanding the Legal Consequences of Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the biggest fears borrowers face is the threat of legal action. Recovery agents often use intimidation tactics, claiming they will send the police to your home or file an FIR against you. It is crucial to understand the actual legal framework surrounding unsecured personal loans in India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you fail to pay your EMI for 90 consecutive days, the bank will classify your loan account as a Non Performing Asset. Once an account becomes a Non Performing Asset, the bank has the right to initiate civil recovery proceedings. They may send formal legal notices through their appointed advocates demanding the entire outstanding amount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is imperative to remember that defaulting on a personal loan is a civil matter. The police have no jurisdiction over civil debt disputes. You cannot be arrested or sent to jail simply because you lack the funds to repay a bank. The only scenario where criminal charges can be brought is if the bank can prove you committed fraud at the time of taking the loan, such as submitting forged income documents or fake identity proofs. If your documents were genuine and your default is purely due to financial hardship, you are legally safe from criminal prosecution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have issued post dated cheques that bounce, the bank may initiate proceedings under Section 138 of the Negotiable Instruments Act. However, with the widespread use of Electronic Clearing Service mandates, this is becoming less common for personal loans. Even in Section 138 cases, the courts primarily focus on recovering the money rather than imposing immediate jail sentences, provided you cooperate with the legal process.
                            </p>

                            <h2 id="harassment-protection" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Stopping Recovery Agent Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most distressing aspect of being unable to pay your personal loan EMI is dealing with aggressive recovery agents. Banks often outsource debt collection to third party agencies whose employees are heavily incentivized to extract money by any means necessary. This frequently leads to severe harassment, humiliation, and psychological abuse.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Your Anti Harassment Rights
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Privacy Protection:</strong> Agents cannot discuss your debt with your employer, colleagues, neighbors, or relatives.</li>
                                    <li><strong>Restricted Calling Hours:</strong> All calls must be made between 8:00 AM and 7:00 PM. Calls outside this window violate RBI rules.</li>
                                    <li><strong>No Verbal Abuse:</strong> Use of foul language, threats, or intimidation is strictly prohibited and punishable.</li>
                                    <li><strong>Right to Representation:</strong> You have the right to appoint a legal representative to handle all communication with the bank.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you face harassment, your first step is to document everything. Record all phone calls. If an agent visits your home or workplace, demand to see their official ID card and authorization letter from the bank. Do not let them enter your property without your permission. If they refuse to leave or create a scene, you have the right to call the local police and file a complaint for trespassing and public nuisance.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You should also file a formal written complaint with the Grievance Redressal Officer of the respective bank. If the bank fails to resolve the issue or stop the harassment within 30 days, you can escalate the matter to the Reserve Bank of India through their Integrated Ombudsman portal. The RBI takes a very strict stance against banks whose agents violate the fair practices code, and they can impose heavy penalties on the institution.
                            </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: Overcoming Job Loss and Recovery Pressure</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand how these strategies work in the real world, let us look at the case of Manish, a 34 year old IT professional based in Pune. Manish had taken a personal loan of 12 Lakhs to fund his sister's wedding. His monthly EMI was around 32,000 Rupees. He had been paying diligently for 18 months when his company suddenly announced mass layoffs, and Manish found himself unemployed.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For the first two months, Manish managed to pay the EMI by completely depleting his emergency savings. By the third month, his funds were exhausted. When he missed his first payment, the automated calls began. By the time he missed his second payment, aggressive recovery agents started calling him ten times a day, demanding immediate payment. The stress was paralyzing, and it began affecting his ability to search for a new job.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Manish decided to seek professional guidance. His first step was to send a formal registered letter to the bank's head office, attaching his termination letter and clearly stating his inability to pay due to sudden unemployment. When a recovery agent visited his apartment building and tried to discuss the debt with the security guard, Manish immediately filed a complaint with the bank's nodal officer, citing a breach of privacy under RBI guidelines. He also warned the bank that any further harassment would result in a complaint to the RBI Ombudsman.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The harassment stopped almost immediately. Manish secured a lower paying job four months later. While he could not afford the original EMI of 32,000 Rupees, he could afford a smaller amount. He approached the bank for a loan restructuring. Because he had documented his hardship and handled the situation professionally, the bank agreed to extend his loan tenure, reducing his monthly EMI to 18,000 Rupees. Manish avoided a complete default and retained his dignity throughout the crisis.
                            </p>

                            <h2 id="debt-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Exploring Debt Settlement Options</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your financial situation has changed permanently and there is no realistic prospect of paying the full outstanding balance, debt settlement becomes a viable option. Debt settlement is a mutual agreement between you and the bank where the bank agrees to accept a lump sum payment that is less than the total amount owed to close the account permanently.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks are not legally obligated to offer a settlement. They only consider this option when they are convinced that the borrower is facing genuine, severe financial hardship and that recovering the full amount is impossible. If the bank believes you have the money but are simply refusing to pay, they will pursue legal action instead. Therefore, proving your hardship is the most critical aspect of the settlement process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a loan is settled, the bank waives a portion of the principal or the accumulated interest and penalties. Depending on the severity of your situation and the age of the default, settlements can range anywhere from a 30 percent to a 70 percent reduction of the total outstanding amount. However, this financial relief comes with a significant consequence. The account will be reported as Settled on your CIBIL report, rather than Closed. This indicates to future lenders that you did not pay back the debt in full, which will severely impact your ability to get loans or credit cards for the next several years.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Settlement Strategy: Never accept a settlement offer over a phone call. Demand a formal, written settlement letter on the bank's official letterhead. The letter must explicitly state the agreed settlement amount, the payment timeline, and a clear confirmation that upon receiving this amount, the loan account will be permanently closed and no further dues will be claimed.
                            </p>

                            <h2 id="restructuring-options" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Loan Restructuring versus Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to distinguish between loan restructuring and debt settlement. Both are tools for managing financial hardship, but they have very different long term implications for your credit profile.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Loan restructuring involves modifying the original terms of your loan agreement to make the payments more affordable. This usually involves extending the tenure of the loan. For example, if you have a three year loan with an EMI of 20,000 Rupees, the bank might agree to extend the tenure to five years, dropping the EMI to 12,000 Rupees. In a restructuring scenario, you still pay back the entire principal amount, and often end up paying more total interest over the life of the loan.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The advantage of restructuring is that it prevents your account from becoming a Non Performing Asset. While a restructured loan will be noted on your credit report, it is viewed far less negatively than a default or a settlement. Once you complete the restructured payments, the account is marked as Closed in full. Restructuring is the best option if your financial setback is temporary or if you have simply taken a pay cut but still have a steady income.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt settlement, as discussed earlier, involves paying a reduced lump sum and having the remaining balance written off by the bank. Settlement is the last resort option for borrowers facing absolute financial devastation, where full repayment is mathematically impossible. It provides immediate relief from the debt burden but sacrifices your credit score in the process.
                            </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: The Medical Emergency Crisis</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the situation of Anjali, a 42 year old teacher from Delhi. She had an outstanding personal loan balance of 8 Lakhs. Tragically, her husband suffered a severe stroke, requiring prolonged hospitalization and expensive rehabilitation. Anjali had to exhaust all their savings and take unpaid leave from her job to care for him. She had absolutely no money to pay her personal loan EMI.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Anjali missed six consecutive payments. Her account was classified as a Non Performing Asset, and the total outstanding amount ballooned to over 9.5 Lakhs due to late payment penalties and accumulated interest. The recovery calls were relentless, adding immense stress to an already traumatic situation. Anjali knew she could not afford a loan restructuring because she had no surplus income whatsoever.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With the help of a debt consultant, Anjali gathered all her husband's medical records, hospital bills, and a letter from her school confirming her unpaid leave status. Her representative submitted a comprehensive hardship application to the bank's regional recovery head, proposing a one time settlement. They explained that Anjali could arrange a maximum of 3 Lakhs by borrowing from extended family members, and that this was the only money the bank could possibly recover.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank conducted an internal review and verified the medical documents. Realizing that pursuing legal action against a financially devastated borrower would be futile, the bank agreed to the settlement. They issued a formal settlement letter agreeing to close the 9.5 Lakh debt for a one time payment of 3.2 Lakhs. Anjali arranged the funds, paid the bank directly, and received a No Dues Certificate. While her CIBIL score dropped significantly, she successfully eliminated the 8 Lakh debt burden and could finally focus entirely on her husband's recovery without the terror of recovery agents.
                            </p>

                            <h2 id="negotiation-strategy" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">How to Strategically Negotiate with Banks</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiating with a massive financial institution can feel intimidating. Banks have dedicated teams of professionals trained to maximize recovery. To negotiate effectively, you must approach the process strategically and without emotion.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                First, build an airtight case for financial hardship. Gather your termination letters, medical bills, bank statements showing zero balances, or business closure documents. When you present this evidence to the bank, you change the narrative from a borrower who refuses to pay to a borrower who literally cannot pay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Second, bypass the lower level recovery agents. Third party agents do not have the authority to approve significant settlements or restructurings; their only goal is to collect cash immediately. You must escalate your case to the bank's internal collections management or the branch manager. Submit your proposals in writing. Written communication forces the bank to officially register your hardship request.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Third, anchor your settlement offer low. If you can afford to pay 40 percent of the outstanding amount, start your negotiation by offering 25 percent. The bank will inevitably counteroffer with a higher amount, and you can slowly negotiate up to your maximum limit. Never reveal your maximum capacity immediately. If you have arranged funds by borrowing from relatives, make sure the bank understands that these funds are only available for a full and final settlement, not for partial EMI payments.
                            </p>

                            <h2 id="cibil-impact" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Understanding the Impact on Your CIBIL Score</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is vital to fully comprehend how defaulting and settling a personal loan will affect your financial future. Your CIBIL score is a numerical representation of your creditworthiness. When you miss an EMI, your score drops. When your account becomes a Non Performing Asset, it plummets further.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you successfully negotiate a settlement, the bank will update your credit report with the status 'Settled'. This status serves as a major red flag to future lenders. It essentially tells them that while you resolved the debt, you caused a financial loss to the previous institution. For a period of five to seven years, a 'Settled' remark will make it extremely difficult to obtain any form of unsecured credit, such as new personal loans or credit cards. If you wish to apply for a secured loan, like a home loan, you will face intense scrutiny and likely be offered much higher interest rates.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, a 'Settled' status is still far better than an active 'Written Off' or 'Post Default' status with an escalating outstanding balance. Once the account is settled, the bleeding stops. Your outstanding balance becomes zero, and your score will slowly begin to recover over the years, provided you maintain disciplined financial behavior with any other existing credit lines. Rebuilding credit after a settlement requires patience and strict financial discipline.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Take Control of Your Financial Future Today.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our team of experts is ready to analyze your situation, protect you from harassment, and secure a favorable settlement.</p>
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start space-y-5">
                        {/* Card 1: Primary CTA Card */}
                        <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                            <h3 className="font-black text-gray-900 text-xl mb-2 mt-1 tracking-tight">Facing Harassment?</h3>
                            <p className="text-gray-600 text-sm mb-4 leading-relaxed px-1">
                                We can send an immediate Legal Notice to stop agents from visiting your house today.
                            </p>
                            <Link
                                href="/contact"
                                className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                            >
                                Stop the Agents
                            </Link>
                            <div className="mt-4 space-y-1.5 text-xs text-gray-500 w-full text-center font-medium">
                                <p>&#10003; 24hr Legal Response</p>
                                <p>&#10003; RBI Compliance Audit</p>
                                <p>&#10003; Harassment Defense</p>
                            </div>
                        </div>

                        {/* Card 2: Related Expertise Links */}
                        <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm">
                            <h4 className="font-black text-gray-900 text-lg border-b border-gray-200 pb-2 mb-4">Related Expertise</h4>
                            <ul className="space-y-4 text-left font-medium text-sm">
                                <li>
                                    <Link href="/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        Personal Loan Settlement Guide
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/how-to-deal-with-recovery-agents" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        Handling Recovery Agents
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/loan-restructuring-vs-settlement" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        Restructuring vs Settlement
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/impact-of-loan-default-on-cibil" className="text-blue-600 hover:text-blue-800 transition-colors">
                                        Impact on CIBIL Score
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
