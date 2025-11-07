import type { Metadata } from "next";
import Script from "next/script";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CredSettle - India's Leading Legal Loan Settlement Company | RBI Compliant Debt Resolution",
  description: "Get legal loan settlement services in India. CredSettle helps you settle credit cards, personal loans, business loans & more. Stop harassment, get RBI-compliant OTS solutions. Achieve debt freedom legally.",
  keywords: [
    "loan settlement",
    "debt settlement",
    "credit card settlement",
    "personal loan settlement",
    "RBI compliant settlement",
    "loan settlement company India",
    "debt resolution",
    "OTS settlement",
    "loan settlement services",
    "stop recovery harassment"
  ],
  authors: [{ name: "CredSettle" }],
  creator: "CredSettle",
  publisher: "CredSettle",
  metadataBase: new URL("https://www.credsettle.com"),
  alternates: {
    canonical: "https://www.credsettle.com",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.credsettle.com",
    siteName: "CredSettle",
    title: "CredSettle - India's Leading Legal Loan Settlement Company",
    description: "Get legal loan settlement services in India. CredSettle helps you settle credit cards, personal loans, business loans & more. Stop harassment, get RBI-compliant OTS solutions.",
    images: [
      {
        url: "https://www.credsettle.com/credsettle-logo.svg",
        width: 1200,
        height: 630,
        alt: "CredSettle - Legal Loan Settlement Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CredSettle - India's Leading Legal Loan Settlement Company",
    description: "Get legal loan settlement services in India. CredSettle helps you settle credit cards, personal loans, business loans & more. Stop harassment, get RBI-compliant OTS solutions.",
    images: ["https://www.credsettle.com/credsettle-logo.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '477133588597367');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=477133588597367&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
