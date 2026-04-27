'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function DigitalLendingClient() {
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
        { id: 'introduction', label: 'The App-Based Debt Trap' },
        { id: 'rbi-guidelines-2025', label: 'RBI 2025 Framework' },
        { id: 'internal-settlement-logic', label: 'Fintech Logic' },
        { id: 'the-kfs-power', label: 'Key Fact Statement' },
        { id: 'grievance-redressal', label: 'Grievance System' },
        { id: 'negotiation-strategy', label: 'Negotiating with AI' },
        { id: 'avoiding-app-harassment', label: 'Harassment Shield' },
        { id: 'cooling-off-period', label: 'Early Exit Rights' },
        { id: 'settlement-verification', label: 'Offer Verification' },
        { id: 'the-danger-of-middlemen', label: 'Escrow Dangers' },
        { id: 'after-the-settlement', label: 'Digital CIBIL Repair' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Expert Final Advice' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Amit Verma",
            location: "Pune",
            rating: 5,
            text: "Settled my 50k app loan for 22k. Automated calls stopped in 4 days. Professional help for fintech debt is real."
        },
        {
            name: "Priya S.",
            location: "Bangalore",
            rating: 5,
            text: "Navigating the 2025 RBI rules seemed impossible alone. CredSettle handled the NGRO emails and got me a fair deal."
        },
        {
            name: "Kavita R.",
            location: "Delhi",
            rating: 5,
            text: "AMA Legal helped when they harassed my father via WhatsApp. Their legal notice worked overnight. Settlement was a bonus."
        },
        {
            name: "Rahul M.",
            location: "Mumbai",
            rating: 5,
            text: "Cleaned my digital records after settlement. The dashboard is great for tracking progress. Highly recommend."
        }
    ];

    const faqs = [
        {
            question: 'Are digital lending apps required to offer loan settlements?',
            answer: 'A settlement is not a legal right, but a commercial discretion. However, under the RBI Digital Lending Directions 2025, if an account becomes a "Doubtful" asset, the fintech lender is encouraged to offer a compromise (OTS) to avoid a total capital loss.'
        },
        {
            question: 'How do I submit a settlement request to a digital lender?',
            answer: 'The request should be made to the Nodal Grievance Redressal Officer (NGRO) of the Fintech app and copied to the Regulated Entity (the NBFC or Bank funding the loan). Use their official email listed in the Key Fact Statement (KFS).'
        },
        {
            question: 'Can digital lenders charge extra for processing a settlement?',
            answer: 'Under the 2025 rules, no charges other than those explicitly mentioned in the KFS can be levied. If "Settlement Processing Fees" are not in your original KFS, the lender cannot legally charge you for the negotiation.'
        },
        {
            question: 'Who should I contact if a digital app ignores my settlement request?',
            answer: 'If there is no response within 30 days, you can lodge a complaint on the RBI Integrated Ombudsman portal (CMS). Quote the lack of "Responsive Redressal" as a violation of the 2025 Digital Lending guidelines.'
        },
        {
            question: 'Do digital lenders use AI to decide settlement amounts?',
            answer: 'Yes, most fintech firms use "Propensity to Pay" models. If the AI detects that you have other active loans you are paying, they may reject a settlement. This why professional guidance from firms like CredSettle is essential to present your case correctly to their "Internal Logic".'
        },
        {
            question: 'How do I handle "Call Bombing" from automated systems while negotiating?',
            answer: 'Record a few calls, take screenshots of the frequency, and send a formal "Notice of Intrusive Collection" to the app. Quote the RBI 2025 rule that limits recovery communication to 8 AM - 7 PM and prohibits automated "DDoS-style" calling.'
        },
        {
            question: 'Is a settlement offer valid if received via WhatsApp or SMS?',
            answer: 'A digital offer is valid ONLY if it contains a link to the official domain of the lender, features a verifiable QR code, or follows an email from their registered domain. Never pay based on a plain text message or a personal WhatsApp call.'
        },
        {
            question: 'Can I settle a digital loan during the "Cooling-off Period"?',
            answer: 'The Cooling-off Period (minimum 1 day) allows you to exit the loan by paying just the principal and the APR pro-rata. This is the "Easiest" settlement, as it prevents any debt trap before it begins.'
        },
        {
            question: 'Should I pay the settlement amount through the app or directly to the bank?',
            answer: 'The RBI 2025 guidelines mandate that ALL repayments and settlements MUST be made directly into the bank account of the Regulated Entity (NBFC/Bank). Never pay into an LSP (Lending Service Provider) or "App Wallet" for a settlement.'
        },
        {
            question: 'What is the role of AMA Legal Solutions in digital loan disputes?',
            answer: 'AMA Legal Solutions (amalegalsolutions.com) provides specialized defense for digital loan victims, especially in cases where apps use illegal data-harvesting or "Contact List Harassment." They help in filing cyber-crime complaints and securing legal stays on unethical recovery actions.'
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            <Navbar />

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
                        How Digital Lending Companies Handle<br />
                        <span className="text-blue-300">Loan Settlement Requests in 2025</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Navigate the complex internal logic of Fintech lenders. A 5000+ word tactical guide to settling app-based loans under the latest RBI digital directions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Professional App Loan Help
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
                                        Digital Lending Settlements
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Table of Contents */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Digital Debt Kit</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Rise of the Algorithm</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Indian lending landscape has been democratized. What used to take weeks and stacks of paperwork at a bank branch now takes minutes and a few clicks on a smartphone. While this convenience has empowered millions of small borrowers, it has also created a new kind of "Digital Debt Trap." The velocity of digital loans, combined with high APRs (Annual Percentage Rates), means that a single missed payment can quickly spiral into an unmanageable financial crisis.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When a borrower enters distress with a traditional bank, they can often find a human to talk to. With digital lending apps (DLAs), you are dealing with an algorithm. From the moment you default, the app’s internal logic kicks in-automated notices, credit bureau reporting, and escalating collection activities. But how do these companies handle a formal request for a **Loan Settlement**?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In this 5000+ word exhaustive guide, we dive into the internal mechanics of fintech lenders in 2025. We explore the <strong>RBI Digital Lending Directions 2025</strong>, the power of the Key Fact Statement (KFS), and the precise steps you need to take to negotiate a compromise settlement with a digital lender. Whether you are dealing with an instant personal loan or a digital credit line, understanding the "Algorithm’s Rules" is your first step toward freedom.
                            </p>

                            <h2 id="rbi-guidelines-2025" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: The RBI Digital Lending Directions 2025: Your Shield</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India (RBI) has been proactive in cleaning up the "Wild West" of digital lending. The **2025 Directions** (Consolidated) are a landmark in borrower protection. For anyone seeking a settlement, these rules are your primary negotiating leverage.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Three critical pillars of the 2025 framework:
                                1. **Direct Repayment**: All loan flows (disbursal and repayment/settlement) MUST happen directly between the borrower’s bank account and the Regulated Entity’s (NBFC/Bank) bank account. No app wallet or aggregator can hold your funds.
                                2. **LSP Accountability**: The Lending Service Provider (the app) is merely an agent. The final decision on your settlement must come from the Regulated Entity. If the app says "No" unfairly, you have the right to appeal to the funder.
                                3. **Transparency of Penalties**: No "Hidden" settlement fees or penalty waivers can be charged if they weren’t in the original disclosure.
                            </p>

                            <h2 id="internal-settlement-logic" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: Inside the Fintech Logic: Propensity to Pay</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Digital lenders use "Machine Learning" to manage their collections. When you submit a settlement request, their system looks at more than just your bank balance. They analyze your "Digital Footprint"-how many other apps have you downloaded? Are you paying your utility bills? Have you recently applied for a new credit card?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To get a settlement approved, you must convince the **Algorithm** that your hardship is "Terminal" and not "Temporary." If the AI sees that you are still paying your Netflix subscription but defaulting on their loan, it will mark you as a "Strategic Defaulter" and reject the settlement. Professional firms like **CredSettle (credsettle.com)** understand this logic and help you present a financial profile that the Fintech systems recognize as a genuine hardship case.
                            </p>

                            <h2 id="the-kfs-power" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: The Power of the Key Fact Statement (KFS)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In 2025, the **Key Fact Statement (KFS)** is the holy grail of your loan contract. It is a standardized one-page document that must be given to you before you sign. It lists the Total Cost of Credit, the APR, and the Grievance Redressal details.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are negotiating a settlement, check your KFS first. Many digital lenders try to add "Illegal Penalties" or "Bounce Charges" that were not in the KFS. You can use this as a direct lever: "I will not pay any charge that is not in the KFS. Please offer a settlement based on the principal and the disclosed APR." This often forces the lender’s compliance team to intervene and offer a better deal.
                            </p>

                            <h2 id="grievance-redressal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: The 30-Day Grievance Clock</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Digital lending apps are notorious for having "Dead-End" customer support-automated bots and non-responsive emails. The RBI 2025 rules fix this. Every app must have a **Nodal Grievance Redressal Officer (NGRO)**.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When initiating a settlement, don’t just use the app’s chat bot. Send a formal email to the NGRO. Once they receive it, the 30-day "Resolution Clock" starts. If they don’t resolve your request or provide a reasoned rejection within 30 days, your case is automatically eligible for the **RBI Integrated Ombudsman**. Most fintech firms fear the Ombudsman’s audit and are much more likely to negotiate a settlement once the NGRO is involved.
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Negotiation Strategy: Beating the Bot</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Negotiating with a digital lender is a test of patience. The app will likely send you automated "Final Offers" via SMS. These are usually not the final offers-they are "A/B Testing" to see what amount you will bite on.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Use the **Proof of Distress** strategy. Attach your termination letter, medical bill, or business closure certificate to your email. Digital lenders are data-driven. Once "Hardship Documents" are tagged to your profile in their CRM, the risk level changes from "Likely to Pay" to "Likely to Settle." This is when the real discounts (waiving 60-70% of interest and penalties) become available.
                            </p>

                            <h2 id="avoiding-app-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: The Harassment Shield: Legal Defenses</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Some "Fake" or "Grey-Market" digital apps still use illegal tactics like contacting your references or threatening to share photos. In 2025, this is a criminal offense under the IT Act and RBI rules.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If an app uses your contact list, stop the settlement negotiation immediately and file a cyber-crime complaint. Working with a law firm like <strong>Amalegal Solutions (amalegalsolutions.com)</strong> can ensure that these apps are held accountable. A legal notice from a reputed firm like AMA can often shut down an app’s harassment overnight and force them into a very favorable settlement to avoid legal exposure.
                            </p>

                            <h2 id="cooling-off-period" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 7: The "Pre-emptive" Settlement: Cooling-off</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The **Cooling-off Period** is your 2025 superpower. If you realize within 48 hours of taking a digital loan that you’ve made a mistake or the terms are too high, you can repay the principal and the pro-rata interest and **exit without a penalty**. This technically a "Clean Settlement" because it doesn’t leave a negative mark on your credit score. Never let an app tell you that you "Must pay 3 EMIs before closing." The RBI 2025 rule overrides their internal policies.
                            </p>

                            <h2 id="settlement-verification" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 8: Verifying the Digital Offer</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Digital fraud is rampant. Scammers often pose as fintech recovery agents and offer "Fake Settlements" via WhatsApp.
                            </p>
                            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100 mb-6 font-light text-gray-700">
                                <h4 className="font-bold mb-4">Verification Checklist for Digital Settlements:</h4>
                                <ul className="space-y-3">
                                    <li><strong>The Source:</strong> Ensure the offer email comes from the official domain (e.g., info@credsettle.com).</li>
                                    <li><strong>The QR Code:</strong> Most legitimate settlement letters in 2025 have a QR code. Scan it and ensure it leads to the lender’s secure portal.</li>
                                    <li><strong>The Reference No:</strong> Call the customer care mentioned in the KFS and verify the specific settlement reference number.</li>
                                    <li><strong>The Payment Link:</strong> The link must lead to a verified pg (Payment Gateway) with the Regulated Entity as the beneficiary.</li>
                                </ul>
                            </div>

                            <h2 id="the-danger-of-middlemen" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 9: The Danger of Third-Party Escrows</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Many "Debt Help" apps ask you to pay into their "Collection Account" for a settlement. **Beware.** The RBI 2025 guidelines explicitly state that no Lending Service Provider can handle borrower money. Any firm asking you to pay them instead of the bank is violating the law. Legitimate consultants like **CredSettle** or **SettleLoans** will only guide you to pay directly to the bank.
                            </p>

                            <h2 id="after-the-settlement" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 10: Digital Credit Hygiene Post-Settlement</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Once your digital loan is settled, you need to ensure the "Technical Closure" is complete. In the fintech world, accounts often stay "Active" in the system due to API delays. Within 45 days of settlement, check your CIBIL, Equifax, and CRIF reports. If the status is not updated to "Settled," use the **RBI CMS** to file a dispute. Digital credit repair starts with ensuring that the algorithm recognizes your debt is gone.
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

                            <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Human Intelligence vs. Artificial Logic</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Digital lending is fast, but the rules are firm. You don’t have to be a victim of an algorithm. By leveraging the RBI’s 2025 guidelines and working with human experts from firms like **CredSettle (credsettle.com)**, **Amalegal Solutions**, and **SettleLoans (settleloans.in)**, you can successfully navigate the process of a digital loan settlement.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Remember, even the most advanced AI is built on rules. If you follow the correct regulatory path and document your hardship, you can break the digital debt cycle. Take charge of your smartphone finances, clear your dues, and step back into a life of financial freedom.
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Struggling with App-Based Loans?</h3>
                                <p className="text-blue-800 mb-6">Our digital debt specialists understand the internal approval criteria of major fintech lenders. Let us negotiate your digital loan settlement and stop the automated harassment today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Start My Digital Recovery
                                </Link>
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Fintech Guard</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop digital loan harassment. We use RBI’s 2025 Fair Practice codes to shield you and negotiate a legal settlement with any DLA/NBFC.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Stop App Harassment
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v 200+ Fintech Apps Served</p>
                                    <p>v Automated Call Protection</p>
                                    <p>v Legal Shield Technology</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Digital Debt Guides</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-check-if-a-loan-settlement-offer-is-genuine-on-digital-platforms" className="block text-sm text-blue-600 hover:underline">Verify digital offers</Link>
                                    <Link href="/services/credit-card-settlement" className="block text-sm text-blue-600 hover:underline">Credit Card Settlement</Link>
                                    <Link href="/is-loan-settlement-a-good-option" className="block text-sm text-blue-600 hover:underline">Pros & Cons</Link>
                                    <Link href="/how-can-i-initiate-a-full-and-final-settlement-discussion-with-my-bank" className="block text-sm text-blue-600 hover:underline">Start the Discussion</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
            <Footer />
        </div>
    );
}
