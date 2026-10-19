'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function FullFormOfOtsClient() {
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

  const navLinks = [
    { id: 'full-form-of-ots', label: 'Full Form of OTS' },
    { id: 'how-does-ots-work', label: 'How Does OTS Work?' },
    { id: 'eligibility', label: 'Eligibility for OTS' },
    { id: 'legal-framework', label: 'Legal Framework' },
    { id: 'pros-and-cons', label: 'Pros and Cons' },
    { id: 'advantages', label: 'Advantages' },
    { id: 'hidden-costs', label: 'Costs and CIBIL' },
    { id: 'timeline', label: 'Timeline of OTS' },
    { id: 'before-accepting', label: 'Before Accepting' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: 'What is the full form of OTS in banking?',
      answer: 'The full form of OTS is One Time closure. It is a formal pacts where the clients pays a settle lump sum amount that is less than the total unpaid debt to close the loan account permanently.'
    },
    {
      question: 'Who is eligible for a One Time Settlement?',
      answer: 'Clients who have experienced a genuine money hardship. Such as a major medical emergency. Severe firm loss. Prolonged job loss. Are generally eligible if their account is classified as a Non Performing Asset.'
    },
    {
      question: 'Does an OTS affect my CIBIL score permanently?',
      answer: 'An OTS marks your credit report with a status of Settled. which significantly lowers your CIBIL score and remains on your record for up to seven years. It is not permanent. it does impact future borrowing capacity.'
    },
    {
      question: 'Can I negotiate the OTS amount with the bank directly?',
      answer: 'Yes. You can write straight to the grievance redressal department of the bank detailing your money distress. experts talks services can also assist in securing a higher waiver rate based on your insolvency.'
    },
    {
      question: 'What happens if I fail to pay the agreed OTS amount?',
      answer: 'If you miss the deadline for the OTS payment. The pacts is nullified. The bank will reinstate the original unpaid balance along with accumulated fines and resume harsh legal claims actions.'
    },
    {
      question: 'Is it better to opt for an OTS or continue paying minimum dues?',
      answer: 'Paying minimum dues traps you in a cycle of high rates debt indefinitely. An OTS provides fast money relief and stops threats. damages your credit score. It should be a last resort when full payment is impossible.'
    },
    {
      question: 'Do banks always agree to a One Time Settlement offer?',
      answer: 'No. Banks evaluate each case individually. They only approve an OTS if their internal risk models indicate that accepting a reduced lump sum now is mathematically more beneficial than pursuing drawn out legal claims.'
    }
  ];

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

  return (
    <main>
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <nav className="flex text-sm text-gray-500" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center"> <Link href="/" className="inline-flex items-center hover:text-blue-600"> Home </Link> </li>
              <li> <div className="flex items-center"> <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"> <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/> </svg> <span className="ml-1 font-medium text-gray-500 md:ml-2"> Full Form of OTS </span> </div> </li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="max-w-8xl mx-auto px-4 py-12">
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

        <div className="flex flex-col lg:flex-row gap-8">
          
          <aside className="lg:w-1/6 hidden lg:block">
            <div className="sticky top-24 space-y-4">

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <p className="font-bold text-gray-900 mb-4 text-base border-b pb-2">Table of Contents</p>
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
            </div>
          </aside>

          <article className="lg:w-3/5 w-full prose prose max-w-none bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">

            <section>
              <h2 id="full-form-of-ots" className="text-xl font-bold text-gray-900 mb-6 scroll-mt-28">What is the Full Form of OTS in Banking?</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p> In 2023. Indian banks and non-banking money companies (NBFCs) processed over ₹10,000 crores in bad loan recoveries through structured closure frameworks. A One Time closure (OTS) is the primary mechanism driving this claims. Allowing clients to clear unpaid defaults for a settle lump sum that is less than the total amount owed. </p>
                <p> The phrase One Time closure acts as a money reset button for both the lending institution and the clients. When an individual faces an overwhelming money catastrophe. Such as a severe medical crisis. An unexpected job loss. A firm failure. Keeping up with standard loan equated monthly installments becomes physically and mathematically impossible. As these defaults compound month after month. The lending institution realizes that recovering the entire original balance is highly unlikely. At this key juncture. The One Time closure protocol is initiated. </p>
                <p> A One Time closure is a by law binding contract wherein the bank agrees to forfeit a exact portion of the unpaid debt. This waived amount often includes late payment fines. Over limit fees. Growing rates charges. occasionally a segment of the main sum amount itself. In exchange for this significant money waiver. The clients commits to paying the remaining agreed upon balance in a single lump sum or across a strictly defined short term installment plan. This process allows the banking institution to recover a guaranteed portion of their funds fast rather than engaging in a protracted. Expensive. uncertain legal battle spanning several years. </p>
                <p> grasp the full form of OTS in banking is just the preliminary step. The underlying workings of how these closures are evaluated by money institutions determine whether your application will be accepted or rejected. Banks utilize sophisticated risk assessment models. They analyze your current employment status. Your liquid assets. Your transaction history. your overall intent to repay. They do not offer closures out of altruism. They offer them because an fast partial claims is vastly superior to a total loss documented as a write off. If you want to understand how a default classification occurs. Reading about <Link href="/what-is-npa" className="text-blue-600 font-bold hover:underline">what is npa</Link> is essential for building a robust talks strategy. </p>
                <p> Navigating this complex money terrain requires a thorough comprehension of your legal rights. Defaulting on an clean own loan or credit card is a civil dispute. Not a penal act. While calls agents may employ harsh tactics to compel payment. The Reserve Bank of India strictly regulates their behavior. An OTS provides a formalized. Dignified exit strategy from an otherwise terrifying cycle of debt and threats. </p>
              </div>
            </section>

            <section>
              <h2 id="how-does-ots-work" className="text-xl font-bold text-gray-900 mb-6 scroll-mt-28">How Does a One Time Settlement Work?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> The operational workings of a One Time closure involve a highly structured talks process between the clients in distress and the claims department of the money institution. The process does not commence fast after a single missed payment. In the first phases of delinquency. The bank focuses fully on standard calls procedures. Aiming to rehabilitate the account and return it to a performing status. The true closure window opens only when the account has aged significantly. </p>
                <p> Typically. An account must remain unpaid for at least ninety days to one hundred and eighty days before the bank seriously entertains a One Time deals. During this extended period. The clients will undoubtedly face intense pressure from calls firms. The mental toll of this phase is immense. it is a necessary precursor. The bank must exhaust its standard claims options before its internal algorithms authorize a substantial waiver of the unpaid dues. </p>
                <p> Once the account reaches the requisite age. The clients or their legal representative submits a formal closure proposal. This proposal must be accompanied by incontrovertible evidence of money hardship. The bank then reviews the proof. If the hardship is deemed genuine and the clients possesses no liquid assets that could be seized through civil litigation. The bank issues a counteroffer. This initiates a period of back and forth talks. When both parties finally agree on a figure. The bank issues a formal closure note detailing the exact terms. The payment deadline. the waiver amount. </p>

                <h3 id="eligibility" className="text-lg font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">fit for an OTS Offer</h3>
                
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 mb-8 shadow-sm">
                  <h3 className="font-bold text-gray-900 text-lg mb-4">Core fit Criteria</h3>
                  <ul className="list-disc pl-6 space-y-4 text-gray-700">
                    <li><strong>Account Classification:</strong> The loan must be classified as a Non Performing Asset. This usually occurs after ninety days of continuous non payment. Current accounts or those with only minor delays are ineligible.</li>
                    <li><strong>Genuine money Hardship:</strong> The clients must provide concrete proof of an inability to pay. Acceptable proof includes medical discharge summaries indicating prolonged hospitalization. Valid end letters from employers. audited money statements demonstrating severe firm losses.</li>
                    <li><strong>Lack of Liquid Assets:</strong> The bank will scrutinize the clients bank accounts. If the clients holds substantial fixed deposits. Mutual funds. Maintains high value transaction volumes. The closure request will be fast rejected.</li>
                    <li><strong>Type of Debt:</strong> clean debts like own loans and credit cards are highly eligible for One Time closures. Secured debts like home loans or car loans are rarely settled because the bank can simply repossess and auction the underlying asset to recover their funds.</li>
                  </ul>
                </div>
                <p> Meeting these criteria does not guarantee an approval. The final decision rests fully with the credit board of the respective bank. They weigh the cost of continued legal action against the fast benefit of the proposed lump sum payment. If you are struggling to initiate this dialogue. Grasp <Link href="/how-to-ask-bank-for-settlement" className="text-blue-600 font-bold hover:underline">how to ask bank for closure</Link> properly is the most key first step. </p>

                <h3 id="legal-framework" className="text-lg font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Legal Framework Surrounding OTS</h3>
                <p> A One Time closure is a by law binding contract governed by the Indian Contract Act. When the bank issues a formal closure note. The clients makes the payment according to the stipulated terms. A new contract is formed that supersedes the original loan pacts. This new contract explicitly absolves the clients from any further legal risk regarding the exact debt in question. </p>
                <p> yet. Clients must be extremely cautious during this phase. Verbal promises made by third party calls agents hold absolutely no legal validity. calls agents are incentivized by commission structures and often lie to extract partial payments. If a clients makes a payment based solely on a phone talk without receiving a formal. Signed closure note on the bank valid letterhead. The bank will simply treat the payment as a regular deposit and continue pursuing the remaining balance. </p>
                <p> The formal closure note must explicitly state the original loan account number. The total unpaid balance prior to the closure. The agreed upon payout sum. The exact date by which the payment must be credited. A clear clause stating that upon receipt of this payment. The account will be closed and no further legal action will be pursued. Only after reviewing and securing this papers should any funds be transferred. </p>
              </div>
            </section>

            <section>
              <h2 id="pros-and-cons" className="text-xl font-bold text-gray-900 mb-6 scroll-mt-28">The Pros and Cons of Opting for an OTS</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Choosing to enter into a One Time closure is a monumental money decision. It is not a magical solution without results. It is a calculated deal. You are essentially trading your long term money reputation for fast relief from an unmanageable crisis. It is imperative to weigh the advantages against the severe long term detriments before committing to this path. </p>

                <h3 id="advantages" className="text-lg font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">Advantages of Debt closure</h3>
                <p> The primary advantage of a One Time closure is the fast cessation of mental distress. When you are trapped in a cycle of default. The constant barrage of phone calls. Emails. home visits from calls agents creates an environment of intense anxiety and fear. An OTS by law terminates all calls activities. Once the closure note is issued and honored. The bank and its agents are by law prohibited from contacting you regarding that exact debt ever again. </p>
                <p> The second major advantage is the substantial money relief. By securing a waiver on late fees. Penal rates. A portion of the main sum. You can resolve the debt for a fraction of what you technically owe. This prevents you from liquidating key life assets like retirement funds or borrowing from predatory lenders just to keep up with minimum payments. It allows you to draw a line under the crisis and begin rebuilding your life from a stable foundation. </p>
                <p> Furthermore. A successful closure fully eliminates the risk of civil litigation. You will not have to worry about receiving court summons. Attending Lok Adalat hearings. facing the potential attachment of your salary account by a judicial order. The matter is resolved permanently and definitively out of court. </p>

                <h3 id="hidden-costs" className="text-lg font-bold text-gray-900 mt-10 mb-4 scroll-mt-28">The Hidden Costs and CIBIL Impact</h3>
                <p> The dire disadvantage of a One Time closure lies in its impact on your creditworthiness. This is not a clean break. The banking system has a long memory. For a detailed exploration of this exact result. Reviewing <Link href="/does-loan-settlement-affect-cibil" className="text-blue-600 font-bold hover:underline">does loan closure affect cibil</Link> will provide deeper insights into the credit reporting workings. </p>

                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mt-8 mb-8">
                  <h3 className="font-bold text-red-900 text-lg mb-4">The Credit Score ruin</h3>
                  <p className="text-gray-800 text-base mb-4"> When you settle an account. The bank reports the event to credit bureaus like TransUnion CIBIL. Equifax. Experian. Instead of marking the account as Closed. Which happens when you pay in full. They mark it as Settled. </p>
                  <p className="text-gray-800 text-base"> This single word acts as a massive red flag in the money ecosystem. It indicates to all future lenders that you are a high risk individual who failed to honor a money contract. Your CIBIL score will drop by fifty to one hundred points instantly. More importantly. This Settled status remains visible on your credit report for up to seven years. During this period. Obtaining a new credit card. A own loan. a home loan will be exceedingly difficult. Even if approved. You will face punitive rates rates designed to offset the perceived risk. </p>
                </div>
                <p> Additionally. There are tax implications. The amount of debt forgiven by the bank is technically considered taxable income by the Income Tax Department. You may be required to pay income tax on the waived amount. Depending on your tax bracket and exact money hardship. You must consult a chartered accountant to understand the potential tax debts arising from a large debt waiver. </p>
                <p> You also permanently burn the bridge with the exact institution you settled with. If you settle an ICICI credit card. It is highly improbable that ICICI Bank will ever issue you another credit card or approve a loan application for you in your lifetime. Regardless of how much your money case improves in the future. </p>
              </div>
            </section>

            <section>
              <h2 id="timeline" className="text-xl font-bold text-gray-900 mb-6 scroll-mt-28">Timeline of a Typical OTS Agreement</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> A One Time closure is not an overnight event. It is a grueling marathon that requires emotional fortitude and strategic patience. grasp the timeline is crucial for managing expectations and avoiding panicked decisions when agents escalate their pressure tactics. </p>
                
                <div className="relative border-l-4 border-blue-200 ml-6 mt-12 mb-12">
                  <div className="mb-10 ml-8 relative">
                    <span className="absolute -left-11 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Month 1 to 3: The calls Phase</h3>
                    <p className="text-gray-700">You miss your first payments. The bank relies on automated systems. Sending SMS reminders and emails. As the default ages. Human telecallers take over. Calling multiple times a day. By day ninety. The account is classified as a Non Performing Asset. The bank is not interested in closure at this stage. they want full payment with fines.</p>
                  </div>
                  
                  <div className="mb-10 ml-8 relative">
                    <span className="absolute -left-11 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Month 4 to 6: The Escalation Phase</h3>
                    <p className="text-gray-700">Third party claims firms are assigned to your case. Field visits to your registered address may begin. Legal notices demanding full payment are dispatched. The mental pressure reaches its peak. This is the period where the clients must stand firm. Accumulate closure funds. prepare hardship proof.</p>
                  </div>

                  <div className="mb-10 ml-8 relative">
                    <span className="absolute -left-11 top-1 w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow"></span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Month 7 to 9: The talks Phase</h3>
                    <p className="text-gray-700">The bank realizes that full claims is unlikely. They become open to dialogue. You or your representative submit the hardship letter and the first deals. The bank counters with a high demand. Back and forth talks ensues over several weeks until a mutually agreeable figure is reached.</p>
                  </div>

                  <div className="ml-8 relative">
                    <span className="absolute -left-11 top-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow"></span>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">Month 10: Execution and Closure</h3>
                    <p className="text-gray-700">The formal closure note is issued. You check its authenticity and make the payment strictly within the deadline via traceable channels. The bank acknowledges receipt. Updates the credit bureaus with the Settled status. ceases all claims activities permanently.</p>
                  </div>
                </div>
              </div>
            </section>

            <section>
              <h2 id="before-accepting" className="text-xl font-bold text-gray-900 mb-6 scroll-mt-28">What to Do Before Accepting an OTS</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p> Accepting a One Time closure is a binding commitment. Before you sign any papers or transfer a single rupee. You must execute a strict checklist of verifications to ensure you are not falling victim to a scam or an invalid pacts. </p>
                <p> First. Check the identity of the person offering the closure. Is it an valid bank employee using a firm email address. a third party agent using a generic Gmail account? Always demand that the closure contact originates straight from the bank valid domain. Never trust verbal offers. Whatsapp messages. unofficial emails. </p>
                <p> Second. Scrutinize the closure note meticulously. It must be printed on the valid bank letterhead. It must contain the signature and employee ID of an authorized bank valid. The papers must explicitly state your correct loan account number and the exact payout sum. Most importantly. It must include a clear clause stating that upon receipt of the specified amount by the specified date. The account will be considered fully settled and no further legal action will be initiated. </p>
                <p> Third. Ensure you actually have the funds required to honor the pacts. If you agree to a closure and fail to make the payment on the exact date specified in the letter. The bank will unilaterally cancel the pacts. Your partial payment will be absorbed as standard rates payment. the total unpaid balance will be reinstated. Do not agree to a timeline you cannot physically meet. </p>
                <p> Finally. Retain all proof indefinitely. Banks undergo mergers. Systems get upgraded. old debt portfolios are occasionally sold to asset reconstruction companies. If. Five years down the line. A new firm attempts to collect on the old debt. Your real closure note and the bank transaction receipt are your only shield against renewed threats. Store digital backups in multiple secure locations. </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-xl font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions About OTS</h2>
              <div className="space-y-8 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-8 rounded-2xl border border-gray-100 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-gray-900 mb-4 border-l-4 border-blue-600 pl-4">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Rohan Sharma Author Bio" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover"  width={96} height={96} />
                <p className="font-bold text-gray-900">Rohan Sharma</p>
                <p className="text-sm text-gray-500 mb-4">Senior money Analyst & Debt Strategist</p>
                <p className="text-xs text-gray-400">Specializing in legal debt relief. Credit rehabilitation. consumer safety against unfair banking practices.</p>
              </div>

            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
