'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function SarfaesiAuctionClient() {
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
        { id: 'introduction', label: 'The Threat of the SARFAESI Act' },
        { id: 'understanding-notice', label: 'Understanding the Demand Notice' },
        { id: 'crucial-window', label: 'The Crucial 60 Day Window' },
        { id: 'how-to-file-objection', label: 'How to File 13(3A) Objection' },
        { id: 'bank-rejects-objection', label: 'If Bank Rejects Your Objection' },
        { id: 'possession-and-stay', label: 'Possession & DRT Stay Orders' },
        { id: 'filing-sa-drt', label: 'Filing SA in DRT' },
        { id: 'common-mistakes', label: 'Mistakes Borrowers Make' },
        { id: 'success-stories', label: 'Client Success Stories' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
        { id: 'conclusion', label: 'Act Fast to Protect Property' },
    ];

    const faqs = [
        {
            question: 'What is a Section 13(2) notice under the SARFAESI Act?',
            answer: 'It is a formal demand notice issued by a bank after your home loan or LAP becomes an NPA. It gives you a strict 60 day timeline to clear the entire outstanding debt before they initiate property possession.'
        },
        {
            question: 'Can the bank immediately sell my house after 60 days?',
            answer: 'No. After the 60 day period expires, the bank must first issue a possession notice under Section 13(4). They must also publish this notice in two newspapers before they can physically auction the property.'
        },
        {
            question: 'How can I stop the bank from auctioning my property?',
            answer: 'You can file a detailed objection under Section 13(3A) within the 60 days. If the bank proceeds to Section 13(4) possession, you can immediately file a Securitization Application in the DRT under Section 17 to get a stay order.'
        },
        {
            question: 'What happens if the bank does not reply to my 13(3A) objection?',
            answer: 'By law, the bank must reply to your 13(3A) objection within 15 days. If they fail to reply or provide vague reasons, their subsequent possession actions become legally flawed and are easily challenged in the DRT.'
        },
        {
            question: 'Can I approach a civil court to get a stay order on the auction?',
            answer: 'No. Under Section 34 of the SARFAESI Act, civil courts are strictly barred from interfering in SARFAESI matters. You must approach the Debt Recovery Tribunal (DRT) to seek legal relief.'
        },
        {
            question: 'Is it possible to negotiate a settlement after receiving a 13(2) notice?',
            answer: 'Absolutely. Banks often prefer negotiated settlements over lengthy DRT litigation. You can offer a One Time Settlement (OTS) or a restructuring plan even after the notice has been issued.'
        },
        {
            question: 'Do I have to deposit money in the DRT to file an appeal?',
            answer: 'No, you do not need to deposit a percentage of the debt just to file a Section 17 application in the DRT. However, if you appeal a DRT order in the DRAT, a mandatory pre deposit of 25 to 50 percent is required.'
        }
    ];

    const reviews = [
        {
            name: 'Vikram Mehta',
            location: 'Mumbai',
            stars: 5,
            comment: 'Receiving the SARFAESI notice was the scariest moment of my life. I thought I would lose my home in two months. The legal team drafted a brilliant 13(3A) objection pointing out NPA calculation errors. This forced the bank to the negotiating table, and we saved our house.'
        },
        {
            name: 'Sunita Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'The bank managers were extremely aggressive and threatened to auction my shop next week. I learned here that they cannot bypass the 60 day window or the DRT process. We filed a Securitization Application and got a stay order within days. Exceptional guidance.'
        },
        {
            name: 'Ravi Kumar',
            location: 'Delhi',
            stars: 5,
            comment: 'I made the mistake of ignoring the 13(2) notice initially. Luckily, I found this resource before the bank took physical possession. The clear explanation of the legal timeline helped me understand my rights. We negotiated a restructuring plan and stopped the auction completely.'
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
                        SARFAESI Act Section 13(2) Notice:<br />
                        <span className="text-blue-300">How to Stop Bank Auctions</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Discover the legal strategies to defend your home or business property against aggressive bank recovery. Learn how to use the 60 day window and secure DRT stay orders effectively.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a DRT Defence Lawyer
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
                                        SARFAESI Act Property Auction Defence
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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Introduction: The Threat of the SARFAESI Act</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Receiving a SARFAESI Act Section 13(2) notice is the ultimate nightmare for any homeowner or business owner. It means the bank is legally preparing to bypass civil courts and seize your property directly. However, this notice is not an eviction order; it is the beginning of a strict 60 day legal timeline where your immediate actions can halt the auction process entirely. Before the Securitization and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act was passed in 2002, banks had to file lengthy civil suits in regular courts to recover their dues. Borrowers could easily stall these cases for decades. To empower the banking sector, the government introduced this draconian law, which grants extraordinary powers to secured creditors. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have a Home Loan, a Loan Against Property (LAP), or a business loan secured by real estate, you fall directly under the jurisdiction of the SARFAESI Act. Once your loan account is classified as a Non Performing Asset (NPA), which typically happens when you fail to pay your Equated Monthly Installments (EMIs) for 90 consecutive days, the bank gains the legal right to invoke this Act. The most terrifying aspect for borrowers is that the bank does not need to ask a judge for permission to auction your house. The law allows them to act as their own judge and executioner, up to a certain point. This unchecked power often leads to severe abuse by bank managers and aggressive recovery agents who use the threat of auction to terrorize defaulting borrowers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                But the law is not entirely one sided. In its wisdom, the parliament and the Supreme Court of India have built several critical safety valves into the SARFAESI framework. These safeguards are designed to prevent banks from selling properties arbitrarily, at throwaway prices, or without giving the borrower a fair chance to rectify their financial default. The problem is that 90 percent of borrowers are entirely unaware of their rights under this very law. They panic upon receiving the legal notice, ignore it out of fear, and inadvertently waive their statutory rights, practically handing their property over to the bank on a silver platter. This comprehensive guide will dissect the SARFAESI process step by step, arming you with the precise legal strategies required to fight back, delay the auction, and force the bank into a negotiated settlement.
                            </p>
                            
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Legal Timeline: The SARFAESI Process</h3>
                                <div className="space-y-4">
                                    <div className="flex flex-col md:flex-row bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                        <div className="md:w-1/4 font-bold text-blue-900 mb-2 md:mb-0">Day 1 to 90</div>
                                        <div className="md:w-3/4 text-gray-700">You miss three consecutive EMI payments. On the 91st day, the bank officially classifies your loan account as a Non Performing Asset (NPA) in accordance with RBI guidelines.</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                        <div className="md:w-1/4 font-bold text-blue-900 mb-2 md:mb-0">The 13(2) Notice</div>
                                        <div className="md:w-3/4 text-gray-700">The bank issues a formal demand notice under Section 13(2), demanding that you clear the entire outstanding loan amount (not just the missed EMIs) within exactly 60 days.</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                        <div className="md:w-1/4 font-bold text-blue-900 mb-2 md:mb-0">The 60 Day Window</div>
                                        <div className="md:w-3/4 text-gray-700">During this period, you have the statutory right to file a legal objection under Section 13(3A). The bank cannot touch your property during these 60 days.</div>
                                    </div>
                                    <div className="flex flex-col md:flex-row bg-white p-4 rounded-xl shadow-sm border border-gray-200">
                                        <div className="md:w-1/4 font-bold text-blue-900 mb-2 md:mb-0">Section 13(4) Action</div>
                                        <div className="md:w-3/4 text-gray-700">If 60 days pass without full payment or a valid stay order, the bank invokes Section 13(4) to take symbolic or physical possession of the property, paving the way for a public auction.</div>
                                    </div>
                                </div>
                            </div>

                            <h2 id="understanding-notice" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding the Section 13(2) Demand Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Section 13(2) notice is the formal commencement of the legal battle. It is a strictly drafted legal document that must contain specific details to be considered valid under the law. When you receive this notice via registered post or hand delivery, the very first thing you must do is check the date of issuance and the date you received it. The 60 day countdown begins from the date of receipt, not the date printed on the letterhead. Keep the envelope; the postal stamp is your proof of timeline.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A valid 13(2) notice must clearly state the exact amount due, including the principal outstanding, the accumulated interest, and any penal charges. It must explicitly identify the secured asset that is mortgaged with the bank. Most importantly, it must clearly state that if you fail to pay the demanded amount within 60 days, the bank will exercise its rights under Section 13(4) of the Act. If the notice is vague, if it does not specify the exact amount, or if it lists a property that is not actually mortgaged, the notice is legally defective. A defective notice is a golden opportunity for your lawyer to challenge the entire recovery proceeding at a later stage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many borrowers mistakenly believe that paying the three missed EMIs will automatically cancel the 13(2) notice. This is incorrect. Once the notice is issued, the bank demands the entire outstanding principal. While banks do have the internal discretion to "upgrade" the account if you pay the overdue arrears and normalize the loan, they are not legally obligated to do so. Therefore, simply mailing a cheque for the missed EMIs without a formal written agreement from the bank manager is a very dangerous strategy.
                            </p>

                            <h2 id="crucial-window" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Crucial 60 Day Window: Your First Line of Defence</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The 60 days following the receipt of the 13(2) notice are the most critical period in your fight to save your property. This is your statutory breathing space. During this window, the bank is legally paralyzed; they cannot visit your property to stick a possession notice, they cannot publish your name in the newspaper, and they certainly cannot conduct an auction. This time is granted to you by the legislature to arrange funds, negotiate a settlement, or mount a legal defence.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you intend to negotiate a settlement, now is the time to explore your options. You might want to understand <Link href="/what-is-the-success-rate-of-debt-settlement-programs" className="text-blue-600 hover:underline">what is the success rate of debt settlement programs</Link> for secured loans. While unsecured loans are easier to settle, banks will entertain One Time Settlement (OTS) offers for secured loans if they foresee a prolonged legal battle or if the property valuation has dropped. If you are considering this path, reading about whether <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:underline">is loan settlement a good option for borrowers</Link> facing property auctions will provide valuable perspective.
                            </p>
                            
                            <h3 id="how-to-file-objection" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-20">How to File a Section 13(3A) Objection</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most powerful tool available to you during the 60 day window is Section 13(3A) of the SARFAESI Act. This section grants the borrower the absolute right to submit a written representation or objection to the demand notice. This is not a simple letter asking for more time; it must be a meticulously drafted legal document that challenges the validity of the bank's claims. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                What should you include in a 13(3A) objection? You must scrutinize the bank's statement of accounts. Are they charging penal interest on penal interest? This is illegal under RBI guidelines. Did they classify the account as an NPA prematurely, perhaps on the 85th day instead of the 91st? Did they fail to disburse a promised tranche of the loan, which caused your business to fail and led to the default in the first place? Every single procedural error, mathematical discrepancy, and breach of contract by the bank must be detailed in this objection. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sending this objection achieves two critical things. First, it forces the bank to review your file carefully. Second, and more importantly, it sets a legal trap. Many banks, in their arrogance and rush to auction properties, simply ignore borrower objections. This brings us to the most crucial mandate of the SARFAESI Act.
                            </p>

                            <h2 id="bank-rejects-objection" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">What Happens if the Bank Rejects Your Objection?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The law explicitly states that if a borrower files an objection under Section 13(3A), the secured creditor (the bank) MUST consider the representation. If the bank decides that the objection is not acceptable or tenable, they MUST communicate the reasons for non acceptance to the borrower within exactly 15 days of receiving the objection.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 15 day rule is mandatory, not discretionary. The Supreme Court of India has ruled in multiple landmark judgments that if a bank fails to reply to a 13(3A) objection within 15 days, or if they reply with a generic, copy pasted response that does not address the specific points raised by the borrower, the entire subsequent recovery proceeding is vitiated. In simple terms, if the bank ignores your objection letter, their right to auction your property is legally compromised.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank does reply and rejects your objection, you cannot immediately run to a court to challenge their rejection letter. The SARFAESI Act specifically bars you from challenging the rejection at this stage. You must wait for the 60 day notice period to expire and for the bank to take their next step under Section 13(4). However, the rejection letter (or the lack of it) forms the core foundation of your upcoming legal battle in the Debt Recovery Tribunal.
                            </p>

                            <h2 id="possession-and-stay" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Section 13(4) Possession and DRT Stay Orders</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If the 60 days expire and the debt remains unpaid, the bank’s powers expand dramatically. Under Section 13(4), the bank is authorized to take possession of the secured asset. There are two types of possession: symbolic and physical. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Symbolic possession means the bank authorized officer visits the property, hands you a possession notice, and affixes a copy of that notice on the outer door of your house. You are still allowed to live in the house, but legally, the control has shifted to the bank. They will then publish this possession notice in two leading newspapers (one in English and one in the local language). 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you refuse to hand over physical possession peacefully, the bank cannot use their own bouncers to throw you out. They must apply to the Chief Metropolitan Magistrate (CMM) or District Magistrate (DM) under Section 14 of the Act. The magistrate will then order the local police to assist the bank in taking physical possession of the property. This is the stage where you face actual eviction.
                            </p>
                            
                            <h3 id="filing-sa-drt" className="text-2xl font-bold text-gray-800 mb-4 mt-8 scroll-mt-20">Filing a Securitization Application (SA) in DRT</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your remedy against the bank's actions lies exclusively with the Debt Recovery Tribunal (DRT). Section 34 of the SARFAESI Act strictly prohibits civil courts from granting injunctions or stay orders against bank recovery actions. You must file a Securitization Application (SA) under Section 17 of the Act in the DRT having jurisdiction over your area.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You have exactly 45 days from the date the bank takes measures under Section 13(4) (usually the date of the possession notice) to file your SA in the DRT. Missing this 45 day deadline is fatal to your case; the DRT rarely forgives delays. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When your lawyer files the SA, they will simultaneously file an Interlocutory Application (IA) pleading for an immediate stay order on the auction process. To secure a stay, your lawyer must demonstrate a prima facie case. This is where your previously ignored 13(3A) objection becomes incredibly valuable. If your lawyer shows the DRT judge that the bank violated the mandatory 15 day reply rule, the judge is highly likely to grant an immediate stay on the auction. Other strong grounds for a stay include improper property valuation (the bank trying to sell it at distress value), failure to publish notices in the correct newspapers, or fundamental errors in the original NPA classification.
                            </p>
                            
                            <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Do's and Don'ts During SARFAESI Action</h3>
                                
                                <div className="mb-6">
                                    <h4 className="text-lg font-bold text-green-700 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                        Do's (Crucial Actions)
                                    </h4>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Always accept the 13(2) notice from the postman. Refusing delivery is considered legally valid service by the courts.</li>
                                        <li>Note the exact date of receipt and keep the envelope safe.</li>
                                        <li>Consult a specialized DRT lawyer immediately; general civil lawyers often struggle with strict SARFAESI timelines.</li>
                                        <li>Draft and send a comprehensive Section 13(3A) objection within the 60 day window.</li>
                                        <li>Keep a strict eye on local newspapers for your property's possession or auction notice.</li>
                                    </ul>
                                </div>
                                
                                <div>
                                    <h4 className="text-lg font-bold text-red-700 mb-3 flex items-center">
                                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" /></svg>
                                        Don'ts (Fatal Mistakes)
                                    </h4>
                                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                                        <li>Do not ignore the notice hoping the bank will forget about it. They will not.</li>
                                        <li>Do not file a case in a regular civil court; it will be dismissed, wasting precious time and money.</li>
                                        <li>Do not sign any blank documents or voluntary surrender letters offered by recovery agents.</li>
                                        <li>Do not miss the 45 day deadline to approach the DRT after Section 13(4) possession.</li>
                                        <li>Do not assume you need to deposit the entire loan amount to get a stay order in the DRT.</li>
                                    </ul>
                                </div>
                            </div>

                            <h2 id="common-mistakes" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Common Mistakes Borrowers Make During Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Beyond the legal procedural errors, borrowers often make strategic mistakes that weaken their position. The most common error is attempting to navigate the settlement process without legal backing. While wondering <Link href="/can-i-settle-my-debts-without-using-a-third-party-company" className="text-blue-600 hover:underline">can I settle my debts without using a third party company</Link> is a valid question, negotiating with a bank that has already initiated SARFAESI action requires immense legal leverage. If you try to negotiate without having a pending DRT case or a strong legal objection on record, the bank will dictate terms and offer zero concessions. They know they have a loaded gun pointed at your property.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another massive mistake is abandoning the property after receiving the possession notice. The bank's primary goal is to liquidate the asset. If the property is vacant, it is incredibly easy for them to take physical possession and sell it. If you are residing in the property, the process of eviction via the District Magistrate takes significant time, which provides your legal counsel the necessary runway to secure stay orders from higher courts if the DRT rejects your initial plea.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Lastly, borrowers often fall victim to predatory refinancing schemes. Fearing the auction, they take high interest loans from unregulated private moneylenders to pay off the bank. This simply transfers the debt from a regulated entity bound by RBI rules to a local thug who operates outside the law. Always seek legal protection before considering desperate financial measures that could jeopardize your physical safety.
                            </p>

                            <h2 id="success-stories" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Client Success Stories: Saving Homes from Auction</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To illustrate that the SARFAESI Act is not invincible, here are real experiences from borrowers who fought back using the precise legal strategies detailed in this guide.
                            </p>
                            
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
                            <div className="space-y-6 mb-12">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Conclusion: Act Fast to Protect Your Property</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The SARFAESI Act is undoubtedly a harsh law designed to favor banks, but it is not a death sentence for your property ownership. The legislation is heavily regulated by strict procedural timelines that banks frequently violate in their haste to recover funds. Your defence relies entirely on your ability to spot these procedural errors and leverage them within the strict statutory deadlines provided by the law.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have received a Section 13(2) notice, the clock is ticking. You have exactly 60 days to formulate a response, file your Section 13(3A) objection, and prepare for the inevitable battle in the Debt Recovery Tribunal. Silence and inaction are the greatest gifts you can give to a hostile bank. By securing specialized legal counsel, challenging the bank's claims aggressively, and utilizing the protective mechanisms within the DRT, you can stop the auction process, protect your family's home or business, and force the lenders to agree to a fair and sustainable resolution. Stand your ground, know your rights, and fight back.
                            </p>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop The Auction Process Immediately</h3>
                                <p className="text-blue-800 mb-6">Do not let the bank bypass the law. Our specialized DRT lawyers can draft powerful 13(3A) objections and secure immediate stay orders to protect your property from illegal auctions.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Immediate Legal Help
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The content provided here is for informational purposes only and is not intended as legal advice. SARFAESI Act matters involve strict statutory deadlines and complex tribunal litigation. Always consult with a qualified DRT lawyer regarding your specific property dispute and recovery notice.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Urgent DRT Stay</h4>
                                <p className="text-sm text-gray-600 mb-6">Has the bank issued a possession notice? We file Section 17 applications swiftly.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Contact DRT Lawyer
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>13(2) Notice Reply</p>
                                    <p>DRT SA Filing</p>
                                    <p>Auction Stay Orders</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/what-is-the-success-rate-of-debt-settlement-programs" className="block text-sm text-blue-600 hover:underline">Settlement Success Rate</Link>
                                    <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="block text-sm text-blue-600 hover:underline">Is Settlement Right?</Link>
                                    <Link href="/can-i-settle-my-debts-without-using-a-third-party-company" className="block text-sm text-blue-600 hover:underline">Direct Negotiation Guide</Link>
                                    <Link href="/loan-settlement" className="block text-sm text-blue-600 hover:underline">Total Debt Relief</Link>
                                </nav>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}
