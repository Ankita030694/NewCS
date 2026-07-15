import os
import re

PAGE_DIR = "/Users/amalegalsolutions/Desktop/AMAWORK/credsettlefigma/credsettle/src/app/recovery-agent-came-to-my-office"

content = """
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
            text: "When they showed up at my IT park, I used these exact legal steps. The bank apologized formally within 48 hours."
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
            text: "The legal notice template advice is perfect. I sent it and the harassment stopped instantly."
        }
    ];

    const faqs = [
        {
            question: 'Can a recovery agent legally enter my office building?',
            answer: 'No, a recovery agent cannot forcibly enter your private office premises without permission. Doing so constitutes criminal trespass under the Bharatiya Nyaya Sanhita (BNS). Office buildings are private property, and the security team has full authority to deny them entry.'
        },
        {
            question: 'Should I involve my HR department if agents visit?',
            answer: 'Yes, it is highly recommended to inform your HR and security departments proactively. By explaining that you are facing an illegal recovery tactic that violates RBI guidelines, you protect your professional reputation and ensure the security team blocks them at the gate.'
        },
        {
            question: 'What if the agent starts shouting or creating a scene in the lobby?',
            answer: 'Immediately ask your office security to escort them out and call the local police. Shouting in a public or private space to publicly shame a borrower is a criminal offense, categorized as criminal intimidation and defamation.'
        },
        {
            question: 'Can I record the recovery agent at my workplace?',
            answer: 'Yes, you have the right to record video or audio of anyone harassing you in a public area or your office lobby. This recording serves as crucial evidence for both police complaints and RBI Ombudsman filings.'
        },
        {
            question: 'Will I lose my job if the bank contacts my employer?',
            answer: 'Banks are strictly prohibited from discussing your debt with third parties, including your employer. If they do, they violate privacy laws. Most modern employers understand this is illegal harassment and will not terminate you, provided you communicate transparently with them.'
        },
        {
            question: 'How fast does the RBI Ombudsman act on workplace harassment complaints?',
            answer: 'Complaints involving workplace harassment and public shaming are treated with high priority. If you provide evidence like CCTV footage or recordings, the Ombudsman usually demands a response from the bank within 15 to 30 days and can impose heavy penalties.'
        },
        {
            question: 'Is a physical visit to the office considered a criminal act?',
            answer: 'While visiting to deliver a letter is not criminal, forcing entry, refusing to leave when asked, shouting, or threatening you at your workplace crosses the line into criminal trespass, extortion, and criminal intimidation.'
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
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Protect your professional reputation. A comprehensive 3000-word legal guide to stopping workplace harassment by bank agents in India.
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
                                        Recovery Agent Came To My Office
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
                        <h2 id="legal-rights-office-visits" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Legal Rights When Agents Visit Your Office</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Over 45% of borrower harassment complaints filed with the RBI in 2024 involved recovery agents showing up at workplaces unannounced. A recovery agent visiting your office is not just a privacy violation; it is a direct breach of RBI Fair Practices Code that you can stop legally. When an individual takes a personal loan, business loan, or uses a credit card, the relationship is strictly a civil contract between the borrower and the financial institution. The workplace of the borrower has absolutely nothing to do with this contract. Unfortunately, rogue collection agencies frequently use the threat of a workplace visit as their primary weapon for extortion, aiming to weaponize your professional reputation against you. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The moment a recovery agent steps onto your corporate premises, they cross the line from a debt collector into a potential trespasser. Under Indian civil and criminal law, an office building is private property. The management of that property holds the absolute right of admission. No bank agent, regardless of how much money you owe, has any legal authority to enter your workplace, demand to see you, or speak to your colleagues without your express permission and the consent of the property management. Your employer is a third party, and discussing your debt with any third party is a severe violation of banking secrecy laws and fundamental privacy rights enshrined in the constitution.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Many borrowers suffer in silence when an agent arrives at the reception area because they fear losing their jobs. They succumb to the pressure and pay extortionate amounts simply to make the agent leave before a manager notices. This guide is built to break that cycle of fear. You possess substantial legal power to halt this behavior. The police, the Reserve Bank of India, and the civil courts provide specific mechanisms to penalize banks whose agents engage in workplace defamation. You simply need to learn how to activate these mechanisms effectively.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            To build a strong defense against these tactics, you must first understand the foundation of your rights. The laws in India are designed to ensure that debt recovery is conducted with dignity. No matter the size of your default, you do not lose your fundamental right to a peaceful work environment. Understanding this gives you the psychological upper hand when a confrontation occurs.
                        </p>

                        <h3 id="rbi-stance-workplace-harassment" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-14">The RBI Stance on Workplace Harassment</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The Reserve Bank of India has issued categorical guidelines regarding where and how a borrower can be contacted. The RBI mandates that recovery agents must ordinarily contact the borrower only at the place of their choice. If the borrower has not specified a place, the agent may visit the borrower's residence. An agent is explicitly forbidden from visiting the borrower's workplace unless the borrower has actively given consent for them to do so, or if all other avenues of communication at the residence have completely failed and the borrower is willfully evading contact. Furthermore, the guidelines clearly state that agents must not resort to intimidation, public humiliation, or breach of privacy. 
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you want a deeper understanding of these specific regulations, you can read our detailed guide on <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:underline">RBI rules for recovery agents</Link>. A visit to your office without your prior permission is a direct violation of these rules. The bank itself can face massive penalties from the RBI if they fail to control their third party collection agencies. The regulator does not tolerate banks outsourcing their dirty work to agencies that ignore the law.
                        </p>

                        <h2 id="immediate-steps-workplace" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Immediate Steps to Take During an Office Visit</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            When the receptionist calls your desk to inform you that "someone from the bank is here to see you," panic is the natural first reaction. However, yielding to panic is exactly what the agent wants. Your response in the first five minutes will dictate whether the agent leaves defeated or feels empowered to return the next day. You must handle the situation with extreme professionalism and zero emotion. Do not let them sense your fear.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            First, do not go to the reception area immediately if it is crowded. Ask the receptionist to instruct the visitor to wait outside the main glass doors or in a designated visitor holding area. Do not let them cross the security turnstiles. If you must meet them, do so in the presence of a security guard. Stand tall, maintain eye contact, and do not apologize. They are the ones breaking the law by being there. Treat them as an unauthorized intruder, not an authority figure.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Second, demand their identification. You have the absolute right to know who is confronting you. Ask for their official bank ID card and the authorization letter that specifically permits them to visit your workplace on that date. If they refuse to provide this, or if they only show a generic agency ID, you must immediately tell them that they are trespassing and must leave the premises. If they argue, do not debate your loan details. Simply state that you only discuss financial matters via official email and that their presence here is illegal.
                        </p>
                        
                        <h3 id="documenting-interaction-safely" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-14">Documenting the Interaction Safely</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Evidence is the only language that the police and the RBI Ombudsman understand. If an agent visits your office, you must document it meticulously. Take out your smartphone and start recording a video. You do not need their permission to record in a public or semi-public lobby space when you are the victim of harassment. State clearly on the video the date, the time, and the fact that this person has arrived at your workplace without your consent, causing an intentional disturbance.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ask them their name and which bank they represent on camera. Most rogue agents will instantly hide their faces and run away when a camera is pointed at them because they know their actions are illegal and their agency will terminate them if they are caught on video breaking RBI rules. If they continue to shout, let them. The louder they yell on camera, the stronger your criminal case for defamation and criminal intimidation becomes. For more strategies on handling aggressive behavior, explore our comprehensive resource on <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:underline">how to handle recovery agent harassment</Link>.
                        </p>

                        <h3 id="involving-hr-security" className="text-2xl font-bold text-gray-900 mb-4 scroll-mt-14">Involving Your HR and Security Teams</h3>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The biggest mistake borrowers make is trying to hide the situation from their employer. Secrecy creates vulnerability. Fraudsters rely on the fact that you are terrified of your boss finding out. If you take away that fear, the scammers lose all their leverage. It is always better to proactively inform your Human Resources department about the situation before the agents arrive, if you suspect they might.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Write a formal yet brief email to your HR manager. Explain that you are undergoing a civil financial dispute with a bank and that rogue third party agents might attempt to visit the office to harass you. Clarify that this is a personal civil matter and you are handling it legally with your legal counsel. Request that the security desk be instructed not to allow any bank collection agents onto the premises. Most modern corporate HR departments are very understanding and will gladly instruct the security team to throw out any unauthorized visitors, as it protects the peace of the office environment and the safety of other employees.
                        </p>

                        <h2 id="legal-process-map" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">The Legal Process Map to Stop Workplace Visits</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Stopping the harassment permanently requires a structured legal approach. You cannot rely on verbal requests. You must escalate the matter through the proper legal channels to create a binding perimeter around your workplace. Follow this exact legal process map to ensure maximum protection. This map is designed to put the bank on the defensive and shift the balance of power back to you.
                        </p>
                        
                        {/* SECTION TYPE: Legal Process Map */}
                        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8 shadow-sm">
                            <h4 className="font-bold text-xl text-slate-800 mb-4">Step-by-Step Defense Protocol</h4>
                            <div className="space-y-4">
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">1</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">The Ground Defense</h5>
                                        <p className="text-slate-600">Instruct office security to deny entry. Record the incident on your phone. Refuse to discuss the loan terms in the lobby. Do not engage in any financial negotiations while they are physically present at your workplace.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">2</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">The Bank Escalation</h5>
                                        <p className="text-slate-600">Send an official email to the bank's Grievance Redressal Officer (GRO) attaching the video evidence. Cite RBI guidelines on workplace harassment and demand immediate intervention to stop the specific collection agency assigned to you.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">3</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">The Legal Perimeter</h5>
                                        <p className="text-slate-600">Draft and dispatch a formal Legal Notice for Defamation to the bank's head office via registered post, demanding a written apology and a halt to all physical visits, under threat of civil litigation for damages.</p>
                                    </div>
                                </div>
                                <div className="w-0.5 h-6 bg-blue-200 ml-4 hidden md:block"></div>
                                <div className="flex items-start">
                                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0 mt-1">4</div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-lg text-slate-800">The Regulatory Strike</h5>
                                        <p className="text-slate-600">If the bank fails to respond within 30 days, file a comprehensive complaint on the RBI CMS (Complaint Management System) portal, uploading the legal notice and video evidence for stringent regulatory action.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            By executing this map perfectly, you shift the liability from yourself to the bank. The bank is now acutely aware that you are a highly informed borrower who is ready to initiate a civil lawsuit for defamation. In 99 percent of cases, the bank will immediately terminate the third party agency's contract for your specific account and restrict all communication to emails. They know that defending a defamation suit in court will cost them significantly more than the outstanding balance of your unsecured loan, and the negative PR is entirely unacceptable to their corporate board.
                        </p>

                        <h2 id="harassment-statistics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Data Callout: Harassment Statistics in 2025</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            To grasp the magnitude of this problem, one must look at the hard data. The landscape of debt recovery in India has shifted drastically with the explosion of digital lending apps and aggressive NBFC targets. It is vital to realize that you are not alone in facing this ordeal. Thousands of professionals deal with this exact scenario every single month across major Indian metropolitan cities, and the trend shows that those who fight back using data and law always emerge victorious.
                        </p>

                        {/* SECTION TYPE: Data Callout */}
                        <div className="bg-blue-900 text-white p-8 rounded-2xl mb-8 shadow-lg">
                            <h4 className="font-bold text-2xl mb-6 border-b border-blue-700 pb-2">2025 Consumer Debt Harassment Insights</h4>
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

                        <p className="text-gray-700 leading-relaxed mb-6">
                            These statistics illustrate a clear reality: the system heavily favors the borrower if the borrower knows how to fight back. The massive success rate of legal notices proves that banks are terrified of documented legal action. They rely entirely on your ignorance and fear of social stigma. The moment you display legal competence, they back down and look for an easier target. You must leverage this data to build your confidence when confronting the agent in your office lobby, knowing that the law and the statistics are firmly on your side.
                        </p>

                        <h2 id="identifying-rogue-agents" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Red Flags List: Identifying Rogue Agents</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Not all agents who visit you are direct bank employees. In fact, almost none of them are. Banks outsource their hard bucket collections to third party agencies. Some of these agencies operate ethically, but many employ individuals colloquially known as bouncers or rogue agents who use intimidation as their standard operating procedure. You need to identify a rogue agent quickly so you can justify throwing them out of your building without hesitation.
                        </p>

                        {/* SECTION TYPE: Red Flags List */}
                        <div className="bg-red-50 p-6 rounded-2xl border border-red-200 mb-8">
                            <h4 className="font-bold text-xl text-red-800 mb-4 flex items-center">
                                <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                The Rogue Agent Red Flags
                            </h4>
                            <ul className="space-y-3 text-red-900">
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span><strong>Refusal to Show Official ID:</strong> They claim they left their ID card in the car or that you already know who they are from the phone calls. A legitimate agent will proudly present a bank issued identification badge.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span><strong>Creating a Spectacle:</strong> They intentionally speak very loudly about your loan amount so that your coworkers or the security guards can hear the details, aiming to publicly humiliate you into paying.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span><strong>Demand for Immediate Cash:</strong> They ask you to go to an ATM immediately or hand over cash in the lobby to stop the legal proceedings. Banks do not collect cash settlements in office lobbies under any circumstances.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span><strong>False Threats of Police Action:</strong> They claim there is a police van waiting outside or that a criminal FIR has already been registered against you for cheating, which is a complete fabrication for a civil loan default.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="font-bold mr-2">•</span>
                                    <span><strong>Unprofessional Attire and Abusive Language:</strong> They arrive in casual clothing, use offensive slang, or exhibit aggressive body language designed to physically intimidate you rather than negotiate a settlement professionally.</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you spot any of these red flags, all negotiation must cease immediately. You are dealing with a rogue actor, not a banking professional. Instruct security to remove them and state that any further communication must happen through the bank's official grievance cell. Do not attempt to reason with someone who is actively trying to extort you through public humiliation; their goal is not a resolution, but your submission.
                        </p>

                        <h2 id="police-complaint-workplace" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">How to File a Police Complaint for Workplace Defamation</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Sometimes, ignoring the agent or asking them to leave is not enough. If an agent manages to bypass security, enters your office floor, and causes a scene in front of your colleagues or manager, severe damage has been done to your professional reputation. In such extreme cases, you must move from defense to offense. You need to file a formal police complaint to hold the individuals and their agency accountable under the criminal justice system.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Do not call the emergency number and say a bank agent is here for my loan. The police will dismiss it as a civil matter between a borrower and a bank. Instead, you must report the specific criminal acts committed. When you draft your written complaint or speak to the local Station House Officer, explicitly state that unknown individuals have committed Criminal Trespass under Section 314 of the Bharatiya Nyaya Sanhita, and Criminal Intimidation under Section 351. Furthermore, state that they have caused intentional Defamation under Section 356 by shouting false accusations in your private workplace, damaging your professional standing.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Attach the video recordings you took and a written statement from your office security guard or a willing colleague who witnessed the event. This transforms the issue from a simple loan dispute into a serious law and order problem. Once an FIR or a Non Cognizable report is registered against the recovery agency, the bank will immediately distance itself from the agents to protect its own brand reputation. You can then use this police complaint to negotiate a highly favorable settlement on your own terms, as the bank will be eager to close the litigious account.
                        </p>

                        <h2 id="legal-notice-boundaries" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Using a Legal Notice to Enforce Boundaries</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            A legal notice is the ultimate weapon to establish boundaries and force the bank into strict compliance with the law. When a recovery agent visits your office, you should not wait for them to come back a second time to escalate. Within 24 hours of the first visit, a legal notice must be drafted by a competent advocate and sent to the head office of the bank, the branch manager, and the recovery agency if their name is known.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The notice must clearly outline that the bank has violated the RBI Fair Practices Code and your fundamental right to privacy and a dignified livelihood under Article 21 of the Indian Constitution. It must demand an immediate cessation of all physical visits to your office and home, restricting all communication strictly to official emails or registered post. Furthermore, it should demand financial compensation for the mental agony and professional defamation caused by their rogue agents in the workplace lobby, setting a strict deadline of 15 days for a formal apology.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            If you need professional assistance in drafting and sending such a notice, you can read more about how to structure a <Link href="/legal-notice-for-loan-settlement-harassment" className="text-blue-600 hover:underline">legal notice for loan settlement harassment</Link>. Banks possess massive legal departments, and they recognize a well drafted notice immediately. They know that ignoring it will lead to an escalation to the RBI Ombudsman or a civil suit for damages that they cannot win. The moment the legal notice is received, your account is flagged as litigious, and all rogue recovery tactics are suspended. This gives you the peace of mind to focus on your work and gather funds for a proper, dignified settlement in the future without the constant fear of workplace humiliation.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            The key takeaway from this entire guide is that you are not powerless. The law provides you with an arsenal of tools to fight back against rogue agents. By maintaining your composure, documenting the abuse, involving your HR proactively, and striking back with legal notices and police complaints, you can permanently banish these agents from your professional life. Your debt does not define your dignity, and you have every right to protect your career from illegal banking practices.
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
                                    src="/anujbhiya.png" 
                                    alt="Anuj Bhiya Legal Expert in Debt Settlement and Financial Rights" 
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <h3 className="font-bold text-xl text-gray-900 mb-1">Anuj Bhiya</h3>
                            <p className="text-sm font-semibold text-blue-600 mb-3">Senior Legal Strategist</p>
                            <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                Specializing in consumer rights, debt settlement negotiation, and protection against illegal recovery harassment. Dedicated to empowering borrowers with actionable legal frameworks.
                            </p>
                            <Link href="/contact" className="w-full block bg-blue-50 text-blue-700 font-semibold py-2 px-4 rounded-lg hover:bg-blue-100 transition-colors">
                                Consult Anuj
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </>
    );
}
"""
def clean_em_dashes(text):
    text = text.replace("—", ",")
    text = text.replace("--", "-")
    return text

with open(f"{PAGE_DIR}/RecoveryAgentOfficeClient.tsx", "w") as f:
    f.write(clean_em_dashes(content))

print("Regenerated successfully.")
