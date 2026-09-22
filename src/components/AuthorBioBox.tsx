import React from "react";
import Image from "next/image";
import Link from "next/link";

interface AuthorBioBoxProps {
  className?: string;
}

export default function AuthorBioBox({ className = "" }: AuthorBioBoxProps) {
  return (
    <aside
      className={`bg-[#f9f5e8] p-6 md:p-8 rounded-2xl md:rounded-3xl border border-amber-200 mt-12 mb-8 flex flex-col md:flex-row gap-6 items-center text-left not-prose shadow-sm ${className}`}
      aria-label="Author Information"
    >
      <div className="relative w-28 h-28 md:w-36 md:h-36 flex-shrink-0 bg-gray-200 rounded-full overflow-hidden border-2 border-[#D2A02A] shadow-md">
        <Image
          src="/ashishjhangra.png"
          alt="Ashish Jhangra - Legal & Debt Resolution Professional"
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 112px, 144px"
        />
      </div>
      <div className="space-y-3 flex-1 text-left">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Reviewed &amp; Authored by Ashish Jhangra
          </h3>
          <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">
            Verified Legal &amp; Debt Resolution Expert
          </span>
        </div>
        <p className="text-xs md:text-sm font-semibold text-gray-700">
          Legal &amp; Debt Resolution Professional | CredSettle
        </p>
        <p className="text-gray-700 text-xs md:text-sm leading-relaxed">
          Ashish Jhangra is an experienced legal and debt resolution professional specializing in RBI compromise settlement frameworks, banking dispute resolution, and borrower protection. He advises clients navigating complex NPA negotiations, recovery harassment defense, and statutory dispute mechanisms under Indian financial regulations.
        </p>
        <div className="flex flex-wrap gap-4 pt-1 text-xs font-bold">
          <a
            href="https://www.linkedin.com/in/ashish-jhangra-ab1a54127/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#D2A02A] hover:text-[#b88a22] flex items-center gap-1 transition-colors"
          >
            LinkedIn Profile →
          </a>
          <Link
            href="/author/ashish-jhangra"
            className="text-gray-800 hover:text-black flex items-center gap-1 transition-colors"
          >
            Author Profile &amp; Credentials →
          </Link>
        </div>
      </div>
    </aside>
  );
}
