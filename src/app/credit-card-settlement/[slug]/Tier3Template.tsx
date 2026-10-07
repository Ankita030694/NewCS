import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import StateGrid from "@/components/StateGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tier3Template({ bankName, slug }: { bankName: string; slug: string }) {
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
    "headline": `Legal ${bankName} Credit Card Settlement Service`,
    "description": `Experiencing financial hardship? Learn how to settle your ${bankName} credit card debt legally with CredSettle, avoid agent harassment, and obtain an NOC.`,
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
        "name": `How long does a credit card settlement with ${bankName} take?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Most settlements with ${bankName} take 3 to 6 weeks. The exact timeline depends on how fast the bank verifies your financial hardship documents and approves the settlement terms.`
        }
      },
      {
        "@type": "Question",
        "name": `Will I receive an official No Objection Certificate (NOC) from ${bankName}?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Yes. Once the agreed settlement amount is paid directly into your ${bankName} credit card account, the bank is legally required to issue an official NOC confirming that the account is permanently closed with no pending dues.`
        }
      },
      {
        "@type": "Question",
        "name": `Can ${bankName} file police charges against me for missed credit card payments?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No. Credit card default is strictly a civil matter under Indian law. Banks cannot file criminal charges or get you arrested for unpaid credit card debt. CredSettle protects your legal rights if agents make false threats.`
        }
      }
    ]
  };

  const tocSections = [
    { id: "why-bills-pile-up", text: `Why ${bankName} Card Bills Pile Up Fast`, level: 2 },
    { id: "legal-settlement-path", text: `Our Legal Path to Settle with ${bankName}`, level: 3 },
    { id: "rbi-borrower-rights", text: `Your Rights Under RBI Rules`, level: 3 },
    { id: "settlement-steps", text: `Four Clear Steps to Settle Dues`, level: 3 },
    { id: "credit-health", text: `Rebuilding Your Credit Score`, level: 3 },
    { id: "frequently-asked-questions", text: `Frequently Asked Questions`, level: 3 },
    { id: "state-guidelines", text: `State Legal Support for ${bankName}`, level: 3 },
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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Breadcrumbs items={breadcrumbItems} />

        <div className="text-center max-w-4xl mx-auto my-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Settle Your <span className="text-blue-600">{bankName}</span> Credit Card Dues
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Navigate credit card default safely. CredSettle offers a protected, legally sound pathway to settle your {bankName} debt and regain financial peace of mind.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content Article */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="why-bills-pile-up" className="scroll-mt-24 text-3xl font-bold mb-4 text-gray-900">
              Why {bankName} Card Bills Pile Up Fast
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Credit cards carry the highest interest rates in India. When you miss even one payment on your {bankName} card, the bank adds late fees and finance charges. In just a few months, your unpaid total can double. Paying the minimum due each month does not clear the card. Almost all of that cash goes to extra fees rather than the base loan. If you have lost a job, faced illness, or had a dip in pay, full payment may feel out of reach. A debt settlement is a legal and practical way to end this debt for good.
            </p>

            <h3 id="legal-settlement-path" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Our Legal Path to Settle with {bankName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              CredSettle takes charge of your case from day one. We take over all talks with {bankName} so you do not have to face collection calls alone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our legal team talks directly to the senior debt resolution desk at {bankName}. We present clear proof of your financial hardship, such as salary cuts or medical bills. We ask the bank to drop late fines, remove interest, and give a big discount on the principal dues. This lets you settle the card with one fair payment that you can afford.
            </p>

            <h3 id="rbi-borrower-rights" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Your Rights Under Reserve Bank of India Rules
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Card default is a civil issue, not a crime. {bankName} recovery agents have no right to threaten you with police action or jail. Under RBI rules, borrowers have clear rights that banks must honor:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Restricted Calling Hours:</strong> Agents cannot call you before 8 AM or after 7 PM.</li>
              <li><strong>No False Legal Threats:</strong> Agents cannot make false threats of jail, arrest, or police complaints.</li>
              <li><strong>Protection of Privacy:</strong> Agents cannot contact your boss, coworkers, family members, or friends.</li>
              <li><strong>Zero Harassment:</strong> Agents cannot use abusive language or show up at your home without prior notice.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              The day you sign up with CredSettle, we send formal legal notices to {bankName}. We inform them that we represent you. Any bad behavior by agents is promptly reported to the bank grievance desk and the RBI ombudsman.
            </p>

            <h3 id="settlement-steps" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Four Clear Steps to Settle Your Dues
            </h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 1: Free File Review</h4>
                <p className="text-gray-700 text-base">We look at your {bankName} card bills, total dues, and monthly budget.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 2: Legal Protection</h4>
                <p className="text-gray-700 text-base">We write to {bankName} to state that our legal team handles your account. This stops daily calls.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 3: Direct Settlement Talks</h4>
                <p className="text-gray-700 text-base">We negotiate directly with the bank to get the highest possible waiver on your debt.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 4: Final Payment and NOC</h4>
                <p className="text-gray-700 text-base">You pay the agreed sum straight to {bankName}. The bank then gives you an official No Objection Certificate.</p>
              </div>
            </div>

            <h3 id="credit-health" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Rebuilding Your Credit Score
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Settling a card will show as &quot;Settled&quot; on your CIBIL report. This does cause a temporary dip in your score. But it is much better than staying in default for years with rising fines and legal threats. Once your {bankName} card is closed, you can rebuild your credit score step by step. With on-time payments on small credit lines, your score can recover within one to two years.
            </p>

            <h3 id="frequently-asked-questions" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions About {bankName} Settlement
            </h3>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How long does a credit card settlement with {bankName} take?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Most settlements with {bankName} take 3 to 6 weeks. The exact timeline depends on how fast the bank verifies your financial hardship documents and approves the settlement terms.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Will I receive an official No Objection Certificate (NOC) from {bankName}?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Yes. Once the agreed settlement amount is paid directly into your {bankName} credit card account, the bank is legally required to issue an official NOC confirming that the account is permanently closed with no pending dues.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Can {bankName} file police charges against me for missed credit card payments?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  No. Credit card default is strictly a civil matter under Indian law. Banks cannot file criminal charges or get you arrested for unpaid credit card debt. CredSettle protects your legal rights if agents make false threats.
                </p>
              </div>
            </div>

            <h3 id="state-guidelines" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              State Legal Support for {bankName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Debt rules and police actions can vary across states. CredSettle has legal partners in every state to safeguard your rights. Select your state below to see how we handle {bankName} card settlements in your area.
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
