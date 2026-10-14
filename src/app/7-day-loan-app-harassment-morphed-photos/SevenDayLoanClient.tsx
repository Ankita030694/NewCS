'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function SevenDayLoanClient() {
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
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveId(entry.target.id);
                }
            });
        }, {
            rootMargin: '-100px 0px -35% 0px',
            threshold: 0.1
        });
        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((heading) => observer.observe(heading));
        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);
    const navLinks = [
        { id: 'reality-of-fake-apps', label: 'The Reality of Fake 7-Day Loan Apps' },
        { id: 'morphed-photos-blackmail', label: 'Dealing with Morphed Photos Blackmail' },
        { id: 'emergency-lockdown', label: 'Emergency Digital Lockdown Steps' },
        { id: 'contact-list-strategy', label: 'Securing Your Contact List' },
        { id: 'cybercrime-complaint-1930', label: 'Filing a Cybercrime Complaint (1930)' },
        { id: 'legal-differences', label: 'Legal Disputes vs Cyber Extortion' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];
    const faqs = [
        {
            question: 'What should I do if a 7-day loan app is threatening me with morphed photos?',
            answer: "promptly stop paying any extortion money. Inform your family and close contacts that your phone has been hacked. Delete the app. Format your phone. Register a reports on the National Cyber Crime Reporting Portal (1930)."
        },
        {
            question: 'Are these 7-day loan apps legal in India?',
            answer: 'No. The vast majority of 7-day loan apps are completely illegal. Illegal. And operate without an RBI license. They function purely as cyber-extortion syndicates.'
        },
        {
            question: 'Will paying the extortion amount stop the harassment?',
            answer: "Never. Paying the extortion amount identifies you as a compliant victim. This leads to increased demands and steady blackmail. The only way out is to refuse payment completely and take legal action."
        },
        {
            question: 'How do I file a cybercrime complaint against a fake loan app?',
            answer: 'You can file a reports promptly by calling the national cybercrime helpline 1930 or by registering a case online at cybercrime.gov.in with screenshots of the threats and transaction details.'
        }
    ];
    const reviews = [
        {
            name: 'Prakash Sharma',
            location: 'Bangalore',
            stars: 5,
            comment: 'I was trapped in a nightmare with 7 day loan app abuse. They sent morphed photos to my boss. The steps outlined here to format my phone and file a 1930 reports saved my life. The abuse completely stopped.'
        },
        {
            name: 'Neha Gupta',
            location: 'Delhi',
            stars: 5,
            comment: 'Fake loan app blackmail destroyed my mental peace. I kept paying out of fear. Learning that these are illegal loan apps in India gave me the courage to stop paying. I followed the contact list plan and filed an FIR.'
        }
    ];
    return (<>
            {/* Hero Section */}
            <section className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden" style={{
            background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
            minHeight: '50vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
        }}>
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        7-Day Loan App Harassment:<br />
                        <span className="text-blue-300">Stop Fake Morphed Photos & Blackmail.</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> End the extortion today. Follow this crisis guide to secure your phone. Protect your contacts. File an fast cybercrime reports to stop illegal loan app blackmail. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Get Immediate Legal Protection
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
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Stop Loan App Blackmail. </span> </div> </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* Mobile Sticky TOC */}
            <div ref={mobTocRef} className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap">
                {navLinks.map((link) => (<a key={link.id} id={`mob-toc-${link.id}`} href={`#${link.id}`} className={`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${activeId === link.id
                ? 'bg-blue-600 text-white shadow-md'
                : 'text-gray-600 bg-gray-50 hover:bg-gray-100'}`} onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(link.id);
            }}>
                        {link.label}
                    </a>))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Left Column: TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</p>
                            <nav className="space-y-1 text-sm">
                                {navLinks.map((link) => (<a key={link.id} href={`#${link.id}`} className={`block py-1.5 px-3 rounded-lg transition-all ${activeId === link.id
                ? 'bg-blue-600 text-white font-semibold'
                : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`} onClick={(e) => {
                e.preventDefault();
                document.querySelector(`#${link.id}`)?.scrollIntoView({ behavior: 'smooth' });
                setActiveId(link.id);
            }}>
                                        {link.label}
                                    </a>))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Content */}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="reality-of-fake-apps" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Reality of Fake 7-Day Loan Apps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The sudden explosion of illegal 7 day loan apps in India has created a terrifying new breed of cyber extortion. These illegal applications. Often operating entirely outside the RBI rules of the Reserve Bank of India. Masquerade as legitimate micro finance solutions. However. Their true trade model relies entirely on extracting excessive. Arbitrary penalty fees through severe psychological terror. When a user installs one of these applications. They unwittingly grant complete access to their smartphone contact list. Photo gallery. Internal storage. This data harvesting is the cornerstone of their extortion plan. This allows them to weaponize a client's private reputation against them.Once the arbitrary 7 day period expires. The abuse begins instantly and aggressively. The operators. Functioning from unregulated call centers. Use stolen contact data to initiate a campaign of profound public humiliation. The phenomenon of fake loan app blackmail often involves sending abusive messages and morphed photos to the victim's parents. Colleagues. Extended family members. These agents create WhatsApp groups filled with the victim's contacts. Labeling the client as a fraudster. A thief. Even worse. The intense social stigma attached to defaulting on a loan in Indian society is ruthlessly exploited to force fast compliance and extortion payments.A chiefly devastating tactic employed by these cyber criminals is the creation and distribution of morphed photos. Using advanced editing software. They superimpose the victim's face onto obscene or compromising imagery. The threat of circulating these morphed photos loan app operators make is often enough to drive victims into severe depression or even suicidal ideation. It is absolutely crucial to understand that paying the demanded extortion money will never. Under any situation. Stop the blackmail. Paying only signals to the extortionists that you are a vulnerable target with access to funds. Leading them to demand even larger sums promptly after. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Once the arbitrary 7 day period expires. The abuse begins instantly and aggressively. The operators. Functioning from unregulated call centers. Use stolen contact data to initiate a campaign of profound public humiliation. The phenomenon of fake loan app blackmail often involves sending abusive messages and morphed photos to the victim's parents. Colleagues. Extended family members. These agents create WhatsApp groups filled with the victim's contacts. Labeling the client as a fraudster. A thief. Even worse. The intense social stigma attached to defaulting on a loan in Indian society is ruthlessly exploited to force fast compliance and extortion payments.A chiefly devastating tactic employed by these cyber criminals is the creation and distribution of morphed photos. Using advanced editing software. They superimpose the victim's face onto obscene or compromising imagery. The threat of circulating these morphed photos loan app operators make is often enough to drive victims into severe depression or even suicidal ideation. It is absolutely crucial to understand that paying the demanded extortion money will never. Under any situation. Stop the blackmail. Paying only signals to the extortionists that you are a vulnerable target with access to funds. Leading them to demand even larger sums promptly after.The moment you realize you are trapped in a 7 day loan app abuse cycle. You must initiate crisis digital lockdown steps. Your very first action must be to completely sever their access to your device. Revoke all permissions granted to the loan application promptly. However. Simply uninstalling the app is often insufficient. As malicious background processes may persist. For complete pledge. You must back up your essential data and perform a full factory reset on your smartphone. This drastic but needed step guarantees that no hidden spyware or data harvesting scripts continue to transmit your private information to their overseas servers. </p>

                            <h2 id="morphed-photos-blackmail" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Dealing with Morphed Photos Blackmail</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> A chiefly devastating tactic employed by these cyber criminals is the creation and distribution of morphed photos. Using advanced editing software. They superimpose the victim's face onto obscene or compromising imagery. The threat of circulating these morphed photos loan app operators make is often enough to drive victims into severe depression or even suicidal ideation. It is absolutely crucial to understand that paying the demanded extortion money will never. Under any situation. Stop the blackmail. Paying only signals to the extortionists that you are a vulnerable target with access to funds. Leading them to demand even larger sums promptly after.The moment you realize you are trapped in a 7 day loan app abuse cycle. You must initiate crisis digital lockdown steps. Your very first action must be to completely sever their access to your device. Revoke all permissions granted to the loan application promptly. However. Simply uninstalling the app is often insufficient. As malicious background processes may persist. For complete pledge. You must back up your essential data and perform a full factory reset on your smartphone. This drastic but needed step guarantees that no hidden spyware or data harvesting scripts continue to transmit your private information to their overseas servers.Simultaneously. You must execute a preemptive contact plan with your contact list. Do not wait for the extortionists to strike. Update your WhatsApp status and send a broadcast message to your close family. Friends. Colleagues stating that your phone has been compromised by a malicious cyber attack. Inform them that hackers may attempt to send forged. Derogatory messages or morphed images from international or internet numbers. By establishing this narrative beforehand. You completely neutralize the extortionist's primary weapon. This is the shock value and social humiliation caused by their fake messages. </p>
                            
                            <h2 id="emergency-lockdown" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Emergency Digital Lockdown Steps</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> The moment you realize you are trapped in a 7 day loan app abuse cycle. You must initiate crisis digital lockdown steps. Your very first action must be to completely sever their access to your device. Revoke all permissions granted to the loan application promptly. However. Simply uninstalling the app is often insufficient. As malicious background processes may persist. For complete pledge. You must back up your essential data and perform a full factory reset on your smartphone. This drastic but needed step guarantees that no hidden spyware or data harvesting scripts continue to transmit your private information to their overseas servers.Simultaneously. You must execute a preemptive contact plan with your contact list. Do not wait for the extortionists to strike. Update your WhatsApp status and send a broadcast message to your close family. Friends. Colleagues stating that your phone has been compromised by a malicious cyber attack. Inform them that hackers may attempt to send forged. Derogatory messages or morphed images from international or internet numbers. By establishing this narrative beforehand. You completely neutralize the extortionist's primary weapon. This is the shock value and social humiliation caused by their fake messages.Filing an formal cyber crime reports loan app victims often hesitate to do is a strict step for legal safety and claims. You must promptly dial the National Cyber Crime Helpline number. 1930, to report the extortion. Additionally. You should register a detailed. Formal reports on the formal state portal at cybercrime.gov.in. When filing this reports. You must provide full proof. Take screenshots of all abusive WhatsApp messages. Record phone calls if possible. Save the transaction IDs of any payments you have already made. This documented proof is crucial for law enforcement firms to track the money trails and freeze the extortionists' bank accounts. </p>

                            <h2 id="contact-list-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Securing Your Contact List</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Simultaneously. You must execute a preemptive contact plan with your contact list. Do not wait for the extortionists to strike. Update your WhatsApp status and send a broadcast message to your close family. Friends. Colleagues stating that your phone has been compromised by a malicious cyber attack. Inform them that hackers may attempt to send forged. Derogatory messages or morphed images from international or internet numbers. By establishing this narrative beforehand. You completely neutralize the extortionist's primary weapon. This is the shock value and social humiliation caused by their fake messages.Filing an formal cyber crime reports loan app victims often hesitate to do is a strict step for legal safety and claims. You must promptly dial the National Cyber Crime Helpline number. 1930, to report the extortion. Additionally. You should register a detailed. Formal reports on the formal state portal at cybercrime.gov.in. When filing this reports. You must provide full proof. Take screenshots of all abusive WhatsApp messages. Record phone calls if possible. Save the transaction IDs of any payments you have already made. This documented proof is crucial for law enforcement firms to track the money trails and freeze the extortionists' bank accounts.It is key to legally differentiate between a legitimate banking claims and outright cyber extortion. Authorized NBFCs and banks are strictly governed by the RBI Fair Practices Code. This mandates respectful contact and due process for claims. In stark contrast. Illegal loan apps in India operate as criminal syndicates violating multiple sections of the Information Technology Act. 2000. The Indian Penal Code. This includes section 420 for cheating. Section 506 for criminal threats. Section 67 for transmitting obscene material in electronic form. You are not dealing with a loan claims process. You are dealing with a severe cyber crime. </p>

                            <h2 id="cybercrime-complaint-1930" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Filing a Cybercrime Complaint (1930)</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Filing an formal cyber crime reports loan app victims often hesitate to do is a strict step for legal safety and claims. You must promptly dial the National Cyber Crime Helpline number. 1930, to report the extortion. Additionally. You should register a detailed. Formal reports on the formal state portal at cybercrime.gov.in. When filing this reports. You must provide full proof. Take screenshots of all abusive WhatsApp messages. Record phone calls if possible. Save the transaction IDs of any payments you have already made. This documented proof is crucial for law enforcement firms to track the money trails and freeze the extortionists' bank accounts.It is key to legally differentiate between a legitimate banking claims and outright cyber extortion. Authorized NBFCs and banks are strictly governed by the RBI Fair Practices Code. This mandates respectful contact and due process for claims. In stark contrast. Illegal loan apps in India operate as criminal syndicates violating multiple sections of the Information Technology Act. 2000. The Indian Penal Code. This includes section 420 for cheating. Section 506 for criminal threats. Section 67 for transmitting obscene material in electronic form. You are not dealing with a loan claims process. You are dealing with a severe cyber crime.If the abuse persists despite your initial actions. You must escalate the matter to your local police station. Request them to convert your online cybercrime reports into a formal First Information Report (FIR). An FIR carries major legal weight and obligates the police machinery to initiate a formal investigation. Provide the Investigating Officer with the APK file of the malicious application if you have it. Along with all the digital proof you have collected. Highlighting the creation and distribution of morphed images is chiefly effective in compelling the police to register the FIR under strict sections of the IT Act. </p>

                            <h2 id="legal-differences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Legal Disputes vs Cyber Extortion</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> It is key to legally differentiate between a legitimate banking claims and outright cyber extortion. Authorized NBFCs and banks are strictly governed by the RBI Fair Practices Code. This mandates respectful contact and due process for claims. In stark contrast. Illegal loan apps in India operate as criminal syndicates violating multiple sections of the Information Technology Act. 2000. The Indian Penal Code. This includes section 420 for cheating. Section 506 for criminal threats. Section 67 for transmitting obscene material in electronic form. You are not dealing with a loan claims process. You are dealing with a severe cyber crime.If the abuse persists despite your initial actions. You must escalate the matter to your local police station. Request them to convert your online cybercrime reports into a formal First Information Report (FIR). An FIR carries major legal weight and obligates the police machinery to initiate a formal investigation. Provide the Investigating Officer with the APK file of the malicious application if you have it. Along with all the digital proof you have collected. Highlighting the creation and distribution of morphed images is chiefly effective in compelling the police to register the FIR under strict sections of the IT Act. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> money claims and mental rehabilitation are the final steps in surviving this ordeal. You must understand that any money you paid to these illegal applications was extorted under extreme duress. While recovering the funds is challenging. It is not impossible if the cyber cell successfully freezes the receiving accounts promptly. More importantly. You must forgive yourself for falling into this trap. These applications are professionally designed by international crime syndicates mainly to deceive and manipulate people experiencing temporary hardship. Seeking support from specialized legal counsel and mental health workers is highly recommended.The fight against fake loan app blackmail requires widespread digital literacy and a zero tolerance approach to extortion. Never download money applications from unverified sources outside formal app stores. Always scrutinize the permissions an app requests. A legitimate loan provider will never require access to your photo gallery or your entire contact list. By educating yourself and your community about the hallmarks of these illegal loan apps in India. You contribute to a collective defense against this predatory hub. This ensures that these cyber criminals can no longer exploit money vulnerability for their illicit gains. </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (<div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <p className="font-bold text-lg text-gray-900 mb-2">{faq.question}</p>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <p className="text-2xl font-bold text-blue-900 mb-4">Don't Face Extortion Alone.</p>
                                <p className="text-blue-800 mb-6">Cyber extortion is a severe crime. Our specialized cybercrime defense lawyers have a proven track record of securing injunctions. Blocking fake loan app blackmail. Registering formal police reports against these illegal syndicates.</p>
                                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300">
                                    Schedule a Legal Consultation Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided on this page constitutes general legal awareness and does not replace formal legal advice. Cyber extortion matters involve complex criminal laws. Always consult with a qualified advocate licensed to practice in your jurisdiction.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise & Author */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Facing abuse?</p>
                                <p className="text-sm text-gray-600 mb-6">Do not ignore illegal cyber extortion. Secure your rights and build a strong defense.</p>
                                <Link href="/contact" className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center">
                                    Get Legal Defence
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Draft Cyber reports.</p>
                                    <p>✔ Stop Agent Calls.</p>
                                    <p>✔ Protect Your Privacy.</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise.</p>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Anti Harassment Strategies</Link>
                                    <Link href="/nbfc-recovery-agent-home-visit-stop" className="block text-sm text-blue-600 hover:underline">Stop NBFC Home Visits</Link>
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
                    {reviews.map((review, index) => (<div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400 mr-2">
                                    {[...Array(review.stars)].map((_, i) => (<svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                        </svg>))}
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                            <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                <span>{review.name}</span>
                                <span className="opacity-60">{review.location}</span>
                            </div>
                        </div>))}
                </div>
            </section>
        </>);
}
