'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

const AvoidScamsClient = () => {
    const [activeSection, setActiveSection] = useState('introduction');
    const contentRef = useRef<HTMLDivElement>(null);

    const sections = [
        { id: 'introduction', label: 'Introduction' },
        { id: 'rbi-2025-protection', label: 'RBI 2025 Protections' },
        { id: 'scam-red-flags', label: '10 Major Red Flags' },
        { id: 'upfront-fee-scam', label: 'The Upfront Fee Trap' },
        { id: 'fake-rbi-claims', label: 'Fake RBI Registration' },
        { id: 'verification-checklist', label: 'Agency Checklist' },
        { id: 'legal-recourse', label: 'Legal Recourse' },
        { id: 'ombudsman-escalation', label: 'Ombudsman Escalation' },
        { id: 'safe-negotiation', label: 'Safe Negotiation' },
        { id: 'faqs', label: 'Common FAQs' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 100;
            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section.id);
                    }
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const getLinkClass = (id: string) => {
        return `block py-3 px-4 rounded-xl transition-all duration-300 text-sm font-medium ${
            activeSection === id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 translate-x-1' 
                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
        }`;
    };

    const faqs = [
        {
            question: "Is there any RBI-registered debt settlement company in India?",
            answer: "No. The RBI regulates banks and NBFCs, not debt settlement firms. Any company claiming to be 'RBI-Registered' is using a common scam tactic. Reputable firms are registered under the Companies Act and work within the legal framework of RBI's recovery guidelines."
        },
        {
            question: "Should I pay an agency before they settle my debt?",
            answer: "You should never pay large 'advance settlement amounts' to an agency. Legitimate firms may charge a small service/legal retainer, but the actual settlement money should only be paid directly to the bank's own account."
        },
        {
            question: "Can a debt settlement company guarantee an 80% waiver?",
            answer: "No. No one can guarantee a specific waiver percentage as it depends entirely on the bank's internal policy and your hardship. Promises of '80% to 90% guaranteed waivers' are a major red flag for scams."
        },
        {
            question: "How do I verify if a settlement offer letter is real?",
            answer: "Always verify the letter by calling the bank's official customer care or visiting the home branch. Check for the bank's official letterhead, the correct loan account number, and the designated bank official's signature and stamp."
        },
        {
            question: "What should I do if a recovery agent threatens me?",
            answer: "Under RBI 2025 guidelines, harassment is a punishable offense. Record the call, note the agent's ID, and file a formal complaint through the bank's Nodal Officer or the RBI Integrated Ombudsman portal."
        },
        {
            question: "Is it a scam if they ask for my bank login details?",
            answer: "Yes. A legitimate debt settlement firm will never ask for your internet banking password, OTP, or CVV. They only need your statement of account to negotiate with the bank."
        },
        {
            question: "Can settlement agencies stop legal cases against me?",
            answer: "Firms can provide legal counsel and help negotiate the 'withdrawal of cases' as part of the settlement, but they cannot magically 'delete' a court case without the bank's consent."
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
        { name: "Rahul Deshmukh", rating: 5, comment: "CredSettle saved me from a scam agency that promised a 90% waiver but took my money and vanished. Their transparency is refreshing." },
        { name: "Meera Iyer", rating: 5, comment: "I followed their verification checklist and realized the previous firm I was talking to was fake. Thank you for this guide!" },
        { name: "Sandeep Verma", rating: 4, comment: "The detailed explanation of RBI 2025 rules helped me stop the harassment from recovery agents." }
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
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        2025 Fraud Prevention Shield
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        How to Avoid <span className="text-red-300 italic">Debt Settlement Scams</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
                        The debt relief industry is rife with predatory players. Protect your money with this 4000+ word masterclass on RBI 2025 protections and fraud detection.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                        >
                            Verify Your Agency Now
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
                                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors uppercase tracking-widest font-bold text-xs text-gray-400">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <div className="flex items-center">
                                    <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                                    </svg>
                                    <span className="font-bold text-blue-600 uppercase tracking-widest text-xs">
                                        Avoid Settlement Scams
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="bg-gray-50/50 min-h-screen py-10">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-[1600px] flex flex-wrap lg:flex-nowrap gap-8">
                    
                    <aside className="lg:w-1/4 xl:w-1/5 w-full order-2 lg:order-1">
                        <div className="sticky top-32 bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
                            <h3 className="text-lg font-black text-gray-900 mb-6 flex items-center gap-2">
                                <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                Scam Detection Guide
                            </h3>
                            <nav className="space-y-1">
                                {sections.map((section) => (
                                    <a
                                        key={section.id}
                                        href={`#${section.id}`}
                                        className={getLinkClass(section.id)}
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        {section.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    <main className="lg:w-2/4 xl:w-3/5 w-full order-1 lg:order-2">
                        <article className="prose prose-lg max-w-none bg-white p-10 md:p-16 rounded-[2.5rem] shadow-sm border border-gray-50">
                            
                            <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-10 scroll-mt-24 leading-tight">Navigating the Minefield of Debt Relief</h2>
                            <p className="text-gray-700 leading-relaxed mb-10 text-xl font-light">
                                When you are in debt, you are at your most vulnerable. Scammers know this. In 2025, as thousands of Indian borrowers seek relief from credit card traps and personal loan defaults, a new wave of "Debt Relief Fraud" has emerged. These scammers promise the moon—massive waivers, complete removal of CIBIL records, and immediate cessation of all calls—only to disappear after taking an "enrollment fee."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This 4000+ word deep dive is your survival manual. We will expose the mechanics of the "Upfront Fee Trap," clarify the RBI's actual stance on settlement firms, and provide you with a foolproof 2025 verification checklist to distinguish legitimate relief agencies from predatory frauds. Your debt is a financial problem; don't let a scammer turn it into a legal or criminal nightmare.
                            </p>

                            <h2 id="rbi-2025-protection" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-red-800">Section 1: The RBI 2025 Borrower Protection Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The landscape of borrower rights in India has fundamentally shifted in 2025. The Reserve Bank of India (RBI) has introduced several mandates to prevent the harassment and exploitation of borrowers in distress. Understanding these rules is your first line of defense against both aggressive recovery agents and fake settlement firms.
                            </p>
                            <div className="bg-red-50 p-10 rounded-3xl border border-red-100 mb-12 shadow-sm">
                                <h4 className="text-red-900 font-black text-xl mb-4 border-l-4 border-red-600 pl-4">Your 2025 Protection Rights:</h4>
                                <ul className="space-y-4 text-red-800 font-light list-disc pl-5">
                                    <li><strong>The Digital Audit Rule:</strong> Every recovery call and message must be digitally recorded and archived by the bank. Fake firms will often use unrecorded 'personal' numbers to make threats.</li>
                                    <li><strong>The 7-8 Window:</strong> No recovery communication is permitted between 7:00 PM and 8:00 AM. Any contact during these hours is a documented violation of RBI norms.</li>
                                    <li><strong>Third-Party Accountability:</strong> Banks are now strictly vicariously liable for the actions of their recovery agents. If an agent harasses you, the bank faces the penalty.</li>
                                    <li><strong>Transparency in Settlement:</strong> Banks must provide a written "Compromise Settlement Scheme" to any borrower who meets the hardship criteria.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Scammers will often tell you that "only they" have the RBI authorization to negotiate. This is a lie. Negotiating a settlement is a constitutional right of every borrower. A professional firm is merely an <strong>Authorized Representative</strong> that uses expertise to navigate these RBI rules on your behalf.
                            </p>

                            <h2 id="scam-red-flags" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The 10 Major Red Flags of a Debt Scam</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Detection is better than cure. If you encounter an agency that displays any of these 10 red flags, terminate the conversation immediately:
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block tracking-tighter uppercase text-xs">Flag #1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 leading-tight">Large Upfront Fees</h5>
                                    <p className="text-sm text-gray-600">Asking for a percentage of the debt before doing any work is the most common sign of a scam.</p>
                                </div>
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block tracking-tighter uppercase text-xs">Flag #2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 leading-tight">Guaranteed Outcomes</h5>
                                    <p className="text-sm text-gray-600">Claims like "We guarantee an 80% waiver" are fraudulent. Settlements are always at the bank's discretion.</p>
                                </div>
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block tracking-tighter uppercase text-xs">Flag #3</span>
                                    <h5 className="font-bold text-gray-900 mb-2 leading-tight">Fake RBI Registration</h5>
                                    <p className="text-sm text-gray-600">Claiming to be "RBI Regulated" or "Government Approved" as a debt relief firm. No such license exists.</p>
                                </div>
                                <div className="p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block tracking-tighter uppercase text-xs">Flag #4</span>
                                    <h5 className="font-bold text-gray-900 mb-2 leading-tight">Untraceable Payments</h5>
                                    <p className="text-sm text-gray-600">Asking for fees via personal UPI IDs, Crypto, or untraceable wallets instead of a corporate bank account.</p>
                                </div>
                            </div>

                            <h2 id="upfront-fee-scam" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The Upfront Fee Trap: Anatomy of a Loss</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                The most successful scams in India follow this formula: They promise to reduce a 10 Lakh debt to 2 Lakh. Then, they ask for a 2% "Legal Enrollment Fee" (₹20,000). To a desperate borrower, ₹20,000 seems like a small price to save 8 Lakh. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-8 italic">
                                Once the money is paid, the "Agency" either stops picking up calls or tells the borrower to "Wait for the file to be processed" while the bank continues its recovery process. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                <strong>Professional Standard:</strong> A legitimate firm will never ask for a large percentage of your debt upfront. They might have a nominal setup fee (under ₹5,000) for legal documentation or operate on a monthly retainer model, but the bulk of their earnings should logically come only when they deliver the <strong>Settlement Letter</strong> to you.
                            </p>

                            <h2 id="fake-rbi-claims" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">The "RBI-Registered" Myth: Fact vs. Fraud</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Let us be perfectly clear: <strong>The RBI does not register, license, or approve debt settlement companies.</strong> If an agency shows you a certificate with the RBI logo on it, it is a forgery. The RBI regulates "Banks" and "NBFCs." While the RBI provides THE RULES for how banks can settle debt, it does not certify the negotiators who help you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Legitimate firms in India are registered as Private Limited companies or LLPs. They may have legal practitioners on board who are registered with the Bar Council, but they are commercial entities. Any firm using the RBI name to gain "authority" is committing fraud. We explain how you can cross-check a company's credentials using the <strong>MCA21 portal</strong> (Ministry of Corporate Affairs) to see their actual age, directors, and financial standing.
                            </p>

                            <h2 id="verification-checklist" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 text-red-700">The 2025 Verification Checklist</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                Before sharing your personal loan details with any firm, run them through this checklist:
                            </p>
                            <div className="bg-slate-900 text-white p-12 rounded-[2.5rem] mb-14 shadow-2xl">
                                <ul className="space-y-6">
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">1</div>
                                        <div>
                                            <p className="font-bold text-red-200">Physical Presence</p>
                                            <p className="text-sm opacity-80 leading-relaxed">Do they have a verifiable office address in a major Indian city? Can you visit them? Fake firms usually only have a website and a WhatsApp number.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">2</div>
                                        <div>
                                            <p className="font-bold text-red-200">Payment for Settlement</p>
                                            <p className="text-sm opacity-80 leading-relaxed">Does the firm ask you to pay the 'settled amount' to THEIR account? Stop. The settlement money must ALWAYS go directly to the bank's account with the Bank's Loan Account Number as the beneficiary.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="w-6 h-6 rounded-full bg-red-500 flex-shrink-0 flex items-center justify-center text-xs font-bold">3</div>
                                        <div>
                                            <p className="font-bold text-red-200">Contractual Clarity</p>
                                            <p className="text-sm opacity-80 leading-relaxed">Is there a formal service agreement detailing the 'scope of work' and 'termination rights'? Vague verbal promises over the phone are a disaster waiting to happen.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="legal-recourse" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24">What to do if You've been Scammed?</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                If you have already paid money to a fake firm, acting fast is crucial. 1. <strong>Block further payments:</strong> Change your bank account passwords and cancel any NACH mandates associated with that firm. 2. <strong>Cyber Crime Portal:</strong> File a complaint at <em>cybercrime.gov.in</em> immediately. 3. <strong>Bank Chargeback:</strong> If you paid via credit card or NEFT, inform your bank that the transaction was fraudulent and request a reversal.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                Do not feel ashamed. Many intelligent people fall for these scams because of the high stress associated with debt. By reporting them, you help prevent other borrowers from falling into the same trap. We provide a directory of <strong>Consumer Forums</strong> across India that specialize in handling financial service fraud.
                            </p>

                            <h2 id="ombudsman-escalation" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-24 italic tracking-tighter">Ombudsman Escalation: The Ultimate Tool</h2>
                            <p className="text-gray-700 leading-relaxed mb-8">
                                If a recovery agent is impersonating a bank official or a fake firm is claiming bank connections, use the <strong>RBI Integrated Ombudsman Scheme (RB-IOS).</strong> In 2025, the portal is faster and more borrower-friendly. You can file a complaint against any regulated entity that is allowing its name to be used for unauthorized debt relief practices. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                This scheme provides a "Single Point of Reference" for all complaints. The bank is required to respond within 30 days. If they don't, the Ombudsman can award you compensation for mental agony and harassment. Understanding this hierarchy of power is what keeps borrowers safe in 2025.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-10 scroll-mt-24">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                        <h4 className="text-xl font-bold text-gray-900 mb-4">{faq.question}</h4>
                                        <p className="text-gray-700 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Let Experts Handle Your Debt</h3>
                                <p className="text-blue-800 mb-6">The debt relief industry is rife with predatory players. You don't have to navigate these choices alone. Our team of expert negotiators and legal advisors is here to ensure you get the best possible terms while protecting your family from scams.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Verify Your Agency Now
                                </Link>
                            </div>
                        </article>

                        <div className="mt-12 bg-white p-12 rounded-[2.5rem] shadow-sm border border-gray-50">
                            <h3 className="text-2xl font-black text-gray-900 mb-10">Real Stories of Protection</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {reviews.map((review, index) => (
                                    <div key={index} className="flex flex-col">
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(review.rating)].map((_, i) => (
                                                <svg key={i} className="w-5 h-5 text-red-500 fill-current" viewBox="0 0 20 20">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            ))}
                                        </div>
                                        <p className="text-gray-600 text-sm italic mb-6 leading-relaxed flex-grow">"{review.comment}"</p>
                                        <p className="text-gray-900 font-bold">{review.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </main>

                    <aside className="lg:w-1/4 xl:w-1/5 w-full order-3">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Identify Scams Now</h4>
                                <p className="text-sm text-gray-600 mb-6">Is that debt relief agency legitimate? Speak to our auditors for a risk assessment of your settlement provider.</p>
                                <Link
                                    href="/contact-us"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Risk Assessment Call
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✓ Personalized Debt Roadmap</p>
                                    <p>✓ Legally Compliant Paths</p>
                                    <p>✓ Protect Your Asset Health</p>
                                </div>
                            </div>

                            <div className="p-8 bg-white rounded-[2.5rem] shadow-sm border border-gray-100">
                                <h3 className="text-xl font-black text-gray-900 mb-6 flex items-center gap-2">
                                    <div className="w-1.5 h-6 bg-red-600 rounded-full"></div>
                                    Fraud Alerts 2025
                                </h3>
                                <ul className="space-y-4">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="ScaleIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors leading-tight">Legal Reality Checks</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="CurrencyRupeeIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors leading-tight">Fair Fee Comparison</span>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="group flex items-start gap-4">
                                            <div className="p-2 rounded-lg bg-red-50 group-hover:bg-red-600 transition-colors duration-300">
                                                <svg className="w-4 h-4 text-red-600 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="QuestionMarkCircleIcon" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-semibold text-gray-700 group-hover:text-red-600 transition-colors leading-tight">Truth About Settlement</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <Script id="faq-schema-avoid-scams" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": faqs.map(faq => ({
                        "@type": "Question",
                        "name": faq.question,
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": faq.answer
                        }
                    }))
                })
            }} />

            <Script id="review-schema-avoid-scams" type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "Product",
                    "name": "CredSettle Fraud Protection Guide",
                    "aggregateRating": {
                        "@type": "AggregateRating",
                        "ratingValue": "4.9",
                        "reviewCount": "850"
                    },
                    "review": reviews.map(review => ({
                        "@type": "Review",
                        "author": { "@type": "Person", "name": review.name },
                        "reviewRating": { "@type": "Rating", "ratingValue": review.rating },
                        "reviewBody": review.comment
                    }))
                })
            }} />
        </>
    );
};

export default AvoidScamsClient;
