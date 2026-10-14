'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
export default function NbfcRecoveryClient() {
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
        { id: 'nightmare-of-visits', label: 'The Nightmare of NBFC Home Visits' },
        { id: 'rbi-rules', label: 'RBI Rules Governing Recovery Agents' },
        { id: 'mandatory-intimation', label: 'Mandatory Intimation and Consent' },
        { id: 'legal-visiting-hours', label: 'Legal Visiting Hours' },
        { id: 'how-to-handle', label: 'Handling an Unannounced Agent' },
        { id: 'demand-authorization', label: 'Demand the Authorization Letter' },
        { id: 'taking-legal-action', label: 'Taking Legal Action Against NBFCs' },
        { id: 'dealing-with-major-nbfcs', label: 'Dealing with Major NBFCs (Bajaj etc.)' },
        { id: 'faqs', label: 'Frequently Asked Questions' },
    ];
    const faqs = [
        {
            question: 'Can a recovery agent visit my home without prior notice?',
            answer: 'No. According to the RBI\'s Fair Practices Code, recovery agents must provide prior notice and mutually agree on a time before visiting your residence. Unannounced visits are a direct violation of regulatory guidelines.'
        },
        {
            question: 'What are the legal visiting hours for recovery agents in India?',
            answer: 'The RBI strictly mandates that agents can only contact clients. Either by phone or in person. Between 07:00 AM and 07:00 PM.'
        },
        {
            question: 'What documents should I ask for when an agent arrives at my door?',
            answer: "You must demand to see their valid ID card issued by the bank or firm. The exact approval Letter for your case. A valid Debt agents (DRA) letter issued by the Indian Institute of Banking and Finance (IIBF)."
        },
        {
            question: 'Can I file a police complaint against abusive recovery agents?',
            answer: "Yes. If an agent uses abusive language. Threatens violence. Attempts to enter your home forcefully. You can file a penal complaint for trespassing. Penal threaten. Extortion under relevant sections of the Indian Penal Code (IPC)."
        },
        {
            question: 'How can a lawyer help stop NBFC recovery harassment?',
            answer: "A specialized counsel can issue a formal cease-and-desist notice to the NBFC. Route all future contact through the law firm. File complaints with the Banking RBI officer. Initiate civil suits for damages if the threats continues."
        }
    ];
    const reviews = [
        {
            name: 'Suresh Kumar',
            location: 'Pune',
            stars: 5,
            comment: 'Agents from a major NBFC were showing up at my office and humiliating me in front of colleagues. The legal notice drafted by CredSettle stopped the visits instantly. They even helped me file a complaint with the RBI.'
        },
        {
            name: 'Meera Joshi',
            location: 'Bengaluru',
            stars: 5,
            comment: 'I was terrified to open my front door because of constant unannounced visits. The counsel here taught me exactly what papers to ask for. which made the fake agents run away. Highly recommend their services.'
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
                        NBFC Recovery Agent Home Visit:<br />
                        <span className="text-blue-300">How to Legally Stop Them.</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Learn the exact legal protocols NBFCs must follow. Protect your dignity and demand proper approval to stop unlawful threats at your doorstep. </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                            Consult an Anti-Harassment Lawyer
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
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Stop NBFC agents. </span> </div> </li>
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
                            
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold"> clients across India live in constant fear of harsh field agents sent by large NBFCs to their homes and workplaces. While money institutions undeniably have the right to recover legitimate debts. The Reserve Bank of India strictly forbids threaten. Public humiliation. Unannounced home visits. It empowers clients to by law block and penalize agents who violate these codes of conduct. </p>

                            <h2 id="nightmare-of-visits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Nightmare of NBFC Home Visits</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> Defaulting on a loan is primarily a civil matter arising from a breach of contract. Usually triggered by sudden medical emergencies. Unexpected job losses. Severe firm downturns. Yet. The calls tactics employed by many Non Banking money Companies (NBFCs) quickly turn this civil dispute into a mental nightmare. When phone calls fail to produce fast payments. These institutions escalate to deploying field agents straight to the clients's residence or place of employment. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> The objective of these visits is rarely to have a constructive discussion about restructuring the debt. Instead. The explicit goal is to create maximum public humiliation. Agents intentionally visit when neighbors are present or show up at firm offices to shame the defaulter in front of their colleagues and employers. They employ harsh body language. Use loud and abusive vernacular. Often threaten severe. Yet fully fabricated. Legal results like imminent arrest or police raids. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> This environment of fear is meticulously crafted. The calls firms operate on a commission basis. Earning a rate of whatever amount they can extract. As a result. They operate on the fringes of legality. Exploiting the average citizen's profound ignorance of their legal rights and deep seated fear of the judicial system. Recognizing that these tactics are fundamentally unlawful is the first. Vital step in reclaiming your dignity and forcing the NBFC to the settle table. </p>

                            <h2 id="rbi-rules" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">RBI Rules Governing Recovery Agent Home Visits</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> To curb these widespread abuses. The Reserve Bank of India (RBI) has issued a thorough Fair Practices Code (FPC) alongside strict guidelines specifically regulating the conduct of Debt agents. These rules apply universally to all banks and registered NBFCs operating within Indian jurisdiction. A fundamental principle of these guidelines is that while the lender has the legal right to recover their dues. This claims must strictly adhere to due process and cannot infringe upon the fundamental rights to privacy and dignity guaranteed by the Constitution. </p>

                            <h2 id="mandatory-intimation" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Mandatory Intimation and Consent</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> One of the most often violated rules is the requirement for prior intimation. The RBI guidelines explicitly state that a agents cannot simply appear unannounced at your doorstep. They are by law mandated to contact you beforehand. Preferably via a recorded phone line or formal written contact. To request a meeting. More importantly. The time and place of this meeting must be mutually agreed upon. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If you state that you are only available to meet on Saturday afternoons at a exact coffee shop. The agent cannot by law force their way into your home on a Tuesday morning. If an agent violates this rule. They are committing trespassing. Knowing. <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:underline">rbi rules for agents</Link> is your strongest shield against such intrusions. </p>

                            <h2 id="legal-visiting-hours" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Legal Visiting Hours</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> To prevent threats during unreasonable hours. The RBI has defined a strict window for all claims related contacts. agents are strictly prohibited from making phone calls or conducting real visits before 07:00 AM and after 07:00 PM. Any contact outside these hours. Especially late at night or during the early hours of the morning. Is a severe violation. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> also. Agents are instructed to respect the clients's privacy and avoid contacting them at inappropriate times. Examples include during known periods of bereavement in the family or major religious observances. Documenting any violation of these time restrictions by saving call logs and CCTV footage is crucial for building a strong threats case against the NBFC. </p>

                            {/* Section Type: Action Plan */}
                            <h2 id="how-to-handle" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">How to Handle an Unannounced Agent at Your Door</h2>
                            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-200 mb-8 overflow-hidden">
                                <p className="text-xl font-bold text-blue-900 mb-6 text-center">Your 4-Step Legal Action Plan.</p>
                                <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-blue-300 before:to-transparent">
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">1</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <p className="font-bold text-gray-900 mb-1">Do Not Allow Entry.</p>
                                            <p className="text-sm text-gray-600">Keep the security door closed or speak through a window. An agent has zero legal authority to enter your private home without a court order or your explicit permission.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">2</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h3 className="font-bold text-gray-900 mb-1">Start Video Recording</h3>
                                            <p className="text-sm text-gray-600">fast turn on your phone camera. Clearly state that you are recording the interaction for legal papers and your own safety. This instantly changes their harsh behavior.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">3</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h3 className="font-bold text-gray-900 mb-1">Demand valid Credentials</h3>
                                            <p className="text-sm text-gray-600">Politely but firmly ask them to hold up their valid ID and approval letter to the camera. Refuse to discuss any money matters until these papers are checked.</p>
                                        </div>
                                    </div>
                                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-blue-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">4</div>
                                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-blue-200 bg-white shadow">
                                            <h3 className="font-bold text-gray-900 mb-1">Call Emergency Services</h3>
                                            <p className="text-sm text-gray-600">If they refuse to leave. Start banging on the door. Use abusive language. Dial 112 fast and report an attempted trespass and penal threaten by unknown individuals.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <h3 id="demand-authorization" className="text-2xl font-bold text-gray-800 mt-8 mb-4">Demand the Authorization Letter (DRA letter)</h3>
                            <p className="text-gray-700 leading-relaxed mb-6"> The most powerful tool at your disposal is demanding papers. The RBI mandates that anyone acting as a agents must possess a valid Debt agents (DRA) letter issued by the Indian Institute of Banking and Finance (IIBF) after completing a mandatory 100 hour training course. </p>
                            {/* Section Type: Document Checklist */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200 mb-6">
                                <p className="text-gray-700 mb-4 font-semibold">When an agent arrives. You have the absolute legal right to demand the following three papers before even acknowledging your identity:</p>
                                <ul className="space-y-3">
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-700"><strong>Valid valid ID Card:</strong> Issued straight by the bank or the registered calls firm.</span> </li>
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-700"><strong>exact approval Letter:</strong> A letter printed on the bank's letterhead. Specifically authorizing that particular agent (by name) to collect the debt from you. Detailing the exact unpaid amount.</span> </li>
                                    <li className="flex items-start"> <svg className="w-6 h-6 text-green-600 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg> <span className="text-gray-700"><strong>IIBF DRA letter:</strong> Proof that they have completed the mandatory training and are by law signed to act as agents.</span> </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> In over 90% of cases. Field agents sent by third party firms do not possess all three of these papers. The moment you start recording and demanding these specifics. They realize they are dealing with an informed citizen rather than a vulnerable victim. Without these papers. They are by law just strangers demanding money at your door. which amounts to extortion. If you need a thorough guide on this. Learning. <Link href="/how-to-stop-recovery-agent-harassment" className="text-blue-600 hover:underline">how to stop agents threats</Link> through legal channels is essential. </p>

                            <h2 id="taking-legal-action" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Taking Legal Action Against NBFC Harassment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6"> You do not have to endure threats passively. The Indian legal system provides robust mechanisms to penalize banks and NBFCs that employ thuggish calls tactics. The first step in taking legal action is to consolidate all evidence. This includes call recordings. WhatsApp screenshots containing abusive language. Video recordings of unannounced home visits. A log of calls made outside the permitted hours or to your relatives. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> Once evidence is gathered. A specialized anti threats counsel will draft and dispatch a formal Cease and Desist notice to the nodal head of the NBFC. This legal notice serves as a stern warning. Demanding the fast cessation of all unlawful claims tactics and instructing the institution to route all future contacts only through the law firm. This single step often brings an abrupt halt to the threats. as banks fear the RBI backlash of ignoring formal legal representation. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> If the NBFC ignores the notice. The counsel will escalate the matter by filing a thorough complaint with the RBI Banking RBI officer. Attaching all digital evidence. The RBI takes these complaints incredibly seriously and has the power to impose hefty fines on the NBFC and mandate the cancellation of the calls firm's license. In severe cases involving real assault or extreme mental torture. Penal FIRs can be lodged against the individual agents and the bank officials under various sections of the IPC. Alongside civil suits demanding compensation for mental agony. </p>

                            {/* Section Type: Warning Alert Box */}
                            <h2 id="dealing-with-major-nbfcs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Dealing with Major NBFCs (Bajaj Finance, etc.)</h2>
                            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-2xl mb-8">
                                <h3 className="text-xl font-bold text-yellow-800 mb-3 flex items-center"> <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> Warning: Recognizing unlawful Escalation Tactics </h3>
                                <p className="text-yellow-900 text-sm leading-relaxed mb-0"> Major NBFCs often operate vast networks of third party calls firms. While the NBFCs themselves claim adherence to RBI guidelines. These outsourced firms often go rogue to meet harsh claims targets. Be highly suspicious of agents who refuse to provide valid ID. Claim they are calling from the "High Court Lok Adalat," or threaten to send police to arrest you. These are universally recognized unlawful tactics. </p>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6"> Institutions with massive retail portfolios rely heavily on harsh follow ups. clients facing issues specifically with. <Link href="/bajaj-finance-recovery-agent-harassment-home-visit" className="text-blue-600 hover:underline">bajaj finance agents threats home visit</Link> or similar major NBFCs must understand that the scale of the institution does not put them above the law. In fact. Large NBFCs are under stricter RBI scrutiny regarding their outsourced calls practices. </p>
                            <p className="text-gray-700 leading-relaxed mb-6"> When dealing with these major players. Maintaining a meticulous paper trail is your greatest asset. Never pay cash to a field agent without securing a digitally verifiable receipt generated from the bank's valid application. Always communicate via registered email rather than informal WhatsApp messages. If you wish to settle the debt. Ensure the One Time closure (OTS) offer is initiated through valid channels and checked by your legal counsel before transferring any funds. </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions on Recovery Agents</h2>
                            <div className="space-y-6">
                                {faqs.map((faq, index) => (<div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                    </div>))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Stop the threats Now</h3>
                                <p className="text-blue-800 mb-6">You have the legal right to live with dignity. Regardless of your money defaults. Our specialized legal team will issue fast Cease and Desist notices to block unlawful home visits and force the NBFCs to communicate respectfully through legal channels.</p>
                                <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300">
                                    Get Legal Protection Today
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The strategies outlined regarding recovery agent harassment are for educational purposes. Banking regulations and RBI guidelines are subject to change. Always consult with a qualified advocate to address the specific legal nuances of your harassment case.
                            </div>
                        </article>
                    </main>

                    {/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <p className="font-bold text-xl text-gray-900 mb-2">Are Agents at Your Door?</p>
                                <p className="text-sm text-gray-600 mb-6">Do not let unlawful calls firms terrorize your family. We can stop them by law.</p>
                                <Link href="/contact" className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center">
                                    Stop Harassment
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Legal Cease & Desist.</p>
                                    <p>✔ RBI RBI officer Filing.</p>
                                    <p>✔ Protect Your Privacy.</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <p className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise.</p>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Defence</Link>
                                    <Link href="/best-lawyer-for-drt-case-defence-for-bank-loan-recovery" className="block text-sm text-blue-600 hover:underline">DRT Specialization</Link>
                                    <Link href="/best-lawyer-for-loan-settlement-during-drt" className="block text-sm text-blue-600 hover:underline">Settlement Strategies</Link>
                                    <Link href="/best-lawyer-for-msme-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">MSME Loan Defence</Link>
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
