'use client';

/**
 * Lazy reCAPTCHA v3 provider.
 *
 * The previous provider (react-google-recaptcha-v3) injected Google's ~350 KB reCAPTCHA script on
 * every page view, although it is only needed when a form is submitted. This provider keeps the same
 * `useGoogleReCaptcha()` → `{ executeRecaptcha }` interface, but loads the script only when a visitor
 * focuses a form field (so it is ready by submit time) or, failing that, on the first submit.
 */
import { createContext, useCallback, useContext, useEffect, useMemo, useRef } from 'react';

type ExecuteRecaptcha = (action?: string) => Promise<string>;

interface ReCaptchaContextValue {
  executeRecaptcha?: ExecuteRecaptcha;
}

interface GrecaptchaApi {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

const ReCaptchaContext = createContext<ReCaptchaContextValue>({});

function getGrecaptcha(): GrecaptchaApi | undefined {
  return (window as unknown as { grecaptcha?: GrecaptchaApi }).grecaptcha;
}

export default function ReCaptchaProvider({ children }: { children: React.ReactNode }) {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const loadingRef = useRef<Promise<void> | null>(null);

  const loadScript = useCallback((): Promise<void> => {
    if (!siteKey) return Promise.reject(new Error('NEXT_PUBLIC_RECAPTCHA_SITE_KEY is not set'));
    if (loadingRef.current) return loadingRef.current;

    loadingRef.current = new Promise<void>((resolve, reject) => {
      const existing = getGrecaptcha();
      if (existing?.execute) {
        existing.ready(() => resolve());
        return;
      }
      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(siteKey)}`;
      script.async = true;
      script.defer = true;
      script.onload = () => {
        const api = getGrecaptcha();
        if (api) api.ready(() => resolve());
        else reject(new Error('reCAPTCHA loaded without grecaptcha'));
      };
      script.onerror = () => {
        loadingRef.current = null; // allow a retry on the next attempt
        reject(new Error('reCAPTCHA script failed to load'));
      };
      document.head.appendChild(script);
    });
    return loadingRef.current;
  }, [siteKey]);

  // Warm up as soon as someone starts filling in any form, so submit is not delayed.
  useEffect(() => {
    if (!siteKey) return;
    const onFocusIn = (event: FocusEvent) => {
      const target = event.target as HTMLElement | null;
      if (target?.closest('form, input, textarea, select')) {
        loadScript().catch(() => undefined);
        document.removeEventListener('focusin', onFocusIn);
      }
    };
    document.addEventListener('focusin', onFocusIn);
    return () => document.removeEventListener('focusin', onFocusIn);
  }, [siteKey, loadScript]);

  const executeRecaptcha = useCallback<ExecuteRecaptcha>(
    async (action = 'submit') => {
      await loadScript();
      const api = getGrecaptcha();
      if (!api || !siteKey) throw new Error('reCAPTCHA is not available');
      return api.execute(siteKey, { action });
    },
    [loadScript, siteKey]
  );

  const value = useMemo<ReCaptchaContextValue>(
    () => ({ executeRecaptcha: siteKey ? executeRecaptcha : undefined }),
    [siteKey, executeRecaptcha]
  );

  return <ReCaptchaContext.Provider value={value}>{children}</ReCaptchaContext.Provider>;
}

/** Same shape as react-google-recaptcha-v3's hook: `{ executeRecaptcha }`. */
export function useGoogleReCaptcha(): ReCaptchaContextValue {
  return useContext(ReCaptchaContext);
}
