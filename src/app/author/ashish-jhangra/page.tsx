import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashish Jhangra - Debt Resolution Expert | CredSettle",
  description: "Ashish Jhangra is a legal debt resolution expert at CredSettle, helping borrowers settle unpaid loans, stop recovery calls, and rebuild their credit score.",
  alternates: { canonical: "https://www.credsettle.com/author/ashish-jhangra" },
};

export default function AshishJhangraAuthorPage() {
  const authorSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Ashish Jhangra",
      "jobTitle": "Legal & Debt Resolution Expert",
      "description": "Legal and debt resolution expert at CredSettle, specializing in RBI loan settlements, borrower rights defense, and credit score rebuilding.",
      "url": "https://www.credsettle.com/author/ashish-jhangra",
      "image": "https://www.credsettle.com/ashishjhangra.png",
      "sameAs": [
        "https://www.linkedin.com/in/ashish-jhangra-ab1a54127/"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "CredSettle",
        "url": "https://www.credsettle.com"
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Script
        id="author-person-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(authorSchema) }}
      />
      <Navbar />
      <main className="flex-1 pb-16">
        {/* Author Header */}
        <div className="w-full bg-[#004479] py-16 md:py-24 text-white">
          <div className="w-full max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shrink-0 bg-white shadow-xl flex items-center justify-center relative">
                <Image 
                  src="/ashishjhangra.png" 
                  alt="Ashish Jhangra" 
                  fill
                  className="object-cover object-top" 
                />
              </div>
              <div className="text-center md:text-left flex flex-col justify-center pt-2 md:pt-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Ashish Jhangra</h1>
                <p className="text-xl md:text-2xl text-[#BFE0FF] mb-6">Legal &amp; Debt Resolution Expert</p>
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
              <h2 className="text-3xl font-bold text-[#004479] mb-8">About Ashish Jhangra</h2>
              <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
                <p>
                  Hi, I&apos;m Ashish. I work as a legal and debt resolution expert at <strong className="text-[#004479]">CredSettle</strong>.
                </p>
                <p>
                  I help individuals and small businesses resolve debt stress. My work focuses on lawful debt relief, bank negotiations, and loan settlements.
                </p>
                <p>
                  Many borrowers face tough times due to personal loans and credit cards. I guide each client through clear, legal steps to settle unpaid dues. I also protect their legal rights from recovery agent pressure.
                </p>
                <p>
                  Anyone can face money problems. With the right legal help, you can settle your debts, stop harassment, and build a secure financial future.
                </p>
                <p>
                  My goal is to provide honest, clear, and professional legal support to every borrower throughout their settlement journey.
                </p>
                
                <h3 className="text-2xl font-bold text-[#004479] mt-12 mb-6">Core Legal &amp; Debt Settlement Expertise</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 pl-0 list-none">
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Personal loan and credit card debt settlement.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Bank loan settlement and waiver negotiation.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Legal guidance for debt and recovery issues.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>RBI rules and borrower rights protection.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Legal defense against recovery agent harassment.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Resolution of bank notices and legal disputes.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <i className="fas fa-check-circle text-[#007AFF] mt-1.5 shrink-0"></i>
                    <span>Client support and credit score guidance.</span>
                  </li>
                </ul>
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
                      CIBIL Score Rebuilding
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      How to Rebuild &amp; Improve CIBIL After a Loan Settlement
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      Learn how to raise your credit score back to 750 or higher after a debt settlement.
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
                      Credit Repair &amp; Loan Closure
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      Convert a Settled Loan to &quot;Closed&quot; Status (Step-by-Step)
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      Learn how paying the waiver balance turns a settled loan into a closed loan.
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
                      Bureau Record Correction
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      How to Remove Settled Status from CIBIL
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      Learn the official legal steps to dispute and update credit records under CICRA 2005.
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
                      Post-Settlement Loans
                    </span>
                    <h4 className="text-base font-bold text-gray-900 group-hover:text-[#007AFF] transition-colors leading-snug">
                      How to Get a Loan After Settlement (Approval Guide 2026)
                    </h4>
                    <p className="text-xs text-gray-600 mt-2 line-clamp-2 leading-relaxed">
                      Learn how to qualify for fresh loans and credit cards after settling past debts.
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
                      Read our guides on borrower rights, RBI rules, and simple loan settlement tips.
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
              <div>
                <p className="text-lg font-bold text-[#004479] m-0 mb-1">
                  Connect for Legal Debt Guidance
                </p>
                <p className="text-sm text-gray-600 m-0">
                  Let us connect to protect your rights, stop harassment, and build financial peace.
                </p>
              </div>
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
