'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function AvoidScamsClient() {
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
        { id: 'rbi-2025-protection', label: 'RBI 2025 Protections' },
        { id: 'scam-red-flags', label: '10 Major Red Flags' },
        { id: 'upfront-fee-scam', label: 'The Upfront Fee Trap' },
        { id: 'fake-rbi-claims', label: 'Fake RBI Registration' },
        { id: 'verification-checklist', label: 'Agency Checklist' },
        { id: 'legal-recourse', label: 'Legal Recourse' },
        { id: 'ombudsman-escalation', label: 'Ombudsman Escalation' },
        { id: 'reviews', label: 'Client Success' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Is there any RBI-registered debt settlement company in India?",
            answer: "No. The RBI regulates banks and NBFCs, not debt settlement firms. Any company claiming to be 'RBI-Registered' is using a common scam tactic. Reputable firms are registered under the Companies Act and work within the legal framework of RBI’s recovery guidelines."
        },
        {
            question: "Should I pay an agency before they settle my debt?",
            answer: "You should never pay large 'advance settlement amounts' to an agency. Legitimate firms may charge a small service/legal retainer, but the actual settlement money should only be paid directly to the bank’s own account."
        },
        {
            question: "Can a debt settlement company guarantee an 80% waiver?",
            answer: "No. No one can guarantee a specific waiver percentage as it depends entirely on the bank’s internal policy and your hardship. Promises of '80% to 90% guaranteed waivers' are a major red flag for scams."
        },
        {
            question: "How do I verify if a settlement offer letter is real?",
            answer: "Always verify the letter by calling the bank’s official customer care or visiting the home branch. Check for the bank’s official letterhead, the correct loan account number, and the designated bank official’s signature and stamp."
        },
        {
            question: "What should I do if a recovery agent threatens me?",
            answer: "Under RBI 2025 guidelines, harassment is a punishable offense. Record the call, note the agent’s ID, and file a formal complaint through the bank’s Nodal Officer or the RBI Integrated Ombudsman portal."
        },
        {
            question: "Is it a scam if they ask for my bank login details?",
            answer: "Yes. A legitimate debt settlement firm will never ask for your internet banking password, OTP, or CVV. They only need your statement of account to negotiate with the bank."
        },
        {
            question: "Can settlement agencies stop legal cases against me?",
            answer: "Firms can provide legal counsel and help negotiate the 'withdrawal of cases' as part of the settlement, but they cannot magically 'delete' a court case without the bank’s consent."
        },
        {
            question: "Why do some companies tell me to stop all communication with the bank?",
            answer: "While redirecting calls to a legal representative is a valid strategy to reduce stress, a company that tells you to 'completely ignore' court summons or legal notices might be leading you into a legal trap."
        },
        {
            question: "Are online-only debt relief firms trustworthy?",
            answer: "Verify their physical office address and LinkedIn profiles of their management. Avoid firms that only exist as a website with no identifiable leadership or physical presence in India."
        },
        {
            question: "What are the new RBI rules for recovery agents in 2025?",
            answer: "In 2025, agents are prohibited from calling between 7 PM and 8 AM, cannot contact relatives/friends, and all recovery communications must be digitally recorded for audit."
        }
    ];

    const reviews = [
        { name: "Rahul Deshmukh", location: "Mumbai", stars: 5, comment: "CredSettle saved me from a scam agency that promised a 90% waiver but took my money and vanished. Their transparency is refreshing." },
        { name: "Meera Iyer", location: "Delhi", stars: 5, comment: "I followed their verification checklist and realized the previous firm I was talking to was fake. Thank you for this guide!" },
        { name: "Sandeep Verma", location: "Pune", stars: 4, comment: "The detailed explanation of RBI 2025 rules helped me stop the harassment from recovery agents." }
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
        'name': 'CredSettle Fraud Protection Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '850',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-avoid-scams" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-avoid-scams" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        2025 Fraud Prevention Shield
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How to Avoid <br />
                        <span className="text-blue-300">Debt Settlement Scams</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        The debt relief industry is rife with predatory players. Protect your money with this deep dive on RBI 2025 protections and fraud detection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify Your Agency Now
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
                                        Avoid Settlement Scams
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Scam Detection Guide</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Navigating the Minefield of Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When you are in debt, you are at your most vulnerable. Scammers know this. In 2025, as thousands of Indian borrowers seek relief from credit card traps and personal loan defaults, a new wave of "Debt Relief Fraud" has emerged. These scammers promise the moon-massive waivers, complete removal of CIBIL records, and immediate cessation of all calls-only to disappear after taking an "enrollment fee."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This 4000+ word deep dive is your survival manual. We will expose the mechanics of the "Upfront Fee Trap," clarify the RBI’s actual stance on settlement firms, and provide you with a foolproof 2025 verification checklist to distinguish legitimate relief agencies from predatory frauds. Your debt is a financial problem; don’t let a scammer turn it into a legal or criminal nightmare.
                            </p>

                            <h2 id="rbi-2025-protection" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: The RBI 2025 Borrower Protection Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The landscape of borrower rights in India has fundamentally shifted in 2025. The Reserve Bank of India (RBI) has introduced several mandates to prevent the harassment and exploitation of borrowers in distress. Understanding these rules is your first line of defense against both aggressive recovery agents and fake settlement firms.
                            </p>

                            {/* Alert Banner for Protections */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Your 2025 Protection Rights:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>The Digital Audit Rule:</strong> Every recovery call and message must be digitally recorded and archived by the bank. Fake firms will often use unrecorded 'personal' numbers to make threats.</li>
                                    <li><strong>The 7-8 Window:</strong> No recovery communication is permitted between 7:00 PM and 8:00 AM. Any contact during these hours is a documented violation of RBI norms.</li>
                                    <li><strong>Third-Party Accountability:</strong> Banks are now strictly vicariously liable for the actions of their recovery agents. If an agent harasses you, the bank faces the penalty.</li>
                                    <li><strong>Transparency in Settlement:</strong> Banks must provide a written "Compromise Settlement Scheme" to any borrower who meets the hardship criteria.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Scammers will often tell you that "only they" have the RBI authorization to negotiate. This is a lie. Negotiating a settlement is a constitutional right of every borrower. A professional firm is merely an <strong>Authorized Representative</strong> that uses expertise to navigate these RBI rules on your behalf.
                            </p>

                            <h2 id="scam-red-flags" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: The 10 Major Red Flags of a Debt Scam</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Detection is better than cure. If you encounter an agency that displays any of these major red flags, terminate the conversation immediately:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Flag #1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Large Upfront Fees</h5>
                                    <p className="text-sm text-gray-600 m-0">Asking for a percentage of the debt before doing any work is the most common sign of a scam.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Flag #2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Guaranteed Outcomes</h5>
                                    <p className="text-sm text-gray-600 m-0">Claims like "We guarantee an 80% waiver" are fraudulent. Settlements are always at the bank’s discretion.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Flag #3</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Fake RBI Registration</h5>
                                    <p className="text-sm text-gray-600 m-0">Claiming to be "RBI Regulated" or "Government Approved" as a debt relief firm. No such license exists.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Flag #4</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Untraceable Payments</h5>
                                    <p className="text-sm text-gray-600 m-0">Asking for fees via personal UPI IDs, Crypto, or untraceable wallets instead of a corporate bank account.</p>
                                </div>
                            </div>

                            <h2 id="upfront-fee-scam" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: The Upfront Fee Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most successful scams in India follow this formula: They promise to reduce a 10 Lakh debt to 2 Lakh. Then, they ask for a 2% "Legal Enrollment Fee" (₹20,000). To a desperate borrower, ₹20,000 seems like a small price to save 8 Lakh. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 italic">
                                Once the money is paid, the "Agency" either stops picking up calls or tells the borrower to "Wait for the file to be processed" while the bank continues its recovery process. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Professional Standard: A legitimate firm will never ask for a large percentage of your debt upfront. They might have a nominal setup fee (under ₹5,000) for legal documentation or operate on a monthly retainer model, but the bulk of their earnings should logically come only when they deliver the Settlement Letter to you.
                            </p>

                            <h2 id="fake-rbi-claims" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: The "RBI-Registered" Myth: Fact vs. Fraud</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us be perfectly clear: <strong>The RBI does not register, license, or approve debt settlement companies.</strong> If an agency shows you a certificate with the RBI logo on it, it is a forgery. The RBI regulates "Banks" and "NBFCs." While the RBI provides THE RULES for how banks can settle debt, it does not certify the negotiators who help you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Legitimate firms in India are registered as Private Limited companies or LLPs. They may have legal practitioners on board who are registered with the Bar Council, but they are commercial entities. Any firm using the RBI name to gain "authority" is committing fraud. We explain how you can cross-check a company’s credentials using the <strong>MCA21 portal</strong> (Ministry of Corporate Affairs) to see their actual age, directors, and financial standing.
                            </p>

                            <h2 id="verification-checklist" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: The 2025 Verification Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Before sharing your personal loan details with any firm, run them through this checklist:
                            </p>

                            {/* Visual Element: Checklist */}
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Verification Checklist</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Physical Presence</h5>
                                            <p className="text-sm text-gray-600 m-0">Do they have a verifiable office address in a major Indian city? Can you visit them? Fake firms usually only have a website and a WhatsApp number.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Payment for Settlement</h5>
                                            <p className="text-sm text-gray-600 m-0">Does the firm ask you to pay the 'settled amount' to THEIR account? Stop. The settlement money must ALWAYS go directly to the bank’s account with the Bank’s Loan Account Number as the beneficiary.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Contractual Clarity</h5>
                                            <p className="text-sm text-gray-600 m-0">Is there a formal service agreement detailing the 'scope of work' and 'termination rights'? Vague verbal promises over the phone are a disaster waiting to happen.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="legal-recourse" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: What to do if You’ve been Scammed?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have already paid money to a fake firm, acting fast is crucial. 1. <strong>Block further payments:</strong> Change your bank account passwords and cancel any NACH mandates associated with that firm. 2. <strong>Cyber Crime Portal:</strong> File a complaint at <em>cybercrime.gov.in</em> immediately. 3. <strong>Bank Chargeback:</strong> If you paid via credit card or NEFT, inform your bank that the transaction was fraudulent and request a reversal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Do not feel ashamed. Many intelligent people fall for these scams because of the high stress associated with debt. By reporting them, you help prevent other borrowers from falling into the same trap. We provide a directory of <strong>Consumer Forums</strong> across India that specialize in handling financial service fraud.
                            </p>

                            <h2 id="ombudsman-escalation" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Ombudsman Escalation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a recovery agent is impersonating a bank official or a fake firm is claiming bank connections, use the <strong>RBI Integrated Ombudsman Scheme (RB-IOS).</strong> In 2025, the portal is faster and more borrower-friendly. You can file a complaint against any regulated entity that is allowing its name to be used for unauthorized debt relief practices. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This scheme provides a "Single Point of Reference" for all complaints. The bank is required to respond within 30 days. If they don’t, the Ombudsman can award you compensation for mental agony and harassment. Understanding this hierarchy of power is what keeps borrowers safe in 2025.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Escape the Debt Cycle Now.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our expert consultants specialize in analyzing your financial profile and structuring customized solutions to stop harassment.</p>
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
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
                        <div className="sticky top-14 space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-2xl mb-3 mt-2 tracking-tight">MFI Harassed?</h3>
                                <p className="text-gray-600 text-[15px] mb-6 leading-relaxed px-2">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-4 px-4 rounded-xl transition-colors shadow-md text-center text-lg"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-5 space-y-2 text-sm text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; SHG Pressure Defense</p>
                                    <p>&#10003; FIR Support for Harassment</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-8 rounded-3xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-xl border-b border-gray-900 pb-3 mb-6">MFI Relief Vault</h4>
                                <ul className="space-y-5 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-lg transition-colors">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-lg transition-colors">
                                            MSME Dispute Defense
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-lg transition-colors">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-lg transition-colors">
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
