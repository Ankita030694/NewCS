"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FaWhatsapp, FaLinkedin, FaTwitter, FaChevronRight } from "react-line-icons";

export default function Settle15LakhClient() {
  const [activeSection, setActiveSection] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const sections = [
    { id: "can-i-settle", title: "Can I Settle a ₹15 Lakh Personal Loan?" },
    { id: "how-much-to-settle", title: "How Much to Settle a 15 Lakh Loan?" },
    { id: "negotiation-timeline", title: "Negotiation Timeline" },
    { id: "legal-steps", title: "Legal Steps & RBI Guidelines" },
    { id: "credit-score", title: "Impact on Credit Score" },
    { id: "alternatives", title: "Alternatives to Consider" },
  ];

  // Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      if (!contentRef.current) return;
      const headings = contentRef.current.querySelectorAll("h2");
      let currentSectionId = "";

      for (let i = 0; i < headings.length; i++) {
        const heading = headings[i];
        if (heading.getBoundingClientRect().top <= 120) {
          currentSectionId = heading.id;
        } else {
          break;
        }
      }

      if (currentSectionId) {
        setActiveSection(currentSectionId);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on load
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const shareUrl = "https://www.credsettle.com/settle-15-lakh-personal-loan/";
  const shareTitle = "How to Settle a ₹15 Lakh Personal Loan in India";

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-indigo-800 text-white py-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 tracking-tight">
            How to Settle a ₹15 Lakh Personal Loan in India
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mb-10 font-light">
            Defaulting on a high-value loan? Discover the exact settlement waivers you can negotiate, legal protections available, and a step-by-step roadmap to becoming debt-free.
          </p>
          <a href="#calculate" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
            Calculate Your ₹15 Lakh Settlement Waiver
          </a>
        </div>
      </section>

      {/* Breadcrumbs */}
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex text-sm text-gray-500 font-medium" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/personal-loan-settlement" className="hover:text-blue-600 transition-colors">Personal Loan Settlement</Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-900">Settle 15 Lakh Loan</span>
              </div>
            </li>
          </ol>
        </nav>
      </div>

      {/* Company Stats Strip */}
      <div className="w-full bg-white border-y border-gray-200 py-6 mb-12 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-blue-900">10+ Years</span>
            <span className="text-gray-500 text-sm uppercase tracking-wide font-semibold mt-1">Industry Experience</span>
          </div>
          <div className="flex flex-col border-y md:border-y-0 md:border-x border-gray-100 py-4 md:py-0">
            <span className="text-3xl font-bold text-blue-900">25,000+</span>
            <span className="text-gray-500 text-sm uppercase tracking-wide font-semibold mt-1">Cases Handled Successfully</span>
          </div>
          <div className="flex flex-col">
            <span className="text-3xl font-bold text-blue-900">₹400 Cr+</span>
            <span className="text-gray-500 text-sm uppercase tracking-wide font-semibold mt-1">Total Debt Settled</span>
          </div>
        </div>
      </div>

      {/* Mobile TOC (Sticky horizontally scrolling) */}
      <div className="lg:hidden sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm overflow-x-auto no-scrollbar py-3 px-6 mb-6">
        <div className="flex space-x-4 whitespace-nowrap">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`text-sm font-medium px-4 py-2 rounded-full transition-colors ${
                activeSection === section.id
                  ? "bg-blue-100 text-blue-800"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>

      {/* Three-Column Body Structure */}
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-10">
        
        {/* Left Sidebar (Sticky TOC) */}
        <aside className="hidden lg:block lg:w-1/4">
          <div className="sticky top-28 h-fit bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-3">Table of Contents</h3>
            <nav className="flex flex-col space-y-3">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-left text-sm font-medium transition-all duration-200 pl-3 border-l-2 ${
                    activeSection === section.id
                      ? "border-blue-600 text-blue-700"
                      : "border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300"
                  }`}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Middle Column (Main Article Content) */}
        <div className="lg:w-2/4">
          <article 
            ref={contentRef}
            className="prose max-w-none bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100 text-gray-800"
          >
            {/* Quick Answer Block */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-2xl mb-10">
              <h3 className="text-blue-900 font-bold text-lg mt-0 mb-2 flex items-center">
                <span className="text-2xl mr-2">💡</span> Quick Answer
              </h3>
              <p className="mb-0">
                <strong>Yes, you can settle a ₹15 Lakh personal loan in India.</strong> When faced with genuine financial hardship (like job loss or a medical emergency), banks may agree to a one-time settlement (OTS). For an unsecured loan of this size, settlement amounts typically range from <strong>30% to 50%</strong> of the outstanding principal, depending on how long the loan has been in default and your negotiation leverage.
              </p>
            </div>

            <h2 id="can-i-settle" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Can I Settle a ₹15 Lakh Personal Loan?</h2>
            <p>
              Defaulting on a high-value loan of ₹15 Lakhs can trigger intense stress, especially when recovery agents begin calling. However, settlement is a legally valid financial exit strategy recognized by the Reserve Bank of India (RBI).
            </p>
            <p>
              Banks and Non-Banking Financial Companies (NBFCs) prefer recovering a portion of the unsecured debt through settlement rather than classifying the entire ₹15 Lakhs as a Non-Performing Asset (NPA) and engaging in lengthy, expensive litigation.
            </p>
            
            <h2 id="how-much-to-settle" className="text-2xl font-bold text-gray-900 mt-10 mb-4">How Much to Settle a 15 Lakh Loan?</h2>
            <p>
              The most common query borrowers have is regarding the exact discount they can expect. The "15 lakh personal loan settlement" amount is rarely fixed; it is highly dependent on your negotiation skills and the delinquency bucket (how many days past due your account is).
            </p>
            
            <div className="overflow-x-auto my-8">
              <table className="w-full text-sm text-left text-gray-700 border border-gray-200 rounded-lg overflow-hidden">
                <thead className="text-xs text-white uppercase bg-blue-900">
                  <tr>
                    <th scope="col" className="px-6 py-4">Delinquency Period</th>
                    <th scope="col" className="px-6 py-4">Bank's Stance</th>
                    <th scope="col" className="px-6 py-4">Expected Settlement %</th>
                    <th scope="col" className="px-6 py-4">Estimated Amount (₹15L Base)</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">90 - 180 Days</td>
                    <td className="px-6 py-4">Rigid; pushing for full recovery</td>
                    <td className="px-6 py-4">60% - 75%</td>
                    <td className="px-6 py-4">₹9 Lakhs - ₹11.25 Lakhs</td>
                  </tr>
                  <tr className="hover:bg-gray-50 bg-blue-50/30">
                    <td className="px-6 py-4 font-medium">180 - 360 Days</td>
                    <td className="px-6 py-4">Open to negotiation (NPA stage)</td>
                    <td className="px-6 py-4">40% - 55%</td>
                    <td className="px-6 py-4">₹6 Lakhs - ₹8.25 Lakhs</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">360+ Days (Written-off)</td>
                    <td className="px-6 py-4">Highly motivated to close the file</td>
                    <td className="px-6 py-4">25% - 35%</td>
                    <td className="px-6 py-4">₹3.75 Lakhs - ₹5.25 Lakhs</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              <em>*Note: The above estimates apply to the outstanding principal. Lenders generally waive 100% of the accumulated penal interest and late fees before applying this percentage.</em>
            </p>

            <h2 id="negotiation-timeline" className="text-2xl font-bold text-gray-900 mt-10 mb-4">The Settlement Negotiation Timeline</h2>
            <p>Settling a large sum like ₹15 Lakhs is not an overnight process. It requires strategic patience.</p>
            <ul className="list-none space-y-4 my-6 pl-0">
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">1</span>
                <div>
                  <strong>Months 1-3: Notice Period.</strong> You will receive standard demand notices. Harassment from recovery agents usually peaks here. It is critical not to make partial payments, as this resets the limitation period and weakens your settlement leverage.
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">2</span>
                <div>
                  <strong>Months 4-6: The NPA Classification.</strong> Once your account hits 90 days past due, it becomes an NPA. The bank's recovery team takes over from standard collections. This is when realistic settlement discussions can begin.
                </div>
              </li>
              <li className="flex">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold mr-4">3</span>
                <div>
                  <strong>Months 6+: The Sweet Spot.</strong> The bank realizes that legal action (like arbitration or civil suits) for an unsecured loan will drag on for years. They are more likely to accept a highly discounted One-Time Settlement (OTS) proposal drafted by legal experts.
                </div>
              </li>
            </ul>

            <h2 id="legal-steps" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Legal Steps & RBI Guidelines</h2>
            <p>
              When dealing with a massive "how much to settle 15 lakh loan" scenario, you must follow the correct legal protocols to protect yourself from predatory recovery tactics:
            </p>
            <ul>
              <li><strong>Demand an Official Settlement Letter:</strong> Never pay a settlement amount based on verbal promises or WhatsApp messages. Always demand a formal settlement letter on the bank's official letterhead clearly stating that upon payment of the agreed sum, the loan account will be closed.</li>
              <li><strong>Invoke RBI Fair Practices Code:</strong> If recovery agents resort to abuse, calling your relatives, or visiting your workplace to shame you, you can file a complaint with the banking ombudsman citing violations of the RBI's Fair Practices Code.</li>
              <li><strong>Respond to Legal Notices:</strong> Do not ignore Section 138 (Cheque Bounce) or Arbitration notices. Draft a legally sound reply outlining your financial hardship and willingness to settle. Professional legal counsel is highly recommended for a ₹15 Lakh exposure.</li>
            </ul>

            <h2 id="credit-score" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Impact on Your Credit Score (CIBIL)</h2>
            <p>
              It is vital to understand that a settlement is not a complete waiver without consequences.
            </p>
            <p>
              Once you pay the settlement amount, the bank will report your account status to CIBIL as <strong>"Settled"</strong> (not "Closed"). A "Settled" status will drop your credit score by 75 to 100 points, making it difficult to secure unsecured loans (credit cards, personal loans) for the next 2 to 3 years.
            </p>
            <p>
              However, after 3-5 years of demonstrating good financial behavior (e.g., using a secured credit card against an FD), the impact dilutes, and you can rebuild your score. For most borrowers facing a ₹15 Lakh default, the mental peace of being debt-free far outweighs the temporary credit score hit.
            </p>

            <h2 id="alternatives" className="text-2xl font-bold text-gray-900 mt-10 mb-4">Alternatives to Consider</h2>
            <p>Before committing to a settlement, evaluate these alternatives:</p>
            <ul>
              <li><strong>Loan Restructuring:</strong> Request the bank to increase your loan tenure and reduce the EMI to a manageable level. This preserves your CIBIL score.</li>
              <li><strong>Balance Transfer:</strong> If your credit score is still intact, you might find another lender willing to take over the loan at a lower interest rate, though finding one for an already defaulting account is extremely rare.</li>
              <li><strong>Liquidating Assets:</strong> Selling a low-yield asset (like a plot of land or certain mutual funds) to clear the debt in full and retain a "Closed" status on your credit report.</li>
            </ul>

            {/* Social Sharing Block */}
            <div className="mt-16 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">Share this Guide</h3>
              <div className="flex justify-center space-x-4">
                <a 
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(shareTitle + " " + shareUrl)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="Share on WhatsApp"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                </a>
                <a 
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(shareUrl)}&title=${encodeURIComponent(shareTitle)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a 
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`}
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center hover:scale-110 transition-transform shadow-md"
                  aria-label="Share on X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Sources & References */}
            <div className="mt-12 bg-gray-50 p-6 rounded-2xl border border-gray-100">
              <h3 className="text-lg font-bold text-gray-900 mb-3">Sources & References</h3>
              <ul className="text-sm space-y-2 text-gray-600 list-disc pl-5">
                <li>
                  <a href="https://www.rbi.org.in/Scripts/NotificationUser.aspx?Id=12513" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    Reserve Bank of India (RBI) - Framework for Compromise Settlements and Technical Write-offs
                  </a>
                </li>
                <li>
                  <a href="https://www.rbi.org.in/Scripts/BS_ViewMasCirculardetails.aspx?id=9059" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    RBI Fair Practices Code for Lenders & Recovery Agents
                  </a>
                </li>
                <li>
                  <a href="https://cibil.com/faq/understanding-your-cibil-score" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    TransUnion CIBIL - How "Settled" Status Affects Your Score
                  </a>
                </li>
              </ul>
            </div>

          </article>
        </div>

        {/* Right Sidebar (Sticky Cards) */}
        <aside className="lg:w-1/4">
          <div className="sticky top-28 h-fit flex flex-col space-y-6">
            
            {/* Author Card */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-3">Written By</span>
              <Link href="/authors/ashish" className="text-lg font-bold text-gray-900 hover:text-blue-600 transition-colors">
                Ashish Sharma
              </Link>
              <p className="text-sm text-gray-600 mt-1 mb-4">Financial & Legal Strategist, Debt Relief Expert</p>
              <a 
                href="https://linkedin.com/in/ashishsharma" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-[#0077b5] hover:opacity-80 transition-opacity flex items-center gap-2 text-sm font-medium"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                Connect
              </a>
            </div>

            {/* CTA Card */}
            <div id="calculate" className="bg-gradient-to-b from-blue-900 to-blue-800 p-6 rounded-3xl shadow-lg border border-blue-700 text-white relative overflow-hidden group">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white opacity-10 rounded-full blur-xl group-hover:scale-150 transition-transform duration-500"></div>
              <h3 className="text-xl font-bold mb-3 relative z-10">Stop Harassment Today</h3>
              <p className="text-blue-100 text-sm mb-6 relative z-10">
                Get a legal shield against recovery agents and negotiate a settlement of up to 50% waiver on your ₹15 Lakh loan.
              </p>
              <Link href="/consultation" className="block w-full bg-white text-blue-900 text-center font-bold py-3 px-4 rounded-xl shadow-md hover:bg-blue-50 transition-colors relative z-10">
                Book Free Consultation
              </Link>
            </div>
            
          </div>
        </aside>

      </div>
    </div>
  );
}
