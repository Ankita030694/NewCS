'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function JailForLoanClient() {
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
        { id: 'civil-vs-criminal', label: 'Civil vs Criminal Law' },
        { id: 'fake-arrest-threat', label: 'Anatomy of a Fake Arrest Threat' },
        { id: 'fake-fir-copies', label: 'Fake WhatsApp FIR Copies' },
        { id: 'fake-police-calls', label: 'Threatening Calls from "Police"' },
        { id: 'when-jail-happens', label: 'When Can Default Lead to Jail?' },
        { id: 'section-138-cheque', label: 'Section 138 Cheque Bounce' },
        { id: 'fraud-diversion', label: 'Fraud and Diversion of Funds' },
        { id: 'respond-extortion', label: 'How to Respond to Extortion' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];

    const faqs = [
        {
            question: 'Can the police arrest me for not paying my personal loan EMIs?',
            answer: 'No. Defaulting on an unsecured personal loan is a civil breach of contract. The police do not have the jurisdiction to arrest you or register an FIR for a simple inability to repay a loan.'
        },
        {
            question: 'I received an arrest warrant on WhatsApp from a recovery agent. Is it real?',
            answer: 'It is almost certainly 100% fake. Real arrest warrants are issued by magistrates and served physically by uniformed police officers, never sent as PDFs on WhatsApp by private collection agencies.'
        },
        {
            question: 'Under what specific condition can a loan default lead to jail?',
            answer: 'The primary exception is if you issued a security cheque to the bank that bounced (Section 138 of the Negotiable Instruments Act), or if the bank proves you submitted forged documents (fraud/cheating) to obtain the loan.'
        },
        {
            question: 'Can recovery agents legally confiscate my household items?',
            answer: 'Absolutely not. Personal loans are unsecured. Agents cannot touch your TV, fridge, or vehicle. Confiscation of property requires a specific court order and must be executed by a court-appointed bailiff, not a private agent.'
        },
        {
            question: 'How should I reply to a fake legal notice?',
            answer: 'Never ignore it, but do not panic. Have a lawyer draft a strong response demanding proof of the claims, pointing out the forgery, and warning the agency of counter-lawsuits for extortion and criminal intimidation.'
        }
    ];

    const reviews = [
        {
            name: 'Rahul Verma',
            location: 'Mumbai',
            stars: 5,
            comment: 'I was suicidal after receiving a WhatsApp "FIR" claiming the police were coming to arrest me in 2 hours for my personal loan. The lawyers here instantly identified it as a forgery and stopped the agents from ever calling again.'
        },
        {
            name: 'Anita Desai',
            location: 'Hyderabad',
            stars: 5,
            comment: 'A man claiming to be a police inspector called and threatened my family over my son\'s loan app default. The team helped us file a real police complaint against the scammers for impersonation and extortion.'
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
                        Can You Go to Jail for Not Paying a Personal Loan?<br />
                        <span className="text-blue-300">The Truth About Arrest Threats</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Expose the fake FIRs and forged arrest warrants used by recovery agents. Learn why an unsecured loan default is a civil dispute, not a crime.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify a Fake Legal Notice
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
                                        Personal Loan Arrest Threats
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
                                Every day, thousands of honest borrowers in India receive terrifying WhatsApp messages containing fake arrest warrants and forged police FIRs, demanding immediate payment for a personal loan default. This guide exposes the dirty scare tactics used by rogue recovery agents, clearly explaining why an unsecured loan default is a civil dispute that cannot land you in jail.
                            </p>

                            <h2 id="civil-vs-criminal" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Civil vs Criminal Law in Loan Defaults</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most crucial concept every borrower must understand is the fundamental distinction between civil and criminal law in the Indian justice system. Taking a personal loan from a bank or an NBFC is a civil contract. You agree to borrow money and repay it with interest over a specific period. If you fail to repay due to a job loss, medical emergency, or business failure, you have committed a "breach of contract."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A breach of contract is exclusively a civil matter. The Indian Constitution and the Supreme Court of India have repeatedly affirmed that an individual cannot be imprisoned merely for the inability to repay a civil debt. The police have absolutely zero jurisdiction in civil debt recovery. A police officer cannot register a First Information Report (FIR) against you simply because a bank manager complains that you missed your EMIs.
                            </p>

                            {/* Section Type: Myth vs Fact Table */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-8 overflow-x-auto">
                                <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Debunking Collection Myths</h3>
                                <table className="w-full text-left border-collapse min-w-[600px]">
                                    <thead>
                                        <tr className="bg-red-50 text-red-900">
                                            <th className="p-4 font-bold border-b border-red-200 rounded-tl-xl w-1/2">The Agent's Threat (Myth)</th>
                                            <th className="p-4 font-bold border-b border-red-200 rounded-tr-xl w-1/2 bg-green-50 text-green-900">The Legal Reality (Fact)</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700 bg-white">
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-red-700">"The police are coming to arrest you in 2 hours."</td>
                                            <td className="p-4 border-l border-gray-200">Police cannot arrest you for missing an EMI. Only a judge can issue a warrant.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 bg-gray-50">
                                            <td className="p-4 font-semibold text-red-700">"We have filed a Section 420 (Fraud) FIR."</td>
                                            <td className="p-4 border-l border-gray-200 bg-white">Defaulting is not fraud. Fraud requires proof that you never intended to pay from day one.</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="p-4 font-semibold text-red-700">"We will seize your household items today."</td>
                                            <td className="p-4 border-l border-gray-200">Personal loans are unsecured. Agents cannot seize property without a civil court decree and a bailiff.</td>
                                        </tr>
                                        <tr className="bg-gray-50">
                                            <td className="p-4 font-semibold text-red-700 rounded-bl-xl">"Your family members will also be jailed."</td>
                                            <td className="p-4 border-l border-gray-200 bg-white rounded-br-xl">Criminal liability cannot be transferred. Your family has no legal liability for your personal loan.</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="fake-arrest-threat" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Anatomy of a Fake Arrest Threat</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If default is a civil matter, why are so many people terrified of being jailed? The answer lies in the highly sophisticated psychological manipulation and extortion tactics employed by rogue recovery agencies. These agencies operate on commission and know that fear is the most effective tool to extract payments from panicked citizens.
                            </p>

                            <h3 id="fake-fir-copies" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fake WhatsApp FIR Copies</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A classic tactic involves sending a PDF document via WhatsApp that closely resembles an official police FIR or a court issued arrest warrant. These documents are entirely fabricated using basic photo editing software. They will prominently feature the national emblem (Ashoka Chakra), a fake police stamp, and intimidating legal jargon citing sections like 420 (Cheating) and 406 (Criminal Breach of Trust). 
                            </p>
                            
                            {/* Section Type: Red Flag Box */}
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-2xl mb-8">
                                <h4 className="text-xl font-bold text-red-900 mb-3 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    Red Flags of a Forged Legal Document
                                </h4>
                                <ul className="space-y-2 text-red-800 text-sm">
                                    <li><strong>Delivery Method:</strong> Real warrants are served physically by police, never sent as a casual WhatsApp attachment by a private number.</li>
                                    <li><strong>Grammar & Spelling:</strong> Fake notices are often riddled with appalling grammatical errors and typos.</li>
                                    <li><strong>Ultimatums:</strong> Authentic legal notices give you a statutory 15 or 30-day response period. Fake notices demand payment "within 2 hours to stop the police jeep."</li>
                                    <li><strong>Payment Links:</strong> The document includes a UPI link or personal bank account details for a "settlement." Courts do not accept payments via random UPI links.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you receive such a document, you must seek verification. Learning to identify a fake legal notice from bank check is your first line of defense against these scammers.
                            </p>

                            <h3 id="fake-police-calls" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Threatening Calls from "Police Officers"</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another terrifying strategy is the impersonation call. You will receive a call from someone loudly identifying themselves as "Inspector Sharma from the local Cyber Crime Branch" or a similar title. They will use abusive language, claim an FIR has been registered against you by the bank, and threaten to dispatch a patrol car to arrest you in front of your neighbors unless you immediately pay a specified "settlement amount" to the collection agency.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This is blatant criminal impersonation and extortion. Actual police officers do not act as recovery agents for private banks, nor do they negotiate settlements over the phone. When you encounter this, hiring a <Link href="/best-lawyer-for-bank-harassment-for-loan" className="text-blue-600 hover:underline">lawyer to stop police harassment loan</Link> can immediately flip the script. The lawyer will trace the number, expose the impersonator, and file a genuine FIR against the recovery agency.
                            </p>

                            <h2 id="when-jail-happens" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">When Can a Loan Default Actually Lead to Jail?</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While inability to pay a civil debt cannot lead to arrest, there are two highly specific circumstances where a borrower can face criminal charges. It is vital to differentiate these from a standard personal loan default.
                            </p>

                            <h3 id="section-138-cheque" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Section 138 Cheque Bounce Exception</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you provided blank security cheques to the bank at the time of loan disbursement, the bank might present them for clearing when you default. If the cheque bounces due to insufficient funds, the bank can initiate criminal proceedings under Section 138 of the Negotiable Instruments Act. A cheque bounce is a criminal offense in India, punishable by up to two years in prison.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                However, even a Section 138 case does not result in sudden police raids. The court must issue a formal summons, granting you multiple opportunities to appear before a judge, present your defense (such as proving the cheque was taken as security, not for debt discharge), or settle the amount. Arrest warrants are only issued if you continuously ignore the court summons and refuse to appear.
                            </p>

                            <h3 id="fraud-diversion" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Fraud and Willful Diversion of Funds</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The second exception involves actual criminal intent. If the bank can definitively prove that you obtained the loan using forged salary slips, fake identity documents, or by impersonating someone else, they can file an FIR for cheating and forgery (Sections 420, 467, 468 IPC). Similarly, if you take a business loan for machinery but use the funds to buy a personal luxury car (diversion of funds), you can face criminal charges. But simply losing your job and failing to pay an honestly acquired personal loan never qualifies as fraud.
                            </p>

                            <h2 id="respond-extortion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Respond to an Extortion Attempt</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing these illegal scare tactics, your response must be calculated and legally sound. Do not argue with the agents, as they thrive on your emotional distress. Instead, transition to a purely defensive legal posture.
                            </p>
                            
                            {/* Section Type: Evidence Collection List */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm mb-8">
                                <h4 className="text-xl font-bold text-gray-900 mb-6">Extortion Evidence Checklist</h4>
                                <p className="text-gray-600 mb-4">Before taking legal action, your lawyer will need you to consolidate the following evidence:</p>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-sm font-medium text-gray-800">Screenshots of all WhatsApp "FIR" PDFs</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-sm font-medium text-gray-800">Call recordings of "Police" impersonators</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-sm font-medium text-gray-800">Truecaller details of the threatening numbers</span>
                                    </div>
                                    <div className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                                        <svg className="w-5 h-5 text-blue-600 mr-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                        <span className="text-sm font-medium text-gray-800">Bank statements showing UPI links they sent</span>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                With this evidence, your advocate will draft a formal, powerful reply. Understanding <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:underline">how to reply to legal notice for personal loan</Link> properly is vital. The lawyer's notice will demand the bank verify the authenticity of the "police officers" and the "FIRs" sent on their behalf. Confronted with hard evidence of criminal extortion committed by their own agents, banks immediately back down, withdraw the aggressive agents, and offer favorable civil settlement terms to avoid regulatory complaints to the RBI Ombudsman.
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on Loan Default Arrests</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Are You Being Threatened With Arrest?</h3>
                                <p className="text-blue-800 mb-6">Do not let scammers extort money from you using fake police threats. Our legal team will verify any legal notice, expose forged documents, and initiate strict counter-action against abusive recovery agents.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Verify Your Notice Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The legal strategies outlined regarding fake legal notices and arrest threats are for educational purposes. Always consult with a qualified advocate to address the specific nuances of your legal situation and to verify the authenticity of any document received.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Fake Police Threats?</h4>
                                <p className="text-sm text-gray-600 mb-6">Upload your WhatsApp notices. We will verify them and stop the harassment legally.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Get Legal Defense
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Expose Fake FIRs</p>
                                    <p>✔ Stop Police Impersonators</p>
                                    <p>✔ Draft Lawyer Replies</p>
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
