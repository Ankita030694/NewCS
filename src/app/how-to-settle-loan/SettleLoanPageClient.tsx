'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQWithSchema from '@/components/FAQWithSchema';
import VerticalTableOfContents from '@/components/VerticalTableOfContents';
import CTAButton from '@/components/CTAButton';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function SettleLoanPageClient() {
  const [isFirefox, setIsFirefox] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    setIsFirefox(userAgent.includes('firefox'));
  }, []);

  const headings = [
    { id: 'introduction', text: 'How to Settle Loan Online', level: 2 },
    { id: 'eligibility', text: 'Who Can Settle Loans?', level: 2 },
    { id: 'settlement-timeline', text: 'The Settlement Timeline', level: 2 },
    { id: 'agency-vs-legal', text: 'Agencies vs Legal Firms', level: 2 },
    { id: 'document-checklist', text: 'Process & Documents', level: 2 },
    { id: 'scam-alert', text: 'Scams to Avoid', level: 2 },
    { id: 'cibil-impact', text: 'CIBIL Impact & Repair', level: 2 },
    { id: 'comparison-criteria', text: 'Why CredSettle?', level: 2 },
    { id: 'faqs', text: 'Settlement FAQs', level: 2 }
  ];

  const faqs = [
    {
      question: 'How to settle loan with bank without harassment?',
      answer: 'The only legal way to stop harassment while negotiating a settlement is to hire a legal representative. Banks are legally allowed to recover dues, but they cannot harass. When a lawyer represents you, all communication must go through them. We send a legal notice to the bank acting as a shield, allowing us to negotiate the settlement terms peacefully while you are protected from daily abuse.'
    },
    {
      question: 'What is the minimum amount to settle loan?',
      answer: 'There is no fixed statutory minimum, but practically, banks rarely accept less than 30% of the Principal Outstanding. The total "outstanding" includes interest and penalties, which can be waived. A good settlement target is 40-50% of the Principal amount. For example, if you took a ₹5 Lakh loan and it has grown to ₹9 Lakhs with interest, a good lawyer can help you likely settle it for ₹2-2.5 Lakhs.'
    },
    {
      question: 'Can settle loan app help me remove negative CIBIL?',
      answer: 'No app can "delete" a CIBIL history. That is a scam promise. However, a proper legal settlement ensures the status is updated to "Settled" (or "Closed" in rare cases) rather than "Written Off". Once the debt is cleared, we guide you on using credit builder loans to boost your score. The "Settled" tag is better than an open "Default" tag which prevents any future employment or visas.'
    },
    {
      question: 'Is it legal to use a settle loan service?',
      answer: 'Yes, absolutely. Hiring an advocate or a consultancy to negotiate on your behalf is 100% legal under Indian law. In fact, RBI guidelines encourage banks to have a settlement policy for stressed assets. You are simply exercising your right to legal representation to ensure fair treatment during this process.'
    },
    {
      question: 'How long does the settle loan process take?',
      answer: 'The process typically takes 3 to 6 months. It depends on the delinquency stage. Banks usually offer the best One-Time Settlement (OTS) offers when the account is near NPA (Non-Performing Asset) stage, which is 90 days overdue. Rushing a settlement often leads to a higher amount. Patience, protected by legal counsel, saves money.'
    },
    {
      question: 'Will I get a legal notice if I try to settle?',
      answer: 'Yes, banks send automated legal notices under Section 138 (cheque bounce) or Payment and Settlement Systems Act as pressure tactics. This is why "DIY settlement" is dangerous. You need a lawyer to reply to these notices immediately. If you ignore them, they become arrest warrants. Clients of CredSettle have these managed by our legal team, keeping them safe.'
    }
  ];

  return (
    <div className="relative min-h-screen bg-white mt-6">
       {/* Background Circle Effect */}
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

      <div className="relative z-10 pt-20 lg:pt-24">
         <section className="w-full mx-auto px-4 md:px-6 lg:px-4 max-w-[1280px] mb-8">
            <Breadcrumbs
                items={[
                    { name: 'Home', url: '/' },
                    { name: 'Resources', url: '/resources' },
                    { name: 'How to Settle Loan', url: '/how-to-settle-loan' }
                ]}
            />
         </section>

        {/* Hero Section */}
        <section className="w-full mx-auto px-4 md:px-6 lg:px-4 max-w-[1280px] mb-12">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
            <div className="flex-1 space-y-6">
              <h1 className="text-3xl lg:text-[42px] font-bold leading-tight text-[#0C2756]">
                How to <span className="text-[#007AFF]">Settle Loan</span> Legally Online
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                Looking for the best way to <strong>settle loan</strong> dues? Don't rely on unverified apps. Get legal-backed debt settlement that protects you from harassment and saves you up to 50%.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <CTAButton>
                    Check Settlement Eligibility
                </CTAButton>
              </div>
            </div>
            
             <div className="flex-1 w-full max-w-[500px] bg-gradient-to-br from-blue-50 to-white p-8 rounded-3xl border border-blue-100 shadow-xl">
                <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm border border-gray-100">
                        <span className="font-semibold text-gray-500">Total Debt</span>
                        <span className="font-bold text-[#0C2756]">₹15,00,000</span>
                    </div>
                    <div className="flex items-center justify-center -my-2 z-10 relative">
                         <div className="bg-white p-2 rounded-full shadow-md">
                             <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="#007AFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                         </div>
                    </div>
                     <div className="flex items-center justify-between p-4 bg-[#007AFF] rounded-xl shadow-lg transform scale-105">
                        <span className="font-bold text-white">Settle Loan At</span>
                        <div className="text-right">
                             <span className="block font-bold text-white text-xl">₹6,50,000</span>
                             <span className="text-xs text-blue-100">Savings: 56%</span>
                        </div>
                    </div>
                     <p className="text-center text-sm text-gray-500 mt-4">
                        Legal Protection • No Harassment • NOC Guarantee
                    </p>
                </div>
            </div>
          </div>
        </section>

        {/* 3-Column Layout */}
        <section className="w-full max-w-[1600px] mx-auto px-4 md:px-6 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Vertical TOC (2 cols) */}
            <div className="lg:col-span-2 hidden lg:block sticky top-24">
              <VerticalTableOfContents headings={headings} />
            </div>

            {/* Middle Column: Main Content (7 cols) */}
            <div className="lg:col-span-7 w-full min-h-screen">
                
                {/* Introduction */}
                <section id="introduction" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">How to Settle Loan Online: The Definitive Guide</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            If you are drowning in debt, the term "Loan Settlement" or "OTS" (One-Time Settlement) is your lifeline. But the internet is full of "<strong>settle loan</strong> apps" that promise magical waivers. This guide cuts through the noise.
                        </p>
                        <p className="mb-4">
                            <strong>Loan Settlement is a legal financial process.</strong> It is not charity. It is a negotiation between a borrower who <em>cannot</em> pay and a bank that wants to recover <em>at least something</em>.
                        </p>
                        <p>
                            At CredSettle, we don't just use software; we use the law. When you search for "<strong>settleloan</strong>" or "settlement agency," you are looking for someone to stand between you and the bank. That "someone" should be a lawyer, not an algorithm.
                        </p>
                    </div>
                </section>

                {/* Eligibility */}
                <section id="eligibility" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Who Can Settle Loans? (Eligibility)</h2>
                    <div className="space-y-6 text-gray-700 font-poppins text-base leading-7">
                        <p>
                            Not everyone qualifies for settlement. Banks strictly analyze "Intention to Pay" vs "Ability to Pay".
                        </p>
                        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                             <h3 className="text-xl font-bold text-[#0C2756] mb-4">You QUALIFY if:</h3>
                             <ul className="list-disc pl-6 space-y-2">
                                 <li><strong>Job Loss:</strong> You have been laid off or your business has shut down (proven over 3-6 months).</li>
                                 <li><strong>Medical Emergency:</strong> Severe illness in the family that drained savings.</li>
                                 <li><strong>Salary Cut:</strong> Significant reduction in take-home pay making EMIs unaffordable.</li>
                                 <li><strong>Death of Co-borrower:</strong> Loss of a supporting income stream.</li>
                             </ul>
                        </div>
                        <p>
                            <strong>Important:</strong> If you have assets (like FD, mutual funds, property) visibly linked to your PAN, the bank will refuse settlement and may initiate recovery. We perform a "Asset Audit" before applying to ensure your case is strong.
                        </p>
                    </div>
                </section>

                {/* Settlement Timeline */}
                <section id="settlement-timeline" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">The Settlement Timeline (0-90 Days)</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-6">
                            Understanding the banking cycle is crucial. If you try to <strong>settle loan</strong> too early, you get a bad deal. If you wait too long without legal protection, you get sued.
                        </p>
                        
                        <div className="space-y-8 border-l-2 border-dashed border-[#007AFF] pl-8 relative ml-4">
                            {/* Phase 1 */}
                            <div className="relative">
                                <div className="absolute -left-[41px] bg-white border-4 border-[#007AFF] w-6 h-6 rounded-full"></div>
                                <h3 className="text-lg font-bold text-[#0C2756]">Days 1-30: SMA-0 & SMA-1</h3>
                                <p className="text-sm mt-1">
                                    <strong>Status:</strong> Special Mention Account.
                                    <br/><strong>Bank Action:</strong> Soft reminders, SMS, automated calls.
                                    <br/><strong>Our Action:</strong> We advise you to stop paying EMIs if you intend to settle. We prepare the "Letter of Hardship" and send the first legal intimation to the bank that you have hired counsel.
                                </p>
                            </div>

                            {/* Phase 2 */}
                            <div className="relative">
                                <div className="absolute -left-[41px] bg-white border-4 border-yellow-500 w-6 h-6 rounded-full"></div>
                                <h3 className="text-lg font-bold text-[#0C2756]">Days 31-60: SMA-2 (The Pressure Zone)</h3>
                                <p className="text-sm mt-1">
                                    <strong>Status:</strong> High risk.
                                    <br/><strong>Bank Action:</strong> Aggressive recovery agents start visiting. Call intensity peaks. Section 138 notices may be drafted.
                                    <br/><strong>Our Action:</strong> <strong>Redirect All Calls.</strong> Our lawyers issue Cease & Desist notices to agents violating RBI norms. We file complaints with the bank's Nodal Officer. We engage the bank for settlement, but they usually reject or offer 10% waiver. We deny.
                                </p>
                            </div>

                             {/* Phase 3 */}
                            <div className="relative">
                                <div className="absolute -left-[41px] bg-white border-4 border-red-600 w-6 h-6 rounded-full"></div>
                                <h3 className="text-lg font-bold text-[#0C2756]">Days 61-90: NPA Definition</h3>
                                <p className="text-sm mt-1">
                                    <strong>Status:</strong> Non-Performing Asset (NPA).
                                    <br/><strong>Bank Action:</strong> The loan becomes a "loss" on their books. They are desperate to clean it up before the quarter ends.
                                    <br/><strong>Our Action:</strong> <strong>Strike Hard.</strong> This is the golden window. We offer a lump sum settlements. Banks often agree to 40-50% waivers here to avoid long litigation. We verify the OTS letter and close the loan.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Agency vs Legal */}
                <section id="agency-vs-legal" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Agencies vs Legal Firms</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            When you Google "<strong>settleloan app</strong>", you find many tech-first agencies. Here is why a legal firm like CredSettle is safer.
                        </p>
                        <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm mb-6">
                            <table className="w-full text-left bg-white">
                                <thead className="bg-[#0C2756] text-white">
                                    <tr>
                                        <th className="p-4 uppercase text-sm">Aspect</th>
                                        <th className="p-4 uppercase text-sm">Generic Agency</th>
                                        <th className="p-4 uppercase text-sm bg-blue-900">CredSettle (Legal Firm)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    <tr>
                                        <td className="p-4 font-semibold">Harassment Protection</td>
                                        <td className="p-4">Low.</td>
                                        <td className="p-4 font-bold text-green-700">Can issue Legal Notices.</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 font-semibold">Legal Defense</td>
                                        <td className="p-4 text-red-600">None.</td>
                                        <td className="p-4 font-bold text-green-700">Included.</td>
                                    </tr>
                                     <tr>
                                        <td className="p-4 font-semibold">Court Representation</td>
                                        <td className="p-4 text-red-600">No.</td>
                                        <td className="p-4 font-bold text-green-700">Yes (Section 138 defense).</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* Document Checklist */}
                 <section id="document-checklist" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">Process & Documents Checklist</h2>
                    <div className="space-y-6 text-gray-700 font-poppins text-base leading-7">
                        <p>
                            To successfully <strong>settle loan</strong>, we build a "dossier" for you. This file is presented to the bank's committee.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                             <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-[#007AFF] mb-2">1. Proof of Insolvency</h3>
                                <p className="text-sm">Bank statements showing zero balance, ITR showing income drop, or letter of termination.</p>
                             </div>
                             <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-[#007AFF] mb-2">2. Liability Statement</h3>
                                <p className="text-sm">List of ALL loans. This proves to Bank A that you owe Bank B too, forcing them to compete for your limited funds.</p>
                             </div>
                             <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-[#007AFF] mb-2">3. Hardship Letter</h3>
                                <p className="text-sm">A legally drafted affidavit explaining WHY you cannot pay. This is crucial for the "Audit Trail" of the settlement.</p>
                             </div>
                              <div className="border border-blue-100 bg-blue-50 p-4 rounded-lg">
                                <h3 className="font-bold text-[#007AFF] mb-2">4. KYC & Loan Docs</h3>
                                <p className="text-sm">Pan Card, Aadhar, and the original Loan Sanction Letter.</p>
                             </div>
                        </div>
                    </div>
                </section>

                {/* Scam Alert */}
                <section id="scam-alert" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-red-600 mb-6">⚠️ Scams to Avoid in Loan Settlement</h2>
                    <div className="bg-red-50 p-6 rounded-xl border border-red-100 text-gray-700">
                        <p className="mb-4">
                            The "debt relief" industry is full of fraud. Be very careful.
                        </p>
                        <ul className="list-disc pl-6 space-y-3">
                            <li><strong>Fake Settlement Letters:</strong> Scammers send you a PDF on WhatsApp that looks like an HDFC/SBI letterhead asking for payment to a personal UPI ID. <strong>Outcome:</strong> You lose money, debt remains. <br/><em>Solution:</em> CredSettle verifies every letter's authenticity with the bank's backend.</li>
                            <li><strong>"Data Deletion" Services:</strong> Someone claims they will "hack the massive CIBIL server" to delete your loan for ₹5000. <strong>Outcome:</strong> It's a lie. <br/><em>Solution:</em> Only legal settlement works.</li>
                            <li><strong>Upfront Outcome Guarantee:</strong> If anyone guarantees "70% waiver" on Day 1, they are lying. Waivers depend on negotiation. We promise <em>representation</em>, best <em>effort</em>, and <em>protection</em>, but specific % depends on the case.</li>
                        </ul>
                    </div>
                </section>

                {/* CIBIL Impact */}
                <section id="cibil-impact" className="mb-12 scroll-mt-24">
                    <h2 className="text-2xl lg:text-3xl font-bold text-[#0C2756] mb-6">CIBIL Impact & Repair</h2>
                    <div className="prose prose-lg text-gray-700 font-poppins text-base leading-7">
                        <p className="mb-4">
                            This is the most common question: "What happens to my CIBIL?"
                        </p>
                        <p className="mb-4">
                            <strong>Short Term (0-12 Months):</strong> It will drop. The account status will change to "Settled" or "Post-Write-off Settled". This is a negative flag. It indicates you didn't pay in full.
                        </p>
                        <p className="mb-4">
                            <strong>Long Term (12-24 Months):</strong> It is better than "Default". A "Default" status means the specific account is still open, accruing interest, and you are risky. A "Settled" status means the account is CLOSED. The bleeding has stopped.
                        </p>
                        <p className="mb-4 font-bold text-[#007AFF]">
                            CredSettle's Post-Settlement Plan:
                        </p>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>We ensure the bank updates the status from "Written Off" to "Settled" within 45 days.</li>
                            <li>We guide you to take a "Credit Builder Loan" (FD-backed).</li>
                            <li>We advise on proper credit mix to push the score back to 750+.</li>
                        </ul>
                    </div>
                </section>

                {/* Why CredSettle CTA */}
                <section id="comparison-criteria" className="mb-12 scroll-mt-24">
                     <div className="bg-[#0C2756] p-8 rounded-3xl text-center text-white">
                        <h2 className="text-2xl lg:text-3xl font-bold mb-4">Why Choose CredSettle?</h2>
                        <p className="mb-8 max-w-2xl mx-auto opacity-90">
                            We are not just an app. We are a team of advocates, financial auditors, and ex-bankers. We don't just "<strong>settle loan</strong>"; we liberate you from the banking system's trap.
                        </p>
                        <CTAButton>
                             Get a Legal Consultation Now
                        </CTAButton>
                        <p className="text-xs mt-4 opacity-70">Over ₹50 Crore Legal Debt Settled.</p>
                     </div>
                </section>

                {/* FAQ */}
                <section id="faqs" className="mb-12 scroll-mt-24">
                   <FAQWithSchema faqs={faqs} title="Frequently Asked Questions" />
                </section>

            </div>

             {/* Right Column: Sticky Sidebar (3 cols) */}
             <div className="lg:col-span-3 hidden lg:block sticky top-24 space-y-6">
                 {/* Consultation Card */}
                <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
                    <h3 className="text-xl font-bold text-[#0C2756] mb-2">Debt-Free in 90 Days?</h3>
                    <p className="text-sm text-gray-600 mb-4">Check your eligibility for settlement allowance.</p>
                    <CTAButton>
                        Check Eligibility
                    </CTAButton>
                    <p className="text-xs text-center text-gray-400 mt-2">Free Analysis. No Spam.</p>
                </div>

                {/* Quick Links */}
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                     <h3 className="text-lg font-bold text-[#0C2756] mb-4">Compare More</h3>
                     <ul className="space-y-3 text-sm font-medium text-gray-600">
                         <li><Link href="/how-to-get-freed-from-debt" className="hover:text-[#007AFF] transition-colors">How to Get Freed</Link></li>
                         <li><Link href="/loan-settlement/hdfc" className="hover:text-[#007AFF] transition-colors">HDFC Settlement Guide</Link></li>
                         <li><Link href="/loan-settlement/sbi" className="hover:text-[#007AFF] transition-colors">SBI Settlement Guide</Link></li>
                         <li><Link href="/services/credit-card-settlement" className="hover:text-[#007AFF] transition-colors">Credit Card Default</Link></li>
                     </ul>
                </div>
                 
                 {/* Trust Badge */}
                 <div className="bg-blue-600 p-6 rounded-2xl text-white text-center">
                    <h3 className="text-xl font-bold mb-2">4.9/5</h3>
                    <p className="text-sm opacity-90">Google Rating</p>
                 </div>
            </div>
          </div>
        </section>

        {/* Mobile Sticky CTA */}
        <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white p-4 border-t border-gray-200 shadow-[0_-5px_15px_rgba(0,0,0,0.1)] z-50">
           <CTAButton>
                Start Legal Settlement
           </CTAButton>
        </div>
      </div>

      <Footer />
    </div>
  );
}
