import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
const SECTIONS = [
    {
        icon: 'fa-user-gear',
        title: 'How We Use Your Information',
        description: 'We use the collected information strictly for the following purposes:',
        bullets: [
            'To create, verify, and manage your user account',
            'To authenticate users via Google Sign-In and other login methods',
            'To securely store and process data using Firebase services',
            'To send important notifications, alerts, and updates through Firebase Cloud Messaging (FCM)',
            'To respond to user queries, including assistance through our in-app “Contact Support” feature available in the Account section, as well as email-based support',
            'To provide customer support and resolve user issues related to account access, services, or app functionality',
            'To improve application performance, stability, and overall user experience',
            'To monitor, detect, and prevent fraudulent or unauthorized activity',
            'To comply with applicable legal, regulatory, and security obligations',
        ],
        footer: 'We only collect data necessary to provide core app features and keep your account secure.',
    },
    {
        icon: 'fa-gavel',
        title: 'Legal Basis for Processing',
        description: 'We process your personal data based on one or more of the following grounds:',
        bullets: [
            'Your consent when you use our application',
            'The necessity to provide requested services',
            'Compliance with applicable legal obligations',
            'Legitimate interests such as improving app performance and security',
        ],
    },
    {
        icon: 'fa-user-shield',
        title: 'Collection of Personally Identifiable Information',
        description: 'We collect limited personal data to start your case, build your settlement strategy, and send updates. This includes:',
        bullets: [
            'Name, email address, city, mailing address, and phone number to verify your identity and communicate securely.',
            'Financial details, including income, loan balances, credit card dues, and harassment reports. This helps us design a personalized settlement strategy.',
            'Company name, team size, and business type when you enquire on behalf of an organisation.',
            'Billing details required to process professional fees (We do not store complete payment card details.).',
        ],
        footer: 'You consent to receive essential service-related communications necessary for the use of the application.',
    },
    {
        icon: 'fa-chart-bar',
        title: 'Use of Non-Personal Identifiable Data',
        description: 'To improve your experience, we may collect anonymous technical data. This includes:',
        bullets: [
            'Device type, operating system, browser version, and language preference.',
            'Time zone, screen resolution, referring/exit pages, and on-site navigation patterns.',
        ],
        footer: 'We use this data to improve app speed, add useful features, and strengthen platform security.',
    },
    {
        icon: 'fa-child',
        title: 'Children’s Privacy',
        description: 'CredSettle does not knowingly collect personal data from anyone under 18. Our services are intended solely for adults.',
        bullets: [
            'If we discover that a minor has provided data without parental consent, we delete it immediately.',
            'Parents or guardians can email us at info@credsettle.com to request prompt deletion of a minor’s data.',
        ],
        footer: 'We encourage parents and guardians to supervise their children’s online activities to ensure a safe digital experience. CredSettle is committed to complying with applicable data protection and children’s privacy laws.',
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
        description: 'We work with trusted third-party providers to support core features and app performance. These services process limited data under their privacy policies:',
        bullets: [
            'Google Firebase – used for backend services including authentication, database storage, analytics, and crash reporting.',
            'Firebase Cloud Messaging (FCM) – used to send push notifications and important service updates to users.',
            'Google Sign-In Authentication – used to allow users to securely sign in using their Google account.',
        ],
        footer: 'These providers process device identifiers and auth tokens solely to keep the service running smoothly. We never sell your data.',
    },
    {
        icon: 'fa-cloud',
        title: 'Data Processing & Storage',
        description: 'Your information may be processed and stored securely using trusted cloud infrastructure services such as Firebase, which is a Google platform.',
        bullets: [
            'Data may be processed in secure servers located in different regions depending on service availability, performance optimization, and reliability requirements.',
            'We ensure that all third-party service providers follow strict data protection, security, and compliance standards.',
        ],
        footer: (<div className="flex flex-col gap-3">
        <p>For more information on how Google/Firebase handles data, please refer to their official privacy paperwork:</p>
        <ul className="flex flex-col gap-2">
          <li className="flex flex-wrap gap-1 items-center">
            <span className="font-medium text-[#0C2756]">Google Privacy Policy:</span>
            <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity break-all">
              https://policies.google.com/privacy
            </Link>
          </li>
          <li className="flex flex-wrap gap-1 items-center">
            <span className="font-medium text-[#0C2756]">Firebase Privacy and Security:</span>
            <Link href="https://firebase.google.com/support/privacy" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity break-all">
              https://firebase.google.com/support/privacy
            </Link>
          </li>
          <li className="flex flex-wrap gap-1 items-center">
            <span className="font-medium text-[#0C2756]">Google Cloud Data Processing Terms:</span>
            <Link href="https://cloud.google.com/terms/data-processing-terms" target="_blank" rel="noopener noreferrer" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity break-all">
              https://cloud.google.com/terms/data-processing-terms
            </Link>
          </li>
        </ul>
      </div>),
    },
    {
        icon: 'fa-ban',
        title: 'No Advertising Policy',
        description: 'CredSettle does not display any third-party advertisements within the mobile application.',
        bullets: [
            'We do not use advertising networks, ad tracking tools, or personalized advertising services in the app. The experience is designed to remain clean, simple, and free from promotional content.',
        ],
        footer: 'We do not share user data with advertisers or marketing networks. If this policy is updated in the future, users will be informed through an updated version of this Privacy Policy.',
    },
    {
        icon: 'fa-scale-balanced',
        title: 'User Rights',
        description: 'Under India’s DPDP Act 2023 and applicable privacy laws, you have specific rights regarding your data:',
        bullets: [
            'Access Your Information: You may request access to the personal data we store about you.',
            'Update or Correct Data: You can request corrections to any inaccurate or incomplete information.',
            'Withdraw Consent: You may withdraw your consent for communications or data usage where applicable.',
            'Request Deletion: You can delete your account inside the app settings or by contacting our support team.',
            'Right to Nominate: You may nominate a representative to exercise data rights in case of death or incapacity.'
        ],
        footer: 'To exercise these rights, email us at info@credsettle.com. We respond to all legitimate requests promptly.',
    },
    {
        icon: 'fa-file-signature',
        title: 'User Consent & Acceptance',
        description: "By accessing or using CredSettle, you acknowledge that you have read, understood. Agree to be bound by our Terms & Conditions and Privacy Policy.",
        bullets: [
            'By continuing to use the application, you also consent to the collection and use of information as described in the Privacy Policy.',
            'If you do not agree with these terms, you should discontinue using the application.',
        ],
    },
    {
        icon: 'fa-people-arrows',
        title: 'Sharing of Personal Information',
        description: 'We only share personal data when necessary to deliver services or comply with law. This includes:',
        bullets: [
            'Fraud detection, credit risk assessment, and platform security enforcement.',
            'Service delivery partners who assist with debt settlement support services in India or technology infrastructure.',
            'Corporate restructuring events such as mergers, acquisitions, or investment diligence-always under confidentiality obligations.',
        ],
    },
    {
        icon: 'fa-lock',
        title: 'Information Security',
        description: 'We use SSL encryption, strict access controls, and regular security audits to keep your data safe.',
        bullets: [
            'In the unlikely event of a personal data breach, we will notify the Data Protection Board of India and affected users as mandated by the DPDP Act, 2023.'
        ]
    },
    {
        icon: 'fa-envelope-open-text',
        title: 'Grievance Redressal',
        description: 'If you have concerns about your personal data under the DPDP Act 2023, please contact our Grievance Officer:',
        bullets: [
            'Grievance Officer: Legal & Compliance Team',
            'Email: info@credsettle.com',
        ],
        footer: 'We will acknowledge and resolve your grievance within the timeframe mandated by law.',
    },
    {
        icon: 'fa-bullhorn',
        title: 'Privacy Policy Updates',
        description: "We may update this Privacy Policy from time to time to reflect changes in our services, legal requirements. Data handling practices.",
        bullets: [
            'When we make significant changes, we will notify users through appropriate channels, which may include in-app notifications, updates within the application, or other direct communication methods where applicable.',
            'The latest version of the Privacy Policy will always be available through the link provided within the application.',
            'We encourage users to review this Privacy Policy periodically to stay informed about how we protect and use their information.',
        ],
    },
];
export const metadata: Metadata = {
    title: 'Privacy Policy | CredSettle Data Protection &',
    description: 'Understand how CredSettle collects, safeguards, and utilises personal information for debt settlement support services in India.',
    alternates: {
        canonical: 'https://www.credsettle.com/privacy-policy',
    },
    openGraph: {
        title: 'Privacy Policy | CredSettle',
        description: "Learn how CredSettle safeguards your personal information, uses cookies. Shares data responsibly for debt settlement support services in India.",
        url: 'https://www.credsettle.com/privacy-policy',
        type: 'article',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Privacy Policy | CredSettle',
        description: 'Our commitment to data protection, confidentiality, and responsible information handling for debt settlement services.',
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
        description: "Review how CredSettle collects, protects. Shares personal and non-personal information while providing debt settlement support services in India.",
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
    return (<div className="relative min-h-screen bg-white">
      <Script id="privacy-schema" type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </Script>

      <div className="pointer-events-none absolute inset-x-0 top-[-140px] h-[540px]" style={{
            background: 'radial-gradient(55% 55% at 50% 45%, rgba(0, 122, 255, 0.26) 0%, rgba(0, 122, 255, 0.1) 40%, rgba(0, 122, 255, 0) 70%)',
            filter: 'blur(44px)',
        }}/>

      <Navbar />

      <main className="relative z-10">
        <section className="pt-28 pb-12 md:pb-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl border border-white/60 bg-gradient-to-br from-[#E8F5FF] via-white to-[#F9FCFF] p-8 md:p-12 shadow-xl" style={{
            boxShadow: '0px 30px 64px 0px rgba(0, 74, 128, 0.08), inset 0px 1px 0px rgba(255, 255, 255, 0.60)',
        }}>
              <div className="flex flex-col gap-6 md:gap-8">
                <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#007AFF]/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-[#007AFF]">
                  <i className="fa-solid fa-user-lock text-[#007AFF]" aria-hidden="true"/>
                  Privacy First
                </span>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[30px] leading-[40px] font-semibold text-[#0C2756] md:text-[40px] md:leading-[48px]">
                    Privacy Policy
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-[rgba(12,39,86,0.72)] md:text-lg md:leading-8">
                    At <strong>CredSettle</strong> ("CredSettle", "we", or "us"), protecting your personal and
                    financial information is integral to how we operate. This Privacy Policy explains what data we
                    collect, why we collect it. The safeguards we apply while delivering debt settlement
                    support services in India through our website and mobile experiences.
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
                          {bullet.includes('info@credsettle.com') ? (<span>
                              {bullet.split('info@credsettle.com').map((part, index, array) => (<span key={index}>
                                  {part}
                                  {index < array.length - 1 && (<Link href="mailto:info@credsettle.com" className="text-[#007AFF] underline underline-offset-4 hover:opacity-80 transition-opacity">
                                      info@credsettle.com
                                    </Link>)}
                                </span>))}
                            </span>) : (<span>{bullet}</span>)}
                        </li>))}
                    </ul>)}

                  {section.footer && (<div className="rounded-2xl border border-[#007AFF]/15 bg-[#F7FBFF] px-5 py-4 text-sm leading-6 text-[rgba(12,39,86,0.78)] md:text-base md:leading-7">
                      {section.footer}
                    </div>)}
                </div>
              </article>))}
          </div>
        </section>

     
      </main>

    </div>);
}
