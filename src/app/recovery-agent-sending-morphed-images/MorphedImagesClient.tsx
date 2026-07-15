"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function MorphedImagesClient() {
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
        { id: 'psychological-warfare', label: 'Psychological Warfare' },
        { id: 'identifying-source', label: 'Section 1: Identifying the Source' },
        { id: 'immediate-containment', label: 'Section 2: Immediate Containment' },
        { id: 'legal-recourse', label: 'Section 3: Legal Recourse' },
        { id: 'documenting-evidence', label: 'Section 4: Documenting Evidence' },
        { id: 'escalating-rbi-cyber', label: 'Section 5: Escalating to RBI' },
        { id: 'emotional-toll', label: 'Section 6: Emotional Toll' },
        { id: 'conclusion', label: 'Conclusion' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Rajiv S.",
            location: "Bangalore",
            rating: 5,
            text: "I was terrified when they sent a fake photo. This guide helped me realize I wasn\'t alone. I filed a cyber complaint and the messages stopped."
        },
        {
            name: "Sneha M.",
            location: "Pune",
            rating: 5,
            text: "The legal process map here is exactly what I needed. I informed my contacts immediately, and the scammers lost all their power over me."
        },
        {
            name: "Vikram R.",
            location: "Delhi",
            rating: 5,
            text: "Understanding the IT Act sections gave me the confidence to stand up to the blackmail. Excellent, actionable legal advice."
        }
    ];

    const faqs = [
        {
            question: 'What is the first thing I should do if an agent threatens me with a morphed image?',
            answer: 'Immediately capture screenshots of the threat, the image, and the phone number. Do not delete the chat. Then, block the number and warn your close contacts that your phone data was compromised by a scam app. Do not pay them any money, as paying only invites more extortion.'
        },
        {
            question: 'Can I file a police complaint if I don\'t know the agent\'s real name?',
            answer: 'Yes, you can and should file a complaint with the National Cyber Crime Reporting Portal (cybercrime.gov.in) using the phone numbers, UPI IDs, and screenshots they used to contact you. The police can trace them through these digital footprints.'
        },
        {
            question: 'Which sections of the law apply to sending morphed explicit images?',
            answer: 'Sending or publishing morphed explicit images attracts Section 67 and 67A of the Information Technology (IT) Act, which deals with transmitting obscene material. It also attracts Section 354C of the IPC (Voyeurism) and Section 384 (Extortion).'
        },
        {
            question: 'Will paying the loan amount stop them from leaking the photo?',
            answer: 'No. Experience shows that paying the extortion money never stops the harassment. Scammers realize you are afraid and have money, so they will keep demanding more. The only way to stop them is through legal and police intervention.'
        },
        {
            question: 'How do I stop them from accessing my contacts in the future?',
            answer: 'Uninstall the loan app immediately. Go to your phone settings, check app permissions, and revoke contacts, gallery, and camera access for any suspicious apps. Also, consider resetting your advertising ID to prevent further tracking.'
        },
        {
            question: 'Can the RBI help if the loan app is not registered?',
            answer: 'If the app is illegal and not registered as an NBFC with the RBI, the RBI Sachet portal allows you to report it. However, for immediate criminal acts like image morphing, the Cyber Police is the primary authority to contact.'
        },
        {
            question: 'Should I tell my family about the morphed image threat?',
            answer: 'Yes, transparency is your best defense. Informing your family preemptively takes away the scammer\'s leverage. Once your family knows the image is a fake extortion tactic, the threat loses its power to ruin your reputation.'
        }
    ];

    return (
        <>
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
                        Recovery Agent Sending<br />
                        <span className="text-blue-300">Morphed Images?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        A critical legal guide to protecting your reputation and fighting digital blackmail in 2025.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Legal Help Now
                        </Link>
                    </div>
                </div>
            </section>

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
                                        Recovery Agent Sending Morphed Images
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 items-start relative">
                
                <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Navigation</h3>
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

                <main className="lg:w-2/4 xl:w-3/5 w-full">
                    <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                        <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                            In 2024, cyber cells across India reported a 45% increase in complaints involving loan apps sending morphed, explicit photos to a borrower\'s contact list. If you have just received a photoshopped image of yourself from a recovery agent threatening to leak it, the first 60 minutes are critical to stopping the distribution and initiating criminal proceedings.
                        </p>

                        <h2 id="psychological-warfare" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Introduction: The Psychological Warfare of Digital Harassment</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The transition of debt recovery from physical intimidation to digital extortion has created a new frontier of borrower distress. Digital lending platforms, especially those operating outside the purview of the Reserve Bank of India, have weaponized data privacy. When an individual installs these rogue applications, they unwittingly grant complete access to their contacts, photo galleries, and personal data. This access is the foundation of their extortion model.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A recovery agent sending a morphed image is executing a highly calculated act of psychological warfare. The goal is not merely to collect a debt but to shatter the borrower\'s social standing and self esteem so thoroughly that paying an exorbitant, fabricated amount seems like the only escape. They understand that the fear of public shaming among family, friends, and colleagues is far more potent than any legal notice for a defaulted loan. It is crucial to recognize that this is no longer a financial dispute; it is a serious cybercrime.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Borrowers often freeze in panic when confronted with a morphed, explicit image accompanied by a message stating it will be sent to their entire contact list. The immediate instinct is to comply and transfer funds. However, compliance only validates their strategy. The scammers flag compliant victims as highly profitable targets, ensuring the extortion never stops. To break this cycle, you must pivot from being a passive victim to an active defender of your rights using the legal mechanisms designed to punish these offenses. For broader advice on handling aggressive tactics, consult our guide on <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:underline">how to handle recovery agent harassment</Link>.
                        </p>

                        <h2 id="identifying-source" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Identifying the Source of the Morphed Images</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Before launching a defense, it is vital to trace the origin of the threat. The vast majority of these crimes are perpetrated by unregistered, illegal loan applications, commonly referred to as "Chinese loan apps" due to their frequent ties to overseas servers. These applications bypass traditional credit checks and offer instant cash, embedding themselves deeply into your phone\'s operating system to harvest data.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            However, occasionally, rogue third party collection agencies working for registered Non Banking Financial Companies (NBFCs) cross the line into digital harassment to meet aggressive recovery targets. Identifying whether the threat comes from an illegal app or a registered NBFC dictates your legal strategy. An illegal app requires immediate cyber police intervention, whereas a registered NBFC can be simultaneously reported to the RBI Ombudsman for massive regulatory penalties.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Check the permissions granted on your smartphone. Applications that mandate access to your contacts and gallery before dispensing a loan are the primary culprits. Note the exact names of the applications you downloaded, the dates of the transactions, and any associated UPI IDs or bank accounts used for disbursement. This data is the raw material the cyber cell needs to build a case.
                        </p>

                        {/* SECTION TYPE: Data Callout */}
                        <div className="bg-blue-900 text-white p-8 rounded-2xl mb-8 shadow-lg">
                            <h4 className="font-bold text-2xl mb-6 border-b border-blue-700 pb-2">Digital Extortion Landscape 2025</h4>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-blue-800 rounded-xl border border-blue-700">
                                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">90%</div>
                                    <div className="text-sm font-medium">Of morphed image threats originate from illegal, unregistered loan apps.</div>
                                </div>
                                <div className="text-center p-4 bg-blue-800 rounded-xl border border-blue-700">
                                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">15 Mins</div>
                                    <div className="text-sm font-medium">The time it takes scammers to generate a deepfake using stolen gallery photos.</div>
                                </div>
                                <div className="text-center p-4 bg-blue-800 rounded-xl border border-blue-700">
                                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">Zero</div>
                                    <div className="text-sm font-medium">The number of times paying the ransom actually stopped the harassment permanently.</div>
                                </div>
                            </div>
                        </div>

                        <h2 id="immediate-containment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 2: Immediate Containment: Securing Your Contacts</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When the threat arrives on WhatsApp, the clock starts ticking. Your priority is containment. The extortionist\'s leverage is the shock value of the image reaching your loved ones unexpectedly. By preempting the strike, you neutralize their weapon.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            You must draft a broadcast message to your close family, friends, and professional contacts immediately. The message should be clear, professional, and entirely transparent. State that your phone was compromised by a malicious application, resulting in a data breach, and that cybercriminals are currently attempting to extort you using morphed, fake images. Advise your contacts to block any unknown numbers sending inappropriate content and assure them that a police complaint is being filed.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            This proactive disclosure requires immense courage, but it is unequivocally the most effective defense mechanism. When the agent eventually sends the image, your contacts will already know it is a fake extortion attempt, completely depriving the scammer of the panicked reaction they were counting on. Furthermore, you must utilize technology to shield yourself from the barrage of threats. For practical steps on securing your phone, read our comprehensive guide on <Link href="/what-are-the-best-apps-to-block-recovery-agent-calls-and-messages" className="text-blue-600 hover:underline">what are the best apps to block recovery agent calls and messages</Link>.
                        </p>

                        {/* SECTION TYPE: Step Checklist */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 shadow-sm">
                            <h4 className="font-bold text-xl text-slate-800 mb-4">Immediate Containment Protocol</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300 mt-0.5">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-slate-800 font-medium">Take high resolution screenshots of the morphed images and all threatening messages.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300 mt-0.5">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-slate-800 font-medium">Record the phone numbers, WhatsApp business account details, and any UPI IDs provided for payment.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300 mt-0.5">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-slate-800 font-medium">Send the preemptive broadcast message to your primary contact list explaining the data breach.</p>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300 mt-0.5">
                                        <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-slate-800 font-medium">Revoke all permissions (camera, contacts, storage) for the loan app and immediately uninstall it.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 id="legal-recourse" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 3: Legal Recourse: Sections of the IT Act and IPC</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Morphing an image to extort money is a severe criminal offense in India, carrying stringent penalties including non bailable imprisonment. Understanding the specific laws being violated empowers you to file a robust police complaint that compels action, rather than a vague grievance that might be ignored as a mere civil loan dispute.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The primary legislation governing this cybercrime is the Information Technology (IT) Act, 2000. Section 67 of the IT Act penalizes the publishing or transmitting of obscene material in electronic form. If the morphed image is sexually explicit, it falls under Section 67A, which carries a punishment of up to five years imprisonment for the first conviction and seven years for subsequent convictions. Section 66E addresses the violation of privacy by capturing, publishing, or transmitting the image of a private area of any person without their consent.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Simultaneously, the Indian Penal Code (now transitioning to the Bharatiya Nyaya Sanhita) provides powerful provisions. Section 384 of the IPC defines extortion, where a person intentionally puts another in fear of injury (including damage to reputation) to dishonestly induce them to deliver property or money. Section 503 covers criminal intimidation, and Section 509 deals with words or gestures intended to insult the modesty of a woman, which is frequently applicable as female borrowers are disproportionately targeted with explicit morphed imagery. You must explicitly cite these sections when drafting your complaint.
                        </p>

                        <h2 id="documenting-evidence" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 4: How to Document Digital Blackmail as Evidence</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The success of your legal action hinges entirely on the quality of your evidence. Cyber police rely on digital trails to track down the syndicates operating these illegal applications. Haphazardly deleting messages out of panic destroys the very evidence needed to secure your protection.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            First, ensure you take screenshots of every threatening message. Ensure the screenshot clearly captures the sender\'s phone number or contact name at the top of the chat window. If the communication is happening over an audio call, record the call using a secondary device if your smartphone does not support native call recording. Never engage in a negotiation or admit liability on these recordings; simply ask them who they are, which company they represent, and state clearly that their actions are illegal.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Equally important are the financial trails. Extract the bank statements showing the initial disbursement of the loan from the app. Identify the exact company name or UPI ID that transferred the funds. When they demand the extortion money, carefully note the bank account numbers or UPI handles they provide. These payment gateways are the Achilles heel of the scam operations, allowing the cyber cell to freeze the accounts and trace the beneficiaries.
                        </p>

                        <h2 id="escalating-rbi-cyber" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 5: Escalating to the RBI and Cyber Cell</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Once your evidence is compiled, you must execute a dual escalation strategy, targeting both the criminal justice system and the financial regulator. 
                        </p>

                        {/* SECTION TYPE: Legal Process Map */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 shadow-sm">
                            <h4 className="font-bold text-xl text-slate-800 mb-4">Dual Escalation Framework</h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">National Cyber Crime Portal</h5>
                                        <p className="text-slate-600">Register a formal complaint on cybercrime.gov.in. Categorize the complaint under cyberbullying, harassment, and extortion. Upload all screenshots, phone numbers, and payment details. Generate and save the acknowledgment number for future reference.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">Local Police Station FIR</h5>
                                        <p className="text-slate-600">Visit your local police station with a printed copy of your complaint citing the specific IT Act and IPC sections. Insist on filing a First Information Report (FIR). If the local station refuses, escalate to the office of the Commissioner of Police or the specialized Cyber Crime Branch.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">RBI Sachet Portal</h5>
                                        <p className="text-slate-600">If the entity claims to be a registered NBFC, file a complaint on the RBI Sachet portal (sachet.rbi.org.in). The RBI uses this data to identify and blacklist rogue digital lenders, permanently shutting down their payment gateways and app store listings.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            After filing these complaints, you must maintain a posture of absolute non compliance with the extortionists. If they continue to message you, reply with a single standard statement: "A criminal FIR has been registered with the Cyber Cell under acknowledgment number [Insert Number]. All future communication will be handled by the police." This demonstrates that you are no longer a viable target and that continuing to engage with you poses a direct legal risk to them. For further details on structuring complaints against regulated entities, review our article on the <Link href="/bank-recovery-harassment-complaint" className="text-blue-600 hover:underline">bank recovery harassment complaint</Link> process.
                        </p>

                        <h2 id="emotional-toll" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 6: Dealing with the Emotional Toll of Image Morphing</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The technical and legal steps are straightforward, but the emotional devastation caused by a morphed image threat is profound. The violation of privacy and the sudden exposure of fabricated explicit material creates immense psychological trauma, anxiety, and a feeling of profound isolation. It is vital to acknowledge this toll and actively manage your mental well being during this crisis.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Understand that the shame belongs entirely to the criminals, not to you. You are the victim of a sophisticated, organized cybercrime syndicate that preys on societal taboos and the fear of public judgment. Seeking professional counseling or speaking to a trusted mentor is not a sign of weakness but a necessary step to maintain the mental fortitude required to fight the legal battle. Reach out to support groups or legal aid organizations that specialize in digital rights, as interacting with professionals who handle hundreds of similar cases daily reinforces the fact that this is a systemic issue, not a personal failing.
                        </p>

                        <h2 id="conclusion" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Conclusion: Turning the Tables on Predatory Agents</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A recovery agent sending morphed images represents the darkest corner of the digital lending ecosystem. However, this tactic only succeeds when it encounters silence, panic, and a lack of legal awareness. By transforming your fear into decisive, documented legal action, you completely dismantle their extortion model.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The framework provided in this guide, from securing your contacts to citing precise sections of the IT Act and IPC, equips you to navigate this crisis effectively. Remember, you have the backing of stringent cyber laws and regulatory bodies like the RBI. Refuse to be a victim, refuse to pay the ransom, and ensure that every piece of evidence is channeled toward bringing these rogue operators to justice.
                        </p>

                        <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                        <div className="space-y-6 mb-12">
                            {faqs.map((faq, index) => (
                                <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-4 rounded-lg shadow-sm">
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                                    <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-8 scroll-mt-14">Real Stories of Freedom</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                            {reviews.map((review, idx) => (
                                <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                                    <div className="flex mb-3">
                                        {[...Array(review.rating)].map((_, i) => <StarIcon key={i} />)}
                                    </div>
                                    <p className="text-gray-700 italic mb-4 font-light text-sm flex-grow">"{review.text}"</p>
                                    <div className="mt-auto">
                                        <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                                        <p className="text-gray-500 text-xs">{review.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </article>
                </main>

                <aside className="lg:w-1/4 xl:w-1/5 w-full mt-8 lg:mt-0">
                    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 sticky top-14">
                        <div className="flex flex-col items-center text-center">
                            <div className="w-24 h-24 mb-4 rounded-full overflow-hidden border-4 border-blue-100 shadow-inner">
                                <img 
                                    src="/default-avatar.jpg" 
                                    alt="Rahul Verma Legal Expert in Debt Settlement and Financial Rights" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-1">Rahul Verma</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-3">Senior Legal Strategist</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Specializing in consumer rights, debt settlement negotiation, and protection against illegal recovery harassment. Dedicated to empowering borrowers with actionable legal frameworks.
                            </p>
                            <Link href="/contact" className="w-full block bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                                Consult Rahul
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
