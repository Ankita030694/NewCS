'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function VoluntarySurrenderClient() {
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
        { id: 'the-surrender-myth', label: 'The Myth of Voluntary Surrender' },
        { id: 'the-auction-trap', label: 'How Bank Auctions Create Shortfalls' },
        { id: 'legal-liability', label: 'Your Continued Legal Liability' },
        { id: 'loss-of-leverage', label: 'The Danger of Surrender Letters' },
        { id: 'negotiated-surrender', label: 'How to Negotiate a Safe Surrender' },
        { id: 'fighting-the-shortfall', label: 'Fighting a Shortfall Legal Notice' },
        { id: 'agent-harassment', label: 'Handling Post-Surrender Harassment' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'What happens if I return my financed car to the bank in India?',
            answer: "Returning the car (voluntary surrender) does NOT automatically clear your loan. The bank will auction the vehicle. Usually at a massive loss. They will then apply the auction proceeds to your loan balance and send you a legal notice demanding payment for the remaining unpaid amount. Known as the 'shortfall'."
        },
        {
            question: 'What is a car loan shortfall?',
            answer: 'A shortfall is the difference between your total unpaid loan balance (including fines and repo charges) and the amount the bank recovers by auctioning your surrendered car. Because banks auction cars at distress prices. The shortfall is often hundreds of thousands of rupees.'
        },
        {
            question: 'Can the bank sue me for the shortfall after I voluntarily surrender the car?',
            answer: 'Yes, absolutely. The bank retains the legal right to file a civil claims suit or approach the Debt claims court (DRT) to attach your other own assets (like your salary or house) to recover the shortfall amount. Voluntarily giving up the keys does not revoke this right.'
        },
        {
            question: 'How can I avoid the shortfall trap when surrendering my car?',
            answer: "Never surrender the keys without a by law drafted. Pre-settle 'Full and Final closure' pacts in writing. This legal papers must explicitly state that the bank accepts the vehicle as complete payment for the debt and waives their right to pursue you for any future shortfall."
        }
    ];

    const reviews = [
        {
            name: 'Prakash Nair',
            location: 'Kochi',
            stars: 5,
            comment: 'I gave my car back thinking the nightmare was over. Six months later. I got a notice for 4 Lakhs! CredSettle counsel challenged the bogus auction valuation in court and forced the bank to drop the entire shortfall claim. Incredible service.'
        },
        {
            name: 'Vikram Singh',
            location: 'Delhi',
            stars: 5,
            comment: 'I was about to sign the bank’s surrender letter. Thank God I called CredSettle first. They settle a proper closure where the bank took the car as a full closure with zero future risk. Saved my life.'
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
                        Voluntary Car Surrender:<br />
                        <span className="text-blue-300">The Dangerous Shortfall Trap</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Thinking of giving your financed car back to the bank to clear your debt? Stop. Learn how banks manufacture massive "shortfalls" and how to by law protect your assets. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a Defense Lawyer
                        </Link>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <div className="bg-white border-b border-gray-200">
                <div className="max-w-[1440px] mx-auto px-4 py-4">
                    <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
                        <ol className="inline-flex items-center space-x-1 md:space-x-3">
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Voluntary Surrender Shortfall </span> </div> </li>
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
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</p>
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
                            
                            <h2 id="the-surrender-myth" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Myth of Voluntary Surrender</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> When a money crisis strikes and monthly EMIs become impossible to manage. Many car owners believe there is a simple. Honorable exit strategy: simply returning the vehicle to the bank. This concept. Known as 'voluntary surrender'. Is often heavily encouraged by agents who promise that handing over the keys will instantly close the loan account and stop all future threats. Unfortunately. This is one of the most dangerous and financially devastating myths in the Indian auto loan sector. Clients are utterly shocked when. Months after giving up their car. They receive a severe legal notice from the bank demanding lakhs of rupees. This unexpected demand is by law termed 'the shortfall'. It traps the clients in a far worse case than they were in initially.To understand why this happens. You must understand the brutal economics of bank vehicle auctions. When you surrender your car. The bank does not retail it at market value. Instead. The vehicle is sent to a bank yard and hastily auctioned off to a closed network of dealers at distress prices. Often 40 to 60 percent below the actual market valuation. The bank then takes this meager auction amount and applies it against your total unpaid loan balance. Crucially. Your unpaid balance at this stage is not just your main sum. The bank inflates it by adding exorbitant penal rates. Delayed payment charges. Yard parking fees. auction expenses. The massive negative difference between this inflated loan balance and the suppressed auction price is your 'shortfall'.Many clients wrongly assume that surrendering the real asset by law absolves them of the money contract. This is fundamentally incorrect under Indian contract law. The loan pacts you signed explicitly states that the vehicle is merely 'pledge' or 'security' for the loan. The primary legal debts is your promise to repay the borrowed money. If the pledge does not cover the full debt. You remain personally liable for the remaining deficit. Consequently. The bank retains the absolute legal right to pursue you for this shortfall. They will unleash their agents again. File civil claims suits. Can even approach the Debt claims court (DRT) to obtain orders to attach your salary. Freeze your bank accounts. seize your other own homes to recover the shortfall. </p>
                            
                            <h2 id="the-auction-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How Bank Auctions Create Shortfalls</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> To understand why this happens. You must understand the brutal economics of bank vehicle auctions. When you surrender your car. The bank does not retail it at market value. Instead. The vehicle is sent to a bank yard and hastily auctioned off to a closed network of dealers at distress prices. Often 40 to 60 percent below the actual market valuation. The bank then takes this meager auction amount and applies it against your total unpaid loan balance. Crucially. Your unpaid balance at this stage is not just your main sum. The bank inflates it by adding exorbitant penal rates. Delayed payment charges. Yard parking fees. auction expenses. The massive negative difference between this inflated loan balance and the suppressed auction price is your 'shortfall'.Many clients wrongly assume that surrendering the real asset by law absolves them of the money contract. This is fundamentally incorrect under Indian contract law. The loan pacts you signed explicitly states that the vehicle is merely 'pledge' or 'security' for the loan. The primary legal debts is your promise to repay the borrowed money. If the pledge does not cover the full debt. You remain personally liable for the remaining deficit. Consequently. The bank retains the absolute legal right to pursue you for this shortfall. They will unleash their agents again. File civil claims suits. Can even approach the Debt claims court (DRT) to obtain orders to attach your salary. Freeze your bank accounts. seize your other own homes to recover the shortfall.The process of voluntary surrender is on purpose designed to strip you of your settle power. The moment you hand over the keys and sign the standard 'surrender letter' provided by the agents. You have given up your only leverage. That standard bank letter usually contains buried clauses giving the bank unilateral permission to sell the car at any price they deem fit. while explicitly holding you liable for the remainder. You have essentially given them a blank cheque to liquidate your asset cheaply and then sue you for the massive manufactured deficit. All while you no longer have the car for your own use or the ability to sell it yourself at a fair market price. </p>

                            <h2 id="legal-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Your Continued Legal Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Many clients wrongly assume that surrendering the real asset by law absolves them of the money contract. This is fundamentally incorrect under Indian contract law. The loan pacts you signed explicitly states that the vehicle is merely 'pledge' or 'security' for the loan. The primary legal debts is your promise to repay the borrowed money. If the pledge does not cover the full debt. You remain personally liable for the remaining deficit. Consequently. The bank retains the absolute legal right to pursue you for this shortfall. They will unleash their agents again. File civil claims suits. Can even approach the Debt claims court (DRT) to obtain orders to attach your salary. Freeze your bank accounts. seize your other own homes to recover the shortfall.The process of voluntary surrender is on purpose designed to strip you of your settle power. The moment you hand over the keys and sign the standard 'surrender letter' provided by the agents. You have given up your only leverage. That standard bank letter usually contains buried clauses giving the bank unilateral permission to sell the car at any price they deem fit. while explicitly holding you liable for the remainder. You have essentially given them a blank cheque to liquidate your asset cheaply and then sue you for the massive manufactured deficit. All while you no longer have the car for your own use or the ability to sell it yourself at a fair market price. </p>
                            
                            <h2 id="loss-of-leverage" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Danger of Surrender Letters</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The process of voluntary surrender is on purpose designed to strip you of your settle power. The moment you hand over the keys and sign the standard 'surrender letter' provided by the agents. You have given up your only leverage. That standard bank letter usually contains buried clauses giving the bank unilateral permission to sell the car at any price they deem fit. while explicitly holding you liable for the remainder. You have essentially given them a blank cheque to liquidate your asset cheaply and then sue you for the massive manufactured deficit. All while you no longer have the car for your own use or the ability to sell it yourself at a fair market price.If you can no longer afford your car payments. Never surrender the vehicle blindly. Your primary objective must be to settle a 'Full and Final closure' before you hand over the keys. This requires experts legal action. A skilled debt defense counsel will settle straight with the bank's higher handling. Circumventing the lower-level agents. The goal is to reach a by law binding pacts stating that the bank accepts the voluntary surrender of the vehicle as absolute and complete closure of the entire unpaid loan. This pacts must explicitly waive the bank's right to pursue you for any future shortfall and mandate the issuance of a 'No Dues letter' (NDC) fast upon the handover of the vehicle. </p>

                            <h2 id="negotiated-surrender" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Negotiate a Safe Surrender</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If you can no longer afford your car payments. Never surrender the vehicle blindly. Your primary objective must be to settle a 'Full and Final closure' before you hand over the keys. This requires experts legal action. A skilled debt defense counsel will settle straight with the bank's higher handling. Circumventing the lower-level agents. The goal is to reach a by law binding pacts stating that the bank accepts the voluntary surrender of the vehicle as absolute and complete closure of the entire unpaid loan. This pacts must explicitly waive the bank's right to pursue you for any future shortfall and mandate the issuance of a 'No Dues letter' (NDC) fast upon the handover of the vehicle.If you have already surrendered the vehicle and are now facing a legal notice for a massive shortfall. You still have powerful legal defenses. Banks often violate standard operating procedures during the auction process. They often fail to issue a mandatory pre-sale notice giving you the option to bring your own buyer. They routinely undervalue vehicles without conducting proper independent valuations. By filing a counter-claim in the consumer court or the civil court challenging the trade reasonableness of the auction and the inflation of penal charges. An expert counsel can often force the bank to fully drop the shortfall demand or settle it for a microscopic fraction of the claimed amount. </p>

                            <h2 id="fighting-the-shortfall" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Fighting a Shortfall Legal Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> If you have already surrendered the vehicle and are now facing a legal notice for a massive shortfall. You still have powerful legal defenses. Banks often violate standard operating procedures during the auction process. They often fail to issue a mandatory pre-sale notice giving you the option to bring your own buyer. They routinely undervalue vehicles without conducting proper independent valuations. By filing a counter-claim in the consumer court or the civil court challenging the trade reasonableness of the auction and the inflation of penal charges. An expert counsel can often force the bank to fully drop the shortfall demand or settle it for a microscopic fraction of the claimed amount.During this stressful ordeal. It is vital to protect yourself from the harsh mental tactics of agents. Agents will often lie. Claiming that if you do not pay the shortfall fast. The police will arrest you for cheating or fraud. This is fully false. A loan default and a subsequent shortfall is a purely civil dispute. Not a crime. You cannot be arrested for a car loan shortfall. Do not let fear drive you into making panic payments or taking out high-rates own loans to cover the deficit. Instead. Route all contact with the bank and their agents through your legal counsel. Fast neutralizing their ability to threaten you. </p>

                            <h2 id="agent-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Handling Post-Surrender Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> During this stressful ordeal. It is vital to protect yourself from the harsh mental tactics of agents. Agents will often lie. Claiming that if you do not pay the shortfall fast. The police will arrest you for cheating or fraud. This is fully false. A loan default and a subsequent shortfall is a purely civil dispute. Not a crime. You cannot be arrested for a car loan shortfall. Do not let fear drive you into making panic payments or taking out high-rates own loans to cover the deficit. Instead. Route all contact with the bank and their agents through your legal counsel. Fast neutralizing their ability to threaten you.The most key lesson is that voluntary surrender without a pre-settle legal pacts is a trap that turns a manageable debt problem into an uncontrollable money disaster. You must protect your legal rights and your remaining assets. Whether you are contemplating surrendering your car or are currently battling a shortfall legal notice. Expert legal representation is your only effective shield. A specialized debt defense counsel will aggressively settle the terms of surrender. By law challenge manipulated auction valuations. ensure that you can finally close the chapter on your auto loan without the lingering nightmare of future shortfall litigation. </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6"> The most key lesson is that voluntary surrender without a pre-settle legal pacts is a trap that turns a manageable debt problem into an uncontrollable money disaster. You must protect your legal rights and your remaining assets. Whether you are contemplating surrendering your car or are currently battling a shortfall legal notice. Expert legal representation is your only effective shield. A specialized debt defense counsel will aggressively settle the terms of surrender. By law challenge manipulated auction valuations. Ensure that you can finally close the chapter on your auto loan without the lingering nightmare of future shortfall litigation.When a money crisis strikes and monthly EMIs become impossible to manage. Many car owners believe there is a simple. Honorable exit strategy: simply returning the vehicle to the bank. This concept. Known as 'voluntary surrender'. Is often heavily encouraged by agents who promise that handing over the keys will instantly close the loan account and stop all future threats. Unfortunately. This is one of the most dangerous and financially devastating myths in the Indian auto loan sector. Clients are utterly shocked when. Months after giving up their car. They receive a severe legal notice from the bank demanding lakhs of rupees. This unexpected demand is by law termed 'the shortfall'. it traps the clients in a far worse case than they were in initially. </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <p className="font-bold text-lg text-gray-900 mb-2">{faq.question}</p>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <p className="text-2xl font-bold text-blue-900 mb-4">Don't Hand Over the Keys Just Yet!</p>
                                <p className="text-blue-800 mb-6">Before you surrender your car. If you've already received a shortfall notice. Contact our expert counsel. We can settle a proper closure or by law challenge the bank's auction valuation to protect your assets.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Help Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: Vehicle repossession and shortfall recovery involve complex contractual obligations and DRT procedures. This content provides general awareness and does not replace specific legal advice. Always consult a qualified lawyer before making decisions about your assets.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Shortfall Notice?</p>
                                <p className="text-sm text-gray-600 mb-6">Stop bank attachments and fight bogus auction values.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Challenge the Bank
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Stop Asset Attachment</p>
                                    <p>✔ settle closure</p>
                                    <p>✔ Fight Bogus Values</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</p>
                                <nav className="space-y-3">
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Agent Harassment</Link>
                                    <Link href="/legal-notice-to-loan-guarantor-liability" className="block text-sm text-blue-600 hover:underline">Guarantor Liability</Link>
                                    <Link href="/sue-bank-recovery-agent-for-defamation-india" className="block text-sm text-blue-600 hover:underline">Sue Bank for Harassment</Link>
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
