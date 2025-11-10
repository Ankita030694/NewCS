import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeftLong, faHouse } from '@fortawesome/free-solid-svg-icons';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#E5F2FF] via-white to-white flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-6 py-20 text-center md:py-28 lg:py-32">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#0C2756]/10 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#0C2756]">
            404 · Not Found
          </span>

          <h1 className="mt-8 text-[34px] font-semibold leading-tight text-[#0C2756] md:text-[42px] md:leading-[52px]">
            We can’t find the page you’re looking for
          </h1>

          <p className="mt-6 text-base leading-7 text-[rgba(12,39,86,0.75)] md:text-lg md:leading-8">
            The link may be incorrect or the page might have moved. Let’s get you back to the right place so you can
            continue rebuilding your financial freedom with CredSettle.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#007AFF] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_rgba(0,122,255,0.25)] transition-transform hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(0,122,255,0.3)]"
            >
              <FontAwesomeIcon icon={faHouse} className="h-4 w-4" aria-hidden="true" />
              Go to Homepage
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-[#007AFF] px-6 py-3 text-sm font-semibold text-[#007AFF] transition-transform hover:-translate-y-0.5 hover:border-[#005FCC] hover:text-[#005FCC]"
            >
              <FontAwesomeIcon icon={faArrowLeftLong} className="h-4 w-4" aria-hidden="true" />
              Contact Support
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

