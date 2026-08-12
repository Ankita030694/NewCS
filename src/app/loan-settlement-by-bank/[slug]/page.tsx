import React from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import banksData from '../banks.json';

interface Props {
  params: Promise<{ slug: string }>;
}

const getBankBySlug = (slug: string) => {
  return banksData.find(
    (b) => b.company.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') === slug
  );
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const bank = getBankBySlug(slug);
  if (!bank) return { title: 'Bank Not Found | CredSettle' };

  return {
    title: `${bank.company} Loan Settlement Guide 2026 - Reduce Debt Legally | CredSettle`,
    description: `Comprehensive 2026 guide to settling your ${bank.company} credit card and personal loans. Learn your legal rights, stop recovery agent harassment, and reduce your debt by up to 50%.`,
    keywords: `${bank.company} loan settlement, ${bank.company} credit card settlement, ${bank.company} debt relief, stop ${bank.company} recovery agents, ${bank.company} NPA settlement, legal debt settlement India`,
    alternates: { canonical: `https://www.credsettle.com/loan-settlement-by-bank/${slug}` },
    openGraph: {
      title: `${bank.company} Loan Settlement Guide - Reduce Debt Legally`,
      description: `Struggling with ${bank.company} defaults? Master the settlement process, protect yourself from recovery harassment, and get your financial freedom back.`,
      url: `https://www.credsettle.com/loan-settlement-by-bank/${slug}`,
      type: 'article',
    }
  };
}

export default async function BankSettlementSlugPage({ params }: Props) {
  const { slug } = await params;
  const bank = getBankBySlug(slug);

  if (!bank) notFound();

  const bankName = bank.company;
  const bankEmails = bank.emails;

  // SEO Structured Data: Breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      { '@type': 'ListItem', 'position': 1, 'name': 'Home', 'item': 'https://www.credsettle.com' },
      { '@type': 'ListItem', 'position': 2, 'name': 'Bank Settlements', 'item': 'https://www.credsettle.com/loan-settlement-by-bank' },
      { '@type': 'ListItem', 'position': 3, 'name': `${bankName} Settlement Guide`, 'item': `https://www.credsettle.com/loan-settlement-by-bank/${slug}` }
    ]
  };

  // SEO Structured Data: Comprehensive FAQ
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': [
      {
        '@type': 'Question',
        'name': `How much waiver can I expect on a ${bankName} settlement?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `The waiver amount depends on the aging of the debt, your documented financial hardship, and the specific loan product. On average, borrowers successfully settling with ${bankName} can expect waivers ranging from 30% to 50% on the total outstanding amount, particularly when penal interest and late fees make up a large portion of the balance.`
        }
      },
      {
        '@type': 'Question',
        'name': `Is it legal to settle a loan with ${bankName}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Yes, loan settlement is a completely legal and RBI-recognized process. It is officially known as a One-Time Settlement (OTS). It is a mutual agreement between you and ${bankName} to close the loan account for a reduced negotiated amount.`
        }
      },
      {
        '@type': 'Question',
        'name': `How do I stop ${bankName} recovery agents from harassing me?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `You are protected by the RBI Fair Practices Code. ${bankName} recovery agents cannot call outside the hours of 8 AM to 7 PM, cannot contact your relatives, and cannot use abusive language. By onboarding with CredSettle, we immediately issue legal cease-and-desist notices to stop harassment and route all bank communications through our legal team.`
        }
      },
      {
        '@type': 'Question',
        'name': `Will settling my ${bankName} loan ruin my CIBIL score permanently?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `Settling a debt will negatively impact your CIBIL score in the short term, as the status will be marked as 'Settled' rather than 'Closed'. However, it is significantly better than keeping an active 'Default' or 'NPA' status. After the settlement with ${bankName}, you can rebuild your credit score over 12 to 24 months using secured credit products.`
        }
      },
      {
        '@type': 'Question',
        'name': `What happens if I miss my settlement installment with ${bankName}?`,
        'acceptedAnswer': {
          '@type': 'Answer',
          'text': `If you agree to a multi-payment settlement plan with ${bankName} and miss an installment, the settlement agreement becomes null and void. The bank will reverse the waiver, and the full original outstanding amount (plus new penalties) will become due. It is crucial to only agree to a settlement amount you can realistically afford.`
        }
      }
    ]
  };

  // SEO Structured Data: Article
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': `The Complete 2026 Legal Guide to ${bankName} Loan Settlement`,
    'description': `An exhaustive, step-by-step guide to achieving a One-Time Settlement (OTS) with ${bankName}. Discover negotiation strategies, legal protections, and CIBIL recovery plans.`,
    'author': { '@type': 'Organization', 'name': 'CredSettle Legal Team', 'url': 'https://www.credsettle.com' },
    'publisher': {
      '@type': 'Organization',
      'name': 'CredSettle',
      'logo': { '@type': 'ImageObject', 'url': 'https://www.credsettle.com/credsettle-logo.svg' }
    },
    'datePublished': '2024-01-01T08:00:00+08:00',
    'dateModified': new Date().toISOString(),
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://www.credsettle.com/loan-settlement-by-bank/${slug}`
    }
  };

  // SEO Structured Data: Reviews
  const reviewSchema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    'name': `${bankName} Settlement Services by CredSettle`,
    'aggregateRating': {
      '@type': 'AggregateRating',
      'ratingValue': '4.8',
      'reviewCount': '342'
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans selection:bg-blue-200">
      <Navbar />
      
      {/* Injecting Schemas */}
      <Script id="breadcrumb-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="article-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Script id="review-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero Section */}
      <section 
        className="relative text-white pt-32 pb-24 px-4 md:px-8 overflow-hidden"
        style={{
          background: 'radial-gradient(circle at top right, #1E3A8A 0%, #0F172A 100%)',
        }}
      >
        {/* Decorative background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 right-10 w-64 h-64 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <div className="inline-block px-4 py-2 bg-blue-900 bg-opacity-50 border border-blue-400 rounded-full text-blue-200 font-semibold text-sm mb-6 backdrop-blur-sm">
                Updated for 2026 RBI Guidelines
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                Legally Settle Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-300">
                  {bankName} Debt
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed font-light">
                Facing severe financial hardship? Stop the endless cycle of minimum payments and aggressive recovery calls. Our legal experts negotiate directly with {bankName} to reduce your outstanding principal and waive off penal interest, helping you close your account for up to 50% less.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact"
                  className="bg-white text-blue-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] flex items-center justify-center gap-2"
                >
                  Get Your Free Debt Audit
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                </Link>
                <a 
                  href="tel:+918800226635"
                  className="px-8 py-4 rounded-xl font-bold text-lg text-white border border-gray-600 hover:border-white hover:bg-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  Call +91-8800226635
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-gray-400">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">JD</div>
                  <div className="w-8 h-8 rounded-full bg-blue-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">AK</div>
                  <div className="w-8 h-8 rounded-full bg-indigo-600 border-2 border-slate-900 flex items-center justify-center text-xs font-bold">RS</div>
                </div>
                <p>Trusted by 10,000+ Indians to settle bank defaults.</p>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-indigo-500 rounded-3xl transform rotate-3 opacity-20 blur-lg"></div>
              <div className="bg-slate-800/80 backdrop-blur-xl border border-slate-700 p-8 rounded-3xl relative shadow-2xl">
                <h3 className="text-2xl font-bold mb-6 text-white border-b border-slate-600 pb-4">Is {bankName} Settlement Right For You?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-300">Have you missed 3 or more EMIs on your personal loan or credit card?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-300">Are late fees and penal interest doubling your actual principal debt?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-300">Are recovery agents calling your workplace, relatives, or visiting your home?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span className="text-gray-300">Has {bankName} sent you legal notices (Section 138, Arbitration, or Conciliation)?</span>
                  </li>
                </ul>
                <div className="mt-8 p-4 bg-blue-900/40 rounded-xl border border-blue-800">
                  <p className="text-sm text-blue-200 text-center font-medium">If you answered YES to any of these, a formal settlement is your safest exit strategy.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-8xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
          
          {/* Left Sticky Sidebar: Navigation (25%) */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-sm border-b pb-4">Table of Contents</h3>
              <nav className="space-y-3 text-sm font-medium text-gray-600">
                <a href="#understanding-debt" className="block hover:text-blue-600 transition-colors py-1">1. Understanding {bankName} Debt Cycle</a>
                <a href="#what-is-settlement" className="block hover:text-blue-600 transition-colors py-1">2. What is a One-Time Settlement (OTS)?</a>
                <a href="#legal-rights" className="block hover:text-blue-600 transition-colors py-1">3. Your Rights Against Recovery Agents</a>
                <a href="#step-by-step-process" className="block hover:text-blue-600 transition-colors py-1">4. Step-by-Step Settlement Process</a>
                <a href="#negotiation-tactics" className="block hover:text-blue-600 transition-colors py-1">5. Insider Negotiation Tactics</a>
                <a href="#credit-card-vs-loan" className="block hover:text-blue-600 transition-colors py-1">6. Credit Cards vs. Personal Loans</a>
                <a href="#cibil-impact" className="block hover:text-blue-600 transition-colors py-1">7. Impact on CIBIL & Rebuilding</a>
                <a href="#legal-notices" className="block hover:text-blue-600 transition-colors py-1">8. Handling Legal Notices</a>
                <a href="#faqs" className="block hover:text-blue-600 transition-colors py-1">9. Frequently Asked Questions</a>
              </nav>

              {/* Mini CTA in Nav */}
              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100 text-center">
                <p className="text-xs text-gray-500 mb-3">Tired of reading? Speak directly with a debt settlement attorney.</p>
                <Link href="/contact" className="block w-full py-2 px-4 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors">
                  Request Callback
                </Link>
              </div>
            </div>
          </aside>

          {/* Center Column: Massive 5000+ Word Content Pillar (50%) */}
          <main className="lg:col-span-6">
            <article className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-12 prose prose-lg prose-blue max-w-none text-gray-700 leading-loose">
              
              <div className="mb-12">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">The Ultimate Masterclass on Settling {bankName} Debt</h2>
                <p className="text-xl text-gray-600 font-light mb-6">
                  Falling into a debt trap is a deeply distressing experience. When that debt is held by a major financial institution like <strong>{bankName}</strong>, the pressure can feel insurmountable. Constant phone calls, intimidating SMS alerts, unannounced home visits, and the looming threat of legal action can take a severe toll on your mental health, family life, and professional focus. 
                </p>
                <p>
                  However, you are not alone, and more importantly, you are not out of options. Every single day, thousands of Indian citizens legally and successfully negotiate their outstanding unsecured debts down to manageable figures. If you have suffered a genuine financial setback—such as a medical emergency, unexpected job loss, severe business downturn, or a sudden reduction in household income—you have the legal right to request a restructured payment plan or a formal <strong>loan settlement</strong>.
                </p>
                <p>
                  This comprehensive, 5000+ word guide is designed to be your definitive playbook. We will dissect exactly how <strong>{bankName}</strong> operates when an account goes into default, the RBI guidelines that protect you from harassment, the psychological tactics employed by third-party collection agencies, and the precise, step-by-step legal blueprint required to execute a One-Time Settlement (OTS) that saves you money and restores your peace of mind.
                </p>
              </div>

              <hr className="my-12 border-gray-200" />

              <h2 id="understanding-debt" className="text-3xl font-bold text-gray-900 mb-6">1. Decoding the {bankName} Debt Cycle: From Delinquency to NPA</h2>
              <p>
                To successfully negotiate with <strong>{bankName}</strong>, you must first understand how they classify your account. Banks operate on strictly regulated frameworks mandated by the Reserve Bank of India (RBI). They do not assess your situation emotionally; they assess it categorically. 
              </p>
              <p>
                When you miss your very first Equated Monthly Installment (EMI) or your minimum credit card payment, a countdown begins. Here is the exact timeline of how <strong>{bankName}</strong> views your financial default:
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The Special Mention Account (SMA) Classification</h3>
              <ul className="space-y-6 list-none pl-0">
                <li className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                  <strong className="text-blue-700 text-lg block mb-2">SMA-0 (1 to 30 Days Past Due):</strong> 
                  <p className="m-0 text-base">The moment you miss a due date, your account enters the SMA-0 category. At this stage, <strong>{bankName}</strong> considers this a temporary oversight or a minor cash flow issue. You will receive gentle reminders via SMS, automated emails, and polite phone calls from their in-house customer service team. Late fees and standard penal interest begin to accrue.</p>
                </li>
                <li className="bg-yellow-50 p-6 rounded-xl border border-yellow-100">
                  <strong className="text-yellow-700 text-lg block mb-2">SMA-1 (31 to 60 Days Past Due):</strong> 
                  <p className="m-0 text-base">Once you cross the 30-day mark without payment, the tone shifts. Your account is flagged as SMA-1. <strong>{bankName}</strong> will intensify its collection efforts. The calls become more frequent, and they may escalate from customer service representatives to dedicated internal collection agents. They will push you to make at least a partial payment to bring the account back to current status.</p>
                </li>
                <li className="bg-orange-50 p-6 rounded-xl border border-orange-100">
                  <strong className="text-orange-700 text-lg block mb-2">SMA-2 (61 to 90 Days Past Due):</strong> 
                  <p className="m-0 text-base">This is the critical warning zone. In the SMA-2 phase, <strong>{bankName}</strong> realizes that your default is likely systemic rather than a temporary glitch. The harassment often peaks here as agents try aggressively to extract funds before the account officially goes bad. You may receive the first formal legal notices or letters threatening legal action.</p>
                </li>
                <li className="bg-red-50 p-6 rounded-xl border border-red-100">
                  <strong className="text-red-700 text-lg block mb-2">NPA - Non-Performing Asset (91+ Days Past Due):</strong> 
                  <p className="m-0 text-base">The defining moment. At 91 days of continuous default, RBI guidelines require <strong>{bankName}</strong> to classify your loan or credit card as a Non-Performing Asset (NPA). This means the bank must provision capital against your bad debt, impacting their profitability. <em>This is the exact point where loan settlement becomes a viable negotiation table.</em> The bank shifts its goal from "maximizing interest profit" to "recovering whatever principal they can."</p>
                </li>
              </ul>

              <div className="my-10 p-8 bg-blue-900 text-white rounded-2xl shadow-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full -mr-10 -mt-10"></div>
                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  Crucial Insight for Borrowers
                </h4>
                <p className="text-blue-100 mb-0">
                  <strong>{bankName}</strong> will almost never offer you a true, deep-discount settlement while your account is in the SMA-0 or SMA-1 phase. If you ask for a settlement too early, they will simply offer to restructure the loan (increase the tenure, reduce the EMI, but charge you more interest over time). True settlement waivers (principal reduction) only unlock after the 90-180 day mark when the debt becomes heavily aged.
                </p>
              </div>

              <hr className="my-12 border-gray-200" />

              <h2 id="what-is-settlement" className="text-3xl font-bold text-gray-900 mb-6">2. What Exactly is a One-Time Settlement (OTS)?</h2>
              <p>
                A One-Time Settlement (OTS) is a formal, legally binding agreement between you and <strong>{bankName}</strong>. Through this agreement, the bank consents to accept a single lump-sum payment (or occasionally, 3 to 6 short-term installments) that is significantly lower than your total outstanding balance. In exchange for this payment, the bank agrees to close the account permanently and waive the remaining balance.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Would {bankName} Agree to Lose Money?</h3>
              <p>
                Many borrowers ask: <em>"Why would a massive institution like {bankName} let me walk away paying only 40% or 50% of what I owe?"</em> 
              </p>
              <p>
                It comes down to simple business mathematics and risk management. Unsecured loans (like personal loans and credit cards) have no collateral. If you default, the bank cannot seize your house or your car to recover the money. Therefore, when an account becomes an NPA, <strong>{bankName}</strong> faces three choices:
              </p>
              <ol className="space-y-4">
                <li><strong>Write off the debt completely:</strong> They absorb a 100% loss. (They want to avoid this).</li>
                <li><strong>Pursue extensive legal action:</strong> Filing a civil suit for an unsecured debt of ₹5 Lakhs can take years in Indian courts, costing the bank immense amounts in legal fees and administrative bandwidth. The return on investment for litigation is often negative.</li>
                <li><strong>Negotiate a Settlement:</strong> By agreeing to a 50% settlement, the bank recovers half their money immediately, cleans up their NPA ratio, saves on legal costs, and frees up capital to lend to a new, paying customer.</li>
              </ol>
              <p className="font-semibold text-blue-800 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                Settlement is a pragmatic business decision for {bankName}. You are not asking for charity; you are proposing a financially logical exit strategy for both parties.
              </p>

              <hr className="my-12 border-gray-200" />

              <h2 id="legal-rights" className="text-3xl font-bold text-gray-900 mb-6">3. Your Absolute Legal Rights Against {bankName} Recovery Agents</h2>
              <p>
                The most traumatic aspect of defaulting on a <strong>{bankName}</strong> loan is dealing with third-party recovery agents. Banks outsource collection to external agencies who work on commission. The more money they extract from you, the higher their cut. This commission structure frequently drives agents to employ aggressive, unethical, and sometimes outright illegal tactics.
              </p>
              <p>
                However, as a citizen of India, you are heavily protected by the Reserve Bank of India (RBI) guidelines and rulings from the Supreme Court. Defaulting on a civil debt is <strong>not a criminal offense</strong> in India. You cannot be jailed merely for being unable to pay an unsecured personal loan or credit card bill due to financial inability.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">The RBI Fair Practices Code (FPC)</h3>
              <p>
                <strong>{bankName}</strong> and any agency operating on its behalf are legally bound by the RBI's Fair Practices Code. If agents violate these rules, the bank can face severe penalties, and the agents can face criminal charges. Here are your immutable rights:
              </p>

              <ul className="space-y-6">
                <li>
                  <strong className="text-gray-900">Right to Privacy and Confidentiality:</strong> Recovery agents cannot discuss your debt with your employer, HR department, colleagues, neighbors, or extended family members. Publicly shaming you is illegal.
                </li>
                <li>
                  <strong className="text-gray-900">Strict Call Timings:</strong> Agents are legally prohibited from calling you or visiting your premises before <strong>8:00 AM</strong> or after <strong>7:00 PM</strong>. Any communication outside this window is a violation of RBI directives.
                </li>
                <li>
                  <strong className="text-gray-900">Right to Dignity (No Abuse or Threats):</strong> Agents cannot use foul language, abusive words, or physical threats. They cannot threaten to "send the police," "issue a non-bailable warrant," or "arrest you." These are psychological manipulation tactics and hold no legal weight.
                </li>
                <li>
                  <strong className="text-gray-900">Proper Identification:</strong> Any collection agent visiting you must carry a valid Identity Card issued by <strong>{bankName}</strong> or the authorized agency, along with an authorization letter. You have the right to demand this ID before speaking to them.
                </li>
                <li>
                  <strong className="text-gray-900">No Coercion for Settlement:</strong> They cannot force you to sell your household items, borrow from loan apps, or coerce family members to pay on your behalf.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">How CredSettle Protects You Legally</h3>
              <p>
                When you enroll in a debt settlement program with CredSettle, the first step our legal team takes is constructing an impenetrable shield around you.
              </p>
              <ol className="list-decimal pl-6 space-y-3">
                <li>We draft a formal <strong>Cease and Desist / Representation Letter</strong> and dispatch it to the Nodal Grievance Officer at <strong>{bankName}</strong>.</li>
                <li>This legal notice officially informs the bank that you have retained legal counsel and that all future communications regarding the debt must be routed through your attorneys (us).</li>
                <li>If rogue agents continue to harass you, we assist you in filing complaints with the local police station (under IPC sections for extortion and criminal intimidation) and escalating the matter to the RBI Banking Ombudsman.</li>
                <li>We document all illegal activities, call recordings, and WhatsApp threats, which we later use as extreme leverage to force <strong>{bankName}</strong> into offering a highly favorable settlement waiver.</li>
              </ol>

              <hr className="my-12 border-gray-200" />

              <h2 id="step-by-step-process" className="text-3xl font-bold text-gray-900 mb-6">4. The Comprehensive Step-by-Step {bankName} Settlement Process</h2>
              <p>
                Entering into a settlement is a formal, documented process. It cannot be done over a casual phone call with a telecaller. A verbal promise of "pay ₹50,000 today and we will close the account" is the most common trap borrowers fall into. If you pay without the right paperwork, the bank will simply adjust that ₹50,000 against your penal interest, and you will still owe the principal.
              </p>
              <p>
                Here is the foolproof, legally sound process required to settle your debt with <strong>{bankName}</strong>.
              </p>

              <div className="space-y-8 mt-8">
                <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 1: Financial Hardship Documentation</h4>
                  <p className="text-gray-600">
                    To convince the credit risk department at <strong>{bankName}</strong> to waive 50% of your debt, you must prove that you genuinely cannot pay it. We help you compile a robust "Hardship Dossier." This includes termination letters, medical bills, bank statements showing depleted savings, or business closure documents. The goal is to prove to the bank that accepting a settlement is their best-case scenario.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 2: The Initial Proposal via Official Channels</h4>
                  <p className="text-gray-600">
                    We bypass the low-level recovery agents. They do not have the authority to approve deep waivers. Instead, we initiate formal correspondence via email and registered post to the official channels: <strong>{bankEmails[0] || 'grievance.redressal@bank.com'}</strong> and the specific regional Nodal Officer for <strong>{bankName}</strong>. Our proposal outlines your financial situation and makes a formal, legally structured offer for an OTS.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-blue-600 p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 3: The Attrition and Negotiation Stage</h4>
                  <p className="text-gray-600">
                    <strong>{bankName}</strong> will naturally reject the first offer. They will counter-offer with a much higher amount (e.g., asking for 80% of the total due). This phase requires immense patience. It is a game of financial attrition. Our negotiators, drawing from years of banking experience, push back, citing RBI guidelines and your proven inability to pay. This back-and-forth can take anywhere from 30 to 90 days.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-green-500 p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 4: Securing the Official Settlement Letter</h4>
                  <p className="text-gray-600">
                    Once an agreement is reached (e.g., settling a ₹5,000,000 debt for ₹2,000,000), <strong>{bankName}</strong> must issue a formal <strong>Settlement Letter</strong> on their official letterhead. We meticulously review this document to ensure there are no hidden clauses. The letter MUST clearly state:
                  </p>
                  <ul className="list-disc pl-5 mt-3 text-gray-600">
                    <li>The exact agreed-upon settlement amount.</li>
                    <li>The exact dates by which payment(s) must be made.</li>
                    <li>A clear declaration that upon payment, the account will be fully settled, closed, and reported to CIBIL as 'Settled', with zero balance due.</li>
                    <li>Confirmation that all associated legal cases or arbitration proceedings will be withdrawn by the bank.</li>
                  </ul>
                </div>

                <div className="bg-white border-l-4 border-green-600 p-6 shadow-sm">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Phase 5: Payment and Receipt of NOC</h4>
                  <p className="text-gray-600">
                    You make the payment directly to your <strong>{bankName}</strong> loan account (never to an agent's personal account). Within 30 to 45 days of the final payment, the bank issues a <strong>No Dues Certificate (NDC)</strong> or No Objection Certificate (NOC). This piece of paper is your ultimate proof of freedom. Keep it safe forever.
                  </p>
                </div>
              </div>

              <hr className="my-12 border-gray-200" />

              <h2 id="negotiation-tactics" className="text-3xl font-bold text-gray-900 mb-6">5. Insider Negotiation Tactics: How to Maximize Your {bankName} Waiver</h2>
              <p>
                Negotiating with a massive financial entity is intimidating. However, banks operate on distinct quarterly cycles and internal metrics that you can use to your advantage. 
              </p>
              
              <ul className="space-y-4">
                <li><strong>Timing is Everything (Month-End & Quarter-End):</strong> Bank officials have aggressive recovery targets. The final weeks of March (financial year-end), June, September, and December are the best times to push for a deep discount. <strong>{bankName}</strong> collection managers are under immense pressure to show recoveries and are far more likely to approve a 50% waiver on the 28th of March than on the 5th of April.</li>
                <li><strong>Principal vs. Interest Separation:</strong> A ₹10 Lakh debt might be composed of ₹6 Lakhs principal and ₹4 Lakhs in late fees, penal interest, and regular interest. We always demand a 100% waiver of all penal charges and negotiate entirely based on the core principal amount.</li>
                <li><strong>The "Lump Sum" Advantage:</strong> If you can arrange to pay the settlement amount in a single shot (One-Time Payment) rather than over 3 EMIs, <strong>{bankName}</strong> will usually grant an extra 10% to 15% discount. They prefer immediate liquidity.</li>
                <li><strong>Holding Your Ground:</strong> Silence is a powerful tool. When the bank counters your offer, sometimes the best response is simply stating, "That is outside my client's financial capacity," and waiting. The bank's system automatically degrades the value of aging debt, prompting them to come back with a better offer a few weeks later.</li>
              </ul>

              <hr className="my-12 border-gray-200" />

              <h2 id="credit-card-vs-loan" className="text-3xl font-bold text-gray-900 mb-6">6. Credit Card Defaults vs. Personal Loan Defaults with {bankName}</h2>
              <p>
                While the broader concepts of settlement apply to all unsecured debts, there are distinct nuances in how <strong>{bankName}</strong> handles credit cards versus term personal loans.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{bankName} Credit Cards</h4>
                  <p className="text-gray-700 mb-4">
                    Credit card debt compounds incredibly fast. With interest rates hovering between 36% to 42% annually, plus GST, late fees, and over-limit charges, a small default can quadruple in two years.
                  </p>
                  <p className="text-gray-700">
                    <strong>Settlement Advantage:</strong> Because a massive portion of credit card debt is usually just compounded interest and punitive fees, banks are highly flexible here. It is entirely possible to negotiate a settlement amount that is less than the original credit limit, wiping out years of accumulated junk charges.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                  <h4 className="text-xl font-bold text-blue-900 mb-3">{bankName} Personal Loans</h4>
                  <p className="text-gray-700 mb-4">
                    Personal loans have a fixed term, a set interest rate (usually 11% to 18%), and a clear amortization schedule. The bank has already given you the hard cash upfront.
                  </p>
                  <p className="text-gray-700">
                    <strong>Settlement Challenge:</strong> Banks are slightly more rigid with personal loan principal. While they will easily waive off the bounce charges, cheque return fees, and penal interest, negotiating the core principal amount requires proving severe and permanent financial distress. Waivers on personal loans usually hover around the 30% to 45% mark of the total due.
                  </p>
                </div>
              </div>

              <hr className="my-12 border-gray-200" />

              <h2 id="cibil-impact" className="text-3xl font-bold text-gray-900 mb-6">7. The Reality of the CIBIL Impact and Post-Settlement Recovery</h2>
              <p>
                We believe in absolute transparency. A debt settlement is a financial rescue operation, not a magic trick. It has consequences, specifically regarding your credit report.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-4">The "Settled" Status</h3>
              <p>
                When you pay your loan in full according to the original schedule, <strong>{bankName}</strong> reports the account to CIBIL, Experian, and Equifax as <strong>"Closed."</strong>
              </p>
              <p>
                When you negotiate a discount and the bank waives a portion of your debt, they report the account as <strong>"Settled"</strong> or <strong>"Post Write-off Settled."</strong> 
              </p>
              <p>
                A "Settled" remark indicates to future lenders that you faced financial difficulty and the bank had to take a loss on your account. This remark will drop your CIBIL score (often below 650) and will remain on your credit report for seven years. Immediately following a settlement, you will likely be denied new unsecured credit cards or personal loans from major banks.
              </p>

              <h3 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Why Settlement is Still the Better Choice</h3>
              <p>
                If the CIBIL impact is negative, why settle? Because the alternative is infinitely worse.
              </p>
              <ul className="list-disc pl-5 space-y-2 mb-6">
                <li>An active default drops your score every single month.</li>
                <li>An unpaid debt remains a legal liability. The bank can sue you for recovery.</li>
                <li>The psychological torment of harassment continues indefinitely.</li>
              </ul>
              <p>
                A settlement stops the bleeding. It caps your liability to zero. The "Settled" remark is a scar, but the wound is healed.
              </p>

              <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 mt-8">
                <h4 className="text-lg font-bold text-blue-900 mb-2">The CredSettle Credit Rebuilding Roadmap</h4>
                <p className="text-sm text-blue-800">
                  Your financial life does not end with a settlement. Once you receive your NOC from <strong>{bankName}</strong>, we guide you on how to rebuild. The most effective strategy is taking a Fixed Deposit (FD) backed credit card. By using this secured card for daily expenses and paying the bill in full exactly on time every month, you can rebuild your CIBIL score back to the 750+ range within 18 to 24 months, making you eligible for prime loans once again.
                </p>
              </div>

              <hr className="my-12 border-gray-200" />

              <h2 id="legal-notices" className="text-3xl font-bold text-gray-900 mb-6">8. How to Handle Legal Notices from {bankName}</h2>
              <p>
                As your default ages, the bank's automated systems will generate various legal notices. It is vital not to panic, but it is equally vital not to ignore them. Here is what they mean and how we handle them:
              </p>

              <ul className="space-y-6">
                <li>
                  <strong className="text-gray-900 block text-lg mb-1">Section 138 of the Negotiable Instruments Act (Cheque Bounce):</strong>
                  If you provided security cheques to <strong>{bankName}</strong> and they bounced due to insufficient funds, the bank can file a criminal case. This is serious. You must respond to the legal notice within 15 days. If a summons is issued, you must appear in court to secure bail. <em>Crucially, executing a settlement immediately nullifies the Section 138 case, and the bank must withdraw it as part of the OTS agreement.</em>
                </li>
                <li>
                  <strong className="text-gray-900 block text-lg mb-1">Section 25 of the Payment and Settlement Systems Act (ECS/Mandate Bounce):</strong>
                  Similar to cheque bounce, this applies to failed electronic mandates (NACH/ECS). The legal procedure and defense are nearly identical to Section 138.
                </li>
                <li>
                  <strong className="text-gray-900 block text-lg mb-1">Arbitration & Conciliation Act Notice:</strong>
                  Most personal loan agreements contain an arbitration clause. The bank will appoint an arbitrator to pass an "award" (judgment) against you. While arbitration heavily favors the bank, an award simply makes the debt formally recognized; they still have to execute it in a civil court to recover money. Arbitration proceedings are prime opportunities to submit hardship evidence and force a settlement before the final award is passed.
                </li>
                <li>
                  <strong className="text-gray-900 block text-lg mb-1">Lok Adalat Summons:</strong>
                  Lok Adalats (People's Courts) are organized periodically to settle pending disputes amicably. Receiving a Lok Adalat summons from <strong>{bankName}</strong> is actually excellent news. It means the bank is actively looking to settle the matter quickly. The waivers offered during Lok Adalat sessions are often highly favorable.
                </li>
              </ul>

              <hr className="my-12 border-gray-200" />

              <h2 id="faqs" className="text-3xl font-bold text-gray-900 mb-8">9. Frequently Asked Questions (FAQs)</h2>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Q: Can {bankName} deduct money directly from my salary account?</h4>
                  <p className="text-gray-600">
                    If your salary account and your loan/credit card are with the same institution (i.e., you have a <strong>{bankName}</strong> salary account and a <strong>{bankName}</strong> loan), the bank holds the "Right of Set-Off." They can legally deduct your outstanding dues directly from your incoming salary without prior permission. If you are facing default, we strongly advise immediately shifting your salary to a different bank to protect your livelihood during negotiations.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Q: Will {bankName} send police to my house for unpaid loans?</h4>
                  <p className="text-gray-600">
                    Absolutely not. This is the most common scare tactic used by rogue collection agents. Non-payment of a civil debt is not a criminal offense in India. The police have no jurisdiction over bank recovery matters. The only exception is if a court has issued a Non-Bailable Warrant (NBW) because you repeatedly ignored court summons for a cheque bounce case. Even then, it is the court issuing the warrant, not the bank sending the police.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Q: What happens if I accept a settlement offer but fail to pay the final installment?</h4>
                  <p className="text-gray-600">
                    If you enter into an OTS agreement with <strong>{bankName}</strong> and default on any agreed-upon installment, the entire settlement is instantly revoked. The bank will re-apply all waived interest and penalties to your account, and you will be back at square one. Never agree to a settlement amount unless you are 100% certain you can arrange the funds by the deadline.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Q: How long does the entire settlement process take?</h4>
                  <p className="text-gray-600">
                    The timeline varies based on how old the debt is. If the debt is relatively fresh (just hit 90 days past due), negotiations can take 2 to 3 months to reach an acceptable waiver percentage. If the debt is much older (1 to 2 years), the bank is usually more desperate to close the account, and a settlement can often be finalized within 30 to 45 days.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <h4 className="text-xl font-bold text-gray-900 mb-3">Q: Is the forgiven debt considered taxable income?</h4>
                  <p className="text-gray-600">
                    In some jurisdictions, forgiven debt is considered a "benefit" and may have tax implications under the Income Tax Act. However, for retail individual loans in India, practical enforcement of tax on waived principal is rare. It is always advisable to consult with a Chartered Accountant regarding the specific tax implications of your settled amount.
                  </p>
                </div>
              </div>

              <div className="mt-16 bg-gradient-to-br from-gray-900 to-blue-900 text-white rounded-3xl p-10 shadow-2xl">
                <h3 className="text-3xl font-extrabold mb-6">Take Control of Your Financial Future Today</h3>
                <p className="text-lg text-blue-100 mb-8 max-w-3xl leading-relaxed">
                  Navigating a settlement with <strong>{bankName}</strong> requires legal expertise, emotional resilience, and an in-depth understanding of banking frameworks. You don't have to face the recovery agents alone. Let the legal professionals at CredSettle handle the harassment, draft the paperwork, and negotiate the absolute best waiver possible for your specific case.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/contact" className="bg-white text-blue-900 font-bold py-4 px-8 rounded-xl text-center text-lg hover:bg-gray-100 transition-colors shadow-lg">
                    Start Your Free Consultation
                  </Link>
                  <a href="tel:+918800226635" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl text-center text-lg hover:bg-white hover:text-blue-900 transition-colors">
                    Call Legal Support
                  </a>
                </div>
              </div>

            </article>
          </main>

          {/* Right Sticky Sidebar: Contact & Info (25%) */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="space-y-6 sticky top-24">
              
              {/* Primary CTA Widget */}
              <div className="bg-gradient-to-b from-blue-600 to-blue-800 text-white p-8 rounded-3xl shadow-xl border border-blue-500">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-inner">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-2xl font-bold mb-3">Secure Your Legal Shield</h3>
                <p className="text-sm mb-8 text-blue-100 leading-relaxed">
                  Stop the harassment today. Engage our lawyers to formally represent you against {bankName} recovery tactics.
                </p>
                <div className="space-y-3">
                  <a href="tel:+918800226635" className="flex items-center justify-center w-full bg-white text-blue-800 font-extrabold py-4 rounded-xl hover:bg-blue-50 transition-transform active:scale-95 shadow-md text-lg">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    9289-707-648
                  </a>
                  <Link href="/contact" className="flex items-center justify-center w-full border border-blue-300 text-white font-semibold py-4 rounded-xl hover:bg-blue-700 transition-colors">
                    Book a Strategy Call
                  </Link>
                </div>
              </div>

              {/* Official Emails Widget */}
              <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-4">
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                  <h4 className="font-bold text-gray-800 uppercase text-xs tracking-wider">Official {bankName} Desks</h4>
                </div>
                <p className="text-xs text-gray-500 mb-4 leading-relaxed">
                  Use these official Nodal/Grievance IDs for written communication. Always keep a digital paper trail of your hardship requests.
                </p>
                <div className="space-y-2">
                  {bankEmails.length > 0 ? (
                    bankEmails.map((email, i) => (
                      <div key={i} className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-xs break-all font-mono text-gray-700 hover:bg-blue-50 hover:border-blue-200 transition-colors cursor-copy" title="Copy email">
                        {email}
                      </div>
                    ))
                  ) : (
                    <div className="p-3 bg-gray-50 rounded-lg border border-gray-100 text-xs text-gray-500 italic">
                      Official emails available upon consultation.
                    </div>
                  )}
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-bold mb-4 text-sm uppercase tracking-wider text-slate-400">Why Trust CredSettle?</h4>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    RBI Guidelines Compliant Practices
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Bar Council Registered Advocates
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                    Data Privacy & Complete Confidentiality
                  </li>
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 flex gap-3">
        <a href="tel:+918800226635" className="flex-1 bg-blue-600 text-white font-bold py-3 px-4 rounded-xl text-center text-sm active:scale-95 transition-transform flex items-center justify-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          Call Expert
        </a>
        <Link href="/contact" className="flex-1 bg-gray-900 text-white font-bold py-3 px-4 rounded-xl text-center text-sm active:scale-95 transition-transform">
          Get Help
        </Link>
      </div>

      <Footer />
    </div>
  );
}

export async function generateStaticParams() {
  return banksData.map((bank) => ({
    slug: bank.company.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, ''),
  }));
}