'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function KyaMaiApnaLoanSettleKrSktaHuClient() {
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
    { id: 'introduction', label: 'Introduction' },
    { id: 'meaning-basics', label: 'Loan Settlement Kya Hota Hai?' },
    { id: 'loan-types', label: 'Kis Tarah Ke Loans Me Possible Hai?' },
    { id: 'bank-agreement', label: 'Bank Kab Raazi Hota Hai?' },
    { id: 'step-by-step', label: 'Step-by-Step Tarika' },
    { id: 'cibil-impact', label: 'CIBIL Score Par Asar' },
    { id: 'faqs', label: 'Frequently Asked Questions' },
  ];

  const faqs = [
    {
      question: 'Kya mai bina lawyer ke apna loan settle kr skta hu?',
      answer: 'Yes, aap bina lawyer ke directly bank ke nodal officer se contact karke apna loan settle kar sakte hain. However, jab bank legal notice bhejta hai ya recovery agents harass karte hain, tab professional debt settlement expert ki madad lena behtar hota hai taaki aap kam se kam amount me settlement kar saken.'
    },
    {
      question: 'Settlement ke baad kya mujhe dobara loan mil sakta hai?',
      answer: 'Loan settlement aapke CIBIL score ko kafi gira deta hai aur aapki credit report par "Settled" likha aata hai. Iske baad aam taur par 3 se 7 saal tak naya unsecured loan milna bahut mushkil hota hai. Aap secured loan ya FD-backed credit card le kar apna CIBIL dreere dreere theek kar sakte hain.'
    },
    {
      question: 'Kya loan settlement ke liye bank 80% tak maaf kar sakta hai?',
      answer: 'Rare cases me jab defaulter ke paas bilkul paisa nahi hota aur account bahut purana NPA ban chuka hota hai, toh bank 80% ya usse zyada late fees aur interest maaf kar sakta hai. Par yeh sirf tab hota hai jab aap apni hardship ko documents (like medical bills or termination letter) ke sath prove karein.'
    },
    {
      question: 'Agar mai settlement nahi karta toh kya mujhe jail ho sakti hai?',
      answer: 'Nahi. Credit card ya personal loan default karna ek civil matter hai. Loan nahi chukana koi criminal offence nahi hai aur iske liye jail nahi hoti, unless aane cheque bounce fraud (Section 138) kiya ho.'
    },
    {
      question: 'Kya settlement ke amount ko EMI me diya ja sakta hai?',
      answer: 'Usually bank One Time Settlement (OTS) cash lump sum me maangte hain. Par agar negotiation achhi ho, toh bank settlement amount ko 3 se 6 EMI me pay karne ka option bhi de dete hain. Iske liye strong negotiation skills chahiye.'
    },
    {
      question: 'Fake settlement agency ko kaise pehchane?',
      answer: 'Agar koi agency aapko 100% guarantee deti hai, aapse bahut bada advance payment maangti hai bina kisi written agreement ke, ya aapko bank ko directly pay karne ke bajaye unke account me paise daalne ko kehti hai, toh woh red flags hain.'
    },
    {
      question: 'Credit card aur personal loan me kiska settlement aasan hai?',
      answer: 'Credit card ka settlement personal loan ke comparison me thoda aasan hota hai kyunki credit card ka interest rate bahut high hota hai aur overdue account tezi se badhta hai. Dono hi unsecured hain, isliye dono ka settlement kiya ja sakta hai.'
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
                    Kya Mai Apna Loan Settle Kr Skta Hu
                  </span>
                </div>
              </li>
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
                <h3 className="font-bold text-gray-900 mb-4 text-base border-b pb-2">Table of Contents</h3>
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
              <h2 id="introduction" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Financial Hardship and Defaulter Solutions</h2>
              <div className="text-gray-700 leading-relaxed text-base mb-16 space-y-10 opacity-90 border-l-4 border-blue-600 pl-8">
                <p>
                  In 2024, over 40% of unsecured loan defaulters in India successfully negotiated a settlement, paying only a fraction of their outstanding dues. But before you ask, "kya mai apna loan settle kr skta hu," you must understand that banks only agree when you can prove severe, verifiable financial hardship, such as a major medical crisis or job loss. Finding yourself buried under a mountain of debt from personal loans or credit cards is a terrifying situation. The endless phone calls from recovery agents, the constant flow of legal notices, and the sheer anxiety of not knowing how to pay your next EMI can destroy your peace of mind. Many Indians believe that defaulting on a bank loan will lead directly to jail or public shaming. However, the truth is very different. Unsecured debts are civil matters, not criminal ones.
                </p>
                <p>
                  If you have lost your income source, experienced a catastrophic business failure, or depleted all your savings due to a medical emergency, paying back the full principal and compounded interest might be mathematically impossible. The banks understand this reality. Rather than spending lakhs of rupees on endless court cases against a borrower who has no liquid assets, banks often prefer to recover whatever small amount they can. This negotiation process is formal, entirely legal, and heavily utilized across the financial sector.
                </p>
                <p>
                  This extensive guide will answer every question you have about resolving your financial crisis. We will look at exactly how banks evaluate your profile, which types of loans qualify for major discounts, and what specific documents you need to force the bank to the negotiating table. If you want a complete overview of all strategies, you can refer to our <Link href="/settling-debt-in-india-guide" className="text-blue-600 font-bold hover:underline">settling debt in India guide</Link>, which covers the broader landscape of financial recovery in the country. Let us break down the exact mechanism of a One Time Settlement so you can take back control of your life.
                </p>
                <p>
                  Remember, knowledge is your only defense against aggressive recovery agents. The moment you understand your rights and the bank's actual internal policies, the fear will vanish. You will no longer be a victim of circumstances. Instead, you will become an informed negotiator working towards a clean slate. Let us begin by defining exactly what this process entails.
                </p>
              </div>
            </section>

            <section>
              <h2 id="meaning-basics" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Loan Settlement Kya Hota Hai? (Meaning & Basics)</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Loan settlement ek aisi mutual agreement hai jahan bank aur borrower ek aisi amount par raazi hote hain jo total outstanding balance se kafi kam hoti hai. Jab aap lagatar kai mahino tak EMI pay nahi kar paate hain, toh bank aapke account ko Non Performing Asset (NPA) ghoshit kar deta hai. Is point par, bank ka primary goal hota hai kisi tarah thoda bahut paisa wapas nikalna. Aap bank ko apni majboori dikhate hain, aur bank aapke late fees aur interest ko maaf karke ek choti principal amount par compromise kar leta hai.
                </p>
                <p>
                  For example, agar aapka total outstanding amount 5 lakh rupees ho gaya hai jisme 3 lakh principal aur 2 lakh penalty/interest hai. Aap apne bank ko proof dete hain ki aapki job chhut gayi hai. Bank aapko ek One Time Settlement offer karta hai jisme aapko sirf 2 lakh ya 1.5 lakh rupees ek sath pay karne hote hain. Agar aap yeh paisa pay kar dete hain, toh bank aapka account band kar deta hai aur future me aap par koi legal action nahi liya jata. Par yeh janna zaroori hai ki settlement aur closure me zameen aasman ka farq hota hai. Agar aap detail me janna chahte hain, toh <Link href="/ots-kya-hota-hai-full-form" className="text-blue-600 font-bold hover:underline">OTS kya hota hai full form</Link> guide zaroor padhein.
                </p>

                <div className="mt-8 overflow-hidden rounded-2xl border border-gray-200">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-gray-900">Feature</th>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-green-700 bg-green-50 border-l border-white">Loan Closure (Full Payment)</th>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-bold text-red-700 bg-red-50 border-l border-white">Loan Settlement (Compromise)</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">Amount Paid</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-green-50 border-l border-white">100% of Principal + Interest + Fees</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-red-50 border-l border-white">Only a mutually agreed fraction (e.g. 30% to 60%)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">CIBIL Score Status</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-green-50 border-l border-white">Marked as "Closed" (Positive Impact)</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-red-50 border-l border-white">Marked as "Settled" (Highly Negative Impact)</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">Future Borrowing</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-green-50 border-l border-white">Easy to get new loans and premium cards</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-red-50 border-l border-white">Extremely difficult for the next 3 to 7 years</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">Bank Document Issued</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-green-50 border-l border-white">No Objection Certificate (NOC)</td>
                        <td className="px-6 py-4 whitespace-normal text-sm text-gray-700 bg-red-50 border-l border-white">Settlement Letter / Settlement NOC</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <p className="mt-8">
                  As shown in the table above, settling is a survival tactic, not a financial hack. You are trading your future creditworthiness for immediate relief from unbearable debt. You should only choose this path if you are truly at a dead end financially.
                </p>
              </div>
            </section>

            <section>
              <h2 id="loan-types" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Kis Tarah Ke Loans Me Settlement Possible Hai?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Bharat me har tarah ke loan ka settlement ek jaisa nahi hota. Secured loans aur unsecured loans ke rules bilkul alag hote hain. Chaliye dekhte hain kin loans me settlement aasan hai aur kin loans me namumkin.
                </p>

                <h3 className="text-base font-bold text-gray-900 mt-10 mb-4">Personal Loans (Unsecured)</h3>
                <p>
                  Personal loans bina kisi collateral (zamanat) ke diye jate hain. Agar aap defaulter ban jate hain, toh bank ke paas apka ghar ya gaadi zapt karne ka haq nahi hota. Isliye, bank aakhir me aapke sath compromise karne par majboor ho jate hain. Ek personal loan me 40% se 60% tak ki chhoot (waiver) milna common hai agar apke documents sahi hon. Par yaad rakhein, bank aapko aasani se nahi chodega. Woh recovery agents bhejege aur pressure banayenge.
                </p>

                <h3 className="text-base font-bold text-gray-900 mt-10 mb-4">Credit Card Debts (Unsecured)</h3>
                <p>
                  Credit card defaults ka settlement sabse zyada common hai. Credit cards par interest rate bahut high (lagbhag 36% to 42% annually) hota hai. Ek chota sa unpaid balance kuch hi mahino me double ho jata hai. Agar aap aise crisis me hain, toh hamari <Link href="/credit-card-settlement" className="text-blue-600 font-bold hover:underline">credit card settlement</Link> guide aapko exact tactics sikhayegi ki banks ke absurd interest charges ko kaise hataya jaye. In mamlo me, banks easily principal amount par negotiate karne aa jate hain jab account 180 days se purana ho jata hai.
                </p>

                <h3 className="text-base font-bold text-gray-900 mt-10 mb-4">Home and Auto Loans (Secured)</h3>
                <p>
                  Secured loans me bank ke paas aapki property ya vehicle ke papers hote hain. Agar aap home loan ya auto loan ka EMI pay nahi karte, toh SARFAESI Act ke tahat bank ek notice bhejkar aapki property ko neelam (auction) kar sakta hai. Isliye, secured loans me bank settlement karne me bilkul interest nahi dikhata. Woh seedha property seize karte hain. Haan, auction se pehle bank thoda bohot penalty waive karke aapko pura paisa bharkar property bachane ka chance zaroor deta hai.
                </p>

                <h3 className="text-base font-bold text-gray-900 mt-10 mb-4">App-Based Instant Loans</h3>
                <p>
                  Aaj kal NBFCs aur digital apps (like Navi, KreditBee) se loan lena aasan ho gaya hai. Yeh bhi unsecured loans hote hain. Par inka settlement process traditional banks se thoda alag aur zyada aggressive hota hai. Digital lenders data access ka fayda uthate hain, isliye inko handle karte waqt legal knowledge hona bahut zaroori hai. Inme bhi settlement hota hai, par initial pressure bahut high rehta hai.
                </p>
              </div>
            </section>

            <section>
              <h2 id="bank-agreement" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Bank Aapka Loan Settle Karne Ke Liye Kab Raazi Hota Hai?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Bahut se logo ko lagta hai ki EMI na bharne ke pehle mahine hi bank unhe chhoot de dega. Aisa nahi hota. Bank ka ek set procedure hai. Bank settlement tabhi manta hai jab unhe lagta hai ki recovery ke saare raste band ho chuke hain aur aage legal case ladna unke liye loss ka sauda hoga.
                </p>
                <p>
                  Sabse pehle, aapka account kam se kam 90 dino tak unpaid hona chahiye. 90 days ke baad, account ko Non Performing Asset (NPA) declare kiya jata hai. Is stage ke baad bhi recovery agents puri koshish karte hain ki aapse pura paisa nikala jaye. Settlement ka asli phase tab shuru hota hai jab account 120 ya 180 dino se unpaid ho aur aap bank ko likhit (written) me bata dein ki aapke paas koi job, koi asset aur koi umeed nahi hai.
                </p>
                <p>
                  Aapki "hardship" asli (genuine) honi chahiye. Bank aapke bank statements check karega. Agar aap keh rahe hain ki aap bankrupt hain aur aapke dusre bank account me lakho rupees pade hain, toh bank aapki baat nahi manega. Yahan medical bills, ICU admit records, job termination letter, aur police complaints (in case of business fraud) sabse bada proof bante hain. Jitna bada apka hardship document hoga, utni hi badi discount (waiver) aapko milegi.
                </p>
              </div>
            </section>

            <section>
              <h2 id="step-by-step" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Apna Loan Settle Karne Ka Step-by-Step Tarika</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Aap ek proper sequence follow karke hi best deal le sakte hain. Agents ke verbal promises par kabhi bharosa na karein. Ek systematic approach hi aapko is trap se bahar nikalegi.
                </p>
                
                <div className="my-12">
                  <h4 className="font-bold text-blue-900 text-base mb-8 border-b-2 border-blue-100 pb-2">The Settlement Action Plan Checklist</h4>
                  
                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">1</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Fund Accumulation</h5>
                      <p className="text-gray-700">Aapko ek lump sum amount jama karna hoga. Settlement EMI me bahut kam hota hai. Bank ko ek bar me paisa dekar account close karna padega. Apni salary ka ek hissa save karein ya family se udhar lekar ek corpus ready karein (kam se kam outstanding amount ka 30% to 50%).</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">2</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Hardship Letter Drafting</h5>
                      <p className="text-gray-700">Bank ke nodal officer ya grievance department ko ek detailed letter likhein. Unhe batayein ki aapke paas income source nahi hai. Saath me proofs attach karein. Unhe wada karein ki aap apna paisa clear karna chahte hain, bas halaat apke khilaf hain.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">3</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Initiate Negotiation Rounds</h5>
                      <p className="text-gray-700">Bank aapki pehli offer reject karega aur apko ek high amount demand karega. Ghabrayein nahi. Yeh ek bargaining process hai. Apne stance par tike rahein. Baar baar batayein ki aapke paas iske alawa aur paisa nahi hai. Yeh process हफ्तों (weeks) tak chal sakta hai.</p>
                    </div>
                  </div>

                  <div className="flex mb-8">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">4</div>
                      <div className="w-1 bg-blue-200 h-full mt-2 rounded"></div>
                    </div>
                    <div className="pb-8">
                      <h5 className="font-bold text-gray-900 text-base mb-2">Demand a Written Settlement Letter</h5>
                      <p className="text-gray-700">Jab ek final figure tay ho jaye, toh bank se official letter head par Settlement Letter maange. Bina is letter ke ₹1 bhi pay na karein. Letter me explicitly likha hona chahiye ki itne paise milne ke baad account settle mana jayega aur CIBIL ko report kiya jayega.</p>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-base shadow-lg z-10">5</div>
                    </div>
                    <div>
                      <h5 className="font-bold text-gray-900 text-base mb-2">Make Payment and Preserve the NOC</h5>
                      <p className="text-gray-700">Paisa online NEFT ya RTGS ke zariye bharein. Koi personal check third party agent ko na dein. Payment ke baad final Settlement NOC prapt karein. Is document ko life time safe rakhein kyunki bhavishya me purana bank dobara aapse paisa maangne ki koshish kar sakta hai due to clerical errors.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-red-50 p-8 rounded-2xl border border-red-200 mt-12">
                  <h4 className="font-bold text-red-900 text-base mb-4">Red Flags: Avoid Fake Settlement Scams</h4>
                  <ul className="list-disc pl-5 text-gray-800 space-y-3">
                    <li><strong>Upfront Fees Demand:</strong> Agar koi agency aapse kaam shuru hone se pehle hajaro rupaye fees maangti hai, toh woh scam ho sakta hai.</li>
                    <li><strong>Personal Account Transfers:</strong> Kabhi bhi kisi agent ke personal account me settlement amount na transfer karein. Paisa hamesha bank ke official loan account me jana chahiye.</li>
                    <li><strong>Guaranteed CIBIL Removal:</strong> Koi bhi company apke CIBIL report se "Settled" tag remove karne ka guarantee nahi de sakti. Yeh illegal hai aur RBI rules ke khilaf hai.</li>
                    <li><strong>Fake Verbal Offers:</strong> "Sir, aaj 10,000 rupaye de do baki baad me dekh lenge" - is tarah ke phone calls sirf pressure tactics hote hain. Hamesha written official email par bharosa karein.</li>
                  </ul>
                </div>

              </div>
            </section>

            <section>
              <h2 id="cibil-impact" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Loan Settlement Ke Baad Aapke CIBIL Score Ka Kya Hoga?</h2>
              <div className="text-gray-700 leading-relaxed mb-12 space-y-8 text-base">
                <p>
                  Yeh ek sabse bada sach hai jise aapko apnana padega. Jab aap bank ko apna pura paisa nahi dete aur settlement ka rasta chunte hain, toh bank CIBIL (Credit Information Bureau India Limited) ko report bhejta hai ki is customer ne compromise karke thoda paisa diya hai. CIBIL aapke credit report me us account ke aage "Settled" likh deta hai.
                </p>
                <p>
                  "Settled" ka tag ek bahut bada daag (stigma) hota hai financial world me. Iska seedha matlab hai ki aap ek high risk borrower hain. Ek bar jab aapki report me "Settled" status aa jata hai, toh apka credit score 50 se 100 points tak ghir sakta hai. Iska asar agle 7 saalo tak rehta hai. Is dauran, aapko home loan, car loan, ya naya credit card milna namumkin jaisa ho jata hai. Agar koi third tier bank aapko loan de bhi de, toh uspar interest rate aam logo se bahut zyada hoga.
                </p>
                <p>
                  Toh iska samadhan kya hai? Samadhan hai financial discipline. Settlement complete karne ke baad, aapko shuruvat se shuru karna padega. Aapko bank me fixed deposit (FD) karani padegi aur uske against ek secured credit card lena hoga. Har mahine us secured card ka chota sa bill time par pay karke, dheere dheere aap apna score wapas bana sakte hain. Yeh process lamba zaroor hai par impossible nahi. Ek baat dhyan rakhein ki "Settled" ka status "Written-Off" se lakh guna behtar hota hai. Written-Off ka matlab hai aapne bank ka poora paisa duba diya, jabki Settled ka matlab hai aapne koshish ki aur mutual agreeement se dispute close kiya.
                </p>
              </div>
            </section>

            <section>
              <h2 id="faqs" className="text-base font-bold text-gray-900 mb-6 scroll-mt-28">Frequently Asked Questions</h2>
              <div className="space-y-10 mb-20">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-gray-50 p-12 rounded-3xl border border-gray-100 hover:scale-[1.01] transition-transform">
                    <h3 className="font-bold text-base text-gray-900 mb-6 leading-snug border-l-4 border-blue-600 pl-6">{faq.question}</h3>
                    <p className="text-gray-700 leading-relaxed text-base">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>
          
          <aside className="lg:w-1/5 hidden lg:block">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg" alt="Aditya Singhal Legal Expert" className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-50 object-cover" />
                <h4 className="font-bold text-gray-900">Aditya Singhal</h4>
                <p className="text-sm text-gray-500 mb-4">Senior Legal Advocate & Financial Strategist</p>
                <p className="text-xs text-gray-400">Expert in dealing with banking regulations, recovery agent harassment, and complex debt restructuring matters.</p>
              </div>
            </div>
          </aside>

        </div>
      </div>
    </main>
  );
}
