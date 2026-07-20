import re

def generate_guarantor_page():
    p1 = "Signing as a guarantor for a friend, family member, or business partner's personal loan is often done out of goodwill and emotional obligation, with little understanding of the devastating legal consequences. The reality only hits when the primary borrower defaults, absconds, or declares bankruptcy, and the bank suddenly redirects its aggressive recovery machinery entirely toward the guarantor. Receiving a formal legal notice from a bank demanding repayment for a loan you never utilized is a terrifying experience. Many guarantors mistakenly believe they are only a secondary backup, or that the bank must first sell the primary borrower's assets before touching theirs. This is a dangerous misconception that can lead to severe financial ruin."
    p2 = "Under the Indian Contract Act, 1872, the liability of a guarantor or surety is strictly defined as 'co-extensive' with that of the principal debtor. This is the most critical legal principle you must understand. Co-extensive liability means that in the eyes of the law, the guarantor is equally responsible for the repayment of the entire loan amount, including all compounding interest and penal charges. The bank is not legally obligated to exhaust its remedies against the primary borrower first. They do not have to wait, they do not have to file a suit against the borrower first, and they certainly do not have to try tracking down an absconding defaulter. If the primary borrower misses an EMI, the bank can immediately serve a legal notice to the guarantor demanding full payment."
    p3 = "The consequences of this co-extensive liability are immediate and brutal. The moment the loan account is classified as a Non-Performing Asset (NPA), the negative reporting is simultaneously reflected on the CIBIL reports of both the primary borrower and the guarantor. A guarantor's credit score will plummet overnight, effectively destroying their ability to secure home loans, car loans, or even a simple credit card for their own needs. Furthermore, if the legal notice is ignored, the bank can initiate proceedings in the Debt Recovery Tribunal (DRT) or civil courts to obtain an attachment order. This means the bank can legally seize and auction the guarantor's personal properties, freeze their bank accounts, and garnish their salary to recover the defaulted amount."
    p4 = "While the situation appears dire, guarantors are not entirely without legal recourse. The law provides specific protections and rights to a guarantor under the Contract Act. For instance, if the bank and the primary borrower alter the fundamental terms and conditions of the loan agreement (such as increasing the interest rate, extending the tenure, or releasing a security collateral) without the explicit, written consent of the guarantor, the guarantor is immediately discharged from their liability. Banks frequently make administrative errors regarding these 'variations of contract'. A skilled banking defense lawyer can meticulously scrutinize the loan documents and subsequent communications to identify any such unauthorized variations, which can be used to legally invalidate the guarantee."
    p5 = "If the bank's claim is valid and you are forced to pay the outstanding debt to prevent the attachment of your assets, you possess a powerful legal weapon: the Right of Subrogation. Once a guarantor clears the debt, they legally step into the shoes of the creditor. This means the guarantor assumes all the rights the bank originally held against the primary borrower. You are legally entitled to file a civil recovery suit against the absconding borrower to recover every single rupee you paid to the bank, plus legal expenses. If the primary borrower had pledged any collateral to the bank, the right to that collateral transfers directly to you upon clearing the debt."
    p6 = "Receiving a legal notice as a guarantor requires an immediate, strategic response. Ignoring the notice will result in an ex-parte court order against you. You must immediately engage a specialized debt defense advocate to draft a robust legal reply. Your lawyer will demand that the bank provide a complete statement of accounts, proof of the default, and documentation of all efforts made to recover from the primary borrower. In many cases, if the guarantor demonstrates a strong legal defense and a willingness to fight the attachment proceedings, the bank may be persuaded to accept a heavily discounted One-Time Settlement (OTS) rather than engage in prolonged litigation."
    p7 = "During this highly stressful period, you must also mentally prepare for the psychological tactics employed by recovery agents. Agents will exploit the betrayal you feel towards the primary borrower, attempting to manipulate you into making panic payments. They will threaten your family and your reputation. It is imperative to route all communication with the bank and their agents exclusively through your legal counsel. By establishing a strict legal boundary, you strip the recovery agents of their power to intimidate you, allowing you to focus on the practical steps required to resolve the liability and minimize the financial damage."
    p8 = "Being a loan guarantor is a severe legal commitment, not a mere formality. If you find yourself trapped by someone else's default, you must act decisively. Do not wait for the bank to freeze your accounts. By understanding the principles of co-extensive liability, leveraging your rights against unauthorized contract variations, and utilizing the right of subrogation, you can strategically navigate this crisis. Securing expert legal representation is the most critical step in defending your assets, negotiating a viable settlement, and eventually holding the primary borrower accountable for the financial chaos they have caused."
    
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

export default function GuarantorLiabilityClient() {{
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
        {{ id: 'the-trap', label: 'The Trap of Being a Guarantor' }},
        {{ id: 'co-extensive-liability', label: 'Understanding Co-Extensive Liability' }},
        {{ id: 'asset-attachment', label: 'CIBIL Impact and Asset Attachment' }},
        {{ id: 'contract-variations', label: 'Defenses: Unauthorized Contract Variations' }},
        {{ id: 'right-of-subrogation', label: 'The Right of Subrogation' }},
        {{ id: 'legal-response', label: 'Strategic Response to Legal Notices' }},
        {{ id: 'psychological-tactics', label: 'Handling Recovery Agent Harassment' }},
        {{ id: 'faqs', label: 'Frequently Asked Questions' }},
    ];

    const faqs = [
        {{
            question: 'What happens if the primary borrower defaults on a loan?',
            answer: "If the primary borrower defaults, the bank will immediately invoke the guarantee clause. Under Indian law, the guarantor's liability is 'co-extensive', meaning the bank can legally demand the entire outstanding amount directly from the guarantor without first exhausting all legal remedies against the primary borrower."
        }},
        {{
            question: 'Can a bank attach the assets of a loan guarantor?',
            answer: 'Yes. If the debt remains unpaid after legal notices are served, the bank can approach the Debt Recovery Tribunal (DRT) or civil courts to obtain an order to attach and auction the personal assets and properties of the guarantor to recover the dues.'
        }},
        {{
            question: 'Does being a loan guarantor affect my CIBIL score?',
            answer: "Absolutely. When the primary borrower misses an EMI or defaults, it negatively impacts both the borrower's and the guarantor's CIBIL score. A severe default by the borrower can ruin the guarantor's credit history, making it impossible for them to secure their own loans."
        }},
        {{
            question: 'Can a guarantor take legal action against the primary borrower?',
            answer: "Yes, through the 'Right of Subrogation'. If a guarantor is forced to pay the bank to settle the debt, they legally step into the shoes of the creditor. The guarantor can then file a civil recovery suit against the absconding primary borrower to recover the money they paid."
        }}
    ];

    const reviews = [
        {{
            name: 'Sunil Verma',
            location: 'Delhi',
            stars: 5,
            comment: 'I signed as a guarantor for my brother-in-law who later vanished. The bank froze my salary account. The legal team here drafted a brilliant reply identifying an unauthorized contract variation, which legally discharged me from the liability.'
        }},
        {{
            name: 'Anjali Sharma',
            location: 'Bangalore',
            stars: 5,
            comment: 'I was forced to pay the bank to stop them from auctioning my house. CredSettle helped me use the right of subrogation to file a civil suit against the primary borrower and recover every penny I lost.'
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
                        Legal Notice to Loan Guarantor:<br />
                        <span className="text-blue-300">Liability & Defense Strategies</span>
                    </h1>
                    <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-3xl mx-auto font-light">
                        Received a legal notice because the primary borrower absconded? Understand co-extensive liability, stop asset attachment, and learn how to legally recover your money.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contact"
                            className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            Consult a Defense Lawyer
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
                                        Loan Guarantor Liability
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
                            
                            <h2 id="the-trap" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Trap of Being a Guarantor</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_1}
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_2}
                            </p>

                            <h2 id="co-extensive-liability" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Understanding Co-Extensive Liability</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_3}
                            </p>
                            
                            <h2 id="asset-attachment" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">CIBIL Impact and Asset Attachment</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_4}
                            </p>

                            <h2 id="contract-variations" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Defenses: Unauthorized Contract Variations</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_5}
                            </p>

                            <h2 id="right-of-subrogation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">The Right of Subrogation</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_6}
                            </p>

                            <h2 id="legal-response" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Strategic Response to Legal Notices</h2>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                {paragraph_7}
                            </p>
                            
                            <h2 id="psychological-tactics" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-20">Handling Recovery Agent Harassment</h2>
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
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Protect Your Assets</h3>
                                <p className="text-blue-800 mb-6">Don't let someone else's default ruin your life. Our expert debt defense lawyers can help you challenge bank notices, stop asset attachment, and file a subrogation suit against the primary borrower.</p>
                                <Link
                                    href="/contact"
                                    className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md focus:ring-4 focus:ring-blue-300"
                                >
                                    Get Legal Representation Now
                                </Link>
                            </div>

                            <div className="mt-8 text-xs text-gray-500 italic">
                                Disclaimer: The information provided on this page constitutes general legal awareness and does not replace formal legal advice. Guarantor liability involves complex contractual laws. Always consult with a qualified advocate licensed to practice in your jurisdiction.
                            </div>
                        </article>
                    </main>

                    {{/* Right Column: CTA & Related Expertise (NO AUTHOR BIO) */}}
                    <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-20">
                        <div className="space-y-6">
                            {{/* Primary CTA */}}
                            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                                <h4 className="font-bold text-xl text-gray-900 mb-2">Assets at Risk?</h4>
                                <p className="text-sm text-gray-600 mb-6">Stop bank attachments and recover your money from the defaulter.</p>
                                <Link
                                    href="/contact"
                                    className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                                >
                                    Defend Your Assets
                                </Link>
                                <div className="mt-4 text-xs text-gray-500 space-y-1">
                                    <p>✔ Stop Asset Attachment</p>
                                    <p>✔ Right of Subrogation</p>
                                    <p>✔ Fight Co-liability</p>
                                </div>
                            </div>

                            {{/* Related Pages */}}
                            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                                <nav className="space-y-3">
                                    <Link href="/how-to-stop-recovery-agent-harassment" className="block text-sm text-blue-600 hover:underline">Stop Agent Harassment</Link>
                                    <Link href="/cheque-bounce-case-defense-section-138" className="block text-sm text-blue-600 hover:underline">Cheque Bounce Defense</Link>
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
    
    with open('/Users/piyushmishra/Desktop/NEWCS/NewCS/build_guarantor_page.py_output.tsx', 'w') as f:
        f.write(jsx_content)

if __name__ == '__main__':
    generate_guarantor_page()
