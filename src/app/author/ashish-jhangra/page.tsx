import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashish Jhangra - Author & Legal Expert | CredSettle",
  description: "Ashish is a legal and debt resolution professional at AMA Legal Solutions, passionate about helping individuals and businesses overcome financial challenges.",
};

export default function AshishJhangraAuthorPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />
      <main className="flex-1 pb-16">
        {/* Author Header */}
        <div className="w-full bg-[#004479] py-16 md:py-24 text-white">
          <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shrink-0 bg-white shadow-xl flex items-center justify-center">
                <Image 
                  src="/credsettle-logo-black.png" 
                  alt="Ashish Jhangra" 
                  width={200} 
                  height={200} 
                  className="object-contain w-3/4 h-3/4" 
                />
              </div>
              <div className="text-center md:text-left flex flex-col justify-center pt-2 md:pt-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ashish Jhangra</h1>
                <p className="text-xl md:text-2xl text-[#BFE0FF] mb-6">Legal &amp; Debt Resolution Professional</p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href="https://www.linkedin.com/in/ashish-jhangra-ab1a54127/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 bg-white text-[#007AFF] px-6 py-3 rounded-full font-bold transition hover:scale-105 shadow-md"
                  >
                    <i className="fab fa-linkedin text-xl"></i>
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Content */}
        <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="bg-white rounded-3xl shadow-sm p-8 md:p-12 border border-gray-100 space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-[#004479] mb-8">About Me</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Hi, I&apos;m Ashish, a legal and debt resolution professional at <strong className="text-[#004479]">AMA Legal Solutions</strong>.
                </p>
                <p>
                  I am passionate about helping individuals and businesses overcome financial challenges through legal guidance, debt resolution, and financial recovery solutions.
                </p>
                <p>
                  At AMA Legal Solutions, I work closely with clients who are facing financial stress due to personal loans, credit cards, business loans, and recovery-related issues. My role is to understand each client&apos;s situation, provide practical legal support, and help them explore lawful debt resolution options while protecting their rights.
                </p>
                
                <h3 className="text-2xl font-bold text-[#004479] mt-12 mb-6">My Areas of Expertise</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pl-0 list-none">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Personal Loan &amp; Credit Card Debt Resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Loan Settlement Assistance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Legal Consultation for Debt-Related Matters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>RBI Guidelines &amp; Consumer Rights Awareness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Recovery Agent Harassment Support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Financial Dispute Resolution</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Client Relationship Management</span>
                  </li>
                </ul>

                <div className="mt-12 pt-8 border-t border-gray-100 space-y-6">
                  <p>
                    I believe that financial difficulties can happen to anyone, and with the right legal guidance and a structured approach, individuals can work toward financial stability and peace of mind.
                  </p>
                  <p>
                    My goal is to educate, support, and empower clients by providing ethical, transparent, and professional legal assistance throughout their debt resolution journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Featured Articles Authored by Ashish */}
            <div className="pt-8 border-t border-gray-100">
              <h3 className="text-2xl font-bold text-[#004479] mb-6">
                Featured Guides &amp; Publications
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Link
                  href="/improve-cibil-after-loan-settlement"
                  className="p-5 rounded-2xl border border-gray-200 hover:border-[#007AFF] hover:shadow-md transition-all bg-slate-50 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#007AFF] uppercase tracking-wider block mb-1">
                      CIBIL Rebuilding
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      How to Rebuild &amp; Improve CIBIL After a Loan Settlement
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      A comprehensive step-by-step blueprint to recover credit scores to 750+ after executing an OTS.
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-[#007AFF] flex items-center gap-1">
                    <span>Read Full Guide</span>
                    <span>&rarr;</span>
                  </div>
                </Link>

                <Link
                  href="/convert-settled-status-to-closed"
                  className="p-5 rounded-2xl border border-gray-200 hover:border-[#007AFF] hover:shadow-md transition-all bg-slate-50 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#007AFF] uppercase tracking-wider block mb-1">
                      Credit Repair &amp; Closure
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      Convert a Settled Loan to &quot;Closed&quot; Status (Step-by-Step)
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      How paying the remaining waiver balance upgrades your loan status from Settled to Closed.
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-[#007AFF] flex items-center gap-1">
                    <span>Read Full Guide</span>
                    <span>&rarr;</span>
                  </div>
                </Link>

                <Link
                  href="/remove-settled-status-from-cibil"
                  className="p-5 rounded-2xl border border-gray-200 hover:border-[#007AFF] hover:shadow-md transition-all bg-slate-50 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#007AFF] uppercase tracking-wider block mb-1">
                      Bureau Compliance
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      How to Remove Settled Status from CIBIL
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      The official banking and legal mechanisms to dispute and update bureau records under CICRA 2005.
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-[#007AFF] flex items-center gap-1">
                    <span>Read Full Guide</span>
                    <span>&rarr;</span>
                  </div>
                </Link>

                <Link
                  href="/get-loan-after-settlement"
                  className="p-5 rounded-2xl border border-gray-200 hover:border-[#007AFF] hover:shadow-md transition-all bg-slate-50 group flex flex-col justify-between"
                >
                  <div>
                    <span className="text-xs font-bold text-[#007AFF] uppercase tracking-wider block mb-1">
                      Post-Settlement Borrowing
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      How to Get a Loan After Settlement (Approval Guide 2026)
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      Detailed eligibility criteria, cooling-off periods, and lender approval strategies for fresh credit.
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-[#007AFF] flex items-center gap-1">
                    <span>Read Full Guide</span>
                    <span>&rarr;</span>
                  </div>
                </Link>

                <Link
                  href="/resources"
                  className="p-5 rounded-2xl border border-gray-200 hover:border-[#007AFF] hover:shadow-md transition-all bg-slate-50 group flex flex-col justify-between md:col-span-2"
                >
                  <div>
                    <span className="text-xs font-bold text-[#007AFF] uppercase tracking-wider block mb-1">
                      CredSettle Knowledge Base
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      Explore All Legal &amp; Debt Resolution Resources
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      Access our entire library of borrower rights guides, RBI rules, and settlement strategies.
                    </p>
                  </div>
                  <div className="mt-4 text-xs font-bold text-[#007AFF] flex items-center gap-1">
                    <span>Browse All Resources</span>
                    <span>&rarr;</span>
                  </div>
                </Link>
              </div>
            </div>
            
            <div className="bg-[#F0F7FF] rounded-2xl p-6 md:p-8 mt-10 border border-[#BFE0FF] text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-lg font-bold text-[#004479] m-0">
                Let&apos;s connect and build a future based on trust, compliance, and financial awareness.
              </p>
              <a 
                href="https://www.linkedin.com/in/ashish-jhangra-ab1a54127/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="shrink-0 bg-[#007AFF] text-white px-6 py-3 rounded-xl font-bold transition hover:bg-[#0056b3] shadow-md flex items-center gap-2"
              >
                <i className="fab fa-linkedin text-xl"></i>
                Message Me
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
