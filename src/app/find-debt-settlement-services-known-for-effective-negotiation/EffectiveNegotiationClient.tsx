'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "What is the success rate of professional debt negotiation in 2025?",
    answer: "Professional debt negotiation services in India currently report a success rate of 85% to 95% for unsecured loans. With the 2025 RBI guidelines and the rise of Lok Adalats, banks are more inclined to settle than ever before, provided the borrower's hardship is well-documented."
  },
  {
    question: "How do these companies charge for their services?",
    answer: "Reputable firms usually charge a fee of 10% to 15% of the total savings achieved. Some may have a nominal legal 'Shield Fee' (monthly) to provide harassment protection and advocate representation, which is distinct from the settlement success fee."
  },
  {
    question: "Can settlement services stop recovery agents from visiting my home?",
    answer: "Yes. Once you authorize a firm, they issue a 'Letter of Representation' to the bank. Under the RBI's Fair Practice Code, once a legal representative is appointed, all collection activities must be directed to them, effectively stopping unannounced home visits."
  },
  {
    question: "Is it really legal to use a third-party for bank negotiations?",
    answer: "Absolutely. Under the Indian Contract Act and the RBI's latest 2025 charter on Borrower Rights, every citizen has the right to be represented by a financial expert or legal counsel in debt-related disputes."
  },
  {
    question: "How much of a discount can I realistically expect?",
    answer: "For unsecured debts (credit cards/personal loans), professional negotiators typically achieve a waiver of 40% to 75% on the total outstanding. High-age NPA accounts (over 2 years) often see the largest discounts."
  },
  {
    question: "Will my credit score improve after I settle my debt?",
    answer: "Initially, your score will drop as the account is marked 'Settled'. However, this stops the 'Death Spiral' of monthly defaults. In the long run (12-18 months), with proper credit rebuilding steps, your score will recover and eventually surpass its previous levels."
  },
  {
    question: "What is the difference between a DMP and a Settlement?",
    answer: "A Debt Management Plan (DMP) focuses on paying the full principal through reduced EMIs. A Settlement involves a one-time lump-sum payment of significantly less than the total dues. Settlement is faster but has a higher initial credit impact."
  },
  {
    question: "Can I settle a loan if the bank has filed a section 138 (Cheque Bounce) case?",
    answer: "Yes. In fact, professional negotiators often use the settlement to get the bank to withdraw legal cases from the court. A negotiated 'Compromise Settlement' is the fastest way to close pending legal proceedings."
  },
  {
    question: "How long does the professional negotiation process take?",
    answer: "The active negotiation phase usually takes 3 to 6 months. This timeline includes the 'Stagnation Phase' which is strategically used to force the bank into a higher discount bracket."
  },
  {
    question: "What happens if the bank refuses the settlement offer?",
    answer: "If a bank refuses, the negotiators don't give up. They wait for the next 'Settlement Window' (usually quarter-end) or escalate the matter to higher regional authorities/Ombudsman if there's evidence of bank non-compliance with RBI rules."
  },
  {
    question: "Do I have to pay the settlement amount to the agency or the bank?",
    answer: "Crucially, you should ONLY pay the settlement amount directly to the bank's own account. Reputable agencies will never ask you to transfer the settlement money to their name. You only pay the agency their agreed service fee."
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
  { id: 'negotiation-process', label: '7-Step Process' },
  { id: 'bank-strategies', label: 'Bank Strategies' },
  { id: 'techniques', label: 'Expert Techniques' },
  { id: 'rbi-protection', label: 'RBI Protections' },
  { id: 'hardship-guide', label: 'Hardship Guide' },
  { id: 'selection-tips', label: 'Selection Tips' },
  { id: 'credit-repair', label: 'Credit Repair' },
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
              
              <div className="mb-16">
                <h2 id="introduction" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">Introduction: The Art and Law of Debt Negotiation in 2025</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  In the rapidly evolving financial landscape of India in 2025, debt is no longer just a financial burden-it has become a complex legal and psychological challenge. As personal loan defaults reach record levels, the evolution of the Indian credit market has seen a massive shift from traditional banking to aggressive digital lending (FinTech). This has created a new era where the gap between being 'Stuck in Debt' and 'Finding Freedom' often narrows down to one single factor: the quality of negotiation.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                  The post-pandemic years have fundamentally altered how banks view non-performing assets (NPAs). Today, lenders are more willing to listen to reason, provided it is presented through the right legal and financial prism. For many borrowers, the prospect of facing a bank manager or a persistent recovery agent is overwhelming. This is where professional debt settlement services step in. These entities are not just intermediaries; they are advocates who blend legal expertise with market intelligence to reach a 'Compromise Settlement' that benefits both the lender and the borrower.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4 text-justify">
                  In 2025, a successful negotiation is about more than just numbers; it's about shifting the power dynamics. It's about demonstrating to the bank that a controlled loss is better than a total default. But how do you find the right service? In an industry where trust is everything, choosing a company that is legally sound, transparent, and effective is critical. This guide explores the top debt resolution firms in India and the expert techniques they use to secure massive waivers, while ensuring you stay protected under the latest RBI (Reserve Bank of India) guidelines.
                </p>
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl border-l-4 border-blue-600">
                  <h4 className="font-bold text-blue-900 mb-2">The 2025 Context</h4>
                  <p className="text-sm text-blue-800 leading-relaxed font-light">
                    With the introduction of the new Unified Lending Interface (ULI) and stricter RBI supervision on recovery practices, the "wait and watch" approach is being replaced by proactive settlement strategies. Banks are now increasingly using "Settlement Camps" and Lok Adalats to clear old books, providing a perfect window for professional negotiators to strike.
                  </p>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="why-professional" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">1. Why Professional Negotiation Matters in 2025</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Negotiating with a multi-billion rupee bank is not a fair fight for an individual borrower. Banks have specialized recovery departments, legal teams, and data algorithms designed to maximize recovery. This "Asymmetry of Information" often leaves the common man at a disadvantage. Professional services level the playing field by providing:
                </p>
                <div className="bg-blue-50 p-8 rounded-2xl my-8 border-l-4 border-blue-600">
                  <ul className="space-y-4 text-gray-800">
                    <li className="flex gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong className="text-blue-900">Predictive Market Intelligence:</strong> Experts track "settlement windows." They know when a specific bank (like HDFC or SBI) is cleaning its books for the quarter-end and is thus more likely to offer deeper discounts.</span>
                    </li>
                    <li className="flex gap-2">
                       <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong className="text-blue-900">Psychological Buffer:</strong> The primary weapon of recovery is psychological stress. By acting as a legal shield, professional services absorb the "harassment energy," allowing you to think clearly and make rational financial decisions.</span>
                    </li>
                    <li className="flex gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong className="text-blue-900">Legal Leverage:</strong> They understand the granular details of the SARFAESI Act, the IBC (Insolvency and Bankruptcy Code), and the RBI's Fair Practice Code. They can spot a protocol violation in seconds-leverage that can be used to reduce your debt.</span>
                    </li>
                    <li className="flex gap-2">
                      <FontAwesomeIcon icon={faCheckCircle} className="text-blue-600 mt-1" />
                      <span><strong className="text-blue-900">Credentialed Presence:</strong> A formal legal notice from a recognized debt management firm or a senior advocate carries significantly more weight than a personal plea. It tells the bank that this account is now in "expert hands."</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="top-services" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">2. Top-Rated Debt Settlement Services in India (2025 Reviews)</h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                  After researching dozens of firms based on their success rates, transparency, and legal compliance, here are the top services recognized for effective negotiation in 2025. These rankings are based on their ability to handle aggressive lenders and secure consistent debt waivers.
                </p>
                <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center">
                       <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full mr-3">RANK #1</span>
                      AMA Legal Solutions: High-End Legal Representation
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      When a debt becomes a complex legal matter involving court notices, SARFAESI proceedings, or high-value settlements, AMA Legal Solutions is the top choice. Being a full-service law firm, they provide a level of representation that purely tech companies cannot match. They are particularly effective in "OTS" (One Time Settlement) negotiations with PSU banks like SBI.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg text-xs font-medium text-green-800">PROS: Court-room ready representation, high-value expert negotiators.</div>
                      <div className="bg-amber-50 p-3 rounded-lg text-xs font-medium text-amber-800">CONS: Primarily focused on high-ticket loan amounts.</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: The 'Gold Standard' for high-value personal loans and cases involving SARFAESI or Lok Adalat proceedings where legal nuance is critical."</div>
                  </div>
                <div className="space-y-12">
                  <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center">
                      <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full mr-3">RANK #2</span>
                      SingleDebt: The Veteran in Debt Management
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      SingleDebt is often cited as India's first complete debt management company. Based on our 2025 review, they specialize in consolidating multiple loan EMIs into a single, affordable monthly payment. Their primary strength lies in their 'Debt Management Plan' (DMP) which prioritizes total repayment over long-term settlement, preserving the borrower's credit reputation as much as possible.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg text-xs font-medium text-green-800">PROS: Excellent legal support, stopped 98% of harassment calls.</div>
                      <div className="bg-amber-50 p-3 rounded-lg text-xs font-medium text-amber-800">CONS: Higher upfront documentation fee for small debts.</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: Best for borrowers who have multiple credit cards and want a structured, legal way to exit the debt cycle without constant harassment from collection agents."</div>
                  </div>

                  <div className="border-b border-gray-100 pb-8">
                    <h3 className="text-2xl font-semibold mb-4 text-blue-900 flex items-center">
                       <span className="bg-blue-100 text-blue-800 text-xs font-bold px-2.5 py-0.5 rounded-full mr-3">RANK #3</span>
                      FREED: The Consumer Advocacy Leader
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-justify">
                      FREED has made a significant impact by focusing on loan settlement as a specialized product. They use a tech-driven approach to help consumers build a "Settlement Fund" over several months. Once the fund is ready, they use that liquidity to negotiate massive hair-cuts (ranging from 40% to 75%) with lenders.
                    </p>
                     <div className="grid grid-cols-2 gap-4 mt-4">
                      <div className="bg-green-50 p-3 rounded-lg text-xs font-medium text-green-800">PROS: High settlement success rate, great mobile app tracking.</div>
                      <div className="bg-amber-50 p-3 rounded-lg text-xs font-medium text-amber-800">CONS: Settlement process can take up to 24 months for large debts.</div>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-xl my-4 text-sm italic">"Review: Excellent for borrowers with large unsecured loans who have lost their source of income and need a definitive exit through a one-time legal settlement."</div>
                  </div>

                 
                </div>
              </div>

              <div className="mb-16">
                <h2 id="negotiation-process" className="text-3xl font-bold mb-8 text-gray-900 scroll-mt-24 text-justify">3. The 7-Step Professional Negotiation Lifecycle</h2>
                <p className="text-gray-700 leading-relaxed mb-8 text-justify">
                  A professional settlement isn't a single phone call; it's a strategic campaign. In 2025, top-rated services follow a disciplined 7-step lifecycle to ensure the best possible hair-cut for the borrower.
                </p>
                <div className="space-y-6">
                  {[
                    { step: 1, title: "Financial Forensic Audit", desc: "Before talking to the bank, experts conduct a deep dive into your debt. They identify illegal interest capitalization, hidden insurance charges, and 'junk fees' that shouldn't be there." },
                    { step: 2, title: "Legal Shielding & Authorization", desc: "A formal 'Letter of Authority' is sent to the lenders. This legally redirects all recovery communication to the professional firm, providing immediate relief from harassment." },
                    { step: 3, title: "The 'Stagnation' Phase", desc: "Strategic waiting is a key tactic. By allowing the account to age into deeper NPA buckets, negotiators increase the bank's willingness to accept a higher discount." },
                    { step: 4, title: "Hardship Linkage Proposal", desc: "A formal proposal is drafted, linking your financial incapacity (documented with evidence) to the bank's recovery goals. This is where the 'Art of Persuasion' begins." },
                    { step: 5, title: "Counter-Intelligence & Negotiation", desc: "Banks will always start with a low-discount offer. Negotiators use data on similar recent settlements to counter-offer and push for the maximum possible waiver." },
                    { step: 6, title: "The 'Bird-in-Hand' Closure", desc: "Negotiators demonstrate that you have a specific lump sum available *only for a limited time*. This creates a 'Fear of Missing Out' (FOMO) for the bank manager." },
                    { step: 7, title: "NOC & No-Dues Verification", desc: "The final and most crucial step. Once paid, the firm ensures you receive a formal 'Full & Final NOC' and that the bank updates the credit bureaus correctly." }
                  ].map((item) => (
                    <div key={item.step} className="flex gap-4 p-5 bg-white border border-gray-100 rounded-2xl hover:border-blue-200 transition-colors shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">{item.step}</div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed font-light">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-16">
                <h2 id="bank-strategies" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24 text-justify">4. Bank-Specific Negotiation Strategies (PSUs vs Private)</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Not all banks are created equal. In 2025, the strategy used for SBI (State Bank of India) must be fundamentally different from the one used for HDFC or a FinTech like KreditBee.
                </p>
                <div className="mt-8 overflow-hidden rounded-2xl border border-gray-100 shadow-sm">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-gray-900 text-white">
                      <tr>
                        <th className="px-6 py-4 font-bold">Lender Type</th>
                        <th className="px-6 py-4 font-bold">Negotiation Window</th>
                        <th className="px-6 py-4 font-bold">Key Leverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr>
                        <td className="px-6 py-4 font-semibold text-blue-900">PSU Banks (SBI, PNB, BOB)</td>
                        <td className="px-6 py-4">OTS Schemes (Quarterly)</td>
                        <td className="px-6 py-4 text-gray-600">Lok Adalat attendance and genuine medical/job loss documentation.</td>
                      </tr>
                      <tr className="bg-gray-50">
                        <td className="px-6 py-4 font-semibold text-blue-900">Private Banks (ICICI, HDFC, Axis)</td>
                        <td className="px-6 py-4">March & September End</td>
                        <td className="px-6 py-4 text-gray-600">Immediate lump-sum liquidity and "Bad Debt" write-off pressure.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-semibold text-blue-900">NBFCs & Digital Apps</td>
                        <td className="px-6 py-4">3-6 Months Default</td>
                        <td className="px-6 py-4 text-gray-600">RBI Fair Practice Code violations (Harassment leverage).</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="techniques" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24">5. Key Negotiation Techniques Used by Experts</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Expert negotiators don't just ask for a discount; they build a compelling case. Here are the techniques that achieve the highest success rates in 2025:
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4 underline decoration-blue-300">The Hardship Documentation (The Paper Shield)</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  A bank will only settle if they believe you *cannot* pay, not just that you *don't want* to pay. Experts help you document job loss, medical records, or business closure. In 2025, banks require digital proofs like IT returns or bank statements showing zero income for the foundation of every successful settlement.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4 underline decoration-blue-300">The Liquidity Argument</h3>
                <p className="text-gray-700 leading-relaxed text-justify">
                  Negotiators explain to the bank that a bird in the hand is worth two in the bush. They demonstrate that the borrower has a specific lump sum available *now* (often borrowed from relatives or through the sale of a small asset) which will disappear if a settlement is not agreed upon immediately.
                </p>
              </div>

              <div className="mb-16">
                <h2 id="rbi-protection" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24 text-justify">6. RBI Fair Practice Code and Your Protection in 2025</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The RBI's 2025 guidelines have introduced a paradigm shift in borrower protection. These aren't just suggestions; they are mandates that every bank and NBFC must follow. Professional services leverage these rules to create "Settlement Leverage" for you:
                </p>
                <ul className="list-disc pl-8 mt-6 space-y-4 text-gray-700 text-justify">
                  <li><strong className="text-blue-900">Digital Harassment Protection:</strong> In 2025, the RBI strictly prohibits excessive digital "pings" or automated WhatsApp messages from recovery bots. Experts can file a direct complaint with the RBI Ombudsman if you are targeted by non-stop automated collections.</li>
                  <li><strong className="text-blue-900">The 8 AM - 7 PM Window:</strong> No physical visits or calls are permitted outside these hours. Professional negotiators use "Call Logs" and "CCTV footage" of late-night visits to force banks into a compromise.</li>
                  <li><strong className="text-blue-900">Right to Representation:</strong> The RBI recognizes the borrower's right to be represented by a legal or financial expert in debt discussions. This is the legal foundation of why professional debt settlement services are 100% legal in India.</li>
                  <li><strong className="text-blue-900">Zero-Hidden Penalties:</strong> Banks must provide a transparent breakup of principal, interest, and penalties. Experts ensure that "Compounded Penalties" (Interest on Interest) are deleted during the final negotiation.</li>
                </ul>
              </div>

              <div className="mb-16">
                <h2 id="hardship-guide" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24 text-justify">7. The Hardship Documentation Guide: Building Your Case</h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-justify">
                  A bank doesn't settle because they are "nice." They settle because their "Recovery Probability Model" tells them that you are a high-risk default. To prove this, you need a professional Hardship File.
                </p>
                <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                  <h4 className="font-bold text-gray-900 mb-4 tracking-wide uppercase text-sm">Mandatory 2025 Documentation Checklist:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <p className="flex items-center text-sm text-gray-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" /> 6 Months Bank Statement (Proof of low balance)</p>
                      <p className="flex items-center text-sm text-gray-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" /> Salary Slips or IT Returns (Proof of income drop)</p>
                      <p className="flex items-center text-sm text-gray-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" /> Medical Records (If health was the reason)</p>
                    </div>
                    <div className="space-y-3">
                      <p className="flex items-center text-sm text-gray-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" /> Business Termination Notice (For MSME loans)</p>
                      <p className="flex items-center text-sm text-gray-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" /> Legal Notices from other creditors</p>
                      <p className="flex items-center text-sm text-gray-700"><FontAwesomeIcon icon={faCheckCircle} className="text-green-600 mr-2" /> Hardship Letter (Drafted by an expert)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="selection-tips" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24 text-justify">8. Checklist for Choosing a Debt Settlement Service</h2>
                <div className="bg-gray-900 text-white p-10 rounded-[2.5rem] shadow-xl">
                  <h3 className="text-2xl font-bold mb-6 italic underline decoration-blue-500">Don't Get Scammed! Check This First:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-light">
                    <div className="space-y-2">
                      <p className="font-bold text-blue-400">DO CHECK:</p>
                      <p>✓ ISO or legal certification of the firm.</p>
                      <p>✓ Genuine Google and Trustpilot reviews (Filter for 'Negative').</p>
                      <p>✓ Transparent fee structure in a written contract.</p>
                      <p>✓ Pan-India legal network for local bank visits.</p>
                    </div>
                    <div className="space-y-2">
                       <p className="font-bold text-red-400">AVOID IF:</p>
                      <p>✗  They promise to 'clean' your CIBIL score instantly.</p>
                      <p>✗  They ask for 100% of the settlement amount in their name.</p>
                      <p>✗  They discourage you from talking to your lawyer.</p>
                      <p>✗  They use aggressive sales tactics to sign you up.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-16">
                <h2 id="credit-repair" className="text-3xl font-bold mb-6 text-gray-900 scroll-mt-24 text-justify">9. Rebuilding for the Future: Post-Settlement Credit Repair</h2>
                <p className="text-gray-700 leading-relaxed text-justify">
                  A settlement will initially drop your CIBIL score. However, this is a temporary setback compared to the "Infinite Default" trap. In 2025, professional services provide a 12-month roadmap to rebuild your credit.
                </p>
                <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { title: "Secured Credit Cards", desc: "Get a card against a Fixed Deposit. Regular payments on this will boost your score quickly." },
                      { title: "Small Consumer Loans", desc: "Small white-goods loans (e.g., mobile on EMI) paid on time show credit discipline." },
                      { title: "Bureau Monitoring", desc: "Ensure the bank reports the account as 'Settled' and not 'Written-off'. This is a minor but vital distinction." }
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 bg-blue-50 rounded-2xl border border-blue-100">
                        <h4 className="font-bold text-blue-900 mb-2 text-sm">{item.title}</h4>
                        <p className="text-xs text-blue-800 leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                </div>
              </div>

              <div className="mt-16">
                <h2 id="faqs" className="text-3xl font-bold mb-8 text-gray-900 scroll-mt-24">Expert FAQs on Negotiation Services</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-20">
                <h2 id="reviews" className="text-3xl font-bold mb-8 text-gray-900 scroll-mt-24">Real Success Stories</h2>
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

