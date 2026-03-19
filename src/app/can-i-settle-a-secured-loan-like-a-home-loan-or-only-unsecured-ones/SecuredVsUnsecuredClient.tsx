'use client';

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faStar, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const faqData = [
  {
    question: "Is it easier to settle a personal loan or a home loan?",
    answer: "It is much easier to settle a personal loan because there is no collateral for the bank to fall back on. Home loan settlements require more documentation and the waivers are usually smaller."
  },
  {
    question: "Can the bank take my house without going to court?",
    answer: "Yes, under the SARFAESI Act 2002, if you have defaulted and the loan is an NPA, the bank can take possession and auction the property after following the notice procedure, without needing a court order."
  },
  {
    question: "What is the minimum percentage a bank accepts for a home loan settlement?",
    answer: "There is no fixed minimum, but generally, banks look for at least the Principal Amount plus a portion of the interest. In extreme cases of property depreciation, they might accept 70% to 80% of the total outstanding."
  },
  {
    question: "Does the SARFAESI Act apply to agricultural land?",
    answer: "No. Section 31(i) of the SARFAESI Act explicitly excludes agricultural land from being seized. This gives farmers much more leverage in debt negotiations compared to urban home buyers."
  },
  {
    question: "Can I settle a car loan after the repo man has taken the car?",
    answer: "Yes, but you must act quickly before the car is auctioned. You can negotiate an OTS to get the car back, but the bank will include the towing and yard charges in the amount."
  },
  {
    question: "Will a settlement remove the NPA status from my records?",
    answer: "The account will be closed in the bank's books, but in your CIBIL report, it will be marked as Settled. This is better than an Active Default but still impacts your ability to get future loans for several years."
  },
  {
    question: "What happens if the auction fails to find a buyer?",
    answer: "If the auction fails (no bidders), the bank's bargaining power decreases. They might then be more willing to accept a lower settlement offer from the borrower because they don't want to hold onto a Dead Asset."
  },
  {
    question: "Can I use specialized apps for a secured loan settlement?",
    answer: "Yes, specialized apps and legal service providers can help you draft replies to SARFAESI notices and identify procedural errors that give you leverage for a better settlement."
  },
  {
    question: "Is a 50% waiver possible on a home loan?",
    answer: "It is extremely rare. It only happens if the property value has crashed significantly below the loan amount or if there is a severe legal defect in the property titles that makes it impossible for the bank to auction it."
  },
  {
    question: "How long does a secured loan settlement take?",
    answer: "From the first proposal to the final No Dues Certificate, it usually takes 3 to 6 months. This allows for valuations, committee approvals, and the payment window."
  }
];

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "I was terrified of the SARFAESI notice on my flat. CredSettle helped me understand the 13(2) timeline and managed to negotiate a 25% waiver with my bank. We saved our family home."
  },
  {
    name: "Anjali Gupta",
    location: "Delhi",
    rating: 5,
    text: "Settling a car loan after it was repossessed seemed impossible. The team worked with the bank to waive off the extra yard charges and settled the balance for a reasonable amount. Highly professional."
  },
  {
    name: "Suresh Menon",
    location: "Bangalore",
    rating: 4,
    text: "Very knowledgeable about the OTS policies of PSUs. They identified a technical error in the bank's valuation which gave us the upper hand in the settlement negotiation."
  },
  {
    name: "Meera Deshmukh",
    location: "Pune",
    rating: 5,
    text: "Transparent and honest. They told me upfront that secured loans get lower discounts than credit cards, but their help with the legal documentation was worth every rupee."
  }
];

const navLinks = [
  { id: 'intro', label: 'Myth of Unsettlable Loan' },
  { id: 'unsecured-vs-secured', label: 'Comparing Ground' },
  { id: 'sarfaesi-act', label: 'SARFAESI Framework' },
  { id: 'why-settle', label: 'Why Banks Settle' },
  { id: 'strategy', label: 'Settlement Strategy' },
  { id: 'ots-scheme', label: 'OTS Schemes' },
  { id: 'comparison', label: 'Comparison Table' },
  { id: 'faqs', label: 'Expert FAQs' }
];

export default function SecuredVsUnsecuredClient() {
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

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="font-sans text-[#0C2756] bg-white">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-20 px-4 md:px-8 overflow-hidden flex items-center justify-center min-h-[50vh]"
        style={{ background: 'radial-gradient(136.19% 254.89% at -1.53% 10.35%, #2F6CE2 0%, #001235 100%)' }}
      >
        <div className="max-w-6xl mx-auto text-center z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
            Can I Settle a Secured Loan Like a Home Loan, <br className="hidden md:block" />
            <span className="text-blue-300">or Only Unsecured Ones?</span>
          </h1>
          <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto font-light leading-relaxed">
            Shattering the myths of debt resolution in 2025. A comprehensive look at SARFAESI Act, OTS schemes, and how to protect your assets while seeking a waiver.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <button 
              onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20want%20to%20settle%20my%20loan', '_blank')}
              className="bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-opacity-90 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
            >
              Get Free Consultation
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
                  <span className="font-medium text-gray-600">Secured vs Unsecured Loan Settlement</span>
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
              <div id="intro" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Introduction: The Myth of the Unsettlable Loan</h2>
                <p className="text-gray-700 leading-relaxed">
                  In the world of Indian debt management, a common misconception prevails: that only unsecured debts like credit cards and personal loans can be settled. Many borrowers believe that once a Security (like a house or a car) is involved, the bank will never agree to a discount. They assume the only path is either full repayment or the eventual seizure and auction of the property.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  As we enter 2025, this black and white view of the financial landscape is no longer accurate. While it is true that settling a secured loan is significantly more complex and follows a different legal playbook, it is absolutely possible. The process is governed by the SARFAESI Act, 2002, and depends heavily on the Liquidity of the asset and the Audacity of the negotiation.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  This deep dive will shatter the myths and provide you with a strategic roadmap. We will explain why banks settle secured debts, how the SARFAESI legal timeline creates opportunities for negotiation, and why a One Time Settlement (OTS) might be a better option for both you and the bank than an aggressive auction.
                </p>
              </div>

              <div id="unsecured-vs-secured" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Section 1: Defining the Battleground - Secured vs. Unsecured Debt</h2>
                <p className="text-gray-700 leading-relaxed">
                  To understand why settlement is possible for a home loan, we must first understand the fundamental differences in how banks view their risk.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Unsecured Debt: The Nothing to Lose Scenario</h3>
                <p className="text-gray-700 leading-relaxed">
                  For a credit card or a personal loan, the bank has no collateral. If you stop paying, the bank has to go through a long, expensive court process (civil suit) to get a decree against you. Because recovery is uncertain and costly, banks are often willing to accept 20% to 30% of the total outstanding amount just to get something rather than nothing.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">Secured Debt: The Collateral Comfort</h3>
                <p className="text-gray-700 leading-relaxed">
                  For a home loan or a car loan, the bank is in a position of strength. They hold the Title Deeds or the Registration Papers. Under the SARFAESI Act, they don't even need a court's permission to take over the property if you default. They can simply issue a notice, take possession, and auction it off. Because of this, the waiver (discount) on a secured loan is much lower, typically ranging from 10% to 35%, rarely exceeding 40% unless the property is practically unsellable.
                </p>
              </div>

              <div id="sarfaesi-act" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Section 2: The Legal Framework - SARFAESI Act 2002</h2>
                <p className="text-gray-700 leading-relaxed font-medium text-blue-900 bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                  The Securitisation and Reconstruction of Financial Assets and Enforcement of Security Interest (SARFAESI) Act is the primary law governing secured debt recovery in India. Understanding its timeline is crucial because the best time to settle is often between the legal notices.
                </p>
                <h3 className="text-2xl font-semibold mt-8 mb-4">The Default and the 13(2) Notice</h3>
                <p className="text-gray-700 leading-relaxed">
                  When you miss three consecutive EMIs, your loan becomes a Non Performing Asset (NPA). The bank then issues a notice under Section 13(2). This is a 60 Day Demand Notice. It tells you that you have 60 days to pay the entire outstanding amount or the bank will exercise its right to take the property.
                </p>
              </div>

              <div id="why-settle" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Section 3: Why Would a Bank Settle a Home Loan?</h2>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">•</span>
                    <div><strong>The Cost of Time:</strong> Recovering money through an auction can take 1 to 3 years if the borrower moves the Debt Recovery Tribunal (DRT). Banks prefer cash today.</div>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-blue-600">•</span>
                    <div><strong>The Distress Value Trap:</strong> Assets sold in bank auctions rarely fetch the Market Value. They usually sell at the Distress Value.</div>
                  </li>
                </ul>
              </div>

              <div id="strategy" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Section 4: Settlement Strategy for Secured Loans</h2>
                <p className="text-gray-700 leading-relaxed">
                  Negotiating a home loan settlement is not about asking for mercy. It is about presenting a Better Business Alternative to the bank.
                </p>
              </div>

              <div id="ots-scheme" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Section 5: The One Time Settlement (OTS) Scheme</h2>
                <p className="text-gray-700 leading-relaxed">
                  Most public sector banks (SBI, PNB, BOB) have periodic OTS Schemes approved by their Board of Directors. These schemes have fixed formulas for discounts based on NPA age.
                </p>
              </div>

              <div id="comparison" className="mb-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-6 text-gray-900">Section 6: Comparison Table</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-200 text-sm">
                    <thead className="bg-gray-100 uppercase text-xs font-bold text-gray-600">
                      <tr>
                        <th className="border border-gray-200 p-4 text-left">Feature</th>
                        <th className="border border-gray-200 p-4 text-left">Unsecured</th>
                        <th className="border border-gray-200 p-4 text-left">Secured</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-200 p-4 font-bold">Typical Waiver</td>
                        <td className="border border-gray-200 p-4">50% to 80%</td>
                        <td className="border border-gray-200 p-4">10% to 35%</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-200 p-4 font-bold">Governing Law</td>
                        <td className="border border-gray-200 p-4">Indian Contract Act</td>
                        <td className="border border-gray-200 p-4">SARFAESI Act 2002</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div id="faqs" className="mt-16 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Expert FAQs</h2>
                <div className="space-y-6">
                  {faqData.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 pb-4 last:border-0 hover:bg-gray-50 transition-colors p-2 rounded-lg">
                      <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.question}</h3>
                      <p className="text-gray-600 leading-relaxed font-light">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-8 bg-blue-50 rounded-3xl border border-blue-100 text-center">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">Need Help Settling a Secured Loan?</h3>
                <p className="text-blue-800 mb-6">Don't let the legal notices overwhelm you. Our legal team can help you negotiate a fair settlement and protect your property.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20want%20to%20settle%20my%20loan', '_blank')}
                  className="inline-block bg-blue-600 text-white font-bold py-4 px-10 rounded-full hover:bg-blue-700 transition-all shadow-md"
                >
                  Message on WhatsApp
                </button>
              </div>

              {/* Reviews Section */}
              <div id="reviews" className="mt-20 scroll-mt-24">
                <h2 className="text-3xl font-bold mb-8 text-gray-900">Client Success Stories</h2>
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
            </article>
          </main>

          {/* Right Column: CTA & Resources */}
          <aside className="lg:w-1/4 xl:w-1/5 hidden lg:block sticky top-14">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100 text-center">
                <h4 className="font-bold text-xl text-gray-900 mb-2">Start Resolution</h4>
                <p className="text-sm text-gray-600 mb-6">Facing a SARFAESI notice? Get professional help today to negotiate the best OTS terms.</p>
                <button 
                  onClick={() => window.open('https://api.whatsapp.com/send?phone=919540003295&text=I%20want%20to%20settle%20my%20loan', '_blank')}
                  className="block w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-xl hover:bg-blue-700 transition-colors shadow-md text-center"
                >
                  Start Consultation
                </button>
              </div>

                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm">
                  <h4 className="font-bold text-gray-900 mb-4 border-b pb-2">Must Read Pieces</h4>
                  <nav className="space-y-3">
                    <Link href="/is-loan-settlement-a-good-option-for-borrowers" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Is Settlement Good?</span>
                    </Link>
                    <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">CIBIL Score Impact</span>
                    </Link>
                    <Link href="/will-banks-blacklist-you-after-loan-settlement" className="flex group items-start">
                      <span className="text-blue-600 mr-2 group-hover:translate-x-1 transition-transform">→</span>
                      <span className="text-[13px] text-gray-600 font-medium group-hover:text-blue-600 transition-colors leading-tight">Blacklisting Myths</span>
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
