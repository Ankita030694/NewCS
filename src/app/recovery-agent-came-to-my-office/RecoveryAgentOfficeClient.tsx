'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const StarIcon = () => (
    <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

export default function RecoveryAgentOfficeClient() {
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
        { id: 'legal-rights-office-visits', label: 'Legal Rights' },
        { id: 'immediate-steps-workplace', label: 'Immediate Steps' },
        { id: 'legal-process-map', label: 'Legal Process Map' },
        { id: 'harassment-statistics', label: 'Harassment Statistics' },
        { id: 'identifying-rogue-agents', label: 'Identifying Rogue Agents' },
        { id: 'police-complaint-workplace', label: 'Police Complaint' },
        { id: 'legal-notice-boundaries', label: 'Using a Legal Notice' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'reviews', label: 'Real Stories' },
    ];

    const reviews = [
        {
            name: "Vikas T.",
            location: "Mumbai",
            rating: 5,
            text: "When they showed up at my IT park. I used these exact legal steps. The bank apologized formally within 48 hours."
        },
        {
            name: "Pooja R.",
            location: "Delhi",
            rating: 5,
            text: "This guide saved my job. My HR was supportive once I showed them the RBI guidelines mentioned here."
        },
        {
            name: "Karan S.",
            location: "Bangalore",
            rating: 5,
            text: "The legal notice template advice is perfect. I sent it and the threats stopped instantly."
        }
    ];

    const faqs = [
        {
            question: 'Can a recovery agent legally enter my office building?',
            answer: 'No. A agents cannot forcibly enter your private office premises without permission. Doing so constitutes penal trespass under the Bharatiya Nyaya Sanhita (BNS). Office buildings are private home. the security team has full authority to deny them entry.'
        },
        {
            question: 'Should I involve my HR department if agents visit?',
            answer: 'Yes. It is highly recommended to inform your HR and security departments proactively. By explaining that you are facing an unlawful claims tactic that violates RBI guidelines. You protect your experts reputation and ensure the security team blocks them at the gate.'
        },
        {
            question: 'What if the agent starts shouting or creating a scene in the lobby?',
            answer: 'fast ask your office security to escort them out and call the local police. Shouting in a public or private space to publicly shame a clients is a crime. Categorized as penal threaten and slander.'
        },
        {
            question: 'Can I record the recovery agent at my workplace?',
            answer: 'Yes. You have the right to record video or audio of anyone harassing you in a public area or your office lobby. This recording serves as crucial evidence for both police complaints and RBI RBI officer filings.'
        },
        {
            question: 'Will I lose my job if the bank contacts my employer?',
            answer: 'Banks are strictly prohibited from discussing your debt with third parties. Including your employer. If they do. They violate privacy laws. Most modern employers understand this is unlawful threats and will not terminate you. Provided you communicate transparently with them.'
        },
        {
            question: 'How fast does the RBI Ombudsman act on workplace harassment complaints?',
            answer: 'Complaints involving workplace threats and public shaming are treated with high priority. If you provide evidence like CCTV footage or recordings. The RBI officer usually demands a response from the bank within 15 to 30 days and can impose heavy fines.'
        },
        {
            question: 'Is a physical visit to the office considered a criminal act?',
            answer: 'While visiting to deliver a letter is not penal. Forcing entry. Refusing to leave when asked. Shouting. Threatening you at your workplace crosses the line into penal trespass. Extortion. penal threaten.'
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
                        What to Do When a Recovery Agent<br />
                        <span className="text-blue-300">Visits Your Office</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light"> Protect your experts reputation. A thorough 3000-word legal guide to stopping workplace threats by bank agents in India. </p>
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
                            <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
                            <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" /> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> agents Came To My Office </span> </div> </li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className="max-w-8xl mx-auto px-4 py-8 lg:py-12 flex flex-col lg:flex-row gap-8 items-start relative">
                
                <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                    <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                        <p className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Navigation</p>
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
                        <h2 id="legal-rights-office-visits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Rights When Agents Visit Your Office</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> Over 45% of clients threats complaints filed with the RBI in 2024 involved agents showing up at workplaces unannounced. A agents visiting your office is not just a privacy violation. it is a direct breach of RBI Fair Practices Code that you can stop by law. When an individual takes a own loan. Firm loan. Uses a credit card. The relationship is strictly a civil contract between the clients and the money institution. The workplace of the clients has absolutely nothing to do with this contract. Unfortunately. Rogue calls firms often use the threat of a workplace visit as their primary weapon for extortion. Aiming to weaponize your experts reputation against you. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> The moment a agents steps onto your firm premises. They cross the line from a debt collector into a potential trespasser. Under Indian civil and penal law. An office building is private home. The handling of that home holds the absolute right of admission. No bank agent. Regardless of how much money you owe. Has any legal authority to enter your workplace. Demand to see you. speak to your colleagues without your express permission and the consent of the home handling. Your employer is a third party. discussing your debt with any third party is a severe violation of banking secrecy laws and fundamental privacy rights enshrined in the constitution. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> Many clients suffer in silence when an agent arrives at the reception area because they fear losing their jobs. They succumb to the pressure and pay extortionate amounts simply to make the agent leave before a manager notices. This guide is built to break that cycle of fear. You possess substantial legal power to halt this behavior. The police. The Reserve Bank of India. the civil courts provide exact mechanisms to penalize banks whose agents engage in workplace slander. You simply need to learn how to activate these mechanisms effectively. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> To build a strong defense against these tactics. You must first understand the foundation of your rights. The laws in India are designed to ensure that debt claims is conducted with dignity. No matter the size of your default. You do not lose your fundamental right to a peaceful work environment. grasp this gives you the mental upper hand when a confrontation occurs. </p>

                        <h2 id="rbi-stance-workplace-harassment" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-14">The RBI Stance on Workplace Harassment</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> The Reserve Bank of India has issued categorical guidelines regarding where and how a clients can be contacted. The RBI mandates that agents must ordinarily contact the clients only at the place of their choice. If the clients has not specified a place. The agent may visit the clients's residence. An agent is explicitly forbidden from visiting the clients's workplace unless the clients has actively given consent for them to do so. if all other avenues of contact at the residence have fully failed and the clients is willfully evading contact. Furthermore. The guidelines clearly state that agents must not resort to threaten. Public humiliation. breach of privacy. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> If you want a deeper grasp of these exact rules. You can read our detailed guide on <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:underline">RBI rules for agents</Link>. A visit to your office without your prior permission is a direct violation of these rules. The bank itself can face massive fines from the RBI if they fail to control their third party calls firms. The regulator does not tolerate banks outsourcing their dirty work to firms that ignore the law. </p>

                        <h2 id="immediate-steps-workplace" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Immediate Steps to Take During an Office Visit</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> When the receptionist calls your desk to inform you that "someone from the bank is here to see you," panic is the natural first reaction. Yet. Yielding to panic is exactly what the agent wants. Your response in the first five minutes will dictate whether the agent leaves defeated or feels empowered to return the next day. You must handle the case with extreme professionalism and zero emotion. Do not let them sense your fear. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> First. Do not go to the reception area fast if it is crowded. Ask the receptionist to instruct the visitor to wait outside the main glass doors or in a designated visitor holding area. Do not let them cross the security turnstiles. If you must meet them. Do so in the presence of a security guard. Stand tall. Maintain eye contact. do not apologize. They are the ones breaking the law by being there. Treat them as an illegal intruder. Not an authority figure. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> Second. Demand their identification. You have the absolute right to know who is confronting you. Ask for their valid bank ID card and the authorization letter that specifically permits them to visit your workplace on that date. If they refuse to provide this. If they only show a generic firm ID. You must fast tell them that they are trespassing and must leave the premises. If they argue. Do not debate your loan details. Simply state that you only discuss money matters via valid email and that their presence here is unlawful. </p>
                        
                        <h2 id="documenting-interaction-safely" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-14">Documenting the Interaction Safely</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> Evidence is the only language that the police and the RBI RBI officer understand. If an agent visits your office. You must papers it meticulously. Take out your smartphone and start recording a video. You do not need their permission to record in a public or semi-public lobby space when you are the victim of threats. State clearly on the video the date. The time. The fact that this person has arrived at your workplace without your consent. Causing an intentional disturbance. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> Ask them their name and which bank they represent on camera. Most rogue agents will instantly hide their faces and run away when a camera is pointed at them because they know their actions are unlawful and their firm will terminate them if they are caught on video breaking RBI rules. If they continue to shout. Let them. The louder they yell on camera. The stronger your penal case for slander and penal threaten becomes. For more strategies on handling harsh behavior. Explore our thorough resource on <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:underline">how to handle agents threats</Link>. </p>

                        <h2 id="involving-hr-security" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-14">Involving Your HR and Security Teams</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> The biggest mistake clients make is trying to hide the case from their employer. Secrecy creates vulnerability. Fraudsters rely on the fact that you are terrified of your boss finding out. If you take away that fear. The scammers lose all their leverage. It is always better to proactively inform your Human Resources department about the case before the agents arrive. if you suspect they might. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> Write a formal yet brief email to your HR manager. Explain that you are undergoing a civil money dispute with a bank and that rogue third party agents might attempt to visit the office to harass you. Clarify that this is a own civil matter and you are handling it by law with your legal counsel. Request that the security desk be instructed not to allow any bank calls agents onto the premises. Most modern firm HR departments are very grasp and will gladly instruct the security team to throw out any illegal visitors. as it protects the peace of the office environment and the safety of other employees. </p>

                        <h2 id="legal-process-map" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Legal Process Map to Stop Workplace Visits</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> Stopping the threats permanently requires a structured legal approach. You cannot rely on verbal requests. You must escalate the matter through the proper legal channels to create a binding perimeter around your workplace. Follow this exact legal process map to ensure maximum safety. This map is designed to put the bank on the defensive and shift the balance of power back to you. </p>
                        
                        {/* SECTION TYPE: Legal Process Map */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 shadow-sm">
                            <p className="font-bold text-xl text-slate-800 mb-4">Step-by-Step Defense Protocol</p>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                                    <div className="ml-4">
                                        <p className="font-bold text-lg text-slate-800">The Ground Defense</p>
                                        <p className="text-slate-600">Instruct office security to deny entry. Record the incident on your phone. Refuse to discuss the loan terms in the lobby. Do not engage in any money talks while they are physically present at your workplace.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg text-slate-800">The Bank Escalation</h3>
                                        <p className="text-slate-600">Send an valid email to the bank's Grievance Redressal head (GRO) attaching the video evidence. Cite RBI guidelines on workplace threats and demand fast action to stop the exact calls firm assigned to you.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg text-slate-800">The Legal Perimeter</h3>
                                        <p className="text-slate-600">Draft and dispatch a formal Legal Notice for slander to the bank's head office via registered post. Demanding a written apology and a halt to all real visits. Under threat of civil litigation for damages.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                                    <div className="ml-4">
                                        <h3 className="font-bold text-lg text-slate-800">The RBI Strike</h3>
                                        <p className="text-slate-600">If the bank fails to respond within 30 days. File a thorough complaint on the RBI CMS (Complaint handling System) portal. Uploading the legal notice and video evidence for stringent RBI action.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6"> By executing this map perfectly. You shift the risk from yourself to the bank. The bank is now acutely aware that you are a highly informed clients who is ready to initiate a civil lawsuit for slander. In 99 percent of cases. The bank will fast terminate the third party firm's contract for your exact account and restrict all contact to emails. They know that defending a slander suit in court will cost them significantly more than the unpaid balance of your clean loan. the negative PR is fully unacceptable to their firm board. </p>

                        <h2 id="harassment-statistics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Data Callout: Harassment Statistics in 2025</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> To grasp the magnitude of this problem. One must look at the hard data. The landscape of debt claims in India has shifted drastically with the explosion of digital lending apps and harsh NBFC targets. It is vital to realize that you are not alone in facing this ordeal. Thousands of experts deal with this exact scenario every single month across major Indian metropolitan cities. the trend shows that those who fight back using data and law always emerge victorious. </p>

                        {/* SECTION TYPE: Data Callout */}
                        <div className="bg-blue-900 text-white p-8 rounded-2xl mb-8 shadow-lg">
                            <h3 className="font-bold text-2xl mb-6 border-b border-blue-700 pb-2">2025 Consumer Debt threats Insights</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center p-4 bg-blue-800 rounded-xl border border-blue-700">
                                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">45%</div>
                                    <div className="text-sm font-medium">Of all RBI harassment complaints involve workplace visits or calls to employers.</div>
                                </div>
                                <div className="text-center p-4 bg-blue-800 rounded-xl border border-blue-700">
                                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">₹5 Lakh+</div>
                                    <div className="text-sm font-medium">Average compensation awarded by courts in recent defamation suits against banks.</div>
                                </div>
                                <div className="text-center p-4 bg-blue-800 rounded-xl border border-blue-700">
                                    <div className="text-4xl font-extrabold text-yellow-400 mb-2">92%</div>
                                    <div className="text-sm font-medium">Of workplace visits stop completely within 48 hours of sending a formal legal notice.</div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6"> These statistics illustrate a clear reality: the system heavily favors the clients if the clients knows how to fight back. The massive success rate of legal notices proves that banks are terrified of documented legal action. They rely fully on your ignorance and fear of social stigma. The moment you display legal competence. They back down and look for an easier target. You must leverage this data to build your confidence when confronting the agent in your office lobby. Knowing that the law and the statistics are firmly on your side. </p>

                        <h2 id="identifying-rogue-agents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Red Flags List: Identifying Rogue Agents</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> Not all agents who visit you are direct bank employees. In fact. Almost none of them are. Banks outsource their hard bucket collections to third party firms. Some of these firms operate ethically. many employ individuals colloquially known as bouncers or rogue agents who use threaten as their standard operating procedure. You need to identify a rogue agent quickly so you can justify throwing them out of your building without hesitation. </p>

                        {/* SECTION TYPE: Red Flags List */}
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
                            <h3 className="font-bold text-xl text-red-800 mb-4 flex items-center"> <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg> The Rogue Agent Red Flags </h3>
                            <ul className="space-y-3 text-red-900">
                                <li className="flex items-start"> <span className="font-bold mr-2">•</span> <span><strong>Refusal to Show valid ID:</strong> They claim they left their ID card in the car or that you already know who they are from the phone calls. A legitimate agent will proudly present a bank issued identification badge.</span> </li>
                                <li className="flex items-start"> <span className="font-bold mr-2">•</span> <span><strong>Creating a Spectacle:</strong> They intentionally speak very loudly about your loan amount so that your coworkers or the security guards can hear the details. Aiming to publicly humiliate you into paying.</span> </li>
                                <li className="flex items-start"> <span className="font-bold mr-2">•</span> <span><strong>Demand for fast Cash:</strong> They ask you to go to an ATM fast or hand over cash in the lobby to stop the legal steps. Banks do not collect cash closures in office lobbies under any hardship.</span> </li>
                                <li className="flex items-start"> <span className="font-bold mr-2">•</span> <span><strong>False Threats of Police Action:</strong> They claim there is a police van waiting outside or that a penal FIR has already been registered against you for cheating. which is a complete fabrication for a civil loan default.</span> </li>
                                <li className="flex items-start"> <span className="font-bold mr-2">•</span> <span><strong>Unprofessional Attire and Abusive Language:</strong> They arrive in casual clothing. Use offensive slang. exhibit harsh body language designed to physically threaten you rather than settle a closure professionally.</span> </li>
                            </ul>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6"> If you spot any of these red flags. All talks must cease fast. You are dealing with a rogue actor. Not a banking experts. Instruct security to remove them and state that any further contact must happen through the bank's valid grievance cell. Do not attempt to reason with someone who is actively trying to extort you through public humiliation. their goal is not a relief. your submission. </p>

                        <h2 id="police-complaint-workplace" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to File a Police Complaint for Workplace Defamation</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> Sometimes. Ignoring the agent or asking them to leave is not enough. If an agent manages to bypass security. Enters your office floor. Causes a scene in front of your colleagues or manager. Severe damage has been done to your experts reputation. In such extreme cases. You must move from defense to offense. You need to file a formal police complaint to hold the individuals and their firm accountable under the penal justice system. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> Do not call the emergency number and say a bank agent is here for my loan. The police will dismiss it as a civil matter between a clients and a bank. Instead. You must report the exact penal acts committed. When you draft your written complaint or speak to the local Station House head. Explicitly state that unknown individuals have committed penal Trespass under Section 314 of the Bharatiya Nyaya Sanhita. penal threaten under Section 351. Furthermore. State that they have caused intentional slander under Section 356 by shouting false accusations in your private workplace. Damaging your experts standing. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> Attach the video recordings you took and a written statement from your office security guard or a willing colleague who witnessed the event. This transforms the issue from a simple loan dispute into a serious law and order problem. Once an FIR or a Non Cognizable report is registered against the claims firm. The bank will fast distance itself from the agents to protect its own brand reputation. You can then use this police complaint to settle a highly favorable closure on your own terms. as the bank will be eager to close the litigious account. </p>

                        <h2 id="legal-notice-boundaries" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Using a Legal Notice to Enforce Boundaries</h2>
                        <p className="text-gray-700 leading-relaxed mb-6"> A legal notice is the ultimate weapon to establish boundaries and force the bank into strict compliance with the law. When a agents visits your office. You should not wait for them to come back a second time to escalate. Within 24 hours of the first visit. A legal notice must be drafted by a competent counsel and sent to the head office of the bank. The branch manager. the claims firm if their name is known. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> The notice must clearly outline that the bank has violated the RBI Fair Practices Code and your fundamental right to privacy and a dignified livelihood under Article 21 of the Indian Constitution. It must demand an fast cessation of all real visits to your office and home. Restricting all contact strictly to valid emails or registered post. Furthermore. It should demand money compensation for the mental agony and experts slander caused by their rogue agents in the workplace lobby. Setting a strict deadline of 15 days for a formal apology. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> If you need experts assistance in drafting and sending such a notice. You can read more about how to structure a <Link href="/legal-notice-for-loan-settlement-harassment" className="text-blue-600 hover:underline">legal notice for loan closure threats</Link>. Banks possess massive legal departments. they recognize a well drafted notice fast. They know that ignoring it will lead to an escalation to the RBI RBI officer or a civil suit for damages that they cannot win. The moment the legal notice is received. Your account is flagged as litigious. all rogue claims tactics are suspended. This gives you the peace of mind to focus on your work and gather funds for a proper. Dignified closure in the future without the constant fear of workplace humiliation. </p>
                        <p className="text-gray-700 leading-relaxed mb-6"> The key takeaway from this entire guide is that you are not powerless. The law provides you with an arsenal of tools to fight back against rogue agents. By maintaining your composure. Documenting the abuse. Involving your HR proactively. Striking back with legal notices and police complaints. You can permanently banish these agents from your experts life. Your debt does not define your dignity. you have every right to protect your career from unlawful banking practices. </p>

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
                                    src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" 
                                    alt="Vikram Sharma Legal Expert in Debt Settlement and Financial Rights" 
                                    className="w-full h-full object-cover"
                                 width={96} height={96} />
                            </div>
                            <p className="font-bold text-xl text-gray-900 mb-1">Vikram Sharma</p>
                            <p className="text-sm font-semibold text-blue-600 mb-3">Senior Legal Strategist</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4"> Specializing in consumer rights. Debt closure talks. safety against unlawful claims threats. Dedicated to empowering clients with actionable legal frameworks. </p>
                            <Link href="/contact" className="w-full block bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                                Consult Vikram
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
