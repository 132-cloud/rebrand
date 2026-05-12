import type { Metadata } from "next";
import Script from "next/script";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/layout/CookieConsent";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Nymbus | Modern Core Banking & Digital Solutions",
    template: "%s | Nymbus",
  },
  description:
    "Nymbus' cloud-native Banking-as-a-Service model means you can skip a core conversion. We'll help you establish a new digital brand under an existing charter.",
  keywords:
    "banking software, fintech, digital banking, Nymbus, digital banking platform, banking-as-a-service",
  robots: {
    index: false,
    follow: false,
  },
  metadataBase: new URL("https://www.nymbus.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.nymbus.com",
    siteName: "Nymbus",
    images: [
      {
        url: "/images/openGraphImage/nymbus-niche-is-the-new-local.png",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@NymbusCore",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Adobe Fonts (Typekit) */}
        <link rel="stylesheet" href="https://use.typekit.net/kuk6noc.css" />
        <link rel="stylesheet" href="https://use.typekit.net/bpi2fje.css" />
      </head>
      <body className="bg-charcoal-dark text-white/80 font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TM7M5PM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />

        {/* Google Tag Manager */}
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TM7M5PM');`,
          }}
        />
      </body>
    </html>
  );
}
