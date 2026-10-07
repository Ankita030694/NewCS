import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import StateGrid from "@/components/StateGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tier1Template({ bankName, slug }: { bankName: string; slug: string }) {
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
        "name": `${bankName} Settlement`,
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
          "text": `Major national banks like ${bankName} usually require an account to reach Non-Performing Asset status, around 90 days of missed payments, before approving a One-Time Settlement. However, we can begin hardship filings early to stop penalty fees.`
        }
      },
      {
        "@type": "Question",
        "name": `How can CredSettle stop ${bankName} recovery agents from calling my family?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Under RBI rules, banks are held responsible for third-party agent conduct. CredSettle sends formal legal notices to ${bankName} to halt unauthorized contact with your friends and family.`
        }
      },
      {
        "@type": "Question",
        "name": `What is a typical settlement discount I can negotiate with ${bankName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Depending on the age of your debt and demonstrable financial hardship, borrowers frequently secure waivers of 50% to 75% on the outstanding amount, removing penalty charges and late fees.`
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
    { id: "why-settle", text: `Why Settle ${bankName} Card Debt`, level: 2 },
    { id: "credsettle-process", text: `How CredSettle Protects You`, level: 3 },
    { id: "rbi-rights", text: `Your RBI Rights for ${bankName}`, level: 3 },
    { id: "settlement-steps", text: `Four Steps to Settle Your Dues`, level: 3 },
    { id: "credit-score-impact", text: `Impact on Your CIBIL Score`, level: 3 },
    { id: "frequently-asked-questions", text: `Frequently Asked Questions`, level: 3 },
    { id: "state-jurisdictions", text: `State-Specific Resolutions`, level: 3 },
  ];

  const breadcrumbItems = [
    { name: "Home", url: "/" },
    { name: "Credit Card Settlement", url: "/credit-card-settlement" },
    { name: `${bankName} Settlement`, url: `/credit-card-settlement/${slug}` }
  ];

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Structured Data Schemas */}
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
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Stop recovery calls and clear your credit card debt safely. Partner with CredSettle to use Reserve Bank of India (RBI) rules and negotiate a legal One-Time Settlement (OTS) for your {bankName} card dues.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content Article */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="why-settle" className="scroll-mt-24 text-3xl font-bold mb-4 text-gray-900">
              Why Choose a Settlement for {bankName} Card Debt
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              When life hits you with job loss, health crises, or a drop in income, paying your high-interest {bankName} credit card becomes very hard. High finance fees and late fines make your balance grow fast. In just a year, compound interest can double what you owe. Paying only the minimum due does not solve this issue. Most of your payment goes to bank fees, not your actual card balance. A legal settlement with CredSettle ends this trap. We reach out to {bankName} for you, prove your financial distress, and negotiate a large waiver on what you owe.
            </p>

            <h3 id="credsettle-process" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              How CredSettle Protects You from {bankName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our proven process protects you from rude recovery agents. Once you hire CredSettle, we intercept all calls and notices from {bankName} recovery teams. We then start direct talks with {bankName} settlement officers. You get an official settlement letter issued directly by the bank. Once you pay the agreed sum, the bank gives you a legal No Objection Certificate (NOC).
            </p>

            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mb-8">
              <h3 className="font-semibold text-blue-900 mb-2">Did You Know?</h3>
              <p className="text-blue-800 text-sm">
                Under RBI rules, banks like {bankName} are legally held responsible for how their recovery agents act. Agents cannot call you before 8:00 AM or after 7:00 PM. We use these rules to ensure your peace of mind.
              </p>
            </div>

            <h3 id="rbi-rights" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Your Rights Under RBI Rules for {bankName}
            </h3>
            <ul className="list-disc pl-6 text-gray-700 mb-8 space-y-2">
              <li><strong>No Abusive Language:</strong> {bankName} agents cannot use threats or harsh words with you.</li>
              <li><strong>Privacy Guard:</strong> Agents are barred from calling your boss, workplace, or family members.</li>
              <li><strong>Fair Settlement Rights:</strong> You have the legal right to request a settlement if you face genuine hardship.</li>
            </ul>

            <h3 id="settlement-steps" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Four Steps to Settle Your Dues
            </h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 1: Free Consultation</h4>
                <p className="text-gray-700 text-base">Share your {bankName} statements with our debt resolution team.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 2: Hardship Proof</h4>
                <p className="text-gray-700 text-base">We gather your salary loss, medical bills, or business data.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 3: Direct Talks</h4>
                <p className="text-gray-700 text-base">We negotiate with {bankName} to cut your total dues.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 4: Final Closure</h4>
                <p className="text-gray-700 text-base">You pay the bank directly and receive your official NOC.</p>
              </div>
            </div>

            <h3 id="credit-score-impact" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Impact on Your CIBIL Score
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Settling your {bankName} card will show as &quot;Settled&quot; on your CIBIL report. Your score may dip in the short term. But this is far better than staying in default for years with rising fines and court threats. Once settled, you can rebuild your score with small secured cards and on-time payments. Most people rebuild their credit within 12 to 24 months.
            </p>

            <h3 id="frequently-asked-questions" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions About {bankName} Settlement
            </h3>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Will {bankName} accept a settlement offer immediately after I miss a payment?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Major national banks like {bankName} usually require an account to reach Non-Performing Asset status, around 90 days of missed payments, before approving a One-Time Settlement. However, we can begin hardship filings early to stop penalty fees.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How can CredSettle stop {bankName} recovery agents from calling my family?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Under RBI rules, banks are held responsible for third-party agent conduct. CredSettle sends formal legal notices to {bankName} to halt unauthorized contact with your friends and family.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  What is a typical settlement discount I can negotiate with {bankName}?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Depending on the age of your debt and demonstrable financial hardship, borrowers frequently secure waivers of 50% to 75% on the outstanding amount, removing penalty charges and late fees.
                </p>
              </div>
            </div>

            <h3 id="state-jurisdictions" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              State-Specific Resolutions for {bankName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Court rules and recovery actions vary across Indian states. If you get a legal notice, the right response depends on your local High Court and police cyber cells. Choose your state below to see how CredSettle handles {bankName} card settlements in your region.
            </p>

            {/* State Grid Navigation */}
            <StateGrid bankSlug={slug} />
          </article>

          {/* Sidebar */}
          <aside className="lg:w-1/3">
            <div className="sticky top-24 space-y-8">
              <TableOfContents headings={tocSections} />

              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100 shadow-sm text-center">
                <Image
                  src="/default-user.svg"
                  alt="Rahul Verma - Consumer Debt Specialist"
                  width={96}
                  height={96}
                  className="rounded-full mx-auto mb-4 border-2 border-white shadow-sm object-cover"
                />
                <p className="font-bold text-gray-900 text-lg">Rahul Verma</p>
                <p className="text-blue-600 text-sm font-semibold mb-4">Consumer Debt Specialist</p>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Rahul Verma helps borrowers resolve credit card debt legally. He stops recovery harassment and negotiates fair settlements with banks across India.
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
