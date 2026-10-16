import Script from "next/script";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabio Di Paolo | Enterprise Technology & Customer Solutions",
  description:
    "Professional portfolio of Fabio Di Paolo, Senior Solution Consultant focused on enterprise technology, technical delivery and customer success.",
  metadataBase: new URL("https://fabius81.github.io"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Fabio Di Paolo | Professional Portfolio",
    description:
      "Senior Solution Consultant bridging enterprise customers, business needs and engineering teams.",
    type: "website",
    locale: "en_US",
    alternateLocale: "it_IT"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script>
          id="google-tag-manager"
          strategy="beforeInteractive"
        >
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TG6QRMZ');
          `}
        </script>
      </head>
      <body>
  		{/* Google Tag Manager (noscript) */}
  		<noscript>
    		<iframe
      			src="https://www.googletagmanager.com/ns.html?id=GTM-TG6QRMZ"
      			height="0"
      			width="0"
      			style={{ display: "none", visibility: "hidden" }}
      			title="Google Tag Manager"
    		/>
		</noscript>
  		{/* End Google Tag Manager */}
		{children}
		</body>
    </html>
  );
}
