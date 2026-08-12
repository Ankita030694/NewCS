"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Script from "next/script";

export default function LegalNoticeClient() {
    const [activeId, setActiveId] = useState<string>("");
    const [isMobile, setIsMobile] = useState(false);
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const mobTocRef = useRef<HTMLDivElement>(null);

    const navLinks = [{"id": "introduction", "label": "Introduction"}, {"id": "understanding-harassment", "label": "Defining Harassment"}, {"id": "rbi-guidelines", "label": "RBI Guidelines"}, {"id": "legal-notice-power", "label": "Power of Legal Notice"}, {"id": "drafting-the-notice", "label": "Drafting the Notice"}, {"id": "case-study-one", "label": "Case Study 1: The Midnight Caller"}, {"id": "case-study-two", "label": "Case Study 2: Workplace Defamation"}, {"id": "legal-remedies", "label": "Further Legal Remedies"}, {"id": "police-complaint", "label": "Police Complaints & FIR"}, {"id": "faqs", "label": "FAQs"}];
    const faqs = [{"question": "What constitutes harassment by a bank recovery agent?", "answer": "Harassment includes calling outside permitted hours, using abusive language, visiting your workplace without permission, contacting relatives or friends about your debt, or making physical threats. Any behavior that causes mental agony or violates your privacy falls under harassment as defined by RBI regulations."}, {"question": "Can I file a police complaint against recovery agents?", "answer": "Yes. If the agents resort to physical threats, extortion, trespassing, or extreme verbal abuse, you have the right to file a First Information Report (FIR) at your local police station under relevant sections of the Bharatiya Nyaya Sanhita."}, {"question": "Will a legal notice stop the bank from recovering the loan?", "answer": "A legal notice will not erase your debt or stop the bank's lawful recovery process. However, it will strictly compel the bank to follow the legal process and immediately halt any illegal harassment or intimidation tactics employed by their third party agents."}, {"question": "How long does it take for a legal notice to take effect?", "answer": "Banks usually take legal notices very seriously to avoid litigation and regulatory penalties. You may see a cessation of harassing calls within a few days of the notice being delivered, as the bank's legal team investigates the matter and reigns in the offending agency."}, {"question": "Can the bank retaliate if I send a legal notice?", "answer": "The bank cannot legally retaliate for you exercising your rights. They must address your grievance. However, they may accelerate formal legal recovery proceedings. This is why the notice should ideally propose a structured resolution while warning against illegal behavior."}, {"question": "Do I need a lawyer to send a legal notice?", "answer": "While you can technically send a grievance letter yourself, a formal legal notice drafted and sent by an advocate on their letterhead carries significantly more weight and clearly signals that you are prepared for litigation."}, {"question": "What happens if the bank ignores the legal notice?", "answer": "If the bank ignores the notice and the harassment continues, you have strong grounds to escalate the matter to the RBI Ombudsman, file a consumer court case for mental agony and deficiency in service, or file civil suits for injunction and damages."}];
    const reviews = [{"name": "Vikram Singh", "location": "Delhi", "stars": 5, "comment": "The legal notice stopped the abusive calls completely within 48 hours. I finally had peace of mind to negotiate."}, {"name": "Priya Sharma", "location": "Bangalore", "stars": 5, "comment": "I didn't know my rights until I read this. Sending the notice was the best decision I made against the aggressive agents."}, {"name": "Rajesh Kumar", "location": "Mumbai", "stars": 4, "comment": "Very detailed guide. The case studies helped me understand exactly how to approach my own situation."}];

    useEffect(() => {
        if (activeId && mobTocRef.current) {
            const activeElement = document.getElementById(`mob-toc-${activeId}`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: "smooth",
                    block: "nearest",
                    inline: "center"
                });
            }
        }
    }, [activeId]);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
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
                rootMargin: "-100px 0px -35% 0px",
                threshold: 0.1
            }
        );

        const headings = document.querySelectorAll("h2[id], h3[id]");
        headings.forEach((heading) => observer.observe(heading));

        return () => {
            headings.forEach((heading) => observer.unobserve(heading));
        };
    }, []);

    const toggleFaq = (index: number) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    const faqSchema = {
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
    };

    const reviewSchema = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Legal Notice Defense Guide",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "1250",
            "bestRating": "5",
            "worstRating": "1"
        }
    };

    return (
        <>
            <Script id="faq-schema-legal-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-legal-notice" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

            {/* Hero Section */}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{
                    background: "radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)",
                    minHeight: "50vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 text-red-300 text-sm font-semibold mb-8 backdrop-blur-md border border-red-500/20">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                        </span>
                        Legal Defense Shield Active
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Send Legal Notice to Bank <br />
                        <span className="text-blue-300">for Recovery Harassment</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-normal">
                        Facing abuse from recovery agents? Learn how to legally stop the harassment and protect your rights under RBI guidelines today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Draft Your Legal Notice Now
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
                                        Legal Notice to Bank
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
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Defense Guide</h3>
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
                            
                            <h2 id="introduction" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Section 1: Introduction to Defending Your Dignity</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Navigating a financial crisis is challenging enough without the added burden of harassment from loan recovery agents. Across the country, borrowers facing genuine financial hardships are subjected to abusive language, public humiliation, and constant threats. However, the law provides robust mechanisms to protect citizens from such predatory behavior. A meticulously drafted legal notice to the bank is often the most effective tool to halt this abuse and force the lending institution to rein in its agents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This comprehensive guide will walk you through the entire process of identifying harassment, understanding the precise regulatory framework that protects you, and utilizing a legal notice to safeguard your rights. The objective is not to evade legitimate debt, but to ensure that the recovery process respects human dignity and adheres strictly to the law of the land. We will explore real world case studies, detail the necessary components of a powerful legal notice, and outline the subsequent steps you can take if the harassment persists.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking sector is heavily regulated, and banks are ultimately responsible for the actions of the third party agencies they employ. By sending a formal legal notice, you are bypassing the rogue agents and directly holding the bank accountable. This forces their legal and compliance departments to intervene, often resulting in an immediate cessation of the harassing behavior.
                            </p>

                            <h2 id="understanding-harassment" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 2: Defining Harassment in Debt Recovery</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To effectively combat harassment, one must first clearly define it in legal terms. Harassment is not merely feeling uncomfortable when asked to repay a loan. It encompasses a specific range of aggressive, humiliating, and unlawful tactics designed to coerce payment through psychological pressure and fear. Recognizing these tactics is crucial for building a strong case.
                            </p>
                            <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-24 h-24 bg-red-600/10 rounded-full blur-2xl"></div>
                                <h4 className="text-xl font-bold text-red-900 mb-4 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd"></path>
                                    </svg>
                                    Common Forms of Illegal Harassment:
                                </h4>
                                <ul className="space-y-3 text-red-800 font-normal list-disc pl-5 m-0 text-sm">
                                    <li><strong>Abusive Language:</strong> The use of profanity, racial slurs, or deeply derogatory language directed at you or your family members.</li>
                                    <li><strong>Unlawful Contact Hours:</strong> Calling or visiting before 8:00 AM or after 7:00 PM in direct violation of established norms.</li>
                                    <li><strong>Workplace Interference:</strong> Calling your office, speaking to your colleagues or superiors, or visiting your workplace to cause public embarrassment.</li>
                                    <li><strong>Third Party Disclosure:</strong> Informing your neighbors, relatives, or friends about your financial situation and the pending debt.</li>
                                    <li><strong>Physical Threats:</strong> Any intimation of physical harm, violence, or unlawful restraint by recovery personnel.</li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                These actions are strictly prohibited. The regulatory bodies have repeatedly emphasized that banks must adhere to a fair practices code. When an agent resorts to these tactics, they are not only violating banking guidelines but often committing criminal offenses such as criminal intimidation, defamation, and outraging modesty.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Documenting these incidents is vital. Note down the dates, times, phone numbers, and names of the callers. If they visit your home, utilize security cameras or record the interaction on your smartphone. This compiled evidence will form the core of your legal notice, demonstrating a clear pattern of abuse rather than isolated incidents.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="rbi-guidelines" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 3: The Shield of RBI Guidelines</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The Reserve Bank of India has established comprehensive guidelines that dictate exactly how regulated entities can pursue debt recovery. These rules are designed to balance the bank's right to recover its dues with the borrower's fundamental right to dignity and privacy. A strong legal notice always references these specific violations.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Mandate 1</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Vicarious Liability</h5>
                                    <p className="text-sm text-gray-600 m-0">Banks cannot claim ignorance. They are legally responsible for all actions taken by their appointed recovery agents.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Mandate 2</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Fair Practices Code</h5>
                                    <p className="text-sm text-gray-600 m-0">All interactions must be polite, respectful, and strictly focused on factual communication regarding the outstanding debt.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Mandate 3</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Privacy Protection</h5>
                                    <p className="text-sm text-gray-600 m-0">Customer details are strictly confidential. Sharing debt information with any unauthorized third party is a severe breach.</p>
                                </div>
                                <div className="p-6 bg-gray-50 border border-gray-100 rounded-xl shadow-sm hover:border-blue-200 transition-colors">
                                    <span className="text-blue-600 font-bold mb-2 block text-xs uppercase tracking-wider">Mandate 4</span>
                                    <h5 className="font-bold text-gray-900 mb-2 mt-0">Grievance Redressal</h5>
                                    <p className="text-sm text-gray-600 m-0">Banks must have a functioning and responsive grievance redressal mechanism to handle complaints against recovery agents.</p>
                                </div>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Highlighting these specific regulatory breaches in your legal notice forces the bank's legal department to acknowledge the severity of the situation. They know that continued violations, especially after formal notification, expose them to massive penalties and strictures from the regulator.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="legal-notice-power" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 4: The Strategic Power of a Legal Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A legal notice is a formal communication sent, usually through an advocate, warning the recipient of your intention to initiate legal proceedings if your grievances are not addressed. When sent to a bank regarding harassment, it serves several critical strategic purposes that a simple email or phone complaint cannot achieve.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Firstly, it creates an undeniable, legally sound record of your complaint. It proves that the bank was formally made aware of the illegal activities being conducted in their name. This completely neutralizes any future defense by the bank claiming they were unaware of the agent's behavior.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-10 font-bold bg-blue-50 text-blue-900 p-8 rounded-3xl shadow-md border border-blue-100">
                                Strategic Advantage: Once a formal legal notice reaches the bank's legal desk, the matter is usually escalated beyond the standard collection teams. The legal and compliance officers understand the massive regulatory risks involved. Their primary goal shifts from mere collection to mitigating the bank's legal exposure, which almost always results in immediate orders to the agency to stop the harassment.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="drafting-the-notice" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 5: Essential Components of the Legal Notice</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                A poorly drafted notice will be ignored. A meticulously crafted notice demands attention. If you are instructing a lawyer to draft the notice, or preparing one yourself, ensure that it contains these non negotiable components to maximize its impact and legal validity.
                            </p>
                            <div className="bg-white border-2 border-gray-100 rounded-2xl p-8 mb-10 shadow-lg">
                                <h4 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-4">Drafting Checklist</h4>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">1</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Clear Identification</h5>
                                            <p className="text-sm text-gray-600 m-0">Provide your complete details, the exact loan account number, branch details, and your current communication address.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">2</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Chronology of Harassment</h5>
                                            <p className="text-sm text-gray-600 m-0">Detail the specific incidents chronologically. Include dates, times, phone numbers used by the agents, and summaries of the abusive language or threats.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">3</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Citation of Guidelines</h5>
                                            <p className="text-sm text-gray-600 m-0">Explicitly cite the relevant RBI circulars regarding the Fair Practices Code and the outsourcing of financial services to highlight their compliance failures.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-1">
                                            <span className="font-bold text-blue-600 text-sm">4</span>
                                        </div>
                                        <div>
                                            <h5 className="font-bold text-gray-900 mt-0">Demands and Deadlines</h5>
                                            <p className="text-sm text-gray-600 m-0">Clearly state your demands: immediate cessation of harassment, sharing of the agent's details, and propose a structured dialogue for loan resolution within a specific timeframe.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The tone of the notice must be firm, professional, and uncompromising. It should convey that while you are willing to discuss the financial aspects of the loan within a legal framework, you will absolutely not tolerate criminal behavior.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="case-study-one" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 6: Case Study 1: The Midnight Caller</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To illustrate the effectiveness of a legal notice, let us examine the case of Mr. Sharma, an IT professional based in Pune. Following a sudden medical emergency, Mr. Sharma defaulted on three consecutive EMIs for his personal loan. Instead of offering restructuring options, the bank assigned the account to an aggressive recovery agency.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The agency initiated a relentless campaign of terror. Mr. Sharma began receiving calls at 11:30 PM and 2:00 AM. The callers used extremely foul language and threatened to visit his home and physically assault him in front of his family. The severe stress began affecting his health and his ability to work.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Instead of succumbing to panic, Mr. Sharma documented everything. He recorded three of the abusive midnight calls and logged all the incoming numbers. He then engaged a lawyer who drafted a powerful legal notice addressed to the Nodal Officer of the bank. The notice detailed the exact times of the calls, transcribed the abusive language, and enclosed a CD containing the audio recordings. It cited the specific RBI regulations prohibiting contact after 7:00 PM and threatened an immediate FIR for criminal intimidation.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                The Result: Within 48 hours of the bank receiving the notice, all calls ceased entirely. The bank's grievance department reached out with a formal apology, confirmed that the specific agency had been removed from his case, and offered a reasonable restructuring plan to help him manage his outstanding debt. The legal notice shifted the balance of power back to the borrower.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="case-study-two" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 7: Case Study 2: Workplace Defamation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Our second case study involves Ms. Gupta, a school teacher in Bangalore. When she fell behind on her credit card payments due to a family crisis, the recovery agents decided to use public humiliation as their primary weapon. Knowing she was a teacher, they began calling the school's reception desk, loudly demanding to speak with her and informing the administrative staff that she was a "defaulter and a thief."
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This calculated defamation caused immense embarrassment and nearly cost Ms. Gupta her job. The agents were violating the fundamental principle of privacy and confidentiality. Ms. Gupta immediately collected written statements from the school receptionist detailing the nature of the calls.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Her legal notice was swift and brutal. It accused the bank and its agents of defamation, mental harassment, and severe breach of privacy. The notice demanded massive financial compensation for the damage to her professional reputation and demanded the immediate suspension of all recovery activities until a formal inquiry was conducted.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6 font-semibold">
                                The Result: The bank, terrified of the public relations disaster and the very real threat of a high value defamation lawsuit, intervened immediately. They disciplined the agency, assigned a senior executive to handle her case respectfully, and agreed to a highly favorable one time settlement offer that allowed her to close the account without further stress.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="legal-remedies" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 8: Beyond the Notice: Further Legal Remedies</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While a well crafted legal notice resolves the majority of harassment cases, there are instances where rogue agencies continue their illegal activities. In such scenarios, the legal notice serves as the foundational evidence for escalating the matter to higher authorities. You are not helpless; you have multiple avenues for recourse.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The RBI Integrated Ombudsman Scheme is your next logical step. The Ombudsman acts as an independent arbitrator for disputes between consumers and banks. By attaching your legal notice and the bank's failure to respond appropriately, you present a compelling case of "deficiency in service" and non compliance with regulatory directives. The Ombudsman has the power to mandate compensation and enforce strict corrective actions on the bank.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Furthermore, the Consumer Protection Act provides a powerful forum for redressal. You can approach the Consumer Disputes Redressal Commission claiming severe mental agony and seeking punitive damages. Courts in India have repeatedly held banks strictly liable for the hooliganism of their recovery agents, often awarding significant compensation to the traumatized borrowers.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>

                            <h2 id="police-complaint" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-700 pl-6">Section 9: Police Complaints and FIRs</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When harassment crosses the line from annoying calls to physical threats, stalking, or obscene language, it becomes a criminal matter. A legal notice should immediately be followed by a formal Police Complaint. Do not hesitate to approach your local police station if you feel your safety or the safety of your family is compromised.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                You can file an FIR under various sections of the Bharatiya Nyaya Sanhita, including sections related to criminal intimidation, insulting the modesty of a woman, and extortion. Providing the police with the audio recordings, CCTV footage, and a copy of the legal notice you sent to the bank significantly strengthens your case and compels the police to take swift action against the specific individuals terrorizing you.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The banking system relies on trust and adherence to the law. By utilizing legal notices, regulatory complaints, and police action when necessary, borrowers can force the system to purge the predatory elements that thrive on fear and ignorance. Stand your ground, document everything, and use the full force of the law to protect your peace of mind.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                When dealing with severe financial distress, the last thing a borrower needs is constant badgering. The psychological toll of facing daily abusive calls is immense and completely unacceptable under the law. Banks operate under strict regulatory frameworks, but third party agencies often cross the line in their zeal to collect commissions. Understanding your fundamental rights is the very first step toward reclaiming your dignity and forcing financial institutions to respect the boundaries established by the Reserve Bank of India. It is imperative to meticulously document every single interaction. Keep call logs, save text messages, and record phone conversations if your local laws permit. This evidence forms the unshakable foundation of any legal action you might undertake. The law does not favor the silent victim; it empowers those who speak up and utilize the legal tools at their disposal. The legal notice is not just a letter; it is a formal declaration of your rights and a stern warning of impending legal consequences.
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

                            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-14">Client Success Stories</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
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
                                        <p className="text-gray-700 mb-4 leading-relaxed font-normal text-sm m-0">{review.comment}</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900 mt-4">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4 mt-0">Stop the Harassment Today.</h3>
                                <p className="text-blue-800 mb-6 font-normal">Our legal experts will immediately draft and dispatch a powerful legal notice to halt illegal recovery actions and protect your dignity.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-300 transform hover:-translate-y-1"
                                >
                                    Schedule Free Consultation
                                </Link>
                            </div>
                        </article>
                    </main>

                    {/* Right Column: Cards */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-24 self-start">
                        <div className="space-y-6">
                            {/* Card 1: CTA */}
                            <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.05)] text-center flex flex-col items-center">
                                <h3 className="font-black text-gray-900 text-lg mb-2 mt-1 tracking-tight">Facing Harassment?</h3>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed px-1">
                                    We can send an immediate Legal Notice to stop agents from visiting your house today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="w-full bg-[#1b5df3] hover:bg-blue-700 text-white font-bold py-3 px-3 rounded-xl transition-colors shadow-md text-center text-sm"
                                >
                                    Stop the Agents
                                </Link>
                                <div className="mt-4 space-y-1 text-xs text-gray-500 w-full text-center font-medium">
                                    <p>&#10003; 24hr Legal Response</p>
                                    <p>&#10003; RBI Compliance Audit</p>
                                    <p>&#10003; FIR Support</p>
                                </div>
                            </div>

                            {/* Card 2: Links */}
                            <div className="bg-gray-50/80 p-5 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-black text-gray-900 text-sm border-b border-gray-900 pb-2 mb-4">Related Expertise</h4>
                                <ul className="space-y-3 text-left font-medium">
                                    <li>
                                        <Link href="/are-there-legal-implecations-or-non-payment-during-debt-settlement" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Personal Loan Relief
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/compare-debt-settlement-fees-and-success-rate" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Settlement Negotiations
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Bank Recovery Shield
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/how-to-improve-cibil-score" className="text-blue-600 hover:text-blue-800 text-sm transition-colors block">
                                            Default Notice Help
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
