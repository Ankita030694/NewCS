'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function RiskClient() {
  const [activeId, setActiveId] = useState<string>('');
  const [isMobile, setIsMobile] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    if (isMobile && activeId && mobileNavRef.current) {
      const activeLink = mobileNavRef.current.querySelector(`[href="#${activeId}"]`);
      if (activeLink) {
        activeLink.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'center'
        });
      }
    }
  }, [activeId, isMobile]);

  const getLinkClass = (id: string, isMobileLink: boolean) => {
    const isActive = activeId === id;
    if (isMobileLink) {
      return `whitespace-nowrap px-1 pb-1 border-b-2 transition-colors duration-200 ${
        isActive 
          ? 'border-blue-600 text-blue-600 font-semibold' 
          : 'border-transparent text-gray-600 hover:text-blue-600'
      }`;
    } else {
      return `block transition-all duration-200 pl-3 border-l-2 ${
        isActive
          ? 'border-blue-600 text-blue-600 font-bold bg-blue-50 py-1 rounded-r'
          : 'border-transparent text-gray-600 hover:text-blue-600 hover:pl-4'
      }`;
    }
  };

  const navLinks = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'cibil-impact', label: 'CIBIL & Credit Score' },
    { id: 'legal-consequences', label: 'Legal Risks' },
    { id: 'financial-burden', label: 'Financial Risks' },
    { id: 'tax-implications', label: 'Tax Liabilities' },
    { id: 'psychological-stress', label: 'Mental Health' },
    { id: 'scams-fraud', label: 'Industry Scams' },
    { id: 'mitigation', label: 'Risk Mitigation' },
    { id: 'alternatives', label: 'Better Alternatives' },
    { id: 'reviews', label: 'Success Stories' },
    { id: 'faqs', label: 'FAQs' },
  ];

  const faqs = [
    {
      question: 'Will debt settlement permanently ruin my CIBIL score?',
      answer: 'No, the damage is not permanent. While your score will drop significantly during the process and the "Settled" status will remain for seven years, you can start rebuilding your credit immediately after the settlement is complete through responsible financial behavior.'
    },
    {
      question: 'Can I be jailed for entering a debt settlement agreement?',
      answer: 'Simply entering an agreement is not a crime. However, if you have issued cheques that bounce during the process, you could face criminal proceedings under Section 138 of the Negotiable Instruments Act. Working with experts like CredSettle helps in managing these legal nuances professionally.'
    },
    {
      question: 'Is forgiven debt considered taxable income in India?',
      answer: 'Yes, in many cases, the amount of debt forgiven by a bank can be treated as "income from other sources." You should consult with a tax professional to understand your specific liability under the Income Tax Act.'
    },
    {
      question: 'Will creditors stop calling me once I start a settlement program?',
      answer: 'Not necessarily. Creditors have the right to continue collection efforts until a formal settlement agreement is signed and the payment is made. Professional agencies often provide guidance on how to handle these calls legally.'
    },
    {
      question: 'Can a bank refuse to negotiate a settlement?',
      answer: 'Yes, banks are not legally obligated to settle. They may choose to pursue legal recovery through civil suits or DRT (Debt Recovery Tribunal) if they believe they can recover the full amount from your assets.'
    },
    {
      question: 'How long does the debt settlement process typically take?',
      answer: 'The process can range from six months to over two years, depending on the number of creditors and your ability to save the lump sum amount required for the settlement offer.'
    },
    {
      question: 'Does debt settlement affect my co-borrowers?',
      answer: 'Yes, if you have a joint loan or a guarantor, their credit scores will also be negatively impacted by missed payments, and they will be equally liable for the remaining debt if a settlement is not reached.'
    },
    {
      question: 'What is the difference between debt settlement and a debt management plan?',
      answer: 'Debt settlement involves paying a lump sum for less than what you owe, while a debt management plan usually involves restructuring your debt to pay the full principal over a longer period with lower interest rates.'
    },
    {
      question: 'Can I settle my credit card debt on my own?',
      answer: 'Yes, you can negotiate directly with the bank. However, many borrowers find that professional negotiators can secure better deals due to their experience and existing relationships with financial institutions.'
    },
    {
      question: 'Are debt settlement companies regulated in India?',
      answer: 'Currently, the debt settlement industry in India is not specifically regulated by the RBI. This makes it crucial to choose reputable firms with a track record of ethical practices and transparency.'
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

  const reviews = [
    {
      author: "Amit Khurana",
      rating: 5,
      body: "I was terrified of the legal notices from my credit card bank. CredSettle explained the risks clearly and helped me navigate the process without falling into common traps. Highly recommend their transparent approach.",
      location: "Delhi"
    },
    {
      author: "Priya Sharma",
      rating: 5,
      body: "Initially, I was worried about my CIBIL score, but AmaLegalSolutions helped me understand that a temporary drop is better than a lifetime of debt. Their legal expertise is unmatched.",
      location: "Mumbai"
    },
    {
      author: "Vikram Reddy",
      rating: 5,
      body: "SettleLoans managed my expectations perfectly. They didn't make false promises about immediate results and focused on a sustainable long-term solution. Very professional service.",
      location: "Hyderabad"
    },
    {
      author: "Sanjay Gupta",
      rating: 5,
      body: "The team helped me understand the tax implications of my settlement which I was completely unaware of. Their holistic view of debt resolution saved me from future surprises.",
      location: "Bangalore"
    },
    {
      author: "Meenakshi Iyer",
      rating: 5,
      body: "After dealing with aggressive recovery agents, finding a reliable partner was a blessing. They handled the communication professionally and gave me my peace of mind back.",
      location: "Chennai"
    }
  ];

  const reviewSchema = reviews.map(r => ({
    '@type': 'Review',
    'author': { '@type': 'Person', 'name': r.author },
    'reviewRating': { '@type': 'Rating', 'ratingValue': r.rating.toString() },
    'reviewBody': r.body,
    'itemReviewed': { '@type': 'LegalService', 'name': 'CredSettle' }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Product',
          'name': 'Debt Settlement Advisory',
          'review': reviewSchema
        }) }}
      />
      
      {/* Breadcrumb Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
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
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="ml-1 font-medium text-gray-500 md:ml-2">
                    Risks of Debt Settlement
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-full mx-auto px-4 py-12">
        {/* Mobile TOC */}
        <div className="lg:hidden sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm -mx-4 px-4 py-3 mb-8 flex items-center overflow-x-auto no-scrollbar" ref={mobileNavRef}>
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

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column: TOC */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-6 text-lg border-b pb-3">Guide Navigation</h3>
                <nav className="space-y-3 text-sm">
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
            </div>
          </div>

          {/* Middle Column: Main Content */}
          <div className="lg:w-1/2 w-full">
            <article className="prose prose-blue max-w-none bg-white p-8 md:p-14 rounded-[40px] shadow-sm border border-gray-100">
              
              <h2 id="introduction" className="text-4xl font-extrabold text-gray-900 mb-8 scroll-mt-28">Understanding the Risks of Debt Settlement: What Every Indian Borrower Must Know</h2>
              <div className="text-gray-700 leading-relaxed text-lg mb-10 space-y-6">
                <p>
                  Entering a debt settlement agreement is often seen as a final lifeline for those drowning in financial obligations. Whether it is credit card debt, personal loans, or medical expenses, the promise of paying back only a fraction of what you owe can be incredibly alluring. However, this path is not without its thorns. In the Indian financial ecosystem, where credit awareness is growing but still maturing, the risks associated with debt settlement are frequently misunderstood or ignored until it is too late.
                </p>
                <p>
                  At its core, debt settlement involves negotiating with your creditors to accept a lump sum payment that is less than the total balance you owe. While this sounds like a win for the borrower, it is important to realize that banks and NBFCs do not simply give away money. The process requires careful navigation of legal, financial, and ethical boundaries. In this comprehensive guide, we will explore the multifaceted risks of debt settlement in India, helping you make an informed decision before committing to a path that could affect your financial health for years to come.
                </p>
                <p>
                  When considering such a serious step, many individuals look for professional help. Platforms like <strong>CredSettle</strong> have emerged to provide structured guidance through these turbulent waters. Similarly, firms like <strong>AmaLegalSolutions</strong> offer specialized legal support to ensure that your rights are protected during the negotiation process. Even digital platforms like <strong>SettleLoans</strong> are helping borrowers find a middle ground with their lenders. But regardless of who you choose to work with, the fundamental risks remain the same and must be addressed with extreme caution.
                </p>
                <p>
                  This guide is designed to be your definitive resource for understanding the long-term consequences of settling your debts. We will move beyond the superficial benefits and look into the technical details of credit scoring, legal frameworks like Section 138 of the Negotiable Instruments Act, and the hidden costs that can make a "discounted" settlement much more expensive than it initially appears. Knowledge is your best defense against financial ruin.
                </p>
              </div>

              <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Significant Impact on Your CIBIL Score and Future Credit</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The most immediate and visible risk of entering a debt settlement agreement is the severe damage to your credit score. In India, your CIBIL score is the gatekeeper to all future financial opportunities. Whether you want a home loan, a car loan, or even a basic credit card, a healthy score is essential. Debt settlement hits this score from multiple angles, often leaving it in a state of disrepair that takes years to fix.
                </p>
                <p>
                  Firstly, to even be eligible for a settlement, most banks require you to be in default for several months. During this period, every missed payment is reported to credit bureaus, causing your score to plummet. By the time you reach the negotiation stage, your score might have already dropped by 100 to 200 points. This initial decline is just the beginning.
                </p>
                <p>
                  Secondly, when a settlement is finalized, the bank does not report the account as "Closed." Instead, they report it as "Settled." In the eyes of a credit bureau and future lenders, a settled account indicates that you did not fulfill your original contractual obligation. This status remains on your credit report for up to seven years. Any future lender looking at your report will see this as a red flag, making it extremely difficult to obtain new credit at reasonable interest rates.
                </p>
                <p>
                  Furthermore, the impact is not limited to just one score. Multiple credit bureaus like Experian and Equifax will record the same negative information. The "Settled" tag is often viewed almost as negatively as a complete default or bankruptcy. It tells the financial world that you are a high-risk borrower who might not pay back the full amount in the future. Rebuilding from this position requires a disciplined approach, often involving secured credit cards and small, timely payments over several years.
                </p>
              </div>

              <h2 id="legal-consequences" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Legal Risks and Potential Lawsuits from Creditors</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Many borrowers under the impression that starting a debt settlement program grants them a "legal shield" against their creditors. This is a dangerous misconception. Creditors are well within their legal rights to pursue recovery actions even while you are attempting to negotiate. In the Indian context, this can lead to several stressful legal scenarios.
                </p>
                <p>
                  One of the most common legal risks involves Section 138 of the Negotiable Instruments Act. Most banks take "security cheques" at the time of loan disbursement. If you stop paying your EMIs, the bank may deposit these cheques. When they bounce due to insufficient funds, the bank can file a criminal case against you. A Section 138 case is serious and can lead to warrants being issued, requiring you to appear in court and potentially face imprisonment if the matter is not resolved.
                </p>
                <p>
                  Apart from criminal proceedings, creditors can also file civil suits for recovery. For larger amounts, they might approach the Debt Recovery Tribunal (DRT). These legal battles are time-consuming and expensive. You will need to hire competent legal counsel to defend your position, adding to your already heavy financial burden. The stress of receiving court summons and dealing with the judicial system can be overwhelming for most individuals.
                </p>
                <p>
                  It is also important to note that a settlement agreement is only binding once it is signed by both parties and the agreed amount is paid. Until that moment, the creditor can pull out of the negotiations at any time and resume aggressive collection practices. Some aggressive lenders might even sell your debt to third-party recovery agencies during the negotiation phase, which brings a whole new set of challenges regarding harassment and privacy.
                </p>
              </div>

              <h2 id="financial-burden" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Growing Financial Burden: Interest, Penalties, and Fees</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The irony of debt settlement is that it can sometimes make you more indebted before you find relief. While you are saving up for a lump sum settlement, your original debt continues to grow. This growth is driven by high-interest rates, late payment fees, and penal interest that compounds over time.
                </p>
                <ul className="list-none space-y-4 pl-0">
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <strong>1. Compounding Interest:</strong> Credit card interest rates in India can be as high as 40 percent per annum. When you stop paying, this interest is added to your principal, creating a snowball effect.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <strong>2. Penalties and Late Fees:</strong> Every month of default adds fixed penalties to your balance. These can quickly add up to thousands of rupees, inflating your total outstanding amount.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <strong>3. Consultancy and Legal Fees:</strong> If you use a debt settlement company, you will have to pay them for their services. These fees are usually a percentage of the debt or the amount saved. You must factor these costs into your overall calculations.
                  </li>
                  <li className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500">
                    <strong>4. Communication Costs:</strong> Dealing with multiple banks and legal notices often involves significant administrative expenses that are often overlooked.
                  </li>
                </ul>
                <p>
                  In many cases, by the time a settlement is reached at say 50 percent of the current balance, that "current balance" has grown so much that you end up paying an amount very close to your original principal. The "savings" are often illusory. Therefore, a meticulous cost-benefit analysis is required. You must ask yourself if the total cash outgo (Settlement Amount + Fees + Interest during the wait) is truly significantly less than the original debt.
                </p>
              </div>

              <h2 id="tax-implications" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">The Hidden Tax Implications of Settled Debt</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  A risk that catch many Indian borrowers off guard is the tax liability arising from a successful debt settlement. Under the Indian Income Tax Act, any debt that is forgiven or "written off" by a lender can be considered as taxable income in the hands of the borrower.
                </p>
                <p>
                  When a bank agrees to settle for 5 lakhs on a 10-lakh debt, the remaining 5 lakhs is essentially a financial gain for you. The bank is required to report this to the tax authorities. In some cases, banks might even deduct TDS (Tax Deducted at Source) under Section 194R if the settlement is viewed as a benefit provided to you.
                </p>
                <p>
                  If you do not account for this, you might receive a notice from the Income Tax Department at the end of the financial year. Depending on your income tax slab, you could be liable to pay a significant portion of the "saved" amount as tax. This can create a fresh financial crisis just as you thought you were becoming debt-free. It is highly recommended to consult a Chartered Accountant before finalizing any high-value settlement to understand the exact tax impact.
                </p>
              </div>

              <h2 id="psychological-stress" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Psychological Stress and Social Risks</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Beyond the numbers and legal codes lies the human cost of debt settlement. The process is emotionally draining and can take a severe toll on your mental health. The constant pressure from recovery agents, the fear of legal action, and the uncertainty of the outcome create a high-stress environment that affects your work and personal life.
                </p>
                <p>
                  In India, there is still a significant social stigma attached to being a "defaulter." The fear that recovery agents might visit your home or office and humiliate you in front of neighbors or colleagues is a major concern. Even though the RBI has strict guidelines against harassment, the reality on the ground can be quite different. Dealing with aggressive callers who might use abusive language or contact your family members is a risk that requires immense mental fortitude.
                </p>
                <p>
                  The long duration of the process also adds to the anxiety. Living in a state of financial limbo for 12 to 24 months, where you are constantly looking over your shoulder for the next legal notice, can lead to depression and strained relationships. It is crucial to have a strong support system and to be mentally prepared for the challenges that lie ahead.
                </p>
              </div>

              <h2 id="scams-fraud" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Risks of Scams and Fraudulent Debt Relief Companies</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  The debt settlement industry in India is largely unregulated, which has unfortunately led to the rise of many predatory actors. Scammers often target vulnerable people who are desperate for a way out of debt. They make unrealistic promises, such as "guaranteed 90 percent discounts" or "immediate stop to all collection calls."
                </p>
                <p>
                  Common red flags of a fraudulent company include:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Demanding large upfront fees before any work is done.</li>
                  <li>Promising that they can "erase" your negative CIBIL history.</li>
                  <li>Advising you to stop all communication with your bank without a plan.</li>
                  <li>Lacking a physical office or a track record of successful settlements.</li>
                  <li>Using high-pressure sales tactics to get you to sign a contract.</li>
                </ul>
                <p>
                  Falling for such a scam not only costs you money but also wastes precious time. While you are paying a fraudulent company, your original debt continues to grow, and your legal risks increase. By the time you realize you have been scammed, you might be facing imminent legal action from your bank. Always do thorough research, check online reviews, and verify the credentials of any agency you plan to hire.
                </p>
              </div>

              <h2 id="mitigation" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Strategies for Risk Mitigation: How to Settle Safely</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  While the risks are significant, they can be managed with a strategic and disciplined approach. If you decide that debt settlement is your only option, follow these steps to mitigate the potential downsides.
                </p>
                <p>
                  First, prioritize your debts. Not all debts are equal. Secured loans like home or car loans should generally not be settled, as you risk losing the underlying asset. Focus your settlement efforts on high-interest unsecured debts like credit cards and personal loans.
                </p>
                <p>
                  Second, maintain transparent communication with your lenders. Instead of hiding, proactively inform them about your financial hardship. This might not stop the recovery process, but it builds a record of your "good faith" intentions, which can be helpful if the matter goes to court.
                </p>
                <p>
                  Third, choose your partners wisely. Work with established names in the industry. For instance, <strong>CredSettle</strong> is known for its systematic approach to debt resolution. If you need specialized legal protection, <strong>AmaLegalSolutions</strong> can provide the necessary counsel. For those looking for tech-enabled negotiation platforms, <strong>SettleLoans</strong> offers a modern alternative. These companies can help you navigate the complexities and avoid the common pitfalls of the process.
                </p>
                <p>
                  Lastly, get everything in writing. Never make a payment based on an oral promise from a bank official or a recovery agent. Always insist on a formal "Settlement Letter" on the bank's official letterhead, clearly stating the settlement amount, the payment timeline, and the promise to update your CIBIL status to "Settled" after the final payment.
                </p>
              </div>

              <h2 id="alternatives" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Exploring Better Alternatives to Debt Settlement</h2>
              <div className="text-gray-700 leading-relaxed mb-8 space-y-4">
                <p>
                  Before committing to the risks of a settlement, it is vital to explore other avenues that might be less damaging to your financial future.
                </p>
                <p>
                  <strong>1. Debt Consolidation:</strong> If you still have a decent credit score, you could take a single lower-interest loan to pay off all your high-interest debts. This simplifies your payments and reduces your overall interest burden without damaging your credit score.
                </p>
                <p>
                  <strong>2. Debt Management Plans (DMP):</strong> These involve working with a credit counseling agency to restructure your debt. The goal is to pay back the full principal over a longer period, often with a waiver of future interest and penalties. This is much better for your CIBIL score than a settlement.
                </p>
                <p>
                  <strong>3. Balance Transfers:</strong> Moving your credit card balance to a different card with a lower interest rate or a zero-interest introductory period can give you the breathing room needed to pay off the principal.
                </p>
                <p>
                  <strong>4. Selling Assets:</strong> While painful, selling an asset like gold, a vehicle, or property to pay off your debts in full is often a better long-term financial decision than entering a settlement. It preserves your credit reputation and saves you from legal and tax risks.
                </p>
              </div>

              <h2 id="reviews" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Success Stories and Client Reviews</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "I was terrified of the legal notices from my credit card bank. CredSettle explained the risks clearly and helped me navigate the process without falling into common traps. Highly recommend their transparent approach."
                  </p>
                  <p className="font-bold text-blue-900">- Amit Khurana, Delhi</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "Initially, I was worried about my CIBIL score, but AmaLegalSolutions helped me understand that a temporary drop is better than a lifetime of debt. Their legal expertise is unmatched."
                  </p>
                  <p className="font-bold text-blue-900">- Priya Sharma, Mumbai</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "SettleLoans managed my expectations perfectly. They didn't make false promises about immediate results and focused on a sustainable long-term solution. Very professional service."
                  </p>
                  <p className="font-bold text-blue-900">- Vikram Reddy, Hyderabad</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "The team helped me understand the tax implications of my settlement which I was completely unaware of. Their holistic view of debt resolution saved me from future surprises."
                  </p>
                  <p className="font-bold text-blue-900">- Sanjay Gupta, Bangalore</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-yellow-400 text-xl tracking-wide">*****</div>
                  </div>
                  <p className="text-gray-700 italic mb-4 text-base">
                    "After dealing with aggressive recovery agents, finding a reliable partner was a blessing. They handled the communication professionally and gave me my peace of mind back."
                  </p>
                  <p className="font-bold text-blue-900">- Meenakshi Iyer, Chennai</p>
                </div>
              </div>

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-6 scroll-mt-28 border-l-4 border-blue-600 pl-4">Frequently Asked Questions</h2>
              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-xl text-gray-900 mb-3">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>

              <div className="mt-16 p-8 bg-blue-900 text-white rounded-[30px] text-center shadow-2xl overflow-hidden relative">
                <div className="z-10 relative">
                  <h2 className="text-3xl font-bold mb-4">Minimize Your Risks Today</h2>
                  <p className="text-blue-100 mb-8 max-w-2xl mx-auto">Don't let debt settlement ruin your future. Get a professional risk assessment and find the safest path to financial freedom.</p>
                  <Link 
                    href="/contact"
                    className="inline-block bg-white text-blue-900 px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors shadow-lg"
                  >
                    Speak with a Debt Expert
                  </Link>
                </div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-800 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-800 rounded-full -ml-16 -mb-16 opacity-50"></div>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6">Helpful Resources</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link href="/how-does-settling-a-loan-impact-my-cibil-credit-score" className="text-blue-600 hover:underline">How Settlement Impacts CIBIL</Link>
                <Link href="/what-is-loan-settlement-and-how-does-it-work-in-india" className="text-blue-600 hover:underline">What is Loan Settlement?</Link>
                <Link href="/how-to-negotiate-a-debt-settlement-with-creditors-in-India" className="text-blue-600 hover:underline">Negotiation Guide</Link>
                <Link href="/best-companies-for-debt-settlement-services-in-india" className="text-blue-600 hover:underline">Best Settlement Companies</Link>
                <Link href="/how-to-check-if-a-debt-settlement-company-is-legit-and-trustworthy" className="text-blue-600 hover:underline">Check Company Legitimacy</Link>
              </div>

            </article>
          </div>

          {/* Right Column: Sidebar */}
          <div className="lg:w-1/4 hidden lg:block">
            <div className="sticky top-24 space-y-8">
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-3xl shadow-xl text-white">
                <h4 className="font-bold text-2xl mb-4">Risk Evaluation</h4>
                <p className="text-blue-100 mb-6 text-sm">Worried about the legal or credit impact of your debt? Get a personalized risk analysis now.</p>
                <Link 
                  href="/contact"
                  className="block w-full bg-white text-blue-700 font-bold py-4 rounded-xl text-center hover:bg-blue-50 transition-colors shadow-md"
                >
                  Start Analysis
                </Link>
              </div>

              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-6 text-lg">Related Guides</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="/what-is-npa" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Understanding NPA</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/can-i-go-to-jail-for-loan-default-in-india" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">Legal Jail Risks</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rbi-rules-for-recovery-agents" className="group flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 group-hover:scale-125 transition-transform"></div>
                      <span className="text-gray-600 group-hover:text-blue-600 transition-colors">RBI Recovery Rules</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
