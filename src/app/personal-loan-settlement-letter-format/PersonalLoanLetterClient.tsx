'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function PersonalLoanLetterClient() {
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
        { id: 'the-gap-fake-promises', label: 'The WhatsApp Promise Trap' },
        { id: 'anatomy-of-ots', label: 'Anatomy of an OTS Letter' },
        { id: 'mandatory-clauses', label: 'Mandatory Clauses' },
        { id: 'how-to-verify', label: 'Verification Process' },
        { id: 'case-study-1', label: 'Case Study: The Fake PDF' },
        { id: 'case-study-2', label: 'Case Study: Unstamped Letter' },
        { id: 'legal-implications', label: 'Legal Implications' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "What is a One-Time Settlement (OTS) letter?",
            answer: "A One-Time Settlement (OTS) letter is a formal, legally binding document issued by a bank or financial institution that outlines the terms under which they agree to accept a reduced amount as full and final payment for an outstanding personal loan. This letter serves as your primary defense against future claims."
        },
        {
            question: "Can I trust a settlement offer sent via WhatsApp?",
            answer: "No. You should never trust a settlement offer sent exclusively via WhatsApp by a recovery agent. While agents might use WhatsApp for communication, the actual settlement letter must come from the bank's official email address, be printed on their letterhead, and contain proper signatures. Always verify with the branch."
        },
        {
            question: "What should I do if the letter doesn't have a bank stamp?",
            answer: "An unstamped letter or one without the signature of an authorized bank official is not legally binding. You must insist on receiving a stamped and signed physical copy or a digitally signed PDF from the bank's official domain before making any settlement payments."
        },
        {
            question: "How long is a settlement letter valid?",
            answer: "The validity period of a settlement letter is strictly mentioned within the document itself. Usually, banks provide a window of 7 to 15 days to make the payment. If you fail to pay within this timeframe, the offer becomes null and void, and the bank can demand the entire original outstanding amount."
        },
        {
            question: "Will the settlement letter improve my CIBIL score?",
            answer: "A settlement letter confirms the closure of the loan through a compromise, but it will result in your CIBIL report showing the status as 'Settled' rather than 'Closed'. This 'Settled' status negatively impacts your credit score, making it difficult to get unsecured loans in the near future."
        },
        {
            question: "What happens if the bank refuses to issue an NOC after payment?",
            answer: "If you have paid as per the valid OTS letter and the bank delays the No Objection Certificate (NOC), you can file a formal complaint with the bank's grievance redressal officer. If unresolved within 30 days, you can escalate the matter to the RBI Banking Ombudsman using the OTS letter as your primary evidence."
        },
        {
            question: "Does the settlement letter cover legal cases filed against me?",
            answer: "A comprehensive settlement letter must explicitly state that upon successful payment of the agreed amount, the bank will withdraw any ongoing legal proceedings, including Section 138 (cheque bounce) cases or arbitration matters. Check for this clause specifically."
        },
        {
            question: "Can a recovery agency issue the settlement letter?",
            answer: "No. A third party recovery agency cannot issue a legally binding settlement letter on their own letterhead. The letter must always be issued directly by the lending bank or NBFC that disbursed the loan."
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
            <Script id="faq-schema-pl-letter" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-24 pb-16 px-4 md:px-8 overflow-hidden"
                style={{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '35vh',
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
                        Mandatory Legal Protections
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        The Ultimate Guide to a <br />
                        <span className="text-blue-300">Personal Loan Settlement Letter Format</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Borrowers routinely fall for recovery agent scams based on fake promises. This guide acts as a protective shield, showing exactly what a legally binding OTS letter looks like.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify Your Letter Now
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
                                        Settlement Letter Format
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Letter Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction to Loan Settlement Agreements</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The process of settling a personal loan is incredibly stressful. You are dealing with mounting financial pressure, endless phone calls, and the overarching fear of legal action. In this vulnerable state, many borrowers make a fatal mistake: they assume that a verbal agreement or a casual WhatsApp message from a recovery agent is sufficient proof of a settlement. It is not. The only document that stands between you and a future lawsuit is a correctly drafted, legally binding personal loan settlement letter format.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A One Time Settlement letter to bank, commonly referred to as an OTS letter, is the cornerstone of your financial freedom. It acts as an unbreakable contract wherein the bank formally agrees to accept a lesser amount than what is owed, explicitly waiving off the remaining balance. However, the debt recovery industry in India is plagued by rogue agents who issue fraudulent letters. They convince you to pay a large sum, pocket the money or redirect it poorly, and a month later, the bank sends you another legal notice claiming you still owe the full amount. This comprehensive 2500+ word guide is engineered to be your protective shield. We will dissect the anatomy of a genuine loan settlement agreement, expose the most common scams, and teach you how to verify your documents with absolute certainty.
                            </p>

                            <h2 id="the-gap-fake-promises" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Gap: The WhatsApp Promise Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The biggest gap in consumer awareness regarding debt settlement revolves around the medium of communication. In the modern digital age, recovery agents use WhatsApp to constantly badger borrowers. When an agent finally "agrees" to a settlement, they often send a quick text message or a poorly formatted image saying, "Pay INR 50,000 today and your loan is closed." Desperate to end the harassment, borrowers transfer the money immediately.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    The Harsh Reality
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Zero Legal Validity:</strong> A WhatsApp message from a third party agency holds absolutely zero legal weight in a court of law against the actual bank.</li>
                                    <li><strong>The Missing Waiver:</strong> Without a formal document stating that the remaining balance is waived, the money you pay is simply treated as a regular EMI or part payment, not a settlement.</li>
                                    <li><strong>No NOC Guarantee:</strong> If you pay based on a fake promise, the bank is under no obligation to issue a No Objection Certificate (NOC) or update your CIBIL score.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                This gap in knowledge allows recovery agents to meet their monthly targets by extracting partial payments from unsuspecting borrowers. The borrower thinks they have settled their debt, but the bank merely registers a partial payment and continues the recovery process the following month. To bridge this gap, you must demand a formal OTS letter before transferring a single rupee.
                            </p>

                            <h2 id="anatomy-of-ots" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Anatomy of a Genuine OTS Letter</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A genuine personal loan settlement letter format is a highly structured document. It is not a casual note. It is drafted by the legal or recovery department of the bank and follows a specific template. Knowing what a real letter looks like is your first line of defense.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Firstly, the letter must be printed on the official letterhead of the bank or Non Banking Financial Company (NBFC). The letterhead should clearly display the institution's logo, registered office address, Corporate Identity Number (CIN), and official contact details. A letter printed on plain white paper or on the letterhead of a third party collection agency is entirely invalid.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Secondly, the letter must contain a unique reference number or tracking ID. This number is generated by the bank's internal system when the settlement is approved by the higher management. Without this reference number, the letter cannot be verified in the bank's database. Additionally, the document must be clearly dated. The date is critical because settlement offers are usually time bound, and the validity period begins from the date mentioned on the letter.
                            </p>

                            <h2 id="mandatory-clauses" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The 5 Mandatory Clauses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legally binding loan settlement agreement must explicitly contain the following five clauses. If even one of these is missing, you should refuse to make the payment and demand a revised letter.
                            </p>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Clause 1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Total Outstanding & Settled Amount</h5>
                                    <p className="text-sm text-gray-600 m-0">The letter must clearly state the total outstanding amount as of the current date and the exact reduced amount agreed upon for the settlement.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Clause 2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Full and Final Settlement Clause</h5>
                                    <p className="text-sm text-gray-600 m-0">It must state that upon payment of the agreed amount, the account will be considered 'Settled in Full' and no further dues will be claimed.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Clause 3</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Payment Schedule</h5>
                                    <p className="text-sm text-gray-600 m-0">The exact date by which the payment must be credited to the loan account. If it is a staggered settlement, dates for all tranches must be listed.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Clause 4</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Legal Withdrawal Clause</h5>
                                    <p className="text-sm text-gray-600 m-0">If there are ongoing legal cases (e.g. Section 138), the letter must explicitly state that the bank will withdraw these cases upon realization of funds.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors md:col-span-2">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Clause 5</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">NOC Issuance Timeline</h5>
                                    <p className="text-sm text-gray-600 m-0">A commitment stating that a No Objection Certificate (NOC) or No Dues Certificate (NDC) will be issued within a specific timeframe (usually 15 to 30 days) after the payment is successfully processed.</p>
                                </div>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Pro Tip: The letter must be signed by an authorized signatory of the bank. This is usually the branch manager, the regional collection manager, or a designated legal officer. Their name, designation, and contact information must be printed beneath their signature. Furthermore, physical letters must bear the official round stamp of the bank. If you receive a digital copy, it must come directly from an official bank email domain (e.g., @hdfcbank.com, @icicibank.com) and should preferably carry a digital signature certificate.
                            </p>

                            <h2 id="how-to-verify" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Foolproof Verification Process</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Never take an OTS letter at face value, especially if it was handed to you by a field recovery agent or sent via WhatsApp. Scammers have become incredibly adept at forging bank letterheads and signatures using basic image editing software. You must execute a strict verification process before transferring any funds.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step one is to check the sender's email address. If the email comes from a Gmail, Yahoo, or any generic domain, it is immediately suspicious. Banks only communicate through their secure corporate domains. Step two involves calling the bank's official customer care number, not the number provided on the letter. Provide them with your loan account number and the reference number mentioned on the OTS letter. Ask them to confirm if a settlement has indeed been approved for that specific amount on their internal system.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Step three is the most secure method: visit your home branch. Take a printout of the settlement letter and show it to the branch manager or the designated loan officer. They can log into the core banking system and verify the authenticity of the offer. Only when a bank employee confirms the settlement should you proceed with the payment. And remember, the payment must always be made directly to your loan account number, never to a personal account or a third party agency account.
                            </p>

                            <h2 id="case-study-1" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 1: The Fake PDF Scam</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of Rohan, an IT professional from Bangalore who owed INR 8,00,000 on a personal loan. Due to a medical emergency, he defaulted on his payments for six months. He was bombarded with calls from a recovery agency claiming to represent a major private bank. After weeks of negotiation, the agent offered to settle the entire debt for just INR 2,50,000, provided Rohan paid within 24 hours.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The agent sent a PDF document via WhatsApp. It had the bank's logo and stated that the loan would be closed upon payment. Relieved, Rohan transferred the money via NEFT to his loan account. A month later, he received a legal notice from the bank demanding the remaining INR 5,50,000 plus interest.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When Rohan visited the bank with the PDF, the manager revealed the harsh truth. The PDF was a forgery created by the recovery agency. The bank had never approved a settlement. Because the money was deposited into the loan account, the bank simply treated the INR 2,50,000 as a partial payment towards the outstanding arrears. The agency got their commission for recovering funds, and Rohan was left with a massive debt and a worthless piece of paper. If Rohan had verified the letter with the bank's customer care before paying, he could have avoided this devastating scam.
                            </p>

                            <h2 id="case-study-2" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Case Study 2: The Unstamped Letter Dispute</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya, a small business owner in Delhi, faced a similar crisis with a business loan of INR 15,000,000. She negotiated a settlement of INR 8,00,000 directly with a regional collection manager. The manager sent her a plain email stating the agreed amount and asked her to pay immediately to stop a looming legal action.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Priya insisted on a formal OTS letter. The manager reluctantly sent a letter on the bank's letterhead, but it lacked a signature, a date, and the official bank stamp. Furthermore, it did not include the clause stating that ongoing legal actions would be withdrawn. Priya, armed with knowledge about the correct personal loan settlement letter format, refused to pay.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                She escalated the matter to the bank's nodal officer, attaching the defective letter. She demanded a properly formatted, legally binding agreement. Realizing she was an informed borrower, the bank's legal department stepped in and issued a comprehensive, digitally signed OTS letter that included all mandatory clauses, including the withdrawal of a pending Section 138 case. Priya paid the settlement amount securely, received her NOC 15 days later, and successfully closed the chapter without any future legal repercussions. Her insistence on the correct format saved her from potential future litigation.
                            </p>

                            <h2 id="legal-implications" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Legal Implications and CIBIL Impact</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is imperative to understand that an OTS letter is a double edged sword. While it protects you from recovery agents and legal cases, it has a profound impact on your credit history. When a bank agrees to waive off a portion of your principal or interest, they report this action to credit bureaus like CIBIL, Experian, and Equifax.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Your loan account will not be marked as 'Closed' in the traditional sense. It will be marked as 'Settled' or 'Post Write Off Settled'. This status acts as a massive red flag to future lenders. It indicates that you were unable to honor your original financial commitment. Consequently, your CIBIL score will drop significantly, often plunging below 600.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This negative mark remains on your credit report for up to seven years. During this period, obtaining an unsecured loan, such as a new credit card or a personal loan, will be nearly impossible. Secured loans like home loans might be approved, but at exorbitantly high interest rates. Therefore, while securing a valid settlement letter is crucial for your immediate peace of mind, you must be prepared for the long term financial consequences. Settlement should always be the absolute last resort when all other avenues of repayment have been exhausted.
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

                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-2 mt-2 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-5 leading-relaxed px-1">
                                    Are recovery agents threatening you? Let our legal experts intervene today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; Send Legal Notices</p>
                                    <p>&#10003; Verify Fake Letters</p>
                                    <p>&#10003; RBI Compliant Action</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium text-sm">
                                    <li>
                                        <Link href="/personal-loan-settlement" className="text-blue-600 hover:text-blue-800 transition-colors block">
                                            Complete Settlement Guide
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/personal-loan-settlement-cibil-impact" className="text-blue-600 hover:text-blue-800 transition-colors block">
                                            CIBIL Impact & Recovery
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-avoid-debt-settlement-scams-in-india" className="text-blue-600 hover:text-blue-800 transition-colors block">
                                            Avoid Relief Scams
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/loan-written-off-vs-settled-cibil-impact" className="text-blue-600 hover:text-blue-800 transition-colors block">
                                            Write-Off vs Settlement
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
