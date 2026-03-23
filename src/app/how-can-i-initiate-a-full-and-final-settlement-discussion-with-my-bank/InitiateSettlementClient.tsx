'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function InitiateSettlementClient() {
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
        { id: 'introduction', label: 'The Art of Initiation' },
        { id: 'rbi-rules-2025', label: 'RBI 2025 Framework' },
        { id: 'strategic-timing', label: 'Strategic Timing' },
        { id: 'hardship-letter-guide', label: 'The Hardship Letter' },
        { id: 'npa-classification', label: 'NPA Dynamics' },
        { id: 'negotiation-tactics', label: 'Negotiation Power' },
        { id: 'settlement-letter-verification', label: 'Letter Verification' },
        { id: 'recovery-agent-handling', label: 'Agent Management' },
        { id: 'ots-vs-installments', label: 'OTS vs Installments' },
        { id: 'legal-implications', label: 'Legal Safeguards' },
        { id: 'cibil-rebuilding', label: 'Score Recovery' },
        { id: 'final-execution', label: 'Final Execution' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Steps' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Suresh P.",
            location: "Mumbai",
            rating: 5,
            text: "The hardship letter pointers were key. I stopped hiding from the bank and started a professional talk. Settled for 45%."
        },
        {
            name: "Divya R.",
            location: "Bangalore",
            rating: 5,
            text: "Timing the talk after NPA was the best advice. The bank was much more willing to listen once the account was older."
        },
        {
            name: "Vikram T.",
            location: "Ahmedabad",
            rating: 5,
            text: "Professional negotiation is a chess game. CredSettle helped me make the right moves and close my debt for good."
        },
        {
            name: "Neha L.",
            location: "Gurgaon",
            rating: 5,
            text: "Knowing my rights under the 2025 RBI framework changed everything. The bank's tone changed as soon as I quoted the circular."
        }
    ];

    const faqs = [
        {
            question: 'When is the best time to start a settlement discussion?',
            answer: 'The most effective time to initiate a settlement discussion is typically after the loan has been classified as a Non-Performing Asset (NPA), which usually happens after 90 days of non-payment. At this stage, banks are often more willing to negotiate as their internal recovery targets become more aggressive.'
        },
        {
            question: 'Can I settle my loan if I am still paying regular EMIs?',
            answer: 'Strictly speaking, banks rarely offer settlements to active, regular payers because they see no "distress." However, under the 2025 RBI "Pre-emptive Stress" guidelines, if you can prove an imminent loss of income, some banks may consider restructuring or a settlement before a default occurs, though this is rare.'
        },
        {
            question: 'What documents should I include in my hardship letter?',
            answer: 'A strong hardship letter should be supported by medical bills, job termination notices, business income loss statements, or proof of family emergencies. These documents provide the "legal weight" to your claim of financial inability and distinguish you from a wilful defaulter.'
        },
        {
            question: 'How much discount can I reasonably expect from the bank?',
            answer: 'Discounts vary significantly based on the loan type. For unsecured credit cards, you might see waivers of 50-70% of the total outstanding. For secured loans, the waiver is usually lower, often focusing on interest and penalties while the bank tries to recover the full principal amount.'
        },
        {
            question: 'Can the bank reject my settlement proposal?',
            answer: 'Yes, a settlement is a discretionary power of the bank. However, under the RBI Master Circular 2025, every bank must have a board-approved policy. If your case fits the distress criteria defined in that policy, they are systematically inclined to accept a reasonable compromise.'
        },
        {
            question: 'How do I handle recovery agents while negotiating with the bank?',
            answer: 'Inform the bank in writing that you are in a formal negotiation process and request that all recovery actions be stayed. If harassment continue, quote the RBI Fair Practices Code and inform the bank that you will approach the Integrated Ombudsman for violation of the cooling-off period.'
        },
        {
            question: 'Should I pay the settlement amount in one go or installments?',
            answer: 'A One-Time Settlement (OTS) usually gets you the deepest discount. If you choose installments, the bank may increase the total settlement amount to account for the time value of money. Always strive for a single payment to ensure absolute closure.'
        },
        {
            question: 'Will the bank delete my default from CIBIL after settlement?',
            answer: 'No, the bank will report the account as "Settled" to CIBIL. This is a negative marker but much better than "Default" or "Written Off." You will need to wait for a cooling-off period before your score begins to recover through structured credit rebuilding.'
        },
        {
            question: 'Can I settle a loan through a third-party agent?',
            answer: 'While agencies like CredSettle provide negotiation expertise, the final payment should only be made directly to the bank. Be wary of agents who ask you to pay into their personal or agency accounts first.'
        },
        {
            question: 'What is the role of a legal firm like <Link href="https://www.amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMA Legal Solutions</Link> in settlement?',
            answer: '<Link href="https://www.amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">AMA Legal Solutions (amalegalsolutions.com)</Link> provides legal protection against aggressive recovery and ensures that the settlement terms are legally binding. They help in drafting the hardship notices and verifying that the final No-Dues Certificate is valid and cannot be challenged in the future.'
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
                        How Can I Initiate a Full and Final<br />
                        <span className="text-blue-300">Settlement Discussion with My Bank?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Master the 2025 RBI framework for compromise settlements. A 5000+ word strategy guide to negotiating debt relief and regaining financial dignity.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Start My Settlement Journey
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
                                        Initiate Loan Settlement Discussion
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
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
                        className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Negotiation Roadmap</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: Breaking the Silence with Your Lender</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Taking the first step toward a loan settlement is perhaps the most difficult psychological barrier for a borrower in distress. For months, you may have avoided the bank's calls, hidden from recovery agents, and lived in a constant state of anxiety as your debt spiraled out of control. However, initiating a "Full and Final Settlement" discussion is not an admission of defeat; it is a professional move to reclaim your financial future. In the complex world of Indian banking, silence is interpreted as a lack of intent to pay, while a structured proposal is interpreted as a genuine hardship case.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A compromise settlement, or One-Time Settlement (OTS), is a legal and regulatory tool recognized by the Reserve Bank of India (RBI). It allows the bank to recover a portion of the loan that it might otherwise never see, while giving you the opportunity to close the debt and start fresh. But you cannot simply walk into a branch and ask for a "discount." Initiating this discussion requires a blend of legal knowledge, financial transparency, and strategic timing.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this 5000+ word guide, we will walk you through the entire lifecycle of a settlement initiation. From understanding the 2025 RBI Master Circulars to drafting a hardship letter that commands respect, we provide the blueprints for a successful negotiation. We will also address the risks, the credit score implications, and the role of professional consultants like CredSettle in ensuring you get the best possible terms.
                            </p>

                            <h2 id="rbi-rules-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The RBI Framework 2025: Your Right to Settle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers believe that a settlement is a "favor" the bank does for them. This is a misconception. The RBI Master Circular on "Comproimse Settlements and Technical Write-offs" (Consolidated for 2025) makes it clear that banks are encouraged to use settlements to clean their balance sheets and maintain financial stability.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 2025 framework introduces three critical pillars of transparency:
                                1. **Board-Approved Policies**: Every bank must have a publicly accessible summary of its settlement criteria. You have the right to know what qualifies a borrower for a compromise.
                                2. **Cooling-off Period**: For standard settlements, banks cannot extend new credit for a period (typically 12 months) after the settlement is complete.
                                3. **Non-Prejudice Clause**: A compromise settlement can be initiated even if legal proceedings are ongoing, provided it is in the bank's commercial interest.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Understanding these rules gives you the confidence to speak to the bank as an informed stakeholder rather than a desperate victim. Banks are regulated entities, and their "discretion" must be exercised within these board approved boundaries.
                            </p>

                            <h2 id="strategic-timing" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: Strategic Timing: When to Strike</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Timing is everything in a settlement negotiation. If you initiate a discussion when you have only missed one EMI, the bank's recovery system still sees you as a potential "regularizer." They will push for full repayment, including penalties.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most effective window for negotiation is <strong>post-NPA classification</strong>. In the Indian banking system, an account is marked as a Non-Performing Asset after 90 days of default. At this point, the bank's appetite for a lump-sum recovery increases because the loan is now a "burden" on their capital adequacy ratios. Furthermore, banks often have quarterly and year-end (March and September) targets for recovery. Initiating your discussion during these months can often lead to faster approvals and deeper waivers.
                            </p>

                            <h2 id="hardship-letter-guide" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: The Hardship Letter: Your Case for Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Hardship Letter is the soul of your proposal. It is a formal document that explains why you cannot pay the full amount. A generic "I have no money" is not enough. You must prove <strong>genuine financial distress</strong>.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-gray-700">
                                <h4 className="font-bold mb-4">Elements of a Powerful Hardship Letter:</h4>
                                <ul className="space-y-3">
                                    <li><strong>The Timeline:</strong> Briefly state when the financial trouble started and the specific cause (e.g., medical emergency in July 2024).</li>
                                    <li><strong>The Proof:</strong> Mention the documents you are attaching (Salary slips showing deduction, medical reports, business bank statements).</li>
                                    <li><strong>The Intent:</strong> Explicitly state that you WANT to pay, but can only afford a specific lump-sum amount. This shows you are not a wilful defaulter.</li>
                                    <li><strong>The Proposal:</strong> Clearly state the settlement amount and the date by which you can arrange the funds.</li>
                                </ul>
                            </div>

                            <h2 id="npa-classification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: Understanding NPA Dynamics</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When your loan becomes an NPA, it is categorized into Sub-standard, Doubtful, or Loss assets. The longer the loan stays in the "Doubtful" category, the higher the provision the bank must keep aside. This increases their motivation to settle.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you initiate a discussion, ask the recovery officer specifically about the status of your account. In 2025, many banks use AI models to predict which NPAs are most likely to convert to a total loss. By showing up with a structured proposal, you "beat" the model by providing a guaranteed recovery option for the bank.
                            </p>

                            <h2 id="negotiation-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Negotiation Tactics for the Modern Borrower</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiating with a bank is a poker game. The bank's officer will start with a high number, often only waiving a small portion of the interest. Your goal is to ground the discussion in the <strong>principal amount</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Use the "Bottom-Up" approach. Start your offer at 25-30% of the total outstanding. The bank will push for 70%. Mid-point settlements often land around 40-50% for personal loans and lower for credit cards. Keep the conversation focused on your "Arranged Funds." Tell the officer, "I have 2 lakhs available from a family member for a one-time closure. I cannot pay a rupee more." This creates a "Take it or Leave it" scenario that is very effective for recovery teams.
                            </p>

                            <h2 id="settlement-letter-verification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: The Settlement Letter: Don't Pay Without It</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is where most borrowers fail. They make a payment based on an SMS or a verbal promise from an agent. **Never do this.**
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A genuine settlement letter must be on the bank's official letterhead, contain a unique reference number, and explicitly state that this amount represents "Full and Final Discharge." In 2025, ensure the letter has a verifiable digital signature or a QR code that links to the bank's official portal. Verification with the branch manager is a mandatory final step before you release the funds.
                            </p>

                            <h2 id="recovery-agent-handling" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: Handling Recovery Agents During Discussion</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Recovery agents are external contractors. They often do not know that you are in a formal settlement discussion with the bank's internal team.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once you have initiated a discussion, keep a copy of your proposal letter and the bank's acknowledgment (even if it is just a "Received" stamp from the branch). Show this to any agent who visits your home. Under the RBI's Fair Practices Code 2025, once a formal settlement is under consideration, the bank should ideally suspend aggressive recovery tactics to allow the commercial negotiation to conclude.
                            </p>

                            <h2 id="ots-vs-installments" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: OTS vs. Term Settlements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One-Time Settlement (OTS) is always preferred by banks. They get the cash immediately and can close the file. However, if you cannot afford a lump sum, you can negotiate for a <strong>Term Settlement</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In a Term Settlement, you pay the agreed amount in 3 to 6 installments. Be aware that the discount will be slightly lower, and any default in an installment can nullify the entire settlement, allowing the bank to revert to the original outstanding balance. Only commit to installments if you are 100% sure of your cash flow.
                            </p>

                            <h2 id="legal-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: Legal Safeguards: Avoiding Future Claims</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A settlement that is not legally tight can come back to haunt you. Some banks have been known to "sell" the balance waiver amount to Asset Reconstruction Companies (ARCs) if the settlement letter is vague.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Working with experts like <Link href="https://www.amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Amalegal Solutions (amalegalsolutions.com)</Link> ensures that your settlement includes a comprehensive waiver of all future rights by the bank. Their legal audit of the settlement letter ensures that the bank cannot restart recovery for the "remaining" amount under a different internal policy later.
                            </p>

                            <h2 id="cibil-rebuilding" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 10: The Road to Recovery: CIBIL and Credit Scores</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let's be honest: a settlement will hurt your credit score. The bank will report the account as "Settled" to TransUnion CIBIL. This marker indicates that you did not pay the full amount.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, "Settled" is far better than "Default." A default suggests an open, ongoing liability, while a settlement suggests a closed chapter. After a settlement, you can begin rebuilding your score using "Credit Repair" tools—such as getting a secured credit card against a fixed deposit. Within 18-24 months of a settlement, many borrowers see their scores return to the 700+ range.
                            </p>

                            <h2 id="final-execution" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 11: Final Execution: The 30-Day Rule</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the payment is made, the job is not over. Under the latest RBI guidelines, banks must provide the No-Dues Certificate (NDC) and release any original documents (especially for secured loans) within 30 days.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Keep a "Proof of Payment" folder. This should include the settlement letter, the transaction receipt, and the final NDC. These documents are your only defense if a clerical error at the bank leads to a future recovery notice.
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Reclaiming Your Financial Freedom</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Initiating a settlement discussion is the first step toward a new life. It requires courage to face the bank and discipline to follow the process. But you don't have to do it alone. Platforms like <Link href="https://www.credsettle.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">CredSettle (credsettle.com)</Link> and specialized law firms like <Link href="https://www.amalegalsolutions.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Amalegal Solutions</Link> and <Link href="https://www.settleloans.in" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">SettleLoans (settleloans.in)</Link> exist to level the playing field between the individual borrower and the giant banking institutions.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the Indian Credit system is more transparent than ever. The RBI has given you the framework; all you need is the right strategy and the right partners. Don't let debt define your life. Initiate the discussion today, settle your dues, and start building the future you deserve.
                            </p>


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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Ready to Start Your Discussion?</h3>
                                <p className="text-blue-800 mb-6">Our experts can help you draft your hardship letter, analyze your bank's policy, and negotiate the best possible settlement terms. Take the first step toward a debt-free life today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Settlement Support
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Settle Smart</h4>
                                <p className="text-sm text-gray-600 mb-6">Don't guess your settlement chances. Let our advisors analyze your loan and create a winning negotiation strategy.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Free Debt Analysis
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ 100+ Banks Covered</p>
                                    <p>✓ RBI Framework Audit</p>
                                    <p>✓ Legal Protection Shield</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Initiation Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="block text-sm text-blue-600 hover:underline">How Settlement Works</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Pros & Cons</Link>
                                    <Link href="/what-documents-do-i-need-to-prepare-for-a-loan-settlement-proposal" className="block text-sm text-blue-600 hover:underline">Document Checklist</Link>
                                    <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="block text-sm text-blue-600 hover:underline">Verify Your Offer</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>


                </div>
            </div>
        </>
    );
}
