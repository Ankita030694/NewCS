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
      'By providing your mobile number or email address, you consent to receive essential service communications from CredSettle-even if your number is registered on the DND list.',
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
    icon: 'fa-child',
    title: 'Children’s Privacy',
    description:
      'CredSettle does not knowingly collect or solicit personal information from individuals under the age of 18. Our services and mobile applications are intended solely for use by adults.',
    bullets: [
      'If we become aware that we have collected personal data from a user under the age of 18 without verified parental consent, we will take immediate steps to delete such information from our systems.',
      'If you are a parent or guardian and believe that your child has provided personal information to CredSettle, please contact us at info@credsettle.com, and we will take appropriate action to remove such data promptly.',
    ],
    footer:
      'We encourage parents and guardians to supervise their children’s online activities to ensure a safe digital experience. CredSettle is committed to complying with applicable data protection and children’s privacy laws.',
  },
  {
    icon: 'fa-database',
    title: 'Data Retention Policy',
    description: 'Data Retention: We retain personal information only for as long as necessary to:',
    bullets: [
      'Provide our services',
      'Fulfill legal and regulatory obligations',
      'Resolve disputes and enforce agreements',
    ],
    footer: 'After this period, data is securely deleted or anonymized.',
  },
  {
    icon: 'fa-server',
    title: 'Third-Party Services Disclosure',
    description:
      'CredSettle uses trusted third-party services to provide core application functionality, improve performance, and enhance user experience. These services may process limited user data on our behalf under their respective privacy policies. We currently use the following third-party services:',
    bullets: [
      'Google Firebase – used for backend services including authentication, database storage, analytics, and crash reporting.',
      'Firebase Cloud Messaging (FCM) – used to send push notifications and important service updates to users.',
      'Google Sign-In Authentication – used to allow users to securely sign in using their Google account.',
    ],
    footer:
      'These third-party providers may collect and process certain information such as device identifiers, authentication tokens, and usage data strictly for service functionality. We do not sell or misuse this data. Each third-party service operates under its own privacy policy, and we encourage users to review them for more details. CredSettle ensures that all third-party integrations are used only to support app functionality and maintain service reliability and security.',
  },
  {
    icon: 'fa-ban',
    title: 'No Advertising Policy',
    description:
      'CredSettle does not display any third-party advertisements within the mobile application.',
    bullets: [
      'We do not use advertising networks, ad tracking tools, or personalized advertising services in the app. The experience is designed to remain clean, simple, and free from promotional content.',
    ],
    footer:
      'We do not share user data with advertisers or marketing networks. If this policy is updated in the future, users will be informed through an updated version of this Privacy Policy.',
  },
  {
    icon: 'fa-scale-balanced',
    title: 'User Rights',
    description:
      'As a user of CredSettle, you have certain rights regarding your personal information in accordance with applicable data protection laws, including relevant privacy regulations such as GDPR, CCPA, and India’s Digital Personal Data Protection Act, 2023. You are entitled to:',
    bullets: [
      'Access Your Information: You may request access to the personal data we store about you.',
      'Update or Correct Data: You can request corrections to any inaccurate or incomplete information.',
      'Request Deletion: You may request deletion of your personal data, subject to legal or regulatory retention requirements.',
      'Withdraw Consent: You may withdraw your consent for communications or data usage where applicable.',
    ],
    footer:
      'To exercise any of these rights or for any privacy-related concerns, you can contact us at info@credsettle.com. We will review and respond to all legitimate requests within a reasonable timeframe as required by applicable laws.',
  },
  {
    icon: 'fa-file-signature',
    title: 'User Consent & Acceptance',
    description:
      'By accessing or using CredSettle, you acknowledge that you have read, understood, and agree to be bound by our Terms & Conditions and Privacy Policy.',
    bullets: [
      'By continuing to use the application, you also consent to the collection and use of information as described in the Privacy Policy.',
      'If you do not agree with these terms, you should discontinue using the application.',
    ],
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
      'Corporate restructuring events such as mergers, acquisitions, or investment diligence-always under confidentiality obligations.',
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
                    At <strong>CredSettle.com</strong> ("CredSettle", "we", or "us"), protecting your personal and
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
                              {bullet.split('info@credsettle.com').map((part, index, array) => (
                                <span key={index}>
                                  {part}
                                  {index < array.length - 1 && (
                                    <Link
                                      href="mailto:info@credsettle.com"
                                      className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity"
                                    >
                                      info@credsettle.com
                                    </Link>
                                  )}
                                </span>
                              ))}
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


