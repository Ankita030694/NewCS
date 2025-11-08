'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import TableOfContents from '@/components/TableOfContents';

export default function DelhiPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'delhi-cc-settlement', text: 'Credit Card Settlement in Delhi NCR', level: 2 },
    { id: 'delhi-card-culture', text: 'Delhi NCR Credit Card Spending Patterns', level: 2 },
    { id: 'emi-trap', text: 'The Zero Interest EMI Trap', level: 2 },
    { id: 'delhi-challenges', text: 'Six Common Credit Card Debt Issues in Delhi', level: 2 },
    { id: 'credsettle-process', text: 'How CredSettle Handles Delhi Card Cases', level: 2 },
    { id: 'settlement-strategy', text: 'Our Settlement Approach for Card Debt', level: 3 },
    { id: 'legal-protection', text: 'RBI Rules That Protect You', level: 3 },
    { id: 'multiple-cards', text: 'Managing Multiple Credit Cards Together', level: 2 },
    { id: 'ncr-regions', text: 'Delhi Gurgaon Noida Credit Card Debt', level: 2 },
    { id: 'benefits', text: 'Five Key Benefits of Card Settlement', level: 2 },
    { id: 'your-rights', text: 'Your Legal Rights Against Card Harassment', level: 2 },
    { id: 'settlement-steps', text: 'Complete Settlement Process Step by Step', level: 2 },
    { id: 'real-case', text: 'Real Case: Gurgaon Corporate Saved 64%', level: 2 },
    { id: 'start-today', text: 'Get Free Credit Card Debt Consultation', level: 2 },
    { id: 'faqs', text: 'Delhi Credit Card Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'Is credit card settlement legal in Delhi?',
      answer: 'Yes, completely legal in Delhi and all over India. RBI recognizes settlement as a valid way to resolve credit card debt. Banks have dedicated teams handling settlements daily. Your right to negotiate is protected under banking regulations. No legal issues whatsoever.'
    },
    {
      question: 'Can I settle all my credit cards at once?',
      answer: 'Yes. Most Delhi NCR clients have 4-6 credit cards (HDFC, ICICI, SBI, Axis, Citi, etc). We handle all cards together using a coordinated approach. Single timeline, one legal process, all cards closed at the same time. Much better than dealing with each bank separately.'
    },
    {
      question: 'What is the zero interest EMI trap?',
      answer: 'Banks say "buy now, pay in 12 month EMI at zero interest". Sounds great. But processing fees of 2-3% upfront plus foreclosure charges if you want to close early. The real trap is buying multiple things on EMI. Each purchase looks affordable but total EMI adds up to more than your salary can handle.'
    },
    {
      question: 'How much can I save on credit card settlement in Delhi?',
      answer: 'Delhi NCR clients typically save 40-75% on credit card debt. Our average for Delhi is 56% reduction. Amount depends on how long cards are overdue, number of cards, total outstanding. Higher amounts usually get better percentage savings because banks prefer recovery over complete write-off.'
    },
    {
      question: 'Will settlement stop credit card collection calls?',
      answer: 'Yes, within 5-7 days. We send legal notices to all banks under RBI Fair Practices Code. Collection calls, WhatsApp messages, emails all stop immediately. If any bank continues calling after our notice, we file Banking Ombudsman complaint. Very effective across Delhi NCR.'
    },
    {
      question: 'What happens to credit score after settlement?',
      answer: 'Score drops initially (probably already down if cards are overdue). Settled status remains for 7 years but impact reduces with time. After 18-24 months of no new defaults plus using small secured credit (FD-backed card), score recovers to 650-700 range. We guide you through rebuilding.'
    },
    {
      question: 'Can I get new credit cards after settlement?',
      answer: 'Not right away. Wait at least 2-3 years. Start with secured credit card (backed by fixed deposit) after 18 months to rebuild credit history. Make regular payments for 12-18 months. Then try applying for regular cards with lower limits. Slow rebuilding works best.'
    },
    {
      question: 'How long does credit card settlement take in Delhi?',
      answer: 'Usually 50-90 days from first call to final closure. Delhi cases sometimes go faster because many banks have main offices here. Multiple card cases can take up to 100 days because coordinating with 5-6 banks takes time. Still much better than years of EMI payments.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white mt-6">
      {!isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background: '#007AFF',
            filter: 'blur(400px)',
            WebkitFilter: 'blur(400px)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.6,
            willChange: 'filter',
            backfaceVisibility: 'hidden'
          }}
        />
      )}

      {isFirefox && (
        <div
          className="absolute top-0 left-0"
          style={{
            width: '757px',
            height: '757px',
            borderRadius: '757px',
            background:
              'radial-gradient(circle, rgba(0, 122, 255, 0.4) 0%, rgba(0, 122, 255, 0.2) 30%, rgba(0, 122, 255, 0.1) 60%, transparent 100%)',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
            opacity: 0.9
          }}
        />
      )}

      <Navbar />

      <div className="relative z-10" style={{ paddingTop: '84px' }}>
        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-4"
          style={{ maxWidth: '1280px', marginBottom: '48px' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between" style={{ gap: '24px' }}>
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto order-1 lg:order-2" style={{ minWidth: '0', position: 'relative' }}>
              <img
                src="/personalhero.png"
                alt="Credit Card Settlement Delhi NCR"
                className="w-full max-w-[280px] md:max-w-[400px] lg:max-w-[520px]"
                style={{
                  height: 'auto',
                  transform: 'rotate(335deg)',
                  transformOrigin: 'center'
                }}
              />
            </div>
            <div className="flex-1 w-full lg:w-auto order-2 lg:order-1" style={{ maxWidth: '640px' }}>
              <h1
                className="text-2xl md:text-3xl lg:text-[40px] leading-tight lg:leading-[65px]"
                style={{
                  color: '#0C2756',
                  fontFamily: 'Poppins',
                  fontStyle: 'normal',
                  fontWeight: '400',
                  marginBottom: '12px'
                }}
              >
                Credit Card Settlement Delhi Gurgaon Noida NCR - Break Free From EMI Trap
              </h1>
              <p
                className="text-xs md:text-sm lg:text-[14px] leading-relaxed"
                style={{
                  color: 'rgba(12, 39, 86, 0.70)',
                  fontFamily: 'Poppins',
                  lineHeight: '28px',
                  marginBottom: '20px'
                }}
              >
                Stuck with credit card debt in Delhi, Gurgaon, Noida or anywhere in NCR? Multiple cards, EMI on EMI, interest piling up every month? CredSettle helps you settle credit card debt legally. Reduce outstanding by 40-75% through RBI-compliant negotiation. Stop collection calls within 7 days. Over 7,800 Delhi NCR families became debt-free from credit card burden.
              </p>
              <button
                className="text-white text-sm md:text-base lg:text-[18.58px] px-6 md:px-8 lg:px-[39.44px] py-2 md:py-3 lg:py-[13.48px]"
                style={{
                  borderRadius: '32.4px',
                  background: '#007AFF',
                  boxShadow:
                    '0 0.9px 6.12px 0 rgba(0, 0, 0, 0.35), 0 -3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset, 0 3.6px 3.6px 0 rgba(255, 255, 255, 0.25) inset'
                }}
              >
                Get Free Consultation Now
              </button>
            </div>
          </div>
        </section>

        <section
          className="w-full mx-auto px-4 md:px-6 lg:px-5"
          style={{
            maxWidth: '1280px',
            marginBottom: '48px',
            position: 'relative'
          }}
        >
          <div 
            className="flex flex-col gap-4 lg:gap-8" 
            style={{ 
              alignItems: 'flex-start',
              position: 'relative'
            }}
          >
            <div className="w-full">
              <TableOfContents headings={headings} />
            </div>

            <div className="w-full" style={{ minWidth: '0', minHeight: '100vh' }}>
              
              <section id="delhi-cc-settlement" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Credit Card Settlement in Delhi NCR
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Delhi NCR stands as India's corporate hub with massive credit card usage across Delhi, Gurgaon, Noida, Faridabad and Ghaziabad. As of 2024, NCR accounts for second highest credit card debt concentration in India. Corporate professionals earning 8-30 lakhs annually carry 4-6 credit cards on average (HDFC, ICICI, SBI, Axis, Citi, Standard Chartered). Easy approvals, lifestyle demands, EMI culture and high interest rates (36-42% annually) have created a debt crisis affecting thousands of families.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit card settlement</strong> means negotiating with banks to pay a reduced lump sum amount instead of full outstanding balance. RBI recognizes this as a legal way to resolve debt. Banks have dedicated credit card recovery divisions that handle settlement cases every day. This is not a loan waiver or bankruptcy. You pay what you can afford, bank accepts it as full and final, all done legally.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    CredSettle has settled credit card debt for over 7,800 Delhi NCR clients across all regions. Our Delhi clients typically save 40-75% on credit card outstanding (regional average: 56% reduction). Every settlement follows RBI rules, stops harassment within 7 days, gets proper legal documentation, and permanently closes all cards with zero future claims from banks.
                  </p>
                </div>
              </section>

              <section id="delhi-card-culture" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Delhi NCR Credit Card Spending Patterns
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Delhi NCR has unique credit card spending culture shaped by corporate lifestyle, mall culture, online shopping boom, and peer pressure. High salaries in Gurgaon and Noida create illusion of affordability. Banks push credit cards aggressively with reward programs, lounge access, cashback, and zero interest EMI schemes. Easy to get cards, very difficult to manage them properly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Corporate EMI culture:</strong> First card for regular expenses. Second card for gadgets on EMI. Third premium card for status and airport lounge. Fourth card taken for balance transfer offer. Soon you have 5 cards, each with 1-3 lakh limit. Total exposure 6-12 lakhs. Feels like purchasing power, actually borrowed money. This mindset destroys financial health.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Zero interest EMI trap:</strong> Bought latest iPhone for 1.3 lakhs on 12 month "zero interest" EMI. Took laptop for 80,000 on 9 month EMI. Purchased refrigerator and washing machine for 1.2 lakhs on EMI. Booked vacation to Thailand for 1.5 lakhs on EMI. Each seemed affordable (8,000-10,000 monthly EMI). But total 40,000 monthly just for EMIs. Salary 90,000, rent 25,000. Not sustainable.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Online shopping addiction:</strong> Amazon, Flipkart, Myntra sales every week. Sale notifications on phone. Credit card saved in apps. One click purchase. Easy checkouts. No pain of paying cash. Orders arrive at Gurgaon and Noida homes daily. Bills arrive later. By then already spent too much. Monthly statements show 50-80 small transactions adding up to lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weekend spending pattern:</strong> NCR mall culture. Ambience, DLF Cyberhub, Select Citywalk, Mall of India. Shopping, dining, movies every weekend. Each outing costs 4,000-8,000 for family. Happens 3-4 times per month. 20,000-30,000 on entertainment and dining alone. All on credit cards. Small spends add up to huge debt.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Corporate peer pressure:</strong> Colleagues upgrade phones every year. Everyone drives new car. Foreign vacations twice a year. Premium credit cards as status symbol. Trying to match lifestyle of others without having same financial capacity. Credit cards bridge the gap temporarily. But debt builds up fast.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We understand Delhi NCR credit card culture completely. We know that corporate lifestyle demands are real. Living in Gurgaon or Noida is expensive. But when bills become impossible to manage, settlement provides a legal way out. We have helped thousands break free from this debt cycle.
                  </p>
                </div>
              </section>

              <section id="emi-trap" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  The Zero Interest EMI Trap
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Zero interest EMI is the smartest marketing trick banks and e-commerce companies use. Sounds helpful (buy expensive things, pay in easy monthly installments, no interest). Actually creates massive debt trap. Here is how it works against you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Processing fees hidden cost:</strong> Buy iPhone for 1.2 lakhs on "zero interest" 12 month EMI. Bank charges 2-3% processing fee upfront (2,400-3,600). So actual cost 1.23 lakhs, not 1.2 lakhs. And if you want to close EMI early (foreclosure), another 2-3% charge. So zero interest is not really zero cost.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real trap is multiple EMIs:</strong> Each individual EMI looks small and affordable. Phone EMI 10,000 monthly. Laptop EMI 9,000 monthly. Vacation EMI 12,000 monthly. Furniture EMI 8,000 monthly. LED TV EMI 6,000 monthly. Each purchase decision made separately. But total 45,000 monthly. Salary 1 lakh, rent 30,000. Left with 25,000 for food, bills, transport, savings. Impossible.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Real example from Gurgaon client:</strong> Working in IT company, earning 12 lakhs annually (1 lakh monthly). Had 4 credit cards with total 8 lakhs limit. Over 18 months, bought many things on EMI. iPhone 1.3 lakhs, MacBook 1.1 lakhs, LED TV 65,000, Sofa set 80,000, Vacation 1.5 lakhs, Bike 1.4 lakhs. All on different cards, all on "zero interest EMI". Each seemed affordable. But total EMI across 4 cards reached 52,000 monthly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>What happens next:</strong> Cannot pay 52,000 EMI on 1 lakh salary after rent and expenses. Starts paying minimum on some cards. Those cards start charging 3.5% monthly interest (42% annually). Outstanding starts growing. After 6 months, total card debt 6.2 lakhs. After 12 months, debt 7.8 lakhs even though kept paying something. Interest and fees eating everything.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why banks love EMI customers:</strong> Person who pays full bill gives bank zero profit. Person stuck in EMI trap and then minimum payments gives bank huge interest income for years. Banks actively promote EMI schemes. Sales people at stores push EMI. "Just 8,000 per month, you can afford it easily." They never ask how many other EMIs you already have running.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement breaks EMI trap:</strong> Instead of paying 52,000 monthly for 8+ years (total 50+ lakhs paid), you negotiate one-time settlement. 7.8 lakh card debt settles for 3.2 lakhs. Save 4.6 lakhs. All cards closed. All EMIs stopped. Legal exit. This is why settlement makes sense for people trapped in EMI cycle that never ends.
                  </p>
                </div>
              </section>

              <section id="delhi-challenges" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Six Common Credit Card Debt Issues in Delhi
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>1. Job Change Gap:</strong> Delhi NCR professionals switch jobs frequently for better packages. But gap between jobs (notice period, finding new role) creates income gap. Credit card EMIs keep running. Use savings to pay for 2-3 months. Then savings finish. Cards go overdue. We have settled 2,400+ cases involving job change gaps.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Startup Failures:</strong> Many Gurgaon professionals quit corporate jobs to start their own business. Use personal credit cards for business expenses (inventory, marketing, vendor payments). Business does not work out after 1-2 years. Left with 5-8 lakhs card debt. No business income, difficult to find corporate job again. Need settlement to start fresh.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Real Estate Down Payment:</strong> NCR property prices very high. Gurgaon flats cost 80 lakhs to 2 crores. Noida flats 50 lakhs to 1.5 crores. Need 20% down payment. Use credit cards to arrange down payment (cash advance, balance transfer cheques). Pay 15-20 lakhs down. Now have home loan EMI 40,000 plus credit card EMI 45,000. Total 85,000 on 1.2 lakh salary. Cannot sustain. Cards default within months.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Medical Emergency Expenses:</strong> Serious illness, accident, surgery. Delhi NCR hospitals expensive. Bills 4-10 lakhs. Insurance does not cover full amount or claim gets rejected. Use credit cards to pay hospital. Then cannot repay cards because income reduced during illness or recovery. Medical documentation helps in settlement negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Marriage Expenses:</strong> NCR weddings expensive. Venue in Gurgaon 3-8 lakhs. Catering, jewelry, clothes, gifts, honeymoon abroad. Total 10-18 lakhs. Families use multiple credit cards across members. After wedding, have huge debt but no extra income to repay. We settle using wedding expense proof.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>6. Salary Cut During COVID:</strong> Many companies cut salaries by 20-40% during 2020-2022. Some people lost jobs. Had 4-5 cards with EMIs based on old higher salary. When salary reduced or stopped, could not maintain payments. Cards went overdue during COVID period. Now need settlement to clear old debt and restart life.
                  </p>
                </div>
              </section>

              <section id="credsettle-process" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  How CredSettle Handles Delhi Card Cases
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    We have handled 7,800+ credit card settlements across Delhi NCR in last four years. Our Delhi clients save an average of 56% on their credit card debt. We work with all major banks (HDFC, ICICI, SBI, Axis, Citi, Standard Chartered, HSBC, American Express, Kotak, IndusInd, Yes Bank) and NBFCs (Bajaj Finserv, HDB Financial).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our Delhi NCR advantage:</strong> We are registered legal services company following every RBI rule. We understand NCR corporate culture, EMI trap patterns, job change challenges. We have local legal partners in Delhi, Gurgaon and Noida who know regional banking systems and consumer courts.
                  </p>

                  <div id="settlement-strategy" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                    <h3
                      className="text-lg md:text-xl lg:text-[24px] leading-tight"
                      style={{
                        color: '#0C2756',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        lineHeight: '32px',
                        marginBottom: '16px'
                      }}
                    >
                      Our Settlement Approach for Card Debt
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      <strong>Step 1: Complete Card Analysis</strong> - List all cards (bank name, outstanding amount, EMI details, overdue months). Calculate total exposure. Check which cards are still negotiable. Free confidential consultation. <strong>Step 2: Stop Harassment Immediately</strong> - Legal notices to all banks under RBI Fair Practices Code for credit cards. Collection calls stop within 5-7 days. Works across all banks operating in Delhi NCR. <strong>Step 3: Build Strong Case File</strong> - Collect your salary slips, bank statements, hardship documents (job loss letter, medical bills, business closure proof). Show banks your genuine inability to pay full amount. <strong>Step 4: Multi-Card Negotiation</strong> - If you have 5 cards, we negotiate all together using single hardship case. Coordinate with all banks simultaneously for better results. Present EMI trap math showing how current payment structure is impossible. <strong>Step 5: Settlement Documentation</strong> - Get written settlement offers from each bank. Review all terms legally before you pay. Make sure offer clearly states no future claims after settlement amount paid. <strong>Step 6: Credit Rebuilding Guidance</strong> - After settlement, guide you on secured credit cards, score rebuilding, future credit management to avoid same trap again.
                    </p>
                  </div>

                  <div id="legal-protection" style={{ marginTop: '32px', scrollMarginTop: '100px' }}>
                    <h3
                      className="text-lg md:text-xl lg:text-[24px] leading-tight"
                      style={{
                        color: '#0C2756',
                        fontFamily: 'Poppins',
                        fontWeight: 600,
                        lineHeight: '32px',
                        marginBottom: '16px'
                      }}
                    >
                      RBI Rules That Protect You
                    </h3>
                    <p style={{ marginBottom: '16px' }}>
                      Every settlement follows RBI Master Directions on Credit Card Operations. You get: (1) Written settlement letter from bank on official letterhead, (2) Clear mention that settled amount is full and final with no more claims, (3) NOC (No Objection Certificate) after payment, (4) Credit bureau reporting as "settled" status, (5) All documents within 30 days as per RBI timeline. Our Delhi legal team ensures complete compliance with banking regulations.
                    </p>
                  </div>
                </div>
              </section>

              <section id="multiple-cards" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Managing Multiple Credit Cards Together
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Most Delhi NCR clients have debt across 4-6 credit cards. Typical Gurgaon professional we help has: HDFC card 1.5 lakhs, ICICI card 2.2 lakhs, SBI card 90,000, Axis card 1.8 lakhs, Citi card 1.1 lakhs. Total 7.6 lakhs across 5 cards. Dealing with each bank separately is very difficult. Different recovery agents, different timelines, different settlement offers. Very confusing and stressful.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Our coordinated method:</strong> We treat all your cards as one debt portfolio. Create single hardship file with all documentation. Contact all 5 banks in the same week. Present identical financial situation to each bank. Negotiate similar settlement percentages across cards. Coordinate so all settlements close within 15-20 days of each other. You arrange total settlement money once. Pay all banks. All cards closed together. Complete exit from credit card debt.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Why coordinated approach works:</strong> When bank A knows you are settling with banks B, C, D, E as well, they are more willing to accept reduced payment. They do not want to be the only bank still chasing you after others settled. Also, paying one bank full amount while not paying others can create legal issues of preferential payment. So banks prefer everyone settling together.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Different settlement percentages:</strong> Card overdue 18 months settles at 35-40% typically. Card overdue 10 months settles at 50-55%. Card overdue only 4 months settles at 65-70%. We negotiate best percentage for each card based on overdue period, your payment history, bank policies. Average across all cards comes to about 56% savings for Delhi clients.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Premium card settlement:</strong> American Express, Diners Club, premium versions of bank cards (Infinia, Emerald, Signature). These have high annual fees 5,000-15,000. Outstanding might be higher. But settlement works same as regular cards. Once debt becomes NPA (non-performing asset), banks treat all cards similarly. Premium status does not matter much in settlement negotiations.
                  </p>
                </div>
              </section>

              <section id="ncr-regions" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Delhi Gurgaon Noida Credit Card Debt
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Delhi:</strong> Capital city with government employees, private sector professionals, business community. South Delhi, Central Delhi, East Delhi. Mix of income levels. Card usage for lifestyle, medical emergencies, family expenses. Average 3-5 cards per person, 3-6 lakhs total debt. We have handled 3,200+ Delhi cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Gurgaon:</strong> Corporate hub with MNCs, IT companies, consulting firms. DLF Phase 1-5, Golf Course Road, Cyber City, Sohna Road. Professionals earning 10-35 lakhs annually. Heavy card usage for gadgets, cars, property down payments, foreign vacations. Average 5-6 cards per person, 6-10 lakhs total debt. We have settled 2,800+ Gurgaon cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Noida and Greater Noida:</strong> IT and manufacturing hub. Sectors 18, 62, 142, 143, 150. Mix of IT professionals and middle management. Card usage for home appliances on EMI, online shopping, education expenses. Average 4-5 cards per person, 3-7 lakhs total debt. We have settled 1,500+ Noida cases.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Faridabad and Ghaziabad:</strong> Industrial cities with salaried class. Card usage for family needs, medical expenses, small business funding. Average 2-4 cards per person, 2-4 lakhs total debt. We have handled 300+ cases in these cities.
                  </p>
                </div>
              </section>

              <section id="benefits" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Five Key Benefits of Card Settlement
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>1. Save 40-75% on Credit Card Debt:</strong> Delhi NCR clients save 56% on average. 6 lakh card debt becomes 2.6 lakh settlement. That is 3.4 lakhs saved. Much better than paying EMIs for 10+ years and spending double the original amount.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>2. Break EMI Trap Forever:</strong> No more paying 35,000-50,000 monthly that goes mostly to interest with principal barely reducing. One-time payment closes all cards. Freedom from monthly EMI burden.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>3. Stop Collection Harassment Fast:</strong> Legal notices to all banks. Recovery calls, WhatsApp messages, emails stop within 5-7 days. Mental peace restored.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>4. Handle All Cards At Once:</strong> Do not fight 5-6 banks separately. We negotiate all simultaneously with coordinated strategy. Single payment timeline. All cards closed together.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>5. Legal RBI-Compliant Process:</strong> Every settlement properly documented. Settlement letters, payment receipts, NOC certificates. No bank can come back later claiming you still owe money. Important for corporate professionals who need clean financial records.
                  </p>
                </div>
              </section>

              <section id="your-rights" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Your Legal Rights Against Card Harassment
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Know your rights as Delhi NCR credit card holder. RBI has clear rules for card recovery that protect you:
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>RBI Fair Practices for Credit Cards:</strong> Banks cannot call before 8am or after 7pm. Cannot call more than 3 times per week. Cannot use threatening language or abusive words. Cannot contact your office or family without your written permission. Cannot visit your home repeatedly. If banks break these rules, file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>No Criminal Case for Card Debt:</strong> Credit card debt is a civil matter, not criminal. Banks cannot threaten police case or arrest. Recovery agents saying "we will file cheating case" are lying to scare you. Only if you gave fake documents during card application can there be criminal case. Normal card usage and not being able to pay is purely civil debt matter.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Right to Negotiate Settlement:</strong> You have full right to negotiate and settle your debt. Bank cannot force you to pay 100% if you are in genuine financial hardship. RBI prefers settlement over long court battles.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Documentation Rights:</strong> After you pay settlement amount, bank must provide NOC and settlement letter within 30 days maximum as per RBI rules. If they delay, you can file Banking Ombudsman complaint.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Credit Bureau Rights:</strong> Bank must report "settled" status to CIBIL, Experian, Equifax, CRIF after settlement. You can check your credit report free once per year from each bureau. If wrongly reported, file dispute with bureau.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Consumer Court Access:</strong> If bank violated fair practices or harassed you, file case in Delhi Consumer Court. Patiala House Courts and District Consumer Forums in NCR handle banking complaints. Many banks settle quickly to avoid court.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    We protect all these rights during settlement process. If any bank violates rules, we take immediate legal action including Banking Ombudsman complaints and consumer court cases when necessary.
                  </p>
                </div>
              </section>

              <section id="settlement-steps" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Complete Settlement Process Step by Step
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 1-2: First Call</strong> - Free 30-40 minute consultation. You tell us about all your cards, outstanding amounts, EMI details, how long overdue, harassment level. We explain settlement process, realistic savings, expected timeline.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 3-8: Documentation</strong> - You share all card statements, ID proof, salary slips, bank statements, hardship details (job loss letter, medical bills, business closure documents). We build strong case file showing your genuine financial situation.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Days 8-12: Stop Harassment</strong> - Legal notices sent to all banks citing RBI Fair Practices Code. Recovery calls stop within 5-7 days. You get mental peace while we handle negotiations.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 2-7: Multi-Card Negotiation</strong> - Our Delhi NCR team contacts recovery divisions of all your banks. Present your hardship case with documents. Show EMI trap math proving current structure is unsustainable. Negotiate 40-75% reductions. Multiple rounds with each bank. Coordinate timing so all banks agree within similar timeframe.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 7-9: Settlement Agreements</strong> - All banks send formal written settlement offers. We review every letter legally. Verify terms are clear (settlement amount, no future claims, NOC timeline). Only after complete verification, we advise you to pay.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 9-11: Payment</strong> - You arrange settlement money (savings, family help, PF withdrawal, personal loan from friends, loan against property if you own one). Pay each bank their agreed settlement amount. Keep all payment receipts carefully.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Weeks 11-15: Document Collection</strong> - Banks have 30 days to send NOC and closure letters per RBI rules. We follow up aggressively with each bank. Collect all closure documents. Verify credit bureau updates showing "settled" status on all three bureaus.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Post-Settlement: Credit Rebuilding</strong> - We guide you on how to get secured credit card (backed by fixed deposit) after 18 months. Show you how to gradually rebuild credit score. Advise on managing credit in future to avoid same trap.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Total timeline:</strong> Usually 50-90 days for Delhi NCR cases. Multiple card cases can take up to 100 days because coordinating 5-6 banks takes time. Still infinitely better than 10-15 years stuck in EMI trap paying double the original amount.
                  </p>
                </div>
              </section>

              <section id="real-case" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Real Case: Gurgaon Corporate Saved 64%
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The Card Holder:</strong> Rajesh M., age 32, senior consultant in MNC, Cyber City Gurgaon. Earning 16 lakhs annually (1.33 lakhs monthly). Had 5 credit cards: HDFC 2.1 lakhs, ICICI 1.9 lakhs, Axis 1.6 lakhs, SBI 1.3 lakhs, Citi 1.2 lakhs. Total outstanding 8.1 lakhs.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How Debt Happened:</strong> Rajesh got first card at age 26. By 30, had 5 cards with total 10 lakh limit. Used cards heavily for lifestyle. Bought iPhone and MacBook on EMI (2.2 lakhs). Bought Royal Enfield bike on card EMI (1.5 lakhs). Took 3 foreign trips on card EMI (3.5 lakhs). Bought furniture and gadgets for apartment on EMI (1.8 lakhs). Each purchase seemed affordable with monthly EMI of 8,000-12,000. But total EMI across 5 cards reached 48,000 monthly.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>The Trap:</strong> Salary 1.33 lakhs, minus rent 32,000, minus card EMI 48,000. Left with 53,000 for food, transport, bills, parents support. Barely managing. Then company announced 25% salary cut due to project losses. Salary reduced to 1 lakh. Now impossible to pay 48,000 EMI. Started paying minimum on some cards to manage. Within 6 months, 3 cards went overdue. After 10 months, all 5 cards overdue. Outstanding grew to 8.1 lakhs due to interest and late fees.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Harassment Started:</strong> Recovery calls 25-30 daily from different banks. Threatening messages. Calls to office phone. Colleague picked up once, very embarrassing. Mental stress affecting work performance. Not sleeping properly. Afraid to answer phone.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Found Us:</strong> Rajesh contacted us April 2023. We immediately sent legal notices to all 5 banks. Harassment stopped within 6 days. Complete relief. Built hardship file showing salary cut, years of regular payments before default, EMI trap math. Showed banks that Rajesh had paid 6.8 lakhs in last 4 years but still owed 8.1 lakhs due to interest trap.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Settlement Success:</strong> Negotiated for 2.5 months with all 5 banks. Final settlements: HDFC at 36% (75,600), ICICI at 38% (72,200), Axis at 35% (56,000), SBI at 40% (52,000), Citi at 34% (40,800). Total settlement 2.91 lakhs for 8.1 lakh debt. Saved 5.19 lakhs (64% reduction).
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>How He Paid:</strong> Rajesh borrowed 1.5 lakhs from parents, 1 lakh from brother, withdrew 41,000 from PF. Total 2.91 lakhs arranged. Paid all banks July 2023. All 5 cards permanently closed. Received NOCs from all banks by September 2023.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Life After Settlement:</strong> Rajesh is completely card-free now. Repaid family over 20 months. Uses only debit card. CIBIL dropped to 495 during default period, now slowly recovering at 615 after 18 months of no new defaults. His words: "CredSettle team explained the EMI trap I was stuck in. I was buying things thinking EMI is affordable but did not see total picture. Saved me 5 lakhs and my mental health. I was heading toward depression. Now life is peaceful."
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Timeline:</strong> April 2023 first call, April-June negotiation period, July 2023 payment to all banks, September 2023 all documents received. Total duration: 5 months. Compare this to 12-15 years stuck in EMI minimum payment trap.
                  </p>
                </div>
              </section>

              <section id="start-today" style={{ marginBottom: '48px', scrollMarginTop: '100px' }}>
                <h2
                  className="text-xl md:text-2xl lg:text-[32px] leading-tight"
                  style={{
                    color: '#0C2756',
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    lineHeight: '36px',
                    marginBottom: '20px'
                  }}
                >
                  Get Free Credit Card Debt Consultation
                </h2>
                <div
                  className="text-sm md:text-base lg:text-[16px] leading-relaxed"
                  style={{
                    color: 'rgba(12, 39, 86, 0.80)',
                    fontFamily: 'Poppins',
                    lineHeight: '28px'
                  }}
                >
                  <p style={{ marginBottom: '16px' }}>
                    Drowning in credit card debt in Delhi, Gurgaon, Noida or anywhere in NCR? Multiple cards, EMI on EMI, recovery harassment? You do not have to suffer alone. Settlement is completely legal. RBI allows it. Banks handle settlements every day. It exists exactly for situations like yours.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Credit card debt destroys peace of mind. Phone rings 25 times daily with collection calls. Cannot concentrate at work. Family worried. Sleep disturbed. Every day you delay, interest keeps adding up. 3.5% monthly interest (42% annually) means your debt grows by 30,000-50,000 every month you do not act. EMI payments keep you trapped for 10-15 years paying double or triple the original amount.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Take action today:</strong> Free confidential consultation. No obligations, no upfront payment needed. Just honest assessment of your situation and clear options available. Our Delhi NCR experts will show exactly how much you can save, how quickly harassment will stop, what documents are needed. We have helped 7,800+ Delhi NCR families escape credit card trap. You can be next.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Do not let credit card debt ruin your life and career. With our legal team, Delhi NCR banking knowledge and proven settlement track record, you can close all cards legally and start fresh. EMI culture trapped you, legal settlement frees you. Call today.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    <strong>Call CredSettle for free consultation.</strong> Delhi, Gurgaon, Noida, Faridabad or any NCR location. Whether 2 cards or 6 cards, 50,000 debt or 10 lakh debt, legal solution exists. We will help you find it.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section className="w-full py-12" id="faqs" style={{ scrollMarginTop: '100px' }}>
          <div className="w-full max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center gap-8 md:gap-14">
              <FAQWithSchema
                faqs={faqs}
                title="Credit Card Settlement in Delhi"
              />

              <div
                className="flex justify-center items-center w-full rounded-xl px-3 py-8 md:py-[63px]"
                style={{
                  background: 'linear-gradient(180deg, rgba(191, 238, 255, 0.50) 27.61%, #007AFF 100%)',
                  boxShadow: '0 5px 16px 0 rgba(0, 0, 0, 0.15)'
                }}
              >
                <div className="flex flex-col items-center gap-[35px] w-full max-w-[644px]">
                  <div className="flex flex-col items-center gap-[28px] w-full">
                    <h2
                      className="text-center text-[21px] md:text-[28px] leading-[21px] md:leading-[28px] font-normal w-full"
                      style={{ color: '#0C2756' }}
                    >
                      Break Free from Credit Card Debt?
                    </h2>
                    <p
                      className="text-center text-[14px] md:text-[18px] leading-[14px] md:leading-[18px] font-normal w-full"
                      style={{ color: 'rgba(12, 39, 86, 0.70)' }}
                    >
                      Join 7,800+ Delhi NCR families debt-free. Multiple cards, EMI trap, all cases welcome. Free consultation, fast harassment stop.
                    </p>
                  </div>

                  <button
                    className="px-[28px] py-[14px] rounded-xl bg-white transition-opacity duration-200 hover:opacity-90"
                    style={{
                      boxShadow: '0 -3px 7px 0 rgba(9, 9, 9, 0.30) inset, 0 3px 7px 0 rgba(9, 9, 9, 0.30) inset'
                    }}
                  >
                    <span
                      className="text-[13px] md:text-[14px] leading-[13px] md:leading-[14px] font-normal"
                      style={{ color: '#0C2756' }}
                    >
                      Get Your Free Consultation Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div style={{ marginTop: '100px' }}>
        <Footer />
      </div>
    </div>
  );
}



