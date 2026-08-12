'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LostJobClient() {
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
        { id: 'immediate-actions', label: 'Immediate Actions' },
        { id: 'default-process', label: 'The Default Process' },
        { id: 'handling-recovery', label: 'Handling Recovery Agents' },
        { id: 'case-study-1', label: 'Case Study: Tech Layoff' },
        { id: 'debt-settlement', label: 'Debt Settlement Guide' },
        { id: 'case-study-2', label: 'Case Study: Factory Closure' },
        { id: 'legal-recourse', label: 'Legal Recourse' },
        { id: 'rebuilding', label: 'Rebuilding After Crisis' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Can I go to jail for not paying my personal loan after a job loss?",
            answer: "No. A personal loan is an unsecured civil debt. You cannot be imprisoned simply for being unable to pay due to a job loss. Jail time is only a possibility in cases of proven criminal fraud, like using fake documents to get the loan, or if you bounce a security cheque, which is a bailable offense under Section 138 of the Negotiable Instruments Act."
        },
        {
            question: "Will the bank seize my property if I stop paying my personal loan?",
            answer: "Personal loans are unsecured, meaning they are not tied to any collateral like your house or car. The bank cannot automatically seize your assets. They must file a civil suit and win a court order to attach your property, which is a long and expensive process that banks rarely pursue for standard personal loans."
        },
        {
            question: "Should I use my provident fund or emergency savings to pay EMIs?",
            answer: "It is highly discouraged to drain your retirement funds or emergency cash just to keep up with unsecured loan EMIs during a job loss. Your priority must be securing basic living expenses and finding a new job. Unsecured debt can be negotiated later, but you cannot recover lost survival funds."
        },
        {
            question: "How long does it take for a personal loan account to become an NPA?",
            answer: "A loan account is classified as a Non-Performing Asset (NPA) when the EMI payment is overdue for a period of 90 days (three consecutive missed EMIs). After this point, the bank will accelerate recovery efforts and may send a formal loan recall notice."
        },
        {
            question: "Can a bank deduct money directly from my salary account for a loan?",
            answer: "If your personal loan is with the same bank where your salary is credited, the bank typically has the right of set-off and can automatically deduct pending EMIs from your account balance. If your loan is with a different bank, they can only deduct money if you have given them an active ECS or NACH mandate."
        },
        {
            question: "How does a job loss loan default affect my CIBIL score?",
            answer: "Missing EMIs will negatively impact your CIBIL score. If the account becomes an NPA and is eventually settled, it will reflect as 'Settled' on your credit report, which severely damages your creditworthiness for up to seven years. However, protecting your immediate financial survival is more critical than a credit score."
        },
        {
            question: "What is a loan restructuring, and can I get it?",
            answer: "Loan restructuring involves changing the terms of your loan to make payments more manageable. This could mean extending the tenure to reduce the EMI amount or securing a temporary moratorium. You can request this from your bank, but approval is entirely at their discretion and requires proof of temporary financial hardship."
        },
        {
            question: "Are recovery agents allowed to call my relatives or new employer?",
            answer: "No. RBI guidelines strictly prohibit recovery agents from contacting your family, friends, neighbors, or employers regarding your debt. They are only permitted to contact you, the borrower, and any legally bound co-signers or guarantors."
        },
        {
            question: "What should I do if a recovery agent visits my home?",
            answer: "You have the right to demand their ID card and the bank's authorization letter. Agents cannot visit unannounced or at odd hours (before 8 AM or after 7 PM). Treat them politely but firmly. Do not hand over cash. Record the interaction if they become abusive, and you can file a police complaint for harassment."
        },
        {
            question: "Is debt settlement a good option if I remain unemployed for a long time?",
            answer: "If you are facing severe, prolonged financial hardship and absolutely cannot repay the principal amount, a one-time settlement (OTS) can be a viable way to close the debt and stop the harassment. You negotiate to pay a reduced lump sum. It ruins your credit score, but it frees you from the debt burden."
        }
    ];

    const reviews = [
        { name: "Anand M.", location: "Bengaluru", stars: 5, comment: "I lost my tech job and was drowning in personal loan EMIs. The legal guidance helped me stop the relentless calls from recovery agents and eventually settle the loan for a fraction of the cost once I found a new, lower-paying job. The relief is immense." },
        { name: "Priya S.", location: "Chennai", stars: 5, comment: "When my company shut down, I panicked about my loan. Reading about my rights stopped me from draining my emergency fund. The step-by-step approach to handling the bank notices was exactly what I needed." },
        { name: "Vikram R.", location: "Gurugram", stars: 4, comment: "The detailed explanation of the default process took away the fear of the unknown. I successfully negotiated a six-month moratorium with my bank using the hardship letter templates suggested here." }
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
        'name': 'CredSettle Job Loss Debt Relief Service',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '312',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-lost-job" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-lost-job" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Emergency Legal Protection
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Lost Job & Cannot Pay <br />
                        <span className="text-blue-300">Personal Loan EMI?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Understand your legal rights, stop collection agent harassment, and learn the exact steps to negotiate a debt settlement during financial hardship.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Job Loss Debt Relief: Get a Free Consultation
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
                                        Lost Job Cannot Pay Loan
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The Panic of Sudden Job Loss</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The sudden reality of a job loss brings an immediate wave of anxiety. Beyond the fear of an uncertain career future, the most pressing panic for many professionals in India revolves around debt. When you lose your steady income source, the question "How will I pay my personal loan EMI?" becomes an all-consuming source of stress. A job loss loan default is a terrifying prospect, but it is crucial to remember that you are dealing with a civil financial matter, not a criminal one.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Millions of honest, hardworking individuals face this exact crisis every year due to corporate layoffs, company closures, or health emergencies. The banking system is designed to handle defaults, and there are established legal frameworks and negotiation pathways to protect borrowers facing genuine economic hardship. The absolute worst thing you can do is panic, ignore the situation, or take out high-interest predatory loans to cover your existing EMIs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide is designed to empower you with knowledge. We will break down exactly what happens when you cannot pay your personal loan, how to stop illegal harassment from recovery agents, and the strategic legal steps you can take to achieve a loan settlement after losing your job. The goal is to protect your basic living necessities while navigating a difficult but manageable financial restructuring.
                            </p>

                            <h2 id="immediate-actions" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Immediate Actions to Protect Yourself</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The moment you realize you are unemployed and cannot pay your EMI, you must shift into a defensive financial posture. Emotional reactions often lead to poor financial decisions. You must prioritize survival over maintaining a flawless credit score.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Critical First Steps:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Halt the Bleeding:</strong> Cancel automatic mandates (ECS/NACH) if you know your account will not have sufficient funds. A bounced mandate incurs heavy penalty charges from both your bank and the lending bank, plunging you deeper into debt unnecessarily.</li>
                                    <li><strong>Protect Survival Funds:</strong> Do not liquidate your provident fund (PF) or emergency cash reserves to pay an unsecured personal loan. Those funds are essential for rent, groceries, and medical emergencies while you search for new employment.</li>
                                    <li><strong>Secure Your Salary Account:</strong> If your loan is with the same bank as your salary account, open a new account with a different bank immediately. Banks have the right to automatically deduct loan arrears from any funds deposited into accounts held with them.</li>
                                    <li><strong>Communicate in Writing:</strong> Send a formal email to your bank's customer service explaining your job loss. Request a temporary moratorium or restructuring. Even if they reject it, you have established a paper trail proving genuine hardship rather than willful default.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understand that personal loans are unsecured. The bank took a calculated risk based on your income profile. When that income vanishes, the risk materializes. The bank cannot seize your house or car to recover an unsecured personal loan without a lengthy court process, which is rarely initiated for standard retail loan amounts.
                            </p>

                            <h2 id="default-process" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: The Anatomy of a Loan Default</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Fear often stems from the unknown. Knowing exactly how the default process unfolds month by month will help you prepare mentally and strategically. The bank operates on a strict timeline governed by RBI regulations.
                            </p>

                            <div className="space-y-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0 text-xl">Month 1: The Missed Payment (SMA-1)</h5>
                                    <p className="text-gray-700 m-0">When you miss your first EMI, the bank classifies your account as Special Mention Account 1 (SMA-1). You will receive automated SMS reminders and polite phone calls from the bank's internal collections team reminding you of the due date. Penalty interest for late payment will be added to your outstanding balance.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0 text-xl">Month 2: Escalation (SMA-2)</h5>
                                    <p className="text-gray-700 m-0">Missing a second consecutive EMI shifts your account to SMA-2 status. The calls will become more frequent and aggressive. The bank may outsource the recovery to third-party collection agencies. You will start receiving formal demand letters via email and post, threatening legal action if the dues are not cleared immediately.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm">
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0 text-xl">Month 3: Non-Performing Asset (NPA)</h5>
                                    <p className="text-gray-700 m-0">At 90 days past due, the account officially becomes a Non-Performing Asset. This severely damages your CIBIL score. The bank is required to report the NPA status to credit bureaus. You will receive a formal Loan Recall Notice, demanding the entire outstanding principal and interest immediately, rather than just the missed EMIs. Legal notices drafted by lawyers will follow.</p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the account is an NPA, the dynamic changes. The bank realizes that regular EMIs are no longer possible. This is typically the stage where negotiations for a settlement can begin in earnest, though the harassment from recovery agents is also at its peak.
                            </p>

                            <h2 id="handling-recovery" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: Handling Recovery Agent Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most difficult aspect of a job loss loan default is dealing with collection calls. Recovery agents are incentivized to collect money quickly, and many resort to intimidation tactics. However, the Reserve Bank of India has laid down stringent guidelines regarding fair recovery practices. You have rights, and you must assert them.
                            </p>

                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Your Rights Against Harassment</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Contact Hours</h5>
                                            <p className="text-sm text-gray-600 m-0">Agents can only contact you between 8:00 AM and 7:00 PM. Calling early in the morning or late at night is a violation of RBI norms.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Privacy and Third Parties</h5>
                                            <p className="text-sm text-gray-600 m-0">Agents are strictly forbidden from contacting your family members, friends, neighbors, or former colleagues regarding your debt. Public shaming is illegal.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Abusive Language</h5>
                                            <p className="text-sm text-gray-600 m-0">The use of threats, abusive language, or physical intimidation is a criminal offense. You have the right to file an FIR against the agent and a formal complaint with the banking ombudsman.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Strategic Advice: Install a call recording application on your phone. When an agent calls, state clearly that you are recording the conversation. Inform them of your job loss and request all further communication in writing via email. If they become abusive, disconnect the call immediately and preserve the recording as evidence. Never make small token payments just to stop the calls; it resets the limitation period and acknowledges the full debt without solving the problem.
                            </p>

                            <h2 id="case-study-1" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Case Study - The Tech Industry Layoff</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand how this works in practice, consider the case of Rahul, a 34-year-old software engineer in Bengaluru. Rahul had a steady income and had taken a personal loan of ₹12 Lakhs to fund a home renovation and clear some credit card debt. His EMI was ₹28,000 per month.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Due to a sudden global restructuring, Rahul's company laid off 15% of its workforce, including him. He received a two-month severance package, but the job market was brutal. After three months, his savings were depleted, and he could no longer afford the ₹28,000 EMI.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Mistake:</strong> Initially, Rahul panicked. He took a high-interest instant loan from a digital app to pay the bank EMI for the fourth month, hoping he would land a job soon. This only created a new, more aggressive creditor.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Strategy:</strong> Realizing his error, Rahul sought legal counsel. He immediately stopped paying both the bank and the instant loan app to preserve cash for rent and groceries. He sent formal emails to both lenders attaching his termination letter and bank statements proving zero income. When the recovery agents started calling 20 times a day, he used a call blocker and only engaged with them once a week via email, reiterating his financial hardship.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Outcome:</strong> Nine months after his job loss, the bank classified the account as a loss asset. Recognizing that Rahul genuinely had no assets to seize and was facing prolonged unemployment, they offered a One-Time Settlement (OTS). With the help of a legal negotiator, Rahul settled the ₹12 Lakh outstanding amount for ₹4.5 Lakhs, funded by a small loan from a family member. The harassment stopped, and he was able to focus entirely on his career rebuild without the daily terror of collection calls.
                            </p>

                            <h2 id="debt-settlement" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: The Mechanics of Debt Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower is unemployed and genuinely cannot repay the full principal, a One-Time Settlement (OTS) becomes the most logical exit strategy for both parties. The bank prefers to recover a portion of the loan rather than spending years in litigation with a borrower who has no assets.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Debt settlement is a negotiation process where you offer a lump sum payment that is less than the total outstanding balance, and the bank agrees to forgive the remainder. The settlement amount depends on several factors: the age of the default, the bank's internal recovery policies, the lack of collateral, and your demonstrable inability to pay.
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Cost of Settlement:</strong> It is crucial to understand that debt settlement is not a free pass. While it saves you money and stops legal harassment, it inflicts severe damage on your CIBIL score. The bank will report the account as "Settled" rather than "Closed." This negative marker will remain on your credit report for up to seven years, making it extremely difficult to obtain new credit, such as a home loan or a car loan, during that period. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, when you have lost your job and cannot pay your personal loan, protecting your immediate financial survival and mental health must take precedence over your future credit score. You cannot borrow money when you have no income anyway.
                            </p>

                            <h2 id="case-study-2" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Case Study - The Factory Closure</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sanjay worked as a mid-level manager in a manufacturing unit in Pune. He had an outstanding personal loan of ₹8 Lakhs. The factory unexpectedly shut down due to regulatory issues, leaving Sanjay without an income overnight. He had a family to support and limited savings.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Aggression:</strong> The bank's recovery agents were particularly aggressive in this case. They visited his house, demanding that he sell his wife's jewelry to pay the outstanding amount. They threatened him with immediate arrest, claiming they had filed a case under Section 420 (fraud).
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Defense:</strong> Sanjay contacted a debt relief advocate. The advocate drafted a strong legal response to the bank, pointing out the illegal harassment tactics and the false threats of criminal prosecution for a civil debt. The advocate also filed a complaint with the RBI ombudsman regarding the home visits.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>The Settlement:</strong> The bank's legal department, recognizing the risk of regulatory penalties due to the agents' behavior and Sanjay's documented unemployment, softened their stance. After several rounds of negotiation, the bank agreed to settle the ₹8 Lakh debt for ₹3 Lakhs, payable in three installments over three months. Sanjay used a portion of his eventual provident fund withdrawal to clear the settlement, permanently closing the account and ending the nightmare.
                            </p>

                            <h2 id="legal-recourse" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Defending Against Legal Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your default extends beyond a few months, you will likely receive legal notices. It is vital not to ignore these, but also not to be paralyzed by them. Many early notices are simply pressure tactics designed to look intimidating, filled with legal jargon threatening dire consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most common notice is a demand notice for the recall of the loan. If you gave the bank undated security cheques when you took the loan, they might threaten to present them. If a security cheque bounces, it becomes a criminal matter under Section 138 of the Negotiable Instruments Act. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Legal Defense: If you anticipate a cheque bounce, you must proactively inform the bank in writing not to present the cheque due to insufficient funds caused by job loss. If they present it anyway and file a case, a competent lawyer can defend you by proving that the cheque was a security instrument, not a payment towards a legally enforceable debt at that specific moment, and that the bank acted maliciously despite being informed of the hardship.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Always respond to legal notices formally through a legal representative. A well-drafted reply denying fraudulent intent and emphasizing genuine financial distress due to unemployment often slows down the bank's litigation process and opens the door for a practical settlement negotiation.
                            </p>

                            <h2 id="rebuilding" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: Rebuilding After the Crisis</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Surviving a job loss loan default is a marathon, not a sprint. Once you have secured a new job and successfully negotiated a settlement, the focus must shift to rebuilding your financial foundation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Obtain the 'No Dues Certificate' (NDC) from the bank immediately after paying the settlement amount. This document is your ultimate proof that the debt is resolved. Check your CIBIL report three months later to ensure the account status has been updated to 'Settled.'
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Rebuilding your credit score will take time. You cannot rush it. Start by maintaining clean records on any existing, smaller credit lines you might have managed to keep active. Eventually, you can apply for a secured credit card (backed by a fixed deposit) to slowly demonstrate responsible credit behavior again. The most important lesson is to build a robust emergency fund equivalent to six months of expenses before ever taking on unsecured debt again.
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

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Success Stories</h2>
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

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Protect Yourself From Illegal Recovery</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our legal experts specialize in stopping harassment and structuring fair settlements for professionals facing unexpected job loss.</p>
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
                                <p className="text-gray-600 text-sm mb-5 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from calling your family or visiting your home today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; FIR Support</p>
                                    <p>&#10003; Settlement Negotiation</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-3 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/loan-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Personal Loan Settlement Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            How to Reply to Legal Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Anti-Harassment Protection
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/credit-card-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Credit Card Debt Relief
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
