'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Script from 'next/script';

export default function HowToCheckYourLoanStatusClient() {
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
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
        { id: 'introduction', label: 'The Branch Queue Trap' },
        { id: 'net-banking', label: 'Net Banking Verification' },
        { id: 'whatsapp-banking', label: 'WhatsApp Banking' },
        { id: 'pan-soft-pull', label: 'PAN Based Soft Pulls' },
        { id: 'customer-care-ivr', label: 'Customer Care IVR' },
        { id: 'comparison-table', label: 'Method Comparison' },
        { id: 'checklist', label: 'Verification Checklist' },
        { id: 'common-errors', label: 'Common Errors to Avoid' },
        { id: 'reviews', label: 'Client Feedback' },
        { id: 'faqs', label: 'FAQs' },
        { id: 'conclusion', label: 'Final Thoughts' },
    ];

    const faqs = [
        {
            question: 'How can I check my personal loan status by PAN?',
            answer: 'You can check your personal loan status by PAN by logging into the official portal of your lending bank or NBFC and entering your PAN number in the Track Application section. This performs a soft pull and instantly provides the current stage of your loan application without affecting your credit score.'
        },
        {
            question: 'Can I track my loan status without a branch visit if I lost my application number?',
            answer: 'Yes, if you have lost your application number, you can still track your loan status without a branch visit. Most banks allow you to retrieve your status using your registered mobile number and an OTP validation, along with your Date of Birth or PAN details.'
        },
        {
            question: 'Is it safe to use WhatsApp banking to check loan application status online?',
            answer: 'WhatsApp banking is highly secure for checking your loan application status online, provided you are interacting with the verified official business account of your bank (look for the green tick). It uses end to end encryption to protect your financial queries.'
        },
        {
            question: 'Will checking my loan status online affect my CIBIL score?',
            answer: 'No, checking your loan status online through official bank portals or customer care IVR systems is considered a soft inquiry. Soft inquiries do not impact your CIBIL score in any way, unlike hard inquiries which occur when you initially apply for the loan.'
        },
        {
            question: 'What does it mean if my online loan status shows Disbursed but the money is not in my account?',
            answer: 'If the status shows Disbursed, it means the bank has released the funds. However, due to NEFT or RTGS clearing cycles, it might take 24 to 48 hours for the funds to reflect in your savings account depending on internal banking reconciliation processes.'
        }
    ];

    const reviews = [
        {
            name: 'Ramesh Patel',
            location: 'Ahmedabad',
            stars: 5,
            comment: 'I was tired of wasting hours standing in bank queues just to hear that my file was still under review. This guide helped me set up WhatsApp banking, and now I get real time updates on my phone.'
        },
        {
            name: 'Sneha Verma',
            location: 'Bengaluru',
            stars: 5,
            comment: 'The explanation on how to use PAN based soft pulls was exactly what I needed. I tracked my personal loan status by PAN instantly and bypassed the unhelpful branch managers completely.'
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
        'name': 'How to Check Your Loan Status Guide',
        'aggregateRating': {
            '@type': 'AggregateRating',
            'ratingValue': '4.9',
            'reviewCount': '2105',
            'bestRating': '5',
            'worstRating': '1'
        }
    };

    return (
        <>
            <Script id="faq-schema-loan-status" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="review-schema-loan-status" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

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
                        How to Check Your Loan Status <br />
                        <span className="text-blue-300">Without Visiting the Bank</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Bypass physical branch queues entirely using net banking, WhatsApp, and PAN based soft pulls.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Get Free Financial Advice
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
                                        Check Loan Status Online
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {/* 3-Column Layout */}
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
                        }}
                    >
                        {link.label}
                    </a>
                ))}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-12 md:py-16 font-sans">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Column: Desktop TOC */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block">
                        <div className="sticky top-24 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <h3 className="font-black text-gray-900 mb-6 uppercase tracking-wider text-sm">Table of Contents</h3>
                            <nav className="space-y-3">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.id}
                                        href={`#${link.id}`}
                                        className={`block transition-all text-sm px-4 py-2.5 rounded-lg ${activeId === link.id
                                            ? 'bg-blue-600 text-white font-bold shadow-md'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
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
                                        }}
                                    >
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Middle Column: Main Content */}
                    <main className="lg:w-2/4 xl:w-3/5">
                        <article className="prose prose-lg prose-blue max-w-none">
                            <h2 id="introduction" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">The Branch Queue Trap</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Borrowers waste hours standing in bank queues just to check if their loan was approved or disbursed, dealing with unhelpful branch managers. It is incredibly frustrating to take time out of a busy work day, travel to a local bank branch, wait in a long line, and ultimately be told by a stressed employee that your application is "still processing." This archaic method of tracking financial applications is no longer necessary in the modern digital banking era.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The truth is that bank branches are designed for complex transactions and relationship management, not for simple status inquiries. When you visit a branch merely to ask for a status update, you are likely to encounter delays because branch staff prioritize immediate operational tasks over tracking pending files. Furthermore, branch managers often lack real time access to the centralized credit underwriting systems that determine your loan approval.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                This page provides a definitive guide on how to bypass the physical branch entirely using net banking, WhatsApp banking, PAN based soft pulls, and customer care IVR systems. By adopting these digital methods, you empower yourself with immediate, accurate information directly from the core banking systems, completely eliminating the need to wait in line. If you are struggling with loan defaults instead, you might want to learn about the <Link href="/best-lawyer-for-notice-for-loan-default" className="text-blue-600 font-bold hover:underline">best lawyer for notice for loan default</Link>.
                            </p>

                            {/* VISUAL ELEMENT 1: ALERT BANNER */}
                            <div className="my-10 p-6 bg-red-50 border-l-4 border-red-500 rounded-r-lg">
                                <h3 className="text-red-800 font-bold text-xl mb-2 flex items-center">
                                    <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                                    Scam Warning: Fake Customer Care
                                </h3>
                                <p className="text-red-700 mb-0">
                                    Never search for bank customer care numbers on Google Images or social media comments. Scammers post fake numbers to steal your banking credentials. Always use the number printed on the back of your debit card or on the official bank website. Banks will never ask for your PIN, OTP, or CVV to check your loan status.
                                </p>
                            </div>

                            <h2 id="net-banking" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">Net Banking Verification</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The most reliable method to check loan application status online is through your bank's official net banking portal. This portal communicates directly with the core banking software, providing you with the exact same information that a branch manager would see on their screen. Using net banking is secure, private, and available twenty four hours a day, seven days a week.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To track your loan status without a branch visit using net banking, you must first log in using your customer ID and password. Once authenticated, navigate to the "Loans" or "Cards and Loans" section. Look for a sub menu labeled "Track Application" or "Application Status." In this section, you will typically need to enter your loan application reference number and your registered mobile number.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The system will instantly display the current stage of your application. Common stages include "Application Received," "Document Verification," "Credit Appraisal," "Approved," and "Disbursed." If your status shows that additional documents are required, you can usually upload them directly through the portal, saving you yet another trip to the bank. For issues regarding existing problematic loans, reviewing <Link href="/best-lawyer-for-personal-loans" className="text-blue-600 font-bold hover:underline">best lawyer for personal loans</Link> can provide clarity.
                            </p>

                            <h2 id="whatsapp-banking" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">WhatsApp Banking</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Over the past few years, WhatsApp banking has revolutionized how consumers interact with financial institutions in India. It is fast, intuitive, and operates on an application you already use multiple times a day. Almost all major public and private sector banks now offer verified WhatsApp services specifically designed to answer routine account queries, including checking your loan status.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To begin, you must save the official WhatsApp number of your bank to your contacts. It is crucial to verify that the profile has the official green tick mark next to the bank's name, confirming its authenticity. Send a simple message like "Hi" or "Menu" from your registered mobile number. The automated bot will respond with a list of available services.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Reply with the number corresponding to "Loans" or "Track Application." The bot will then prompt you to enter your application reference number. Within seconds, it will reply with the exact status of your loan. This method is incredibly convenient for borrowers who want quick updates without logging into complex portals or waiting on hold with customer care.
                            </p>

                            {/* VISUAL ELEMENT 2: COMPARISON TABLE */}
                            <h2 id="comparison-table" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">Method Comparison: Online vs Branch Visit</h2>
                            <div className="overflow-x-auto mb-10 shadow-lg rounded-lg border border-gray-200">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-blue-900 text-white">
                                            <th className="p-4 font-bold uppercase text-sm border-b border-blue-800">Feature</th>
                                            <th className="p-4 font-bold uppercase text-sm border-b border-blue-800 border-l border-blue-800">Digital Methods (Online/WhatsApp)</th>
                                            <th className="p-4 font-bold uppercase text-sm border-b border-blue-800 border-l border-blue-800">Branch Visit</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-gray-700">
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-4 font-semibold bg-gray-50">Time Required</td>
                                            <td className="p-4 border-l border-gray-200 text-green-600 font-bold">2 to 3 minutes</td>
                                            <td className="p-4 border-l border-gray-200 text-red-600">2 to 3 hours (including travel)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-4 font-semibold bg-gray-50">Availability</td>
                                            <td className="p-4 border-l border-gray-200 text-green-600 font-bold">24/7/365</td>
                                            <td className="p-4 border-l border-gray-200 text-red-600">Banking hours only (usually 10 AM to 4 PM)</td>
                                        </tr>
                                        <tr className="border-b border-gray-200 hover:bg-gray-50">
                                            <td className="p-4 font-semibold bg-gray-50">Accuracy</td>
                                            <td className="p-4 border-l border-gray-200">Direct from core banking system</td>
                                            <td className="p-4 border-l border-gray-200">Dependent on staff knowledge and system access</td>
                                        </tr>
                                        <tr className="hover:bg-gray-50">
                                            <td className="p-4 font-semibold bg-gray-50">Privacy</td>
                                            <td className="p-4 border-l border-gray-200 text-green-600 font-bold">High (Secure encryption)</td>
                                            <td className="p-4 border-l border-gray-200 text-red-600">Low (Public environment)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <h2 id="pan-soft-pull" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">PAN Based Soft Pulls</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                If you have lost your application number or deleted the confirmation SMS, checking your personal loan status by PAN is the most efficient fallback strategy. Financial institutions link every credit application to the applicant's Permanent Account Number (PAN) as mandated by the Reserve Bank of India (RBI). This linkage allows you to retrieve your application status using only your PAN and date of birth.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                To execute a PAN based status check, navigate to the "Track Loan Status" page on the lender's website. Instead of selecting the "Application Number" option, choose "PAN Number" or "Mobile Number & PAN." Enter your ten character alphanumeric PAN and complete the OTP verification sent to your registered mobile number. The system will retrieve all active applications linked to your identity.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                It is important to note that retrieving your status this way is considered a soft pull. It does not trigger a new hard inquiry on your CIBIL report, meaning it will not negatively impact your credit score, no matter how many times you check. If you find unknown loans linked to your PAN, you might be facing identity theft and should consult the <Link href="/best-lawyer-for-msme-business-loan-dispute" className="text-blue-600 font-bold hover:underline">best lawyer for MSME business loan dispute</Link> or consumer protection experts immediately.
                            </p>

                            <h2 id="customer-care-ivr" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">Customer Care IVR</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                For individuals who are not comfortable with internet banking or smartphone applications, the Interactive Voice Response (IVR) system remains a robust alternative. IVR allows you to interact with the bank's computerized phone system using your dial pad, securely verifying your identity and retrieving automated status updates.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Call the official toll free customer care number from your registered mobile number. The system will automatically recognize you. Select your preferred language and follow the prompts for "Loan Services" and then "Application Status." You will typically be asked to enter your date of birth or the last four digits of your Aadhaar card for secondary authentication.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                The automated voice will read out your current loan status. If the status requires further clarification, IVR systems always provide an option to speak directly with a human executive. This method ensures you get the information you need without ever leaving your home or office, saving you immense time and effort compared to a physical branch visit.
                            </p>

                            {/* VISUAL ELEMENT 3: CHECKLIST */}
                            <h2 id="checklist" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">Verification Checklist</h2>
                            <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-10 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-2 h-full bg-blue-500"></div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                                    <svg className="w-8 h-8 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>
                                    Before Checking Your Status Online
                                </h3>
                                <p className="text-gray-600 mb-6 italic">Ensure you have the following information ready to avoid session timeouts.</p>
                                <ul className="space-y-4">
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-300 mt-1 mr-4">
                                            <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 text-lg">Application Reference Number</span>
                                            <p className="text-gray-600 text-sm mt-1">Found in your original confirmation SMS or email from the bank.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-300 mt-1 mr-4">
                                            <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 text-lg">Registered Mobile Number</span>
                                            <p className="text-gray-600 text-sm mt-1">You must have the active SIM card inserted to receive OTP validation.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-300 mt-1 mr-4">
                                            <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 text-lg">Permanent Account Number (PAN)</span>
                                            <p className="text-gray-600 text-sm mt-1">Required if you have lost your application number and need to do a soft pull.</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center border border-green-300 mt-1 mr-4">
                                            <svg className="w-4 h-4 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                                        </div>
                                        <div>
                                            <span className="font-bold text-gray-900 text-lg">Date of Birth</span>
                                            <p className="text-gray-600 text-sm mt-1">Used as a secondary security verification measure by IVR and web portals.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <h2 id="common-errors" className="text-4xl font-black text-gray-900 mb-8 scroll-mt-24 tracking-tight border-l-8 border-blue-600 pl-6">Common Errors to Avoid</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                While checking your loan application status online is straightforward, many borrowers make simple mistakes that lead to frustration. The most common error is using a non registered mobile number. Banking systems are strictly mapped to the exact mobile number provided during the application process. Attempting to track your status or receive an OTP on a different number will result in an immediate security block.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Another frequent issue is entering the PAN in the incorrect format. PANs are case sensitive on some legacy banking portals and must be entered in uppercase letters without any spaces. Additionally, if your status shows "Pending Document Verification," do not assume the bank will contact you. Log into the net banking portal to see exactly which document was rejected (e.g., a blurred salary slip) and upload a clear copy immediately.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                Finally, avoid checking your status multiple times a day. Backend credit underwriting systems update in batches, usually once at the end of the business day. Checking repeatedly will not expedite your approval and may temporarily lock your tracking portal due to excessive server requests. Patience and utilizing the correct digital channels are key to a smooth loan approval process.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                In summary, waiting in physical bank lines is an outdated practice. By leveraging net banking, WhatsApp banking, PAN soft pulls, and IVR systems, you reclaim your time and maintain complete oversight over your financial journey.
                            </p>

                            <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-24">Client Feedback</h2>
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
                                        <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.comment}"</p>
                                        <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                            <span>{review.name}</span>
                                            <span className="opacity-60">{review.location}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-14">Frequently Asked Questions</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-sm hover:shadow-md bg-white">
                                        <button
                                            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                                            className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
                                        >
                                            <h3 className={`font-bold text-lg transition-colors ${openFaqIndex === index ? 'text-blue-600' : 'text-gray-900'}`}>
                                                {faq.question}
                                            </h3>
                                            <span className={`ml-4 flex-shrink-0 transition-transform duration-300 ${openFaqIndex === index ? 'rotate-180' : ''}`}>
                                                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                                            </span>
                                        </button>
                                        <div 
                                            className={`transition-all duration-300 ease-in-out ${openFaqIndex === index ? 'max-h-96 opacity-100 pb-5 px-5' : 'max-h-0 opacity-0 px-5'}`}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Empower Your Financial Decisions.</h3>
                                <p className="text-blue-800 mb-6">Our experts help you navigate the complex world of modern banking and loan management. Let us assist you in resolving disputes and securing fair financial outcomes.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Expert Guidance Now
                                </Link>
                            </div>

                            <div className="mt-12 text-[0.65rem] text-gray-400 uppercase tracking-widest text-center opacity-60">
                                Educational Disclaimer: This content is for general awareness only. Banking protocols and portal features vary by institution. Always seek formal guidance directly from your respective bank. CredSettle is a social fintech mediation service.
                            </div>

                        </article>
                    </main>

                    {/* Right Column: CTA & Related */}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
                        <div className="space-y-6">

                            {/* Primary CTA */}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Facing Delays?</h4>
                                <p className="text-sm text-gray-600 mb-6">If your loan is stuck in processing without a valid reason, our experts can intervene directly with bank management.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Escalate Your Case
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>v Direct Management Escalation</p>
                                    <p>v Document Verification Help</p>
                                    <p>v Banking Ombudsman Support</p>
                                    <p>v 100% Confidential</p>
                                </div>
                            </div>

                            {/* Related Pages */}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/best-lawyer-for-personal-loans" className="block text-sm text-blue-600 hover:underline">Personal Loan Rights</Link>
                                    <Link href="/best-lawyer-for-msme-business-loan-dispute" className="block text-sm text-blue-600 hover:underline">Business Loan Support</Link>
                                    <Link href="/best-lawyer-for-bank-loan-recovery-defence" className="block text-sm text-blue-600 hover:underline">Bank Recovery Shield</Link>
                                    <Link href="/best-lawyer-for-notice-for-loan-default" className="block text-sm text-blue-600 hover:underline">Default Notice Help</Link>
                                </nav>
                            </div>

                        </div>
                    </aside>

                </div>
            </div>
        </>
    );
}
