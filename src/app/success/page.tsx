import Link from 'next/link';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F5FAF5]">
      <Navbar />

      <main className="flex-1">
        <section className="container mx-auto flex w-full max-w-4xl flex-1 flex-col items-center px-4 py-20 text-center md:py-28 lg:py-32">
          <div className="w-full rounded-3xl bg-white px-6 py-12 shadow-[0_20px_60px_rgba(0,122,255,0.08)] md:px-10 md:py-16">
            <span className="mb-4 inline-flex rounded-full bg-[#DFF2E1] px-4 py-1 text-sm font-medium text-[#0C2756]">
              Payment Received
            </span>
            <h1 className="text-3xl font-semibold text-[#0C2756] md:text-4xl">
              Thank you for your payment
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base text-[#0C2756]/70 md:text-lg">
              We’ve successfully processed your payment. If you need any assistance, our team is here to help.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="rounded-full bg-[#007AFF] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0056CC]"
              >
                Back to home
              </Link>
              <Link
                href="tel:8800226635"
                className="rounded-full border border-[#007AFF] px-6 py-3 text-sm font-medium text-[#007AFF] transition-colors hover:bg-[#EFF7FF]"
              >
                Contact support
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

