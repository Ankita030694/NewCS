import type { Metadata } from 'next';
import Script from 'next/script';
import Link from 'next/link';
import Navbar from '@/components/Navbar';

const SECTIONS = [
  {
    icon: 'fa-mobile-screen-button',
    title: 'Option 1: In-App Deletion',
    bullets: [
      'Open the CredSettle app',
      'Tap on the profile icon (top-left corner)',
      'Go to the Account section',
      'Scroll down and tap on "Delete Account"',
      'Confirm your request',
    ],
  },
  {
    icon: 'fa-envelope',
    title: 'Option 2: Request via Email',
    description: 'You can also request account deletion by contacting us at:',
    bullets: [
      'Email: info@credsettle.com',
      'Please include your registered email address.',
    ],
  },
  {
    icon: 'fa-trash-can',
    title: 'Data Deletion Details',
    bullets: [
      'Your personal information (name, email, phone) will be deleted',
      'Your account will be permanently removed',
      'Some data may be retained if required for legal or regulatory compliance',
    ],
  },
  {
    icon: 'fa-clock',
    title: 'Processing Time',
    description: 'Deletion requests are processed within a reasonable timeframe after verification.',
  },
];

export const metadata: Metadata = {
  title: 'Delete Your CredSettle Account | Data Privacy & Control',
  description:
    'Learn how to permanently delete your CredSettle account and associated personal data through our mobile app or via email request.',
  alternates: {
    canonical: 'https://www.credsettle.com/delete-your-app-account',
  },
  openGraph: {
    title: 'Delete Your CredSettle Account | CredSettle',
    description:
      'Instructions for account deletion and data removal. Manage your personal information and privacy with CredSettle.',
    url: 'https://www.credsettle.com/delete-your-app-account',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Delete Your CredSettle Account | CredSettle',
    description:
      'Permanently remove your account and data. Follow our simple steps for account deletion.',
  },
};

export default function DeleteAccountPage() {
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
    '@id': 'https://www.credsettle.com/delete-your-app-account',
    name: 'Delete Your CredSettle Account',
    url: 'https://www.credsettle.com/delete-your-app-account',
    description:
      'Instructions and details for deleting your CredSettle account and associated personal data.',
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
          name: 'Delete Account',
          item: 'https://www.credsettle.com/delete-your-app-account',
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
    datePublished: '2024-04-14',
    dateModified: isoDate,
  };

  return (
    <div className="relative min-h-screen bg-white">
      <Script id="delete-account-schema" type="application/ld+json">
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
                  <i className="fa-solid fa-user-xmark text-[#007AFF]" aria-hidden="true" />
                  Account Management
                </span>
                <div className="flex flex-col gap-4">
                  <h1 className="text-[30px] leading-[40px] font-semibold text-[#0C2756] md:text-[40px] md:leading-[48px]">
                    Delete Your CredSettle Account
                  </h1>
                  <p className="max-w-3xl text-base leading-7 text-[rgba(12,39,86,0.72)] md:text-lg md:leading-8">
                    If you wish to delete your account and associated personal data, you can do so using the following methods. Please note that account deletion is permanent and cannot be undone.
                  </p>
                </div>
                <div className="rounded-2xl bg-white/70 px-5 py-4 text-sm md:text-base md:leading-7 text-[rgba(12,39,86,0.75)] shadow-inner border border-[#B9DFFF]/60">
                  Last updated: {formattedDate}
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
                      {section.description && (
                         <p className="text-sm leading-6 text-[rgba(12,39,86,0.72)] md:text-base md:leading-7">
                          {section.description}
                        </p>
                      )}
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
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
