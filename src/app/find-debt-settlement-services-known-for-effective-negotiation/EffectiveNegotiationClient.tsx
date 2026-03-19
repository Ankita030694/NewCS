'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "What is the success rate of professional debt negotiation?",
    answer: "Professional debt negotiation services in India typically report a success rate of 85% to 95% for unsecured loans like credit cards and personal loans. Success depends on the borrower's genuine financial hardship and the company's relationship with the lending institution."
  },
  {
    question: "How do these companies charge for their services?",
    answer: "Most reputable debt settlement companies in India charge a fee ranging from 10% to 15% of the total amount they save you. Some may also have a small upfront processing or registration fee for legal documentation and harassment protection."
  },
  {
    question: "Can these services stop recovery agents from visiting my home?",
    answer: "Yes, once you authorize a professional service, they issue formal legal notices to the bank and the RBI Ombudsman. This mandates that all recovery communication must be directed to your appointed representative, effectively stopping unannounced visits and harassing calls under the RBI Fair Practice Code."
  },
  {
    question: "Is it legal to use a third-party service for bank negotiations?",
    answer: "Absolutely. Under the Indian Contract Act and RBI guidelines, a borrower has the right to be represented by a legal or financial expert in debt discussions. Professional services operate within this legal framework to ensure your rights are protected."
  },
  {
    question: "How much of a discount can I realistically expect?",
    answer: "For unsecured debts, professional negotiators usually achieve a waiver of 40% to 75% on the total outstanding amount. The exact percentage varies based on the age of the debt, the policy of the specific bank, and the strength of your hardship evidence."
  },
  {
    question: "Will my credit score improve after the settlement?",
    answer: "Initially, your score will drop because the account is marked as 'Settled'. However, many professional services also provide a credit rebuilding roadmap. By resolving the debt, you stop the continuous reporting of defaults, which is the first step toward score recovery."
  },
  {
    question: "What is the difference between a debt management plan and a settlement?",
    answer: "A Debt Management Plan (DMP) involves paying the full principal through reduced EMIs and frozen interest. A Settlement involves paying a one-time lump sum that is significantly less than the total outstanding to close the account forever."
  },
  {
    question: "Can I settle my loan if the bank has already filed a case?",
    answer: "Yes, even if a case is pending in a civil court or Lok Adalat, you can still reach a compromise settlement. Professional services can coordinate with bank lawyers to withdraw the case once the settlement amount is paid."
  },
  {
    question: "How long does the professional negotiation process take?",
    answer: "The negotiation phase usually takes 3 to 6 months. This depends on how long the account has been in default and how quickly the bank's local or regional office approves the settlement proposal."
  },
  {
    question: "What happens if the bank refuses the settlement offer?",
    answer: "If a bank refuses, professional negotiators will analyze the reason and wait for a better window—usually the end of a financial quarter or year when banks are under more pressure to reduce NPAs. They continue to protect you from harassment during this period."
  }
];

const reviews = [
  {
    name: "Sandeep Bansal",
    location: "Delhi",
    rating: 5,
    text: "I was drowning in 5 credit cards. SingleDebt negotiated a consolidated payment plan that I could actually afford. The mental peace I got when the calls stopped was priceless."
  },
  {
    name: "Riya Sen",
    location: "Kolkata",
    rating: 5,
    text: "Used FREED for my personal loan settlement. They saved me nearly 60% of what I owed. The team was very transparent about the CIBIL impact and helped me plan my credit recovery."
  },
  {
    name: "Karan Johar (Merchant)",
    location: "Mumbai",
    rating: 5,
    text: "AMA Legal Solutions handled my business debt when the bank threatened legal action. Their advocates were top-notch and managed to get an OTS that saved my small enterprise."
  },
  {
    name: "Pooja Hegde",
    location: "Hyderabad",
    rating: 4,
    text: "SettleMyLoan's team is very persistent. It took 4 months, but they got me a settlement that fit my budget exactly. No more sleepless nights."
  }
];

const navLinks = [
  { id: 'introduction', label: 'The Negotiation Art' },
  { id: 'why-professional', label: 'Why Hire Pros?' },
  { id: 'top-services', label: 'Top Service Reviews' },
  { id: 'techniques', label: 'Expert Techniques' },
  { id: 'rbi-protection', label: 'RBI Protections' },
  { id: 'selection-tips', label: 'Selection Tips' },
  { id: 'faqs', label: 'Expert FAQs' },
  { id: 'reviews', label: 'Success Stories' }
];

export default function EffectiveNegotiationClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobTocRef = useRef<HTMLDivElement>(null);

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
      { rootMargin: '-100px 0px -35% 0px', threshold: 0.1 }
    );
    const headings = document.querySelectorAll('h2[id], h3[id]');
    headings.forEach((heading) => observer.observe(heading));
    return () => headings.forEach((heading) => observer.unobserve(heading));
  }, []);

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive ? 'border-blue-600 text-blue-600 font-semibold' : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block py-1.5 px-3 rounded-lg transition-all ${
        isActive ? 'bg-blue-600 text-white font-semibold' : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'
      }`;
    }
  };

  return (
    <main className="font-sans text-[#0C2756] bg-white text-justify">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Find the Best Debt Settlement Services <br className="hidden md:block" />
            <span className="text-blue-300">for Effective Negotiation (2025)</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Stop the harassment and settle your debts for up to 75% less. A definitive guide to India's top-rated professional settlement services and expert negotiation tactics.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20find%20the%20best%20settlement%20service', '_blank')}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Consult an Expert Now
            </button>
          </div>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1440px] mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link href="/" className="inline-flex items-center hover:text-blue-600 transition-colors">Home</Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-4 h-4 text-gray-300 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="9 5l7 7-7 7" />
                  </svg>
                  <span className="font-medium text-gray-600">Effective Debt Settlement Services</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 py-8 lg:py-16">
        
        {/* Mobile TOC */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobTocRef}>
          <nav className="flex gap-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className={getLinkClass(link.id, true)}
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

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          
          {/* Left Column: TOC */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">Guide Outline</h3>
              <nav className="space-y-2 text-sm">
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`#${link.id}`}
                    className={getLinkClass(link.id, false)}
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

          {/* Middle Column: Main Content */}
          <main className="lg:w-2/4 xl:w-3/5 w-full">
            <article className="prose prose-lg max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
              
              <div id="introduction" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction: The Art and Law of Debt Negotiation in 2025</h2>
                <p className="text-gray-700 leading-relaxed">
                  In the rapidly evolving financial landscape of India in 2025, debt is no longer just a financial burden—it has become a complex legal and psychological challenge. As personal loan defaults reach record levels, the gap between being 'Stuck in Debt' and 'Finding Freedom' often narrows down to one single factor: the quality of negotiation. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  For many borrowers, the prospect of facing a bank manager or a persistent recovery agent is overwhelming. This is where professional debt settlement services step in. These entities are not just intermediaries; they are advocates who blend legal expertise with market intelligence to reach a 'Compromise Settlement' that benefits both the lender and the borrower. 
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  But how do you find the right service? In an industry where trust is everything, choosing a company that is legally sound, transparent, and effective is critical. This guide explores the top debt resolution firms in India and the expert techniques they use to secure massive waivers, while ensuring you stay protected under the latest RBI (Reserve Bank of India) guidelines.
                </p>
              </div>

              <div id="why-professional" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">1. Why Professional Negotiation Matters in 2025</h2>
                <p className="text-gray-700 leading-relaxed">
                  Negotiating with a multi-billion rupee bank is not a fair fight for an individual borrower. Banks have specialized recovery departments, legal teams, and data algorithms designed to maximize recovery. Professional services level the playing field by providing:
                </p>
                <div className="bg-blue-50 p-8 rounded-2xl my-8 border-l-4 border-blue-600">
                  <ul className="space-y-4 text-gray-800">
                    <li className="flex gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong>Market Intelligence:</strong> Experts know which banks are currently under pressure to reduce NPAs and are thus more likely to offer deeper discounts.</span>
                    </li>
                    <li className="flex gap-2">
                       <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong>Legal Protection:</strong> They understand the SARFAESI Act, the IBC, and the RBI's Fair Practice Code, preventing you from being bullied into bad deals.</span>
                    </li>
                    <li className="flex gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong>Credentialed Presence:</strong> A formal letter from a recognized debt management firm or a legal firm often carries more weight than a plea from a distressed individual.</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div id="top-services" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">2. Top-Rated Debt Settlement Services in India (2025 Reviews)</h2>
                <p className="text-gray-700 leading-relaxed mb-8">
                  After researching dozens of firms based on their success rates, transparency, and legal compliance, here are the top services recognized for effective negotiation in 2025:
                </p>
                
                <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-900">SingleDebt: The Veteran in Debt Management</h3>
                <p className="text-gray-700 leading-relaxed">
                  SingleDebt is often cited as India's first complete debt management company. They specialize in consolidating multiple loan EMIs into a single, affordable monthly payment. Their primary strength lies in their 'Debt Management Plan' (DMP) which prioritizes total repayment over long-term settlement, preserving the borrower's credit reputation as much as possible. 
                </p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: Best for borrowers who have multiple small debts and want a structured, legal way to exit the debt cycle without constant harassment."</div>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-900">FREED: The Consumer Advocacy Leader</h3>
                <p className="text-gray-700 leading-relaxed">
                  FREED has made a significant impact by focusing on loan settlement as a specialized product. They use a tech-driven approach to help consumers build a settlement fund and then use that capital to negotiate massive hair-cuts (up to 50% or more) with lenders. 
                </p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: Excellent for borrowers with large unsecured loans who have lost their source of income and need a definitive exit through legal settlement."</div>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-900">Debt Relief India (DRI): Meta-Verified Transparency</h3>
                <p className="text-gray-700 leading-relaxed">
                  DRI focuses on anti-harassment shield services and professional negotiation. They are known for their strong Pan-India legal support and their ability to handle aggressive recovery agents. 
                </p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: High trust factor for those facing severe psychological stress from collection calls and needing immediate legal intervention."</div>

                <h3 className="text-2xl font-semibold mt-10 mb-4 text-blue-900">AMA Legal Solutions: High-End Legal Representation</h3>
                <p className="text-gray-700 leading-relaxed">
                  When a debt becomes a complex legal matter involving court notices or high-value settlements, AMA Legal Solutions is the top choice. Being a full-service law firm, they provide a level of representation that purely tech companies cannot match. 
                </p>
                <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: The 'Gold Standard' for high-value personal loans and cases involving SARFAESI or Lok Adalat proceedings."</div>
              </div>

              <div id="techniques" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">3. Key Negotiation Techniques Used by Experts</h2>
                <p className="text-gray-700 leading-relaxed">
                  Expert negotiators don't just ask for a discount; they build a compelling case. Here are the techniques that achieve the highest success rates in 2025:
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4 underline decoration-blue-300">The Hardship Documentation (The Paper Shield)</h3>
                <p className="text-gray-700 leading-relaxed">
                  A bank will only settle if they believe you *cannot* pay, not just that you *don't want* to pay. Experts help you document job loss, medical records, or business closure. This 'Incapacity to Pay' is the legal foundation of every successful settlement. 
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4 underline decoration-blue-300">The Liquidity Argument</h3>
                <p className="text-gray-700 leading-relaxed">
                  Negotiators explain to the bank that a bird in the hand is worth two in the bush. They demonstrate that the borrower has a specific lump sum available *now* (often borrowed from relatives) which will disappear if a settlement is not agreed upon immediately. 
                </p>
              </div>

              <div id="rbi-protection" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">4. RBI Fair Practice Code and Your Protection</h2>
                <p className="text-gray-700 leading-relaxed">
                  The RBI's 2025 guidelines are very clear about how lenders must treat borrowers. Professional services leverage these rules to protect you:
                </p>
                <ul className="list-disc pl-8 mt-6 space-y-4 text-gray-700">
                  <li><strong>The 8 AM - 7 PM Window:</strong> No calls or visits outside these hours are permitted. Experts file immediate complaints if this is violated.</li>
                  <li><strong>Prohibition of Coercion:</strong> Banks cannot use muscle power or psychological shaming. Professional firms record these violations to gain leverage during settlement talks.</li>
                  <li><strong>Transparency in Dues:</strong> Banks must provide a clear breakup of principal and interest. Experts ensure that illegal penalties and hidden charges are stripped away during the negotiation.</li>
                </ul>
              </div>

              <div id="selection-tips" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">5. Checklist for Choosing a Debt Settlement Service</h2>
                <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 italic underline decoration-blue-500">Don't Get Scammed! Check This First:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-light">
                    <div className="space-y-2">
                      <p className="font-bold text-blue-400">DO CHECK:</p>
                      <p>✓ Physical office presence in major cities.</p>
                      <p>✓ Genuine Google and Trustpilot reviews.</p>
                      <p>✓ Transparent fee structure before signing.</p>
                      <p>✓ Direct access to legal advisors/advocates.</p>
                    </div>
                    <div className="space-y-2">
                       <p className="font-bold text-red-400">AVOID IF:</p>
                      <p>✗ They promise to 'delete' your debt from CIBIL.</p>
                      <p>✗ They ask for 100% fees upfront.</p>
                      <p>✗ They encourage you to hide from the law.</p>
                      <p>✗ They don't provide a written contract.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div id="faqs" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Expert FAQs on Negotiation Services</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="reviews" className="mt-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Real Success Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {reviews.map((review, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                      <div className="flex text-yellow-400 mb-3">
                        {[...Array(review.rating)].map((_, i) => <FontAwesomeIcon key={i} icon={faStar} className="w-4 h-4" />)}
                      </div>
                      <p className="text-gray-700 italic mb-4 leading-relaxed font-light text-sm">"{review.text}"</p>
                      <div className="flex justify-between items-center text-xs font-bold text-blue-900 uppercase tracking-wider">
                        <span>{review.name}</span>
                        <span className="opacity-60">{review.location}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-10 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Take the First Step to Financial Freedom</h3>
                <p className="text-blue-800 mb-8 max-w-2xl mx-auto">Don't navigate the complex world of debt settlement alone. Let our expert negotiators and legal advisors handle the banks for you, ensuring the best possible terms and total protection from harassment.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                    onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20need%20professional%20debt%20negotiation%20help', '_blank')}
                    className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md transform hover:scale-105"
                  >
                    Start Your Free Consultation
                  </button>
                </div>
              </div>

            </article>
          </main>

          {/* Right Column: CTA & Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="space-y-6">
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Effective Negotiation?</h4>
                <p className="text-sm text-gray-600 mb-6">Learn how professional mediators can settle your debt for 50-75% less and stop collection harassment today.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=Help%20me%20negotiate%20my%20loan', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Hire a Professional
                </button>
              </div>

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Related Expertise</h4>
                <nav className="space-y-3">
                  <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Master Settlement Guide</span>
                  </Link>
                  <Link href="/what-are-the-income-tax-implications-of-a-settled-debt-amount" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Tax on Settlements</span>
                  </Link>
                  <Link href="/what-documents-are-required-for-loan-settlement-with-a-professional-service" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Documents Checklist</span>
                  </Link>
                  <Link href="/compare-features-of-loan-settlement-services-offered-by-major-financial-apps" className="flex group items-start">
                    <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                    <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Compare Settlement Apps</span>
                  </Link>
                </nav>
              </div>

            </div>
          </aside>
        </div>
      </div>

      <Footer />
      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        h2, h3 { scroll-margin-top: 80px; }
      `}</style>
    </main>
  );
}
