'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faPhoneVolume, faShieldHalved, faFileContract, faUserTie, faEnvelope } from '@fortawesome/free-solid-svg-icons';
export default function SuccessPage() {
    const [markedPaid, setMarkedPaid] = useState(false);
    useEffect(() => {
        const markLeadAsPaid = async () => {
            const phone = localStorage.getItem('credsettle:user_phone');
            if (phone && !markedPaid) {
                try {
                    const response = await fetch('/api/mark-paid', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({ phone }),
                    });
                    if (response.ok) {
                        console.log('Lead successfully marked as paid.');
                        setMarkedPaid(true);
                    }
                    else {
                        console.error('Failed to mark lead as paid.');
                    }
                }
                catch (error) {
                    console.error('Error marking lead as paid:', error);
                }
            }
        };
        markLeadAsPaid();
    }, [markedPaid]);
    return (<div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-12 md:py-20">
        <section className="container mx-auto px-4 max-w-4xl">
          <div className="rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(12,39,86,0.06)] border border-[#E2E8F0]">
            {/* Header / Success Indicator */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8EE] text-[#16A34A]">
                <FontAwesomeIcon icon={faCircleCheck} className="h-8 w-8"/>
              </div>
              <span className="inline-block rounded-full bg-[#E8F8EE] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#16A34A]">
                Payment Successfully Received.
              </span>
              <h1 className="mt-3 text-2xl font-bold text-[#0C2756] sm:text-3xl md:text-4xl">
                Thank You for Choosing CredSettle
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[#0C2756]/70">
                Your payment has been processed safely. Our legal debt resolution team has prioritized your case for quick action.
              </p>
            </div>

            {/* Next Steps Grid */}
            <div className="mt-10">
              <h2 className="text-center text-lg font-bold text-[#0C2756] mb-6">
                What Happens Next?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faUserTie} className="h-4 w-4"/>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">1. Dedicated Advocate Assignment</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        A senior advocate will review your loan dues, bank legal notices, and negotiation plan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faPhoneVolume} className="h-4 w-4"/>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">2. Onboarding & Strategy Call</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Our team will call your registered number soon to discuss target waiver amounts and payment terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4"/>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">3. Harassment Shield Protocol</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        We provide instant legal representation to stop unauthorized recovery agent visits and calls in compliance with RBI guidelines.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faFileContract} className="h-4 w-4"/>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">4. Official OTS Sanction</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        We negotiate directly with bank nodal officers to obtain formal settlement sanction letters and permanent No Dues Certificates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hotline Banner */}
            <div className="mt-8 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] p-5 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">Priority Helpdesk.</p>
                <p className="text-sm font-bold text-[#1E3A8A] mt-0.5">Need immediate assistance with your case?</p>
                <p className="text-xs text-[#3B82F6] mt-0.5">Available Monday to Saturday, 9:30 AM – 6:30 PM IST.</p>
              </div>
              <div className="mt-4 sm:mt-0 flex flex-wrap gap-2 justify-center sm:justify-end">
                <a href="tel:8800226635" className="inline-flex items-center gap-2 rounded-xl bg-[#007AFF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0056CC]">
                  <FontAwesomeIcon icon={faPhoneVolume} className="h-3.5 w-3.5"/>
                  Call: 8800226635.
                </a>
                <a href="mailto:support@credsettle.com" className="inline-flex items-center gap-2 rounded-xl border border-[#007AFF] bg-white px-4 py-2 text-xs font-semibold text-[#007AFF] transition-colors hover:bg-[#EFF7FF]">
                  <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5"/>
                  Email Support
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link href="/" className="rounded-full bg-[#0C2756] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0C2756]/90">
                Return to Homepage
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>);
}
