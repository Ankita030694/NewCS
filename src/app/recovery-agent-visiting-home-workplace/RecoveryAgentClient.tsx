'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function RecoveryAgentClient() {
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
        { id: 'rbi-guidelines', label: 'RBI Guidelines' },
        { id: 'home-visits', label: 'Agents at Home' },
        { id: 'workplace-visits', label: 'Agents at Workplace' },
        { id: 'contacting-relatives', label: 'Contacting Relatives' },
        { id: 'case-study-1', label: 'Case Study: Home Visit' },
        { id: 'case-study-2', label: 'Case Study: Workplace' },
        { id: 'legal-actions', label: 'Legal Actions to Take' },
        { id: 'stop-harassment', label: 'Stop Harassment' },
        { id: 'faqs', label: 'FAQs' }
    ];

    const faqs = [
        {
            question: "Can recovery agents visit my home to collect debt?",
            answer: "Yes, but they must follow strict RBI guidelines. They can only visit between 7:00 AM and 7:00 PM. They must also treat you with respect and dignity. Any abusive language, physical threats, or harassment is strictly prohibited and illegal."
        },
        {
            question: "Is it legal for recovery agents to visit my workplace?",
            answer: "Recovery agents are strongly discouraged from visiting your workplace under RBI guidelines unless you have failed to respond to them at your registered home address. Even then, they cannot cause a public scene, discuss your debt with your employer, or harass your colleagues."
        },
        {
            question: "Can bank recovery agents call my family or relatives?",
            answer: "No. The RBI clearly states that recovery agents cannot contact your relatives, friends, or neighbors to discuss your debt or pressure them into paying on your behalf. Doing so is a violation of your privacy and a punishable offense."
        },
        {
            question: "What are the permissible timings for recovery calls?",
            answer: "According to the latest RBI directives, recovery agents are only allowed to contact borrowers between 8:00 AM and 7:00 PM. Calls made outside this window, especially late at night or early morning, are illegal and should be reported."
        },
        {
            question: "Do recovery agents have the right to seize my property without notice?",
            answer: "Absolutely not. For secured loans, banks must follow a strict legal process under the SARFAESI Act, which involves issuing formal legal notices. Recovery agents cannot independently seize your assets or lock your house without proper court or legal authorization."
        },
        {
            question: "What should I do if an agent uses abusive language?",
            answer: "You should immediately record the conversation or the incident if possible. Note down the agent's name and ID. Then, file a formal complaint with the bank's grievance redressal officer. If the bank does not resolve the issue, escalate it to the RBI Banking Ombudsman."
        },
        {
            question: "Can the police arrest me for not paying a personal loan?",
            answer: "No. Defaulting on a personal loan or credit card is a civil matter, not a criminal offense. The police cannot arrest you for inability to pay a debt. If a recovery agent threatens you with police arrest, they are using illegal scare tactics."
        },
        {
            question: "How can I stop recovery agent harassment legally?",
            answer: "You can send a formal legal notice to the bank and the recovery agency demanding an immediate end to the harassment. A lawyer can help you draft this notice citing RBI guidelines. You can also file a police complaint for criminal intimidation if the harassment crosses legal boundaries."
        },
        {
            question: "Is it mandatory for recovery agents to show their ID card?",
            answer: "Yes. RBI guidelines mandate that recovery agents must carry an authorization letter from the bank and a valid identity card. You have the full right to ask for their ID before speaking with them. If they refuse, you can deny them entry."
        },
        {
            question: "Can I record calls or take videos of recovery agents?",
            answer: "Yes, you are within your rights to record phone calls and take videos if an agent visits your home or workplace and behaves inappropriately. These recordings serve as crucial evidence when filing a complaint with the bank or the RBI."
        }
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
        'name': 'CredSettle Anti-Harassment Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.8',
            'reviewCount': '920',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-recovery-agent" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-recovery-agent" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        RBI 2025 Protection Alert
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Can Recovery Agents Visit <br />
                        <span className="text-blue-300">Your Home or Office?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Understand your legal rights against bank recovery agents in India. Stop illegal harassment at your home, workplace, and among your family members immediately.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Agent at Your Door? Speak to a Lawyer
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
                                        Recovery Agent Visiting Home or Workplace
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Your Legal Rights</h3>
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

                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Facing the Fear of Recovery Agents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Falling behind on a loan or credit card payment is stressful enough without the added fear of a recovery agent visiting your home. For many borrowers in India, the thought of an agent causing a scene in front of family members or neighbors creates immense anxiety. The situation becomes even more terrifying when agents threaten to visit your workplace and humiliate you in front of colleagues and employers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking system employs recovery agencies to collect dues, but these agencies often cross legal boundaries. They use intimidation, aggressive language, and public shaming as weapons. However, the law is explicitly on your side. The Reserve Bank of India has laid down strict regulations that dictate exactly what recovery agents can and cannot do. Knowledge of these laws is your absolute best defense against harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide breaks down your rights. We will examine the rules regarding home visits, workplace intrusions, and the illegal practice of contacting your relatives. More importantly, we will provide you with actionable steps to take if an agent crosses the line, ensuring you can regain your peace of mind and handle your financial challenges with dignity.
                            </p>

                            <h2 id="rbi-guidelines" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The RBI Guidelines on Fair Practices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India strictly regulates the conduct of banks and their authorized recovery agents. The RBI mandates that lenders must treat borrowers with respect and dignity, even when they default on payments. The core principle of the RBI guidelines is that debt recovery must follow due legal process, not physical intimidation or public humiliation.
                            </p>

                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Crucial RBI Rules for Agents:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Time Restrictions:</strong> Recovery agents cannot contact you or visit you between 7:00 PM and 8:00 AM. Any contact during these hours is strictly illegal.</li>
                                    <li><strong>Identification is Mandatory:</strong> An agent must present a valid ID card issued by the agency and an authorization letter from the bank. If they fail to provide these, you can refuse to speak with them.</li>
                                    <li><strong>No Abusive Language:</strong> The use of foul language, threats of physical violence, or any form of verbal abuse is a severe violation of RBI norms and criminal law.</li>
                                    <li><strong>Privacy Protection:</strong> Agents cannot discuss your debt with third parties, including neighbors, employers, or extended family members.</li>
                                </ul>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-6">
                                Banks are held vicariously liable for the actions of their recovery agents. This means that if an agent breaks these rules, you can file a complaint against the bank itself. The RBI can and does impose heavy penalties on banks that fail to control their recovery agencies. Knowing this empowers you to push back against unlawful behavior confidently.
                            </p>

                            <h2 id="home-visits" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">When Recovery Agents Visit Your Home</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The primary question many borrowers ask is: "Can a recovery agent visit my home?" The legal answer is yes, they can. However, they cannot do so whenever they please, nor can they behave however they want once they arrive. A home visit by a recovery agent is subject to strict regulatory conditions designed to protect your peace and dignity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Firstly, they must respect the permissible visiting hours. An agent knocking on your door at 8:00 PM or 6:00 AM is violating the law. Secondly, they must identify themselves clearly. You have the absolute right to stand at your door and demand to see their bank authorization letter and official ID card. If they refuse to show documentation, you can instruct them to leave your property immediately.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Important Notice: A recovery agent cannot force their way into your home. They have no legal authority to seize your property, lock your doors, or take your vehicles without a formal court order. They are debt collectors, not law enforcement officers. If an agent attempts to enter forcefully or refuses to leave when asked, they are committing criminal trespass.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                During a home visit, the agent must maintain a civil tone. They cannot shout, use abusive words, or cause a scene intended to alert your neighbors to your financial situation. Public shaming is a tactic often used to force quick payments, but it is entirely illegal. If an agent starts shouting, you should immediately start recording the interaction on your phone. Video evidence is the strongest tool you have against rogue agents.
                            </p>

                            <h2 id="workplace-visits" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">The Threat of Agents Visiting Your Workplace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One of the most terrifying threats a borrower can face is an agent promising to show up at their office. Scammers use this tactic knowing that the fear of losing your job or being humiliated in front of your boss will make you desperate. But what does the law say about workplace visits?
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI guidelines state that recovery agents should only visit your workplace if they have exhausted all attempts to reach you at your registered home address, or if you have explicitly requested them to meet you there. A workplace is not the default location for debt recovery. Even if an agent does visit your office, their behavior is strictly regulated.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Rule 1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">No Third-Party Disclosure</h5>
                                    <p className="text-sm text-gray-600 m-0">Agents cannot inform the reception, HR department, or your colleagues that they are there to collect a debt. They must maintain strict confidentiality.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-red-200 transition-colors">
                                    <span className="text-red-600 font-bold mb-2 block text-xs uppercase tracking-wider">Rule 2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">No Disruption of Work</h5>
                                    <p className="text-sm text-gray-600 m-0">They cannot create a scene in the office lobby, shout at you in front of coworkers, or do anything that disrupts your professional duties.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If a recovery agent violates these rules by shouting about your loan in the reception area or harassing your boss, they are breaking the law. You should document the incident thoroughly. Ask office security to escort them out and record the interaction. This evidence will be vital for filing a strong complaint against the bank for jeopardizing your employment.
                            </p>

                            <h2 id="contacting-relatives" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">When Agents Call Your Family and Friends</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A highly distressing tactic used by aggressive recovery agencies is calling your parents, siblings, or even distant relatives. They often obtain these numbers from the references you provided during the loan application or through invasive data scraping techniques. The intent is clear: to pressure you into paying by destroying your social reputation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Let us be unequivocally clear: <strong>Calling your relatives or friends to recover a debt is illegal.</strong> The debt is a contract between you and the bank. Unless a family member has formally signed as a guarantor for your specific loan, the bank has no legal relationship with them. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Agents may claim they are just "trying to leave a message," but the reality is they use these calls to spread information about your default. This violates your fundamental right to privacy. If an agent contacts a relative, instruct that relative to record the call. They should state clearly on the recording that they have no connection to the loan and demand that their number be removed from the calling list immediately.
                            </p>

                            <h2 id="case-study-1" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Case Study: The Midnight Home Visit</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Consider the case of Rajesh, a software developer from Bangalore who fell behind on his personal loan EMIs after an unexpected medical emergency. After a few missed payments, the bank assigned his case to a third-party recovery agency.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                One evening at 9:30 PM, three aggressive men banged on Rajesh's door. When he opened it, they demanded immediate payment of the entire outstanding amount. They refused to show any ID cards and began shouting, drawing the attention of neighbors. They threatened to lock his apartment if he did not pay up within 24 hours.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Rajesh, knowing his rights, refused to let them inside. He stepped out, pulled out his phone, and started recording a video. He stated clearly on camera that it was past 9:00 PM, asked for their IDs, and documented their refusal and aggressive behavior. The agents, realizing they were being recorded, quickly left the premises.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The next morning, Rajesh used the video evidence to file a formal complaint with the bank's Nodal Officer and lodged a police complaint for criminal intimidation. Facing strict RBI penalties for the documented violation of timing and behavior rules, the bank immediately withdrew the agency and offered Rajesh a restructured payment plan. The harassment stopped completely because Rajesh stood his ground and gathered evidence.
                            </p>

                            <h2 id="case-study-2" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Case Study: Harassment at the Workplace</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sneha, a marketing executive in Delhi, had defaulted on a credit card. Despite answering the agency's calls and explaining her temporary financial hardship, the recovery agents decided to escalate their tactics. 
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Without any prior notice, two agents showed up at Sneha's office during working hours. They approached the front desk receptionist and loudly announced that Sneha owed the bank money and was "hiding." They demanded to see her boss. The situation caused immense embarrassment for Sneha in front of her colleagues.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Sneha contacted a legal advisor immediately. Under their guidance, she obtained the CCTV footage from her office lobby, which clearly showed the agents causing a scene. She drafted a strong legal notice citing the RBI guidelines against workplace harassment and third-party disclosure. She sent this notice to the bank's headquarters.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The legal notice forced the bank's compliance team to intervene. The bank was forced to apologize for the breach of privacy and immediately terminated the contract with that specific recovery agency. They also agreed to a favorable settlement for Sneha's outstanding credit card balance. The key to her success was swift legal action backed by solid proof.
                            </p>

                            <h2 id="legal-actions" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Legal Actions You Can Take Immediately</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you are facing harassment from recovery agents, you do not have to suffer in silence. You have several powerful legal tools at your disposal to stop the abuse.
                            </p>
                            
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Your Action Plan</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Gather Evidence</h5>
                                            <p className="text-sm text-gray-600 m-0">Always record phone calls using a call recording app. If agents visit your home, record them on video. Save all threatening WhatsApp messages or text messages. Evidence is everything.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">File a Bank Complaint</h5>
                                            <p className="text-sm text-gray-600 m-0">Send a written complaint via email to the bank's Grievance Redressal Officer or Nodal Officer. Attach your evidence and clearly state that the agents are violating RBI guidelines.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Send a Legal Notice</h5>
                                            <p className="text-sm text-gray-600 m-0">Hire a lawyer to send a formal legal notice to the bank for mental harassment and breach of privacy. A notice drafted on a lawyer's letterhead usually forces the bank to take immediate corrective action.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">4</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Approach the RBI Ombudsman</h5>
                                            <p className="text-sm text-gray-600 m-0">If the bank does not resolve your complaint within 30 days, file a complaint on the RBI Integrated Ombudsman portal. The Ombudsman has the power to penalize the bank and award you compensation.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="stop-harassment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Taking Control of Your Situation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Dealing with debt is challenging, but dealing with harassment should never be part of the process. The law recognizes that financial difficulties do not strip you of your basic human rights. When recovery agents cross the line, it is usually because they assume the borrower is unaware of the RBI regulations.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10">
                                By understanding your rights regarding home visits, workplace conduct, and communication, you flip the power dynamic. Do not let fear dictate your actions. Document every interaction, demand identification, refuse entry to abusive individuals, and use legal channels to hold banks accountable for the actions of their agents. If the harassment becomes overwhelming, seeking professional legal assistance is the most effective way to protect yourself and your family.
                            </p>

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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Stop the Harassment Today.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our legal experts can draft and send immediate legal notices to banks to halt abusive recovery tactics at your home or workplace.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Get Legal Help Now
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 h-fit">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-xl mb-3 mt-2 tracking-tight">Agent at Your Door?</h3>
                                <p className="text-gray-600 text-sm mb-6 leading-relaxed px-1">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Speak to a Lawyer
                                </Link>
                                <div className="mt-5 space-y-2 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; Immediate Legal Shield</p>
                                    <p>&#10003; Stop Home Visits</p>
                                    <p>&#10003; Protect Your Workplace</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm mt-6">
                                <h4 className="font-black text-gray-900 text-lg border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-4 text-left font-medium">
                                    <li>
                                        <Link href="/how-to-handle-recovery-agent-harrasment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Handle Agent Harassment
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/rbi-rules-for-recovery-agents" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            RBI Rules for Agents
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/bank-sent-legal-notice-for-loan-what-to-do" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Fake Legal Notices
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/anti-harassment" className="text-blue-600 hover:text-blue-800 text-sm transition-colors">
                                            Anti-Harassment Services
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
