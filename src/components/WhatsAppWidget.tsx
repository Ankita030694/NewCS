'use client';

import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const WHATSAPP_NUMBER = '8800226635';
const WHATSAPP_URL = `https://wa.me/91${WHATSAPP_NUMBER}`;

export default function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      <div className="rounded-full bg-white/90 px-4 py-2 text-xs font-medium text-[#0C2756] shadow-[0_12px_25px_rgba(0,0,0,0.12)] backdrop-blur-md">
        Chat with us on WhatsApp
      </div>
      <Link
        href={WHATSAPP_URL}
        aria-label="Chat with CredSettle on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center rounded-full bg-[#0C9A5A] text-white shadow-[0_18px_36px_rgba(12,154,90,0.28)] transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(12,154,90,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#0C9A5A]"
        style={{ width: '62px', height: '62px' }}
      >
        <FontAwesomeIcon icon={faWhatsapp} className="h-7 w-7" />
      </Link>
    </div>
  );
}


