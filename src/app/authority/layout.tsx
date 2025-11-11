import type { ReactNode } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightFromBracket, faNewspaper, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import LogoutButton from '@/components/LogoutButton';

const NAV_ITEMS = [
  {
    label: 'Leads',
    href: '/authority/leads',
    icon: faUserGroup,
    description: 'Review and manage incoming enquiries'
  },
  {
    label: 'Blogs',
    href: '/authority/blogs',
    icon: faNewspaper,
    description: 'Draft and publish new authority articles'
  }
];

type AuthorityLayoutProps = {
  children: ReactNode;
};

export default function AuthorityLayout({ children }: AuthorityLayoutProps) {
  return (
    <div className="flex min-h-screen bg-blue text-[#0C2756]">
      <aside className="hidden w-72 flex-col justify-between bg-black px-6 py-8 text-white shadow-2xl lg:flex">
        <div className="space-y-10">
          <Link href="/" className="flex items-center gap-3 text-white transition hover:opacity-90">
           
            <div>
                <img src="/credsettle-logo-black.svg" alt="CredSettle Logo" className="h-8 brightness-0 invert text-center" />
            </div>
          </Link>

          <nav className="space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-4 transition hover:border-white/30 hover:bg-white/10"
              >
                <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white/90 group-hover:bg-white/20">
                  <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-semibold tracking-wide">{item.label}</p>
                  <p className="text-xs text-white/70">{item.description}</p>
                </div>
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <LogoutButton />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80">
            <p className="mb-3 font-semibold">Need the public site?</p>
            <p className="mb-4 text-white/60">
              Head back to credsettle.com to review landing content, product explainers, and marketing assets.
            </p>
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/30"
            >
              Open main site
              <FontAwesomeIcon icon={faArrowRightFromBracket} className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="flex items-center justify-between border-b border-[#0F8A5F]/10 bg-white/80 px-4 py-4 backdrop-blur sm:px-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0F8A5F]">Internal dashboard</p>
            <h2 className="text-lg font-semibold text-[#0C2756]">CredSettle Authority</h2>
          </div>
          
        </header>

        <main className="flex-1 overflow-y-auto px-4 py-8 sm:px-8">
          <div className="w-full space-y-8">{children}</div>
        </main>
      </div>
    </div>
  );
}
