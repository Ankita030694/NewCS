'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function LoanArbitrationClient() {
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
        { id: 'introduction', label: 'Arbitration in Banking' },
        { id: 'legal-statute', label: 'The 1996 Arbitration Act' },
        { id: 'why-arbitration', label: 'Why Banks Choose ADR' },
        { id: 'section-9-relief', label: 'Section 9 interim Relief' },
        { id: 'arbitrator-appointment', label: 'Appointing Arbitrators' },
        { id: 'section-17-measures', label: 'Section 17 Tribunal Powers' },
        { id: 'hearing-process', label: 'The Hearing Workflow' },
        { id: 'arbitral-award', label: 'Understanding the Award' },
        { id: 'section-34-challenge', label: 'Challenging an Award' },
        { id: 'borrower-benefits', label: 'Benefits for Borrowers' },
        { id: 'negotiation-mediation', label: 'Mediation & Settlement' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'Arbitration FAQs' },
        { id: 'conclusion', label: 'Conclusion' },
    ];

    const faqs = [
        {
            question: 'Can I refuse to participate in a loan arbitration?',
            answer: 'If your loan agreement contains an arbitration clause, it is a legally binding contract. While you can stay away, the arbitrator can proceed "ex-parte" (in your absence) and pass an award against you, which is enforceable as a court decree.'
        },
        {
            question: 'What is a Section 9 application in loan disputes?',
            answer: 'Section 9 allows a party to approach a civil court for interim protection before or during arbitration. For example, a bank might ask to freeze your accounts, or you might ask for a stay on the seizure of your car or property.'
        },
        {
            question: 'How long does a typical loan arbitration take in India?',
            answer: 'Under the 2015/2019 amendments, domestic arbitration is expected to be completed within 12 to 18 months. This is much faster than traditional civil court cases, which can drag on for decades.'
        },
        {
            question: 'Can a bank appoint their own employee as an arbitrator?',
            answer: 'No. The 7th Schedule of the Arbitration Act prohibits people with a direct relationship with a party from being arbitrators. However, banks often appoint a panel of "independent" lawyers, which can sometimes be challenged for bias.'
        },
        {
            question: 'What happens if I lose an arbitration case?',
            answer: 'If an award is passed against you, it becomes enforceable after 90 days (if not challenged). The bank can then approach a court for "Execution" of the award, resulting in the attachment of assets or salary.'
        },
        {
            question: 'Is arbitration more expensive than a regular court case?',
            answer: 'Arbitration fees (arbitrator fees, venue, etc.) are usually borne by the parties. Banks often include these costs in the final award amount. While faster, the "per-hearing" cost can be higher for the borrower.'
        },
        {
            question: 'Can I challenge an arbitral award if I dont agree with the decision?',
            answer: 'You can only challenge under Section 34 on limited grounds: fraud, lack of proper notice, or if the award violates the "Public Policy of India." You cannot challenge it merely because you think the decision is wrong on facts.'
        },
        {
            question: 'What is the role of Section 17 in loan arbitration?',
            answer: 'Section 17 gives the arbitrator the power to pass interim orders once they are appointed. These orders have the same validity as court orders and must be followed by both the lender and the borrower.'
        },
        {
            question: 'Can arbitration happen without a written agreement?',
            answer: 'No. A valid arbitration must be based on an "Arbitration Agreement" in writing. In banking, this is almost always included as a clause in the main loan contract.'
        },
        {
            question: 'Does the 2025 RBI guidance impact arbitration?',
            answer: 'Yes. The RBI mandates that banks must treat customers fairly. If a bank uses arbitration to harass a borrower or bypasses mandatory mediation steps, it can be reported to the Banking Ombudsman.'
        }
    ];

    const reviews = [
        {
            name: 'Prakash Deshmukh',
            location: 'Mumbai',
            stars: 5,
            comment: 'I received an arbitration notice for a personal loan I couldnt pay. The specialized lawyer from CredSettle helped me challenge the arbitrator appointment for bias. This bought us time to negotiate a 60% settlement. Truly life-saving.'
        },
        {
            name: 'Arjun Mehra',
            location: 'Delhi',
            stars: 5,
            comment: 'Excellent understanding of Section 9 and Section 34. We successfully stayed a tribunal order that was trying to freeze our business accounts. The speed of arbitration is high, and you need experts who can keep up.'
        },
        {
            name: 'Kavita Reddy',
            location: 'Hyderabad',
            stars: 5,
            comment: 'Very professional. They handled the entire statement of defence and represented us in five hearings. The final award was much lower than what the bank was claiming, thanks to their legal strategy.'
        },
        {
            name: 'Sandeep Bansal',
            location: 'Chandigarh',
            stars: 5,
            comment: 'The arbitration process was intimidating, but having a specialized lawyer made it manageable. We reached a mediation agreement within the arbitration framework, which saved us from a negative award.'
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
                        Best Loan Agreement Arbitration Lawyer<br />
                        <span className="text-blue-300">Expert Legal ADR Services 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Specialized legal representation for arbitration notices, interim relief, and challenging awards. Protect your rights in bank loan disputes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Speak to an Arbitration Expert
                        </Link>
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
                                        Loan Agreement Arbitration Defence
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
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: The Rise of Loan Arbitration in India</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the traditional Indian legal system, a bank recovery case could take anywhere from five to fifteen years to reach a final verdict. For modern financial institutions, this timeline is unacceptable. As a result, almost every loan agreement signed in India since 2010 includes a mandatory arbitration clause. Arbitration is a form of Alternative Dispute Resolution (ADR) where a private individual (the arbitrator) acts as a judge and passes a binding decision (the award) to resolve the dispute.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While arbitration is marketed as faster and more efficient, it can be a double-edged sword for borrowers. The speed of the process means you have less time to prepare your defence, and the finality of the award means your options for appeal are extremely limited. In 2025, knowing how to navigate a loan arbitration is just as important as knowing your bank balance. Without the guidance of a Best Loan Agreement Arbitration Lawyer, a borrower might find themselves at the receiving end of a legally enforceable decree without ever having stepped inside a real courtroom.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide covers everything from the receipt of an arbitration notice to the challenge of a final award. We will look at key sections of the Arbitration and Conciliation Act of 1996, the latest 2025 procedural updates, and strategic legal moves to protect your assets during the process. Debt is a contractual obligation, and arbitration is the contractual mechanism for its resolution. Mastering this mechanism is the first step toward reclaiming your financial autonomy.
                            </p>

                            <h2 id="legal-statute" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The 1996 Arbitration Act: The Foundation of ADR</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The primary statute governing all loan disputes outside of courts is the Arbitration and Conciliation Act, 1996. This law was designed to harmonize Indian practices with international standards set by the UNCITRAL Model Law. Over the years, significant amendments in 2015, 2019, and 2021 have made the process more rigorous and faster.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">For a borrower, the Act provides several key protections:</p>
                            <ol className="list-decimal pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Party Autonomy:</strong> You have the right to participate in the selection of the arbitrator.</li>
                                <li><strong>Due Process:</strong> You must be given proper notice of every hearing.</li>
                                <li><strong>Interim Relief:</strong> You can approach the court or the tribunal for protection of your property while the case is ongoing.</li>
                                <li><strong>Limited Appeal:</strong> While you cannot appeal on facts, you can challenge the fairness of the process.</li>
                            </ol>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the law has also integrated Online Dispute Resolution (ODR). Many loan arbitrations now happen via virtual hearings, which reduces costs for both parties but requires a borrower to be tech-savvy and legally represented to ensure their voice is heard clearly through the digital medium.
                            </p>

                            <h2 id="why-arbitration" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Why Banks Choose Arbitration over Litigation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to realize that banks don’t include arbitration clauses out of kindness. They do it for strategic reasons:
                            </p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Speed of Enforcement:</strong> An arbitral award can be obtained in 12 months, whereas a civil suit might take years.</li>
                                <li><strong>Cost-Sharing:</strong> The borrower is often contractually obligated to pay half (or all) of the arbitration fees, reducing the bank’s recovery overhead.</li>
                                <li><strong>Selection of Forum:</strong> Banks can specify the "Seat of Arbitration" (usually a metropolitan city like Mumbai or Delhi) and the language of the proceedings, making it harder for rural borrowers to defend themselves.</li>
                                <li><strong>Privacy:</strong> Unlike court records, arbitration is confidential. This prevents "Default News" from spreading and protects the bank’s reputation while they deal with bad loans.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Knowing why the bank is using this route helps you build a counter-strategy. If the bank wants speed, you can use procedural challenges to ensure they follow every "t" and "i" of the law, potentially slowing them down to a pace where they are willing to offer a settlement.
                            </p>

                            <h2 id="section-9-relief" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Section 9: Seeking Interim Relief from the Court</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Section 9 is one of the most powerful tools in the Arbitration Act. It allows a party to approach a regular Civil Court (High Court or District Court depending on the claim amount) to ask for interim protective measures.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>For the Bank:</strong> The bank uses Section 9 to ask the court to freeze your accounts or appoint a receiver to take control of your assets before the arbitration even begins. This is done to prevent you from selling the security.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>For the Borrower:</strong> You can use Section 9 to seek a stay on recovery actions. For example, if the bank is trying to repossess your vehicle without following the mandatory notice period, you can approach the court under Section 9 to get an injunction.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, courts have become very strict about Section 9. If a bank gets an order but does not start the actual arbitration within 90 days, the interim order automatically lapses. A skilled lawyer can use this timeline to your advantage.
                            </p>

                            <h2 id="arbitrator-appointment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Section 11 and the Appointment of Arbitrators</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most contentious part of loan arbitration is the question of who serves as the judge. Banks often send a notice saying they have already appointed a sole arbitrator.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Is this legal? According to the Supreme Court ruling in Perkins Eastman vs. HSCC, a party like the bank cannot unilaterally appoint an arbitrator if they have a direct interest in the outcome. This has been a significant win for borrowers across India.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you receive a notice where the bank has already chosen the arbitrator, you must immediately send a formal legal objection. If you do not object, it is considered implied consent. A specialized arbitration lawyer will help you file an application under Section 11 in the High Court to have an independent, court-appointed arbitrator instead. This ensures that the person deciding your fate is neutral and impartial.
                            </p>

                            <h2 id="section-17-measures" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Section 17: Powers of the Arbitrate Tribunal</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the arbitrator is appointed, the power to grant interim relief shifts from the Civil Court to the Arbitrator under Section 17.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers make the mistake of ignoring orders from an arbitrator, thinking the arbitrator is not a real judge. This is a dangerous mistake. Under the 2015 amendment, an order passed by an arbitrator under Section 17 is enforceable just like a court order. If an arbitrator directs you not to sell a certain asset, and you do so anyway, you could be held in contempt of court.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, Section 17 also allows you to present your hardships. You can ask for an interim relaxation of interest or a temporary stay on payments while you wait for the final decision. The tribunal must act judicially, meaning they must hear both sides before passing an order.
                            </p>

                            <h2 id="hearing-process" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Hearing Workflow: From Notice to Final Argument</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A loan arbitration typically follows this structured path:
                            </p>
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-light">
                                <ol className="list-decimal pl-6 space-y-4 text-gray-800">
                                    <li><strong>Invocation Notice (Section 21):</strong> The bank sends a notice saying a dispute has arisen and they want to start arbitration. The process "starts" on the day you receive this.</li>
                                    <li><strong>Statement of Claims (SOC):</strong> The bank files a detailed document showing the loan amount, the default, and the total interest claimed.</li>
                                    <li><strong>Statement of Defence (SOD):</strong> This is your chance. You must challenge their calculations, point out missing documents, and explain why you defaulted (hardship).</li>
                                    <li><strong>Evidence & Cross-Examination:</strong> In high-value cases, witnesses might be called. This is rare in simple personal loan cases but common in commercial builder loans.</li>
                                    <li><strong>Final Arguments:</strong> Both lawyers present their final take on the law and the facts.</li>
                                </ol>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the trend is toward fast track arbitration under Section 29B, which skips oral hearings and decides the case purely based on written documents. If you are in a fast-track process, your Statement of Defence must be incredibly detailed, because you will not get a chance to speak to the arbitrator in person.
                            </p>

                            <h2 id="arbitral-award" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Arbitral Award: What it Means for Your Wallet</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The arbitral award is the final verdict. It is a written document that states exactly how much you owe the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Enforceability under Section 36:</strong> Unlike a recovery certificate from a bank, an arbitral award has the same status as a decree of a Civil Court. This means the bank can take this award to a District Court and ask for execution. The court will then issue warrants for the attachment of your properties, the freezing of your salary, or the auction of your vehicles.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                <strong>Stay on Enforcement:</strong> In the past, simply filing a challenge under Section 34 would stay the award automatically. In 2025, that is no longer the case. You must file a separate application for a stay, and the court will usually ask you to deposit 50 to 75 percent of the award amount in court to get that stay. This makes losing the arbitration a very expensive outcome.
                            </p>

                            <h2 id="section-34-challenge" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Challenging an Award under Section 34</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Can you appeal an arbitration decision? Technically, no. But you can file an application to set aside the award under Section 34.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">The grounds are very narrow. You can only challenge the award if one of the following conditions is met:</p>
                            <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li>You were not given proper notice, which is a violation of natural justice.</li>
                                <li>The arbitrator was biased or unqualified.</li>
                                <li>The award deals with a dispute not covered by the contract.</li>
                                <li>The award conflicts with the public policy of India, a common ground used when interest rates are excessive or procedures were ignored.</li>
                                <li>There is patent illegality on the face of the award, meaning obvious legal errors.</li>
                            </ul>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You have exactly 90 days from the date of receiving the award to file this challenge. If you miss this deadline, the award becomes final permanently. There is no provision for condonation of delay beyond 120 days total.
                            </p>

                            <h2 id="borrower-benefits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Benefits of Arbitration for Borrowers</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While it seems skewed in favor of banks, arbitration offers some "Silver Linings" for borrowers:
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-gray-800">
                                <ul className="space-y-4">
                                    <li><strong>1. Flexibility:</strong> You can choose a time and date for hearings that works for you. No more whole days wasted in a crowded court corridor.</li>
                                    <li><strong>2. Expert Judges:</strong> Unlike some civil judges who handle everything from divorces to property disputes, an arbitrator is usually a lawyer or retired judge with specific experience in finance. They understand "Settlement Language" better.</li>
                                    <li><strong>3. Confidentiality:</strong> Your financial default remains private. This is vital if you are a business owner or a professional whose reputation is part of their livelihood.</li>
                                    <li><strong>4. Informal Environment:</strong> The hearings often happen in private offices or conference rooms. This is less intimidating than a court and allows for more open discussion and "Mediation."</li>
                                </ul>
                            </div>

                            <h2 id="negotiation-mediation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Mediation and Settlement within Arbitration</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The best use of a Loan Agreement Arbitration Lawyer is to use the process as a platform for mediation and settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Under Section 30, an arbitrator is encouraged to help the parties reach a settlement. Often, when the bank realizes that you have a strong defence or that you are aware of your rights, they become much more willing to negotiate. A consent award can be passed, where the bank agrees to a partial waiver of your debt, and the arbitrator records this as a final, binding agreement. This is the best possible outcome of arbitration: the bank recovers their money without a multi-year fight, and you get a significant reduction and a clean resolution.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Always enter an arbitration with the mindset that you are willing to pay, but on fair terms. Use the legal provisions of the Act as your leverage to reach the settlement you deserve.
                            </p>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Empowerment Through Legal Knowledge</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Arbitration is the modern reality of debt resolution in India. It is fast, it is final, and it is formidable. But it is not something to be feared. By understanding the sections of the Arbitration and Conciliation Act and working with a specialized lawyer, you can turn a recovery notice into an opportunity for a financial reset.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Don’t ignore the notice. Don’t boycott the hearings. Instead, use every procedural tool available, from challenging the arbitrator to filing for interim relief, to protect your assets and your dignity. In the world of 2025 finance, knowledge of the law is the best insurance against debt distress.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Client Success and Feedback</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Arbitration</h3>
                                <p className="text-blue-800 mb-6">Don’t let the speed of arbitration catch you off guard. Our team of specialized lawyers is here to defend your interests, challenge biased appointments, and negotiate the best possible settlements.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Book Your Free ADR Consultation
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided in this guide is for educational purposes only and does not constitute formal legal advice. Arbitration proceedings involve strict timelines and legal consequences; always consult a specialized lawyer for your specific case.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Notice Received?</h4>
                                <p className="text-sm text-gray-600 mb-6">Don’t wait. You have limited days to object to an arbitrator appointment.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Respond to Notice
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Invocation Notice Review</p>
                                    <li>v Section 9 & 17 Relief</li>
                                    <li>v Section 34 Challenges</li>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Legal Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">DRT Defence Guide</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement During DRT</Link>
                                    <Link href="/best-lawyer-for-MSME-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Recovery</Link>
                                    <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="block text-sm text-blue-600 hover:underline">Legal Notice Help</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
