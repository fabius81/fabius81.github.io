import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Fabio Di Paolo | Enterprise Technology & Customer Solutions",
  description:
    "Professional portfolio of Fabio Di Paolo, Senior Solution Consultant focused on enterprise technology, technical delivery and customer success.",
  metadataBase: new URL("https://fabius81.github.io"),
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
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
