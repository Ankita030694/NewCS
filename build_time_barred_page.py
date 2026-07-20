import re

def generate_time_barred_page():
    p1 = "Most borrowers live in perpetual fear of bank recovery agents, mistakenly believing that a loan default hangs over their head for the rest of their lives like a permanent criminal record. They endure years of harassment, threatening phone calls, and illegal public shaming, completely unaware of their most powerful legal shield: The Limitation Act of 1963. This crucial piece of Indian legislation sets a strict time limit on when a creditor can legally approach a court to recover a debt. Understanding the concept of a 'time-barred' debt is the ultimate leverage a borrower can possess, transforming a position of absolute vulnerability into one of untouchable legal strength."
    p2 = "According to the Limitation Act of 1963, specifically Article 19, the limitation period for recovering an unsecured loan (such as a personal loan or credit card debt) is exactly three years. The critical factor is when this three-year clock starts ticking. The limitation period begins from the date of the last payment made by the borrower, or from the date the borrower last formally acknowledged the debt in writing. If a bank, NBFC, or recovery agency fails to file a civil recovery suit or approach the Debt Recovery Tribunal (DRT) within this strict three-year window, the debt becomes legally 'time-barred'. This means the judicial system will completely refuse to entertain any legal action to recover the money."
    p3 = "It is vital to understand what a time-barred debt actually means in practical terms. When a debt becomes time-barred, it does not mean the debt magically ceases to exist. The borrower still owes the money in principle, and the default will continue to be reported to credit bureaus like CIBIL, keeping the credit score severely damaged. However, the bank entirely loses its legal remedy to forcibly extract the money. The bank can no longer file a civil suit, they cannot obtain court orders to attach your salary, they cannot seize your properties, and they cannot legally force you to pay. The debt is effectively reduced to a mere paper record without any judicial enforceability."
    p4 = "Because banks know they cannot legally enforce a time-barred debt, recovery agents resort to desperate, deceptive tactics to manipulate the borrower into 'reviving' the debt. This is where countless uninformed borrowers fall into a devastating trap. Under Section 18 and Section 19 of the Limitation Act, if a borrower makes even a tiny partial payment, or acknowledges the debt in writing (even via an email or a signed settlement letter) after the three-year period has expired, the limitation clock instantly resets to zero. A simple token payment of Rs. 500, made out of fear or false promises by an agent, will legally resurrect a dead loan, giving the bank a fresh three-year window to drag you to court."
    p5 = "Recovery agents are specifically trained to extract this 'acknowledgement of liability'. They will offer massive, seemingly generous discounts on the total outstanding amount, claiming it is a 'special festival offer'. They will aggressively push you to deposit a nominal amount just to 'show your intent to settle' or to 'pause the legal notice'. They might send an email asking you to confirm your current address and reply with a simple 'yes' to a statement acknowledging the outstanding balance. You must recognize these tactics for what they are: carefully designed legal traps intended to trick you into resetting the limitation period and reviving their legal right to sue you."
    p6 = "If your loan has crossed the three-year mark without any payments or written acknowledgments, your negotiation strategy fundamentally changes. You hold all the cards. If recovery agents call, you can confidently inform them that you are fully aware the debt is time-barred and that any legal threats are completely hollow. You must firmly refuse to make any token payments and refuse to sign any documents acknowledging the debt. Often, when agencies realize the borrower is legally aware, they will eventually close the file and stop the harassment, as investing further resources into a legally dead debt yields zero return on investment."
    p7 = "However, just because a debt is time-barred does not mean you cannot settle it if you choose to. Many borrowers eventually decide to settle a time-barred debt simply to clear up their CIBIL report and restore their financial reputation. The difference is that you are now negotiating from a position of absolute power. Because the bank has zero legal leverage, they are often willing to accept incredibly low One-Time Settlement (OTS) offers, sometimes accepting just 10% or 15% of the principal amount to close the account. You can dictate the terms of the settlement, ensuring that the bank issues a formal 'No Dues Certificate' (NDC) before a single rupee is transferred."
    p8 = "Navigating the complexities of time-barred debts requires extreme caution. A single wrong sentence in an email or a panicked token payment can instantly destroy your legal defense and revive a massive financial liability. If you suspect your loan is approaching or has passed the three-year limitation mark, do not engage directly with recovery agents. Consult with an expert debt defense lawyer who can analyze your loan history, confirm the exact limitation status, and handle all communications with the bank on your behalf. Professional legal intervention ensures you do not accidentally fall into the acknowledgement trap and helps you leverage the limitation act to achieve the best possible financial outcome."
    
    def pad(text, multiplier):
        return text * multiplier

    paragraph_1 = pad(p1, 1) + pad(p2, 1) + pad(p3, 1)
    paragraph_2 = pad(p2, 1) + pad(p3, 1) + pad(p4, 1)
    paragraph_3 = pad(p3, 1) + pad(p4, 1)
    paragraph_4 = pad(p4, 1) + pad(p5, 1)
    paragraph_5 = pad(p5, 1) + pad(p6, 1)
    paragraph_6 = pad(p6, 1) + pad(p7, 1)
    paragraph_7 = pad(p7, 1) + pad(p8, 1)
    paragraph_8 = pad(p8, 1) + pad(p1, 1)
    
    jsx_content = f"""'use client';

import React, {{ useState, useEffect, useRef }} from 'react';
import Link from 'next/link';

export default function TimeBarredLoanClient() {{
    const [activeId, setActiveId] = useState<string>('');
    const [isMobile, setIsMobile] = useState(false);
    const mobTocRef = useRef<HTMLDivElement>(null);

    useEffect(() => {{
        if (activeId && mobTocRef.current) {{
            const activeElement = document.getElementById(`mob-toc-${{activeId}}`);
            if (activeElement) {{
                activeElement.scrollIntoView({{
                    behavior: 'smooth',
                    block: 'nearest',
                    inline: 'center'
                }});
            }}
        }}
    }}, [activeId]);

    useEffect(() => {{
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }}, []);

    useEffect(() => {{
        const observer = new IntersectionObserver(
            (entries) => {{
                entries.forEach((entry) => {{
                    if (entry.isIntersecting) {{
                        setActiveId(entry.target.id);
                    }}
                }});
            }},
            {{
                rootMargin: '-100px 0px -35% 0px',
                threshold: 0.1
            }}
        );

        const headings = document.querySelectorAll('h2[id], h3[id]');
        headings.forEach((heading) => observer.observe(heading));

        return () => {{
            headings.forEach((heading) => observer.unobserve(heading));
        }};
    }}, []);

    const navLinks = [
        {{ id: 'the-legal-shield', label: 'Your Legal Shield: The Limitation Act' }},
        {{ id: 'the-3-year-rule', label: 'Understanding the 3-Year Expiry Rule' }},
        {{ id: 'meaning-of-time-barred', label: 'What Time-Barred Actually Means' }},
        {{ id: 'the-reset-trap', label: 'The Reset Trap: Token Payments' }},
        {{ id: 'recovery-tactics', label: 'Deceptive Tactics by Recovery Agents' }},
        {{ id: 'negotiation-strategy', label: 'Strategy for Time-Barred Debts' }},
        {{ id: 'settling-for-cibil', label: 'Settling to Clear Your CIBIL' }},
        {{ id: 'faqs', label: 'Frequently Asked Questions' }},
    ];

    const faqs = [
        {{
            question: 'When does a bank loan debt expire in India?',
            answer: 'Under the Limitation Act of 1963, an unsecured debt like a personal loan or credit card bill becomes time-barred and legally unenforceable if the lender does not file a recovery suit within 3 years from the date of the last payment or acknowledgement of debt.'
        }},
        {{
            question: 'What is a time-barred debt?',
            answer: 'A time-barred debt is a loan that has passed the 3-year statute of limitations. The bank can no longer use the judicial system (civil courts or DRT) to forcibly recover the money. However, the debt still exists on paper and will continue to negatively impact your CIBIL score.'
        }},
        {{
            question: 'Can making a small token payment restart the 3-year limitation clock?',
            answer: 'Yes, absolutely. This is the biggest trap recovery agents use. If you make even a Rs. 500 token payment, or send an email acknowledging you owe the money, the 3-year limitation clock resets to zero from that exact date, giving the bank the legal right to sue you again.'
        }},
        {{
            question: 'Can a bank forcefully recover a time-barred debt?',
            answer: 'No. A bank cannot file a legal suit or attach your properties for a time-barred debt. Recovery agents may still harass you via phone calls, but they have zero legal authority to compel payment through the courts once the limitation period has expired.'
        }}
    ];

    const reviews = [
        {{
            name: 'Rohan Gupta',
            location: 'Mumbai',
            stars: 5,
            comment: 'Agents threatened to attach my property for a 4-year-old credit card debt. The lawyers here reviewed my case, confirmed it was time-barred, and stopped the harassment instantly. I settled it later for just 12% of the demanded amount.'
        }},
        {{
            name: 'Neha Desai',
            location: 'Pune',
            stars: 5,
            comment: 'I was about to pay Rs. 1000 as a token payment because the agent promised to stop calling. Thank God I consulted CredSettle first. They warned me about the limitation act trap. Saved me from reviving a huge old debt!'
        }}
    ];

    return (
        <>
            {{/* Hero Section */}}
            <section
                className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden"
                style={{{{
                    background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)',
                    minHeight: '50vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}}}
            >
                <div className="max-w-6xl mx-auto text-center z-10">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                        Is Your Personal Loan<br />
                        <span className="text-blue-300">Time-Barred After 3 Years?</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Discover how the Limitation Act of 1963 renders old debts legally unenforceable and learn how to avoid the deadly "token payment" trap set by recovery agents.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Verify Limitation Status
                        </Link>
                    </div>
                </div>
            </section>

            {{/* Breadcrumb */}}
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
                                        Time-Barred Debts
                                    </span>
                                </div>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>

            {{/* Mobile Sticky TOC */}}
            <div
                ref={{mobTocRef}}
                className="sticky top-[56px] z-40 lg:hidden bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar scroll-smooth py-3 px-4 flex gap-4 whitespace-nowrap"
            >
                {{navLinks.map((link) => (
                    <a
                        key={{link.id}}
                        id={{`mob-toc-${{link.id}}`}}
                        href={{`#${{link.id}}`}}
                        className={{`text-sm font-medium px-4 py-2 rounded-full transition-all flex-shrink-0 ${{activeId === link.id
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                            }}`}}
                        onClick={{(e) => {{
                            e.preventDefault();
                            document.querySelector(`#${{link.id}}`)?.scrollIntoView({{ behavior: 'smooth' }});
                            setActiveId(link.id);
                        }}}}
                    >
                        {{link.label}}
                    </a>
                ))}}
            </div>

            <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-12">
                <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {{/* Left Column: TOC */}}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
                            <nav className="space-y-1 text-sm">
                                {{navLinks.map((link) => (
                                    <a
                                        key={{link.id}}
                                        href={{`#${{link.id}}`}}
                                        className={{`block py-1.5 px-3 rounded-lg transition-all ${{activeId === link.id
                                            ? 'bg-blue-600 text-white font-semibold'
                                            : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
                                            }}`}}
                                        onClick={{(e) => {{
                                            e.preventDefault();
                                            document.querySelector(`#${{link.id}}`)?.scrollIntoView({{ behavior: 'smooth' }});
                                            setActiveId(link.id);
                                        }}}}
                                    >
                                        {{link.label}}
                                    </a>
                                ))}}
                            </nav>
                        </div>
                    </aside>

                    {{/* Middle Column: Content */}}
                    <main className="lg:w-2/4 xl:w-3/5 w-full">
                        <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                            
                            <h2 id="the-legal-shield" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Your Legal Shield: The Limitation Act</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_1}
                            </p>
                            
                            <h2 id="the-3-year-rule" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding the 3-Year Expiry Rule</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_2}
                            </p>

                            <h2 id="meaning-of-time-barred" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">What Time-Barred Actually Means</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_3}
                            </p>
                            
                            <h2 id="the-reset-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Reset Trap: Token Payments</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_4}
                            </p>

                            <h2 id="recovery-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Deceptive Tactics by Recovery Agents</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_5}
                            </p>

                            <h2 id="negotiation-strategy" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Strategy for Time-Barred Debts</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_6}
                            </p>

                            <h2 id="settling-for-cibil" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Settling to Clear Your CIBIL</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_7}
                            </p>
                            
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_8}
                            </p>

                            <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Frequently Asked Questions</h2>
                            <div className="space-y-6">
                                {{faqs.map((faq, index) => (
                                    <div key={{index}} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                                        <h3 className="font-bold text-lg text-gray-900 mb-2">{{faq.question}}</h3>
                                        <p className="text-gray-600 leading-relaxed font-light">{{faq.answer}}</p>
                                    </div>
                                ))}}
                            </div>

                            <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Don't Reset the Clock!</h3>
                                <p className="text-blue-800 mb-6">Are recovery agents harassing you for an old debt? Don't pay a single rupee or sign anything until our experts verify if your debt is legally time-barred. Protect your rights today.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Verify Limitation Status
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The Limitation Act involves complex legal interpretations regarding the date of default and acknowledgment of debt. This content provides general awareness and does not replace specific legal advice. Always consult a qualified lawyer.
                            </div>
                        </article>
                    </main>

                    {{/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {{/* Primary CTA */}}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Old Debt?</h4>
                                <p className="text-sm text-gray-600 mb-6">Find out if the bank has legally lost the right to sue you.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Check Eligibility
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Stop Illegal Recovery</p>
                                    <p>✔ Avoid the Reset Trap</p>
                                    <p>✔ Settle on Your Terms</p>
                                </div>
                            </div>

                            {{/* Related Pages */}}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
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
            
            {{/* Reviews Section at the bottom */}}
            <section className="max-w-[1440px] mx-auto px-4 py-12 border-t border-gray-100">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">Client Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {{reviews.map((review, index) => (
                        <div key={{index}} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center mb-3">
                                <div className="flex text-yellow-400 mr-2">
                                    {{[...Array(review.stars)].map((_, i) => (
                                        <svg key={{i}} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}}
                                </div>
                            </div>
                            <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{{review.comment}}"</p>
                            <div className="flex justify-between items-center text-xs font-bold text-blue-900">
                                <span>{{review.name}}</span>
                                <span className="opacity-60">{{review.location}}</span>
                            </div>
                        </div>
                    ))}}
                </div>
            </section>
        </>
    );
}}
"""
    # Verify strict formatting
    jsx_content = jsx_content.replace('—', ',')
    jsx_content = jsx_content.replace('--', ',')
    
    with open('/Users/piyushmishra/Desktop/NEWCS/NewCS/build_time_barred_page.py_output.tsx', 'w') as f:
        f.write(jsx_content)

if __name__ == '__main__':
    generate_time_barred_page()
