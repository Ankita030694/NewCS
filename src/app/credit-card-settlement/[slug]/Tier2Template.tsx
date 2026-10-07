import Link from "next/link";
import Image from "next/image";
import TableOfContents from "@/components/TableOfContents";
import Breadcrumbs from "@/components/Breadcrumbs";
import StateGrid from "@/components/StateGrid";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Tier2Template({ bankName, slug }: { bankName: string; slug: string }) {
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
    "headline": `Settle Your ${bankName} Credit Card Dues Legally`,
    "description": `Falling behind on ${bankName} credit card payments? CredSettle negotiates significant waivers, stops collection agents, and finalizes your settlement legally.`,
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
        "name": `Can I settle my ${bankName} credit card dues if my account is not yet an NPA?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Banks like ${bankName} usually consider a formal One-Time Settlement once the account has been unpaid for 90 to 120 days. Before that stage, the bank may only suggest loan restructuring. However, CredSettle can start hardship talks early to prevent extra penalty charges.`
        }
      },
      {
        "@type": "Question",
        "name": `Are ${bankName} recovery agents allowed to visit my workplace?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `No. Under RBI guidelines, recovery agents cannot visit your workplace or contact your employer. They are also barred from calling you before 8 AM or after 7 PM. If agents cross the line, CredSettle takes immediate legal action.`
        }
      },
      {
        "@type": "Question",
        "name": `How much discount can I get on a ${bankName} credit card settlement?`,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": `Depending on your financial hardship and the age of the debt, borrowers often secure waivers between 50% and 75% on total dues, covering late charges, penal interest, and a portion of the principal balance.`
        }
      }
    ]
  };

  const tocSections = [
    { id: "why-settle", text: `Why ${bankName} Card Debt Piles Up`, level: 2 },
    { id: "how-settlement-works", text: `How a One-Time Settlement (OTS) Works`, level: 3 },
    { id: "stopping-harassment", text: `Stopping Recovery Agent Harassment`, level: 3 },
    { id: "settlement-steps", text: `Four Simple Steps to Settle Dues`, level: 3 },
    { id: "credit-score-impact", text: `Impact on Your CIBIL Score`, level: 3 },
    { id: "frequently-asked-questions", text: `Frequently Asked Questions`, level: 3 },
    { id: "state-guidelines", text: `State Legal Rules for ${bankName}`, level: 3 },
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
            Take control of your financial life. CredSettle acts as your legal shield, negotiating deep waivers directly with {bankName} while putting an immediate stop to recovery agent harassment.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          {/* Main Content Article */}
          <article className="lg:w-2/3 prose prose-lg max-w-none bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <h2 id="why-settle" className="scroll-mt-24 text-3xl font-bold mb-4 text-gray-900">
              Why {bankName} Card Debt Piles Up
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Credit card interest in India is very high. If you miss a card payment with {bankName}, the bank adds finance charges and late fines. In a few months, your debt can grow out of control. Paying only the minimum due barely cuts your loan balance. Most of your cash goes straight to interest charges. If you lost your job, fell ill, or had business losses, you do not have to stress alone. A legal debt settlement offers a clean break and a fresh financial start.
            </p>

            <h3 id="how-settlement-works" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              How a One-Time Settlement (OTS) Works with {bankName}
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A One-Time Settlement is a legal deal between you and {bankName}. Under an OTS, the bank accepts a lower one-time payment to close your card account for good. The rest of the balance is wiped out.
            </p>
            <p className="text-gray-700 leading-relaxed mb-6">
              Our team steps in to talk with the bank for you. We do not deal with rude call agents. Instead, our legal team talks directly to senior managers at {bankName}. We show clear proof of your financial hardship, like loss of pay or hospital bills. With this proof, we get deep waivers on late fees, interest, and principal dues. Borrowers often save 50% to 70% of their total balance.
            </p>

            <h3 id="stopping-harassment" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Stopping Harassment from {bankName} Recovery Agents
            </h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many borrowers face nonstop calls and home visits from collection agents. Under Reserve Bank of India (RBI) rules, abusive recovery tactics are against the law:
            </p>
            <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
              <li><strong>Strict Call Hours:</strong> Agents cannot call you before 8:00 AM or after 7:00 PM.</li>
              <li><strong>Workplace Privacy:</strong> Agents cannot visit your office or threaten your employment.</li>
              <li><strong>Zero Third-Party Contact:</strong> Agents cannot tell your family, friends, or neighbors about your debt.</li>
              <li><strong>Strict Dignity Standards:</strong> Agents cannot use abusive language or make false threats of police action.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-6">
              When you join CredSettle, we send an official legal notice to {bankName}. This tells the bank that all talks must go through our legal team. If any agent breaks RBI rules, we report them to the bank grievance desk and the RBI ombudsman.
            </p>

            <h3 id="settlement-steps" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Four Simple Steps to Settle Your Dues
            </h3>
            <div className="space-y-4 mb-6">
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 1: Free Case Review</h4>
                <p className="text-gray-700 text-base">Share your current {bankName} card bills and payment history with our debt resolution team.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 2: Hardship File Setup</h4>
                <p className="text-gray-700 text-base">We gather proof of your financial distress to build a solid, credible case for the bank.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 3: Direct Negotiation</h4>
                <p className="text-gray-700 text-base">Our legal experts negotiate directly with {bankName} officers to get you the lowest settlement amount.</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-xl border border-gray-100">
                <h4 className="font-semibold text-gray-900 mb-1">Step 4: Official Closure and NOC</h4>
                <p className="text-gray-700 text-base">You pay the agreed settlement sum directly to {bankName}. The bank then gives you an official No Objection Certificate.</p>
              </div>
            </div>

            <h3 id="credit-score-impact" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Impact on Your CIBIL Score
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              A credit card settlement will show as &quot;Settled&quot; on your credit report. This does cause a temporary dip in your CIBIL score. However, this is much better than staying in default for years with soaring debt and legal notices. After your settlement is complete, you can rebuild your credit score step by step. By making timely payments on small credit lines, most clients see their score bounce back within 12 to 24 months.
            </p>

            <h3 id="frequently-asked-questions" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              Frequently Asked Questions About {bankName} Settlement
            </h3>
            <div className="space-y-4 mb-8">
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Can I settle my {bankName} credit card dues if my account is not yet an NPA?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Banks like {bankName} usually consider a formal One-Time Settlement once the account has been unpaid for 90 to 120 days. Before that stage, the bank may only suggest loan restructuring. However, CredSettle can start hardship talks early to prevent extra penalty charges.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Are {bankName} recovery agents allowed to visit my workplace?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  No. Under RBI guidelines, recovery agents cannot visit your workplace or contact your employer. They are also barred from calling you before 8 AM or after 7 PM. If agents cross the line, CredSettle takes immediate legal action.
                </p>
              </div>
              <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How much discount can I get on a {bankName} credit card settlement?
                </h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Depending on your financial hardship and the age of the debt, borrowers often secure waivers between 50% and 75% on total dues, covering late charges, penal interest, and a portion of the principal balance.
                </p>
              </div>
            </div>

            <h3 id="state-guidelines" className="scroll-mt-24 text-2xl font-bold mb-4 text-gray-900">
              State Legal Rules for {bankName} Card Recovery
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Debt recovery laws and dispute procedures follow specific local court rules across India. CredSettle works with legal panels across every state and union territory to safeguard your rights. Select your state below to read our regional legal guide for {bankName} card settlements.
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
