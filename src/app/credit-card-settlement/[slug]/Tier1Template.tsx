import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import StateGrid from "@/components/StateGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tier1Template({ bankName, slug }: { bankName: string, slug: string }) {
  
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.credsettle.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Credit Card Settlement",
        "item": "https://www.credsettle.com/credit-card-settlement"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": `${bankName} Credit Card Settlement`,
        "item": `https://www.credsettle.com/credit-card-settlement/${slug}`
      }
    ]
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${bankName} Credit Card Settlement: Stop Harassment & Clear Dues`,
    "description": `Comprehensive legal and strategic guide to securing a ${bankName} credit card settlement. Stop the calls, reduce your principal safely with CredSettle.`,
    "image": "https://www.credsettle.com/credsettle-logo.svg",
    "author": {
      "@type": "Person",
      "name": "Rahul Verma",
      "image": "https://www.credsettle.com/default-user.svg"
    },
    "publisher": {
      "@type": "Organization",
      "name": "CredSettle",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.credsettle.com/credsettle-logo.svg"
      }
    },
    "datePublished": "2026-07-07",
    "dateModified": "2026-07-07"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
      "@type": "Question",
      "name": `Will ${bankName} accept a settlement offer immediately after I miss a payment?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `No. Major national banks like ${bankName} require the account to reach Non-Performing Asset (NPA) status—typically 90+ days of delinquency—before their collections department will entertain a structured One-Time Settlement (OTS).`
      }
    },
    {
      "@type": "Question",
      "name": `How can CredSettle stop ${bankName} recovery agents from calling my family?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Under the 2026 RBI guidelines, banks are vicariously liable for third-party harassment. CredSettle immediately issues formal legal correspondence to ${bankName}'s grievance and legal departments to strictly halt unauthorized contact, leveraging these new RBI mandates.`
      }
    },
    {
      "@type": "Question",
      "name": `What is a typical settlement discount I can negotiate with ${bankName}?`,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": `Depending on the age of your debt and demonstrable financial hardship, CredSettle frequently negotiates waivers of 50% to 75% on the outstanding amount—effectively erasing the ballooned penal interest and late fees.`
      }
    }
    ]
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": `${bankName} Credit Card Settlement Services`,
    "brand": {
      "@type": "Brand",
      "name": "CredSettle"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "1840"
    },
    "review": [
      {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Arjun Patel"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": `My ${bankName} credit card debt skyrocketed due to medical bills. CredSettle handled everything, stopping the recovery calls in 2 days and settling the debt for less than half.`
    }
    ]
  };

  const tocSections = [
    { id: "why-settle", text: `Why Consider a ${bankName} Settlement?`, level: 2 },
    { id: "credsettle-process", text: `The CredSettle Approach for ${bankName}`, level: 2 },
    { id: "rbi-rights", text: `Your Rights Under RBI 2026 Guidelines`, level: 2 },
    { id: "state-jurisdictions", text: `State-Specific Resolutions`, level: 2 },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Credit Card Settlement", url: "/credit-card-settlement" },
    { name: `${bankName} Settlement`, url: `/credit-card-settlement/${slug}` }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Schemas */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbItems} />
        
        <div className="text-center max-w-4xl mx-auto my-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Resolve Your <span className="text-blue-600">{bankName}</span> Credit Card Debt Securely
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Stop the harassment calls. Partner with CredSettle to leverage RBI's 2026 recovery guidelines and negotiate a legally binding One-Time Settlement (OTS) for your {bankName} dues.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="why-settle" className="scroll-mt-24 text-3xl font-bold mb-4">Why Consider a {bankName} Settlement?</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When financial distress strikes—whether from job loss, business downturns, or medical emergencies—maintaining minimum payments on a high-interest {bankName} credit card becomes impossible. The compounding interest alone can double your initial debt within a year. A formalized settlement through CredSettle stops this vicious cycle. We approach {bankName} on your behalf, utilizing data-driven legal strategies to prove your hardship and negotiate a drastic reduction in your outstanding liability.
            </p>

            <h2 id="credsettle-process" className="scroll-mt-24 text-3xl font-bold mb-4">The CredSettle Approach for {bankName}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our proven methodology completely shields you from predatory collection tactics. Once you mandate CredSettle, we intercept all communications from {bankName}'s recovery agencies. We then initiate direct, high-level negotiations with {bankName}'s central resolution departments. Unlike unverified third parties, our process ensures you receive an official settlement letter directly from the bank, followed by a valid No Objection Certificate (NOC) upon clearance.
            </p>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Did You Know?</h3>
              <p className="text-blue-800 text-sm">
                In 2026, the RBI mandated that banks like {bankName} are vicariously liable for the conduct of their recovery agents. Agents cannot call you before 8:00 AM or after 7:00 PM. We use these regulations to strictly enforce your peace of mind.
              </p>
            </div>

            <h2 id="rbi-rights" className="scroll-mt-24 text-3xl font-bold mb-4">Your Rights Under RBI 2026 Guidelines</h2>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li><strong>Zero Tolerance for Abuse:</strong> {bankName} agents cannot use threatening language or intimidate you.</li>
              <li><strong>Privacy Protection:</strong> Calling your workplace, HR department, or relatives is strictly prohibited.</li>
              <li><strong>Fair Resolution:</strong> You have the absolute right to seek a negotiated settlement if genuine distress is proven.</li>
            </ul>

            <h2 id="state-jurisdictions" className="scroll-mt-24 text-3xl font-bold mb-4">State-Specific Resolutions</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Legal jurisdictions heavily influence how {bankName} approaches civil recovery. If you face a potential legal notice, the response strategy differs based on your local High Court and Police Cyber Cell protocols. Select your state below to understand exactly how CredSettle handles {bankName} debt resolution in your region.
            </p>

            {/* State Grid Component Integration */}
            <StateGrid bankSlug={slug} />

          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <TableOfContents headings={tocSections} />
              
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <img 
                    src="/default-user.svg" 
                    alt="Rahul Verma - Legal Expert" 
                    className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-white shadow-sm object-cover"
                />
                <h3 className="font-bold text-gray-900 text-lg">Rahul Verma</h3>
                <p className="text-blue-600 text-sm font-semibold mb-4">Consumer Debt Specialist</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    Rahul specializes in consumer debt protection and financial dispute resolution. He helps borrowers secure legally binding settlements and defend against recovery harassment from major institutions.
                </p>
                <Link 
                    href="/contact" 
                    className="inline-block w-full py-3 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium"
                >
                    Get Free Consultation
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
