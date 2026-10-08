import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export const metadata: Metadata = {
    title: 'Terms and Conditions | CredSettle Legal Engagement Policy',
    description: "Read the legal terms governing your use of CredSettle\u2019s RBI-compliant debt settlement services. This includes acceptable use, liability, fees.",
    alternates: {
        canonical: 'https://www.credsettle.com/terms-and-conditions',
    },
    openGraph: {
        title: 'Terms and Conditions | CredSettle',
        description: "Understand the terms that govern your use of CredSettle\u2019s debt settlement platform, our acceptable use policy, fees. Refund guidelines.",
        url: 'https://www.credsettle.com/terms-and-conditions',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Terms and Conditions | CredSettle',
        description: 'Understand the legal agreement for using CredSettle’s RBI-compliant loan settlement services.',
    },
};
const SECTIONS = [
    {
        icon: 'fa-scale-balanced',
        title: 'Acceptable Use',
        description: 'Please use the CredSettle platform responsibly. By accessing our services, you agree to:',
        bullets: [
            'Follow these Terms, our Privacy Policy, and applicable laws.',
            'Treat other users and CredSettle team members with respect.',
            'Do not upload or share harmful, unlawful, or infringing content.',
            'Do not attempt to disrupt or bypass our security systems.',
            'Do not send spam, malware, or unauthorized messages through our platform.',
        ],
    },
    {
        icon: 'fa-shield-halved',
        title: 'Limitation of Liability',
        description: 'We work diligently to protect your interests, but some risks remain beyond our control. Under the law, we are not liable for losses caused by:',
        bullets: [
            'Your use or inability to use our tools and services.',
            'Unauthorized data access that occurs despite our security measures.',
            'Statements or actions made by third parties or external partners.',
        ],
    },
    {
        icon: 'fa-handshake',
        title: 'Indemnification',
        description: 'You agree to defend CredSettle and its staff from claims caused by your actions. This applies when claims arise from:',
        bullets: [
            'A breach of these Terms and Conditions.',
            'A violation of any law or third-party right while using our services.',
            'Misuse of content or tools obtained through CredSettle.',
        ],
    },
    {
        icon: 'fa-indian-rupee-sign',
        title: 'Fees',
        description: 'CredSettle provides clear, RBI-compliant debt resolution. Before you begin any service, we clearly explain:',
        bullets: [
            'The total fee payable for your settlement service.',
            'Any applicable taxes or statutory fees.',
            'The payment schedule and clear service milestones.',
        ],
        footer: 'We begin execution only after receiving your explicit consent and the agreed payment.',
    },
    {
        icon: 'fa-rotate-left',
        title: 'Refunds',
        description: 'Refund terms follow the agreement signed during onboarding. Please keep in mind:',
        bullets: [
            'Fees already paid become non-refundable once work begins.',
            'You can cancel future services at any time with no extra charges.',
            'Management reviews discretionary adjustments on a case-by-case basis.',
        ],
    },
    {
        icon: 'fa-envelope-open-text',
        title: 'Contact Us',
        description: "We are here to help you understand these terms. Reach out to our compliance team anytime at.",
        footer: (<Link href="mailto:info@credsettle.com" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity">
        info@credsettle.com
      </Link>),
    },
];
export default function TermsAndConditionsPage() {
    const today = new Date();
    const isoDate = today.toISOString().split('T')[0];
    const formattedDate = today.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
    });
    const schemaMarkup = {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': 'https://www.credsettle.com/terms-and-conditions',
        name: 'CredSettle Terms and Conditions',
        url: 'https://www.credsettle.com/terms-and-conditions',
        description: "Review the legal terms that govern your use of CredSettle\u2019s RBI-compliant debt settlement services. This includes acceptable use, liability, fees, and refund policies.",
        inLanguage: 'en-IN',
        breadcrumb: {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://www.credsettle.com/',
                },
                {
                    '@type': 'ListItem',
                    position: 2,
                    name: 'Terms and Conditions',
                    item: 'https://www.credsettle.com/terms-and-conditions',
                },
            ],
        },
        publisher: {
            '@type': 'Organization',
            name: 'CredSettle',
            url: 'https://www.credsettle.com',
            contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'customer support',
                email: 'info@credsettle.com',
                telephone: '+91-8800226635',
                areaServed: 'IN',
                availableLanguage: ['en', 'hi'],
            },
        },
        datePublished: '2024-01-01',
        dateModified: isoDate,
    };
    return (<div className="relative min-h-screen bg-white">
      <Script id="terms-schema" type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </Script>

      <div className="pointer-events-none absolute inset-x-0 top-[-120px] h-[520px]" style={{
            background: 'radial-gradient(55% 55% at 50% 45%, rgba(0, 122, 255, 0.26) 0%, rgba(0, 122, 255, 0.1) 40%, rgba(0, 122, 255, 0) 70%)',
            filter: 'blur(40px)',
        }}/>

      <Navbar />

      <main className="relative z-10">
        <section className="pt-28 pb-12 md:pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-[#E2F3FF] via-white to-[#F7FBFF] p-8 md:p-12 shadow-xl" style={{
            boxShadow: '0px 30px 64px 0px rgba(0, 74, 128, 0.08), inset 0px 1px 0px rgba(255, 255, 255, 0.60)',
        }}>
              <div className="flex flex-col gap-6 md:gap-8">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#007AFF]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#007AFF]">
                  <i className="fa-solid fa-gavel text-[#007AFF]" aria-hidden="true"/>
                  Legal Notice
                </span>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[30px] leading-[40px] font-semibold text-[#0C2756] md:text-[40px] md:leading-[48px]">
                    Terms and Conditions
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-[rgba(12,39,86,0.72)] md:text-lg md:leading-8">
                    These Terms and Conditions govern your use of.{' '}
                    <Link href="https://www.credsettle.com" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity">
                      www.credsettle.com
                    </Link>
                    , our mobile app, and all related services. By using CredSettle, you confirm that you understand and accept these terms. If you do not agree with these terms, please do not use our platform.
                  </p>
                  <p className="text-sm uppercase tracking-[0.24em] text-[rgba(12,39,86,0.58)]">
                    Last reviewed: {formattedDate}
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 px-5 py-4 text-sm md:text-base md:leading-7 text-[rgba(12,39,86,0.75)] shadow-inner border border-[#B9DFFF]/60">
                  By using this Website, you also agree to our.{' '}
                  <Link href="/privacy-policy" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity">
                    Privacy Policy
                  </Link>
                  , which explains how we collect, use, and protect your information.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            {SECTIONS.map((section) => (<article key={section.title} className="rounded-3xl border border-[rgba(0,122,255,0.12)] bg-white/90 px-6 py-7 md:px-10 md:py-12 shadow-[0px_20px_45px_rgba(0,74,128,0.08)]">
                <div className="flex flex-col gap-5 md:gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/12 text-[#007AFF]">
                      <i className={`fa-solid ${section.icon} text-xl`} aria-hidden="true"/>
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <h2 className="text-xl font-semibold text-[#0C2756] md:text-2xl">{section.title}</h2>
                      <p className="text-sm leading-6 text-[rgba(12,39,86,0.72)] md:text-base md:leading-7">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {section.bullets && (<ul className="flex flex-col gap-3 md:gap-4">
                      {section.bullets.map((bullet) => (<li key={bullet} className="flex items-start gap-3 rounded-2xl bg-[#EFF7FF] px-4 py-4 text-sm leading-6 text-[rgba(12,39,86,0.78)] md:text-base md:leading-7">
                          <i className="fa-solid fa-check text-[#007AFF] pt-1" aria-hidden="true"/>
                          <span>{bullet}</span>
                        </li>))}
                    </ul>)}

                  {section.footer && (<div className="rounded-2xl border border-[#007AFF]/15 bg-[#F7FBFF] px-5 py-4 text-sm leading-6 text-[rgba(12,39,86,0.78)] md:text-base md:leading-7">
                      {section.footer}
                    </div>)}
                </div>
              </article>))}
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#007AFF] via-[#1D88FE] to-[#68B9FF] px-8 py-10 md:px-12 md:py-14 shadow-[0_32px_54px_rgba(0,96,181,0.25)]">
              <div className="flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3 md:max-w-2xl">
                  <h3 className="text-2xl font-semibold md:text-[28px] md:leading-[36px]">
                    Need clarity on how these Terms apply to your situation?
                  </h3>
                  <p className="text-sm leading-6 text-white/85 md:text-base md:leading-7">
                    Schedule a call with CredSettle’s compliance team. We will walk you through the engagement process,
                    paperwork, and RBI-compliant settlement roadmap.
                  </p>
                </div>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0C2756] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-3.5 md:text-base">
                  Talk to an Expert
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
