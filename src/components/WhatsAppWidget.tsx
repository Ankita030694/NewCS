'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WHATSAPP_NUMBER = '8800226635';
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent('I want to settle my loans')}`;

export default function WhatsAppWidget() {
  const pathname = usePathname();
  const [isPrinting, setIsPrinting] = useState<boolean>(false);

  useEffect(() => {
    const handleBeforePrint = () => setIsPrinting(true);
    const handleAfterPrint = () => setIsPrinting(false);

    window.addEventListener('beforeprint', handleBeforePrint);
    window.addEventListener('afterprint', handleAfterPrint);
    return () => {
      window.removeEventListener('beforeprint', handleBeforePrint);
      window.removeEventListener('afterprint', handleAfterPrint);
    };
  }, []);

  // Hide WhatsApp widget during browser printing / PDF generation
  if (isPrinting) {
    return null;
  }

  // Hide WhatsApp widget on specified routes
  const hiddenRoutes = [
    '/privacy-policy',
    '/can-bank-seize-epf-provident-fund-for-loan-recovery',
    '/can-bank-file-section-420-cheating-case-for-loan-default',
    '/overdraft-cash-credit-od-cc-default-settlement-rules'
  ];

  if (pathname && hiddenRoutes.some((route) => pathname === route || pathname.startsWith(`${route}/`))) {
    return null;
  }

  return (
    <div
      id="whatsapp-widget-container"
      className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6 print:!hidden print:hidden"
    >
      <div className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#0C2756] shadow-[0_12px_25px_rgba(0,0,0,0.12)] backdrop-blur-md print:!hidden print:hidden">
        Chat with us on WhatsApp
      </div>
      <a
        href={WHATSAPP_URL}
        aria-label="Chat with CredSettle on WhatsApp"
        target="_blank"
        rel="nofollow noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-[#0C9A5A] text-white shadow-[0_18px_36px_rgba(12,154,90,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(12,154,90,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0C9A5A] print:!hidden print:hidden print:shadow-none"
        style={{ width: '62px', height: '62px' }}
      >
        <span className="sr-only">Chat with CredSettle on WhatsApp</span>
        <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7 print:!hidden" />
      </a>
    </div>
  );
}




