'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck,
  faPhoneVolume,
  faShieldHalved,
  faFileContract,
  faUserTie,
  faEnvelope,
  faFileLines,
  faFolderOpen,
  faScaleBalanced,
  faCircleQuestion,
} from '@fortawesome/free-solid-svg-icons';

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
          } else {
            console.error('Failed to mark lead as paid.');
          }
        } catch (error) {
          console.error('Error marking lead as paid:', error);
        }
      }
    };
    markLeadAsPaid();
  }, [markedPaid]);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <Navbar />

      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-4xl space-y-10">
          {/* Main Card */}
          <section className="rounded-3xl bg-white p-6 sm:p-10 md:p-12 shadow-[0_20px_50px_rgba(12,39,86,0.06)] border border-[#E2E8F0]">
            {/* Header / Success Indicator */}
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F8EE] text-[#16A34A]">
                <FontAwesomeIcon icon={faCircleCheck} className="h-8 w-8" />
              </div>
              <span className="inline-block rounded-full bg-[#E8F8EE] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-[#16A34A]">
                Payment Successfully Received
              </span>
              <h1 className="mt-3 text-2xl font-bold text-[#0C2756] sm:text-3xl md:text-4xl">
                Thank You for Choosing CredSettle
              </h1>
              <p className="mx-auto mt-3 max-w-2xl text-sm sm:text-base text-[#0C2756]/70 leading-relaxed">
                Your retainer payment has been processed securely. Our legal debt resolution team has prioritized your account, and our senior advocates are preparing your legal file.
              </p>
            </div>

            {/* Next Steps Section */}
            <div className="mt-10">
              <h2 className="text-center text-lg sm:text-xl font-bold text-[#0C2756] mb-6">
                What Happens Next in Your Legal Loan Settlement Process
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faUserTie} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">1. Dedicated Advocate Assignment</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        A senior advocate reviews your outstanding bank balances, default duration, and recent legal notices to prepare your negotiation defense.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faPhoneVolume} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">2. Onboarding &amp; Strategy Call</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Our legal advisory desk connects with you to evaluate your financial hardship, determine target waiver ratios, and finalize settlement terms.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">3. Harassment Shield Protocol</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        We issue formal notices of legal representation to bank nodal officers, demanding immediate cessation of unlawful collection agency harassment.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5">
                  <div className="flex items-start gap-3.5">
                    <div className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-[#007AFF]/10 text-[#007AFF]">
                      <FontAwesomeIcon icon={faFileContract} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">4. Official OTS Sanction</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Our advocates negotiate with bank credit committees to secure formal written OTS sanction letters and valid No Dues Certificates.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checklist Section */}
            <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
              <h2 className="text-center text-lg sm:text-xl font-bold text-[#0C2756] mb-6">
                Important Documentation to Keep Ready for Your Advocate
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#E8F8EE] text-[#16A34A]">
                      <FontAwesomeIcon icon={faFileLines} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">Loan Account Statements</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Gather your latest bank or credit card statements detailing principal balances, penal interests, and cumulative late charges.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#EFF6FF] text-[#007AFF]">
                      <FontAwesomeIcon icon={faScaleBalanced} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">Statutory Legal Notices</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Have copies of any demand notices, Section 138 notices, arbitration letters, or court summons served by lenders ready for review.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#FEF3C7] text-[#D97706]">
                      <FontAwesomeIcon icon={faFolderOpen} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">Hardship Verification Proof</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Compile salary reduction slips, medical expense bills, or business balance sheets that substantiate legitimate financial distress.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5 shadow-xs">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#FEE2E2] text-[#DC2626]">
                      <FontAwesomeIcon icon={faShieldHalved} className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">Recovery Agency Records</h3>
                      <p className="mt-1 text-xs text-[#0C2756]/70 leading-relaxed">
                        Note phone numbers, agent names, and timestamps of aggressive calls or unscheduled home visits to support legal injunction notices.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Anti-Harassment Guidelines */}
            <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
              <h2 className="text-center text-lg sm:text-xl font-bold text-[#0C2756] mb-4">
                Anti-Harassment Protection &amp; Legal Advisory Guidelines
              </h2>
              <div className="rounded-2xl bg-[#F1F5F9] border border-[#CBD5E1] p-5 sm:p-6 space-y-3 text-xs sm:text-sm text-[#0C2756]/80 leading-relaxed">
                <p>
                  <strong>1. Inform Collection Callers Promptly:</strong> State clearly that you have engaged legal counsel at CredSettle to manage your debt resolution. Direct them to communicate through our formal legal desk.
                </p>
                <p>
                  <strong>2. Avoid Unofficial Cash Settlements:</strong> Never pay cash or transfer funds directly to field recovery agents. Only payments made against an official written OTS letter issued by the lending bank are legally binding.
                </p>
                <p>
                  <strong>3. Preserve All Evidence:</strong> Retain call recordings, WhatsApp chat screenshots, and physical notices. Our legal team uses these records to file complaints under the RBI Fair Practices Code whenever harassment occurs.
                </p>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="mt-10 pt-8 border-t border-[#E2E8F0]">
              <h2 className="text-center text-lg sm:text-xl font-bold text-[#0C2756] mb-6">
                Frequently Asked Questions About Case Processing
              </h2>
              <div className="space-y-4">
                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleQuestion} className="h-5 w-5 text-[#007AFF] mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">When will my designated legal advocate contact me?</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#0C2756]/70 leading-relaxed">
                        Your assigned legal advocate initiates contact within 2 to 4 business hours. During this initial call, we verify your creditor accounts and prepare formal representation documents.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleQuestion} className="h-5 w-5 text-[#007AFF] mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">Will I receive an official payment invoice for this transaction?</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#0C2756]/70 leading-relaxed">
                        Yes. A digital GST invoice and official payment receipt have been generated and dispatched to your registered email address for accounting and verification purposes.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#E2E8F0] bg-[#FFFFFF] p-5">
                  <div className="flex items-start gap-3">
                    <FontAwesomeIcon icon={faCircleQuestion} className="h-5 w-5 text-[#007AFF] mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold text-[#0C2756]">What is the estimated timeline to achieve a formal OTS settlement?</h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#0C2756]/70 leading-relaxed">
                        The majority of bank and NBFC settlements take between 45 to 90 days. The exact timeframe depends on your default duration and internal credit committee approval schedules.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Hotline Banner */}
            <div className="mt-8 rounded-2xl bg-[#EFF6FF] border border-[#BFDBFE] p-5 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[#1E40AF]">Priority Helpdesk</p>
                <p className="text-sm font-bold text-[#1E3A8A] mt-0.5">Need immediate assistance with your case?</p>
                <p className="text-xs text-[#3B82F6] mt-0.5">Available Monday to Saturday, 9:30 AM to 6:30 PM IST.</p>
              </div>
              <div className="mt-4 sm:mt-0 flex flex-wrap gap-2 justify-center sm:justify-end">
                <a
                  href="tel:8800226635"
                  className="inline-flex items-center gap-2 rounded-xl bg-[#007AFF] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#0056CC]"
                >
                  <FontAwesomeIcon icon={faPhoneVolume} className="h-3.5 w-3.5" />
                  Call: 8800226635
                </a>
                <a
                  href="mailto:support@credsettle.com"
                  className="inline-flex items-center gap-2 rounded-xl border border-[#007AFF] bg-white px-4 py-2 text-xs font-semibold text-[#007AFF] transition-colors hover:bg-[#EFF7FF]"
                >
                  <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
                  Email Support Team
                </a>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/"
                className="rounded-full bg-[#0C2756] px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-[#0C2756]/90"
              >
                Return to Homepage
              </Link>
              <Link
                href="/services"
                className="rounded-full border border-[#0C2756] px-8 py-3 text-sm font-medium text-[#0C2756] transition-colors hover:bg-[#0C2756]/5"
              >
                Explore Debt Settlement Services
              </Link>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
