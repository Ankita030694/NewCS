'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function WrittenOffClient() {
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
        { id: 'dangerous-misconception', label: 'The Misconception of a "Write-Off"' },
        { id: 'decoding-bank-jargon', label: 'Decoding: What is a Write-Off?' },
        { id: 'accounting-maneuver', label: 'An Accounting and Tax Maneuver' },
        { id: 'legal-right-to-sue', label: 'The Bank Can Still Sue You' },
        { id: 'what-is-settled', label: 'What Does "Settled" Mean?' },
        { id: 'legal-closure', label: 'Legal Closure of the Debt Contract' },
        { id: 'the-noc-shield', label: 'The NOC Shield' },
        { id: 'cibil-score-impact', label: 'Written-Off vs Settled on CIBIL' },
        { id: 'which-is-worse', label: 'Which Tag is Worse?' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'What does a "Written Off" status mean on my CIBIL report?',
            answer: 'It means the bank has internally removed your loan from its active balance sheet because you haven\'t paid for over 180 days. It does NOT mean the bank has forgiven the debt.'
        },
        {
            question: 'Can the bank still sue me if the loan is written off?',
            answer: 'Yes, absolutely. A write-off is purely an accounting procedure. The bank retains the full legal right to pursue civil suits, DRT cases, or use recovery agents to collect the debt.'
        },
        {
            question: 'Which is worse for my CIBIL score: Written-Off or Settled?',
            answer: 'Both severely damage your score, but a "Written-Off" status is generally worse. It indicates a total failure to engage with the bank, whereas "Settled" shows you at least made an effort to close the liability.'
        },
        {
            question: 'Can I negotiate a settlement after my loan has been written off?',
            answer: 'Yes. In fact, this is often the best time to negotiate a One-Time Settlement (OTS), as the bank has already provisioned for the loss and may accept a much larger discount on the principal.'
        },
        {
            question: 'Do I get an NOC after a write-off?',
            answer: 'No. You only receive a No Objection Certificate (NOC) after you successfully complete a formal settlement agreement and pay the agreed-upon amount.'
        }
    ];

    const reviews = [
        {
            name: 'Karan Malhotra',
            location: 'New Delhi',
            stars: 5,
            comment: 'I thought my credit card debt was gone when my CIBIL showed it as written off. A year later, a legal notice arrived. The lawyers here helped me convert that dangerous write-off into a formal settlement with an NOC.'
        },
        {
            name: 'Neha Gupta',
            location: 'Mumbai',
            stars: 5,
            comment: 'My CIBIL was stuck at 500 for years due to a "Written-Off" personal loan. I couldn\'t get a home loan. The team negotiated a post-write-off settlement for me, legally closing the account so I could start rebuilding my credit.'
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
                        Loan Written-Off vs Settled: <br />
                        <span className="text-blue-300">Which is Worse for CIBIL?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Shatter the dangerous myth that a write-off means debt forgiveness. Learn the legal reality of what banks do behind the scenes.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Convert Your Write-Off into a Settlement
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
                                        Write-Offs vs Settlements
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
                                Every year, thousands of borrowers receive a bank notification stating their loan has been "Written Off." Many celebrate, mistakenly believing the bank has forgiven the debt out of generosity. This guide shatters that dangerous myth, explaining the critical legal differences between an accounting write-off and a formal settlement, and revealing which tag ruins your CIBIL score more.
                            </p>

                            <h2 id="dangerous-misconception" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Dangerous Misconception of a "Write-Off"</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The phrase "Written Off" sounds incredibly final and absolute. When a distressed borrower who has been dodging collection calls for a year finally pulls their CIBIL report and sees that a Rs. 5 Lakh personal loan has a balance of zero and is marked as "Written Off," they often breathe a sigh of relief. They assume the bank has simply given up, absorbed the loss, and closed the chapter.
                            </p>
                            
                            {/* Section Type: Alert Box */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl mb-8">
                                <h4 className="text-xl font-bold text-red-900 mb-2 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    Legal Warning: Never Ignore a Write-Off
                                </h4>
                                <p className="text-red-800 text-sm leading-relaxed">
                                    A loan write-off is NOT a debt waiver. The bank has not forgiven a single rupee of your debt. They have merely moved the bad debt off their active balance sheet for tax and regulatory purposes. The legal contract remains entirely valid, and you are still legally obligated to repay the full amount.
                                </p>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                This misconception is dangerous because borrowers often stop taking defensive legal action. They might ignore subsequent notices or court summons, thinking the matter is resolved, only to have their bank accounts suddenly frozen a year later when the bank quietly escalates the recovery process.
                            </p>

                            <h2 id="decoding-bank-jargon" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Decoding Bank Jargon: What is a Write-Off?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To understand why a write-off occurs, you must look at it from the perspective of banking regulations rather than from the perspective of the borrower.
                            </p>

                            {/* Section Type: Insight Block */}
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-200 mb-8">
                                <h4 className="font-bold text-blue-900 text-lg mb-3 flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                                    The Bank's Perspective: Why Do They Write Off Loans?
                                </h4>
                                <p className="text-blue-800 text-sm leading-relaxed">
                                    When an account remains unpaid for 90 days, it becomes a Non-Performing Asset (NPA). As the default stretches past 180 days or a year, RBI regulations require the bank to provision (set aside) capital from their profits to cover the expected loss. Carrying high NPA numbers looks terrible to investors and regulators. Therefore, banks "write off" these toxic assets, removing them from the active balance sheet. This allows the bank to claim a tax deduction on the loss and instantly cleans up their public NPA ratios. It is entirely a financial engineering tactic.
                                </p>
                            </div>

                            <h3 id="accounting-maneuver" className="text-2xl font-bold text-gray-800 mt-8 mb-4">It Is Merely an Accounting and Tax Maneuver</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The crucial takeaway is that a write-off happens between the bank and the tax authorities, not between the bank and you. The bank tells the government, "We don't expect to recover this soon, let us take a tax break." The underlying contract between the bank and the borrower is completely unaffected by this internal ledger adjustment.
                            </p>

                            <h3 id="legal-right-to-sue" className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Bank Still Has the Legal Right to Sue</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                After writing off the loan, the bank moves the account to a specialized legal recovery division or sells the debt portfolio entirely to an Asset Reconstruction Company (ARC). These entities are ruthless. Because the bank has already taken the tax benefit, any future recovery is pure profit.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                They retain the full legal right to send recovery agents to your home (see <Link href="/nbfc-recovery-agent-home-visit-stop" className="text-blue-600 hover:underline">how to stop nbfc recovery agent home visits</Link>), file civil recovery suits in district courts, or invoke the SARFAESI Act to auction your property if collateral was involved. A write-off provides absolutely zero legal protection to the borrower.
                            </p>

                            <h2 id="what-is-settled" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">What Does a "Settled" Status Mean?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A "Settled" status is fundamentally different. It is a mutually agreed-upon modification of the original loan contract. When you face genuine financial hardship, you approach the bank and state that you cannot pay the full outstanding amount. The bank agrees to accept a lesser amount (a lump sum) as full and final payment.
                            </p>

                            <h3 id="legal-closure" className="text-2xl font-bold text-gray-800 mt-8 mb-4">The Legal Closure of the Debt Contract</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once the settlement amount is paid, the bank legally closes the account. Unlike a write-off, a settlement permanently terminates the bank's right to pursue future legal action or recovery efforts for that specific debt. The contract is resolved. If the bank ever attempts to sue you later, you simply present the settlement agreement to the judge, and the case is immediately dismissed.
                            </p>

                            <h3 id="the-noc-shield" className="text-2xl font-bold text-gray-800 mt-8 mb-4">The NOC (No Objection Certificate) Shield</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The ultimate proof of a settlement is the No Objection Certificate (NOC) or No Dues Certificate. This is a formal document on bank letterhead explicitly stating that you owe them nothing further and that the loan account is officially closed. A borrower whose loan is merely "written off" will never receive an NOC, leaving them vulnerable to future extortion.
                            </p>

                            {/* Section Type: Side-by-Side Comparison List */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 overflow-x-auto">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Written-Off vs. Settled: Quick Comparison</h3>
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-blue-100 text-blue-900">
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tl-xl w-1/3">Feature</th>
                                            <th className="p-4 font-bold border-b border-gray-300 w-1/3">Written-Off Status</th>
                                            <th className="p-4 font-bold border-b border-gray-300 rounded-tr-xl w-1/3">Settled Status</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50">Legal Contract Status</td>
                                            <td className="p-4 text-red-600 font-bold border-l border-gray-200">Still Active (Debt Owed)</td>
                                            <td className="p-4 text-green-600 font-bold border-l border-gray-200">Permanently Closed</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50">NOC Issued?</td>
                                            <td className="p-4 border-l border-gray-200">No</td>
                                            <td className="p-4 border-l border-gray-200">Yes</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50">Future Recovery Threats</td>
                                            <td className="p-4 text-red-600 font-bold border-l border-gray-200">Yes, indefinite</td>
                                            <td className="p-4 text-green-600 font-bold border-l border-gray-200">No, zero risk</td>
                                        </tr>
                                        <tr>
                                            <td className="p-4 font-semibold text-gray-800 bg-gray-50 rounded-bl-xl">Who Took the Loss?</td>
                                            <td className="p-4 border-l border-gray-200">Bank (Internal Provisioning)</td>
                                            <td className="p-4 border-l border-gray-200 rounded-br-xl">Bank (Formal Discount)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="cibil-score-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Written-Off vs Settled: The CIBIL Score Impact</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Both statuses are negative markers on your credit report. Neither is a "good" outcome for your CIBIL score. However, there is a distinct hierarchy of damage.
                            </p>

                            <h3 id="which-is-worse" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Which is Worse for Your Credit Future?</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A <strong>Written-Off</strong> status is significantly worse for your CIBIL score. It tells future lenders that you completely abandoned your financial obligations, forcing the bank to internally absorb the loss without any cooperation from you. It signals total financial irresponsibility. Almost no reputable bank will issue a fresh loan or credit card to an individual with an active write-off on their file.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A <strong>Settled</strong> status, while still a severe penalty that will drop your score by 75 to 100 points, carries slightly less stigma over the long term. It indicates that while you faced genuine hardship, you ultimately stepped up, negotiated, and paid what you could to close the account legally. Understanding the nuanced <Link href="/impact-of-loan-settlement-on-cibil-score" className="text-blue-600 hover:underline">impact of loan settlement on CIBIL score</Link> is vital for planning your financial recovery. While it takes years to recover from a settlement, it is entirely possible to slowly rebuild your credit using secured credit cards, whereas a write-off acts as a permanent block until resolved.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Therefore, if you discover a loan has been written off, your immediate goal should be to hire the <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="text-blue-600 hover:underline">best lawyer for bank loan recovery defence</Link> to proactively approach the bank and formally convert that dangerous write-off into a clean settlement.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on Write-Offs</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Leave Yourself Legally Vulnerable</h3>
                                <p className="text-blue-800 mb-6">A write-off is a ticking time bomb. Our expert lawyers can negotiate with the bank to convert your written-off account into a formal, legally binding settlement with a guaranteed NOC, protecting you from future lawsuits.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Help to Settle
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The explanation of accounting write-offs and legal settlements is for educational purposes. Banking regulations and tax laws are subject to change. Always consult with a qualified advocate to verify the specific legal status of your loan account.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Secure Your NOC</h4>
                                <p className="text-sm text-gray-600 mb-6">A write-off offers no legal protection. Hire a lawyer to secure a formal settlement today.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Talk to an Expert
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Negotiate Deep Discounts</p>
                                    <p>✔ Demand Formal NOCs</p>
                                    <p>✔ Stop Future Lawsuits</p>
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
