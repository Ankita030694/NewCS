'use client';

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

export default function ReCaptchaProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  
  return (
    <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey || 'NOT_DEFINED'}>
      {children}
    </GoogleReCaptchaProvider>
  );
}
