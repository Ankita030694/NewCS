'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function DiySettlementClient() {
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
        { id: 'truth-about-agencies', label: 'The Truth About Settlement Agencies' },
        { id: 'how-to-diy-settlement', label: 'How to Negotiate a DIY Settlement' },
        { id: 'step-1-stopping-emi', label: 'Step 1: Stopping EMI Payments' },
        { id: 'step-2-handling-recovery', label: 'Step 2: Handling Recovery Agents' },
        { id: 'step-3-drafting-letter', label: 'Step 3: Drafting the Hardship Letter' },
        { id: 'when-diy-dangerous', label: 'When DIY Settlement Becomes Dangerous' },
        { id: 'threat-of-section-138', label: 'The Threat of Section 138' },
        { id: 'high-value-drt', label: 'High-Value Defaults and DRT' },
        { id: 'comparing-true-costs', label: 'Comparing True Costs' },
        { id: 'upfront-fees-savings', label: 'Upfront Fees vs. Backend Savings' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'Is it legal to settle my loan directly with the bank?',
            answer: 'Yes, it is entirely legal. You are the primary borrower. You have the absolute right to write to the bank manager, visit the branch, and negotiate a settlement without any third party.'
        },
        {
            question: 'Why do settlement agencies charge upfront fees?',
            answer: 'Many settlement agencies operate on a volume-based business model. They collect an upfront retainer (often 10% to 15% of the loan amount) simply to start sending emails on your behalf, with no guaranteed outcome.'
        },
        {
            question: 'Will a third-party agency stop recovery agents from calling?',
            answer: 'Often, they cannot. A generic settlement agency cannot issue legally binding notices. Only a registered law firm can issue a formal cease and desist notice or file police complaints against illegal harassment.'
        },
        {
            question: 'When should I abandon the DIY approach?',
            answer: 'You must hire a specialized lawyer immediately if the bank files a Section 138 (cheque bounce) criminal case, initiates DRT proceedings, or invokes the SARFAESI Act against your property.'
        },
        {
            question: 'Can the bank refuse to talk to me if I don\'t use an agency?',
            answer: 'No. RBI guidelines mandate that banks must establish grievance redressal mechanisms for their customers. The bank cannot force you to hire an agency to discuss your own debt.'
        }
    ];

    const reviews = [
        {
            name: 'Siddharth Menon',
            location: 'Bangalore',
            stars: 5,
            comment: 'I almost paid a settlement agency 1.5 Lakhs just in "registration fees." Instead, I used this platform\'s legal team to draft a strong hardship letter and successfully negotiated a 50% waiver directly with the branch manager.'
        },
        {
            name: 'Pooja Reddy',
            location: 'Chennai',
            stars: 5,
            comment: 'I tried DIY settlement for my MSME loan, but when the bank filed a DRT case, I realized I was out of my depth. The lawyers here stepped in, stopped the DRT escalation, and closed the matter legally.'
        }
    ];

    return (
        <>
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
                        Can I Settle Debt Without a <br />
                        <span className="text-blue-300">Third-Party Agency?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Avoid upfront fee scams. Learn how to negotiate a DIY settlement and discover when you actually need a professional legal shield.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        
                            Calculate Your DIY Settlement Target
                        
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
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
                                        DIY vs Agency Settlement
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
                className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
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
                            document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                            setActiveId(link.id);
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
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

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                The internet is flooded with advertisements from debt settlement agencies charging massive upfront fees to negotiate with your bank. Can you simply bypass them and negotiate a DIY loan settlement directly? This comprehensive guide breaks down the brutal realities of handling recovery agents on your own, versus exactly when high-stakes defaults require a professional legal shield.
                            </p>

                            <h2 id="truth-about-agencies" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Truth About Debt Settlement Agencies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When borrowers default on their loans, panic naturally sets in. In this state of fear, many turn to heavily marketed "Debt Settlement Agencies." These organizations promise to cut your debt by 50% or more and stop recovery agents from calling you. However, the reality of their business model is often predatory.
                            </p>

                            {/* Section Type: Warning Banner */}
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl mb-8">
                                <h4 className="text-xl font-bold text-yellow-900 mb-2 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    Beware of Upfront Fee Scams
                                </h4>
                                <p className="text-yellow-800 text-sm leading-relaxed">
                                    Many settlement agencies demand a "Registration Fee" or a non-refundable retainer equal to 10% to 15% of your total outstanding loan amount before they even contact the bank. If the bank refuses to settle, or if the agency fails to negotiate a favorable deal, you lose this massive upfront fee entirely, putting you deeper into the debt trap.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, most settlement agencies are not law firms. They are essentially call centers sending generic email templates to bank grievance cells. Because they lack legal standing, they cannot represent you in court if the bank files a civil suit, nor can they file legally binding injunctions to stop physical harassment by recovery agents. For many borrowers, paying a third-party agency for a service they could perform themselves is a costly mistake.
                            </p>

                            <h2 id="how-to-diy-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Negotiate a DIY Loan Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If your default is relatively small (under INR 5 Lakhs), unsecured (like a credit card or small personal loan), and you possess the emotional resilience to withstand psychological pressure, a Do-It-Yourself (DIY) settlement is highly feasible.
                            </p>

                            {/* Section Type: Timeline Process Steps */}
                            <div className="relative border-l-2 border-blue-200 ml-4 md:ml-6 mt-8 mb-12">
                                
                                <div className="mb-10 ml-8 relative">
                                    <span className="absolute -left-11 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs ring-4 ring-white">1</span>
                                    <h3 id="step-1-stopping-emi" className="text-2xl font-bold text-gray-800 mb-2">Step 1: Stopping EMI Payments and Saving Capital</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        The most counterintuitive step of settlement is realizing you must stop paying partial EMIs. If you keep scraping together half an EMI every month, the bank classifies you as a "slow payer," not a defaulter. Banks do not offer settlements to active accounts. To force the bank to the negotiating table, the account must be classified as a Non-Performing Asset (NPA), which strictly requires 90 days of continuous non-payment. During this 90-day window, you must hoard cash in a separate account (preferably in a family member's name to avoid auto-debits) to build your lump-sum settlement corpus.
                                    </p>
                                </div>

                                <div className="mb-10 ml-8 relative">
                                    <span className="absolute -left-11 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs ring-4 ring-white">2</span>
                                    <h3 id="step-2-handling-recovery" className="text-2xl font-bold text-gray-800 mb-2">Step 2: Handling the Initial Recovery Agent Onslaught</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Between day 30 and day 120, the psychological warfare begins. The bank will deploy outsourced third-party telecallers who are trained to shout, abuse, and threaten you. They will threaten police arrest, claim they are coming to seize your furniture, and threaten to call your HR department. Your job during this phase is emotional detachment. Block numbers that are abusive, record all calls, and calmly reiterate a single sentence: <i>"I am facing severe financial hardship and I am communicating directly with the bank via email for a settlement."</i>
                                    </p>
                                </div>

                                <div className="mb-2 ml-8 relative">
                                    <span className="absolute -left-11 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-xs ring-4 ring-white">3</span>
                                    <h3 id="step-3-drafting-letter" className="text-2xl font-bold text-gray-800 mb-2">Step 3: Drafting the Hardship Letter to the Bank Manager</h3>
                                    <p className="text-gray-700 leading-relaxed mb-4">
                                        Around day 150, when the bank realizes the telecallers have failed, the account moves to the core collections team. This is your window. You must bypass the agents and draft a formal, physically mailed or emailed Hardship Letter directly to the Branch Manager and the Nodal Officer. This letter must outline the exact reason for insolvency (medical emergency, job loss) and explicitly offer a final lump sum amount (usually starting your negotiation at 25% to 30% of the principal). Understanding <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:underline">how to reply to legal notice for personal loan</Link> properly ensures you don't accidentally reset the limitation period.
                                    </p>
                                </div>
                            </div>

                            <h2 id="when-diy-dangerous" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">When DIY Settlement Becomes Dangerous</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While DIY works for simple credit card defaults, attempting to negotiate alone becomes exceptionally dangerous when the loan escalates into formal legal territory. 
                            </p>

                            <h3 id="threat-of-section-138" className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Threat of Section 138 (Cheque Bounce)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you provided blank security cheques during loan disbursement, the bank will eventually present them. When they bounce, the bank initiates criminal proceedings under Section 138 of the Negotiable Instruments Act. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A generic settlement agency cannot help you here, and ignoring the court summons yourself will result in a Non-Bailable Warrant (NBW) being issued for your arrest. You need an actual advocate to appear in court, file for bail, and subsequently move an application for compounding (settling) the offense before the judge.
                            </p>

                            <h3 id="high-value-drt" className="text-2xl font-bold text-gray-800 mt-8 mb-4">High-Value Defaults and DRT Escalation</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For business loans, MSME loans, or personal loans exceeding INR 20 Lakhs, banks do not waste time with telecallers indefinitely. They transfer the case to the Debt Recovery Tribunal (DRT). DRT courts are fast-track financial courts with immense power. They can freeze your operational bank accounts, attach your business inventory, and order the auction of collateral properties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You cannot represent yourself effectively in a DRT without profound legal knowledge of the SARFAESI Act. Seeking out the <Link href="/best-lawyer-for-loan-settlement-during-drt" className="text-blue-600 hover:underline">best lawyer for loan settlement during drt</Link> is not optional; it is mandatory to prevent the total liquidation of your assets. A specialized lawyer can find procedural flaws in the bank's DRT application, effectively stalling the auction and forcing the bank back to the settlement table under immense pressure.
                            </p>

                            <h2 id="comparing-true-costs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Comparing the True Costs: DIY vs. Legal Advisory</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The decision between DIY, hiring an agency, or retaining a law firm ultimately comes down to a careful calculation of risk, cost, and emotional bandwidth.
                            </p>

                            {/* Section Type: Cost-Benefit Analysis Table */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 overflow-x-auto">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Settlement Strategy Comparison</h3>
                                <table className="w-full text-left border-collapse min-w-[700px]">
                                    <thead>
                                        <tr className="bg-blue-100 text-blue-900">
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tl-xl w-1/4">Criteria</th>
                                            <th className="p-4 font-bold border-b border-gray-300 w-1/4">DIY Settlement</th>
                                            <th className="p-4 font-bold border-b border-gray-300 w-1/4">Settlement Agency</th>
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tr-xl w-1/4">Specialized Law Firm</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50">Upfront Financial Cost</td>
                                            <td className="p-4 border-l border-gray-200">Zero</td>
                                            <td className="p-4 border-l border-gray-200 text-red-600 font-bold">Very High (10-15% of loan)</td>
                                            <td className="p-4 border-l border-gray-200 text-blue-600 font-bold">Moderate (Fixed Retainer)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50">Time & Stress Burden</td>
                                            <td className="p-4 border-l border-gray-200 text-red-600 font-bold">Extremely High</td>
                                            <td className="p-4 border-l border-gray-200">Moderate</td>
                                            <td className="p-4 border-l border-gray-200 text-green-600 font-bold">Very Low</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50">Legal Protection (Courts)</td>
                                            <td className="p-4 border-l border-gray-200">None</td>
                                            <td className="p-4 border-l border-gray-200">None (Cannot appear in court)</td>
                                            <td className="p-4 border-l border-gray-200 text-green-600 font-bold">Full (DRT, Section 138 defense)</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50 rounded-bl-xl">Best Suited For</td>
                                            <td className="p-4 border-l border-gray-200">Credit cards under 2 Lakhs</td>
                                            <td className="p-4 border-l border-gray-200 text-gray-500 italic">Not recommended</td>
                                            <td className="p-4 border-l border-gray-200 font-bold">Loans &gt; 5 Lakhs, MSME, DRT cases</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h3 id="upfront-fees-savings" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Upfront Fees vs. Backend Savings</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you decide against the DIY route, always avoid generic agencies charging massive upfront percentages. Opt instead for a specialized debt resolution law firm that operates on a transparent, fixed-fee retainer model. A skilled lawyer's true value isn't just in sending emails; it is in deploying legal injunctions to stop agent harassment instantly, and utilizing deep knowledge of RBI banking codes to force the bank to accept a maximum haircut. You can use a personal loan settlement calculator to estimate the exact savings a strong legal negotiation can yield compared to attempting it alone.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on DIY Debt Settlement</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Drowning in High-Value Debt?</h3>
                                <p className="text-blue-800 mb-6">If you are facing Section 138 notices, DRT escalation, or simply cannot handle the relentless harassment, you need a lawyer, not a generic settlement agency. We offer transparent, fixed-fee legal protection.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Consult a specialized Debt Lawyer
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The strategies outlined regarding DIY loan settlements are for educational purposes only. High-value defaults and court summons carry significant legal risk. Always consult with a qualified advocate to address the specific nuances of your legal situation.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Need a Legal Shield?</h4>
                                <p className="text-sm text-gray-600 mb-6">Skip the 15% agency fees. Hire a real law firm to defend against DRT and harassment.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Help
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Zero Upfront Percentage Fees</p>
                                    <p>✔ Stop Physical Harassment</p>
                                    <p>✔ DRT & Cheque Bounce Defense</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Defence</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
            
            {/* Reviews Section at the bottom */}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
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
            </section>
        </>
    );
}
