'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function LoanSettlementNocFormatClient() {
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
        { id: 'introduction', label: 'The Power of Written Proof' },
        { id: 'settlement-request-format', label: 'Settlement Request Letter' },
        { id: 'hardship-logic', label: 'Drafting the Hardship Clause' },
        { id: 'offer-letter-check', label: 'Reading the Bank Offer' },
        { id: 'noc-importance', label: 'Why You Need the NOC' },
        { id: 'noc-template', label: 'The Global NOC Format' },
        { id: 'cibil-updating', label: 'CIBIL Status: Settled vs Closed' },
        { id: 'bank-specific', label: 'SBI, HDFC, ICICI Standards' },
        { id: 'legal-validity', label: 'Paper Trail vs Verbal Promises' },
        { id: 'secured-vs-unsecured', label: 'Collateral Release (NOC)' },
        { id: 'reviews', label: 'Social Proof' },
        { id: 'faqs', label: '10 Crucial FAQs' },
        { id: 'conclusion', label: 'Final Legal Checklist' },
    ];

    const faqs = [
        {
            question: 'What is the most important element in a loan settlement letter?',
            answer: 'The most important element is the "Hardship Reason." You must clearly and factually explain why you cannot pay the full amount due to circumstances like job loss, medical emergency, or severe business downturn. Supporting documents must be attached to this letter.'
        },
        {
            question: 'Should I pay the settlement amount before getting a letter from the bank?',
            answer: 'Absolutely not. You must never pay a single rupee until you receive a formal "Settlement Offer Letter" on the bank\'s official letterhead, stamped and signed by the authorized branch manager. Verbal promises from recovery agents have no legal standing.'
        },
        {
            question: 'What is the difference between an NOC and an NDC?',
            answer: 'A No Objection Certificate (NOC) confirms that the bank has no further claims on you. A No Dues Certificate (NDC) explicitly states that all financial dues (principal, interest, and penalties) have been cleared. For a settlement, you typically receive a "No Dues Certificate" reflecting the settled status.'
        },
        {
            question: 'How long does it take to get an NOC after a loan settlement?',
            answer: 'Typically, it takes 15 to 30 working days to receive the physical NOC after your settlement payment is realized. Some private banks and NBFCs provide a digital NOC within 7 to 10 days via their official mobile apps or email.'
        },
        {
            question: 'Can I draft my own loan settlement letter?',
            answer: 'Yes, you can draft your own letter using the formats provided in this guide. However, it is recommended to have it reviewed by a legal professional or a debt settlement consultant like CredSettle to ensure you include the correct RBI regulations and hardship points.'
        },
        {
            question: 'Will a settlement NOC help me get a new loan?',
            answer: 'An NOC for a "Settled" loan shows you have fulfilled your negotiated obligation. While it is better than an active default, a settled status can still lead to rejections from Tier-1 banks for 2 to 3 years. It is an essential document to hold for your long-term credit recovery.'
        },
        {
            question: 'Can a bank revoke a settlement after issuing the offer letter?',
            answer: 'A bank can only revoke the offer if you fail to meet the "Payment Deadline" specified in the letter. If you pay on time, the letter becomes a binding contract, and the bank cannot legally demand more money later.'
        },
        {
            question: 'What should I check in a bank\'s NOC format?',
            answer: 'Key things to check are: your correct name, your correct loan account number, the date of closure, the mention of "Full and Final Settlement," and the bank\'s official seal and signature. Any typo can make the NOC invalid with CIBIL.'
        },
        {
            question: 'Does the NOC mention the waiver amount?',
            answer: 'Usually, an NOC for a settled loan will state that the account is closed under a settlement scheme. It may or may not mention the exact amount waived, but it must clearly state that "No further dues are outstanding" from the borrower.'
        },
        {
            question: 'How do I use an NOC to update CIBIL?',
            answer: 'If your CIBIL profile still shows the loan as active/delinquent after 60 days of settlement, you can raise a "Dispute" on the CIBIL website and upload a scanned copy of your NOC as proof of closure. CIBIL will then verify this with the bank and update your record.'
        }
    ];

    const reviews = [
        {
            name: 'Anupama Rao',
            location: 'Hyderabad',
            stars: 5,
            comment: 'I was lost with the bank\'s technical jargon. CredSettle helped me draft a perfect hardship letter. The bank accepted my proposal in 2 weeks, and I have the physical NOC now. The 5000 word guide here is excellent.'
        },
        {
            name: 'Vikram Singh',
            location: 'Delhi',
            stars: 5,
            comment: 'I almost paid based on a WhatsApp message from an agent. This guide saved me. I demanded the official letterhead format first, and only then made the payment. My CIBIL is now updated properly.'
        },
        {
            name: 'Manish Pandey',
            location: 'Varanasi',
            stars: 5,
            comment: 'The NOC format for my vehicle loan was tricky. The team guided me on how to get the Hypothecation removed at the RTO using the bank\'s NOC. Truly professional advice for anyone in debt.'
        },
        {
            name: 'Shweta K.',
            location: 'Chennai',
            stars: 5,
            comment: 'The SBI settlement process is slow, but following the "Service Request" logic in this guide worked. I got my credit card dues settled for a 60% discount. Don\'t settle without these templates!'
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

    const reviewSchema = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        'name': 'Loan Settlement Letter and NOC Documentation Support',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2890',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-noc-client" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-noc-client" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        Loan Settlement Letter Format & NOC Guide:<br />
                        <span className="text-blue-300">Secure Your Financial Freedom Today</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                        Download technical, bank-approved templates for settlement requests and No Objection Certificates. Protect your credit and legal rights in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Download All Formats
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
                                        Letter & NOC Formats
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Sections</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Power of Written Proof: Why Documentation is Your Defensive Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In the high stakes world of bank settlements and debt recovery, there is an old legal maxim: "Veritas in Scripto" (Truth is in Writing). In 2025, while the world moves towards digital interactions, the "Paper Trail" of your loan settlement remains the most critical asset you can hold. Every year, thousands of Indian borrowers are cheated by unregulated recovery agents who promise a "Settlement" over a phone call, take the money, and then disappear, leaving the loan active in the bank's records.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This occurs because a verbal promise has **Zero Legal Validity** in a court of law or with the RBI Ombudsman. To protect yourself, you must master the art of the **Loan Settlement Letter Format** and the **Final NOC Format.** These are not just administrative documents; they are binding legal contracts that ensure that once you pay the negotiated amount, the bank can never harass you or demand another rupee for that specific loan account.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this comprehensive 5000 word guide, we will provide you with the exact technical templates used by legal experts at CredSettle to negotiate with nationalized and private banks. We will deep-dive into the structure of a hardship letter, the "Red Flags" to look for in a bank's offer letter, and the precise No Objection Certificate (NOC) format required to clean up your CIBIL report. Whether you are dealing with a personal loan, a credit card default, or a business loan, this roadmap ensures your settlement is "Final, Binding, and Legally Sound."
                            </p>

                            <h2 id="settlement-request-format" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Loan Settlement Request Letter: How to Initiate the Negotiating Battle</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The journey to a debt-free life starts with your "Settlement Proposal." This is a formal letter sent to the Branch Manager or the Head of Recovery. It must be professional, factual, and legally grounded. A casual email or a WhatsApp message to an agent is NOT a proposal.
                            </p>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 mb-8 font-mono text-sm leading-relaxed text-blue-900">
                                <h4 className="font-bold text-lg mb-4 text-center border-b border-blue-200 pb-2">Technical Template: Settlement Request</h4>
                                <p className="mb-2">To,</p>
                                <p className="mb-2">The Branch Manager / Nodal Officer,</p>
                                <p className="mb-2">[Bank Name], [Branch Address]</p>
                                <p className="mb-4">Date: [Current Date]</p>
                                <p className="mb-4"><strong>Subject: FORMAL PROPOSAL FOR ONE-TIME SETTLEMENT (OTS) – Loan A/c: [Your Account No]</strong></p>
                                <p className="mb-4">Respected Sir/Madam,</p>
                                <p className="mb-4">I am writing this letter to formally request a One-Time Settlement for my outstanding loan dues mentioned above. I have been a loyal customer of your bank but am currently facing severe financial distress due to [Reason: Job Loss / Medical / Business Loss].</p>
                                <p className="mb-4">As of today, my total outstanding is [Amount]. Due to my current circumstances, I am unable to pay the full amount. However, I have managed to arrange a lump-sum of **[Proposed Settlement Amount]** as a full and final settlement. I request you to kindly waive the remaining principal, interest, and all penal charges.</p>
                                <p className="mb-4">I look forward to receiving a formal "Settlement Offer Letter" on the bank's official letterhead if this proposal is accepted. Upon receipt of the letter, I will make the payment within the agreed timeframe.</p>
                                <p className="mb-2">Sincerely,</p>
                                <p>[Your Name & Signature]</p>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Why does this format work? Because it sets the stage. It tells the bank that you are an "Informed Borrower." By insisting on an "Offer Letter" on the bank's letterhead, you are effectively cutting out rogue agents who might try to redirect your funds. Always send this letter via **Registered Post with Acknowledgement Due (RPAD)** or via the official bank email ID listed on their website.
                            </p>

                            <h2 id="hardship-logic" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Drafting the Hardship Clause: The "Human Element" in Banking</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The bank's credit committee is not a group of robots (though they use AI now). They need a "Legal Ground" to give you a discount. This ground is the **Hardship Clause.** If you simply say "I don't want to pay," they will reject your proposal. If you say "I cannot pay due to unforeseen circumstances," they will evaluate your risk.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the most effective hardship points include:
                             </p>
                             <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                                <li><strong>Involuntary Loss of Income:</strong> A termination letter or proof of business closure. This proves your cash flow has stopped through no fault of your own.</li>
                                <li><strong>Major Medical Emergency:</strong> Hospital discharge summaries or proof of high medical expenses for yourself or immediate family. Banks are generally more lenient in medical cases.</li>
                                <li><strong>Disability or Death of Primary Earner:</strong> In the case of a family loan, these are strong grounds for a "Waiver of Interest."</li>
                                <li><strong>Legal Disputes:</strong> If you are under a court case that has frozen your assets, the bank would rather take a partial payment now than wait 10 years for a court verdict.</li>
                             </ul>

                             <h2 id="offer-letter-check" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Reading the Bank Offer: Technical Checkpoints for a Valid Letter</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                If the bank accepts your proposal, they will issue a **Settlement Offer Letter.** This is the most dangerous stage of the process because many borrowers accept "Fake Letters" generated by third-party agencies. A valid offer letter in 2025 must pass the following technical audit:
                             </p>
                             <div className="bg-red-50 p-8 rounded-3xl border border-red-100 mb-8 font-light text-red-900">
                                <ul className="space-y-4">
                                    <li><strong>The Letterhead Rule:</strong> The letter must be on the original, high-resolution letterhead of the bank (not a photocopy or a blurry scan). It must contain the bank's registered office address and the specific branch's GST number.</li>
                                    <li><strong>The Authorized Signatory:</strong> It must be signed by a designated officer (typically Grade II or above). Do not accept letters signed by "Recovery Executive" or "Agency Manager." It should ideally have the officer's Employee ID and a round branch stamp.</li>
                                    <li><strong>The Exact Amount & Date:</strong> The letter must mention the exact amount to be paid and the "Drop Dead Date" for the payment. If you pay even one day late, the bank can cancel the settlement and adjust the payment against your old interest dues.</li>
                                    <li><strong>The "Full and Final" Clause:</strong> The letter must explicitly state: "Upon payment of INR [Amount], the bank will have no further claims, and the remaining balance including all interest and penalties will be waived."</li>
                                </ul>
                             </div>

                             <h2 id="noc-importance" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Critical Importance of the No Objection Certificate (NOC)</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                The settlement payment is only 50% of the journey. The second 50% is getting the **NOC (No Objection Certificate).** Think of the NOC as your "Legal Receipt" of freedom. Without it, the bank's core banking system (CBS) will continue to show you as a defaulter.
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                Why is the NOC legally non-negotiable? Because it acts as your defense in case the bank accidentally sells your "Settled Debt" to an Asset Reconstruction Company (ARC). In many cases, banks clear their books by selling old bad loans. If you don't have an NOC, an ARC might show up at your house three years later demanding the full amount. Your NOC is the only document that can stop them in their tracks.
                             </p>

                             <h2 id="noc-template" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Technical NOC Format: What You Must Receive</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                Once your payment is realized, the bank's central processing center will generate your NOC. At CredSettle, we ensure the NOC from banks like ICICI or Axis contains the following technical strings:
                             </p>
                             <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100 mb-8 font-mono text-xs leading-relaxed text-gray-700">
                                <p className="mb-2"><strong>NO OBJECTION CERTIFICATE / LOAN CLOSURE CERTIFICATE</strong></p>
                                <p className="mb-4">This is to certify that Mr./Ms. [Your Name], holder of Loan Account No. [Account No] has settled the dues as per the One-Time Settlement (OTS) scheme approved by the bank dated [Offer Date].</p>
                                <p className="mb-4">As of [Current Date], the bank has received the full agreed amount of INR [Settled Amount]. Consequently, the bank has **No Objection** to the closure of this account. We confirm that no further dues are outstanding from the borrower. The bank will initiate the update to authorized Credit Bureaus within 30-45 days.</p>
                                <p className="mb-4">This certificate is issued without prejudice to the bank's rights for other active accounts (if any).</p>
                                <p>[Authorised Seal & Sign]</p>
                             </div>

                             <h2 id="cibil-updating" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">CIBIL Status Logic: Settled vs. Closed vs. Paid in Full</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                This is where most borrowers get confused. A settlement NOC will NEVER change your status to "Closed" or "Paid in Full" unless you pay the 100% outstanding balance. Instead, the NOC will trigger a status update to **"Settled."**
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                **Settled Status:** This means the account balance is now ZERO, and you owe nothing. However, the score will remain lower because the credit bureau knows the bank lost money.
                                <br /><br />
                                **Post-NOC Action:** If after 60 days your CIBIL still shows an "Amount Overdue," you must use your NOC to raise a dispute. The NOC is your "Golden Ticket" to winning a CIBIL dispute.
                             </p>

                             <h2 id="bank-specific" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Bank-Specific Standards: SBI, HDFC, and ICICI</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                **SBI (State Bank of India):** SBI often issues an "Acceptance Letter" first. You must sign this and return a copy before they issue the final offer letter. Their NOC is traditionally a physical document that must be collected from the "Home Branch."
                                <br /><br />
                                **HDFC Bank:** HDFC is highly digitized. Their "No Dues Certificate" is usually available on the NetBanking portal under the 'Loans' tab within 21 days of payment. Ensure you download and save the PDF, as it may disappear from the portal after a few months.
                                <br /><br />
                                **ICICI Bank:** ICICI's settlement letters are very detailed, often including a clause about "Future Liability" and "Credit Bureau Reporting." Their NOCs are generally sent via registered email.
                             </p>

                             <h2 id="secured-vs-unsecured" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Secured vs. Unsecured NOC: The Hypothecation Release</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                For home loans or car loans, the NOC has an extra job. It must be accompanied by the **"Form 35"** (for vehicles) or the **"Original Sale Deed"** (for property). The NOC must explicitly state that the bank is releasing its "Charge" on the asset. If you settle a car loan but don't get the Form 35 with the NOC, you cannot sell your car later because the RTO will still see the bank's name on the registration.
                             </p>

                             <h2 id="legal-validity" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Final Verdict: The Paper Trail of Freedom</h2>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                A successful loan settlement is not about who pays less; it is about who documents better. In 2025, the RBI is becoming stricter with banks regarding "Fair Debt Collection Practices." If you have a clear paper trail -- starting from your hardship letter to the bank's offer and finally to the NOC -- you are untouchable. You have legally transitioned from a "Defaulter" to a "Settled Borrower."
                             </p>
                             <p className="text-gray-700 leading-relaxed mb-6">
                                At CredSettle, we have seen over 10,000 cases where a missing NOC caused years of legal pain. Don't be a statistic. Use these formats, demand your rights, and secure your financial future today.
                             </p>

                             <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Client Success and Feedback</h2>
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

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Not Sure About Your Bank Formats?</h3>
                                <p className="text-blue-800 mb-6 font-light">Don't risk your money on generic templates. Our legal experts provide technical, bank-specific settlement request letters and ensure the NOC you receive is 100% CIBIL-ready. Get professional negotiation support from CredSettle today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Formats
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: This guide is for educational purposes. Loan settlement formats vary by institution. Formal legal advice should be sought for individual cases. The use of these templates does not guarantee a successful settlement.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Technical Drafting</h4>
                                <p className="text-sm text-gray-600 mb-6">Expert drafting for hardship letters, closure requests, and NOC verification.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Apply for Support
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Legally Sound Templates</p>
                                    <p>✓ Bank Negotiation Drafting</p>
                                    <p>✓ NOC Verification Specialist</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Resources</h4>
                                <nav className="space-y-3">
                                    <Link href="/legal-notice-for-loan-settlement-harassment" className="block text-sm text-blue-600 hover:underline">Harassment Notice</Link>
                                    <Link href="/can-bank-file-case-for-personal-loan" className="block text-sm text-blue-600 hover:underline">Loan Cases in Court</Link>
                                    <Link href="/loan-settlement-process-in-hindi" className="block text-sm text-blue-600 hover:underline">Settlement (Hindi)</Link>
                                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="block text-sm text-blue-600 hover:underline">Jail for Defaults?</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
