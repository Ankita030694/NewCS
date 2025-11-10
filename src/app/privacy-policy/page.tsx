import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const SECTIONS = [
  {
    icon: 'fa-user-shield',
    title: 'Collection of Personally Identifiable Information',
    description:
      'We collect limited personal information to activate your engagement, customise settlement strategies, and keep you informed about progress. This may include:',
    bullets: [
      'Full name, email address, mailing address, and phone number for identification and secure communication.',
      'Company name, team size, and business type when you enquire on behalf of an organisation.',
      'Billing details required to process professional fees (we never store full credit/debit card numbers).',
    ],
    footer:
      'By providing your mobile number or email address, you consent to receive essential service communications from CredSettle—even if your number is registered on the DND list.',
  },
  {
    icon: 'fa-chart-bar',
    title: 'Use of Non-Personal Identifiable Data',
    description:
      'To optimise the CredSettle experience we may capture non-identifiable analytics such as device fingerprints, locale preferences, or session behaviour. Typical data points include:',
    bullets: [
      'Device type, operating system, browser version, and language preference.',
      'Time zone, screen resolution, referring/exit pages, and on-site navigation patterns.',
    ],
    footer:
      'We use aggregated insights to improve usability, prioritise new features, and tighten the security posture of our platform.',
  },
  {
    icon: 'fa-cookie-bite',
    title: 'Cookies & Tracking Technologies',
    description:
      'CredSettle relies on first-party cookies and trusted analytics tools to maintain session continuity, remember your preferences, and measure campaign effectiveness. You retain full control:',
    bullets: [
      'Manage cookie permissions directly via your browser privacy settings.',
      'Request manual opt-out or cookie removal support by emailing info@credsettle.com.',
    ],
  },
  {
    icon: 'fa-people-arrows',
    title: 'Sharing of Personal Information',
    description:
      'We disclose personal information only when necessary with trusted affiliates, operational vendors, and legal authorities. Typical scenarios include:',
    bullets: [
      'Fraud detection, credit risk assessment, and platform security enforcement.',
      'Service delivery partners who assist with RBI-compliant negotiations or technology infrastructure.',
      'Corporate restructuring events such as mergers, acquisitions, or investment diligence—always under confidentiality obligations.',
    ],
  },
  {
    icon: 'fa-lock',
    title: 'Information Security',
    description:
      'We implement industry-standard safeguards (including SSL encryption, access controls, and regular audits) to protect your information. While no Internet transmission is 100% secure, we continually strengthen our defences.',
  },
  {
    icon: 'fa-comment-dots',
    title: 'Testimonials & Case Studies',
    description:
      'With your explicit consent, we may publish anonymised success stories or testimonials that highlight CredSettle outcomes. You can request edits or removal at any time by contacting our team.',
  },
  {
    icon: 'fa-envelope-open',
    title: 'Contacting CredSettle',
    description:
      'For privacy questions, data access requests, or escalation, reach us at:',
    footer: (
      <Link
        href="mailto:info@credsettle.com"
        className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity"
      >
        info@credsettle.com
      </Link>
    ),
  },
];

export const metadata: Metadata = {
  title: 'Privacy Policy | CredSettle Data Protection & Confidentiality',
  description:
    'Understand how CredSettle collects, safeguards, and utilises personal information for RBI-compliant debt settlement services. Review cookies, data sharing, security, and contact details.',
  alternates: {
    canonical: 'https://www.credsettle.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | CredSettle',
    description:
      'Learn how CredSettle safeguards your personal information, uses cookies, and shares data responsibly for RBI-compliant loan settlements.',
    url: 'https://www.credsettle.com/privacy-policy',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | CredSettle',
    description:
      'Our commitment to data protection, confidentiality, and responsible information handling for debt settlement services.',
  },
};

export default function PrivacyPolicyPage() {
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
    '@id': 'https://www.credsettle.com/privacy-policy',
    name: 'CredSettle Privacy Policy',
    url: 'https://www.credsettle.com/privacy-policy',
    description:
      'Review how CredSettle collects, protects, and shares personal and non-personal information while providing RBI-compliant debt settlement services.',
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
          name: 'Privacy Policy',
          item: 'https://www.credsettle.com/privacy-policy',
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

  return (
    <div className="relative min-h-screen bg-white">
      <Script id="privacy-schema" type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </Script>

      <div
        className="pointer-events-none absolute inset-x-0 top-[-140px] h-[540px]"
        style={{
          background:
            'radial-gradient(55% 55% at 50% 45%, rgba(0, 122, 255, 0.26) 0%, rgba(0, 122, 255, 0.1) 40%, rgba(0, 122, 255, 0) 70%)',
          filter: 'blur(44px)',
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <section className="pt-28 pb-12 md:pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div
              className="rounded-3xl border border-white/60 bg-gradient-to-br from-[#E8F5FF] via-white to-[#F9FCFF] p-8 md:p-12 shadow-xl"
              style={{
                boxShadow:
                  '0px 30px 64px 0px rgba(0, 74, 128, 0.08), inset 0px 1px 0px rgba(255, 255, 255, 0.60)',
              }}
            >
              <div className="flex flex-col gap-6 md:gap-8">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#007AFF]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#007AFF]">
                  <i className="fa-solid fa-user-lock text-[#007AFF]" aria-hidden="true" />
                  Privacy First
                </span>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[30px] leading-[40px] font-semibold text-[#0C2756] md:text-[40px] md:leading-[48px]">
                    Privacy Policy
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-[rgba(12,39,86,0.72)] md:text-lg md:leading-8">
                    At <strong>CredSettle.com</strong> (“CredSettle”, “we”, or “us”), protecting your personal and
                    financial information is integral to how we operate. This Privacy Policy explains what data we
                    collect, why we collect it, and the safeguards we apply while delivering RBI-compliant debt
                    settlement services through our website and mobile experiences.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 px-5 py-4 text-sm md:text-base md:leading-7 text-[rgba(12,39,86,0.75)] shadow-inner border border-[#B9DFFF]/60">
                  Last reviewed: {formattedDate}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="mx-auto flex max-w-5xl flex-col gap-8 px-4 sm:px-6 lg:px-8">
            {SECTIONS.map((section) => (
              <article
                key={section.title}
                className="rounded-3xl border border-[rgba(0,122,255,0.12)] bg-white/90 px-6 py-7 md:px-10 md:py-12 shadow-[0px_20px_45px_rgba(0,74,128,0.08)]"
              >
                <div className="flex flex-col gap-5 md:gap-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#007AFF]/12 text-[#007AFF]">
                      <i className={`fa-solid ${section.icon} text-xl`} aria-hidden="true" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3">
                      <h2 className="text-xl font-semibold text-[#0C2756] md:text-2xl">{section.title}</h2>
                      <p className="text-sm leading-6 text-[rgba(12,39,86,0.72)] md:text-base md:leading-7">
                        {section.description}
                      </p>
                    </div>
                  </div>

                  {section.bullets && (
                    <ul className="flex flex-col gap-3 md:gap-4">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 rounded-2xl bg-[#EFF7FF] px-4 py-4 text-sm leading-6 text-[rgba(12,39,86,0.78)] md:text-base md:leading-7"
                        >
                          <i className="fa-solid fa-check text-[#007AFF] pt-1" aria-hidden="true" />
                          {bullet.includes('info@credsettle.com') ? (
                            <span>
                              {bullet.replace('info@credsettle.com.', '')}
                              <Link
                                href="mailto:info@credsettle.com"
                                className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity"
                              >
                                info@credsettle.com
                              </Link>
                              .
                            </span>
                          ) : (
                            <span>{bullet}</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.footer && (
                    <div className="rounded-2xl border border-[#007AFF]/15 bg-[#F7FBFF] px-5 py-4 text-sm leading-6 text-[rgba(12,39,86,0.78)] md:text-base md:leading-7">
                      {section.footer}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pb-24">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-gradient-to-r from-[#1A7BFF] via-[#3C97FF] to-[#6FC2FF] px-8 py-10 md:px-12 md:py-14 shadow-[0_32px_54px_rgba(0,96,181,0.25)]">
              <div className="flex flex-col gap-6 text-white md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col gap-3 md:max-w-2xl">
                  <h3 className="text-2xl font-semibold md:text-[28px] md:leading-[36px]">
                    Want a deeper look at CredSettle’s compliance safeguards?
                  </h3>
                  <p className="text-sm leading-6 text-white/85 md:text-base md:leading-7">
                    Our compliance specialists can walk you through data handling protocols, confidentiality agreements,
                    and how we coordinate with creditors to protect your information.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-semibold text-[#0C2756] shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl md:px-8 md:py-3.5 md:text-base"
                >
                  Speak with Compliance
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}


